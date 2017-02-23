/*
Regular Expression
 */

//modificadores -> i, g, m
// i -> ignora letras maiusculas ou minusculas

//FUNCOES E MODIFICADORES
var regex = new RegExp("javascript", "i");

var regex2 = /javascript/i; //forma literal

var palavra = "javascript";

document.write(regex.test(palavra) + "</br>"); //retorna se o padrao aconteceu ou nao

document.write(/javascript/i.test(palavra) + "</br>");

document.write(/javascript/ig.exec(palavra) + "</br>"); 
// exec -> retorna a primeira ocorrencia da expressao regular
// uma vez encontrado a primeira ocorrencia a pesquisa para
// com a expressao g ele continua executando porem sempre trazendo a primeira ocorrencia

var str = "Qual é o doce mais doce que batata doce";

document.write(/doce/ig.exec(str) + "</br>");

document.write(str.match(/doce/ig) + "</br>");
//match encontra todas as ocorrencias da palavra em determinada expressao

// -------------------------------------------------------------- // 
//METACARACTERES
// . -> encontra a ocorrencia de qualquer caracter com excessao de novas linhas
document.write(/./.test("Pier") + "</br>");

// w -> procura por qualquer caracter de a-z, 0-9 e _ 
document.write(/\w/.test("Marinha") + "</br>");

// s -> ele procura ocorrencia de espacos no parametro que foi passado
document.write(/\s/.test("testando espaco") + "</br>");

// d -> procura por digitos no parametro passado
document.write(/\d/.test("Numero qualquer 10") + "</br>");

// ^ -> este caracter procura por um padrao que é passado como parametro logo no começo da operação
document.write(/ˆ21/.test("Pier21") + "</br>"); //neste caso vai retornar false por que nao achou 21 no inicio

//$ -> o caracter cifrao procura pela ocorrencia a partir do final para o começo
document.write(/21$/.test("Pier21") + "</br>");

// -----------------------------------------------------------------// 

document.write(/ˆ\d\d\d\d\d-\d\d\d$/.test("09540-110") + "</br>"); //Padrao para cep



// ------------------------------------------- // 
// QUANTIFICADORES
// 

document.write(/\d+/.test("PIER21") + "</br>");
//o quantificador + vai buscar a incidencia uma vez ou mais de acordo com o paramtro que foi passado

//busca de 0 ou mais ocorrencias
document.write(/\d*/.test("PIER21") + "</br>"); 

//procura a ocorrencia de 0 ou 1 vez
document.write(/\d?/.test("PIER21") + "</br>"); 

//Verifica se a quantidade de digitos digitador condiz com o valor passado como parametro
document.write(/\d{2}/.test("PIER21") + "</br>"); 

//validação de e-mail
document.write(/\w+@\w+\.\w{2,3}/.test("emerson_jdss@hotmail.com") + "</br>");

/*
CARACTERES OPCIONAIS
 */





