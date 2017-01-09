class ListaNegociacoes {

    constructor(negociacao) {
        this._negociacoes = [];   
    }
    
    adiciona(negociacao) {
        this._negociacoes.push(negociacao);
    }

    get negociacoes() {
        return [].concat(this._negociacoes);
    }
}