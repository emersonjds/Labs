#é possivel contatenar tuples para criar um novo tuple
estado_civil = ('solteiro', 'casado') + ('divorciado', ) #a virgula tem que eestar presente para  que a contatenação ocorra

#o metodo typle retorna o valor do que estamos passando
type(estado_civil);

#da mesma forma é possivel concatenar listas
lista1 = ['Emerson Jr', 'Maria Clara'] + ['Maria Eduada', 'Jose Bonifacio'];

#retorno do maior numero de uma tuple ou lista
max([10, 5, 7]);

#menor numero em uma lista
min((10, 3, 9));

#ordenação de nomes ou valores em uma lista
nomes = ('Leonardo', 'Flávio', 'Rômulo')
sorted(nomes);