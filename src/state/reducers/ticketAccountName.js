import {
  ACCOUNT_NAME_SUCCESS,
  ACCOUNT_NAME_PENDING,
  ACCOUNT_NAME_ERROR
} from '../action-types';
const INITIAL_STATE = {
  accountName: null,
  errorMessage: null,
  pending: false
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case ACCOUNT_NAME_PENDING:
      return {
        ...state,
        accountName: null,
        errorMessage: null,
        pending: true
      };
    case ACCOUNT_NAME_SUCCESS:
      return {
        ...state,
        accountName: action.payload[0].accountName,
        errorMessage: null,
        pending: false
      };
    case ACCOUNT_NAME_ERROR:
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
