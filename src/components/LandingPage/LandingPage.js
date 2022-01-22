import React, { useState } from 'react';
import { Input } from 'antd';
import {
  GoBackButton,
  GoFrontButton,
  TicketWrapContainer,
  TicketContainer,
  TicketTop,
  TicketBodyHeader,
  TicketBody,
  TicketBottom
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
    <>
      <TicketWrapContainer>
        <TicketContainer style={{ padding: 0 }}>
          <TicketTop>
            <GoBackButton />
          </TicketTop>
          <TicketBodyHeader>TicketBodyHeader 비율을 2로</TicketBodyHeader>
          <TicketBody>
            <div
              style={{
                height: '100%',
                width: '100%'
              }}
            >
              TicketBody 비율을 2로
            </div>
          </TicketBody>
          <TicketBottom>TicketBottom 비율을 2로</TicketBottom>
        </TicketContainer>
      </TicketWrapContainer>
    </>
  );
}

export default LandingPage;
