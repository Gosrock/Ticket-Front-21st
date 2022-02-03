import {
  GET_TICKETS_SUCCESS,
  GET_TICKETS_PENDING,
  GET_TICKETS_ERROR
} from '../action-types';

const INITIAL_STATE = {
  tickets: [],
  pending: false
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_TICKETS_PENDING:
      // console.log(action.type, action.payload);
      return {
        ...state,
        tickets: [],
        pending: true
      };
    case GET_TICKETS_SUCCESS:
      return {
        ...state,
        tickets: action.payload,
        pending: false
      };
    case GET_TICKETS_ERROR:
      return {
        ...state,
        tickets: [],
        errorMessage: action.payload,
        pending: false
      };
    default:
      return state;
  }
}
