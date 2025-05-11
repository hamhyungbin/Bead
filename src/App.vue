<template>
  <div class="app-container">
    <!-- Background area for PC view -->
    <div class="background-area" v-if="!isMobile">
      <img src="@/assets/background.jpg" alt="Background" class="background-image" />
    </div>
    
    <!-- Main content area -->
    <div class="main-content" :class="{ 'mobile-view': isMobile }">
      <Header :user="user" @logout="handleLogout" />
      <router-view @login="handleLogin" />
      <Footer />
    </div>

    <!-- Mobile navigation -->
    <MobileNav v-if="isMobile" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import MobileNav from '@/components/MobileNav.vue'
import { useWindowSize } from '@vueuse/core'
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'
import { auth } from '@/firebase'
import type { User } from 'firebase/auth'

const { width } = useWindowSize()
const isMobile = ref(false)
const user = ref<User | null | undefined>(undefined)

onMounted(() => {
  isMobile.value = width.value <= 768
  auth.onAuthStateChanged(u => {
    user.value = u
  })
})

function handleLogin(u: User) {
  user.value = u
}
function handleLogout() {
  user.value = null
}
</script>

<style scoped>
.app-container {
  min-height: 100vh;
  display: flex;
  position: relative;
}

.background-area {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  overflow: hidden;
}

.main-content {
  flex: 1;
  max-width: 100%;
  margin: 0 auto;
  background-color: #f9f6f1;
  min-height: 100vh;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
}

.mobile-view {
  max-width: 100%;
  box-shadow: none;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style> 