try {
    /// possivel exception
} catch (e) {
    console.log(e)
} finally () {
    // script qualquer
}

try {
    var x = u;
    var y = x + 2;
    console.log(y)
} catch (e) {
    console.log(e.message + "\n" + e.name + "\n" + e.toString())
    //atributos do objeto Error -> message, name 
}