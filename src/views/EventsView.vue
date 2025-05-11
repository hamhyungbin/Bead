<template>
  <div class="events-page">
    <h1>Events</h1>
    <div class="search-box">
      <input type="text" placeholder="Search events" v-model="search" />
    </div>
    <div class="calendar-section">
      <div class="calendar-header">
        <span class="calendar-month">{{ calendarMonth }}</span>
        <span class="calendar-arrow">&gt;</span>
      </div>
      <table class="calendar-table">
        <thead>
          <tr>
            <th v-for="d in days" :key="d">{{ d }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(week, i) in calendar" :key="i">
            <td v-for="(day, j) in week" :key="j">
              <span :class="{ today: day === date }">{{ day || '' }}</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <hr class="divider" />
    <h2 class="upcoming-title">Upcoming Events</h2>
    <div class="event-list">
      <div class="event-card" v-for="event in upcomingEvents" :key="event.id" @click="goToEvent(event)">
        <div class="event-date">
          <div>{{ event.date }}</div>
        </div>
        <div class="event-info">
          <div class="event-title">{{ event.artist }}</div>
          <div class="event-location">{{ event.place }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

// 오늘 날짜 정보
const today = new Date()
const year = today.getFullYear()
const month = today.getMonth() // 0-indexed
const date = today.getDate()

// 달력용 월 이름
const monthNames = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
]
const calendarMonth = `${monthNames[month]} ${year}`

// 달력 요일
const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S']

// 이번 달 달력 데이터 생성
function getCalendar(year: number, month: number) {
  const firstDay = new Date(year, month, 1).getDay()
  const lastDate = new Date(year, month + 1, 0).getDate()
  const weeks: (number | null)[][] = []
  let week: (number | null)[] = Array(firstDay).fill(null)
  for (let d = 1; d <= lastDate; d++) {
    week.push(d)
    if (week.length === 7) {
      weeks.push(week)
      week = []
    }
  }
  if (week.length) {
    while (week.length < 7) week.push(null)
    weeks.push(week)
  }
  return weeks
}
const calendar = getCalendar(year, month)

// upcomingEvents는 내일/모레 날짜로
function getFutureDate(offset: number): string {
  const d = new Date()
  d.setDate(d.getDate() + offset)
  const yyyy = d.getFullYear()
  const mm = String(d.getMonth() + 1).padStart(2, '0')
  const dd = String(d.getDate()).padStart(2, '0')
  return `${yyyy}-${mm}-${dd}`
}

const upcomingEvents = [
  {
    id: '1',
    date: getFutureDate(1),
    place: 'Loft Studio',
    artist: 'Emily Johnson'
  },
  {
    id: '2',
    date: getFutureDate(2),
    place: 'Harmony Cafe',
    artist: 'David Kim'
  }
]

const router = useRouter()
function goToEvent(event: { id: string }) {
  router.push(`/events/${event.id}`)
}

const search = ref('')
</script>

<style scoped>
.events-page {
  max-width: 600px;
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
.calendar-section {
  margin-bottom: 2em;
}
.calendar-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.5em;
  font-weight: 500;
  margin-bottom: 0.5em;
}
.calendar-month { font-family: 'Georgia', serif; }
.calendar-arrow { font-size: 1.2em; color: #b9b1a6; cursor: pointer; }
.calendar-table {
  width: 100%;
  border-collapse: collapse;
  background: transparent;
}
.calendar-table th, .calendar-table td {
  width: 2.5em;
  height: 2.5em;
  text-align: center;
  font-size: 1.1em;
  font-family: 'Georgia', serif;
  color: #222;
}
.calendar-table td {
  border: none;
}
.calendar-table .today {
  background: #e5dac2;
  border-radius: 50%;
  padding: 0.2em 0.6em;
  color: #222;
}
.divider {
  margin: 2em 0 1em 0;
  border: none;
  border-top: 1.5px solid #b9b1a6;
}
.upcoming-title {
  font-size: 2em;
  font-weight: 500;
  margin-bottom: 1em;
  font-family: 'Georgia', serif;
}
.event-list {
  display: flex;
  flex-direction: column;
  gap: 1em;
}
.event-card {
  display: flex;
  align-items: center;
  border: 1.5px solid #b9b1a6;
  border-radius: 12px;
  padding: 0.8em 1.2em;
  background: #fff;
}
.event-date {
  min-width: 48px;
  text-align: center;
  font-family: 'Georgia', serif;
  color: #b9b1a6;
  font-size: 1.1em;
  margin-right: 1.2em;
}
.event-day {
  font-size: 1.5em;
  color: #222;
  font-weight: 600;
}
.event-info {
  display: flex;
  flex-direction: column;
  gap: 0.2em;
}
.event-title {
  font-size: 1.1em;
  font-weight: 600;
  color: #222;
}
.event-location {
  font-size: 1em;
  color: #888;
}
</style>