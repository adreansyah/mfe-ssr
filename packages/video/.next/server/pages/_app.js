/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_0__);\n\nconst AsyncBoundary = next_dynamic__WEBPACK_IMPORTED_MODULE_0___default()(()=>__webpack_require__.e(/*! import() */ \"src_pages__app_js_hasBoundary\").then(__webpack_require__.bind(__webpack_require__, /*! ./_app.js?hasBoundary */ \"./src/pages/_app.js?hasBoundary\")), {\n    loadableGenerated: {\n        modules: [\n            \"_app.js -> \" + \"./_app.js?hasBoundary\"\n        ]\n    },\n    suspense: true\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (AsyncBoundary);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7QUFDc0M7QUFDbEMsTUFBTUMsZ0JBQWdCRCxtREFBT0EsQ0FBQyxJQUFNLDBMQUErQjs7Ozs7O0lBQUdFLFVBQVMsSUFBSTs7QUFDbkYsK0RBQWVELGFBQWFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92aWRlby8uL3NyYy9wYWdlcy9fYXBwLmpzPzhmZGEiXSwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgaW1wb3J0IGR5bmFtaWMgZnJvbSBcIm5leHQvZHluYW1pY1wiXG4gICAgY29uc3QgQXN5bmNCb3VuZGFyeSA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KFwiLi9fYXBwLmpzP2hhc0JvdW5kYXJ5XCIpLCB7c3VzcGVuc2U6dHJ1ZX0pO1xuICAgIGV4cG9ydCBkZWZhdWx0IEFzeW5jQm91bmRhcnk7XG4gICAgIl0sIm5hbWVzIjpbImR5bmFtaWMiLCJBc3luY0JvdW5kYXJ5Iiwic3VzcGVuc2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/_app.js\n");

/***/ }),

/***/ "./node_modules/next/dist/shared/lib/dynamic.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/shared/lib/dynamic.js ***!
  \******************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\n0 && (0);\nfunction _export(target, all) {\n    for(var name in all)Object.defineProperty(target, name, {\n        enumerable: true,\n        get: all[name]\n    });\n}\n_export(exports, {\n    noSSR: function() {\n        return noSSR;\n    },\n    default: function() {\n        return dynamic;\n    }\n});\nconst _interop_require_default = __webpack_require__(/*! @swc/helpers/_/_interop_require_default */ \"./node_modules/@swc/helpers/cjs/_interop_require_default.cjs\");\nconst _react = /*#__PURE__*/ _interop_require_default._(__webpack_require__(/*! react */ \"react\"));\nconst _loadable = /*#__PURE__*/ _interop_require_default._(__webpack_require__(/*! ./loadable */ \"./loadable\"));\nconst isServerSide = \"undefined\" === \"undefined\";\n// Normalize loader to return the module as form { default: Component } for `React.lazy`.\n// Also for backward compatible since next/dynamic allows to resolve a component directly with loader\n// Client component reference proxy need to be converted to a module.\nfunction convertModule(mod) {\n    return {\n        default: (mod == null ? void 0 : mod.default) || mod\n    };\n}\nfunction noSSR(LoadableInitializer, loadableOptions) {\n    // Removing webpack and modules means react-loadable won't try preloading\n    delete loadableOptions.webpack;\n    delete loadableOptions.modules;\n    // This check is necessary to prevent react-loadable from initializing on the server\n    if (!isServerSide) {\n        return LoadableInitializer(loadableOptions);\n    }\n    const Loading = loadableOptions.loading;\n    // This will only be rendered on the server side\n    return ()=>/*#__PURE__*/ _react.default.createElement(Loading, {\n            error: null,\n            isLoading: true,\n            pastDelay: false,\n            timedOut: false\n        });\n}\nfunction dynamic(dynamicOptions, options) {\n    let loadableFn = _loadable.default;\n    let loadableOptions = {\n        // A loading component is not required, so we default it\n        loading: (param)=>{\n            let { error , isLoading , pastDelay  } = param;\n            if (!pastDelay) return null;\n            if (true) {\n                if (isLoading) {\n                    return null;\n                }\n                if (error) {\n                    return /*#__PURE__*/ _react.default.createElement(\"p\", null, error.message, /*#__PURE__*/ _react.default.createElement(\"br\", null), error.stack);\n                }\n            }\n            return null;\n        }\n    };\n    // Support for direct import(), eg: dynamic(import('../hello-world'))\n    // Note that this is only kept for the edge case where someone is passing in a promise as first argument\n    // The react-loadable babel plugin will turn dynamic(import('../hello-world')) into dynamic(() => import('../hello-world'))\n    // To make sure we don't execute the import without rendering first\n    if (dynamicOptions instanceof Promise) {\n        loadableOptions.loader = ()=>dynamicOptions;\n    // Support for having import as a function, eg: dynamic(() => import('../hello-world'))\n    } else if (typeof dynamicOptions === \"function\") {\n        loadableOptions.loader = dynamicOptions;\n    // Support for having first argument being options, eg: dynamic({loader: import('../hello-world')})\n    } else if (typeof dynamicOptions === \"object\") {\n        loadableOptions = {\n            ...loadableOptions,\n            ...dynamicOptions\n        };\n    }\n    // Support for passing options, eg: dynamic(import('../hello-world'), {loading: () => <p>Loading something</p>})\n    loadableOptions = {\n        ...loadableOptions,\n        ...options\n    };\n    const loaderFn = loadableOptions.loader;\n    const loader = ()=>loaderFn != null ? loaderFn().then(convertModule) : Promise.resolve(convertModule(()=>null));\n    // coming from build/babel/plugins/react-loadable-plugin.js\n    if (loadableOptions.loadableGenerated) {\n        loadableOptions = {\n            ...loadableOptions,\n            ...loadableOptions.loadableGenerated\n        };\n        delete loadableOptions.loadableGenerated;\n    }\n    // support for disabling server side rendering, eg: dynamic(() => import('../hello-world'), {ssr: false}).\n    if (typeof loadableOptions.ssr === \"boolean\" && !loadableOptions.ssr) {\n        delete loadableOptions.webpack;\n        delete loadableOptions.modules;\n        return noSSR(loadableFn, loadableOptions);\n    }\n    return loadableFn({\n        ...loadableOptions,\n        loader: loader\n    });\n}\nif ((typeof exports.default === \"function\" || typeof exports.default === \"object\" && exports.default !== null) && typeof exports.default.__esModule === \"undefined\") {\n    Object.defineProperty(exports.default, \"__esModule\", {\n        value: true\n    });\n    Object.assign(exports.default, exports);\n    module.exports = exports.default;\n} //# sourceMappingURL=dynamic.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3NoYXJlZC9saWIvZHluYW1pYy5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBYTtBQUNiQSw4Q0FBNkM7SUFDekNHLE9BQU8sSUFBSTtBQUNmLENBQUMsRUFBQztBQUNGLEtBQU1DLENBQUFBLENBR047QUFDQSxTQUFTRyxRQUFRQyxNQUFNLEVBQUVDLEdBQUcsRUFBRTtJQUMxQixJQUFJLElBQUlDLFFBQVFELElBQUlULE9BQU9DLGNBQWMsQ0FBQ08sUUFBUUUsTUFBTTtRQUNwREMsWUFBWSxJQUFJO1FBQ2hCQyxLQUFLSCxHQUFHLENBQUNDLEtBQUs7SUFDbEI7QUFDSjtBQUNBSCxRQUFRTCxTQUFTO0lBQ2JHLE9BQU8sV0FBVztRQUNkLE9BQU9BO0lBQ1g7SUFDQUMsU0FBUyxXQUFXO1FBQ2hCLE9BQU9PO0lBQ1g7QUFDSjtBQUNBLE1BQU1DLDJCQUEyQkMsbUJBQU9BLENBQUMsNkdBQXlDO0FBQ2xGLE1BQU1DLFNBQVMsV0FBVyxHQUFHRix5QkFBeUJHLENBQUMsQ0FBQ0YsbUJBQU9BLENBQUMsb0JBQU87QUFDdkUsTUFBTUcsWUFBWSxXQUFXLEdBQUdKLHlCQUF5QkcsQ0FBQyxDQUFDRixtQkFBT0EsQ0FBQyw4QkFBWTtBQUMvRSxNQUFNSSxlQUFlLGdCQUFrQjtBQUN2Qyx5RkFBeUY7QUFDekYscUdBQXFHO0FBQ3JHLHFFQUFxRTtBQUNyRSxTQUFTQyxjQUFjQyxHQUFHLEVBQUU7SUFDeEIsT0FBTztRQUNIZixTQUFTLENBQUNlLE9BQU8sSUFBSSxHQUFHLEtBQUssSUFBSUEsSUFBSWYsT0FBTyxLQUFLZTtJQUNyRDtBQUNKO0FBQ0EsU0FBU2hCLE1BQU1pQixtQkFBbUIsRUFBRUMsZUFBZSxFQUFFO0lBQ2pELHlFQUF5RTtJQUN6RSxPQUFPQSxnQkFBZ0JDLE9BQU87SUFDOUIsT0FBT0QsZ0JBQWdCRSxPQUFPO0lBQzlCLG9GQUFvRjtJQUNwRixJQUFJLENBQUNOLGNBQWM7UUFDZixPQUFPRyxvQkFBb0JDO0lBQy9C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T0FBT0YsT0FBTyxHQUFHQSxRQUFRSSxPQUFPO0FBQ2xDLENBQUMsQ0FFRCxtQ0FBbUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92aWRlby8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3Qvc2hhcmVkL2xpYi9keW5hbWljLmpzP2UyNWQiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG4wICYmIChtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBub1NTUjogbnVsbCxcbiAgICBkZWZhdWx0OiBudWxsXG59KTtcbmZ1bmN0aW9uIF9leHBvcnQodGFyZ2V0LCBhbGwpIHtcbiAgICBmb3IodmFyIG5hbWUgaW4gYWxsKU9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIG5hbWUsIHtcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgZ2V0OiBhbGxbbmFtZV1cbiAgICB9KTtcbn1cbl9leHBvcnQoZXhwb3J0cywge1xuICAgIG5vU1NSOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIG5vU1NSO1xuICAgIH0sXG4gICAgZGVmYXVsdDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBkeW5hbWljO1xuICAgIH1cbn0pO1xuY29uc3QgX2ludGVyb3BfcmVxdWlyZV9kZWZhdWx0ID0gcmVxdWlyZShcIkBzd2MvaGVscGVycy9fL19pbnRlcm9wX3JlcXVpcmVfZGVmYXVsdFwiKTtcbmNvbnN0IF9yZWFjdCA9IC8qI19fUFVSRV9fKi8gX2ludGVyb3BfcmVxdWlyZV9kZWZhdWx0Ll8ocmVxdWlyZShcInJlYWN0XCIpKTtcbmNvbnN0IF9sb2FkYWJsZSA9IC8qI19fUFVSRV9fKi8gX2ludGVyb3BfcmVxdWlyZV9kZWZhdWx0Ll8ocmVxdWlyZShcIi4vbG9hZGFibGVcIikpO1xuY29uc3QgaXNTZXJ2ZXJTaWRlID0gdHlwZW9mIHdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIjtcbi8vIE5vcm1hbGl6ZSBsb2FkZXIgdG8gcmV0dXJuIHRoZSBtb2R1bGUgYXMgZm9ybSB7IGRlZmF1bHQ6IENvbXBvbmVudCB9IGZvciBgUmVhY3QubGF6eWAuXG4vLyBBbHNvIGZvciBiYWNrd2FyZCBjb21wYXRpYmxlIHNpbmNlIG5leHQvZHluYW1pYyBhbGxvd3MgdG8gcmVzb2x2ZSBhIGNvbXBvbmVudCBkaXJlY3RseSB3aXRoIGxvYWRlclxuLy8gQ2xpZW50IGNvbXBvbmVudCByZWZlcmVuY2UgcHJveHkgbmVlZCB0byBiZSBjb252ZXJ0ZWQgdG8gYSBtb2R1bGUuXG5mdW5jdGlvbiBjb252ZXJ0TW9kdWxlKG1vZCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIGRlZmF1bHQ6IChtb2QgPT0gbnVsbCA/IHZvaWQgMCA6IG1vZC5kZWZhdWx0KSB8fCBtb2RcbiAgICB9O1xufVxuZnVuY3Rpb24gbm9TU1IoTG9hZGFibGVJbml0aWFsaXplciwgbG9hZGFibGVPcHRpb25zKSB7XG4gICAgLy8gUmVtb3Zpbmcgd2VicGFjayBhbmQgbW9kdWxlcyBtZWFucyByZWFjdC1sb2FkYWJsZSB3b24ndCB0cnkgcHJlbG9hZGluZ1xuICAgIGRlbGV0ZSBsb2FkYWJsZU9wdGlvbnMud2VicGFjaztcbiAgICBkZWxldGUgbG9hZGFibGVPcHRpb25zLm1vZHVsZXM7XG4gICAgLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gcHJldmVudCByZWFjdC1sb2FkYWJsZSBmcm9tIGluaXRpYWxpemluZyBvbiB0aGUgc2VydmVyXG4gICAgaWYgKCFpc1NlcnZlclNpZGUpIHtcbiAgICAgICAgcmV0dXJuIExvYWRhYmxlSW5pdGlhbGl6ZXIobG9hZGFibGVPcHRpb25zKTtcbiAgICB9XG4gICAgY29uc3QgTG9hZGluZyA9IGxvYWRhYmxlT3B0aW9ucy5sb2FkaW5nO1xuICAgIC8vIFRoaXMgd2lsbCBvbmx5IGJlIHJlbmRlcmVkIG9uIHRoZSBzZXJ2ZXIgc2lkZVxuICAgIHJldHVybiAoKT0+LyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KExvYWRpbmcsIHtcbiAgICAgICAgICAgIGVycm9yOiBudWxsLFxuICAgICAgICAgICAgaXNMb2FkaW5nOiB0cnVlLFxuICAgICAgICAgICAgcGFzdERlbGF5OiBmYWxzZSxcbiAgICAgICAgICAgIHRpbWVkT3V0OiBmYWxzZVxuICAgICAgICB9KTtcbn1cbmZ1bmN0aW9uIGR5bmFtaWMoZHluYW1pY09wdGlvbnMsIG9wdGlvbnMpIHtcbiAgICBsZXQgbG9hZGFibGVGbiA9IF9sb2FkYWJsZS5kZWZhdWx0O1xuICAgIGxldCBsb2FkYWJsZU9wdGlvbnMgPSB7XG4gICAgICAgIC8vIEEgbG9hZGluZyBjb21wb25lbnQgaXMgbm90IHJlcXVpcmVkLCBzbyB3ZSBkZWZhdWx0IGl0XG4gICAgICAgIGxvYWRpbmc6IChwYXJhbSk9PntcbiAgICAgICAgICAgIGxldCB7IGVycm9yICwgaXNMb2FkaW5nICwgcGFzdERlbGF5ICB9ID0gcGFyYW07XG4gICAgICAgICAgICBpZiAoIXBhc3REZWxheSkgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlzTG9hZGluZykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIG51bGwsIGVycm9yLm1lc3NhZ2UsIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImJyXCIsIG51bGwpLCBlcnJvci5zdGFjayk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8vIFN1cHBvcnQgZm9yIGRpcmVjdCBpbXBvcnQoKSwgZWc6IGR5bmFtaWMoaW1wb3J0KCcuLi9oZWxsby13b3JsZCcpKVxuICAgIC8vIE5vdGUgdGhhdCB0aGlzIGlzIG9ubHkga2VwdCBmb3IgdGhlIGVkZ2UgY2FzZSB3aGVyZSBzb21lb25lIGlzIHBhc3NpbmcgaW4gYSBwcm9taXNlIGFzIGZpcnN0IGFyZ3VtZW50XG4gICAgLy8gVGhlIHJlYWN0LWxvYWRhYmxlIGJhYmVsIHBsdWdpbiB3aWxsIHR1cm4gZHluYW1pYyhpbXBvcnQoJy4uL2hlbGxvLXdvcmxkJykpIGludG8gZHluYW1pYygoKSA9PiBpbXBvcnQoJy4uL2hlbGxvLXdvcmxkJykpXG4gICAgLy8gVG8gbWFrZSBzdXJlIHdlIGRvbid0IGV4ZWN1dGUgdGhlIGltcG9ydCB3aXRob3V0IHJlbmRlcmluZyBmaXJzdFxuICAgIGlmIChkeW5hbWljT3B0aW9ucyBpbnN0YW5jZW9mIFByb21pc2UpIHtcbiAgICAgICAgbG9hZGFibGVPcHRpb25zLmxvYWRlciA9ICgpPT5keW5hbWljT3B0aW9ucztcbiAgICAvLyBTdXBwb3J0IGZvciBoYXZpbmcgaW1wb3J0IGFzIGEgZnVuY3Rpb24sIGVnOiBkeW5hbWljKCgpID0+IGltcG9ydCgnLi4vaGVsbG8td29ybGQnKSlcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBkeW5hbWljT3B0aW9ucyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIGxvYWRhYmxlT3B0aW9ucy5sb2FkZXIgPSBkeW5hbWljT3B0aW9ucztcbiAgICAvLyBTdXBwb3J0IGZvciBoYXZpbmcgZmlyc3QgYXJndW1lbnQgYmVpbmcgb3B0aW9ucywgZWc6IGR5bmFtaWMoe2xvYWRlcjogaW1wb3J0KCcuLi9oZWxsby13b3JsZCcpfSlcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBkeW5hbWljT3B0aW9ucyA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICBsb2FkYWJsZU9wdGlvbnMgPSB7XG4gICAgICAgICAgICAuLi5sb2FkYWJsZU9wdGlvbnMsXG4gICAgICAgICAgICAuLi5keW5hbWljT3B0aW9uc1xuICAgICAgICB9O1xuICAgIH1cbiAgICAvLyBTdXBwb3J0IGZvciBwYXNzaW5nIG9wdGlvbnMsIGVnOiBkeW5hbWljKGltcG9ydCgnLi4vaGVsbG8td29ybGQnKSwge2xvYWRpbmc6ICgpID0+IDxwPkxvYWRpbmcgc29tZXRoaW5nPC9wPn0pXG4gICAgbG9hZGFibGVPcHRpb25zID0ge1xuICAgICAgICAuLi5sb2FkYWJsZU9wdGlvbnMsXG4gICAgICAgIC4uLm9wdGlvbnNcbiAgICB9O1xuICAgIGNvbnN0IGxvYWRlckZuID0gbG9hZGFibGVPcHRpb25zLmxvYWRlcjtcbiAgICBjb25zdCBsb2FkZXIgPSAoKT0+bG9hZGVyRm4gIT0gbnVsbCA/IGxvYWRlckZuKCkudGhlbihjb252ZXJ0TW9kdWxlKSA6IFByb21pc2UucmVzb2x2ZShjb252ZXJ0TW9kdWxlKCgpPT5udWxsKSk7XG4gICAgLy8gY29taW5nIGZyb20gYnVpbGQvYmFiZWwvcGx1Z2lucy9yZWFjdC1sb2FkYWJsZS1wbHVnaW4uanNcbiAgICBpZiAobG9hZGFibGVPcHRpb25zLmxvYWRhYmxlR2VuZXJhdGVkKSB7XG4gICAgICAgIGxvYWRhYmxlT3B0aW9ucyA9IHtcbiAgICAgICAgICAgIC4uLmxvYWRhYmxlT3B0aW9ucyxcbiAgICAgICAgICAgIC4uLmxvYWRhYmxlT3B0aW9ucy5sb2FkYWJsZUdlbmVyYXRlZFxuICAgICAgICB9O1xuICAgICAgICBkZWxldGUgbG9hZGFibGVPcHRpb25zLmxvYWRhYmxlR2VuZXJhdGVkO1xuICAgIH1cbiAgICAvLyBzdXBwb3J0IGZvciBkaXNhYmxpbmcgc2VydmVyIHNpZGUgcmVuZGVyaW5nLCBlZzogZHluYW1pYygoKSA9PiBpbXBvcnQoJy4uL2hlbGxvLXdvcmxkJyksIHtzc3I6IGZhbHNlfSkuXG4gICAgaWYgKHR5cGVvZiBsb2FkYWJsZU9wdGlvbnMuc3NyID09PSBcImJvb2xlYW5cIiAmJiAhbG9hZGFibGVPcHRpb25zLnNzcikge1xuICAgICAgICBkZWxldGUgbG9hZGFibGVPcHRpb25zLndlYnBhY2s7XG4gICAgICAgIGRlbGV0ZSBsb2FkYWJsZU9wdGlvbnMubW9kdWxlcztcbiAgICAgICAgcmV0dXJuIG5vU1NSKGxvYWRhYmxlRm4sIGxvYWRhYmxlT3B0aW9ucyk7XG4gICAgfVxuICAgIHJldHVybiBsb2FkYWJsZUZuKHtcbiAgICAgICAgLi4ubG9hZGFibGVPcHRpb25zLFxuICAgICAgICBsb2FkZXI6IGxvYWRlclxuICAgIH0pO1xufVxuXG5pZiAoKHR5cGVvZiBleHBvcnRzLmRlZmF1bHQgPT09ICdmdW5jdGlvbicgfHwgKHR5cGVvZiBleHBvcnRzLmRlZmF1bHQgPT09ICdvYmplY3QnICYmIGV4cG9ydHMuZGVmYXVsdCAhPT0gbnVsbCkpICYmIHR5cGVvZiBleHBvcnRzLmRlZmF1bHQuX19lc01vZHVsZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMuZGVmYXVsdCwgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuICBPYmplY3QuYXNzaWduKGV4cG9ydHMuZGVmYXVsdCwgZXhwb3J0cyk7XG4gIG1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0O1xufVxuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1keW5hbWljLmpzLm1hcCJdLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsIm1vZHVsZSIsIm5vU1NSIiwiZGVmYXVsdCIsIl9leHBvcnQiLCJ0YXJnZXQiLCJhbGwiLCJuYW1lIiwiZW51bWVyYWJsZSIsImdldCIsImR5bmFtaWMiLCJfaW50ZXJvcF9yZXF1aXJlX2RlZmF1bHQiLCJyZXF1aXJlIiwiX3JlYWN0IiwiXyIsIl9sb2FkYWJsZSIsImlzU2VydmVyU2lkZSIsImNvbnZlcnRNb2R1bGUiLCJtb2QiLCJMb2FkYWJsZUluaXRpYWxpemVyIiwibG9hZGFibGVPcHRpb25zIiwid2VicGFjayIsIm1vZHVsZXMiLCJMb2FkaW5nIiwibG9hZGluZyIsImNyZWF0ZUVsZW1lbnQiLCJlcnJvciIsImlzTG9hZGluZyIsInBhc3REZWxheSIsInRpbWVkT3V0IiwiZHluYW1pY09wdGlvbnMiLCJvcHRpb25zIiwibG9hZGFibGVGbiIsInBhcmFtIiwicHJvY2VzcyIsIm1lc3NhZ2UiLCJzdGFjayIsIlByb21pc2UiLCJsb2FkZXIiLCJsb2FkZXJGbiIsInRoZW4iLCJyZXNvbHZlIiwibG9hZGFibGVHZW5lcmF0ZWQiLCJzc3IiLCJfX2VzTW9kdWxlIiwiYXNzaWduIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/shared/lib/dynamic.js\n");

/***/ }),

/***/ "./node_modules/next/dynamic.js":
/*!**************************************!*\
  !*** ./node_modules/next/dynamic.js ***!
  \**************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./dist/shared/lib/dynamic */ \"./node_modules/next/dist/shared/lib/dynamic.js\")\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9keW5hbWljLmpzLmpzIiwibWFwcGluZ3MiOiJBQUFBLHVIQUFxRCIsInNvdXJjZXMiOlsid2VicGFjazovL3ZpZGVvLy4vbm9kZV9tb2R1bGVzL25leHQvZHluYW1pYy5qcz83M2Q0Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L3NoYXJlZC9saWIvZHluYW1pYycpXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dynamic.js\n");

/***/ }),

/***/ "../shared/lib/app-router-context":
/*!*************************************************************!*\
  !*** external "next/dist/shared/lib/app-router-context.js" ***!
  \*************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ "./head-manager-context":
/*!***************************************************************!*\
  !*** external "next/dist/shared/lib/head-manager-context.js" ***!
  \***************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ "./loadable":
/*!***************************************************!*\
  !*** external "next/dist/shared/lib/loadable.js" ***!
  \***************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ "../shared/lib/router-context":
/*!*********************************************************!*\
  !*** external "next/dist/shared/lib/router-context.js" ***!
  \*********************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ "../shared/lib/router/utils/add-path-prefix":
/*!***********************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/add-path-prefix.js" ***!
  \***********************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ "../shared/lib/router/utils/format-url":
/*!******************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/format-url.js" ***!
  \******************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ "../shared/lib/router/utils/is-local-url":
/*!********************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/is-local-url.js" ***!
  \********************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ "../shared/lib/router/utils/parse-path":
/*!******************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/parse-path.js" ***!
  \******************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ "../shared/lib/router/utils/remove-trailing-slash":
/*!*****************************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/remove-trailing-slash.js" ***!
  \*****************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ "../shared/lib/router/utils/resolve-href":
/*!********************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/resolve-href.js" ***!
  \********************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ "../shared/lib/utils":
/*!************************************************!*\
  !*** external "next/dist/shared/lib/utils.js" ***!
  \************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "styled-jsx":
/*!*****************************!*\
  !*** external "styled-jsx" ***!
  \*****************************/
/***/ (function(module) {

"use strict";
module.exports = require("styled-jsx");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/***/ (function(module) {

"use strict";
module.exports = require("styled-jsx/style");

/***/ }),

/***/ "./node_modules/@swc/helpers/cjs/_interop_require_default.cjs":
/*!********************************************************************!*\
  !*** ./node_modules/@swc/helpers/cjs/_interop_require_default.cjs ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";
eval("\n\nexports._ = exports._interop_require_default = _interop_require_default;\nfunction _interop_require_default(obj) {\n    return obj && obj.__esModule ? obj : { default: obj };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQHN3Yy9oZWxwZXJzL2Nqcy9faW50ZXJvcF9yZXF1aXJlX2RlZmF1bHQuY2pzLmpzIiwibWFwcGluZ3MiOiJBQUFhOztBQUViLFNBQVMsR0FBRyxnQ0FBZ0M7QUFDNUM7QUFDQSwyQ0FBMkM7QUFDM0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92aWRlby8uL25vZGVfbW9kdWxlcy9Ac3djL2hlbHBlcnMvY2pzL19pbnRlcm9wX3JlcXVpcmVfZGVmYXVsdC5janM/YTM5ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fID0gZXhwb3J0cy5faW50ZXJvcF9yZXF1aXJlX2RlZmF1bHQgPSBfaW50ZXJvcF9yZXF1aXJlX2RlZmF1bHQ7XG5mdW5jdGlvbiBfaW50ZXJvcF9yZXF1aXJlX2RlZmF1bHQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/@swc/helpers/cjs/_interop_require_default.cjs\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.js"));
module.exports = __webpack_exports__;

})();