import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import logo from "../assets/umc.svg";


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px; 
  background: linear-gradient(
    180deg,
    #174242 17%,
    #1c5151 45%,
    #1f5c5c 60%,
    #236868 75%
  );
  color: white;
`;

const LogoWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 85px; 
  border: 1.8px solid white;
  border-radius: 10px;
  margin-bottom: 5px; 
  overflow: hidden;
`;

const Logo = styled.img`
  width: 102%; 
  height: 100%; 
  object-fit: cover; 
`;


const LogoText = styled.h3`
  font-size: 50px; 
  font-weight: bold;
  font-family: Bold;
  color:rgb(220, 243, 238);
  margin-bottom: 20px; 
  display: inline-block;
  text-align: center; /* 텍스트를 항상 가운데 정렬 */
  animation: ${keyframes`
    0% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0); }
  `} 3s ease-in-out infinite;
  text-shadow: 0px 0px 10px rgb(158, 216, 203), 0px 0px 20px rgba(255, 255, 255, 1);
`;

const Description = styled.p`
  font-size: 18px; 
  margin-bottom: 55px; 
  text-align: center;
  line-height: 0.8;
  font-family: Regular;
`;

const Description2 = styled.p`
  font-size: 18px; 
  margin-bottom: 10px; 
  text-align: center;
  line-height: 1.6;
  margin-top: 12px;
  font-family: Regular;
`;

const ValuesTitle = styled.h2`
  font-size: 28px; 
  margin-bottom: -5px; 
  font-weight: bold;
  color:  #a9f3e3;
  font-family: Bold;
`;

const ValuesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 20px;
  font-family: Regular;
  text-align: center;
  display: flex; 
  justify-content: center; 
  gap: 20px; 
`;

const ValueItem = styled.li`
  font-size: 22px; 
  margin: 3px 0; 
  font-family: Regular;
  padding: 10px 15px;
  text-align: center;
  text-shadow: 0px 0px 5px rgba(255, 255, 255, 0.5),
                 0px 0px 10px rgba(255, 255, 255, 0.8),
                 0px 0px 15px rgba(255, 255, 255, 1); 
  color: white;
  opacity: 0; 
  transform: translateY(50px); 
  animation: ${keyframes`
    0% {
      opacity: 0;
      transform: translateY(50px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  `} 0.6s ease-out forwards;
  animation-delay: ${({ delay }) => delay || "0s"}; 
 
  &:hover {
    text-shadow: 0px 0px 10px rgba(255, 255, 255, 0.5),
                 0px 0px 15px rgba(255, 255, 255, 0.8),
                 0px 0px 20px rgba(255, 255, 255, 0.94); 
                 transition: text-shadow 0.3s ease-in-out;
  }
`;


const SchoolsTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 22px;
  font-weight: bold;
  color: #a9f3e3;
  margin-top: 30px;
  font-family: Bold;
`;

const SliderWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center; /* 슬라이드 전체 세로 중앙 정렬 */
  width: 100%;
  height: auto; /* 부모 높이에 맞춤 */
`;


const SliderContainer = styled.div`
  position: relative;
  width: 80%;
  max-width: 800px;
  height: auto; /* 높이를 자동으로 맞춤 */
  display: flex;
  justify-content: center; /* 가로 중앙 정렬 */
  overflow: hidden;

  @media (max-width: 768px) {
    width: 95%; /* 작은 화면에서는 더 넓게 */
  }
`;

const Slide = styled.div`
  min-width: 100%;
  display: flex;
  justify-content: center; /* 가로 방향 중앙 정렬 */
  align-items: center; /* 세로 방향 중앙 정렬 */
  flex-wrap: wrap; /* 줄바꿈 허용 */
  gap: 15px; /* 아이템 간 간격 */

   text-align: center; 

  @media (max-width: 768px) {
    gap: 10px; /* 작은 화면에서 간격 줄임 */
   
  }
`;

const School = styled.div`
  flex: 0 1 calc(33.33% - 20px); /* 한 줄에 3개 배치 */
  padding: 10px 15px;
  font-family: Regular;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid #a9f3e3;
  font-size: 16px;
  text-align: center;
  color: white;
  transition: background 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }

  @media (max-width: 768px) {
    padding: 8px 12px;
    font-size: 10px;
  }
`;


const Slider = styled.div`
  display: flex;
  transform: translateX(${({ translateX }) => translateX}%);
  transition: transform 0.5s ease-in-out;
`;


const ArrowWrapper = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  z-index: 1000;

  ${({ left }) => (left ? "left: -10px;" : "right: -10px;")} /* 좌우 위치 조정 */
`;

const ArrowIconLeft = styled.svg`
  width: 20px;
  height: auto;
  stroke: white;
  stroke-opacity: 0.8;
  stroke-width: 25;
  stroke-linecap: round;
  stroke-linejoin: round;
  transition: stroke 0.3s ease;

  &:hover {
    stroke: #a9f3e3; /* 호버 시 색상 변경 */
  }
`;

const ArrowIconRight = styled.svg`
  width: 20px;
  height: auto;
  stroke: white;
  stroke-opacity: 0.8;
  stroke-width: 25;
  stroke-linecap: round;
  stroke-linejoin: round;
  transition: stroke 0.3s ease;

  &:hover {
    stroke: #a9f3e3; /* 호버 시 색상 변경 */
  }
`;

const schools = [
  "가천대학교",
  "가톨릭대학교",
  "경희대학교",
  "광운대학교",
  "남서울대학교",
  "덕성여자대학교",
  "동국대학교",
  "명지대학교",
  "상명대학교",
  "서경대학교",
  "서울여자대학교",
  "성신여자대학교",
  "숭실대학교",
  "연세대학교",
  "울산대학교",
  "이화여자대학교",
  "인하대학교",
  "중앙대학교",
  "한국공학대학교",
  "한국외국어대학교",
  "한국항공대학교",
  "한성대학교",
  "한양대학교ERICA",
  "홍익대학교",
];


const Main: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? Math.ceil(schools.length / 6) - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === Math.ceil(schools.length / 6) - 1 ? 0 : prev + 1));
  };

  const slides = [];
  for (let i = 0; i < schools.length; i += 6) {
    slides.push(schools.slice(i, i + 6));
  }

  return (
    <Container>
      <LogoText>
  {Array.from("BREAK THE RULES!").map((char, index) => (
    <span key={index}>{char}</span>
  ))}
</LogoText>

      <LogoWrapper>
        <Logo src={logo} alt="UMC 로고" />
      </LogoWrapper>

      <Description>
      (University MakeUs Challenge) UMC는 대학생 개발 연합 동아리입니다
     <p> UMC에서는 학기중에는 파트별 스터디를, 방학에는 개발 프로젝트를 진행합니다.</p>
      </Description>


      <ValuesTitle>UMC의 핵심가치</ValuesTitle>
      <Description2>UMC는 이러한 방향성을 추구해요</Description2>
      <ValuesList>
  {["도전", "평등", "자신감"].map((value, index) => (
    <ValueItem key={value} delay={`${index * 0.2}s`}>
      {value}
    </ValueItem>
  ))}
</ValuesList>

<SchoolsTitle>UMC와 함께하는 학교들</SchoolsTitle>
<SliderWrapper>
  <ArrowWrapper left onClick={handlePrev}>
    <ArrowIconLeft
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 133 238"
      fill="none"
    >
      <path d="M120 224.75L12.9282 117.308L120 13.25" />
    </ArrowIconLeft>
  </ArrowWrapper>

  <SliderContainer>
    <Slider translateX={-currentIndex * 100}>
      {slides.map((slide, index) => (
        <Slide key={index}>
          {slide.map((school) => (
            <School key={school}>{school}</School>
          ))}
        </Slide>
      ))}
    </Slider>
  </SliderContainer>

  <ArrowWrapper onClick={handleNext}>
    <ArrowIconRight
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 133 238"
      fill="none"
    >
      <path d="M13 224.75L120.072 117.308L13 13.25" />
    </ArrowIconRight>
  </ArrowWrapper>
</SliderWrapper>
    </Container>
  );
};

export default Main;
