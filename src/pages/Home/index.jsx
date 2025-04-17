import React from 'react';
import { Technologies } from '../Technologies';
import { Presentation } from '../Presentation';
import { Footer } from '../../components/Footer';
import { ProjetoDestaque } from '../Projects';

import { Container } from './styles';
import { AboutMe } from '../AboutMe';
import { FormEmail } from '../FormEmail'; 

const Home = ({ projectsRef, presentationRef }) => {
  return (
    <Container>
      <Presentation ref={presentationRef} />
      <AboutMe />
      <Technologies />
      <ProjetoDestaque ref={projectsRef} mostrarTitulo={true} />
      <FormEmail />
      <Footer />
    </Container>
  );
};

export default Home;
