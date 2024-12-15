import React from "react";
import styled, { keyframes } from "styled-components";

const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(270deg, #174242, #1c5151, #1f5c5c, #236868);
  background-size: 400% 400%;
  animation: ${gradientAnimation} 10s ease infinite;
  color: white;
  font-family: Arial, sans-serif;
  text-align: center;
  padding: 40px;
  min-height: 100vh;
`;

const fadeIn = keyframes`
  0% { opacity: 0; transform: translateY(-20px); }
  100% { opacity: 1; transform: translateY(0); }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 20px;
  animation: ${fadeIn} 1.5s ease;
`;

const Subtitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 15px;
  color: #a9f3e3;
  animation: ${fadeIn} 1.8s ease;
`;

const TextFadeIn = keyframes`
  0% { opacity: 0; transform: translateY(10px); }
  100% { opacity: 1; transform: translateY(0); }
`;

const Text = styled.p`
  font-size: 1.2rem;
  margin: 5px 0;
  animation: ${TextFadeIn} 2s ease;
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 20px 0;
  animation: ${TextFadeIn} 2.5s ease;
`;

const ListItem = styled.li`
  font-size: 1.2rem;
  margin: 8px 0;
  padding: 10px 15px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  backdrop-filter: blur(5px);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, background 0.3s ease;
  cursor: pointer;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-5px);
  }
`;

const PartContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
`;

const Part = styled.div`
  padding: 20px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  border: 2px solid #a9f3e3;
  font-size: 1.2rem;
  font-weight: bold;
  color: #ffffff;
  text-transform: uppercase;
  width: 120px;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.5s ease, box-shadow 0.5s ease;
  animation: ${TextFadeIn} 3s ease;

  &:hover {
    transform: scale(1.2);
    box-shadow: 0 4px 20px rgba(169, 243, 227, 0.7);
  }
`;

const Recruit: React.FC = () => {
  return (
    <Container>
      
      <Title>UMC 7기 리크루팅</Title>
      <Subtitle>모집 안내</Subtitle>

     
      <Subtitle>활동 정보</Subtitle>
      <Text>활동 기간: 24.09 ~ 25.02 (6개월)</Text>
      <Text>동아리 회비: 5만원</Text>
      <Text>프로젝트 참가비: 3만원 (2만원 페이백)</Text>
      <Text>*11월 초 중으로 받을 예정입니다.</Text>

      
      <Subtitle>모집 일정</Subtitle>
      <List>
        <ListItem>서류 접수: 08.27(화) ~ 09.05(목)</ListItem>
        <ListItem>1차 합격자 발표: 09.06(금)</ListItem>
        <ListItem>면접 평가: 09.07(토) ~ 09.09(월)</ListItem>
        <ListItem>최종 합격자 발표: 09.11(수)</ListItem>
        <ListItem>연합 OT: 09.20(금) 18시 30분</ListItem>
        <ListItem>학교 OT: 09.20(금) 19시 30분</ListItem>
      </List>

     
      <Subtitle>모집 파트</Subtitle>
      <PartContainer>
        <Part>기획</Part>
        <Part>디자인</Part>
        <Part>개발</Part>
      </PartContainer>

 
    </Container>
  );
};

export default Recruit;
