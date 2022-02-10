import {
  GET_TICKETINGAVAIL_SUCCESS,
  GET_TICKETINGAVAIL_PENDING,
  GET_TICKETINGAVAIL_ERROR
} from '../action-types';
const INITIAL_STATE = {
  ticketingAvailable: true,
  errorMessage: null,
  pending: false
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_TICKETINGAVAIL_PENDING:
      return {
        ...state,
        ticketingAvailable: null,
        errorMessage: null,
        pending: true
      };
    case GET_TICKETINGAVAIL_SUCCESS:
      return {
        ...state,
        ticketingAvailable: action.payload,
        errorMessage: null,
        pending: false
      };
    case GET_TICKETINGAVAIL_ERROR:
      return {
        ...state,
        ticketingAvailable: null,
        errorMessage: action.payload,
        pending: false
      };
    default:
      return state;
  }
}
