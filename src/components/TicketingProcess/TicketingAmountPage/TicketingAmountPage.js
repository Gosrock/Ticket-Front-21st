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
  GoBackButton
} from 'gosrock-storybook';
import history from '../../../history';
import { useSelector, useDispatch } from 'react-redux';
import { ticketAmount } from '../../../state/actions-creators';
import './TicketingAmountPage.css';
import { ReactComponent as Check } from '../../../assets/Check.svg';
import { ReactComponent as GoFront } from '../../../assets/GoFrontArrow.svg';
import ModalComponent from '../../ModalComponent.js/ModalComponent';
import ModalBox from '../../ListProcess/TicketListPage/ModalBox/ModalBox';

function TicketingAmountPage({ ...props }) {
  const phoneNumber = useSelector(store => store.auth.phoneNumber);

  const [studentId, setstudentId] = useState('C2');
  const [somoim, setSomoim] = useState(true);
  const somoimRef = useRef();

  const dispatch = useDispatch();

  const gobackButtonHandler = () => {
    history.push('/');
  };

  const amountInputHandler = e => {
    setstudentId(e.target.value);
  };

  const frontButtonHandler = () => {
    if (studentId < 7) alert('학번을 정확히 입력해주세요.');
    else dispatch(ticketAmount({ studentId }));
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
              topLabel="학번과 함께 소모임 신청 여부를"
              bottomLabel="입력해주세요."
            />
          </TicketBodyHeader>
          <TicketBody>
            <InputForm
              value={studentId}
              onChange={amountInputHandler}
              page="studentId"
            />
            <div
              className="somoim-form"
              onClick={() => {
                somoimRef.current.classList.remove('hidden');
              }}
            >
              <div className="somoim-form-content">
                <Check fill={somoim ? '#BF94E4' : '#fff'} />
                <span
                  style={{
                    marginLeft: '10px',
                    color: `${somoim ? '#fff' : '#b6b7b8'}`
                  }}
                >
                  공연 후 소모임 신청
                </span>
              </div>
              <div className="somoim-form-content">
                <span
                  style={{
                    marginRight: '10px',
                    color: `${somoim ? '#b6b7b8' : '#fff'}`
                  }}
                >
                  자세히 보기
                </span>
                <GoFront fill={somoim ? '#B6B7B8' : '#fff'} />
              </div>
            </div>
          </TicketBody>
          <TicketBottom>
            <GoFrontButton
              onClick={frontButtonHandler}
              label="다음으로"
            ></GoFrontButton>
          </TicketBottom>
          <ModalComponent
            ref={somoimRef}
            onClose={() => {
              somoimRef.current.classList.add('hidden');
            }}
          >
            <ModalBox
              onClickYes={() => {
                somoimRef.current.classList.add('hidden');
              }}
              onClickNo={() => {
                somoimRef.current.classList.add('hidden');
              }}
            />
          </ModalComponent>
        </ProgressLayout>
      </TicketContainer>
    </TicketWrapContainer>
  );
}

export default TicketingAmountPage;
