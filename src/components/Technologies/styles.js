import styled from 'styled-components';


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80vw;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 10px;
  margin: 10px 0;
`;

export const Title = styled.h2`
  margin-bottom: 10px;
  color: #333;
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
  color: #666;
  padding: 20px;
  margin: 15px;
`;

export const TechImage = styled.img`
  width: 50px;
  height: 50px;
  object-fit: contain;
  margin-right: 10px;
`;