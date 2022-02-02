import React from 'react';
import axios from 'axios';
import {
  TicketContainer,
  TicketTop,
  TicketWrapContainer,
  GoBackButton,
  TicketLayout
} from 'gosrock-storybook';
import history from '../../../history';

function TicketCodePage({ ...props }) {
  return (
    <TicketWrapContainer {...props}>
      <TicketContainer
        TopElement={
          <TicketTop>
            <GoBackButton
              onClick={() => {
                history.push('/list/mytickets');
              }}
            />
          </TicketTop>
        }
      >
        <TicketLayout>
          <div>asdf</div>
        </TicketLayout>
      </TicketContainer>
    </TicketWrapContainer>
  );
}

export default TicketCodePage;
