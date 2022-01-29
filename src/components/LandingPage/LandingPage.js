import React, { useState } from 'react';
import { Input } from 'antd';
import {
  TicketContainer,
  TicketTop,
  TicketBody,
  Ticket,
  TicketWrapContainer
} from 'gosrock-storybook';

function LandingPage() {
  const [validationNumber, setValidationNumber] = useState('');

  const handleValidationNumberChange = e => {
    console.log(e.target.value.length);

    setValidationNumber(e.target.value);
    if (e.target.value.length >= 4) e.target.blur();
  };
  const handleOnclick = () => {
    console.log('asdlfkj');
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
        <TicketContainer>
          <TicketBody
            style={{
              backgroundColor: 'white'
            }}
          >
            <Ticket payment QRvalue="asdfasdf" />
          </TicketBody>
        </TicketContainer>
      </TicketContainer>
    </TicketWrapContainer>
  );
}

export default LandingPage;
