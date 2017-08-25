"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var app_routing_module_1 = require("./app-routing.module");
var platform_browser_1 = require("@angular/platform-browser");
var contatos_module_1 = require("./contatos/contatos.module");
var app_component_1 = require("./app.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            contatos_module_1.ContatosModule,
            app_routing_module_1.AppRouteModule
        ],
        declarations: [app_component_1.AppComponent],
        bootstrap: [app_component_1.AppComponent],
        exports: [
            router_1.RouterModule
        ]
    })
], AppModule);
exports.AppModule = AppModule;
