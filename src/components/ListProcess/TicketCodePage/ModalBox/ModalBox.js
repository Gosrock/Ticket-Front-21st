import React from 'react';
import './ModalBox.css';

import { ReactComponent as Close } from './Close.svg';
const ModalBox = ({ onClickClose }) => {
  return (
    <div className="info-modal-box">
      <div className="modal-container">
        <div>
          <p className="question">😢 입금 확인 처리가 안돼요!</p>
          <p className="answer">
            저희가 수시로 입금을 확인하고 직접 처리해드립니다. 잠시만
            기다려주세요! <br />
            <br />
            최대 24시간 이내 &nbsp;
            <span
              style={{
                padding: '0px 4px 0px 4px',
                backgroundColor: '#363636',
                borderRadius: '5px'
              }}
            >
              입금 확인
            </span>
            <br />
            3일 이내 미입금 시&nbsp;
            <span
              style={{
                padding: '0px 4px 0px 4px',
                backgroundColor: '#363636',
                borderRadius: '5px'
              }}
            >
              미입금 처리
            </span>
            &nbsp;됩니다.
          </p>

          <p className="question" style={{ marginTop: '30px' }}>
            😳 입금 전인데 티켓이 발급됐어요!
          </p>
          <p className="answer">
            입금이 확인된 티켓으로만 입장 가능합니다. <br />
            QR코드 주변의 초록색 테두리로 입금 확인 여부를 확인하실 수 있어요.
          </p>

          <p className="answer" style={{ marginTop: '30px' }}>
            기타 문의사항은 <br />
            고스락 카카오톡 채널을 이용해주세요.
          </p>
        </div>
      </div>
      <div className="modal-bottom">
        <div
          style={{
            height: '1px',
            width: '100%',
            backgroundColor: '#363636'
          }}
        ></div>
        <div className="modal-container">
          <button className="CloseButton" onClick={onClickClose}>
            <span>닫기</span>
            <div className="modal--svg" style={{ marginLeft: '11px' }}>
              <Close />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalBox;
