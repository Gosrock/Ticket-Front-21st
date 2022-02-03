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
import { ticketDeposit } from '../../../state/actions-creators';

function TicketingDepositPage({ ...props }) {
  const ticketCount = useSelector(state => state.ticketAmount.ticketCount);
  console.log(ticketCount);

  const [accountName, setAccountName] = useState('');

  const dispatch = useDispatch();

  const gobackButtonHandler = () => {
    history.push('/ticketing/amount');
  };

  const accountNameInputHandler = e => {
    setAccountName(e.target.value);
  };

  const frontButtonHandler = () => {
    if (accountName.length < 2)
      alert('입금자명을 두글자 이상으로 입력해주세요.');
    else dispatch(ticketDeposit({ ticketCount, accountName }));
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
            <ProcessTitle topLabel="입금자명을" bottomLabel="입력해주세요." />
            <ProcessDescription topLabel="이름은 4자 이내로 입력해주세요." />
          </TicketBodyHeader>
          <TicketBody>
            <InputForm
              value={accountName}
              onChange={accountNameInputHandler}
              page="name"
              ticketCount={parseInt(ticketCount)}
            />
          </TicketBody>
          <TicketBottom>
            <GoFrontButton
              onClick={frontButtonHandler}
              label="티켓 발급하기"
            ></GoFrontButton>
          </TicketBottom>
        </ProgressLayout>
      </TicketContainer>
    </TicketWrapContainer>
  );
}

export default TicketingDepositPage;
