"use strict";

var arr = [1, 3, 4, 5, 8, 9]; //Map

var newArr = arr.map(function (item, index) {
  return item * index;
});
console.log(newArr); // [2,6,8,10,16,18]

console.log(newArr); // [valor * posição no array];
// Reduce

var sum = arr.reduce(function (total, next) {
  return total + next;
}); // return 30 = 9 + 8 + 5 ... 
// Interações do reduce
// 1 interação
// total = 0
// next = 1 
// total + next = 1;
// 2 interação
// total = 1,
// next = 3
// total + next = 4

var numbers = [1, 2, 3, 4, 5];
var autoMultiply = numbers.reduce(function (proximo, atual) {
  return proximo * atual;
}); // return 120
// E assim sucessivamente , até ele retornar a soma de todos os valores presentes no array
// Filter

var filter = arr.filter(function (item) {
  return item % 2 === 0;
}); // return [4,8] // filter sempre retorna true ou false
// Find - Verificar alguma informação dentro do array

var find = arr.find(function (item) {
  return item === 4;
}); //return 4
// Caso o find nao encontre o valor ele retorna undefined
"use strict";

var arr = [1, 2, 3, 6, 9, 12];
var newArray = arr.map(function (data) {
  return data * 2;
});
var newArray1 = arr.map(function (data) {
  return 'teste';
});
var newArra2 = arr.map(function (data) {
  return [1, 3, 4, 52];
}); // Para retornar um objeto nestes moedes é necessario que ele seja embrulhado em um parenteses assim como no JSX
// Com operações com retornos simples de informações as chaves nao sao necessarias 

var newArray3 = arr.map(function (data) {
  return {
    name: 'Emeson '
  };
});
"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var List =
/*#__PURE__*/
function () {
  function List() {
    _classCallCheck(this, List);

    this.data = [];
  }

  _createClass(List, [{
    key: "add",
    value: function add(data) {
      this.data.push(data);
      console.log(this.data);
    }
  }]);

  return List;
}();

var ListTodo =
/*#__PURE__*/
function (_List) {
  _inherits(ListTodo, _List);

  function ListTodo() {
    var _this;

    _classCallCheck(this, ListTodo);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ListTodo).call(this));
    _this.usuario = 'Emerson';
    return _this;
  }

  _createClass(ListTodo, [{
    key: "showName",
    value: function showName() {
      console.log(this.usuario);
    }
  }]);

  return ListTodo;
}(List);

var Matematica =
/*#__PURE__*/
function () {
  function Matematica() {
    _classCallCheck(this, Matematica);
  }

  _createClass(Matematica, null, [{
    key: "sum",
    value: function sum(a, b) {
      return a + b;
    }
  }]);

  return Matematica;
}();

var minhaList = new ListTodo();

document.getElementById('novoTodo').onclick = function () {
  minhaList.add('Emerson');
  console.log(Matematica.sum(30, 12));
};
"use strict";

function _readOnlyError(name) { throw new Error("\"" + name + "\" is read-only"); }

var a = 1; // valor nao pode ser reatribuido

a = (_readOnlyError("a"), 3); // Error a is read-only

Mutação;
var usuario = {
  nome: 'Emerson' // Quando uma constante é declarada em formato de objeto ou vetor , é possivel que o valor seja alterado
  // esta nova propriedade tem o nome de mutação;

};
usuario.nome = 'Maria'; // mutation

console.log(usuario); // Maria

function teste(x) {
  var y = 2; // scope function variable

  if (x > 10) {
    console.log(x, y);
  }
}

console.log(y); // Error 'y'i is not defined
// o escopo é diferente do escopo global , logo a variavel nao é enxergada fora do escopo em que foi definida
"use strict";

function soma(a, b) {
  return a + b;
}

console.log(soma(1)); // error NaN

var soma = function soma() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 6;
  return a = b;
};

soma(); // return 9

soma(1); // return 7
"use strict";

var usuario = {
  name: 'Maria',
  age: 29,
  endereco: {
    cidade: 'Sao Caetano do Sul',
    estado: 'SP'
  }
};
var name = usuario.name,
    age = usuario.age,
    cidade = usuario.endereco.cidade; // busca estas propriedades dentro do objeto usuario 

console.log(name);
console.log(age);
console.log(cidade); // A desestruturação tambem pode ser utilizada nos paremtros da função

function showName(_ref) {
  var name = _ref.name,
      age = _ref.age;
  console.log(name, age);
} // na chamada da função passamos o objeto que sera desestruturado


showName(usuario);
"use strict";
