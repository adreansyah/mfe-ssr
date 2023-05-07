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

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_0__);\n\nconst AsyncBoundary = next_dynamic__WEBPACK_IMPORTED_MODULE_0___default()(()=>__webpack_require__.e(/*! import() */ \"pages__app_js_hasBoundary\").then(__webpack_require__.bind(__webpack_require__, /*! ./_app.js?hasBoundary */ \"./pages/_app.js?hasBoundary\")), {\n    loadableGenerated: {\n        modules: [\n            \"_app.js -> \" + \"./_app.js?hasBoundary\"\n        ]\n    },\n    suspense: true\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (AsyncBoundary);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7OztBQUNzQztBQUNsQyxNQUFNQyxnQkFBZ0JELG1EQUFPQSxDQUFDLElBQU0sa0xBQStCOzs7Ozs7SUFBR0UsVUFBUyxJQUFJOztBQUNuRiwrREFBZUQsYUFBYUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NvbnRhaW5lci8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICBpbXBvcnQgZHluYW1pYyBmcm9tIFwibmV4dC9keW5hbWljXCJcbiAgICBjb25zdCBBc3luY0JvdW5kYXJ5ID0gZHluYW1pYygoKSA9PiBpbXBvcnQoXCIuL19hcHAuanM/aGFzQm91bmRhcnlcIiksIHtzdXNwZW5zZTp0cnVlfSk7XG4gICAgZXhwb3J0IGRlZmF1bHQgQXN5bmNCb3VuZGFyeTtcbiAgICAiXSwibmFtZXMiOlsiZHluYW1pYyIsIkFzeW5jQm91bmRhcnkiLCJzdXNwZW5zZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./node_modules/next/dist/shared/lib/dynamic.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/shared/lib/dynamic.js ***!
  \******************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\n0 && (0);\nfunction _export(target, all) {\n    for(var name in all)Object.defineProperty(target, name, {\n        enumerable: true,\n        get: all[name]\n    });\n}\n_export(exports, {\n    noSSR: function() {\n        return noSSR;\n    },\n    default: function() {\n        return dynamic;\n    }\n});\nconst _interop_require_default = __webpack_require__(/*! @swc/helpers/_/_interop_require_default */ \"./node_modules/@swc/helpers/cjs/_interop_require_default.cjs\");\nconst _react = /*#__PURE__*/ _interop_require_default._(__webpack_require__(/*! react */ \"react\"));\nconst _loadable = /*#__PURE__*/ _interop_require_default._(__webpack_require__(/*! ./loadable */ \"./loadable\"));\nconst isServerSide = \"undefined\" === \"undefined\";\n// Normalize loader to return the module as form { default: Component } for `React.lazy`.\n// Also for backward compatible since next/dynamic allows to resolve a component directly with loader\n// Client component reference proxy need to be converted to a module.\nfunction convertModule(mod) {\n    return {\n        default: (mod == null ? void 0 : mod.default) || mod\n    };\n}\nfunction noSSR(LoadableInitializer, loadableOptions) {\n    // Removing webpack and modules means react-loadable won't try preloading\n    delete loadableOptions.webpack;\n    delete loadableOptions.modules;\n    // This check is necessary to prevent react-loadable from initializing on the server\n    if (!isServerSide) {\n        return LoadableInitializer(loadableOptions);\n    }\n    const Loading = loadableOptions.loading;\n    // This will only be rendered on the server side\n    return ()=>/*#__PURE__*/ _react.default.createElement(Loading, {\n            error: null,\n            isLoading: true,\n            pastDelay: false,\n            timedOut: false\n        });\n}\nfunction dynamic(dynamicOptions, options) {\n    let loadableFn = _loadable.default;\n    let loadableOptions = {\n        // A loading component is not required, so we default it\n        loading: (param)=>{\n            let { error , isLoading , pastDelay  } = param;\n            if (!pastDelay) return null;\n            if (true) {\n                if (isLoading) {\n                    return null;\n                }\n                if (error) {\n                    return /*#__PURE__*/ _react.default.createElement(\"p\", null, error.message, /*#__PURE__*/ _react.default.createElement(\"br\", null), error.stack);\n                }\n            }\n            return null;\n        }\n    };\n    // Support for direct import(), eg: dynamic(import('../hello-world'))\n    // Note that this is only kept for the edge case where someone is passing in a promise as first argument\n    // The react-loadable babel plugin will turn dynamic(import('../hello-world')) into dynamic(() => import('../hello-world'))\n    // To make sure we don't execute the import without rendering first\n    if (dynamicOptions instanceof Promise) {\n        loadableOptions.loader = ()=>dynamicOptions;\n    // Support for having import as a function, eg: dynamic(() => import('../hello-world'))\n    } else if (typeof dynamicOptions === \"function\") {\n        loadableOptions.loader = dynamicOptions;\n    // Support for having first argument being options, eg: dynamic({loader: import('../hello-world')})\n    } else if (typeof dynamicOptions === \"object\") {\n        loadableOptions = {\n            ...loadableOptions,\n            ...dynamicOptions\n        };\n    }\n    // Support for passing options, eg: dynamic(import('../hello-world'), {loading: () => <p>Loading something</p>})\n    loadableOptions = {\n        ...loadableOptions,\n        ...options\n    };\n    const loaderFn = loadableOptions.loader;\n    const loader = ()=>loaderFn != null ? loaderFn().then(convertModule) : Promise.resolve(convertModule(()=>null));\n    // coming from build/babel/plugins/react-loadable-plugin.js\n    if (loadableOptions.loadableGenerated) {\n        loadableOptions = {\n            ...loadableOptions,\n            ...loadableOptions.loadableGenerated\n        };\n        delete loadableOptions.loadableGenerated;\n    }\n    // support for disabling server side rendering, eg: dynamic(() => import('../hello-world'), {ssr: false}).\n    if (typeof loadableOptions.ssr === \"boolean\" && !loadableOptions.ssr) {\n        delete loadableOptions.webpack;\n        delete loadableOptions.modules;\n        return noSSR(loadableFn, loadableOptions);\n    }\n    return loadableFn({\n        ...loadableOptions,\n        loader: loader\n    });\n}\nif ((typeof exports.default === \"function\" || typeof exports.default === \"object\" && exports.default !== null) && typeof exports.default.__esModule === \"undefined\") {\n    Object.defineProperty(exports.default, \"__esModule\", {\n        value: true\n    });\n    Object.assign(exports.default, exports);\n    module.exports = exports.default;\n} //# sourceMappingURL=dynamic.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3NoYXJlZC9saWIvZHluYW1pYy5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBYTtBQUNiQSw4Q0FBNkM7SUFDekNHLE9BQU8sSUFBSTtBQUNmLENBQUMsRUFBQztBQUNGLEtBQU1DLENBQUFBLENBR047QUFDQSxTQUFTRyxRQUFRQyxNQUFNLEVBQUVDLEdBQUcsRUFBRTtJQUMxQixJQUFJLElBQUlDLFFBQVFELElBQUlULE9BQU9DLGNBQWMsQ0FBQ08sUUFBUUUsTUFBTTtRQUNwREMsWUFBWSxJQUFJO1FBQ2hCQyxLQUFLSCxHQUFHLENBQUNDLEtBQUs7SUFDbEI7QUFDSjtBQUNBSCxRQUFRTCxTQUFTO0lBQ2JHLE9BQU8sV0FBVztRQUNkLE9BQU9BO0lBQ1g7SUFDQUMsU0FBUyxXQUFXO1FBQ2hCLE9BQU9PO0lBQ1g7QUFDSjtBQUNBLE1BQU1DLDJCQUEyQkMsbUJBQU9BLENBQUMsNkdBQXlDO0FBQ2xGLE1BQU1DLFNBQVMsV0FBVyxHQUFHRix5QkFBeUJHLENBQUMsQ0FBQ0YsbUJBQU9BLENBQUMsb0JBQU87QUFDdkUsTUFBTUcsWUFBWSxXQUFXLEdBQUdKLHlCQUF5QkcsQ0FBQyxDQUFDRixtQkFBT0EsQ0FBQyw4QkFBWTtBQUMvRSxNQUFNSSxlQUFlLGdCQUFrQjtBQUN2Qyx5RkFBeUY7QUFDekYscUdBQXFHO0FBQ3JHLHFFQUFxRTtBQUNyRSxTQUFTQyxjQUFjQyxHQUFHLEVBQUU7SUFDeEIsT0FBTztRQUNIZixTQUFTLENBQUNlLE9BQU8sSUFBSSxHQUFHLEtBQUssSUFBSUEsSUFBSWYsT0FBTyxLQUFLZTtJQUNyRDtBQUNKO0FBQ0EsU0FBU2hCLE1BQU1pQixtQkFBbUIsRUFBRUMsZUFBZSxFQUFFO0lBQ2pELHlFQUF5RTtJQUN6RSxPQUFPQSxnQkFBZ0JDLE9BQU87SUFDOUIsT0FBT0QsZ0JBQWdCRSxPQUFPO0lBQzlCLG9GQUFvRjtJQUNwRixJQUFJLENBQUNOLGNBQWM7UUFDZixPQUFPRyxvQkFBb0JDO0lBQy9C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T0FBT0YsT0FBTyxHQUFHQSxRQUFRSSxPQUFPO0FBQ2xDLENBQUMsQ0FFRCxtQ0FBbUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb250YWluZXIvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3NoYXJlZC9saWIvZHluYW1pYy5qcz9lMjVkIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuMCAmJiAobW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgbm9TU1I6IG51bGwsXG4gICAgZGVmYXVsdDogbnVsbFxufSk7XG5mdW5jdGlvbiBfZXhwb3J0KHRhcmdldCwgYWxsKSB7XG4gICAgZm9yKHZhciBuYW1lIGluIGFsbClPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBuYW1lLCB7XG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGdldDogYWxsW25hbWVdXG4gICAgfSk7XG59XG5fZXhwb3J0KGV4cG9ydHMsIHtcbiAgICBub1NTUjogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBub1NTUjtcbiAgICB9LFxuICAgIGRlZmF1bHQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gZHluYW1pYztcbiAgICB9XG59KTtcbmNvbnN0IF9pbnRlcm9wX3JlcXVpcmVfZGVmYXVsdCA9IHJlcXVpcmUoXCJAc3djL2hlbHBlcnMvXy9faW50ZXJvcF9yZXF1aXJlX2RlZmF1bHRcIik7XG5jb25zdCBfcmVhY3QgPSAvKiNfX1BVUkVfXyovIF9pbnRlcm9wX3JlcXVpcmVfZGVmYXVsdC5fKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5jb25zdCBfbG9hZGFibGUgPSAvKiNfX1BVUkVfXyovIF9pbnRlcm9wX3JlcXVpcmVfZGVmYXVsdC5fKHJlcXVpcmUoXCIuL2xvYWRhYmxlXCIpKTtcbmNvbnN0IGlzU2VydmVyU2lkZSA9IHR5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCI7XG4vLyBOb3JtYWxpemUgbG9hZGVyIHRvIHJldHVybiB0aGUgbW9kdWxlIGFzIGZvcm0geyBkZWZhdWx0OiBDb21wb25lbnQgfSBmb3IgYFJlYWN0LmxhenlgLlxuLy8gQWxzbyBmb3IgYmFja3dhcmQgY29tcGF0aWJsZSBzaW5jZSBuZXh0L2R5bmFtaWMgYWxsb3dzIHRvIHJlc29sdmUgYSBjb21wb25lbnQgZGlyZWN0bHkgd2l0aCBsb2FkZXJcbi8vIENsaWVudCBjb21wb25lbnQgcmVmZXJlbmNlIHByb3h5IG5lZWQgdG8gYmUgY29udmVydGVkIHRvIGEgbW9kdWxlLlxuZnVuY3Rpb24gY29udmVydE1vZHVsZShtb2QpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBkZWZhdWx0OiAobW9kID09IG51bGwgPyB2b2lkIDAgOiBtb2QuZGVmYXVsdCkgfHwgbW9kXG4gICAgfTtcbn1cbmZ1bmN0aW9uIG5vU1NSKExvYWRhYmxlSW5pdGlhbGl6ZXIsIGxvYWRhYmxlT3B0aW9ucykge1xuICAgIC8vIFJlbW92aW5nIHdlYnBhY2sgYW5kIG1vZHVsZXMgbWVhbnMgcmVhY3QtbG9hZGFibGUgd29uJ3QgdHJ5IHByZWxvYWRpbmdcbiAgICBkZWxldGUgbG9hZGFibGVPcHRpb25zLndlYnBhY2s7XG4gICAgZGVsZXRlIGxvYWRhYmxlT3B0aW9ucy5tb2R1bGVzO1xuICAgIC8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIHByZXZlbnQgcmVhY3QtbG9hZGFibGUgZnJvbSBpbml0aWFsaXppbmcgb24gdGhlIHNlcnZlclxuICAgIGlmICghaXNTZXJ2ZXJTaWRlKSB7XG4gICAgICAgIHJldHVybiBMb2FkYWJsZUluaXRpYWxpemVyKGxvYWRhYmxlT3B0aW9ucyk7XG4gICAgfVxuICAgIGNvbnN0IExvYWRpbmcgPSBsb2FkYWJsZU9wdGlvbnMubG9hZGluZztcbiAgICAvLyBUaGlzIHdpbGwgb25seSBiZSByZW5kZXJlZCBvbiB0aGUgc2VydmVyIHNpZGVcbiAgICByZXR1cm4gKCk9Pi8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChMb2FkaW5nLCB7XG4gICAgICAgICAgICBlcnJvcjogbnVsbCxcbiAgICAgICAgICAgIGlzTG9hZGluZzogdHJ1ZSxcbiAgICAgICAgICAgIHBhc3REZWxheTogZmFsc2UsXG4gICAgICAgICAgICB0aW1lZE91dDogZmFsc2VcbiAgICAgICAgfSk7XG59XG5mdW5jdGlvbiBkeW5hbWljKGR5bmFtaWNPcHRpb25zLCBvcHRpb25zKSB7XG4gICAgbGV0IGxvYWRhYmxlRm4gPSBfbG9hZGFibGUuZGVmYXVsdDtcbiAgICBsZXQgbG9hZGFibGVPcHRpb25zID0ge1xuICAgICAgICAvLyBBIGxvYWRpbmcgY29tcG9uZW50IGlzIG5vdCByZXF1aXJlZCwgc28gd2UgZGVmYXVsdCBpdFxuICAgICAgICBsb2FkaW5nOiAocGFyYW0pPT57XG4gICAgICAgICAgICBsZXQgeyBlcnJvciAsIGlzTG9hZGluZyAsIHBhc3REZWxheSAgfSA9IHBhcmFtO1xuICAgICAgICAgICAgaWYgKCFwYXN0RGVsYXkpIHJldHVybiBudWxsO1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICAgICAgICAgICAgIGlmIChpc0xvYWRpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwicFwiLCBudWxsLCBlcnJvci5tZXNzYWdlLCAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJiclwiLCBudWxsKSwgZXJyb3Iuc3RhY2spO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvLyBTdXBwb3J0IGZvciBkaXJlY3QgaW1wb3J0KCksIGVnOiBkeW5hbWljKGltcG9ydCgnLi4vaGVsbG8td29ybGQnKSlcbiAgICAvLyBOb3RlIHRoYXQgdGhpcyBpcyBvbmx5IGtlcHQgZm9yIHRoZSBlZGdlIGNhc2Ugd2hlcmUgc29tZW9uZSBpcyBwYXNzaW5nIGluIGEgcHJvbWlzZSBhcyBmaXJzdCBhcmd1bWVudFxuICAgIC8vIFRoZSByZWFjdC1sb2FkYWJsZSBiYWJlbCBwbHVnaW4gd2lsbCB0dXJuIGR5bmFtaWMoaW1wb3J0KCcuLi9oZWxsby13b3JsZCcpKSBpbnRvIGR5bmFtaWMoKCkgPT4gaW1wb3J0KCcuLi9oZWxsby13b3JsZCcpKVxuICAgIC8vIFRvIG1ha2Ugc3VyZSB3ZSBkb24ndCBleGVjdXRlIHRoZSBpbXBvcnQgd2l0aG91dCByZW5kZXJpbmcgZmlyc3RcbiAgICBpZiAoZHluYW1pY09wdGlvbnMgaW5zdGFuY2VvZiBQcm9taXNlKSB7XG4gICAgICAgIGxvYWRhYmxlT3B0aW9ucy5sb2FkZXIgPSAoKT0+ZHluYW1pY09wdGlvbnM7XG4gICAgLy8gU3VwcG9ydCBmb3IgaGF2aW5nIGltcG9ydCBhcyBhIGZ1bmN0aW9uLCBlZzogZHluYW1pYygoKSA9PiBpbXBvcnQoJy4uL2hlbGxvLXdvcmxkJykpXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZHluYW1pY09wdGlvbnMgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBsb2FkYWJsZU9wdGlvbnMubG9hZGVyID0gZHluYW1pY09wdGlvbnM7XG4gICAgLy8gU3VwcG9ydCBmb3IgaGF2aW5nIGZpcnN0IGFyZ3VtZW50IGJlaW5nIG9wdGlvbnMsIGVnOiBkeW5hbWljKHtsb2FkZXI6IGltcG9ydCgnLi4vaGVsbG8td29ybGQnKX0pXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZHluYW1pY09wdGlvbnMgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgbG9hZGFibGVPcHRpb25zID0ge1xuICAgICAgICAgICAgLi4ubG9hZGFibGVPcHRpb25zLFxuICAgICAgICAgICAgLi4uZHluYW1pY09wdGlvbnNcbiAgICAgICAgfTtcbiAgICB9XG4gICAgLy8gU3VwcG9ydCBmb3IgcGFzc2luZyBvcHRpb25zLCBlZzogZHluYW1pYyhpbXBvcnQoJy4uL2hlbGxvLXdvcmxkJyksIHtsb2FkaW5nOiAoKSA9PiA8cD5Mb2FkaW5nIHNvbWV0aGluZzwvcD59KVxuICAgIGxvYWRhYmxlT3B0aW9ucyA9IHtcbiAgICAgICAgLi4ubG9hZGFibGVPcHRpb25zLFxuICAgICAgICAuLi5vcHRpb25zXG4gICAgfTtcbiAgICBjb25zdCBsb2FkZXJGbiA9IGxvYWRhYmxlT3B0aW9ucy5sb2FkZXI7XG4gICAgY29uc3QgbG9hZGVyID0gKCk9PmxvYWRlckZuICE9IG51bGwgPyBsb2FkZXJGbigpLnRoZW4oY29udmVydE1vZHVsZSkgOiBQcm9taXNlLnJlc29sdmUoY29udmVydE1vZHVsZSgoKT0+bnVsbCkpO1xuICAgIC8vIGNvbWluZyBmcm9tIGJ1aWxkL2JhYmVsL3BsdWdpbnMvcmVhY3QtbG9hZGFibGUtcGx1Z2luLmpzXG4gICAgaWYgKGxvYWRhYmxlT3B0aW9ucy5sb2FkYWJsZUdlbmVyYXRlZCkge1xuICAgICAgICBsb2FkYWJsZU9wdGlvbnMgPSB7XG4gICAgICAgICAgICAuLi5sb2FkYWJsZU9wdGlvbnMsXG4gICAgICAgICAgICAuLi5sb2FkYWJsZU9wdGlvbnMubG9hZGFibGVHZW5lcmF0ZWRcbiAgICAgICAgfTtcbiAgICAgICAgZGVsZXRlIGxvYWRhYmxlT3B0aW9ucy5sb2FkYWJsZUdlbmVyYXRlZDtcbiAgICB9XG4gICAgLy8gc3VwcG9ydCBmb3IgZGlzYWJsaW5nIHNlcnZlciBzaWRlIHJlbmRlcmluZywgZWc6IGR5bmFtaWMoKCkgPT4gaW1wb3J0KCcuLi9oZWxsby13b3JsZCcpLCB7c3NyOiBmYWxzZX0pLlxuICAgIGlmICh0eXBlb2YgbG9hZGFibGVPcHRpb25zLnNzciA9PT0gXCJib29sZWFuXCIgJiYgIWxvYWRhYmxlT3B0aW9ucy5zc3IpIHtcbiAgICAgICAgZGVsZXRlIGxvYWRhYmxlT3B0aW9ucy53ZWJwYWNrO1xuICAgICAgICBkZWxldGUgbG9hZGFibGVPcHRpb25zLm1vZHVsZXM7XG4gICAgICAgIHJldHVybiBub1NTUihsb2FkYWJsZUZuLCBsb2FkYWJsZU9wdGlvbnMpO1xuICAgIH1cbiAgICByZXR1cm4gbG9hZGFibGVGbih7XG4gICAgICAgIC4uLmxvYWRhYmxlT3B0aW9ucyxcbiAgICAgICAgbG9hZGVyOiBsb2FkZXJcbiAgICB9KTtcbn1cblxuaWYgKCh0eXBlb2YgZXhwb3J0cy5kZWZhdWx0ID09PSAnZnVuY3Rpb24nIHx8ICh0eXBlb2YgZXhwb3J0cy5kZWZhdWx0ID09PSAnb2JqZWN0JyAmJiBleHBvcnRzLmRlZmF1bHQgIT09IG51bGwpKSAmJiB0eXBlb2YgZXhwb3J0cy5kZWZhdWx0Ll9fZXNNb2R1bGUgPT09ICd1bmRlZmluZWQnKSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLmRlZmF1bHQsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiAgT2JqZWN0LmFzc2lnbihleHBvcnRzLmRlZmF1bHQsIGV4cG9ydHMpO1xuICBtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDtcbn1cblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZHluYW1pYy5qcy5tYXAiXSwibmFtZXMiOlsiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJtb2R1bGUiLCJub1NTUiIsImRlZmF1bHQiLCJfZXhwb3J0IiwidGFyZ2V0IiwiYWxsIiwibmFtZSIsImVudW1lcmFibGUiLCJnZXQiLCJkeW5hbWljIiwiX2ludGVyb3BfcmVxdWlyZV9kZWZhdWx0IiwicmVxdWlyZSIsIl9yZWFjdCIsIl8iLCJfbG9hZGFibGUiLCJpc1NlcnZlclNpZGUiLCJjb252ZXJ0TW9kdWxlIiwibW9kIiwiTG9hZGFibGVJbml0aWFsaXplciIsImxvYWRhYmxlT3B0aW9ucyIsIndlYnBhY2siLCJtb2R1bGVzIiwiTG9hZGluZyIsImxvYWRpbmciLCJjcmVhdGVFbGVtZW50IiwiZXJyb3IiLCJpc0xvYWRpbmciLCJwYXN0RGVsYXkiLCJ0aW1lZE91dCIsImR5bmFtaWNPcHRpb25zIiwib3B0aW9ucyIsImxvYWRhYmxlRm4iLCJwYXJhbSIsInByb2Nlc3MiLCJtZXNzYWdlIiwic3RhY2siLCJQcm9taXNlIiwibG9hZGVyIiwibG9hZGVyRm4iLCJ0aGVuIiwicmVzb2x2ZSIsImxvYWRhYmxlR2VuZXJhdGVkIiwic3NyIiwiX19lc01vZHVsZSIsImFzc2lnbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/shared/lib/dynamic.js\n");

/***/ }),

/***/ "./node_modules/next/dynamic.js":
/*!**************************************!*\
  !*** ./node_modules/next/dynamic.js ***!
  \**************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./dist/shared/lib/dynamic */ \"./node_modules/next/dist/shared/lib/dynamic.js\")\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9keW5hbWljLmpzLmpzIiwibWFwcGluZ3MiOiJBQUFBLHVIQUFxRCIsInNvdXJjZXMiOlsid2VicGFjazovL2NvbnRhaW5lci8uL25vZGVfbW9kdWxlcy9uZXh0L2R5bmFtaWMuanM/NzNkNCJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9zaGFyZWQvbGliL2R5bmFtaWMnKVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dynamic.js\n");

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
eval("\n\nexports._ = exports._interop_require_default = _interop_require_default;\nfunction _interop_require_default(obj) {\n    return obj && obj.__esModule ? obj : { default: obj };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQHN3Yy9oZWxwZXJzL2Nqcy9faW50ZXJvcF9yZXF1aXJlX2RlZmF1bHQuY2pzLmpzIiwibWFwcGluZ3MiOiJBQUFhOztBQUViLFNBQVMsR0FBRyxnQ0FBZ0M7QUFDNUM7QUFDQSwyQ0FBMkM7QUFDM0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb250YWluZXIvLi9ub2RlX21vZHVsZXMvQHN3Yy9oZWxwZXJzL2Nqcy9faW50ZXJvcF9yZXF1aXJlX2RlZmF1bHQuY2pzPzIwYjYiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuXyA9IGV4cG9ydHMuX2ludGVyb3BfcmVxdWlyZV9kZWZhdWx0ID0gX2ludGVyb3BfcmVxdWlyZV9kZWZhdWx0O1xuZnVuY3Rpb24gX2ludGVyb3BfcmVxdWlyZV9kZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9O1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/@swc/helpers/cjs/_interop_require_default.cjs\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();