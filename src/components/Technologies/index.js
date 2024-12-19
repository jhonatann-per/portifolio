import React from 'react';
import { Container, Title, TechList, TechItem } from './styles';

const Technologies = () => {
  return (
    <Container>
      <Title>Tecnologias</Title>
      <TechList>
        <TechItem>Git</TechItem>
        <TechItem>HTML</TechItem>
        <TechItem>CSS</TechItem>
        <TechItem>JavaScript</TechItem>
        <TechItem>Tailwind</TechItem>
        <TechItem>React JS</TechItem>
        <TechItem>Node JS</TechItem>
      </TechList>
    </Container>
  );
};

export default Technologies;
