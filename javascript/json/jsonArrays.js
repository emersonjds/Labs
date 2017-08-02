var req = new XMLHttpRequest();

req.open('GET', './hospitality-json/json4b/data.json', true)
req.responseType = 'text';

req.send()

req.onload = () => {
  if (req.status === 200) {
    var dados = JSON.parse(req.responseText)
    
   for(var i = 0; i < dados.length; i++) {
     console.log(dados.modelos[i]);
   }
  }
}