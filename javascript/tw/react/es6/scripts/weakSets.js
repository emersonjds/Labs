// Como os WeakMaps seguram de forma fraca suas chaves, os WeakSets fazem o mesmo com seus valores.
var mySet = new WeakSet();
var a = {myValue: 1},
    b = {myValue: 2};

mySet.add(a);
mySet.add(b);

a = null

// Os valores dos WeakSets devem ser objetos, diferente dos Sets que aceitam valores primitivos.
  