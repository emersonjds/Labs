function soma(a, b) {
  return a + b;
}

console.log(soma(1))// error NaN

const soma = (a = 3, b = 6) => a = b; 
soma(); // return 9
soma(1); // return 7