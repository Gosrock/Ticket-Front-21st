import {
  MESSAGE_VALIDATION_SUCCESS,
  MESSAGE_VALIDATION_PENDING,
  MESSAGE_VALIDATION_ERROR
} from '../action-types';
const INITIAL_STATE = {
  authenticated: false,
  userAccessToken: null,
  phoneNumber: null,
  errorMessage: null,
  pending: false
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case MESSAGE_VALIDATION_PENDING:
      // console.log(action.type, action.payload);
      return {
        ...state,
        authenticated: false,
        userAccessToken: null,
        phoneNumber: null,
        errorMessage: null,
        pending: true
      };
    case MESSAGE_VALIDATION_SUCCESS:
      return {
        ...state,
        authenticated: true,
        userAccessToken: action.payload.userAccessToken,
        phoneNumber: action.payload.phoneNumber,
        errorMessage: null,
        pending: false
      };
    case MESSAGE_VALIDATION_ERROR:
      return {
        ...state,
        authenticated: null,
        errorMessage: action.payload,
        pending: false
      };
    default:
      return state;
  }
}
