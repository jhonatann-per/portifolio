import React, { useState, useEffect } from "react";
import { FaMapMarkerAlt, FaLinkedin } from 'react-icons/fa';
import {
  Container,
  ImagePerfil,
  Texto,
  ConteudoPerfil,
  ConteudoTexto,
  TituloContainer,
  ListDiv,
  List,
  ListItem,
  IconsDiv,
  Skils,
  Titulo
} from "./styles";

const AboutMe = () => {
  const [perfilImg, setPerfilImg] = useState('');
  const [githubData, setGithubData] = useState({});
  const [currentWord, setCurrentWord] = useState('Desenvolvedor');

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const res = await fetch('https://api.github.com/users/jhonatann-per');
        const data = await res.json();
        setPerfilImg(data.avatar_url);
        setGithubData(data);
      } catch (error) {
        console.error("Erro: dados não encontrados!", error);
      }
    };
    fetchProfileData();
  }, []);

  useEffect(() => {
    const words = ['front-end', 'back-end'];
    let index = 0;

    const intervalId = setInterval(() => {
      index = (index + 1) % words.length;
      setCurrentWord(words[index]);
    }, 4500);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Container>
      <ConteudoPerfil>
        <TituloContainer>
          <Titulo>Jhonatan Santos</Titulo>
        </TituloContainer>
        { perfilImg && (
          <ImagePerfil 
            src={perfilImg} 
            alt="Imagem de perfil" 
          />
        )}
        { githubData && (
          <IconsDiv>
            <p><FaMapMarkerAlt style={{ marginRight: '8px', color: '#fff' }}/>  {githubData.location}</p>
            <p><FaLinkedin style={{ marginRight: '8px', color: '#0077b5' }} /> <a href="https://www.linkedin.com/in/jhonatann-per/" target="_blank" rel="noopener noreferrer">Meu LinkedIn</a></p>
          </IconsDiv>
        )}
        <Skils>
          <Titulo>{currentWord}</Titulo>
        </Skils>
      </ConteudoPerfil>
      
      <ConteudoTexto>
        <Texto>
          Desde 2019, atuo na área de tecnologia, focando em desenvolver minhas habilidades e conhecimentos. 
          Atualmente, estou buscando realizar meu sonho de me tornar um desenvolvedor fullstack, combinando 
          minha paixão por front-end e back-end para criar soluções completas e inovadoras.
        </Texto>
        
        <ListDiv>
          <List>
            <ListItem style={{ fontSize: '1.5em', fontWeight: 'bold', content: "none" }}>Qualidades: </ListItem>
            <ListItem>⭐Proativo</ListItem>
            <ListItem>⭐Trabalho em equipe</ListItem>
            <ListItem>⭐Resiliente</ListItem>
            <ListItem>⭐Comunicativo</ListItem>
            <ListItem>⭐Aprendizado rápido</ListItem>
          </List>
        </ListDiv>
      </ConteudoTexto>
    </Container>
  );
};

export default AboutMe;
