<template>
  <header class="main-header">
    <div class="logo">BEAD</div>
    <nav class="main-nav desktop-nav">
      <router-link to="/">Home</router-link>
      <router-link to="/events">Events</router-link>
      <router-link to="/artists">Artists</router-link>
      <router-link to="/places">Places</router-link>
      <router-link to="/community">Community</router-link>
      <router-link v-if="!props.user" to="/login" class="login-link">Log In</router-link>
      <span v-else class="user-name">{{ username }}</span>
      <button v-if="props.user" class="logout-btn" @click="logout">Log Out</button>
    </nav>
    <!-- 햄버거 버튼 (모바일에서만 보임) -->
    <button class="hamburger" @click="showMenu = !showMenu">
      <span></span><span></span><span></span>
    </button>
    <!-- 모바일 메뉴 -->
    <div class="mobile-menu" v-if="showMenu">
      <router-link to="/" @click="closeMenu">Home</router-link>
      <router-link to="/events" @click="closeMenu">Events</router-link>
      <router-link to="/artists" @click="closeMenu">Artists</router-link>
      <router-link to="/places" @click="closeMenu">Places</router-link>
      <router-link to="/community" @click="closeMenu">Community</router-link>
      <router-link to="/login" @click="closeMenu">Log In</router-link>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { computed } from 'vue'
import { auth } from '@/firebase'

const props = defineProps<{ user?: Record<string, any> | null }>()
const emit = defineEmits(['logout'])

const username = computed(() => {
  if (!props.user?.email) return ''
  return props.user.email.split('@')[0]
})

const logout = async () => {
  await auth.signOut()
  emit('logout')
}

const showMenu = ref(false)
function closeMenu() {
  showMenu.value = false
}
</script>

<style scoped>
.main-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 3rem 1rem 3rem;
  background: #f9f6f1;
  position: relative;
}
.desktop-nav {
  display: flex;
  gap: 1.2rem;
}
.hamburger {
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 1001;
}
.hamburger span {
  display: block;
  width: 28px;
  height: 4px;
  background: #222;
  margin: 4px 0;
  border-radius: 2px;
  transition: 0.3s;
}
.logo {
  font-size: 2.5rem;
  font-weight: bold;
  letter-spacing: 0.1em;
  color: #6edb7b;
}
.logo span:nth-child(2) { color: #f7c04a; }
.logo span:nth-child(3) { color: #f47b7b; }
.logo span:nth-child(4) { color: #a18fff; }
nav {
  display: flex;
  gap: 32px;
  align-items: center;
}
nav a {
  color: #222;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 500;
  transition: color 0.2s;
}
nav a.router-link-exact-active,
nav a.router-link-active {
  font-weight: bold;
  color: #222;
  text-decoration: underline;
}
.login-link {
  color: #1a2340;
  font-weight: 600;
  margin-left: 24px;
}
.user-name {
  margin-left: 24px;
  font-weight: 600;
  color: #1a2340;
}
.logout-btn {
  margin-left: 12px;
  background: none;
  border: none;
  color: #1a2340;
  font-weight: 600;
  cursor: pointer;
}
.mobile-menu {
  position: absolute;
  top: 100%;
  right: 0;
  left: 0;
  background: #fff;
  box-shadow: 0 2px 12px rgba(0,0,0,0.08);
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1000;
  padding: 1.5rem 0;
  gap: 1.2rem;
}
@media (max-width: 900px) {
  .desktop-nav {
    display: none;
  }
  .hamburger {
    display: flex;
  }
}
</style>
