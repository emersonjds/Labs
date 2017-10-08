//Permite e execução de uma estrutura de função passada como string, muito simples para implementação de algoritimos maliciosos

function executarEval() {
    eval(`x=3; y=4; soma = x=y; console.log(soma)`)
}