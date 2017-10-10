//A propriedade constructor é uma referencia a função que cria um objeto

function Cilindro(r, h) {
    this.raioBase = r;
    this.altura = h;
}

cilindroUm = new Cilindro(2, 5)
window.onload = function () {
    console.log(cilindroUm.constructor)
    
    //retorna a referencia da Função
    // Cilindro(r, h) {
    //     this.raioBase = r;
    //     this.altura = h;
    // }
}