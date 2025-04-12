import React from 'react';
import Technologies from '../Technologies';
import Presentation from '../Presentation';
import Footer from '../../components/Footer';
import Projects from '../Projects';
import { Container } from './styles';
import { AboutMe } from '../AboutMe';

const Home = ({ projectsRef, presentationRef }) => {
  return (
    <Container>
      <Presentation ref={presentationRef} />
      <AboutMe />
      <Technologies />
      <Projects ref={projectsRef} mostrarTitulo={true} />
      <Footer />
    </Container>
  );
};

export default Home;
