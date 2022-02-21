import React from 'react';
import './ModalBox.css';
// { ReactComponent as Close } from '../../../../assets/Close.svg';
import { ReactComponent as Check } from '../../../../assets/Check.svg';
import { ReactComponent as Circle } from '../../../../assets/circle.svg';
import { ReactComponent as Close } from '../../../../assets/arrow-right-circle.svg';

const ModalBox = ({ onClickToggle, onClickClose, somoim }) => {
  return (
    <div className="somoim-modal-box">
      <div className="modal-container modal-top">
        <div>
          <p className="question">🧐 공연 전 밥약(소모임)이 뭔가요?</p>
          <p className="answer">
            공연을 보러 오고 싶은데 혼자라서 고민중이신가요? 코로나19로 인해 새
            친구를 만나기가 어려우신가요?
            <br />
            <br />
            3월 공연은 새내기 여러분을 위한 자리에요. 신청자에 한해 4명씩 한
            조가 되어 밥약을 가질 예정입니다!
            <br />
            <br />
            공연 전에 미리 선배와 동기들을 만날 수 있는 기회!! 새로 만난
            친구들과 공연에도 오셔서 재밌게 놀다 가세요!!
          </p>

          <p className="question" style={{ marginTop: '30px' }}>
            🧐 밥약 카톡방은 언제 만들어지나요?
          </p>
          <p className="answer">
            3월 3일 신청 마감 후 1~2일 이내에 개별적으로 연락드릴 예정입니다.
          </p>

          <p className="question" style={{ marginTop: '30px' }}>
            🧐 신청을 했다가 취소할 수 있나요?
          </p>
          <p className="answer">
            네! 마이페이지에서 확인하실 수 있습니다.
            <br />
            다만 3월 3일 자정까지 집계한 결과로 진행되오니 그 점 유의해주시면
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
          <button className="CloseButton" onClick={onClickToggle}>
            <span style={{ color: somoim ? 'white' : '#b6b7b8' }}>
              신청하기
            </span>
            <div className="modal--svg" style={{ marginLeft: '11px' }}>
              {somoim ? <Check fill="#bf94e4" /> : <Circle fill="#b6b7b8" />}
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
          <button className="CloseButton" onClick={onClickClose}>
            <span>확인</span>
            <div className="modal--svg" style={{ marginLeft: '11px' }}>
              <Close fill={'white'} />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalBox;
