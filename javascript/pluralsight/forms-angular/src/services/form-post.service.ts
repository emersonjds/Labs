import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Employee } from '../app/models/employee';

@Injectable()
export class FormService {
  constructor(private http: Http) {}

  sendForm(employee: Employee) {
    this.http.post('./../../../node_server/server..js', body => {

    })
  }

}
