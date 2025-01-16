import React from 'react';
import AboutMe from '../../components/AboutMe';
import Header from '../../components/Header';
import Technologies from '../../components/Technologies';
import Projects from '../../components/Projects';
import Information from '../../components/Information';
import Footer from '../../components/Footer';
import { Container } from './styles';

const Home = () => {
  return (
    <Container>
      <Header />
      <AboutMe />
      <Technologies />
      <Information />
      <Projects />
      <Footer />
    </Container>
  );
};

export default Home;
