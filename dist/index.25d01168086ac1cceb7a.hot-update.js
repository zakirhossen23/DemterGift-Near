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
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Row */ "./node_modules/react-bootstrap/esm/Row.js");
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Col */ "./node_modules/react-bootstrap/esm/Col.js");
/* harmony import */ var _components_components_UseFormInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/components/UseFormInput */ "./src/components/components/UseFormInput.jsx");
/* harmony import */ var _css_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./css/style */ "./src/pages/Contact/css/style.css");







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

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_4__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("section", {
    class: "ftco-section"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    class: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    class: "row justify-content-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    class: "col-md-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    class: "wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    class: "row no-gutters"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    class: "col-md-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    class: "contact-wrap w-100 p-lg-5 p-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("h3", {
    class: "mb-4"
  }, "Send us a message"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    id: "form-message-warning",
    class: "mb-4"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    id: "form-message-success",
    class: "mb-4"
  }, "Your message was sent, thank you!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("form", {
    method: "POST",
    id: "contactForm",
    name: "contactForm",
    class: "contactForm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    class: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    class: "col-md-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    class: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("input", {
    type: "text",
    class: "form-control",
    name: "name",
    id: "name",
    placeholder: "Name"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    class: "col-md-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    class: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("input", {
    type: "email",
    class: "form-control",
    name: "email",
    id: "email",
    placeholder: "Email"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    class: "col-md-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    class: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("input", {
    type: "text",
    class: "form-control",
    name: "subject",
    id: "subject",
    placeholder: "Subject"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    class: "col-md-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    class: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("textarea", {
    name: "message",
    class: "form-control",
    id: "message",
    cols: "30",
    rows: "6",
    placeholder: "Message"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    class: "col-md-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    class: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("input", {
    type: "submit",
    value: "Send Message",
    class: "btn btn-primary"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    class: "submitting"
  }))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    class: "col-md-6 d-flex align-items-stretch"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    class: "info-wrap w-100 p-lg-5 p-4 img"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("h3", null, "Contact us"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", {
    class: "mb-4"
  }, "We're open for any suggestion or just to have a chat"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    class: "dbox w-100 d-flex align-items-start"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    class: "text pl-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", null, "Address:"), " De Puddingfabriek, Groningen, The Netherlands"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    class: "dbox w-100 d-flex align-items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    class: "text pl-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", null, "Email:"), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("a", {
    href: "mailto:steve.thijssen20@gmail.com"
  }, "steve.thijssen20@gmail.com")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    class: "dbox w-100 d-flex align-items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    class: "text pl-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", null, "Website"), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("a", {
    href: "#"
  }, "https://demetergift.com/")))))))))))))));
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "a1edf668d07ed3a4bc46"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2luZGV4LjI1ZDAxMTY4MDg2YWMxY2NlYjdhLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTTyxPQUFULEdBQW1CO0FBQzlCLHNCQUEwQkQsK0VBQVksQ0FBQztBQUNuQ0UsSUFBQUEsWUFBWSxFQUFFLEVBRHFCO0FBRW5DQyxJQUFBQSxJQUFJLEVBQUUsTUFGNkI7QUFHbkNDLElBQUFBLFdBQVcsRUFBRSxNQUhzQjtBQUluQ0MsSUFBQUEsRUFBRSxFQUFFO0FBSitCLEdBQUQsQ0FBdEM7QUFBQTtBQUFBLE1BQU9DLElBQVA7QUFBQSxNQUFhQyxTQUFiOztBQU1BLHVCQUE0QlAsK0VBQVksQ0FBQztBQUNyQ0UsSUFBQUEsWUFBWSxFQUFFLEVBRHVCO0FBRXJDQyxJQUFBQSxJQUFJLEVBQUUsTUFGK0I7QUFHckNDLElBQUFBLFdBQVcsRUFBRSxPQUh3QjtBQUlyQ0MsSUFBQUEsRUFBRSxFQUFFO0FBSmlDLEdBQUQsQ0FBeEM7QUFBQTtBQUFBLE1BQU9HLEtBQVA7QUFBQSxNQUFjQyxVQUFkOztBQU1BLHVCQUFnQ1QsK0VBQVksQ0FBQztBQUN6Q0UsSUFBQUEsWUFBWSxFQUFFLEVBRDJCO0FBRXpDQyxJQUFBQSxJQUFJLEVBQUUsTUFGbUM7QUFHekNDLElBQUFBLFdBQVcsRUFBRSxTQUg0QjtBQUl6Q0MsSUFBQUEsRUFBRSxFQUFFO0FBSnFDLEdBQUQsQ0FBNUM7QUFBQTtBQUFBLE1BQU9LLE9BQVA7QUFBQSxNQUFnQkMsWUFBaEI7O0FBTUEsdUJBQWdDWCwrRUFBWSxDQUFDO0FBQ3pDRSxJQUFBQSxZQUFZLEVBQUUsRUFEMkI7QUFFekNDLElBQUFBLElBQUksRUFBRSxNQUZtQztBQUd6Q0MsSUFBQUEsV0FBVyxFQUFFLFNBSDRCO0FBSXpDQyxJQUFBQSxFQUFFLEVBQUU7QUFKcUMsR0FBRCxDQUE1QztBQUFBO0FBQUEsTUFBT08sT0FBUDtBQUFBLE1BQWdC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QVgsa0JBQ0kseUVBQUcseUVBQUgsb0JBQXdCO0FBQUcsUUFBSSxFQUFDO0FBQVIsZ0NBQXhCLENBREosQ0FGSixDQWhCSixDQURKLENBeENKLENBREosQ0FESixDQURKLENBRkosQ0FESixDQURKLENBREosQ0FESixDQURKO0FBcUZIOzs7Ozs7OztVQ3ZIRCxxQ0FBcUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZW1ldGVyLy4vc3JjL3BhZ2VzL0NvbnRhY3QvaW5kZXguanN4Iiwid2VicGFjazovL2RlbWV0ZXIvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUm93IGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Sb3cnO1xyXG5pbXBvcnQgQ29sIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Db2wnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9CdXR0b24nO1xyXG5pbXBvcnQgVXNlRm9ybUlucHV0IGZyb20gJ0AvY29tcG9uZW50cy9jb21wb25lbnRzL1VzZUZvcm1JbnB1dCc7XHJcbmltcG9ydCAnLi9jc3Mvc3R5bGUnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb250YWN0KCkge1xyXG4gICAgY29uc3QgW05hbWUsIE5hbWVJbnB1dF0gPSBVc2VGb3JtSW5wdXQoe1xyXG4gICAgICAgIGRlZmF1bHRWYWx1ZTogXCJcIixcclxuICAgICAgICB0eXBlOiAndGV4dCcsXHJcbiAgICAgICAgcGxhY2Vob2xkZXI6ICdOYW1lJyxcclxuICAgICAgICBpZDogJ25hbWUnXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IFtFbWFpbCwgRW1haWxJbnB1dF0gPSBVc2VGb3JtSW5wdXQoe1xyXG4gICAgICAgIGRlZmF1bHRWYWx1ZTogXCJcIixcclxuICAgICAgICB0eXBlOiAndGV4dCcsXHJcbiAgICAgICAgcGxhY2Vob2xkZXI6ICdFbWFpbCcsXHJcbiAgICAgICAgaWQ6ICdlbWFpbCdcclxuICAgIH0pO1xyXG4gICAgY29uc3QgW1N1YmplY3QsIFN1YmplY3RJbnB1dF0gPSBVc2VGb3JtSW5wdXQoe1xyXG4gICAgICAgIGRlZmF1bHRWYWx1ZTogXCJcIixcclxuICAgICAgICB0eXBlOiAndGV4dCcsXHJcbiAgICAgICAgcGxhY2Vob2xkZXI6ICdTdWJqZWN0JyxcclxuICAgICAgICBpZDogJ3N1YmplY3QnXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IFtNZXNzYWdlLCBNZXNzYWdlSW5wdXRdID0gVXNlRm9ybUlucHV0KHtcclxuICAgICAgICBkZWZhdWx0VmFsdWU6IFwiXCIsXHJcbiAgICAgICAgdHlwZTogJ3RleHQnLFxyXG4gICAgICAgIHBsYWNlaG9sZGVyOiAnTWVzc2FnZScsXHJcbiAgICAgICAgaWQ6ICdtZXNzYWdlJ1xyXG4gICAgfSk7XHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgIDxDb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJmdGNvLXNlY3Rpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIndyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgbm8tZ3V0dGVyc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFjdC13cmFwIHctMTAwIHAtbGctNSBwLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cIm1iLTRcIj5TZW5kIHVzIGEgbWVzc2FnZTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiZm9ybS1tZXNzYWdlLXdhcm5pbmdcIiBjbGFzcz1cIm1iLTRcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJmb3JtLW1lc3NhZ2Utc3VjY2Vzc1wiIGNsYXNzPVwibWItNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFlvdXIgbWVzc2FnZSB3YXMgc2VudCwgdGhhbmsgeW91IVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSBtZXRob2Q9XCJQT1NUXCIgaWQ9XCJjb250YWN0Rm9ybVwiIG5hbWU9XCJjb250YWN0Rm9ybVwiIGNsYXNzPVwiY29udGFjdEZvcm1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwibmFtZVwiIGlkPVwibmFtZVwiIHBsYWNlaG9sZGVyPVwiTmFtZVwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwiZW1haWxcIiBpZD1cImVtYWlsXCIgcGxhY2Vob2xkZXI9XCJFbWFpbFwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJzdWJqZWN0XCIgaWQ9XCJzdWJqZWN0XCIgcGxhY2Vob2xkZXI9XCJTdWJqZWN0XCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBuYW1lPVwibWVzc2FnZVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJtZXNzYWdlXCIgY29scz1cIjMwXCIgcm93cz1cIjZcIiBwbGFjZWhvbGRlcj1cIk1lc3NhZ2VcIj48L3RleHRhcmVhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJTZW5kIE1lc3NhZ2VcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN1Ym1pdHRpbmdcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC02IGQtZmxleCBhbGlnbi1pdGVtcy1zdHJldGNoXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbmZvLXdyYXAgdy0xMDAgcC1sZy01IHAtNCBpbWdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5Db250YWN0IHVzPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwibWItNFwiPldlJ3JlIG9wZW4gZm9yIGFueSBzdWdnZXN0aW9uIG9yIGp1c3QgdG8gaGF2ZSBhIGNoYXQ8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGJveCB3LTEwMCBkLWZsZXggYWxpZ24taXRlbXMtc3RhcnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dCBwbC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPjxzcGFuPkFkZHJlc3M6PC9zcGFuPiBEZSBQdWRkaW5nZmFicmllaywgR3JvbmluZ2VuLCBUaGUgTmV0aGVybGFuZHM8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkYm94IHctMTAwIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQgcGwtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD48c3Bhbj5FbWFpbDo8L3NwYW4+IDxhIGhyZWY9XCJtYWlsdG86c3RldmUudGhpanNzZW4yMEBnbWFpbC5jb21cIj5zdGV2ZS50aGlqc3NlbjIwQGdtYWlsLmNvbTwvYT48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkYm94IHctMTAwIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dCBwbC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPjxzcGFuPldlYnNpdGU8L3NwYW4+IDxhIGhyZWY9XCIjXCI+aHR0cHM6Ly9kZW1ldGVyZ2lmdC5jb20vPC9hPjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn0iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSBmdW5jdGlvbigpIHsgcmV0dXJuIFwiYTFlZGY2NjhkMDdlZDNhNGJjNDZcIjsgfSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiUm93IiwiQ29sIiwiQnV0dG9uIiwiVXNlRm9ybUlucHV0IiwiQ29udGFjdCIsImRlZmF1bHRWYWx1ZSIsInR5cGUiLCJwbGFjZWhvbGRlciIsImlkIiwiTmFtZSIsIk5hbWVJbnB1dCIsIkVtYWlsIiwiRW1haWxJbnB1dCIsIlN1YmplY3QiLCJTdWJqZWN0SW5wdXQiLCJNZXNzYWdlIiwiTWVzc2FnZUlucHV0Il0sInNvdXJjZVJvb3QiOiIifQ==