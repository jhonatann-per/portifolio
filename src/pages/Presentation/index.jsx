import React, { useState, useEffect } from "react";
import {
  Container,
  ImagePerfil,
  ConteudoPerfil,
  AboutInformation,
  BotaoCv,
  BotaoProjetos,
  ArrowDownImage,
  Footer
} from "./styles";
import Seta from "../../assets/seta.png";


const Presentation = () => {
  const [perfilImg, setPerfilImg] = useState('');

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const res = await fetch('https://api.github.com/users/jhonatann-per');
        const data = await res.json();
        setPerfilImg(data.avatar_url);
      } catch (error) {
        console.error("Erro ao buscar os dados do GitHub:", error);
      }
    };

    fetchProfileData();
  }, []);


  return (
    <Container id="sobreMim">
        <AboutInformation>
          <section>
            <h1>Jhonatan Santos</h1>
            <p>Desenvolvedor Front end</p>
            <div>
              <BotaoCv>Download CV</BotaoCv>
              <BotaoProjetos>Meus Projetos</BotaoProjetos>
            </div>
          </section>
        </AboutInformation>
        <Footer>
          <ArrowDownImage src={Seta} alt="Seta para baixo" />
        </Footer>
        <ConteudoPerfil>
          { perfilImg && (
            <ImagePerfil 
              src={perfilImg} 
              alt="Imagem de perfil" 
            />
          )}

            
          {/* <Skils>
            <h1>{currentWord}</h1>
          </Skils> */}
        </ConteudoPerfil>
    </Container>
  );
};

export default Presentation;
