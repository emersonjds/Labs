
import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';

@Component({
  selector: 'event-list',
  templateUrl: './eventlist.component.html',
  styleUrls: ['./eventlist.component.css']

})
export class EventlistComponent implements OnInit {

  private events: any[];

  constructor(private eventService: EventService) { }

  public ngOnInit() {
    this.events = this.eventService.getEvent();
  }

  handleClick(data) {
    console.log('received', data);
  }

}
