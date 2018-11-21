import React from 'react';
import { render } from 'react-dom';

var minhaDiv = document.getElementById('app');

render(
  <h1 id="meuTitulo">
    <span>ABC</span>
  </h1>,
  minhaDiv
);