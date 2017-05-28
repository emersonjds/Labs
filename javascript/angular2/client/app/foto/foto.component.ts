import { Component, Input } from '@angular/core'

@Component({
  moduleId: module.id,
  selector: 'foto',
  templateUrl: './foto.component.html'
})

export class FotoComponent {
  @Input() url //[] associação unidirecional na templateUrl
  @Input() titulo
}