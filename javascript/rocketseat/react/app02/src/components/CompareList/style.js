import styled from 'styled-components';

export const Caixa = styled.div`
  height: 250px;
  background-color: #fff;
  border-radius: 5px;
  width: 200px;
  margin-top: 20px;
  header {
    img {
      margin-bottom: 0.5em;
    }
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    height: 100px;
  }

  ul {
    list-style: none;
    display: flex;
    align-items: center;
    flex-direction: column;
    li {
      padding: 5px;
      margin-left: 5px;
    }
  }
`;
