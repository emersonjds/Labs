import React from 'react';
import { Caixa } from './style';

const CompareList = () => (
  <Caixa>
    <header>
      <img src="https://avatars3.githubusercontent.com/u/69631?v=4" height="50" />
      <strong>Titulo</strong>
      <small>facebook</small>
    </header>
    <ul>
      <li>9999 star</li>
      <li>9999 forks</li>
      <li>8888 issues</li>
      <li>4444 fix</li>
      <li>8888 time</li>
    </ul>
  </Caixa>
);

export default CompareList;
