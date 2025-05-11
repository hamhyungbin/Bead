<template>
  <div class="main-page">
    <section class="main-hero">
      <div class="hero-slider">
        <button class="arrow left" @click="prevSlide">&#9664;</button>
        <img :src="currentFloatImg" alt="Main Slide" class="hero-img" />
        <button class="arrow right" @click="nextSlide">&#9654;</button>
        <div class="hero-text-overlay">
          <h1>예술과 공간을 연결합니다</h1>
          <h2>Space Meets Art</h2>
          <div class="hero-buttons">
            <button @click="goToEvents" class="discover-btn">Discover Event</button>
            <button @click="goToPlaces" class="find-space-btn">Find a Space</button>
          </div>
        </div>
      </div>
    </section>
    <section class="about-bead">
      <h2>About BEAD</h2>
      <div class="about-items">
        <div class="about-item">
          <img src="@/assets/Artists.png" alt="Artists Icon" class="about-icon" />
          <h3>Artists</h3>
          <p>Independent artists can easily find audiences and venues for their performances.</p>
        </div>
        <div class="about-item">
          <img src="@/assets/Spaces.png" alt="Spaces Icon" class="about-icon" />
          <h3>Spaces</h3>
          <p><em>Unused spaces are utilized for</em> exhibitions and performances.</p>
        </div>
        <div class="about-item">
          <img src="@/assets/Community.png" alt="Community Icon" class="about-icon" />
          <h3>Community</h3>
          <p>We foster a vibrant community for both artists and art-lovers.</p>
        </div>
      </div>
    </section>
    <section class="featured">
      <h2>Featured Events/Artists</h2>
      <div class="featured-list">
        <div class="featured-item"><img :src="featuredImgs[0]" alt="Featured 1" /></div>
        <div class="featured-item"><img :src="featuredImgs[1]" alt="Featured 2" /></div>
        <div class="featured-item"><img :src="featuredImgs[2]" alt="Featured 3" /></div>
      </div>
    </section>
    <!-- <LoginModal v-if="showLogin" @close="closeLogin" /> -->
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
import float1 from '@/assets/float1.jpg'
import float2 from '@/assets/float2.jpg'
import featured1 from '@/assets/Featured-1.jpg'
import featured2 from '@/assets/Featured-2.jpg'
import featured3 from '@/assets/Featured-3.jpg'
import { useRouter } from 'vue-router'

const floatImgs = [float1, float2]
const featuredImgs = [featured1, featured2, featured3]
const currentSlide = ref(0)
const router = useRouter()

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % floatImgs.length
}
const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + floatImgs.length) % floatImgs.length
}

function goToEvents() {
  router.push('/events')
}
function goToPlaces() {
  router.push('/places')
}

onMounted(() => {
  // resetTimer()
})
onUnmounted(() => {
  // if (timer) clearInterval(timer)
})

const currentFloatImg = computed(() => floatImgs[currentSlide.value])
</script>

<style scoped>
.main-page {
  background: #f9f6f1;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
.main-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 3rem 1rem 3rem;
  background: #f9f6f1;
}
.logo {
  font-size: 2rem;
  font-weight: bold;
}
.main-nav a {
  margin: 0 1.2rem;
  color: #222;
  text-decoration: none;
  font-size: 1.1rem;
}
.login-link {
  color: #2b2b2b;
  font-weight: 500;
}
.main-hero {
  min-height: 400px;
  width: 100vw;
  position: relative;
  background: none;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
.hero-slider {
  width: 100vw;
  height: 400px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.hero-img {
  width: 100vw;
  height: 400px;
  object-fit: cover;
  display: block;
}
.arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
  background: rgba(0,0,0,0.25);
  border: none;
  color: #fff;
  font-size: 2.2rem;
  padding: 0.2rem 1rem;
  border-radius: 50%;
  cursor: pointer;
  transition: background 0.2s;
}
.arrow.left {
  left: 2vw;
}
.arrow.right {
  right: 2vw;
}
.arrow:hover {
  background: rgba(0,0,0,0.45);
}
.hero-text-overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0,0,0,0.45);
  padding: 2.5rem 2rem;
  border-radius: 1.5rem;
  color: #fff;
  text-align: center;
  z-index: 3;
  min-width: 350px;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  box-sizing: border-box;
}
.hero-text-overlay h1 {
  font-size: 2.2rem;
  margin-bottom: 0.7rem;
}
.hero-text-overlay h2 {
  font-size: 1.3rem;
  margin-bottom: 1.2rem;
}
.hero-buttons button {
  margin: 1.5rem 1rem 0 1rem;
  padding: 0.8rem 2.2rem;
  border-radius: 2rem;
  border: none;
  background: #f9f6f1;
  color: #222;
  font-size: 1.1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s;
}
.hero-buttons button:hover {
  background: #e2dbce;
}
.about-bead {
  padding: 3rem 0 2rem 0;
  text-align: center;
}
.about-items {
  display: flex;
  justify-content: center;
  gap: 3rem;
  margin-top: 2rem;
}
.about-item {
  background: #fff;
  border-radius: 1.2rem;
  padding: 2rem 1.5rem;
  box-shadow: 0 2px 12px rgba(0,0,0,0.04);
  width: 220px;
}
.about-item .icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}
.about-icon {
  width: 56px;
  height: 56px;
  object-fit: contain;
  margin-bottom: 1rem;
}
.featured {
  padding: 2rem 0 3rem 0;
  text-align: center;
}
.featured-list {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 1.5rem;
}
.featured-item {
  width: 200px;
  height: 140px;
  background: #222;
  border-radius: 1rem;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}
.featured-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 1rem;
}

@media (max-width: 900px) {
  .main-hero,
  .hero-slider,
  .hero-img {
    height: 260px;
    min-height: 180px;
    max-height: 320px;
  }
  .hero-img {
    width: 100vw;
    height: 260px;
  }
  .hero-text-overlay {
    min-width: 0;
    padding: 1.2rem 0.5rem;
    font-size: 0.95rem;
  }
  .hero-text-overlay h1 {
    font-size: 1.3rem;
  }
  .hero-text-overlay h2 {
    font-size: 1rem;
  }
  .hero-buttons button {
    margin: 1rem 0.5rem 0 0.5rem;
    padding: 0.6rem 1.2rem;
    font-size: 1rem;
  }
  .about-items {
    flex-direction: column;
    gap: 1.2rem;
    align-items: center;
  }
  .about-item {
    width: 90vw;
    min-width: 0;
    padding: 1.2rem 0.5rem;
  }
  .about-icon {
    width: 40px;
    height: 40px;
  }
  .featured-list {
    flex-direction: column;
    gap: 1rem;
    align-items: center;
  }
  .featured-item {
    width: 90vw;
    height: 120px;
    min-width: 0;
  }
}

@media (max-width: 600px) {
  .main-page {
    padding: 0;
  }
  .main-hero,
  .hero-slider,
  .hero-img {
    height: 160px;
    min-height: 120px;
    max-height: 200px;
  }
  .hero-img {
    width: 100vw;
    height: 160px;
  }
  .hero-text-overlay {
    padding: 0.7rem 0.2rem;
    font-size: 0.85rem;
    border-radius: 0.7rem;
  }
  .hero-text-overlay h1 {
    font-size: 1.1rem;
  }
  .hero-text-overlay h2 {
    font-size: 0.9rem;
  }
  .hero-buttons button {
    margin: 0.7rem 0.2rem 0 0.2rem;
    padding: 0.5rem 0.7rem;
    font-size: 0.95rem;
    border-radius: 1.2rem;
  }
  .about-item {
    width: 98vw;
    padding: 0.8rem 0.2rem;
    font-size: 0.95rem;
  }
  .about-icon {
    width: 32px;
    height: 32px;
  }
  .featured-item {
    width: 98vw;
    height: 80px;
  }
}
</style> 