import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import messageValidationProcessHOC from '../../hoc/messageValidationProcessHOC';
import SendMessagePage from './SendMessagePage/SendMessagePage';
import SendValidationNumberPage from './SendValidationNumberPage/SendValidationNumberPage';
function MessageValidationProcess({ location }) {
  const HOCSendValidationNumberPage = messageValidationProcessHOC(
    SendValidationNumberPage
  );

  return (
    <Routes location={location}>
      <Route
        exact
        path="message"
        //애니메이션을 위해 absolute로 설정해야함!
        element={<SendMessagePage style={{ position: 'absolute' }} />}
      />
      <Route
        exact
        path="validation"
        //애니메이션을 위해 absolute로 설정해야함!
        element={
          <HOCSendValidationNumberPage style={{ position: 'absolute' }} />
        }
      />
      {/*이상한 url로 들어올경우 홈페이지로 이동*/}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default MessageValidationProcess;
