// repeat()
// Repete uma String n vezes
"Emerson".repeat(4)

// startsWith(), endsWith(), includes()
// Três funções foram adicionadas para nos ajudar a inspecionar Strings. Com ela, podemos ver se uma string começa, termina ou inclui algo. Podemos também indicar o índice de onde queremos começar a inspeção.

var myString = "TreinaWeb";

myString.startsWith( "Tr" );  // true
myString.startsWith( "We", 6 );  // true

myString.endsWith( "eb" );  // true
myString.endsWith( "na", 6 );  // true

myString.includes( "re" );    // true
myString.includes( "er", 6 );    // false