"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[index]",{

/***/ "./pages/[index]/index.tsx":
/*!*********************************!*\
  !*** ./pages/[index]/index.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSG: function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/axios */ \"./axios.tsx\");\n/* harmony import */ var _content__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../content */ \"./pages/content.tsx\");\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/header */ \"./pages/components/header.tsx\");\n/* harmony import */ var _components_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/components */ \"./components/components.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nvar __N_SSG = true;\n// 객체 리터럴을 통해 변수를 따로 저장함으로써 getServerSideProps의 결과와 독립되어 지기\nfunction Home(param) {\n    let { initialData } = param;\n    _s();\n    const [res, setRes] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(initialData);\n    const [fetchIndex, setFetchIndex] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(40);\n    const [target, setTarget] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        setRes(initialData);\n    }, [\n        router.query,\n        initialData\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const options = {\n            root: null,\n            threshold: 1 // 타겟요소가 root에 얼마나 진입했을 때 동작할 것인지 설정. 1일 경우 전체가 진입해야 함. \n        };\n        const handleLoading = (param, observer)=>{\n            let [entry] = param;\n            if (entry.isIntersecting) {\n                observer.unobserve(entry.target);\n                // observe 해체\n                (0,_axios__WEBPACK_IMPORTED_MODULE_3__.Axios)(fetchIndex, JSON.parse(router.query.index)).then((_res)=>{\n                    setFetchIndex((prev)=>prev + 20);\n                    setRes((prev)=>[\n                            ...prev,\n                            ..._res\n                        ]);\n                    observer.observe(entry.target);\n                // observer 재시작\n                });\n            }\n        };\n        let observer;\n        if (target) {\n            observer = new IntersectionObserver(handleLoading, options);\n            observer.observe(target);\n        }\n        return ()=>{\n            if (observer) observer.disconnect();\n        };\n    }, [\n        target,\n        router.query.index,\n        fetchIndex\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_components__WEBPACK_IMPORTED_MODULE_6__.View, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_header__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/hongseungjae/Desktop/learning.js/muse/pages/[index]/index.tsx\",\n                lineNumber: 100,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_content__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                res: res\n            }, void 0, false, {\n                fileName: \"/Users/hongseungjae/Desktop/learning.js/muse/pages/[index]/index.tsx\",\n                lineNumber: 101,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                ref: setTarget,\n                style: {\n                    height: \"1vh\",\n                    width: \"100vw\"\n                }\n            }, void 0, false, {\n                fileName: \"/Users/hongseungjae/Desktop/learning.js/muse/pages/[index]/index.tsx\",\n                lineNumber: 102,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_components__WEBPACK_IMPORTED_MODULE_6__.Skeletons, {}, void 0, false, {\n                fileName: \"/Users/hongseungjae/Desktop/learning.js/muse/pages/[index]/index.tsx\",\n                lineNumber: 103,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/hongseungjae/Desktop/learning.js/muse/pages/[index]/index.tsx\",\n        lineNumber: 99,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"QRJSmN8GeKRZi6yO4HB1PXZvH2A=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9baW5kZXhdL2luZGV4LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUV3QztBQUNXO0FBRW5CO0FBQ0M7QUFFUztBQUNnQjs7QUE4QzFELDJEQUEyRDtBQUM1QyxTQUFTUyxLQUFNLEtBQXlEO1FBQXpELEVBQUVDLFdBQVcsRUFBNEMsR0FBekQ7O0lBQzVCLE1BQU0sQ0FBQ0MsS0FBS0MsT0FBTyxHQUFHVCwrQ0FBUUEsQ0FBWU87SUFDMUMsTUFBTSxDQUFDRyxZQUFZQyxjQUFjLEdBQUdYLCtDQUFRQSxDQUFTO0lBQ3JELE1BQU0sQ0FBQ1ksUUFBUUMsVUFBVSxHQUFHYiwrQ0FBUUE7SUFDcEMsTUFBTWMsU0FBU2pCLHNEQUFTQTtJQUd4QkUsZ0RBQVNBLENBQUM7UUFDUlUsT0FBT0Y7SUFDVCxHQUFHO1FBQUNPLE9BQU9DLEtBQUs7UUFBRVI7S0FBWTtJQUU5QlIsZ0RBQVNBLENBQUM7UUFDUixNQUFNaUIsVUFBVTtZQUNkQyxNQUFNO1lBQ05DLFdBQVcsRUFBRyx3REFBd0Q7UUFDeEU7UUFFQSxNQUFNQyxnQkFBZ0IsUUFBY0M7Z0JBQWIsQ0FBQ0MsTUFBVTtZQUNoQyxJQUFHQSxNQUFNQyxjQUFjLEVBQUU7Z0JBQ3ZCRixTQUFTRyxTQUFTLENBQUNGLE1BQU1ULE1BQU07Z0JBQy9CLGFBQWE7Z0JBQ2JYLDZDQUFLQSxDQUFDUyxZQUFZYyxLQUFLQyxLQUFLLENBQUNYLE9BQU9DLEtBQUssQ0FBQ1csS0FBSyxHQUFhQyxJQUFJLENBQUMsQ0FBQ0M7b0JBQ2hFakIsY0FBYyxDQUFDa0IsT0FBT0EsT0FBSztvQkFDM0JwQixPQUFPLENBQUNvQixPQUFPOytCQUFJQTsrQkFBU0Q7eUJBQUs7b0JBQ2pDUixTQUFTVSxPQUFPLENBQUNULE1BQU1ULE1BQU07Z0JBQzdCLGVBQWU7Z0JBQ2pCO1lBQ0Y7UUFDRjtRQUVBLElBQUlRO1FBQ0osSUFBR1IsUUFBUTtZQUNUUSxXQUFXLElBQUlXLHFCQUFxQlosZUFBZUg7WUFDbkRJLFNBQVNVLE9BQU8sQ0FBQ2xCO1FBQ25CO1FBQ0EsT0FBTztZQUNMLElBQUdRLFVBQ0hBLFNBQVNZLFVBQVU7UUFDckI7SUFDRixHQUFHO1FBQUNwQjtRQUFRRSxPQUFPQyxLQUFLLENBQUNXLEtBQUs7UUFBRWhCO0tBQVc7SUFFM0MscUJBQ0UsOERBQUNOLHdEQUFJQTs7MEJBQ0gsOERBQUNELDBEQUFNQTs7Ozs7MEJBQ1AsOERBQUNELGdEQUFPQTtnQkFBQ00sS0FBS0E7Ozs7OzswQkFDZCw4REFBQ3lCO2dCQUFJQyxLQUFLckI7Z0JBQVdzQixPQUFPO29CQUFDQyxRQUFPO29CQUFPQyxPQUFNO2dCQUFPOzs7Ozs7MEJBQ3hELDhEQUFDaEMsNkRBQVNBOzs7Ozs7Ozs7OztBQUdoQjtHQWpEd0JDOztRQUlQVCxrREFBU0E7OztLQUpGUyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9baW5kZXhdL2luZGV4LnRzeD8xNDMzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdHlwZSB7IEdldFN0YXRpY1Byb3BzLCBJbmZlckdldFN0YXRpY1Byb3BzVHlwZSB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgeyBBeGlvcyB9IGZyb20gJ0AvYXhpb3MnO1xuaW1wb3J0IENvbnRlbnQgZnJvbSAnLi4vY29udGVudCc7XG5pbXBvcnQgeyByZXNUeXBlIH0gZnJvbSAnQC90eXBlcy90eXBlJztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9oZWFkZXInO1xuaW1wb3J0IHsgVmlldywgU2tlbGV0b25zIH0gZnJvbSAnQC9jb21wb25lbnRzL2NvbXBvbmVudHMnO1xuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUGF0aHMgPSBhc3luYyAoKSA9PiB7XG4gIGxldCB0ZW1wID0gW107XG4gIGZvcihsZXQgaT0xOyBpPD0yMTsgaSsrKVxuICAgIGlmKGkgIT09IDIgJiYgaSAhPT0gMjApXG4gICAgICB0ZW1wLnB1c2goe3BhcmFtczp7aW5kZXg6IGAke2l9YH19KTtcbiAgcmV0dXJuIHtcbiAgICAgIHBhdGhzOiB0ZW1wLCBcbiAgICAgIGZhbGxiYWNrOiBmYWxzZVxuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyhjb250ZXh0OmFueSkge1xuICBjb25zb2xlLmxvZyhcIlxcblN0YXRpY1Byb3BzIDogXCIsIGNvbnRleHQucGFyYW1zLmluZGV4KTtcbiAgY29uc3QgaW5kZXg6c3RyaW5nID0gY29udGV4dC5wYXJhbXMuaW5kZXg7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KGBodHRwczovL2NvbGxlY3Rpb25hcGkubWV0bXVzZXVtLm9yZy9wdWJsaWMvY29sbGVjdGlvbi92MS9vYmplY3RzP2RlcGFydG1lbnRJZHM9JHtpbmRleH1gKTtcbiAgY29uc3QgZGF0YSA9IHJlc3BvbnNlLmRhdGEub2JqZWN0SURzO1xuICBsZXQgaXRlbTtcbiAgbGV0IF9yZXMgPSBbXTtcblxuICBmb3IobGV0IGk9MDsgaTw0MDsgaSsrKSB7XG4gICAgaXRlbSA9IGF3YWl0IGF4aW9zLmdldChgaHR0cHM6Ly9jb2xsZWN0aW9uYXBpLm1ldG11c2V1bS5vcmcvcHVibGljL2NvbGxlY3Rpb24vdjEvb2JqZWN0cy8ke2RhdGFbaV19YClcbiAgICBpZihpdGVtLmRhdGEucHJpbWFyeUltYWdlU21hbGwgIT09IFwiXCIpe1xuICAgICAgbGV0IHRlbXAgPSB7XG4gICAgICAgIHByaW1hcnlJbWFnZVNtYWxsOiBpdGVtLmRhdGEucHJpbWFyeUltYWdlU21hbGwsXG4gICAgICAgIHRpdGxlOiBpdGVtLmRhdGEudGl0bGUsXG4gICAgICAgIGNpdHk6IGl0ZW0uZGF0YS5jaXR5LFxuICAgICAgICBhcnRpc3REaXNwbGF5QmlvOiBpdGVtLmRhdGEuYXJ0aXN0RGlzcGxheUJpbyxcbiAgICAgICAgYXJ0aXN0RGlzcGxheU5hbWU6IGl0ZW0uZGF0YS5hcnRpc3REaXNwbGF5TmFtZSxcbiAgICAgICAgY291bnRyeTogaXRlbS5kYXRhLmNvdW50cnksXG4gICAgICAgIGRpbWVuc2lvbnM6IGl0ZW0uZGF0YS5kaW1lbnNpb25zLFxuICAgICAgICBtZWRpdW06IGl0ZW0uZGF0YS5tZWRpdW0sXG4gICAgICAgIG9iamVjdE5hbWU6IGl0ZW0uZGF0YS5vYmplY3ROYW1lLFxuICAgICAgICBvYmplY3RVUkw6IGl0ZW0uZGF0YS5vYmplY3RVUkwsXG4gICAgICAgIHJlcG9zaXRvcnk6IGl0ZW0uZGF0YS5yZXBvc2l0b3J5LFxuICAgICAgICBvYmplY3RJRDogaXRlbS5kYXRhLm9iamVjdElEXG4gICAgICB9XG4gICAgICBfcmVzLnB1c2godGVtcCk7XG4gICAgfVxuICB9XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHsgaW5pdGlhbERhdGEgOiBfcmVzIH1cbiAgfVxufVxuXG4vLyDqsJ3ssrQg66as7YSw65+07J2EIO2Gte2VtCDrs4DsiJjrpbwg65Sw66GcIOyggOyepe2VqOycvOuhnOyNqCBnZXRTZXJ2ZXJTaWRlUHJvcHPsnZgg6rKw6rO87JmAIOuPheumveuQmOyWtCDsp4DquLBcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoIHsgaW5pdGlhbERhdGEgfSA6IEluZmVyR2V0U3RhdGljUHJvcHNUeXBlPEdldFN0YXRpY1Byb3BzPikge1xuICBjb25zdCBbcmVzLCBzZXRSZXNdID0gdXNlU3RhdGU8cmVzVHlwZVtdPihpbml0aWFsRGF0YSk7XG4gIGNvbnN0IFtmZXRjaEluZGV4LCBzZXRGZXRjaEluZGV4XSA9IHVzZVN0YXRlPG51bWJlcj4oNDApO1xuICBjb25zdCBbdGFyZ2V0LCBzZXRUYXJnZXRdID0gdXNlU3RhdGU8YW55PigpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRSZXMoaW5pdGlhbERhdGEpO1xuICB9LCBbcm91dGVyLnF1ZXJ5LCBpbml0aWFsRGF0YV0pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgcm9vdDogbnVsbCwgICAvLyDtg4Dqsp/smpTshozqsIAg7Ja065SU7JeQIOuTpOyWtOyZlOydhCDrlYwg64+Z7J6R7ZWgIOqyg+yduOyngCDshKTsoJUuIG51bGzsnbzqsr3smrAgdmlld3BvcnTsl5AgdGFyZ2V07J20IOuTpOyWtOyYrCDqsr3smrAg64+Z7J6RLiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcnKeuhnCDtirnsoJXsmpTshowg7KeA7KCVIOqwgOuKpVxuICAgICAgdGhyZXNob2xkOiAxICAvLyDtg4Dqsp/smpTshozqsIAgcm9vdOyXkCDslrzrp4jrgpgg7KeE7J6F7ZaI7J2EIOuVjCDrj5nsnpHtlaAg6rKD7J247KeAIOyEpOyglS4gMeydvCDqsr3smrAg7KCE7LK06rCAIOynhOyehe2VtOyVvCDtlaguIFxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUxvYWRpbmcgPSAoW2VudHJ5XTphbnksIG9ic2VydmVyOmFueSkgPT4ge1xuICAgICAgaWYoZW50cnkuaXNJbnRlcnNlY3RpbmcpIHtcbiAgICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVudHJ5LnRhcmdldCk7XG4gICAgICAgIC8vIG9ic2VydmUg7ZW07LK0XG4gICAgICAgIEF4aW9zKGZldGNoSW5kZXgsIEpTT04ucGFyc2Uocm91dGVyLnF1ZXJ5LmluZGV4IGFzIHN0cmluZykpLnRoZW4oKF9yZXMpID0+IHtcbiAgICAgICAgICBzZXRGZXRjaEluZGV4KChwcmV2KT0+cHJldisyMCk7XG4gICAgICAgICAgc2V0UmVzKChwcmV2KT0+Wy4uLnByZXYsIC4uLl9yZXNdKTtcbiAgICAgICAgICBvYnNlcnZlci5vYnNlcnZlKGVudHJ5LnRhcmdldCk7XG4gICAgICAgICAgLy8gb2JzZXJ2ZXIg7J6s7Iuc7J6RXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxldCBvYnNlcnZlcjphbnk7XG4gICAgaWYodGFyZ2V0KSB7XG4gICAgICBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihoYW5kbGVMb2FkaW5nLCBvcHRpb25zKTtcbiAgICAgIG9ic2VydmVyLm9ic2VydmUodGFyZ2V0KTtcbiAgICB9XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGlmKG9ic2VydmVyKVxuICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgIH07XG4gIH0sIFt0YXJnZXQsIHJvdXRlci5xdWVyeS5pbmRleCwgZmV0Y2hJbmRleF0pO1xuXG4gIHJldHVybiAoXG4gICAgPFZpZXc+XG4gICAgICA8SGVhZGVyIC8+XG4gICAgICA8Q29udGVudCByZXM9e3Jlc30gLz5cbiAgICAgIDxkaXYgcmVmPXtzZXRUYXJnZXR9IHN0eWxlPXt7aGVpZ2h0OicxdmgnLCB3aWR0aDonMTAwdncnfX0gLz5cbiAgICAgIDxTa2VsZXRvbnMgLz5cbiAgICA8L1ZpZXc+XG4gIClcbn1cblxuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJBeGlvcyIsIkNvbnRlbnQiLCJIZWFkZXIiLCJWaWV3IiwiU2tlbGV0b25zIiwiSG9tZSIsImluaXRpYWxEYXRhIiwicmVzIiwic2V0UmVzIiwiZmV0Y2hJbmRleCIsInNldEZldGNoSW5kZXgiLCJ0YXJnZXQiLCJzZXRUYXJnZXQiLCJyb3V0ZXIiLCJxdWVyeSIsIm9wdGlvbnMiLCJyb290IiwidGhyZXNob2xkIiwiaGFuZGxlTG9hZGluZyIsIm9ic2VydmVyIiwiZW50cnkiLCJpc0ludGVyc2VjdGluZyIsInVub2JzZXJ2ZSIsIkpTT04iLCJwYXJzZSIsImluZGV4IiwidGhlbiIsIl9yZXMiLCJwcmV2Iiwib2JzZXJ2ZSIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiZGlzY29ubmVjdCIsImRpdiIsInJlZiIsInN0eWxlIiwiaGVpZ2h0Iiwid2lkdGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/[index]/index.tsx\n"));

/***/ })

});