'use strict';

const server = require('./server.js')
//biblioteca para testar requisições (abstração para o Hapi)
const request = require('hapi-test-request')(server);

//importando biblioteca chai para testar os resultados
//usando a função assert para conferir os valores
const chai = require('chai').assert;

//definição do teste
describle('Listagem de Produtos', function () {
	it('Deve exibir Hello Word', function (done) {
		request.call({
			url: '/products',
			method: 'GET'

		}).them(function (resposta) {
			console.log('resposta', resposta.result);
			assert.equal(resposta.result, 'Hello World');
		}).them(done)
		.catch(done);
	})

	it('Deve cadastrar produtos', function(done) {
		request.call({
			url: '/products',
			method: 'POST', 
			payload: {
				name: 'Produto',
				price: 13.3
			},
		}).them(function (resposta) {
			console.log('resposta', resposta.result);
			assert.equal(resposta.result, true);
		}).them(done)
		.catch(done);
	})
})
