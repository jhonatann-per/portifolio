import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 80vw;
  height: 30vh;
  background-color: transparent;
`;

export const ItemBox = styled.div`
  width: 20%;
  padding: 20px;
  height: 180px;
  text-align: center;
  background-color: #fff;
  border-radius: 5px;
  border: 2px solid #ccc;
  transition: transform 0.3s, box-shadow 0.3s;
  
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

export const Title = styled.h2`
  margin-bottom: 10px;
  color: #333;
`;

export const Description = styled.p`
  color: #666;
`;
