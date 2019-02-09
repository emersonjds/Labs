import ClasseUsuario, { idade as IdadeUsuario } from "../functions";

alert('teste');
// alert(idade);
console.log(ClasseUsuario.info());
console.log(IdadeUsuario);

// quando for default nao precisa de chaves, e pode ser renomeado pra qualquer valor diferente do arquivo da onde veio para ficar como referencia, arquivos padraos sao exportados entre chaves

const minhaPromise = () => new Promise((resolve, reject) => {
  setTimeout(() => { resolve('OK') }, 2000)
});

// minhaPromise().then((result) => {
//   console.log(result)
// }).catch((err) => {
//   console.log(err)
// });

async function executePromise() {
  const response = await minhaPromise()
  console.log(response);
}
executePromise()

const promiseExecute = async () => {
  console.log(await minhaPromise()); // 2
  console.log(await minhaPromise()); // 4
  console.log(await minhaPromise()); // 6
}

promiseExecute();