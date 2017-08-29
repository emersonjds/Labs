"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var contatos_mock_1 = require("./contatos-mock");
var ContatoListaComponent = /** @class */ (function () {
    function ContatoListaComponent() {
        this.contatos = contatos_mock_1.CONTATOS;
    }
    ContatoListaComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'contatos-lista',
            templateUrl: './contato-lista.component.html'
        })
    ], ContatoListaComponent);
    return ContatoListaComponent;
}());
exports.ContatoListaComponent = ContatoListaComponent;
