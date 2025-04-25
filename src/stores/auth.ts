import { defineStore } from 'pinia'
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth'
import { doc, setDoc, getDoc } from 'firebase/firestore'
import { getFirestore } from 'firebase/firestore'

interface User {
  uid: string
  email: string
  role: 'host' | 'artist' | 'consumer' | null
  name: string
  profilePicture?: string
  location?: string
  preferences?: {
    genres?: string[]
    venueTypes?: string[]
  }
  verificationStatus?: boolean
}

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null as User | null,
    loading: false,
    error: null as string | null
  }),

  getters: {
    isAuthenticated: (state) => !!state.user,
    userRole: (state) => state.user?.role,
    isVerified: (state) => state.user?.verificationStatus
  },

  actions: {
    async login(email: string, password: string) {
      this.loading = true
      this.error = null
      try {
        const auth = getAuth()
        const userCredential = await signInWithEmailAndPassword(auth, email, password)
        const userDoc = await getDoc(doc(getFirestore(), 'users', userCredential.user.uid))
        
        if (userDoc.exists()) {
          this.user = {
            uid: userCredential.user.uid,
            email: userCredential.user.email!,
            ...userDoc.data()
          } as User
        }
      } catch (error: any) {
        this.error = error.message
        throw error
      } finally {
        this.loading = false
      }
    },

    async register(email: string, password: string, name: string, role: 'host' | 'artist' | 'consumer') {
      this.loading = true
      this.error = null
      try {
        const auth = getAuth()
        const userCredential = await createUserWithEmailAndPassword(auth, email, password)
        
        const userData = {
          uid: userCredential.user.uid,
          email,
          name,
          role,
          verificationStatus: false,
          createdAt: new Date()
        }

        await setDoc(doc(getFirestore(), 'users', userCredential.user.uid), userData)
        
        this.user = userData as User
      } catch (error: any) {
        this.error = error.message
        throw error
      } finally {
        this.loading = false
      }
    },

    async logout() {
      this.loading = true
      try {
        const auth = getAuth()
        await signOut(auth)
        this.user = null
      } catch (error: any) {
        this.error = error.message
        throw error
      } finally {
        this.loading = false
      }
    },

    async updateProfile(updates: Partial<User>) {
      if (!this.user) return

      try {
        await setDoc(
          doc(getFirestore(), 'users', this.user.uid),
          { ...updates },
          { merge: true }
        )
        
        this.user = { ...this.user, ...updates }
      } catch (error: any) {
        this.error = error.message
        throw error
      }
    }
  }
}) 