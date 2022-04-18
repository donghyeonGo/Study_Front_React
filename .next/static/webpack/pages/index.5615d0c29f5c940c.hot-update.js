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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _styles_palette__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/palette */ \"./styles/palette.ts\");\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nvar _this = undefined;\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    width: 100%;\\n\\n    .todo-list-header {\\n        padding: 12px;\\n        border-bottom: 1px solid \",\n        \";\\n        \\n        .todo-list-last-todo {\\n            font-size: 14px;\\n            span {\\n                margin-left: 8px;\\n            }\\n        }\\n    }\\n    .todo-list-header-colors {\\n        display: flex;\\n        .todo-list-header-color-num {\\n            display: flex;\\n            margin-right: 8px;\\n            p{\\n                font-size: 14px;\\n                line-height: 16px;\\n                margin: 0;\\n                margin-left: 6px;\\n            }\\n            .todo-list-header-round-color{\\n                width: 16px;\\n                height: 16px;\\n                border-right: 50%;\\n            }\\n        }\\n    }\\n    .bg-blue{\\n        background-color: \",\n        \";\\n    }\\n    .bg-green{\\n        background-color: \",\n        \";\\n    }\\n    .bg-navy{\\n        background-color: \",\n        \";\\n    }\\n    .bg-orange{\\n        background-color: \",\n        \";\\n    }\\n    .bg-red{\\n        background-color: \",\n        \";\\n    }\\n    .bg-yellow{\\n        background-color: \",\n        \";\\n    }\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\n\n\n\n\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject(), _styles_palette__WEBPACK_IMPORTED_MODULE_2__[\"default\"].gray, _styles_palette__WEBPACK_IMPORTED_MODULE_2__[\"default\"].blue, _styles_palette__WEBPACK_IMPORTED_MODULE_2__[\"default\"].green, _styles_palette__WEBPACK_IMPORTED_MODULE_2__[\"default\"].navy, _styles_palette__WEBPACK_IMPORTED_MODULE_2__[\"default\"].orange, _styles_palette__WEBPACK_IMPORTED_MODULE_2__[\"default\"].red, _styles_palette__WEBPACK_IMPORTED_MODULE_2__[\"default\"].yellow);\n_c = Container;\nvar TodoList = function(param) {\n    var todos = param.todos;\n    var _this1 = _this;\n    var getTodoColorNums = function() {\n        var red = 0;\n        var orange = 0;\n        var yellow = 0;\n        var green = 0;\n        var blue = 0;\n        var navy = 0;\n        todos.forEach(function(todo) {\n            switch(todo.color){\n                case \"red\":\n                    red += 1;\n                    break;\n                case \"orange\":\n                    orange += 1;\n                    break;\n                case \"yellow\":\n                    yellow += 1;\n                    break;\n                case \"green\":\n                    green += 1;\n                    break;\n                case \"blue\":\n                    blue += 1;\n                    break;\n                case \"navy\":\n                    navy += 1;\n                    break;\n                default:\n                    break;\n            }\n        });\n        return {\n            red: red,\n            orange: orange,\n            yellow: yellow,\n            green: green,\n            blue: blue,\n            navy: navy\n        };\n    };\n    console.log(getTodoColorNums());\n    var todoColorNum = getTodoColorNums();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Container, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"todo-list-header\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"todo-list-last-todo\",\n                    children: [\n                        \"\\uB0A8\\uC740 TODO\",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: [\n                                todos.length,\n                                \"\\uAC1C\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/godonghyeon/Study/Study_Front_React/components/TodoList.tsx\",\n                            lineNumber: 115,\n                            columnNumber: 28\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/godonghyeon/Study/Study_Front_React/components/TodoList.tsx\",\n                    lineNumber: 114,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"todo-list-header-colors\",\n                    children: Object.keys(todoColorNum).map(function(color, index) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"todo-list-header-color-num\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"todo-list-header-round-color bg-\".concat(color)\n                                }, void 0, false, {\n                                    fileName: \"/Users/godonghyeon/Study/Study_Front_React/components/TodoList.tsx\",\n                                    lineNumber: 120,\n                                    columnNumber: 29\n                                }, _this1),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: [\n                                        todoColorNum[color],\n                                        \"\\uAC1C\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/godonghyeon/Study/Study_Front_React/components/TodoList.tsx\",\n                                    lineNumber: 121,\n                                    columnNumber: 29\n                                }, _this1)\n                            ]\n                        }, index, true, {\n                            fileName: \"/Users/godonghyeon/Study/Study_Front_React/components/TodoList.tsx\",\n                            lineNumber: 119,\n                            columnNumber: 25\n                        }, _this1);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/godonghyeon/Study/Study_Front_React/components/TodoList.tsx\",\n                    lineNumber: 117,\n                    columnNumber: 17\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/godonghyeon/Study/Study_Front_React/components/TodoList.tsx\",\n            lineNumber: 113,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/godonghyeon/Study/Study_Front_React/components/TodoList.tsx\",\n        lineNumber: 112,\n        columnNumber: 9\n    }, _this);\n};\n_c1 = TodoList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TodoList);\nvar _c, _c1;\n$RefreshReg$(_c, \"Container\");\n$RefreshReg$(_c1, \"TodoList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Iiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvVG9kb0xpc3QudHN4PzFjOGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCBwYWxldHRlIGZyb20gXCIuLi9zdHlsZXMvcGFsZXR0ZVwiO1xuaW1wb3J0IHsgVG9kb1R5cGUgfSBmcm9tIFwiLi4vdHlwZXMvdG9kb1wiO1xuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgLnRvZG8tbGlzdC1oZWFkZXIge1xuICAgICAgICBwYWRkaW5nOiAxMnB4O1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJHtwYWxldHRlLmdyYXl9O1xuICAgICAgICBcbiAgICAgICAgLnRvZG8tbGlzdC1sYXN0LXRvZG8ge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAudG9kby1saXN0LWhlYWRlci1jb2xvcnMge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAudG9kby1saXN0LWhlYWRlci1jb2xvci1udW0ge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICAgICAgICAgICAgcHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA2cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAudG9kby1saXN0LWhlYWRlci1yb3VuZC1jb2xvcntcbiAgICAgICAgICAgICAgICB3aWR0aDogMTZweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDE2cHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiA1MCU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmJnLWJsdWV7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7cGFsZXR0ZS5ibHVlfTtcbiAgICB9XG4gICAgLmJnLWdyZWVue1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3BhbGV0dGUuZ3JlZW59O1xuICAgIH1cbiAgICAuYmctbmF2eXtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtwYWxldHRlLm5hdnl9O1xuICAgIH1cbiAgICAuYmctb3Jhbmdle1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3BhbGV0dGUub3JhbmdlfTtcbiAgICB9XG4gICAgLmJnLXJlZHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtwYWxldHRlLnJlZH07XG4gICAgfVxuICAgIC5iZy15ZWxsb3d7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7cGFsZXR0ZS55ZWxsb3d9O1xuICAgIH1cbmA7XG5cblxuLy9jb25zdCB0b2RvQ29sb3JOdW1zID0gZ2V0VG9kb0NvbG9yTnVtcygpO1xuXG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgICB0b2RvczogVG9kb1R5cGVbXTtcbn07XG5cbmNvbnN0IFRvZG9MaXN0OiBSZWFjdC5GQzxJUHJvcHM+ID0gKHsgdG9kb3MgfSkgPT4ge1xuXG4gICAgY29uc3QgZ2V0VG9kb0NvbG9yTnVtcyA9ICgpID0+IHtcbiAgICAgICAgbGV0IHJlZCA9IDA7XG4gICAgICAgIGxldCBvcmFuZ2UgPSAwO1xuICAgICAgICBsZXQgeWVsbG93ID0gMDtcbiAgICAgICAgbGV0IGdyZWVuID0gMDtcbiAgICAgICAgbGV0IGJsdWUgPSAwO1xuICAgICAgICBsZXQgbmF2eSA9IDA7XG4gICAgICAgIHRvZG9zLmZvckVhY2goKHRvZG8pID0+IHtcbiAgICAgICAgICAgIHN3aXRjaCAodG9kby5jb2xvcikge1xuICAgICAgICAgICAgICAgIGNhc2UgXCJyZWRcIjpcbiAgICAgICAgICAgICAgICAgICAgcmVkICs9IDE7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJvcmFuZ2VcIjpcbiAgICAgICAgICAgICAgICAgICAgb3JhbmdlICs9IDE7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJ5ZWxsb3dcIjpcbiAgICAgICAgICAgICAgICAgICAgeWVsbG93ICs9IDE7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJncmVlblwiOlxuICAgICAgICAgICAgICAgICAgICBncmVlbiArPSAxO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwiYmx1ZVwiOlxuICAgICAgICAgICAgICAgICAgICBibHVlICs9IDE7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJuYXZ5XCI6XG4gICAgICAgICAgICAgICAgICAgIG5hdnkgKz0gMTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICByZWQsXG4gICAgICAgICAgICBvcmFuZ2UsXG4gICAgICAgICAgICB5ZWxsb3csXG4gICAgICAgICAgICBncmVlbixcbiAgICAgICAgICAgIGJsdWUsXG4gICAgICAgICAgICBuYXZ5LFxuICAgICAgICB9O1xuICAgIH07XG5cbiAgICBjb25zb2xlLmxvZyhnZXRUb2RvQ29sb3JOdW1zKCkpO1xuICAgIGNvbnN0IHRvZG9Db2xvck51bSA9IGdldFRvZG9Db2xvck51bXMoKTtcbiAgICByZXR1cm4gKFxuICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b2RvLWxpc3QtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidG9kby1saXN0LWxhc3QtdG9kb1wiPlxuICAgICAgICAgICAgICAgICAgICDrgqjsnYAgVE9ETzxzcGFuPnt0b2Rvcy5sZW5ndGh96rCcPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvZG8tbGlzdC1oZWFkZXItY29sb3JzXCI+XG4gICAgICAgICAgICAgICAgICAgIHtPYmplY3Qua2V5cyh0b2RvQ29sb3JOdW0pLm1hcCgoY29sb3IsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvZG8tbGlzdC1oZWFkZXItY29sb3ItbnVtXCIga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2B0b2RvLWxpc3QtaGVhZGVyLXJvdW5kLWNvbG9yIGJnLSR7Y29sb3J9YH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57dG9kb0NvbG9yTnVtW2NvbG9yXX3qsJw8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgKTtcbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgVG9kb0xpc3Q7Il0sIm5hbWVzIjpbIlJlYWN0Iiwic3R5bGVkIiwicGFsZXR0ZSIsIkNvbnRhaW5lciIsImRpdiIsImdyYXkiLCJibHVlIiwiZ3JlZW4iLCJuYXZ5Iiwib3JhbmdlIiwicmVkIiwieWVsbG93IiwiVG9kb0xpc3QiLCJ0b2RvcyIsImdldFRvZG9Db2xvck51bXMiLCJmb3JFYWNoIiwidG9kbyIsImNvbG9yIiwiY29uc29sZSIsImxvZyIsInRvZG9Db2xvck51bSIsImNsYXNzTmFtZSIsInAiLCJzcGFuIiwibGVuZ3RoIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsImluZGV4Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/TodoList.tsx\n");

/***/ })

});