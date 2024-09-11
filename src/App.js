// src/App.js
import React from 'react';
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import styled from 'styled-components';

const Content = styled.div`
  margin-top: 80px;
`;

function App() {
    return (
        <>
            <GlobalStyles />
            <Header />
            <Content>
                <Hero />
                <About />
                <Projects />
                <Contact />
                <Footer />
            </Content>
        </>
    );
}

export default App;