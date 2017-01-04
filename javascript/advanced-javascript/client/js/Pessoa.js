class Pessoa {
	constructor (nome, sobrenome) {
		this.nome = nome;
		this.sobrenome = sobrenome;
	}

	obtemNomeCompleto() {
		return this.nome + ' ' + this.sobrenome;
	}
}