import {
  TICKET_DEPOSIT_SUCCESS,
  TICKET_DEPOSIT_PENDING,
  TICKET_DEPOSIT_ERROR
} from '../action-types';
const INITIAL_STATE = {
  accountName: null,
  errorMessage: null,
  pending: false
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case TICKET_DEPOSIT_PENDING:
      return {
        ...state,
        accountName: null,
        errorMessage: null,
        pending: true
      };
    case TICKET_DEPOSIT_SUCCESS:
      return {
        ...state,
        accountName: action.payload[0].accountName,
        errorMessage: null,
        pending: false
      };
    case TICKET_DEPOSIT_ERROR:
      return {
        ...state,
        accountName: null,
        errorMessage: action.payload,
        pending: false
      };
    default:
      return state;
  }
}
