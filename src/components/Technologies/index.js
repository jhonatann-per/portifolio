import React from 'react';
import { Container, TechList, TechItem, TechImage } from './styles';
import gitIcon from '../../assets/git.png';
import htmlIcon from '../../assets/html.png';
import cssIcon from '../../assets/css.png';
import jsIcon from '../../assets/javascript.webp';
import tailwindIcon from '../../assets/tailwind.png';
import reactIcon from '../../assets/react.png';
import nodeIcon from '../../assets/node.png';

const Technologies = () => {
  return (
    <Container id="tecnologias">
      <p>Tecnologias e Ferramentas</p>
      <TechList>
        <TechItem><TechImage src={tailwindIcon} alt="Tailwind" /><p>Tailwind</p></TechItem>
        <TechItem><TechImage src={reactIcon} alt="React JS" /><p>React JS</p> </TechItem>
        <TechItem><TechImage src={nodeIcon} alt="Node JS" /><p>Node JS</p></TechItem>
      </TechList>
      <TechList>
        <TechItem><TechImage src={gitIcon} alt="Git" /><p>GitHub</p></TechItem>
        <TechItem><TechImage src={htmlIcon} alt="HTML" /><p>HTML</p></TechItem>
        <TechItem><TechImage src={cssIcon} alt="CSS" /><p>CSS</p></TechItem>
        <TechItem><TechImage src={jsIcon} alt="JavaScript" /><p>JavaScript</p></TechItem>
      </TechList>

    </Container>
  );
};

export default Technologies;
