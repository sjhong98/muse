"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/header.tsx":
/*!*******************************!*\
  !*** ./components/header.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Header: function() { return /* binding */ Header; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _assets_logo_jpeg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/logo.jpeg */ \"./assets/logo.jpeg\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ Header auto */ \nvar _s = $RefreshSig$();\n// server 코드의 경우, 처음 마운트되는 요소와, 이후 client 코드를 통해 마운트되는 코드의 차이가 발생 -> 위치 달라짐\n\n\n\nconst categries = [\n    {\n        category: 1,\n        id: \"American Decorative Arts\"\n    },\n    {\n        category: 3,\n        id: \"Ancient Near Eastern Art\"\n    },\n    {\n        category: 4,\n        id: \"Arms and Armor\"\n    },\n    {\n        category: 5,\n        id: \"Arts of Africa, Oceania, and the Americas\"\n    },\n    {\n        category: 6,\n        id: \"Asian Art\"\n    },\n    {\n        category: 7,\n        id: \"The Cloisters\"\n    },\n    {\n        category: 8,\n        id: \"The Costume Institute\"\n    },\n    {\n        category: 9,\n        id: \"Drawings and Prints\"\n    },\n    {\n        category: 10,\n        id: \"Egyptian Art\"\n    },\n    {\n        category: 11,\n        id: \"European Paintings\"\n    },\n    {\n        category: 12,\n        id: \"European Sculpture and Decorative Arts\"\n    },\n    {\n        category: 13,\n        id: \"Greek and Roman Art\"\n    },\n    {\n        category: 14,\n        id: \"Islamic Art\"\n    },\n    {\n        category: 15,\n        id: \"The Robert Lehman Collection\"\n    },\n    {\n        category: 16,\n        id: \"The Libraries\"\n    },\n    {\n        category: 17,\n        id: \"Medieval Art\"\n    },\n    {\n        category: 18,\n        id: \"Musical Instruments\"\n    },\n    {\n        category: 19,\n        id: \"Photographs\"\n    },\n    {\n        category: 21,\n        id: \"Modern Art\"\n    }\n];\nfunction Header() {\n    _s();\n    const headerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    let lastScrollPosition;\n    const [isMenuOpen, setIsMenuOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const menuRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const handleMenuClick = ()=>{\n        setIsMenuOpen((isMenuOpen)=>!isMenuOpen);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (isMenuOpen) {\n            var _menuRef_current, _menuRef_current1;\n            (_menuRef_current = menuRef.current) === null || _menuRef_current === void 0 ? void 0 : _menuRef_current.classList.add(\"menu-open\");\n            (_menuRef_current1 = menuRef.current) === null || _menuRef_current1 === void 0 ? void 0 : _menuRef_current1.classList.remove(\"menu-close\");\n        } else {\n            var _menuRef_current2, _menuRef_current3;\n            (_menuRef_current2 = menuRef.current) === null || _menuRef_current2 === void 0 ? void 0 : _menuRef_current2.classList.add(\"menu-close\");\n            (_menuRef_current3 = menuRef.current) === null || _menuRef_current3 === void 0 ? void 0 : _menuRef_current3.classList.remove(\"menu-open\");\n        }\n    }, [\n        isMenuOpen\n    ]);\n    // 일부 프레임워크들은 서버에서 코드를 실행하여 초기 렌더링 수행 -> 방어적인 코드 필요\n    if (true) lastScrollPosition = window.scrollY;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        window.addEventListener(\"scroll\", handleScroll);\n        return ()=>{\n            window.removeEventListener(\"scroll\", handleScroll);\n        };\n    }, []);\n    const handleScroll = ()=>{\n        // 마지막으로 스크롤된 위치와 현재 스크롤 위치를 비교\n        if (window.scrollY > lastScrollPosition) {\n            var _menuRef_current, _menuRef_current1, _headerRef_current, _headerRef_current1;\n            (_menuRef_current = menuRef.current) === null || _menuRef_current === void 0 ? void 0 : _menuRef_current.classList.add(\"menu-close\");\n            (_menuRef_current1 = menuRef.current) === null || _menuRef_current1 === void 0 ? void 0 : _menuRef_current1.classList.remove(\"menu-open\");\n            (_headerRef_current = headerRef.current) === null || _headerRef_current === void 0 ? void 0 : _headerRef_current.classList.add(\"header-close\");\n            (_headerRef_current1 = headerRef.current) === null || _headerRef_current1 === void 0 ? void 0 : _headerRef_current1.classList.remove(\"header-open\");\n        } else {\n            var _headerRef_current2, _headerRef_current3;\n            (_headerRef_current2 = headerRef.current) === null || _headerRef_current2 === void 0 ? void 0 : _headerRef_current2.classList.add(\"header-open\");\n            (_headerRef_current3 = headerRef.current) === null || _headerRef_current3 === void 0 ? void 0 : _headerRef_current3.classList.remove(\"header-close\");\n        }\n        lastScrollPosition = window.scrollY;\n        console.log(headerRef.current);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-row header-open fixed z-[9998] bg-white w-[100vw]\",\n        ref: headerRef,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                alt: \"...\",\n                src: _assets_logo_jpeg__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n                className: \"w-80 mt-5 ml-[10vw]\"\n            }, void 0, false, {\n                fileName: \"/Users/hongseungjae/Desktop/learning.js/muse/components/header.tsx\",\n                lineNumber: 89,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute rounded-full w-[7vh] h-[7vh] bg-red-500 mt-[10vh] right-[5vw] cursor-pointer\",\n                onClick: handleMenuClick,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"ml-12\",\n                        children: \"M\"\n                    }, void 0, false, {\n                        fileName: \"/Users/hongseungjae/Desktop/learning.js/muse/components/header.tsx\",\n                        lineNumber: 91,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        ref: menuRef,\n                        className: \"absolute right-[-33vw] top-[0vh] bg-red-500 rounded-lg w-[36vw] h-[80vh] z-[9999]\",\n                        children: categries.map((item, index)=>{\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-2xl\",\n                                children: item.id\n                            }, index, false, {\n                                fileName: \"/Users/hongseungjae/Desktop/learning.js/muse/components/header.tsx\",\n                                lineNumber: 95,\n                                columnNumber: 25\n                            }, this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/hongseungjae/Desktop/learning.js/muse/components/header.tsx\",\n                        lineNumber: 92,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/hongseungjae/Desktop/learning.js/muse/components/header.tsx\",\n                lineNumber: 90,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/hongseungjae/Desktop/learning.js/muse/components/header.tsx\",\n        lineNumber: 88,\n        columnNumber: 9\n    }, this);\n} // function HeaderContent() {\n //     const [isMenuOpen, setIsMenuOpen] = useState(false);\n //     const handleMenuClick = () => {\n //         setIsMenuOpen((isMenuOpen) => !isMenuOpen);\n //     }\n //     return (\n //         <div className=\"flex flex-row\">\n //             <ImageNext alt=\"...\" src={Logo} className=\"w-80 mt-5\" />\n //             <div className=\"absolute rounded-full w-[7vh] h-[7vh] bg-red-500 mt-[10vh] right-[5vw] cursor-pointer\" onClick={handleMenuClick}>\n //                     <MenuOpen isMenuOpen={isMenuOpen} className=\"absolute right-[0vh] top-[0vh] bg-red-500 rounded-3xl w-[20vw] h-[70vh]\">\n //                     </MenuOpen>\n //             </div>\n //         </div>\n //     )\n // }\n // const MenuOpen = styled(\"div\")<{ isMenuOpen:boolean }>`\n //     animation: ${(props) => props.isMenuOpen ? css`${menuOpenAnim} 1s ease forwards` : css`${menuCloseAnim} 1s ease forwards`};\n // `\n // 함수와 변수의 선언만 호이스팅 적용 대상 -> keyframes는 아무것도 아니므로 호이스팅 적용대상 X\n_s(Header, \"awcy8Jp5YcgZ2V+mOxOLxtaausA=\");\n_c = Header;\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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d2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2hlYWRlci50c3g/ODcwYyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5cbi8vIHNlcnZlciDsvZTrk5zsnZgg6rK97JqwLCDsspjsnYwg66eI7Jq07Yq465CY64qUIOyalOyGjOyZgCwg7J207ZuEIGNsaWVudCDsvZTrk5zrpbwg7Ya17ZW0IOuniOyatO2KuOuQmOuKlCDsvZTrk5zsnZgg7LCo7J206rCAIOuwnOyDnSAtPiDsnITsuZgg64us65287KeQXG5cbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMb2dvIGZyb20gJy4uL2Fzc2V0cy9sb2dvLmpwZWcnO1xuaW1wb3J0IEltYWdlTmV4dCBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHN0eWxlZCwge2tleWZyYW1lc30gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5cbmludGVyZmFjZSBjYXRlZ29yeVR5cGUge1xuICAgIGlkOnN0cmluZyxcbiAgICBjYXRlZ29yeTogbnVtYmVyXG59XG5cbmNvbnN0IGNhdGVncmllcyA9IFtcbiAgICB7Y2F0ZWdvcnk6MSwgaWQ6XCJBbWVyaWNhbiBEZWNvcmF0aXZlIEFydHNcIn0sXG4gICAge2NhdGVnb3J5OjMsIGlkOlwiQW5jaWVudCBOZWFyIEVhc3Rlcm4gQXJ0XCJ9LFxuICAgIHtjYXRlZ29yeTo0LCBpZDpcIkFybXMgYW5kIEFybW9yXCJ9LFxuICAgIHtjYXRlZ29yeTo1LCBpZDpcIkFydHMgb2YgQWZyaWNhLCBPY2VhbmlhLCBhbmQgdGhlIEFtZXJpY2FzXCJ9LFxuICAgIHtjYXRlZ29yeTo2LCBpZDpcIkFzaWFuIEFydFwifSxcbiAgICB7Y2F0ZWdvcnk6NywgaWQ6XCJUaGUgQ2xvaXN0ZXJzXCJ9LFxuICAgIHtjYXRlZ29yeTo4LCBpZDpcIlRoZSBDb3N0dW1lIEluc3RpdHV0ZVwifSxcbiAgICB7Y2F0ZWdvcnk6OSwgaWQ6XCJEcmF3aW5ncyBhbmQgUHJpbnRzXCJ9LFxuICAgIHtjYXRlZ29yeToxMCwgaWQ6XCJFZ3lwdGlhbiBBcnRcIn0sXG4gICAge2NhdGVnb3J5OjExLCBpZDpcIkV1cm9wZWFuIFBhaW50aW5nc1wifSxcbiAgICB7Y2F0ZWdvcnk6MTIsIGlkOlwiRXVyb3BlYW4gU2N1bHB0dXJlIGFuZCBEZWNvcmF0aXZlIEFydHNcIn0sXG4gICAge2NhdGVnb3J5OjEzLCBpZDpcIkdyZWVrIGFuZCBSb21hbiBBcnRcIn0sXG4gICAge2NhdGVnb3J5OjE0LCBpZDpcIklzbGFtaWMgQXJ0XCJ9LFxuICAgIHtjYXRlZ29yeToxNSwgaWQ6XCJUaGUgUm9iZXJ0IExlaG1hbiBDb2xsZWN0aW9uXCJ9LFxuICAgIHtjYXRlZ29yeToxNiwgaWQ6XCJUaGUgTGlicmFyaWVzXCJ9LFxuICAgIHtjYXRlZ29yeToxNywgaWQ6XCJNZWRpZXZhbCBBcnRcIn0sXG4gICAge2NhdGVnb3J5OjE4LCBpZDpcIk11c2ljYWwgSW5zdHJ1bWVudHNcIn0sXG4gICAge2NhdGVnb3J5OjE5LCBpZDpcIlBob3RvZ3JhcGhzXCJ9LFxuICAgIHtjYXRlZ29yeToyMSwgaWQ6XCJNb2Rlcm4gQXJ0XCJ9LFxuXVxuXG5leHBvcnQgZnVuY3Rpb24gSGVhZGVyKCkge1xuICAgIGNvbnN0IGhlYWRlclJlZiA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbCk7XG4gICAgbGV0IGxhc3RTY3JvbGxQb3NpdGlvbjogbnVtYmVyO1xuXG4gICAgY29uc3QgW2lzTWVudU9wZW4sIHNldElzTWVudU9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IG1lbnVSZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpO1xuXG4gICAgY29uc3QgaGFuZGxlTWVudUNsaWNrID0gKCkgPT4ge1xuICAgICAgICBzZXRJc01lbnVPcGVuKChpc01lbnVPcGVuKSA9PiAhaXNNZW51T3Blbik7XG4gICAgfVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYoaXNNZW51T3Blbikge1xuICAgICAgICAgICAgbWVudVJlZi5jdXJyZW50Py5jbGFzc0xpc3QuYWRkKCdtZW51LW9wZW4nKTtcbiAgICAgICAgICAgIG1lbnVSZWYuY3VycmVudD8uY2xhc3NMaXN0LnJlbW92ZSgnbWVudS1jbG9zZScpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWVudVJlZi5jdXJyZW50Py5jbGFzc0xpc3QuYWRkKCdtZW51LWNsb3NlJyk7XG4gICAgICAgICAgICBtZW51UmVmLmN1cnJlbnQ/LmNsYXNzTGlzdC5yZW1vdmUoJ21lbnUtb3BlbicpO1xuICAgICAgICB9XG4gICAgfSwgW2lzTWVudU9wZW5dKVxuXG4gICAgLy8g7J2867aAIO2UhOugiOyehOybjO2BrOuTpOydgCDshJzrsoTsl5DshJwg7L2U65Oc66W8IOyLpO2Wie2VmOyXrCDstIjquLAg66CM642U66eBIOyImO2WiSAtPiDrsKnslrTsoIHsnbgg7L2U65OcIO2VhOyalFxuICAgIGlmKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSBcbiAgICAgICAgbGFzdFNjcm9sbFBvc2l0aW9uID0gd2luZG93LnNjcm9sbFk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2Nyb2xsKTtcbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwpO1xuICAgICAgICB9XG4gICAgfSwgW10pXG5cbiAgICBjb25zdCBoYW5kbGVTY3JvbGwgPSAoKSA9PiB7XG4gICAgICAgIC8vIOuniOyngOunieycvOuhnCDsiqTtgazroaTrkJwg7JyE7LmY7JmAIO2YhOyerCDsiqTtgazroaQg7JyE7LmY66W8IOu5hOq1kFxuICAgICAgICBpZih3aW5kb3cuc2Nyb2xsWSA+IGxhc3RTY3JvbGxQb3NpdGlvbikgLy8gc2Nyb2xsZWQtZG93biAtPiBoZWFkZXIg7Jis65286rCA7JW8IO2VqFxuICAgICAgICB7XG4gICAgICAgICAgICBtZW51UmVmLmN1cnJlbnQ/LmNsYXNzTGlzdC5hZGQoJ21lbnUtY2xvc2UnKTtcbiAgICAgICAgICAgIG1lbnVSZWYuY3VycmVudD8uY2xhc3NMaXN0LnJlbW92ZSgnbWVudS1vcGVuJyk7XG4gICAgICAgICAgICBoZWFkZXJSZWYuY3VycmVudD8uY2xhc3NMaXN0LmFkZCgnaGVhZGVyLWNsb3NlJyk7XG4gICAgICAgICAgICBoZWFkZXJSZWYuY3VycmVudD8uY2xhc3NMaXN0LnJlbW92ZSgnaGVhZGVyLW9wZW4nKTtcbiAgICAgICAgICAgIFxuICAgICAgICB9IGVsc2UgICAgLy8gc2Nyb2xsZWQtdXAgLT4gaGVhZGVyIOuCtOugpOyZgOyVvO2VqFxuICAgICAgICB7ICAgXG4gICAgICAgICAgICBoZWFkZXJSZWYuY3VycmVudD8uY2xhc3NMaXN0LmFkZCgnaGVhZGVyLW9wZW4nKTtcbiAgICAgICAgICAgIGhlYWRlclJlZi5jdXJyZW50Py5jbGFzc0xpc3QucmVtb3ZlKCdoZWFkZXItY2xvc2UnKTtcbiAgICAgICAgfVxuICAgICAgICBsYXN0U2Nyb2xsUG9zaXRpb24gPSB3aW5kb3cuc2Nyb2xsWTtcbiAgICAgICAgY29uc29sZS5sb2coaGVhZGVyUmVmLmN1cnJlbnQpO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBoZWFkZXItb3BlbiBmaXhlZCB6LVs5OTk4XSBiZy13aGl0ZSB3LVsxMDB2d11cIiByZWY9e2hlYWRlclJlZn0+XG4gICAgICAgICAgICA8SW1hZ2VOZXh0IGFsdD1cIi4uLlwiIHNyYz17TG9nb30gY2xhc3NOYW1lPVwidy04MCBtdC01IG1sLVsxMHZ3XVwiIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHJvdW5kZWQtZnVsbCB3LVs3dmhdIGgtWzd2aF0gYmctcmVkLTUwMCBtdC1bMTB2aF0gcmlnaHQtWzV2d10gY3Vyc29yLXBvaW50ZXJcIiBvbkNsaWNrPXtoYW5kbGVNZW51Q2xpY2t9PlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1sLTEyXCI+TTwvcD5cbiAgICAgICAgICAgICAgICA8ZGl2IHJlZj17bWVudVJlZn0gY2xhc3NOYW1lPVwiYWJzb2x1dGUgcmlnaHQtWy0zM3Z3XSB0b3AtWzB2aF0gYmctcmVkLTUwMCByb3VuZGVkLWxnIHctWzM2dnddIGgtWzgwdmhdIHotWzk5OTldXCIgPlxuICAgICAgICAgICAgICAgIHsgICBjYXRlZ3JpZXMubWFwKChpdGVtOmNhdGVnb3J5VHlwZSwgaW5kZXg6bnVtYmVyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bFwiPntpdGVtLmlkfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgKX0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cbi8vIGZ1bmN0aW9uIEhlYWRlckNvbnRlbnQoKSB7XG4vLyAgICAgY29uc3QgW2lzTWVudU9wZW4sIHNldElzTWVudU9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4vLyAgICAgY29uc3QgaGFuZGxlTWVudUNsaWNrID0gKCkgPT4ge1xuLy8gICAgICAgICBzZXRJc01lbnVPcGVuKChpc01lbnVPcGVuKSA9PiAhaXNNZW51T3Blbik7XG4vLyAgICAgfVxuXG4vLyAgICAgcmV0dXJuIChcbi8vICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93XCI+XG4vLyAgICAgICAgICAgICA8SW1hZ2VOZXh0IGFsdD1cIi4uLlwiIHNyYz17TG9nb30gY2xhc3NOYW1lPVwidy04MCBtdC01XCIgLz5cbi8vICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgcm91bmRlZC1mdWxsIHctWzd2aF0gaC1bN3ZoXSBiZy1yZWQtNTAwIG10LVsxMHZoXSByaWdodC1bNXZ3XSBjdXJzb3ItcG9pbnRlclwiIG9uQ2xpY2s9e2hhbmRsZU1lbnVDbGlja30+XG4vLyAgICAgICAgICAgICAgICAgICAgIDxNZW51T3BlbiBpc01lbnVPcGVuPXtpc01lbnVPcGVufSBjbGFzc05hbWU9XCJhYnNvbHV0ZSByaWdodC1bMHZoXSB0b3AtWzB2aF0gYmctcmVkLTUwMCByb3VuZGVkLTN4bCB3LVsyMHZ3XSBoLVs3MHZoXVwiPlxuXG4vLyAgICAgICAgICAgICAgICAgICAgIDwvTWVudU9wZW4+XG4gICAgICAgICAgICAgICBcbi8vICAgICAgICAgICAgIDwvZGl2PlxuLy8gICAgICAgICA8L2Rpdj5cbi8vICAgICApXG4vLyB9XG5cbi8vIGNvbnN0IE1lbnVPcGVuID0gc3R5bGVkKFwiZGl2XCIpPHsgaXNNZW51T3Blbjpib29sZWFuIH0+YFxuLy8gICAgIGFuaW1hdGlvbjogJHsocHJvcHMpID0+IHByb3BzLmlzTWVudU9wZW4gPyBjc3NgJHttZW51T3BlbkFuaW19IDFzIGVhc2UgZm9yd2FyZHNgIDogY3NzYCR7bWVudUNsb3NlQW5pbX0gMXMgZWFzZSBmb3J3YXJkc2B9O1xuLy8gYFxuXG5cbi8vIO2VqOyImOyZgCDrs4DsiJjsnZgg7ISg7Ja466eMIO2YuOydtOyKpO2MhSDsoIHsmqkg64yA7IOBIC0+IGtleWZyYW1lc+uKlCDslYTrrLTqsoPrj4Qg7JWE64uI66+A66GcIO2YuOydtOyKpO2MhSDsoIHsmqnrjIDsg4EgWFxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJMb2dvIiwiSW1hZ2VOZXh0IiwiY2F0ZWdyaWVzIiwiY2F0ZWdvcnkiLCJpZCIsIkhlYWRlciIsImhlYWRlclJlZiIsImxhc3RTY3JvbGxQb3NpdGlvbiIsImlzTWVudU9wZW4iLCJzZXRJc01lbnVPcGVuIiwibWVudVJlZiIsImhhbmRsZU1lbnVDbGljayIsImN1cnJlbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJ3aW5kb3ciLCJzY3JvbGxZIiwiYWRkRXZlbnRMaXN0ZW5lciIsImhhbmRsZVNjcm9sbCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwicmVmIiwiYWx0Iiwic3JjIiwib25DbGljayIsInAiLCJtYXAiLCJpdGVtIiwiaW5kZXgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/header.tsx\n"));

/***/ })

});