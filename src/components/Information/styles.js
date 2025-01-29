import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: transparent;
  padding: 20px;

  @media screen and (max-width: 450px) {
    padding: 0;
  }
`;

export const ContainerTec = styled.div`
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 100px;
  h2 {
    color: #fff;
  }
  p {
    color: #fff
  }

  @media screen and (max-width: 450px) {
    height: 200px;
  }
`;

export const ItemBox = styled.div`
  flex: 1;
  width: 23%;
  height: 200px;
  margin: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #251c31;
  border-radius: 5px;
  border: 2px solid #ccc;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  @media screen and (max-width: 450px) {
    width: 100%; 
    margin-bottom: 15px;
    margin: 0;
  }
`;

export const Arrow = styled.div`
  font-size: 2.5rem;
  color: #333;
  cursor: pointer;
  user-select: none;
  display: flex;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;

  &:hover {
    color: #666;
  }

  ${({ left }) => left && `
    left: 10px;
  `}

  ${({ right }) => right && `
    right: 10px;
  `}
`;
