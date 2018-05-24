var arr = [1, 2, 3, 'Emerson', { bola: 'azul' }]

arr.length; // return 5

arr[4].bola // return azul

// Push => add a new item on the end of arr

arr.push({ carro: 'BMW' }) // return arr.length => 5 

arr.push(function soma(x, y) { return x + y });

arr[6](1, 3)