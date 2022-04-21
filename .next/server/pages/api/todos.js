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
exports.id = "pages/api/todos";
exports.ids = ["pages/api/todos"];
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

/***/ "(api)/./pages/api/todos/index.ts":
/*!**********************************!*\
  !*** ./pages/api/todos/index.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/data */ \"(api)/./lib/data/index.ts\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((req, res) => {\n  // if (req.method === \"GET\") {\n  //     try {\n  //         const todosBuffer = fs.readFileSync(\"/Users/godonghyeon/Study/Study_Front_React/data/todos.json\");\n  //         const todosString = todosBuffer.toString();\n  //         if (!todosString) {\n  //             res.statusCode = 200;\n  //             res.send([]);\n  //         }\n  //         const todos: TodoType[] = JSON.parse(todosString);\n  //         res.statusCode = 200;\n  //         return res.send(todos);\n  //     } catch (e) {\n  //         console.log(e);\n  //         res.statusCode = 500;\n  //         res.send(e);\n  //     }\n  //     return res.send(\"hello next!\");\n  // }\n  try {\n    const todos = _lib_data__WEBPACK_IMPORTED_MODULE_0__[\"default\"].todo.getList();\n    res.statusCode = 200;\n    return res.send(todos);\n  } catch (e) {\n    console.log(e);\n    res.statusCode = 500;\n    res.send(e);\n  }\n\n  res.statusCode = 405;\n  console.log(res.statusCode);\n  return res.end();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdG9kb3MvaW5kZXgudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFHQTtBQUdBLGlFQUFlLENBQUNDLEdBQUQsRUFBc0JDLEdBQXRCLEtBQStDO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQUk7QUFDQSxVQUFNQyxLQUFLLEdBQUdILDhEQUFBLEVBQWQ7QUFDQUUsSUFBQUEsR0FBRyxDQUFDSSxVQUFKLEdBQWlCLEdBQWpCO0FBQ0EsV0FBT0osR0FBRyxDQUFDSyxJQUFKLENBQVNKLEtBQVQsQ0FBUDtBQUNILEdBSkQsQ0FJRSxPQUFPSyxDQUFQLEVBQVU7QUFDUkMsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlGLENBQVo7QUFDQU4sSUFBQUEsR0FBRyxDQUFDSSxVQUFKLEdBQWlCLEdBQWpCO0FBQ0FKLElBQUFBLEdBQUcsQ0FBQ0ssSUFBSixDQUFTQyxDQUFUO0FBQ0g7O0FBRUROLEVBQUFBLEdBQUcsQ0FBQ0ksVUFBSixHQUFpQixHQUFqQjtBQUNBRyxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWVIsR0FBRyxDQUFDSSxVQUFoQjtBQUNBLFNBQU9KLEdBQUcsQ0FBQ1MsR0FBSixFQUFQO0FBRUgsQ0FsQ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9TdHVkeV9Gcm9udF9SZWFjdC8uL3BhZ2VzL2FwaS90b2Rvcy9pbmRleC50cz8wMmQ3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IHsgVG9kb1R5cGUgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXMvdG9kb1wiO1xuaW1wb3J0IGZzIGZyb20gXCJmc1wiO1xuaW1wb3J0IERhdGEgZnJvbSBcIi4uLy4uLy4uL2xpYi9kYXRhXCI7XG5cblxuZXhwb3J0IGRlZmF1bHQgKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlKSA9PiB7XG4gICAgLy8gaWYgKHJlcS5tZXRob2QgPT09IFwiR0VUXCIpIHtcbiAgICAvLyAgICAgdHJ5IHtcbiAgICAvLyAgICAgICAgIGNvbnN0IHRvZG9zQnVmZmVyID0gZnMucmVhZEZpbGVTeW5jKFwiL1VzZXJzL2dvZG9uZ2h5ZW9uL1N0dWR5L1N0dWR5X0Zyb250X1JlYWN0L2RhdGEvdG9kb3MuanNvblwiKTtcbiAgICAvLyAgICAgICAgIGNvbnN0IHRvZG9zU3RyaW5nID0gdG9kb3NCdWZmZXIudG9TdHJpbmcoKTtcbiAgICAvLyAgICAgICAgIGlmICghdG9kb3NTdHJpbmcpIHtcbiAgICAvLyAgICAgICAgICAgICByZXMuc3RhdHVzQ29kZSA9IDIwMDtcbiAgICAvLyAgICAgICAgICAgICByZXMuc2VuZChbXSk7XG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgICAgICBjb25zdCB0b2RvczogVG9kb1R5cGVbXSA9IEpTT04ucGFyc2UodG9kb3NTdHJpbmcpO1xuICAgIC8vICAgICAgICAgcmVzLnN0YXR1c0NvZGUgPSAyMDA7XG4gICAgLy8gICAgICAgICByZXR1cm4gcmVzLnNlbmQodG9kb3MpO1xuICAgIC8vICAgICB9IGNhdGNoIChlKSB7XG4gICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAvLyAgICAgICAgIHJlcy5zdGF0dXNDb2RlID0gNTAwO1xuICAgIC8vICAgICAgICAgcmVzLnNlbmQoZSk7XG4gICAgLy8gICAgIH1cbiAgICAvLyAgICAgcmV0dXJuIHJlcy5zZW5kKFwiaGVsbG8gbmV4dCFcIik7XG4gICAgLy8gfVxuXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgdG9kb3MgPSBEYXRhLnRvZG8uZ2V0TGlzdCgpO1xuICAgICAgICByZXMuc3RhdHVzQ29kZSA9IDIwMDtcbiAgICAgICAgcmV0dXJuIHJlcy5zZW5kKHRvZG9zKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICByZXMuc3RhdHVzQ29kZSA9IDUwMDtcbiAgICAgICAgcmVzLnNlbmQoZSk7XG4gICAgfVxuXG4gICAgcmVzLnN0YXR1c0NvZGUgPSA0MDU7XG4gICAgY29uc29sZS5sb2cocmVzLnN0YXR1c0NvZGUpO1xuICAgIHJldHVybiByZXMuZW5kKCk7XG5cbn0iXSwibmFtZXMiOlsiRGF0YSIsInJlcSIsInJlcyIsInRvZG9zIiwidG9kbyIsImdldExpc3QiLCJzdGF0dXNDb2RlIiwic2VuZCIsImUiLCJjb25zb2xlIiwibG9nIiwiZW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/todos/index.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/todos/index.ts"));
module.exports = __webpack_exports__;

})();