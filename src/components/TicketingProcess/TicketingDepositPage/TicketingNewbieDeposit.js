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
// 신입생용
import { ReactComponent as Check } from '../../../assets/Check.svg';
import { ReactComponent as GoFront } from '../../../assets/GoFrontArrow.svg';
import ModalComponent from '../../ModalComponent.js/ModalComponent';
import ModalBox from '../../ListProcess/TicketListPage/ModalBox/ModalBox';
function TicketingOBDeposit({
  accountName,
  accountNameInputHandler,
  smallGroupRef,
  smallGroup,
  modalRef,
  purchaseButtonHandler,
  frontButtonHandler,
  toggleButtonHandler,
  closeButtonHandler
}) {
  return (
    <>
      <TicketBodyHeader>
        <ProcessTitle
          topLabel="새내기는 공짜!"
          bottomLabel="공연 전에 미리 만나요."
        />
        <ProcessDescription
          topLabel="공연 전 밥약(소모임)을 희망하시는 분은"
          bottomLabel="이름과 함께 신청 버튼에 체크해주세요."
        />
      </TicketBodyHeader>
      <TicketBody>
        <div className="input-form">
          <InputForm
            // accountName이 이름임 ( 표시만 이름으로 )
            value={accountName}
            onChange={accountNameInputHandler}
            // page 를 newbie 로 수정
            page="newbie"
          />
        </div>
        <div
          className="somoim-form"
          onClick={() => {
            smallGroupRef.current.classList.remove('hidden');
          }}
        >
          <div className="somoim-form-content">
            <Check fill={smallGroup ? '#BF94E4' : '#fff'} />
            <span
              style={{
                marginLeft: '10px',
                color: `${smallGroup ? '#fff' : '#b6b7b8'}`
              }}
            >
              공연 전 밥약 희망
            </span>
          </div>
          <div className="somoim-form-content">
            <span
              style={{
                marginRight: '10px',
                color: `${smallGroup ? '#b6b7b8' : '#fff'}`
              }}
            >
              자세히 보기
            </span>
            <GoFront fill={smallGroup ? '#B6B7B8' : '#fff'} />
          </div>
        </div>

        <div className="modal hidden" ref={modalRef}>
          <div
            className="modal-overlay"
            onClick={() => {
              modalRef.current.classList.add('hidden');
            }}
          ></div>
          <div className="modal-content">
            <Modal page="newbie" onClickPurchased={purchaseButtonHandler} />
          </div>
        </div>
        <ModalComponent
          ref={smallGroupRef}
          onClose={() => {
            smallGroupRef.current.classList.add('hidden');
          }}
        >
          <ModalBox
            onClickToggle={toggleButtonHandler}
            onClickClose={closeButtonHandler}
            somoim={smallGroup}
          />
        </ModalComponent>
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
