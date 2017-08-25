"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var contato_detalhe_component_1 = require("./contato-detalhe.component");
var contatos_lista_component_1 = require("./contatos-lista.component");
var contatoRoute = [
    { path: '/contato', component: contatos_lista_component_1.ContatoListaComponent },
    { path: '/contato/save', component: contato_detalhe_component_1.DetalheContato },
];
core_1.NgModule({
    imports: [
        router_1.RouterModule.forChild(contatoRoute)
    ]
});
var ContatoRouteModule = (function () {
    function ContatoRouteModule() {
    }
    return ContatoRouteModule;
}());
exports.ContatoRouteModule = ContatoRouteModule;
