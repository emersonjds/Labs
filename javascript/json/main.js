var dados = '{"Jane": {"age":"29", "degree":{ "AAS":"Virginia Military Institute", "BA": "UVA" }}, "Jim": {"age":"29", "degree":"MFA"}}';

var objeto = JSON.parse(dados); // parse to object

console.log(objeto.Jane.degree)


window.onload = function () {

  var ajax = new XMLHttpRequest()

  ajax.open('GET', './data.json', true);

  ajax.onload = () => {
    var data = JSON.stringify(ajax.responseText) // 
    document.getElementById("message").innerHTML = data.userId
  }

  ajax.send()


  //document.getElementById("message").innerHTML = JSON.stringify(objeto.Jim)
}



