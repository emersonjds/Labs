import { Http, Headers } from '@angular/http';
import { FotoComponent } from './foto.component';

export class FotoService {
    http: Http;
    headers: Headers;
    url: string = 'http://localhost:3000/v1/fotos';
    constructor(http: Http) {
        this.http = http;
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
    }
    lista() {
        return this.http.get(this.url)
            .map(res => res.json());
    }
    cadastra(foto: FotoComponent) {
        return this.http.post(this.url, JSON.stringify(foto),
            { headers: this.headers });
    }
}