// Já que estamos trabalhando com JavaScript ao invés de HTML, há algumas diferenças ao escrever nossas views:

// A palavra "class" e "for" são reservadas no JavaScript. Para se criar uma classe, em sua tag utilize a palavra "className", e para "for", "htmlFor".
// Style deve ser um objeto e o nome dos atributos, ao invés de serem separados por traço, devem estar em camelCase:

var meuEstilo = {"fontSize": "15px", "marginTop": "1em"};
<span style={meuEstilo} ></span>

// Em HTML5, algumas tags não precisam ser fechadas. No JSX todas precisam
// Os atributos são escritos em camelCase, como o onclick:

<button onClick={minhaFuncao} >Clique Aqui</button>