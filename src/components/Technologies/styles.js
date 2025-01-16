import styled from 'styled-components';


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 77vw;
  height: 100vh;
  padding: 20px;
  background-color:transparent;
  border-radius: 10px;

  @media screen and (max-width: 375px) {
    height: auto;
  }
`;

export const Title = styled.h2`
  margin-bottom: 10px;
  color: white;
`;

export const TechList = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  padding: 0;
  @media screen and (max-width: 375px) {
    flex-direction: column;
  }
`;

export const TechItem = styled.div`
  display: flex;
  width: 300px;
  border: 1px solid #fff;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: white;
  padding: 20px;
  margin: 15px;
`;

export const TechImage = styled.img`
  width: 50px;
  height: 50px;
  object-fit: contain;
  margin-right: 10px;
`;