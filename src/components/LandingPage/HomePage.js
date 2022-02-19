import React, { useEffect, useState } from 'react';
import './main.css';
import mainAnimation from './main';
import { GoFrontButton } from 'gosrock-storybook';
import { useMediaQuery } from 'react-responsive';

function HomePage({ ticketing, list }) {
  useEffect(() => {
    mainAnimation();
  }, []);

  const isBigScreen = useMediaQuery({ query: '(min-width: 1000px)' });

  return (
    <main className>
      <header class="header">
        <div class="container">
          <div class="inner-container header-content">
            <div class="header-title"></div>
            <div className="header-link">
              <div onClick={list}>예매 내역</div>
              <div
                onClick={ticketing}
                style={{
                  fontSize: '14px',
                  height: '24px',
                  backgroundColor: '#bf94e4',
                  padding: '5px 10px 5px 10px',
                  boxSizing: 'border-box',
                  lineHeight: '14px',
                  borderRadius: '12px'
                }}
              >
                예매하기
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="scroll-section" id="scroll-section-0">
        <div className="inner-container">
          <h1>
            <span style={{ color: '#bf94e4', fontWeight: '700' }}>고스락</span>
            <br />
            3월 공연에 <br /> 여러분을
            <br /> 초대합니다
          </h1>
        </div>
        <div className="sticky-elem performance-info a">
          <p>
            <span className="br">‘고스락'은 순우리말입니다.</span> ‘정상',
            ‘최고', ‘꼭대기'라는 뜻으로,
            <br />
            최고의 공연을 위한 우리의 열정을 상징합니다.
          </p>
        </div>
        <div className="sticky-elem performance-info b">
          <p>
            일년에 두번 열리는 고스락의 클럽 정기공연은 2009년 8월
            <br /> 제1회를 시작으로 10년간 끊임없이 이어져 왔습니다.
          </p>
        </div>
        <div className="sticky-elem performance-info c">
          <p>
            2019년 제 20회 공연 이후로 코로나로 인해 잠시 멈췄던 공연을
            <br />
            올해 3월 10일, 다시 시작합니다!
          </p>
        </div>
      </section>

      <section className="scroll-section" id="scroll-section-1">
        <div className="banner">
          <h2>21번째 정기공연</h2>
        </div>

        <div
          className="performance-when"
          style={{ marginTop: '100px', marginBottom: '160px' }}
        >
          <div className="inner-container">
            <div className="line"></div>
            <h2>
              3월 10일&nbsp;
              <span style={{ fontWeight: '700', color: '#bf94e4' }}>
                목요일
              </span>
            </h2>
            <img src="images/poster.png" className="poster" />
          </div>
        </div>

        <div
          className="performance-where"
          style={{
            padding: '100px 0px 160px 0px',
            width: '100%',
            backgroundColor: '#1a1a1a',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <div className="inner-container">
            <div className="line"></div>
            <h2 style={{ marginBottom: '100px' }}>
              오후
              <span style={{ fontWeight: '700', color: '#bf94e4' }}>여섯</span>
              시, <br />
              합정 라디오 가가
            </h2>
            <div>
              <a
                href="https://m.place.naver.com/place/36995079/home?entry=ple"
                target="_blank"
              >
                <img className="map" src="./images/map.png" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        className="scroll-section smartphone-container"
        id="scroll-section-2"
      >
        <div className="m-image-0">
          <img
            style={{
              maxWidth: '100%',
              maxHeight: '100%'
            }}
            src="./images/mobile-0.png"
            alt="22학번 새내기는 공짜"
          />
        </div>
        <div className="m-message-0">
          <h1>
            <span style={{ fontWeight: '700', color: '#bf94e4' }}>22</span>학번
            새내기는 <br /> 공짜!
          </h1>
          {isBigScreen ? (
            <p style={{ width: '100%' }}>
              3월 공연은 새내기 여러분들을 위한 공연이에요! <br /> 공짜니까
              부담없이 와주세요!!
            </p>
          ) : (
            <p>
              3월 공연은 새내기 여러분들을 위한 공연
              <br />
              이에요! 공짜니까 부담없이 와주세요!!
            </p>
          )}
        </div>
      </section>
      <section
        className="scroll-section smartphone-container"
        id="scroll-section-3"
      >
        <div className="m-image-1">
          <img
            style={{
              maxWidth: '100%',
              maxHeight: '100%'
            }}
            src="./images/mobile-1.png"
            alt="새내기 소모임 신청관련"
          />
        </div>
        <div className=" m-message-1">
          <h1>
            공연전
            <br />
            <span style={{ fontWeight: '700', color: '#bf94e4' }}>밥약</span>
            (소모임)
          </h1>
          {isBigScreen ? (
            <p>
              공연을 보러 오고 싶은데
              <br /> 혼자라서 고민중이신가요? <br />
              <br />
              새로운
              <span style={{ color: '#bf94e4' }}>친구</span>
              들,
              <span style={{ color: '#bf94e4' }}>선배</span>
              선배들과 만나고
              <br />
              싶다면 우리 미리 한번 만날까요?
            </p>
          ) : (
            <p>
              공연을 보러 오고 싶은데 혼자라서
              <br />
              고민중이신가요? <br />
              <br />
              새로운
              <span style={{ color: '#bf94e4' }}>친구</span>
              들,
              <span style={{ color: '#bf94e4' }}>선배</span>
              선배들과 만나고
              <br />
              싶다면 우리 미리 한번 만날까요?
            </p>
          )}
        </div>
      </section>

      <section className="scroll-section" id="scroll-section-4">
        <div className="with-banner">
          <h3>지금</h3>
          <h2>&nbsp;72&nbsp;</h2>
          <h3>명이 함께 하고 있어요.</h3>
        </div>

        <div className="guide">
          <div className="container">
            <div className="inner-container">
              <h2>
                공연 유의사항 안내 <br />
                <br />
              </h2>
              <h3>
                COVID 19 관련 <br />
                <br />
              </h3>
              <ul className="guide-a">
                <li>
                  COVID 19 로 인해 입장인원이 제한되어있어 티켓 예매가 조기에
                  마감될 수 있습니다.
                </li>
                <li>공연장 내에서 취식은 불가합니다.</li>
                <li>COVID 19 로 인해 전석 좌석제로 진행됩니다.</li>
                <li>
                  공연 이후 코로나 확진자 발생 시, 티켓 발급시 인증한 휴대전화
                  번호로 즉시 알려드릴 예정입니다.
                </li>
              </ul>
              <h3>
                <br /> 예매 &amp; 입장 관련 <br />
                <br />
              </h3>
              <ul className="guide-b">
                <li>
                  티켓 발급후 인증한 전화번호로 티켓 url을 보내드립니다. 송신자
                  번호는 개인 전화번호이니 문의사항은 고스락 채널로 연락
                  부탁드립니다.
                </li>
                <li>
                  입금은 하루이내로 수동으로 확인되며, 마이페이지에서 입금
                  여부를 확인할 수 있습니다.
                </li>
                <li>입장 시 QRcode를 통해 티켓의 유효 여부를 확인합니다.</li>
                <li>
                  그외 티켓에 대한 문의사항은 고스락 채널로 연락 부탁드립니다.
                </li>
              </ul>
              <h3>
                <br /> 신입생 관련 <br />
                <br />
              </h3>
              <ul className="guide-c">
                <li>신입생은 무료로 티켓을 발급 받으실 수 있습니다.</li>
                <li>
                  티켓 예매과정에 고스락 선배들과의 밥약(소모임)을 신청 할 수
                  있습니다.
                </li>
                <li> 소모임 신청은 공연 3일전 마감됩니다. </li>
                <li>
                  티켓을 발급한 이후 마이페이지에서 소모임 신청에 대해 취소,
                  신청을 다시 할 수 있습니다.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="book-banner">
          <div className="container">
            <div className="inner-container">
              <div className="book-button-group">
                <div className="book-button">
                  <GoFrontButton
                    label="티켓 예매"
                    arrowCircleBackground={false}
                    onClick={ticketing}
                  />
                </div>
                <div
                  className="book-button"
                  style={{ backgroundColor: '#181818' }}
                >
                  <GoFrontButton
                    label="예매 내역"
                    arrowCircleBackground={false}
                    onClick={list}
                  />
                </div>
              </div>
            </div>
          </div>
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
          © gosrcok 2022, all rights reserved <br />
        </p>
      </footer>
    </main>
  );
}

export default HomePage;
