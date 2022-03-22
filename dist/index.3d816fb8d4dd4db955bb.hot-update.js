"use strict";
self["webpackHotUpdatedemeter"]("/index",{

/***/ "./src/pages/Contact/index.jsx":
/*!*************************************!*\
  !*** ./src/pages/Contact/index.jsx ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Contact; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/slicedToArray */ "./node_modules/@babel/runtime-corejs3/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Row */ "./node_modules/react-bootstrap/esm/Row.js");
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Col */ "./node_modules/react-bootstrap/esm/Col.js");
/* harmony import */ var _components_components_UseFormInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/components/UseFormInput */ "./src/components/components/UseFormInput.jsx");






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

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_3__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_4__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
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

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "d76a2b9067d8aceff7bd"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2luZGV4LjNkODE2ZmI4ZDRkZDRkYjk1NWJiLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHZSxTQUFTTyxPQUFULEdBQW1CO0FBQzlCLHNCQUEwQkQsK0VBQVksQ0FBQztBQUNuQ0UsSUFBQUEsWUFBWSxFQUFFLEVBRHFCO0FBRW5DQyxJQUFBQSxJQUFJLEVBQUUsTUFGNkI7QUFHbkNDLElBQUFBLFdBQVcsRUFBRSxNQUhzQjtBQUluQ0MsSUFBQUEsRUFBRSxFQUFFO0FBSitCLEdBQUQsQ0FBdEM7QUFBQTtBQUFBLE1BQU9DLElBQVA7QUFBQSxNQUFhQyxTQUFiOztBQU1BLHVCQUE0QlAsK0VBQVksQ0FBQztBQUNyQ0UsSUFBQUEsWUFBWSxFQUFFLEVBRHVCO0FBRXJDQyxJQUFBQSxJQUFJLEVBQUUsTUFGK0I7QUFHckNDLElBQUFBLFdBQVcsRUFBRSxPQUh3QjtBQUlyQ0MsSUFBQUEsRUFBRSxFQUFFO0FBSmlDLEdBQUQsQ0FBeEM7QUFBQTtBQUFBLE1BQU9HLEtBQVA7QUFBQSxNQUFjQyxVQUFkOztBQU1BLHVCQUFnQ1QsK0VBQVksQ0FBQztBQUN6Q0UsSUFBQUEsWUFBWSxFQUFFLEVBRDJCO0FBRXpDQyxJQUFBQSxJQUFJLEVBQUUsTUFGbUM7QUFHekNDLElBQUFBLFdBQVcsRUFBRSxTQUg0QjtBQUl6Q0MsSUFBQUEsRUFBRSxFQUFFO0FBSnFDLEdBQUQsQ0FBNUM7QUFBQTtBQUFBLE1BQU9LLE9BQVA7QUFBQSxNQUFnQkMsWUFBaEI7O0FBTUEsdUJBQWdDWCwrRUFBWSxDQUFDO0FBQ3pDRSxJQUFBQSxZQUFZLEVBQUUsRUFEMkI7QUFFekNDLElBQUFBLElBQUksRUFBRSxNQUZtQztBQUd6Q0MsSUFBQUEsV0FBVyxFQUFFLFNBSDRCO0FBSXpDQyxJQUFBQSxFQUFFLEVBQUU7QUFKcUMsR0FBRCxDQUE1QztBQUFBO0FBQUEsTUFBT08sT0FBUDtBQUFBLE1BQWdCQyxZQUFo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QUFJLEVBQUM7QUFBUixvQkFBeEIsQ0FESixDQUpKLENBM0JKLENBREosQ0F6Q0osQ0FESixDQURKLENBREosQ0FESixDQURKLENBREosQ0FESjtBQThGSDs7Ozs7Ozs7VUNoSUQscUNBQXFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGVtZXRlci8uL3NyYy9wYWdlcy9Db250YWN0L2luZGV4LmpzeCIsIndlYnBhY2s6Ly9kZW1ldGVyL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJvdyBmcm9tICdyZWFjdC1ib290c3RyYXAvUm93JztcclxuaW1wb3J0IENvbCBmcm9tICdyZWFjdC1ib290c3RyYXAvQ29sJztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdyZWFjdC1ib290c3RyYXAvQnV0dG9uJztcclxuaW1wb3J0IFVzZUZvcm1JbnB1dCBmcm9tICdAL2NvbXBvbmVudHMvY29tcG9uZW50cy9Vc2VGb3JtSW5wdXQnO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbnRhY3QoKSB7XHJcbiAgICBjb25zdCBbTmFtZSwgTmFtZUlucHV0XSA9IFVzZUZvcm1JbnB1dCh7XHJcbiAgICAgICAgZGVmYXVsdFZhbHVlOiBcIlwiLFxyXG4gICAgICAgIHR5cGU6ICd0ZXh0JyxcclxuICAgICAgICBwbGFjZWhvbGRlcjogJ05hbWUnLFxyXG4gICAgICAgIGlkOiAnbmFtZSdcclxuICAgIH0pO1xyXG4gICAgY29uc3QgW0VtYWlsLCBFbWFpbElucHV0XSA9IFVzZUZvcm1JbnB1dCh7XHJcbiAgICAgICAgZGVmYXVsdFZhbHVlOiBcIlwiLFxyXG4gICAgICAgIHR5cGU6ICd0ZXh0JyxcclxuICAgICAgICBwbGFjZWhvbGRlcjogJ0VtYWlsJyxcclxuICAgICAgICBpZDogJ2VtYWlsJ1xyXG4gICAgfSk7XHJcbiAgICBjb25zdCBbU3ViamVjdCwgU3ViamVjdElucHV0XSA9IFVzZUZvcm1JbnB1dCh7XHJcbiAgICAgICAgZGVmYXVsdFZhbHVlOiBcIlwiLFxyXG4gICAgICAgIHR5cGU6ICd0ZXh0JyxcclxuICAgICAgICBwbGFjZWhvbGRlcjogJ1N1YmplY3QnLFxyXG4gICAgICAgIGlkOiAnc3ViamVjdCdcclxuICAgIH0pO1xyXG4gICAgY29uc3QgW01lc3NhZ2UsIE1lc3NhZ2VJbnB1dF0gPSBVc2VGb3JtSW5wdXQoe1xyXG4gICAgICAgIGRlZmF1bHRWYWx1ZTogXCJcIixcclxuICAgICAgICB0eXBlOiAndGV4dCcsXHJcbiAgICAgICAgcGxhY2Vob2xkZXI6ICdNZXNzYWdlJyxcclxuICAgICAgICBpZDogJ21lc3NhZ2UnXHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgPENvbD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBuby1ndXR0ZXJzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdC13cmFwIHctMTAwIHAtbGctNSBwLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibWItNFwiPlNlbmQgdXMgYSBtZXNzYWdlPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiZm9ybS1tZXNzYWdlLXdhcm5pbmdcIiBjbGFzc05hbWU9XCJtYi00XCIgc3R5bGU9e3tcImRpc3BsYXlcIjogXCJub25lXCJ9fT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiZm9ybS1tZXNzYWdlLXN1Y2Nlc3NcIiBjbGFzc05hbWU9XCJtYi00XCIgIHN0eWxlPXt7XCJkaXNwbGF5XCI6IFwibm9uZVwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFlvdXIgbWVzc2FnZSB3YXMgc2VudCwgdGhhbmsgeW91IVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIG1ldGhvZD1cIlBPU1RcIiBpZD1cImNvbnRhY3RGb3JtXCIgbmFtZT1cImNvbnRhY3RGb3JtXCIgY2xhc3NOYW1lPVwiY29udGFjdEZvcm1cIiBub3ZhbGlkYXRlPVwibm92YWxpZGF0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGVycm9yXCIgbmFtZT1cIm5hbWVcIiBpZD1cIm5hbWVcIiBwbGFjZWhvbGRlcj1cIk5hbWVcIiBhcmlhLWludmFsaWQ9XCJ0cnVlXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaWQ9XCJuYW1lLWVycm9yXCIgY2xhc3NOYW1lPVwiZXJyb3JcIiBmb3I9XCJuYW1lXCIgPlBsZWFzZSBlbnRlciB5b3VyIG5hbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGVycm9yXCIgbmFtZT1cImVtYWlsXCIgaWQ9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwiRW1haWxcIiBhcmlhLWludmFsaWQ9XCJ0cnVlXCIvPjxsYWJlbCBpZD1cImVtYWlsLWVycm9yXCIgY2xhc3NOYW1lPVwiZXJyb3JcIiBmb3I9XCJlbWFpbFwiID5QbGVhc2UgZW50ZXIgYSB2YWxpZCBlbWFpbCBhZGRyZXNzPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIHZhbGlkXCIgbmFtZT1cInN1YmplY3RcIiBpZD1cInN1YmplY3RcIiBwbGFjZWhvbGRlcj1cIlN1YmplY3RcIiBhcmlhLWludmFsaWQ9XCJmYWxzZVwiLz48bGFiZWwgaWQ9XCJzdWJqZWN0LWVycm9yXCIgY2xhc3NOYW1lPVwiZXJyb3JcIiBmb3I9XCJzdWJqZWN0XCIgIHN0eWxlPXt7XCJkaXNwbGF5XCI6IFwibm9uZVwifX0+PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIG5hbWU9XCJtZXNzYWdlXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGVycm9yXCIgaWQ9XCJtZXNzYWdlXCIgY29scz1cIjMwXCIgcm93cz1cIjZcIiBwbGFjZWhvbGRlcj1cIk1lc3NhZ2VcIiBhcmlhLWludmFsaWQ9XCJ0cnVlXCI+PC90ZXh0YXJlYT48bGFiZWwgaWQ9XCJtZXNzYWdlLWVycm9yXCIgY2xhc3NOYW1lPVwiZXJyb3JcIiBmb3I9XCJtZXNzYWdlXCIgPlBsZWFzZSBlbnRlciBhIG1lc3NhZ2U8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiU2VuZCBNZXNzYWdlXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWJtaXR0aW5nXCIgIHN0eWxlPXt7XCJkaXNwbGF5XCI6IFwibm9uZVwifX0+U3VibWl0dGluZy4uLjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNiBkLWZsZXggYWxpZ24taXRlbXMtc3RyZXRjaFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmZvLXdyYXAgdy0xMDAgcC1sZy01IHAtNCBpbWdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+Q29udGFjdCB1czwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItNFwiPldlJ3JlIG9wZW4gZm9yIGFueSBzdWdnZXN0aW9uIG9yIGp1c3QgdG8gaGF2ZSBhIGNoYXQ8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYm94IHctMTAwIGQtZmxleCBhbGlnbi1pdGVtcy1zdGFydFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb24gZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmYSBmYS1tYXAtbWFya2VyXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0IHBsLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPjxzcGFuPkFkZHJlc3M6PC9zcGFuPiAxOTggV2VzdCAyMXRoIFN0cmVldCwgU3VpdGUgNzIxIE5ldyBZb3JrIE5ZIDEwMDE2PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRib3ggdy0xMDAgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb24gZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmYSBmYS1waG9uZVwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dCBwbC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD48c3Bhbj5QaG9uZTo8L3NwYW4+IDxhIGhyZWY9XCJ0ZWw6Ly8xMjM0NTY3OTIwXCI+KyAxMjM1IDIzNTUgOTg8L2E+PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRib3ggdy0xMDAgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb24gZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmYSBmYS1wYXBlci1wbGFuZVwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dCBwbC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD48c3Bhbj5FbWFpbDo8L3NwYW4+IDxhIGhyZWY9XCJtYWlsdG86aW5mb0B5b3Vyc2l0ZS5jb21cIj5pbmZvQHlvdXJzaXRlLmNvbTwvYT48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGJveCB3LTEwMCBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbiBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZhIGZhLWdsb2JlXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0IHBsLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPjxzcGFuPldlYnNpdGU8L3NwYW4+IDxhIGhyZWY9XCJodHRwczovL3ByZXZpZXcuY29sb3JsaWIuY29tL3RoZW1lL2Jvb3RzdHJhcC9jb250YWN0LWZvcm0tMDQvI1wiPnlvdXJzaXRlLmNvbTwvYT48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gZnVuY3Rpb24oKSB7IHJldHVybiBcImQ3NmEyYjkwNjdkOGFjZWZmN2JkXCI7IH0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlJvdyIsIkNvbCIsIkJ1dHRvbiIsIlVzZUZvcm1JbnB1dCIsIkNvbnRhY3QiLCJkZWZhdWx0VmFsdWUiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJpZCIsIk5hbWUiLCJOYW1lSW5wdXQiLCJFbWFpbCIsIkVtYWlsSW5wdXQiLCJTdWJqZWN0IiwiU3ViamVjdElucHV0IiwiTWVzc2FnZSIsIk1lc3NhZ2VJbnB1dCJdLCJzb3VyY2VSb290IjoiIn0=