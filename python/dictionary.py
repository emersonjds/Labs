tipo_convites = ['vip', 'normal', 'meia', 'cortesia']; 
#Desta forma o array declarado ẽ mutavel, a lista tem que ser refeita dependendo do modelo de negocio

tipo_convites = ('vip', 'normal', 'meia', 'cortesia');
#Ja uma lista declarada com tupple nao permite acesso ao metodo append nem ao metodo remove
#o comportamento se equipara a uma constante

convites = ('vip', 60, 'normal', 100, 'meia', 30, 'cortesia', 10);
#é possivel recuperar o valor com o atributo slice
convites[0:2];

#Podemos ainda utilizar dicionarios de dados em python
#Desta forma ele junta o valor a sua chave, como um array associativo ou a um JSON
convites_com_valor = {'vip' : 60, 'normal' : 50, 'cortesia' : 30};

#Para recuperar o valor basta passar o nome da chave
convites_com_valor['vip']; #O valor de retorno sera 60

#para exibir somente as chaves é possivel utilizar o metodo keys
convites_com_valor.keys();
['vip', 'normal', 'cortesia'];

#ja para exibir todos os valores é possivel utilizar o metodo values
convites_com_valor.values();
[60, 50, 30];

