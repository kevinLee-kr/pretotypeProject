<template>
  <div class="wrap">
    <!-- 헤더 -->
    <header class="header">
      <div id="logoImg">
        <img src="../assets/logo1.png" id="logo" alt="ventureVoiceLogo"/>
      </div>
      <div id="comTitle"><img src="../assets/logo2.png" id="logo" alt="ventureVoiceTitle"/></div>
      <nav id="headerTap">
        <ul>
          <li>아이디어 탐색</li>
          <li>아이디어 등록</li>
          <li>피드백</li>
          <li>인사이트</li>
          <li>커뮤니티</li>
          <li>Contact</li>
        </ul>
      </nav>
      <div id="searchBar">
        <input type="text" placeholder="검색 (아이디어/사용자)"/>
      </div>
      <div id="authUser">
        <button class="btn">로그인</button>
        <button class="btn">회원가입</button>
      </div>
    </header>

    <!-- 메인 레이아웃 -->
    <div class="layout">
      <!-- 왼쪽 사이드바 -->
      <aside class="sidebar">
        <div class="side-box highlight">💼 VentureJobs</div>
        <div class="side-box highlight">📚 프로젝트 리소스</div>

        <h4>Top Innovators</h4>
        <ul class="writers">
          <li>홍길동 <span>아이디어 12</span></li>
          <li>김개발 <span>피드백 34</span></li>
          <li>이혁신 <span>아이디어 9</span></li>
          <li>박테스터 <span>피드백 27</span></li>
        </ul>
      </aside>

      <!-- 메인 콘텐츠 -->
      <main class="content">
        <div class="row top-row">
          <div class="cardLarge">
            <div id="cardHeader">
              <h3>최신 아이디어</h3>
            </div>
            <ul>
              <li><a>AI 기반 요약 서비스</a></li>
              <li>친환경 배달 박스 프로토타입</li>
              <li>실시간 화상 피드백 앱</li>
            </ul>
          </div>
          <div class="cardLarge">
            <div id="cardHeader">
              <h3>가장 많이 피드백 받은 아이디어</h3>
            </div>
            <ul>
              <li>블록체인 신원 인증</li>
              <li>AI 채용 매칭 서비스</li>
              <li>메타버스 협업 툴</li>
            </ul>
          </div>
        </div>
        <div class="row bottom-row">
          <div class="cardLarge">
            <div id="cardHeader">
              <h3>추천 아이디어 (Editor's Pick)</h3>
            </div>
            <ul>
              <li>원격 팀 빌딩 플랫폼</li>
              <li>헬스케어 데이터 분석 앱</li>
            </ul>
          </div>
          <div class="cardLarge">
            <div id="cardHeader">
              <h3>트렌드 분석</h3>
            </div>
            <ul>
              <li>이번 주 가장 많이 언급된 키워드: AI</li>
              <li>긍정 피드백 TOP 분야: 생산성 툴</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  name: "PrototypeValidationLayout",
};
</script>

<style scoped>
/* ====== HEADER ====== */
.header {
  display: flex;
  align-items: center;
  background: #fff;
  padding: 10px 20px;
  border-bottom: 1px solid #ddd;
  height: 80px;
}

#logoImg img {
  height: 75px;
}

#comTitle {
  font-size: 20px;
  font-weight: bold;
  margin-left: 10px;
}

#comTitle img {
  width: 200px;
}

#headerTap {
  flex: 1;
  margin-left: 100px;
}

#headerTap ul {
  display: flex;
  list-style: none;
  gap: 20px;
  padding: 0;
  margin: 0;
}

#headerTap li {
  cursor: pointer;

  min-width: 60px;
  flex-shrink: 0;
}

#searchBar input {
  padding: 5px 10px;
  border: 1px solid #ddd;
  border-radius: 6px;
}

#authUser {
  margin-left: 20px;
}

#authUser .btn {
  margin-left: 5px;
  padding: 5px 10px;
  border: 1px solid #007bff;
  background: #fff;
  color: #007bff;
  border-radius: 6px;
  cursor: pointer;

  min-width: 72px;
  flex-shrink: 0;
}

/* ====== BODY ====== */
.layout {
  flex: 1;
  display: flex;
  gap: 20px;
  padding: 20px;
  background: #f8f9fa;
}

/* 사이드바 */
.sidebar {
  width: 200px;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.side-box {
  padding: 10px;
  background: #eee;
  border-radius: 6px;
  text-align: center;
}

.side-box.highlight {
  background: #ffefef;
  font-weight: bold;

  min-width: 160px;
  flex-shrink: 0;
}

.writers {
  list-style: none;
  padding: 0;
  margin: 0;
}

.writers li {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  margin-bottom: 5px;
}

/* 메인 콘텐츠 */
.content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-left: 20px;
}

.row {
  display: flex;
  gap: 20px;
}

.cardLarge {
  background: #fff;
  border-radius: 6px;
  padding: 15px;
  border: 1px solid #eee;
}

.cardLarge h3 {
  margin: 0 0 10px 0;
  font-size: 16px;
}

.cardLarge ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.cardLarge ul li {
  font-size: 14px;
  margin: 12px;
  cursor: pointer;
}

.cardLarge {
  flex: 1;
  height: 250px;
  min-width: 400px;
  flex-shrink: 0; /* 줄어들지 않게 고정 */
}
#cardHeader{
  height: 60px;
  background-color: #ffefef;
}
#cardHeader h3{
  padding: 15px 5px;
}
</style>
