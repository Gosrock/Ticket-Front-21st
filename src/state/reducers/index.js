import { combineReducers } from 'redux';
import auth from './auth';
import messageSend from './messageSend';
import routePagination from './routePagination';
import getTickets from './getTickets';
import ticketStudentInfo from './ticketStudentInfo';
import ticketDeposit from './ticketDeposit';
import getTicket from './getTicket';
import ticketingAvail from './ticketingAvail';

// 가져올때 확인하는 부분..! mapStateToProps
export default combineReducers({
  auth: auth,
  messageSend: messageSend,
  routePagination: routePagination,
  getTickets: getTickets,
  getTicket: getTicket,
  ticketStudentInfo: ticketStudentInfo,
  ticketDeposit: ticketDeposit,
  ticketingAvail: ticketingAvail
});
