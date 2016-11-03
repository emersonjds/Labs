var empty = {}; //um objeto sem propriedades
var point = { x : 0, y : 1}; //Duas propriedades
var point2 = {x : point.x, y : point.y}; //Valores mais complexos
var book {
	"main title" : "Javascript",	// Os nomes de propriedades incluem espaços, hifens; portanto usam string literais
	"sub-title" : "The Definitive Guide",	// for é uma palavra reservada; portanto, usa aspas
	"for" : "all audiences",

	author: { //O valor desta propriedade é ele próprio um objeto, estas propriedades na tem aspas
		firstname : "Emerson Jr",
		surname: "Kromma"
	}
}     

//Outras formas de criar objetos
var o = new Object(); // O mesmo que var o = {}
var a = new Array(); // o mesmo que var a = []
var d = new Date(); //Cria um objeto do tipo Date trazendo a hora atual
var r = new RegExp(); //Cria uma expressão regular para comaparar padrões

