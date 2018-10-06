/*
 Quando trabalhamos com APIs Rest, trabalhamos com serviços sem estado
 Não temos mais sessão, não guardamos mais cookies
 Trafegamos apenas chaves de autenticação e não sabemos o estado
 Do usuario anterior 

 Para trabalhar com o Padão Rest, seguimos algumas especificações 

 AÇÃO      - METODO HTTP - URL - EXEMPLO
 CADASTRAR - POST        - /herois - POST -> /herois body {name: 'nome'}
 LISTAR    - GET         - /herois - GET -> /herois?ignore=10&limit=5
 REMOVER   - DELETE      - /herois/:id - DELETE /herois/1
 ATUALIZAR - PATCH      - /herois/:id - PATCH /herois/1 body {name: 'nome'}
 ATUALIZAR - PUT      - /herois/:id - PUT /herois/1 
    body {name: 'nome', idade: 15, dataNascimento: } 
    (SEMPRE OBJ COMPLETO)


- Atualizar a cor, de um produto, de um cliente
ATUALIZAR - PATCH 
    /customers/:id/product/:id/color
*/

//importamos o modulo nativo do NodeJS para criação de serviços web
const http = require('http');
http.createServer((request, response) => {
  response.end('Ola NodeJS !!')
}).listen(3000, () => console.log('Servidor rodando'))