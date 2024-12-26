import styled from 'styled-components';


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 77vw;
  height: 30vh;
  padding: 20px;
  background-color:transparent;
  border-radius: 10px;
  margin: 10px 0;
  border: 1px solid white;
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
`;

export const TechItem = styled.li`
  display: flex;
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