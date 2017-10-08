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

// ----------------------------------- // 
//Exemplo 3 - Escape Closure

var global;

function funcaoExterna() {
    console.log(`Função externa`)
    function funcaoInterna() {
        console.log(`Função interna`)
    }
    global = funcaoInterna; // referenciando a closure
}

funcaoExterna() // funcao Externa
global() // funcao interna

// ----------------------------------- // 
//Exemplo 4 - Escape Closure with return

function funcaoExterna() {
    console.log('Funcao externa')
    function funcaoInterna() {
        console.log('Funcao Interna')
    }
    return funcaoInterna()
}

var reference = funcaoExterna()

// Understanding closures with loops

window.onload() = function () {
    var botao = document.getElementsByName('button');
    for (var i = 0; i < botao.length; i++) {
        botao[i].onclick = () => {
            console.log('Voce clicou')
        }
    }
}

window.onload = () => {
    var botao = document.getElementsByName('button');

    auxiliar(j => {
        return () => {
            console.log(`voce clicou no botao ${j}`)
        }
    })

    for (var i = 0; i < botao.length; i++) {
        botao[i].click = () => {
            auxiliar(i) //scape da closure 
            console.log(`voce clicou no botao ${i}`)
        }
    }
}