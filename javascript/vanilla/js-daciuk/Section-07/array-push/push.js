var arr = [1, 2, 3, 'Emerson', { bola: 'azul' }];

arr.push([1, 2, 3, 4, { carro: 'BMW' }]);

arr.push(
    function soma(x, y) {
        return x + y;
    }
); // Function Programming

arr[5](3, 4); // return 7
