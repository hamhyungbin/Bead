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

<template>
  <div>
    <h2>회원가입</h2>
    <input v-model="email" type="email" placeholder="이메일" />
    <input v-model="password" type="password" placeholder="비밀번호" />
    <button @click="register">회원가입</button>
    <div>{{ message }}</div>
  </div>
</template>
