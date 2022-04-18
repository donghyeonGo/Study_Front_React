"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/TodoList.tsx":
/*!*********************************!*\
  !*** ./components/TodoList.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _styles_palette__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/palette */ \"./styles/palette.ts\");\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nvar _this = undefined;\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    width: 100%;\\n\\n    .todo-list-header {\\n        padding: 12px;\\n        border-bottom: 1px solid \",\n        \";\\n        \\n        .todo-list-last-todo {\\n            font-size: 14px;\\n            span {\\n                margin-left: 8px;\\n            }\\n        }\\n    }\\n    .todo-list-header-colors {\\n        display: flex;\\n        .todo-list-header-color-num {\\n            display: flex;\\n            margin-right: 8px;\\n            p{\\n                font-size: 14px;\\n                line-height: 16px;\\n                margin: 0;\\n                margin-left: 6px;\\n            }\\n            .todo-list-header-round-color{\\n                width: 16px;\\n                height 16px;\\n                border-right: 50%;\\n            }\\n        }\\n    }\\n    .bg-blue{\\n        background-color: \",\n        \";\\n    }\\n    .bg-green{\\n        background-color: \",\n        \";\\n    }\\n    .bg-navy{\\n        background-color: \",\n        \";\\n    }\\n    .bg-orange{\\n        background-color: \",\n        \";\\n    }\\n    .bg-red{\\n        background-color: \",\n        \";\\n    }\\n    .bg-yellow{\\n        background-color: \",\n        \";\\n    }\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\n\n\n\n\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject(), _styles_palette__WEBPACK_IMPORTED_MODULE_2__[\"default\"].gray, _styles_palette__WEBPACK_IMPORTED_MODULE_2__[\"default\"].blue, _styles_palette__WEBPACK_IMPORTED_MODULE_2__[\"default\"].green, _styles_palette__WEBPACK_IMPORTED_MODULE_2__[\"default\"].navy, _styles_palette__WEBPACK_IMPORTED_MODULE_2__[\"default\"].orange, _styles_palette__WEBPACK_IMPORTED_MODULE_2__[\"default\"].red, _styles_palette__WEBPACK_IMPORTED_MODULE_2__[\"default\"].yellow);\n_c = Container;\nvar TodoList = function(param) {\n    var todos = param.todos;\n    var _this1 = _this;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Container, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"todo-list-header\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"todo-list-last-todo\",\n                    children: [\n                        \"\\uB0A8\\uC740 TODO\",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: [\n                                todos.length,\n                                \"\\uAC1C\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/godonghyeon/Study/Study_Front_React/components/TodoList.tsx\",\n                            lineNumber: 70,\n                            columnNumber: 28\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/godonghyeon/Study/Study_Front_React/components/TodoList.tsx\",\n                    lineNumber: 69,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"todo-list-header-colors\",\n                    children: Object.keys(todoColorNum).map(function(color, index) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"todo-list-header-num\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"{`todo-list-header-round-color bg-${color}`}\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/godonghyeon/Study/Study_Front_React/components/TodoList.tsx\",\n                                    lineNumber: 75,\n                                    columnNumber: 29\n                                }, _this1),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: todoColorNum[color]\n                                }, void 0, false, {\n                                    fileName: \"/Users/godonghyeon/Study/Study_Front_React/components/TodoList.tsx\",\n                                    lineNumber: 76,\n                                    columnNumber: 29\n                                }, _this1)\n                            ]\n                        }, index, true, {\n                            fileName: \"/Users/godonghyeon/Study/Study_Front_React/components/TodoList.tsx\",\n                            lineNumber: 74,\n                            columnNumber: 25\n                        }, _this1);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/godonghyeon/Study/Study_Front_React/components/TodoList.tsx\",\n                    lineNumber: 72,\n                    columnNumber: 17\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/godonghyeon/Study/Study_Front_React/components/TodoList.tsx\",\n            lineNumber: 68,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/godonghyeon/Study/Study_Front_React/components/TodoList.tsx\",\n        lineNumber: 67,\n        columnNumber: 9\n    }, _this);\n};\n_c1 = TodoList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TodoList);\nvar _c, _c1;\n$RefreshReg$(_c, \"Container\");\n$RefreshReg$(_c1, \"TodoList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1RvZG9MaXN0LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDYTtBQUNDO0FBR3hDLElBQU1HLFNBQVMsR0FBR0YsNkRBQVUsb0JBS09DLDREQUFZLEVBNEJuQkEsNERBQVksRUFHWkEsNkRBQWEsRUFHYkEsNERBQVksRUFHWkEsOERBQWMsRUFHZEEsMkRBQVcsRUFHWEEsOERBQWMsQ0FFekM7QUFsREtDLEtBQUFBLFNBQVM7QUEyRGYsSUFBTVMsUUFBUSxHQUFxQixnQkFBZTtRQUFaQyxLQUFLLFNBQUxBLEtBQUs7O0lBQ3ZDLHFCQUNJLDhEQUFDVixTQUFTO2tCQUNOLDRFQUFDQyxLQUFHO1lBQUNVLFNBQVMsRUFBQyxrQkFBa0I7OzhCQUM3Qiw4REFBQ0MsR0FBQztvQkFBQ0QsU0FBUyxFQUFDLHFCQUFxQjs7d0JBQUMsbUJBQ3hCO3NDQUFJLDhEQUFDRSxNQUFJOztnQ0FBRUgsS0FBSyxDQUFDSSxNQUFNO2dDQUFDLFFBQUM7Ozs7OztpQ0FBTzs7Ozs7O3lCQUNuQzs4QkFDSiw4REFBQ2IsS0FBRztvQkFBQ1UsU0FBUyxFQUFDLHlCQUF5Qjs4QkFDbkNJLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDQyxZQUFZLENBQUMsQ0FBQ0MsR0FBRyxDQUFDLFNBQUNDLEtBQUssRUFBRUMsS0FBSzs2Q0FDeEMsOERBQUNuQixLQUFHOzRCQUFDVSxTQUFTLEVBQUMsc0JBQXNCOzs4Q0FDakMsOERBQUNWLEtBQUc7b0NBQUNVLFNBQVMsRUFBQyw4Q0FBOEM7Ozs7OzBDQUFHOzhDQUNoRSw4REFBQ0MsR0FBQzs4Q0FBRUssWUFBWSxDQUFDRSxLQUFLLENBQUM7Ozs7OzBDQUFLOzsyQkFGV0MsS0FBSzs7OztrQ0FHMUM7cUJBQ1QsQ0FBQzs7Ozs7eUJBQ0E7Ozs7OztpQkFDSjs7Ozs7YUFDRSxDQUNkO0NBQ0w7QUFsQkNYLE1BQUFBLFFBQVE7QUFvQmQsK0RBQWVBLFFBQVEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1RvZG9MaXN0LnRzeD8xYzhjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgcGFsZXR0ZSBmcm9tIFwiLi4vc3R5bGVzL3BhbGV0dGVcIjtcbmltcG9ydCB7IFRvZG9UeXBlIH0gZnJvbSBcIi4uL3R5cGVzL3RvZG9cIjtcblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgICB3aWR0aDogMTAwJTtcblxuICAgIC50b2RvLWxpc3QtaGVhZGVyIHtcbiAgICAgICAgcGFkZGluZzogMTJweDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICR7cGFsZXR0ZS5ncmF5fTtcbiAgICAgICAgXG4gICAgICAgIC50b2RvLWxpc3QtbGFzdC10b2RvIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLnRvZG8tbGlzdC1oZWFkZXItY29sb3JzIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgLnRvZG8tbGlzdC1oZWFkZXItY29sb3ItbnVtIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgICAgICAgICAgIHB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNnB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnRvZG8tbGlzdC1oZWFkZXItcm91bmQtY29sb3J7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDE2cHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0IDE2cHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiA1MCU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmJnLWJsdWV7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7cGFsZXR0ZS5ibHVlfTtcbiAgICB9XG4gICAgLmJnLWdyZWVue1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3BhbGV0dGUuZ3JlZW59O1xuICAgIH1cbiAgICAuYmctbmF2eXtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtwYWxldHRlLm5hdnl9O1xuICAgIH1cbiAgICAuYmctb3Jhbmdle1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3BhbGV0dGUub3JhbmdlfTtcbiAgICB9XG4gICAgLmJnLXJlZHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtwYWxldHRlLnJlZH07XG4gICAgfVxuICAgIC5iZy15ZWxsb3d7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7cGFsZXR0ZS55ZWxsb3d9O1xuICAgIH1cbmA7XG5cblxuLy9jb25zdCB0b2RvQ29sb3JOdW1zID0gZ2V0VG9kb0NvbG9yTnVtcygpO1xuXG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgICB0b2RvczogVG9kb1R5cGVbXTtcbn07XG5cbmNvbnN0IFRvZG9MaXN0OiBSZWFjdC5GQzxJUHJvcHM+ID0gKHsgdG9kb3MgfSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvZG8tbGlzdC1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0b2RvLWxpc3QtbGFzdC10b2RvXCI+XG4gICAgICAgICAgICAgICAgICAgIOuCqOydgCBUT0RPPHNwYW4+e3RvZG9zLmxlbmd0aH3qsJw8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9kby1saXN0LWhlYWRlci1jb2xvcnNcIj5cbiAgICAgICAgICAgICAgICAgICAge09iamVjdC5rZXlzKHRvZG9Db2xvck51bSkubWFwKChjb2xvciwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9kby1saXN0LWhlYWRlci1udW1cIiBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIntgdG9kby1saXN0LWhlYWRlci1yb3VuZC1jb2xvciBiZy0ke2NvbG9yfWB9XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57dG9kb0NvbG9yTnVtW2NvbG9yXX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRvZG9MaXN0OyJdLCJuYW1lcyI6WyJSZWFjdCIsInN0eWxlZCIsInBhbGV0dGUiLCJDb250YWluZXIiLCJkaXYiLCJncmF5IiwiYmx1ZSIsImdyZWVuIiwibmF2eSIsIm9yYW5nZSIsInJlZCIsInllbGxvdyIsIlRvZG9MaXN0IiwidG9kb3MiLCJjbGFzc05hbWUiLCJwIiwic3BhbiIsImxlbmd0aCIsIk9iamVjdCIsImtleXMiLCJ0b2RvQ29sb3JOdW0iLCJtYXAiLCJjb2xvciIsImluZGV4Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/TodoList.tsx\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_TodoList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/TodoList */ \"./components/TodoList.tsx\");\nvar _this = undefined;\n\n\n\nvar todos = [\n    {\n        id: 1,\n        text: \"\\uB9C8\\uD2B8\\uAC00\\uC11C \\uC7A5\\uBCF4\\uAE30\",\n        color: \"red\",\n        checked: false\n    },\n    {\n        id: 2,\n        text: \"\\uC218\\uD559 \\uC219\\uC81C\\uD558\\uAE30\",\n        color: \"orange\",\n        checked: false\n    },\n    {\n        id: 3,\n        text: \"\\uCF54\\uB529\\uD558\\uAE30\",\n        color: \"yellow\",\n        checked: true\n    },\n    {\n        id: 4,\n        text: \"\\uB125\\uC2A4\\uD2B8 \\uACF5\\uBD80\\uD558\\uAE30\",\n        color: \"green\",\n        checked: true\n    },\n    {\n        id: 5,\n        text: \"\\uC694\\uB9AC \\uC5F0\\uC2B5\\uD558\\uAE30\",\n        color: \"blue\",\n        checked: false\n    },\n    {\n        id: 6,\n        text: \"\\uBD84\\uB9AC\\uC218\\uAC70 \\uD558\\uAE30\",\n        color: \"navy\",\n        checked: false\n    }, \n];\nvar app = function() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_TodoList__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        todos: todos\n    }, void 0, false, {\n        fileName: \"/Users/godonghyeon/Study/Study_Front_React/pages/index.tsx\",\n        lineNumber: 16,\n        columnNumber: 12\n    }, _this);\n};\nvar getTodoColorNums = function() {\n    var red = 0;\n    var orange = 0;\n    var yellow = 0;\n    var green = 0;\n    var blue = 0;\n    var navy = 0;\n    todos.forEach(function(todo) {\n        switch(todo.color){\n            case \"red\":\n                red += 1;\n                break;\n            case \"orange\":\n                orange += 1;\n                break;\n            case \"yellow\":\n                yellow += 1;\n                break;\n            case \"green\":\n                green += 1;\n                break;\n            case \"blue\":\n                blue += 1;\n                break;\n            case \"navy\":\n                navy += 1;\n                break;\n            default:\n                break;\n        }\n    });\n    return {\n        red: red,\n        orange: orange,\n        yellow: yellow,\n        green: green,\n        blue: blue,\n        navy: navy\n    };\n};\nconsole.log(getTodoColorNums());\nvar todoColorNum = getTodoColorNums();\n/* harmony default export */ __webpack_exports__[\"default\"] = (app);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0FBQTBCO0FBRW9CO0FBRzlDLElBQU1FLEtBQUssR0FBZTtJQUN0QjtRQUFFQyxFQUFFLEVBQUUsQ0FBQztRQUFFQyxJQUFJLEVBQUUsNkNBQVU7UUFBZ0JDLEtBQUssRUFBRSxLQUFLO1FBQUVDLE9BQU8sRUFBRSxLQUFLO0tBQUU7SUFDekQ7UUFBWkgsRUFBRSxFQUFFLENBQUM7UUFBRUMsSUFBSSxFQUFFLHVDQUFTO1FBQWNDLEtBQUssRUFBRSxRQUFRO1FBQUVDLE9BQU8sRUFBRSxLQUFLO0tBQUU7SUFDM0Q7UUFBVkgsRUFBRSxFQUFFLENBQUM7UUFBRUMsSUFBSSxFQUFFLDBCQUFNO1FBQVVDLEtBQUssRUFBRSxRQUFRO1FBQUVDLE9BQU8sRUFBRSxJQUFJO0tBQUU7SUFDdkQ7UUFBTkgsRUFBRSxFQUFFLENBQUM7UUFBRUMsSUFBSSxFQUFFLDZDQUFVO1FBQWdCQyxLQUFLLEVBQUUsT0FBTztRQUFFQyxPQUFPLEVBQUUsSUFBSTtLQUFFO0lBQzFEO1FBQVpILEVBQUUsRUFBRSxDQUFDO1FBQUVDLElBQUksRUFBRSx1Q0FBUztRQUFjQyxLQUFLLEVBQUUsTUFBTTtRQUFFQyxPQUFPLEVBQUUsS0FBSztLQUFFO0lBQ3pEO1FBQVZILEVBQUUsRUFBRSxDQUFDO1FBQUVDLElBQUksRUFBRSx1Q0FBUztRQUFFQyxLQUFLLEVBQUUsTUFBTTtRQUFFQyxPQUFPLEVBQUUsS0FBSztLQUFFO0NBQzVEO0FBRUQsSUFBTUMsR0FBRyxHQUFhLFdBQU07SUFDeEIscUJBQU8sOERBQUNOLDREQUFRO1FBQUNDLEtBQUssRUFBRUEsS0FBSzs7Ozs7YUFBSSxDQUFDO0NBQ3JDO0FBRUQsSUFBTU0sZ0JBQWdCLEdBQUcsV0FBTTtJQUMzQixJQUFJQyxHQUFHLEdBQUcsQ0FBQztJQUNYLElBQUlDLE1BQU0sR0FBRyxDQUFDO0lBQ2QsSUFBSUMsTUFBTSxHQUFHLENBQUM7SUFDZCxJQUFJQyxLQUFLLEdBQUcsQ0FBQztJQUNiLElBQUlDLElBQUksR0FBRyxDQUFDO0lBQ1osSUFBSUMsSUFBSSxHQUFHLENBQUM7SUFDWlosS0FBSyxDQUFDYSxPQUFPLENBQUMsU0FBQ0MsSUFBSSxFQUFLO1FBQ3BCLE9BQVFBLElBQUksQ0FBQ1gsS0FBSztZQUNkLEtBQUssS0FBSztnQkFDTkksR0FBRyxJQUFJLENBQUMsQ0FBQztnQkFDVCxNQUFNO1lBQ1YsS0FBSyxRQUFRO2dCQUNUQyxNQUFNLElBQUksQ0FBQyxDQUFDO2dCQUNaLE1BQU07WUFDVixLQUFLLFFBQVE7Z0JBQ1RDLE1BQU0sSUFBSSxDQUFDLENBQUM7Z0JBQ1osTUFBTTtZQUNWLEtBQUssT0FBTztnQkFDUkMsS0FBSyxJQUFJLENBQUMsQ0FBQztnQkFDWCxNQUFNO1lBQ1YsS0FBSyxNQUFNO2dCQUNQQyxJQUFJLElBQUksQ0FBQyxDQUFDO2dCQUNWLE1BQU07WUFDVixLQUFLLE1BQU07Z0JBQ1BDLElBQUksSUFBSSxDQUFDLENBQUM7Z0JBQ1YsTUFBTTtZQUNWO2dCQUNJLE1BQU07U0FDYjtLQUNKLENBQUMsQ0FBQztJQUVILE9BQU87UUFDSEwsR0FBRyxFQUFIQSxHQUFHO1FBQ0hDLE1BQU0sRUFBTkEsTUFBTTtRQUNOQyxNQUFNLEVBQU5BLE1BQU07UUFDTkMsS0FBSyxFQUFMQSxLQUFLO1FBQ0xDLElBQUksRUFBSkEsSUFBSTtRQUNKQyxJQUFJLEVBQUpBLElBQUk7S0FDUCxDQUFDO0NBQ0w7QUFFREcsT0FBTyxDQUFDQyxHQUFHLENBQUNWLGdCQUFnQixFQUFFLENBQUMsQ0FBQztBQUNoQyxJQUFNVyxZQUFZLEdBQUdYLGdCQUFnQixFQUFFO0FBQ3ZDLCtEQUFlRCxHQUFHLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgTmV4dFBhZ2UgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IFRvZG9MaXN0IGZyb20gXCIuLi9jb21wb25lbnRzL1RvZG9MaXN0XCI7XG5pbXBvcnQgeyBUb2RvVHlwZSB9IGZyb20gXCIuLi90eXBlcy90b2RvXCI7XG5cbmNvbnN0IHRvZG9zOiBUb2RvVHlwZVtdID0gW1xuICAgIHsgaWQ6IDEsIHRleHQ6IFwi66eI7Yq46rCA7IScIOyepeuztOq4sFwiLCBjb2xvcjogXCJyZWRcIiwgY2hlY2tlZDogZmFsc2UgfSxcbiAgICB7IGlkOiAyLCB0ZXh0OiBcIuyImO2VmSDsiJnsoJztlZjquLBcIiwgY29sb3I6IFwib3JhbmdlXCIsIGNoZWNrZWQ6IGZhbHNlIH0sXG4gICAgeyBpZDogMywgdGV4dDogXCLsvZTrlKntlZjquLBcIiwgY29sb3I6IFwieWVsbG93XCIsIGNoZWNrZWQ6IHRydWUgfSxcbiAgICB7IGlkOiA0LCB0ZXh0OiBcIuuEpeyKpO2KuCDqs7XrtoDtlZjquLBcIiwgY29sb3I6IFwiZ3JlZW5cIiwgY2hlY2tlZDogdHJ1ZSB9LFxuICAgIHsgaWQ6IDUsIHRleHQ6IFwi7JqU66asIOyXsOyKte2VmOq4sFwiLCBjb2xvcjogXCJibHVlXCIsIGNoZWNrZWQ6IGZhbHNlIH0sXG4gICAgeyBpZDogNiwgdGV4dDogXCLrtoTrpqzsiJjqsbAg7ZWY6riwXCIsIGNvbG9yOiBcIm5hdnlcIiwgY2hlY2tlZDogZmFsc2UgfSxcbl07XG5cbmNvbnN0IGFwcDogTmV4dFBhZ2UgPSAoKSA9PiB7XG4gICAgcmV0dXJuIDxUb2RvTGlzdCB0b2Rvcz17dG9kb3N9IC8+O1xufTtcblxuY29uc3QgZ2V0VG9kb0NvbG9yTnVtcyA9ICgpID0+IHtcbiAgICBsZXQgcmVkID0gMDtcbiAgICBsZXQgb3JhbmdlID0gMDtcbiAgICBsZXQgeWVsbG93ID0gMDtcbiAgICBsZXQgZ3JlZW4gPSAwO1xuICAgIGxldCBibHVlID0gMDtcbiAgICBsZXQgbmF2eSA9IDA7XG4gICAgdG9kb3MuZm9yRWFjaCgodG9kbykgPT4ge1xuICAgICAgICBzd2l0Y2ggKHRvZG8uY29sb3IpIHtcbiAgICAgICAgICAgIGNhc2UgXCJyZWRcIjpcbiAgICAgICAgICAgICAgICByZWQgKz0gMTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJvcmFuZ2VcIjpcbiAgICAgICAgICAgICAgICBvcmFuZ2UgKz0gMTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJ5ZWxsb3dcIjpcbiAgICAgICAgICAgICAgICB5ZWxsb3cgKz0gMTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJncmVlblwiOlxuICAgICAgICAgICAgICAgIGdyZWVuICs9IDE7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiYmx1ZVwiOlxuICAgICAgICAgICAgICAgIGJsdWUgKz0gMTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJuYXZ5XCI6XG4gICAgICAgICAgICAgICAgbmF2eSArPSAxO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcmVkLFxuICAgICAgICBvcmFuZ2UsXG4gICAgICAgIHllbGxvdyxcbiAgICAgICAgZ3JlZW4sXG4gICAgICAgIGJsdWUsXG4gICAgICAgIG5hdnksXG4gICAgfTtcbn07XG5cbmNvbnNvbGUubG9nKGdldFRvZG9Db2xvck51bXMoKSk7XG5jb25zdCB0b2RvQ29sb3JOdW0gPSBnZXRUb2RvQ29sb3JOdW1zKCk7XG5leHBvcnQgZGVmYXVsdCBhcHA7Il0sIm5hbWVzIjpbIlJlYWN0IiwiVG9kb0xpc3QiLCJ0b2RvcyIsImlkIiwidGV4dCIsImNvbG9yIiwiY2hlY2tlZCIsImFwcCIsImdldFRvZG9Db2xvck51bXMiLCJyZWQiLCJvcmFuZ2UiLCJ5ZWxsb3ciLCJncmVlbiIsImJsdWUiLCJuYXZ5IiwiZm9yRWFjaCIsInRvZG8iLCJjb25zb2xlIiwibG9nIiwidG9kb0NvbG9yTnVtIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

});