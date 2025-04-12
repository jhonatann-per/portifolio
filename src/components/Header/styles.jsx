import styled from "styled-components";

export const Container = styled.header`
  position: sticky;
  top: 0;
  z-index: 1000;
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;


  .social-container {
    display: flex;
    align-items: center;
    justify-content: center;
    
    @media screen and (max-width: 450px) {
      gap: 0;
    }
  }

  @media screen and (max-width: 450px) {
    padding: 1rem;
  }
`;

export const SocialButton = styled.button`
  background-color: transparent;
  color: white;
  cursor: pointer;
  padding: 12px;
  border: none;
  border-radius: 50%;
  outline: none; 

  a{
    color: white;
  }

  &:hover {
    background-color: rgba(242, 242, 242, 0.2);
  }

  &:active {
    opacity: 0.5; 
  }

  @media screen and (max-width: 450px) {
    padding: 8px;
  }
`;


export const ToggleContainer = styled.div`
  background-color: #1a1124;
  border: 1px solid #332a3d;
  padding: 4px;
  display: flex;
  border-radius: 25px;
  position: relative;
  width: fit-content;
  overflow: hidden;
  gap: 0.5rem;
  
`;

export const ToggleButton = styled.button`
  color: ${(props) => (props.active ? "white" : "#aaa")};
  background-color: ${(props) =>
    props.active ? "rgba(242, 242, 242, 0.2)" : "transparent"};
  border: none;
  width: 7rem;
  padding: 10px 0;
  font-size: 16px;
  cursor: pointer;
  position: relative;
  z-index: 1;
  transition: all 0.3s ease;
  border-radius: 25px;

  &:hover {
    background-color: rgba(242, 242, 242, 0.2);
  }

  
`;

export const ActiveIndicator = styled.div`
  position: absolute;
  top: 0;
  height: 3px;
  width: 3.5rem;
  background: white;
  border-radius: 2px;
  box-shadow: 0 0 8px 2px white; 
  transition: all 0.3s ease;
  left: 0;
  transform: ${(props) =>
    props.active === "projetos"
      ? "translateX(9.5rem)"
      : "translateX(1.65rem)"};

@media screen and (max-width: 450px) {
    transform: ${(props) =>
    props.active === "projetos"
      ? "translateX(8.5rem)"
      : "translateX(1.475rem)"};
  }
  
`;
