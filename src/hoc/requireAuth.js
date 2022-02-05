import React from 'react';
import { Navigate } from 'react-router-dom';

import { useSelector } from 'react-redux';

const requireAuth =
  Component =>
  ({ ...props }) => {
    const { authenticated } = useSelector(state => state.auth);

    console.log('엔터', authenticated);

    return authenticated === true ? (
      <Component {...props} />
    ) : (
      <Navigate to="/" />
    );
  };

export default requireAuth;
