//Falsy Values in JS
- undefined
- null
- NaN
  0
- 0
- ''

var teste;

`` ? teste = true : teste = false; // return false
`0` ? teste = true : teste = false; // return true any string with value it's true
undefined ? teste = true : teste = false; // return false
null ? teste = true : teste = false; // return false
{} ? teste = true : teste = false; // return true