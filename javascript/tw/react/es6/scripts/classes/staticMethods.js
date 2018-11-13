class Numeros {
  static double(number) {
    return number * 2;
  }

  static triple(number) {
    return number * 3
  }
}

// Com a utilização de metodos estaticos nao é necessario que a classe seja instanciada, caso a mesma seja instanciada os metodos estaticos perdem seus valores e nao podem ser utilizados, desta forma o ideal é que se use a classe chamando diretamente o metodo sem a instancia da mesma, metodos estaticos sao metodos que serao usados por muitas outras classes.

Numeros.double(10) // return 20
Numeros.triple(10) // return 30

// Importante
// Quando a classe é instanciada, métodos estáticos não são acessíveis.