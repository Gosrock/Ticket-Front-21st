import {
  ACCOUNT_NAME_SUCCESS,
  ACCOUNT_NAME_PENDING,
  ACCOUNT_NAME_ERROR
} from '../action-types';
import axios from 'axios';
import history from '../../history';

export const ticketAccountName =
  ({ ticketCount, accountName }) =>
  async dispatch => {
    try {
      dispatch({ type: ACCOUNT_NAME_PENDING });
      console.log(ticketCount);
      console.log(accountName);
      const response = await axios.post('/tickets', {
        ticketCount,
        accountName
      });
      //  console.log('ticketAmount action', response.data.data);

      dispatch({ type: ACCOUNT_NAME_SUCCESS, payload: response.data.data });

      // 자동으로 다음 단계로 넘어가게 끔
      history.push('/ticketing/auth/message');
    } catch (e) {
      //400 ~
      dispatch({ type: ACCOUNT_NAME_ERROR, payload: '메시지 전송 오류' });
    }
  };
