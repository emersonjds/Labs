import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Main from "../pages/main";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Main} />
    </Switch>
  </BrowserRouter>
);

// O BrowserRouter é responsavel por informar para a aplicação React que as rotas estao ligadas ao navegador, ele esta por fora das rotas em si por que essa lib pode ser utilizada por outras aplicações.

// O Switch é responsavel por nao deixar que duas rotas sejam repetidas na aplicação
// digamos que tenham duas rotas de nome iguais, quando a o Switch ve esse tipo de ação ele para o render e identifica exatamente o que esta sendo passado como base na url, e possivel tambem utilizar a palavra reservada "exact" desta forma o sistema de rota so é disparado quando aquela rota exata que esta sendo passada no path for identificada

{
  /* <Route exact path="/" component={Main} /> */
}
