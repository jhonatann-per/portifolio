import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 80vw;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 10px;
  margin: 10px 0;
`;


export const ImagePerfil = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 50%;
`;

export const Titulo = styled.h2`
  margin-bottom: 10px;
  color: #333;
`;

export const Texto = styled.p`
  color: #666;
  margin-bottom: 15px;
`;

export const ConteudoTitulo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;;
  width: 25%;
  margin-bottom: 10px;
`;

export const ConteudoTexto = styled.div`
  width: 60%;
  margin-left:10px;
`;
