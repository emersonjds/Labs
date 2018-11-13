// Para usar essas funcionalidades em outros arquivos, usamos o comando “import”.
// Vamos ao arquivo “app.js” para ver como fazer isso. Na primeira linha, coloque o seguinte código:

import { Calc, myVar, myFunc } from './module_exports';

myFunc();

console.log(Calc.sum(5, 3), myVar);

// Após o “import” nós abrimos chaves. Parece com um objeto literal, mas não é. É a sintaxe para a importação de módulos. Dentro das chaves nós indicamos o que queremos importar. Os nomes devem ser os mesmos do que estão sendo exportados do módulo que estamos importando. Após isso, colocamos o comando “from” e indicamos com uma String o caminho do arquivo.

// Note que o nome do arquivo não precisa de “.js”, pois é óbvio que se estamos executando este comando, estamos falando de um arquivo “.js”.

// Assim como pudemos renomear o que estamos exportando, também podemos renomear o que estamos importando. Isso é bom para evitar conflitos, caso a gente esteja trabalhando com módulos que possuam variáveis com o mesmo nome, por exemplo, underscore e lodash, que usam o símbolo “_”.

// Outra forma de importar 
import {Calc as MyClass} from './Calc'; 

// É recomendado que você só importe o que for usar. Caso você realmente precise importar tudo do módulo, pode usar “*” para importar o módulo inteiro. Para isso, é obrigatório dar um nome, o qual será como uma variável que virá com todas as funcionalidades do módulo.

import * as MyModule from './Calc'; // adicionando um alias para importar tudo o que estiver no mddulo