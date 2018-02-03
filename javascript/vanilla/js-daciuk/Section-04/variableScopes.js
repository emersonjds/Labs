var myvar = 1;

function myFunction() {
    return myvar;
}

myFunction(); // return 1 pois a variavel esta em escopo global

function otherFunction() {
    var otherVar = true;
    return otherVar;
}
otherFunction(); // return true que é o valor retornado da variavel

otherVar; // return is not defined por que a variavel esta dentro do escopo da função , funcionando apenas dentro dela
