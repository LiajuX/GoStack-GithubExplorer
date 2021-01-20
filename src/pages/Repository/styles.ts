import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    justify-content: center;

    color: #a8a8b3;

    text-decoration: none;

    transition: 0.2s;

    &:hover {
      color: #666;
    }

    svg {
      margin-right: 4px;
    }
  }
`;

export const RepositoryInfo = styled.section`
  margin-top: 80px;

  header {
    display: flex;
    align-items: center;

    img {
      width: 120px;
      height: 120px;

      border-radius: 50%;
    }

    div {
      margin-left: 24px;

      strong {
        color: #3d3d4d;
        font-size: 36px;
      }

      p {
        margin-top: 4px;
        color: #737388;
        font-size: 18px;
      }
    }
  }

  ul {
    display: flex;
    margin-top: 40px;
    list-style: none;

    li {
      & + li {
        margin-left: 80px;
      }

      strong {
        display: block;
        color: #3d3d4d;
        font-size: 36px;
      }

      span {
        display: block;
        margin-top: 4px;
        color: #6c6c80;
      }
    }
  }
`;

export const Issues = styled.div`
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
