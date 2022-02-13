import React, { useState, useEffect, useRef } from 'react';
import moment from 'moment';
import { ReactComponent as Logo } from '../../../assets/logo.svg';
import {
  TicketContainer,
  TicketTop,
  TicketBody,
  TicketBodyHeader,
  TicketWrapContainer,
  InfoLayout,
  GoBackButton,
  GoFrontButton,
  ProcessTitle,
  ProcessDescription,
  TicketList,
  StateIcon,
  Modal
} from 'gosrock-storybook';
import './TicketListPage.css';
import history from '../../../history';
import { useDispatch, useSelector } from 'react-redux';
import { getTickets, patchSomoim } from '../../../state/actions-creators';
import Tile from './Tile';
import ModalComponent from '../../ModalComponent.js/ModalComponent';
import ModalBox from './ModalBox/ModalBox';
import toast from './Toast/Toast';
import './Toast/Toast.css';

const KAKAO_ID = 'Ej7zzaMiL';

function TicketListPage({ ...props }) {
  const phoneNumber = useSelector(state => state.auth.phoneNumber);
  // const smallGroup = useSelector(state => state.ticketStudentInfo.smallGroup);
  const { tickets, pending } = useSelector(state => state.getTickets);
  const [bottomLabel, setBottomLabel] = useState('null');
  const [isnewbie, setIsnewbie] = useState(false);

  const [state, setState] = useState();

  const dispatch = useDispatch();
  const modalRef = useRef();
  const somoimRef = useRef();

  useEffect(() => {
    console.log('action effect');
    setBottomLabel(
      `${phoneNumber.replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`)} 님!`
    );
    dispatch(getTickets({ phoneNumber }));
  }, [phoneNumber, dispatch]);

  useEffect(() => {
    const validateID = new RegExp('^C2');
    if (tickets.length) {
      console.log(validateID.test(tickets[0].studentID));
      setIsnewbie(validateID.test(tickets[0].studentID));
    }
  }, [tickets]);

  useEffect(() => {
    if (tickets.length > 0) {
      switch (tickets[0].status) {
        case 'confirm-deposit':
          setState(<StateIcon background="green" label="입금 확인" />);
          break;
        case 'pending-deposit':
          setState(
            <StateIcon background="green" label="입금 확인중" word="five" />
          );
          break;
        case 'enter':
          setState(<StateIcon background="green" label="입장 완료" />);
          break;
        case 'non-deposit':
          setState(
            <StateIcon background="green" label="미입금 처리" word="five" />
          );
          break;
        default:
          break;
      }
    }
    console.log(tickets);
  }, [tickets]);

  const kakaoClickButtonHandler = () => {
    const url = `https://qr.kakaopay.com/${KAKAO_ID}${toHexValue(3000)}`;
    openInNewTab(url);
  };
  const toHexValue = value => {
    return (parseInt(value) * 524288).toString(16);
  };
  const openInNewTab = url => {
    const newWindow = window.open(url);

    setTimeout(() => {
      return newWindow.close();
    }, 3000);
  };

  const switchTicketStatusToText = text => {
    switch (text) {
      case 'confirm-deposit':
        return '입금 확인';
      case 'pending-deposit':
        return '입금 확인중';
      case 'enter':
        return '입장 완료';
      case 'non-deposit':
        return '미입금 처리';
      default:
        break;
    }
  };

  return (
    <TicketWrapContainer {...props}>
      <TicketContainer
        TopElement={
          <TicketTop>
            <GoBackButton
              onClick={() => {
                history.push('/');
              }}
            />
          </TicketTop>
        }
      >
        <InfoLayout>
          <TicketBodyHeader>
            <ProcessTitle topLabel="안녕하세요," bottomLabel={bottomLabel} />
            <ProcessDescription
              topLabel={
                tickets.length > 0
                  ? '예매 관련 정보를 보여드릴게요.'
                  : `아직 예매를 하지 않으셨어요!`
              }
            />
            {tickets.length > 0 ? (
              <p>
                <span
                  className="show-account"
                  onClick={() => {
                    modalRef.current.classList.remove('hidden');
                  }}
                >
                  입금계좌 보기
                </span>
              </p>
            ) : null}
          </TicketBodyHeader>
          <TicketBody>
            <div className="list-container">
              {pending ? (
                <div className="list-pending-wrap">
                  <Logo className="list-pending-logo" />
                </div>
              ) : tickets.length > 0 ? (
                <div className="mypage-grid">
                  <Tile
                    color={'#363636'}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between'
                    }}
                  >
                    <div>
                      <p
                        style={{
                          color: '#BF94E4',
                          fontSize: '20px',
                          lineHeight: '30px',
                          fontWeight: '500'
                        }}
                      >
                        예매일
                      </p>
                      <p
                        style={{
                          color: '#B6B7B8',
                          fontSize: '14px'
                        }}
                      >
                        {moment(tickets[0].createdAt).format('YY.MM.DD')}
                      </p>
                    </div>

                    <div>
                      <p
                        className="mypage-grid-sub"
                        style={{
                          fontWeight: '500',
                          color: '#b6b7b8',
                          marginTop: '5px',
                          textAlign: 'right'
                        }}
                      >
                        {tickets[0].accountName}
                      </p>
                      <p
                        className="mypage-grid-title"
                        style={{
                          fontWeight: '700',
                          lineHeight: '33px',
                          textAlign: 'right',

                          color: '#ffffff'
                        }}
                      >
                        {tickets[0].studentID}
                      </p>
                    </div>
                  </Tile>
                  {
                    /* 티켓의 정보의 학번이 신입생이면 신입생(기존) OB 면 입금정보*/

                    isnewbie ? (
                      <Tile
                        onClick={() => {
                          somoimRef.current.classList.remove('hidden');
                        }}
                        color={'#262626'}
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'space-between',
                          textAlign: 'right',
                          color: 'white',
                          cursor: 'default'
                        }}
                      >
                        <p
                          className="mypage-grid-sub"
                          style={{
                            fontWeight: '700',
                            textAlign: 'left',
                            color: '#bf94e4'
                          }}
                        >
                          {tickets[0].smallGroup
                            ? '신청 완료'
                            : '신청하러 가기'}
                        </p>
                        <p>
                          <span
                            className="mypage-grid-sub"
                            style={{ fontWeight: '500' }}
                          >
                            공연 후
                          </span>
                          <br />
                          <span
                            className="mypage-grid-title"
                            style={{
                              fontWeight: '700',
                              marginTop: '3px',
                              display: 'block'
                            }}
                          >
                            소모임
                          </span>
                        </p>
                      </Tile>
                    ) : (
                      <Tile
                        color={'#262626'}
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'space-between',
                          textAlign: 'right',
                          color: 'white',
                          cursor: 'default'
                        }}
                      >
                        <p
                          className="mypage-grid-sub"
                          style={{
                            fontWeight: '700',
                            textAlign: 'left',
                            color: '#bf94e4'
                          }}
                        >
                          {switchTicketStatusToText(tickets[0].status)}
                        </p>
                        <p>
                          <span
                            className="mypage-grid-title"
                            style={{
                              fontWeight: '700',
                              marginTop: '3px',
                              display: 'block'
                            }}
                          >
                            입금정보
                          </span>
                        </p>
                      </Tile>
                    )
                  }

                  <TicketList
                    style={{ gridColumn: 'span 2' }}
                    key={tickets[0]._id}
                    performdate="22.03.10"
                    bookdate={moment(tickets[0].createdAt).format('YY.MM.DD')}
                    StateIcon={state}
                    onClick={() => {
                      console.log('click');
                      history.push(`/tickets/${tickets[0]._id}`);
                    }}
                  />
                </div>
              ) : (
                <GoFrontButton
                  style={{
                    margin: 'auto',
                    marginTop: '50px',
                    padding: '10px 20px 10px 20px',
                    backgroundColor: '#262626',
                    borderRadius: '16px',
                    color: '#BF94E4'
                  }}
                  label="예매하러 가기"
                  onClick={() => {
                    history.push('/ticketing/landing');
                  }}
                />
              )}
            </div>
            <ModalComponent
              ref={modalRef}
              onClose={() => {
                modalRef.current.classList.add('hidden');
              }}
            >
              <Modal
                page="list"
                onClickClose={() => {
                  modalRef.current.classList.add('hidden');
                }}
                onClickKakao={kakaoClickButtonHandler}
              />
            </ModalComponent>
            <ModalComponent
              ref={somoimRef}
              onClose={() => {
                somoimRef.current.classList.add('hidden');
              }}
            >
              <ModalBox
                somoim={tickets.length > 0 ? tickets[0].smallGroup : null}
                onClickYes={() => {
                  dispatch(patchSomoim(true));
                  somoimRef.current.classList.add('hidden');
                  toast('공연 전 소모임이 신청되었어요!');
                }}
                onClickNo={() => {
                  dispatch(patchSomoim(false));
                  somoimRef.current.classList.add('hidden');
                  toast('공연 전 소모임 신청이 취소되었어요.');
                }}
              />
            </ModalComponent>
            <div id="toast2"></div>
          </TicketBody>
        </InfoLayout>
      </TicketContainer>
    </TicketWrapContainer>
  );
}

export default TicketListPage;
