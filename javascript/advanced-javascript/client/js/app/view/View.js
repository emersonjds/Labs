class View {

	constructor(elemento) {
        this.elemento = elemento;
    }

    template {
    	throw new Error('O metodo template deve ser implementado em suas classes responsaveis');
    }

	 update(model) {
        this.elemento.innerHTML = this.template(model);
    }
}