/* 
	Exceptions Structures
	*/

/*
Error Object
.message -> Informa a mensagem do erro
.name -> Tipo de Erro
.toString -> traz o tipo de erro + a mensagem separada por um sinal de : 


EvalError -> Erro usando eval() -> permite executar uma linha de js em string
RangerError -> Numero extrapolla os limites
ReferenceError -> Erro de referencia no valor definido
SintaxeError -> Erro de Sintaxe
TypeError -> Erro utilizando operando diferente do esperado
URIError -> Erro de endereçamento	
*/

var x = prompt("Informe um numero maior que 10");

// try {
// 	if (x < 10)
// 		throw ("Informe um numero acima de 10");
// 	else if (x == 10 ) 
// 		throw ("Novamente fdp informe um numero acima de 10");
// 	console.log(x);
// } catch(e) {
// 	throw (e.toString());
// }

var Carro = {
	marca : "Nissan",
	cor : "azul",
	modelo : "350z",
	potencia : {
		cavalos : 320,
		velocidade : "320 km"
	}
};

with(Carro.potencia) { //acesso direto ao escopo do objeto
	console.log(cavalos);
	console.log(velocidade);
}

