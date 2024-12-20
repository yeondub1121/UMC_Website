import React from "react";
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
  font-size: 48px; 
  font-weight: bold;
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
  line-height: 1.6;
`;

const Description2 = styled.p`
  font-size: 18px; 
  margin-bottom: 10px; 
  text-align: center;
  line-height: 1.6;
  margin-top: 12px;
`;

const ValuesTitle = styled.h2`
  font-size: 28px; 
  margin-bottom: -5px; 
  font-weight: bold;
  color:  #a9f3e3;
`;

const ValuesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 20px;
  text-align: center;
  display: flex; 
  justify-content: center; 
  gap: 20px; 
`;

const ValueItem = styled.li`
  font-size: 22px; 
  margin: 3px 0; 
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
`;

const SchoolsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
  max-width: 800px;
`;

const School = styled.div`
  padding: 10px 20px;
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
`;

const Main: React.FC = () => {
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
        수정 필요 UMC는 University MakeUs Challenge 대학생 개발 연합 동아리입니다
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
      <SchoolsContainer>
        <School>가천대학교</School>
        <School>가톨릭대학교</School>
        <School>경희대학교</School>
        <School>광운대학교</School>
        <School>남서울대학교</School>
        <School>덕성여자대학교</School>
        <School>동국대학교</School>
        <School>명지대학교</School>
        <School>상명대학교</School>
        <School>서경대학교</School>
        <School>서울여자대학교</School>
        <School>성신여자대학교</School>
        <School>숭실대학교</School>
        <School>연세대학교</School>
        <School>울산대학교</School>
        <School>이화여자대학교</School>
        <School>인하대학교</School>
        <School>중앙대학교</School>
        <School>한국공학대학교</School>
        <School>한국외국어대학교</School>
        <School>한국항공대학교</School>
        <School>한성대학교</School>
        <School>한양대학교ERICA</School>
        <School>홍익대학교</School>
      </SchoolsContainer>
    </Container>
  );
};

export default Main;
