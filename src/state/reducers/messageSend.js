import {
  MESSAGE_SEND_SUCCESS,
  MESSAGE_SEND_PENDING,
  MESSAGE_SEND_ERROR
} from '../action-types';
const INITIAL_STATE = {
  messageToken: null,
  errorMessage: null,
  // 테스트용
  validationNumber: null,
  pending: false
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case MESSAGE_SEND_PENDING:
      return {
        ...state,
        messageToken: null,
        errorMessage: null,
        // 테스트용
        validationNumber: null,
        pending: true
      };
    case MESSAGE_SEND_SUCCESS:
      return {
        ...state,
        messageToken: action.payload.messageToken,
        // 테스트용
        validationNumber: action.payload.authenticationNumber,
        errorMessage: null,
        pending: false
      };
    case MESSAGE_SEND_ERROR:
      return {
        ...state,
        messageToken: null,
        errorMessage: action.payload,
        validationNumber: null,
        pending: false
      };
    default:
      return state;
  }
}
