module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/pokemon.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/pokemon.js":
/*!**************************!*\
  !*** ./pages/pokemon.js ***!
  \**************************/
/*! exports provided: getstaticProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getstaticProps\", function() { return getstaticProps; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nvar _jsxFileName = \"/Users/vix/src/github.com/Shopify/my-next-project/pages/pokemon.js\";\n\nfunction Pokemon({\n  pokemon\n}) {\n  console.log(pokemon);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: \"welcome, brad\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 4,\n    columnNumber: 3\n  }, this);\n}\n\nasync function getstaticProps() {\n  const res = await fetch('https://pokeapi.co/api/v2/pokemon/charmander');\n  const pokemon = await res.json();\n\n  if (!data) {\n    return {\n      notFound: true\n    };\n  }\n\n  return {\n    props: {\n      pokemon\n    }\n  };\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Pokemon);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wb2tlbW9uLmpzP2Y2YmIiXSwibmFtZXMiOlsiUG9rZW1vbiIsInBva2Vtb24iLCJjb25zb2xlIiwibG9nIiwiZ2V0c3RhdGljUHJvcHMiLCJyZXMiLCJmZXRjaCIsImpzb24iLCJkYXRhIiwibm90Rm91bmQiLCJwcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLFNBQVNBLE9BQVQsQ0FBaUI7QUFBRUM7QUFBRixDQUFqQixFQUE2QjtBQUMzQkMsU0FBTyxDQUFDQyxHQUFSLENBQVlGLE9BQVo7QUFDRixzQkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBS0M7O0FBRU0sZUFBZUcsY0FBZixHQUFnQztBQUNyQyxRQUFNQyxHQUFHLEdBQUcsTUFBTUMsS0FBSyxDQUFDLDhDQUFELENBQXZCO0FBQ0EsUUFBTUwsT0FBTyxHQUFHLE1BQU1JLEdBQUcsQ0FBQ0UsSUFBSixFQUF0Qjs7QUFFQSxNQUFJLENBQUNDLElBQUwsRUFBVztBQUNULFdBQU87QUFDTEMsY0FBUSxFQUFFO0FBREwsS0FBUDtBQUdEOztBQUVELFNBQU87QUFDTEMsU0FBSyxFQUFFO0FBQ0xUO0FBREs7QUFERixHQUFQO0FBS0Q7QUFFY0Qsc0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9wb2tlbW9uLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gUG9rZW1vbih7IHBva2Vtb24gfSl7XG4gIGNvbnNvbGUubG9nKHBva2Vtb24pO1xucmV0dXJuIChcbiAgPGRpdj5cbiAgICB3ZWxjb21lLCBicmFkXG4gIDwvZGl2PlxuKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0c3RhdGljUHJvcHMoKSB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwczovL3Bva2VhcGkuY28vYXBpL3YyL3Bva2Vtb24vY2hhcm1hbmRlcicpXG4gIGNvbnN0IHBva2Vtb24gPSBhd2FpdCByZXMuanNvbigpXG5cbiAgaWYgKCFkYXRhKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5vdEZvdW5kOiB0cnVlLFxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHBva2Vtb25cbiAgICB9LFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBva2Vtb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/pokemon.js\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });