var x = 3;

var y = 7;

// 1 teste
if (x === 3 && y === 7) {
    return true;
}

// 2 testes
if (x === 2) {
    y = 2;
} else {
    y = 10;
}

// + 2 testes
if (x === 2) {
    y = 2;
} else if (x === 4) {
    y = 6;
} else {
    y = 15;
}