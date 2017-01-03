class Negociacao {

	constructor() {
		this._data = new Date;
		this._quantidade = 1;
		this._valor = 0.0;
	}
	//._ implica que o atributo esta sendo declarado de forma privada, sendo acesso somente por metodos getters and setters

	getVolume() {
		return this._quantidade * this._valor;
	}

	getData() {
		return this._data;
	}

	getQuantidade() {
		return this._quantidade;
	}

	getValor() {
		return this._valor;
	}

}