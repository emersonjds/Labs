//O conceito de closures é poder declaração funções dentro de outras funções, desta forma elas ficam "enclausuradas" no escopo local de uma outra função, diferente de outras linguagens, Javascript tem metodos de fazer estas funções internas escaparem do escopo.

// ----------------------------------- // 
//Exemplo 1 
function funcaoExterna() {
    console.log('Função externa')
    function funcaoInterna() {
        console.log('Funcao interna')
    }
}

funcaoExterna() // Função externa
funcaoInterna() // undefined 

// ----------------------------------- // 
//Exemplo 2

function funcaoExterna() {
    console.log('fun externa')
    function funcaoInterna() {
        console.log('Funcao interna')
    }
    funcaoInterna()
}
funcaoExterna() // retorna Função externa e Função Interna

