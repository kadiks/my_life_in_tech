webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/utils/text/getContentWithWhitelist.ts":
/*!***************************************************!*\
  !*** ./src/utils/text/getContentWithWhitelist.ts ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var diacritics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! diacritics */ \"./node_modules/diacritics/index.js\");\n/* harmony import */ var diacritics__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(diacritics__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (_ref) {\n  var content = _ref.content,\n      whitelist = _ref.whitelist;\n  var cleanContent = Object(diacritics__WEBPACK_IMPORTED_MODULE_0__[\"remove\"])(content); //   console.log('diacritics', remove);\n\n  var positions = []; // get the starting index and length of each matching words from the clean content\n\n  whitelist.forEach(function (word) {\n    if (cleanContent.includes(word) === true) {\n      console.log('word', word);\n      var index = cleanContent.indexOf(word);\n      positions.push({\n        index: index,\n        wordLength: word.length\n      });\n    }\n  }); //   console.log('content', content);\n  //   console.log('positions', positions);\n  // in the original content, find the real word with accents\n\n  var actualWords = positions.map(function (p) {\n    var word = content.substring(p.index, p.index + p.wordLength);\n    return word;\n  });\n  var finalContent = content;\n  actualWords.forEach(function (word) {\n    finalContent = content.replace(word, \"<span class=\\\"hl\\\">\".concat(word, \"</span>\"));\n  });\n  return {\n    __html: finalContent\n  };\n});\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvdGV4dC9nZXRDb250ZW50V2l0aFdoaXRlbGlzdC50cz84MTBlIl0sIm5hbWVzIjpbImNvbnRlbnQiLCJ3aGl0ZWxpc3QiLCJjbGVhbkNvbnRlbnQiLCJyZW1vdmUiLCJwb3NpdGlvbnMiLCJmb3JFYWNoIiwid29yZCIsImluY2x1ZGVzIiwiY29uc29sZSIsImxvZyIsImluZGV4IiwiaW5kZXhPZiIsInB1c2giLCJ3b3JkTGVuZ3RoIiwibGVuZ3RoIiwiYWN0dWFsV29yZHMiLCJtYXAiLCJwIiwic3Vic3RyaW5nIiwiZmluYWxDb250ZW50IiwicmVwbGFjZSIsIl9faHRtbCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFFZSwrRUFBNEI7QUFBQSxNQUF6QkEsT0FBeUIsUUFBekJBLE9BQXlCO0FBQUEsTUFBaEJDLFNBQWdCLFFBQWhCQSxTQUFnQjtBQUN6QyxNQUFNQyxZQUFZLEdBQUdDLHlEQUFNLENBQUNILE9BQUQsQ0FBM0IsQ0FEeUMsQ0FFekM7O0FBQ0EsTUFBTUksU0FBUyxHQUFHLEVBQWxCLENBSHlDLENBSXpDOztBQUNBSCxXQUFTLENBQUNJLE9BQVYsQ0FBa0IsVUFBQ0MsSUFBRCxFQUFVO0FBQzFCLFFBQUlKLFlBQVksQ0FBQ0ssUUFBYixDQUFzQkQsSUFBdEIsTUFBZ0MsSUFBcEMsRUFBMEM7QUFDeENFLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLE1BQVosRUFBb0JILElBQXBCO0FBQ0EsVUFBTUksS0FBSyxHQUFHUixZQUFZLENBQUNTLE9BQWIsQ0FBcUJMLElBQXJCLENBQWQ7QUFDQUYsZUFBUyxDQUFDUSxJQUFWLENBQWU7QUFBRUYsYUFBSyxFQUFMQSxLQUFGO0FBQVNHLGtCQUFVLEVBQUVQLElBQUksQ0FBQ1E7QUFBMUIsT0FBZjtBQUNEO0FBQ0YsR0FORCxFQUx5QyxDQVl6QztBQUNBO0FBQ0E7O0FBQ0EsTUFBTUMsV0FBVyxHQUFHWCxTQUFTLENBQUNZLEdBQVYsQ0FBYyxVQUFDQyxDQUFELEVBQU87QUFDdkMsUUFBTVgsSUFBSSxHQUFHTixPQUFPLENBQUNrQixTQUFSLENBQWtCRCxDQUFDLENBQUNQLEtBQXBCLEVBQTJCTyxDQUFDLENBQUNQLEtBQUYsR0FBVU8sQ0FBQyxDQUFDSixVQUF2QyxDQUFiO0FBQ0EsV0FBT1AsSUFBUDtBQUNELEdBSG1CLENBQXBCO0FBSUEsTUFBSWEsWUFBWSxHQUFHbkIsT0FBbkI7QUFDQWUsYUFBVyxDQUFDVixPQUFaLENBQW9CLFVBQUNDLElBQUQsRUFBVTtBQUM1QmEsZ0JBQVksR0FBR25CLE9BQU8sQ0FBQ29CLE9BQVIsQ0FBZ0JkLElBQWhCLCtCQUEwQ0EsSUFBMUMsYUFBZjtBQUNELEdBRkQ7QUFHQSxTQUFPO0FBQUVlLFVBQU0sRUFBRUY7QUFBVixHQUFQO0FBQ0QsQ0F4QkQiLCJmaWxlIjoiLi9zcmMvdXRpbHMvdGV4dC9nZXRDb250ZW50V2l0aFdoaXRlbGlzdC50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbW92ZSB9IGZyb20gJ2RpYWNyaXRpY3MnO1xuXG5leHBvcnQgZGVmYXVsdCAoeyBjb250ZW50LCB3aGl0ZWxpc3QgfSkgPT4ge1xuICBjb25zdCBjbGVhbkNvbnRlbnQgPSByZW1vdmUoY29udGVudCk7XG4gIC8vICAgY29uc29sZS5sb2coJ2RpYWNyaXRpY3MnLCByZW1vdmUpO1xuICBjb25zdCBwb3NpdGlvbnMgPSBbXTtcbiAgLy8gZ2V0IHRoZSBzdGFydGluZyBpbmRleCBhbmQgbGVuZ3RoIG9mIGVhY2ggbWF0Y2hpbmcgd29yZHMgZnJvbSB0aGUgY2xlYW4gY29udGVudFxuICB3aGl0ZWxpc3QuZm9yRWFjaCgod29yZCkgPT4ge1xuICAgIGlmIChjbGVhbkNvbnRlbnQuaW5jbHVkZXMod29yZCkgPT09IHRydWUpIHtcbiAgICAgIGNvbnNvbGUubG9nKCd3b3JkJywgd29yZCk7XG4gICAgICBjb25zdCBpbmRleCA9IGNsZWFuQ29udGVudC5pbmRleE9mKHdvcmQpO1xuICAgICAgcG9zaXRpb25zLnB1c2goeyBpbmRleCwgd29yZExlbmd0aDogd29yZC5sZW5ndGggfSk7XG4gICAgfVxuICB9KTtcbiAgLy8gICBjb25zb2xlLmxvZygnY29udGVudCcsIGNvbnRlbnQpO1xuICAvLyAgIGNvbnNvbGUubG9nKCdwb3NpdGlvbnMnLCBwb3NpdGlvbnMpO1xuICAvLyBpbiB0aGUgb3JpZ2luYWwgY29udGVudCwgZmluZCB0aGUgcmVhbCB3b3JkIHdpdGggYWNjZW50c1xuICBjb25zdCBhY3R1YWxXb3JkcyA9IHBvc2l0aW9ucy5tYXAoKHApID0+IHtcbiAgICBjb25zdCB3b3JkID0gY29udGVudC5zdWJzdHJpbmcocC5pbmRleCwgcC5pbmRleCArIHAud29yZExlbmd0aCk7XG4gICAgcmV0dXJuIHdvcmQ7XG4gIH0pO1xuICBsZXQgZmluYWxDb250ZW50ID0gY29udGVudDtcbiAgYWN0dWFsV29yZHMuZm9yRWFjaCgod29yZCkgPT4ge1xuICAgIGZpbmFsQ29udGVudCA9IGNvbnRlbnQucmVwbGFjZSh3b3JkLCBgPHNwYW4gY2xhc3M9XCJobFwiPiR7d29yZH08L3NwYW4+YCk7XG4gIH0pO1xuICByZXR1cm4geyBfX2h0bWw6IGZpbmFsQ29udGVudCB9O1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/utils/text/getContentWithWhitelist.ts\n");

/***/ })

})