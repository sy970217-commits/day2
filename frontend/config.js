// 백엔드(Railway) 주소 설정
// - 내 컴퓨터(localhost)에서 열면 로컬 서버(8000)를 사용
// - 배포(Vercel)에서는 아래 RAILWAY_URL 을 사용 (끝에 / 없이)
const RAILWAY_URL = "https://my-api-production-b01e.up.railway.app";

const isLocal = ["localhost", "127.0.0.1"].includes(location.hostname);
window.API_BASE = isLocal ? "http://127.0.0.1:8000" : RAILWAY_URL;
