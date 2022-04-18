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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _styles_palette__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/palette */ \"./styles/palette.ts\");\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nvar _this = undefined;\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    width: 100%;\\n\\n    .todo-list-header {\\n        padding: 12px;\\n        border-bottom: 1px solid \",\n        \";\\n        \\n        .todo-list-last-todo {\\n            font-size: 14px;\\n            span {\\n                margin-left: 8px;\\n            }\\n        }\\n    }\\n    .todo-list-header-colors {\\n        display: flex;\\n        .todo-list-header-color-num {\\n            display: flex;\\n            margin-right: 8px;\\n            p{\\n                font-size: 14px;\\n                line-height: 16px;\\n                margin: 0;\\n                margin-left: 6px;\\n            }\\n            .todo-list-header-round-color{\\n                width: 16px;\\n                height 16px;\\n                border-right: 50%;\\n            }\\n        }\\n    }\\n    .bg-blue{\\n        background-color: \",\n        \";\\n    }\\n    .bg-green{\\n        background-color: \",\n        \";\\n    }\\n    .bg-navy{\\n        background-color: \",\n        \";\\n    }\\n    .bg-orange{\\n        background-color: \",\n        \";\\n    }\\n    .bg-red{\\n        background-color: \",\n        \";\\n    }\\n    .bg-yellow{\\n        background-color: \",\n        \";\\n    }\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\n\n\n\n\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject(), _styles_palette__WEBPACK_IMPORTED_MODULE_2__[\"default\"].gray, _styles_palette__WEBPACK_IMPORTED_MODULE_2__[\"default\"].blue, _styles_palette__WEBPACK_IMPORTED_MODULE_2__[\"default\"].green, _styles_palette__WEBPACK_IMPORTED_MODULE_2__[\"default\"].navy, _styles_palette__WEBPACK_IMPORTED_MODULE_2__[\"default\"].orange, _styles_palette__WEBPACK_IMPORTED_MODULE_2__[\"default\"].red, _styles_palette__WEBPACK_IMPORTED_MODULE_2__[\"default\"].yellow);\n_c = Container;\nvar TodoList = function(param) {\n    var todos = param.todos;\n    var _this1 = _this;\n    var getTodoColorNums = function() {\n        var red = 0;\n        var orange = 0;\n        var yellow = 0;\n        var green = 0;\n        var blue = 0;\n        var navy = 0;\n        todos.forEach(function(todo) {\n            switch(todo.color){\n                case \"red\":\n                    red += 1;\n                    break;\n                case \"orange\":\n                    orange += 1;\n                    break;\n                case \"yellow\":\n                    yellow += 1;\n                    break;\n                case \"green\":\n                    green += 1;\n                    break;\n                case \"blue\":\n                    blue += 1;\n                    break;\n                case \"navy\":\n                    navy += 1;\n                    break;\n                default:\n                    break;\n            }\n        });\n        return {\n            red: red,\n            orange: orange,\n            yellow: yellow,\n            green: green,\n            blue: blue,\n            navy: navy\n        };\n    };\n    console.log(getTodoColorNums());\n    var todoColorNum = getTodoColorNums();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Container, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"todo-list-header\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"todo-list-last-todo\",\n                    children: [\n                        \"\\uB0A8\\uC740 TODO\",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: [\n                                todos.length,\n                                \"\\uAC1C\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/godonghyeon/Study/Study_Front_React/components/TodoList.tsx\",\n                            lineNumber: 115,\n                            columnNumber: 28\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/godonghyeon/Study/Study_Front_React/components/TodoList.tsx\",\n                    lineNumber: 114,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"todo-list-header-colors\",\n                    children: Object.keys(todoColorNum).map(function(color, index) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"todo-list-header-num\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"{`todo-list-header-round-color bg-${color}`}\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/godonghyeon/Study/Study_Front_React/components/TodoList.tsx\",\n                                    lineNumber: 120,\n                                    columnNumber: 29\n                                }, _this1),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: [\n                                        todoColorNum[color],\n                                        \"\\uAC1C\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/godonghyeon/Study/Study_Front_React/components/TodoList.tsx\",\n                                    lineNumber: 121,\n                                    columnNumber: 29\n                                }, _this1)\n                            ]\n                        }, index, true, {\n                            fileName: \"/Users/godonghyeon/Study/Study_Front_React/components/TodoList.tsx\",\n                            lineNumber: 119,\n                            columnNumber: 25\n                        }, _this1);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/godonghyeon/Study/Study_Front_React/components/TodoList.tsx\",\n                    lineNumber: 117,\n                    columnNumber: 17\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/godonghyeon/Study/Study_Front_React/components/TodoList.tsx\",\n            lineNumber: 113,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/godonghyeon/Study/Study_Front_React/components/TodoList.tsx\",\n        lineNumber: 112,\n        columnNumber: 9\n    }, _this);\n};\n_c1 = TodoList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TodoList);\nvar _c, _c1;\n$RefreshReg$(_c, \"Container\");\n$RefreshReg$(_c1, \"TodoList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ly9fTl9FLy4vY29tcG9uZW50cy9Ub2RvTGlzdC50c3g/MWM4YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHBhbGV0dGUgZnJvbSBcIi4uL3N0eWxlcy9wYWxldHRlXCI7XG5pbXBvcnQgeyBUb2RvVHlwZSB9IGZyb20gXCIuLi90eXBlcy90b2RvXCI7XG5cbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gICAgd2lkdGg6IDEwMCU7XG5cbiAgICAudG9kby1saXN0LWhlYWRlciB7XG4gICAgICAgIHBhZGRpbmc6IDEycHg7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAke3BhbGV0dGUuZ3JheX07XG4gICAgICAgIFxuICAgICAgICAudG9kby1saXN0LWxhc3QtdG9kbyB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogOHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC50b2RvLWxpc3QtaGVhZGVyLWNvbG9ycyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIC50b2RvLWxpc3QtaGVhZGVyLWNvbG9yLW51bSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gICAgICAgICAgICBwe1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDZweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC50b2RvLWxpc3QtaGVhZGVyLXJvdW5kLWNvbG9ye1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxNnB4O1xuICAgICAgICAgICAgICAgIGhlaWdodCAxNnB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yaWdodDogNTAlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC5iZy1ibHVle1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3BhbGV0dGUuYmx1ZX07XG4gICAgfVxuICAgIC5iZy1ncmVlbntcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtwYWxldHRlLmdyZWVufTtcbiAgICB9XG4gICAgLmJnLW5hdnl7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7cGFsZXR0ZS5uYXZ5fTtcbiAgICB9XG4gICAgLmJnLW9yYW5nZXtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtwYWxldHRlLm9yYW5nZX07XG4gICAgfVxuICAgIC5iZy1yZWR7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7cGFsZXR0ZS5yZWR9O1xuICAgIH1cbiAgICAuYmcteWVsbG93e1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3BhbGV0dGUueWVsbG93fTtcbiAgICB9XG5gO1xuXG5cbi8vY29uc3QgdG9kb0NvbG9yTnVtcyA9IGdldFRvZG9Db2xvck51bXMoKTtcblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gICAgdG9kb3M6IFRvZG9UeXBlW107XG59O1xuXG5jb25zdCBUb2RvTGlzdDogUmVhY3QuRkM8SVByb3BzPiA9ICh7IHRvZG9zIH0pID0+IHtcblxuICAgIGNvbnN0IGdldFRvZG9Db2xvck51bXMgPSAoKSA9PiB7XG4gICAgICAgIGxldCByZWQgPSAwO1xuICAgICAgICBsZXQgb3JhbmdlID0gMDtcbiAgICAgICAgbGV0IHllbGxvdyA9IDA7XG4gICAgICAgIGxldCBncmVlbiA9IDA7XG4gICAgICAgIGxldCBibHVlID0gMDtcbiAgICAgICAgbGV0IG5hdnkgPSAwO1xuICAgICAgICB0b2Rvcy5mb3JFYWNoKCh0b2RvKSA9PiB7XG4gICAgICAgICAgICBzd2l0Y2ggKHRvZG8uY29sb3IpIHtcbiAgICAgICAgICAgICAgICBjYXNlIFwicmVkXCI6XG4gICAgICAgICAgICAgICAgICAgIHJlZCArPSAxO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwib3JhbmdlXCI6XG4gICAgICAgICAgICAgICAgICAgIG9yYW5nZSArPSAxO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwieWVsbG93XCI6XG4gICAgICAgICAgICAgICAgICAgIHllbGxvdyArPSAxO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwiZ3JlZW5cIjpcbiAgICAgICAgICAgICAgICAgICAgZ3JlZW4gKz0gMTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcImJsdWVcIjpcbiAgICAgICAgICAgICAgICAgICAgYmx1ZSArPSAxO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwibmF2eVwiOlxuICAgICAgICAgICAgICAgICAgICBuYXZ5ICs9IDE7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcmVkLFxuICAgICAgICAgICAgb3JhbmdlLFxuICAgICAgICAgICAgeWVsbG93LFxuICAgICAgICAgICAgZ3JlZW4sXG4gICAgICAgICAgICBibHVlLFxuICAgICAgICAgICAgbmF2eSxcbiAgICAgICAgfTtcbiAgICB9O1xuXG4gICAgY29uc29sZS5sb2coZ2V0VG9kb0NvbG9yTnVtcygpKTtcbiAgICBjb25zdCB0b2RvQ29sb3JOdW0gPSBnZXRUb2RvQ29sb3JOdW1zKCk7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9kby1saXN0LWhlYWRlclwiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRvZG8tbGlzdC1sYXN0LXRvZG9cIj5cbiAgICAgICAgICAgICAgICAgICAg64Ko7J2AIFRPRE88c3Bhbj57dG9kb3MubGVuZ3RofeqwnDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b2RvLWxpc3QtaGVhZGVyLWNvbG9yc1wiPlxuICAgICAgICAgICAgICAgICAgICB7T2JqZWN0LmtleXModG9kb0NvbG9yTnVtKS5tYXAoKGNvbG9yLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b2RvLWxpc3QtaGVhZGVyLW51bVwiIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwie2B0b2RvLWxpc3QtaGVhZGVyLXJvdW5kLWNvbG9yIGJnLSR7Y29sb3J9YH1cIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPnt0b2RvQ29sb3JOdW1bY29sb3JdfeqwnDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICApO1xufTtcblxuXG5leHBvcnQgZGVmYXVsdCBUb2RvTGlzdDsiXSwibmFtZXMiOlsiUmVhY3QiLCJzdHlsZWQiLCJwYWxldHRlIiwiQ29udGFpbmVyIiwiZGl2IiwiZ3JheSIsImJsdWUiLCJncmVlbiIsIm5hdnkiLCJvcmFuZ2UiLCJyZWQiLCJ5ZWxsb3ciLCJUb2RvTGlzdCIsInRvZG9zIiwiZ2V0VG9kb0NvbG9yTnVtcyIsImZvckVhY2giLCJ0b2RvIiwiY29sb3IiLCJjb25zb2xlIiwibG9nIiwidG9kb0NvbG9yTnVtIiwiY2xhc3NOYW1lIiwicCIsInNwYW4iLCJsZW5ndGgiLCJPYmplY3QiLCJrZXlzIiwibWFwIiwiaW5kZXgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/TodoList.tsx\n");

/***/ })

});