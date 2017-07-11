import { Component, Input } from '@angular/core';

@Component({
  selector: 'foto',
  templateUrl: './foto.component.html'
})
export class FotoComponent {
  @Input() titulo;
  @Input() url;
}
