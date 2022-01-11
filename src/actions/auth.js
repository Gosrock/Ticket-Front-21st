import { AUTH_USER, AUTH_ERROR } from './types';
import axios from 'axios';

export const login =
  ({ userId, password }, callback) =>
  async dispatch => {
    try {
      // dispatch({ type: AUTH });

      const response = await axios.post('/admin/login', {
        userId,
        password
      });
      console.log('액션', response);

      dispatch({ type: AUTH_USER, payload: response.data });

      localStorage.setItem('accessToken', response.data.data.accessToken);
      axios.defaults.headers.common.Authorization = `Bearer ${response.data.data.accessToken}`;

      // 자동으로 피쳐로 넘어가게끔
      // callback();
    } catch (e) {
      //400 ~
      dispatch({ type: AUTH_ERROR, payload: '로그인 실패' });
    }
  };
