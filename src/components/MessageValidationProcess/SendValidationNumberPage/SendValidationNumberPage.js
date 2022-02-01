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
  InputForm
} from 'gosrock-storybook';
import { useDispatch, useSelector } from 'react-redux';
import { messageValidation } from '../../../state/actions-creators';
function SendValidationNumberPage({ ...props }) {
  const [validationNumber, setValidationNumber] = useState('');

  const dispatch = useDispatch();

  const { messageToken, errorMessage, pending } = useSelector(
    state => state.messageSend
  );
  const { processForValidationNextPage } = useSelector(
    state => state.routePagination
  );
  const validationNumberInputHandler = e => {
    setValidationNumber(e.target.value);
  };

  const frontButtonHandler = () => {
    console.log(validationNumber);
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

  useEffect(() => {}, [errorMessage, pending]);
  console.log('인증번호 페이지');
  return (
    <TicketWrapContainer {...props}>
      <TicketContainer>
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
              value={validationNumber}
              onChange={validationNumberInputHandler}
              page="validate"
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

export default SendValidationNumberPage;
