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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GameField: () => (/* binding */ GameField)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ \"./node_modules/clsx/dist/clsx.mjs\");\n/* harmony import */ var _game_icons_zero_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../game/icons/zero-icon */ \"./src/components/game/icons/zero-icon.jsx\");\n/* harmony import */ var _icons_cross_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icons/cross-icon */ \"./src/components/game/icons/cross-icon.jsx\");\n/* harmony import */ var _uikit_ui_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../uikit/ui-button */ \"./src/components/uikit/ui-button.jsx\");\n\n\n\n\n\nconst cells = new Array(19 * 19).fill(null);\n//<div className={clsx(className, 'bg-white rounded-2xl shadow-md px-8 pt-5 pb-7')}>\nfunction GameField(param) {\n    let { className } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GameFieldLayout, {\n        className: className,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GameMoveInfo, {\n                actions: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_uikit_ui_button__WEBPACK_IMPORTED_MODULE_4__.UiButton, {\n                            size: \"md\",\n                            variant: \"primary\",\n                            children: \"Ничья\"\n                        }, void 0, false, {\n                            fileName: \"E:\\\\Projects\\\\Js+React\\\\Practice\\\\ReactPractice\\\\5. Крестики нолики\\\\my-next-app\\\\src\\\\components\\\\game\\\\game-field.jsx\",\n                            lineNumber: 16,\n                            columnNumber: 21\n                        }, void 0),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_uikit_ui_button__WEBPACK_IMPORTED_MODULE_4__.UiButton, {\n                            size: \"md\",\n                            variant: \"outline\",\n                            children: \"Сдаться\"\n                        }, void 0, false, {\n                            fileName: \"E:\\\\Projects\\\\Js+React\\\\Practice\\\\ReactPractice\\\\5. Крестики нолики\\\\my-next-app\\\\src\\\\components\\\\game\\\\game-field.jsx\",\n                            lineNumber: 17,\n                            columnNumber: 21\n                        }, void 0)\n                    ]\n                }, void 0, true)\n            }, void 0, false, {\n                fileName: \"E:\\\\Projects\\\\Js+React\\\\Practice\\\\ReactPractice\\\\5. Крестики нолики\\\\my-next-app\\\\src\\\\components\\\\game\\\\game-field.jsx\",\n                lineNumber: 14,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GameGrid, {\n                children: cells.map((_, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GameCell, {}, i, false, {\n                        fileName: \"E:\\\\Projects\\\\Js+React\\\\Practice\\\\ReactPractice\\\\5. Крестики нолики\\\\my-next-app\\\\src\\\\components\\\\game\\\\game-field.jsx\",\n                        lineNumber: 21,\n                        columnNumber: 38\n                    }, this))\n            }, void 0, false, {\n                fileName: \"E:\\\\Projects\\\\Js+React\\\\Practice\\\\ReactPractice\\\\5. Крестики нолики\\\\my-next-app\\\\src\\\\components\\\\game\\\\game-field.jsx\",\n                lineNumber: 20,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\Projects\\\\Js+React\\\\Practice\\\\ReactPractice\\\\5. Крестики нолики\\\\my-next-app\\\\src\\\\components\\\\game\\\\game-field.jsx\",\n        lineNumber: 13,\n        columnNumber: 9\n    }, this);\n}\n_c = GameField;\nfunction GameFieldLayout(param) {\n    let { children, className } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(className, 'bg-white rounded-2xl shadow-md px-8 pt-5 pb-7'),\n        children: children\n    }, void 0, false, {\n        fileName: \"E:\\\\Projects\\\\Js+React\\\\Practice\\\\ReactPractice\\\\5. Крестики нолики\\\\my-next-app\\\\src\\\\components\\\\game\\\\game-field.jsx\",\n        lineNumber: 29,\n        columnNumber: 9\n    }, this);\n}\n_c1 = GameFieldLayout;\nfunction GameMoveInfo(param) {\n    let { actions } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex gap-3 items-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mr-auto\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center gap-1 text-xl leading-tight font-semibold\",\n                        children: [\n                            \"Ход: \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_game_icons_zero_icon__WEBPACK_IMPORTED_MODULE_2__.ZeroIcon, {\n                                className: 'w-5 h-5'\n                            }, void 0, false, {\n                                fileName: \"E:\\\\Projects\\\\Js+React\\\\Practice\\\\ReactPractice\\\\5. Крестики нолики\\\\my-next-app\\\\src\\\\components\\\\game\\\\game-field.jsx\",\n                                lineNumber: 40,\n                                columnNumber: 26\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"E:\\\\Projects\\\\Js+React\\\\Practice\\\\ReactPractice\\\\5. Крестики нолики\\\\my-next-app\\\\src\\\\components\\\\game\\\\game-field.jsx\",\n                        lineNumber: 39,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center gap-1 text-xs text-slate-400\",\n                        children: [\n                            \"Следующий: \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icons_cross_icon__WEBPACK_IMPORTED_MODULE_3__.CrossIcon, {}, void 0, false, {\n                                fileName: \"E:\\\\Projects\\\\Js+React\\\\Practice\\\\ReactPractice\\\\5. Крестики нолики\\\\my-next-app\\\\src\\\\components\\\\game\\\\game-field.jsx\",\n                                lineNumber: 43,\n                                columnNumber: 32\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"E:\\\\Projects\\\\Js+React\\\\Practice\\\\ReactPractice\\\\5. Крестики нолики\\\\my-next-app\\\\src\\\\components\\\\game\\\\game-field.jsx\",\n                        lineNumber: 42,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\Projects\\\\Js+React\\\\Practice\\\\ReactPractice\\\\5. Крестики нолики\\\\my-next-app\\\\src\\\\components\\\\game\\\\game-field.jsx\",\n                lineNumber: 38,\n                columnNumber: 13\n            }, this),\n            actions\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\Projects\\\\Js+React\\\\Practice\\\\ReactPractice\\\\5. Крестики нолики\\\\my-next-app\\\\src\\\\components\\\\game\\\\game-field.jsx\",\n        lineNumber: 37,\n        columnNumber: 9\n    }, this);\n}\n_c2 = GameMoveInfo;\nfunction GameGrid(param) {\n    let { children } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"grid grid-rows-[repeat(19,30px)] grid-cols-[repeat(19,30px)] pl-px pt-px mt-3\",\n        children: children\n    }, void 0, false, {\n        fileName: \"E:\\\\Projects\\\\Js+React\\\\Practice\\\\ReactPractice\\\\5. Крестики нолики\\\\my-next-app\\\\src\\\\components\\\\game\\\\game-field.jsx\",\n        lineNumber: 54,\n        columnNumber: 9\n    }, this);\n}\n_c3 = GameGrid;\nfunction GameCell(param) {\n    let { children } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        className: \"border border-slate-200 -ml-px -mt-px flex items-center justify-center\",\n        children: children\n    }, void 0, false, {\n        fileName: \"E:\\\\Projects\\\\Js+React\\\\Practice\\\\ReactPractice\\\\5. Крестики нолики\\\\my-next-app\\\\src\\\\components\\\\game\\\\game-field.jsx\",\n        lineNumber: 62,\n        columnNumber: 9\n    }, this);\n}\n_c4 = GameCell;\nvar _c, _c1, _c2, _c3, _c4;\n$RefreshReg$(_c, \"GameField\");\n$RefreshReg$(_c1, \"GameFieldLayout\");\n$RefreshReg$(_c2, \"GameMoveInfo\");\n$RefreshReg$(_c3, \"GameGrid\");\n$RefreshReg$(_c4, \"GameCell\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9nYW1lL2dhbWUtZmllbGQuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQXdCO0FBRTJCO0FBQ0o7QUFDRDtBQUU5QyxNQUFNSSxRQUFRLElBQUlDLE1BQU0sS0FBSyxJQUFJQyxJQUFJLENBQUM7QUFFdEMsb0ZBQW9GO0FBRTdFLFNBQVNDLFVBQVUsS0FBYTtRQUFiLEVBQUVDLFNBQVMsRUFBRSxHQUFiO0lBQ3RCLHFCQUNJLDhEQUFDQztRQUFnQkQsV0FBV0E7OzBCQUN4Qiw4REFBQ0U7Z0JBQWFDLHVCQUNWOztzQ0FDSSw4REFBQ1Isc0RBQVFBOzRCQUFDUyxNQUFLOzRCQUFLQyxTQUFRO3NDQUFVOzs7Ozs7c0NBQ3RDLDhEQUFDVixzREFBUUE7NEJBQUNTLE1BQUs7NEJBQUtDLFNBQVE7c0NBQVU7Ozs7Ozs7Ozs7Ozs7MEJBRzlDLDhEQUFDQzswQkFDSVYsTUFBTVcsR0FBRyxDQUFDLENBQUNDLEdBQUdDLGtCQUFNLDhEQUFDQyxjQUFjRDs7Ozs7Ozs7Ozs7Ozs7OztBQUlwRDtLQWRnQlY7QUFnQmhCLFNBQVNFLGdCQUFnQixLQUF1QjtRQUF2QixFQUFFVSxRQUFRLEVBQUVYLFNBQVMsRUFBRSxHQUF2QjtJQUNyQixxQkFDSSw4REFBQ1k7UUFBSVosV0FBV1IsZ0RBQUlBLENBQUNRLFdBQVc7a0JBQzNCVzs7Ozs7O0FBR2I7TUFOU1Y7QUFRVCxTQUFTQyxhQUFhLEtBQVc7UUFBWCxFQUFFQyxPQUFPLEVBQUUsR0FBWDtJQUNsQixxQkFDSSw4REFBQ1M7UUFBSVosV0FBVTs7MEJBQ1gsOERBQUNZO2dCQUFJWixXQUFVOztrQ0FDWCw4REFBQ1k7d0JBQUlaLFdBQVU7OzRCQUE4RDswQ0FDcEUsOERBQUNQLDJEQUFRQTtnQ0FBQ08sV0FBVzs7Ozs7Ozs7Ozs7O2tDQUU5Qiw4REFBQ1k7d0JBQUlaLFdBQVU7OzRCQUFpRDswQ0FDakQsOERBQUNOLHdEQUFTQTs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFJNUJTOzs7Ozs7O0FBR2I7TUFmU0Q7QUFpQlQsU0FBU0ksU0FBUyxLQUFZO1FBQVosRUFBRUssUUFBUSxFQUFFLEdBQVo7SUFDZCxxQkFDSSw4REFBQ0M7UUFBSVosV0FBVTtrQkFDVlc7Ozs7OztBQUdiO01BTlNMO0FBUVQsU0FBU0ksU0FBUyxLQUFZO1FBQVosRUFBRUMsUUFBUSxFQUFFLEdBQVo7SUFDZCxxQkFDSSw4REFBQ0U7UUFDR2IsV0FBVTtrQkFFVFc7Ozs7OztBQUdiO01BUlNEIiwic291cmNlcyI6WyJFOlxcUHJvamVjdHNcXEpzK1JlYWN0XFxQcmFjdGljZVxcUmVhY3RQcmFjdGljZVxcNS4g0JrRgNC10YHRgtC40LrQuCDQvdC+0LvQuNC60LhcXG15LW5leHQtYXBwXFxzcmNcXGNvbXBvbmVudHNcXGdhbWVcXGdhbWUtZmllbGQuanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjbHN4IGZyb20gXCJjbHN4XCI7XHJcblxyXG5pbXBvcnQgeyBaZXJvSWNvbiB9IGZyb20gJy4uL2dhbWUvaWNvbnMvemVyby1pY29uJztcclxuaW1wb3J0IHsgQ3Jvc3NJY29uIH0gZnJvbSBcIi4vaWNvbnMvY3Jvc3MtaWNvblwiO1xyXG5pbXBvcnQgeyBVaUJ1dHRvbiB9IGZyb20gXCIuLi91aWtpdC91aS1idXR0b25cIjtcclxuXHJcbmNvbnN0IGNlbGxzID0gbmV3IEFycmF5KDE5ICogMTkpLmZpbGwobnVsbCk7XHJcblxyXG4vLzxkaXYgY2xhc3NOYW1lPXtjbHN4KGNsYXNzTmFtZSwgJ2JnLXdoaXRlIHJvdW5kZWQtMnhsIHNoYWRvdy1tZCBweC04IHB0LTUgcGItNycpfT5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBHYW1lRmllbGQoeyBjbGFzc05hbWUgfSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8R2FtZUZpZWxkTGF5b3V0IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cclxuICAgICAgICAgICAgPEdhbWVNb3ZlSW5mbyBhY3Rpb25zPXtcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgPFVpQnV0dG9uIHNpemU9XCJtZFwiIHZhcmlhbnQ9XCJwcmltYXJ5XCI+0J3QuNGH0YzRjzwvVWlCdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPFVpQnV0dG9uIHNpemU9XCJtZFwiIHZhcmlhbnQ9XCJvdXRsaW5lXCI+0KHQtNCw0YLRjNGB0Y88L1VpQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgIH0gLz5cclxuICAgICAgICAgICAgPEdhbWVHcmlkPlxyXG4gICAgICAgICAgICAgICAge2NlbGxzLm1hcCgoXywgaSkgPT4gPEdhbWVDZWxsIGtleT17aX0+PC9HYW1lQ2VsbD4pfVxyXG4gICAgICAgICAgICA8L0dhbWVHcmlkPlxyXG4gICAgICAgIDwvR2FtZUZpZWxkTGF5b3V0PlxyXG4gICAgKVxyXG59XHJcblxyXG5mdW5jdGlvbiBHYW1lRmllbGRMYXlvdXQoeyBjaGlsZHJlbiwgY2xhc3NOYW1lIH0pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nsc3goY2xhc3NOYW1lLCAnYmctd2hpdGUgcm91bmRlZC0yeGwgc2hhZG93LW1kIHB4LTggcHQtNSBwYi03Jyl9PlxyXG4gICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIEdhbWVNb3ZlSW5mbyh7IGFjdGlvbnMgfSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTMgaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXItYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMSB0ZXh0LXhsIGxlYWRpbmctdGlnaHQgZm9udC1zZW1pYm9sZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgINCl0L7QtDogPFplcm9JY29uIGNsYXNzTmFtZT17J3ctNSBoLTUnfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0xIHRleHQteHMgdGV4dC1zbGF0ZS00MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICDQodC70LXQtNGD0Y7RidC40Lk6IDxDcm9zc0ljb24gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIHthY3Rpb25zfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5mdW5jdGlvbiBHYW1lR3JpZCh7IGNoaWxkcmVuIH0pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtcm93cy1bcmVwZWF0KDE5LDMwcHgpXSBncmlkLWNvbHMtW3JlcGVhdCgxOSwzMHB4KV0gcGwtcHggcHQtcHggbXQtM1wiPlxyXG4gICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIEdhbWVDZWxsKHsgY2hpbGRyZW4gfSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlciBib3JkZXItc2xhdGUtMjAwIC1tbC1weCAtbXQtcHggZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgKVxyXG59Il0sIm5hbWVzIjpbImNsc3giLCJaZXJvSWNvbiIsIkNyb3NzSWNvbiIsIlVpQnV0dG9uIiwiY2VsbHMiLCJBcnJheSIsImZpbGwiLCJHYW1lRmllbGQiLCJjbGFzc05hbWUiLCJHYW1lRmllbGRMYXlvdXQiLCJHYW1lTW92ZUluZm8iLCJhY3Rpb25zIiwic2l6ZSIsInZhcmlhbnQiLCJHYW1lR3JpZCIsIm1hcCIsIl8iLCJpIiwiR2FtZUNlbGwiLCJjaGlsZHJlbiIsImRpdiIsImJ1dHRvbiJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/game/game-field.jsx\n"));

/***/ })

});