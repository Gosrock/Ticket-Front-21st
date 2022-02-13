import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { getTicket } from '../../../state/actions-creators';
import {
  TicketContainer,
  TicketTop,
  TicketWrapContainer,
  GoBackButton,
  GoFrontButton,
  TicketLayout,
  Ticket,
  UtilityButton,
  TicketBody
} from 'gosrock-storybook';
import history from '../../../history';
import './TicketCodePage.css';
import { ReactComponent as Logo } from '../../../assets/logo.svg';
import { ReactComponent as InfoCircle } from '../../../assets/InfoCircle.svg';
import ModalComponent from '../../ModalComponent.js/ModalComponent';
import ModalBox from './ModalBox/ModalBox';
import io from 'socket.io-client';

function TicketCodePage({ ...props }) {
  window.Kakao.isInitialized();
  const { ticketId } = useParams();
  const { authenticated } = useSelector(state => state.auth);
  const { ticket, pending, invalidId } = useSelector(state => state.getTicket);
  const [socket, setSocket] = useState();
  const dispatch = useDispatch();
  const modalRef = useRef();

  useEffect(() => {
    if (!socket) {
      setSocket(
        io('https://api.gosrock.link/socket/tickets', {
          auth: {
            ticketId: ticketId
          }
        })
      );
    } else {
      socket.on('enter', data => {
        if (data.enterState) {
          dispatch({ type: 'TICKET_ENTER_SUCCESS', payload: data.ticketInfo });
        }
      });
    }
  }, [socket]);

  /***wep share api***/
  /*const shareEvent = async() => {
    if(typeof navigator.share === "undefined"){alert("티켓 공유가 지원되지 않는 환경입니다."); return;}
    try{
      await navigator.share({
        title: "Gosrock-ticket",
        url: "",
      });
    }
    catch (e){
      console.log("failed");
    }
  };*/

  const shareEvent = () => {
    window.Kakao.Link.sendDefault({
      objectType: 'feed',
      content: {
        title: 'Gosrock Ticket',
        description: '예매티켓',
        imageUrl: 'https://gosrock.link',
        link: {
          mobileWebUrl: `https://gosrock.link/tickets/${ticketId}`,
          androidExecutionParams: 'test'
        }
      },
      buttons: [
        {
          title: '티켓 보기',
          link: {
            mobileWebUrl: `https://gosrock.link/tickets/${ticketId}`
          }
        }
      ]
    });
  };

  const chatEvent = () => {
    window.Kakao.Channel.chat({
      channelPublicId: '_QxeZBT'
    });
  };

  useEffect(() => {
    if (ticketId) {
      dispatch(getTicket({ ticketId }));
    }
  }, [ticketId]);

  useEffect(() => {
    console.log(ticket, '티켓정보 바뀜!');
  }, [ticket]);

  return (
    <TicketWrapContainer>
      <TicketContainer
        TopElement={
          <TicketTop
            style={{ display: 'flex', justifyContent: 'space-between' }}
          >
            {authenticated ? (
              <GoBackButton
                onClick={() => {
                  history.push('../list/mytickets');
                }}
                label="마이 페이지"
              ></GoBackButton>
            ) : (
              <div></div>
            )}
            <InfoCircle
              className="info-circle"
              onClick={() => {
                modalRef.current.classList.remove('hidden');
              }}
            />
          </TicketTop>
        }
      >
        <TicketLayout>
          {pending ? (
            <div className="code-pending-wrap">
              <Logo className="code-pending-logo" />
            </div>
          ) : invalidId ? (
            <div className="invalid-id-wrap">
              <div className="invalid-id">
                <p
                  style={{
                    color: 'white',
                    fontWeight: '700',
                    fontSize: '28px',
                    textAlign: 'center'
                  }}
                >
                  유효하지 않은 티켓입니다.
                </p>
                <GoFrontButton
                  style={{
                    margin: 'auto',
                    marginTop: '50px',
                    padding: '10px 20px 10px 20px',
                    backgroundColor: '#262626',
                    borderRadius: '16px',
                    color: '#BF94E4'
                  }}
                  label="메인 화면으로 가기"
                  onClick={() => {
                    history.push('/');
                  }}
                />
              </div>
            </div>
          ) : (
            <TicketBody
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <React.Fragment>
                {(() => {
                  if (ticket.status == 'confirm-deposit') {
                    return <Ticket payment={true} QRvalue={ticketId}></Ticket>;
                  } else if (ticket.status == 'enter') {
                    return (
                      <Ticket
                        payment={true}
                        QRvalue={ticketId}
                        enter={true}
                      ></Ticket>
                    );
                  } else {
                    return <Ticket payment={false} QRvalue={ticketId}></Ticket>;
                  }
                })()}
              </React.Fragment>

              <div className="ticketGrid">
                <div className="blank"></div>

                <UtilityButton
                  label={'예매한 티켓 공유'}
                  backgroundColor={'white'}
                  logo={'share'}
                  onClick={shareEvent}
                ></UtilityButton>
                <div></div>
                <UtilityButton
                  label={'고스락 채널 문의'}
                  backgroundColor={'yellow'}
                  logo={'kakaoTalk'}
                  onClick={chatEvent}
                ></UtilityButton>
              </div>
            </TicketBody>
          )}
        </TicketLayout>
        <ModalComponent ref={modalRef}>
          <ModalBox
            onClickClose={() => {
              modalRef.current.classList.add('hidden');
            }}
          />
        </ModalComponent>
      </TicketContainer>
    </TicketWrapContainer>
  );
}

export default TicketCodePage;
