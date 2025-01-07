import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center; /* Alinhe os itens ao centro */
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: transparent;
  padding: 20px; /* Espaçamento para melhorar a aparência */
`;

export const ContainerTec = styled.div`
  width: 80%; /* Itens ocupando 80% da largura */
  display: flex;
  justify-content: space-between; /* Distribuição igual do espaço */
  align-items: center;
  margin-bottom: 100px;

  @media screen and (max-width: 375px) {
    flex-direction: column;
  }
`;

export const ItemBox = styled.div`
  flex: 1; 
  width: 20%; 
  height: 200px;
  margin: 0 2.5%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 5px;
  border: 2px solid #ccc;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  @media screen and (max-width: 375px) {
    width: 100%;
    margin-bottom: 15px;
    margin: none;
  }
`;

export const Title = styled.h2`
  margin-bottom: 10px;
  color: #333;
`;

export const Description = styled.p`
  color: #666;
`;
