import React, { useState } from 'react';
import { Input } from 'antd';
import {
  GoBackButton,
  GoFrontButton,
  ProgressLayout,
  TicketContainer,
  TicketTop,
  TicketBodyHeader,
  TicketBody,
  TicketBottom,
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
            <GoBackButton />
          </TicketTop>
        }
      >
        <ProgressLayout>
          <TicketBottom
            style={{
              backgroundColor: 'green'
            }}
          >
            바텀영역
          </TicketBottom>
          <TicketBody
            style={{
              backgroundColor: 'white'
            }}
          >
            바디영역
          </TicketBody>
          <TicketBodyHeader
            style={{
              backgroundColor: 'blue'
            }}
          >
            헤더 영역
          </TicketBodyHeader>
        </ProgressLayout>
      </TicketContainer>
    </TicketWrapContainer>
  );
}

export default LandingPage;
