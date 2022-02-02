import {
  TICKET_AMOUNT_SUCCESS,
  TICKET_AMOUNT_PENDING,
  TICKET_AMOUNT_ERROR
} from '../action-types';
const INITIAL_STATE = {
  ticketCount: null,
  errorMessage: null,
  pending: false
};

// eslint-disable-next-line import/no-anonymous-default-export
export function ticketAmount(state = INITIAL_STATE, action) {
  switch (action.type) {
    case TICKET_AMOUNT_PENDING:
      return {
        ...state,
        ticketCount: null,
        errorMessage: null,
        pending: true
      };
    case TICKET_AMOUNT_SUCCESS:
      return {
        ...state,
        ticketCount: action.payload,
        errorMessage: null,
        pending: false
      };
    case TICKET_AMOUNT_ERROR:
      return {
        ...state,
        ticketCount: null,
        errorMessage: action.payload,
        pending: false
      };
    default:
      return state;
  }
}
