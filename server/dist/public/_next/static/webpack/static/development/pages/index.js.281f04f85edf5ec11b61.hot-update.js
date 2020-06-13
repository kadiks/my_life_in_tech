webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/story/Reactions.tsx":
/*!********************************************!*\
  !*** ./src/components/story/Reactions.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Reactions; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _Reaction__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Reaction */ \"./src/components/story/Reaction.tsx\");\n/* harmony import */ var _utils_Api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../utils/Api */ \"./src/utils/Api.ts\");\n\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/jenaic/Desktop/kryptonik/projects/projects/socialacoeur/my_life_in_tech/client/src/components/story/Reactions.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n/**.card-footer ul {\n  padding: 0;\n  margin: 0;\n  list-style: none;\n  display: flex;\n  justify-content: center;\n  padding-bottom: 25px;\n  padding-bottom: 50px;\n}\n.card-footer ul li {\n  text-align: center;\n  cursor: pointer;\n  opacity: 0;\n  transition: opacity 0.5s;\n}\n.card:hover .card-footer ul li {\n  opacity: 0.7;\n}\n.card:hover .card-footer li:hover {\n  opacity: 1;\n}\n.card:hover .card-footer ul.selected li {\n  opacity: 0.1;\n}\n.card-footer ul.selected li {\n  opacity: 0.1;\n}\n.card:hover .card-footer ul.selected li.selected,\n.card-footer ul.selected li.selected {\n  opacity: 1;\n} */\n\nvar Reactions = /*#__PURE__*/function (_React$Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Reactions, _React$Component);\n\n  var _super = _createSuper(Reactions);\n\n  function Reactions(props) {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, Reactions);\n\n    _this = _super.call(this, props);\n    _this.state = {\n      selected: '',\n      isClicked: false,\n      reactions: {\n        'thumbs-up': 0,\n        heart: 0,\n        'grin-hearts': 0,\n        flushed: 0,\n        'sad-tear': 0,\n        angry: 0\n      }\n    };\n    _this.onClick = _this.onClick.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_this));\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Reactions, [{\n    key: \"componentDidMount\",\n    value: function () {\n      var _componentDidMount = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n        var loadedReactions, reactions, merged;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return Object(_utils_Api__WEBPACK_IMPORTED_MODULE_10__[\"getStoryReactions\"])({\n                  storyId: this.props.storyId\n                });\n\n              case 2:\n                loadedReactions = _context.sent;\n                reactions = Object.assign({}, this.state.reactions);\n                Object.keys(loadedReactions).forEach(function (k) {\n                  if (reactions.hasOwnProperty(k) === false) {\n                    delete loadedReactions[k];\n                  }\n                });\n                merged = Object.assign(reactions, loadedReactions);\n                this.setState({\n                  reactions: merged\n                });\n\n              case 7:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, this);\n      }));\n\n      function componentDidMount() {\n        return _componentDidMount.apply(this, arguments);\n      }\n\n      return componentDidMount;\n    }()\n  }, {\n    key: \"onClick\",\n    value: function () {\n      var _onClick = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(name) {\n        var storyId, reactions;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                storyId = this.props.storyId; // console.log('onClick name', name);\n\n                if (!(this.state.isClicked === true)) {\n                  _context2.next = 3;\n                  break;\n                }\n\n                return _context2.abrupt(\"return\");\n\n              case 3:\n                reactions = Object.assign({}, this.state.reactions);\n                Object.keys(reactions).forEach(function (k) {\n                  if (k === name) {\n                    reactions[k]++;\n                  }\n                });\n                this.setState({\n                  isClicked: true,\n                  selected: name,\n                  reactions: reactions\n                });\n                _context2.next = 8;\n                return Object(_utils_Api__WEBPACK_IMPORTED_MODULE_10__[\"incrementReaction\"])({\n                  storyId: storyId,\n                  name: name\n                });\n\n              case 8:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2, this);\n      }));\n\n      function onClick(_x) {\n        return _onClick.apply(this, arguments);\n      }\n\n      return onClick;\n    }()\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      var _this$state = this.state,\n          selected = _this$state.selected,\n          isClicked = _this$state.isClicked,\n          reactions = _this$state.reactions; // console.log('reactions', reactions);\n\n      var classNames = '';\n\n      if (isClicked === true) {\n        classNames = 'selected';\n      }\n\n      return __jsx(\"ul\", {\n        className: classNames,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 112,\n          columnNumber: 7\n        }\n      }, Object.keys(reactions).map(function (key) {\n        return __jsx(_Reaction__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n          key: key,\n          isSelected: selected === key,\n          name: key,\n          total: reactions[key],\n          onClick: _this2.onClick,\n          __self: _this2,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 115,\n            columnNumber: 13\n          }\n        });\n      }));\n    }\n  }]);\n\n  return Reactions;\n}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);\n\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zdG9yeS9SZWFjdGlvbnMudHN4PzhiZjMiXSwibmFtZXMiOlsiUmVhY3Rpb25zIiwicHJvcHMiLCJzdGF0ZSIsInNlbGVjdGVkIiwiaXNDbGlja2VkIiwicmVhY3Rpb25zIiwiaGVhcnQiLCJmbHVzaGVkIiwiYW5ncnkiLCJvbkNsaWNrIiwiYmluZCIsImdldFN0b3J5UmVhY3Rpb25zIiwic3RvcnlJZCIsImxvYWRlZFJlYWN0aW9ucyIsIk9iamVjdCIsImFzc2lnbiIsImtleXMiLCJmb3JFYWNoIiwiayIsImhhc093blByb3BlcnR5IiwibWVyZ2VkIiwic2V0U3RhdGUiLCJuYW1lIiwiaW5jcmVtZW50UmVhY3Rpb24iLCJjbGFzc05hbWVzIiwibWFwIiwia2V5IiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBSUE7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQWdDcUJBLFM7Ozs7O0FBQ25CLHFCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2pCLDhCQUFNQSxLQUFOO0FBRUEsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGNBQVEsRUFBRSxFQURDO0FBRVhDLGVBQVMsRUFBRSxLQUZBO0FBR1hDLGVBQVMsRUFBRTtBQUNULHFCQUFhLENBREo7QUFFVEMsYUFBSyxFQUFFLENBRkU7QUFHVCx1QkFBZSxDQUhOO0FBSVRDLGVBQU8sRUFBRSxDQUpBO0FBS1Qsb0JBQVksQ0FMSDtBQU1UQyxhQUFLLEVBQUU7QUFORTtBQUhBLEtBQWI7QUFhQSxVQUFLQyxPQUFMLEdBQWUsTUFBS0EsT0FBTCxDQUFhQyxJQUFiLHlHQUFmO0FBaEJpQjtBQWlCbEI7Ozs7Ozs7Ozs7Ozt1QkFHK0JDLHFFQUFpQixDQUFDO0FBQzlDQyx5QkFBTyxFQUFFLEtBQUtYLEtBQUwsQ0FBV1c7QUFEMEIsaUJBQUQsQzs7O0FBQXpDQywrQjtBQUdBUix5QixHQUFZUyxNQUFNLENBQUNDLE1BQVAsQ0FBYyxFQUFkLEVBQWtCLEtBQUtiLEtBQUwsQ0FBV0csU0FBN0IsQztBQUNsQlMsc0JBQU0sQ0FBQ0UsSUFBUCxDQUFZSCxlQUFaLEVBQTZCSSxPQUE3QixDQUFxQyxVQUFDQyxDQUFELEVBQU87QUFDMUMsc0JBQUliLFNBQVMsQ0FBQ2MsY0FBVixDQUF5QkQsQ0FBekIsTUFBZ0MsS0FBcEMsRUFBMkM7QUFDekMsMkJBQU9MLGVBQWUsQ0FBQ0ssQ0FBRCxDQUF0QjtBQUNEO0FBQ0YsaUJBSkQ7QUFLTUUsc0IsR0FBU04sTUFBTSxDQUFDQyxNQUFQLENBQWNWLFNBQWQsRUFBeUJRLGVBQXpCLEM7QUFDZixxQkFBS1EsUUFBTCxDQUFjO0FBQ1poQiwyQkFBUyxFQUFFZTtBQURDLGlCQUFkOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O3dOQUtZRSxJOzs7Ozs7QUFDSlYsdUIsR0FBWSxLQUFLWCxLLENBQWpCVyxPLEVBQ1I7O3NCQUNJLEtBQUtWLEtBQUwsQ0FBV0UsU0FBWCxLQUF5QixJOzs7Ozs7OztBQUd2QkMseUIsR0FBWVMsTUFBTSxDQUFDQyxNQUFQLENBQWMsRUFBZCxFQUFrQixLQUFLYixLQUFMLENBQVdHLFNBQTdCLEM7QUFDbEJTLHNCQUFNLENBQUNFLElBQVAsQ0FBWVgsU0FBWixFQUF1QlksT0FBdkIsQ0FBK0IsVUFBQ0MsQ0FBRCxFQUFPO0FBQ3BDLHNCQUFJQSxDQUFDLEtBQUtJLElBQVYsRUFBZ0I7QUFDZGpCLDZCQUFTLENBQUNhLENBQUQsQ0FBVDtBQUNEO0FBQ0YsaUJBSkQ7QUFLQSxxQkFBS0csUUFBTCxDQUFjO0FBQ1pqQiwyQkFBUyxFQUFFLElBREM7QUFFWkQsMEJBQVEsRUFBRW1CLElBRkU7QUFHWmpCLDJCQUFTLEVBQVRBO0FBSFksaUJBQWQ7O3VCQUtNa0IscUVBQWlCLENBQUM7QUFDdEJYLHlCQUFPLEVBQVBBLE9BRHNCO0FBRXRCVSxzQkFBSSxFQUFKQTtBQUZzQixpQkFBRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7NkJBVWhCO0FBQUE7O0FBQUEsd0JBQ29DLEtBQUtwQixLQUR6QztBQUFBLFVBQ0NDLFFBREQsZUFDQ0EsUUFERDtBQUFBLFVBQ1dDLFNBRFgsZUFDV0EsU0FEWDtBQUFBLFVBQ3NCQyxTQUR0QixlQUNzQkEsU0FEdEIsRUFFUDs7QUFDQSxVQUFJbUIsVUFBVSxHQUFHLEVBQWpCOztBQUNBLFVBQUlwQixTQUFTLEtBQUssSUFBbEIsRUFBd0I7QUFDdEJvQixrQkFBVSxHQUFHLFVBQWI7QUFDRDs7QUFDRCxhQUNFO0FBQUksaUJBQVMsRUFBRUEsVUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0dWLE1BQU0sQ0FBQ0UsSUFBUCxDQUFZWCxTQUFaLEVBQXVCb0IsR0FBdkIsQ0FBMkIsVUFBQ0MsR0FBRCxFQUFTO0FBQ25DLGVBQ0UsTUFBQyxpREFBRDtBQUNFLGFBQUcsRUFBRUEsR0FEUDtBQUVFLG9CQUFVLEVBQUV2QixRQUFRLEtBQUt1QixHQUYzQjtBQUdFLGNBQUksRUFBRUEsR0FIUjtBQUlFLGVBQUssRUFBRXJCLFNBQVMsQ0FBQ3FCLEdBQUQsQ0FKbEI7QUFLRSxpQkFBTyxFQUFFLE1BQUksQ0FBQ2pCLE9BTGhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVNELE9BVkEsQ0FESCxDQURGO0FBZUQ7Ozs7RUFyRm9Da0IsNENBQUssQ0FBQ0MsUyIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL3N0b3J5L1JlYWN0aW9ucy50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY3NzLCBjeCB9IGZyb20gJ2Vtb3Rpb24nO1xuXG5pbXBvcnQgeyBJY29uIH0gZnJvbSAnLi4vY29yZSc7XG5pbXBvcnQgUmVhY3Rpb24gZnJvbSAnLi9SZWFjdGlvbic7XG5cbmltcG9ydCB7IGluY3JlbWVudFJlYWN0aW9uLCBnZXRTdG9yeVJlYWN0aW9ucyB9IGZyb20gJy4uLy4uL3V0aWxzL0FwaSc7XG5cbi8qKi5jYXJkLWZvb3RlciB1bCB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmctYm90dG9tOiAyNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogNTBweDtcbn1cbi5jYXJkLWZvb3RlciB1bCBsaSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXM7XG59XG4uY2FyZDpob3ZlciAuY2FyZC1mb290ZXIgdWwgbGkge1xuICBvcGFjaXR5OiAwLjc7XG59XG4uY2FyZDpob3ZlciAuY2FyZC1mb290ZXIgbGk6aG92ZXIge1xuICBvcGFjaXR5OiAxO1xufVxuLmNhcmQ6aG92ZXIgLmNhcmQtZm9vdGVyIHVsLnNlbGVjdGVkIGxpIHtcbiAgb3BhY2l0eTogMC4xO1xufVxuLmNhcmQtZm9vdGVyIHVsLnNlbGVjdGVkIGxpIHtcbiAgb3BhY2l0eTogMC4xO1xufVxuLmNhcmQ6aG92ZXIgLmNhcmQtZm9vdGVyIHVsLnNlbGVjdGVkIGxpLnNlbGVjdGVkLFxuLmNhcmQtZm9vdGVyIHVsLnNlbGVjdGVkIGxpLnNlbGVjdGVkIHtcbiAgb3BhY2l0eTogMTtcbn0gKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVhY3Rpb25zIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc2VsZWN0ZWQ6ICcnLFxuICAgICAgaXNDbGlja2VkOiBmYWxzZSxcbiAgICAgIHJlYWN0aW9uczoge1xuICAgICAgICAndGh1bWJzLXVwJzogMCxcbiAgICAgICAgaGVhcnQ6IDAsXG4gICAgICAgICdncmluLWhlYXJ0cyc6IDAsXG4gICAgICAgIGZsdXNoZWQ6IDAsXG4gICAgICAgICdzYWQtdGVhcic6IDAsXG4gICAgICAgIGFuZ3J5OiAwLFxuICAgICAgfSxcbiAgICB9O1xuXG4gICAgdGhpcy5vbkNsaWNrID0gdGhpcy5vbkNsaWNrLmJpbmQodGhpcyk7XG4gIH1cblxuICBhc3luYyBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCBsb2FkZWRSZWFjdGlvbnMgPSBhd2FpdCBnZXRTdG9yeVJlYWN0aW9ucyh7XG4gICAgICBzdG9yeUlkOiB0aGlzLnByb3BzLnN0b3J5SWQsXG4gICAgfSk7XG4gICAgY29uc3QgcmVhY3Rpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5zdGF0ZS5yZWFjdGlvbnMpO1xuICAgIE9iamVjdC5rZXlzKGxvYWRlZFJlYWN0aW9ucykuZm9yRWFjaCgoaykgPT4ge1xuICAgICAgaWYgKHJlYWN0aW9ucy5oYXNPd25Qcm9wZXJ0eShrKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgZGVsZXRlIGxvYWRlZFJlYWN0aW9uc1trXTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBjb25zdCBtZXJnZWQgPSBPYmplY3QuYXNzaWduKHJlYWN0aW9ucywgbG9hZGVkUmVhY3Rpb25zKTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHJlYWN0aW9uczogbWVyZ2VkLFxuICAgIH0pO1xuICB9XG5cbiAgYXN5bmMgb25DbGljayhuYW1lKSB7XG4gICAgY29uc3QgeyBzdG9yeUlkIH0gPSB0aGlzLnByb3BzO1xuICAgIC8vIGNvbnNvbGUubG9nKCdvbkNsaWNrIG5hbWUnLCBuYW1lKTtcbiAgICBpZiAodGhpcy5zdGF0ZS5pc0NsaWNrZWQgPT09IHRydWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgcmVhY3Rpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5zdGF0ZS5yZWFjdGlvbnMpO1xuICAgIE9iamVjdC5rZXlzKHJlYWN0aW9ucykuZm9yRWFjaCgoaykgPT4ge1xuICAgICAgaWYgKGsgPT09IG5hbWUpIHtcbiAgICAgICAgcmVhY3Rpb25zW2tdKys7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBpc0NsaWNrZWQ6IHRydWUsXG4gICAgICBzZWxlY3RlZDogbmFtZSxcbiAgICAgIHJlYWN0aW9ucyxcbiAgICB9KTtcbiAgICBhd2FpdCBpbmNyZW1lbnRSZWFjdGlvbih7XG4gICAgICBzdG9yeUlkLFxuICAgICAgbmFtZSxcbiAgICB9KTtcbiAgICAvLyBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAvLyAgIHRoaXMuc2V0U3RhdGUoe1xuICAgIC8vICAgICBpc0NsaWNrZWQ6IGZhbHNlLFxuICAgIC8vICAgfSk7XG4gICAgLy8gfSwgNTAwKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBzZWxlY3RlZCwgaXNDbGlja2VkLCByZWFjdGlvbnMgfSA9IHRoaXMuc3RhdGU7XG4gICAgLy8gY29uc29sZS5sb2coJ3JlYWN0aW9ucycsIHJlYWN0aW9ucyk7XG4gICAgbGV0IGNsYXNzTmFtZXMgPSAnJztcbiAgICBpZiAoaXNDbGlja2VkID09PSB0cnVlKSB7XG4gICAgICBjbGFzc05hbWVzID0gJ3NlbGVjdGVkJztcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDx1bCBjbGFzc05hbWU9e2NsYXNzTmFtZXN9PlxuICAgICAgICB7T2JqZWN0LmtleXMocmVhY3Rpb25zKS5tYXAoKGtleSkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8UmVhY3Rpb25cbiAgICAgICAgICAgICAga2V5PXtrZXl9XG4gICAgICAgICAgICAgIGlzU2VsZWN0ZWQ9e3NlbGVjdGVkID09PSBrZXl9XG4gICAgICAgICAgICAgIG5hbWU9e2tleX1cbiAgICAgICAgICAgICAgdG90YWw9e3JlYWN0aW9uc1trZXldfVxuICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLm9uQ2xpY2t9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgPC91bD5cbiAgICApO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/story/Reactions.tsx\n");

/***/ })

})