import { combineReducers } from 'redux';
import auth from './auth';
import messageSend from './messageSend';
import routePagination from './routePagination';
import getTickets from './getTickets';
import ticketAmount from './ticketAmount';
import ticketDeposit from './ticketDeposit';

window.Kakao.init('8bb6e42c94b8560c4e4cc4ad2d1447f6');

// 가져올때 확인하는 부분..! mapStateToProps
export default combineReducers({
  auth: auth,
  messageSend: messageSend,
  routePagination: routePagination,
  getTickets: getTickets,
  ticketAmount: ticketAmount,
  ticketDeposit: ticketDeposit
});
