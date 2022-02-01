import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
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
  TicketList
} from 'gosrock-storybook';
import './TicketListPage.css';
import history from '../../../history';
import { useSelector } from 'react-redux';

function TicketListPage() {
  const { authenticated, phoneNumber, userAccessToken } = useSelector(
    state => state.auth
  );
  const [tickets, setTickets] = useState();
  const bodyBox = useRef();
  const bottomLabel = `${phoneNumber.replace(
    /^(\d{2,3})(\d{3,4})(\d{4})$/,
    `$1-$2-$3`
  )} 님!`;

  const getMyTickets = async () => {
    try {
      axios.defaults.headers.common.Authorization = `Bearer ${userAccessToken}`;
      const response = await axios.get(`/tickets?phoneNumber=${phoneNumber}`);
      setTickets(response.data.data);
    } catch (e) {
      console.log(e.response.data);
    }
  };

  useEffect(() => {
    if (authenticated == true && phoneNumber !== null) {
      getMyTickets();
    }
  }, [phoneNumber]);

  useEffect(() => {
    console.log(tickets);
  }, [tickets]);

  useEffect(() => {
    console.log(bodyBox.current.parentNode.clientHeight);
    console.log(bodyBox.current.parentNode);
    document.documentElement.style.setProperty(
      '--height',
      `${bodyBox.current.parentNode.clientHeight}px`
    );
  }, []);

  /* const ViewTicketHandler = () => {
    if (authenticated) {
      return history.push(`/tickets/${ticketId}`);
    }
    history.push('/list/landing');
  }; */

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
        <InfoLayout>
          <TicketBodyHeader>
            <ProcessTitle topLabel="안녕하세요," bottomLabel={bottomLabel} />
            <ProcessDescription topLabel="예매한 티켓을 보여드릴게요." />
            <p>
              <span
                className="show-account"
                onClick={() => {
                  console.log('입금계좌보기');
                }}
              >
                입금 계좌보기
              </span>
            </p>
          </TicketBodyHeader>
          <TicketBody>
            <div className="list-container" ref={bodyBox}>
              <div className="list-inner-container">
                {tickets &&
                  tickets.map(v => {
                    return (
                      <div
                        onClick={() => {
                          history.push(`/tickets/${v._id}`);
                        }}
                      >
                        {v._id}
                      </div>
                    );
                  })}
              </div>
            </div>
          </TicketBody>
        </InfoLayout>
      </TicketContainer>
    </TicketWrapContainer>
  );
}

export default TicketListPage;
