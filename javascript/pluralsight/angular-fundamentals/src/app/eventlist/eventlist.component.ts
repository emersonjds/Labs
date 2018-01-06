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
      price: 599.99
      // location: {
      //   address: '1055 DT',
      //   city: 'London',
      //   country: 'England'
      // }
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
    }
  ];

  handleClick(data) {
    console.log('received', data);
  }

  constructor() { }

  ngOnInit() { }
}
