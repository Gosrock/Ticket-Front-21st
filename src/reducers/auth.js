import { AUTH_USER, AUTH_ERROR, AUTH } from '../actions/types';

const INITIAL_STATE = {
  authenticated: null,
  userInfo: null,
  errorMessage: null,
  pending: false
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case AUTH:
      console.log(action.type, action.payload);
      return { ...state, pending: true };
    case AUTH_USER:
      return {
        ...state,
        authenticated: action.payload.data.accessToken,
        userInfo: action.payload.data,
        errorMessage: null,
        pending: false
      };
    case AUTH_ERROR:
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
