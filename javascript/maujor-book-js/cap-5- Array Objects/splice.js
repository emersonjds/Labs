//Esse metodo se destina a inserir ou remove elementos de um array, isto é, podemos somente inserir, somente remover ou inserir e remover ao mesmo tempo elementos em um array.Admite um argumento obrigaório e varios elementos opcionais cujas finalidades são descritas a seguir.

splice(arg1[, arg2, arg3, ... argn])

//O primeiro argument define a posição aonde se iniciara a inserção ou remoção.
//O segundo argumento define a quantidade de elementos a remover. Se esse argumento for omitido, serao removidos todos os elementos do array a partir da posição definida no primeiro argumento até o final do array.
// O terceiro argumento em diante, definimos os elementos a inserir a partir da posição definida no primeiro argumento e depois de removidos tantos elementos quandos especificados no segundo argumento 

var arr = [2, 5, 7, 9, 1, 3, 10, 47]

arr.splice() // Resulta em (3) [3, 10, 47] 
arr.splice(3, 4) // Resulta em (4) [9, 1, 3, 10]
arr.splice(5, 0, 13, 54, 32)  // Resulta em [2,5,7,9, 1,3, 10, 47]
