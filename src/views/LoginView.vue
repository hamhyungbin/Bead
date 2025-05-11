<template>
  <div class="auth-page">
    <div class="auth-box">
      <h2>로그인</h2>
      <input v-model="email" type="email" placeholder="이메일을 입력하세요" />
      <input v-model="password" type="password" placeholder="비밀번호를 입력하세요" />
      <button class="main-btn" @click="login">이메일로 로그인</button>
      <div class="links">
        <router-link to="/register">회원가입</router-link>
        <span>|</span>
        <a href="#">이메일 찾기</a>
      </div>
      <div class="social-section">
        <div class="social-title">간편로그인</div>
        <div class="social-icons">
          <span class="icon naver"></span>
          <span class="icon kakao"></span>
          <span class="icon google"></span>
          <span class="icon apple"></span>
          <span class="icon facebook"></span>
        </div>
      </div>
      <div class="desc">
        브라우저를 닫아도 로그인이 유지될 수 있습니다. 개인정보 보호를 위해<br>
        공공장소에서 이용 시에는 꼭 로그아웃 해주세요.
      </div>
      <div class="error">{{ error }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { auth } from '@/firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'

const email = ref('')
const password = ref('')
const error = ref('')
const router = useRouter()
const emit = defineEmits(['login'])

const login = async () => {
  if (!email.value || !password.value) {
    error.value = '이메일과 비밀번호를 입력하세요.'
    return
  }
  error.value = ''
  try {
    const result = await signInWithEmailAndPassword(auth, email.value, password.value)
    emit('login', result.user)
    router.push('/')
  } catch (e: any) {
    error.value = '로그인 실패: ' + e.message
  }
}
</script>

<style scoped>
.auth-page {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-height: 80vh;
  background: #fcf8ee;
}
.auth-box {
  margin-top: 48px;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.08);
  padding: 48px 32px 32px 32px;
  min-width: 420px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.auth-box h2 {
  font-size: 2rem;
  margin-bottom: 2rem;
  font-weight: 600;
}
.auth-box input {
  width: 320px;
  padding: 0.9rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1.1rem;
  margin-bottom: 1rem;
}
.main-btn {
  width: 100%;
  padding: 1rem;
  background: #222;
  color: #fff;
  border: none;
  border-radius: 24px;
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 1.2rem;
  cursor: pointer;
  transition: background 0.2s;
}
.main-btn:hover {
  background: #444;
}
.links {
  margin-bottom: 1.5rem;
  color: #888;
  font-size: 1rem;
  display: flex;
  gap: 0.7em;
  align-items: center;
}
.social-section {
  width: 100%;
  margin-bottom: 1.2rem;
}
.social-title {
  color: #888;
  font-size: 1rem;
  margin-bottom: 0.5rem;
  text-align: center;
}
.social-icons {
  display: flex;
  justify-content: center;
  gap: 1.2em;
  margin-bottom: 1rem;
}
.icon {
  width: 36px; height: 36px; border-radius: 50%; display: inline-block;
  background: #eee;
}
.icon.naver { background: #2db400; }
.icon.kakao { background: #fee500; }
.icon.google { background: #fff; border: 1px solid #ccc; }
.icon.apple { background: #222; }
.icon.facebook { background: #1877f3; }
.desc {
  color: #888;
  font-size: 0.95rem;
  text-align: center;
  margin-bottom: 1rem;
}
.error {
  color: #e74c3c;
  min-height: 1.2em;
  margin-top: 0.5rem;
  text-align: center;
}
</style>