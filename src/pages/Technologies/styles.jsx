import styled from 'styled-components';


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 3rem;
  background-color:transparent;
  border-radius: 10px;

 

  h1 {
    font-size: 2.75rem;
    margin-bottom: 10px;
    color: white;
    padding-bottom: 2rem;
  }

  @media screen and (max-width: 450px) {
    height: auto;
    justify-content: center;
    padding: 0;
    align-items: center;
    text-align: center;
    margin-bottom: 2rem;
  }
`;

export const TechList = styled.div`
  width: 100%;
  display: flex;
  list-style: none;
  gap: 1rem;
  margin-bottom: 1rem;

  @media screen and (max-width: 450px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const TechItem = styled.div`
  display: flex;
  width: 90%;
  align-items: center;
  flex-direction: row;
  background-color: #251c31;
  border-radius: 5px;
  color: white;
  padding: 0.65rem 0.75rem;

  p {
    font-size: 20px;
  }
`;

export const TechImage = styled.img`
  width: 50px;
  height: 50px;
  object-fit: contain;
  margin-right: 10px;
`;