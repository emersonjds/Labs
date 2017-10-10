//A propriedade prototype permite adicionar novas propriedades e/ou métodos a um objeto ja existente. 

function Cilindro(r,h) {
    this.raioBase = r;
    this.altura = h;
}

Cilindro.prototype.cor = 'null' // nova propriedade adicionada
Cilindro.cor = 'azul' 

console.log(Cilindro.cor)
