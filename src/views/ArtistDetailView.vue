<template>
  <div v-if="artist" class="artist-detail">
    <div class="profile-card">
      <img class="profile-img" src="/person icon.png" alt="artist" />
      <div class="profile-info">
        <h2>{{ artist.name }}</h2>
        <div class="profile-meta">
          <span>활동 경력: {{ artist.career }}년</span>
          <span>평점: {{ artist.rating }}★</span>
        </div>
      </div>
    </div>
    <div class="artist-intro">
      <h3>{{ artist.name }} 님 소개</h3>
      <p>{{ artist.intro }}</p>
      <ul>
        <li>전문 분야: {{ artist.specialty }}</li>
        <li>거주 지역: {{ artist.location }}</li>
        <li>대표 작품: {{ artist.works }}</li>
      </ul>
    </div>
    <div class="artist-reviews">
      <h3>{{ artist.name }} 님의 후기</h3>
      <div v-for="review in artist.reviews" :key="review.id" class="review">
        <p>"{{ review.content }}"</p>
        <span>{{ review.author }} · {{ review.date }}</span>
      </div>
    </div>
  </div>
  <div v-else>
    <p>아티스트 정보를 찾을 수 없습니다.</p>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
const artistId = route.params.id

const artists = [
  {
    id: '1',
    name: 'Emily Johnson',
    career: 5,
    rating: 4.8,
    intro: '현대미술 작가로 다양한 전시 경험이 있습니다.',
    specialty: 'Visual Art',
    location: 'Seoul',
    works: '빛의 조각, 시간의 흐름',
    reviews: [
      { id: 1, content: '정말 멋진 작품이었어요!', author: '영희', date: '2024년 5월' }
    ]
  },
  {
    id: '2',
    name: 'David Kim',
    career: 3,
    rating: 4.7,
    intro: '음악과 예술을 사랑하는 뮤지션입니다.',
    specialty: 'Music',
    location: 'Busan',
    works: '소리의 여행, 리듬의 시간',
    reviews: [
      { id: 1, content: '음악이 너무 감동적이었어요!', author: '민수', date: '2024년 4월' }
    ]
  },
  {
    id: '3',
    name: 'Sarah Lee',
    career: 7,
    rating: 4.9,
    intro: '연극과 무대예술에 열정을 가진 배우입니다.',
    specialty: 'Theater',
    location: 'Incheon',
    works: '무대 위의 삶, 감정의 파도',
    reviews: [
      { id: 1, content: '연기가 정말 인상적이었어요!', author: '지현', date: '2024년 3월' }
    ]
  }
]

const artist = artists.find(a => a.id === artistId)
</script>

<style scoped>
.artist-detail { max-width: 900px; margin: 0 auto; padding: 32px 0; }
.profile-card { display: flex; align-items: center; background: #fff; border-radius: 16px; box-shadow: 0 2px 8px #eee; padding: 24px; }
.profile-img { width: 120px; height: 120px; border-radius: 50%; object-fit: cover; margin-right: 32px; }
.profile-info h2 { margin: 0 0 8px 0; }
.profile-meta { color: #888; font-size: 15px; }
.artist-intro, .artist-reviews { background: #fff; border-radius: 16px; box-shadow: 0 2px 8px #eee; padding: 24px; margin-top: 24px; }
.review { border-top: 1px solid #eee; padding-top: 12px; margin-top: 12px; }
.review:first-child { border-top: none; margin-top: 0; padding-top: 0; }
</style>
