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

  cadastrar(foto: FotoComponent): Observable<MensagemCadastro> {
    if (foto._id) {
      return this.http.put(this.url + '/' + foto._id, JSON.stringify(foto), { headers: this.headers })
        .map(() => new MensagemCadastro('Foto alterada com sucesso', false)) //envolto num parenteses por ser um retorno unico de objeto
    } else {
      return this.http.post(this.url, JSON.stringify(foto), { headers: this.headers })
        .map(() => new MensagemCadastro('Foto cadastrada com sucesso', true)
        )
    }

  }

  remover(foto: FotoComponent): Observable<Response> {
    return this.http.delete(this.url + '/' + foto._id)
  }

  obterFoto(id: string): Observable<FotoComponent> {
    return this.http.get(this.url + '/' + id)
      .map(res => res.json())
  }
}

export class MensagemCadastro {
  private _mensagem: string;
  private _inclusao: boolean;

  constructor(mensagem: string, inclusao: boolean) {
    this._mensagem = mensagem;
    this._inclusao = inclusao;
  }

  public get mensagem(): string {
    return this._mensagem;
  }

  public get inclusao(): boolean {
    return this._inclusao;
  }
}
