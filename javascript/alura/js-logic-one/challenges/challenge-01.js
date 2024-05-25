alert("Boas vindas ao nosso site");
let nome = "Lua";
let idade = 25;
let numeroDeVendas = 50;
let saldoDisponivel = 1000;

alert("Erro! Preencha todos os campos");
let mensagemDeErro = "Erro! Preencha todos os campos";
alert(mensagemDeErro);

nome = prompt("Qual é o seu nome?");
idade = prompt("Qual é a sua idade?");

if (idade > 18) {
  alert("Você pode tirar habilitação!");
}
