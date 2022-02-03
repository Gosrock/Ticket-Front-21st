import history from '../../history';

export const ticketAmount =
  ({ ticketCount }) =>
  dispatch => {
    console.log(ticketCount);

    dispatch({ type: 'TICKET_AMOUNT_SUCCESS', payload: parseInt(ticketCount) });

    // 자동으로 다음 단계로 넘어가게 끔
    history.push('/ticketing/deposit');
  };
