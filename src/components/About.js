// src/components/About.js
import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.section`
  padding: 50px 20px;
  background-color: #333;
  color: white;
  text-align: center;
`;

const AboutTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
`;

const AboutText = styled.p`
  font-size: 1.2rem;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.5;
`;

const About = () => {
    return (
        <AboutContainer id="about">
            <AboutTitle>À propos de moi</AboutTitle>
            <AboutText>
                Je suis William, un développeur web passionné par les jeux vidéo et les technologies web.
                J'ai de l'expérience dans Git/Github, React JS, PHP et d'autres...
                Et bien sûr j'aime créer des applications web interactives et dynamiques.
            </AboutText>
        </AboutContainer>
    );
};

export default About;