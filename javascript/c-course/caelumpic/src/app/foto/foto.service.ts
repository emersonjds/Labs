import { Http, Headers, Response } from '@angular/http';
import { FotoComponent } from './foto.component';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class FotoService {

    http: Http;
    headers: Headers;
    url: string = 'http://localhost:3000/v1/fotos';

    constructor(private _http: Http) {
        this.http = _http;
        this.headers = new Headers()
        this.headers.append('Content-type', 'application-json');
    }

    listar(): Observable<FotoComponent[]> {
        return this.http.get(this.url)
            .map(res => res.json())
    }

    cadastrar(foto: FotoComponent): Observable<Response> {
        return this.http.post(this.url, JSON.stringify(foto), { headers: this.headers })
    }

    remover(foto: FotoComponent ): Observable<Response> {
        return this.http.delete(`${this.url}/${foto._id}`)
    }

    obterFoto() {

    }
}