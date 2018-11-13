// Para manter a organização do código, muitos padrões foram criados para se trabalhar com módulos. Não vamos abordar esses padrões de projeto aqui.

// Até então, o JavaScript não possuía uma forma nativa para se separar módulos em arquivos e requisitá-los para serem usados em outro código. Fazíamos uma simulação disso nos navegadores, o Node.js seguiu um padrão com carregamento síncrono (CommonJS) e ferramentas como Browserify e WebPack permitem a gente trabalhar com módulos, mas o resultado é um único arquivo que é carregado de uma só vez no navegador.

// Agora temos suporte a essa funcionalidade nativamente.

// Dica
// Apenas o Safari suportava essa funcionalidade. Caso o navegador que você está usando ainda não suporte essa funcionalidade, use a configuração do WebPack com Babel ensinado no começo do curso para poder usar essa funcionalidade.

// Os módulos são separados por arquivos. Dentro do arquivo nós indicamos o que queremos exportar, ou seja, tornar público. O que não indicamos para a exportação ficará privado, ou seja, não poderemos acessar de fora do arquivo.

// Os principais novos comandos são “import” e “export”.

// Para trabalhar com módulos, vamos criar mais um arquivo no diretório scripts, “Calc.js”