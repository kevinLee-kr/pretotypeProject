<template>
  <div class="insert-idea-container">
    <h2>아이디어 등록</h2>
    <form @submit.prevent="submitIdea">
      <div class="form-group">
        <label for="title">아이디어 제목</label>
        <input type="text" id="title" v-model="idea.title" required />
      </div>

      <div class="form-group">
        <label for="description">아이디어 설명</label>
        <textarea id="description" v-model="idea.description" required></textarea>
      </div>

      <div class="form-group">
        <label for="category">카테고리</label>
        <select id="category" v-model="idea.category" required>
          <option value="서비스">서비스</option>
          <option value="앱">앱</option>
          <option value="웹">웹</option>
          <option value="기타">기타</option>
        </select>
      </div>

      <div class="form-group">
        <label for="author">작성자</label>
        <input type="text" id="author" v-model="idea.author" required />
      </div>

      <button type="submit" class="btn-submit">등록하기</button>
    </form>
  </div>
</template>

<script>
import '../css/InsertIdea.css'
import axios from "axios";

export default {
  name: "InsertIdea",
  data() {
    return {
      idea: {
        title: "",
        description: "",
        category: "",
        author: ""
      }
    };
  },
  methods: {
    async submitIdea() {
      try {
        const response = await axios.post("http://localhost:8080/idea/insert", this.idea);
        if (response.data === "success") {
          alert("아이디어가 성공적으로 등록되었습니다!");
          this.$router.push("/"); // 등록 후 메인으로 이동
        } else {
          alert("등록에 실패했습니다.");
        }
      } catch (error) {
        console.error(error);
        alert("서버 오류가 발생했습니다.");
      }
    }
  }
};
</script>
