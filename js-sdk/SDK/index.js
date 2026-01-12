/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("TestSDK", [], factory);
	else if(typeof exports === 'object')
		exports["TestSDK"] = factory();
	else
		root["TestSDK"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/TestSDK.js"
/*!************************!*\
  !*** ./src/TestSDK.js ***!
  \************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass TestSDK {\r\n  #secretVar = 'secret';\r\n\r\n  constructor() {\r\n    this.version = 'v1.0.0';\r\n    this.created = false;\r\n    this.isOpen = false;\r\n  }\r\n\r\n  create() {\r\n    this.created = true;\r\n    console.log('>>>> create');\r\n  }\r\n\r\n  open() {\r\n    if (!this.created) return console.log('[ERROR] Please call create() first.');\r\n\r\n    this.isOpen = true;\r\n    console.log('>>>> open');\r\n  }\r\n\r\n  getVersion() {\r\n    return this.version;\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TestSDK);\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvVGVzdFNESy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vVGVzdFNESy8uL3NyYy9UZXN0U0RLLmpzPzkyODMiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgVGVzdFNESyB7XHJcbiAgI3NlY3JldFZhciA9ICdzZWNyZXQnO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMudmVyc2lvbiA9ICd2MS4wLjAnO1xyXG4gICAgdGhpcy5jcmVhdGVkID0gZmFsc2U7XHJcbiAgICB0aGlzLmlzT3BlbiA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlKCkge1xyXG4gICAgdGhpcy5jcmVhdGVkID0gdHJ1ZTtcclxuICAgIGNvbnNvbGUubG9nKCc+Pj4+IGNyZWF0ZScpO1xyXG4gIH1cclxuXHJcbiAgb3BlbigpIHtcclxuICAgIGlmICghdGhpcy5jcmVhdGVkKSByZXR1cm4gY29uc29sZS5sb2coJ1tFUlJPUl0gUGxlYXNlIGNhbGwgY3JlYXRlKCkgZmlyc3QuJyk7XHJcblxyXG4gICAgdGhpcy5pc09wZW4gPSB0cnVlO1xyXG4gICAgY29uc29sZS5sb2coJz4+Pj4gb3BlbicpO1xyXG4gIH1cclxuXHJcbiAgZ2V0VmVyc2lvbigpIHtcclxuICAgIHJldHVybiB0aGlzLnZlcnNpb247XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUZXN0U0RLO1xyXG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/TestSDK.js\n\n}");

/***/ },

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   TestSDK: () => (/* binding */ testsdk)\n/* harmony export */ });\n/* harmony import */ var _TestSDK__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TestSDK */ \"./src/TestSDK.js\");\n\r\nconst testsdk = new _TestSDK__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9UZXN0U0RLLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRlc3RTREsgZnJvbSAnLi9UZXN0U0RLJztcclxuY29uc3QgdGVzdHNkayA9IG5ldyBUZXN0U0RLKCk7XHJcbmV4cG9ydCB7IHRlc3RzZGsgYXMgVGVzdFNESyB9O1xyXG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Check if module exists (development only)
/******/ 		if (__webpack_modules__[moduleId] === undefined) {
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	__webpack_exports__ = __webpack_exports__.TestSDK;
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});