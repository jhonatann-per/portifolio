import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  margin-top: 70px; 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  @media screen and (max-width: 375px) {
    margin-top: 0;
    padding: 0;
  }
`;
