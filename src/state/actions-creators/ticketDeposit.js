import {
  TICKET_DEPOSIT_SUCCESS,
  TICKET_DEPOSIT_PENDING,
  TICKET_DEPOSIT_ERROR
} from '../action-types';
import axios from 'axios';
import history from '../../history';

export const ticketDeposit =
  ({ ticketCount, accountName }) =>
  async dispatch => {
    try {
      dispatch({ type: TICKET_DEPOSIT_PENDING });
      console.log(ticketCount);
      console.log(accountName);
      const response = await axios.post('/tickets', {
        ticketCount,
        accountName
      });
      //  console.log('ticketAmount action', response.data.data);

      dispatch({ type: TICKET_DEPOSIT_SUCCESS, payload: response.data.data });

      // 자동으로 다음 단계로 넘어가게 끔
      history.push('/list/mytickets');
    } catch (e) {
      //400 ~
      dispatch({ type: TICKET_DEPOSIT_ERROR, payload: '메시지 전송 오류' });
    }
  };
