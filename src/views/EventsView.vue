<template>
  <div class="events-page">
    <h1>Events</h1>
    <div class="search-box">
      <input type="text" placeholder="Search events" v-model="search" />
    </div>
    <div class="calendar-section">
      <div class="calendar-header">
        <span class="calendar-month">April 2024</span>
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
              <span :class="{ today: day === 16 }">{{ day || '' }}</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <hr class="divider" />
    <h2 class="upcoming-title">Upcoming Events</h2>
    <div class="event-list">
      <div class="event-card" v-for="i in 2" :key="i">
        <div class="event-date">
          <div>Apr</div>
          <div class="event-day">17</div>
        </div>
        <div class="event-info">
          <div class="event-title">Event Title</div>
          <div class="event-location">Event Location</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const search = ref('')
const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S']
// 예시용 달력 데이터 (4월)
const calendar = [
  [null, 1, 2, 3, 4, 5, 6],
  [7, 8, 9, 10, 11, 12, 13],
  [14, 15, 16, 17, 18, 19, 20],
  [21, 22, 23, 23, 24, 25, 26],
  [27, 28, 29, 30, null, null, null]
]
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