import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex; 
  justify-content: space-between; 
  align-items: center; 
  padding: 18px; 
  background: transparent; 
  color: white; 
  position: fixed; 
  width: 100%; 
  top: 0; 
  z-index: 1000; 
  @media (max-width: 768px) { 
    flex-direction: column; 
  }
`;

export const OptionsButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  border-radius: 24px;
  border: 1px solid rgba(242, 242, 242, 0.1);
  padding: 0.5rem;
  background-color: rgba(242, 242, 242, 0.05);
  &:hover {
    border: 1px solid rgba(242, 242, 242, 0.2);
  }
`;

export const Buttons = styled.button`
  background-color: transparent;
  padding: 8px;
  border-radius: 24px; 
  margin-left: 10px;
  font-size: 15px;
`;