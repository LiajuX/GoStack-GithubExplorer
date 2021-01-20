import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface FormProps {
  hasError: boolean;
}

export const Title = styled.h1`
  max-width: 450px;

  margin-top: 80px;

  color: #3a3a3a;

  font-size: 48px;
  line-height: 56px;
`;

export const Form = styled.form<FormProps>`
  display: flex;
  max-width: 700px;
  margin-top: 40px;

  input {
    flex: 1;

    height: 70px;

    padding: 0 24px;
    border: 2px solid #fff;
    border-radius: 5px 0px 0px 5px;
    border-right: 0;

    color: #3a3a3a;

    ${props =>
      props.hasError &&
      css`
        border-color: #c53030;
      `}

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    width: 210px;
    height: 70px;

    border: 0;
    border-radius: 0px 5px 5px 0px;

    background: #04d361;
    color: #fff;

    font-weight: bold;

    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#04d361')};
    }
  }
`;

export const Error = styled.span`
  display: block;
  margin-top: 8px;
  color: #c53030;
`;

export const Repositories = styled.div`
  max-width: 700px;
  margin-top: 80px;

  a {
    display: block;
    display: flex;
    align-items: center;

    width: 100%;

    padding: 24px;
    border-radius: 5px;

    background: #fff;

    text-decoration: none;

    transition: transform 0.2s;

    & + a {
      margin-top: 16px;
    }

    &:hover {
      transform: translateX(10px);
    }
  }

  img {
    width: 64px;
    height: 64px;

    border-radius: 50%;
  }

  div {
    flex: 1;
    margin: 0 16px;

    strong {
      color: #3d3d4d;
      font-size: 20px;
    }

    p {
      margin-top: 4px;
      color: #a8a8b3;
      font-size: 18px;
    }

    svg {
      margin-left: auto;
    }
  }
`;
