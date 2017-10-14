//O metodo search retorna a posição da primeira ocorrencia do padrao definido no parametro expreg. Esse parametro é uma expressao regular supostamente contida na string em que se faz a procura. Se for fornecido um parametro que nao seja uma spressao regular ele automaticamente se transforma em uma com o uso do new Regex

var s = 'DjkAabcrstbEc43Afgbhm';
console.log(s.search(/[A-C]/)) // return 3
console.log(s.search('s')) // return 6 
console.log(s.search(/[A-E]/gi)) // return 3console.log(s.search(/[A-C]/)) // return 3
console.log(s.search(/[A-C]/)) // return 3console.log(s.search(/[A-C]/)) // return 3
