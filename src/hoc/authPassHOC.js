import React from 'react';
import { useSelector } from 'react-redux';

import { Navigate } from 'react-router-dom';

const authPassHOC =
  (Component, nextUrl) =>
  ({ ...props }) => {
    const { authenticated } = useSelector(state => state.auth);

    return authenticated === true ? (
      <Navigate to={nextUrl} />
    ) : (
      <Component {...props} />
    );
  };

export default authPassHOC;
