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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GameField: () => (/* binding */ GameField)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ \"./node_modules/clsx/dist/clsx.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _game_icons_zero_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../game/icons/zero-icon */ \"./src/components/game/icons/zero-icon.jsx\");\n/* harmony import */ var _icons_cross_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icons/cross-icon */ \"./src/components/game/icons/cross-icon.jsx\");\n/* harmony import */ var _uikit_ui_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../uikit/ui-button */ \"./src/components/uikit/ui-button.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst GAME_SYMBOLS = {\n    ZERO: 'zero',\n    CROSS: 'cross',\n    TRIANGLE: 'triangle',\n    SQUARE: 'square'\n};\nfunction GameField(param) {\n    let { className } = param;\n    _s();\n    const [cells, setCells] = react__WEBPACK_IMPORTED_MODULE_2___default().useState({\n        \"GameField.useState\": ()=>new Array(19 * 19).fill(null)\n    }[\"GameField.useState\"]);\n    const actions = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_uikit_ui_button__WEBPACK_IMPORTED_MODULE_5__.UiButton, {\n                size: \"md\",\n                variant: \"primary\",\n                children: \"Ничья\"\n            }, void 0, false, {\n                fileName: \"E:\\\\Projects\\\\Js+React\\\\Practice\\\\ReactPractice\\\\5. Крестики нолики\\\\my-next-app\\\\src\\\\components\\\\game\\\\game-field.jsx\",\n                lineNumber: 21,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_uikit_ui_button__WEBPACK_IMPORTED_MODULE_5__.UiButton, {\n                size: \"md\",\n                variant: \"outline\",\n                children: \"Сдаться\"\n            }, void 0, false, {\n                fileName: \"E:\\\\Projects\\\\Js+React\\\\Practice\\\\ReactPractice\\\\5. Крестики нолики\\\\my-next-app\\\\src\\\\components\\\\game\\\\game-field.jsx\",\n                lineNumber: 22,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GameFieldLayout, {\n        className: className,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GameMoveInfo, {\n                actions: actions\n            }, void 0, false, {\n                fileName: \"E:\\\\Projects\\\\Js+React\\\\Practice\\\\ReactPractice\\\\5. Крестики нолики\\\\my-next-app\\\\src\\\\components\\\\game\\\\game-field.jsx\",\n                lineNumber: 27,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GameGrid, {\n                children: cells.map((_, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GameCell, {}, i, false, {\n                        fileName: \"E:\\\\Projects\\\\Js+React\\\\Practice\\\\ReactPractice\\\\5. Крестики нолики\\\\my-next-app\\\\src\\\\components\\\\game\\\\game-field.jsx\",\n                        lineNumber: 29,\n                        columnNumber: 38\n                    }, this))\n            }, void 0, false, {\n                fileName: \"E:\\\\Projects\\\\Js+React\\\\Practice\\\\ReactPractice\\\\5. Крестики нолики\\\\my-next-app\\\\src\\\\components\\\\game\\\\game-field.jsx\",\n                lineNumber: 28,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\Projects\\\\Js+React\\\\Practice\\\\ReactPractice\\\\5. Крестики нолики\\\\my-next-app\\\\src\\\\components\\\\game\\\\game-field.jsx\",\n        lineNumber: 26,\n        columnNumber: 9\n    }, this);\n}\n_s(GameField, \"mWpvXZ30JxPbS/6n+FDU/Af2ytk=\");\n_c = GameField;\nfunction GameFieldLayout(param) {\n    let { children, className } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(className, 'bg-white rounded-2xl shadow-md px-8 pt-5 pb-7'),\n        children: children\n    }, void 0, false, {\n        fileName: \"E:\\\\Projects\\\\Js+React\\\\Practice\\\\ReactPractice\\\\5. Крестики нолики\\\\my-next-app\\\\src\\\\components\\\\game\\\\game-field.jsx\",\n        lineNumber: 37,\n        columnNumber: 9\n    }, this);\n}\n_c1 = GameFieldLayout;\nfunction GameMoveInfo(param) {\n    let { actions } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex gap-3 items-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mr-auto\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center gap-1 text-xl leading-tight font-semibold\",\n                        children: [\n                            \"Ход: \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_game_icons_zero_icon__WEBPACK_IMPORTED_MODULE_3__.ZeroIcon, {\n                                className: 'w-5 h-5'\n                            }, void 0, false, {\n                                fileName: \"E:\\\\Projects\\\\Js+React\\\\Practice\\\\ReactPractice\\\\5. Крестики нолики\\\\my-next-app\\\\src\\\\components\\\\game\\\\game-field.jsx\",\n                                lineNumber: 48,\n                                columnNumber: 26\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"E:\\\\Projects\\\\Js+React\\\\Practice\\\\ReactPractice\\\\5. Крестики нолики\\\\my-next-app\\\\src\\\\components\\\\game\\\\game-field.jsx\",\n                        lineNumber: 47,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center gap-1 text-xs text-slate-400\",\n                        children: [\n                            \"Следующий: \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icons_cross_icon__WEBPACK_IMPORTED_MODULE_4__.CrossIcon, {}, void 0, false, {\n                                fileName: \"E:\\\\Projects\\\\Js+React\\\\Practice\\\\ReactPractice\\\\5. Крестики нолики\\\\my-next-app\\\\src\\\\components\\\\game\\\\game-field.jsx\",\n                                lineNumber: 51,\n                                columnNumber: 32\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"E:\\\\Projects\\\\Js+React\\\\Practice\\\\ReactPractice\\\\5. Крестики нолики\\\\my-next-app\\\\src\\\\components\\\\game\\\\game-field.jsx\",\n                        lineNumber: 50,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\Projects\\\\Js+React\\\\Practice\\\\ReactPractice\\\\5. Крестики нолики\\\\my-next-app\\\\src\\\\components\\\\game\\\\game-field.jsx\",\n                lineNumber: 46,\n                columnNumber: 13\n            }, this),\n            actions\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\Projects\\\\Js+React\\\\Practice\\\\ReactPractice\\\\5. Крестики нолики\\\\my-next-app\\\\src\\\\components\\\\game\\\\game-field.jsx\",\n        lineNumber: 45,\n        columnNumber: 9\n    }, this);\n}\n_c2 = GameMoveInfo;\nfunction GameGrid(param) {\n    let { children } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"grid grid-rows-[repeat(19,30px)] grid-cols-[repeat(19,30px)] pl-px pt-px mt-3\",\n        children: children\n    }, void 0, false, {\n        fileName: \"E:\\\\Projects\\\\Js+React\\\\Practice\\\\ReactPractice\\\\5. Крестики нолики\\\\my-next-app\\\\src\\\\components\\\\game\\\\game-field.jsx\",\n        lineNumber: 62,\n        columnNumber: 9\n    }, this);\n}\n_c3 = GameGrid;\nfunction GameCell(param) {\n    let { children } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        className: \"border border-slate-200 -ml-px -mt-px flex items-center justify-center\",\n        children: children\n    }, void 0, false, {\n        fileName: \"E:\\\\Projects\\\\Js+React\\\\Practice\\\\ReactPractice\\\\5. Крестики нолики\\\\my-next-app\\\\src\\\\components\\\\game\\\\game-field.jsx\",\n        lineNumber: 70,\n        columnNumber: 9\n    }, this);\n}\n_c4 = GameCell;\nvar _c, _c1, _c2, _c3, _c4;\n$RefreshReg$(_c, \"GameField\");\n$RefreshReg$(_c1, \"GameFieldLayout\");\n$RefreshReg$(_c2, \"GameMoveInfo\");\n$RefreshReg$(_c3, \"GameGrid\");\n$RefreshReg$(_c4, \"GameCell\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9nYW1lL2dhbWUtZmllbGQuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQXdCO0FBQ0U7QUFFeUI7QUFDSjtBQUNEO0FBRzlDLE1BQU1LLGVBQWU7SUFDakJDLE1BQU07SUFDTkMsT0FBTztJQUNQQyxVQUFVO0lBQ1ZDLFFBQVE7QUFDWjtBQUVPLFNBQVNDLFVBQVUsS0FBYTtRQUFiLEVBQUVDLFNBQVMsRUFBRSxHQUFiOztJQUN0QixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR1oscURBQWM7OEJBQUMsSUFBTSxJQUFJYyxNQUFNLEtBQUssSUFBSUMsSUFBSSxDQUFDOztJQUV2RSxNQUFNQyx3QkFDRjs7MEJBQ0ksOERBQUNiLHNEQUFRQTtnQkFBQ2MsTUFBSztnQkFBS0MsU0FBUTswQkFBVTs7Ozs7OzBCQUN0Qyw4REFBQ2Ysc0RBQVFBO2dCQUFDYyxNQUFLO2dCQUFLQyxTQUFROzBCQUFVOzs7Ozs7OztJQUc5QyxxQkFDSSw4REFBQ0M7UUFBZ0JULFdBQVdBOzswQkFDeEIsOERBQUNVO2dCQUFhSixTQUFTQTs7Ozs7OzBCQUN2Qiw4REFBQ0s7MEJBQ0lWLE1BQU1XLEdBQUcsQ0FBQyxDQUFDQyxHQUFHQyxrQkFBTSw4REFBQ0MsY0FBY0Q7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJcEQ7R0FqQmdCZjtLQUFBQTtBQW1CaEIsU0FBU1UsZ0JBQWdCLEtBQXVCO1FBQXZCLEVBQUVPLFFBQVEsRUFBRWhCLFNBQVMsRUFBRSxHQUF2QjtJQUNyQixxQkFDSSw4REFBQ2lCO1FBQUlqQixXQUFXWCxnREFBSUEsQ0FBQ1csV0FBVztrQkFDM0JnQjs7Ozs7O0FBR2I7TUFOU1A7QUFRVCxTQUFTQyxhQUFhLEtBQVc7UUFBWCxFQUFFSixPQUFPLEVBQUUsR0FBWDtJQUNsQixxQkFDSSw4REFBQ1c7UUFBSWpCLFdBQVU7OzBCQUNYLDhEQUFDaUI7Z0JBQUlqQixXQUFVOztrQ0FDWCw4REFBQ2lCO3dCQUFJakIsV0FBVTs7NEJBQThEOzBDQUNwRSw4REFBQ1QsMkRBQVFBO2dDQUFDUyxXQUFXOzs7Ozs7Ozs7Ozs7a0NBRTlCLDhEQUFDaUI7d0JBQUlqQixXQUFVOzs0QkFBaUQ7MENBQ2pELDhEQUFDUix3REFBU0E7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBSTVCYzs7Ozs7OztBQUdiO01BZlNJO0FBaUJULFNBQVNDLFNBQVMsS0FBWTtRQUFaLEVBQUVLLFFBQVEsRUFBRSxHQUFaO0lBQ2QscUJBQ0ksOERBQUNDO1FBQUlqQixXQUFVO2tCQUNWZ0I7Ozs7OztBQUdiO01BTlNMO0FBUVQsU0FBU0ksU0FBUyxLQUFZO1FBQVosRUFBRUMsUUFBUSxFQUFFLEdBQVo7SUFDZCxxQkFDSSw4REFBQ0U7UUFDR2xCLFdBQVU7a0JBRVRnQjs7Ozs7O0FBR2I7TUFSU0QiLCJzb3VyY2VzIjpbIkU6XFxQcm9qZWN0c1xcSnMrUmVhY3RcXFByYWN0aWNlXFxSZWFjdFByYWN0aWNlXFw1LiDQmtGA0LXRgdGC0LjQutC4INC90L7Qu9C40LrQuFxcbXktbmV4dC1hcHBcXHNyY1xcY29tcG9uZW50c1xcZ2FtZVxcZ2FtZS1maWVsZC5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNsc3ggZnJvbSBcImNsc3hcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IHsgWmVyb0ljb24gfSBmcm9tICcuLi9nYW1lL2ljb25zL3plcm8taWNvbic7XHJcbmltcG9ydCB7IENyb3NzSWNvbiB9IGZyb20gXCIuL2ljb25zL2Nyb3NzLWljb25cIjtcclxuaW1wb3J0IHsgVWlCdXR0b24gfSBmcm9tIFwiLi4vdWlraXQvdWktYnV0dG9uXCI7XHJcblxyXG5cclxuY29uc3QgR0FNRV9TWU1CT0xTID0ge1xyXG4gICAgWkVSTzogJ3plcm8nLFxyXG4gICAgQ1JPU1M6ICdjcm9zcycsXHJcbiAgICBUUklBTkdMRTogJ3RyaWFuZ2xlJyxcclxuICAgIFNRVUFSRTogJ3NxdWFyZScsXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBHYW1lRmllbGQoeyBjbGFzc05hbWUgfSkge1xyXG4gICAgY29uc3QgW2NlbGxzLCBzZXRDZWxsc10gPSBSZWFjdC51c2VTdGF0ZSgoKSA9PiBuZXcgQXJyYXkoMTkgKiAxOSkuZmlsbChudWxsKSlcclxuXHJcbiAgICBjb25zdCBhY3Rpb25zID1cclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8VWlCdXR0b24gc2l6ZT1cIm1kXCIgdmFyaWFudD1cInByaW1hcnlcIj7QndC40YfRjNGPPC9VaUJ1dHRvbj5cclxuICAgICAgICAgICAgPFVpQnV0dG9uIHNpemU9XCJtZFwiIHZhcmlhbnQ9XCJvdXRsaW5lXCI+0KHQtNCw0YLRjNGB0Y88L1VpQnV0dG9uPlxyXG4gICAgICAgIDwvPlxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEdhbWVGaWVsZExheW91dCBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XHJcbiAgICAgICAgICAgIDxHYW1lTW92ZUluZm8gYWN0aW9ucz17YWN0aW9uc30gLz5cclxuICAgICAgICAgICAgPEdhbWVHcmlkPlxyXG4gICAgICAgICAgICAgICAge2NlbGxzLm1hcCgoXywgaSkgPT4gPEdhbWVDZWxsIGtleT17aX0+PC9HYW1lQ2VsbD4pfVxyXG4gICAgICAgICAgICA8L0dhbWVHcmlkPlxyXG4gICAgICAgIDwvR2FtZUZpZWxkTGF5b3V0PlxyXG4gICAgKVxyXG59XHJcblxyXG5mdW5jdGlvbiBHYW1lRmllbGRMYXlvdXQoeyBjaGlsZHJlbiwgY2xhc3NOYW1lIH0pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nsc3goY2xhc3NOYW1lLCAnYmctd2hpdGUgcm91bmRlZC0yeGwgc2hhZG93LW1kIHB4LTggcHQtNSBwYi03Jyl9PlxyXG4gICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIEdhbWVNb3ZlSW5mbyh7IGFjdGlvbnMgfSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTMgaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXItYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMSB0ZXh0LXhsIGxlYWRpbmctdGlnaHQgZm9udC1zZW1pYm9sZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgINCl0L7QtDogPFplcm9JY29uIGNsYXNzTmFtZT17J3ctNSBoLTUnfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0xIHRleHQteHMgdGV4dC1zbGF0ZS00MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICDQodC70LXQtNGD0Y7RidC40Lk6IDxDcm9zc0ljb24gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIHthY3Rpb25zfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5mdW5jdGlvbiBHYW1lR3JpZCh7IGNoaWxkcmVuIH0pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtcm93cy1bcmVwZWF0KDE5LDMwcHgpXSBncmlkLWNvbHMtW3JlcGVhdCgxOSwzMHB4KV0gcGwtcHggcHQtcHggbXQtM1wiPlxyXG4gICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIEdhbWVDZWxsKHsgY2hpbGRyZW4gfSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlciBib3JkZXItc2xhdGUtMjAwIC1tbC1weCAtbXQtcHggZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgKVxyXG59Il0sIm5hbWVzIjpbImNsc3giLCJSZWFjdCIsIlplcm9JY29uIiwiQ3Jvc3NJY29uIiwiVWlCdXR0b24iLCJHQU1FX1NZTUJPTFMiLCJaRVJPIiwiQ1JPU1MiLCJUUklBTkdMRSIsIlNRVUFSRSIsIkdhbWVGaWVsZCIsImNsYXNzTmFtZSIsImNlbGxzIiwic2V0Q2VsbHMiLCJ1c2VTdGF0ZSIsIkFycmF5IiwiZmlsbCIsImFjdGlvbnMiLCJzaXplIiwidmFyaWFudCIsIkdhbWVGaWVsZExheW91dCIsIkdhbWVNb3ZlSW5mbyIsIkdhbWVHcmlkIiwibWFwIiwiXyIsImkiLCJHYW1lQ2VsbCIsImNoaWxkcmVuIiwiZGl2IiwiYnV0dG9uIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/game/game-field.jsx\n"));

/***/ })

});