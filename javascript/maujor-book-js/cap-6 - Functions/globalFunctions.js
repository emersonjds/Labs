// ----------------------------------------------- // 
encode(URI)
// reescreve uma uri com codificação em utf-8 transformando sequencias escapadas em hexadecimais %xx
//caracteres nao codificados ; . / ? : @ & = + - _ . ! - * ' () #
var uri = 'http.xpto.com.br e outro site www.maca.com.br';
var uriCodificada = encodeURI(uri)
console.log(uriCodificada) // http.xpto.com.br%20e%20outro%20site%20www.maca.com.br

// ----------------------------------------------- // 
decode(URI)
//Recupera um arquivo uri que tenha sido codificado
var uriCodificada = 'http.xpto.com.br%20e%20outro%20site%20www.maca.com.br';
var uri = decodeURI(uriCodificada)
console.log(uri) // http.xpto.com.br e outro site www.maca.com.br

