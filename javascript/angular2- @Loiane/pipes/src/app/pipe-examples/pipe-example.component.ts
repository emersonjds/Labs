import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-pipe-example',
	templateUrl: './pipe-example.component.html',
	styleUrls: ['./pipe-example.component.css']
})
export class PipeExamplesComponent implements OnInit {

	livro : any = {
		titulo : 'JavaScript 2 Edição',
		autor : 'Emerson Jr',
		numeroPaginas: 657 ,
		preco: 49,
		dataLancamento : 1999,
		url: 'https://www.google.com',
		avaliacao: 4.56743
	}

	constructor() { }

	ngOnInit() {
	}

}
