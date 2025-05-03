import React, { useState } from "react";
import emailjs from 'emailjs-com';
import {
  Container,
  Titulo,
  Formulario,
  Input,
  TextArea,
  Botao,
  Erro,
  Sucesso
} from './styles';

export const FormEmail = () => {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    telefone: '',
    message: '',
  });

  const [contatos, setContatos] = useState([]);
  const [erro, setErro] = useState('');
  const [sucesso, setSucesso] = useState('');

  const handleChange = (e) => {
    const { value, name } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, name, telefone, message } = formData;

    if (!email || !name || !telefone || !message) {
      setErro('Preencha todos os campos.');
      setTimeout(() => {
        setErro('');
      }, 5000);
      return;
    }

    setErro('');
    
    emailjs.send(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      { name, email, telefone, message },
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY 
    )
    .then(() => {
      setSucesso('Mensagem enviada com sucesso!');
      setTimeout(() => {
        setSucesso('');
      }, 5000);
    })
    .catch((error) => {
      setErro('Erro ao enviar o e-mail. Tente novamente.');
      setTimeout(() => {
        setErro('');
      }, 5000);
    });

    setContatos((prev) => [
      ...prev,
      { id: Date.now(), ...formData }
    ]);

    setFormData({ name: '', email: '', telefone: '', message: '' });
  };

  return (
    <Container>
      <Titulo>Contact-me</Titulo>

      <Formulario onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Digite seu nome"
        />

        <Input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Digite seu e-mail"
        />

        <Input
          type="tel"
          name="telefone"
          value={formData.telefone}
          onChange={handleChange}
          placeholder="Digite seu telefone"
        />

        <TextArea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Digite sua mensagem"
          rows="5"
        />

        <Botao type="submit">Enviar</Botao>
      </Formulario>

      {erro && <Erro>{erro}</Erro>}
      {sucesso && <Sucesso>{sucesso}</Sucesso>}
    </Container>
  );
};
