import styled from 'styled-components';

export const Container = styled.section`
  width: 92%;
  margin: 0 auto;
  padding: 3rem;
  margin-top: 3rem;
  border-radius: 12px;
  box-shadow: 0 0 20px rgba(0,0,0,0.4);
  color: #fff;
  
  @media screen and (max-width: 450px) {
    box-shadow: none;
    background-color: #140d22;
  }
`;

export const Titulo = styled.h2`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  text-align: center;
  color: #f0a500;
`;

export const Formulario = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

export const Input = styled.input`
  padding: 0.75rem 1rem;
  border: none;
  border-radius: 8px;
  background-color: #2c2c2c;
  color: #fff;
  font-size: 1rem;

  &::placeholder {
    color: #aaa;
  }

  &:focus {
    outline: 2px solid #f0a500;
  }
`;

export const Botao = styled.button`
  background-color: #f0a500;
  color: #1e1e1e;
  font-weight: bold;
  padding: 0.8rem 1rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background-color: #d98e00;
  }
`;

export const Erro = styled.p`
  color: #ff4d4d;
  margin-top: 1rem;
  text-align: center;
  font-weight: bold;
`;

export const Sucesso = styled.p`
  color: #4CAF50; 
  margin-top: 1rem;
  text-align: center;
  font-weight: bold;
`;


export const TextArea = styled.textarea`
  padding: 0.75rem 1rem;
  border: none;
  border-radius: 8px;
  background-color: #2c2c2c;
  color: #fff;
  font-size: 1rem;
  resize: vertical;

  &::placeholder {
    color: #aaa;
  }

  &:focus {
    outline: 2px solid #f0a500;
  }
`;

