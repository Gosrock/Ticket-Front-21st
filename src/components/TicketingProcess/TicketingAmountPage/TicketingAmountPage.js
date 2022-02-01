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

function TicketingAmountPage({ ...props }) {
  //Handler is handle ~
  //   const validationClickButtonHandler = () => {
  //     history.push('/auth/message');
  //   };
  return (
    <TicketWrapContainer {...props}>
      <TicketContainer>
        <ProgressLayout>
          <TicketBodyHeader />
          <TicketBody>
            <ProcessTitle
              topLabel="안녕하세요"
              bottomLabel="티켓 수량 입력 페이지 테스트"
            />
          </TicketBody>

          <TicketBottom>
            <GoFrontButton label="입금하러 가기" />
          </TicketBottom>
        </ProgressLayout>
      </TicketContainer>
    </TicketWrapContainer>
  );
}

export default TicketingAmountPage;
