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
        
        let data = new Date(this._data.value.split('-'));
        console.log(data);
    }

}