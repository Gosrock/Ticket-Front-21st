import React from 'react';
import ReactDOM from 'react-dom';
// import 'antd/dist/antd.min.css';
import { Provider } from 'react-redux';
import { store } from './state/storeSetting';
import './index.css';
import history from './history';

import LandingPage from './components/LandingPage/LandingPage';
import TicketCodePage from './components/ListProcess/TicketCodePage/TicketCodePage';
import {
  Routes,
  Route,
  unstable_HistoryRouter as HistoryRouter
} from 'react-router-dom';
// import LoginPage from "./components/views/AuthPage/LoginPage";
// import requireAuth from './hoc/requireAuth';
//import RequireAuthPage from './components/RequireAuthPage/RequireAuthPage';
// import LoginPage from './components/AuthPage/LoginPage';

// 고스락 스토리북 npm css 파일
import 'gosrock-storybook/dist/gosrockStyle.css';

// axios base url , 인증 인터셉터
import './config/axiosInstance';
import Pagination from './components/Pagination/Pagination';

// 모바일 환경에서 url 상단바 하단바가 뷰포트 크기에 포함되는것을 확인. 실제 화면 크기로 body사이즈를 줄여주기위함.
const setScreenSize = () => {
  let vh = window.innerHeight * 0.01;

  document.documentElement.style.setProperty('--vh', `${vh}px`);
};
setScreenSize();

// const RequireAuthPageHoc = requireAuth(RequireAuthPage);

//thunk 에서 history.push("/<toUrl>") 을 사용하기위함.
// 구조가 맘에안듬 컴포넌트단에서 히스토리 처리하는게.
// 액션에서 처리하는게 맞는것 같음
// hoc로 감싸기 위해서는 한번이렇게 hoc에서 리턴받아서 돔에 집어넣어야함
//https://stackoverflow.com/questions/56707885/browserrouter-vs-router-with-history-push
//https://github.com/remix-run/react-router/isㅕsues/8264#issuecomment-991271554
// BrowserRouter 에서 Router로 변경.

ReactDOM.render(
  <HistoryRouter history={history}>
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/*" element={<Pagination />} />
      </Routes>
    </Provider>
  </HistoryRouter>,
  document.getElementById('root')
);
