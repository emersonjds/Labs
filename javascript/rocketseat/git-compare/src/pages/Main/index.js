import React from "react";
import { Container, Form } from "./styles";
const Main = () => (
  <Container>
    <Form>
      <input type="text" placeholder="usuario/repositorio" />
      <button type="submit">OK</button>
    </Form>
  </Container>
);
export default Main;
