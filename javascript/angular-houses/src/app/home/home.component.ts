import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city">
        <button class="buttonText" type="button">Search</button>
      </form>
    </section>
`,
  styleUrls: ['./home.component.scss'],
})

export class HomeComponent {}
