import { GoBackButton } from 'gosrock-storybook';
import React from 'react';
import history from '../history';

function TestPage() {
  return (
    <div style={{ position: 'absolute', backgroundColor: 'red' }}>
      <GoBackButton
        onClick={() => {
          history.push('/test');
        }}
      />
    </div>
  );
}

export default TestPage;
