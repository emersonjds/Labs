window.onload = () => {

    //function scopes
    var a = 10;

    var executar = () => {
        var a = 20;
        console.log(a)
    }

    function funcao2() {
        var a = 30;
        console.log(a)
    }

    executar()
    funcao2()

    console.log(a);

    // -------------------------------------------- // 

    funcaoUm = () => {
        var a = 20;
        console.log(a)
        funcaoAninhada = () => {
            var a = 40;
            console.log(a)
        }
        funcaoAninhada()
    }

    funcaoUm()

    // -------------------------------------------//

    b = 60;
    funcaoTres = () => {
        console.log(b)
        var b = 70;
        console.log(a)
    }

    funcaoTres()

}