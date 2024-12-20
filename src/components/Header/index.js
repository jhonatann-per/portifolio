import React from "react";
import { HeaderContainer, OptionsButton, Buttons } from "./styles";

const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

const handleSobreMimClick = () => {
  scrollToSection('sobreMim');
};

const handleTecnologiasClick = () => {
  scrollToSection('tecnologias');
};

const Header = () => {
  return (
    <HeaderContainer>
      <h1>Um Pouco Sobre mim</h1>
      <OptionsButton>
        <Buttons id="sobreButton" onClick={handleSobreMimClick}>Sobre Mim</Buttons>
        <Buttons id="tecnologiasButton" onClick={handleTecnologiasClick}>Tecnologias</Buttons>
      </OptionsButton>
      <p>Bem-vindo!</p>
    </HeaderContainer>
  );
};

export default Header;
