"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/dashboard/invoices/create/page",{

/***/ "(app-pages-browser)/./app/ui/invoices/create-form.tsx":
/*!*****************************************!*\
  !*** ./app/ui/invoices/create-form.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Form; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_CheckIcon_ClockIcon_CurrencyDollarIcon_UserCircleIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=CheckIcon,ClockIcon,CurrencyDollarIcon,UserCircleIcon!=!@heroicons/react/24/outline */ \"(app-pages-browser)/./node_modules/@heroicons/react/24/outline/esm/UserCircleIcon.js\");\n/* harmony import */ var _barrel_optimize_names_CheckIcon_ClockIcon_CurrencyDollarIcon_UserCircleIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=CheckIcon,ClockIcon,CurrencyDollarIcon,UserCircleIcon!=!@heroicons/react/24/outline */ \"(app-pages-browser)/./node_modules/@heroicons/react/24/outline/esm/CurrencyDollarIcon.js\");\n/* harmony import */ var _barrel_optimize_names_CheckIcon_ClockIcon_CurrencyDollarIcon_UserCircleIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=CheckIcon,ClockIcon,CurrencyDollarIcon,UserCircleIcon!=!@heroicons/react/24/outline */ \"(app-pages-browser)/./node_modules/@heroicons/react/24/outline/esm/ClockIcon.js\");\n/* harmony import */ var _barrel_optimize_names_CheckIcon_ClockIcon_CurrencyDollarIcon_UserCircleIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=CheckIcon,ClockIcon,CurrencyDollarIcon,UserCircleIcon!=!@heroicons/react/24/outline */ \"(app-pages-browser)/./node_modules/@heroicons/react/24/outline/esm/CheckIcon.js\");\n/* harmony import */ var _app_ui_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/ui/button */ \"(app-pages-browser)/./app/ui/button.tsx\");\n/* harmony import */ var _app_lib_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/lib/actions */ \"(app-pages-browser)/./app/lib/actions.ts\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react-dom/index.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Form(param) {\n    let { customers } = param;\n    _s();\n    const initialState = {\n        message: null,\n        errors: {}\n    };\n    const [state, dispatch] = (0,react_dom__WEBPACK_IMPORTED_MODULE_4__.useFormState)(_app_lib_actions__WEBPACK_IMPORTED_MODULE_3__.createInvoice, initialState);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        action: dispatch,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"rounded-md bg-gray-50 p-4 md:p-6\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mb-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"customer\",\n                                className: \"mb-2 block text-sm font-medium\",\n                                children: \"Choose customer\"\n                            }, void 0, false, {\n                                fileName: \"/Users/tulioalbu/Desktop/Estudos/nextjs-dashboard/app/ui/invoices/create-form.tsx\",\n                                lineNumber: 23,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"relative\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                        id: \"customer\",\n                                        name: \"customerId\",\n                                        className: \"peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500\",\n                                        defaultValue: \"\",\n                                        \"aria-descri\": true,\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                value: \"\",\n                                                disabled: true,\n                                                children: \"Select a customer\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/tulioalbu/Desktop/Estudos/nextjs-dashboard/app/ui/invoices/create-form.tsx\",\n                                                lineNumber: 34,\n                                                columnNumber: 15\n                                            }, this),\n                                            customers.map((customer)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                    value: customer.id,\n                                                    children: customer.name\n                                                }, customer.id, false, {\n                                                    fileName: \"/Users/tulioalbu/Desktop/Estudos/nextjs-dashboard/app/ui/invoices/create-form.tsx\",\n                                                    lineNumber: 38,\n                                                    columnNumber: 17\n                                                }, this))\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/tulioalbu/Desktop/Estudos/nextjs-dashboard/app/ui/invoices/create-form.tsx\",\n                                        lineNumber: 27,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_CheckIcon_ClockIcon_CurrencyDollarIcon_UserCircleIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                        className: \"pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/tulioalbu/Desktop/Estudos/nextjs-dashboard/app/ui/invoices/create-form.tsx\",\n                                        lineNumber: 43,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/tulioalbu/Desktop/Estudos/nextjs-dashboard/app/ui/invoices/create-form.tsx\",\n                                lineNumber: 26,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/tulioalbu/Desktop/Estudos/nextjs-dashboard/app/ui/invoices/create-form.tsx\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mb-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"amount\",\n                                className: \"mb-2 block text-sm font-medium\",\n                                children: \"Choose an amount\"\n                            }, void 0, false, {\n                                fileName: \"/Users/tulioalbu/Desktop/Estudos/nextjs-dashboard/app/ui/invoices/create-form.tsx\",\n                                lineNumber: 49,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"relative mt-2 rounded-md\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"relative\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            id: \"amount\",\n                                            name: \"amount\",\n                                            type: \"number\",\n                                            step: \"0.01\",\n                                            placeholder: \"Enter USD amount\",\n                                            className: \"peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500\",\n                                            required: true\n                                        }, void 0, false, {\n                                            fileName: \"/Users/tulioalbu/Desktop/Estudos/nextjs-dashboard/app/ui/invoices/create-form.tsx\",\n                                            lineNumber: 54,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_CheckIcon_ClockIcon_CurrencyDollarIcon_UserCircleIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                            className: \"pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/tulioalbu/Desktop/Estudos/nextjs-dashboard/app/ui/invoices/create-form.tsx\",\n                                            lineNumber: 63,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/tulioalbu/Desktop/Estudos/nextjs-dashboard/app/ui/invoices/create-form.tsx\",\n                                    lineNumber: 53,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/tulioalbu/Desktop/Estudos/nextjs-dashboard/app/ui/invoices/create-form.tsx\",\n                                lineNumber: 52,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/tulioalbu/Desktop/Estudos/nextjs-dashboard/app/ui/invoices/create-form.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"fieldset\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"legend\", {\n                                className: \"mb-2 block text-sm font-medium\",\n                                children: \"Set the invoice status\"\n                            }, void 0, false, {\n                                fileName: \"/Users/tulioalbu/Desktop/Estudos/nextjs-dashboard/app/ui/invoices/create-form.tsx\",\n                                lineNumber: 70,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"rounded-md border border-gray-200 bg-white px-[14px] py-3\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex gap-4\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex items-center\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                    id: \"pending\",\n                                                    name: \"status\",\n                                                    type: \"radio\",\n                                                    value: \"pending\",\n                                                    className: \"h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/tulioalbu/Desktop/Estudos/nextjs-dashboard/app/ui/invoices/create-form.tsx\",\n                                                    lineNumber: 76,\n                                                    columnNumber: 17\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                    htmlFor: \"pending\",\n                                                    className: \"ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600\",\n                                                    children: [\n                                                        \"Pending \",\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_CheckIcon_ClockIcon_CurrencyDollarIcon_UserCircleIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                                            className: \"h-4 w-4\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/tulioalbu/Desktop/Estudos/nextjs-dashboard/app/ui/invoices/create-form.tsx\",\n                                                            lineNumber: 87,\n                                                            columnNumber: 27\n                                                        }, this)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/Users/tulioalbu/Desktop/Estudos/nextjs-dashboard/app/ui/invoices/create-form.tsx\",\n                                                    lineNumber: 83,\n                                                    columnNumber: 17\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/tulioalbu/Desktop/Estudos/nextjs-dashboard/app/ui/invoices/create-form.tsx\",\n                                            lineNumber: 75,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex items-center\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                    id: \"paid\",\n                                                    name: \"status\",\n                                                    type: \"radio\",\n                                                    value: \"paid\",\n                                                    className: \"h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/tulioalbu/Desktop/Estudos/nextjs-dashboard/app/ui/invoices/create-form.tsx\",\n                                                    lineNumber: 91,\n                                                    columnNumber: 17\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                    htmlFor: \"paid\",\n                                                    className: \"ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-green-500 px-3 py-1.5 text-xs font-medium text-white\",\n                                                    children: [\n                                                        \"Paid \",\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_CheckIcon_ClockIcon_CurrencyDollarIcon_UserCircleIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                                            className: \"h-4 w-4\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/tulioalbu/Desktop/Estudos/nextjs-dashboard/app/ui/invoices/create-form.tsx\",\n                                                            lineNumber: 102,\n                                                            columnNumber: 24\n                                                        }, this)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/Users/tulioalbu/Desktop/Estudos/nextjs-dashboard/app/ui/invoices/create-form.tsx\",\n                                                    lineNumber: 98,\n                                                    columnNumber: 17\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/tulioalbu/Desktop/Estudos/nextjs-dashboard/app/ui/invoices/create-form.tsx\",\n                                            lineNumber: 90,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/tulioalbu/Desktop/Estudos/nextjs-dashboard/app/ui/invoices/create-form.tsx\",\n                                    lineNumber: 74,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/tulioalbu/Desktop/Estudos/nextjs-dashboard/app/ui/invoices/create-form.tsx\",\n                                lineNumber: 73,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/tulioalbu/Desktop/Estudos/nextjs-dashboard/app/ui/invoices/create-form.tsx\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/tulioalbu/Desktop/Estudos/nextjs-dashboard/app/ui/invoices/create-form.tsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-6 flex justify-end gap-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: \"/dashboard/invoices\",\n                        className: \"flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200\",\n                        children: \"Cancel\"\n                    }, void 0, false, {\n                        fileName: \"/Users/tulioalbu/Desktop/Estudos/nextjs-dashboard/app/ui/invoices/create-form.tsx\",\n                        lineNumber: 110,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                        type: \"submit\",\n                        children: \"Create Invoice\"\n                    }, void 0, false, {\n                        fileName: \"/Users/tulioalbu/Desktop/Estudos/nextjs-dashboard/app/ui/invoices/create-form.tsx\",\n                        lineNumber: 116,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/tulioalbu/Desktop/Estudos/nextjs-dashboard/app/ui/invoices/create-form.tsx\",\n                lineNumber: 109,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/tulioalbu/Desktop/Estudos/nextjs-dashboard/app/ui/invoices/create-form.tsx\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, this);\n}\n_s(Form, \"Q1sgpI8Lx0zE2JbIm3WCnzR1QZg=\", false, function() {\n    return [\n        react_dom__WEBPACK_IMPORTED_MODULE_4__.useFormState\n    ];\n});\n_c = Form;\nvar _c;\n$RefreshReg$(_c, \"Form\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC91aS9pbnZvaWNlcy9jcmVhdGUtZm9ybS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUc2QjtBQU1RO0FBQ0k7QUFDUztBQUNUO0FBRTFCLFNBQVNRLEtBQUssS0FBNkM7UUFBN0MsRUFBRUMsU0FBUyxFQUFrQyxHQUE3Qzs7SUFDM0IsTUFBTUMsZUFBZTtRQUFFQyxTQUFTO1FBQU1DLFFBQVEsQ0FBQztJQUFFO0lBQ2pELE1BQU0sQ0FBRUMsT0FBT0MsU0FBVSxHQUFHUCx1REFBWUEsQ0FBQ0QsMkRBQWFBLEVBQUVJO0lBQ3hELHFCQUNFLDhEQUFDSztRQUFLQyxRQUFRRjs7MEJBQ1osOERBQUNHO2dCQUFJQyxXQUFVOztrQ0FFYiw4REFBQ0Q7d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDQztnQ0FBTUMsU0FBUTtnQ0FBV0YsV0FBVTswQ0FBaUM7Ozs7OzswQ0FHckUsOERBQUNEO2dDQUFJQyxXQUFVOztrREFDYiw4REFBQ0c7d0NBQ0NDLElBQUc7d0NBQ0hDLE1BQUs7d0NBQ0xMLFdBQVU7d0NBQ1ZNLGNBQWE7d0NBQ2JDLGFBQVc7OzBEQUVYLDhEQUFDQztnREFBT0MsT0FBTTtnREFBR0MsUUFBUTswREFBQzs7Ozs7OzRDQUd6Qm5CLFVBQVVvQixHQUFHLENBQUMsQ0FBQ0MseUJBQ2QsOERBQUNKO29EQUF5QkMsT0FBT0csU0FBU1IsRUFBRTs4REFDekNRLFNBQVNQLElBQUk7bURBREhPLFNBQVNSLEVBQUU7Ozs7Ozs7Ozs7O2tEQUs1Qiw4REFBQ2xCLCtJQUFjQTt3Q0FBQ2MsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUs5Qiw4REFBQ0Q7d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDQztnQ0FBTUMsU0FBUTtnQ0FBU0YsV0FBVTswQ0FBaUM7Ozs7OzswQ0FHbkUsOERBQUNEO2dDQUFJQyxXQUFVOzBDQUNiLDRFQUFDRDtvQ0FBSUMsV0FBVTs7c0RBQ2IsOERBQUNhOzRDQUNDVCxJQUFHOzRDQUNIQyxNQUFLOzRDQUNMUyxNQUFLOzRDQUNMQyxNQUFLOzRDQUNMQyxhQUFZOzRDQUNaaEIsV0FBVTs0Q0FDVmlCLFFBQVE7Ozs7OztzREFFViw4REFBQ2hDLCtJQUFrQkE7NENBQUNlLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQU1wQyw4REFBQ2tCOzswQ0FDQyw4REFBQ0M7Z0NBQU9uQixXQUFVOzBDQUFpQzs7Ozs7OzBDQUduRCw4REFBQ0Q7Z0NBQUlDLFdBQVU7MENBQ2IsNEVBQUNEO29DQUFJQyxXQUFVOztzREFDYiw4REFBQ0Q7NENBQUlDLFdBQVU7OzhEQUNiLDhEQUFDYTtvREFDQ1QsSUFBRztvREFDSEMsTUFBSztvREFDTFMsTUFBSztvREFDTEwsT0FBTTtvREFDTlQsV0FBVTs7Ozs7OzhEQUVaLDhEQUFDQztvREFDQ0MsU0FBUTtvREFDUkYsV0FBVTs7d0RBQ1g7c0VBQ1MsOERBQUNoQiwrSUFBU0E7NERBQUNnQixXQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7c0RBR2pDLDhEQUFDRDs0Q0FBSUMsV0FBVTs7OERBQ2IsOERBQUNhO29EQUNDVCxJQUFHO29EQUNIQyxNQUFLO29EQUNMUyxNQUFLO29EQUNMTCxPQUFNO29EQUNOVCxXQUFVOzs7Ozs7OERBRVosOERBQUNDO29EQUNDQyxTQUFRO29EQUNSRixXQUFVOzt3REFDWDtzRUFDTSw4REFBQ2pCLCtJQUFTQTs0REFBQ2lCLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQU90Qyw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDbEIsa0RBQUlBO3dCQUNIc0MsTUFBSzt3QkFDTHBCLFdBQVU7a0NBQ1g7Ozs7OztrQ0FHRCw4REFBQ2Isa0RBQU1BO3dCQUFDMkIsTUFBSztrQ0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSTlCO0dBekd3QnhCOztRQUVNRCxtREFBWUE7OztLQUZsQkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3VpL2ludm9pY2VzL2NyZWF0ZS1mb3JtLnRzeD80MTlmIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcblxuaW1wb3J0IHsgQ3VzdG9tZXJGaWVsZCB9IGZyb20gJ0AvYXBwL2xpYi9kZWZpbml0aW9ucyc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHtcbiAgQ2hlY2tJY29uLFxuICBDbG9ja0ljb24sXG4gIEN1cnJlbmN5RG9sbGFySWNvbixcbiAgVXNlckNpcmNsZUljb24sXG59IGZyb20gJ0BoZXJvaWNvbnMvcmVhY3QvMjQvb3V0bGluZSc7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdAL2FwcC91aS9idXR0b24nO1xuaW1wb3J0IHsgY3JlYXRlSW52b2ljZSB9IGZyb20gJ0AvYXBwL2xpYi9hY3Rpb25zJztcbmltcG9ydCB7IHVzZUZvcm1TdGF0ZSB9IGZyb20gJ3JlYWN0LWRvbSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvcm0oeyBjdXN0b21lcnMgfTogeyBjdXN0b21lcnM6IEN1c3RvbWVyRmllbGRbXSB9KSB7XG4gIGNvbnN0IGluaXRpYWxTdGF0ZSA9IHsgbWVzc2FnZTogbnVsbCwgZXJyb3JzOiB7fSB9O1xuICBjb25zdCBbIHN0YXRlLCBkaXNwYXRjaCBdID0gdXNlRm9ybVN0YXRlKGNyZWF0ZUludm9pY2UsIGluaXRpYWxTdGF0ZSk7XG4gIHJldHVybiAoXG4gICAgPGZvcm0gYWN0aW9uPXtkaXNwYXRjaH0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdW5kZWQtbWQgYmctZ3JheS01MCBwLTQgbWQ6cC02XCI+XG4gICAgICAgIHsvKiBDdXN0b21lciBOYW1lICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImN1c3RvbWVyXCIgY2xhc3NOYW1lPVwibWItMiBibG9jayB0ZXh0LXNtIGZvbnQtbWVkaXVtXCI+XG4gICAgICAgICAgICBDaG9vc2UgY3VzdG9tZXJcbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmVcIj5cbiAgICAgICAgICAgIDxzZWxlY3RcbiAgICAgICAgICAgICAgaWQ9XCJjdXN0b21lclwiXG4gICAgICAgICAgICAgIG5hbWU9XCJjdXN0b21lcklkXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicGVlciBibG9jayB3LWZ1bGwgY3Vyc29yLXBvaW50ZXIgcm91bmRlZC1tZCBib3JkZXIgYm9yZGVyLWdyYXktMjAwIHB5LTIgcGwtMTAgdGV4dC1zbSBvdXRsaW5lLTIgcGxhY2Vob2xkZXI6dGV4dC1ncmF5LTUwMFwiXG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT1cIlwiXG4gICAgICAgICAgICAgIGFyaWEtZGVzY3JpXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIiBkaXNhYmxlZD5cbiAgICAgICAgICAgICAgICBTZWxlY3QgYSBjdXN0b21lclxuICAgICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgICAge2N1c3RvbWVycy5tYXAoKGN1c3RvbWVyKSA9PiAoXG4gICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2N1c3RvbWVyLmlkfSB2YWx1ZT17Y3VzdG9tZXIuaWR9PlxuICAgICAgICAgICAgICAgICAge2N1c3RvbWVyLm5hbWV9XG4gICAgICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICA8VXNlckNpcmNsZUljb24gY2xhc3NOYW1lPVwicG9pbnRlci1ldmVudHMtbm9uZSBhYnNvbHV0ZSBsZWZ0LTMgdG9wLTEvMiBoLVsxOHB4XSB3LVsxOHB4XSAtdHJhbnNsYXRlLXktMS8yIHRleHQtZ3JheS01MDBcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7LyogSW52b2ljZSBBbW91bnQgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNFwiPlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiYW1vdW50XCIgY2xhc3NOYW1lPVwibWItMiBibG9jayB0ZXh0LXNtIGZvbnQtbWVkaXVtXCI+XG4gICAgICAgICAgICBDaG9vc2UgYW4gYW1vdW50XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIG10LTIgcm91bmRlZC1tZFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZVwiPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICBpZD1cImFtb3VudFwiXG4gICAgICAgICAgICAgICAgbmFtZT1cImFtb3VudFwiXG4gICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgc3RlcD1cIjAuMDFcIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgVVNEIGFtb3VudFwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicGVlciBibG9jayB3LWZ1bGwgcm91bmRlZC1tZCBib3JkZXIgYm9yZGVyLWdyYXktMjAwIHB5LTIgcGwtMTAgdGV4dC1zbSBvdXRsaW5lLTIgcGxhY2Vob2xkZXI6dGV4dC1ncmF5LTUwMFwiXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPEN1cnJlbmN5RG9sbGFySWNvbiBjbGFzc05hbWU9XCJwb2ludGVyLWV2ZW50cy1ub25lIGFic29sdXRlIGxlZnQtMyB0b3AtMS8yIGgtWzE4cHhdIHctWzE4cHhdIC10cmFuc2xhdGUteS0xLzIgdGV4dC1ncmF5LTUwMCBwZWVyLWZvY3VzOnRleHQtZ3JheS05MDBcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHsvKiBJbnZvaWNlIFN0YXR1cyAqL31cbiAgICAgICAgPGZpZWxkc2V0PlxuICAgICAgICAgIDxsZWdlbmQgY2xhc3NOYW1lPVwibWItMiBibG9jayB0ZXh0LXNtIGZvbnQtbWVkaXVtXCI+XG4gICAgICAgICAgICBTZXQgdGhlIGludm9pY2Ugc3RhdHVzXG4gICAgICAgICAgPC9sZWdlbmQ+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3VuZGVkLW1kIGJvcmRlciBib3JkZXItZ3JheS0yMDAgYmctd2hpdGUgcHgtWzE0cHhdIHB5LTNcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtNFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICBpZD1cInBlbmRpbmdcIlxuICAgICAgICAgICAgICAgICAgbmFtZT1cInN0YXR1c1wiXG4gICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9XCJwZW5kaW5nXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtNCB3LTQgY3Vyc29yLXBvaW50ZXIgYm9yZGVyLWdyYXktMzAwIGJnLWdyYXktMTAwIHRleHQtZ3JheS02MDAgZm9jdXM6cmluZy0yXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cInBlbmRpbmdcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWwtMiBmbGV4IGN1cnNvci1wb2ludGVyIGl0ZW1zLWNlbnRlciBnYXAtMS41IHJvdW5kZWQtZnVsbCBiZy1ncmF5LTEwMCBweC0zIHB5LTEuNSB0ZXh0LXhzIGZvbnQtbWVkaXVtIHRleHQtZ3JheS02MDBcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIFBlbmRpbmcgPENsb2NrSWNvbiBjbGFzc05hbWU9XCJoLTQgdy00XCIgLz5cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgaWQ9XCJwYWlkXCJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJzdGF0dXNcIlxuICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPVwicGFpZFwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTQgdy00IGN1cnNvci1wb2ludGVyIGJvcmRlci1ncmF5LTMwMCBiZy1ncmF5LTEwMCB0ZXh0LWdyYXktNjAwIGZvY3VzOnJpbmctMlwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJwYWlkXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1sLTIgZmxleCBjdXJzb3ItcG9pbnRlciBpdGVtcy1jZW50ZXIgZ2FwLTEuNSByb3VuZGVkLWZ1bGwgYmctZ3JlZW4tNTAwIHB4LTMgcHktMS41IHRleHQteHMgZm9udC1tZWRpdW0gdGV4dC13aGl0ZVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgUGFpZCA8Q2hlY2tJY29uIGNsYXNzTmFtZT1cImgtNCB3LTRcIiAvPlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZmllbGRzZXQ+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNiBmbGV4IGp1c3RpZnktZW5kIGdhcC00XCI+XG4gICAgICAgIDxMaW5rXG4gICAgICAgICAgaHJlZj1cIi9kYXNoYm9hcmQvaW52b2ljZXNcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggaC0xMCBpdGVtcy1jZW50ZXIgcm91bmRlZC1sZyBiZy1ncmF5LTEwMCBweC00IHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1ncmF5LTYwMCB0cmFuc2l0aW9uLWNvbG9ycyBob3ZlcjpiZy1ncmF5LTIwMFwiXG4gICAgICAgID5cbiAgICAgICAgICBDYW5jZWxcbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5DcmVhdGUgSW52b2ljZTwvQnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9mb3JtPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkxpbmsiLCJDaGVja0ljb24iLCJDbG9ja0ljb24iLCJDdXJyZW5jeURvbGxhckljb24iLCJVc2VyQ2lyY2xlSWNvbiIsIkJ1dHRvbiIsImNyZWF0ZUludm9pY2UiLCJ1c2VGb3JtU3RhdGUiLCJGb3JtIiwiY3VzdG9tZXJzIiwiaW5pdGlhbFN0YXRlIiwibWVzc2FnZSIsImVycm9ycyIsInN0YXRlIiwiZGlzcGF0Y2giLCJmb3JtIiwiYWN0aW9uIiwiZGl2IiwiY2xhc3NOYW1lIiwibGFiZWwiLCJodG1sRm9yIiwic2VsZWN0IiwiaWQiLCJuYW1lIiwiZGVmYXVsdFZhbHVlIiwiYXJpYS1kZXNjcmkiLCJvcHRpb24iLCJ2YWx1ZSIsImRpc2FibGVkIiwibWFwIiwiY3VzdG9tZXIiLCJpbnB1dCIsInR5cGUiLCJzdGVwIiwicGxhY2Vob2xkZXIiLCJyZXF1aXJlZCIsImZpZWxkc2V0IiwibGVnZW5kIiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/ui/invoices/create-form.tsx\n"));

/***/ })

});