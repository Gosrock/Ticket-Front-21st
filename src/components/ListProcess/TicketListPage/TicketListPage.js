import React, { useState, useEffect, useRef } from 'react';
import moment from 'moment';
import { ReactComponent as Logo } from './logo.svg';
import {
  TicketContainer,
  TicketTop,
  TicketBody,
  TicketBodyHeader,
  TicketWrapContainer,
  InfoLayout,
  GoBackButton,
  ProcessTitle,
  ProcessDescription,
  TicketList,
  StateIcon,
  Modal
} from 'gosrock-storybook';
import './TicketListPage.css';
import history from '../../../history';
import { useDispatch, useSelector } from 'react-redux';
import { getTickets } from '../../../state/actions-creators';
import Tile from './Tile';
import ModalComponent from '../../ModalComponent.js/ModalComponent';
import ModalBox from './ModalBox/ModalBox';

const KAKAO_ID = 'Ej7zzaMiL';

function TicketListPage({ ...props }) {
  const { phoneNumber } = useSelector(state => state.auth);
  const { tickets, pending } = useSelector(state => state.getTickets);
  const [bottomLabel, setBottomLabel] = useState('null');
  const [state, setState] = useState();

  const dispatch = useDispatch();
  const modalRef = useRef();
  const somoimRef = useRef();
  useEffect(() => {
    setBottomLabel(
      `${phoneNumber.replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`)} 님!`
    );
    dispatch(getTickets({ phoneNumber }));
  }, [phoneNumber]);

  useEffect(() => {
    switch (tickets.status) {
      case 'confirm-deposit':
        setState(<StateIcon background="green" label="입금 확인" />);
        break;
      case 'pending-deposit':
        setState(<StateIcon background="green" label="입금 확인중" />);
        break;
      case 'enter':
        setState(<StateIcon background="green" label="입장 완료" />);
        break;
      case 'none-deposit':
        setState(<StateIcon background="green" label="미입금 처리" />);
        break;
      default:
        break;
    }
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
            <ProcessDescription topLabel="예매 관련 정보를 보여드릴게요." />
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
          </TicketBodyHeader>
          <TicketBody>
            <div className="list-container">
              {pending ? (
                <div className="list-pending-wrap">
                  <Logo className="list-pending-logo" />
                </div>
              ) : (
                tickets && (
                  <div className="mypage-grid">
                    <Tile color={'#363636'}>
                      <p
                        style={{
                          fontSize: '24px',
                          fontWeight: '700',
                          color: '#ffffff'
                        }}
                      >
                        C211000
                      </p>
                      <p
                        style={{
                          fontSize: '18px',
                          fontWeight: '500',
                          color: '#b6b7b8',
                          marginTop: '5px'
                        }}
                      >
                        한규진
                      </p>
                    </Tile>
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
                        color: 'white'
                      }}
                    >
                      <p
                        style={{
                          fontSize: '18px',
                          fontWeight: '700',
                          textAlign: 'left',
                          color: '#bf94e4'
                        }}
                      >
                        신청하기
                      </p>
                      <p>
                        <span style={{ fontSize: '18px', fontWeight: '500' }}>
                          공연 후
                        </span>
                        <br />
                        <span
                          style={{
                            fontSize: '24px',
                            fontWeight: '700',
                            marginTop: '3px',
                            display: 'block'
                          }}
                        >
                          소모임
                        </span>
                      </p>
                    </Tile>
                    <TicketList
                      style={{ gridColumn: 'span 2' }}
                      key={tickets._id}
                      performdate="22.03.10"
                      bookdate={moment(tickets.createdAt).format('YY.MM.DD')}
                      StateIcon={state}
                      onClick={() => {
                        console.log('click');
                        history.push(`/tickets/${tickets._id}`);
                      }}
                    />
                  </div>
                )
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
                onClickYes={() => {
                  somoimRef.current.classList.add('hidden');
                }}
                onClickNo={() => {
                  somoimRef.current.classList.add('hidden');
                }}
              />
            </ModalComponent>
          </TicketBody>
        </InfoLayout>
      </TicketContainer>
    </TicketWrapContainer>
  );
}

export default TicketListPage;
