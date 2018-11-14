/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

	'use strict';
	
	var listFilter = '',
	    listElement = document.getElementById('pokeList'),
	    inputElement = document.getElementById('pokeFilter'),
	    pokeballElement = document.getElementById('pokeballBack');
	
	inputElement.addEventListener('keyup', function () {
	  listFilter = this.value;
	  setList();
	});
	
	window.addEventListener('scroll', function () {
	  var rotation = 'translateY(-50%) rotateZ' + window.scrollY / 15 + 'deg)';
	  pokeballElement.style.transform = rotation;
	});
	
	function setList() {
	  PokeService.listAll(function (pkmList) {
	    var list = filterLlist(pkmList);
	    var template = ListService.createList(list);
	    listElement.innerHTML = template;
	  });
	}
	
	function filterLlist(pkmList) {
	  return pkmList.filter(function (pkm) {
	    return pkm.name.indexOf(listFilter.toLocaleLowerCase) !== -1;
	  });
	}
	
	setList();

/***/ })
/******/ ]);
//# sourceMappingURL=app.js.map