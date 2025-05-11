<template>
  <div class="modal-backdrop">
    <div class="modal-content">
      <div class="tab-buttons">
        <button :class="{active: mode==='login'}" @click="mode='login'">로그인</button>
        <button :class="{active: mode==='register'}" @click="mode='register'">회원가입</button>
      </div>
      <h2 v-if="mode==='login'">로그인</h2>
      <h2 v-else>회원가입</h2>
      <input v-model="email" type="email" placeholder="이메일" />
      <input v-model="password" type="password" placeholder="비밀번호" />
      <button v-if="mode==='login'" @click="login">로그인</button>
      <button v-else @click="register">회원가입</button>
      <div class="message">{{ message }}</div>
      <div v-if="mode==='login'" class="switch-text">
        계정이 없으신가요?
        <a href="#" @click.prevent="mode='register'">회원가입</a>
      </div>
      <div v-else class="switch-text">
        이미 계정이 있으신가요?
        <a href="#" @click.prevent="mode='login'">로그인</a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { auth } from '@/firebase'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'

const email = ref('')
const password = ref('')
const message = ref('')
const mode = ref<'login' | 'register'>('login')

const login = async () => {
  message.value = ''
  try {
    await signInWithEmailAndPassword(auth, email.value, password.value)
    message.value = '로그인 성공!'
    // 로그인 성공 후 처리(예: 모달 닫기 등)는 필요에 따라 추가
  } catch (e: any) {
    if (e.code === 'auth/user-not-found') {
      message.value = '계정이 없습니다. 회원가입을 진행해 주세요.'
    } else if (e.code === 'auth/wrong-password') {
      message.value = '비밀번호가 올바르지 않습니다.'
    } else {
      message.value = '로그인 실패: ' + e.message
    }
  }
}

const register = async () => {
  message.value = ''
  try {
    await createUserWithEmailAndPassword(auth, email.value, password.value)
    message.value = '회원가입 성공! 이제 로그인해 주세요.'
    mode.value = 'login'
  } catch (e: any) {
    if (e.code === 'auth/email-already-in-use') {
      message.value = '이미 가입된 이메일입니다. 로그인해 주세요.'
      mode.value = 'login'
    } else {
      message.value = '회원가입 실패: ' + e.message
    }
  }
}
</script>

<style scoped>
.modal-backdrop {
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0,0,0,0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}
.modal-content {
  background: #fff;
  padding: 2.5rem 2rem 2rem 2rem;
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.18);
  min-width: 320px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
}
.tab-buttons {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
}
.tab-buttons button {
  background: #eee;
  border: none;
  border-radius: 8px 8px 0 0;
  padding: 0.5rem 1.2rem;
  font-size: 1rem;
  cursor: pointer;
  color: #888;
  transition: background 0.2s, color 0.2s;
}
.tab-buttons button.active {
  background: #6c63ff;
  color: #fff;
}
.modal-content h2 {
  margin-bottom: 1rem;
}
.modal-content input {
  width: 220px;
  padding: 0.7rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
}
.modal-content button {
  width: 100%;
  padding: 0.7rem;
  background: #6c63ff;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 0.5rem;
  transition: background 0.2s;
}
.modal-content button:hover {
  background: #554ee2;
}
.message {
  margin-top: 0.5rem;
  color: #e74c3c;
  font-size: 0.95rem;
  min-height: 1.2em;
}
.switch-text {
  margin-top: 0.5rem;
  font-size: 0.95rem;
  color: #888;
}
.switch-text a {
  color: #6c63ff;
  text-decoration: underline;
  cursor: pointer;
  margin-left: 0.3em;
}
</style> 