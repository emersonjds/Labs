
import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'event-list',
  templateUrl: './eventlist.component.html',
  styleUrls: ['./eventlist.component.css']

})
export class EventlistComponent implements OnInit {

  private events: any[];

  constructor(private eventService: EventService, private toastr: ToastrService) { }

  public ngOnInit() {
    this.events = this.eventService.getEvent();

    this.showSuccess();
  }

  showSuccess() {
    this.toastr.success('Hello World', 'Toaster Fun');
  }

  handleClick(data) {
    console.log('received', data);
  }

}
