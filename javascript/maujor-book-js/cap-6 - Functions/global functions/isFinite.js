//testa o valor passado como parametro de uma função , se numerico = true else false
//caracteres como - e + retornam false

ehFinito(x => eval(`var boll = isFinite(x); console.log(boll)`))
ehFinito(10)
function ehFinito(x) {
    return eval(`var boll = isFinite(x); console.log(boll)`)
}

ehFinito(10) //return true

