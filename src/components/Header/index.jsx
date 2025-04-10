import React from "react";
import { HeaderContainer } from "./styles";
import Logo from "../../assets/logo.png";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";



const Header = () => {
  return (
    <HeaderContainer>
      <img style={{ width: '40px', height: '30px'}} alt="Logo letra J" src={Logo} />
      
      
      <div>
        <button><FaLinkedin style={{ fontSize: '30px' }} /></button>
        <button><FaGithub style={{ fontSize: '30px' }} /></button>
      </div>
    </HeaderContainer>
  );
};

export default Header;
