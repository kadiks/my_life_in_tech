webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/Header.tsx":
/*!***********************************!*\
  !*** ./src/components/Header.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/jenaic/Desktop/kryptonik/projects/projects/socialacoeur/my_life_in_tech/client/src/components/Header.tsx\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nvar Post = function Post() {\n  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},\n      post = _ref.post;\n\n  var content = post.content,\n      handle = post.handle;\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(\"p\", {\n    className: \"post\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 5,\n      columnNumber: 7\n    }\n  }, content), __jsx(\"p\", {\n    className: \"author\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 7\n    }\n  }, handle));\n};\n\n_c = Post;\n\nvar Content = function Content(_ref2) {\n  var content = _ref2.content;\n  return __jsx(\"h1\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 10\n    }\n  }, content);\n};\n\n_c2 = Content;\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (_ref3) {\n  var _ref3$isBackground = _ref3.isBackground,\n      isBackground = _ref3$isBackground === void 0 ? true : _ref3$isBackground,\n      _ref3$isStory = _ref3.isStory,\n      isStory = _ref3$isStory === void 0 ? true : _ref3$isStory,\n      _ref3$content = _ref3.content,\n      content = _ref3$content === void 0 ? '' : _ref3$content,\n      _ref3$stories = _ref3.stories,\n      stories = _ref3$stories === void 0 ? [] : _ref3$stories;\n  var headerNum = getRandomInt(1, 4);\n  var styles = {};\n\n  if (isBackground === true) {\n    styles = {\n      backgroundImage: \"url('/img/header/header\".concat(headerNum, \".jpg')\")\n    };\n  }\n\n  return __jsx(\"header\", {\n    className: isStory === false ? 'add-xp' : '',\n    style: styles,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: \"header-filter\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 7\n    }\n  }), __jsx(\"div\", {\n    className: \"container\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"row\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: \"col-12\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 11\n    }\n  }, isStory ? __jsx(Post, {\n    post: stories[0],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 15\n    }\n  }) : __jsx(Content, {\n    content: content,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 15\n    }\n  })))));\n});\n\nfunction getRandomInt(min, max) {\n  min = Math.ceil(min);\n  max = Math.floor(max);\n  return Math.floor(Math.random() * (max - min + 1)) + min;\n}\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Post\");\n$RefreshReg$(_c2, \"Content\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9IZWFkZXIudHN4PzhlYjUiXSwibmFtZXMiOlsiUG9zdCIsInBvc3QiLCJjb250ZW50IiwiaGFuZGxlIiwiQ29udGVudCIsImlzQmFja2dyb3VuZCIsImlzU3RvcnkiLCJzdG9yaWVzIiwiaGVhZGVyTnVtIiwiZ2V0UmFuZG9tSW50Iiwic3R5bGVzIiwiYmFja2dyb3VuZEltYWdlIiwibWluIiwibWF4IiwiTWF0aCIsImNlaWwiLCJmbG9vciIsInJhbmRvbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBbUI7QUFBQSxpRkFBUCxFQUFPO0FBQUEsTUFBaEJDLElBQWdCLFFBQWhCQSxJQUFnQjs7QUFBQSxNQUN0QkMsT0FEc0IsR0FDRkQsSUFERSxDQUN0QkMsT0FEc0I7QUFBQSxNQUNiQyxNQURhLEdBQ0ZGLElBREUsQ0FDYkUsTUFEYTtBQUU5QixTQUNFLG1FQUNFO0FBQUcsYUFBUyxFQUFDLE1BQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFxQkQsT0FBckIsQ0FERixFQUVFO0FBQUcsYUFBUyxFQUFDLFFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUF1QkMsTUFBdkIsQ0FGRixDQURGO0FBTUQsQ0FSRDs7S0FBTUgsSTs7QUFVTixJQUFNSSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxRQUFpQjtBQUFBLE1BQWRGLE9BQWMsU0FBZEEsT0FBYztBQUMvQixTQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBS0EsT0FBTCxDQUFQO0FBQ0QsQ0FGRDs7TUFBTUUsTztBQUlTLGdGQUtUO0FBQUEsaUNBSkpDLFlBSUk7QUFBQSxNQUpKQSxZQUlJLG1DQUpXLElBSVg7QUFBQSw0QkFISkMsT0FHSTtBQUFBLE1BSEpBLE9BR0ksOEJBSE0sSUFHTjtBQUFBLDRCQUZKSixPQUVJO0FBQUEsTUFGSkEsT0FFSSw4QkFGTSxFQUVOO0FBQUEsNEJBREpLLE9BQ0k7QUFBQSxNQURKQSxPQUNJLDhCQURNLEVBQ047QUFDSixNQUFNQyxTQUFTLEdBQUdDLFlBQVksQ0FBQyxDQUFELEVBQUksQ0FBSixDQUE5QjtBQUNBLE1BQUlDLE1BQU0sR0FBRyxFQUFiOztBQUNBLE1BQUlMLFlBQVksS0FBSyxJQUFyQixFQUEyQjtBQUN6QkssVUFBTSxHQUFHO0FBQ1BDLHFCQUFlLG1DQUE0QkgsU0FBNUI7QUFEUixLQUFUO0FBR0Q7O0FBQ0QsU0FDRTtBQUFRLGFBQVMsRUFBRUYsT0FBTyxLQUFLLEtBQVosR0FBb0IsUUFBcEIsR0FBK0IsRUFBbEQ7QUFBc0QsU0FBSyxFQUFFSSxNQUE3RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsZUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUFLLGFBQVMsRUFBQyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxLQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxRQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0osT0FBTyxHQUNOLE1BQUMsSUFBRDtBQUFNLFFBQUksRUFBRUMsT0FBTyxDQUFDLENBQUQsQ0FBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURNLEdBR04sTUFBQyxPQUFEO0FBQVMsV0FBTyxFQUFFTCxPQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkosQ0FERixDQURGLENBRkYsQ0FERjtBQWdCRCxDQTdCRDs7QUErQkEsU0FBU08sWUFBVCxDQUFzQkcsR0FBdEIsRUFBMkJDLEdBQTNCLEVBQWdDO0FBQzlCRCxLQUFHLEdBQUdFLElBQUksQ0FBQ0MsSUFBTCxDQUFVSCxHQUFWLENBQU47QUFDQUMsS0FBRyxHQUFHQyxJQUFJLENBQUNFLEtBQUwsQ0FBV0gsR0FBWCxDQUFOO0FBQ0EsU0FBT0MsSUFBSSxDQUFDRSxLQUFMLENBQVdGLElBQUksQ0FBQ0csTUFBTCxNQUFpQkosR0FBRyxHQUFHRCxHQUFOLEdBQVksQ0FBN0IsQ0FBWCxJQUE4Q0EsR0FBckQ7QUFDRCIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL0hlYWRlci50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBQb3N0ID0gKHsgcG9zdCB9ID0ge30pID0+IHtcbiAgY29uc3QgeyBjb250ZW50LCBoYW5kbGUgfSA9IHBvc3Q7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxwIGNsYXNzTmFtZT1cInBvc3RcIj57Y29udGVudH08L3A+XG4gICAgICA8cCBjbGFzc05hbWU9XCJhdXRob3JcIj57aGFuZGxlfTwvcD5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmNvbnN0IENvbnRlbnQgPSAoeyBjb250ZW50IH0pID0+IHtcbiAgcmV0dXJuIDxoMT57Y29udGVudH08L2gxPjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0ICh7XG4gIGlzQmFja2dyb3VuZCA9IHRydWUsXG4gIGlzU3RvcnkgPSB0cnVlLFxuICBjb250ZW50ID0gJycsXG4gIHN0b3JpZXMgPSBbXSxcbn0pID0+IHtcbiAgY29uc3QgaGVhZGVyTnVtID0gZ2V0UmFuZG9tSW50KDEsIDQpO1xuICBsZXQgc3R5bGVzID0ge307XG4gIGlmIChpc0JhY2tncm91bmQgPT09IHRydWUpIHtcbiAgICBzdHlsZXMgPSB7XG4gICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJy9pbWcvaGVhZGVyL2hlYWRlciR7aGVhZGVyTnVtfS5qcGcnKWAsXG4gICAgfTtcbiAgfVxuICByZXR1cm4gKFxuICAgIDxoZWFkZXIgY2xhc3NOYW1lPXtpc1N0b3J5ID09PSBmYWxzZSA/ICdhZGQteHAnIDogJyd9IHN0eWxlPXtzdHlsZXN9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItZmlsdGVyXCI+PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyXCI+XG4gICAgICAgICAgICB7aXNTdG9yeSA/IChcbiAgICAgICAgICAgICAgPFBvc3QgcG9zdD17c3Rvcmllc1swXX0gLz5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxDb250ZW50IGNvbnRlbnQ9e2NvbnRlbnR9IC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvaGVhZGVyPlxuICApO1xufTtcblxuZnVuY3Rpb24gZ2V0UmFuZG9tSW50KG1pbiwgbWF4KSB7XG4gIG1pbiA9IE1hdGguY2VpbChtaW4pO1xuICBtYXggPSBNYXRoLmZsb29yKG1heCk7XG4gIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Header.tsx\n");

/***/ })

})