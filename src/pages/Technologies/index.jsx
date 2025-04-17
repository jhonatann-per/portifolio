import React from 'react';
import { Container, TechList, TechItem, TechImage } from './styles';
import gitLogo from '../../assets/git.png';
import htmlLogo from '../../assets/html.png';
import cssLogo from '../../assets/css.png';
import jsLogo from '../../assets/javascript.svg';
import tailwindLogo from '../../assets/tailwind.png';
import reactLogo from '../../assets/react.png';
import nodeLogo from '../../assets/node.png';
import nextLogo from '../../assets/next.webp';
 
export const Technologies = () => {
  return (
    <Container id="tecnologias">
      <h1>Tecnologias e Ferramentas</h1>
      <TechList>
        <TechItem><TechImage src={tailwindLogo} alt="Tailwind" /><p>Tailwind</p></TechItem>
        <TechItem><TechImage src={reactLogo} alt="React JS" /><p>React JS</p> </TechItem>
        <TechItem><TechImage src={nodeLogo} alt="Node JS" /><p>Node JS</p></TechItem>
        <TechItem><TechImage src={nextLogo} alt="Next" /><p>Next.js</p></TechItem>
      </TechList>
      <TechList>
        <TechItem><TechImage src={gitLogo} alt="Git" /><p>GitHub</p></TechItem>
        <TechItem><TechImage src={htmlLogo} alt="HTML" /><p>HTML</p></TechItem>
        <TechItem><TechImage src={cssLogo} alt="CSS" /><p>CSS</p></TechItem>
        <TechItem><TechImage src={jsLogo} alt="JavaScript" /><p>JavaScript</p></TechItem>
      </TechList>

    </Container>
  );
};

