import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from './reducers';

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
// axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;

export const store = createStore(
  reducers,
  {
    // initial state for autheticated
    auth: {
      authenticated: userAccessToken === 'null' ? false : true,
      userAccessToken: userAccessToken === 'null' ? null : userAccessToken,
      phoneNumber: phoneNumber === 'null' ? null : phoneNumber
    }
  },
  enhancer
);
