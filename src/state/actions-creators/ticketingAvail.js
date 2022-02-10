import {
  GET_TICKETINGAVAIL_SUCCESS,
  GET_TICKETINGAVAIL_PENDING,
  GET_TICKETINGAVAIL_ERROR
} from '../action-types';
import axios from 'axios';

export const ticketingAvail = () => async dispatch => {
  try {
    dispatch({ type: GET_TICKETINGAVAIL_PENDING });

    const response = await axios.get('/tickets/avail');
    console.log('ticketingAvail action');

    dispatch({
      type: GET_TICKETINGAVAIL_SUCCESS,
      payload: response.data.data.ticketingAvailable
    });
  } catch (e) {
    //400 ~
    dispatch({
      type: GET_TICKETINGAVAIL_ERROR,
      payload: '인증되지 않은 사용자'
    });
  }
};
