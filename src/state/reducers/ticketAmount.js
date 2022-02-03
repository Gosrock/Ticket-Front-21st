const INITIAL_STATE = {
  ticketCount: null,
  errorMessage: null
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function ticketAmount(state = INITIAL_STATE, action) {
  if (action.type === 'TICKET_AMOUNT_SUCCESS') {
    return {
      ...state,
      ticketCount: action.payload,
      errorMessage: null
    };
  }
  return state;
}
