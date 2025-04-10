import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 0 auto;
  max-width: 1280px;
  
  @media screen and (max-width: 450px) {
    margin-top: 0;
    padding: 0;
  }
`;
