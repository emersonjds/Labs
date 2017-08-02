var req = new XMLHttpRequest();

req.open('GET', './hospitality-json/json4b/data.json', true)
req.responseType = 'text';

req.send()

req.onload = () => {
  if (req.status === 200) {
    var dados = JSON.parse(req.responseText)
    
    for(i = 0; i < dados.modelos.length; i++) {
      console.log(dados.modelos[i].nome)
      document.getElementById("modelos").innerHTML = dados.modelos[i].nome
    }

    var novosDados = ""

    for (i = 0; i < dados.modelos.length; i++) {
      var x = i + 1;
      novosDados += 'numero do modelo ' + x + " :" 
      novosDados += dados.modelos[i].nome 
      novosDados += dados.modelos[i].ano + "<br>"

      console.log(novosDados)
    }
    document.getElementById("modelos").innerHTML = novosDados
  }
}