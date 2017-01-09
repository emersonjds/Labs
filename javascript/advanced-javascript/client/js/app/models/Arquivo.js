class Arquivo {

	constructor(nome, tamanho, tipo) {
		this._nome = nome;
		this._tamanho = tamanho;
		this._tipo = tipo;
	}

	get nome() {
		return this._nome;
	}

	get tamanho() {
		return this._tamanho;
	}

	get tipo() {
		return this._tipo;
	}
}