import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 90vh;
  border-radius: 10px;
  margin: 0 auto;
  padding: 0rem 3rem 3rem 3rem;

  @media screen and (max-width: 450px) {
    flex-direction: column;
    height: auto;
    padding: 1rem;
    margin-top: 1.75rem;
  }
`;

export const AboutInformation = styled.div`
  color: white;
  display: flex;
  width: 50%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 50px;

  @media screen and (max-width: 450px) {
    width: 100%;
    order: 2;
  }

  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    width: 100%;

    h1 {
      font-size: 2.75rem;
    }
  }

  div {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-top: 20px;
  }
`;

const bounce = keyframes`
  0% {
    transform: translateY(0);
    opacity: 0.4;
  }
  30% {
    opacity: 0.6;
  }
  50% {
    transform: translateY(10px);
    opacity: 1;
  }
  70% {
    opacity: 0.6;
  }
  100% {
    transform: translateY(0);
    opacity: 0.5;
  }
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: end;
  height: 100%;

  @media screen and (max-width: 450px) {
    order: 3;
    margin-top: 2rem;
  }
`;

export const ConteudoPerfil = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  width: 50%;

  @media screen and (max-width: 450px) {
    width: 100%;
    margin-bottom: 20px;
    order: 1;
  }
`;

export const ImagePerfil = styled.img`
  width: 70%;
  height: auto;
  border-radius: 50%;
  box-shadow: 0 0 90px rgba(255, 255, 255, 0.6);

  @media screen and (max-width: 450px) {
    width: 50%;
  }
`;

export const BotaoCv = styled.button`
  padding: 0.875rem 1.75rem;
  border-radius: 0.375rem;
  font-size: 0.9rem;
  font-weight: 400;
  line-height: normal;
  background-color: #682abf;
  border: none;
  cursor: pointer;
  color: white;
  font-weight: bolder;

  &:hover {
    background-color: #5104bd;
    transition: 0.3s;
  }
`;

export const BotaoContateMe = styled.button`
  padding: 0.875rem 1.75rem;
  border-radius: 0.375rem;
  font-size: 0.9rem;
  font-weight: bolder;
  background-color: transparent;
  border: none;
  color: white;
  border: 1px solid #f2f2f2;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    opacity: 0.6;
    transition: 0.3s;
  }
`;

export const ArrowDownImage = styled.img`
  width: 80px;
  height: auto;
  animation: ${bounce} 2.5s ease-in-out infinite;
  transition: opacity 0.3s ease;

  @media screen and (max-width: 450px) {
    width: 30px;
  }
`;
