// Eles são um tipo de Maps com algumas pequenas diferenças.
// Eles só aceitam objetos como chaves. Se esses objetos forem removidos pelo Garbage Collector, a entrada também será removida. Isso é bom, já que se o objeto não existe mais, não tem mais como você acessar a propriedade.
var myObj = new WeakMap();
var a = {value : 1};
var b = {value : 2};

myObj.set(a, 5);
myObj.set(b, 10);
// WeakMaps também não possuem a propriedade “size” ou o método “clear()”.