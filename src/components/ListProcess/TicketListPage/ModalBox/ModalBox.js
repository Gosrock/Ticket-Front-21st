import React from 'react';
import './ModalBox.css';
import { ReactComponent as Close } from '../../../../assets/Close.svg';
import { ReactComponent as Check } from '../../../../assets/Check.svg';

const ModalBox = ({ onClickYes, onClickNo, somoim }) => {
  return (
    <div className="somoim-modal-box">
      <div className="modal-container modal-top">
        <div>
          <p className="question">🧐 공연 후 소모임이 뭔가요?</p>
          <p className="answer">
            공연을 보러 오고 싶은데 혼자라서 고민중이신가요? 코로나19로 인해 새
            친구를 만나기가 어려우신가요?
            <br />
            <br />
            3월 공연은 새내기 여러분들을 위한 자리에요. 신청자에 한해 예매순으로
            6명씩 모아 카카오톡 방을 만들어 드립니다.
            <br />
            <br />
            친구들과 함께 공연에 오시고, 공연이 끝나고도 재밌게 놀다 가세요!!
          </p>

          <p className="question" style={{ marginTop: '30px' }}>
            🧐 방은 언제 만들어지나요?
          </p>
          <p className="answer">
            공연 당일 15시 전에 저희가 각각 톡방에 여러분들을 초대한 후에 나갈
            예정입니다.
          </p>

          <p className="question" style={{ marginTop: '30px' }}>
            🧐 신청을 했다가 취소할 수 있나요?
          </p>
          <p className="answer">
            네! 마이페이지에서 확인하실 수 있습니다.
            <br />
            다만 공연 당일 15시까지 집계한 결과로 진행되오니 그 점 유의해주시면
            감사하겠습니다.
          </p>

          <p className="answer" style={{ marginTop: '30px' }}>
            기타 문의사항은 <br />
            고스락 카카오톡 채널을 이용해주세요.
          </p>
        </div>
      </div>

      <div className="modal-bottom">
        <div className="modal-container">
          <button className="CloseButton" onClick={onClickYes}>
            <span>신청해요</span>
            <div className="modal--svg" style={{ marginLeft: '11px' }}>
              <Check fill={somoim ? '#bf94e4' : '#b6b7b8'} />
            </div>
          </button>
        </div>
        <div
          style={{
            height: '1px',
            width: '100%',
            backgroundColor: '#363636'
          }}
        ></div>
        <div className="modal-container">
          <button className="CloseButton" onClick={onClickNo}>
            <span>안할래요</span>
            <div className="modal--svg" style={{ marginLeft: '11px' }}>
              <Close fill={'#BF94E4'} />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalBox;
