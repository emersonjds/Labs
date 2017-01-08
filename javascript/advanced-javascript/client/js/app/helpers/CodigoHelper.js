class CodigoHelper {

	constructor(texto) {
		if(!this._valida(texto)) throw new Error(`O texto ${texto} não é um código válido`);
		this._texto = texto;
	}

	_valida(texto) {
		return /\d{3}-\d{2}-\d{2}/.test(texto);
	}

	get texto() {
		return this._texto;
	}

}