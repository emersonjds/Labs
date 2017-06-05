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
var http_1 = require("@angular/http");
var core_1 = require("@angular/core");
var FotoService = (function () {
    function FotoService(http) {
        this.url = 'v1/fotos';
        this.http = http;
        this.headers = new http_1.Headers();
        this.headers.append('Content-Type', 'application/json');
    }
    FotoService.prototype.cadastra = function (foto) {
        if (foto._id) {
            return this.http
                .put(this.url + '/' + foto._id, JSON.stringify(foto), { headers: this.headers });
        }
        else {
            return this.http
                .post(this.url, JSON.stringify(foto), { headers: this.headers });
        }
    };
    FotoService.prototype.lista = function () {
        return this.http
            .get(this.url)
            .map(function (res) { return res.json(); });
    };
    FotoService.prototype.remove = function (foto) {
        return this.http.delete(this.url + '/' + foto._id);
    };
    FotoService.prototype.buscaPorId = function (id) {
        return this.http
            .get(this.url + '/' + id)
            .map(function (res) { return res.json(); });
    };
    return FotoService;
}());
FotoService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], FotoService);
exports.FotoService = FotoService;
//# sourceMappingURL=foto.service.js.map