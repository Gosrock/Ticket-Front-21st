import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import authPassHOC from '../../hoc/authPassHOC';
import requireAuth from '../../hoc/requireAuth';
import ListLandingPage from './ListLandingPage/ListLandingPage';
import TicketListPage from './TicketListPage/TicketListPage';
import TicketCodePage from './TicketCodePage/TicketCodePage';

function ListProcess({ location }) {
  // 인증되어있으면 랜딩페이지 넘기고 바로 티켓리스트로
  const APHTicketListPage = authPassHOC(ListLandingPage, '/list/mytickets');
  // 인증 안되어있으면 인증페이지로,
  const RATicketListPage = requireAuth(TicketListPage);

  return (
    <Routes location={location}>
      <Route
        exact
        path="landing"
        //애니메이션을 위해 absolute로 설정해야함!
        element={<APHTicketListPage style={{ position: 'absolute' }} />}
      />
      <Route
        exact
        path="mytickets"
        //애니메이션을 위해 absolute로 설정해야함!
        element={<RATicketListPage style={{ position: 'absolute' }} />}
      />
      {/*이상한 url로 들어올경우 홈페이지로 이동*/}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default ListProcess;
