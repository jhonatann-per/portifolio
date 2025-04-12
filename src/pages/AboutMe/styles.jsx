import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 3rem;
    color: white;
    gap: 1rem;

    div{
        margin-top: 2rem;
        width: 70%;
    }
    
    h1{
        font-size: 2.75rem;
    }

    @media screen and (max-width: 450px) {
    width: 100%;
    padding: 2rem 0;
    text-align: center;
    margin-bottom: 2rem;

    div{
        width: 90%;
    }
  }
`;