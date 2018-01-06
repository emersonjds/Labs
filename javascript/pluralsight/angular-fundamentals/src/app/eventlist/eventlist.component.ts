import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'event-list',
  templateUrl: './eventlist.component.html',
  styleUrls: ['./eventlist.component.css']

})
export class EventlistComponent implements OnInit {

  events = [
    {
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
    },
    {
      id: 2,
      name: 'Angular Connect',
      date: '12/12/2018',
      time: '10:00 am',
      price: 599.99,
      location: {
        address: '1055 DT',
        city: 'London',
        country: 'England'
      }
    },
    {
      id: 3,
      name: 'Angular Connectcut',
      date: '16/12/2018',
      time: '13:00 pm',
      price: 599.99,
      location: {
        address: '1055 DT',
        city: 'London',
        country: 'England'
      }
    },
    {
      id: 4,
      name: 'Angular Connectcut',
      date: '12/12/2018',
      time: '7:00 am',
      price: 450.99,
      location: {
        address: '1032 DT',
        city: 'Budapest',
        country: 'Russia'
      }
    }
  ];

  handleClick(data) {
    console.log('received', data);
  }

  constructor() { }

  ngOnInit() { }
}
