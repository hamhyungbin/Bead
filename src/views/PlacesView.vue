<template>
    <div class="places-page">
      <h1>Places</h1>
      <div class="search-box">
        <input type="text" placeholder="Search places" v-model="search" />
      </div>
      <div class="places-list">
        <div class="place-card" v-for="place in places" :key="place.name">
          <img :src="place.img" :alt="place.name" />
          <div class="place-info">
            <div class="place-name">{{ place.name }}</div>
            <div class="place-location">{{ place.location }}</div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  const search = ref('')
  const places = [
    { name: 'Loft Studio', location: 'Seoul', img: '/assets/loft.jpg' },
    { name: 'Harmony Cafe', location: 'Busan', img: '/assets/cafe.jpg' },
    { name: 'Blue Hall', location: 'Incheon', img: '/assets/hall.jpg' }
  ]
  </script>
  
  <style scoped>
  .places-page {
    max-width: 900px;
    margin: 0 auto;
    padding: 48px 0 32px 0;
    font-family: 'Georgia', serif;
  }
  h1 {
    font-size: 3rem;
    font-weight: 500;
    text-align: center;
    margin-bottom: 1.2em;
  }
  .search-box {
    display: flex;
    justify-content: center;
    margin-bottom: 2em;
  }
  .search-box input {
    width: 320px;
    padding: 0.7em 1.2em;
    border: 1.5px solid #b9b1a6;
    border-radius: 2em;
    font-size: 1.1em;
    background: #f8f3e7;
  }
  .places-list {
    display: flex;
    gap: 2em;
    justify-content: center;
  }
  .place-card {
    background: #fff;
    border-radius: 16px;
    box-shadow: 0 4px 16px rgba(0,0,0,0.06);
    overflow: hidden;
    width: 240px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .place-card img {
    width: 100%;
    height: 160px;
    object-fit: cover;
  }
  .place-info {
    padding: 1em 1.2em 1.2em 1.2em;
  }
  .place-name {
    font-size: 1.2em;
    font-weight: 600;
    color: #222;
    margin-bottom: 0.2em;
  }
  .place-location {
    font-size: 1em;
    color: #888;
  }
  </style>