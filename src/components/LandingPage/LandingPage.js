import React from 'react';
import {
  TicketContainer,
  TicketTop,
  TicketBody,
  TicketWrapContainer,
  TicketLayout,
  GoFrontButton,
  GoBackButton
} from 'gosrock-storybook';
import history from '../../history';
import { useSelector } from 'react-redux';
import HomePage from './HomePage';

function LandingPage() {
  const { authenticated } = useSelector(state => state.auth);
  const { ticketingAvailable } = useSelector(state => state.ticketingAvail);

  const ticketingButtonHandler = () => {
    if (authenticated) {
      return history.push('/ticketing/amount');
    }
    history.push('/ticketing/landing');
  };
  const listButtonHandler = () => {
    if (authenticated) {
      return history.push('/list/mytickets');
    }
    history.push('/list/landing');
  };
  const authDeleteHandler = () => {
    localStorage.removeItem('userAccessToken', null);
    localStorage.removeItem('phoneNumber', null);
    window.location.reload();
  };

  const qrHandler = () => {
    history.push('/tickets/:ticketId');
  };

  // const shouldBlur = (e) => {
  //   if (validationNumber.length === 4) {
  //     e.target.blur();

  //   }
  // }
  return (
    <HomePage ticketing={ticketingButtonHandler} list={listButtonHandler} />
  );
}

export default LandingPage;
