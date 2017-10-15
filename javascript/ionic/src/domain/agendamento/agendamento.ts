import { Carro } from './../carro/carro';

export class Agendamento {
    constructor(
        public carro: Carro = null,
        public valor: number = 0,
        public nome: string = '',
        public endereco: string = '',
        public email: string = '',
        public data: string = new Date().toISOString()
    ) { }
}