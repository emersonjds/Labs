import React from "react";
import { Container, Form } from "./styles";
import CompareList from "../../components/CompareList";
const Main = () => (
  <Container>
    <Form>
      <input type="text" placeholder="usuario/repositorio" />
      <button type="submit">OK</button>
    </Form>
    <CompareList />
  </Container>
);
export default Main;
