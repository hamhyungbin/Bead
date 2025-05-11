<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const error = ref('')
const router = useRouter()

const register = () => {
  if (!email.value || !password.value) {
    error.value = '이메일과 비밀번호를 입력하세요.'
    return
  }
  error.value = ''
  // 실제 회원가입 없이 인증메일 안내 페이지로 이동
  router.push({ name: 'register-verify', query: { email: email.value } })
}
</script>

<template>
  <div class="auth-page">
    <div class="auth-box">
      <h2>회원가입</h2>
      <div class="desc">회원가입을 위해 인증 가능한 이메일을 입력해 주세요.</div>
      <input v-model="email" type="email" placeholder="이메일을 입력하세요" />
      <input v-model="password" type="password" placeholder="비밀번호를 입력하세요" />
      <!-- 약관 동의 체크박스 등은 실제 동작 없이 UI만 -->
      <div class="terms">
        <label><input type="checkbox" /> 모두 동의합니다.</label>
        <label><input type="checkbox" /> 만 14세 이상입니다. (필수)</label>
        <label><input type="checkbox" /> 이용약관 (필수)</label>
        <label><input type="checkbox" /> 개인정보 수집 및 이용 (필수)</label>
        <label><input type="checkbox" /> 혜택 및 이벤트 정보 수신 동의 (선택)</label>
        <label><input type="checkbox" /> 본인확인 정보 수집 및 저장 (선택)</label>
      </div>
      <button class="main-btn" @click="register">가입하기</button>
      <div class="links">
        이미 회원이신가요?
        <router-link to="/login">로그인</router-link>
      </div>
      <div class="error">{{ error }}</div>
    </div>
  </div>
</template>

<style scoped>
/* auth-page, auth-box, main-btn, links, error 등은 LoginView.vue와 동일하게 */
.auth-page { display: flex; justify-content: center; align-items: flex-start; min-height: 80vh; background: #fcf8ee; }
.auth-box { margin-top: 48px; background: #fff; border-radius: 16px; box-shadow: 0 8px 32px rgba(0,0,0,0.08); padding: 48px 32px 32px 32px; min-width: 420px; display: flex; flex-direction: column; align-items: center; }
.auth-box h2 { font-size: 2rem; margin-bottom: 1.2rem; font-weight: 600; }
.auth-box .desc { color: #888; font-size: 1rem; margin-bottom: 1.2rem; }
.auth-box input { width: 320px; padding: 0.9rem; border: 1px solid #ddd; border-radius: 8px; font-size: 1.1rem; margin-bottom: 1rem; }
.terms { width: 100%; margin-bottom: 1.2rem; color: #222; font-size: 1rem; }
.terms label { display: block; margin-bottom: 0.3em; }
.main-btn { width: 100%; padding: 1rem; background: #222; color: #fff; border: none; border-radius: 24px; font-size: 1.1rem; font-weight: 600; margin-bottom: 1.2rem; cursor: pointer; transition: background 0.2s; }
.main-btn:hover { background: #444; }
.links { margin-bottom: 1.5rem; color: #888; font-size: 1rem; }
.error { color: #e74c3c; min-height: 1.2em; margin-top: 0.5rem; text-align: center; }
</style>