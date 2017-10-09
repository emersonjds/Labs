//Destina-se a testar um valor passado como argumento na função, tem comportamento contrario a função isFinite, retorna TRUE caso nao seja numero e FALSE se numero.

function naoEhNumero(x) {
    eval (`var bool = isNaN(x); console.log(bool)`);
}