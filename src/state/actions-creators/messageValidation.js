import {
  MESSAGE_VALIDATION_SUCCESS,
  MESSAGE_VALIDATION_PENDING,
  MESSAGE_VALIDATION_ERROR
} from '../action-types';
import axios from 'axios';
import history from '../../history';

export const messageValidation =
  ({ messageToken, authenticationNumber }, nextUrl) =>
  async dispatch => {
    try {
      dispatch({ type: MESSAGE_VALIDATION_PENDING });

      const response = await axios.post('/auth/validation', {
        messageToken,
        authenticationNumber: authenticationNumber
      });

      console.log('messageValidation action', response.data.data);

      dispatch({
        type: MESSAGE_VALIDATION_SUCCESS,
        payload: response.data.data
      });

      localStorage.setItem(
        'userAccessToken',
        response.data.data.userAccessToken
      );
      localStorage.setItem('phoneNumber', response.data.data.phoneNumber);
      axios.defaults.headers.common.Authorization = `Bearer ${response.data.data.userAccessToken}`;

      // 자동으로 다음 단계로 넘어가게 끔
      history.push('/test');
    } catch (e) {
      //400 ~
      console.log(e.response.data);
      dispatch({ type: MESSAGE_VALIDATION_ERROR, payload: '인증 오류' });
    }
  };
