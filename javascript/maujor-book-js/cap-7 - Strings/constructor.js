//a propriedade constructor é uma referencia à função que cria um objeto.

var texto = new String('minha string');
window.onload = () => {
    console.log(texto.constructor)
}
// ƒ String() { [native code] }