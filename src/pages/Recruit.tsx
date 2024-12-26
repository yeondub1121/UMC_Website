import React from "react";
import styled, { keyframes } from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: linear-gradient(
    180deg,
    #174242 17%,
    #1c5151 45%,
    #1f5c5c 60%,
    #236868 75%
  );
  color: white;
  font-family: Arial, sans-serif;
  text-align: left;
  padding: 40px;
  min-height: 100vh;
`;

const fadeIn = keyframes`
  0% { opacity: 0; transform: translateY(-20px); }
  100% { opacity: 1; transform: translateY(0); }
`;

const Subtitle = styled.h2`
  font-size: 23px;
  margin-left: calc(6%);
  margin-bottom: 15px;
  margin-top: -5px;
  color: #a9f3e3;
  animation: ${fadeIn} 1.8s ease;
  font-family: Regular;
  border-bottom: 1px solid #a9f3e3;
  padding-bottom: 5px;
`;

const Subtitle2 = styled.h2`
  font-size: 23px;
  margin-bottom: 15px;
  margin-top: 25px;
  margin-left: calc(6%);
  color: #a9f3e3;
  animation: ${fadeIn} 1.8s ease;
  font-family: Regular;
  border-bottom: 1px solid #a9f3e3;
  padding-bottom: 5px;
`;

const InfoText = styled.p`
  font-size: 18px;
  margin: 10px 0;
  margin-left: calc(6%);
  color: #ffffff;
  animation: ${fadeIn} 2s ease;
  font-family: Regular;
`;

const EventContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 10px;
  flex-wrap: wrap;
  margin-left: calc(6%);
  margin-top: 7px;
  margin-bottom: 10px;
`;

const Event = styled.div`
  padding: 10px 15px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid #a9f3e3;
  animation: ${fadeIn} 2s ease;
  font-size: 1rem;
  color: #ffffff;
  text-align: center;
  transition: background 0.3s ease;
  font-family: Regular;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`;

const PartDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-left: calc(6%);
  margin-top: 6px;
`;

const PartDetailText = styled.p`
  font-size: 18px;
  margin: 5px 0;
  color: #ffffff;
  font-family: Regular;
  padding-left: 15px;
  position: relative;
  animation: ${fadeIn} 2s ease;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 5px;
    height: 5px;
    background: #a9f3e3;
    border-radius: 50%;
  }
`;

const LinkContainer = styled.div`
  margin-top: 30px;
  color: #ffffff;
  font-family: Regular;
  margin-left: calc(6%);

  & > span {
    font-size: 18px; 
    font-weight: 500;
    border-bottom: 1px solid white;
  }

  & a {
    font-size: 15px;
    color: white;
    text-decoration: none;
    transition: color 0.3s ease;
    margin-top: 6px;
  }

  & a:hover {
     color: #a9f3e3;
  }
`;


const Link = styled.a`
  display: block;
  margin-top: 5px;
`;

const Recruit: React.FC = () => {
  return (
    <Container>

      {/* 활동 정보 */}
      <Subtitle>활동 정보</Subtitle>
      <InfoText>활동 기간: 6개월</InfoText>
      <InfoText>동아리 회비: 5만원</InfoText>
      <InfoText>프로젝트 참가비: 3만원 (2만원 페이백)</InfoText>

      {/* 이벤트 정보 */}
      <EventContainer>
        <Event>해커톤</Event>
        <Event>컨퍼런스</Event>
        <Event>네트워킹데이</Event>
        <Event>프리미팅데이</Event>
      </EventContainer>
      <EventContainer>
        <Event>중앙 MT</Event>
        <Event>Web or App 서비스 개발 프로젝트</Event>
      </EventContainer>

      {/* 모집 파트 */}
      <Subtitle2>모집 파트</Subtitle2>
      <PartDetailsContainer>
        <PartDetailText>기획: Plan</PartDetailText>
        <PartDetailText>디자인: Design</PartDetailText>
        <PartDetailText>개발: Android, iOS, Web, Spring, Node.js</PartDetailText>
      </PartDetailsContainer>

      {/* 파트별 요구역량 */}
      <Subtitle2>파트별 요구역량</Subtitle2>
      <PartDetailsContainer>
        <PartDetailText>Plan: Figma</PartDetailText>
        <PartDetailText>Design: Figma</PartDetailText>
        <PartDetailText>Android: Kotlin</PartDetailText>
        <PartDetailText>iOS: Swift</PartDetailText>
        <PartDetailText>Web: HTML, CSS, JavaScript</PartDetailText>
        <PartDetailText>Spring: Java</PartDetailText>
        <PartDetailText>Node.js: JavaScript</PartDetailText>
      </PartDetailsContainer>

      <LinkContainer>
      <span>* 서울여대 UMC 문의</span>
        <Link href="https://instagram.com/swu_makeus_challenge" target="_blank" rel="noopener noreferrer">
          - 서울여대 UMC 인스타그램
        </Link>
        <Link href="https://open.kakao.com/o/skJgV75g" target="_blank" rel="noopener noreferrer">
          - 카카오톡 오픈채팅방
        </Link>
        </LinkContainer>
    </Container>
  );
};

export default Recruit;
