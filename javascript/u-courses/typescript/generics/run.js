"use strict";
exports.__esModule = true;
var cavalo_1 = require("./../classes/cavalo");
var animal_1 = require("./../classes/animal");
var dao_1 = require("./dao");
var dao = new dao_1.Dao();
var animal = new animal_1.Animal('Rex');
var cavalo = new cavalo_1.Cavalo('Pocoto');
dao.insert(cavalo);
