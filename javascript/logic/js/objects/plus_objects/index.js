function Endereco(obj) {
  this.logradouro = obj.logradouro || "";
  this.cep = obj.cep || "";
  this.numero = obj.numero || "";
}

function Aluno(nome, endereco) {
  this.id = Math.random();
  this.nome = nome;
  this.endereco = endereco;
}
