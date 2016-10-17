//use strict serve para limitar os
// desenvolvedores a nao criar variaveis perdidas

'use strict';

// importação do Hapi.js para o projeto, responsavel pelo gerenciamento de rotas
const Hapi = require('hapi');
const server = new Hapi.Server();
//importando biblioteca para validar as requisições
const Joi = require('joi');

server.connection({port: 3000});

//metodo para criar as rotas
server.route([{
	//caminho a ser chamado
	path: '/products',
	//tipo de requisição
	method: 'GET',
	//metodo controlador da requisição
	handler: (req, reply) => {
		return reply('Hello Word');
	}
},
{
	path: '/products',
	method: 'POST',
	handler: (req, reply) => {
		//objeto da requisição
		const produto = reply.payload;
		console.log('produto', produto);
		return reply('Hello World');
	},
	//Cricação de objeto de validação
	validate: {
		payload: {
			name: Joi.string().min(3).max(20).required(),
			price: Joi.number().required()
		}
	}
}
])

server.start(() => {
	console.log('servidor rodando !!!');
});

//deixa o servidor em modo publico para testes
module.exports = server;

