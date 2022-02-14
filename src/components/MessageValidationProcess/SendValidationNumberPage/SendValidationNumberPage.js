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
  GoBackButton,
  TicketTop
} from 'gosrock-storybook';
import { useDispatch, useSelector } from 'react-redux';
import { messageValidation } from '../../../state/actions-creators';
import history from '../../../history';
import { messageSend } from '../../../state/actions-creators';

function SendValidationNumberPage({ ...props }) {
  const [validationNumber, setValidationNumber] = useState('');

  const dispatch = useDispatch();

  const {
    messageToken,
    validationNumber: reducerValidationNumber,
    phoneNumber
  } = useSelector(state => state.messageSend);

  const { errorMessage, pending } = useSelector(state => state.auth);
  //processForValidationNextPage 는 메시지 인증하는 프로세스가 두가지의 단계 ,
  //즉 티켓 예매하는 단계와 내 티켓 확인하는 단계 두가지가 있어서 다음 페이지를 어디로 이동시킬지 결정하기 위함입니다.
  //단계도중 새로고침이 발생하면 홈페이지로 보냅니다.

  const { processForValidationNextPage } = useSelector(
    state => state.routePagination
  );

  const validationNumberInputHandler = e => {
    setValidationNumber(e.target.value.replace(/\D/, ''));
  };

  const frontButtonHandler = () => {
    console.log(validationNumber);
    if (validationNumber === null || validationNumber.length !== 6) {
      alert('인증번호 6자리를 제대로 입력 해주세요');
      return;
    }
    dispatch(
      messageValidation(
        {
          messageToken,
          authenticationNumber: validationNumber
        },
        // 인증 잘못되게 진행된경우 홈페이지로 강제 이동.
        processForValidationNextPage ? processForValidationNextPage : '/'
      )
    );
  };

  const resendButtonHandler = () => {
    dispatch(messageSend({ phoneNumber }));
  };

  useEffect(() => {
    if (errorMessage !== null && pending === false) {
      alert('인증번호가 잘못되었습니다.');
    }
  }, [errorMessage, pending]);

  return (
    <TicketWrapContainer {...props}>
      <TicketContainer
        TopElement={
          <TicketTop>
            <GoBackButton
              onClick={() => {
                history.push('/auth/message');
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
              resend={resendButtonHandler}
              value={validationNumber}
              onChange={validationNumberInputHandler}
              page="validate"
            />
            <div style={{ color: 'white' }}>
              테스트용 {reducerValidationNumber}
            </div>
          </TicketBody>

          <TicketBottom>
            <GoFrontButton
              onClick={frontButtonHandler}
              label={
                processForValidationNextPage === '/ticketing/amount'
                  ? '예매하기'
                  : '내 티켓 확인하기'
              }
            ></GoFrontButton>
          </TicketBottom>
        </ProgressLayout>
      </TicketContainer>
    </TicketWrapContainer>
  );
}

export default SendValidationNumberPage;
