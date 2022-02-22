import {
  MESSAGE_SEND_SUCCESS,
  MESSAGE_SEND_PENDING,
  MESSAGE_SEND_ERROR
} from '../action-types';
import axios from 'axios';
import history from '../../history';

export const messageSend =
  ({ phoneNumber }) =>
  async dispatch => {
    try {
      dispatch({ type: MESSAGE_SEND_PENDING });

      const response = await axios.post('/auth/message', {
        phoneNumber
      });
      //console.log('messageSend action', response.data.data);

      dispatch({
        type: MESSAGE_SEND_SUCCESS,
        payload: { data: response.data.data, phoneNumber }
      });

      // 자동으로 다음 단계로 넘어가게 끔
      history.push('/auth/validation');
    } catch (e) {
      //400 ~
      dispatch({ type: MESSAGE_SEND_ERROR, payload: '메시지 전송 오류' });
    }
  };
