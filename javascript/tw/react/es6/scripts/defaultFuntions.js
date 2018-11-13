// como era antes
function myFunc(a) {
  a = a || 5;
  console.log(a)
}
// Assim, se não passarmos nada, o valor “5” será usado. O problema é que se passarmos “0”, que é um valor falso, teríamos o valor “5” novamente.
// Para evitar isso precisamos na verdade verificar se o parâmetro é “undefined”. Isso causa muito código repetido.
// Agora podemos definir valores padrões para os parâmetros das funções, o que facilita muito nossa vida:

function myFunc(a = 5) { // o valor padrao de a é 5
  console.log(a)
}