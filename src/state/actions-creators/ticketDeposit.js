import {
  TICKET_DEPOSIT_SUCCESS,
  TICKET_DEPOSIT_PENDING,
  TICKET_DEPOSIT_ERROR
} from '../action-types';
import axios from 'axios';
import history from '../../history';
import { store } from '../storeSetting';
import { ticketingAvail } from '../actions-creators';

export const ticketDeposit =
  ({ studentID, smallGroup, accountName }) =>
  async dispatch => {
    try {
      dispatch({ type: TICKET_DEPOSIT_PENDING });
      //console.log(studentID);
      //console.log(smallGroup);
      //console.log(accountName);
      const response = await axios.post('/tickets', {
        studentID,
        smallGroup,
        accountName
      });
      //  console.log('ticketAmount action', response.data.data);

      dispatch({ type: TICKET_DEPOSIT_SUCCESS, payload: response.data.data });

      // 다음티켓예매 상태진행을 불가로 만들기 위함 (1인 1매)
      history.push('/list/mytickets');
      store.dispatch(ticketingAvail());
      // 자동으로 다음 단계로 넘어가게 끔
    } catch (e) {
      //400 ~
      dispatch({ type: TICKET_DEPOSIT_ERROR, payload: '메시지 전송 오류' });
    }
  };
