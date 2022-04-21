"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/todos/[id]";
exports.ids = ["pages/api/todos/[id]"];
exports.modules = {

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "(api)/./lib/data/index.ts":
/*!***************************!*\
  !*** ./lib/data/index.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ \"(api)/./lib/data/todo.ts\");\n\nconst Data = {\n  todo: _todo__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Data);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvZGF0YS9pbmRleC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBRUEsTUFBTUMsSUFBSSxHQUFHO0FBQUVELEVBQUFBLElBQUlBLCtDQUFBQTtBQUFOLENBQWI7QUFFQSxpRUFBZUMsSUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL1N0dWR5X0Zyb250X1JlYWN0Ly4vbGliL2RhdGEvaW5kZXgudHM/YTI1MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdG9kbyBmcm9tIFwiLi90b2RvXCI7XG5cbmNvbnN0IERhdGEgPSB7IHRvZG8gfTtcblxuZXhwb3J0IGRlZmF1bHQgRGF0YTsiXSwibmFtZXMiOlsidG9kbyIsIkRhdGEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./lib/data/index.ts\n");

/***/ }),

/***/ "(api)/./lib/data/todo.ts":
/*!**************************!*\
  !*** ./lib/data/todo.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst write = async todos => {\n  (0,fs__WEBPACK_IMPORTED_MODULE_0__.writeFileSync)(\"/Users/godonghyeon/Study/Study_Front_React/data/todos.json\", JSON.stringify(todos));\n};\n\nconst getList = () => {\n  const todosBuffer = (0,fs__WEBPACK_IMPORTED_MODULE_0__.readFileSync)(\"/Users/godonghyeon/Study/Study_Front_React/data/todos.json\");\n  const todosString = todosBuffer.toString();\n\n  if (!todosString) {\n    return [];\n  }\n\n  const todos = JSON.parse(todosString);\n  return todos;\n};\n\nconst exist = ({\n  id\n}) => {\n  const todos = getList();\n  const todo = todos.some(todo => todo.id === id);\n  return todo;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  getList,\n  exist,\n  write\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvZGF0YS90b2RvLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQUdBLE1BQU1FLEtBQUssR0FBRyxNQUFPQyxLQUFQLElBQTZCO0FBQ3ZDRixFQUFBQSxpREFBYSxDQUFDLDREQUFELEVBQStERyxJQUFJLENBQUNDLFNBQUwsQ0FBZUYsS0FBZixDQUEvRCxDQUFiO0FBQ0gsQ0FGRDs7QUFJQSxNQUFNRyxPQUFPLEdBQUcsTUFBTTtBQUNsQixRQUFNQyxXQUFXLEdBQUdQLGdEQUFZLENBQUMsNERBQUQsQ0FBaEM7QUFDQSxRQUFNUSxXQUFXLEdBQUdELFdBQVcsQ0FBQ0UsUUFBWixFQUFwQjs7QUFDQSxNQUFJLENBQUNELFdBQUwsRUFBa0I7QUFDZCxXQUFPLEVBQVA7QUFDSDs7QUFDRCxRQUFNTCxLQUFpQixHQUFHQyxJQUFJLENBQUNNLEtBQUwsQ0FBV0YsV0FBWCxDQUExQjtBQUNBLFNBQU9MLEtBQVA7QUFDSCxDQVJEOztBQVVBLE1BQU1RLEtBQUssR0FBRyxDQUFDO0FBQUVDLEVBQUFBO0FBQUYsQ0FBRCxLQUE0QjtBQUN0QyxRQUFNVCxLQUFLLEdBQUdHLE9BQU8sRUFBckI7QUFDQSxRQUFNTyxJQUFJLEdBQUdWLEtBQUssQ0FBQ1csSUFBTixDQUFZRCxJQUFELElBQVVBLElBQUksQ0FBQ0QsRUFBTCxLQUFZQSxFQUFqQyxDQUFiO0FBQ0EsU0FBT0MsSUFBUDtBQUNILENBSkQ7O0FBTUEsaUVBQWU7QUFBRVAsRUFBQUEsT0FBRjtBQUFXSyxFQUFBQSxLQUFYO0FBQWtCVCxFQUFBQTtBQUFsQixDQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vU3R1ZHlfRnJvbnRfUmVhY3QvLi9saWIvZGF0YS90b2RvLnRzP2NkNzEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVhZEZpbGVTeW5jLCB3cml0ZUZpbGVTeW5jIH0gZnJvbSBcImZzXCI7XG5pbXBvcnQgeyBUb2RvVHlwZSB9IGZyb20gXCIuLi8uLi90eXBlcy90b2RvXCI7XG5cbmNvbnN0IHdyaXRlID0gYXN5bmMgKHRvZG9zOiBUb2RvVHlwZVtdKSA9PiB7XG4gICAgd3JpdGVGaWxlU3luYyhcIi9Vc2Vycy9nb2RvbmdoeWVvbi9TdHVkeS9TdHVkeV9Gcm9udF9SZWFjdC9kYXRhL3RvZG9zLmpzb25cIiwgSlNPTi5zdHJpbmdpZnkodG9kb3MpKTtcbn07XG5cbmNvbnN0IGdldExpc3QgPSAoKSA9PiB7XG4gICAgY29uc3QgdG9kb3NCdWZmZXIgPSByZWFkRmlsZVN5bmMoXCIvVXNlcnMvZ29kb25naHllb24vU3R1ZHkvU3R1ZHlfRnJvbnRfUmVhY3QvZGF0YS90b2Rvcy5qc29uXCIpO1xuICAgIGNvbnN0IHRvZG9zU3RyaW5nID0gdG9kb3NCdWZmZXIudG9TdHJpbmcoKTtcbiAgICBpZiAoIXRvZG9zU3RyaW5nKSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgY29uc3QgdG9kb3M6IFRvZG9UeXBlW10gPSBKU09OLnBhcnNlKHRvZG9zU3RyaW5nKTtcbiAgICByZXR1cm4gdG9kb3M7XG59O1xuXG5jb25zdCBleGlzdCA9ICh7IGlkIH06IHsgaWQ6IG51bWJlciB9KSA9PiB7XG4gICAgY29uc3QgdG9kb3MgPSBnZXRMaXN0KCk7XG4gICAgY29uc3QgdG9kbyA9IHRvZG9zLnNvbWUoKHRvZG8pID0+IHRvZG8uaWQgPT09IGlkKTtcbiAgICByZXR1cm4gdG9kbztcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHsgZ2V0TGlzdCwgZXhpc3QsIHdyaXRlIH07XG4iXSwibmFtZXMiOlsicmVhZEZpbGVTeW5jIiwid3JpdGVGaWxlU3luYyIsIndyaXRlIiwidG9kb3MiLCJKU09OIiwic3RyaW5naWZ5IiwiZ2V0TGlzdCIsInRvZG9zQnVmZmVyIiwidG9kb3NTdHJpbmciLCJ0b1N0cmluZyIsInBhcnNlIiwiZXhpc3QiLCJpZCIsInRvZG8iLCJzb21lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./lib/data/todo.ts\n");

/***/ }),

/***/ "(api)/./pages/api/todos/[id].ts":
/*!*********************************!*\
  !*** ./pages/api/todos/[id].ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/data */ \"(api)/./lib/data/index.ts\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res) => {\n  if (req.method === \"PATCH\") {\n    try {\n      const todoId = Number(req.query.id);\n      const todo = _lib_data__WEBPACK_IMPORTED_MODULE_0__[\"default\"].todo.exist({\n        id: todoId\n      });\n\n      if (!todo) {\n        res.statusCode = 404;\n        res.end();\n      }\n\n      const todos = _lib_data__WEBPACK_IMPORTED_MODULE_0__[\"default\"].todo.getList();\n      const changedTodos = todos.map(todo => {\n        if (todo.id === todoId) {\n          return _objectSpread(_objectSpread({}, todo), {}, {\n            checked: !todo.checked\n          });\n        }\n\n        return todo;\n      });\n      _lib_data__WEBPACK_IMPORTED_MODULE_0__[\"default\"].todo.write(changedTodos);\n      console.log(\"success: \", req.query);\n      res.status = 200;\n      return res.end();\n    } catch (e) {\n      console.log(e);\n      res.statusCode = 500;\n      res.send(e);\n    }\n  }\n\n  res.statusCode = 405;\n  return res.end();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdG9kb3MvW2lkXS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUNBO0FBRUEsaUVBQWUsT0FBT0MsR0FBUCxFQUE0QkMsR0FBNUIsS0FBcUQ7QUFDaEUsTUFBSUQsR0FBRyxDQUFDRSxNQUFKLEtBQWUsT0FBbkIsRUFBNEI7QUFDeEIsUUFBSTtBQUNBLFlBQU1DLE1BQU0sR0FBR0MsTUFBTSxDQUFDSixHQUFHLENBQUNLLEtBQUosQ0FBVUMsRUFBWCxDQUFyQjtBQUNBLFlBQU1DLElBQUksR0FBR1IsNERBQUEsQ0FBZ0I7QUFBRU8sUUFBQUEsRUFBRSxFQUFFSDtBQUFOLE9BQWhCLENBQWI7O0FBQ0EsVUFBSSxDQUFDSSxJQUFMLEVBQVc7QUFDUE4sUUFBQUEsR0FBRyxDQUFDUSxVQUFKLEdBQWlCLEdBQWpCO0FBQ0FSLFFBQUFBLEdBQUcsQ0FBQ1MsR0FBSjtBQUNIOztBQUNELFlBQU1DLEtBQUssR0FBR1osOERBQUEsRUFBZDtBQUNBLFlBQU1jLFlBQVksR0FBR0YsS0FBSyxDQUFDRyxHQUFOLENBQVdQLElBQUQsSUFBVTtBQUNyQyxZQUFJQSxJQUFJLENBQUNELEVBQUwsS0FBWUgsTUFBaEIsRUFBd0I7QUFDcEIsaURBQVlJLElBQVo7QUFBa0JRLFlBQUFBLE9BQU8sRUFBRSxDQUFDUixJQUFJLENBQUNRO0FBQWpDO0FBQ0g7O0FBQ0QsZUFBT1IsSUFBUDtBQUNILE9BTG9CLENBQXJCO0FBTUFSLE1BQUFBLDREQUFBLENBQWdCYyxZQUFoQjtBQUNBSSxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxXQUFaLEVBQXlCbEIsR0FBRyxDQUFDSyxLQUE3QjtBQUNBSixNQUFBQSxHQUFHLENBQUNrQixNQUFKLEdBQWEsR0FBYjtBQUNBLGFBQU9sQixHQUFHLENBQUNTLEdBQUosRUFBUDtBQUNILEtBbEJELENBa0JFLE9BQU9VLENBQVAsRUFBVTtBQUNSSCxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUUsQ0FBWjtBQUNBbkIsTUFBQUEsR0FBRyxDQUFDUSxVQUFKLEdBQWlCLEdBQWpCO0FBQ0FSLE1BQUFBLEdBQUcsQ0FBQ29CLElBQUosQ0FBU0QsQ0FBVDtBQUNIO0FBQ0o7O0FBQ0RuQixFQUFBQSxHQUFHLENBQUNRLFVBQUosR0FBaUIsR0FBakI7QUFDQSxTQUFPUixHQUFHLENBQUNTLEdBQUosRUFBUDtBQUNILENBNUJEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vU3R1ZHlfRnJvbnRfUmVhY3QvLi9wYWdlcy9hcGkvdG9kb3MvW2lkXS50cz83Yjk3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IERhdGEgZnJvbSBcIi4uLy4uLy4uL2xpYi9kYXRhXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSkgPT4ge1xuICAgIGlmIChyZXEubWV0aG9kID09PSBcIlBBVENIXCIpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHRvZG9JZCA9IE51bWJlcihyZXEucXVlcnkuaWQpO1xuICAgICAgICAgICAgY29uc3QgdG9kbyA9IERhdGEudG9kby5leGlzdCh7IGlkOiB0b2RvSWQgfSk7XG4gICAgICAgICAgICBpZiAoIXRvZG8pIHtcbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzQ29kZSA9IDQwNDtcbiAgICAgICAgICAgICAgICByZXMuZW5kKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCB0b2RvcyA9IERhdGEudG9kby5nZXRMaXN0KCk7XG4gICAgICAgICAgICBjb25zdCBjaGFuZ2VkVG9kb3MgPSB0b2Rvcy5tYXAoKHRvZG8pID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodG9kby5pZCA9PT0gdG9kb0lkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7IC4uLnRvZG8sIGNoZWNrZWQ6ICF0b2RvLmNoZWNrZWQgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRvZG87XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIERhdGEudG9kby53cml0ZShjaGFuZ2VkVG9kb3MpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJzdWNjZXNzOiBcIiwgcmVxLnF1ZXJ5KTtcbiAgICAgICAgICAgIHJlcy5zdGF0dXMgPSAyMDA7XG4gICAgICAgICAgICByZXR1cm4gcmVzLmVuZCgpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgICAgICAgIHJlcy5zdGF0dXNDb2RlID0gNTAwO1xuICAgICAgICAgICAgcmVzLnNlbmQoZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVzLnN0YXR1c0NvZGUgPSA0MDU7XG4gICAgcmV0dXJuIHJlcy5lbmQoKTtcbn0iXSwibmFtZXMiOlsiRGF0YSIsInJlcSIsInJlcyIsIm1ldGhvZCIsInRvZG9JZCIsIk51bWJlciIsInF1ZXJ5IiwiaWQiLCJ0b2RvIiwiZXhpc3QiLCJzdGF0dXNDb2RlIiwiZW5kIiwidG9kb3MiLCJnZXRMaXN0IiwiY2hhbmdlZFRvZG9zIiwibWFwIiwiY2hlY2tlZCIsIndyaXRlIiwiY29uc29sZSIsImxvZyIsInN0YXR1cyIsImUiLCJzZW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/todos/[id].ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/todos/[id].ts"));
module.exports = __webpack_exports__;

})();