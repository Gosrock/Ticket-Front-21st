import React, { useEffect } from 'react';
import './main.css';
import mainAnimation from './main';

function HomePage() {
  useEffect(() => {
    mainAnimation();
  }, []);

  return (
    <div className="container">
      {/* <div class = "global-nav">
			<div class="global-nav-link">
				<a href="#" class="global-nav-item">고스락</a>
				<a href="#" class="global-nav-item">티켓</a>
				<a href="#" class="global-nav-item">프로젝트</a>
				<a href="#" class="global-nav-item">^~^</a>
			</div>
		</div> */}
      <nav className="local-nav">
        <div className="local-nav-link">
          <a href="http://gosrock.link" className="product-name">
            Gosrock
          </a>
          <a href="https://gosrock.link/ticketing/landing">예매하기</a>
          <a href="https://gosrock.link/list/landing">티켓 확인하기</a>
        </div>
      </nav>
      <section className="scroll-section" id="scroll-section-0">
        <h1>
          <strong>고스락</strong> 3월 공연에 <br /> 여러분을 <br /> 초대합니다
        </h1>
        <div className="main-gosrock">
          {/* <img src="./images/main-gosrock.png"> */}
        </div>
        <div className="sticky-elem performance-info a">
          <p>
            홍익대학교 컴퓨터공학과 밴드 고스락 <br /> "고스락" 은 정상 , 최고 ,
            꼭대기라는 순 우리말로 <br /> 최고의 공연을 위한 우리의 열정을
            상징합니다.
          </p>
        </div>
        <div className="sticky-elem performance-info b">
          <p>
            일년에 두번 열리는 고스락의 클럽 정기공연은 <br /> 2009년 8월
            제1회를 시작으로 <br /> 10년간 끊임없이 이어져 왔습니다.
          </p>
        </div>
        <div className="sticky-elem performance-info c">
          <p>
            이번 공연은 제21회 정기 공연으로, <br /> 고스락 3월 공연에 여러분을
            초대합니다.
          </p>
        </div>
      </section>
      <section className="scroll-section" id="scroll-section-1">
        <div className="pi-21">
          <img src="/images/21.png" />
        </div>
        <h1 className="pm-1">21번째 정기공연</h1>
        <div className="performance-when">
          <h1>
            3월 10일 <br />
            <strong>목요일</strong>
          </h1>
          <div className="poster">
            <img src="./images/포스터.png" />
          </div>
        </div>
        <div className="performance-where">
          <h1>
            오후 <strong>여섯</strong>시, <br />
            합정 라디오 가가
          </h1>
          <div className="map">
            <a href="https://map.naver.com/v5/entry/place/36995079?c=14127984.8671832,4516369.2039635,13,0,0,0,dh&placePath=%2Fhome%3Fentry=plt">
              <img src="./images/공연장 위치.png" />
            </a>
          </div>
        </div>
      </section>
      <section className="scroll-section" id="scroll-section-2">
        <div className="m-image-0">
          <img src="./images/mobile-0.png" />
        </div>
        <div className=" m-message-0">
          <h1>
            <strong>22</strong>학번 새내기는 공짜
          </h1>
          <p>
            3월 공연은 새내기 여러분들을 위한 공연이에요! 공짜니까 부담없이
            와주세요!!
          </p>
        </div>
      </section>
      <section className="scroll-section" id="scroll-section-3">
        <div className="m-image-1">
          <img src="./images/mobile-1.png" />
        </div>
        <div className=" m-message-1">
          <h1>
            공연전 <strong>밥약</strong>(소모임)
          </h1>
          <p>
            공연을 보러 오고 싶은데 혼자라서 고민중이신가요? <br /> 새로운
            친구들, 선배들과 친해지고싶다면 우리 미리 한번 만날까요?
          </p>
        </div>
      </section>
      <section className="scroll-section" id="scroll-section-4">
        <div className="with">
          <img src="./images/with_us.png" />
          <div className="sticky-elem with-num">
            <h2>지금 78명이 함께 하고 있어요!</h2>
          </div>
        </div>
        <div className="guide">
          <h2>
            공연 유의사항 안내 <br />
            <br />{' '}
          </h2>
          <p>
            {' '}
            COVID 19 관련 <br />
            <br />
          </p>
          <ul className="guide-a">
            <li>
              COVID 19 로 인해 입장인원이 제한되어있어 티켓 예매가 조기에 마감될
              수 있습니다.
            </li>
            <li>공연장 내에서 취식은 불가합니다.</li>
            <li>COVID 19 로 인해 전석 좌석제로 진행됩니다.</li>
            <li>
              공연 이후 코로나 확진자 발생 시, 티켓 발급시 인증한 휴대전화
              번호로 즉시 알려드릴 예정입니다.{' '}
            </li>
          </ul>
          <p>
            {' '}
            <br /> 예매 &amp; 입장 관련 <br />
            <br />{' '}
          </p>
          <ul className="guide-b">
            <li>
              티켓 발급후 인증한 전화번호로 티켓 url을 보내드립니다. 송신자
              번호는 개인 전화번호이니 문의사항은 고스락 채널로 연락
              부탁드립니다.{' '}
            </li>
            <li>
              입금은 하루이내로 수동으로 확인되며, 마이페이지에서 입금 여부를
              확인할 수 있습니다.{' '}
            </li>
            <li>입장 시 QRcode를 통해 티켓의 유효 여부를 확인합니다.</li>
            <li>
              그외 티켓에 대한 문의사항은 고스락 채널로 연락 부탁드립니다.{' '}
            </li>
          </ul>
          <p>
            {' '}
            <br /> 신입생 관련 <br />
            <br />
          </p>
          <ul className="guide-c">
            <li>신입생은 무료로 티켓을 발급 받으실 수 있습니다.</li>
            <li>
              {' '}
              티켓 예매과정에 고스락 선배들과의 밥약(소모임)을 신청 할 수
              있습니다.
            </li>
            <li> 소모임 신청은 공연 3일전 마감됩니다. </li>
            <li>
              티켓을 발급한 이후 마이페이지에서 소모임 신청에 대해 취소, 신청을
              다시 할 수 있습니다.{' '}
            </li>
          </ul>
        </div>
        <div className="book-image">
          <img src="./images/예매하러가기.png" />
        </div>
      </section>
      <footer className="footer">
        <a href="http://gosrock.link">
          <div className="logo">
            <img src="./images/logo.png" />
          </div>
        </a>
        <div className="icon">
          <a href="https://github.com/Gosrock">
            <img src="./images/Github.png" />
          </a>
          <a href="https://www.youtube.com/channel/UCBjYErlHCG0vfcdDmaeOIxQ">
            <img src="./images/Youtube.png" />
          </a>
          <a href="https://www.instagram.com/gosrock_archive/">
            <img src="./images/Instagram.png" />
          </a>
        </div>
        <p>
          © gosrcok 2022, all rights reserved <br />{' '}
        </p>
      </footer>
    </div>
  );
}

export default HomePage;
