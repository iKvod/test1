/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./server/server.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: name, version, description, main, scripts, author, license, devDependencies, dependencies, default */
/***/ (function(module) {

eval("module.exports = {\"name\":\"node\",\"version\":\"1.0.0\",\"description\":\"\",\"main\":\"index.js\",\"scripts\":{\"test\":\"echo \\\"Error: no test specified\\\" && exit 1\",\"dev\":\"webpack --mode development\",\"build\":\"webpack --mode development --config webpack.config.js\",\"start\":\"npm run build && node ./dist/server.js\"},\"author\":\"\",\"license\":\"ISC\",\"devDependencies\":{\"@types/body-parser\":\"^1.17.0\",\"@types/dotenv\":\"^4.0.3\",\"@types/express\":\"^4.16.0\",\"ts-loader\":\"^4.4.2\",\"ts-node\":\"^7.0.0\",\"tslint\":\"^5.10.0\",\"typescript\":\"^2.9.2\",\"webpack\":\"^4.16.0\",\"webpack-cli\":\"^3.0.8\"},\"dependencies\":{\"body-parser\":\"^1.18.3\",\"dotenv\":\"^6.0.0\",\"express\":\"^4.16.3\"}};\n\n//# sourceURL=webpack:///./package.json?");

/***/ }),

/***/ "./server/controllers/home.controller.ts":
/*!***********************************************!*\
  !*** ./server/controllers/home.controller.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nlet pkg = __webpack_require__(/*! ./server/controllers/../../package.json */ \"./package.json\");\nexports.index = (req, res) => {\n    res.json({\n        message: 'Welcome to API sekeleton.',\n        version: pkg.version,\n    });\n};\n\n\n//# sourceURL=webpack:///./server/controllers/home.controller.ts?");

/***/ }),

/***/ "./server/controllers/main.controller.ts":
/*!***********************************************!*\
  !*** ./server/controllers/main.controller.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.info = (req, res) => {\n    res.json({\n        message: 'Hi info',\n    });\n};\n\n\n//# sourceURL=webpack:///./server/controllers/main.controller.ts?");

/***/ }),

/***/ "./server/server.ts":
/*!**************************!*\
  !*** ./server/server.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst express = __webpack_require__(/*! express */ \"express\");\nconst dotenv = __webpack_require__(/*! dotenv */ \"dotenv\");\nconst bodyParser = __webpack_require__(/*! body-parser */ \"body-parser\");\nconst homeController = __webpack_require__(/*! ./controllers/home.controller */ \"./server/controllers/home.controller.ts\");\nconst mainController = __webpack_require__(/*! ./controllers/main.controller */ \"./server/controllers/main.controller.ts\");\ndotenv.config();\nconst app = express();\napp.set('port', process.env.PORT || 3000);\napp.use(bodyParser.json());\napp.use(bodyParser.urlencoded({ extended: true }));\napp.get('/', homeController.index);\napp.get('/info', mainController.info);\napp.listen(app.get('port'), () => {\n    console.log(('App is running at http://localhost:%d in %s mode'), app.get('port'), app.get('env'));\n    console.log('Press CTRL-C to stop\\n');\n});\nmodule.exports = app;\n\n\n//# sourceURL=webpack:///./server/server.ts?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"dotenv\");\n\n//# sourceURL=webpack:///external_%22dotenv%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ })

/******/ });