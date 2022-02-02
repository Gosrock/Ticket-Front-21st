import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import authPassHOC from '../../hoc/authPassHOC';
import requireAuth from '../../hoc/requireAuth';
import TicketingAmountPage from './TicketingAmountPage/TicketingAmountPage';
import TicketingAccountNamePage from './TicketingAccountNamePage/TicketingAccountNamePage';
import TicketingLandingPage from './TicketingLandingPage/TicketingLandingPage';

function MessageValidationProcess({ location }) {
  const APHTicketingLandingPage = authPassHOC(
    TicketingLandingPage,
    '/ticketing/amount',
    '/ticketing/accountName'
  );

  const RATicketingAmountPage = requireAuth(TicketingAmountPage);
  const RATicketingAccountNamePage = requireAuth(TicketingAccountNamePage);
  return (
    <Routes location={location}>
      <Route
        exact
        path="landing"
        //애니메이션을 위해 absolute로 설정해야함!
        element={<APHTicketingLandingPage style={{ position: 'absolute' }} />}
      />
      <Route
        exact
        path="amount"
        //애니메이션을 위해 absolute로 설정해야함!
        element={<RATicketingAmountPage style={{ position: 'absolute' }} />}
      />
      <Route
        exact
        path="accountName"
        //애니메이션을 위해 absolute로 설정해야함!
        element={
          <RATicketingAccountNamePage style={{ position: 'absolute' }} />
        }
      />
      {/* <Route
        exact
        path="validation"
        //애니메이션을 위해 absolute로 설정해야함!
        element={
          <HOCSendValidationNumberPage style={{ position: 'absolute' }} />
        }
      /> */}
      {/*이상한 url로 들어올경우 홈페이지로 이동*/}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default MessageValidationProcess;
