// src/components/Hero.js
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';

const HeroContainer = styled.section`
  background-image: url('/path/to/your/background-image.jpg');
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  padding: 0 20px;
`;

const HeroText = styled.h1`
  font-size: 3rem;
  margin: 0;
`;

const HeroSubText = styled.p`
  font-size: 1.5rem;
  margin: 10px 0;
`;

const HeroButton = styled(Link)`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #ff66aa;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-size: 1rem;
  transition: background-color 0.3s;
  cursor: pointer;

  &:hover {
    background-color: #ff3385;
  }
`;

const Hero = () => {
    return (
        <HeroContainer>
            <HeroText>Bienvenue sur mon Portfolio</HeroText>
            <HeroSubText>Je suis William, développeur web et un passionné de jeux vidéos</HeroSubText>
            <HeroButton to="projects" smooth={true} offset={-80}>
                Voir mes projets
            </HeroButton>
        </HeroContainer>
    );
};

export default Hero;