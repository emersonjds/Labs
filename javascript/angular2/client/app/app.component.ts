import { Component } from '@angular/core'
import { Http } from '@angular/http'

//Decorator
@Component({
	moduleId: module.id, //busca o caminho referente a este modulo como raiz
	selector: 'app',
	templateUrl: './app.component.html'
})
export class AppComponent {

	fotos: Object[] = []

	constructor(http: Http) { //injecao de dependencia por tipagem

		//chamada com rxjs semelhante a Promise
		let stream = http.get('v1/fotos')
		stream.subscribe(res => {
			this.fotos = res.json();
			console.log(this.fotos)
		})

	}

}