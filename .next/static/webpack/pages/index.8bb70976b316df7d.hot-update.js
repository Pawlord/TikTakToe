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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GameField: () => (/* binding */ GameField)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ \"./node_modules/clsx/dist/clsx.mjs\");\n/* harmony import */ var _game_icons_zero_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../game/icons/zero-icon */ \"./src/components/game/icons/zero-icon.jsx\");\n/* harmony import */ var _icons_cross_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icons/cross-icon */ \"./src/components/game/icons/cross-icon.jsx\");\n/* harmony import */ var _uikit_ui_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../uikit/ui-button */ \"./src/components/uikit/ui-button.jsx\");\n\n\n\n\n\nconst cells = new Array(19 * 19).fill(null);\nfunction GameField(param) {\n    let { className } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(className, 'bg-white rounded-2xl shadow-md px-8 pt-5 pb-7'),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex gap-3 items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mr-auto\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center gap-1 text-xl leading-tight font-semibold\",\n                                children: [\n                                    \"Ход: \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_game_icons_zero_icon__WEBPACK_IMPORTED_MODULE_2__.ZeroIcon, {\n                                        className: 'w-5 h-5'\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\Projects\\\\Js+React\\\\Practice\\\\ReactPractice\\\\5. Крестики нолики\\\\my-next-app\\\\src\\\\components\\\\game\\\\game-field.jsx\",\n                                        lineNumber: 15,\n                                        columnNumber: 30\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"E:\\\\Projects\\\\Js+React\\\\Practice\\\\ReactPractice\\\\5. Крестики нолики\\\\my-next-app\\\\src\\\\components\\\\game\\\\game-field.jsx\",\n                                lineNumber: 14,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center gap-1 text-xs text-slate-400\",\n                                children: [\n                                    \"Следующий: \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icons_cross_icon__WEBPACK_IMPORTED_MODULE_3__.CrossIcon, {}, void 0, false, {\n                                        fileName: \"E:\\\\Projects\\\\Js+React\\\\Practice\\\\ReactPractice\\\\5. Крестики нолики\\\\my-next-app\\\\src\\\\components\\\\game\\\\game-field.jsx\",\n                                        lineNumber: 18,\n                                        columnNumber: 36\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"E:\\\\Projects\\\\Js+React\\\\Practice\\\\ReactPractice\\\\5. Крестики нолики\\\\my-next-app\\\\src\\\\components\\\\game\\\\game-field.jsx\",\n                                lineNumber: 17,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"E:\\\\Projects\\\\Js+React\\\\Practice\\\\ReactPractice\\\\5. Крестики нолики\\\\my-next-app\\\\src\\\\components\\\\game\\\\game-field.jsx\",\n                        lineNumber: 13,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_uikit_ui_button__WEBPACK_IMPORTED_MODULE_4__.UiButton, {\n                        size: \"md\",\n                        variant: \"primary\",\n                        children: \"Ничья\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Projects\\\\Js+React\\\\Practice\\\\ReactPractice\\\\5. Крестики нолики\\\\my-next-app\\\\src\\\\components\\\\game\\\\game-field.jsx\",\n                        lineNumber: 22,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_uikit_ui_button__WEBPACK_IMPORTED_MODULE_4__.UiButton, {\n                        size: \"md\",\n                        variant: \"outline\",\n                        children: \"Сдаться\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Projects\\\\Js+React\\\\Practice\\\\ReactPractice\\\\5. Крестики нолики\\\\my-next-app\\\\src\\\\components\\\\game\\\\game-field.jsx\",\n                        lineNumber: 23,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\Projects\\\\Js+React\\\\Practice\\\\ReactPractice\\\\5. Крестики нолики\\\\my-next-app\\\\src\\\\components\\\\game\\\\game-field.jsx\",\n                lineNumber: 12,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-rows-[repeat(19,30px)] grid-cols-[repeat(19,30px)] pl-px pt-px mt-3\",\n                children: cells.map((_, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"border border-slate-200 -ml-px -mt-px flex items-center justify-center\"\n                    }, i, false, {\n                        fileName: \"E:\\\\Projects\\\\Js+React\\\\Practice\\\\ReactPractice\\\\5. Крестики нолики\\\\my-next-app\\\\src\\\\components\\\\game\\\\game-field.jsx\",\n                        lineNumber: 27,\n                        columnNumber: 38\n                    }, this))\n            }, void 0, false, {\n                fileName: \"E:\\\\Projects\\\\Js+React\\\\Practice\\\\ReactPractice\\\\5. Крестики нолики\\\\my-next-app\\\\src\\\\components\\\\game\\\\game-field.jsx\",\n                lineNumber: 26,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\Projects\\\\Js+React\\\\Practice\\\\ReactPractice\\\\5. Крестики нолики\\\\my-next-app\\\\src\\\\components\\\\game\\\\game-field.jsx\",\n        lineNumber: 11,\n        columnNumber: 9\n    }, this);\n}\n_c = GameField;\nfunction GameFieldLayout(param) {\n    let { children, className } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(className, 'bg-white rounded-2xl shadow-md px-8 pt-5 pb-7'),\n        children: children\n    }, void 0, false, {\n        fileName: \"E:\\\\Projects\\\\Js+React\\\\Practice\\\\ReactPractice\\\\5. Крестики нолики\\\\my-next-app\\\\src\\\\components\\\\game\\\\game-field.jsx\",\n        lineNumber: 35,\n        columnNumber: 9\n    }, this);\n}\n_c1 = GameFieldLayout;\nfunction GameMoveInfo(param) {\n    let { actions } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex gap-3 items-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mr-auto\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center gap-1 text-xl leading-tight font-semibold\",\n                        children: [\n                            \"Ход: \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_game_icons_zero_icon__WEBPACK_IMPORTED_MODULE_2__.ZeroIcon, {\n                                className: 'w-5 h-5'\n                            }, void 0, false, {\n                                fileName: \"E:\\\\Projects\\\\Js+React\\\\Practice\\\\ReactPractice\\\\5. Крестики нолики\\\\my-next-app\\\\src\\\\components\\\\game\\\\game-field.jsx\",\n                                lineNumber: 46,\n                                columnNumber: 26\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"E:\\\\Projects\\\\Js+React\\\\Practice\\\\ReactPractice\\\\5. Крестики нолики\\\\my-next-app\\\\src\\\\components\\\\game\\\\game-field.jsx\",\n                        lineNumber: 45,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center gap-1 text-xs text-slate-400\",\n                        children: [\n                            \"Следующий: \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icons_cross_icon__WEBPACK_IMPORTED_MODULE_3__.CrossIcon, {}, void 0, false, {\n                                fileName: \"E:\\\\Projects\\\\Js+React\\\\Practice\\\\ReactPractice\\\\5. Крестики нолики\\\\my-next-app\\\\src\\\\components\\\\game\\\\game-field.jsx\",\n                                lineNumber: 49,\n                                columnNumber: 32\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"E:\\\\Projects\\\\Js+React\\\\Practice\\\\ReactPractice\\\\5. Крестики нолики\\\\my-next-app\\\\src\\\\components\\\\game\\\\game-field.jsx\",\n                        lineNumber: 48,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\Projects\\\\Js+React\\\\Practice\\\\ReactPractice\\\\5. Крестики нолики\\\\my-next-app\\\\src\\\\components\\\\game\\\\game-field.jsx\",\n                lineNumber: 44,\n                columnNumber: 13\n            }, this),\n            actions\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\Projects\\\\Js+React\\\\Practice\\\\ReactPractice\\\\5. Крестики нолики\\\\my-next-app\\\\src\\\\components\\\\game\\\\game-field.jsx\",\n        lineNumber: 43,\n        columnNumber: 9\n    }, this);\n}\n_c2 = GameMoveInfo;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"GameField\");\n$RefreshReg$(_c1, \"GameFieldLayout\");\n$RefreshReg$(_c2, \"GameMoveInfo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9nYW1lL2dhbWUtZmllbGQuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQXdCO0FBRTJCO0FBQ0o7QUFDRDtBQUU5QyxNQUFNSSxRQUFRLElBQUlDLE1BQU0sS0FBSyxJQUFJQyxJQUFJLENBQUM7QUFFL0IsU0FBU0MsVUFBVSxLQUFhO1FBQWIsRUFBRUMsU0FBUyxFQUFFLEdBQWI7SUFDdEIscUJBQ0ksOERBQUNDO1FBQUlELFdBQVdSLGdEQUFJQSxDQUFDUSxXQUFXOzswQkFDNUIsOERBQUNDO2dCQUFJRCxXQUFVOztrQ0FDWCw4REFBQ0M7d0JBQUlELFdBQVU7OzBDQUNYLDhEQUFDQztnQ0FBSUQsV0FBVTs7b0NBQThEO2tEQUNwRSw4REFBQ1AsMkRBQVFBO3dDQUFDTyxXQUFXOzs7Ozs7Ozs7Ozs7MENBRTlCLDhEQUFDQztnQ0FBSUQsV0FBVTs7b0NBQWlEO2tEQUNqRCw4REFBQ04sd0RBQVNBOzs7Ozs7Ozs7Ozs7Ozs7OztrQ0FJN0IsOERBQUNDLHNEQUFRQTt3QkFBQ08sTUFBSzt3QkFBS0MsU0FBUTtrQ0FBVTs7Ozs7O2tDQUN0Qyw4REFBQ1Isc0RBQVFBO3dCQUFDTyxNQUFLO3dCQUFLQyxTQUFRO2tDQUFVOzs7Ozs7Ozs7Ozs7MEJBRzFDLDhEQUFDRjtnQkFBSUQsV0FBVTswQkFDVkosTUFBTVEsR0FBRyxDQUFDLENBQUNDLEdBQUdDLGtCQUFNLDhEQUFDQzt3QkFBZVAsV0FBVTt1QkFBYk07Ozs7Ozs7Ozs7Ozs7Ozs7QUFJbEQ7S0F0QmdCUDtBQXdCaEIsU0FBU1MsZ0JBQWdCLEtBQXVCO1FBQXZCLEVBQUVDLFFBQVEsRUFBRVQsU0FBUyxFQUFFLEdBQXZCO0lBQ3JCLHFCQUNJLDhEQUFDQztRQUFJRCxXQUFXUixnREFBSUEsQ0FBQ1EsV0FBVztrQkFDM0JTOzs7Ozs7QUFHYjtNQU5TRDtBQVFULFNBQVNFLGFBQWEsS0FBVztRQUFYLEVBQUVDLE9BQU8sRUFBRSxHQUFYO0lBQ2xCLHFCQUNJLDhEQUFDVjtRQUFJRCxXQUFVOzswQkFDWCw4REFBQ0M7Z0JBQUlELFdBQVU7O2tDQUNYLDhEQUFDQzt3QkFBSUQsV0FBVTs7NEJBQThEOzBDQUNwRSw4REFBQ1AsMkRBQVFBO2dDQUFDTyxXQUFXOzs7Ozs7Ozs7Ozs7a0NBRTlCLDhEQUFDQzt3QkFBSUQsV0FBVTs7NEJBQWlEOzBDQUNqRCw4REFBQ04sd0RBQVNBOzs7Ozs7Ozs7Ozs7Ozs7OztZQUk1QmlCOzs7Ozs7O0FBR2I7TUFmU0QiLCJzb3VyY2VzIjpbIkU6XFxQcm9qZWN0c1xcSnMrUmVhY3RcXFByYWN0aWNlXFxSZWFjdFByYWN0aWNlXFw1LiDQmtGA0LXRgdGC0LjQutC4INC90L7Qu9C40LrQuFxcbXktbmV4dC1hcHBcXHNyY1xcY29tcG9uZW50c1xcZ2FtZVxcZ2FtZS1maWVsZC5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNsc3ggZnJvbSBcImNsc3hcIjtcclxuXHJcbmltcG9ydCB7IFplcm9JY29uIH0gZnJvbSAnLi4vZ2FtZS9pY29ucy96ZXJvLWljb24nO1xyXG5pbXBvcnQgeyBDcm9zc0ljb24gfSBmcm9tIFwiLi9pY29ucy9jcm9zcy1pY29uXCI7XHJcbmltcG9ydCB7IFVpQnV0dG9uIH0gZnJvbSBcIi4uL3Vpa2l0L3VpLWJ1dHRvblwiO1xyXG5cclxuY29uc3QgY2VsbHMgPSBuZXcgQXJyYXkoMTkgKiAxOSkuZmlsbChudWxsKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBHYW1lRmllbGQoeyBjbGFzc05hbWUgfSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzeChjbGFzc05hbWUsICdiZy13aGl0ZSByb3VuZGVkLTJ4bCBzaGFkb3ctbWQgcHgtOCBwdC01IHBiLTcnKX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtMyBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXItYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTEgdGV4dC14bCBsZWFkaW5nLXRpZ2h0IGZvbnQtc2VtaWJvbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAg0KXQvtC0OiA8WmVyb0ljb24gY2xhc3NOYW1lPXsndy01IGgtNSd9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMSB0ZXh0LXhzIHRleHQtc2xhdGUtNDAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgINCh0LvQtdC00YPRjtGJ0LjQuTogPENyb3NzSWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPFVpQnV0dG9uIHNpemU9XCJtZFwiIHZhcmlhbnQ9XCJwcmltYXJ5XCI+0J3QuNGH0YzRjzwvVWlCdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8VWlCdXR0b24gc2l6ZT1cIm1kXCIgdmFyaWFudD1cIm91dGxpbmVcIj7QodC00LDRgtGM0YHRjzwvVWlCdXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtcm93cy1bcmVwZWF0KDE5LDMwcHgpXSBncmlkLWNvbHMtW3JlcGVhdCgxOSwzMHB4KV0gcGwtcHggcHQtcHggbXQtM1wiPlxyXG4gICAgICAgICAgICAgICAge2NlbGxzLm1hcCgoXywgaSkgPT4gPGJ1dHRvbiBrZXk9e2l9IGNsYXNzTmFtZT1cImJvcmRlciBib3JkZXItc2xhdGUtMjAwIC1tbC1weCAtbXQtcHggZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIiA+PC9idXR0b24+KX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIEdhbWVGaWVsZExheW91dCh7IGNoaWxkcmVuLCBjbGFzc05hbWUgfSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzeChjbGFzc05hbWUsICdiZy13aGl0ZSByb3VuZGVkLTJ4bCBzaGFkb3ctbWQgcHgtOCBwdC01IHBiLTcnKX0+XHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZnVuY3Rpb24gR2FtZU1vdmVJbmZvKHsgYWN0aW9ucyB9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtMyBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtci1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0xIHRleHQteGwgbGVhZGluZy10aWdodCBmb250LXNlbWlib2xkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAg0KXQvtC0OiA8WmVyb0ljb24gY2xhc3NOYW1lPXsndy01IGgtNSd9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTEgdGV4dC14cyB0ZXh0LXNsYXRlLTQwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgINCh0LvQtdC00YPRjtGJ0LjQuTogPENyb3NzSWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAge2FjdGlvbnN9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn0iXSwibmFtZXMiOlsiY2xzeCIsIlplcm9JY29uIiwiQ3Jvc3NJY29uIiwiVWlCdXR0b24iLCJjZWxscyIsIkFycmF5IiwiZmlsbCIsIkdhbWVGaWVsZCIsImNsYXNzTmFtZSIsImRpdiIsInNpemUiLCJ2YXJpYW50IiwibWFwIiwiXyIsImkiLCJidXR0b24iLCJHYW1lRmllbGRMYXlvdXQiLCJjaGlsZHJlbiIsIkdhbWVNb3ZlSW5mbyIsImFjdGlvbnMiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/game/game-field.jsx\n"));

/***/ })

});