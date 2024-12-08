import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
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
  gap: 24px;
`;

const NavLink = styled.li`
  a {
    color: white;
    text-decoration: none;
    font-size: 18px;
     font-weight: bold;

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
            <Link to="/">소개</Link>
          </NavLink>
          <NavLink>
            <Link to="/project">프로젝트</Link>
          </NavLink>
          <NavLink>
            <Link to="/recruit">모집</Link>
          </NavLink>
        </NavLinks>
      </NavContainer>
    </HeaderContainer>
  );
};

export default Header;
