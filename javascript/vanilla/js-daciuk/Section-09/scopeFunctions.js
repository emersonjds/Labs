function myFunction() {
    function sum() {
        return v1 + v2;
        // sum é uma closure ( consegue acessar parametros externos a ela)
    }
    v1 = 10; // esse escopo é valido na função na hora da execução
    v2 = 20;
    return sum(); //execução da função,neste momemtno o JS se encarrega de montar a função , passando os valores 
}

