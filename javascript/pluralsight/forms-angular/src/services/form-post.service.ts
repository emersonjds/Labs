import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { Employee } from '../app/models/employee';
// tslint:disable-next-line:import-blacklist
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/bufferCount';

@Injectable()
export class FormService {
  constructor(private http: Http) { }

  public extractData(res: Response) {
    const body = res.json();
    return body.fields || {};
  }

  public handleError(error: any) {
    console.log('post error' + error);
    return Observable.throw(error.statusText);
  }

  public extractLanguage(res: Response) {
    const body = res.json();
    return body.data || {};
  }

  sendForm(employee: Employee): Observable<any> {
    const body = JSON.stringify(employee);
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });

    return this.http.post('http://localhost:3100/get-languages', body, options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  getLanguages():Observable<any> {
   return this.http.get('http://localhost:3100/postemployee')
   .map(this.extractLanguage)
   .catch(this.handleError);
  }

}
