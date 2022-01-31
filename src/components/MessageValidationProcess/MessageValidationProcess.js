import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
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
        element={<SendMessagePage style={{ position: 'absolute' }} />}
      />
      <Route
        exact
        path="validation"
        element={
          <HOCSendValidationNumberPage style={{ position: 'absolute' }} />
        }
      />
      <Route path="*" element={<Navigate to="/auth/message" />} />
    </Routes>
  );
}

export default MessageValidationProcess;
