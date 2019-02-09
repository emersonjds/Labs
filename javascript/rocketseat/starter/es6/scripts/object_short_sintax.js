const nome = 'Emerson';
const idade = 29;


// quando nome da propriedade do objeto tem o mesmo nome da variavel que voce vai passar como valor o es6 permite que seja passado somente o nome da propriedade , o javascript ja subentende que tem uma variavel com aquele mesmo nome no codigo e passa o valor dela como o valor daquela propriedade dentro do objeto
const user = {
  nome, 
  idade, 
  empresa: 'Krommasys'
}

console.log(user)// {nome: 'Emerson', idade: 29, empresa: 'Krommasys'}