import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  padding: 20px 40px;
  width: 100%;
  height: 100vh;
  background: linear-gradient(to top left, #28b487, #7dd56f);
  flex-direction: column;
  gap: 4rem;

  form {
    align-self: center;
    background: #000;
    color: #fff;
    padding: 40px 20px;
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 2rem;
    max-width: 450px;
    border-radius: 10px;

    h2 {
      text-align: center;
      padding: 10px 0;
    }

    div {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      input {
        padding: 10px;
        border-radius: 3px;
        outline: 0;
        border: 0;
        font-size: 1rem;
      }
    }

    button {
      padding: 10px;
      font-size: 1rem;
      font-weight: bold;
      background: #28b487;
      outline: 0;
      border: 0;
      border-radius: 3px;
      cursor: pointer;
      transition: all 0.3s ease-in-out;

      &:hover {
        background: #fff;
      }
    }

    p {
      text-align: center;
    }
  }
`;

export const FormLink = styled(LinkR)`
  text-decoration: none;
  font-size: 30px;
  font-weight: bold;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: #000;
  }
`;
