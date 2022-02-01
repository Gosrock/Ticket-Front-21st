import React, { useState } from 'react';
import {
  TicketContainer,
  TicketTop,
  TicketBody,
  TicketBodyHeader,
  TicketWrapContainer,
  InfoLayout,
  GoBackButton,
  ProcessTitle,
  ProcessDescription
} from 'gosrock-storybook';
import './TicketListPage.css';
import history from '../../../history';
import { useSelector } from 'react-redux';

function TicketListPage() {
  const { authenticated, phoneNumber } = useSelector(state => state.auth);
  const bottomLabel = `${phoneNumber.replace(
    /^(\d{2,3})(\d{3,4})(\d{4})$/,
    `$1-$2-$3`
  )} 님!`;

  /* const ViewTicketHandler = () => {
    if (authenticated) {
      return history.push(`/tickets/${ticketId}`);
    }
    history.push('/list/landing');
  }; */

  return (
    <TicketWrapContainer>
      <TicketContainer
        TopElement={
          <TicketTop>
            <GoBackButton
              onClick={() => {
                history.back();
              }}
            />
          </TicketTop>
        }
      >
        <InfoLayout>
          <TicketBodyHeader>
            <ProcessTitle topLabel="안녕하세요," bottomLabel={bottomLabel} />
            <ProcessDescription topLabel="예매한 티켓을 보여드릴게요." />
            <p
              className="show-account"
              onClick={() => {
                console.log('입금계좌보기');
              }}
            >
              {' '}
              입금 계좌보기
            </p>
          </TicketBodyHeader>
          <TicketBody>
            <div className="list-container"></div>
          </TicketBody>
        </InfoLayout>
      </TicketContainer>
    </TicketWrapContainer>
  );
}

export default TicketListPage;
