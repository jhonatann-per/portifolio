import styled from "styled-components";

export const Container = styled.section`
  padding: 3rem;

  > div + div {
    margin-top: 4rem;
  }


  @media screen and (max-width: 450px) {
    padding: 0;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    
      div{
        width: 90%;
      }
  }
`;

export const TituloSecao = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  color: white;
  margin-bottom: 3rem;
`;

export const Conteudo = styled.div`
  display: flex;
  flex-direction: ${({ imagemEsquerda }) => (imagemEsquerda ? 'row-reverse' : 'row')};
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  padding: 4rem 2rem;
  border-radius: 12px;
  background-color: #140d22;

  @media screen and (max-width: 450px) {
    flex-direction: column-reverse;
    padding: 0;
    padding-top: 2rem;
  }
`;


export const Destaque = styled.p`
  color: #a855f7;
  font-weight: bold;
  margin-bottom: 0.5rem;

`;

export const NomeProjeto = styled.h3`
  color: #cbd5f1;
  font-size: 2rem;
  margin-bottom: 1rem;
`;

export const Descricao = styled.p`
  background-color: #2d2342;
  padding: 1rem;
  border-radius: 12px;
  color: #cbd5f1;
  max-width: 500px;
  margin-bottom: 1rem;
  @media screen and (max-width: 450px) {
    width: 100%;
  }
`;

export const Tecnologias = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;

  span {
    background-color: #1f1b2e;
    padding: 0.3rem 0.6rem;
    border-radius: 6px;
    font-size: 0.9rem;
    color: #eee;
  }

  @media screen and (max-width: 450px) {
    padding: 0;
    gap: 0.2rem;
    display: flex;
    flex-wrap: wrap;
  }
`;

export const Icones = styled.div`
  display: flex;
  gap: 1rem;

  svg {
    color: white;
    font-size: 1.5rem;
    cursor: pointer;

    &:hover {
      color: #a855f7;
    }
  }
`;

export const Imagem = styled.img`
  max-width: 700px;
  border-radius: 12px;
  box-shadow: 0 0 20px rgba(168, 85, 247, 0.2);

  @media screen and (max-width: 450px) {
    width: 80%;
  }
`;
