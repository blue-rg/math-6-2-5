// ===== 동글 특공대 · 파이어베이스 설정 (새 프로젝트) =====
// 1) 파이어베이스 콘솔 → 프로젝트 설정(톱니바퀴) → 일반 → 내 앱 → 웹 앱의 「SDK 설정 및 구성」에서
//    firebaseConfig 값을 복사해 아래 따옴표 안을 바꿔 주세요.
// 2) ⚠ databaseURL은 콘솔 설정 화면에 안 나와서, 싱가포르(asia-southeast1)에 만들었다고 보고 넣어 두었어요.
//    Realtime Database → 데이터 탭 맨 위에 보이는 주소와 똑같은지 꼭 확인하고, 다르면 그 주소로 바꿔 주세요.
//    (미국 us-central1로 만들었다면 보통 "https://math-6-2-5-default-rtdb.firebaseio.com" 모양이에요.)
window.FIREBASE_CONFIG = {
  apiKey: "AIzaSyDJzFvvyLS_hnPmbIvW2sWzWYcltC1V-_U",
  authDomain: "math-6-2-5.firebaseapp.com",
  databaseURL: "https://math-6-2-5-default-rtdb.firebaseio.com",
  projectId: "math-6-2-5",
  storageBucket: "math-6-2-5.firebasestorage.app",
  messagingSenderId: "903272072496",
  appId: "1:903272072496:web:9138ffef589d80a4f834f5"
};

// 3) 선생님 비밀번호(암호화된 값). 처음에는 비워 두고, 게임 주소 끝에 #teacher 를 붙여 들어가면
//    「선생님 비밀번호 만들기」 화면이 나와요. 거기서 만든 한 줄로 아래 줄을 바꿔 주세요.
window.TEACHER_PIN_HASH = '6264';

// 게임 시간 잠금(평일 이 시간에만 출격·훈련 가능). 잠금을 끄려면 PLAY_LOCK = false
window.PLAY_HOURS = '08:30-15:00';
window.PLAY_LOCK = true;

// 데이터베이스 안에서 기록을 둘 폴더 이름(보통은 그대로 두세요)
window.DB_ROOT = 'dongle5';
