import React, { useState } from "react";
import {
  Container,
  ToggleContainer,
  ToggleButton,
  ActiveIndicator,
  SocialButton
} from "./styles";
import Logo from "../../assets/logo.png";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const Header = ({ scrollToProjects, scrollToHome }) => {
  const [active, setActive] = useState("Home");

  return (
    <Container>
      <img style={{ width: "40px", height: "30px" }} alt="Logo letra J" src={Logo} />

      <ToggleContainer className="toggle-container">
        <ActiveIndicator active={active} />
        <ToggleButton
          active={active === "Home"}
          onClick={() => {
            setActive("Home");
            scrollToHome();
          }}
        >
          Home
        </ToggleButton>
        <ToggleButton
          active={active === "projetos"}
          onClick={() => {
            setActive("projetos");
            scrollToProjects();
          }}
        >
          Projetos
        </ToggleButton>
      </ToggleContainer>

      <div className="social-container">
        <SocialButton>
          <a href="https://www.linkedin.com/in/jhonatan-pereira-aa66b0200/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin style={{ fontSize: "30px" }} />
          </a>
        </SocialButton>
        <SocialButton>
          <a href="https://github.com/jhonatann-per" target="_blank" rel="noopener noreferrer">
            <FaGithub style={{ fontSize: "30px" }} />
          </a>
        </SocialButton>
      </div>
    </Container>
  );
};

export default Header;
