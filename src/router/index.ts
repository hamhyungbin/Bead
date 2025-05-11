import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import RegisterView from '@/views/RegisterView.vue'
import RegisterVerifyView from '@/views/RegisterVerifyView.vue'
import EventsView from '@/views/EventsView.vue'
import PlacesView from '@/views/PlacesView.vue'
import ArtistsView from '@/views/ArtistsView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/login', component: LoginView },
  { path: '/register', component: RegisterView },
  { path: '/register/verify', name: 'register-verify', component: RegisterVerifyView },
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue')
  },
  {
    path: '/search',
    name: 'search',
    component: () => import('@/views/SearchView.vue'),
  },
  {
    path: '/events',
    name: 'events',
    component: EventsView,
  },
  {
    path: '/places',
    name: 'places',
    component: PlacesView,
  },
  {
    path: '/artists',
    name: 'artists',
    component: ArtistsView,
  },
  {
    path: '/spaces',
    name: 'spaces',
    component: () => import('@/views/SpacesView.vue'),
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: () => import('@/views/PortfolioView.vue'),
  },
  {
    path: '/wishlist',
    name: 'wishlist',
    component: () => import('@/views/WishlistView.vue'),
    meta: { 
      requiresAuth: true,
      allowedRoles: ['consumer']
    }
  },
  {
    path: '/bookings',
    name: 'bookings',
    component: () => import('@/views/BookingsView.vue'),
    meta: { 
      requiresAuth: true,
      allowedRoles: ['consumer']
    }
  },
  {
    path: '/community',
    name: 'community',
    component: () => import('@/views/CommunityView.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('@/views/ProfileView.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/artists/:id',
    name: 'ArtistDetail',
    component: () => import('@/views/ArtistDetailView.vue')
  },
  {
    path: '/places/:id',
    name: 'PlaceDetail',
    component: () => import('@/views/PlaceDetailView.vue')
  },
  {
    path: '/events/:id',
    name: 'EventDetail',
    component: () => import('@/views/EventDetailView.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/views/NotFoundView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, _from, next) => {
  const authStore = useAuthStore()
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  const requiresGuest = to.matched.some(record => record.meta.requiresGuest)
  const allowedRoles = to.meta.allowedRoles as string[] | undefined

  if (requiresAuth && !authStore.isAuthenticated) {
    next('/login')
  } else if (requiresGuest && authStore.isAuthenticated) {
    next({ name: 'home' })
  } else if (allowedRoles && !allowedRoles.includes(authStore.userRole || '')) {
    next({ name: 'home' })
  } else {
    next()
  }
})

export default router 