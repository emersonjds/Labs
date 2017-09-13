"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./utils/rxjs-extensions");
const core_1 = require("@angular/core");
const platform_browser_1 = require("@angular/platform-browser");
const app_routing_module_1 = require("./app-routing.module");
const http_1 = require("@angular/http");
const angular_in_memory_web_api_1 = require("angular-in-memory-web-api"); //emulate an api
const in_memory_data_service_1 = require("./in-memory-data.service");
const dialog_service_1 = require("./dialog.service");
const app_component_1 = require("./app.component");
const contatos_module_1 = require("./contatos/contatos.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            app_routing_module_1.AppRouteModule,
            contatos_module_1.ContatosModule,
            http_1.HttpModule,
            angular_in_memory_web_api_1.InMemoryWebApiModule.forRoot(in_memory_data_service_1.InMemoryDataService)
        ],
        declarations: [app_component_1.AppComponent],
        bootstrap: [app_component_1.AppComponent],
        providers: [
            dialog_service_1.DialogService
        ]
    })
], AppModule);
exports.AppModule = AppModule;
