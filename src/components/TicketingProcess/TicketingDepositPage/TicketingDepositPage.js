import React, { useState, useEffect, useRef } from 'react';
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
  GoBackButton,
  Modal
} from 'gosrock-storybook';
import './TicketingDepositPage.css';
import history from '../../../history';
import { useSelector, useDispatch } from 'react-redux';
import { ticketDeposit } from '../../../state/actions-creators';
const KAKAO_ID = 'Ej7zzaMiL';

function TicketingDepositPage({ ...props }) {
  const studentID = useSelector(state => state.ticketStudentInfo.studentID);
  const smallGroup = useSelector(state => state.ticketStudentInfo.smallGroup);
  console.log(studentID, smallGroup);

  const [accountName, setAccountName] = useState('');
  const modalRef = useRef();

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
    else modalRef.current.classList.remove('hidden');
  };

  const purchaseButtonHandler = () => {
    console.log('purchase');
    dispatch(ticketDeposit({ studentID, smallGroup, accountName }));
  };

  const kakaoClickButtonHandler = () => {
    const url = `https://qr.kakaopay.com/${KAKAO_ID}${toHexValue(3000)}`;
    openInNewTab(url);
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
            <div className="input-form">
              <InputForm
                value={accountName}
                onChange={accountNameInputHandler}
                page="name"
                ticketCount={1}
              />
            </div>
            <div className="modal hidden" ref={modalRef}>
              <div
                className="modal-overlay"
                onClick={() => {
                  modalRef.current.classList.add('hidden');
                }}
              ></div>
              <div className="modal-content">
                <Modal
                  onClickKakao={kakaoClickButtonHandler}
                  onClickPurchased={purchaseButtonHandler}
                />
              </div>
            </div>
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

const toHexValue = value => {
  return (parseInt(value) * 524288).toString(16);
};

const openInNewTab = url => {
  const newWindow = window.open(url);

  setTimeout(() => {
    return newWindow.close();
  }, 3000);
};
