import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const messageValidationProcessHOC =
  Component =>
  ({ ...props }) => {
    const { messageToken } = useSelector(state => state.messageSend);

    return messageToken === null ? (
      <Navigate to="/" />
    ) : (
      <Component {...props} />
    );
  };

export default messageValidationProcessHOC;
