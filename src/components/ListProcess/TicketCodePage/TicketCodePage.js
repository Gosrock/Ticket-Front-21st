import React, { Component, useState } from 'react';
import useParams from 'react-dom';
import axios from 'axios';

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
  console.log(window.Kakao.isInitialized());

  const { ticketId } = useParams();
  const [status, setStatus] = useState(null);

  const GetTicket = async () => {
    try {
      const response = await axios.get(`/tickets/${ticketId}`);

      setStatus(response.data.data.ticketInfo.status);
    } catch (e) {
      console.log(e);
    }
  };

  GetTicket();

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

  return (
    <TicketWrapContainer>
      <TicketContainer
        TopElement={
          <TicketTop>
            <GoBackButton
              onClick={() => {
                history.back();
              }}
            />
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
                if (status == 'confirm-deposit' || status == 'enter') {
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
