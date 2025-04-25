<template>
  <nav class="mobile-nav" :class="roleClass">
    <router-link v-for="item in navItems" :key="item.path" :to="item.path" class="nav-item">
      <i :class="item.icon"></i>
      <span>{{ item.label }}</span>
    </router-link>
  </nav>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useAuthStore } from '@/stores/auth'

const authStore = useAuthStore()

interface NavItem {
  path: string
  label: string
  icon: string
}

const hostNavItems: NavItem[] = [
  { path: '/search', label: '검색', icon: 'bi bi-search' },
  { path: '/events', label: '이벤트 관리', icon: 'bi bi-calendar-event' },
  { path: '/spaces', label: '매장 관리', icon: 'bi bi-shop' },
  { path: '/community', label: '커뮤니티', icon: 'bi bi-people' },
  { path: '/profile', label: '프로필', icon: 'bi bi-person' }
]

const artistNavItems: NavItem[] = [
  { path: '/search', label: '검색', icon: 'bi bi-search' },
  { path: '/events', label: '이벤트 관리', icon: 'bi bi-calendar-event' },
  { path: '/portfolio', label: '작품 관리', icon: 'bi bi-collection' },
  { path: '/community', label: '커뮤니티', icon: 'bi bi-people' },
  { path: '/profile', label: '프로필', icon: 'bi bi-person' }
]

const consumerNavItems: NavItem[] = [
  { path: '/search', label: '검색', icon: 'bi bi-search' },
  { path: '/wishlist', label: '위시리스트', icon: 'bi bi-heart' },
  { path: '/bookings', label: '예약 확인', icon: 'bi bi-ticket' },
  { path: '/community', label: '커뮤니티', icon: 'bi bi-people' },
  { path: '/profile', label: '프로필', icon: 'bi bi-person' }
]

const navItems = computed(() => {
  switch (authStore.userRole) {
    case 'host':
      return hostNavItems
    case 'artist':
      return artistNavItems
    case 'consumer':
      return consumerNavItems
    default:
      return []
  }
})

const roleClass = computed(() => {
  switch (authStore.userRole) {
    case 'host':
      return 'host-theme'
    case 'artist':
      return 'artist-theme'
    case 'consumer':
      return 'consumer-theme'
    default:
      return ''
  }
})
</script>

<style scoped>
.mobile-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  padding: 8px 0;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

.nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: #666;
  font-size: 0.8rem;
}

.nav-item i {
  font-size: 1.2rem;
  margin-bottom: 4px;
}

.nav-item.router-link-active {
  color: var(--theme-color);
}

.host-theme {
  --theme-color: #6f42c1; /* Purple */
}

.artist-theme {
  --theme-color: #dc3545; /* Red */
}

.consumer-theme {
  --theme-color: #198754; /* Green */
}
</style> 