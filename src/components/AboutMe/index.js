import React, { useState, useEffect } from "react";
import { 
  Container, Apresentation, 
  ImagePerfil,
  Titulo, Texto, 
  ConteudoTitulo,
  ConteudoTexto
} from "./styles";

const AboutMe = () => {
  const [perfilImg, setPerfilImg] = useState('')

  useEffect(() =>{
    fetch('https://api.github.com/users/jhonatann-per')
      .then(res => res.json())
      .then(data => setPerfilImg(data.avatar_url))
      .catch(error => console.error("Erro: imagem não encontrada!"))
  }, []);

  return (
    <Container id="sobreMim">
          <ConteudoTitulo>
            <Titulo>Jhonatan Santos</Titulo>
            {perfilImg && <ImagePerfil 
              src={perfilImg} 
              alt="Imagem de perfil" 
            />}
          </ConteudoTitulo>
            
          <ConteudoTexto>
            <Texto>
              Desde 2019, atuo na área de tecnologia, focando em desenvolver minhas habilidades e conhecimentos. 
              Atualmente, estou buscando realizar meu sonho de me tornar um desenvolvedor fullstack, combinando 
              minha paixão por front-end e back-end para criar soluções completas e inovadoras.
            </Texto>
          </ConteudoTexto>
    </Container>
  );
};

export default AboutMe;
