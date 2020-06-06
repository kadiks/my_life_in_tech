webpackHotUpdate("static/development/pages/add-experience.js",{

/***/ "./pages/add-experience/index.tsx":
/*!****************************************!*\
  !*** ./pages/add-experience/index.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _src_components_navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../src/components/navigation */ \"./src/components/navigation/index.tsx\");\n/* harmony import */ var _src_components_Header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../src/components/Header */ \"./src/components/Header.tsx\");\n/* harmony import */ var _src_components_Footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../src/components/Footer */ \"./src/components/Footer.tsx\");\n/* harmony import */ var _src_utils_Api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../src/utils/Api */ \"./src/utils/Api.ts\");\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/jenaic/Desktop/kryptonik/projects/projects/socialacoeur/my_life_in_tech/client/pages/add-experience/index.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\n\n\n\nvar ErrorAlert = function ErrorAlert(_ref) {\n  var _ref$text = _ref.text,\n      text = _ref$text === void 0 ? '' : _ref$text;\n  console.log('ErrorAlert text', text);\n  return __jsx(\"div\", {\n    className: \"row\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: \"col-12\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"alert-error\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 9\n    }\n  }, text.toString())));\n};\n\n_c = ErrorAlert;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_s(function () {\n  _s();\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__[\"useRouter\"])();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(''),\n      error = _useState[0],\n      setError = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(''),\n      handle = _useState2[0],\n      setHandle = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(null),\n      isPositiveExperience = _useState3[0],\n      setIsPositiveExperience = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(''),\n      content = _useState4[0],\n      setContent = _useState4[1];\n\n  var handleSubmit = /*#__PURE__*/function () {\n    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {\n      var json;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              e.preventDefault(); // console.log('handle', handle);\n              // console.log('isPositiveExperience', isPositiveExperience);\n              // console.log('content', content);\n\n              if (!(isPositiveExperience === null)) {\n                _context.next = 4;\n                break;\n              }\n\n              setError(\"Il est obligatoire de mettre si l'expérience était positive ou négative\");\n              return _context.abrupt(\"return\");\n\n            case 4:\n              if (!(content.length <= 100)) {\n                _context.next = 7;\n                break;\n              }\n\n              setError(\"Il est obligatoire de mettre d'écrire une expérience de plus de 100 caractères\");\n              return _context.abrupt(\"return\");\n\n            case 7:\n              _context.next = 9;\n              return Object(_src_utils_Api__WEBPACK_IMPORTED_MODULE_8__[\"postStory\"])({\n                handle: handle,\n                isPositiveExperience: isPositiveExperience,\n                content: content\n              });\n\n            case 9:\n              json = _context.sent;\n\n              if (json.hasOwnProperty('_id') === true) {\n                router.push('/');\n              } else {\n                if (json.hasOwnProperty('error') === true) {\n                  console.log('json.error', json.error);\n                  setError(json.error);\n                } else {\n                  setError('Une erreur est survenue. Veuillez essayer plus tard');\n                }\n              } // console.log('json', json);\n\n\n            case 11:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function handleSubmit(_x) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 9\n    }\n  }, \"Ajouter mon exp\\xE9rience\")), __jsx(_src_components_navigation__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 7\n    }\n  }), __jsx(_src_components_Header__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    isBackground: false,\n    isStory: false,\n    content: 'Ajouter mon expérience',\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 7\n    }\n  }), __jsx(\"main\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"container\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 9\n    }\n  }, error !== '' && __jsx(ErrorAlert, {\n    text: error,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 28\n    }\n  }), __jsx(\"div\", {\n    className: \"row\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 11\n    }\n  }, __jsx(\"div\", {\n    className: \"col-12 col-md-6 col-lg-4 offset-md-3 offset-lg-4\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 13\n    }\n  }, __jsx(\"form\", {\n    onSubmit: handleSubmit,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 15\n    }\n  }, __jsx(\"div\", {\n    className: \"form-group\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 17\n    }\n  }, __jsx(\"label\", {\n    htmlFor: \"experience\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 19\n    }\n  }, \"Comment \\xE9tait votre exp\\xE9rience ?\"), __jsx(\"div\", {\n    className: \"checkbox\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 19\n    }\n  }, __jsx(\"input\", {\n    type: \"radio\",\n    name: \"experience\",\n    value: \"true\",\n    checked: isPositiveExperience === true,\n    onChange: function onChange(e) {\n      // console.log('e.target.value', e.target.value);\n      setIsPositiveExperience(e.target.value === 'true');\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 21\n    }\n  }), \"Positive\"), __jsx(\"div\", {\n    className: \"checkbox\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 102,\n      columnNumber: 19\n    }\n  }, __jsx(\"input\", {\n    type: \"radio\",\n    name: \"experience\",\n    value: \"false\",\n    checked: isPositiveExperience === false,\n    onChange: function onChange(e) {\n      // console.log('e.target.value', typeof e.target.value);\n      setIsPositiveExperience(!e.target.value === 'false');\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 103,\n      columnNumber: 21\n    }\n  }), \"N\\xE9gative\")), __jsx(\"div\", {\n    className: \"form-group\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 116,\n      columnNumber: 17\n    }\n  }, __jsx(\"label\", {\n    htmlFor: \"description\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 117,\n      columnNumber: 19\n    }\n  }, \"Racontez votre exp\\xE9rience (600 caract\\xE8res) :\"), __jsx(\"textarea\", {\n    id: \"description\",\n    name: \"description\",\n    rows: 4,\n    maxLength: 600,\n    placeholder: \"Mon exp\\xE9rience dans la tech est la suivante...\",\n    onChange: function onChange(e) {\n      setContent(e.target.value);\n    },\n    value: content,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 120,\n      columnNumber: 19\n    }\n  })), __jsx(\"div\", {\n    className: \"form-group\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 135,\n      columnNumber: 17\n    }\n  }, __jsx(\"label\", {\n    htmlFor: \"handle\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 136,\n      columnNumber: 19\n    }\n  }, \"Votre pseudonyme (facultatif) :\"), __jsx(\"input\", {\n    type: \"text\",\n    id: \"handle\",\n    name: \"handle\",\n    value: handle,\n    onChange: function onChange(e) {\n      setHandle(e.target.value);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 139,\n      columnNumber: 19\n    }\n  })), __jsx(\"div\", {\n    className: \"button\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 149,\n      columnNumber: 17\n    }\n  }, __jsx(\"button\", {\n    type: \"submit\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 150,\n      columnNumber: 19\n    }\n  }, \"Envoyer\"))))), error !== '' && __jsx(ErrorAlert, {\n    text: error,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 155,\n      columnNumber: 28\n    }\n  }))), __jsx(_src_components_Footer__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 158,\n      columnNumber: 7\n    }\n  }));\n}, \"ZoOTBKOJ0Xw4w1wjGSPDa69jmHE=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_4__[\"useRouter\"]];\n}));\n\nvar _c;\n\n$RefreshReg$(_c, \"ErrorAlert\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hZGQtZXhwZXJpZW5jZS9pbmRleC50c3g/MjM2MiJdLCJuYW1lcyI6WyJFcnJvckFsZXJ0IiwidGV4dCIsImNvbnNvbGUiLCJsb2ciLCJ0b1N0cmluZyIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZVN0YXRlIiwiZXJyb3IiLCJzZXRFcnJvciIsImhhbmRsZSIsInNldEhhbmRsZSIsImlzUG9zaXRpdmVFeHBlcmllbmNlIiwic2V0SXNQb3NpdGl2ZUV4cGVyaWVuY2UiLCJjb250ZW50Iiwic2V0Q29udGVudCIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImxlbmd0aCIsInBvc3RTdG9yeSIsImpzb24iLCJoYXNPd25Qcm9wZXJ0eSIsInB1c2giLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLE9BQW1CO0FBQUEsdUJBQWhCQyxJQUFnQjtBQUFBLE1BQWhCQSxJQUFnQiwwQkFBVCxFQUFTO0FBQ3BDQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxpQkFBWixFQUErQkYsSUFBL0I7QUFDQSxTQUNFO0FBQUssYUFBUyxFQUFDLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLFFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLGFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUE4QkEsSUFBSSxDQUFDRyxRQUFMLEVBQTlCLENBREYsQ0FERixDQURGO0FBT0QsQ0FURDs7S0FBTUosVTtBQVdTLDhFQUFNO0FBQUE7O0FBQ25CLE1BQU1LLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBRG1CLGtCQUVPQyxz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QUFBQSxJQXpGRixDQURGO0FBNkZELENBeElEO0FBQUEsVUFDaUJGLHFEQURqQjtBQUFBIiwiZmlsZSI6Ii4vcGFnZXMvYWRkLWV4cGVyaWVuY2UvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG5pbXBvcnQgQ29uZmlnIGZyb20gJy4uLy4uL3NyYy9Db25maWcnO1xuXG5pbXBvcnQgTmF2aWdhdGlvbiBmcm9tICcuLi8uLi9zcmMvY29tcG9uZW50cy9uYXZpZ2F0aW9uJztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vLi4vc3JjL2NvbXBvbmVudHMvSGVhZGVyJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vLi4vc3JjL2NvbXBvbmVudHMvRm9vdGVyJztcblxuaW1wb3J0IHsgcG9zdFN0b3J5IH0gZnJvbSAnLi4vLi4vc3JjL3V0aWxzL0FwaSc7XG5cbmNvbnN0IEVycm9yQWxlcnQgPSAoeyB0ZXh0ID0gJycgfSkgPT4ge1xuICBjb25zb2xlLmxvZygnRXJyb3JBbGVydCB0ZXh0JywgdGV4dCk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQtZXJyb3JcIj57dGV4dC50b1N0cmluZygpfTwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW2hhbmRsZSwgc2V0SGFuZGxlXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW2lzUG9zaXRpdmVFeHBlcmllbmNlLCBzZXRJc1Bvc2l0aXZlRXhwZXJpZW5jZV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2NvbnRlbnQsIHNldENvbnRlbnRdID0gdXNlU3RhdGUoJycpO1xuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIC8vIGNvbnNvbGUubG9nKCdoYW5kbGUnLCBoYW5kbGUpO1xuICAgIC8vIGNvbnNvbGUubG9nKCdpc1Bvc2l0aXZlRXhwZXJpZW5jZScsIGlzUG9zaXRpdmVFeHBlcmllbmNlKTtcbiAgICAvLyBjb25zb2xlLmxvZygnY29udGVudCcsIGNvbnRlbnQpO1xuICAgIGlmIChpc1Bvc2l0aXZlRXhwZXJpZW5jZSA9PT0gbnVsbCkge1xuICAgICAgc2V0RXJyb3IoXG4gICAgICAgIFwiSWwgZXN0IG9ibGlnYXRvaXJlIGRlIG1ldHRyZSBzaSBsJ2V4cMOpcmllbmNlIMOpdGFpdCBwb3NpdGl2ZSBvdSBuw6lnYXRpdmVcIlxuICAgICAgKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGNvbnRlbnQubGVuZ3RoIDw9IDEwMCkge1xuICAgICAgc2V0RXJyb3IoXG4gICAgICAgIFwiSWwgZXN0IG9ibGlnYXRvaXJlIGRlIG1ldHRyZSBkJ8OpY3JpcmUgdW5lIGV4cMOpcmllbmNlIGRlIHBsdXMgZGUgMTAwIGNhcmFjdMOocmVzXCJcbiAgICAgICk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QganNvbiA9IGF3YWl0IHBvc3RTdG9yeSh7XG4gICAgICBoYW5kbGUsXG4gICAgICBpc1Bvc2l0aXZlRXhwZXJpZW5jZSxcbiAgICAgIGNvbnRlbnQsXG4gICAgfSk7XG5cbiAgICBpZiAoanNvbi5oYXNPd25Qcm9wZXJ0eSgnX2lkJykgPT09IHRydWUpIHtcbiAgICAgIHJvdXRlci5wdXNoKCcvJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChqc29uLmhhc093blByb3BlcnR5KCdlcnJvcicpID09PSB0cnVlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdqc29uLmVycm9yJywganNvbi5lcnJvcik7XG4gICAgICAgIHNldEVycm9yKGpzb24uZXJyb3IpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0RXJyb3IoJ1VuZSBlcnJldXIgZXN0IHN1cnZlbnVlLiBWZXVpbGxleiBlc3NheWVyIHBsdXMgdGFyZCcpO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBjb25zb2xlLmxvZygnanNvbicsIGpzb24pO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkFqb3V0ZXIgbW9uIGV4cMOpcmllbmNlPC90aXRsZT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxOYXZpZ2F0aW9uIC8+XG4gICAgICA8SGVhZGVyXG4gICAgICAgIGlzQmFja2dyb3VuZD17ZmFsc2V9XG4gICAgICAgIGlzU3Rvcnk9e2ZhbHNlfVxuICAgICAgICBjb250ZW50PXsnQWpvdXRlciBtb24gZXhww6lyaWVuY2UnfVxuICAgICAgLz5cbiAgICAgIDxtYWluPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgIHtlcnJvciAhPT0gJycgJiYgPEVycm9yQWxlcnQgdGV4dD17ZXJyb3J9IC8+fVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtbWQtNiBjb2wtbGctNCBvZmZzZXQtbWQtMyBvZmZzZXQtbGctNFwiPlxuICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZXhwZXJpZW5jZVwiPlxuICAgICAgICAgICAgICAgICAgICBDb21tZW50IMOpdGFpdCB2b3RyZSBleHDDqXJpZW5jZSA/XG4gICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGVja2JveFwiPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJleHBlcmllbmNlXCJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2lzUG9zaXRpdmVFeHBlcmllbmNlID09PSB0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2UudGFyZ2V0LnZhbHVlJywgZS50YXJnZXQudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0SXNQb3NpdGl2ZUV4cGVyaWVuY2UoZS50YXJnZXQudmFsdWUgPT09ICd0cnVlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgUG9zaXRpdmVcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGVja2JveFwiPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJleHBlcmllbmNlXCJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cImZhbHNlXCJcbiAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtpc1Bvc2l0aXZlRXhwZXJpZW5jZSA9PT0gZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnZS50YXJnZXQudmFsdWUnLCB0eXBlb2YgZS50YXJnZXQudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0SXNQb3NpdGl2ZUV4cGVyaWVuY2UoIWUudGFyZ2V0LnZhbHVlID09PSAnZmFsc2UnKTtcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICBOw6lnYXRpdmVcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJkZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICBSYWNvbnRleiB2b3RyZSBleHDDqXJpZW5jZSAoNjAwIGNhcmFjdMOocmVzKSA6XG4gICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgICAgICAgICByb3dzPXs0fVxuICAgICAgICAgICAgICAgICAgICBtYXhMZW5ndGg9ezYwMH1cbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJNb24gZXhww6lyaWVuY2UgZGFucyBsYSB0ZWNoIGVzdCBsYSBzdWl2YW50ZS4uLlwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIHNldENvbnRlbnQoZS50YXJnZXQudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Y29udGVudH1cbiAgICAgICAgICAgICAgICAgID48L3RleHRhcmVhPlxuICAgICAgICAgICAgICAgICAgey8qIDxzbWFsbD5cbiAgICAgICAgICAgICAgICAgICAgTWF4IGNoYXJhY3RlcnM6IDxzcGFuPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvc21hbGw+ICovfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJoYW5kbGVcIj5cbiAgICAgICAgICAgICAgICAgICAgVm90cmUgcHNldWRvbnltZSAoZmFjdWx0YXRpZikgOlxuICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiaGFuZGxlXCJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImhhbmRsZVwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtoYW5kbGV9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIHNldEhhbmRsZShlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uXCI+XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5FbnZveWVyPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHtlcnJvciAhPT0gJycgJiYgPEVycm9yQWxlcnQgdGV4dD17ZXJyb3J9IC8+fVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbWFpbj5cbiAgICAgIDxGb290ZXIgLz5cbiAgICA8Lz5cbiAgKTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/add-experience/index.tsx\n");

/***/ })

})