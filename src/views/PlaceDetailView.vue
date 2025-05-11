<template>
  <div v-if="place" class="place-detail">
    <!-- 상단 이미지 및 타이틀 -->
    <div class="place-hero">
      <div class="main-img">
        <img :src="place.mainImg" alt="main" />
      </div>
      <div class="sub-imgs">
        <img v-for="(img, i) in place.subImgs" :key="i" :src="img" alt="sub" />
      </div>
      <h1 class="place-title">{{ place.name }}</h1>
      <div class="place-location">{{ place.location }}</div>
    </div>

    <!-- 요약 정보 -->
    <div class="place-summary">
      <div>최대 공간: {{ place.maxGuests }}명 · {{ place.bedrooms }} 평 · {{ place.bathrooms }} 평 </div>
      <div>★ {{ place.rating }} · 후기 {{ place.reviews.length }}개</div>
    </div>

    <!-- 예약/가격 박스 -->
    <div class="place-booking">
      <div class="price">₩{{ place.price.toLocaleString() }} / 1일</div>
      <button class="book-btn">예약하기</button>
    </div>

    <!-- 설명 -->
    <div class="place-desc">
      <h2>공간 설명</h2>
      <p>{{ place.desc }}</p>
    </div>

    <!-- 편의시설 -->
    <div class="place-amenities">
      <h2>편의시설</h2>
      <ul>
        <li v-for="(amenity, i) in place.amenities" :key="i">{{ amenity }}</li>
      </ul>
    </div>

    <!-- 후기 -->
    <div class="place-reviews">
      <h2>후기</h2>
      <div v-for="review in place.reviews" :key="review.id" class="review">
        <div class="review-author">{{ review.author }}</div>
        <div class="review-content">{{ review.content }}</div>
      </div>
    </div>
  </div>
  <div v-else>
    <p>장소 정보를 찾을 수 없습니다.</p>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
const placeId = route.params.id

const places = [
  {
    id: '1',
    name: 'Loft Studio',
    location: 'Seoul, South Korea',
    mainImg: '/place icon.png',
    subImgs: ['/place icon.png', '/place icon.png', '/place icon.png'],
    maxGuests: 3,
    bedrooms: 1,
    bathrooms: 1,
    price: 120000,
    rating: 4.92,
    desc: '서울 도심에 위치한 감각적인 로프트 스튜디오입니다. 넓은 창과 모던한 인테리어가 특징입니다.',
    amenities: ['Wi-Fi', '주방', '세탁기', '에어컨', '주차장'],
    reviews: [
      { id: 1, author: '영희', content: '정말 멋진 공간이었어요!' },
      { id: 2, author: '민수', content: '위치도 좋고 깨끗해서 만족했습니다.' }
    ]
  },
  {
    id: '2',
    name: 'Harmony Cafe',
    location: 'Busan, South Korea',
    mainImg: '/place icon.png',
    subImgs: ['/place icon.png', '/place icon.png', '/place icon.png'],
    maxGuests: 2,
    bedrooms: 1,
    bathrooms: 1,
    price: 90000,
    rating: 4.85,
    desc: '부산 해운대에 위치한 아늑한 카페입니다. 바다 전망이 아름답습니다.',
    amenities: ['Wi-Fi', '커피머신', '에어컨'],
    reviews: [
      { id: 1, author: '지현', content: '바다 전망이 정말 최고였어요!' }
    ]
  },
  {
    id: '3',
    name: 'Blue Hall',
    location: 'Incheon, South Korea',
    mainImg: '/place icon.png',
    subImgs: ['/place icon.png', '/place icon.png', '/place icon.png'],
    maxGuests: 4,
    bedrooms: 2,
    bathrooms: 2,
    price: 150000,
    rating: 4.9,
    desc: '인천에 위치한 넓고 쾌적한 공연장입니다.',
    amenities: ['Wi-Fi', '주차장', '음향시설'],
    reviews: [
      { id: 1, author: '수진', content: '공연하기에 정말 좋은 공간이었어요!' }
    ]
  }
]

const place = places.find(p => p.id === placeId)
</script>

<style scoped>
.place-detail { max-width: 1000px; margin: 0 auto; padding: 32px 0; }
.place-hero { display: flex; flex-direction: column; align-items: flex-start; }
.main-img img { width: 100%; max-width: 600px; border-radius: 16px; }
.sub-imgs { display: flex; gap: 8px; margin: 8px 0; }
.sub-imgs img { width: 120px; height: 80px; object-fit: cover; border-radius: 8px; }
.place-title { font-size: 2rem; margin: 16px 0 4px 0; }
.place-location { color: #888; margin-bottom: 16px; }
.place-summary { margin: 16px 0; font-size: 1.1rem; }
.place-booking { background: #fff; border-radius: 12px; box-shadow: 0 2px 8px #eee; padding: 16px; margin: 16px 0; display: flex; align-items: center; gap: 16px; }
.price { font-size: 1.3rem; font-weight: bold; }
.book-btn { background: #ff385c; color: #fff; border: none; border-radius: 8px; padding: 8px 24px; font-size: 1rem; cursor: pointer; }
.place-desc, .place-amenities, .place-reviews { background: #fff; border-radius: 12px; box-shadow: 0 2px 8px #eee; padding: 24px; margin: 16px 0; }
.review { border-top: 1px solid #eee; padding-top: 12px; margin-top: 12px; }
.review:first-child { border-top: none; margin-top: 0; padding-top: 0; }
</style>
