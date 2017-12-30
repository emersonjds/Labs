import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'event-list',
  templateUrl: './eventlist.component.html',
  styleUrls: ['./eventlist.component.css']
})
export class EventlistComponent implements OnInit {

  event = {
    id: 1,
    name: 'Angular Connect',
    date: '12/12/2018',
    time: '10:00 am',
    price: 599.99,
    location: {
      address: '1055 DT',
      city: 'London',
      country: 'England'
    }
  };

  constructor() { }

  ngOnInit() { }
}
