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

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Scrolla = Scrolla;

	var _windowPosition = __webpack_require__(1);

	var _scrollTo = __webpack_require__(2);

	function Scrolla() {
	    var scrollAmount = arguments.length <= 0 || arguments[0] === undefined ? 20 : arguments[0];

	    function getScrollAmount(_scrollAmount, yStart, yStop) {
	        return yStop > yStart ? -Math.abs(_scrollAmount) : +Math.abs(_scrollAmount);
	    }

	    return function scrolling(selector) {
	        var updateScrollAmount = arguments.length <= 1 || arguments[1] === undefined ? scrollAmount : arguments[1];

	        var yStop = (0, _windowPosition.findPosition)(selector).top;
	        var yStart = window.pageYOffset;
	        scrollAmount = getScrollAmount(updateScrollAmount, yStart, yStop);
	        (0, _scrollTo.windowScroll)({ yStart: yStart, yStop: yStop, scrollAmount: scrollAmount });
	    };
	}

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.findPosition = findPosition;
	function findPosition(el) {
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
	function windowScroll(data) {
	    function scrollHere() {
	        yStart -= scrollAmount;
	        window.scrollTo(0, yStart);
	    }
	    var yStart = data.yStart;
	    var yStop = data.yStop;
	    var scrollAmount = data.scrollAmount;

	    var timer = setInterval(function () {
	        if (scrollAmount > 0 && yStart <= yStop || scrollAmount < 0 && yStart >= yStop) {
	            clearInterval(timer);
	        } else {
	            scrollHere(yStart, scrollAmount, yStop);
	        }
	    }, 5);
	}

/***/ }
/******/ ]);