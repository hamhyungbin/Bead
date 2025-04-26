<template>
  <div class="main-page">
    <header class="main-header">
      <div class="logo">BEAD</div>
      <nav class="main-nav">
        <a href="#">Home</a>
        <a href="#">Upcoming Events</a>
        <a href="#">Artists</a>
        <a href="#">Places</a>
        <a href="#" class="login-link">Log In</a>
      </nav>
    </header>
    <section class="main-hero">
      <div class="hero-text">
        <h1>예술과 공간을 연결합니다</h1>
        <h2>Space Meets Art</h2>
        <div class="hero-buttons">
          <button>Discover Events</button>
          <button>Find a Space</button>
        </div>
      </div>
    </section>
    <section class="about-bead">
      <h2>About BEAD</h2>
      <div class="about-items">
        <div class="about-item">
          <div class="icon">🎤</div>
          <h3>Artists</h3>
          <p>Independent artists can easily find audiences and venues for their performances.</p>
        </div>
        <div class="about-item">
          <div class="icon">🖼️</div>
          <h3>Spaces</h3>
          <p><em>Unused spaces are utilized for</em> exhibitions and performances.</p>
        </div>
        <div class="about-item">
          <div class="icon">🤝</div>
          <h3>Community</h3>
          <p>We foster a vibrant community for both artists and art-lovers.</p>
        </div>
      </div>
    </section>
    <section class="featured">
      <h2>Featured Events/Artists</h2>
      <div class="featured-list">
        <div class="featured-item"></div>
        <div class="featured-item"></div>
        <div class="featured-item"></div>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Footer from '@/components/Footer.vue'
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
  background: url('/hero-bg.jpg') center/cover no-repeat;
  min-height: 340px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #fff;
  position: relative;
}
.hero-text {
  background: rgba(0,0,0,0.45);
  padding: 2.5rem 2rem;
  border-radius: 1.5rem;
  display: inline-block;
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
}
</style> 