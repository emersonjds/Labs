var endereco = {
  rua: "Rua dos pinheiros",
  numero: 1293,
  bairro: "Centro",
  cidade: "São Paulo",
  uf: "SP"
};

function returnData(data) {
  return console.log(`O usuario mora em ${data.cidade} / ${data.uf} no bairo ${data.bairro} , na rua ${data.rua} com o numero ${data.numero}`)
}

returnData(endereco)

function pares(x, y) {
  for (var i = x; i < y; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}

pares(32, 321);

function temHabilidade(skills) {
  return skills.indexOf("Javascript") !== -1;
}

var skills = ["Javascript", "ReactJS", "React Native"];
console.log(temHabilidade(skills));


function experiencia(anos) {
  if (anos <= 1) {
    return "Iniciante";
  } else if (anos <= 3) {
    return "Intermediário";
  } else if (anos <= 6) {
    return "Avançado";
  } else {
    return "Jedi Master";
  }
}

var anosEstudo = 7;
console.log(experiencia(anosEstudo));

function exibeHabilidades(usuarios) {
  for (usuario of usuarios) {
    console.log(
      "O " +
      usuario.nome +
      " possui as habilidades: " +
      usuario.habilidades.join(", ")
    );
  }
}

var usuarios = [
  {
    nome: "Diego",
    habilidades: ["Javascript", "ReactJS", "Redux"]
  },
  {
    nome: "Gabriel",
    habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
  }
];

exibeHabilidades(usuarios);