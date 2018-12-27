import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 60px;
  h1 {
    color: #fff;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    margin-bottom: 15px;
    text-transform: uppercase;
  }
`;

const Form = styled.form`
  display: flex;
  max-width: 400px;
  width: 100%;
  input {
    flex: 1;
    /* utiliza todo o espaço possivel  */
    height: 55px;
    padding: 0 20px;
    background: #fff;
    border: 0;
    font-size: 18px;
    color: #444;
    border-radius: 3px;
  }

  button {
    height: 55px;
    padding: 0 20px;
    margin-left: 10px;
    background-color: #63f5b0;
    border: 3px;
    color: #fff;
    font-size: 20px;
    font-weight: bold;
    border-radius: 3px;
    cursor: pointer;
    &:hover {
      background-color: #52d89f;
    }
  }
`;

const Main = () => (
  <Container>
    <h1>Git Compare</h1>
    {/* <img src="#"> */}

    <Form>
      <input type="text" placeholder="usuario/repositorio" />
      <button type="submit">Ok</button>
    </Form>
  </Container>
);

export default Main;
