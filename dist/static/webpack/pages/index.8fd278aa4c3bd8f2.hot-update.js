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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Header: function() { return /* binding */ Header; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _assets_logo_jpeg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/logo.jpeg */ \"./assets/logo.jpeg\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ Header auto */ \nvar _s = $RefreshSig$();\n// server 코드의 경우, 처음 마운트되는 요소와, 이후 client 코드를 통해 마운트되는 코드의 차이가 발생 -> 위치 달라짐\n\n\n\nconst categries = [\n    {\n        category: 1,\n        id: \"American Decorative Arts\"\n    },\n    {\n        category: 3,\n        id: \"Ancient Near Eastern Art\"\n    },\n    {\n        category: 4,\n        id: \"Arms and Armor\"\n    },\n    {\n        category: 5,\n        id: \"Arts of Africa, Oceania, and the Americas\"\n    },\n    {\n        category: 6,\n        id: \"Asian Art\"\n    },\n    {\n        category: 7,\n        id: \"The Cloisters\"\n    },\n    {\n        category: 8,\n        id: \"The Costume Institute\"\n    },\n    {\n        category: 9,\n        id: \"Drawings and Prints\"\n    },\n    {\n        category: 10,\n        id: \"Egyptian Art\"\n    },\n    {\n        category: 11,\n        id: \"European Paintings\"\n    },\n    {\n        category: 12,\n        id: \"European Sculpture and Decorative Arts\"\n    },\n    {\n        category: 13,\n        id: \"Greek and Roman Art\"\n    },\n    {\n        category: 14,\n        id: \"Islamic Art\"\n    },\n    {\n        category: 15,\n        id: \"The Robert Lehman Collection\"\n    },\n    {\n        category: 16,\n        id: \"The Libraries\"\n    },\n    {\n        category: 17,\n        id: \"Medieval Art\"\n    },\n    {\n        category: 18,\n        id: \"Musical Instruments\"\n    },\n    {\n        category: 19,\n        id: \"Photographs\"\n    },\n    {\n        category: 21,\n        id: \"Modern Art\"\n    }\n];\nfunction Header() {\n    _s();\n    const headerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    let lastScrollPosition;\n    const [isMenuOpen, setIsMenuOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const menuRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const handleMenuClick = ()=>{\n        setIsMenuOpen((isMenuOpen)=>!isMenuOpen);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (isMenuOpen) {\n            var _menuRef_current, _menuRef_current1;\n            (_menuRef_current = menuRef.current) === null || _menuRef_current === void 0 ? void 0 : _menuRef_current.classList.add(\"menu-open\");\n            (_menuRef_current1 = menuRef.current) === null || _menuRef_current1 === void 0 ? void 0 : _menuRef_current1.classList.remove(\"menu-close\");\n        } else {\n            var _menuRef_current2, _menuRef_current3;\n            (_menuRef_current2 = menuRef.current) === null || _menuRef_current2 === void 0 ? void 0 : _menuRef_current2.classList.add(\"menu-close\");\n            (_menuRef_current3 = menuRef.current) === null || _menuRef_current3 === void 0 ? void 0 : _menuRef_current3.classList.remove(\"menu-open\");\n        }\n    }, [\n        isMenuOpen\n    ]);\n    // 일부 프레임워크들은 서버에서 코드를 실행하여 초기 렌더링 수행 -> 방어적인 코드 필요\n    if (true) lastScrollPosition = window.scrollY;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        window.addEventListener(\"scroll\", handleScroll);\n        return ()=>{\n            window.removeEventListener(\"scroll\", handleScroll);\n        };\n    }, []);\n    const handleScroll = ()=>{\n        // 마지막으로 스크롤된 위치와 현재 스크롤 위치를 비교\n        if (window.scrollY > lastScrollPosition) {\n            var _menuRef_current, _menuRef_current1, _headerRef_current, _headerRef_current1;\n            (_menuRef_current = menuRef.current) === null || _menuRef_current === void 0 ? void 0 : _menuRef_current.classList.add(\"menu-close\");\n            (_menuRef_current1 = menuRef.current) === null || _menuRef_current1 === void 0 ? void 0 : _menuRef_current1.classList.remove(\"menu-open\");\n            (_headerRef_current = headerRef.current) === null || _headerRef_current === void 0 ? void 0 : _headerRef_current.classList.add(\"header-close\");\n            (_headerRef_current1 = headerRef.current) === null || _headerRef_current1 === void 0 ? void 0 : _headerRef_current1.classList.remove(\"header-open\");\n        } else {\n            var _headerRef_current2, _headerRef_current3;\n            (_headerRef_current2 = headerRef.current) === null || _headerRef_current2 === void 0 ? void 0 : _headerRef_current2.classList.add(\"header-open\");\n            (_headerRef_current3 = headerRef.current) === null || _headerRef_current3 === void 0 ? void 0 : _headerRef_current3.classList.remove(\"header-close\");\n        }\n        lastScrollPosition = window.scrollY;\n        console.log(headerRef.current);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-row header-open fixed z-[9998] bg-white w-[100vw]\",\n        ref: headerRef,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                alt: \"...\",\n                src: _assets_logo_jpeg__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n                className: \"w-80 mt-5 ml-[20vw]\"\n            }, void 0, false, {\n                fileName: \"/Users/hongseungjae/Desktop/learning.js/muse/components/header.tsx\",\n                lineNumber: 89,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute rounded-full w-[7vh] h-[7vh] bg-red-500 mt-[10vh] right-[15vw] cursor-pointer\",\n                onClick: handleMenuClick,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    ref: menuRef,\n                    className: \"absolute right-[-33vw] top-[0vh] bg-red-500 rounded-lg w-[36vw] h-[80vh] z-[9999]\",\n                    children: categries.map((item, index)=>{\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-2xl\",\n                            children: item.id\n                        }, index, false, {\n                            fileName: \"/Users/hongseungjae/Desktop/learning.js/muse/components/header.tsx\",\n                            lineNumber: 94,\n                            columnNumber: 25\n                        }, this);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/hongseungjae/Desktop/learning.js/muse/components/header.tsx\",\n                    lineNumber: 91,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/hongseungjae/Desktop/learning.js/muse/components/header.tsx\",\n                lineNumber: 90,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/hongseungjae/Desktop/learning.js/muse/components/header.tsx\",\n        lineNumber: 88,\n        columnNumber: 9\n    }, this);\n} // function HeaderContent() {\n //     const [isMenuOpen, setIsMenuOpen] = useState(false);\n //     const handleMenuClick = () => {\n //         setIsMenuOpen((isMenuOpen) => !isMenuOpen);\n //     }\n //     return (\n //         <div className=\"flex flex-row\">\n //             <ImageNext alt=\"...\" src={Logo} className=\"w-80 mt-5\" />\n //             <div className=\"absolute rounded-full w-[7vh] h-[7vh] bg-red-500 mt-[10vh] right-[5vw] cursor-pointer\" onClick={handleMenuClick}>\n //                     <MenuOpen isMenuOpen={isMenuOpen} className=\"absolute right-[0vh] top-[0vh] bg-red-500 rounded-3xl w-[20vw] h-[70vh]\">\n //                     </MenuOpen>\n //             </div>\n //         </div>\n //     )\n // }\n // const MenuOpen = styled(\"div\")<{ isMenuOpen:boolean }>`\n //     animation: ${(props) => props.isMenuOpen ? css`${menuOpenAnim} 1s ease forwards` : css`${menuCloseAnim} 1s ease forwards`};\n // `\n // 함수와 변수의 선언만 호이스팅 적용 대상 -> keyframes는 아무것도 아니므로 호이스팅 적용대상 X\n_s(Header, \"awcy8Jp5YcgZ2V+mOxOLxtaausA=\");\n_c = Header;\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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NzBjIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcblxuLy8gc2VydmVyIOy9lOuTnOydmCDqsr3smrAsIOyymOydjCDrp4jsmrTtirjrkJjripQg7JqU7IaM7JmALCDsnbTtm4QgY2xpZW50IOy9lOuTnOulvCDthrXtlbQg66eI7Jq07Yq465CY64qUIOy9lOuTnOydmCDssKjsnbTqsIAg67Cc7IOdIC0+IOychOy5mCDri6zrnbzsp5BcblxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExvZ28gZnJvbSAnLi4vYXNzZXRzL2xvZ28uanBlZyc7XG5pbXBvcnQgSW1hZ2VOZXh0IGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgc3R5bGVkLCB7a2V5ZnJhbWVzfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuaW50ZXJmYWNlIGNhdGVnb3J5VHlwZSB7XG4gICAgaWQ6c3RyaW5nLFxuICAgIGNhdGVnb3J5OiBudW1iZXJcbn1cblxuY29uc3QgY2F0ZWdyaWVzID0gW1xuICAgIHtjYXRlZ29yeToxLCBpZDpcIkFtZXJpY2FuIERlY29yYXRpdmUgQXJ0c1wifSxcbiAgICB7Y2F0ZWdvcnk6MywgaWQ6XCJBbmNpZW50IE5lYXIgRWFzdGVybiBBcnRcIn0sXG4gICAge2NhdGVnb3J5OjQsIGlkOlwiQXJtcyBhbmQgQXJtb3JcIn0sXG4gICAge2NhdGVnb3J5OjUsIGlkOlwiQXJ0cyBvZiBBZnJpY2EsIE9jZWFuaWEsIGFuZCB0aGUgQW1lcmljYXNcIn0sXG4gICAge2NhdGVnb3J5OjYsIGlkOlwiQXNpYW4gQXJ0XCJ9LFxuICAgIHtjYXRlZ29yeTo3LCBpZDpcIlRoZSBDbG9pc3RlcnNcIn0sXG4gICAge2NhdGVnb3J5OjgsIGlkOlwiVGhlIENvc3R1bWUgSW5zdGl0dXRlXCJ9LFxuICAgIHtjYXRlZ29yeTo5LCBpZDpcIkRyYXdpbmdzIGFuZCBQcmludHNcIn0sXG4gICAge2NhdGVnb3J5OjEwLCBpZDpcIkVneXB0aWFuIEFydFwifSxcbiAgICB7Y2F0ZWdvcnk6MTEsIGlkOlwiRXVyb3BlYW4gUGFpbnRpbmdzXCJ9LFxuICAgIHtjYXRlZ29yeToxMiwgaWQ6XCJFdXJvcGVhbiBTY3VscHR1cmUgYW5kIERlY29yYXRpdmUgQXJ0c1wifSxcbiAgICB7Y2F0ZWdvcnk6MTMsIGlkOlwiR3JlZWsgYW5kIFJvbWFuIEFydFwifSxcbiAgICB7Y2F0ZWdvcnk6MTQsIGlkOlwiSXNsYW1pYyBBcnRcIn0sXG4gICAge2NhdGVnb3J5OjE1LCBpZDpcIlRoZSBSb2JlcnQgTGVobWFuIENvbGxlY3Rpb25cIn0sXG4gICAge2NhdGVnb3J5OjE2LCBpZDpcIlRoZSBMaWJyYXJpZXNcIn0sXG4gICAge2NhdGVnb3J5OjE3LCBpZDpcIk1lZGlldmFsIEFydFwifSxcbiAgICB7Y2F0ZWdvcnk6MTgsIGlkOlwiTXVzaWNhbCBJbnN0cnVtZW50c1wifSxcbiAgICB7Y2F0ZWdvcnk6MTksIGlkOlwiUGhvdG9ncmFwaHNcIn0sXG4gICAge2NhdGVnb3J5OjIxLCBpZDpcIk1vZGVybiBBcnRcIn0sXG5dXG5cbmV4cG9ydCBmdW5jdGlvbiBIZWFkZXIoKSB7XG4gICAgY29uc3QgaGVhZGVyUmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKTtcbiAgICBsZXQgbGFzdFNjcm9sbFBvc2l0aW9uOiBudW1iZXI7XG5cbiAgICBjb25zdCBbaXNNZW51T3Blbiwgc2V0SXNNZW51T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgbWVudVJlZiA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbCk7XG5cbiAgICBjb25zdCBoYW5kbGVNZW51Q2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIHNldElzTWVudU9wZW4oKGlzTWVudU9wZW4pID0+ICFpc01lbnVPcGVuKTtcbiAgICB9XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZihpc01lbnVPcGVuKSB7XG4gICAgICAgICAgICBtZW51UmVmLmN1cnJlbnQ/LmNsYXNzTGlzdC5hZGQoJ21lbnUtb3BlbicpO1xuICAgICAgICAgICAgbWVudVJlZi5jdXJyZW50Py5jbGFzc0xpc3QucmVtb3ZlKCdtZW51LWNsb3NlJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtZW51UmVmLmN1cnJlbnQ/LmNsYXNzTGlzdC5hZGQoJ21lbnUtY2xvc2UnKTtcbiAgICAgICAgICAgIG1lbnVSZWYuY3VycmVudD8uY2xhc3NMaXN0LnJlbW92ZSgnbWVudS1vcGVuJyk7XG4gICAgICAgIH1cbiAgICB9LCBbaXNNZW51T3Blbl0pXG5cbiAgICAvLyDsnbzrtoAg7ZSE66CI7J6E7JuM7YGs65Ok7J2AIOyEnOuyhOyXkOyEnCDsvZTrk5zrpbwg7Iuk7ZaJ7ZWY7JesIOy0iOq4sCDroIzrjZTrp4Eg7IiY7ZaJIC0+IOuwqeyWtOyggeyduCDsvZTrk5wg7ZWE7JqUXG4gICAgaWYodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIFxuICAgICAgICBsYXN0U2Nyb2xsUG9zaXRpb24gPSB3aW5kb3cuc2Nyb2xsWTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwpO1xuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbCk7XG4gICAgICAgIH1cbiAgICB9LCBbXSlcblxuICAgIGNvbnN0IGhhbmRsZVNjcm9sbCA9ICgpID0+IHtcbiAgICAgICAgLy8g66eI7KeA66eJ7Jy866GcIOyKpO2BrOuhpOuQnCDsnITsuZjsmYAg7ZiE7J6sIOyKpO2BrOuhpCDsnITsuZjrpbwg67mE6rWQXG4gICAgICAgIGlmKHdpbmRvdy5zY3JvbGxZID4gbGFzdFNjcm9sbFBvc2l0aW9uKSAvLyBzY3JvbGxlZC1kb3duIC0+IGhlYWRlciDsmKzrnbzqsIDslbwg7ZWoXG4gICAgICAgIHtcbiAgICAgICAgICAgIG1lbnVSZWYuY3VycmVudD8uY2xhc3NMaXN0LmFkZCgnbWVudS1jbG9zZScpO1xuICAgICAgICAgICAgbWVudVJlZi5jdXJyZW50Py5jbGFzc0xpc3QucmVtb3ZlKCdtZW51LW9wZW4nKTtcbiAgICAgICAgICAgIGhlYWRlclJlZi5jdXJyZW50Py5jbGFzc0xpc3QuYWRkKCdoZWFkZXItY2xvc2UnKTtcbiAgICAgICAgICAgIGhlYWRlclJlZi5jdXJyZW50Py5jbGFzc0xpc3QucmVtb3ZlKCdoZWFkZXItb3BlbicpO1xuICAgICAgICAgICAgXG4gICAgICAgIH0gZWxzZSAgICAvLyBzY3JvbGxlZC11cCAtPiBoZWFkZXIg64K066Ck7JmA7JW87ZWoXG4gICAgICAgIHsgICBcbiAgICAgICAgICAgIGhlYWRlclJlZi5jdXJyZW50Py5jbGFzc0xpc3QuYWRkKCdoZWFkZXItb3BlbicpO1xuICAgICAgICAgICAgaGVhZGVyUmVmLmN1cnJlbnQ/LmNsYXNzTGlzdC5yZW1vdmUoJ2hlYWRlci1jbG9zZScpO1xuICAgICAgICB9XG4gICAgICAgIGxhc3RTY3JvbGxQb3NpdGlvbiA9IHdpbmRvdy5zY3JvbGxZO1xuICAgICAgICBjb25zb2xlLmxvZyhoZWFkZXJSZWYuY3VycmVudCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGhlYWRlci1vcGVuIGZpeGVkIHotWzk5OThdIGJnLXdoaXRlIHctWzEwMHZ3XVwiIHJlZj17aGVhZGVyUmVmfT5cbiAgICAgICAgICAgIDxJbWFnZU5leHQgYWx0PVwiLi4uXCIgc3JjPXtMb2dvfSBjbGFzc05hbWU9XCJ3LTgwIG10LTUgbWwtWzIwdnddXCIgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgcm91bmRlZC1mdWxsIHctWzd2aF0gaC1bN3ZoXSBiZy1yZWQtNTAwIG10LVsxMHZoXSByaWdodC1bMTV2d10gY3Vyc29yLXBvaW50ZXJcIiBvbkNsaWNrPXtoYW5kbGVNZW51Q2xpY2t9PlxuICAgICAgICAgICAgICAgIDxkaXYgcmVmPXttZW51UmVmfSBjbGFzc05hbWU9XCJhYnNvbHV0ZSByaWdodC1bLTMzdnddIHRvcC1bMHZoXSBiZy1yZWQtNTAwIHJvdW5kZWQtbGcgdy1bMzZ2d10gaC1bODB2aF0gei1bOTk5OV1cIiA+XG4gICAgICAgICAgICAgICAgeyAgIGNhdGVncmllcy5tYXAoKGl0ZW06Y2F0ZWdvcnlUeXBlLCBpbmRleDpudW1iZXIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGtleT17aW5kZXh9IGNsYXNzTmFtZT1cInRleHQtMnhsXCI+e2l0ZW0uaWR9PC9wPlxuICAgICAgICAgICAgICAgICAgICApfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuLy8gZnVuY3Rpb24gSGVhZGVyQ29udGVudCgpIHtcbi8vICAgICBjb25zdCBbaXNNZW51T3Blbiwgc2V0SXNNZW51T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbi8vICAgICBjb25zdCBoYW5kbGVNZW51Q2xpY2sgPSAoKSA9PiB7XG4vLyAgICAgICAgIHNldElzTWVudU9wZW4oKGlzTWVudU9wZW4pID0+ICFpc01lbnVPcGVuKTtcbi8vICAgICB9XG5cbi8vICAgICByZXR1cm4gKFxuLy8gICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3dcIj5cbi8vICAgICAgICAgICAgIDxJbWFnZU5leHQgYWx0PVwiLi4uXCIgc3JjPXtMb2dvfSBjbGFzc05hbWU9XCJ3LTgwIG10LTVcIiAvPlxuLy8gICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSByb3VuZGVkLWZ1bGwgdy1bN3ZoXSBoLVs3dmhdIGJnLXJlZC01MDAgbXQtWzEwdmhdIHJpZ2h0LVs1dnddIGN1cnNvci1wb2ludGVyXCIgb25DbGljaz17aGFuZGxlTWVudUNsaWNrfT5cbi8vICAgICAgICAgICAgICAgICAgICAgPE1lbnVPcGVuIGlzTWVudU9wZW49e2lzTWVudU9wZW59IGNsYXNzTmFtZT1cImFic29sdXRlIHJpZ2h0LVswdmhdIHRvcC1bMHZoXSBiZy1yZWQtNTAwIHJvdW5kZWQtM3hsIHctWzIwdnddIGgtWzcwdmhdXCI+XG5cbi8vICAgICAgICAgICAgICAgICAgICAgPC9NZW51T3Blbj5cbiAgICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgPC9kaXY+XG4vLyAgICAgICAgIDwvZGl2PlxuLy8gICAgIClcbi8vIH1cblxuLy8gY29uc3QgTWVudU9wZW4gPSBzdHlsZWQoXCJkaXZcIik8eyBpc01lbnVPcGVuOmJvb2xlYW4gfT5gXG4vLyAgICAgYW5pbWF0aW9uOiAkeyhwcm9wcykgPT4gcHJvcHMuaXNNZW51T3BlbiA/IGNzc2Ake21lbnVPcGVuQW5pbX0gMXMgZWFzZSBmb3J3YXJkc2AgOiBjc3NgJHttZW51Q2xvc2VBbmltfSAxcyBlYXNlIGZvcndhcmRzYH07XG4vLyBgXG5cblxuLy8g7ZWo7IiY7JmAIOuzgOyImOydmCDshKDslrjrp4wg7Zi47J207Iqk7YyFIOyggeyaqSDrjIDsg4EgLT4ga2V5ZnJhbWVz64qUIOyVhOustOqyg+uPhCDslYTri4jrr4DroZwg7Zi47J207Iqk7YyFIOyggeyaqeuMgOyDgSBYXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIkxvZ28iLCJJbWFnZU5leHQiLCJjYXRlZ3JpZXMiLCJjYXRlZ29yeSIsImlkIiwiSGVhZGVyIiwiaGVhZGVyUmVmIiwibGFzdFNjcm9sbFBvc2l0aW9uIiwiaXNNZW51T3BlbiIsInNldElzTWVudU9wZW4iLCJtZW51UmVmIiwiaGFuZGxlTWVudUNsaWNrIiwiY3VycmVudCIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsIndpbmRvdyIsInNjcm9sbFkiLCJhZGRFdmVudExpc3RlbmVyIiwiaGFuZGxlU2Nyb2xsIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJyZWYiLCJhbHQiLCJzcmMiLCJvbkNsaWNrIiwibWFwIiwiaXRlbSIsImluZGV4IiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/header.tsx\n"));

/***/ })

});