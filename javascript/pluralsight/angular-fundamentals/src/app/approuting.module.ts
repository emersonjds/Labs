import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EventlistComponent } from './eventlist/eventlist.component';
import { EventDetails } from './eventlist/event-details/event-details.component';

const routes: Routes = [
  {
    path: 'events', component: EventlistComponent
  },
  {
    path: 'events/:id', component: EventDetails
  },
  {
    path: '', redirectTo: '/events', pathMatch: 'full'
  },
  {
    path: '**', redirectTo: '/events'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class ApproutingModule { }
