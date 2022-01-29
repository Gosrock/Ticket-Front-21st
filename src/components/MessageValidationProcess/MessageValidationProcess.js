import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import messageValidationProcessHOC from '../../hoc/messageValidationProcessHOC';
import SendMessagePage from './SendMessagePage/SendMessagePage';
import SendValidationNumberPage from './SendValidationNumberPage/SendValidationNumberPage';

function MessageValidationProcess() {
  const HOCSendValidationNumberPage = messageValidationProcessHOC(
    SendValidationNumberPage
  );

  return (
    <Routes>
      <Route exact path="message" element={<SendMessagePage />} />
      <Route
        exact
        path="validation"
        element={<HOCSendValidationNumberPage />}
      />
      <Route path="*" element={<Navigate to="/auth/message" />} />
    </Routes>
  );
}

export default MessageValidationProcess;
