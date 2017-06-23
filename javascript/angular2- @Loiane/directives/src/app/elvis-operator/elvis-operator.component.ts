import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-elvis-operator',
	templateUrl: './elvis-operator.component.html',
	styleUrls: ['./elvis-operator.component.scss']
})
export class ElvisOperatorComponent implements OnInit {

	tarefa: any = {
		desc: 'Descricao Tarefa',
		responsavel: {
			usuario : null 
		}
	}

	constructor() { }

	ngOnInit() {
	}

}
