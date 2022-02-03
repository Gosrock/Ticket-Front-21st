import React, { useState, useEffect } from 'react';
import {
  GoFrontButton,
  ProgressLayout,
  TicketContainer,
  TicketBodyHeader,
  TicketBody,
  TicketBottom,
  TicketWrapContainer,
  ProcessTitle,
  ProcessDescription,
  InputForm,
  TicketTop,
  GoBackButton
} from 'gosrock-storybook';
import history from '../../../history';
import { useSelector, useDispatch } from 'react-redux';
import { ticketAmount } from '../../../state/actions-creators';

function TicketingAmountPage({ ...props }) {
  const phoneNumber = useSelector(store => store.auth.phoneNumber);

  const [ticketCount, setTicketCount] = useState('');

  const dispatch = useDispatch();

  const gobackButtonHandler = () => {
    history.push('/');
  };

  const amountInputHandler = e => {
    setTicketCount(e.target.value.replace(/\D/, ''));
  };

  const frontButtonHandler = () => {
    if (ticketCount < 1) alert('티켓 수량을 입력해주세요.');
    else if (ticketCount > 9) alert('한번에 최대 9장까지 구매 가능합니다.');
    else dispatch(ticketAmount({ ticketCount }));
  };

  return (
    <TicketWrapContainer {...props}>
      <TicketContainer
        TopElement={
          <TicketTop>
            <GoBackButton onClick={gobackButtonHandler}></GoBackButton>
          </TicketTop>
        }
      >
        <ProgressLayout>
          <TicketBodyHeader>
            <ProcessTitle
              topLabel="안녕하세요,"
              bottomLabel={
                phoneNumber.replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`) +
                ' 님!'
              }
            />
            <ProcessDescription
              topLabel="티켓 수량을 입력해 주세요."
              bottomLabel="한번에 최대 9매까지 구매 가능합니다."
            />
          </TicketBodyHeader>
          <TicketBody>
            <InputForm
              value={ticketCount}
              onChange={amountInputHandler}
              page="count"
            />
          </TicketBody>
          <TicketBottom>
            <GoFrontButton
              onClick={frontButtonHandler}
              label="입금하러 가기"
            ></GoFrontButton>
          </TicketBottom>
        </ProgressLayout>
      </TicketContainer>
    </TicketWrapContainer>
  );
}

export default TicketingAmountPage;
