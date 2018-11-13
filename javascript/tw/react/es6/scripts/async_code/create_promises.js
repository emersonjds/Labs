var myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(5000)
  }, 2000);
})

myPromise.then(value => console.log(`My value is ${value}`));

// Criamos uma nova Promise com “new Promise()”, e a guardamos na variável “myPromise”. Quando uma Promise é criada, ela deve receber uma função. Essa função recebe dois parâmetros: uma função a ser executada quando o processamento acabar (“resolve()”) e uma função a ser executada caso ocorra um erro (“reject()”).

// “myPromise” receberá uma Promise, que possui o método “then()”. Esta função é executada assim que a função “resolve()” for executada, e ele recebe o valor enviado no comando anterior, neste caso, o valor passado dentro de “resolve()”.

// Podemos encadear Promises de maneira bem simples: basta executar o método “then()” um depois do outro.

// A função que o “then()” recebe pode receber valores do “then()” anterior. Para isso, basta retornar esses valores na função com “return”.

var myPromise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(500)
  }, 2000)
})

myPromise2.then(value => {
  console.log(`My value is ${value}`)
})