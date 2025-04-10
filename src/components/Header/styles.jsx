import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: sticky;
  top: 0; 
  z-index: 1000; 
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2.5rem;


  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  button {
    background-color: transparent;
    color: white;
    cursor: pointer;
    padding: 12px;
    border: none;
    border-radius: 50%;

    &:hover {
      background-color: rgba(242, 242, 242, 0.2);
    }
  }
`;