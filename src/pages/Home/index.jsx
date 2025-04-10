import React from 'react';
import Technologies from '../Technologies';
import Projects from '../Projects';
import Presentation from '../Presentation';
import Footer from '../../components/Footer';
import { Container } from './styles';
import { AboutMe } from '../AboutMe';

const Home = () => {
  return (
    <Container>
      <Presentation />
      <AboutMe />
      <Technologies />
      <Projects />
      <Footer />
    </Container>
  );
};

export default Home;
