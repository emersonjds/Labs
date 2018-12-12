import React from "react";
import { Container, BoxList, Header, List } from "./style";

const CompartList = () => (
  // #TODO: CONTAINER
  <Container>
    {/* #TODO: Inter-Box */}
   
    <BoxList>
      <Header>
        <img
          src="https://avatars3.githubusercontent.com/u/69631?v=4"
          alt="facebook"
        />
        <strong>Titulo</strong>
        <small>nome-resumido</small>
      </Header>

      <ul>
        <li>
          95,999 <small> Teste</small>
        </li>
        <li>
          95,999 <small> Teste</small>
        </li>
        <li>
          95,999 <small> Teste</small>
        </li>
        <li>
          95,999 <small> Teste</small>
        </li>
        <li>
          95,999 <small> Teste</small>
        </li>
      </ul>
    </BoxList>
  </Container>
);

export default CompartList;
