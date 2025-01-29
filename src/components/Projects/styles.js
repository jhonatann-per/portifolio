import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80vw;
  margin: 20px auto;
  padding: 20px;
  background-color:transparent;
  border-radius: 10px;
  @media screen and (max-width: 450px) {
    display: none;
  }
`;

export const ReposList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const RepoButton = styled.a`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  margin: 10px;
  background-color: #24292e;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.2s;
  width: 30%;
  box-sizing: border-box;

  &:hover {
    background-color: #444;
  }
`;

export const RepoName = styled.span`
  font-size: 1.2rem;
`;
