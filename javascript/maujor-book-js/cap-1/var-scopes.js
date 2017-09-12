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

}