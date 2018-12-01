class List {
  constructor() {
    this.data = [];
  }

  add(data) {
    this.data.push(data);
    console.log(this.data)
  }
}

class ListTodo extends List {
  constructor() {
    super();
    this.usuario = 'Emerson';
  }

  showName() {
    console.log(this.usuario)
  }
}

class Matematica {
  static sum(a, b) {
    return a + b;
  }
}

var minhaList = new ListTodo();

document.getElementById('novoTodo').onclick = function() {
  minhaList.add('Emerson')
  console.log(Matematica.sum(30,12));
}

