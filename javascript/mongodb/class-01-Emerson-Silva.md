MongoDB - Aula 01 - Exercício

autor: Emerson Silva

Importando os restaurantes

javascript/mongodb >> master >> mongoimport --db be-mean --collection restaurantes --drop --file restaurantes.json
2017-04-18T05:55:15.629-0300	connected to: localhost
2017-04-18T05:55:15.629-0300	dropping: be-mean.restaurantes
2017-04-18T05:55:18.604-0300	[#####################...] be-mean.restaurantes	10.1MB/11.3MB (89.2%)
2017-04-18T05:55:18.784-0300	[########################] be-mean.restaurantes	11.3MB/11.3MB (100.0%)
2017-04-18T05:55:18.784-0300	imported 25359 documents
Contando os restaurantes

> db.restaurantes.find({}).count()
25359