import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EventlistComponent } from './eventlist/eventlist.component';
import { EventDetails } from './eventlist/event-details/event-details.component';

const routes: Routes = [
  {
    path: '', component: EventlistComponent, pathMatch: 'full'
  },
  {
    path: 'event/:id', component: EventDetails
  },
  {
    path: '**', component: EventlistComponent
  }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ApproutingModule]
})
export class ApproutingModule { }
