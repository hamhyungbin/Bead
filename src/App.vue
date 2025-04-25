<template>
  <div class="app-container">
    <!-- Background area for PC view -->
    <div class="background-area" v-if="!isMobile">
      <img src="@/assets/background.jpg" alt="Background" class="background-image" />
    </div>
    
    <!-- Main content area -->
    <div class="main-content" :class="{ 'mobile-view': isMobile }">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>

    <!-- Mobile navigation -->
    <MobileNav v-if="isMobile" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import MobileNav from '@/components/MobileNav.vue'
import { useWindowSize } from '@vueuse/core'

const { width } = useWindowSize()
const isMobile = ref(false)

onMounted(() => {
  isMobile.value = width.value <= 768
})
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

.background-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.main-content {
  flex: 1;
  max-width: 768px;
  margin: 0 auto;
  background-color: white;
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