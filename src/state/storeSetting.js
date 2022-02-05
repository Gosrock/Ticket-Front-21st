import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from './reducers';
import history from '../history';
import axios from 'axios';
// 리덕스 데브툴 을 위한 세팅
const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

// other store enhancers if any
const enhancer = composeEnhancers(applyMiddleware(reduxThunk));

// 나중에 전화번호 인증된 상태일때 강제로 accessToken 불러오는 자리( initial 리덕스 에 집어넣기 위함 (새로고침 시))
const userAccessToken = localStorage.getItem('userAccessToken');
const phoneNumber = localStorage.getItem('phoneNumber');

// axios Bearer 토큰에 커먼 헤더로 껴놓기 위함
if (userAccessToken !== null) {
  axios.defaults.headers.common.Authorization = `Bearer ${userAccessToken}`;
}

// pathname  QR티켓으로 바로 들어오는 경우 tickets 로 대응하기 위함
let firstPathName = history.location.pathname;
console.log(firstPathName.includes('/tickets/'));
if (firstPathName.includes('/tickets/')) {
  firstPathName = '/tickets/:ticketId';
  console.log(firstPathName);
}

export const store = createStore(
  reducers,
  {
    // initial state for autheticated
    auth: {
      authenticated: userAccessToken === null ? false : true,
      userAccessToken: userAccessToken === null ? null : userAccessToken,
      phoneNumber: phoneNumber === null ? null : phoneNumber
    },
    routePagination: {
      currentPage: firstPathName
    }
  },
  enhancer
);
