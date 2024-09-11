// src/components/Header.js
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';

const HeaderContainer = styled.header`
  background-color: #ff66aa;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const Logo = styled.h1`
  color: white;
  font-family: 'OsuFont', sans-serif;
`;

const Nav = styled.nav`
  padding: 0 50px 0 0;
  a {
    color: white;
    margin: 0 15px;
    text-decoration: none;
    font-family: 'OsuFont', sans-serif;
    cursor: pointer;
    transition: color 0.3s;

    &:hover {
      color: #ff3385;
    }
  }
`;

const Header = () => {
    return (
        <HeaderContainer>
            <Logo>Watshy</Logo>
            <Nav>
                <Link to="about" smooth={true} offset={-100}>À propos</Link>
                <Link to="projects" smooth={true} offset={-100}>Projets</Link>
                <Link to="contact" smooth={true} offset={-100}>Contact</Link>
            </Nav>
        </HeaderContainer>
    );
};

export default Header;