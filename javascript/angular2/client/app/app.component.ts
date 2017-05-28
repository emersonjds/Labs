import { Component } from '@angular/core'
import { Http } from '@angular/http'

//Decorator
@Component({
	moduleId: module.id, //busca o caminho referente a este modulo como raiz
	selector: 'app',
	templateUrl: './app.component.html'
})
export class AppComponent {

	constructor(http: Http) {

	}

}