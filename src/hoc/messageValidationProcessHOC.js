import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import history from '../history';

const messageValidationProcessHOC =
  Component =>
  ({ ...props }) => {
    const { messageToken } = useSelector(state => state.messageSend);

    useEffect(() => {
      if (messageToken == null) {
        console.log('엔터', messageToken);
        history.push('/auth/message');
      }
    }, [messageToken]);

    return <Component {...props} />;
  };

export default messageValidationProcessHOC;
