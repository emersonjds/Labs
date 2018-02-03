1 === 'b' // return false

var teste;

if (1) {
    teste = true;
} else {
    teste = false;
}

teste // return true

if (0) {
    teste = false;
} else {
    teste = true;
}

teste // false


    //Falsy
    - undefined
    - null
    - NaN
    0
    -0
    "ou"


if('') {
    teste = true;
} else {
    teste = false;
}
teste // return false por que string vazia é Falsy