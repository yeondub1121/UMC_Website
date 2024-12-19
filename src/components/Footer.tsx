import React from 'react';
import styled from 'styled-components';
import symbolLogo from '../assets/symbol.svg';

const FooterContainer = styled.footer`
  background-color: #174242;
  color: white;
  height: 210px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  
`;

const FooterLogo = styled.img`
  height: 50px;
  width: auto;
  margin-bottom: 16px;
`;

const FooterText = styled.p`
  margin: 4px 0; 
  font-size: 14px;
  text-align: center;
  line-height: 1;
  font-family: Light;
`;

const FooterLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 14px;
  margin-top: 8px;

  &:hover {
    color: #cfcfcf;
  }
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterLogo src={symbolLogo} alt="Symbol Logo" />
      <FooterLink href="https://instagram.com/swu_makeus_challenge" target="_blank" rel="noopener noreferrer">
        Instagram swu_makeus_challenge
      </FooterLink>
      <FooterText>Email umc.swu@gmail.com</FooterText>
      <FooterText>© 2024 SWU_UMC. All rights reserved.</FooterText>
    </FooterContainer>
  );
};

export default Footer;
