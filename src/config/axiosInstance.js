import axios from 'axios';
axios.defaults.baseURL = 'http://localhost';
// const instance = axios.create({
//   // .. where we make our configurations
//   baseURL: "http://localhost",
// });

// export default instance;

axios.interceptors.response.use(
  response => {
    return response;
  },
  async error => {
    const {
      response: { status }
    } = error;
    if (status === 401) {
      //401 이면 토큰오류이므로 해당으로 통일.

      // 로컬 스토리지에 어세스토큰 삭제
      localStorage.setItem('accessToken', null);
      // token refresh 요청

      // 새로운 토큰 저장
      axios.defaults.headers.common.Authorization = null;
      // 401로 요청 실패했던 요청 새로운 accessToken으로 재요청

      alert('자동 로그아웃 되셨습니다. 다시 로그인 해주세요.');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);
