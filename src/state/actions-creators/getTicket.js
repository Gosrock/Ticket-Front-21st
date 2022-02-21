import {
  GET_TICKET_SUCCESS,
  GET_TICKET_PENDING,
  GET_TICKET_ERROR
} from '../action-types';
import axios from 'axios';
import history from '../../history';

export const getTicket =
  ({ ticketId }) =>
  async dispatch => {
    try {
      dispatch({ type: GET_TICKET_PENDING });

      const response = await axios.get(`/tickets/${ticketId}`);
      //console.log('getTicket action', response.data.data.ticketInfo);
      dispatch({
        type: GET_TICKET_SUCCESS,
        payload: response.data.data.ticketInfo
      });
    } catch (e) {
      //400 ~
      dispatch({ type: GET_TICKET_ERROR, payload: '티켓 상태 가져오기 오류' });
    }
  };
