/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/build/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _getPositionTest = __webpack_require__(4);

	(0, _getPositionTest.getPositionTests)();

/***/ },
/* 1 */,
/* 2 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.getPosition = getPosition;
	function getPosition(el) {
	    el = el instanceof HTMLElement ? el : document.querySelector(el);
	    var pos = el.getBoundingClientRect(),
	        top = pos.top + (window.scrollY || window.pageYOffset),
	        left = pos.left + (window.scrollX || window.pageXOffset);
	    return { top: top, left: left };
	}

/***/ },
/* 3 */,
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.getPositionTests = getPositionTests;

	var _getPosition = __webpack_require__(2);

	var _testUtils = __webpack_require__(5);

	function getPositionTests() {

	    describe("Get Position function tests", function () {

	        var testElement1, testElement2, testElement3;

	        describe("Un-nested element positions return correctly", function () {
	            beforeEach(function () {
	                testElement1 = (0, _testUtils.createTestElement)();
	            });
	            it("Element Y position is returned correctly", function () {
	                (0, _testUtils.insertElement)(testElement1, "300px");
	                expect((0, _getPosition.getPosition)(testElement1).top).toBe(300);
	            });
	            it("Element X position is returned correctly", function () {
	                (0, _testUtils.insertElement)(testElement1, 0, "400px");
	                expect((0, _getPosition.getPosition)(testElement1).left).toBe(400);
	            });
	            afterEach(function () {
	                (0, _testUtils.removeElement)(testElement1);
	            });
	        });

	        describe("Nested element positions return correctly", function () {
	            beforeEach(function () {
	                testElement1 = (0, _testUtils.createTestElement)("500px", "1500px");
	                testElement2 = (0, _testUtils.createTestElement)();
	            });
	            it("Element Y position is returned correctly", function () {
	                (0, _testUtils.insertElement)(testElement1, "300px");
	                (0, _testUtils.insertElement)(testElement2, "500px", 0, testElement1);
	                expect((0, _getPosition.getPosition)(testElement1).top).toBe(300);
	                expect((0, _getPosition.getPosition)(testElement2).top).toBe(800);
	            });
	            it("Element X position is returned correctly", function () {
	                (0, _testUtils.insertElement)(testElement1, 0, "300px");
	                (0, _testUtils.insertElement)(testElement2, 0, "500px", testElement1);
	                expect((0, _getPosition.getPosition)(testElement1).left).toBe(300);
	                expect((0, _getPosition.getPosition)(testElement2).left).toBe(800);
	            });
	            afterEach(function () {
	                (0, _testUtils.removeElement)(testElement1);
	                (0, _testUtils.removeElement)(testElement2);
	            });
	        });

	        describe("Deep nested element positions return correctly", function () {
	            beforeEach(function () {
	                testElement1 = (0, _testUtils.createTestElement)("1000px", "2500px");
	                testElement2 = (0, _testUtils.createTestElement)("750px", "1500px");
	                testElement3 = (0, _testUtils.createTestElement)();
	            });
	            it("Element Y position is returned correctly", function () {
	                (0, _testUtils.insertElement)(testElement1, "100px");
	                (0, _testUtils.insertElement)(testElement2, "800px", 0, testElement1);
	                (0, _testUtils.insertElement)(testElement3, "800px", 0, testElement2);
	                expect((0, _getPosition.getPosition)(testElement1).top).toBe(100);
	                expect((0, _getPosition.getPosition)(testElement2).top).toBe(900);
	                expect((0, _getPosition.getPosition)(testElement3).top).toBe(1700);
	            });
	            it("Element X position is returned correctly", function () {
	                (0, _testUtils.insertElement)(testElement1, 0, "100px");
	                (0, _testUtils.insertElement)(testElement2, 0, "300px", testElement1);
	                (0, _testUtils.insertElement)(testElement3, 0, "400px", testElement2);
	                expect((0, _getPosition.getPosition)(testElement1).left).toBe(100);
	                expect((0, _getPosition.getPosition)(testElement2).left).toBe(400);
	                expect((0, _getPosition.getPosition)(testElement3).left).toBe(800);
	            });
	            afterEach(function () {
	                (0, _testUtils.removeElement)(testElement1);
	                (0, _testUtils.removeElement)(testElement2);
	                (0, _testUtils.removeElement)(testElement3);
	            });
	        });
	    });
	}

/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.createTestElement = createTestElement;
	exports.insertElement = insertElement;
	exports.removeElement = removeElement;
	function createTestElement() {
	    var width = arguments.length <= 0 || arguments[0] === undefined ? "200px" : arguments[0];
	    var height = arguments.length <= 1 || arguments[1] === undefined ? "200px" : arguments[1];

	    var el = document.createElement("div");
	    el.style.position = "absolute";
	    el.style.width = width;
	    el.style.height = height;
	    return el;
	}

	function insertElement(el) {
	    var top = arguments.length <= 1 || arguments[1] === undefined ? "0px" : arguments[1];
	    var left = arguments.length <= 2 || arguments[2] === undefined ? "0px" : arguments[2];
	    var parent = arguments.length <= 3 || arguments[3] === undefined ? document.body : arguments[3];

	    el.style.top = top;
	    el.style.left = left;
	    parent.appendChild(el);
	}

	function removeElement(el) {
	    el.parentNode.removeChild(el);
	}

/***/ }
/******/ ]);