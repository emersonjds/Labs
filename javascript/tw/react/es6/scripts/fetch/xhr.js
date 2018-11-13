// Há muito tempo que, ao fazer requisições, os desenvolvedores costumam usar a função “ajax()” do jQuery, pois ela é muito mais simples de usar do que o método nativo do JavaScript, o “XmlHttpRequest()”.

if (window.XMLHttpRequest) { // Mozilla / Safari
  request = new XMLHttpRequest();
} else if (window.ActiveObject) { // IE
  try {
    request = new ActiveXObject('Msxml2.XMLHTTP');
  } catch (e) {
    try {
      request = new ActiveXObject('Microsoft.XMLHTTP');
    }
    catch (e) { }
  }
}

request.addEventListener('load', function () {
  console.log(this.responseText)
});

request.open('GET', 'https://api.github.com/search/repositories?q=javascript', true);

request.send(null);

// Só para pegar o “XmlHttpRequest()” já era chatinho. Depois, era necessário criar um listener, passando uma função de callback, uma função para mandar abrir a conexão e, por fim, executar a função que iria enviar a requisição.

// Muitos desenvolvedores iniciantes até chegam a inserir o jQuery em seus projetos apenas por causa da função “$.ajax()”, enquanto outros criam funções para facilitar o uso do “XmlHttpRequest()”. O AngularJS até nos disponibilizava o serviço “$http”, para facilitar as requisições, e assim não era preciso incluir o jQuery para esse propósito.