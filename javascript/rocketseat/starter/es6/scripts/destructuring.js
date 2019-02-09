const usuario = {
  name: 'Maria',
  age: 29,
  endereco: {
    cidade: 'Sao Caetano do Sul',
    estado: 'SP'
  }
}

const { name, age, endereco: { cidade } } = usuario;
// busca estas propriedades dentro do objeto usuario 
console.log(name);
console.log(age);
console.log(cidade);

// A desestruturação tambem pode ser utilizada nos paremtros da função
function showName({name, age}) {
  console.log(name, age)
}

// na chamada da função passamos o objeto que sera desestruturado
showName(usuario);