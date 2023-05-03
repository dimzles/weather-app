/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\n:root {\n  --main-font: 'Roboto', sans-serif;\n  --primary: #121212;\n  --secondary: #1d1d1d;\n  --accent: rgb(109, 1, 197);\n  --wind-degree: 0deg;\n}\n\n\nbody {\n  height: 100vh;\n}\n\n.fa-solid {\n  pointer-events: none;\n}\n\n.container {\n  display: grid;\n  min-height: 100%;\n  grid-template-rows: auto 1fr auto;\n  background-color: var(--primary);\n}\n\nheader {\n  display: flex;\n  padding: 1rem 0;\n  background-color: var(--secondary);\n}\n\n.header-txt {\n  margin: auto;\n  font-family: var(--main-font);\n  color: white;\n}\n\nmain {\n  display: grid;\n  min-height: 100%;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-template-rows: 10% 50% 40%;\n  padding: 1rem;\n}\n\n.form-container {\n  grid-area: 1 / 2 / 2 / 3;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#location-input {\n  padding: 8px;\n  border-radius: 8px;\n  border: none;\n}\n\n#search {\n  border-radius: 8px;\n  font-size: 1rem;\n  padding: 8px;\n  border: none;\n  color: white;\n  background-color: var(--accent);\n  cursor: pointer;\n}\n\n#hourly-card {\n  grid-area: 2 / 1 / 3 / 2;\n  display: grid;\n  margin: 1rem;\n  padding: 1rem;\n  background-color: var(--secondary);\n  border-radius: 8px;\n  color: white;\n  font-family: var(--main-font);\n  grid-template-rows: repeat(3, auto)\n}\n\n.hourly-h1 {\n  margin: auto;\n}\n\n#hour-card-container {\n  display: grid;\n  grid-template-rows: repeat(4, 1fr);\n  grid-template-columns: 1fr 1fr;\n  gap: 20px;\n}\n\n.hour-card {\n  display: grid;\n  grid-template-columns: auto auto auto;\n  align-items: center;\n  justify-items: center;\n}\n\n.hour-time, .hour-img, .hour-temp {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.hour-img {\n  width: 2rem;\n}\n\n.hour-btn-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 16px;\n}\n\n.hour-btn {\n  border-radius: 8px;\n  font-size: 1rem;\n  padding: 2px;\n  width: 32px;\n  border: none;\n  cursor: pointer;\n  background-color: var(--accent);\n  color: white;\n}\n\n#location-card {\n  grid-area: 2 / 2 / 3 / 3;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  margin: 1rem;\n  padding: 1rem;\n  border-radius: 8px;\n  background-color: var(--secondary);\n}\n\n.location-data, .temperature-data, #time-data {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  color: white;\n  font-family: var(--main-font);\n  gap: 8px;\n}\n\n#time-data {\n  font-size: 1.5rem;\n}\n\n#wind-card {\n  grid-area: 2 / 3 / 3 / 4;\n  display: grid;\n  grid-template-rows: 15% 70% 15%;\n  margin: 1rem;\n  padding: 1rem;\n  border-radius: 8px;\n  background-color: var(--secondary);\n  font-family: var(--main-font);\n  color: white;\n}\n\n.wind-item {\n  margin: auto;\n}\n\n#wind-speed {\n  font-size: 2rem;\n  font-weight: bold;\n}\n\n.fa-arrow-up-long {\n  font-size: 8rem;\n  transform: rotate(var(--wind-degree));\n  transition: transform 400ms ease-in-out\n}\n\n#forecast-card {\n  grid-area: 3 / 1 / 4 / 4;\n  display: grid;\n  grid-template-rows: 15% 85%;\n  grid-template-columns: 1fr 1fr 1fr;\n  margin: 1rem;\n  padding: 1rem;\n  background-color: var(--secondary);\n  border-radius: 8px;\n  font-family: var(--main-font);\n  color: white;\n}\n\n.forecast-h1 {\n  grid-area: 1 / 1 / 2 / 4;\n  margin: auto;\n}\n\n.forecast-card {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n}\n\nfooter {\n  display: flex;\n  padding: 8px 0;\n  justify-content: center;\n  background-color: var(--secondary);\n  font-family: var(--main-font);\n  color: white;\n}\n\n.footer-text {\n  display: flex;\n  gap: 8px;\n  align-items: center;\n}\n\n.footer-link {\n  text-decoration: none;\n  color: white;\n  transition: transform 0.3s ease-in-out\n}\n\n.footer-link:hover {\n  transform: rotate(360deg) scale(1.2);\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":";;AAEA;;;EAGE,sBAAsB;EACtB,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,iCAAiC;EACjC,kBAAkB;EAClB,oBAAoB;EACpB,0BAA0B;EAC1B,mBAAmB;AACrB;;;AAGA;EACE,aAAa;AACf;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,aAAa;EACb,gBAAgB;EAChB,iCAAiC;EACjC,gCAAgC;AAClC;;AAEA;EACE,aAAa;EACb,eAAe;EACf,kCAAkC;AACpC;;AAEA;EACE,YAAY;EACZ,6BAA6B;EAC7B,YAAY;AACd;;AAEA;EACE,aAAa;EACb,gBAAgB;EAChB,kCAAkC;EAClC,+BAA+B;EAC/B,aAAa;AACf;;AAEA;EACE,wBAAwB;EACxB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,kBAAkB;EAClB,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,eAAe;EACf,YAAY;EACZ,YAAY;EACZ,YAAY;EACZ,+BAA+B;EAC/B,eAAe;AACjB;;AAEA;EACE,wBAAwB;EACxB,aAAa;EACb,YAAY;EACZ,aAAa;EACb,kCAAkC;EAClC,kBAAkB;EAClB,YAAY;EACZ,6BAA6B;EAC7B;AACF;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,aAAa;EACb,kCAAkC;EAClC,8BAA8B;EAC9B,SAAS;AACX;;AAEA;EACE,aAAa;EACb,qCAAqC;EACrC,mBAAmB;EACnB,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,kBAAkB;EAClB,eAAe;EACf,YAAY;EACZ,WAAW;EACX,YAAY;EACZ,eAAe;EACf,+BAA+B;EAC/B,YAAY;AACd;;AAEA;EACE,wBAAwB;EACxB,aAAa;EACb,sBAAsB;EACtB,8BAA8B;EAC9B,YAAY;EACZ,aAAa;EACb,kBAAkB;EAClB,kCAAkC;AACpC;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,YAAY;EACZ,6BAA6B;EAC7B,QAAQ;AACV;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,wBAAwB;EACxB,aAAa;EACb,+BAA+B;EAC/B,YAAY;EACZ,aAAa;EACb,kBAAkB;EAClB,kCAAkC;EAClC,6BAA6B;EAC7B,YAAY;AACd;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,eAAe;EACf,qCAAqC;EACrC;AACF;;AAEA;EACE,wBAAwB;EACxB,aAAa;EACb,2BAA2B;EAC3B,kCAAkC;EAClC,YAAY;EACZ,aAAa;EACb,kCAAkC;EAClC,kBAAkB;EAClB,6BAA6B;EAC7B,YAAY;AACd;;AAEA;EACE,wBAAwB;EACxB,YAAY;AACd;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,6BAA6B;EAC7B,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,cAAc;EACd,uBAAuB;EACvB,kCAAkC;EAClC,6BAA6B;EAC7B,YAAY;AACd;;AAEA;EACE,aAAa;EACb,QAAQ;EACR,mBAAmB;AACrB;;AAEA;EACE,qBAAqB;EACrB,YAAY;EACZ;AACF;;AAEA;EACE,oCAAoC;AACtC","sourcesContent":["\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\n:root {\n  --main-font: 'Roboto', sans-serif;\n  --primary: #121212;\n  --secondary: #1d1d1d;\n  --accent: rgb(109, 1, 197);\n  --wind-degree: 0deg;\n}\n\n\nbody {\n  height: 100vh;\n}\n\n.fa-solid {\n  pointer-events: none;\n}\n\n.container {\n  display: grid;\n  min-height: 100%;\n  grid-template-rows: auto 1fr auto;\n  background-color: var(--primary);\n}\n\nheader {\n  display: flex;\n  padding: 1rem 0;\n  background-color: var(--secondary);\n}\n\n.header-txt {\n  margin: auto;\n  font-family: var(--main-font);\n  color: white;\n}\n\nmain {\n  display: grid;\n  min-height: 100%;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-template-rows: 10% 50% 40%;\n  padding: 1rem;\n}\n\n.form-container {\n  grid-area: 1 / 2 / 2 / 3;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#location-input {\n  padding: 8px;\n  border-radius: 8px;\n  border: none;\n}\n\n#search {\n  border-radius: 8px;\n  font-size: 1rem;\n  padding: 8px;\n  border: none;\n  color: white;\n  background-color: var(--accent);\n  cursor: pointer;\n}\n\n#hourly-card {\n  grid-area: 2 / 1 / 3 / 2;\n  display: grid;\n  margin: 1rem;\n  padding: 1rem;\n  background-color: var(--secondary);\n  border-radius: 8px;\n  color: white;\n  font-family: var(--main-font);\n  grid-template-rows: repeat(3, auto)\n}\n\n.hourly-h1 {\n  margin: auto;\n}\n\n#hour-card-container {\n  display: grid;\n  grid-template-rows: repeat(4, 1fr);\n  grid-template-columns: 1fr 1fr;\n  gap: 20px;\n}\n\n.hour-card {\n  display: grid;\n  grid-template-columns: auto auto auto;\n  align-items: center;\n  justify-items: center;\n}\n\n.hour-time, .hour-img, .hour-temp {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.hour-img {\n  width: 2rem;\n}\n\n.hour-btn-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 16px;\n}\n\n.hour-btn {\n  border-radius: 8px;\n  font-size: 1rem;\n  padding: 2px;\n  width: 32px;\n  border: none;\n  cursor: pointer;\n  background-color: var(--accent);\n  color: white;\n}\n\n#location-card {\n  grid-area: 2 / 2 / 3 / 3;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  margin: 1rem;\n  padding: 1rem;\n  border-radius: 8px;\n  background-color: var(--secondary);\n}\n\n.location-data, .temperature-data, #time-data {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  color: white;\n  font-family: var(--main-font);\n  gap: 8px;\n}\n\n#time-data {\n  font-size: 1.5rem;\n}\n\n#wind-card {\n  grid-area: 2 / 3 / 3 / 4;\n  display: grid;\n  grid-template-rows: 15% 70% 15%;\n  margin: 1rem;\n  padding: 1rem;\n  border-radius: 8px;\n  background-color: var(--secondary);\n  font-family: var(--main-font);\n  color: white;\n}\n\n.wind-item {\n  margin: auto;\n}\n\n#wind-speed {\n  font-size: 2rem;\n  font-weight: bold;\n}\n\n.fa-arrow-up-long {\n  font-size: 8rem;\n  transform: rotate(var(--wind-degree));\n  transition: transform 400ms ease-in-out\n}\n\n#forecast-card {\n  grid-area: 3 / 1 / 4 / 4;\n  display: grid;\n  grid-template-rows: 15% 85%;\n  grid-template-columns: 1fr 1fr 1fr;\n  margin: 1rem;\n  padding: 1rem;\n  background-color: var(--secondary);\n  border-radius: 8px;\n  font-family: var(--main-font);\n  color: white;\n}\n\n.forecast-h1 {\n  grid-area: 1 / 1 / 2 / 4;\n  margin: auto;\n}\n\n.forecast-card {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n}\n\nfooter {\n  display: flex;\n  padding: 8px 0;\n  justify-content: center;\n  background-color: var(--secondary);\n  font-family: var(--main-font);\n  color: white;\n}\n\n.footer-text {\n  display: flex;\n  gap: 8px;\n  align-items: center;\n}\n\n.footer-link {\n  text-decoration: none;\n  color: white;\n  transition: transform 0.3s ease-in-out\n}\n\n.footer-link:hover {\n  transform: rotate(360deg) scale(1.2);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/getDay/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/getDay/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getDay)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name getDay
 * @category Weekday Helpers
 * @summary Get the day of the week of the given date.
 *
 * @description
 * Get the day of the week of the given date.
 *
 * @param {Date|Number} date - the given date
 * @returns {0|1|2|3|4|5|6} the day of week, 0 represents Sunday
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Which day of the week is 29 February 2012?
 * const result = getDay(new Date(2012, 1, 29))
 * //=> 3
 */

function getDay(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var day = date.getDay();
  return day;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }


/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || _typeof(argument) === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/displayController.js":
/*!******************************************!*\
  !*** ./src/modules/displayController.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "handleInput": () => (/* binding */ handleInput),
/* harmony export */   "showNextHourlyForecast": () => (/* binding */ showNextHourlyForecast),
/* harmony export */   "showPreviousHourlyForecast": () => (/* binding */ showPreviousHourlyForecast)
/* harmony export */ });
/* harmony import */ var _weather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather */ "./src/modules/weather.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/getDay/index.js");



let globalIndex = 0;
let lastSearchedTerm;

function getWeekdayName(date) {
  const splitDate = date.split("-");

  switch ((0,date_fns__WEBPACK_IMPORTED_MODULE_1__["default"])(new Date(splitDate[0], splitDate[1] - 1, splitDate[2]))) {
    case 0:
      return "Sunday";
      break;
    case 1:
      return "Monday";
      break;
    case 2:
      return "Tuesday";
      break;
    case 3:
      return "Wednesday";
      break;
    case 4:
      return "Thursday";
      break;
    case 5:
      return "Friday";
      break;
    case 6:
      return "Saturday";
      break;
    default:
      break;
  }
}

function showNextHourlyForecast() {
  if (globalIndex === 16) return;
  globalIndex = globalIndex + 8;
  refreshWeatherDisplay();
}

function showPreviousHourlyForecast() {
  if (globalIndex === 0) return;
  globalIndex = globalIndex - 8;
  refreshWeatherDisplay();
}

function setHourlyCard(data) {
  const hourlyCard = document.getElementById("hour-card-container");
  const hourlyForecast = data.forecast.hour;

  hourlyCard.textContent = "";

  for (let i = globalIndex; i < globalIndex + 8; i++) {
    const hourContainer = document.createElement("div");
    const icon = document.createElement("img");
    const time = document.createElement("h3");
    const temperature = document.createElement("h3");

    hourContainer.classList.add("hour-card");

    icon.src = hourlyForecast[i].condition.icon;
    time.textContent = hourlyForecast[i].time.split(" ")[1];
    temperature.textContent = `${hourlyForecast[i].temp_c}°C`;

    icon.classList.add("hour-img");
    time.classList.add("hour-time");
    temperature.classList.add("hour-temp");

    hourContainer.appendChild(time);
    hourContainer.appendChild(icon);
    hourContainer.appendChild(temperature);

    hourlyCard.appendChild(hourContainer);
  }
}

function setLocationCard(data) {
  const cityName = document.getElementById("location");
  const region = document.getElementById("region");
  const condition = document.getElementById("condition");
  const temperature = document.getElementById("temperature-text");
  const feelslike = document.getElementById("feelslike-temp");
  const conditionImg = document.getElementById("condition-img");
  const timeDisplay = document.getElementById("time-data");
  const time = data.location.localtime.split(" ");

  if (time[1].length === 4) time[1] = "0" + time[1];

  cityName.textContent = data.location.name;
  region.textContent = data.location.region;
  condition.textContent = data.current.condition.text;
  temperature.textContent = `${data.current.temperatures.temp_c}°C`;
  feelslike.textContent = `Feels like ${data.current.temperatures.feelsLike_c}°C`;
  conditionImg.src = data.current.condition.icon;
  timeDisplay.textContent = time[1];
}

function setWindCard(data) {
  const windDirection = document.getElementById("wind-dir");
  const windSpeed = document.getElementById("wind-speed");

  windDirection.textContent = "";
  windSpeed.textContent = "";

  windDirection.textContent = data.current.wind.direction;
  windSpeed.textContent = `${data.current.wind.wind_mph} mph`;
  document.documentElement.style.setProperty(
    "--wind-degree",
    `${data.current.wind.wind_degree}deg`
  );
}

function setForecastCard(data) {
  const forecastCard = document.getElementById("forecast-card");
  const forecastH1 = document.createElement("h2");
  const weeklyForecast = data.weekly;

  forecastCard.textContent = "";
  forecastH1.classList.add("forecast-h1");
  forecastH1.textContent = "Forecast";
  forecastCard.appendChild(forecastH1);

  for (let i = 0; i < weeklyForecast.length; i++) {
    const forecastContainer = document.createElement("div");
    const date = document.createElement("h3");
    const conditionImg = document.createElement("img");
    const temperature = document.createElement("p");
    const avgTemperature = document.createElement("p");

    forecastContainer.classList.add("forecast-card");
    date.classList.add("forecast-date");
    temperature.classList.add("forecast-temp");
    avgTemperature.classList.add("forecast-avg-temp");

    switch (i) {
      case 0:
        date.textContent = "Today";
        break;
      case 1:
        date.textContent = "Tomorrow";
        break;
      default:
        date.textContent = getWeekdayName(weeklyForecast[i].date);
        break;
    }

    conditionImg.src = weeklyForecast[i].day.condition.icon;
    temperature.textContent = `${weeklyForecast[i].day.mintemp_c}°C - ${weeklyForecast[i].day.maxtemp_c}°C`;
    avgTemperature.textContent = `Avg: ${weeklyForecast[i].day.avgtemp_c}°C`;

    forecastContainer.appendChild(date);
    forecastContainer.appendChild(conditionImg);
    forecastContainer.appendChild(temperature);
    forecastContainer.appendChild(avgTemperature);

    forecastCard.appendChild(forecastContainer);
  }
}

async function setWeatherInfo(data) {
  await data;
  setLocationCard(data);
  setWindCard(data);
  setHourlyCard(data);
  setForecastCard(data);
}

async function handleInput() {
  const input = document.querySelector("input");

  const data = await (0,_weather__WEBPACK_IMPORTED_MODULE_0__["default"])(input.value);
  lastSearchedTerm = input.value;

  input.value = "";

  setWeatherInfo(data);
}

async function refreshWeatherDisplay() {
  const data = await (0,_weather__WEBPACK_IMPORTED_MODULE_0__["default"])(lastSearchedTerm);

  setWeatherInfo(data);
}




/***/ }),

/***/ "./src/modules/weather.js":
/*!********************************!*\
  !*** ./src/modules/weather.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ fetchWeatherData)
/* harmony export */ });
async function fetchWeatherData(location) {
  if (!location) location = "london";
  const forecastResponse = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=a960293cd53d42bd911182230230904&q=${location}&days=8`
  );

  const forecastData = await forecastResponse.json();

  return formatWeatherData(forecastData);
}

async function formatWeatherData(data) {
  await data;

  const weatherData = {
    location: {
      country: data.location.country,
      name: data.location.name,
      region: data.location.region,
      localtime: data.location.localtime,
    },
    current: {
      condition: {
        text: data.current.condition.text,
        icon: data.current.condition.icon,
      },
      temperatures: {
        temp_c: data.current.temp_c,
        temp_f: data.current.temp_f,
        feelsLike_c: data.current.feelslike_c,
        feelsLike_f: data.current.feelslike_f,
      },
      wind: {
        direction: data.current.wind_dir,
        wind_mph: data.current.wind_mph,
        wind_kph: data.current.wind_kph,
        wind_degree: data.current.wind_degree,
      },
    },
    forecast: {
      astro: {
        is_sun_up: data.forecast.forecastday[0].astro.is_sun_up,
        is_moon_up: data.forecast.forecastday[0].astro.is_moon_up,
        sunrise: data.forecast.forecastday[0].astro.sunrise,
        sunset: data.forecast.forecastday[0].astro.sunset,
      },
      date: data.forecast.forecastday[0].date,
      hour: data.forecast.forecastday[0].hour,
    },
    weekly: data.forecast.forecastday,
  };

  return weatherData;
}


/***/ })

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
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_displayController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/displayController */ "./src/modules/displayController.js");



document.getElementById("search").addEventListener("click", (e) => {
  e.preventDefault();
  (0,_modules_displayController__WEBPACK_IMPORTED_MODULE_1__.handleInput)();
});

document.getElementById("hourly-next").addEventListener("click", (e) => {
  (0,_modules_displayController__WEBPACK_IMPORTED_MODULE_1__.showNextHourlyForecast)();
});

document.getElementById("hourly-prev").addEventListener("click", (e) => {
  (0,_modules_displayController__WEBPACK_IMPORTED_MODULE_1__.showPreviousHourlyForecast)();
});

(0,_modules_displayController__WEBPACK_IMPORTED_MODULE_1__.handleInput)();

})();

/******/ })()
;
//# sourceMappingURL=main.js.map