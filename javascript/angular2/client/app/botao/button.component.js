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
var core_1 = require("@angular/core");
var ButtonComponent = (function () {
    function ButtonComponent() {
        this.nome = 'Ok';
        this.estilo = 'btn-default';
        this.tipo = 'button';
        this.desabilitado = false;
        this.acao = new core_1.EventEmitter();
        this.confirmacao = true;
    }
    ButtonComponent.prototype.executaAcao = function () {
        if (confirm('Deseja realmente excluir !?')) {
            this.acao.emit(null);
        }
    };
    return ButtonComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ButtonComponent.prototype, "nome", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ButtonComponent.prototype, "estilo", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ButtonComponent.prototype, "tipo", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], ButtonComponent.prototype, "desabilitado", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ButtonComponent.prototype, "acao", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ButtonComponent.prototype, "confirmacao", void 0);
ButtonComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'botao',
        templateUrl: './botao.component.html'
    })
], ButtonComponent);
exports.ButtonComponent = ButtonComponent;
//# sourceMappingURL=button.component.js.map