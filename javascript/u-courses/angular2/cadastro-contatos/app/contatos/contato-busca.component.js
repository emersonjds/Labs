"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const contato_service_1 = require("./contato.service");
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const observable_1 = require("rxjs/observable");
const subject_1 = require("rxjs/subject");
let ContatoBuscaComponent = class ContatoBuscaComponent {
    constructor(contatoService, router) {
        this.contatoService = contatoService;
        this.router = router;
        this.buscaChange = new core_1.EventEmitter();
        this.termosDaBusca = new subject_1.Subject();
    }
    ngOnInit() {
        this.contatos = this.termosDaBusca
            .debounceTime(500) //aguarde 500ms para emitir novos eventos
            .distinctUntilChanged() // se busca == busca anterior / ignore esta nova busca
            .switchMap(term => term ? this.contatoService.search(term) : observable_1.Observable.of([]))
            .catch(e => {
            console.log(e.message);
            return observable_1.Observable.of([]);
        });
    }
    ngOnChanges(changes) {
        let busca = changes['busca'];
        this.search(busca.currentValue);
    }
    search(term) {
        this.termosDaBusca.next(term); // adicionando entrada de dados a fila de eventos
        this.buscaChange.emit(term);
    }
    verDetalhe(contato) {
        let link = ['contato/save', contato.id];
        this.router.navigate(link);
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ContatoBuscaComponent.prototype, "busca", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], ContatoBuscaComponent.prototype, "buscaChange", void 0);
ContatoBuscaComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'contato-busca',
        templateUrl: 'contato-busca.component.html',
        styles: [`
            cursor-pointer:hover {
                cursor: pointer;
            }
        `]
    }),
    __metadata("design:paramtypes", [contato_service_1.ContatoService,
        router_1.Router])
], ContatoBuscaComponent);
exports.ContatoBuscaComponent = ContatoBuscaComponent;
