<template>
  <div class="login-container">
    <!-- 타이틀 -->
    <h2 class="welcome-title"><img src="../assets/logo1.png" alt="VentureVoice Logo"/></h2>
    <p class="welcome-subtitle">
      <img src="../assets/logo2.png" alt="VentureVoice Logo" id="comTitle"/>
    </p>

    <!-- SNS 로그인 -->
    <div class="sns-login">
      <button class="sns-btn google">Google</button>
      <button class="sns-btn naver">Naver</button>
    </div>

    <hr class="divider"/>

    <!-- 아이디 로그인 -->
    <div class="form">
      <input type="text" v-model="userId" placeholder="아이디"/>
      <input type="password" v-model="password" placeholder="비밀번호"/>

      <div class="options">
        <a href="#">계정찾기</a>
      </div>

      <button class="login-btn" @click="login">로그인</button>

      <p class="signup-text">
        아직 회원이 아니신가요? <a href="#">회원가입</a>
      </p>
    </div>
  </div>
</template>

<script>
import '../css/Login.css'

export default {
  name: "LoginPage",
  data() {
    return {
      userId: "",
      password: "",
    };
  },
  methods: {
    login() {
      if (!this.userId || !this.password) {
        alert("아이디와 비밀번호를 입력해주세요.");
        return;
      }
      alert(`로그인 시도: ${this.userId}`);
      // 👉 실제로는 axios로 API 호출 필요
    },
  },
};
</script>