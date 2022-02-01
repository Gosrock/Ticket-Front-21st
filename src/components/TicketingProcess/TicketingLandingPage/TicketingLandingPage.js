import React from 'react';
import {
  GoFrontButton,
  ProgressLayout,
  TicketContainer,
  TicketBodyHeader,
  TicketBody,
  TicketBottom,
  TicketWrapContainer,
  ProcessTitle
} from 'gosrock-storybook';
import history from '../../../history';

function TicketingLandingPage({ ...props }) {
  //Handler is handle ~
  const validationClickButtonHandler = () => {
    history.push('/auth/message');
  };
  return (
    <TicketWrapContainer {...props}>
      <TicketContainer>
        <ProgressLayout>
          <TicketBodyHeader />
          <TicketBody>
            <ProcessTitle
              topLabel="티켓 예매가"
              bottomLabel="처음이신가요?"
              textAlign="right"
              textSize="big"
            />
          </TicketBody>

          <TicketBottom>
            <GoFrontButton
              label="휴대폰 인증하러 가기"
              onClick={validationClickButtonHandler}
            />
          </TicketBottom>
        </ProgressLayout>
      </TicketContainer>
    </TicketWrapContainer>
  );
}

export default TicketingLandingPage;
