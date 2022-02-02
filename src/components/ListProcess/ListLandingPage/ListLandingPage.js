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

function ListLandingPage({ ...props }) {
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
              topLabel="예매한 티켓을"
              bottomLabel="확인하고 싶어요"
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

export default ListLandingPage;
