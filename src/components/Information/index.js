import React from 'react';
import { Container, ItemBox, Title, Description } from './styles';

const Information = () => {
  const items = [
    {
      title: 'HTML',
      description: 'HTML é a linguagem de marcação padrão para criar páginas web. É usado para estruturar o conteúdo da web.',
    },
    {
      title: 'JavaScript',
      description: 'JavaScript é uma linguagem de programação que permite criar conteúdo web interativo e dinâmico.',
    },
    {
      title: 'React JS',
      description: 'React é uma biblioteca JavaScript para construir interfaces de usuário. É eficiente e flexível.',
    },
    {
      title: 'Node JS',
      description: 'Node.js é um ambiente de execução JavaScript que permite construir aplicações de servidor escaláveis.',
    },
  ];

  return (
    <Container>
      {items.map((item, index) => (
        <ItemBox key={index}>
          <Title>{item.title}</Title>
          <Description>{item.description}</Description>
        </ItemBox>
      ))}
    </Container>
  );
};

export default Information;
