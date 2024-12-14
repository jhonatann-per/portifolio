import React from "react";
import { HeaderContainer, OptionsButton, Buttons  } from "./styles";


const Header = () => {
  return (
    <HeaderContainer>
      <h1>Tudo Sobre mim</h1>
      <OptionsButton>
        <Buttons>Projetos</Buttons>
        <Buttons>Tecnologias</Buttons>
      </OptionsButton>
      <p>Bem-vindo!</p>
    </HeaderContainer>
  );
};

export default Header;
