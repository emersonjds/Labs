var router = require('./router');

var app = router(3412);

var operadoras = [
    {nome: "Oi", codigo: 14, categoria: "Celular", preco: 1},
    {nome: "Vivo", codigo: 11, categoria: "Celular", preco: 2},
    {nome: "Claro", codigo: 42, categoria: "Celular", preco: 3},
];

var contatos = [
    {id: 1, nome: "Emerson", telefone: "97180-1555", data: new Date(), operadora: 'Vivo'},
    {id: 2, nome: "Pedro", telefone: "97546-1775", data: new Date(), operadora: 'Claro'},
    {id: 3, nome: "Maria", telefone: "92112-3215", data: new Date(), operadora: 'Oi'},
];


app.get('/operadoras', function(req, res) {
    res.write(JSON.stringify(operadoras));
    res.end();
});

app.get('/contatos', function(req, res) {
    res.write(JSON.stringify(contatos));
    res.end();
});



//criando o servidor e informado a porta aonde sera escutado a requisição
 
