import { NAVIGATE, NAVIGATE_ERROR, NAVIGATE_SUCCESS } from '../actions/types';

const INITIAL_STATE = {
  navigate: false,
  errorMessage: null,
  pending: false
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case NAVIGATE:
      // console.log(action.type, action.payload);
      return { ...state, pending: true };
    case NAVIGATE_SUCCESS:
      return {
        ...state,
        navigate: true,
        errorMessage: null,
        pending: false
      };
    case NAVIGATE_ERROR:
      return {
        ...state,
        navigate: false,
        errorMessage: action.payload,
        pending: false
      };
    default:
      return state;
  }
}
