// As Promises nos ajudam a trabalhar de forma assíncrona de uma maneira mais organizada do que com apenas callbacks.

// Isso porque podemos encadear as funções, então não passamos uma dentro da outra, e sim, uma embaixo da outra.

// Por muito tempo, desenvolvedores criaram bibliotecas que simulavam Promises para melhorar nossos códigos quando precisávamos trabalhar com encadeamento de funções assíncronas. Uma das mais famosas foi o “q”, o que causou que o framework AngularJS tivesse um serviço chamado “$q”.

// Outras bibliotecas também adotaram a ideia, como o jQuery e sua função “promise()”.

// Agora no ES6 temos Promises de maneira nativa:
var a = new Promise(function (resolve, reject) {
  resolve();
}).then(function (b) {
  return b;
}).then(function (c) {
  return c;
}).then(function (d) {
  return d;
}).then(function (e) {
  return e;
}).then(function (f) {
  return f;
})
// Isso nos ajuda a trabalhar de forma assíncrona com mais eficiência e sem Callback Hell. Mas ainda há um probleminha: promises não podem ser canceladas. Então quando não queremos que um código execute mais, temos que criar um “if”, no qual o controlador tem que ficar falso para que o código a ser executado não seja chamado.