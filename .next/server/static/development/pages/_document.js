module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/constants":
/*!*********************************************************!*\
  !*** external "next/dist/next-server/lib/constants.js" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/constants.js");

/***/ }),

/***/ "../next-server/lib/document-context":
/*!****************************************************************!*\
  !*** external "next/dist/next-server/lib/document-context.js" ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/document-context.js");

/***/ }),

/***/ "../next-server/lib/fid":
/*!***************************************************!*\
  !*** external "next/dist/next-server/lib/fid.js" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/fid.js");

/***/ }),

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "../next-server/server/utils":
/*!********************************************************!*\
  !*** external "next/dist/next-server/server/utils.js" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/server/utils.js");

/***/ }),

/***/ "./assets/fonts/MuseoSansRounded-300.ttf":
/*!***********************************************!*\
  !*** ./assets/fonts/MuseoSansRounded-300.ttf ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/_next/static/chunks/fonts/MuseoSansRounded-300-b54714450083172ec7bfa4619baa0780.ttf");

/***/ }),

/***/ "./assets/fonts/MuseoSansRounded-300.woff":
/*!************************************************!*\
  !*** ./assets/fonts/MuseoSansRounded-300.woff ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/_next/static/chunks/fonts/MuseoSansRounded-300-6b7cfb18c51bf44a4f1a391a2ed9d359.woff");

/***/ }),

/***/ "./assets/fonts/MuseoSansRounded-500.ttf":
/*!***********************************************!*\
  !*** ./assets/fonts/MuseoSansRounded-500.ttf ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/_next/static/chunks/fonts/MuseoSansRounded-500-c07322cbbc44559ee3d8476a04e5d50b.ttf");

/***/ }),

/***/ "./assets/fonts/MuseoSansRounded-500.woff":
/*!************************************************!*\
  !*** ./assets/fonts/MuseoSansRounded-500.woff ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/_next/static/chunks/fonts/MuseoSansRounded-500-f93c354f919956ffa891c88986df498d.woff");

/***/ }),

/***/ "./assets/fonts/MuseoSansRounded-700.ttf":
/*!***********************************************!*\
  !*** ./assets/fonts/MuseoSansRounded-700.ttf ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/_next/static/chunks/fonts/MuseoSansRounded-700-953e79686ab7ec8288d33893cb7cae85.ttf");

/***/ }),

/***/ "./assets/fonts/MuseoSansRounded-700.woff":
/*!************************************************!*\
  !*** ./assets/fonts/MuseoSansRounded-700.woff ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/_next/static/chunks/fonts/MuseoSansRounded-700-5e3941a2f4ca24542238a180df983ee9.woff");

/***/ }),

/***/ "./assets/fonts/MuseoSansRounded-900.ttf":
/*!***********************************************!*\
  !*** ./assets/fonts/MuseoSansRounded-900.ttf ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/_next/static/chunks/fonts/MuseoSansRounded-900-c15c59b7680c7b24f3e4fc7931d1006d.ttf");

/***/ }),

/***/ "./assets/fonts/MuseoSansRounded-900.woff":
/*!************************************************!*\
  !*** ./assets/fonts/MuseoSansRounded-900.woff ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/_next/static/chunks/fonts/MuseoSansRounded-900-72747d02a73e9776d32d202a9e3dfad7.woff");

/***/ }),

/***/ "./assets/img/apple-icon.png":
/*!***********************************!*\
  !*** ./assets/img/apple-icon.png ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./assets/img/favicon.png":
/*!********************************!*\
  !*** ./assets/img/favicon.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./node_modules/next/dist/pages/_document.js":
/*!***************************************************!*\
  !*** ./node_modules/next/dist/pages/_document.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.middleware = middleware;
exports.NextScript = exports.Main = exports.Head = exports.Html = exports.default = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _server = _interopRequireDefault(__webpack_require__(/*! styled-jsx/server */ "styled-jsx/server"));

var _constants = __webpack_require__(/*! ../next-server/lib/constants */ "../next-server/lib/constants");

var _documentContext = __webpack_require__(/*! ../next-server/lib/document-context */ "../next-server/lib/document-context");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

exports.DocumentContext = _utils.DocumentContext;
exports.DocumentInitialProps = _utils.DocumentInitialProps;
exports.DocumentProps = _utils.DocumentProps;

var _fid = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/fid */ "../next-server/lib/fid"));

var _utils2 = __webpack_require__(/*! ../next-server/server/utils */ "../next-server/server/utils");

var _htmlescape = __webpack_require__(/*! ../server/htmlescape */ "./node_modules/next/dist/server/htmlescape.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

async function middleware({
  req,
  res
}) {}

function dedupe(bundles) {
  const files = new Set();
  const kept = [];

  for (const bundle of bundles) {
    if (files.has(bundle.file)) continue;
    files.add(bundle.file);
    kept.push(bundle);
  }

  return kept;
}

function getOptionalModernScriptVariant(path) {
  if (false) {}

  return path;
}
/**
* `Document` component handles the initial `document` markup and renders only on the server side.
* Commonly used for implementing server side rendering for `css-in-js` libraries.
*/


class Document extends _react.Component {
  /**
  * `getInitialProps` hook returns the context object with the addition of `renderPage`.
  * `renderPage` callback executes `React` rendering logic synchronously to support server-rendering wrappers
  */
  static async getInitialProps(ctx) {
    const enhancers =  false ? undefined : [];

    const enhanceApp = App => {
      for (const enhancer of enhancers) {
        App = enhancer(App);
      }

      return props => _react.default.createElement(App, props);
    };

    const {
      html,
      head
    } = await ctx.renderPage({
      enhanceApp
    });
    const styles = [...(0, _server.default)(), ...( false ? undefined : [])];
    return {
      html,
      head,
      styles
    };
  }

  static renderDocument(Document, props) {
    return _react.default.createElement(_documentContext.DocumentContext.Provider, {
      value: {
        _documentProps: props,
        // In dev we invalidate the cache by appending a timestamp to the resource URL.
        // This is a workaround to fix https://github.com/zeit/next.js/issues/5860
        // TODO: remove this workaround when https://bugs.webkit.org/show_bug.cgi?id=187726 is fixed.
        _devOnlyInvalidateCacheQueryString: true ? '?ts=' + Date.now() : undefined
      }
    }, _react.default.createElement(Document, props));
  }

  render() {
    return _react.default.createElement(Html, null, _react.default.createElement(Head, null), _react.default.createElement("body", null, _react.default.createElement(Main, null), _react.default.createElement(NextScript, null)));
  }

}

exports.default = Document;
Document.headTagsMiddleware =  false ? undefined : () => [];
Document.bodyTagsMiddleware =  false ? undefined : () => [];
Document.htmlPropsMiddleware =  false ? undefined : () => [];

class Html extends _react.Component {
  constructor(...args) {
    super(...args);
    this.context = void 0;
  }

  render() {
    const {
      inAmpMode,
      htmlProps
    } = this.context._documentProps;
    return _react.default.createElement("html", Object.assign({}, htmlProps, this.props, {
      amp: inAmpMode ? '' : undefined,
      "data-ampdevmode": inAmpMode && true ? '' : undefined
    }));
  }

}

exports.Html = Html;
Html.contextType = _documentContext.DocumentContext;
Html.propTypes = {
  children: _propTypes.default.node.isRequired
};

class Head extends _react.Component {
  constructor(...args) {
    super(...args);
    this.context = void 0;
  }

  getCssLinks() {
    const {
      assetPrefix,
      files
    } = this.context._documentProps;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;
    const cssFiles = files && files.length ? files.filter(f => /\.css$/.test(f)) : [];
    const cssLinkElements = [];
    cssFiles.forEach(file => {
      cssLinkElements.push(_react.default.createElement("link", {
        key: `${file}-preload`,
        nonce: this.props.nonce,
        rel: "preload",
        href: `${assetPrefix}/_next/${encodeURI(file)}${_devOnlyInvalidateCacheQueryString}`,
        as: "style",
        crossOrigin: this.props.crossOrigin || undefined
      }), _react.default.createElement("link", {
        key: file,
        nonce: this.props.nonce,
        rel: "stylesheet",
        href: `${assetPrefix}/_next/${encodeURI(file)}${_devOnlyInvalidateCacheQueryString}`,
        crossOrigin: this.props.crossOrigin || undefined
      }));
    });
    return cssLinkElements.length === 0 ? null : cssLinkElements;
  }

  getPreloadDynamicChunks() {
    const {
      dynamicImports,
      assetPrefix
    } = this.context._documentProps;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;
    return dedupe(dynamicImports).map(bundle => {
      // `dynamicImports` will contain both `.js` and `.module.js` when the
      // feature is enabled. This clause will filter down to the modern
      // variants only.
      if (!bundle.file.endsWith(getOptionalModernScriptVariant('.js'))) {
        return null;
      }

      return _react.default.createElement("link", {
        rel: "preload",
        key: bundle.file,
        href: `${assetPrefix}/_next/${encodeURI(bundle.file)}${_devOnlyInvalidateCacheQueryString}`,
        as: "script",
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined
      });
    }) // Filter out nulled scripts
    .filter(Boolean);
  }

  getPreloadMainLinks() {
    const {
      assetPrefix,
      files
    } = this.context._documentProps;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;
    const preloadFiles = files && files.length ? files.filter(file => {
      // `dynamicImports` will contain both `.js` and `.module.js` when
      // the feature is enabled. This clause will filter down to the
      // modern variants only.
      return file.endsWith(getOptionalModernScriptVariant('.js'));
    }) : [];
    return preloadFiles.length === 0 ? null : preloadFiles.map(file => {
      return _react.default.createElement("link", {
        key: file,
        nonce: this.props.nonce,
        rel: "preload",
        href: `${assetPrefix}/_next/${encodeURI(file)}${_devOnlyInvalidateCacheQueryString}`,
        as: "script",
        crossOrigin: this.props.crossOrigin || undefined
      });
    });
  }

  getFidPolyfill() {
    if (true) {
      return null;
    }

    return _react.default.createElement("script", {
      dangerouslySetInnerHTML: {
        __html: `(${_fid.default})(addEventListener, removeEventListener)`
      }
    });
  }

  render() {
    const {
      styles,
      ampPath,
      inAmpMode,
      assetPrefix,
      hybridAmp,
      canonicalBase,
      __NEXT_DATA__,
      dangerousAsPath,
      headTags,
      unstable_runtimeJS
    } = this.context._documentProps;
    const disableRuntimeJS = unstable_runtimeJS === false;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;
    const {
      page,
      buildId
    } = __NEXT_DATA__;
    let {
      head
    } = this.context._documentProps;
    let children = this.props.children; // show a warning if Head contains <title> (only in development)

    if (true) {
      children = _react.default.Children.map(children, child => {
        const isReactHelmet = child && child.props && child.props['data-react-helmet'];

        if (child && child.type === 'title' && !isReactHelmet) {
          console.warn("Warning: <title> should not be used in _document.js's <Head>. https://err.sh/next.js/no-document-title");
        }

        return child;
      });
      if (this.props.crossOrigin) console.warn('Warning: `Head` attribute `crossOrigin` is deprecated. https://err.sh/next.js/doc-crossorigin-deprecated');
    }

    let hasAmphtmlRel = false;
    let hasCanonicalRel = false; // show warning and remove conflicting amp head tags

    head = _react.default.Children.map(head || [], child => {
      if (!child) return child;
      const {
        type,
        props
      } = child;

      if (inAmpMode) {
        let badProp = '';

        if (type === 'meta' && props.name === 'viewport') {
          badProp = 'name="viewport"';
        } else if (type === 'link' && props.rel === 'canonical') {
          hasCanonicalRel = true;
        } else if (type === 'script') {
          // only block if
          // 1. it has a src and isn't pointing to ampproject's CDN
          // 2. it is using dangerouslySetInnerHTML without a type or
          // a type of text/javascript
          if (props.src && props.src.indexOf('ampproject') < -1 || props.dangerouslySetInnerHTML && (!props.type || props.type === 'text/javascript')) {
            badProp = '<script';
            Object.keys(props).forEach(prop => {
              badProp += ` ${prop}="${props[prop]}"`;
            });
            badProp += '/>';
          }
        }

        if (badProp) {
          console.warn(`Found conflicting amp tag "${child.type}" with conflicting prop ${badProp} in ${__NEXT_DATA__.page}. https://err.sh/next.js/conflicting-amp-tag`);
          return null;
        }
      } else {
        // non-amp mode
        if (type === 'link' && props.rel === 'amphtml') {
          hasAmphtmlRel = true;
        }
      }

      return child;
    }); // try to parse styles from fragment for backwards compat

    const curStyles = Array.isArray(styles) ? styles : [];

    if (inAmpMode && styles && // @ts-ignore Property 'props' does not exist on type ReactElement
    styles.props && // @ts-ignore Property 'props' does not exist on type ReactElement
    Array.isArray(styles.props.children)) {
      const hasStyles = el => el && el.props && el.props.dangerouslySetInnerHTML && el.props.dangerouslySetInnerHTML.__html; // @ts-ignore Property 'props' does not exist on type ReactElement


      styles.props.children.forEach(child => {
        if (Array.isArray(child)) {
          child.map(el => hasStyles(el) && curStyles.push(el));
        } else if (hasStyles(child)) {
          curStyles.push(child);
        }
      });
    }

    return _react.default.createElement("head", this.props, this.context._documentProps.isDevelopment && _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("style", {
      "data-next-hide-fouc": true,
      "data-ampdevmode": inAmpMode ? 'true' : undefined,
      dangerouslySetInnerHTML: {
        __html: `body{display:none}`
      }
    }), _react.default.createElement("noscript", {
      "data-next-hide-fouc": true,
      "data-ampdevmode": inAmpMode ? 'true' : undefined
    }, _react.default.createElement("style", {
      dangerouslySetInnerHTML: {
        __html: `body{display:block}`
      }
    }))), children, head, _react.default.createElement("meta", {
      name: "next-head-count",
      content: _react.default.Children.count(head || []).toString()
    }), inAmpMode && _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("meta", {
      name: "viewport",
      content: "width=device-width,minimum-scale=1,initial-scale=1"
    }), !hasCanonicalRel && _react.default.createElement("link", {
      rel: "canonical",
      href: canonicalBase + (0, _utils2.cleanAmpPath)(dangerousAsPath)
    }), _react.default.createElement("link", {
      rel: "preload",
      as: "script",
      href: "https://cdn.ampproject.org/v0.js"
    }), styles && _react.default.createElement("style", {
      "amp-custom": "",
      dangerouslySetInnerHTML: {
        __html: curStyles.map(style => style.props.dangerouslySetInnerHTML.__html).join('').replace(/\/\*# sourceMappingURL=.*\*\//g, '').replace(/\/\*@ sourceURL=.*?\*\//g, '')
      }
    }), _react.default.createElement("style", {
      "amp-boilerplate": "",
      dangerouslySetInnerHTML: {
        __html: `body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}`
      }
    }), _react.default.createElement("noscript", null, _react.default.createElement("style", {
      "amp-boilerplate": "",
      dangerouslySetInnerHTML: {
        __html: `body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}`
      }
    })), _react.default.createElement("script", {
      async: true,
      src: "https://cdn.ampproject.org/v0.js"
    })), !inAmpMode && _react.default.createElement(_react.default.Fragment, null, !hasAmphtmlRel && hybridAmp && _react.default.createElement("link", {
      rel: "amphtml",
      href: canonicalBase + getAmpPath(ampPath, dangerousAsPath)
    }), this.getCssLinks(), !disableRuntimeJS && _react.default.createElement("link", {
      rel: "preload",
      href: assetPrefix + getOptionalModernScriptVariant(encodeURI(`/_next/static/${buildId}/pages/_app.js`)) + _devOnlyInvalidateCacheQueryString,
      as: "script",
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined
    }), !disableRuntimeJS && page !== '/_error' && _react.default.createElement("link", {
      rel: "preload",
      href: assetPrefix + getOptionalModernScriptVariant(encodeURI(`/_next/static/${buildId}/pages${getPageFile(page)}`)) + _devOnlyInvalidateCacheQueryString,
      as: "script",
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined
    }), !disableRuntimeJS && this.getPreloadDynamicChunks(), !disableRuntimeJS && this.getPreloadMainLinks(), this.context._documentProps.isDevelopment && // this element is used to mount development styles so the
    // ordering matches production
    // (by default, style-loader injects at the bottom of <head />)
    _react.default.createElement("noscript", {
      id: "__next_css__DO_NOT_USE__"
    }), styles || null), !disableRuntimeJS && this.getFidPolyfill(), _react.default.createElement(_react.default.Fragment, {}, ...(headTags || [])));
  }

}

exports.Head = Head;
Head.contextType = _documentContext.DocumentContext;
Head.propTypes = {
  nonce: _propTypes.default.string,
  crossOrigin: _propTypes.default.string
};

class Main extends _react.Component {
  constructor(...args) {
    super(...args);
    this.context = void 0;
  }

  render() {
    const {
      inAmpMode,
      html
    } = this.context._documentProps;
    if (inAmpMode) return _constants.AMP_RENDER_TARGET;
    return _react.default.createElement("div", {
      id: "__next",
      dangerouslySetInnerHTML: {
        __html: html
      }
    });
  }

}

exports.Main = Main;
Main.contextType = _documentContext.DocumentContext;

class NextScript extends _react.Component {
  constructor(...args) {
    super(...args);
    this.context = void 0;
  }

  getDynamicChunks() {
    const {
      dynamicImports,
      assetPrefix,
      files
    } = this.context._documentProps;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;
    return dedupe(dynamicImports).map(bundle => {
      let modernProps = {};

      if (false) {}

      if (!/\.js$/.test(bundle.file) || files.includes(bundle.file)) return null;
      return _react.default.createElement("script", Object.assign({
        async: true,
        key: bundle.file,
        src: `${assetPrefix}/_next/${encodeURI(bundle.file)}${_devOnlyInvalidateCacheQueryString}`,
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined
      }, modernProps));
    });
  }

  getScripts() {
    const {
      assetPrefix,
      files,
      lowPriorityFiles
    } = this.context._documentProps;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;
    const normalScripts = files === null || files === void 0 ? void 0 : files.filter(file => file.endsWith('.js'));
    const lowPriorityScripts = lowPriorityFiles === null || lowPriorityFiles === void 0 ? void 0 : lowPriorityFiles.filter(file => file.endsWith('.js'));
    return [...normalScripts, ...lowPriorityScripts].map(file => {
      let modernProps = {};

      if (false) {}

      return _react.default.createElement("script", Object.assign({
        key: file,
        src: `${assetPrefix}/_next/${encodeURI(file)}${_devOnlyInvalidateCacheQueryString}`,
        nonce: this.props.nonce,
        async: true,
        crossOrigin: this.props.crossOrigin || undefined
      }, modernProps));
    });
  }

  getPolyfillScripts() {
    // polyfills.js has to be rendered as nomodule without async
    // It also has to be the first script to load
    const {
      assetPrefix,
      polyfillFiles
    } = this.context._documentProps;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;
    return polyfillFiles.filter(polyfill => polyfill.endsWith('.js') && !/\.module\.js$/.test(polyfill)).map(polyfill => _react.default.createElement("script", {
      key: polyfill,
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined,
      noModule: true,
      src: `${assetPrefix}/_next/${polyfill}${_devOnlyInvalidateCacheQueryString}`
    }));
  }

  static getInlineScriptSource(documentProps) {
    const {
      __NEXT_DATA__
    } = documentProps;

    try {
      const data = JSON.stringify(__NEXT_DATA__);
      return (0, _htmlescape.htmlEscapeJsonString)(data);
    } catch (err) {
      if (err.message.indexOf('circular structure')) {
        throw new Error(`Circular structure in "getInitialProps" result of page "${__NEXT_DATA__.page}". https://err.sh/zeit/next.js/circular-structure`);
      }

      throw err;
    }
  }

  render() {
    const {
      staticMarkup,
      assetPrefix,
      inAmpMode,
      devFiles,
      __NEXT_DATA__,
      bodyTags,
      unstable_runtimeJS
    } = this.context._documentProps;
    const disableRuntimeJS = unstable_runtimeJS === false;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;

    if (inAmpMode) {
      if (false) {}

      const devFiles = [_constants.CLIENT_STATIC_FILES_RUNTIME_AMP, _constants.CLIENT_STATIC_FILES_RUNTIME_WEBPACK];
      return _react.default.createElement(_react.default.Fragment, null, staticMarkup ? null : _react.default.createElement("script", {
        id: "__NEXT_DATA__",
        type: "application/json",
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined,
        dangerouslySetInnerHTML: {
          __html: NextScript.getInlineScriptSource(this.context._documentProps)
        },
        "data-ampdevmode": true
      }), devFiles ? devFiles.map(file => _react.default.createElement("script", {
        key: file,
        src: `${assetPrefix}/_next/${file}${_devOnlyInvalidateCacheQueryString}`,
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined,
        "data-ampdevmode": true
      })) : null, _react.default.createElement(_react.default.Fragment, {}, ...(bodyTags || [])));
    }

    const {
      page,
      buildId
    } = __NEXT_DATA__;

    if (true) {
      if (this.props.crossOrigin) console.warn('Warning: `NextScript` attribute `crossOrigin` is deprecated. https://err.sh/next.js/doc-crossorigin-deprecated');
    }

    const pageScript = [_react.default.createElement("script", Object.assign({
      async: true,
      "data-next-page": page,
      key: page,
      src: assetPrefix + encodeURI(`/_next/static/${buildId}/pages${getPageFile(page)}`) + _devOnlyInvalidateCacheQueryString,
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined
    },  false ? undefined : {})),  false && false];
    const appScript = [_react.default.createElement("script", Object.assign({
      async: true,
      "data-next-page": "/_app",
      src: assetPrefix + `/_next/static/${buildId}/pages/_app.js` + _devOnlyInvalidateCacheQueryString,
      key: "_app",
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined
    },  false ? undefined : {})),  false && false];
    return _react.default.createElement(_react.default.Fragment, null, !disableRuntimeJS && devFiles ? devFiles.map(file => !file.match(/\.js\.map/) && _react.default.createElement("script", {
      key: file,
      src: `${assetPrefix}/_next/${encodeURI(file)}${_devOnlyInvalidateCacheQueryString}`,
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined
    })) : null, staticMarkup ? null : _react.default.createElement("script", {
      id: "__NEXT_DATA__",
      type: "application/json",
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined,
      dangerouslySetInnerHTML: {
        __html: NextScript.getInlineScriptSource(this.context._documentProps)
      }
    }),  false ? undefined : null, !disableRuntimeJS && this.getPolyfillScripts(), !disableRuntimeJS && appScript, !disableRuntimeJS && page !== '/_error' && pageScript, disableRuntimeJS || staticMarkup ? null : this.getDynamicChunks(), disableRuntimeJS || staticMarkup ? null : this.getScripts(), _react.default.createElement(_react.default.Fragment, {}, ...(bodyTags || [])));
  }

}

exports.NextScript = NextScript;
NextScript.contextType = _documentContext.DocumentContext;
NextScript.propTypes = {
  nonce: _propTypes.default.string,
  crossOrigin: _propTypes.default.string
};
NextScript.safariNomoduleFix = '!function(){var e=document,t=e.createElement("script");if(!("noModule"in t)&&"onbeforeload"in t){var n=!1;e.addEventListener("beforeload",function(e){if(e.target===t)n=!0;else if(!e.target.hasAttribute("nomodule")||!n)return;e.preventDefault()},!0),t.type="module",t.src=".",e.head.appendChild(t),t.remove()}}();';

function getAmpPath(ampPath, asPath) {
  return ampPath ? ampPath : `${asPath}${asPath.includes('?') ? '&' : '?'}amp=1`;
}

function getPageFile(page, buildId) {
  if (page === '/') {
    return buildId ? `/index.${buildId}.js` : '/index.js';
  }

  return buildId ? `${page}.${buildId}.js` : `${page}.js`;
}

/***/ }),

/***/ "./node_modules/next/dist/server/htmlescape.js":
/*!*****************************************************!*\
  !*** ./node_modules/next/dist/server/htmlescape.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.htmlEscapeJsonString=htmlEscapeJsonString;// This utility is based on https://github.com/zertosh/htmlescape
// License: https://github.com/zertosh/htmlescape/blob/0527ca7156a524d256101bb310a9f970f63078ad/LICENSE
const ESCAPE_LOOKUP={'&':'\\u0026','>':'\\u003e','<':'\\u003c','\u2028':'\\u2028','\u2029':'\\u2029'};const ESCAPE_REGEX=/[&><\u2028\u2029]/g;function htmlEscapeJsonString(str){return str.replace(ESCAPE_REGEX,match=>ESCAPE_LOOKUP[match]);}

/***/ }),

/***/ "./node_modules/next/document.js":
/*!***************************************!*\
  !*** ./node_modules/next/document.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_document */ "./node_modules/next/dist/pages/_document.js")


/***/ }),

/***/ "./pages/_document.js":
/*!****************************!*\
  !*** ./pages/_document.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/document */ "./node_modules/next/document.js");
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/styles */ "@material-ui/styles");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var assets_fonts_MuseoSansRounded_300_ttf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/fonts/MuseoSansRounded-300.ttf */ "./assets/fonts/MuseoSansRounded-300.ttf");
/* harmony import */ var assets_fonts_MuseoSansRounded_500_ttf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! assets/fonts/MuseoSansRounded-500.ttf */ "./assets/fonts/MuseoSansRounded-500.ttf");
/* harmony import */ var assets_fonts_MuseoSansRounded_700_ttf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! assets/fonts/MuseoSansRounded-700.ttf */ "./assets/fonts/MuseoSansRounded-700.ttf");
/* harmony import */ var assets_fonts_MuseoSansRounded_900_ttf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! assets/fonts/MuseoSansRounded-900.ttf */ "./assets/fonts/MuseoSansRounded-900.ttf");
/* harmony import */ var assets_fonts_MuseoSansRounded_300_woff__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! assets/fonts/MuseoSansRounded-300.woff */ "./assets/fonts/MuseoSansRounded-300.woff");
/* harmony import */ var assets_fonts_MuseoSansRounded_500_woff__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! assets/fonts/MuseoSansRounded-500.woff */ "./assets/fonts/MuseoSansRounded-500.woff");
/* harmony import */ var assets_fonts_MuseoSansRounded_700_woff__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! assets/fonts/MuseoSansRounded-700.woff */ "./assets/fonts/MuseoSansRounded-700.woff");
/* harmony import */ var assets_fonts_MuseoSansRounded_900_woff__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! assets/fonts/MuseoSansRounded-900.woff */ "./assets/fonts/MuseoSansRounded-900.woff");
var _jsxFileName = "/Users/gabrieldossantos/Desktop/checkout-justfit (1)/pages/_document.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }













class MyDocument extends next_document__WEBPACK_IMPORTED_MODULE_2___default.a {
  render() {
    return __jsx("html", {
      lang: "en",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 7
      }
    }, __jsx(next_document__WEBPACK_IMPORTED_MODULE_2__["Head"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }
    }, __jsx("meta", {
      charSet: "utf-8",
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3800694172", [assets_fonts_MuseoSansRounded_500_woff__WEBPACK_IMPORTED_MODULE_9__["default"], assets_fonts_MuseoSansRounded_500_ttf__WEBPACK_IMPORTED_MODULE_5__["default"], assets_fonts_MuseoSansRounded_300_woff__WEBPACK_IMPORTED_MODULE_8__["default"], assets_fonts_MuseoSansRounded_300_ttf__WEBPACK_IMPORTED_MODULE_4__["default"], assets_fonts_MuseoSansRounded_700_woff__WEBPACK_IMPORTED_MODULE_10__["default"], assets_fonts_MuseoSansRounded_700_ttf__WEBPACK_IMPORTED_MODULE_6__["default"], assets_fonts_MuseoSansRounded_900_woff__WEBPACK_IMPORTED_MODULE_11__["default"], assets_fonts_MuseoSansRounded_900_ttf__WEBPACK_IMPORTED_MODULE_7__["default"]]]]),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 11
      }
    }), __jsx("meta", {
      name: "viewport",
      content: "width=device-width, initial-scale=1, shrink-to-fit=no",
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3800694172", [assets_fonts_MuseoSansRounded_500_woff__WEBPACK_IMPORTED_MODULE_9__["default"], assets_fonts_MuseoSansRounded_500_ttf__WEBPACK_IMPORTED_MODULE_5__["default"], assets_fonts_MuseoSansRounded_300_woff__WEBPACK_IMPORTED_MODULE_8__["default"], assets_fonts_MuseoSansRounded_300_ttf__WEBPACK_IMPORTED_MODULE_4__["default"], assets_fonts_MuseoSansRounded_700_woff__WEBPACK_IMPORTED_MODULE_10__["default"], assets_fonts_MuseoSansRounded_700_ttf__WEBPACK_IMPORTED_MODULE_6__["default"], assets_fonts_MuseoSansRounded_900_woff__WEBPACK_IMPORTED_MODULE_11__["default"], assets_fonts_MuseoSansRounded_900_ttf__WEBPACK_IMPORTED_MODULE_7__["default"]]]]),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 11
      }
    }), __jsx("meta", {
      name: "theme-color",
      content: "#000000",
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3800694172", [assets_fonts_MuseoSansRounded_500_woff__WEBPACK_IMPORTED_MODULE_9__["default"], assets_fonts_MuseoSansRounded_500_ttf__WEBPACK_IMPORTED_MODULE_5__["default"], assets_fonts_MuseoSansRounded_300_woff__WEBPACK_IMPORTED_MODULE_8__["default"], assets_fonts_MuseoSansRounded_300_ttf__WEBPACK_IMPORTED_MODULE_4__["default"], assets_fonts_MuseoSansRounded_700_woff__WEBPACK_IMPORTED_MODULE_10__["default"], assets_fonts_MuseoSansRounded_700_ttf__WEBPACK_IMPORTED_MODULE_6__["default"], assets_fonts_MuseoSansRounded_900_woff__WEBPACK_IMPORTED_MODULE_11__["default"], assets_fonts_MuseoSansRounded_900_ttf__WEBPACK_IMPORTED_MODULE_7__["default"]]]]),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 11
      }
    }), __jsx("link", {
      rel: "shortcut icon",
      href: __webpack_require__(/*! assets/img/favicon.png */ "./assets/img/favicon.png"),
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3800694172", [assets_fonts_MuseoSansRounded_500_woff__WEBPACK_IMPORTED_MODULE_9__["default"], assets_fonts_MuseoSansRounded_500_ttf__WEBPACK_IMPORTED_MODULE_5__["default"], assets_fonts_MuseoSansRounded_300_woff__WEBPACK_IMPORTED_MODULE_8__["default"], assets_fonts_MuseoSansRounded_300_ttf__WEBPACK_IMPORTED_MODULE_4__["default"], assets_fonts_MuseoSansRounded_700_woff__WEBPACK_IMPORTED_MODULE_10__["default"], assets_fonts_MuseoSansRounded_700_ttf__WEBPACK_IMPORTED_MODULE_6__["default"], assets_fonts_MuseoSansRounded_900_woff__WEBPACK_IMPORTED_MODULE_11__["default"], assets_fonts_MuseoSansRounded_900_ttf__WEBPACK_IMPORTED_MODULE_7__["default"]]]]),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 11
      }
    }), __jsx("link", {
      rel: "apple-touch-icon",
      sizes: "76x76",
      href: __webpack_require__(/*! assets/img/apple-icon.png */ "./assets/img/apple-icon.png"),
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3800694172", [assets_fonts_MuseoSansRounded_500_woff__WEBPACK_IMPORTED_MODULE_9__["default"], assets_fonts_MuseoSansRounded_500_ttf__WEBPACK_IMPORTED_MODULE_5__["default"], assets_fonts_MuseoSansRounded_300_woff__WEBPACK_IMPORTED_MODULE_8__["default"], assets_fonts_MuseoSansRounded_300_ttf__WEBPACK_IMPORTED_MODULE_4__["default"], assets_fonts_MuseoSansRounded_700_woff__WEBPACK_IMPORTED_MODULE_10__["default"], assets_fonts_MuseoSansRounded_700_ttf__WEBPACK_IMPORTED_MODULE_6__["default"], assets_fonts_MuseoSansRounded_900_woff__WEBPACK_IMPORTED_MODULE_11__["default"], assets_fonts_MuseoSansRounded_900_ttf__WEBPACK_IMPORTED_MODULE_7__["default"]]]]),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 11
      }
    }), __jsx("link", {
      rel: "stylesheet",
      type: "text/css",
      href: "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Roboto+Slab:400,700|Material+Icons",
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3800694172", [assets_fonts_MuseoSansRounded_500_woff__WEBPACK_IMPORTED_MODULE_9__["default"], assets_fonts_MuseoSansRounded_500_ttf__WEBPACK_IMPORTED_MODULE_5__["default"], assets_fonts_MuseoSansRounded_300_woff__WEBPACK_IMPORTED_MODULE_8__["default"], assets_fonts_MuseoSansRounded_300_ttf__WEBPACK_IMPORTED_MODULE_4__["default"], assets_fonts_MuseoSansRounded_700_woff__WEBPACK_IMPORTED_MODULE_10__["default"], assets_fonts_MuseoSansRounded_700_ttf__WEBPACK_IMPORTED_MODULE_6__["default"], assets_fonts_MuseoSansRounded_900_woff__WEBPACK_IMPORTED_MODULE_11__["default"], assets_fonts_MuseoSansRounded_900_ttf__WEBPACK_IMPORTED_MODULE_7__["default"]]]]),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 11
      }
    }), __jsx("link", {
      href: "https://use.fontawesome.com/releases/v5.0.10/css/all.css",
      rel: "stylesheet",
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3800694172", [assets_fonts_MuseoSansRounded_500_woff__WEBPACK_IMPORTED_MODULE_9__["default"], assets_fonts_MuseoSansRounded_500_ttf__WEBPACK_IMPORTED_MODULE_5__["default"], assets_fonts_MuseoSansRounded_300_woff__WEBPACK_IMPORTED_MODULE_8__["default"], assets_fonts_MuseoSansRounded_300_ttf__WEBPACK_IMPORTED_MODULE_4__["default"], assets_fonts_MuseoSansRounded_700_woff__WEBPACK_IMPORTED_MODULE_10__["default"], assets_fonts_MuseoSansRounded_700_ttf__WEBPACK_IMPORTED_MODULE_6__["default"], assets_fonts_MuseoSansRounded_900_woff__WEBPACK_IMPORTED_MODULE_11__["default"], assets_fonts_MuseoSansRounded_900_ttf__WEBPACK_IMPORTED_MODULE_7__["default"]]]]),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 11
      }
    }), __jsx("style", {
      dangerouslySetInnerHTML: {
        __html: `
              @font-face {
                font-family: 'Museo Sans';
                src: url("https://justfit.com.br/wp-content/themes/marty_wp/assets/fonts/MuseoSansRounded-300.woff") format('woff'), url("https://justfit.com.br/wp-content/themes/marty_wp/assets/fonts/MuseoSansRounded-300.ttf") format('truetype');              
                font-weight: 300;
                font-style: normal;
              }
              @font-face {
                font-family: 'Museo Sans';
                src: url("https://justfit.com.br/wp-content/themes/marty_wp/assets/fonts/MuseoSansRounded-500.woff") format('woff'), url("https://justfit.com.br/wp-content/themes/marty_wp/assets/fonts/MuseoSansRounded-500.ttf") format('truetype');              
                font-weight: 500;
                font-style: normal;
              }            
              @font-face {
                font-family: 'Museo Sans';
                src: url("https://justfit.com.br/wp-content/themes/marty_wp/assets/fonts/MuseoSansRounded-700.woff") format('woff'), url("https://justfit.com.br/wp-content/themes/marty_wp/assets/fonts/MuseoSansRounded-700.ttf") format('truetype');
                font-weight: 700;
                font-style: normal;
              }
              @font-face {
                font-family: 'Museo Sans';
                src: url("https://justfit.com.br/wp-content/themes/marty_wp/assets/fonts/MuseoSansRounded-900.woff") format('woff'), url("https://justfit.com.br/wp-content/themes/marty_wp/assets/fonts/MuseoSansRounded-900.ttf") format('truetype');
                font-weight: 900;
                font-style: normal;
              }

          `
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 11
      }
    }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "3800694172",
      dynamic: [assets_fonts_MuseoSansRounded_500_woff__WEBPACK_IMPORTED_MODULE_9__["default"], assets_fonts_MuseoSansRounded_500_ttf__WEBPACK_IMPORTED_MODULE_5__["default"], assets_fonts_MuseoSansRounded_300_woff__WEBPACK_IMPORTED_MODULE_8__["default"], assets_fonts_MuseoSansRounded_300_ttf__WEBPACK_IMPORTED_MODULE_4__["default"], assets_fonts_MuseoSansRounded_700_woff__WEBPACK_IMPORTED_MODULE_10__["default"], assets_fonts_MuseoSansRounded_700_ttf__WEBPACK_IMPORTED_MODULE_6__["default"], assets_fonts_MuseoSansRounded_900_woff__WEBPACK_IMPORTED_MODULE_11__["default"], assets_fonts_MuseoSansRounded_900_ttf__WEBPACK_IMPORTED_MODULE_7__["default"]],
      __self: this
    }, `@font-face{font-family:'Museo Sans';src:url(${assets_fonts_MuseoSansRounded_500_woff__WEBPACK_IMPORTED_MODULE_9__["default"]}) format('woff'),url(${assets_fonts_MuseoSansRounded_500_ttf__WEBPACK_IMPORTED_MODULE_5__["default"]}) format('truetype');font-weight:300;font-style:normal;}@font-face{font-family:'Museo Sans';src:url(${assets_fonts_MuseoSansRounded_300_woff__WEBPACK_IMPORTED_MODULE_8__["default"]}) format('woff'),url(${assets_fonts_MuseoSansRounded_300_ttf__WEBPACK_IMPORTED_MODULE_4__["default"]}) format('truetype');font-weight:500;font-style:normal;}@font-face{font-family:'Museo Sans';src:url(${assets_fonts_MuseoSansRounded_700_woff__WEBPACK_IMPORTED_MODULE_10__["default"]}) format('woff'),url(${assets_fonts_MuseoSansRounded_700_ttf__WEBPACK_IMPORTED_MODULE_6__["default"]}) format('truetype');font-weight:700;font-style:normal;}@font-face{font-family:'Museo Sans';src:url(${assets_fonts_MuseoSansRounded_900_woff__WEBPACK_IMPORTED_MODULE_11__["default"]}) format('woff'),url(${assets_fonts_MuseoSansRounded_900_ttf__WEBPACK_IMPORTED_MODULE_7__["default"]}) format('truetype');font-weight:900;font-style:normal;}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nYWJyaWVsZG9zc2FudG9zL0Rlc2t0b3AvY2hlY2tvdXQtanVzdGZpdCAoMSkvcGFnZXMvX2RvY3VtZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBFc0IsQUFJd0MsQUFNQSxBQU1BLEFBTUEseUJBakJrRixBQU1BLEFBTUEsQUFNQSwwR0FqQjNGLEFBTUEsQUFNQSxBQU1BLGdCQWpCRSxBQU1BLEFBTUEsQUFNQSxrQkFqQnBCLEFBTUEsQUFNQSxBQU1BIiwiZmlsZSI6Ii9Vc2Vycy9nYWJyaWVsZG9zc2FudG9zL0Rlc2t0b3AvY2hlY2tvdXQtanVzdGZpdCAoMSkvcGFnZXMvX2RvY3VtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IERvY3VtZW50LCB7IEhlYWQsIE1haW4sIE5leHRTY3JpcHQgfSBmcm9tIFwibmV4dC9kb2N1bWVudFwiO1xuaW1wb3J0IHsgU2VydmVyU3R5bGVTaGVldHMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL3N0eWxlc1wiO1xuXG5cbmltcG9ydCBNdXNlb1NhbnNMaWdodCBmcm9tIFwiYXNzZXRzL2ZvbnRzL011c2VvU2Fuc1JvdW5kZWQtMzAwLnR0ZlwiO1xuaW1wb3J0IE11c2VvU2Fuc1JlZ3VsYXIgZnJvbSBcImFzc2V0cy9mb250cy9NdXNlb1NhbnNSb3VuZGVkLTUwMC50dGZcIjtcbmltcG9ydCBNdXNlb1NhbnNCb2xkIGZyb20gXCJhc3NldHMvZm9udHMvTXVzZW9TYW5zUm91bmRlZC03MDAudHRmXCI7XG5pbXBvcnQgTXVzZW9TYW5zRXh0cmFCb2xkIGZyb20gXCJhc3NldHMvZm9udHMvTXVzZW9TYW5zUm91bmRlZC05MDAudHRmXCI7XG5cbmltcG9ydCBNdXNlb1NhbnNMaWdodDIgZnJvbSBcImFzc2V0cy9mb250cy9NdXNlb1NhbnNSb3VuZGVkLTMwMC53b2ZmXCI7XG5pbXBvcnQgTXVzZW9TYW5zUmVndWxhcjIgZnJvbSBcImFzc2V0cy9mb250cy9NdXNlb1NhbnNSb3VuZGVkLTUwMC53b2ZmXCI7XG5pbXBvcnQgTXVzZW9TYW5zQm9sZDIgZnJvbSBcImFzc2V0cy9mb250cy9NdXNlb1NhbnNSb3VuZGVkLTcwMC53b2ZmXCI7XG5pbXBvcnQgTXVzZW9TYW5zRXh0cmFCb2xkMiBmcm9tIFwiYXNzZXRzL2ZvbnRzL011c2VvU2Fuc1JvdW5kZWQtOTAwLndvZmZcIjtcblxuXG5cbmNsYXNzIE15RG9jdW1lbnQgZXh0ZW5kcyBEb2N1bWVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGh0bWwgbGFuZz1cImVuXCI+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XG4gICAgICAgICAgPG1ldGFcbiAgICAgICAgICAgIG5hbWU9XCJ2aWV3cG9ydFwiXG4gICAgICAgICAgICBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEsIHNocmluay10by1maXQ9bm9cIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPG1ldGEgbmFtZT1cInRoZW1lLWNvbG9yXCIgY29udGVudD1cIiMwMDAwMDBcIiAvPlxuICAgICAgICAgIDxsaW5rIHJlbD1cInNob3J0Y3V0IGljb25cIiBocmVmPXtyZXF1aXJlKFwiYXNzZXRzL2ltZy9mYXZpY29uLnBuZ1wiKX0gLz5cbiAgICAgICAgICA8bGlua1xuICAgICAgICAgICAgcmVsPVwiYXBwbGUtdG91Y2gtaWNvblwiXG4gICAgICAgICAgICBzaXplcz1cIjc2eDc2XCJcbiAgICAgICAgICAgIGhyZWY9e3JlcXVpcmUoXCJhc3NldHMvaW1nL2FwcGxlLWljb24ucG5nXCIpfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgey8qIEZvbnRzIGFuZCBpY29ucyAqL31cbiAgICAgICAgICA8bGlua1xuICAgICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgICB0eXBlPVwidGV4dC9jc3NcIlxuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG86MzAwLDQwMCw1MDAsNzAwfFJvYm90bytTbGFiOjQwMCw3MDB8TWF0ZXJpYWwrSWNvbnNcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGxpbmtcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3VzZS5mb250YXdlc29tZS5jb20vcmVsZWFzZXMvdjUuMC4xMC9jc3MvYWxsLmNzc1wiXG4gICAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgICAvPlxuICAgICAgICAgICAgXG5cbiAgICAgICAgICA8c3R5bGUgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IGBcbiAgICAgICAgICAgICAgQGZvbnQtZmFjZSB7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdNdXNlbyBTYW5zJztcbiAgICAgICAgICAgICAgICBzcmM6IHVybChcImh0dHBzOi8vanVzdGZpdC5jb20uYnIvd3AtY29udGVudC90aGVtZXMvbWFydHlfd3AvYXNzZXRzL2ZvbnRzL011c2VvU2Fuc1JvdW5kZWQtMzAwLndvZmZcIikgZm9ybWF0KCd3b2ZmJyksIHVybChcImh0dHBzOi8vanVzdGZpdC5jb20uYnIvd3AtY29udGVudC90aGVtZXMvbWFydHlfd3AvYXNzZXRzL2ZvbnRzL011c2VvU2Fuc1JvdW5kZWQtMzAwLnR0ZlwiKSBmb3JtYXQoJ3RydWV0eXBlJyk7ICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ011c2VvIFNhbnMnO1xuICAgICAgICAgICAgICAgIHNyYzogdXJsKFwiaHR0cHM6Ly9qdXN0Zml0LmNvbS5ici93cC1jb250ZW50L3RoZW1lcy9tYXJ0eV93cC9hc3NldHMvZm9udHMvTXVzZW9TYW5zUm91bmRlZC01MDAud29mZlwiKSBmb3JtYXQoJ3dvZmYnKSwgdXJsKFwiaHR0cHM6Ly9qdXN0Zml0LmNvbS5ici93cC1jb250ZW50L3RoZW1lcy9tYXJ0eV93cC9hc3NldHMvZm9udHMvTXVzZW9TYW5zUm91bmRlZC01MDAudHRmXCIpIGZvcm1hdCgndHJ1ZXR5cGUnKTsgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICAgICAgICB9ICAgICAgICAgICAgXG4gICAgICAgICAgICAgIEBmb250LWZhY2Uge1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTXVzZW8gU2Fucyc7XG4gICAgICAgICAgICAgICAgc3JjOiB1cmwoXCJodHRwczovL2p1c3RmaXQuY29tLmJyL3dwLWNvbnRlbnQvdGhlbWVzL21hcnR5X3dwL2Fzc2V0cy9mb250cy9NdXNlb1NhbnNSb3VuZGVkLTcwMC53b2ZmXCIpIGZvcm1hdCgnd29mZicpLCB1cmwoXCJodHRwczovL2p1c3RmaXQuY29tLmJyL3dwLWNvbnRlbnQvdGhlbWVzL21hcnR5X3dwL2Fzc2V0cy9mb250cy9NdXNlb1NhbnNSb3VuZGVkLTcwMC50dGZcIikgZm9ybWF0KCd0cnVldHlwZScpO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIEBmb250LWZhY2Uge1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTXVzZW8gU2Fucyc7XG4gICAgICAgICAgICAgICAgc3JjOiB1cmwoXCJodHRwczovL2p1c3RmaXQuY29tLmJyL3dwLWNvbnRlbnQvdGhlbWVzL21hcnR5X3dwL2Fzc2V0cy9mb250cy9NdXNlb1NhbnNSb3VuZGVkLTkwMC53b2ZmXCIpIGZvcm1hdCgnd29mZicpLCB1cmwoXCJodHRwczovL2p1c3RmaXQuY29tLmJyL3dwLWNvbnRlbnQvdGhlbWVzL21hcnR5X3dwL2Fzc2V0cy9mb250cy9NdXNlb1NhbnNSb3VuZGVkLTkwMC50dGZcIikgZm9ybWF0KCd0cnVldHlwZScpO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICBgfX0+PC9zdHlsZT5cblxuICAgICAgICAgIDxzdHlsZSBqc3g+e2BcblxuICAgICAgICAgICAgQGZvbnQtZmFjZSB7XG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTXVzZW8gU2Fucyc7XG4gICAgICAgICAgICAgIHNyYzogdXJsKCR7TXVzZW9TYW5zUmVndWxhcjJ9KSBmb3JtYXQoJ3dvZmYnKSwgdXJsKCR7TXVzZW9TYW5zUmVndWxhcn0pIGZvcm1hdCgndHJ1ZXR5cGUnKTsgIFxuICAgICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdNdXNlbyBTYW5zJztcbiAgICAgICAgICAgICAgc3JjOiB1cmwoJHtNdXNlb1NhbnNMaWdodDJ9KSBmb3JtYXQoJ3dvZmYnKSwgdXJsKCR7TXVzZW9TYW5zTGlnaHR9KSBmb3JtYXQoJ3RydWV0eXBlJyk7ICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICAgICAgfSAgICAgICAgICAgIFxuICAgICAgICAgICAgQGZvbnQtZmFjZSB7XG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTXVzZW8gU2Fucyc7XG4gICAgICAgICAgICAgIHNyYzogdXJsKCR7TXVzZW9TYW5zQm9sZDJ9KSBmb3JtYXQoJ3dvZmYnKSwgdXJsKCR7TXVzZW9TYW5zQm9sZH0pIGZvcm1hdCgndHJ1ZXR5cGUnKTtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgQGZvbnQtZmFjZSB7XG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTXVzZW8gU2Fucyc7XG4gICAgICAgICAgICAgIHNyYzogdXJsKCR7TXVzZW9TYW5zRXh0cmFCb2xkMn0pIGZvcm1hdCgnd29mZicpLCB1cmwoJHtNdXNlb1NhbnNFeHRyYUJvbGR9KSBmb3JtYXQoJ3RydWV0eXBlJyk7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgYH1cbiAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICAgICAgICAgICAgICBcblxuICAgICAgICAgIFxuXG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAgPGJvZHk+XG5cbiAgICAgICAgICA8ZGl2IGlkPVwicGFnZS10cmFuc2l0aW9uXCI+PC9kaXY+XG4gICAgICAgICAgPE1haW4gLz5cbiAgICAgICAgICA8TmV4dFNjcmlwdCAvPlxuICAgICAgICA8L2JvZHk+XG4gICAgICA8L2h0bWw+XG4gICAgKTtcbiAgfVxufVxuXG5NeURvY3VtZW50LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGN0eCA9PiB7XG4gIC8vIFJlc29sdXRpb24gb3JkZXJcbiAgLy9cbiAgLy8gT24gdGhlIHNlcnZlcjpcbiAgLy8gMS4gYXBwLmdldEluaXRpYWxQcm9wc1xuICAvLyAyLiBwYWdlLmdldEluaXRpYWxQcm9wc1xuICAvLyAzLiBkb2N1bWVudC5nZXRJbml0aWFsUHJvcHNcbiAgLy8gNC4gYXBwLnJlbmRlclxuICAvLyA1LiBwYWdlLnJlbmRlclxuICAvLyA2LiBkb2N1bWVudC5yZW5kZXJcbiAgLy9cbiAgLy8gT24gdGhlIHNlcnZlciB3aXRoIGVycm9yOlxuICAvLyAxLiBkb2N1bWVudC5nZXRJbml0aWFsUHJvcHNcbiAgLy8gMi4gYXBwLnJlbmRlclxuICAvLyAzLiBwYWdlLnJlbmRlclxuICAvLyA0LiBkb2N1bWVudC5yZW5kZXJcbiAgLy9cbiAgLy8gT24gdGhlIGNsaWVudFxuICAvLyAxLiBhcHAuZ2V0SW5pdGlhbFByb3BzXG4gIC8vIDIuIHBhZ2UuZ2V0SW5pdGlhbFByb3BzXG4gIC8vIDMuIGFwcC5yZW5kZXJcbiAgLy8gNC4gcGFnZS5yZW5kZXJcblxuICAvLyBSZW5kZXIgYXBwIGFuZCBwYWdlIGFuZCBnZXQgdGhlIGNvbnRleHQgb2YgdGhlIHBhZ2Ugd2l0aCBjb2xsZWN0ZWQgc2lkZSBlZmZlY3RzLlxuICBjb25zdCBzaGVldHMgPSBuZXcgU2VydmVyU3R5bGVTaGVldHMoKTtcbiAgY29uc3Qgb3JpZ2luYWxSZW5kZXJQYWdlID0gY3R4LnJlbmRlclBhZ2U7XG5cbiAgY3R4LnJlbmRlclBhZ2UgPSAoKSA9PlxuICAgIG9yaWdpbmFsUmVuZGVyUGFnZSh7XG4gICAgICBlbmhhbmNlQXBwOiBBcHAgPT4gcHJvcHMgPT4gc2hlZXRzLmNvbGxlY3QoPEFwcCB7Li4ucHJvcHN9IC8+KVxuICAgIH0pO1xuXG4gIGNvbnN0IGluaXRpYWxQcm9wcyA9IGF3YWl0IERvY3VtZW50LmdldEluaXRpYWxQcm9wcyhjdHgpO1xuXG4gIHJldHVybiB7XG4gICAgLi4uaW5pdGlhbFByb3BzLFxuICAgIC8vIFN0eWxlcyBmcmFnbWVudCBpcyByZW5kZXJlZCBhZnRlciB0aGUgYXBwIGFuZCBwYWdlIHJlbmRlcmluZyBmaW5pc2guXG4gICAgc3R5bGVzOiBbXG4gICAgICA8UmVhY3QuRnJhZ21lbnQga2V5PVwic3R5bGVzXCI+XG4gICAgICAgIHtpbml0aWFsUHJvcHMuc3R5bGVzfVxuICAgICAgICB7c2hlZXRzLmdldFN0eWxlRWxlbWVudCgpfVxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICBdXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNeURvY3VtZW50O1xuIl19 */
/*@ sourceURL=/Users/gabrieldossantos/Desktop/checkout-justfit (1)/pages/_document.js */`)), __jsx("body", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 9
      }
    }, __jsx("div", {
      id: "page-transition",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 11
      }
    }), __jsx(next_document__WEBPACK_IMPORTED_MODULE_2__["Main"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 11
      }
    }), __jsx(next_document__WEBPACK_IMPORTED_MODULE_2__["NextScript"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 11
      }
    })));
  }

}

MyDocument.getInitialProps = async ctx => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render
  // Render app and page and get the context of the page with collected side effects.
  const sheets = new _material_ui_styles__WEBPACK_IMPORTED_MODULE_3__["ServerStyleSheets"]();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () => originalRenderPage({
    enhanceApp: App => props => sheets.collect(__jsx(App, _extends({}, props, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 50
      }
    })))
  });

  const initialProps = await next_document__WEBPACK_IMPORTED_MODULE_2___default.a.getInitialProps(ctx);
  return _objectSpread({}, initialProps, {
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [__jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
      key: "styles",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159,
        columnNumber: 7
      }
    }, initialProps.styles, sheets.getStyleElement())]
  });
};

/* harmony default export */ __webpack_exports__["default"] = (MyDocument);

/***/ }),

/***/ 1:
/*!*********************************************!*\
  !*** multi private-next-pages/_document.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_document.js */"./pages/_document.js");


/***/ }),

/***/ "@material-ui/styles":
/*!**************************************!*\
  !*** external "@material-ui/styles" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/styles");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/server":
/*!************************************!*\
  !*** external "styled-jsx/server" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/server");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=_document.js.map