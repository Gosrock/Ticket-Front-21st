import React, { useState } from 'react';
import { Input } from 'antd';
import { GoBackButton, GoFrontButton } from 'gosrock-storybook';
import 'gosrock-storybook/dist/gosrockStyle.css';

function LandingPage() {
  const [validationNumber, setValidationNumber] = useState('');

  const handleValidationNumberChange = e => {
    console.log(e.target.value.length);

    setValidationNumber(e.target.value);
    if (e.target.value.length >= 4) e.target.blur();
  };
  const handleOnclick = () => {
    console.log('asdlfkj');
  };

  // const shouldBlur = (e) => {
  //   if (validationNumber.length === 4) {
  //     e.target.blur();

  //   }
  // }
  return (
    <div className="LandingPage">
      고스락 페이지
      <div style={{ marginTop: '200px' }}>
        <Input
          placeholder="4글자면 auto unfocus"
          value={validationNumber}
          onChange={e => handleValidationNumberChange(e)}
          // onBlur={handleValidationNumberChange}
          // onKeyDown={shouldBlur}
          style={{ marginRight: 10, width: '200px' }}
        />
        <div style={{ backgroundColor: 'black' }}>
          <GoBackButton onClick={handleOnclick}></GoBackButton>
          <GoFrontButton></GoFrontButton>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
