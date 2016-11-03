//Todos os objetos literais herdam as propriedades de prototype e teem uma copia deste prototype
// a partir da criação do objeto literal
// podemos nos referir fazendo a chamada object.prototype
// Senho assim var a = new Object(), a chamada do objeto com a função construtora seguido de "new"
//	traz consigo a herança de object.prototype
// Da mesma forma temos var a = new Array(); a chamada herda de Array.prototype

//Object.create()
//Object.create é um metodo que cria um objeto usando seu primeiro argumento como prototipo desse objeto

var o1 = Object.create({x:1, y:2}); // o1 herda as propriedades x e y
var o2 = Object.create(null); // desta forma o objeto criado não herda as propriedades nem meétodos

//Caso a ideia é criar um objeto vazio basta passa diretamente a chamada de prototype
var o3 = Object.create(Object.prototype); // o3 é como {} ou como new Object()

//criando um novo objeto que herda de um prototipo
// a chamada inherit() esá inclusa na ECMA5 e retorna um objeto recem criado que herda de prototype

function inherit(p) {
	if(p == null) throw new TypeError(); //p deve ser um objeto nao nulo

	if (Object.create) { 	//se ja estiver definida so retorna o objeto
		return Object.create(p);
	}
	var t = typeof p; // caso contrario verifique o tipo de entrada 

	if(t !== "object" && t !== "function") { //chamada para throw TypeError();
		function f() {	//definie uma função construtora ficticia
			f.prototype = p; //configura as propriedades prototype com p
			return new f(); //referencia f como um herdeiro de p
		}
	}
}

