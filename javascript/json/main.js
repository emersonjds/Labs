var dados = '{"Jane": {"age":"29", "degree":{ "AAS":"Virginia Military Institute", "BA": "UVA" }}, "Jim": {"age":"29", "degree":"MFA"}}';

var objeto = JSON.parse(dados); // parse to object

console.log(objeto.Jane.degree)


window.onload = function () {

  document.getElementById("message2").innerHTML = JSON.stringify(objeto.Jim)

  var ajax = new XMLHttpRequest()

  ajax.open('GET', './data.json', true);

  ajax.onload = () => {
    var data = JSON.parse(ajax.responseText) // 
    console.log(data)
    document.getElementById("message").innerHTML = data.userId
  }

  ajax.send()

  var xhr = new XMLHttpRequest()

  xhr.open('GET', './people.json', true)
  xhr.onload = () => {

  }
  xhr.send()


  xhr.onreadystatechange = () => {
    console.log(xhr.readyState)
    console.log(xhr.status)
    console.log(xhr.statusText)
  }
}



