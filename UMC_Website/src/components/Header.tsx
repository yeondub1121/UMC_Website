import React from 'react';
import styled from 'styled-components';
import headerLogo from '../assets/header.svg'; // header.svg 파일 경로에 맞게 수정

const HeaderContainer = styled.header`
  background-color: #052309;
  color: white;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px; /* 헤더 높이 조정 */
  display: flex;
  align-items: center; /* 수직 중앙 정렬 */
`;

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px; /* 좌우 여백 추가 */
`;

const Logo = styled.img`
  height: 50px; /* 로고 크기 */
  width: auto; /* 비율 유지 */
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  gap: 24px;
`;

const NavLink = styled.li`
  a {
    color: white;
    text-decoration: none;
    font-size: 17px;

    &:hover {
      color: #cfcfcf;
    }
  }
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <NavContainer>
        {/* 로고 이미지 */}
        <Logo src={headerLogo} alt="Header Logo" />
        
        {/* 내비게이션 메뉴 */}
        <NavLinks>
          <NavLink>
            <a href="#about">소개</a>
          </NavLink>
          <NavLink>
            <a href="#projects">프로젝트</a>
          </NavLink>
          <NavLink>
            <a href="#apply">지원하기</a>
          </NavLink>
        </NavLinks>
      </NavContainer>
    </HeaderContainer>
  );
};

export default Header;
