import React, { useState, useEffect } from 'react';
import { FaGithub } from 'react-icons/fa';
import { Container, ReposList, RepoButton, RepoName } from './styles';
const token = process.env.REACT_APP_GITHUB_TOKEN;

const Projetos = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const res = await fetch('https://api.github.com/users/jhonatann-per/repos');
        const data = await res.json();
        if (Array.isArray(data)) {
          setRepos(data);
        } else {
          console.error('Erro: dados não são um array!');
        }
      } catch (error) {
        console.error('Erro ao buscar repositórios:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchRepos();
  }, []);

  return (
    <Container>
      {loading ? (
        <p>Carregando...</p>
      ) : (
        <ReposList>
          {Array.isArray(repos) ? (
            repos.map(repo => (
              <RepoButton key={repo.id} href={repo.html_url} target="_blank" rel="noopener noreferrer">
                <FaGithub size={20} style={{ marginRight: '10px' }} />
                <RepoName>{repo.name}</RepoName>
              </RepoButton>
            ))
          ) : (
            <p>Não há repositórios disponíveis.</p>
          )}
        </ReposList>
      )}
    </Container>
  );
};

export default Projetos;
