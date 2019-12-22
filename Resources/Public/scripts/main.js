/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Resources/Private/Scripts/main.js":
/*!*******************************************!*\
  !*** ./Resources/Private/Scripts/main.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var initializeDataToggle = function initializeDataToggle() {\n  var dataToggles = document.querySelectorAll('[data-toggle]');\n  if (!dataToggles) return;\n  dataToggles.forEach(function (dataToggle) {\n    dataToggle.addEventListener('click', function () {\n      var target = document.querySelector(\"[data-identifier=\".concat(dataToggle.dataset.toggle, \"]\"));\n      if (!target) return;\n      target.classList.toggle('is-active');\n    });\n  });\n};\n\nvar initializeDataClose = function initializeDataClose() {\n  var dataClosers = document.querySelectorAll('[data-close]');\n  if (!dataClosers) return;\n  dataClosers.forEach(function (dataCloser) {\n    dataCloser.addEventListener('click', function () {\n      dataCloser.parentElement.remove();\n    });\n  });\n};\n\nvar initializeDataImages = function initializeDataImages() {\n  var dataImages = document.querySelectorAll('[data-image]');\n  if (!dataImages) return;\n  dataImages.forEach(function (dataImage) {\n    dataImage.style.backgroundImage = \"url(\".concat(dataImage.dataset.image, \")\");\n  });\n};\n\ninitializeDataImages();\ninitializeDataToggle();\ninitializeDataClose();\n\n(function (d, s, id) {\n  var js,\n      fjs = d.getElementsByTagName(s)[0];\n  if (d.getElementById(id)) return;\n  js = d.createElement(s);\n  js.id = id;\n  js.src = \"https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0\";\n  fjs.parentNode.insertBefore(js, fjs);\n})(document, 'script', 'facebook-jssdk');\n\nif (document.querySelector('#disqus_thread') && document.querySelector('#disqus_thread').dataset.identifier && document.querySelector('#disqus_thread').dataset.embed) {\n  var disqus_config = function disqus_config() {\n    this.page.url = document.querySelector('#disqus_thread').dataset.uri;\n    this.page.identifier = document.querySelector('#disqus_thread').dataset.identifier;\n  };\n\n  (function () {\n    var d = document,\n        s = d.createElement('script');\n    s.src = document.querySelector('#disqus_thread').dataset.embed;\n    s.setAttribute('data-timestamp', +new Date());\n    (d.head || d.body).appendChild(s);\n  })();\n}\n\n//# sourceURL=webpack:///./Resources/Private/Scripts/main.js?");

/***/ }),

/***/ "./Resources/Private/Styles/main.scss":
/*!********************************************!*\
  !*** ./Resources/Private/Styles/main.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./Resources/Private/Styles/main.scss?");

/***/ }),

/***/ 0:
/*!**************************************************************************************!*\
  !*** multi ./Resources/Private/Scripts/main.js ./Resources/Private/Styles/main.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! /Users/henjohoeksma/Projects/sites/henjohoeksma.nl/Packages/Theme/Theme.Blog.Plain/Resources/Private/Scripts/main.js */\"./Resources/Private/Scripts/main.js\");\nmodule.exports = __webpack_require__(/*! /Users/henjohoeksma/Projects/sites/henjohoeksma.nl/Packages/Theme/Theme.Blog.Plain/Resources/Private/Styles/main.scss */\"./Resources/Private/Styles/main.scss\");\n\n\n//# sourceURL=webpack:///multi_./Resources/Private/Scripts/main.js_./Resources/Private/Styles/main.scss?");

/***/ })

/******/ });