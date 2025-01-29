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
  width: 80%;
  padding: 20px;
  border-radius: 10px;
  margin: 10px 0;
  height: 80vh;

  h2 {
    font-size: 2rem;
    color: white;
  }
  
  @media screen and (max-width: 450px) {
    flex-direction: column;
    align-items: stretch;
    height: auto;
    width: 100%;
  }
`;

export const ConteudoPerfil = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 25%;
  margin-bottom: 10px;

  @media screen and (max-width: 450px) {
    width: 100%;
    margin-bottom: 20px;
  }
`;

export const TituloContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const ImagePerfil = styled.img`
  width: 80%;
  height: auto;
  border-radius: 50%;
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.6);

  @media screen and (max-width: 450px) {
    width: 50%;
  }
`;

export const ConteudoTexto = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 60%;
  margin-left: 10px;
  text-align: justify;

  p{
    color: white;
    margin-bottom: 15px;
    font-size: 20px;
    font-weight: normal;

    @media screen and (max-width: 450px) {
    font-size: 15px;
  }
  }
  @media screen and (max-width: 450px) {
    width: 95%;
  }
`;


export const ListDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding-top: 15px;
  text-align: left;

  @media screen and (max-width: 450px) {
    flex-direction: column;
    padding-top: 10px;
  }
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

  @media screen and (max-width: 450px) {
    display: none;
  }
`;

export const SocialDiv = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
  color: white;

  @media screen and (max-width: 450px) {
    flex-direction: row;

    p{
      margin-left: 10px;
    }
  }

  p {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 15px;

    a {
      color: white;
      text-decoration: none;
    }

    @media screen and (max-width: 450px) {
      margin-right: 0;
    }
  }
`;

export const Skils = styled.div`
  animation: ${slideAndFade} 4.5s linear infinite;
  
  @media screen and (max-width: 450px) {
      width: 110px;
      font-size: 10px;
    }
  h1 {
    color: white;
  }
`;
