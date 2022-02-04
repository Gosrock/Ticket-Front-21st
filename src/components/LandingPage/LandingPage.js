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

function LandingPage() {
  const { authenticated } = useSelector(state => state.auth);

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
    localStorage.setItem('userAccessToken', null);
    localStorage.setItem('phoneNumber', null);
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
    <TicketWrapContainer>
      <TicketContainer
        TopElement={
          <TicketTop>
            <GoBackButton />
          </TicketTop>
        }
      >
        <TicketLayout>
          <TicketBody
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <GoFrontButton
              onClick={ticketingButtonHandler}
              label={'티켓예매 테스트 버튼'}
            ></GoFrontButton>
            <GoFrontButton
              onClick={listButtonHandler}
              label={'내 예매 내역 테스트 버튼'}
            ></GoFrontButton>
            <GoFrontButton
              onClick={authDeleteHandler}
              label={'인증 삭제 버튼, hard refresh'}
            ></GoFrontButton>
            <GoFrontButton onClick={qrHandler} label={'qr'}></GoFrontButton>
          </TicketBody>
        </TicketLayout>
      </TicketContainer>
    </TicketWrapContainer>
  );
}

export default LandingPage;
