var botaoAdicinar = document.querySelector("#buscar-pacientes");

botaoAdicinar.addEventListener("click", function () {

    var xhr = new XMLHttpRequest(); //objeto de requisição externa
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", function () { //caso haja a conexao externa e os dados sejam trazidos, mostra os dados

        if (xhr.status == 200) { //valida se a requisicão chegou na api
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta);

            pacientes.forEach(function (paciente) {
                adicionaPacienteNaTabela(paciente);
            });
        } else {
            console.log(xhr.status); //status de erro
            console.log(xhr.responseText); 
        }
    });

    xhr.send(); //enviar requisição

});