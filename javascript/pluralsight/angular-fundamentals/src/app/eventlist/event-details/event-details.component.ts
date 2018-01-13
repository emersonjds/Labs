import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';

@Component({
  templateUrl: './event-details.component.html'
})
// tslint:disable-next-line:component-class-suffix
export class EventDetails implements OnInit {

  event: any;

  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.event = this.eventService.getEvent(1);
  }
}
