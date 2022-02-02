import {
  TICKET_AMOUNT_SUCCESS,
  TICKET_AMOUNT_PENDING,
  TICKET_AMOUNT_ERROR
} from '../action-types';
import axios from 'axios';
import history from '../../history';

export const ticketAmount =
  ({ ticketCount }) =>
  async dispatch => {
    try {
      dispatch({ type: TICKET_AMOUNT_PENDING });
      console.log(ticketCount);
      /*  const accountName = '김원진';
      const response = await axios.post('/tickets', {
        ticketCount,
        accountName
      });*/
      //  console.log('ticketAmount action', response.data.data);

      dispatch({ type: TICKET_AMOUNT_SUCCESS, payload: parseInt(ticketCount) });

      // 자동으로 다음 단계로 넘어가게 끔
      history.push('/ticketing/accountName');
    } catch (e) {
      //400 ~
      dispatch({ type: TICKET_AMOUNT_ERROR, payload: '메시지 전송 오류' });
    }
  };
