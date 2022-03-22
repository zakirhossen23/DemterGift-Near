"use strict";
self["webpackHotUpdatedemeter"]("/index",{

/***/ "./src/components/App.tsx":
/*!********************************!*\
  !*** ./src/components/App.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.a(module, async function (__webpack_handle_async_dependencies__) {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "App": function() { return /* binding */ App; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/provider.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _components_layout_Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/layout/Footer */ "./src/components/layout/Footer/index.tsx");
/* harmony import */ var _components_layout_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/layout/Header */ "./src/components/layout/Header/index.tsx");
/* harmony import */ var _lang_en__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lang/en */ "./src/lang/en.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils */ "./src/utils/index.ts");
/* harmony import */ var _pages_Home__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/pages/Home */ "./src/pages/Home/index.tsx");
/* harmony import */ var _pages_CreateEvents__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/pages/CreateEvents */ "./src/pages/CreateEvents/index.tsx");
/* harmony import */ var _pages_donation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/pages/donation */ "./src/pages/donation/index.jsx");
/* harmony import */ var _modals_login_main__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/modals/login/main */ "./src/modals/login/main.jsx");
/* harmony import */ var _pages_donation_auction__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/pages/donation/auction */ "./src/pages/donation/auction/index.jsx");
/* harmony import */ var _pages_Contact__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/pages/Contact */ "./src/pages/Contact/index.jsx");
/* harmony import */ var _pages_lottery__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/pages/lottery */ "./src/pages/lottery/index.jsx");
/* harmony import */ var _App_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./App.scss */ "./src/components/App.scss");
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./serviceWorker */ "./src/components/serviceWorker.ts");
/* harmony import */ var _near_contracts_contract__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @/near-contracts/contract */ "./src/near-contracts/contract.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ "./node_modules/react-toastify/dist/ReactToastify.css");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pages_Contact__WEBPACK_IMPORTED_MODULE_10__]);
_pages_Contact__WEBPACK_IMPORTED_MODULE_10__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];
















 //Toast



function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_17__["default"], {
    key: "intl",
    locale: "en",
    defaultLocale: "en",
    messages: _lang_en__WEBPACK_IMPORTED_MODULE_3__["default"],
    onError: _utils__WEBPACK_IMPORTED_MODULE_4__.noop
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_18__.BrowserRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_toastify__WEBPACK_IMPORTED_MODULE_15__.ToastContainer, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    newestOnTop: false,
    pauseOnFocusLoss: true,
    draggable: true,
    pauseOnHover: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_layout_Header__WEBPACK_IMPORTED_MODULE_2__.Header, {
    key: "header"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("main", {
    className: "main"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_19__.Switch, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_19__.Route, {
    exact: true,
    path: "/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_Home__WEBPACK_IMPORTED_MODULE_5__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_19__.Route, {
    exact: true,
    path: "/CreateEvents"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_CreateEvents__WEBPACK_IMPORTED_MODULE_6__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_19__.Route, {
    exact: true,
    path: "/login"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_modals_login_main__WEBPACK_IMPORTED_MODULE_8__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_19__.Route, {
    exact: true,
    path: "/donation"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_donation__WEBPACK_IMPORTED_MODULE_7__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_19__.Route, {
    exact: true,
    path: "/donation/auction"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_donation_auction__WEBPACK_IMPORTED_MODULE_9__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_19__.Route, {
    exact: true,
    path: "/lottery"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_lottery__WEBPACK_IMPORTED_MODULE_11__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_19__.Route, {
    exact: true,
    path: "/contact"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_Contact__WEBPACK_IMPORTED_MODULE_10__["default"], null)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_layout_Footer__WEBPACK_IMPORTED_MODULE_1__.Footer, {
    key: "footer"
  }))));
  _serviceWorker__WEBPACK_IMPORTED_MODULE_13__.unregister();
}
});

/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.a(module, async function (__webpack_handle_async_dependencies__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/App */ "./src/components/App.tsx");
/* harmony import */ var _near_contracts_contract__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/near-contracts/contract */ "./src/near-contracts/contract.js");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_App__WEBPACK_IMPORTED_MODULE_2__]);
_components_App__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];




react_dom__WEBPACK_IMPORTED_MODULE_1__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.StrictMode, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_App__WEBPACK_IMPORTED_MODULE_2__.App, null)), document.getElementById('root'));
});

/***/ }),

/***/ "./src/pages/Contact/index.jsx":
/*!*************************************!*\
  !*** ./src/pages/Contact/index.jsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.a(module, async function (__webpack_handle_async_dependencies__) {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Contact; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/slicedToArray */ "./node_modules/@babel/runtime-corejs3/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Row */ "./node_modules/react-bootstrap/esm/Row.js");
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/Col */ "./node_modules/react-bootstrap/esm/Col.js");
/* harmony import */ var _components_components_UseFormInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/components/UseFormInput */ "./src/components/components/UseFormInput.jsx");
/* harmony import */ var https_stackpath_bootstrapcdn_com_font_awesome_4_7_0_css_font_awesome_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css */ "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css");
/* harmony import */ var https_preview_colorlib_com_theme_bootstrap_contact_form_04_css_A_style_css_pagespeed_cf_w2Ohk7GWHt_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! https://preview.colorlib.com/theme/bootstrap/contact-form-04/css/A.style.css.pagespeed.cf.w2Ohk7GWHt.css */ "https://preview.colorlib.com/theme/bootstrap/contact-form-04/css/A.style.css.pagespeed.cf.w2Ohk7GWHt.css");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([https_preview_colorlib_com_theme_bootstrap_contact_form_04_css_A_style_css_pagespeed_cf_w2Ohk7GWHt_css__WEBPACK_IMPORTED_MODULE_4__, https_stackpath_bootstrapcdn_com_font_awesome_4_7_0_css_font_awesome_min_css__WEBPACK_IMPORTED_MODULE_3__]);
([https_preview_colorlib_com_theme_bootstrap_contact_form_04_css_A_style_css_pagespeed_cf_w2Ohk7GWHt_css__WEBPACK_IMPORTED_MODULE_4__, https_stackpath_bootstrapcdn_com_font_awesome_4_7_0_css_font_awesome_min_css__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);








function Contact() {
  var _UseFormInput = (0,_components_components_UseFormInput__WEBPACK_IMPORTED_MODULE_2__["default"])({
    defaultValue: "",
    type: 'text',
    placeholder: 'Name',
    id: 'name'
  }),
      _UseFormInput2 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_UseFormInput, 2),
      Name = _UseFormInput2[0],
      NameInput = _UseFormInput2[1];

  var _UseFormInput3 = (0,_components_components_UseFormInput__WEBPACK_IMPORTED_MODULE_2__["default"])({
    defaultValue: "",
    type: 'text',
    placeholder: 'Email',
    id: 'email'
  }),
      _UseFormInput4 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_UseFormInput3, 2),
      Email = _UseFormInput4[0],
      EmailInput = _UseFormInput4[1];

  var _UseFormInput5 = (0,_components_components_UseFormInput__WEBPACK_IMPORTED_MODULE_2__["default"])({
    defaultValue: "",
    type: 'text',
    placeholder: 'Subject',
    id: 'subject'
  }),
      _UseFormInput6 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_UseFormInput5, 2),
      Subject = _UseFormInput6[0],
      SubjectInput = _UseFormInput6[1];

  var _UseFormInput7 = (0,_components_components_UseFormInput__WEBPACK_IMPORTED_MODULE_2__["default"])({
    defaultValue: "",
    type: 'text',
    placeholder: 'Message',
    id: 'message'
  }),
      _UseFormInput8 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_UseFormInput7, 2),
      Message = _UseFormInput8[0],
      MessageInput = _UseFormInput8[1];

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_5__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_6__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "row justify-content-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "col-md-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "row no-gutters"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "col-md-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "contact-wrap w-100 p-lg-5 p-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("h3", {
    className: "mb-4"
  }, "Send us a message"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    id: "form-message-warning",
    className: "mb-4",
    style: {
      "display": "none"
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    id: "form-message-success",
    className: "mb-4",
    style: {
      "display": "none"
    }
  }, "Your message was sent, thank you!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("form", {
    method: "POST",
    id: "contactForm",
    name: "contactForm",
    className: "contactForm",
    novalidate: "novalidate"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "col-md-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("input", {
    type: "text",
    className: "form-control error",
    name: "name",
    id: "name",
    placeholder: "Name",
    "aria-invalid": "true"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("label", {
    id: "name-error",
    className: "error",
    for: "name"
  }, "Please enter your name"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "col-md-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("input", {
    type: "email",
    className: "form-control error",
    name: "email",
    id: "email",
    placeholder: "Email",
    "aria-invalid": "true"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("label", {
    id: "email-error",
    className: "error",
    for: "email"
  }, "Please enter a valid email address"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "col-md-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("input", {
    type: "text",
    className: "form-control valid",
    name: "subject",
    id: "subject",
    placeholder: "Subject",
    "aria-invalid": "false"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("label", {
    id: "subject-error",
    className: "error",
    for: "subject",
    style: {
      "display": "none"
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "col-md-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("textarea", {
    name: "message",
    className: "form-control error",
    id: "message",
    cols: "30",
    rows: "6",
    placeholder: "Message",
    "aria-invalid": "true"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("label", {
    id: "message-error",
    className: "error",
    for: "message"
  }, "Please enter a message"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "col-md-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("input", {
    type: "submit",
    value: "Send Message",
    className: "btn btn-primary"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "submitting",
    style: {
      "display": "none"
    }
  }, "Submitting..."))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "col-md-6 d-flex align-items-stretch"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "info-wrap w-100 p-lg-5 p-4 img"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("h3", null, "Contact us"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", {
    className: "mb-4"
  }, "We're open for any suggestion or just to have a chat"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "dbox w-100 d-flex align-items-start"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "icon d-flex align-items-center justify-content-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", {
    className: "fa fa-map-marker"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "text pl-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", null, "Address:"), " 198 West 21th Street, Suite 721 New York NY 10016"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "dbox w-100 d-flex align-items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "icon d-flex align-items-center justify-content-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", {
    className: "fa fa-phone"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "text pl-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", null, "Phone:"), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("a", {
    href: "tel://1234567920"
  }, "+ 1235 2355 98")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "dbox w-100 d-flex align-items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "icon d-flex align-items-center justify-content-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", {
    className: "fa fa-paper-plane"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "text pl-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", null, "Email:"), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("a", {
    href: "mailto:info@yoursite.com"
  }, "info@yoursite.com")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "dbox w-100 d-flex align-items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "icon d-flex align-items-center justify-content-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", {
    className: "fa fa-globe"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "text pl-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", null, "Website"), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("a", {
    href: "https://preview.colorlib.com/theme/bootstrap/contact-form-04/#"
  }, "yoursite.com")))))))))))));
}
});

/***/ }),

/***/ "https://preview.colorlib.com/theme/bootstrap/contact-form-04/css/A.style.css.pagespeed.cf.w2Ohk7GWHt.css":
false,

/***/ "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css":
false

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/async module */
/******/ !function() {
/******/ 	var webpackThen = typeof Symbol === "function" ? Symbol("webpack then") : "__webpack_then__";
/******/ 	var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 	var completeQueue = function(queue) {
/******/ 		if(queue) {
/******/ 			queue.forEach(function(fn) { fn.r--; });
/******/ 			queue.forEach(function(fn) { fn.r-- ? fn.r++ : fn(); });
/******/ 		}
/******/ 	}
/******/ 	var completeFunction = function(fn) { !--fn.r && fn(); };
/******/ 	var queueFunction = function(queue, fn) { queue ? queue.push(fn) : completeFunction(fn); };
/******/ 	var wrapDeps = function(deps) { return deps.map(function(dep) {
/******/ 		if(dep !== null && typeof dep === "object") {
/******/ 			if(dep[webpackThen]) return dep;
/******/ 			if(dep.then) {
/******/ 				var queue = [];
/******/ 				dep.then(function(r) {
/******/ 					obj[webpackExports] = r;
/******/ 					completeQueue(queue);
/******/ 					queue = 0;
/******/ 				});
/******/ 				var obj = {};
/******/ 											obj[webpackThen] = function(fn, reject) { queueFunction(queue, fn), dep.catch(reject); };
/******/ 				return obj;
/******/ 			}
/******/ 		}
/******/ 		var ret = {};
/******/ 							ret[webpackThen] = function(fn) { completeFunction(fn); };
/******/ 							ret[webpackExports] = dep;
/******/ 							return ret;
/******/ 	}); };
/******/ 	__webpack_require__.a = function(module, body, hasAwait) {
/******/ 		var queue = hasAwait && [];
/******/ 		var exports = module.exports;
/******/ 		var currentDeps;
/******/ 		var outerResolve;
/******/ 		var reject;
/******/ 		var isEvaluating = true;
/******/ 		var nested = false;
/******/ 		var whenAll = function(deps, onResolve, onReject) {
/******/ 			if (nested) return;
/******/ 			nested = true;
/******/ 			onResolve.r += deps.length;
/******/ 			deps.map(function(dep, i) { dep[webpackThen](onResolve, onReject); });
/******/ 			nested = false;
/******/ 		};
/******/ 		var promise = new Promise(function(resolve, rej) {
/******/ 			reject = rej;
/******/ 			outerResolve = function() { resolve(exports), completeQueue(queue), queue = 0; };
/******/ 		});
/******/ 		promise[webpackExports] = exports;
/******/ 		promise[webpackThen] = function(fn, rejectFn) {
/******/ 			if (isEvaluating) { return completeFunction(fn); }
/******/ 			if (currentDeps) whenAll(currentDeps, fn, rejectFn);
/******/ 			queueFunction(queue, fn);
/******/ 			promise.catch(rejectFn);
/******/ 		};
/******/ 		module.exports = promise;
/******/ 		body(function(deps) {
/******/ 			if(!deps) return outerResolve();
/******/ 			currentDeps = wrapDeps(deps);
/******/ 			var fn, result;
/******/ 			var promise = new Promise(function(resolve, reject) {
/******/ 				fn = function() { resolve(result = currentDeps.map(function(d) { return d[webpackExports]; })); };
/******/ 				fn.r = 0;
/******/ 				whenAll(currentDeps, fn, reject);
/******/ 			});
/******/ 			return fn.r ? promise : result;
/******/ 		}).then(outerResolve, reject);
/******/ 		isEvaluating = false;
/******/ 	};
/******/ }();
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "1383b1e899717a59897a"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2luZGV4LmQ3NmEyYjkwNjdkOGFjZWZmN2JkLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7Q0FFQTs7QUFFQTtBQUNBO0FBRU8sU0FBU21CLEdBQVQsR0FBNEI7QUFDL0Isc0JBQ0ksaURBQUMsbURBQUQ7QUFDSSxPQUFHLEVBQUMsTUFEUjtBQUVJLFVBQU0sRUFBQyxJQUZYO0FBR0ksaUJBQWEsRUFBQyxJQUhsQjtBQUlJLFlBQVEsRUFBRVgsZ0RBSmQ7QUFLSSxXQUFPLEVBQUVDLHdDQUFJQTtBQUxqQixrQkFPSSxpREFBQyw0REFBRCxxQkFDSTtBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNJLGlEQUFDLDJEQUFEO0FBQWdCLFlBQVEsRUFBQyxXQUF6QjtBQUFxQyxhQUFTLEVBQUUsSUFBaEQ7QUFBc0QsbUJBQWUsRUFBRSxLQUF2RTtBQUE4RSxlQUFXLEVBQUUsS0FBM0Y7QUFBbUcsb0JBQWdCLE1BQW5IO0FBQW9ILGFBQVMsTUFBN0g7QUFBOEgsZ0JBQVk7QUFBMUksSUFESixlQUVJLGlEQUFDLDZEQUFEO0FBQVEsT0FBRyxFQUFDO0FBQVosSUFGSixlQUdJO0FBQU0sYUFBUyxFQUFDO0FBQWhCLGtCQUNJLGlEQUFDLHFEQUFELHFCQUNJLGlEQUFDLG9EQUFEO0FBQU8sU0FBSyxNQUFaO0FBQWEsUUFBSSxFQUFDO0FBQWxCLGtCQUNJLGlEQUFDLG1EQUFELE9BREosQ0FESixlQUlJLGlEQUFDLG9EQUFEO0FBQU8sU0FBSyxNQUFaO0FBQWEsUUFBSSxFQUFDO0FBQWxCLGtCQUNJLGlEQUFDLDJEQUFELE9BREosQ0FKSixlQU9JLGlEQUFDLG9EQUFEO0FBQU8sU0FBSyxNQUFaO0FBQWEsUUFBSSxFQUFDO0FBQWxCLGtCQUNJLGlEQUFDLDBEQUFELE9B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LDhCQUE4Qix3Q0FBd0M7VUFDdEU7VUFDQTtVQUNBO1VBQ0E7VUFDQSw4QkFBOEI7VUFDOUIsRUFBRTtVQUNGO1VBQ0E7VUFDQSxzQkFBc0I7VUFDdEI7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQSxxQkFBcUIsK0NBQStDLDJCQUEyQjtVQUMvRjtVQUNBO1VBQ0EsR0FBRztVQUNIO1VBQ0EsRUFBRTtVQUNGO1VBQ0E7Ozs7O1VDckVBLHFDQUFxQyIsInNvdXJjZXMiOlsid2VicGFjazovL2RlbWV0ZXIvLi9zcmMvY29tcG9uZW50cy9BcHAudHN4Iiwid2VicGFjazovL2RlbWV0ZXIvLi9zcmMvaW5kZXgudHN4Iiwid2VicGFjazovL2RlbWV0ZXIvLi9zcmMvcGFnZXMvQ29udGFjdC9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vZGVtZXRlci93ZWJwYWNrL3J1bnRpbWUvYXN5bmMgbW9kdWxlIiwid2VicGFjazovL2RlbWV0ZXIvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBJbnRsUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1pbnRsJ1xyXG5pbXBvcnQge1xyXG4gICAgUmVkaXJlY3QsXHJcbiAgICBSb3V0ZSxcclxuICAgIEJyb3dzZXJSb3V0ZXIgYXMgUm91dGVyLFxyXG4gICAgU3dpdGNoLFxyXG59IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXHJcblxyXG5pbXBvcnQgeyBGb290ZXIgfSBmcm9tICdAL2NvbXBvbmVudHMvbGF5b3V0L0Zvb3RlcidcclxuaW1wb3J0IHsgSGVhZGVyIH0gZnJvbSAnQC9jb21wb25lbnRzL2xheW91dC9IZWFkZXInXHJcbmltcG9ydCBtZXNzYWdlcyBmcm9tICdAL2xhbmcvZW4nXHJcbmltcG9ydCB7IG5vb3AgfSBmcm9tICdAL3V0aWxzJ1xyXG5pbXBvcnQgeyBhcHBSb3V0ZXMgfSBmcm9tICdAL3JvdXRlcydcclxuaW1wb3J0IEhvbWUgZnJvbSAnQC9wYWdlcy9Ib21lJ1xyXG5pbXBvcnQgQ3JlYXRlRXZlbnRzIGZyb20gJ0AvcGFnZXMvQ3JlYXRlRXZlbnRzJ1xyXG5pbXBvcnQgRG9uYXRpb24gZnJvbSAnQC9wYWdlcy9kb25hdGlvbidcclxuaW1wb3J0IExvZ2luIGZyb20gJ0AvbW9kYWxzL2xvZ2luL21haW4nXHJcbmltcG9ydCBBdWN0aW9uIGZyb20gJ0AvcGFnZXMvZG9uYXRpb24vYXVjdGlvbidcclxuaW1wb3J0IENvbnRhY3QgZnJvbSAnQC9wYWdlcy9Db250YWN0J1xyXG5cclxuaW1wb3J0IExvdHRlcnkgZnJvbSAnQC9wYWdlcy9sb3R0ZXJ5J1xyXG5cclxuaW1wb3J0ICcuL0FwcC5zY3NzJ1xyXG5pbXBvcnQgKiBhcyBzZXJ2aWNlV29ya2VyIGZyb20gXCIuL3NlcnZpY2VXb3JrZXJcIjtcclxuaW1wb3J0ICdAL25lYXItY29udHJhY3RzL2NvbnRyYWN0JztcclxuLy9Ub2FzdFxyXG5cclxuaW1wb3J0IHsgVG9hc3RDb250YWluZXIsIHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xyXG5pbXBvcnQgJ3JlYWN0LXRvYXN0aWZ5L2Rpc3QvUmVhY3RUb2FzdGlmeS5jc3MnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEFwcCgpOiBKU1guRWxlbWVudCB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxJbnRsUHJvdmlkZXJcclxuICAgICAgICAgICAga2V5PVwiaW50bFwiXHJcbiAgICAgICAgICAgIGxvY2FsZT1cImVuXCJcclxuICAgICAgICAgICAgZGVmYXVsdExvY2FsZT1cImVuXCJcclxuICAgICAgICAgICAgbWVzc2FnZXM9e21lc3NhZ2VzfVxyXG4gICAgICAgICAgICBvbkVycm9yPXtub29wfVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPFJvdXRlcj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUb2FzdENvbnRhaW5lciBwb3NpdGlvbj1cInRvcC1yaWdodFwiIGF1dG9DbG9zZT17NTAwMH0gaGlkZVByb2dyZXNzQmFyPXtmYWxzZX0gbmV3ZXN0T25Ub3A9e2ZhbHNlfSAgcGF1c2VPbkZvY3VzTG9zcyBkcmFnZ2FibGUgcGF1c2VPbkhvdmVyLz5cclxuICAgICAgICAgICAgICAgICAgICA8SGVhZGVyIGtleT1cImhlYWRlclwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1haW4gY2xhc3NOYW1lPVwibWFpblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U3dpdGNoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEhvbWUgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUm91dGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD1cIi9DcmVhdGVFdmVudHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q3JlYXRlRXZlbnRzIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JvdXRlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9XCIvbG9naW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TG9naW4gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUm91dGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD1cIi9kb25hdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEb25hdGlvbiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3V0ZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPScvZG9uYXRpb24vYXVjdGlvbic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEF1Y3Rpb24gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUm91dGU+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9Jy9sb3R0ZXJ5Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TG90dGVyeSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3V0ZT4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9Jy9jb250YWN0Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29udGFjdCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3V0ZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Td2l0Y2g+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9tYWluPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb290ZXIga2V5PVwiZm9vdGVyXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L1JvdXRlcj5cclxuICAgICAgICA8L0ludGxQcm92aWRlcj5cclxuICAgIClcclxuXHJcblxyXG4gICAgc2VydmljZVdvcmtlci51bnJlZ2lzdGVyKCk7XHJcblxyXG59XHJcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgKiBhcyBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nXHJcblxyXG5pbXBvcnQgeyBBcHAgfSBmcm9tICdAL2NvbXBvbmVudHMvQXBwJ1xyXG5pbXBvcnQgJ0AvbmVhci1jb250cmFjdHMvY29udHJhY3QnO1xyXG5SZWFjdERPTS5yZW5kZXIoXHJcbiAgICA8UmVhY3QuU3RyaWN0TW9kZT5cclxuICAgICAgICA8QXBwIC8+XHJcbiAgICA8L1JlYWN0LlN0cmljdE1vZGU+LFxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKSxcclxuKVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJvdyBmcm9tICdyZWFjdC1ib290c3RyYXAvUm93JztcclxuaW1wb3J0IENvbCBmcm9tICdyZWFjdC1ib290c3RyYXAvQ29sJztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdyZWFjdC1ib290c3RyYXAvQnV0dG9uJztcclxuaW1wb3J0IFVzZUZvcm1JbnB1dCBmcm9tICdAL2NvbXBvbmVudHMvY29tcG9uZW50cy9Vc2VGb3JtSW5wdXQnO1xyXG5pbXBvcnQgJ2h0dHBzOi8vc3RhY2twYXRoLmJvb3RzdHJhcGNkbi5jb20vZm9udC1hd2Vzb21lLzQuNy4wL2Nzcy9mb250LWF3ZXNvbWUubWluLmNzcyc7XHJcbmltcG9ydCAnaHR0cHM6Ly9wcmV2aWV3LmNvbG9ybGliLmNvbS90aGVtZS9ib290c3RyYXAvY29udGFjdC1mb3JtLTA0L2Nzcy9BLnN0eWxlLmNzcy5wYWdlc3BlZWQuY2YudzJPaGs3R1dIdC5jc3MnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29udGFjdCgpIHtcclxuICAgIGNvbnN0IFtOYW1lLCBOYW1lSW5wdXRdID0gVXNlRm9ybUlucHV0KHtcclxuICAgICAgICBkZWZhdWx0VmFsdWU6IFwiXCIsXHJcbiAgICAgICAgdHlwZTogJ3RleHQnLFxyXG4gICAgICAgIHBsYWNlaG9sZGVyOiAnTmFtZScsXHJcbiAgICAgICAgaWQ6ICduYW1lJ1xyXG4gICAgfSk7XHJcbiAgICBjb25zdCBbRW1haWwsIEVtYWlsSW5wdXRdID0gVXNlRm9ybUlucHV0KHtcclxuICAgICAgICBkZWZhdWx0VmFsdWU6IFwiXCIsXHJcbiAgICAgICAgdHlwZTogJ3RleHQnLFxyXG4gICAgICAgIHBsYWNlaG9sZGVyOiAnRW1haWwnLFxyXG4gICAgICAgIGlkOiAnZW1haWwnXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IFtTdWJqZWN0LCBTdWJqZWN0SW5wdXRdID0gVXNlRm9ybUlucHV0KHtcclxuICAgICAgICBkZWZhdWx0VmFsdWU6IFwiXCIsXHJcbiAgICAgICAgdHlwZTogJ3RleHQnLFxyXG4gICAgICAgIHBsYWNlaG9sZGVyOiAnU3ViamVjdCcsXHJcbiAgICAgICAgaWQ6ICdzdWJqZWN0J1xyXG4gICAgfSk7XHJcbiAgICBjb25zdCBbTWVzc2FnZSwgTWVzc2FnZUlucHV0XSA9IFVzZUZvcm1JbnB1dCh7XHJcbiAgICAgICAgZGVmYXVsdFZhbHVlOiBcIlwiLFxyXG4gICAgICAgIHR5cGU6ICd0ZXh0JyxcclxuICAgICAgICBwbGFjZWhvbGRlcjogJ01lc3NhZ2UnLFxyXG4gICAgICAgIGlkOiAnbWVzc2FnZSdcclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICA8Q29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG5vLWd1dHRlcnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWN0LXdyYXAgdy0xMDAgcC1sZy01IHAtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJtYi00XCI+U2VuZCB1cyBhIG1lc3NhZ2U8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJmb3JtLW1lc3NhZ2Utd2FybmluZ1wiIGNsYXNzTmFtZT1cIm1iLTRcIiBzdHlsZT17e1wiZGlzcGxheVwiOiBcIm5vbmVcIn19PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJmb3JtLW1lc3NhZ2Utc3VjY2Vzc1wiIGNsYXNzTmFtZT1cIm1iLTRcIiAgc3R5bGU9e3tcImRpc3BsYXlcIjogXCJub25lXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWW91ciBtZXNzYWdlIHdhcyBzZW50LCB0aGFuayB5b3UhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gbWV0aG9kPVwiUE9TVFwiIGlkPVwiY29udGFjdEZvcm1cIiBuYW1lPVwiY29udGFjdEZvcm1cIiBjbGFzc05hbWU9XCJjb250YWN0Rm9ybVwiIG5vdmFsaWRhdGU9XCJub3ZhbGlkYXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgZXJyb3JcIiBuYW1lPVwibmFtZVwiIGlkPVwibmFtZVwiIHBsYWNlaG9sZGVyPVwiTmFtZVwiIGFyaWEtaW52YWxpZD1cInRydWVcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBpZD1cIm5hbWUtZXJyb3JcIiBjbGFzc05hbWU9XCJlcnJvclwiIGZvcj1cIm5hbWVcIiA+UGxlYXNlIGVudGVyIHlvdXIgbmFtZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgZXJyb3JcIiBuYW1lPVwiZW1haWxcIiBpZD1cImVtYWlsXCIgcGxhY2Vob2xkZXI9XCJFbWFpbFwiIGFyaWEtaW52YWxpZD1cInRydWVcIi8+PGxhYmVsIGlkPVwiZW1haWwtZXJyb3JcIiBjbGFzc05hbWU9XCJlcnJvclwiIGZvcj1cImVtYWlsXCIgPlBsZWFzZSBlbnRlciBhIHZhbGlkIGVtYWlsIGFkZHJlc3M8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgdmFsaWRcIiBuYW1lPVwic3ViamVjdFwiIGlkPVwic3ViamVjdFwiIHBsYWNlaG9sZGVyPVwiU3ViamVjdFwiIGFyaWEtaW52YWxpZD1cImZhbHNlXCIvPjxsYWJlbCBpZD1cInN1YmplY3QtZXJyb3JcIiBjbGFzc05hbWU9XCJlcnJvclwiIGZvcj1cInN1YmplY3RcIiAgc3R5bGU9e3tcImRpc3BsYXlcIjogXCJub25lXCJ9fT48L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgbmFtZT1cIm1lc3NhZ2VcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgZXJyb3JcIiBpZD1cIm1lc3NhZ2VcIiBjb2xzPVwiMzBcIiByb3dzPVwiNlwiIHBsYWNlaG9sZGVyPVwiTWVzc2FnZVwiIGFyaWEtaW52YWxpZD1cInRydWVcIj48L3RleHRhcmVhPjxsYWJlbCBpZD1cIm1lc3NhZ2UtZXJyb3JcIiBjbGFzc05hbWU9XCJlcnJvclwiIGZvcj1cIm1lc3NhZ2VcIiA+UGxlYXNlIGVudGVyIGEgbWVzc2FnZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJTZW5kIE1lc3NhZ2VcIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1Ym1pdHRpbmdcIiAgc3R5bGU9e3tcImRpc3BsYXlcIjogXCJub25lXCJ9fT5TdWJtaXR0aW5nLi4uPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02IGQtZmxleCBhbGlnbi1pdGVtcy1zdHJldGNoXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZm8td3JhcCB3LTEwMCBwLWxnLTUgcC00IGltZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5Db250YWN0IHVzPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYi00XCI+V2UncmUgb3BlbiBmb3IgYW55IHN1Z2dlc3Rpb24gb3IganVzdCB0byBoYXZlIGEgY2hhdDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRib3ggdy0xMDAgZC1mbGV4IGFsaWduLWl0ZW1zLXN0YXJ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbiBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZhIGZhLW1hcC1tYXJrZXJcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQgcGwtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+PHNwYW4+QWRkcmVzczo8L3NwYW4+IDE5OCBXZXN0IDIxdGggU3RyZWV0LCBTdWl0ZSA3MjEgTmV3IFlvcmsgTlkgMTAwMTY8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGJveCB3LTEwMCBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbiBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZhIGZhLXBob25lXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0IHBsLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPjxzcGFuPlBob25lOjwvc3Bhbj4gPGEgaHJlZj1cInRlbDovLzEyMzQ1Njc5MjBcIj4rIDEyMzUgMjM1NSA5ODwvYT48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGJveCB3LTEwMCBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbiBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZhIGZhLXBhcGVyLXBsYW5lXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0IHBsLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPjxzcGFuPkVtYWlsOjwvc3Bhbj4gPGEgaHJlZj1cIm1haWx0bzppbmZvQHlvdXJzaXRlLmNvbVwiPmluZm9AeW91cnNpdGUuY29tPC9hPjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYm94IHctMTAwIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmEgZmEtZ2xvYmVcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQgcGwtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+PHNwYW4+V2Vic2l0ZTwvc3Bhbj4gPGEgaHJlZj1cImh0dHBzOi8vcHJldmlldy5jb2xvcmxpYi5jb20vdGhlbWUvYm9vdHN0cmFwL2NvbnRhY3QtZm9ybS0wNC8jXCI+eW91cnNpdGUuY29tPC9hPjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn0iLCJ2YXIgd2VicGFja1RoZW4gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2woXCJ3ZWJwYWNrIHRoZW5cIikgOiBcIl9fd2VicGFja190aGVuX19cIjtcbnZhciB3ZWJwYWNrRXhwb3J0cyA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiA/IFN5bWJvbChcIndlYnBhY2sgZXhwb3J0c1wiKSA6IFwiX193ZWJwYWNrX2V4cG9ydHNfX1wiO1xudmFyIGNvbXBsZXRlUXVldWUgPSBmdW5jdGlvbihxdWV1ZSkge1xuXHRpZihxdWV1ZSkge1xuXHRcdHF1ZXVlLmZvckVhY2goZnVuY3Rpb24oZm4pIHsgZm4uci0tOyB9KTtcblx0XHRxdWV1ZS5mb3JFYWNoKGZ1bmN0aW9uKGZuKSB7IGZuLnItLSA/IGZuLnIrKyA6IGZuKCk7IH0pO1xuXHR9XG59XG52YXIgY29tcGxldGVGdW5jdGlvbiA9IGZ1bmN0aW9uKGZuKSB7ICEtLWZuLnIgJiYgZm4oKTsgfTtcbnZhciBxdWV1ZUZ1bmN0aW9uID0gZnVuY3Rpb24ocXVldWUsIGZuKSB7IHF1ZXVlID8gcXVldWUucHVzaChmbikgOiBjb21wbGV0ZUZ1bmN0aW9uKGZuKTsgfTtcbnZhciB3cmFwRGVwcyA9IGZ1bmN0aW9uKGRlcHMpIHsgcmV0dXJuIGRlcHMubWFwKGZ1bmN0aW9uKGRlcCkge1xuXHRpZihkZXAgIT09IG51bGwgJiYgdHlwZW9mIGRlcCA9PT0gXCJvYmplY3RcIikge1xuXHRcdGlmKGRlcFt3ZWJwYWNrVGhlbl0pIHJldHVybiBkZXA7XG5cdFx0aWYoZGVwLnRoZW4pIHtcblx0XHRcdHZhciBxdWV1ZSA9IFtdO1xuXHRcdFx0ZGVwLnRoZW4oZnVuY3Rpb24ocikge1xuXHRcdFx0XHRvYmpbd2VicGFja0V4cG9ydHNdID0gcjtcblx0XHRcdFx0Y29tcGxldGVRdWV1ZShxdWV1ZSk7XG5cdFx0XHRcdHF1ZXVlID0gMDtcblx0XHRcdH0pO1xuXHRcdFx0dmFyIG9iaiA9IHt9O1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRvYmpbd2VicGFja1RoZW5dID0gZnVuY3Rpb24oZm4sIHJlamVjdCkgeyBxdWV1ZUZ1bmN0aW9uKHF1ZXVlLCBmbiksIGRlcC5jYXRjaChyZWplY3QpOyB9O1xuXHRcdFx0cmV0dXJuIG9iajtcblx0XHR9XG5cdH1cblx0dmFyIHJldCA9IHt9O1xuXHRcdFx0XHRcdFx0cmV0W3dlYnBhY2tUaGVuXSA9IGZ1bmN0aW9uKGZuKSB7IGNvbXBsZXRlRnVuY3Rpb24oZm4pOyB9O1xuXHRcdFx0XHRcdFx0cmV0W3dlYnBhY2tFeHBvcnRzXSA9IGRlcDtcblx0XHRcdFx0XHRcdHJldHVybiByZXQ7XG59KTsgfTtcbl9fd2VicGFja19yZXF1aXJlX18uYSA9IGZ1bmN0aW9uKG1vZHVsZSwgYm9keSwgaGFzQXdhaXQpIHtcblx0dmFyIHF1ZXVlID0gaGFzQXdhaXQgJiYgW107XG5cdHZhciBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHM7XG5cdHZhciBjdXJyZW50RGVwcztcblx0dmFyIG91dGVyUmVzb2x2ZTtcblx0dmFyIHJlamVjdDtcblx0dmFyIGlzRXZhbHVhdGluZyA9IHRydWU7XG5cdHZhciBuZXN0ZWQgPSBmYWxzZTtcblx0dmFyIHdoZW5BbGwgPSBmdW5jdGlvbihkZXBzLCBvblJlc29sdmUsIG9uUmVqZWN0KSB7XG5cdFx0aWYgKG5lc3RlZCkgcmV0dXJuO1xuXHRcdG5lc3RlZCA9IHRydWU7XG5cdFx0b25SZXNvbHZlLnIgKz0gZGVwcy5sZW5ndGg7XG5cdFx0ZGVwcy5tYXAoZnVuY3Rpb24oZGVwLCBpKSB7IGRlcFt3ZWJwYWNrVGhlbl0ob25SZXNvbHZlLCBvblJlamVjdCk7IH0pO1xuXHRcdG5lc3RlZCA9IGZhbHNlO1xuXHR9O1xuXHR2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlaikge1xuXHRcdHJlamVjdCA9IHJlajtcblx0XHRvdXRlclJlc29sdmUgPSBmdW5jdGlvbigpIHsgcmVzb2x2ZShleHBvcnRzKSwgY29tcGxldGVRdWV1ZShxdWV1ZSksIHF1ZXVlID0gMDsgfTtcblx0fSk7XG5cdHByb21pc2Vbd2VicGFja0V4cG9ydHNdID0gZXhwb3J0cztcblx0cHJvbWlzZVt3ZWJwYWNrVGhlbl0gPSBmdW5jdGlvbihmbiwgcmVqZWN0Rm4pIHtcblx0XHRpZiAoaXNFdmFsdWF0aW5nKSB7IHJldHVybiBjb21wbGV0ZUZ1bmN0aW9uKGZuKTsgfVxuXHRcdGlmIChjdXJyZW50RGVwcykgd2hlbkFsbChjdXJyZW50RGVwcywgZm4sIHJlamVjdEZuKTtcblx0XHRxdWV1ZUZ1bmN0aW9uKHF1ZXVlLCBmbik7XG5cdFx0cHJvbWlzZS5jYXRjaChyZWplY3RGbik7XG5cdH07XG5cdG1vZHVsZS5leHBvcnRzID0gcHJvbWlzZTtcblx0Ym9keShmdW5jdGlvbihkZXBzKSB7XG5cdFx0aWYoIWRlcHMpIHJldHVybiBvdXRlclJlc29sdmUoKTtcblx0XHRjdXJyZW50RGVwcyA9IHdyYXBEZXBzKGRlcHMpO1xuXHRcdHZhciBmbiwgcmVzdWx0O1xuXHRcdHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG5cdFx0XHRmbiA9IGZ1bmN0aW9uKCkgeyByZXNvbHZlKHJlc3VsdCA9IGN1cnJlbnREZXBzLm1hcChmdW5jdGlvbihkKSB7IHJldHVybiBkW3dlYnBhY2tFeHBvcnRzXTsgfSkpOyB9O1xuXHRcdFx0Zm4uciA9IDA7XG5cdFx0XHR3aGVuQWxsKGN1cnJlbnREZXBzLCBmbiwgcmVqZWN0KTtcblx0XHR9KTtcblx0XHRyZXR1cm4gZm4uciA/IHByb21pc2UgOiByZXN1bHQ7XG5cdH0pLnRoZW4ob3V0ZXJSZXNvbHZlLCByZWplY3QpO1xuXHRpc0V2YWx1YXRpbmcgPSBmYWxzZTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gZnVuY3Rpb24oKSB7IHJldHVybiBcIjEzODNiMWU4OTk3MTdhNTk4OTdhXCI7IH0iXSwibmFtZXMiOlsiUmVhY3QiLCJJbnRsUHJvdmlkZXIiLCJSb3V0ZSIsIkJyb3dzZXJSb3V0ZXIiLCJSb3V0ZXIiLCJTd2l0Y2giLCJGb290ZXIiLCJIZWFkZXIiLCJtZXNzYWdlcyIsIm5vb3AiLCJIb21lIiwiQ3JlYXRlRXZlbnRzIiwiRG9uYXRpb24iLCJMb2dpbiIsIkF1Y3Rpb24iLCJDb250YWN0IiwiTG90dGVyeSIsInNlcnZpY2VXb3JrZXIiLCJUb2FzdENvbnRhaW5lciIsIkFwcCIsInVucmVnaXN0ZXIiLCJSZWFjdERPTSIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlJvdyIsIkNvbCIsIkJ1dHRvbiIsIlVzZUZvcm1JbnB1dCIsImRlZmF1bHRWYWx1ZSIsInR5cGUiLCJwbGFjZWhvbGRlciIsImlkIiwiTmFtZSIsIk5hbWVJbnB1dCIsIkVtYWlsIiwiRW1haWxJbnB1dCIsIlN1YmplY3QiLCJTdWJqZWN0SW5wdXQiLCJNZXNzYWdlIiwiTWVzc2FnZUlucHV0Il0sInNvdXJjZVJvb3QiOiIifQ==