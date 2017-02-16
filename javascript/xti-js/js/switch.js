
var sexo = "M";

switch (sexo) {
	case "M":
	console.log("masculino");
	break;
	case "F":
	console.log("Feminino");
	break;
	default:
	console.log("undefined");
	break;
}

var tecnologia = "MongoDB";

switch (tecnologia) {
	case "C#" :
	case "Python" :
	case "PHP" :
	case "Javascript" :
	case "Go" :
	case "Java" :
	console.log("Linguagem de Programação");
	break;

	case "Mysql" :
	case "Postgresql" :
	case "MongoDB" :
	case "Oracle" :
	console.log("Banco de Dados");
	break;

	default :
	console.log("Tecnologia nao encontrada");
}


