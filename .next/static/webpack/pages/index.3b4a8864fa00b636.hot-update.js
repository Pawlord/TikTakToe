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

/***/ "./src/components/game/game-field.jsx":
/*!********************************************!*\
  !*** ./src/components/game/game-field.jsx ***!
  \********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GameField: () => (/* binding */ GameField)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ \"./node_modules/clsx/dist/clsx.mjs\");\n/* harmony import */ var _game_icons_zero_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../game/icons/zero-icon */ \"./src/components/game/icons/zero-icon.jsx\");\n/* harmony import */ var _icons_cross_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icons/cross-icon */ \"./src/components/game/icons/cross-icon.jsx\");\n/* harmony import */ var _uikit_ui_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../uikit/ui-button */ \"./src/components/uikit/ui-button.jsx\");\n\n\n\n\n\nconst cells = new Array(19 * 19).fill(null);\n//<div className={clsx(className, 'bg-white rounded-2xl shadow-md px-8 pt-5 pb-7')}>\nfunction GameField(param) {\n    let { className } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GameFieldLayout, {\n        className: \"\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GameMoveInfo, {\n                actions: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_uikit_ui_button__WEBPACK_IMPORTED_MODULE_4__.UiButton, {\n                            size: \"md\",\n                            variant: \"primary\",\n                            children: \"Ничья\"\n                        }, void 0, false, {\n                            fileName: \"E:\\\\Projects\\\\Js+React\\\\Practice\\\\ReactPractice\\\\5. Крестики нолики\\\\my-next-app\\\\src\\\\components\\\\game\\\\game-field.jsx\",\n                            lineNumber: 16,\n                            columnNumber: 21\n                        }, void 0),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_uikit_ui_button__WEBPACK_IMPORTED_MODULE_4__.UiButton, {\n                            size: \"md\",\n                            variant: \"outline\",\n                            children: \"Сдаться\"\n                        }, void 0, false, {\n                            fileName: \"E:\\\\Projects\\\\Js+React\\\\Practice\\\\ReactPractice\\\\5. Крестики нолики\\\\my-next-app\\\\src\\\\components\\\\game\\\\game-field.jsx\",\n                            lineNumber: 17,\n                            columnNumber: 21\n                        }, void 0)\n                    ]\n                }, void 0, true)\n            }, void 0, false, {\n                fileName: \"E:\\\\Projects\\\\Js+React\\\\Practice\\\\ReactPractice\\\\5. Крестики нолики\\\\my-next-app\\\\src\\\\components\\\\game\\\\game-field.jsx\",\n                lineNumber: 14,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GameGrid, {\n                children: cells.map((_, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GameCell, {}, i, false, {\n                        fileName: \"E:\\\\Projects\\\\Js+React\\\\Practice\\\\ReactPractice\\\\5. Крестики нолики\\\\my-next-app\\\\src\\\\components\\\\game\\\\game-field.jsx\",\n                        lineNumber: 21,\n                        columnNumber: 38\n                    }, this))\n            }, void 0, false, {\n                fileName: \"E:\\\\Projects\\\\Js+React\\\\Practice\\\\ReactPractice\\\\5. Крестики нолики\\\\my-next-app\\\\src\\\\components\\\\game\\\\game-field.jsx\",\n                lineNumber: 20,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\Projects\\\\Js+React\\\\Practice\\\\ReactPractice\\\\5. Крестики нолики\\\\my-next-app\\\\src\\\\components\\\\game\\\\game-field.jsx\",\n        lineNumber: 13,\n        columnNumber: 9\n    }, this);\n}\n_c = GameField;\nfunction GameFieldLayout(param) {\n    let { children, className } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(className, 'bg-white rounded-2xl shadow-md px-8 pt-5 pb-7'),\n        children: children\n    }, void 0, false, {\n        fileName: \"E:\\\\Projects\\\\Js+React\\\\Practice\\\\ReactPractice\\\\5. Крестики нолики\\\\my-next-app\\\\src\\\\components\\\\game\\\\game-field.jsx\",\n        lineNumber: 29,\n        columnNumber: 9\n    }, this);\n}\n_c1 = GameFieldLayout;\nfunction GameMoveInfo(param) {\n    let { actions } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex gap-3 items-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mr-auto\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center gap-1 text-xl leading-tight font-semibold\",\n                        children: [\n                            \"Ход: \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_game_icons_zero_icon__WEBPACK_IMPORTED_MODULE_2__.ZeroIcon, {\n                                className: 'w-5 h-5'\n                            }, void 0, false, {\n                                fileName: \"E:\\\\Projects\\\\Js+React\\\\Practice\\\\ReactPractice\\\\5. Крестики нолики\\\\my-next-app\\\\src\\\\components\\\\game\\\\game-field.jsx\",\n                                lineNumber: 40,\n                                columnNumber: 26\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"E:\\\\Projects\\\\Js+React\\\\Practice\\\\ReactPractice\\\\5. Крестики нолики\\\\my-next-app\\\\src\\\\components\\\\game\\\\game-field.jsx\",\n                        lineNumber: 39,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center gap-1 text-xs text-slate-400\",\n                        children: [\n                            \"Следующий: \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icons_cross_icon__WEBPACK_IMPORTED_MODULE_3__.CrossIcon, {}, void 0, false, {\n                                fileName: \"E:\\\\Projects\\\\Js+React\\\\Practice\\\\ReactPractice\\\\5. Крестики нолики\\\\my-next-app\\\\src\\\\components\\\\game\\\\game-field.jsx\",\n                                lineNumber: 43,\n                                columnNumber: 32\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"E:\\\\Projects\\\\Js+React\\\\Practice\\\\ReactPractice\\\\5. Крестики нолики\\\\my-next-app\\\\src\\\\components\\\\game\\\\game-field.jsx\",\n                        lineNumber: 42,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\Projects\\\\Js+React\\\\Practice\\\\ReactPractice\\\\5. Крестики нолики\\\\my-next-app\\\\src\\\\components\\\\game\\\\game-field.jsx\",\n                lineNumber: 38,\n                columnNumber: 13\n            }, this),\n            actions\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\Projects\\\\Js+React\\\\Practice\\\\ReactPractice\\\\5. Крестики нолики\\\\my-next-app\\\\src\\\\components\\\\game\\\\game-field.jsx\",\n        lineNumber: 37,\n        columnNumber: 9\n    }, this);\n}\n_c2 = GameMoveInfo;\nfunction GameGrid(param) {\n    let { children } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"grid grid-rows-[repeat(19,30px)] grid-cols-[repeat(19,30px)] pl-px pt-px mt-3\",\n        children: children\n    }, void 0, false, {\n        fileName: \"E:\\\\Projects\\\\Js+React\\\\Practice\\\\ReactPractice\\\\5. Крестики нолики\\\\my-next-app\\\\src\\\\components\\\\game\\\\game-field.jsx\",\n        lineNumber: 54,\n        columnNumber: 9\n    }, this);\n}\n_c3 = GameGrid;\nfunction GameCell(param) {\n    let { children } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        className: \"border border-slate-200 -ml-px -mt-px flex items-center justify-center\",\n        children: children\n    }, void 0, false, {\n        fileName: \"E:\\\\Projects\\\\Js+React\\\\Practice\\\\ReactPractice\\\\5. Крестики нолики\\\\my-next-app\\\\src\\\\components\\\\game\\\\game-field.jsx\",\n        lineNumber: 62,\n        columnNumber: 9\n    }, this);\n}\n_c4 = GameCell;\nvar _c, _c1, _c2, _c3, _c4;\n$RefreshReg$(_c, \"GameField\");\n$RefreshReg$(_c1, \"GameFieldLayout\");\n$RefreshReg$(_c2, \"GameMoveInfo\");\n$RefreshReg$(_c3, \"GameGrid\");\n$RefreshReg$(_c4, \"GameCell\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9nYW1lL2dhbWUtZmllbGQuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQXdCO0FBRTJCO0FBQ0o7QUFDRDtBQUU5QyxNQUFNSSxRQUFRLElBQUlDLE1BQU0sS0FBSyxJQUFJQyxJQUFJLENBQUM7QUFFdEMsb0ZBQW9GO0FBRTdFLFNBQVNDLFVBQVUsS0FBYTtRQUFiLEVBQUVDLFNBQVMsRUFBRSxHQUFiO0lBQ3RCLHFCQUNJLDhEQUFDQztRQUFnQkQsV0FBVTs7MEJBQ3ZCLDhEQUFDRTtnQkFBYUMsdUJBQ1Y7O3NDQUNJLDhEQUFDUixzREFBUUE7NEJBQUNTLE1BQUs7NEJBQUtDLFNBQVE7c0NBQVU7Ozs7OztzQ0FDdEMsOERBQUNWLHNEQUFRQTs0QkFBQ1MsTUFBSzs0QkFBS0MsU0FBUTtzQ0FBVTs7Ozs7Ozs7Ozs7OzswQkFHOUMsOERBQUNDOzBCQUNJVixNQUFNVyxHQUFHLENBQUMsQ0FBQ0MsR0FBR0Msa0JBQU0sOERBQUNDLGNBQWNEOzs7Ozs7Ozs7Ozs7Ozs7O0FBSXBEO0tBZGdCVjtBQWdCaEIsU0FBU0UsZ0JBQWdCLEtBQXVCO1FBQXZCLEVBQUVVLFFBQVEsRUFBRVgsU0FBUyxFQUFFLEdBQXZCO0lBQ3JCLHFCQUNJLDhEQUFDWTtRQUFJWixXQUFXUixnREFBSUEsQ0FBQ1EsV0FBVztrQkFDM0JXOzs7Ozs7QUFHYjtNQU5TVjtBQVFULFNBQVNDLGFBQWEsS0FBVztRQUFYLEVBQUVDLE9BQU8sRUFBRSxHQUFYO0lBQ2xCLHFCQUNJLDhEQUFDUztRQUFJWixXQUFVOzswQkFDWCw4REFBQ1k7Z0JBQUlaLFdBQVU7O2tDQUNYLDhEQUFDWTt3QkFBSVosV0FBVTs7NEJBQThEOzBDQUNwRSw4REFBQ1AsMkRBQVFBO2dDQUFDTyxXQUFXOzs7Ozs7Ozs7Ozs7a0NBRTlCLDhEQUFDWTt3QkFBSVosV0FBVTs7NEJBQWlEOzBDQUNqRCw4REFBQ04sd0RBQVNBOzs7Ozs7Ozs7Ozs7Ozs7OztZQUk1QlM7Ozs7Ozs7QUFHYjtNQWZTRDtBQWlCVCxTQUFTSSxTQUFTLEtBQVk7UUFBWixFQUFFSyxRQUFRLEVBQUUsR0FBWjtJQUNkLHFCQUNJLDhEQUFDQztRQUFJWixXQUFVO2tCQUNWVzs7Ozs7O0FBR2I7TUFOU0w7QUFRVCxTQUFTSSxTQUFTLEtBQVk7UUFBWixFQUFFQyxRQUFRLEVBQUUsR0FBWjtJQUNkLHFCQUNJLDhEQUFDRTtRQUNHYixXQUFVO2tCQUVUVzs7Ozs7O0FBR2I7TUFSU0QiLCJzb3VyY2VzIjpbIkU6XFxQcm9qZWN0c1xcSnMrUmVhY3RcXFByYWN0aWNlXFxSZWFjdFByYWN0aWNlXFw1LiDQmtGA0LXRgdGC0LjQutC4INC90L7Qu9C40LrQuFxcbXktbmV4dC1hcHBcXHNyY1xcY29tcG9uZW50c1xcZ2FtZVxcZ2FtZS1maWVsZC5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNsc3ggZnJvbSBcImNsc3hcIjtcclxuXHJcbmltcG9ydCB7IFplcm9JY29uIH0gZnJvbSAnLi4vZ2FtZS9pY29ucy96ZXJvLWljb24nO1xyXG5pbXBvcnQgeyBDcm9zc0ljb24gfSBmcm9tIFwiLi9pY29ucy9jcm9zcy1pY29uXCI7XHJcbmltcG9ydCB7IFVpQnV0dG9uIH0gZnJvbSBcIi4uL3Vpa2l0L3VpLWJ1dHRvblwiO1xyXG5cclxuY29uc3QgY2VsbHMgPSBuZXcgQXJyYXkoMTkgKiAxOSkuZmlsbChudWxsKTtcclxuXHJcbi8vPGRpdiBjbGFzc05hbWU9e2Nsc3goY2xhc3NOYW1lLCAnYmctd2hpdGUgcm91bmRlZC0yeGwgc2hhZG93LW1kIHB4LTggcHQtNSBwYi03Jyl9PlxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEdhbWVGaWVsZCh7IGNsYXNzTmFtZSB9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxHYW1lRmllbGRMYXlvdXQgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgICAgIDxHYW1lTW92ZUluZm8gYWN0aW9ucz17XHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgIDxVaUJ1dHRvbiBzaXplPVwibWRcIiB2YXJpYW50PVwicHJpbWFyeVwiPtCd0LjRh9GM0Y88L1VpQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxVaUJ1dHRvbiBzaXplPVwibWRcIiB2YXJpYW50PVwib3V0bGluZVwiPtCh0LTQsNGC0YzRgdGPPC9VaUJ1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICB9IC8+XHJcbiAgICAgICAgICAgIDxHYW1lR3JpZD5cclxuICAgICAgICAgICAgICAgIHtjZWxscy5tYXAoKF8sIGkpID0+IDxHYW1lQ2VsbCBrZXk9e2l9PjwvR2FtZUNlbGw+KX1cclxuICAgICAgICAgICAgPC9HYW1lR3JpZD5cclxuICAgICAgICA8L0dhbWVGaWVsZExheW91dD5cclxuICAgIClcclxufVxyXG5cclxuZnVuY3Rpb24gR2FtZUZpZWxkTGF5b3V0KHsgY2hpbGRyZW4sIGNsYXNzTmFtZSB9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbHN4KGNsYXNzTmFtZSwgJ2JnLXdoaXRlIHJvdW5kZWQtMnhsIHNoYWRvdy1tZCBweC04IHB0LTUgcGItNycpfT5cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5mdW5jdGlvbiBHYW1lTW92ZUluZm8oeyBhY3Rpb25zIH0pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC0zIGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1yLWF1dG9cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTEgdGV4dC14bCBsZWFkaW5nLXRpZ2h0IGZvbnQtc2VtaWJvbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICDQpdC+0LQ6IDxaZXJvSWNvbiBjbGFzc05hbWU9eyd3LTUgaC01J30gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMSB0ZXh0LXhzIHRleHQtc2xhdGUtNDAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAg0KHQu9C10LTRg9GO0YnQuNC5OiA8Q3Jvc3NJY29uIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICB7YWN0aW9uc31cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZnVuY3Rpb24gR2FtZUdyaWQoeyBjaGlsZHJlbiB9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLXJvd3MtW3JlcGVhdCgxOSwzMHB4KV0gZ3JpZC1jb2xzLVtyZXBlYXQoMTksMzBweCldIHBsLXB4IHB0LXB4IG10LTNcIj5cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5mdW5jdGlvbiBHYW1lQ2VsbCh7IGNoaWxkcmVuIH0pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLXNsYXRlLTIwMCAtbWwtcHggLW10LXB4IGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgIClcclxufSJdLCJuYW1lcyI6WyJjbHN4IiwiWmVyb0ljb24iLCJDcm9zc0ljb24iLCJVaUJ1dHRvbiIsImNlbGxzIiwiQXJyYXkiLCJmaWxsIiwiR2FtZUZpZWxkIiwiY2xhc3NOYW1lIiwiR2FtZUZpZWxkTGF5b3V0IiwiR2FtZU1vdmVJbmZvIiwiYWN0aW9ucyIsInNpemUiLCJ2YXJpYW50IiwiR2FtZUdyaWQiLCJtYXAiLCJfIiwiaSIsIkdhbWVDZWxsIiwiY2hpbGRyZW4iLCJkaXYiLCJidXR0b24iXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/game/game-field.jsx\n"));

/***/ })

});