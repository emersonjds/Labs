class Usuario {
  constructor(email, senha) {
    this.email = email;
    this.senha = senha;
  }

  isAdmin() {
    return this.email === 'emerson_jdss@hotmail.com' && this.senha === 1234 ? true : false;
  }
}

class Admin extends Usuario {
  constructor() {
    super();
  }
}

const User1 = new Usuario('emerson_jdss@hotmail.com', 1234);
const Admin1 = new Admin('maria_jdss@hotmail.com', 123456);

console.log(User1.isAdmin());
console.log(Admin1.isAdmin());

// --------------------------------------------------------------------------------------------------

const usuarios = [
  { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
  { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
  { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

const idades = usuarios.map(data => data.idade);

const trabalhamNaEmpresa = usuarios.filter((item) => {
  return item.empresa === 'Rocketseat' && item.idade > 18;
});

const workInGoogle = usuarios.find(item => {
  return item.empresa === 'Google';
});

const calculo = usuarios
  .map(usuario => ({ ...usuario, idade: usuario.idade * 2 }))
  .filter(usuario => usuario.idade <= 50);

// ------------------------------------------------------------------------
const arr = [1, 2, 3, 4, 5];
arr.map(item => item + 10);

const usuario = { nome: 'Emerson', idade: 23 };
const monstraIdade = (usuario) => usuario.idade;
monstraIdade(usuario);

const nome = "Emerson";
const idade = 29;

const mostraUsuario = ((nome = 'Emerson', idade = 29) => {
  return { nome, idade }
});

mostraUsuario(nome, idade);
mostraUsuario(nome);

// ----------------------------------------------------------------------------

//Destructuring 

const empresa = {
  nome: 'Krommasys',
  endereco: {
    cidade: 'Rio do Sul',
    estado: 'SC',
  }
};

const { nome, endereco: { cidade, estado } } = empresa;
console.log(nome);
console.log(cidade);
console.log(estado);

usuario = {
  nome: 'Emerson',
  idade: 29
}

const mostraInfo = ({ nome, idade }) => {
  return `${nome} tem ${idade} anos.`
}

mostraInfo(usuario)

// ----------------------------------------------------------------------------------------
//REST
const arr = [1, 2, 3, 4, 5, 6, 7];
const [x, ...y] = arr;

//isso é muito foda !
const sum = (...params) => {
  return params.reduce((total, next) => total + next);
}

// -------------------------------------------------------------------------------------------
//SPREAD training
const usuario = {
  nome: 'Diego',
  idade: 23,
  endereco: {
    cidade: 'Floripa',
    uf: 'SC',
    pais: 'Brasil',
  }
};

const usuario2 = {
  ...usuario,
  nome: 'Gabriel'
}

const usuario3 = {
  ...usuario,
  endereco: {
    ...usuario.endereco,
    cidade: 'Lontras'
  }
}

//  ---------------------------------------------------------------------------------------------
//Object Short Syntax
const nome = 'Emerson';
const idade = 29;

const usuario = {
  nome,
  idade,
  cidade: 'São Paulo'
}
