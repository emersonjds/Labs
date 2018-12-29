import styled from 'styled-components';

export const Container = styled.div`
  flex-direction: row;
  border-radius: 5px;
  margin-top: 20px;
  display: flex;
`;

export const Repository = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 3px;
  margin: 0 10px;
  width: 200px;
  margin-right: 10px;
  background-color: #fff;
  header {
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      width: 64px;
    }

    strong {
      font-size: 24px;
      margin-top: 10px;
    }

    small {
      font-size: 14px;
      color: #666;
    }
  }

  ul {
    list-style: none;

    li {
      font-weight: bold;
      padding: 12px 20px;

      small {
        font-weight: normal;
        font-size: 12px;
        color: #999;
        font-style: italic;
      }
      &:nth-child(2n - 1) {
        /* aplicando estilo nas linhas impares */
        background: #f5f5f5;
      }
    }
  }
`;
