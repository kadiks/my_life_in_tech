webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/card/Body.tsx":
/*!**************************************!*\
  !*** ./src/components/card/Body.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var diacritics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! diacritics */ \"./node_modules/diacritics/index.js\");\n/* harmony import */ var diacritics__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(diacritics__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/jenaic/Desktop/kryptonik/projects/projects/socialacoeur/my_life_in_tech/client/src/components/card/Body.tsx\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (_ref) {\n  var content = _ref.content,\n      whitelist = _ref.whitelist;\n  var updatedContent = getContentWithWhitelist({\n    content: content,\n    whitelist: whitelist\n  });\n  return __jsx(\"div\", {\n    className: \"card-body\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 5\n    }\n  }, __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 7\n    }\n  }, updatedContent));\n});\n\nvar getContentWithWhitelist = function getContentWithWhitelist(_ref2) {\n  var content = _ref2.content,\n      whitelist = _ref2.whitelist;\n  whitelist.push('discrimination');\n  whitelist.push('code sociaux');\n  whitelist.push('société');\n  whitelist.push('crise');\n  whitelist.push('auto-exclusion');\n  var cleanContent = Object(diacritics__WEBPACK_IMPORTED_MODULE_1__[\"remove\"])(content);\n  console.log('diacritics', diacritics__WEBPACK_IMPORTED_MODULE_1__[\"remove\"]);\n  var positions = [];\n  whitelist.forEach(function (word) {\n    if (cleanContent.includes(word) === true) {\n      var index = cleanContent.indexOf(word);\n      positions.push({\n        index: index,\n        wordLength: word.length\n      });\n    }\n  });\n  return content;\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jYXJkL0JvZHkudHN4P2RmNDAiXSwibmFtZXMiOlsiY29udGVudCIsIndoaXRlbGlzdCIsInVwZGF0ZWRDb250ZW50IiwiZ2V0Q29udGVudFdpdGhXaGl0ZWxpc3QiLCJwdXNoIiwiY2xlYW5Db250ZW50IiwicmVtb3ZlIiwiY29uc29sZSIsImxvZyIsInBvc2l0aW9ucyIsImZvckVhY2giLCJ3b3JkIiwiaW5jbHVkZXMiLCJpbmRleCIsImluZGV4T2YiLCJ3b3JkTGVuZ3RoIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFFZSwrRUFBNEI7QUFBQSxNQUF6QkEsT0FBeUIsUUFBekJBLE9BQXlCO0FBQUEsTUFBaEJDLFNBQWdCLFFBQWhCQSxTQUFnQjtBQUN6QyxNQUFNQyxjQUFjLEdBQUdDLHVCQUF1QixDQUFDO0FBQzdDSCxXQUFPLEVBQVBBLE9BRDZDO0FBRTdDQyxhQUFTLEVBQVRBO0FBRjZDLEdBQUQsQ0FBOUM7QUFJQSxTQUNFO0FBQUssYUFBUyxFQUFDLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSUMsY0FBSixDQURGLENBREY7QUFLRCxDQVZEOztBQVlBLElBQU1DLHVCQUF1QixHQUFHLFNBQTFCQSx1QkFBMEIsUUFBNEI7QUFBQSxNQUF6QkgsT0FBeUIsU0FBekJBLE9BQXlCO0FBQUEsTUFBaEJDLFNBQWdCLFNBQWhCQSxTQUFnQjtBQUMxREEsV0FBUyxDQUFDRyxJQUFWLENBQWUsZ0JBQWY7QUFDQUgsV0FBUyxDQUFDRyxJQUFWLENBQWUsY0FBZjtBQUNBSCxXQUFTLENBQUNHLElBQVYsQ0FBZSxTQUFmO0FBQ0FILFdBQVMsQ0FBQ0csSUFBVixDQUFlLE9BQWY7QUFDQUgsV0FBUyxDQUFDRyxJQUFWLENBQWUsZ0JBQWY7QUFDQSxNQUFNQyxZQUFZLEdBQUdDLHlEQUFNLENBQUNOLE9BQUQsQ0FBM0I7QUFDQU8sU0FBTyxDQUFDQyxHQUFSLENBQVksWUFBWixFQUEwQkYsaURBQTFCO0FBQ0EsTUFBTUcsU0FBUyxHQUFHLEVBQWxCO0FBQ0FSLFdBQVMsQ0FBQ1MsT0FBVixDQUFrQixVQUFDQyxJQUFELEVBQVU7QUFDMUIsUUFBSU4sWUFBWSxDQUFDTyxRQUFiLENBQXNCRCxJQUF0QixNQUFnQyxJQUFwQyxFQUEwQztBQUN4QyxVQUFNRSxLQUFLLEdBQUdSLFlBQVksQ0FBQ1MsT0FBYixDQUFxQkgsSUFBckIsQ0FBZDtBQUNBRixlQUFTLENBQUNMLElBQVYsQ0FBZTtBQUFFUyxhQUFLLEVBQUxBLEtBQUY7QUFBU0Usa0JBQVUsRUFBRUosSUFBSSxDQUFDSztBQUExQixPQUFmO0FBQ0Q7QUFDRixHQUxEO0FBTUEsU0FBT2hCLE9BQVA7QUFDRCxDQWhCRCIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL2NhcmQvQm9keS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW1vdmUgfSBmcm9tICdkaWFjcml0aWNzJztcblxuZXhwb3J0IGRlZmF1bHQgKHsgY29udGVudCwgd2hpdGVsaXN0IH0pID0+IHtcbiAgY29uc3QgdXBkYXRlZENvbnRlbnQgPSBnZXRDb250ZW50V2l0aFdoaXRlbGlzdCh7XG4gICAgY29udGVudCxcbiAgICB3aGl0ZWxpc3QsXG4gIH0pO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XG4gICAgICA8cD57dXBkYXRlZENvbnRlbnR9PC9wPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgZ2V0Q29udGVudFdpdGhXaGl0ZWxpc3QgPSAoeyBjb250ZW50LCB3aGl0ZWxpc3QgfSkgPT4ge1xuICB3aGl0ZWxpc3QucHVzaCgnZGlzY3JpbWluYXRpb24nKTtcbiAgd2hpdGVsaXN0LnB1c2goJ2NvZGUgc29jaWF1eCcpO1xuICB3aGl0ZWxpc3QucHVzaCgnc29jacOpdMOpJyk7XG4gIHdoaXRlbGlzdC5wdXNoKCdjcmlzZScpO1xuICB3aGl0ZWxpc3QucHVzaCgnYXV0by1leGNsdXNpb24nKTtcbiAgY29uc3QgY2xlYW5Db250ZW50ID0gcmVtb3ZlKGNvbnRlbnQpO1xuICBjb25zb2xlLmxvZygnZGlhY3JpdGljcycsIHJlbW92ZSk7XG4gIGNvbnN0IHBvc2l0aW9ucyA9IFtdO1xuICB3aGl0ZWxpc3QuZm9yRWFjaCgod29yZCkgPT4ge1xuICAgIGlmIChjbGVhbkNvbnRlbnQuaW5jbHVkZXMod29yZCkgPT09IHRydWUpIHtcbiAgICAgIGNvbnN0IGluZGV4ID0gY2xlYW5Db250ZW50LmluZGV4T2Yod29yZCk7XG4gICAgICBwb3NpdGlvbnMucHVzaCh7IGluZGV4LCB3b3JkTGVuZ3RoOiB3b3JkLmxlbmd0aCB9KTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gY29udGVudDtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/card/Body.tsx\n");

/***/ })

})