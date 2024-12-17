import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import headerLogo from '../assets/header.svg';

const HeaderContainer = styled.header`
  background: #102D2D;
  color: white;
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
  gap: 40px;
`;

const NavLinkStyled = styled(NavLink)`
  color: white;
  text-decoration: none;
  font-size: 18px;
  font-weight: 500;

  &:hover {
    color: #cfcfcf;
  }

  &.active {
    color: #a9f3e3; 
    font-weight: bold;
  } 
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <NavContainer>
        <Logo src={headerLogo} alt="Header Logo" />
        <NavLinks>
          <li>
            <NavLinkStyled to="/" exact>
              소개
            </NavLinkStyled>
          </li>
          <li>
            <NavLinkStyled to="/project">
              프로젝트
            </NavLinkStyled>
          </li>
          <li>
            <NavLinkStyled to="/recruit">
              모집
            </NavLinkStyled>
          </li>
        </NavLinks>
      </NavContainer>
    </HeaderContainer>
  );
};

export default Header;
