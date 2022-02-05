import React, { useEffect, useState } from 'react';
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
import { ReactComponent as Logo } from '../TicketListPage/logo.svg';

function TicketCodePage({ ...props }) {
  window.Kakao.isInitialized();
  const { ticketId } = useParams();
  const [ticketStatus, setTicketStatus] = useState(null);
  const { authenticated } = useSelector(state => state.auth);
  const { ticket, pending, invalidId } = useSelector(state => state.getTicket);
  const dispatch = useDispatch();

  /*   const GetTicket = async () => {
    try {
      const response = await axios.get(`/tickets/${ticketId}`);
      setTicketStatus(response.data.data.ticketInfo.status);
      console.log(response.data.status);
    } catch (e) {
      console.log(e);
      history.push('/');
    }
  }; */

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
      console.log(ticketId);
    }
  }, [ticketId]);

  return (
    <TicketWrapContainer>
      <TicketContainer
        TopElement={
          <TicketTop>
            <React.Fragment>
              {(() => {
                if (authenticated) {
                  return (
                    <GoBackButton
                      onClick={() => {
                        history.push('../list/mytickets');
                      }}
                    ></GoBackButton>
                  );
                }
              })()}
            </React.Fragment>
          </TicketTop>
        }
      >
        <TicketLayout>
          {pending ? (
            <div className="pending-wrap">
              <Logo className="pending-logo" />
            </div>
          ) : invalidId ? (
            <div className="invalid-id">
              <p
                style={{
                  color: 'white',
                  fontWeight: '700',
                  fontSize: '28px',
                  textAlign: 'center'
                }}
              >
                유효하지 않은 주소입니다.
              </p>
              <GoFrontButton
                style={{
                  margin: 'auto',
                  marginTop: '50px',
                  padding: '10px 20px 10px 20px',
                  backgroundColor: '#262626',
                  borderRadius: '16px'
                }}
                label="메인 화면으로 가기"
                onClick={() => {
                  history.push('/');
                }}
              />
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
                  if (
                    ticketStatus == 'confirm-deposit' ||
                    ticketStatus == 'enter'
                  ) {
                    return <Ticket payment={true} QRvalue={ticketId}></Ticket>;
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
      </TicketContainer>
    </TicketWrapContainer>
  );
}

export default TicketCodePage;
