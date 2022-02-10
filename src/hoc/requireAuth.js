import React from 'react';
import { Navigate } from 'react-router-dom';

import { useSelector } from 'react-redux';

const requireAuth =
  (Component, Policy) =>
  ({ ...props }) => {
    const { authenticated } = useSelector(state => state.auth);
    const { ticketingAvailable } = useSelector(state => state.ticketingAvail);
    const { studentID } = useSelector(state => state.ticketStudentInfo);

    console.log(
      'HOC authenticated : ',
      authenticated,
      'HOC ticketingAvailable : ',
      ticketingAvailable
    );
    if (Policy === 'TICKETING_AMOUNT') {
      // 티켓팅 프로세스에선 인증도 된상태여야 하며, 티켓팅이 발급되어야합니다.

      if (authenticated === true && ticketingAvailable === false) {
        alert('이미 발급된 티켓이 있습니다. 마이페이지로 이동합니다.');
        return <Navigate to="/list/mytickets" />;
      }
      if (authenticated === false) {
        alert('전화번호 인증이 필요한 페이지 입니다.');
        return <Navigate to="/" />;
      }
      return <Component {...props} />;
    }

    if (Policy === 'TICKETING_DEPOSIT') {
      // 티켓팅 프로세스에선 인증도 된상태여야 하며, 티켓팅이 발급되어야합니다.

      if (authenticated === true && ticketingAvailable === false) {
        alert('이미 발급된 티켓이 있습니다. 마이페이지로 이동합니다.');
        return <Navigate to="/list/mytickets" />;
      }
      if (authenticated === false) {
        alert('전화번호 인증이 필요한 페이지 입니다.');
        return <Navigate to="/" />;
      }
      if (studentID === null) {
        alert('잘못된 접근입니다.');
        return <Navigate to="/" />;
      }
      return <Component {...props} />;
    }

    return authenticated === true ? (
      <Component {...props} />
    ) : (
      <Navigate to="/" />
    );
  };

export default requireAuth;
