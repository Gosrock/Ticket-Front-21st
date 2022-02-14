import React from 'react';
import {
  GoFrontButton,
  TicketBodyHeader,
  TicketBody,
  TicketBottom,
  ProcessTitle,
  ProcessDescription,
  InputForm,
  Modal
} from 'gosrock-storybook';
// 재학생 졸업생용
function TicketingOBDeposit({
  accountName,
  accountNameInputHandler,
  modalRef,
  kakaoClickButtonHandler,
  purchaseButtonHandler,
  frontButtonHandler
}) {
  return (
    <>
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
              accountName="국민 (이한비)"
              accountNumber="448601-01-602183"
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
    </>
  );
}

export default TicketingOBDeposit;
