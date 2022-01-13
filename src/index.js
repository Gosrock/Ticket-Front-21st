import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.min.css';

import axios from 'axios';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from './reducers';
import { BrowserRouter } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import { Route, Routes } from 'react-router-dom';
// import LoginPage from "./components/views/AuthPage/LoginPage";
import requireAuth from './hoc/requireAuth';
import RequireAuthPage from './components/RequireAuthPage/RequireAuthPage';

// 리덕스 데브툴 을 위한 세팅
const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

// other store enhancers if any
const enhancer = composeEnhancers(applyMiddleware(reduxThunk));

// 나중에 전화번호 인증된 상태일때 강제로 accessToken 불러오는 자리( initial 리덕스 에 집어넣기 위함 (새로고침 시))
// const accessToken = localStorage.getItem("accessToken");

// axios Bearer 토큰에 커먼 헤더로 껴놓기 위함
// axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;

const store = createStore(
  reducers,
  {
    // initial state for autheticated
    auth: {
      // authenticated: accessToken === "null" ? null : accessToken,
    }
  },
  enhancer
);

// hoc로 감싸기 위해서는 한번이렇게 hoc에서 리턴받아서 돔에 집어넣어야함
const RequireAuthPageHoc = requireAuth(RequireAuthPage);

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Routes>
        <Route exact path="/requireauth" element={<RequireAuthPageHoc />} />
        <Route path="/*" element={<LandingPage />} />
      </Routes>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
