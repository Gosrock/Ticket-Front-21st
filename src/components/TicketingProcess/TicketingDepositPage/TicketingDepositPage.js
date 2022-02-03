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

function TicketingDepositPage({ ...props }) {
  const ticketCount = useSelector(state => state.ticketAmount.ticketCount);
  console.log(ticketCount);

  const [accountName, setAccountName] = useState('');
  const bodyBox = useRef();
  const modalRef = useRef();

  const handleResize = () => {
    console.log(bodyBox.current.parentNode.clientHeight);
    console.log(bodyBox.current.parentNode);
    document.documentElement.style.setProperty(
      '--listHeight',
      `${bodyBox.current.parentNode.clientHeight}px`
    );
    const [container] = document.getElementsByClassName('Ticket-Container');
    document.documentElement.style.setProperty(
      '--containerHeight',
      `${container.clientHeight}px`
    );
    document.documentElement.style.setProperty(
      '--containerWidth',
      `${container.clientWidth}px`
    );
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      // cleanup
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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
    dispatch(ticketDeposit({ ticketCount, accountName }));
  };

  useEffect(() => {
    handleResize();
  }, []);

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
            <div className="input-form" ref={bodyBox}>
              <InputForm
                value={accountName}
                onChange={accountNameInputHandler}
                page="name"
                ticketCount={parseInt(ticketCount)}
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
                <Modal onClickPurchased={purchaseButtonHandler} />
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
