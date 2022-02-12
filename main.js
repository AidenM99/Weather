/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/background.jpg */ \"./images/background.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\r\\n  --dark-bg: #343a40;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  font-family: 'Montserrat', sans-serif;\\r\\n  margin: 0;\\r\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\r\\n  background-repeat: no-repeat;\\r\\n  background-size: cover;\\r\\n  background-position: center;\\r\\n  color: #ffffff;\\r\\n  min-height: calc(100vh - 1rem);\\r\\n}\\r\\n\\r\\n/*****Header*****/\\r\\nheader {\\r\\n  display: flex;\\r\\n  justify-content: flex-end;\\r\\n  margin: 1rem;\\r\\n}\\r\\n\\r\\n#search {\\r\\n  font-family: 'Montserrat', sans-serif;\\r\\n  border: none;\\r\\n  border-radius: 5px 0 0 5px;\\r\\n  padding: 13px;\\r\\n  background-color: rgba(255, 255, 255, 0.5);\\r\\n  flex: 0.95;\\r\\n  color: #ffffff;\\r\\n  font-weight: bold;\\r\\n  margin: 0;\\r\\n}\\r\\n\\r\\n#search::placeholder {\\r\\n  color: #ffffff;\\r\\n}\\r\\n\\r\\n#search:focus {\\r\\n  outline: none;\\r\\n}\\r\\n\\r\\n.search-container {\\r\\n  display: flex;\\r\\n  max-width: 350px;\\r\\n  min-width: 350px;\\r\\n}\\r\\n\\r\\n.search-button {\\r\\n  border: none;\\r\\n  cursor: pointer;\\r\\n  color: var(--dark-bg);\\r\\n  background-color: #ffffff;\\r\\n  border-radius: 0 5px 5px 0;\\r\\n  font-size: 20px;\\r\\n  padding: 0 13px;\\r\\n  flex: 0.05;\\r\\n  margin: 0;\\r\\n}\\r\\n\\r\\ninput[type='search']::-ms-clear {\\r\\n  display: none;\\r\\n  width: 0;\\r\\n  height: 0;\\r\\n}\\r\\n\\r\\ninput[type='search']::-ms-reveal {\\r\\n  display: none;\\r\\n  width: 0;\\r\\n  height: 0;\\r\\n}\\r\\n\\r\\ninput[type='search']::-webkit-search-decoration,\\r\\ninput[type='search']::-webkit-search-cancel-button,\\r\\ninput[type='search']::-webkit-search-results-button,\\r\\ninput[type='search']::-webkit-search-results-decoration {\\r\\n  display: none;\\r\\n  -webkit-appearance: none;\\r\\n}\\r\\n\\r\\ninput[type='search'],\\r\\nbutton {\\r\\n  -webkit-appearance: none;\\r\\n  -moz-appearance: none;\\r\\n  appearance: none;\\r\\n}\\r\\n\\r\\n/*****Main Section*****/\\r\\n#weather-data {\\r\\n  margin: 6.5% 0 2% 0;\\r\\n  padding: 0 5%;\\r\\n}\\r\\n\\r\\n.weather-data-top {\\r\\n  display: flex;\\r\\n}\\r\\n\\r\\n.weather-data-bottom {\\r\\n  display: flex;\\r\\n}\\r\\n\\r\\n.weather-desc {\\r\\n  font-size: 1.2rem;\\r\\n  margin: 0 0 -0.2rem 0;\\r\\n  padding: 0 0 0 0.1rem;\\r\\n}\\r\\n\\r\\n.location {\\r\\n  font-size: 3.5rem;\\r\\n  margin: 0;\\r\\n}\\r\\n\\r\\n.temperature {\\r\\n  font-size: 8rem;\\r\\n  font-weight: bold;\\r\\n  margin: 0;\\r\\n}\\r\\n\\r\\n.temperature::after {\\r\\n  content: '°C';\\r\\n  font-size: 1.5rem;\\r\\n  vertical-align: 300%;\\r\\n}\\r\\n\\r\\n.feels-like::after {\\r\\n  content: '°C';\\r\\n  font-size: 0.65rem;\\r\\n  vertical-align: 60%;\\r\\n}\\r\\n\\r\\n.condition-info {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-content: center;\\r\\n  margin: 1.875rem 1.25rem 0 1.25rem;\\r\\n  padding: 0 0 0 1.875rem;\\r\\n  border-left: solid 3px #ffffff;\\r\\n  height: 5.625rem;\\r\\n}\\r\\n\\r\\n.condition-info > p {\\r\\n  margin: 0.4375rem 0;\\r\\n  font-weight: bold;\\r\\n}\\r\\n\\r\\n.time {\\r\\n  font-size: 1.2rem;\\r\\n  padding: 0 0 0 0.2rem;\\r\\n  margin: -0.2rem 0 0 0;\\r\\n}\\r\\n\\r\\n.icon-container {\\r\\n  margin: -0.3125rem 0 0 0;\\r\\n}\\r\\n\\r\\n/*****Forecast Section*****/\\r\\n#forecast {\\r\\n  padding: 2% 5%;\\r\\n}\\r\\n\\r\\n.weather-icon {\\r\\n  color: #ffffff;\\r\\n  width: 100%;\\r\\n  height: auto;\\r\\n  padding: 5px 0 0 0;\\r\\n}\\r\\n\\r\\n.forecast-button {\\r\\n  margin-right: 2rem;\\r\\n  font-family: 'Montserrat', sans-serif;\\r\\n  font-weight: bold;\\r\\n  font-size: 1rem;\\r\\n  padding: 0.6rem 1.2rem;\\r\\n  border: none;\\r\\n  cursor: pointer;\\r\\n  background-color: transparent;\\r\\n  color: #ffffff;\\r\\n  max-width: 98px;\\r\\n  min-width: 98px;\\r\\n}\\r\\n\\r\\n.selected-button {\\r\\n  border: 2px solid #f5f5f5;\\r\\n  border-radius: 3px;\\r\\n}\\r\\n\\r\\n.weather-forecast {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  margin-top: 1.2rem;\\r\\n}\\r\\n\\r\\n.weather-forecast > div {\\r\\n  background-color: transparent;\\r\\n  text-align: center;\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n\\r\\n.forecast-container {\\r\\n  display: flex;\\r\\n}\\r\\n\\r\\n.forecast > h3 {\\r\\n  font-size: 1.3rem;\\r\\n  margin: 0.5rem 0;\\r\\n}\\r\\n\\r\\n.forecast > p {\\r\\n  margin: 0.5rem 0;\\r\\n  font-weight: bold;\\r\\n  font-size: 1.3rem;\\r\\n}\\r\\n\\r\\n.daily-forecast,\\r\\n.hourly-forecast {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  margin-top: 1.2rem;\\r\\n}\\r\\n\\r\\n.daily-forecast > div,\\r\\n.hourly-forecast > div {\\r\\n  background-color: transparent;\\r\\n  text-align: center;\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n\\r\\n.circle {\\r\\n  height: 5px;\\r\\n  width: 5px;\\r\\n  border-radius: 50%;\\r\\n  border: 1px solid #ffffff;\\r\\n  margin: 0.0625rem 0.25rem 0 0.25rem;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.circle-active {\\r\\n  background-color: #ffffff;\\r\\n}\\r\\n\\r\\n.arrow {\\r\\n  margin: 0 0.25rem;\\r\\n  font-size: 20px;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.forecast-arrows {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n/*****Media Query Breakpoints*****/\\r\\n@media (max-width: 768px) {\\r\\n  :root {\\r\\n    font-size: 13px;\\r\\n  }\\r\\n\\r\\n  header {\\r\\n    justify-content: center;\\r\\n  }\\r\\n\\r\\n  #weather-data {\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    align-items: center;\\r\\n  }\\r\\n\\r\\n  .weather-data-top {\\r\\n    text-align: center;\\r\\n    flex-direction: column-reverse;\\r\\n  }\\r\\n\\r\\n  .icon-container {\\r\\n    width: 100%;\\r\\n    margin-bottom: -1.5rem;\\r\\n  }\\r\\n\\r\\n  .icon-container .weather-icon {\\r\\n    width: 6.25rem;\\r\\n  }\\r\\n}\\r\\n\\r\\n@media (max-width: 480px) {\\r\\n  .daily-forecast {\\r\\n    flex-direction: column;\\r\\n  }\\r\\n\\r\\n  .hourly-forecast {\\r\\n    flex-direction: column;\\r\\n  }\\r\\n\\r\\n  .forecast {\\r\\n    display: flex;\\r\\n    justify-content: space-between;\\r\\n    align-items: center;\\r\\n  }\\r\\n\\r\\n  .forecast-container {\\r\\n    justify-content: center;\\r\\n  }\\r\\n\\r\\n  .forecast > h3 {\\r\\n    width: 4.2rem;\\r\\n  }\\r\\n\\r\\n  .forecast > p {\\r\\n    width: 4.2rem;\\r\\n  }\\r\\n\\r\\n  .forecast > img {\\r\\n    width: 20%;\\r\\n    margin-left: auto;\\r\\n  }\\r\\n}\\r\\n\\r\\n@media (max-width: 375px) {\\r\\n  :root {\\r\\n    font-size: 9px;\\r\\n  }\\r\\n\\r\\n  .search-container {\\r\\n    max-width: 270px;\\r\\n    min-width: 270px;\\r\\n  }\\r\\n\\r\\n  .search-button {\\r\\n    padding: 8px;\\r\\n  }\\r\\n\\r\\n  .forecast-button {\\r\\n    max-width: 60px;\\r\\n    min-width: 60px;\\r\\n  }\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://weather-app/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ requiredArgs)\n/* harmony export */ });\nfunction requiredArgs(required, args) {\n  if (args.length < required) {\n    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');\n  }\n}\n\n//# sourceURL=webpack://weather-app/./node_modules/date-fns/esm/_lib/requiredArgs/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ toInteger)\n/* harmony export */ });\nfunction toInteger(dirtyNumber) {\n  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {\n    return NaN;\n  }\n\n  var number = Number(dirtyNumber);\n\n  if (isNaN(number)) {\n    return number;\n  }\n\n  return number < 0 ? Math.ceil(number) : Math.floor(number);\n}\n\n//# sourceURL=webpack://weather-app/./node_modules/date-fns/esm/_lib/toInteger/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/fromUnixTime/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/esm/fromUnixTime/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ fromUnixTime)\n/* harmony export */ });\n/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toDate/index.js */ \"./node_modules/date-fns/esm/toDate/index.js\");\n/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ \"./node_modules/date-fns/esm/_lib/toInteger/index.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n\n\n\n/**\n * @name fromUnixTime\n * @category Timestamp Helpers\n * @summary Create a date from a Unix timestamp.\n *\n * @description\n * Create a date from a Unix timestamp (in seconds). Decimal values will be discarded.\n *\n * ### v2.0.0 breaking changes:\n *\n * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).\n *\n * @param {Number} unixTime - the given Unix timestamp (in seconds)\n * @returns {Date} the date\n * @throws {TypeError} 1 argument required\n *\n * @example\n * // Create the date 29 February 2012 11:45:05:\n * const result = fromUnixTime(1330515905)\n * //=> Wed Feb 29 2012 11:45:05\n */\n\nfunction fromUnixTime(dirtyUnixTime) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(1, arguments);\n  var unixTime = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dirtyUnixTime);\n  return (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(unixTime * 1000);\n}\n\n//# sourceURL=webpack://weather-app/./node_modules/date-fns/esm/fromUnixTime/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ toDate)\n/* harmony export */ });\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n\n/**\n * @name toDate\n * @category Common Helpers\n * @summary Convert the given argument to an instance of Date.\n *\n * @description\n * Convert the given argument to an instance of Date.\n *\n * If the argument is an instance of Date, the function returns its clone.\n *\n * If the argument is a number, it is treated as a timestamp.\n *\n * If the argument is none of the above, the function returns Invalid Date.\n *\n * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.\n *\n * @param {Date|Number} argument - the value to convert\n * @returns {Date} the parsed date in the local time zone\n * @throws {TypeError} 1 argument required\n *\n * @example\n * // Clone the date:\n * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))\n * //=> Tue Feb 11 2014 11:30:30\n *\n * @example\n * // Convert the timestamp to date:\n * const result = toDate(1392098430000)\n * //=> Tue Feb 11 2014 11:30:30\n */\n\nfunction toDate(argument) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(1, arguments);\n  var argStr = Object.prototype.toString.call(argument); // Clone the date\n\n  if (argument instanceof Date || typeof argument === 'object' && argStr === '[object Date]') {\n    // Prevent the date to lose the milliseconds when passed to new Date() in IE10\n    return new Date(argument.getTime());\n  } else if (typeof argument === 'number' || argStr === '[object Number]') {\n    return new Date(argument);\n  } else {\n    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {\n      // eslint-disable-next-line no-console\n      console.warn(\"Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule\"); // eslint-disable-next-line no-console\n\n      console.warn(new Error().stack);\n    }\n\n    return new Date(NaN);\n  }\n}\n\n//# sourceURL=webpack://weather-app/./node_modules/date-fns/esm/toDate/index.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://weather-app/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/api.js":
/*!********************!*\
  !*** ./src/api.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getCity)\n/* harmony export */ });\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n\r\n\r\nasync function getWeatherData(lat, lon, city) {\r\n  try {\r\n    const response = await fetch(\r\n      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,alerts&units=metric&appid=64dc30bda68554f9c02fcdab98258346`,\r\n      { mode: 'cors' }\r\n    );\r\n\r\n    const weatherData = await response.json();\r\n\r\n    _dom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].renderData(weatherData, city);\r\n    _dom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].forecastNavController();\r\n  } catch (err) {\r\n    console.log(err);\r\n  }\r\n}\r\n\r\nasync function getCity(city) {\r\n  try {\r\n    const response = await fetch(\r\n      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=64dc30bda68554f9c02fcdab98258346`,\r\n      { mode: 'cors' }\r\n    );\r\n\r\n    const cityData = await response.json();\r\n\r\n    const x = cityData.coord.lat;\r\n\r\n    const y = cityData.coord.lon;\r\n\r\n    getWeatherData(x, y, city);\r\n  } catch (err) {\r\n    _dom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].reportSearchError();\r\n    console.log(err);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://weather-app/./src/api.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"formatText\": () => (/* binding */ formatText),\n/* harmony export */   \"getDate\": () => (/* binding */ getDate)\n/* harmony export */ });\n/* harmony import */ var date_fns_fromUnixTime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns/fromUnixTime */ \"./node_modules/date-fns/esm/fromUnixTime/index.js\");\n\r\n\r\nfunction formatText(str) {\r\n  return str\r\n    .toLowerCase()\r\n    .split(' ')\r\n    .map((word) => word.charAt(0).toUpperCase() + word.substring(1))\r\n    .join(' ');\r\n}\r\n\r\nfunction getDate(time, offset) {\r\n  const date = (0,date_fns_fromUnixTime__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(time + offset).toUTCString();\r\n  return `${date.slice(0, 16)}, ${date.slice(17, 22)}`;\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://weather-app/./src/app.js?");

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ \"./src/api.js\");\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app */ \"./src/app.js\");\n\r\n\r\n\r\nconst domFunctions = (() => {\r\n  function clearForecast() {\r\n    const dailyForecast = document.querySelector('.daily-forecast');\r\n    while (dailyForecast.firstChild) {\r\n      dailyForecast.removeChild(dailyForecast.lastChild);\r\n    }\r\n\r\n    const hourlyForecast = document.querySelectorAll('.hourly-forecast');\r\n    for (let i = 0; i < hourlyForecast.length; i++) {\r\n      while (hourlyForecast[i].firstChild) {\r\n        hourlyForecast[i].removeChild(hourlyForecast[i].lastChild);\r\n      }\r\n    }\r\n  }\r\n\r\n  function citySearch() {\r\n    const search = document.getElementById('search');\r\n    const searchIcon = document.querySelector('.search-button');\r\n    const location = document.querySelector('.location');\r\n\r\n    search.addEventListener('search', () => {\r\n      if (search.value.toLowerCase() === location.textContent.toLowerCase()) {\r\n        return;\r\n      }\r\n      (0,_api__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(search.value);\r\n      clearForecast();\r\n    });\r\n\r\n    searchIcon.addEventListener('click', () => {\r\n      if (search.value.toLowerCase() === location.textContent.toLowerCase()) {\r\n        return;\r\n      }\r\n      (0,_api__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(search.value);\r\n      clearForecast();\r\n    });\r\n  }\r\n\r\n  // If API cannot find city name\r\n  function reportSearchError() {\r\n    const search = document.getElementById('search');\r\n\r\n    search.setCustomValidity('Please enter a valid city');\r\n    search.reportValidity();\r\n    search.addEventListener('input', () => {\r\n      search.setCustomValidity('');\r\n    });\r\n  }\r\n\r\n  // Find which circle is highlighted to determine hour range to display for hourly forecast\r\n  function getActiveButton() {\r\n    const circleButton = document.querySelectorAll('.circle');\r\n    let activeButton;\r\n    for (let i = 0; i < circleButton.length; i++) {\r\n      if (circleButton[i].classList.contains('circle-active')) {\r\n        activeButton = circleButton[i].id;\r\n      }\r\n    }\r\n    return activeButton;\r\n  }\r\n\r\n  // 'Daily' and 'Hourly' button controller\r\n  function forecastNavController() {\r\n    const hourlyButton = document.querySelector('.hourly');\r\n    const dailyForecast = document.querySelector('.daily-forecast');\r\n    const hourlyForecast = document.querySelectorAll('.hourly-forecast');\r\n    const forecastArrows = document.querySelector('.forecast-arrows');\r\n\r\n    for (let i = 0; i < hourlyForecast.length; i++) {\r\n      hourlyForecast[i].style.display = 'none';\r\n    }\r\n\r\n    if (hourlyButton.classList.contains('selected-button')) {\r\n      document.querySelector(`.${getActiveButton()}`).style.display = 'flex';\r\n      forecastArrows.style.display = 'flex';\r\n      dailyForecast.style.display = 'none';\r\n    } else {\r\n      forecastArrows.style.display = 'none';\r\n      dailyForecast.style.display = 'flex';\r\n    }\r\n  }\r\n\r\n  function buttonController() {\r\n    const forecastButtons = document.querySelectorAll('.forecast-button');\r\n    const arrowButtons = document.querySelectorAll('.arrow');\r\n\r\n    forecastButtons.forEach((button) => {\r\n      button.addEventListener('click', (e) => {\r\n        for (let i = 0; i < 2; i++) {\r\n          forecastButtons[i].classList.remove('selected-button');\r\n        }\r\n\r\n        e.target.classList.add('selected-button');\r\n        forecastNavController();\r\n      });\r\n    });\r\n\r\n    // Add class to correct circle icon when arrow icon is clicked\r\n    arrowButtons.forEach((button) => {\r\n      button.addEventListener('click', () => {\r\n        for (let i = 0; i < 3; i++) {\r\n          const circleButton = document.querySelectorAll('.circle');\r\n          let j = i;\r\n          if (circleButton[i].classList.contains('circle-active')) {\r\n            if (button.classList.contains('fa-chevron-right')) {\r\n              if (i === 2) j = -1; // If last circle icon is selected, cycle to the beginning\r\n              circleButton[j + 1].classList.add('circle-active');\r\n            } else {\r\n              if (i === 0) j = 3; // If first circle icon is selected, cycle to the end\r\n              circleButton[j - 1].classList.add('circle-active');\r\n            }\r\n\r\n            circleButton[i].classList.remove('circle-active');\r\n            forecastNavController();\r\n            break;\r\n          }\r\n        }\r\n      });\r\n    });\r\n  }\r\n\r\n  function renderDailyForecast(data) {\r\n    for (let i = 1; i < 8; i++) {\r\n      const forecastContainer = document.querySelector('.daily-forecast');\r\n\r\n      const forecast = document.createElement('div');\r\n      forecast.classList.add('forecast');\r\n\r\n      const day = document.createElement('h3');\r\n      day.textContent = (0,_app__WEBPACK_IMPORTED_MODULE_1__.getDate)(data.daily[i].dt, data.timezone_offset).slice(\r\n        0,\r\n        3\r\n      );\r\n\r\n      const icon = document.createElement('img');\r\n      icon.classList.add('weather-icon');\r\n      icon.src = `https://openweathermap.org/img/wn/${data.daily[i].weather[0].icon}@2x.png`;\r\n\r\n      const temp = document.createElement('p');\r\n      temp.textContent = `${Math.round(data.daily[i].temp.max)}°/${Math.round(\r\n        data.daily[i].temp.min\r\n      )}°`;\r\n\r\n      forecast.appendChild(day);\r\n      forecast.appendChild(icon);\r\n      forecast.appendChild(temp);\r\n      forecastContainer.appendChild(forecast);\r\n    }\r\n  }\r\n\r\n  function renderHourlyForecast(data) {\r\n    for (let i = 1; i < 25; i++) {\r\n      const HourlyForecastOne = document.querySelector('.one');\r\n      const HourlyForecastTwo = document.querySelector('.two');\r\n      const HourlyForecastThree = document.querySelector('.three');\r\n\r\n      const forecast = document.createElement('div');\r\n      forecast.classList.add('forecast');\r\n\r\n      const day = document.createElement('h3');\r\n      day.textContent = (0,_app__WEBPACK_IMPORTED_MODULE_1__.getDate)(data.hourly[i].dt, data.timezone_offset).slice(\r\n        17\r\n      );\r\n\r\n      const icon = document.createElement('img');\r\n      icon.classList.add('weather-icon');\r\n      icon.src = `https://openweathermap.org/img/wn/${data.hourly[i].weather[0].icon}@2x.png`;\r\n\r\n      const temp = document.createElement('p');\r\n      temp.textContent = `${Math.round(data.hourly[i].temp)}°`;\r\n\r\n      forecast.appendChild(day);\r\n      forecast.appendChild(icon);\r\n      forecast.appendChild(temp);\r\n\r\n      // If hourly forecast container is holding 8 items, append to the next one\r\n      if (i < 9) {\r\n        HourlyForecastOne.appendChild(forecast);\r\n      } else if (i < 17 && i >= 9) {\r\n        HourlyForecastTwo.appendChild(forecast);\r\n      } else {\r\n        HourlyForecastThree.appendChild(forecast);\r\n      }\r\n    }\r\n  }\r\n\r\n  function renderWeatherData(data, city) {\r\n    const weatherDesc = document.querySelector('.weather-desc');\r\n    weatherDesc.textContent = (0,_app__WEBPACK_IMPORTED_MODULE_1__.formatText)(data.current.weather[0].description);\r\n\r\n    const location = document.querySelector('.location');\r\n    location.textContent = (0,_app__WEBPACK_IMPORTED_MODULE_1__.formatText)(city);\r\n\r\n    const temperature = document.querySelector('.temperature');\r\n    temperature.textContent = Math.round(data.current.temp);\r\n\r\n    const weatherIcon = document.querySelector('.weather-icon');\r\n    weatherIcon.src = `http://openweathermap.org/img/wn/${data.current.weather[0].icon}@2x.png`;\r\n\r\n    const time = document.querySelector('.time');\r\n    time.textContent = (0,_app__WEBPACK_IMPORTED_MODULE_1__.getDate)(data.current.dt, data.timezone_offset);\r\n\r\n    const feelsLike = document.querySelector('.feels-like');\r\n    feelsLike.textContent = `Feels Like: ${Math.round(\r\n      data.current.feels_like\r\n    )}`;\r\n\r\n    const humidity = document.querySelector('.humidity');\r\n    humidity.textContent = `Humidity: ${data.current.humidity}%`;\r\n\r\n    const windSpeed = document.querySelector('.wind-speed');\r\n    windSpeed.textContent = `Wind: ${Math.round(data.current.wind_speed)} mph`;\r\n  }\r\n\r\n  function renderData(data, city) {\r\n    renderWeatherData(data, city);\r\n    renderDailyForecast(data);\r\n    renderHourlyForecast(data);\r\n  }\r\n\r\n  function loadPage() {\r\n    citySearch();\r\n    (0,_api__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('London');\r\n    buttonController();\r\n  }\r\n\r\n  return {\r\n    forecastNavController,\r\n    reportSearchError,\r\n    renderData,\r\n    loadPage,\r\n  };\r\n})();\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (domFunctions);\r\n\n\n//# sourceURL=webpack://weather-app/./src/dom.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n\r\n\r\n\r\n_dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].loadPage();\r\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ }),

/***/ "./images/background.jpg":
/*!*******************************!*\
  !*** ./images/background.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"bed70161090075d4a0cb.jpg\";\n\n//# sourceURL=webpack://weather-app/./images/background.jpg?");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;