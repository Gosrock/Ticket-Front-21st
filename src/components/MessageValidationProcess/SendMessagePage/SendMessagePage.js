import React, { useState, useEffect } from 'react';
import {
  //   GoBackButton,
  GoFrontButton,
  ProgressLayout,
  TicketContainer,
  TicketBodyHeader,
  TicketBody,
  TicketBottom,
  TicketWrapContainer,
  ProcessDescription,
  ProcessTitle,
  InputForm,
  TicketTop,
  GoBackButton
} from 'gosrock-storybook';
import { useDispatch, useSelector } from 'react-redux';
import { messageSend } from '../../../state/actions-creators';
import history from '../../../history';

function SendMessagePage({ ...props }) {
  const [phoneNumber, setPhoneNumber] = useState('');

  const dispatch = useDispatch();

  const { errorMessage, pending } = useSelector(state => state.messageSend);
  const phoneNumberInputHandler = e => {
    setPhoneNumber(e.target.value.replace(/\D/, ''));
  };

  const frontButtonHandler = () => {
    console.log(phoneNumber);
    if (phoneNumber === null || phoneNumber.length !== 11) {
      alert('휴대폰 번호 11자리를 제대로 입력 해주세요');
      return;
    }
    dispatch(messageSend({ phoneNumber }));
  };

  useEffect(() => {
    if (errorMessage) {
      alert('핸드폰 번호를 제대로 입력해 주세요.');
    }
  }, [errorMessage, pending]);
  console.log('a문자발송 페이지');

  return (
    <TicketWrapContainer {...props}>
      <TicketContainer
        TopElement={
          <TicketTop>
            <GoBackButton
              onClick={() => {
                history.push('/ticketing/landing');
              }}
            ></GoBackButton>
          </TicketTop>
        }
      >
        <ProgressLayout>
          <TicketBodyHeader style={{ flexDirection: 'column' }}>
            <ProcessTitle
              topLabel="본인 확인을 위해"
              bottomLabel="휴대폰 인증이 필요해요."
            />
            <ProcessDescription
              topLabel="하이픈( - ) 없이"
              bottomLabel="숫자로만 입력해주세요."
            />
          </TicketBodyHeader>
          <TicketBody>
            <InputForm
              value={phoneNumber}
              onChange={phoneNumberInputHandler}
              page="phone"
            />
          </TicketBody>

          <TicketBottom>
            <GoFrontButton
              onClick={frontButtonHandler}
              label="인증 번호 받기"
            ></GoFrontButton>
          </TicketBottom>
        </ProgressLayout>
      </TicketContainer>
    </TicketWrapContainer>
  );
}

export default SendMessagePage;
