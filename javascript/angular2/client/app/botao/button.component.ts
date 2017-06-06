import { Component, Input, EventEmitter, Output } from '@angular/core'

@Component({
    moduleId: module.id,
    selector: 'botao',
    templateUrl: './botao.component.html'
})
export class ButtonComponent {

    @Input() nome: string = 'Ok'
    @Input() estilo: string = 'btn-default'
    @Input() tipo: string = 'button'
    @Input() desabilitado: boolean = false
    @Output() acao = new EventEmitter()
    @Input() confirmacao = true

    executaAcao() {
        if (confirm('Deseja realmente excluir !?')) {
            this.acao.emit(null)
        }
    }

}

