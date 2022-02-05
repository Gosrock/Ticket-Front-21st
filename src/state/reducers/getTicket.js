import {
  GET_TICKET_SUCCESS,
  GET_TICKET_PENDING,
  GET_TICKET_ERROR
} from '../action-types';

const INITIAL_STATE = {
  ticket: {},
  pending: false,
  invalidId: false
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_TICKET_PENDING:
      // console.log(action.type, action.payload);
      return {
        ...state,
        ticket: {},
        pending: true,
        invalidId: false
      };
    case GET_TICKET_SUCCESS:
      return {
        ...state,
        ticket: action.payload,
        pending: false,
        invalidId: false
      };
    case GET_TICKET_ERROR:
      return {
        ...state,
        ticket: {},
        pending: false,
        invalidId: true
      };
    default:
      return state;
  }
}
