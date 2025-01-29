import React, { useEffect, useState } from 'react';
import { Container, ItemBox, ContainerTec, Arrow } from './styles';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';

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

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 375);

  const showItem = (index) => {
    const items = document.querySelectorAll('.item');
    items.forEach((item, i) => {
      item.style.display = i === index ? 'block' : 'none';
    });
  };

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 450;
      setIsMobile(mobile);
      if (!mobile) {
        const items = document.querySelectorAll('.item');
        items.forEach(item => item.style.display = 'block');
      } else {
        showItem(currentIndex);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, [currentIndex]);

  const nextSlide = () => {
    const nextIndex = (currentIndex + 1) % items.length;
    setCurrentIndex(nextIndex);
    showItem(nextIndex);
  };

  const prevSlide = () => {
    const prevIndex = (currentIndex - 1 + items.length) % items.length;
    setCurrentIndex(prevIndex);
    showItem(prevIndex);
  };

  return (
    <Container>
      {isMobile && (
        <Arrow onClick={prevSlide} left>
          <BiChevronLeft />
        </Arrow>
      )}
      <ContainerTec>
        {items.map((item, index) => (
          <ItemBox key={index} className="item">
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </ItemBox>
        ))}
      </ContainerTec>
      {isMobile && (
        <Arrow onClick={nextSlide} right>
          <BiChevronRight />
        </Arrow>
      )}
    </Container>
  );
};

export default Information;
