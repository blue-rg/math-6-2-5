// ===== 선생님이 채우는 파일 =====
// 1) 파이어베이스 콘솔 → 프로젝트 설정 → 내 앱(웹 </>) → 'SDK 설정 및 구성'의 firebaseConfig 값을 아래에 그대로 붙여 넣어요.
// 2) databaseURL이 꼭 있어야 해요(Realtime Database를 만든 뒤 생겨요).
window.FIREBASE_CONFIG = {
  apiKey: "AIzaSyCGWc_N9BoTptAL2mlK6mP6wMJEoNUpiK8",
  authDomain: "math-5-b5c5a.firebaseapp.com",
  databaseURL: "https://math-5-b5c5a-default-rtdb.firebaseio.com",
  projectId: "math-5-b5c5a",
  storageBucket: "math-5-b5c5a.firebasestorage.app",
  messagingSenderId: "768760525831",
  appId: "1:768760525831:web:7189952bb52c9de0f0e6a2"
};
// 선생님 메뉴 비밀번호. 이 파일은 누구나 열어 볼 수 있어서, 비밀번호를 그대로 쓰지 않고 암호화한 값(해시)만 적어 둬요.
// 지금 값은 4단원과 같은 비밀번호예요. 바꾸려면 선생님 메뉴 맨 아래 「선생님 비밀번호 바꾸기」에서 새 줄을 만들어 아래 줄과 바꿔 넣어요.
window.TEACHER_PIN_HASH = '23cb06c5032e67db37b64a293e445cd2cade9bc9d94977a412212b8b64a0d5f4';

// 게임 시간(평일, 한국 시간). 이 시간 밖에서는 게임이 잠겨요. 쓰지 않으면 08:30-15:00이에요.
// 선생님 메뉴에서 반별로 바꾸거나 잠깐 열 수도 있어요. 바꾸려면 아래 줄 앞의 // 를 지우고 시간을 고쳐요.
// window.PLAY_HOURS = '08:30-15:00';
// 잠금을 아예 끄려면 아래 줄 앞의 // 를 지워요.
// window.PLAY_LOCK = false;
