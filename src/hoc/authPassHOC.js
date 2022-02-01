import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import history from '../history';

const authPassHOC =
  (Component, nextUrl) =>
  ({ ...props }) => {
    const { authenticated } = useSelector(state => state.auth);

    useEffect(() => {
      if (authenticated) {
        /*인증이 된사용자일경우 인증을 지나쳐서 패스*/
        history.push(nextUrl);
      }
    }, [authenticated]);

    return <Component {...props} />;
  };

export default authPassHOC;
