import React, { useState } from 'react';
import { Input } from 'antd';
import {
  TicketContainer,
  TicketTop,
  TicketBody,
  Ticket,
  TicketWrapContainer,
  TicketLayout,
  GoFrontButton
} from 'gosrock-storybook';
import history from '../../history';

function LandingPage() {
  const [validationNumber, setValidationNumber] = useState('');

  const handleValidationNumberChange = e => {
    console.log(e.target.value.length);

    setValidationNumber(e.target.value);
    if (e.target.value.length >= 4) e.target.blur();
  };
  const ticketingButtonHandler = () => {
    history.push('/ticketing/landing');
  };
  const listButtonHandler = () => {
    history.push('/list/landing');
  };
  const authDeleteHandler = () => {
    localStorage.setItem('userAccessToken', null);
    localStorage.setItem('phoneNumber', null);
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
          <TicketTop style={{ backgroundColor: 'red', height: '100%' }}>
            asdf
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
              label={'인증 삭제 버튼'}
            ></GoFrontButton>
          </TicketBody>
        </TicketLayout>
      </TicketContainer>
    </TicketWrapContainer>
  );
}

export default LandingPage;
