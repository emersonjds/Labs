var botaoAdicinar = document.querySelector("#buscar-pacientes");

botaoAdicinar.addEventListener("click", function () {

    var xhr = new XMLHttpRequest(); //objeto de requisição externa
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", function () { //caso haja a conexao externa e os dados sejam trazidos, mostra os dados
        var resposta = xhr.responseText;
        var pacientes = JSON.parse(resposta);
        
        pacientes.forEach(function(paciente) {
            adicionaPacienteNaTabela(paciente);
        });
    });

    xhr.send(); //enviar requisição

});