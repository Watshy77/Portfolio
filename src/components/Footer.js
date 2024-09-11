// src/components/Footer.js
import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #333;
  color: white;
  text-align: center;
  padding: 20px 0;
  position: relative;
  bottom: 0;
  width: 100%;
`;

const SocialLinks = styled.div`
  margin: 10px 0;

  a {
    color: white;
    margin: 0 10px;
    text-decoration: none;
    font-size: 1.5rem;
    transition: color 0.3s;

    &:hover {
      color: #ff66aa;
    }
  }
`;

const Copyright = styled.p`
  font-size: 0.9rem;
  margin: 10px 0 0;
`;

const Footer = () => {
    return (
        <FooterContainer>
            <SocialLinks>
                <a href="https://github.com/watshy77" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i>
                </a>
                <a href="https://linkedin.com/in/william-queva" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin"></i>
                </a>
            </SocialLinks>
            <Copyright>
                &copy; {new Date().getFullYear()} Watshy. Tous droits réservés.
            </Copyright>
        </FooterContainer>
    );
};

export default Footer;