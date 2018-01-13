import { Injectable } from '@angular/core';

@Injectable()
export class EventService {

  constructor() { }
  getEvent() {
    return EVENTS;
  }
}

const EVENTS = [
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
    time: '8:00 am',
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
  },
  {
    id: 5,
    name: 'Angular Connectcut',
    date: '17/12/2018',
    time: '7:00 pm',
    price: 466.00,
    location: {
      address: '1032 DT',
      city: 'Budapest',
      country: 'Russia'
    }
  },
  {
    id: 6,
    name: 'Angular Connectcut',
    date: '22/12/2018',
    time: '14:00 pm',
    price: 450.99,
    location: {
      address: '1032 DT',
      city: 'Budapest',
      country: 'Australia'
    }
  }
];

