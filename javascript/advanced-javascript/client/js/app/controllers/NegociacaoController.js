class NegociacaoController {

	constructor() {
		let $ = document.querySelector.bind(document); //a estrutura bind mantem a associação do query
        											   // Selector com o documento
        this._data = $('#data');
		this._quantidade = $('#quantidade');
		this._valor = $('#valor');
        this._listaNegociacoes = new ListaNegociacoes();
	}

    adiciona(event) {
        event.preventDefault();

		console.log(negociacao);

		let diaMesAno = DateHelper.dateToText(negociacao.data);

		console.log(diaMesAno);

		this._listaNegociacoes.adiciona(this._criaNegociacao());
		this._limpaFormulario();
		
		console.log(this._listaNegociacoes.negociacoes);
    }

	_criaNegociacao() {
		return new Negociacao(
        	DateHelper.textToDate(this._data.value),
        	this._quantidade.value,
			this._valor.value)
	}

	_limpaFormulario() { //o underline informa ao metodo que ele so pode ser utilizado na mesma classe
		this._data.value = '';
		this._quantidade.value = 1;
		this._valor = 0.0;
		this._data.focus();
	}

}

