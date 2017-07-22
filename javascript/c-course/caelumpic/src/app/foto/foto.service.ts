import { Http, Headers, Response } from '@angular/http';
import { FotoComponent } from './foto.component';
import { Observable } from 'rxjs';
import { Headers } from '@angular/http;

export class FotoService {
    
    http: Http;
    headers: Headers;
    url: string = 'http://localhost:3000/v1/fotos';

    constructor(private _http: Http) {

    }
}