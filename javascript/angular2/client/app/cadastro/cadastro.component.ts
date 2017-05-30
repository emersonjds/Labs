import { Component, Input } from '@angular/core'

@Component({
  moduleId: module.id,
  selector: 'cadastro',
  templateUrl: './cadastro.component.html'
})
export class CadastroComponent {
  @Input() nome: string
  @Input() titulo: string

}