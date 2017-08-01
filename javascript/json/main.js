var dados = '{"Jane": {"age":"29", "degree":{ "AAS":"Virginia Military Institute", "BA": "UVA" }}, "Jim": {"age":"29", "degree":"MFA"}}';

var objeto = JSON.parse(dados); // parse to object

console.log(objeto.Jane.degree)


window.onload = function(){
  document.getElementById("message").innerHTML = JSON.stringify(objeto.Jim)
}


