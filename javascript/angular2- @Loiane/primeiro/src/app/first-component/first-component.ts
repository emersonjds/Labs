import { Component } from '@angular/core'

@Component({
  moduleId: module.id,
  selector: 'first-component',
  templateUrl: 'first-component.html'
})

export class FirstComponent {
  titulo: string = 'dado da model pra view'
}