import React from 'react';
import AboutMe from '../../components/AboutMe';
import Header from '../../components/Header'
import Technologies from '../../components/Technologies';
import Projects from '../../components/Projects';
import Information from '../../components/Information';
import { Container } from './styles';

const Home = () => {
  return (
    <Container>
      <Header />
      <AboutMe />
      <Projects />
      <Technologies />
      <Information />
    </Container>
  );
};

export default Home;
