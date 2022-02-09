import {
  GET_TICKETS_SUCCESS,
  GET_TICKETS_PENDING,
  GET_TICKETS_ERROR
} from '../action-types';
import axios from 'axios';
import history from '../../history';

export const getTickets =
  ({ phoneNumber }) =>
  async dispatch => {
    try {
      dispatch({ type: GET_TICKETS_PENDING });

      const response = await axios.get(`/tickets?phoneNumber=${phoneNumber}`);
      console.log('getTickets action', response.data.data);

      dispatch({ type: GET_TICKETS_SUCCESS, payload: response.data.data[0] });
    } catch (e) {
      //400 ~
      dispatch({ type: GET_TICKETS_ERROR, payload: e.response.data.message });
    }
  };
