import axios from 'axios';
import history from '../history';

axios.defaults.baseURL = 'https://api.gosrock.link';
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
      response: {
        status,
        data: { message }
      }
    } = error;
    if (status === 401) {
      //401 이면 토큰오류이므로 해당으로 통일.
      if (message !== '인증번호 불일치') {
        localStorage.removeItem('userAccessToken');
        localStorage.removeItem('phoneNumber');

        // 새로운 토큰 저장
        axios.defaults.headers.common.Authorization = null;
        // 401로 요청 실패했던 요청 새로운 accessToken으로 재요청

        alert('인증 기한이 끝났습니다. 다시 인증 해주세요');
        window.location.href = '/';
      }

      // 로컬 스토리지에 어세스토큰 삭제
    }
    return Promise.reject(error);
  }
);
