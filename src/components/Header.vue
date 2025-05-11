<template>
  <header class="bead-header">
    <div class="logo">BEAD</div>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/events">Events</router-link>
      <router-link to="/artists">Artists</router-link>
      <router-link to="/places">Places</router-link>
      <router-link to="/community">Community</router-link>
      <template v-if="user">
        <span class="user-name">{{ username }}</span>
        <button @click="logout" class="logout-btn">Log out</button>
      </template>
      <router-link v-else to="/login" class="login-link">Log In</router-link>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { auth } from '@/firebase'

const props = defineProps({ user: Object })
const emit = defineEmits(['logout'])

const username = computed(() => {
  if (!props.user?.email) return ''
  return props.user.email.split('@')[0]
})

const logout = async () => {
  await auth.signOut()
  emit('logout')
}
</script>

<style scoped>
.bead-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 32px 60px 0 60px;
  background: transparent;
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
</style>
