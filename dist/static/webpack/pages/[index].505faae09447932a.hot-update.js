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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSG: function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/components */ \"./components/components.tsx\");\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/header */ \"./pages/components/header.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _content__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../content */ \"./pages/content.tsx\");\n/* harmony import */ var _axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/axios */ \"./axios.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nvar __N_SSG = true;\n// 객체 리터럴을 통해 변수를 따로 저장함으로써 getServerSideProps의 결과와 독립되어 지기\nfunction Home(param) {\n    let { initialData } = param;\n    _s();\n    const [res, setRes] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(initialData);\n    const [fetchIndex, setFetchIndex] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(40);\n    const [fetched, setFetched] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0);\n    const [target, setTarget] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    let flag = false;\n    const options = {\n        root: null,\n        threshold: 1 // 타겟요소가 root에 얼마나 진입했을 때 동작할 것인지 설정. 1일 경우 전체가 진입해야 함. \n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        const handleLoading = (param, observer)=>{\n            let [entry] = param;\n            console.log(\"handleLoading : \", fetchIndex);\n            if (entry.isIntersecting && flag) {\n                observer.unobserve(entry.target);\n                // observe 해체\n                (0,_axios__WEBPACK_IMPORTED_MODULE_6__.Axios)(fetchIndex, JSON.parse(router.query.index)).then((_res)=>{\n                    setRes((prev)=>[\n                            ...prev,\n                            ..._res\n                        ]);\n                    observer.observe(entry.target);\n                // observer 재시작\n                });\n            }\n            flag = true;\n            setFetched((prev)=>prev + 1);\n            setFetchIndex((prev)=>prev + 20);\n        };\n        let observer;\n        if (target) {\n            observer = new IntersectionObserver(handleLoading, options);\n            observer.observe(target);\n        }\n        return ()=>{\n            if (observer) observer.disconnect();\n        };\n    }, [\n        target\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_components__WEBPACK_IMPORTED_MODULE_1__.View, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/hongseungjae/Desktop/learning.js/muse/pages/[index]/index.tsx\",\n                lineNumber: 99,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_content__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                res: res\n            }, void 0, false, {\n                fileName: \"/Users/hongseungjae/Desktop/learning.js/muse/pages/[index]/index.tsx\",\n                lineNumber: 100,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                ref: setTarget,\n                style: {\n                    height: \"1vh\",\n                    width: \"100vw\"\n                }\n            }, void 0, false, {\n                fileName: \"/Users/hongseungjae/Desktop/learning.js/muse/pages/[index]/index.tsx\",\n                lineNumber: 101,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_components__WEBPACK_IMPORTED_MODULE_1__.Skeletons, {}, void 0, false, {\n                fileName: \"/Users/hongseungjae/Desktop/learning.js/muse/pages/[index]/index.tsx\",\n                lineNumber: 102,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/hongseungjae/Desktop/learning.js/muse/pages/[index]/index.tsx\",\n        lineNumber: 98,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"Igr7cyaCOqADieyY+WgrA6Ka/bk=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9baW5kZXhdL2luZGV4LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUMwRDtBQUNoQjtBQUU4QjtBQUVoQztBQUNQO0FBQ0Q7O0FBK0NoQywyREFBMkQ7QUFDNUMsU0FBU1MsS0FBTSxLQUF5RDtRQUF6RCxFQUFFQyxXQUFXLEVBQTRDLEdBQXpEOztJQUM1QixNQUFNLENBQUNDLEtBQUtDLE9BQU8sR0FBR1AsK0NBQVFBLENBQVlLO0lBQzFDLE1BQU0sQ0FBQ0csWUFBWUMsY0FBYyxHQUFHVCwrQ0FBUUEsQ0FBUztJQUNyRCxNQUFNLENBQUNVLFNBQVNDLFdBQVcsR0FBR1gsK0NBQVFBLENBQVM7SUFDL0MsTUFBTSxDQUFDWSxRQUFRQyxVQUFVLEdBQUdiLCtDQUFRQTtJQUNwQyxNQUFNYyxTQUFTYixzREFBU0E7SUFDeEIsSUFBSWMsT0FBTztJQUNYLE1BQU1DLFVBQVU7UUFDZEMsTUFBTTtRQUNOQyxXQUFXLEVBQUcsd0RBQXdEO0lBQ3hFO0lBRUFuQixnREFBU0EsQ0FBQztRQUNSLE1BQU1vQixnQkFBZ0IsUUFBY0M7Z0JBQWIsQ0FBQ0MsTUFBVTtZQUNoQ0MsUUFBUUMsR0FBRyxDQUFDLG9CQUFvQmY7WUFDaEMsSUFBR2EsTUFBTUcsY0FBYyxJQUFJVCxNQUFNO2dCQUMvQkssU0FBU0ssU0FBUyxDQUFDSixNQUFNVCxNQUFNO2dCQUMvQixhQUFhO2dCQUNiVCw2Q0FBS0EsQ0FBQ0ssWUFBWWtCLEtBQUtDLEtBQUssQ0FBQ2IsT0FBT2MsS0FBSyxDQUFDQyxLQUFLLEdBQWFDLElBQUksQ0FBQyxDQUFDQztvQkFDaEV4QixPQUFPLENBQUN5QixPQUFPOytCQUFJQTsrQkFBU0Q7eUJBQUs7b0JBQ2pDWCxTQUFTYSxPQUFPLENBQUNaLE1BQU1ULE1BQU07Z0JBQzdCLGVBQWU7Z0JBQ2pCO1lBQ0Y7WUFDQUcsT0FBTztZQUNQSixXQUFXLENBQUNxQixPQUFPQSxPQUFLO1lBQ3hCdkIsY0FBYyxDQUFDdUIsT0FBT0EsT0FBSztRQUM3QjtRQUVBLElBQUlaO1FBQ0osSUFBR1IsUUFBUTtZQUNUUSxXQUFXLElBQUljLHFCQUFxQmYsZUFBZUg7WUFDbkRJLFNBQVNhLE9BQU8sQ0FBQ3JCO1FBQ25CO1FBQ0EsT0FBTztZQUNMLElBQUdRLFVBQ0hBLFNBQVNlLFVBQVU7UUFDckI7SUFDRixHQUFHO1FBQUN2QjtLQUFPO0lBRVgscUJBQ0UsOERBQUNqQix3REFBSUE7OzBCQUNILDhEQUFDRSwwREFBTUE7Ozs7OzBCQUNQLDhEQUFDSyxnREFBT0E7Z0JBQUNJLEtBQUtBOzs7Ozs7MEJBQ2QsOERBQUM4QjtnQkFBSUMsS0FBS3hCO2dCQUFXeUIsT0FBTztvQkFBQ0MsUUFBTztvQkFBT0MsT0FBTTtnQkFBTzs7Ozs7OzBCQUN4RCw4REFBQzVDLDZEQUFTQTs7Ozs7Ozs7Ozs7QUFHaEI7R0FoRHdCUTs7UUFLUEgsa0RBQVNBOzs7S0FMRkciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW2luZGV4XS9pbmRleC50c3g/MTQzMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHsgVmlldywgU2tlbGV0b25zIH0gZnJvbSAnQC9jb21wb25lbnRzL2NvbXBvbmVudHMnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL2hlYWRlcic7XG5pbXBvcnQgdHlwZSB7IEdldFN0YXRpY1Byb3BzLCBJbmZlckdldFN0YXRpY1Byb3BzVHlwZSB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHJlc1R5cGUgfSBmcm9tICdAL3R5cGVzL3R5cGUnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IENvbnRlbnQgZnJvbSAnLi4vY29udGVudCc7XG5pbXBvcnQgeyBBeGlvcyB9IGZyb20gJ0AvYXhpb3MnO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1BhdGhzID0gYXN5bmMgKCkgPT4ge1xuICBsZXQgdGVtcCA9IFtdO1xuICBmb3IobGV0IGk9MTsgaTw9MjE7IGkrKylcbiAgICBpZihpICE9PSAyICYmIGkgIT09IDIwKVxuICAgICAgdGVtcC5wdXNoKHtwYXJhbXM6e2luZGV4OiBgJHtpfWB9fSk7XG4gIHJldHVybiB7XG4gICAgICBwYXRoczogdGVtcCwgXG4gICAgICBmYWxsYmFjazogZmFsc2VcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoY29udGV4dDphbnkpIHtcbiAgY29uc29sZS5sb2coXCJcXG5TdGF0aWNQcm9wcyA6IFwiLCBjb250ZXh0LnBhcmFtcy5pbmRleCk7XG4gIGNvbnN0IGluZGV4OnN0cmluZyA9IGNvbnRleHQucGFyYW1zLmluZGV4O1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChgaHR0cHM6Ly9jb2xsZWN0aW9uYXBpLm1ldG11c2V1bS5vcmcvcHVibGljL2NvbGxlY3Rpb24vdjEvb2JqZWN0cz9kZXBhcnRtZW50SWRzPSR7aW5kZXh9YCk7XG4gIGNvbnN0IGRhdGEgPSByZXNwb25zZS5kYXRhLm9iamVjdElEcztcbiAgbGV0IGl0ZW07XG4gIGxldCBfcmVzID0gW107XG5cbiAgZm9yKGxldCBpPTA7IGk8NDA7IGkrKykge1xuICAgIGl0ZW0gPSBhd2FpdCBheGlvcy5nZXQoYGh0dHBzOi8vY29sbGVjdGlvbmFwaS5tZXRtdXNldW0ub3JnL3B1YmxpYy9jb2xsZWN0aW9uL3YxL29iamVjdHMvJHtkYXRhW2ldfWApXG4gICAgaWYoaXRlbS5kYXRhLnByaW1hcnlJbWFnZVNtYWxsICE9PSBcIlwiKXtcbiAgICAgIGxldCB0ZW1wID0ge1xuICAgICAgICBwcmltYXJ5SW1hZ2VTbWFsbDogaXRlbS5kYXRhLnByaW1hcnlJbWFnZVNtYWxsLFxuICAgICAgICB0aXRsZTogaXRlbS5kYXRhLnRpdGxlLFxuICAgICAgICBjaXR5OiBpdGVtLmRhdGEuY2l0eSxcbiAgICAgICAgYXJ0aXN0RGlzcGxheUJpbzogaXRlbS5kYXRhLmFydGlzdERpc3BsYXlCaW8sXG4gICAgICAgIGFydGlzdERpc3BsYXlOYW1lOiBpdGVtLmRhdGEuYXJ0aXN0RGlzcGxheU5hbWUsXG4gICAgICAgIGNvdW50cnk6IGl0ZW0uZGF0YS5jb3VudHJ5LFxuICAgICAgICBkaW1lbnNpb25zOiBpdGVtLmRhdGEuZGltZW5zaW9ucyxcbiAgICAgICAgbWVkaXVtOiBpdGVtLmRhdGEubWVkaXVtLFxuICAgICAgICBvYmplY3ROYW1lOiBpdGVtLmRhdGEub2JqZWN0TmFtZSxcbiAgICAgICAgb2JqZWN0VVJMOiBpdGVtLmRhdGEub2JqZWN0VVJMLFxuICAgICAgICByZXBvc2l0b3J5OiBpdGVtLmRhdGEucmVwb3NpdG9yeSxcbiAgICAgICAgb2JqZWN0SUQ6IGl0ZW0uZGF0YS5vYmplY3RJRFxuICAgICAgfVxuICAgICAgX3Jlcy5wdXNoKHRlbXApO1xuICAgIH1cbiAgfVxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7IGluaXRpYWxEYXRhIDogX3JlcyB9XG4gIH1cbn1cblxuLy8g6rCd7LK0IOumrO2EsOuftOydhCDthrXtlbQg67OA7IiY66W8IOuUsOuhnCDsoIDsnqXtlajsnLzroZzsjaggZ2V0U2VydmVyU2lkZVByb3Bz7J2YIOqysOqzvOyZgCDrj4Xrpr3rkJjslrQg7KeA6riwXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCB7IGluaXRpYWxEYXRhIH0gOiBJbmZlckdldFN0YXRpY1Byb3BzVHlwZTxHZXRTdGF0aWNQcm9wcz4pIHtcbiAgY29uc3QgW3Jlcywgc2V0UmVzXSA9IHVzZVN0YXRlPHJlc1R5cGVbXT4oaW5pdGlhbERhdGEpO1xuICBjb25zdCBbZmV0Y2hJbmRleCwgc2V0RmV0Y2hJbmRleF0gPSB1c2VTdGF0ZTxudW1iZXI+KDQwKTtcbiAgY29uc3QgW2ZldGNoZWQsIHNldEZldGNoZWRdID0gdXNlU3RhdGU8bnVtYmVyPigwKTtcbiAgY29uc3QgW3RhcmdldCwgc2V0VGFyZ2V0XSA9IHVzZVN0YXRlPGFueT4oKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGxldCBmbGFnID0gZmFsc2U7XG4gIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgcm9vdDogbnVsbCwgICAvLyDtg4Dqsp/smpTshozqsIAg7Ja065SU7JeQIOuTpOyWtOyZlOydhCDrlYwg64+Z7J6R7ZWgIOqyg+yduOyngCDshKTsoJUuIG51bGzsnbzqsr3smrAgdmlld3BvcnTsl5AgdGFyZ2V07J20IOuTpOyWtOyYrCDqsr3smrAg64+Z7J6RLiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcnKeuhnCDtirnsoJXsmpTshowg7KeA7KCVIOqwgOuKpVxuICAgIHRocmVzaG9sZDogMSAgLy8g7YOA6rKf7JqU7IaM6rCAIHJvb3Tsl5Ag7Ja866eI64KYIOynhOyehe2WiOydhCDrlYwg64+Z7J6R7ZWgIOqyg+yduOyngCDshKTsoJUuIDHsnbwg6rK97JqwIOyghOyytOqwgCDsp4TsnoXtlbTslbwg7ZWoLiBcbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaGFuZGxlTG9hZGluZyA9IChbZW50cnldOmFueSwgb2JzZXJ2ZXI6YW55KSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcImhhbmRsZUxvYWRpbmcgOiBcIiwgZmV0Y2hJbmRleCk7XG4gICAgICBpZihlbnRyeS5pc0ludGVyc2VjdGluZyAmJiBmbGFnKSB7XG4gICAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpO1xuICAgICAgICAvLyBvYnNlcnZlIO2VtOyytFxuICAgICAgICBBeGlvcyhmZXRjaEluZGV4LCBKU09OLnBhcnNlKHJvdXRlci5xdWVyeS5pbmRleCBhcyBzdHJpbmcpKS50aGVuKChfcmVzKSA9PiB7XG4gICAgICAgICAgc2V0UmVzKChwcmV2KT0+Wy4uLnByZXYsIC4uLl9yZXNdKTtcbiAgICAgICAgICBvYnNlcnZlci5vYnNlcnZlKGVudHJ5LnRhcmdldCk7XG4gICAgICAgICAgLy8gb2JzZXJ2ZXIg7J6s7Iuc7J6RXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgZmxhZyA9IHRydWU7XG4gICAgICBzZXRGZXRjaGVkKChwcmV2KT0+cHJldisxKTtcbiAgICAgIHNldEZldGNoSW5kZXgoKHByZXYpPT5wcmV2KzIwKTtcbiAgICB9XG5cbiAgICBsZXQgb2JzZXJ2ZXI6YW55O1xuICAgIGlmKHRhcmdldCkge1xuICAgICAgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoaGFuZGxlTG9hZGluZywgb3B0aW9ucyk7XG4gICAgICBvYnNlcnZlci5vYnNlcnZlKHRhcmdldCk7XG4gICAgfVxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBpZihvYnNlcnZlcilcbiAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICB9O1xuICB9LCBbdGFyZ2V0XSk7XG5cbiAgcmV0dXJuIChcbiAgICA8Vmlldz5cbiAgICAgIDxIZWFkZXIgLz5cbiAgICAgIDxDb250ZW50IHJlcz17cmVzfSAvPlxuICAgICAgPGRpdiByZWY9e3NldFRhcmdldH0gc3R5bGU9e3toZWlnaHQ6JzF2aCcsIHdpZHRoOicxMDB2dyd9fSAvPlxuICAgICAgPFNrZWxldG9ucyAvPlxuICAgIDwvVmlldz5cbiAgKVxufVxuXG4iXSwibmFtZXMiOlsiVmlldyIsIlNrZWxldG9ucyIsIkhlYWRlciIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VSb3V0ZXIiLCJDb250ZW50IiwiQXhpb3MiLCJIb21lIiwiaW5pdGlhbERhdGEiLCJyZXMiLCJzZXRSZXMiLCJmZXRjaEluZGV4Iiwic2V0RmV0Y2hJbmRleCIsImZldGNoZWQiLCJzZXRGZXRjaGVkIiwidGFyZ2V0Iiwic2V0VGFyZ2V0Iiwicm91dGVyIiwiZmxhZyIsIm9wdGlvbnMiLCJyb290IiwidGhyZXNob2xkIiwiaGFuZGxlTG9hZGluZyIsIm9ic2VydmVyIiwiZW50cnkiLCJjb25zb2xlIiwibG9nIiwiaXNJbnRlcnNlY3RpbmciLCJ1bm9ic2VydmUiLCJKU09OIiwicGFyc2UiLCJxdWVyeSIsImluZGV4IiwidGhlbiIsIl9yZXMiLCJwcmV2Iiwib2JzZXJ2ZSIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiZGlzY29ubmVjdCIsImRpdiIsInJlZiIsInN0eWxlIiwiaGVpZ2h0Iiwid2lkdGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/[index]/index.tsx\n"));

/***/ })

});