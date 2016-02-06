(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Scrolla = Scrolla;
	exports.getElementPosition = getElementPosition;
	exports.getWindowPosition = getWindowPosition;
	exports.getScrollAmount = getScrollAmount;
	exports.scrolltoX = scrolltoX;
	exports.scrolltoY = scrolltoY;

	var _getPosition = __webpack_require__(1);

	var _windowScroll = __webpack_require__(2);

	function Scrolla(selector) {
	    var scrollAmount = arguments.length <= 1 || arguments[1] === undefined ? 10 : arguments[1];

	    var _getWindowPosition = getWindowPosition();

	    var winX = _getWindowPosition.winX;
	    var winY = _getWindowPosition.winY;

	    var _getElementPosition = getElementPosition(selector);

	    var elX = _getElementPosition.elX;
	    var elY = _getElementPosition.elY;

	    (0, _windowScroll.windowScroll)(winX, elX, getScrollAmount(winX, elX, scrollAmount), scrolltoX);
	    (0, _windowScroll.windowScroll)(winY, elY, getScrollAmount(winY, elY, scrollAmount), scrolltoY);
	    return { startX: winX, stopX: elX, startY: winY, stopY: elY };
	}

	function getElementPosition(selector) {
	    var elX = (0, _getPosition.getPosition)(selector).left;
	    var elY = (0, _getPosition.getPosition)(selector).top;
	    return { elX: elX, elY: elY };
	}

	function getWindowPosition() {
	    var winX = window.pageXOffset;
	    var winY = window.pageYOffset;
	    return { winX: winX, winY: winY };
	}

	function getScrollAmount(start, stop, scrollAmount) {
	    return stop > start ? -Math.abs(scrollAmount) : +Math.abs(scrollAmount);
	}

	function scrolltoX(start) {
	    window.scrollTo(start, getWindowPosition().winY);
	}

	function scrolltoY(start) {
	    window.scrollTo(getWindowPosition().winX, start);
	}

/***/ },
/* 1 */
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
/* 2 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.windowScroll = windowScroll;
	exports.rafSupport = rafSupport;
	function windowScroll(start, stop, amount, scroll) {
	    function scrollHere() {
	        start -= amount;
	        scroll(start);
	    }
	    var timer = setInterval(function () {
	        if (amount > 0 && start <= stop || amount < 0 && start >= stop) {
	            clearInterval(timer);
	        } else {
	            if (rafSupport()) {
	                requestAnimationFrame(scrollHere);
	            } else {
	                scrollHere();
	            }
	        }
	    }, 5);
	}

	function rafSupport() {
	    return window.requestAnimationFrame;
	}

/***/ }
/******/ ])
});
;