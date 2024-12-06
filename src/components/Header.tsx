import React from 'react';
import styled from 'styled-components';
import headerLogo from '../assets/header.svg'; 

const HeaderContainer = styled.header`
  background: linear-gradient(90deg, #052309, #148923);
  color: white;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px; 
  display: flex;
  align-items: center; 
`;

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px; 
`;

const Logo = styled.img`
  height: 50px; 
  width: auto; 
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
      
        <Logo src={headerLogo} alt="Header Logo" />
      
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
