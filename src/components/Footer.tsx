import React from 'react';
import styled from 'styled-components';
import symbolLogo from '../assets/symbol.svg';
import { Instagram, Email } from '@mui/icons-material';

const FooterContainer = styled.footer`
  background-color: #174242;
  color: white;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const FooterLogo = styled.img`
  height: 30px;
  width: auto;
  margin-top: 4px;
`;

const LinksContainer = styled.div`
  display: flex;
  gap: 15px;
  margin: 10px 0;
`;

const FooterLink = styled.a`
  color: white;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 2px;
  font-size: 14px;
  font-family: Light;

  &:hover {
    color: #cfcfcf;
  }
`;

const FooterText = styled.p`
  margin: 4px 0;
  font-size: 13px;
  text-align: center;
  line-height: 0.9;
  font-family: Light;
`;

const LogoWithText = styled.div`
  display: flex;
  align-items: center;
  gap: 7px; 
  margin-top: 5px;
`;

const LogoText = styled.span`
  font-size: 15px; 
  font-family: Light;
  color: white;
  text-align: center;
`;


const Footer = () => {
  const handleEmailClick = () => {
    window.open('https://mail.google.com/mail/?view=cm&fs=1&to=umc.swu@gmail.com', '_blank');
  };

  return (
    <FooterContainer>
      
      <LinksContainer>
        <FooterLink onClick={handleEmailClick} style={{ cursor: 'pointer' }}>
          <Email style={{ color: 'white' }} />
        
        </FooterLink>
        <FooterLink href="https://instagram.com/swu_makeus_challenge" target="_blank" rel="noopener noreferrer">
          <Instagram style={{ color: 'white' }} />
          
        </FooterLink>
      </LinksContainer>
      <FooterText>copyright  © 2024 SWU_UMC. All rights reserved.</FooterText>
      <LogoWithText>
  <FooterLogo src={symbolLogo} alt="Symbol Logo" />
  <LogoText>SEOUL WOMEN’S UNIVERSITY</LogoText>
</LogoWithText>
    </FooterContainer>
  );
};

export default Footer;