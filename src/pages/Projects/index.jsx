import React, { forwardRef } from "react";
import {
  Container,
  Conteudo,
  Destaque,
  NomeProjeto,
  Descricao,
  Tecnologias,
  Icones,
  Imagem,
  TituloSecao
} from "./styles";

import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projetos = [
  {
    titulo: "Coffee Delivery",
    descricao:
      "O projeto Coffee Delivery é um sistema de compra de café, onde os usuários podem adicionar produtos ao carrinho e selecionar um CEP para a entrega. Com um design dinâmico e intuitivo, a plataforma oferece uma experiência de compra fácil e agradável.",
    imagem: require("../../assets/coffee.png"),
    tecnologias: ["React", "JavaScript", "Styled-Components"],
    githubLink: "https://github.com/jhonatann-per/coffee-delivery",
    externalLink: "https://coffee-commerce-nine.vercel.app/",
    imagemEsquerda: false
  },
  // {
  //   titulo: "Coffee Delivery",
  //   descricao:
  //     "O projeto Coffee Delivery é um sistema de compra de café, onde os usuários podem adicionar produtos ao carrinho e selecionar um CEP para a entrega. Com um design dinâmico e intuitivo, a plataforma oferece uma experiência de compra fácil e agradável.",
  //   imagem: require("../../assets/coffee.png"),
  //   tecnologias: ["React", "JavaScript", "Styled-Components"],
  //   githubLink: "https://github.com/jhonatann-per/coffee-delivery",
  //   externalLink: "https://coffee-commerce-nine.vercel.app/",
  //   imagemEsquerda: true
  // },
];

export const ProjetoDestaque = forwardRef(({ mostrarTitulo = false }, ref) => {
  return (
    <Container ref={ref}>
      {mostrarTitulo && <TituloSecao>Meus Projetos</TituloSecao>}

      {projetos.map((projeto, index) => (
        <Conteudo imagemEsquerda={projeto.imagemEsquerda} key={index}>
          <div>
            <Destaque>Projeto em destaque</Destaque>
            <NomeProjeto>{projeto.titulo}</NomeProjeto>
            <Descricao>{projeto.descricao}</Descricao>
            <Tecnologias>
              {projeto.tecnologias.map((tec, i) => (
                <span key={i}>{tec}</span>
              ))}
            </Tecnologias>
            <Icones>
              {projeto.githubLink && (
                <a href={projeto.githubLink} target="_blank" rel="noopener noreferrer">
                  <FaGithub />
                </a>
              )}
              {projeto.externalLink && (
                <a href={projeto.externalLink} target="_blank" rel="noopener noreferrer">
                  <FaExternalLinkAlt />
                </a>
              )}
            </Icones>
          </div>

          <Imagem src={projeto.imagem} alt={`Imagem do projeto ${projeto.titulo}`} />
        </Conteudo>
      ))}
    </Container>
  );
});
