<template>
  <div class="modal-backdrop">
    <div class="modal-content">
      <h2>회원가입</h2>
      <input v-model="email" type="email" placeholder="이메일" />
      <input v-model="password" type="password" placeholder="비밀번호" />
      <button @click="register">회원가입</button>
      <div class="message">{{ message }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { auth } from '@/firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'

const email = ref('')
const password = ref('')
const message = ref('')

const register = async () => {
  message.value = ''
  try {
    await createUserWithEmailAndPassword(auth, email.value, password.value)
    message.value = '회원가입 성공!'
  } catch (e: any) {
    message.value = '회원가입 실패: ' + e.message
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
</style> 