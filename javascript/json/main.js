var dados = '{"Jane": {"age":"29", "degree":"MFA"}, "Jim": {"age":"29", "degree":"MFA"}}';

var objeto = JSON.parse(dados);

console.log(objeto.Jane.age)

