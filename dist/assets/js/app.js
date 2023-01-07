/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/***/ (function() {

eval("// open mobile menu\r\n\r\nconst   menu = document.querySelector(\".menu\"),\r\n        button = document.querySelector(\".header__mobile\");\r\n\r\nbutton.addEventListener(\"click\", () =>{\r\n    if (menu.classList.toggle(\"active\")){\r\n        menu.classList.add('active');\r\n        // body.classList.add('noscroll');\r\n    }else{\r\n        menu.classList.remove('active');\r\n        // body.classList.remove('noscroll');\r\n    }\r\n})\r\n\r\n\r\n// Open block about \r\n\r\nconst   buttonOpen = document.querySelectorAll(\".button__open\");\r\n\r\nbuttonOpen.forEach(elem => {\r\n    elem.addEventListener(\"click\", () => {\r\n            console.log( );\r\n            if (elem.classList.toggle('active')){\r\n                elem.classList.add('active')\r\n                elem.parentElement.parentElement.classList.add('active')\r\n            }\r\n            else {\r\n                elem.classList.remove('active')\r\n                elem.parentElement.parentElement.classList.remove('active')\r\n            }\r\n        }\r\n    )\r\n});\r\n\r\n\r\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/app.js?");

/***/ }),

/***/ "./src/assets/js/file2.js":
/*!********************************!*\
  !*** ./src/assets/js/file2.js ***!
  \********************************/
/***/ (function() {

eval("console.log('file 2');\r\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/file2.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_modules__["./src/assets/js/app.js"]();
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/assets/js/file2.js"]();
/******/ 	
/******/ })()
;