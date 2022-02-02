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

function TicketCodePage() {
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
        <TicketLayout></TicketLayout>
      </TicketContainer>
    </TicketWrapContainer>
  );
}

export default TicketCodePage;
