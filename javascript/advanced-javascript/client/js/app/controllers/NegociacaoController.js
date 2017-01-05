class NegociacaoController {

	constructor() {
		let $ = document.querySelector.bind(document); //a estrutura bind mantem a associação do query
        											   // Selector com o documento
        this._data = $('#data');
        this._valor = $('#valor');
        this._quantidade = $('#quantidade');
	}

    adiciona(event) {
        event.preventDefault();
        
        let data = new Date(
        	...this._data.value
        	//instrução de spread operator da ES6, que passa cada item do array como parametro na ordem informada
        		.split('-')
        		.map((item, indice) => item - indice % 2));//varre o array criando uma copia e validando os dados na posicao 1
 									//instruçao de arrow Function

        let negociacao = new Negociacao(
        	data,
        	this._valor.value,
        	this._quantidade.value
        );

        console.log(negociacao);
    }

}

