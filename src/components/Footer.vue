<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-left">
        <div class="footer-links">
          <a href="#">Contact Us</a>
          <span>|</span>
          <a href="#">Legal Notice</a>
          <span>|</span>
          <a href="#">Image Information Processing Equipment Operation & Management Policy</a>
          <span>|</span>
          <a href="#">Prohibition of Unauthorized Collection of Email Addresses</a>
          <a href="#" class="privacy">Privacy Policy</a>
        </div>
        <div class="footer-company">
          <div>CJ ENM Co., Ltd  |  CEO : Yoon Sang Hyun</div>
          <div>Address : (03926) 66, Sangamsan-ro, Mapo-gu, Seoul, Korea</div>
          <div>Business Registration No. : 106-81-51510  |  Personal Information Manager : Kim Ji Hoon</div>
        </div>
        <div class="footer-copy">© CJ ENM. All Rights Reserved.</div>
      </div>
      <div class="footer-right">
        <div class="footer-family">Family Site +</div>
        <div class="footer-subsidiaries">Subsidiaries +</div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
// Footer는 단순 레이아웃 컴포넌트입니다.
</script>

<style scoped>
.footer {
  background: #111;
  color: #eee;
  padding: 2.5rem 0 1.5rem 0;
  font-size: 1rem;
  width: 100%;
}
.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
}
.footer-left {
  flex: 1 1 700px;
  min-width: 350px;
}
.footer-links {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1.2rem;
}
.footer-links a {
  color: #eee;
  text-decoration: none;
  margin-right: 0.5rem;
  font-weight: 400;
}
.footer-links .privacy {
  font-weight: bold;
  margin-left: 1.2rem;
}
.footer-links span {
  color: #666;
  margin: 0 0.3rem;
}
.footer-company {
  color: #bbb;
  font-size: 0.97rem;
  margin-bottom: 0.7rem;
}
.footer-copy {
  color: #888;
  font-size: 0.95rem;
  margin-top: 0.5rem;
}
.footer-right {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 1.2rem;
  min-width: 180px;
}
.footer-family, .footer-subsidiaries {
  color: #eee;
  font-weight: 500;
  cursor: pointer;
}
@media (max-width: 900px) {
  .footer-content {
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;
  }
  .footer-right {
    align-items: flex-start;
    margin-top: 1.5rem;
  }
}
</style> 