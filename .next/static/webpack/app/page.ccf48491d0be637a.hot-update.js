"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./components/ChatArea.js":
/*!********************************!*\
  !*** ./components/ChatArea.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_Box_mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=Box!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var _MessageList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MessageList */ \"(app-pages-browser)/./components/MessageList.js\");\n/* harmony import */ var _ChatInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ChatInput */ \"(app-pages-browser)/./components/ChatInput.js\");\n/* harmony import */ var _ChatInput__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ChatInput__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst ChatArea = (param)=>{\n    let { messages, loading, sendMessage, handleTranslate, handleFeedback } = param;\n    _s();\n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleSend = ()=>{\n        sendMessage(message);\n        setMessage(\"\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        sx: {\n            display: \"flex\",\n            flexDirection: \"column\",\n            height: \"100%\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MessageList__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                messages: messages,\n                loading: loading,\n                handleTranslate: handleTranslate,\n                handleFeedback: handleFeedback\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\New\\\\chat\\\\components\\\\ChatArea.js\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_ChatInput__WEBPACK_IMPORTED_MODULE_3___default()), {\n                message: message,\n                setMessage: setMessage,\n                sendMessage: handleSend,\n                loading: loading\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\New\\\\chat\\\\components\\\\ChatArea.js\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\New\\\\chat\\\\components\\\\ChatArea.js\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ChatArea, \"l8KXAebGu4sZHsyCIQX7P8si41w=\");\n_c = ChatArea;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChatArea);\nvar _c;\n$RefreshReg$(_c, \"ChatArea\");\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports signature on update so we can compare the boundary\r\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\r\n                module.hot.dispose(function (data) {\r\n                    data.prevSignature =\r\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevSignature !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevSignature !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvQ2hhdEFyZWEuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUF3QztBQUNKO0FBQ0k7QUFDSjtBQUVwQyxNQUFNSyxXQUFXO1FBQUMsRUFBRUMsUUFBUSxFQUFFQyxPQUFPLEVBQUVDLFdBQVcsRUFBRUMsZUFBZSxFQUFFQyxjQUFjLEVBQUU7O0lBQ25GLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHWCwrQ0FBUUEsQ0FBQztJQUV2QyxNQUFNWSxhQUFhO1FBQ2pCTCxZQUFZRztRQUNaQyxXQUFXO0lBQ2I7SUFFQSxxQkFDRSw4REFBQ1YsK0VBQUdBO1FBQUNZLElBQUk7WUFBRUMsU0FBUztZQUFRQyxlQUFlO1lBQVVDLFFBQVE7UUFBTzs7MEJBQ2xFLDhEQUFDZCxvREFBV0E7Z0JBQ1ZHLFVBQVVBO2dCQUNWQyxTQUFTQTtnQkFDVEUsaUJBQWlCQTtnQkFDakJDLGdCQUFnQkE7Ozs7OzswQkFFbEIsOERBQUNOLG1EQUFTQTtnQkFDUk8sU0FBU0E7Z0JBQ1RDLFlBQVlBO2dCQUNaSixhQUFhSztnQkFDYk4sU0FBU0E7Ozs7Ozs7Ozs7OztBQUlqQjtHQXhCTUY7S0FBQUE7QUEwQk4sK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DaGF0QXJlYS5qcz83MmEwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQm94IH0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XHJcbmltcG9ydCBNZXNzYWdlTGlzdCBmcm9tICcuL01lc3NhZ2VMaXN0JztcclxuaW1wb3J0IENoYXRJbnB1dCBmcm9tICcuL0NoYXRJbnB1dCc7XHJcblxyXG5jb25zdCBDaGF0QXJlYSA9ICh7IG1lc3NhZ2VzLCBsb2FkaW5nLCBzZW5kTWVzc2FnZSwgaGFuZGxlVHJhbnNsYXRlLCBoYW5kbGVGZWVkYmFjayB9KSA9PiB7XHJcbiAgY29uc3QgW21lc3NhZ2UsIHNldE1lc3NhZ2VdID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICBjb25zdCBoYW5kbGVTZW5kID0gKCkgPT4ge1xyXG4gICAgc2VuZE1lc3NhZ2UobWVzc2FnZSk7XHJcbiAgICBzZXRNZXNzYWdlKCcnKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEJveCBzeD17eyBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLCBoZWlnaHQ6ICcxMDAlJyB9fT5cclxuICAgICAgPE1lc3NhZ2VMaXN0IFxyXG4gICAgICAgIG1lc3NhZ2VzPXttZXNzYWdlc30gXHJcbiAgICAgICAgbG9hZGluZz17bG9hZGluZ30gXHJcbiAgICAgICAgaGFuZGxlVHJhbnNsYXRlPXtoYW5kbGVUcmFuc2xhdGV9XHJcbiAgICAgICAgaGFuZGxlRmVlZGJhY2s9e2hhbmRsZUZlZWRiYWNrfVxyXG4gICAgICAvPlxyXG4gICAgICA8Q2hhdElucHV0IFxyXG4gICAgICAgIG1lc3NhZ2U9e21lc3NhZ2V9XHJcbiAgICAgICAgc2V0TWVzc2FnZT17c2V0TWVzc2FnZX1cclxuICAgICAgICBzZW5kTWVzc2FnZT17aGFuZGxlU2VuZH1cclxuICAgICAgICBsb2FkaW5nPXtsb2FkaW5nfVxyXG4gICAgICAvPlxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoYXRBcmVhOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiQm94IiwiTWVzc2FnZUxpc3QiLCJDaGF0SW5wdXQiLCJDaGF0QXJlYSIsIm1lc3NhZ2VzIiwibG9hZGluZyIsInNlbmRNZXNzYWdlIiwiaGFuZGxlVHJhbnNsYXRlIiwiaGFuZGxlRmVlZGJhY2siLCJtZXNzYWdlIiwic2V0TWVzc2FnZSIsImhhbmRsZVNlbmQiLCJzeCIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiaGVpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/ChatArea.js\n"));

/***/ })

});