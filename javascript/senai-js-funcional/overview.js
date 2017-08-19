
//Pure functions
function sum(x) {
  return x * 2
}

//Anonymous function
const x = function (y) {
  return y * 2;
}

//Map function
['s', 'a', 'b'].map(function (item) {
  console.log(item)
  return item;
})

//curried funcion
function e(x) {
  return function(y) {
    returm sum(y)
  }
}

