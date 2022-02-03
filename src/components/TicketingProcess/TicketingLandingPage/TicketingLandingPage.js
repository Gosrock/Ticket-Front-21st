import React from 'react';
import {
  GoFrontButton,
  TicketContainer,
  TicketBodyHeader,
  TicketBody,
  TicketBottom,
  TicketWrapContainer,
  ProcessTitle,
  InfoLayout,
  TicketTop,
  GoBackButton
} from 'gosrock-storybook';
import history from '../../../history';

function TicketingLandingPage({ ...props }) {
  //Handler is handle ~
  const validationClickButtonHandler = () => {
    history.push('/auth/message');
  };
  const goListLandingClickButtonHandler = () => {
    history.push('/list/landing');
  };
  const goLandingPageHandler = () => {
    history.push('/');
  };
  return (
    <TicketWrapContainer {...props}>
      <TicketContainer
        TopElement={
          <TicketTop>
            <GoBackButton onClick={goLandingPageHandler} />
          </TicketTop>
        }
      >
        <InfoLayout>
          <TicketBodyHeader />
          <TicketBody style={{ paddingTop: '10%' }}>
            <ProcessTitle
              topLabel="티켓 예매가"
              bottomLabel="처음이신가요?"
              textAlign="right"
              textSize="big"
            />
            <div style={{ paddingTop: '6%' }}>
              <GoFrontButton
                label="휴대폰 인증하러 가기"
                onClick={validationClickButtonHandler}
              />
              <div
                style={{
                  height: '1px',
                  margin: '4%',
                  backgroundColor: '#363636'
                }}
              ></div>
              <GoFrontButton
                label="아니요, 예매한 티켓을 확인하고 싶어요"
                onClick={goListLandingClickButtonHandler}
              />
            </div>
          </TicketBody>
        </InfoLayout>
      </TicketContainer>
    </TicketWrapContainer>
  );
}

export default TicketingLandingPage;
