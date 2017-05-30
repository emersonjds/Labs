import { Component, Input } from '@angular/core'

@Component({
  moduleId: module.id,
  selector: 'painel',
  templateUrl: './painel.component.html'
})

export class PainelComponent {
  
  @Input() titulo: string

}