<template>
  <div class="signup-container">
    <!-- 로고 -->
    <div>
      <img src="../assets/logo1.png" alt="VentureVoice Logo" />
    </div>

    <!-- 타이틀 -->
    <h2 >회원가입</h2>
    <p class="subLogo">
      <img src="../assets/logo2.png" alt="VentureVoice Logo" />
    </p>

    <!-- 회원가입 폼 -->
    <form @submit.prevent="signup">
      <input type="text" v-model="username" placeholder="아이디" />
      <input type="email" v-model="email" placeholder="이메일" />
      <input type="password" v-model="password" placeholder="비밀번호" />
      <input type="password" v-model="confirmPassword" placeholder="비밀번호 확인" />

      <!-- 비밀번호 오류 메시지 -->
      <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>

      <button type="submit" class="signup-btn">회원가입</button>
    </form>

    <p class="login-text">
      이미 계정이 있으신가요?
      <a @click.prevent="goLogin">로그인</a>
    </p>
  </div>
</template>

<script>
import '../css/SignUp.css'

export default {
  name: "SignupPage",
  data() {
    return {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      errorMessage: "" // 에러 메시지 상태
    };
  },
  methods: {
    signup() {
      this.errorMessage = ""; // 초기화

      if (!this.username || !this.email || !this.password || !this.confirmPassword) {
        this.errorMessage = "모든 필드를 입력해주세요.";
        return;
      }
      if (this.password !== this.confirmPassword) {
        this.errorMessage = "비밀번호가 일치하지 않습니다.";
        return;
      }

      // 정상적인 경우
      alert(`회원가입 시도: ${this.username}, ${this.email}`);
      // 👉 axios.post('/api/signup', {...}) 추가 가능
    },
    goLogin() {
      this.$router.push("/login");
    }
  }
};
</script>
