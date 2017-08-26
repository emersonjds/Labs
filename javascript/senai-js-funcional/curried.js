const j = require('./j.json');
function fetch(x) {
  if (x > 5) {
    return returnUserToHome;
  }

  return function(y, obj) {
    return y(obj);
  }
}

function returnUserToHome() {
  console.log('Ok :(');
}

function parseProducts(products) {
  const filtered = products.filter(function(p) { return p.name.length < 25 }).map(function(p) { return p.name });
  console.log(filtered);
  return filtered;
}

fetch(6)(parseProducts, j.data.products);
// ------------------------------------------------------------- //

function(a) {
    return { a : x, b : 2}
}

a(2).b //acesso a proprierade do objeto literal
a(2).b + 2 = 4 // soma do dado retornado do objeto
a()() // chamada em forma de curried function