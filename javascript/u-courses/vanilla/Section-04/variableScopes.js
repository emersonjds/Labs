// Variables Scopes

// Scope = local where variable is declared
// if one var is statement in a top of code , this variable has a global scope

// if one variable is declared in a function , this variables has a local scope

// function always create local scopes, this data intern functions don't can to be access out of function 

var myvar = 1; // global scope

function myFunction() {
    return myvar;
}

myFunction() // return 1 , because myvar is in global scope statement 

function otherFunction() {
    var otherVar = true;
    return otherVar;
}

otherFunction(); // return true 
otherVar; // return is not defined , because other var is in local function scope

// The Javascript garbage's collector remove of the memory , statements of variables that were declared in local scopes , knowking that this variable doesn't it will be more used . One of the most important principles of the language is to know how to work with scopes, without this you can not even consider yourself a good programmer

function newFunction() {
    newVar = `Variavel Global`; // statement doesn't use of keyword var , in this case this variable is accessed for all apllication 
}

newFunction() // return `Variavel Global`

newVar; // return `Variavel Global`

function outraFuncao(a, b, c) { // all parameters for functions too are understanding with local scopes
    return a;
}