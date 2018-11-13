// Quando vamos importar uma funcionalidade de um módulo, usamos o nome usado na hora da exportação. Porém, é recomendado que cada módulo possua um item padrão para ser exportado. Para isso, indicamos a exportação com o comando “default”. Assim, na hora da importação, se não especificarmos o que queremos importar, o que está marcado como “default” para exportação que será importado.

export default class Calc{
  static sum(a, b){
      return a + b;
  }
}

// ou é possivel exportar desta outra forma 

export class Calc {
  static(a, b) {
    return a + b
  }
}

export default Calc;

// Assim teremos acesso ao “Calc” nas duas maneiras.

// Também podemos indicar que algo é “default” com a mesma maneira que fizemos quando renomeamos a exportação:

export { Calc as default };

