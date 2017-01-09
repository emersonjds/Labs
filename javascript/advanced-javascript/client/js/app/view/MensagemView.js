class MensagemView extends View{
    
    constructor(elemento) {
    	super(elemento);
    }

    template(model) {
        return model.texto ? `<p class="alert alert-info">Transação adicionada com sucesso</p>` : `<p></p>`;
    }

   
}