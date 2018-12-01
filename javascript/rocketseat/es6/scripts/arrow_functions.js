const arr = [1, 2, 3, 6, 9, 12];

const newArray = arr.map(data => data * 2);
const newArray1 = arr.map(data => 'teste');
const newArra2 = arr.map(data => [1, 3, 4, 52]);
// Para retornar um objeto nestes moedes é necessario que ele seja embrulhado em um parenteses assim como no JSX
// Com operações com retornos simples de informações as chaves nao sao necessarias 
const newArray3 = arr.map(data => ({name: 'Emeson '}) );

