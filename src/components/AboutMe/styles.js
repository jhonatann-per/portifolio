import styled, { keyframes } from 'styled-components';

const slideAndFade = keyframes`
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  50% {
    transform: translateX(0);
    opacity: 1;
  }
  100% {
    transform: translateX(-100%);
    opacity: 0;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80vw;
  padding: 20px;
  border-radius: 10px;
  margin: 10px 0;
  height: 70vh;
`;

export const ConteudoPerfil = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 25%;
  margin-bottom: 10px;
`;

export const TituloContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Titulo = styled.h2`
  margin-bottom: 10px;
  color: #fff;
`;

export const ImagePerfil = styled.img`
  width: 80%;
  height: auto;
  border-radius: 50%;
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.6);
`;

export const ConteudoTexto = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  margin-left: 10px;
  text-align: justify;
`;

export const Texto = styled.p`
  color: white;
  margin-bottom: 15px;
  font-size: 20px;
  font-weight: normal;
`;

export const ListDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding-top: 15px;
  text-align: left;
`;

export const List = styled.ul`
  color: white;
  list-style: none;
`;

export const ListItem = styled.li`
  color: white;
  padding: 5px;
  font-size: 18px;
  font-weight: normal;
  display: inline;
`;

export const IconsDiv = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
  color: white;

  p {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 15px;

    a {
      color: white;
      text-decoration: none;
    }
  }
`;

export const Skils = styled.div`
  animation: ${slideAndFade} 4.5s linear infinite;
`;
