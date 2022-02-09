import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import authPassHOC from '../../hoc/authPassHOC';
import requireAuth from '../../hoc/requireAuth';
import TicketingStudentInfoPage from './TicketingStudentInfoPage/TicketingStudentInfo';
import TicketingDepositPage from './TicketingDepositPage/TicketingDepositPage';
import TicketingLandingPage from './TicketingLandingPage/TicketingLandingPage';

function TicketingProcess({ location }) {
  const APHTicketingLandingPage = authPassHOC(
    TicketingLandingPage,
    '/ticketing/deposit'
  );

  const RATicketingStudentInfoPage = requireAuth(TicketingStudentInfoPage);
  const RATicketingDepositPage = requireAuth(TicketingDepositPage);
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
        element={
          <RATicketingStudentInfoPage style={{ position: 'absolute' }} />
        }
      />
      <Route
        exact
        path="deposit"
        //애니메이션을 위해 absolute로 설정해야함!
        element={<RATicketingDepositPage style={{ position: 'absolute' }} />}
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

export default TicketingProcess;
