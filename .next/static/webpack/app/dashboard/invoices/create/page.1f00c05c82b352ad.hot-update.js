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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Form; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_CheckIcon_ClockIcon_CurrencyDollarIcon_UserCircleIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=CheckIcon,ClockIcon,CurrencyDollarIcon,UserCircleIcon!=!@heroicons/react/24/outline */ \"(app-pages-browser)/./node_modules/@heroicons/react/24/outline/esm/UserCircleIcon.js\");\n/* harmony import */ var _barrel_optimize_names_CheckIcon_ClockIcon_CurrencyDollarIcon_UserCircleIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=CheckIcon,ClockIcon,CurrencyDollarIcon,UserCircleIcon!=!@heroicons/react/24/outline */ \"(app-pages-browser)/./node_modules/@heroicons/react/24/outline/esm/CurrencyDollarIcon.js\");\n/* harmony import */ var _barrel_optimize_names_CheckIcon_ClockIcon_CurrencyDollarIcon_UserCircleIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=CheckIcon,ClockIcon,CurrencyDollarIcon,UserCircleIcon!=!@heroicons/react/24/outline */ \"(app-pages-browser)/./node_modules/@heroicons/react/24/outline/esm/ClockIcon.js\");\n/* harmony import */ var _barrel_optimize_names_CheckIcon_ClockIcon_CurrencyDollarIcon_UserCircleIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=CheckIcon,ClockIcon,CurrencyDollarIcon,UserCircleIcon!=!@heroicons/react/24/outline */ \"(app-pages-browser)/./node_modules/@heroicons/react/24/outline/esm/CheckIcon.js\");\n/* harmony import */ var _app_ui_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/ui/button */ \"(app-pages-browser)/./app/ui/button.tsx\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react-dom/index.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction Form(param) {\n    let { customers } = param;\n    _s();\n    const initialState = {\n        message: null,\n        errors: {}\n    };\n    const createInvoice = createInvoice;\n    const [state, dispatch] = (0,react_dom__WEBPACK_IMPORTED_MODULE_3__.useFormState)(createInvoice, initialState);\n    return;\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        action: dispatch,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"rounded-md bg-gray-50 p-4 md:p-6\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mb-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"customer\",\n                                className: \"mb-2 block text-sm font-medium\",\n                                children: \"Choose customer\"\n                            }, void 0, false, {\n                                fileName: \"/Users/tulioalbu/Desktop/Estudos/nextjs-dashboard/app/ui/invoices/create-form.tsx\",\n                                lineNumber: 24,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"relative\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                        id: \"customer\",\n                                        name: \"customerId\",\n                                        className: \"peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500\",\n                                        defaultValue: \"\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                value: \"\",\n                                                disabled: true,\n                                                children: \"Select a customer\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/tulioalbu/Desktop/Estudos/nextjs-dashboard/app/ui/invoices/create-form.tsx\",\n                                                lineNumber: 34,\n                                                columnNumber: 15\n                                            }, this),\n                                            customers.map((customer)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                    value: customer.id,\n                                                    children: customer.name\n                                                }, customer.id, false, {\n                                                    fileName: \"/Users/tulioalbu/Desktop/Estudos/nextjs-dashboard/app/ui/invoices/create-form.tsx\",\n                                                    lineNumber: 38,\n                                                    columnNumber: 17\n                                                }, this))\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/tulioalbu/Desktop/Estudos/nextjs-dashboard/app/ui/invoices/create-form.tsx\",\n                                        lineNumber: 28,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_CheckIcon_ClockIcon_CurrencyDollarIcon_UserCircleIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                        className: \"pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/tulioalbu/Desktop/Estudos/nextjs-dashboard/app/ui/invoices/create-form.tsx\",\n                                        lineNumber: 43,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/tulioalbu/Desktop/Estudos/nextjs-dashboard/app/ui/invoices/create-form.tsx\",\n                                lineNumber: 27,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/tulioalbu/Desktop/Estudos/nextjs-dashboard/app/ui/invoices/create-form.tsx\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mb-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"amount\",\n                                className: \"mb-2 block text-sm font-medium\",\n                                children: \"Choose an amount\"\n                            }, void 0, false, {\n                                fileName: \"/Users/tulioalbu/Desktop/Estudos/nextjs-dashboard/app/ui/invoices/create-form.tsx\",\n                                lineNumber: 49,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"relative mt-2 rounded-md\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"relative\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            id: \"amount\",\n                                            name: \"amount\",\n                                            type: \"number\",\n                                            step: \"0.01\",\n                                            placeholder: \"Enter USD amount\",\n                                            className: \"peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500\",\n                                            required: true\n                                        }, void 0, false, {\n                                            fileName: \"/Users/tulioalbu/Desktop/Estudos/nextjs-dashboard/app/ui/invoices/create-form.tsx\",\n                                            lineNumber: 54,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_CheckIcon_ClockIcon_CurrencyDollarIcon_UserCircleIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                            className: \"pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/tulioalbu/Desktop/Estudos/nextjs-dashboard/app/ui/invoices/create-form.tsx\",\n                                            lineNumber: 63,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/tulioalbu/Desktop/Estudos/nextjs-dashboard/app/ui/invoices/create-form.tsx\",\n                                    lineNumber: 53,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/tulioalbu/Desktop/Estudos/nextjs-dashboard/app/ui/invoices/create-form.tsx\",\n                                lineNumber: 52,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/tulioalbu/Desktop/Estudos/nextjs-dashboard/app/ui/invoices/create-form.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"fieldset\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"legend\", {\n                                className: \"mb-2 block text-sm font-medium\",\n                                children: \"Set the invoice status\"\n                            }, void 0, false, {\n                                fileName: \"/Users/tulioalbu/Desktop/Estudos/nextjs-dashboard/app/ui/invoices/create-form.tsx\",\n                                lineNumber: 70,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"rounded-md border border-gray-200 bg-white px-[14px] py-3\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex gap-4\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex items-center\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                    id: \"pending\",\n                                                    name: \"status\",\n                                                    type: \"radio\",\n                                                    value: \"pending\",\n                                                    className: \"h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/tulioalbu/Desktop/Estudos/nextjs-dashboard/app/ui/invoices/create-form.tsx\",\n                                                    lineNumber: 76,\n                                                    columnNumber: 17\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                    htmlFor: \"pending\",\n                                                    className: \"ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600\",\n                                                    children: [\n                                                        \"Pending \",\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_CheckIcon_ClockIcon_CurrencyDollarIcon_UserCircleIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                                            className: \"h-4 w-4\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/tulioalbu/Desktop/Estudos/nextjs-dashboard/app/ui/invoices/create-form.tsx\",\n                                                            lineNumber: 87,\n                                                            columnNumber: 27\n                                                        }, this)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/Users/tulioalbu/Desktop/Estudos/nextjs-dashboard/app/ui/invoices/create-form.tsx\",\n                                                    lineNumber: 83,\n                                                    columnNumber: 17\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/tulioalbu/Desktop/Estudos/nextjs-dashboard/app/ui/invoices/create-form.tsx\",\n                                            lineNumber: 75,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex items-center\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                    id: \"paid\",\n                                                    name: \"status\",\n                                                    type: \"radio\",\n                                                    value: \"paid\",\n                                                    className: \"h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/tulioalbu/Desktop/Estudos/nextjs-dashboard/app/ui/invoices/create-form.tsx\",\n                                                    lineNumber: 91,\n                                                    columnNumber: 17\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                    htmlFor: \"paid\",\n                                                    className: \"ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-green-500 px-3 py-1.5 text-xs font-medium text-white\",\n                                                    children: [\n                                                        \"Paid \",\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_CheckIcon_ClockIcon_CurrencyDollarIcon_UserCircleIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                                            className: \"h-4 w-4\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/tulioalbu/Desktop/Estudos/nextjs-dashboard/app/ui/invoices/create-form.tsx\",\n                                                            lineNumber: 102,\n                                                            columnNumber: 24\n                                                        }, this)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/Users/tulioalbu/Desktop/Estudos/nextjs-dashboard/app/ui/invoices/create-form.tsx\",\n                                                    lineNumber: 98,\n                                                    columnNumber: 17\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/tulioalbu/Desktop/Estudos/nextjs-dashboard/app/ui/invoices/create-form.tsx\",\n                                            lineNumber: 90,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/tulioalbu/Desktop/Estudos/nextjs-dashboard/app/ui/invoices/create-form.tsx\",\n                                    lineNumber: 74,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/tulioalbu/Desktop/Estudos/nextjs-dashboard/app/ui/invoices/create-form.tsx\",\n                                lineNumber: 73,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/tulioalbu/Desktop/Estudos/nextjs-dashboard/app/ui/invoices/create-form.tsx\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/tulioalbu/Desktop/Estudos/nextjs-dashboard/app/ui/invoices/create-form.tsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-6 flex justify-end gap-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: \"/dashboard/invoices\",\n                        className: \"flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200\",\n                        children: \"Cancel\"\n                    }, void 0, false, {\n                        fileName: \"/Users/tulioalbu/Desktop/Estudos/nextjs-dashboard/app/ui/invoices/create-form.tsx\",\n                        lineNumber: 110,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                        type: \"submit\",\n                        children: \"Create Invoice\"\n                    }, void 0, false, {\n                        fileName: \"/Users/tulioalbu/Desktop/Estudos/nextjs-dashboard/app/ui/invoices/create-form.tsx\",\n                        lineNumber: 116,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/tulioalbu/Desktop/Estudos/nextjs-dashboard/app/ui/invoices/create-form.tsx\",\n                lineNumber: 109,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/tulioalbu/Desktop/Estudos/nextjs-dashboard/app/ui/invoices/create-form.tsx\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, this);\n}\n_s(Form, \"Q1sgpI8Lx0zE2JbIm3WCnzR1QZg=\", false, function() {\n    return [\n        react_dom__WEBPACK_IMPORTED_MODULE_3__.useFormState\n    ];\n});\n_c = Form;\nvar _c;\n$RefreshReg$(_c, \"Form\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC91aS9pbnZvaWNlcy9jcmVhdGUtZm9ybS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBRzZCO0FBTVE7QUFDSTtBQUVBO0FBRTFCLFNBQVNPLEtBQUssS0FBNkM7UUFBN0MsRUFBRUMsU0FBUyxFQUFrQyxHQUE3Qzs7SUFDM0IsTUFBTUMsZUFBZTtRQUFFQyxTQUFTO1FBQU1DLFFBQVEsQ0FBQztJQUFFO0lBQ2pELE1BQU1DLGdCQUFnQkE7SUFDdEIsTUFBTSxDQUFFQyxPQUFPQyxTQUFVLEdBQUdSLHVEQUFZQSxDQUFDTSxlQUFlSDtJQUN4RDtrQkFDRSw4REFBQ007UUFBS0MsUUFBUUY7OzBCQUNaLDhEQUFDRztnQkFBSUMsV0FBVTs7a0NBRWIsOERBQUNEO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ0M7Z0NBQU1DLFNBQVE7Z0NBQVdGLFdBQVU7MENBQWlDOzs7Ozs7MENBR3JFLDhEQUFDRDtnQ0FBSUMsV0FBVTs7a0RBQ2IsOERBQUNHO3dDQUNDQyxJQUFHO3dDQUNIQyxNQUFLO3dDQUNMTCxXQUFVO3dDQUNWTSxjQUFhOzswREFFYiw4REFBQ0M7Z0RBQU9DLE9BQU07Z0RBQUdDLFFBQVE7MERBQUM7Ozs7Ozs0Q0FHekJuQixVQUFVb0IsR0FBRyxDQUFDLENBQUNDLHlCQUNkLDhEQUFDSjtvREFBeUJDLE9BQU9HLFNBQVNQLEVBQUU7OERBQ3pDTyxTQUFTTixJQUFJO21EQURITSxTQUFTUCxFQUFFOzs7Ozs7Ozs7OztrREFLNUIsOERBQUNsQiwrSUFBY0E7d0NBQUNjLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FLOUIsOERBQUNEO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ0M7Z0NBQU1DLFNBQVE7Z0NBQVNGLFdBQVU7MENBQWlDOzs7Ozs7MENBR25FLDhEQUFDRDtnQ0FBSUMsV0FBVTswQ0FDYiw0RUFBQ0Q7b0NBQUlDLFdBQVU7O3NEQUNiLDhEQUFDWTs0Q0FDQ1IsSUFBRzs0Q0FDSEMsTUFBSzs0Q0FDTFEsTUFBSzs0Q0FDTEMsTUFBSzs0Q0FDTEMsYUFBWTs0Q0FDWmYsV0FBVTs0Q0FDVmdCLFFBQVE7Ozs7OztzREFFViw4REFBQy9CLCtJQUFrQkE7NENBQUNlLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQU1wQyw4REFBQ2lCOzswQ0FDQyw4REFBQ0M7Z0NBQU9sQixXQUFVOzBDQUFpQzs7Ozs7OzBDQUduRCw4REFBQ0Q7Z0NBQUlDLFdBQVU7MENBQ2IsNEVBQUNEO29DQUFJQyxXQUFVOztzREFDYiw4REFBQ0Q7NENBQUlDLFdBQVU7OzhEQUNiLDhEQUFDWTtvREFDQ1IsSUFBRztvREFDSEMsTUFBSztvREFDTFEsTUFBSztvREFDTEwsT0FBTTtvREFDTlIsV0FBVTs7Ozs7OzhEQUVaLDhEQUFDQztvREFDQ0MsU0FBUTtvREFDUkYsV0FBVTs7d0RBQ1g7c0VBQ1MsOERBQUNoQiwrSUFBU0E7NERBQUNnQixXQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7c0RBR2pDLDhEQUFDRDs0Q0FBSUMsV0FBVTs7OERBQ2IsOERBQUNZO29EQUNDUixJQUFHO29EQUNIQyxNQUFLO29EQUNMUSxNQUFLO29EQUNMTCxPQUFNO29EQUNOUixXQUFVOzs7Ozs7OERBRVosOERBQUNDO29EQUNDQyxTQUFRO29EQUNSRixXQUFVOzt3REFDWDtzRUFDTSw4REFBQ2pCLCtJQUFTQTs0REFBQ2lCLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQU90Qyw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDbEIsa0RBQUlBO3dCQUNIcUMsTUFBSzt3QkFDTG5CLFdBQVU7a0NBQ1g7Ozs7OztrQ0FHRCw4REFBQ2Isa0RBQU1BO3dCQUFDMEIsTUFBSztrQ0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRzlCO0dBeEd3QnhCOztRQUdNRCxtREFBWUE7OztLQUhsQkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3VpL2ludm9pY2VzL2NyZWF0ZS1mb3JtLnRzeD80MTlmIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcblxuaW1wb3J0IHsgQ3VzdG9tZXJGaWVsZCB9IGZyb20gJ0AvYXBwL2xpYi9kZWZpbml0aW9ucyc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHtcbiAgQ2hlY2tJY29uLFxuICBDbG9ja0ljb24sXG4gIEN1cnJlbmN5RG9sbGFySWNvbixcbiAgVXNlckNpcmNsZUljb24sXG59IGZyb20gJ0BoZXJvaWNvbnMvcmVhY3QvMjQvb3V0bGluZSc7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdAL2FwcC91aS9idXR0b24nO1xuaW1wb3J0IHsgY3JlYXRlSW52b2ljZSB9IGZyb20gJ0AvYXBwL2xpYi9hY3Rpb25zJztcbmltcG9ydCB7IHVzZUZvcm1TdGF0ZSB9IGZyb20gJ3JlYWN0LWRvbSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvcm0oeyBjdXN0b21lcnMgfTogeyBjdXN0b21lcnM6IEN1c3RvbWVyRmllbGRbXSB9KSB7XG4gIGNvbnN0IGluaXRpYWxTdGF0ZSA9IHsgbWVzc2FnZTogbnVsbCwgZXJyb3JzOiB7fSB9O1xuICBjb25zdCBjcmVhdGVJbnZvaWNlID0gY3JlYXRlSW52b2ljZVxuICBjb25zdCBbIHN0YXRlLCBkaXNwYXRjaCBdID0gdXNlRm9ybVN0YXRlKGNyZWF0ZUludm9pY2UsIGluaXRpYWxTdGF0ZSk7XG4gIHJldHVybiBcbiAgICA8Zm9ybSBhY3Rpb249e2Rpc3BhdGNofT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm91bmRlZC1tZCBiZy1ncmF5LTUwIHAtNCBtZDpwLTZcIj5cbiAgICAgICAgey8qIEN1c3RvbWVyIE5hbWUgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNFwiPlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiY3VzdG9tZXJcIiBjbGFzc05hbWU9XCJtYi0yIGJsb2NrIHRleHQtc20gZm9udC1tZWRpdW1cIj5cbiAgICAgICAgICAgIENob29zZSBjdXN0b21lclxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZVwiPlxuICAgICAgICAgICAgPHNlbGVjdFxuICAgICAgICAgICAgICBpZD1cImN1c3RvbWVyXCJcbiAgICAgICAgICAgICAgbmFtZT1cImN1c3RvbWVySWRcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwZWVyIGJsb2NrIHctZnVsbCBjdXJzb3ItcG9pbnRlciByb3VuZGVkLW1kIGJvcmRlciBib3JkZXItZ3JheS0yMDAgcHktMiBwbC0xMCB0ZXh0LXNtIG91dGxpbmUtMiBwbGFjZWhvbGRlcjp0ZXh0LWdyYXktNTAwXCJcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPVwiXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiIGRpc2FibGVkPlxuICAgICAgICAgICAgICAgIFNlbGVjdCBhIGN1c3RvbWVyXG4gICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgICB7Y3VzdG9tZXJzLm1hcCgoY3VzdG9tZXIpID0+IChcbiAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17Y3VzdG9tZXIuaWR9IHZhbHVlPXtjdXN0b21lci5pZH0+XG4gICAgICAgICAgICAgICAgICB7Y3VzdG9tZXIubmFtZX1cbiAgICAgICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgIDxVc2VyQ2lyY2xlSWNvbiBjbGFzc05hbWU9XCJwb2ludGVyLWV2ZW50cy1ub25lIGFic29sdXRlIGxlZnQtMyB0b3AtMS8yIGgtWzE4cHhdIHctWzE4cHhdIC10cmFuc2xhdGUteS0xLzIgdGV4dC1ncmF5LTUwMFwiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHsvKiBJbnZvaWNlIEFtb3VudCAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00XCI+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJhbW91bnRcIiBjbGFzc05hbWU9XCJtYi0yIGJsb2NrIHRleHQtc20gZm9udC1tZWRpdW1cIj5cbiAgICAgICAgICAgIENob29zZSBhbiBhbW91bnRcbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgbXQtMiByb3VuZGVkLW1kXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlXCI+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIGlkPVwiYW1vdW50XCJcbiAgICAgICAgICAgICAgICBuYW1lPVwiYW1vdW50XCJcbiAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICBzdGVwPVwiMC4wMVwiXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBVU0QgYW1vdW50XCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwZWVyIGJsb2NrIHctZnVsbCByb3VuZGVkLW1kIGJvcmRlciBib3JkZXItZ3JheS0yMDAgcHktMiBwbC0xMCB0ZXh0LXNtIG91dGxpbmUtMiBwbGFjZWhvbGRlcjp0ZXh0LWdyYXktNTAwXCJcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8Q3VycmVuY3lEb2xsYXJJY29uIGNsYXNzTmFtZT1cInBvaW50ZXItZXZlbnRzLW5vbmUgYWJzb2x1dGUgbGVmdC0zIHRvcC0xLzIgaC1bMThweF0gdy1bMThweF0gLXRyYW5zbGF0ZS15LTEvMiB0ZXh0LWdyYXktNTAwIHBlZXItZm9jdXM6dGV4dC1ncmF5LTkwMFwiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgey8qIEludm9pY2UgU3RhdHVzICovfVxuICAgICAgICA8ZmllbGRzZXQ+XG4gICAgICAgICAgPGxlZ2VuZCBjbGFzc05hbWU9XCJtYi0yIGJsb2NrIHRleHQtc20gZm9udC1tZWRpdW1cIj5cbiAgICAgICAgICAgIFNldCB0aGUgaW52b2ljZSBzdGF0dXNcbiAgICAgICAgICA8L2xlZ2VuZD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdW5kZWQtbWQgYm9yZGVyIGJvcmRlci1ncmF5LTIwMCBiZy13aGl0ZSBweC1bMTRweF0gcHktM1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC00XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIGlkPVwicGVuZGluZ1wiXG4gICAgICAgICAgICAgICAgICBuYW1lPVwic3RhdHVzXCJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT1cInBlbmRpbmdcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC00IHctNCBjdXJzb3ItcG9pbnRlciBib3JkZXItZ3JheS0zMDAgYmctZ3JheS0xMDAgdGV4dC1ncmF5LTYwMCBmb2N1czpyaW5nLTJcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICAgICAgICBodG1sRm9yPVwicGVuZGluZ1wiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtbC0yIGZsZXggY3Vyc29yLXBvaW50ZXIgaXRlbXMtY2VudGVyIGdhcC0xLjUgcm91bmRlZC1mdWxsIGJnLWdyYXktMTAwIHB4LTMgcHktMS41IHRleHQteHMgZm9udC1tZWRpdW0gdGV4dC1ncmF5LTYwMFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgUGVuZGluZyA8Q2xvY2tJY29uIGNsYXNzTmFtZT1cImgtNCB3LTRcIiAvPlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICBpZD1cInBhaWRcIlxuICAgICAgICAgICAgICAgICAgbmFtZT1cInN0YXR1c1wiXG4gICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9XCJwYWlkXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtNCB3LTQgY3Vyc29yLXBvaW50ZXIgYm9yZGVyLWdyYXktMzAwIGJnLWdyYXktMTAwIHRleHQtZ3JheS02MDAgZm9jdXM6cmluZy0yXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cInBhaWRcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWwtMiBmbGV4IGN1cnNvci1wb2ludGVyIGl0ZW1zLWNlbnRlciBnYXAtMS41IHJvdW5kZWQtZnVsbCBiZy1ncmVlbi01MDAgcHgtMyBweS0xLjUgdGV4dC14cyBmb250LW1lZGl1bSB0ZXh0LXdoaXRlXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBQYWlkIDxDaGVja0ljb24gY2xhc3NOYW1lPVwiaC00IHctNFwiIC8+XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9maWVsZHNldD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC02IGZsZXgganVzdGlmeS1lbmQgZ2FwLTRcIj5cbiAgICAgICAgPExpbmtcbiAgICAgICAgICBocmVmPVwiL2Rhc2hib2FyZC9pbnZvaWNlc1wiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBoLTEwIGl0ZW1zLWNlbnRlciByb3VuZGVkLWxnIGJnLWdyYXktMTAwIHB4LTQgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktNjAwIHRyYW5zaXRpb24tY29sb3JzIGhvdmVyOmJnLWdyYXktMjAwXCJcbiAgICAgICAgPlxuICAgICAgICAgIENhbmNlbFxuICAgICAgICA8L0xpbms+XG4gICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiPkNyZWF0ZSBJbnZvaWNlPC9CdXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Zvcm0+XG59XG4iXSwibmFtZXMiOlsiTGluayIsIkNoZWNrSWNvbiIsIkNsb2NrSWNvbiIsIkN1cnJlbmN5RG9sbGFySWNvbiIsIlVzZXJDaXJjbGVJY29uIiwiQnV0dG9uIiwidXNlRm9ybVN0YXRlIiwiRm9ybSIsImN1c3RvbWVycyIsImluaXRpYWxTdGF0ZSIsIm1lc3NhZ2UiLCJlcnJvcnMiLCJjcmVhdGVJbnZvaWNlIiwic3RhdGUiLCJkaXNwYXRjaCIsImZvcm0iLCJhY3Rpb24iLCJkaXYiLCJjbGFzc05hbWUiLCJsYWJlbCIsImh0bWxGb3IiLCJzZWxlY3QiLCJpZCIsIm5hbWUiLCJkZWZhdWx0VmFsdWUiLCJvcHRpb24iLCJ2YWx1ZSIsImRpc2FibGVkIiwibWFwIiwiY3VzdG9tZXIiLCJpbnB1dCIsInR5cGUiLCJzdGVwIiwicGxhY2Vob2xkZXIiLCJyZXF1aXJlZCIsImZpZWxkc2V0IiwibGVnZW5kIiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/ui/invoices/create-form.tsx\n"));

/***/ })

});