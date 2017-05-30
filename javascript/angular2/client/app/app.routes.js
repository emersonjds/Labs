"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var cadastro_component_1 = require("./cadastro/cadastro.component");
var listagem_component_1 = require("./listagem/listagem.component");
var appRoutes = [
    { path: '', component: listagem_component_1.ListagemComponent },
    { path: 'cadastro', component: cadastro_component_1.CadastroComponent },
    { path: '**', component: listagem_component_1.ListagemComponent } //qualquer valor diferente das rotas direciona para a padrao
];
//modulo que compila as rotas para que o angular entenda 
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routes.js.map