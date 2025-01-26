import styled from 'styled-components';


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color:transparent;
  border-radius: 10px;
  padding: 18px;
  p {
    font-size: 25px;
    margin-bottom: 10px;
    color: white;
  }
  @media screen and (max-width: 375px) {
    height: auto;
    width: 100%;
  }
`;

export const TechList = styled.div`
  width: 80%;
  display: flex;
  list-style: none;
  @media screen and (max-width: 375px) {
    flex-direction: column;
  }
`;

export const TechItem = styled.div`
  display: flex;
  width: 300px;
  border: 1px solid #fff;
  align-items: center;
  
  flex-direction: row;
  background-color: #251c31;
  border-radius: 5px;
  color: white;
  padding: 0.65rem 0.75rem;
  margin: 15px;
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