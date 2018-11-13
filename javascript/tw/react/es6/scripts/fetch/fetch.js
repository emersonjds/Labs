// O “fetch()” faz a mesma coisa que o XHR, mas com uma API nova, mais flexível e simples de usar.
// O exemplo anterior ficaria assim:

fetch('https://api.github.com/search/repositories?q=javascript')
  .then(response => response.json())

// Bem mais simples e direto. O único parâmetro obrigatório do “fetch()” é uma String que indica o endereço de onde iremos fazer a requisição. Com isso, faremos uma requisição GET.

// O “fetch()” nos retorna uma Promise. Essa Promise retorna um objeto Response com informações da resposta do servidor. Como queremos pegar a resposta em formato JSON, basta executar a função “json()”.

// -----------------------------------------------------------------
// Configurando a requisição com Fetch

fetch('https://myexample.com', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: 'foo=bar&blah=1'
}).then(response => response.json());

// method - GET | POST | PUT | DELETE | HEAD;
// url - URL da requisição;
// headers – cabeçalho;
// body - corpo da requisição;
// referrer - referência da requisição;
// mode - cors | no-cors | same-origin;
// credentials - indica se os cookies devem ser enviados junto com a requisição;
// redirect - follow | error | manual;
// integrity - valor de integridade da fonte;
// cache - modo do cache (default | reload | no-cache).