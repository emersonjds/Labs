import { Http, Headers, Response } from '@angular/http'
import { FotoComponent } from './foto.component'
import { Observable } from 'rxjs'
import { Injectable } from '@angular/core'

@Injectable() //com esta marcação o angular entende que pode buscar as dependencias da classe
export class FotoService {

  http: Http
  headers: Headers
  url: string = 'v1/fotos'

  constructor(http: Http) {
    this.http = http
    this.headers = new Headers()
    this.headers.append('Content-type', 'application.json')
  }

  cadastra(foto: FotoComponent): Observable<Response> {
    return this.http.post(this.url, JSON.stringify(foto), { headers: this.headers }) //return Observable
  }

  lista(): Observable<FotoComponent[]> {
    return this.http.get(this.url)
      .map(res => res.json())
  }

  remove(foto: FotoComponent): Observable<Response> {
    return this.http.delete(this.url + '/' + foto._id)
  }

}

