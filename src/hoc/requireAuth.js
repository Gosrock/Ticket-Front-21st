import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useSelector } from 'react-redux';

const requireAuth =
  Component =>
  ({ ...props }) => {
    const { authenticated } = useSelector(state => state.auth);
    let navigate = useNavigate();

    console.log('엔터', authenticated, !authenticated);

    useEffect(() => {
      if (authenticated == null) {
        console.log('엔터', authenticated);
      }
    }, [navigate, authenticated]);

    return <Component {...props} />;
  };

export default requireAuth;
