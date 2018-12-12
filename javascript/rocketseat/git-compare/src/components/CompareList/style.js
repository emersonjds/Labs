import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: auto;
  min-width: 600px;
  margin-top: 20px;
`;

export const BoxList = styled.div`
  width: 200px;
  background-color: #f3f3f3;
  display: flex;
  padding: 10px;
  border-radius: 15px;
  flex-direction: column;
  margin: 0 20px;
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
    text-transform: uppercase;
    color: gray;
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
    text-align: center;
  }
`;
