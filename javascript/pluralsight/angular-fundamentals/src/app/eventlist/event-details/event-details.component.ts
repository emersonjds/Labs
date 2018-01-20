import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './event-details.component.html'
})
// tslint:disable-next-line:component-class-suffix
export class EventDetails implements OnInit {

  event: any;

  constructor(
    private eventService: EventService,
    private acivatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.event = this.eventService.getEvent( + this.acivatedRoute.snapshot.params['id']);
  }
}
