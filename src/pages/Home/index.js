import React from 'react';
import AboutMe from '../../components/AboutMe';
import Header from '../../components/Header'
import Technologies from '../../components/Technologies';
import { Container } from './styles';

const Home = () => {
  return (
    <Container>
      <Header />
      <AboutMe />
      <Technologies />
    </Container>
  );
};

export default Home;
