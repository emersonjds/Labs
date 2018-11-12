// O ES6 também adicionou algumas funcionalidades aos objetos literais “{ }”.
// Um dos mais usados é a possibilidade de evitar repetição ao passar uma variável com o mesmo nome que a propriedade do objeto:
var a = 5,
  b = 7;

var obj = {
  a: a,
  b: b
}

// Agora é possivel escrever da seguinte forma 
var a = 5,
  b = 7,
// quando nome das propeirdas é igual ao dos variaveis que passarao os valores pode-ser fazer assim
var newObj = {
  a,
  b
}
// Alem das pripriedades ficou mais simplificado a forma de escrever funções
var obj = {
  x: function () {
    console.log(this)
  }
}
// Agora pode ser excrito da seguinte forma
var obj = {
  x() {
    console.log(this)
  }
}
// Essa nova forma não é apenas uma simplificação. Ela também permite a gente usar o objeto “super” quando estamos trabalhando com classes.