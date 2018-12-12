import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 50px;
`;

export const BoxList = styled.div`
  width: 250px;
  background-color: #fff;
  display: flex;
  padding: 10px;
  border-radius: 15px;
  flex-direction: column;
  margin: 0 15px;

  ul {
    list-style: none;
    li{
      font-weight: bold;
    padding: 12px 20px;
      small {
        font-weight: normal;
        font-size: 12px;
        color: #999;
        font-style: italic;
      }
      /* aplicar nos pares */
      &:nth-child(2n - 1) {
      background: #f5f5f5;
      }
    }
  }

`;

export const Header = styled.header`
  height: 90px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  img {
    height: 50px;
    width: 50px;
  }

  strong {
    color: black;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  width: 100%;
  li {
    list-style: none;
    border-top: 1px solid gray;
    padding: 10px;
    justify-content: space-around;
    width: 80%;
  }
`;
