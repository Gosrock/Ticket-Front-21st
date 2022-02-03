import { combineReducers } from 'redux';
import auth from './auth';
import messageSend from './messageSend';
import routePagination from './routePagination';
import { ticketAmount } from './ticketAmount';
import ticketDeposit from './ticketDeposit';

// 가져올때 확인하는 부분..! mapStateToProps
export default combineReducers({
  auth: auth,
  messageSend: messageSend,
  routePagination: routePagination,
  ticketAmount: ticketAmount,
  ticketDeposit: ticketDeposit
});
