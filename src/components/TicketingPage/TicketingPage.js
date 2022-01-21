import React from 'react';
import './ticketingpage.css';
import { GoBackButton, GoFrontButton } from 'gosrock-storybook';

const TicketingPage = () => {
  return (
    <div className="body-wrap">
      <div className="container">
        <div className="inner-container">
          <GoBackButton label="뒤로가기" style={{ padding: '0px' }} />
          <GoFrontButton
            label="다음으로"
            style={{ float: 'right', padding: '0px' }}
          />
        </div>
      </div>
    </div>
  );
};

export default TicketingPage;
