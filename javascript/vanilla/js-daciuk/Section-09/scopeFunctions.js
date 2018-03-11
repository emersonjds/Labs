function myFunction() {
    v1 = 10; // esse escopo é valido na função na hora da execução
    v2 = 20;
    function sum() {
        return v1 + v2;
        // sum é uma closure ( consegue acessar parametros externos a ela)
    }
    return sum(); //execução da função
}