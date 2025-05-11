<template>
  <div class="auth-page">
    <div class="auth-box">
      <h2>인증 메일이 발송 되었습니다.</h2>
      <div class="desc">
        회원 가입을 위해<br>
        메일함을 확인 후 24시간 이내에<br>
        인증을 완료해주세요.
      </div>
      <div class="email-box">
        <div>대표이메일</div>
        <b>{{ maskedEmail }}</b>
      </div>
      <button class="main-btn" @click="goLogin">로그인</button>
      <button class="sub-btn" @click="goBack">돌아가기</button>
      <div class="resend">
        <span>이메일을 받지 못하셨나요?</span>
        <a href="#">이메일 재발송</a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()
const router = useRouter()
const email = route.query.email as string || ''

const maskedEmail = computed(() => {
  if (!email) return ''
  return email.replace(/(.{2}).+(@.+)/, '$1xxxxx$2')
})

const goLogin = () => router.push('/login')
const goBack = () => router.push('/register')
</script>

<style scoped>
.auth-page { display: flex; justify-content: center; align-items: flex-start; min-height: 80vh; background: #fcf8ee; }
.auth-box { margin-top: 48px; background: #fff; border-radius: 16px; box-shadow: 0 8px 32px rgba(0,0,0,0.08); padding: 48px 32px 32px 32px; min-width: 420px; display: flex; flex-direction: column; align-items: center; }
.auth-box h2 { font-size: 1.5rem; margin-bottom: 1.2rem; font-weight: 600; }
.auth-box .desc { color: #222; font-size: 1.1rem; margin-bottom: 1.2rem; text-align: center; }
.email-box { background: #f5f7fa; border-radius: 8px; padding: 1.2em 2em; margin-bottom: 1.2em; width: 100%; text-align: center; }
.email-box b { font-size: 1.1em; }
.main-btn { width: 100%; padding: 1rem; background: #222; color: #fff; border: none; border-radius: 24px; font-size: 1.1rem; font-weight: 600; margin-bottom: 0.7rem; cursor: pointer; transition: background 0.2s; }
.sub-btn { width: 100%; padding: 1rem; background: #fff; color: #222; border: 1px solid #222; border-radius: 24px; font-size: 1.1rem; font-weight: 600; margin-bottom: 1.2rem; cursor: pointer; }
.resend { width: 100%; text-align: right; color: #888; font-size: 0.95rem; }
.resend a { color: #222; text-decoration: underline; margin-left: 0.5em; }
</style> 