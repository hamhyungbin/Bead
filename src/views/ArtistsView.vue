<template>
    <div class="artists-page">
      <h1>Artists</h1>
      <div class="search-box">
        <input type="text" placeholder="Search artists" v-model="search" />
      </div>
      <div class="artists-list">
        <div class="artist-card" v-for="artist in artists" :key="artist.name">
          <img :src="artist.img" :alt="artist.name" />
          <div class="artist-info">
            <div class="artist-name">{{ artist.name }}</div>
            <div class="artist-type">{{ artist.type }}</div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  const search = ref('')
  const artists = [
    { name: 'Emily Johnson', type: 'Visual Art', img: '/assets/emily.jpg' },
    { name: 'David Kim', type: 'Music', img: '/assets/david.jpg' },
    { name: 'Sarah Lee', type: 'Theater', img: '/assets/sarah.jpg' }
  ]
  </script>
  
  <style scoped>
  .artists-page {
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
  .artists-list {
    display: flex;
    gap: 2em;
    justify-content: center;
  }
  .artist-card {
    background: #fff;
    border-radius: 16px;
    box-shadow: 0 4px 16px rgba(0,0,0,0.06);
    overflow: hidden;
    width: 240px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .artist-card img {
    width: 100%;
    height: 160px;
    object-fit: cover;
  }
  .artist-info {
    padding: 1em 1.2em 1.2em 1.2em;
  }
  .artist-name {
    font-size: 1.2em;
    font-weight: 600;
    color: #222;
    margin-bottom: 0.2em;
  }
  .artist-type {
    font-size: 1em;
    color: #888;
  }
  </style>