<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
const eventId = route.params.id

const events = [
  {
    id: '1',
    date: '2024-04-17',
    place: {
      name: 'Loft Studio',
      location: 'Seoul, South Korea',
      img: '/place icon.png'
    },
    artists: [
      { name: 'Emily Johnson', img: '/person icon.png' }
    ],
    desc: 'BEAD에서 Emily Johnson이 Loft Studio에서 공연합니다. 멋진 무대를 기대하세요!'
  },
  {
    id: '2',
    date: '2024-04-18',
    place: {
      name: 'Harmony Cafe',
      location: 'Busan, South Korea',
      img: '/place icon.png'
    },
    artists: [
      { name: 'David Kim', img: '/person icon.png' }
    ],
    desc: 'BEAD에서 David Kim이 Harmony Cafe에서 공연합니다. 많은 관심 부탁드립니다!'
  }
]

const event = events.find(e => e.id === eventId)
</script>

<template>
  <div v-if="event" class="place-detail">
    <!-- 메인 이미지(장소) -->
    <div class="place-hero">
      <div class="main-img">
        <img :src="event.place.img" alt="place" />
      </div>
      <!-- sub 이미지(아티스트들) -->
      <div class="sub-imgs">
        <img v-for="(artist, i) in event.artists" :key="i" :src="artist.img" :alt="artist.name" />
      </div>
      <h1 class="place-title">{{ event.place.name }}</h1>
      <div class="place-location">{{ event.place.location }}</div>
    </div>

    <!-- 공연 정보 -->
    <div class="place-summary">
      <div>
        <b>공연 아티스트:</b>
        <span v-for="(artist, i) in event.artists" :key="i">{{ artist.name }}<span v-if="i < event.artists.length - 1">, </span></span>
      </div>
      <div><b>공연 날짜:</b> {{ event.date }}</div>
    </div>

    <!-- 예매/공연 안내 -->
    <div class="place-booking">
      <div class="price">무료 공연 (BEAD 자체 예매)</div>
      <button class="book-btn">예약하기</button>
    </div>

    <!-- 공연 설명 -->
    <div class="place-desc">
      <h2>공연 안내</h2>
      <p>{{ event.desc }}</p>
    </div>
  </div>
  <div v-else>
    <p>이벤트 정보를 찾을 수 없습니다.</p>
  </div>
</template>

<style scoped>
.place-detail { max-width: 900px; margin: 0 auto; padding: 32px 0; }
.place-hero { display: flex; flex-direction: column; align-items: flex-start; }
.main-img img { width: 220px; height: 220px; object-fit: contain; border-radius: 16px; }
.sub-imgs { display: flex; gap: 8px; margin: 16px 0; }
.sub-imgs img { width: 80px; height: 80px; object-fit: contain; border-radius: 8px; }
.place-title { font-size: 2rem; margin: 16px 0 4px 0; }
.place-location { color: #888; margin-bottom: 16px; }
.place-summary { margin: 16px 0; font-size: 1.1rem; }
.place-booking { background: #fff; border-radius: 12px; box-shadow: 0 2px 8px #eee; padding: 16px; margin: 16px 0; display: flex; align-items: center; gap: 16px; }
.price { font-size: 1.3rem; font-weight: bold; }
.book-btn { background: #ff385c; color: #fff; border: none; border-radius: 8px; padding: 8px 24px; font-size: 1rem; cursor: pointer; }
.place-desc { background: #fff; border-radius: 12px; box-shadow: 0 2px 8px #eee; padding: 24px; margin: 16px 0; }
</style>
