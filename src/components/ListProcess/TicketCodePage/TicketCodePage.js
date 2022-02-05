import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from 'react-redux';

import {
  TicketContainer,
  TicketTop,
  TicketWrapContainer,
  GoBackButton,
  TicketLayout,
  Ticket,
  UtilityButton,
  TicketBody
} from 'gosrock-storybook';
import history from '../../../history';
import './TicketCodePage.css';

function TicketCodePage({ ...props }) {
  window.Kakao.isInitialized();

  const { ticketId } = useParams();
  const [ticketStatus, setTicketStatus] = useState(null);
  const { authenticated } = useSelector(state => state.auth);

  const GetTicket = async () => {
    try {
      const response = await axios.get(`/tickets/${ticketId}`);
      setTicketStatus(response.data.data.ticketInfo.status);
      console.log(response.data.status);
    } catch (e) {
      console.log(e);
      alert('존재하지 않는 티켓입니다');
      history.push('/');
    }
  };

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
          title: '자세히보기',
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

  const back = () => {
    history.push('list/mytickets');
  };

  useEffect(() => {
    GetTicket();
  }, []);

  return (
    <TicketWrapContainer>
      <TicketContainer
        TopElement={
          <TicketTop>
            <React.Fragment>
              {(() => {
                if (authenticated) {
                  return <GoBackButton onClick={back}></GoBackButton>;
                }
              })()}
            </React.Fragment>
          </TicketTop>
        }
      >
        <TicketLayout>
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
        </TicketLayout>
      </TicketContainer>
    </TicketWrapContainer>
  );
}

export default TicketCodePage;
