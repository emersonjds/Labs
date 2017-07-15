import { Component, Input } from '@angular/core';

@Component({
  selector: 'panel',
  templateUrl: './panel.component.html'
})
export class PanelComponent {
  @Input() titulo: string;
}
