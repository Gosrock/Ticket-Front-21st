import React, { useState } from 'react';
import { Input, Button } from 'antd';

function LandingPage() {
  const [validationNumber, setValidationNumber] = useState('');

  const handleValidationNumberChange = e => {
    console.log(e.target.value.length);

    setValidationNumber(e.target.value);
    if (e.target.value.length >= 4) e.target.blur();
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
      </div>
      <div>
        <Button style={{ marginTop: '100px' }}>넘어가기</Button>
      </div>
    </div>
  );
}

export default LandingPage;
