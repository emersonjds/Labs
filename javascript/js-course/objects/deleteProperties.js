//O operador delete, remove uma propriedade de um objeto
delete book.author; //Agora o objeto nao tem mais a propriedade author
delete book["main title"] // objeto nao possui mais a propriedade main title

//Este operador exclui somente propriedades proprias e nao as herdadas 

var o = {x:1}; // o tem a propriedade x e herda toString de prototype;
delete o.x; //Exclui x e retorna true
delete o.x; // Nao executa a açao uma vez que x ja foi excluido anteriormente
delete o.toString; //nao executa pois toString nao é proprio e sim herdado
delete 1; // Nao tem sentido, mas é avaliado como true

 