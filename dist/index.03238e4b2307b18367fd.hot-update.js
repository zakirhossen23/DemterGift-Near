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
/* harmony import */ var _babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/asyncToGenerator */ "./node_modules/@babel/runtime-corejs3/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/regenerator */ "./node_modules/@babel/runtime-corejs3/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Row */ "./node_modules/react-bootstrap/esm/Row.js");
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/Col */ "./node_modules/react-bootstrap/esm/Col.js");
/* harmony import */ var _components_components_UseFormInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/components/UseFormInput */ "./src/components/components/UseFormInput.jsx");
/* harmony import */ var _css_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./css/style */ "./src/pages/Contact/css/style.css");








function Contact() {
  function SendMessage() {
    return _SendMessage.apply(this, arguments);
  }

  function _SendMessage() {
    _SendMessage = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
      var nameELM, emailELM, subjectELM, messageELM, successMessage, warnMessage, templateParams;
      return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              nameELM = document.getElementById("name").value;
              emailELM = document.getElementById("email").value;
              subjectELM = document.getElementById("subject").value;
              messageELM = document.getElementById("message").value;
              successMessage = document.getElementById("form-message-success");
              warnMessage = document.getElementById("form-message-warning");
              successMessage.style.display = "none";
              warnMessage.style.display = "none";

              if (nameELM == "" || emailELM == "" || subjectELM == "" || messageELM == "") {
                warnMessage.style = "";
              }

              templateParams = {
                to: 'zakiristesting@gmail.com',
                name: nameELM,
                email: emailELM,
                subject: subjectELM,
                message: messageELM
              };
              _context.next = 12;
              return emailjs.send('service_1xfas4j', 'template_usi1brl', templateParams, "QL-gzqg014Rd_QvMM").then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
                successMessage.style = "";
              }, function (error) {
                warnMessage.style = "";
                console.log('FAILED...', error);
              });

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _SendMessage.apply(this, arguments);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_5__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_6__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("section", {
    class: "ftco-section"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    class: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    class: "row justify-content-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    class: "col-md-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    class: "wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    class: "row no-gutters"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    class: "col-md-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    class: "contact-wrap w-100 p-lg-5 p-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("h3", {
    class: "mb-4"
  }, "Send us a message"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    id: "form-message-warning",
    style: {
      "display": "none"
    },
    class: "mb-4"
  }, "Please try again!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    id: "form-message-success",
    style: {
      "display": "none"
    },
    class: "mb-4"
  }, "Your message was sent, thank you!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    id: "contactForm",
    name: "contactForm",
    class: "contactForm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    class: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    class: "col-md-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    class: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("input", {
    type: "text",
    class: "form-control",
    name: "name",
    id: "name",
    placeholder: "Name"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    class: "col-md-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    class: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("input", {
    type: "email",
    class: "form-control",
    name: "email",
    id: "email",
    placeholder: "Email"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    class: "col-md-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    class: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("input", {
    type: "text",
    class: "form-control",
    name: "subject",
    id: "subject",
    placeholder: "Subject"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    class: "col-md-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    class: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("textarea", {
    name: "message",
    class: "form-control",
    id: "message",
    cols: "30",
    rows: "6",
    placeholder: "Message"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    class: "col-md-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    class: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("input", {
    type: "button",
    onClick: SendMessage,
    value: "Send Message",
    class: "btn btn-primary"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    class: "submitting"
  }))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    class: "col-md-6 d-flex align-items-stretch"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    class: "info-wrap w-100 p-lg-5 p-4 img"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("h3", null, "Contact us"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("p", {
    class: "mb-4"
  }, "We're open for any suggestion or just to have a chat"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    class: "dbox w-100 d-flex align-items-start"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    class: "text pl-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("span", null, "Address:"), " De Puddingfabriek, Groningen, The Netherlands"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    class: "dbox w-100 d-flex align-items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    class: "text pl-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("span", null, "Email:"), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("a", {
    href: "mailto:steve.thijssen20@gmail.com"
  }, "steve.thijssen20@gmail.com")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    class: "dbox w-100 d-flex align-items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    class: "text pl-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("span", null, "Website"), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("a", {
    href: "#"
  }, "https://demetergift.com/")))))))))))))));
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "67f2c007adee669ffd8b"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2luZGV4LjAzMjM4ZTRiMjMwN2IxODM2N2ZkLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHZSxTQUFTTyxPQUFULEdBQW1CO0FBQUEsV0FHZkMsV0FIZTtBQUFBO0FBQUE7O0FBQUE7QUFBQSw0TUFHOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1FDLGNBQUFBLE9BRFIsR0FDa0JDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixNQUF4QixFQUFnQ0MsS0FEbEQ7QUFFUUMsY0FBQUEsUUFGUixHQUVtQkgsUUFBUSxDQUFDQyxjQUFULENBQXdCLE9BQXhCLEVBQWlDQyxLQUZwRDtBQUdRRSxjQUFBQSxVQUhSLEdBR3FCSixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsU0FBeEIsRUFBbUNDLEtBSHhEO0FBSVFHLGNBQUFBLFVBSlIsR0FJcUJMLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixTQUF4QixFQUFtQ0MsS0FKeEQ7QUFLUUksY0FBQUEsY0FMUixHQUt5Qk4sUUFBUSxDQUFDQyxjQUFULENBQXdCLHNCQUF4QixDQUx6QjtBQU1RTSxjQUFBQSxXQU5SLEdBTXNCUCxRQUFRLENBQUNDLGNBQVQsQ0FBd0Isc0JBQXhCLENBTnRCO0FBT0lLLGNBQUFBLGNBQWMsQ0FBQ0UsS0FBZixDQUFxQkMsT0FBckIsR0FBK0IsTUFBL0I7QUFDQUYsY0FBQUEsV0FBVyxDQUFDQyxLQUFaLENBQWtCQyxPQUFsQixHQUE0QixNQUE1Qjs7QUFFQSxrQkFBSVYsT0FBTyxJQUFJLEVBQVgsSUFBaUJJLFFBQVEsSUFBSSxFQUE3QixJQUFtQ0MsVUFBVSxJQUFJLEVBQWpELElBQXVEQyxVQUFVLElBQUksRUFBekUsRUFBNkU7QUFDekVFLGdCQUFBQSxXQUFXLENBQUNDLEtBQVosR0FBbUIsRUFBbkI7QUFDSDs7QUFDRUUsY0FBQUEsY0FiUCxHQWF3QjtBQUNoQkMsZ0JBQUFBLEVBQUUsRUFB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QUFDLFNBQWpEO0FBQTJELFFBQUksRUFBQyxJQUFoRTtBQUFxRSxRQUFJLEVBQUMsR0FBMUU7QUFBOEUsZUFBVyxFQUFDO0FBQTFGLElBREosQ0FESixDQWhCSixlQXFCSTtBQUFLLFNBQUssRUFBQztBQUFYLGtCQUNJO0FBQUssU0FBSyxFQUFDO0FBQVgsa0JBQ0k7QUFBTyxRQUFJLEVBQUMsUUFBWjtBQUFxQixXQUFPLEVBQUUxQixXQUE5QjtBQUEyQyxTQUFLLEVBQUMsY0FBakQ7QUFBZ0UsU0FBSyxFQUFDO0FBQXRFLElBREosZUFFSTtBQUFLLFNBQUssRUFBQztBQUFYLElBRkosQ0FESixDQXJCSixDQURKLENBUkosQ0FESixDQURKLGVBMENJO0FBQUssU0FBSyxFQUFDO0FBQVgsa0JBQ0k7QUFBSyxTQUFLLEVBQUM7QUFBWCxrQkFDSSwwRUFESixlQUVJO0FBQUcsU0FBSyxFQUFDO0FBQVQsNERBRkosZUFHSTtBQUFLLFNBQUssRUFBQztBQUFYLGtCQUVJO0FBQUssU0FBSyxFQUFDO0FBQVgsa0JBQ0kseUVBQUcsMEVBQUgsbURBREosQ0FGSixDQUhKLGVBVUk7QUFBSyxTQUFLLEVBQUM7QUFBWCxrQkFFSTtBQUFLLFNBQUssRUFBQztBQUFYLGtCQUNJLHlFQUFHLHdFQUFILG9CQUF1QjtBQUFHLFFBQUksRUFBQztBQUFSLGtDQUF2QixDQURKLENBRkosQ0FWSixlQWdCSTtBQUFLLFNBQUssRUFBQztBQUFYLGtCQUVJO0FBQUssU0FBSyxFQUFDO0FBQVgsa0JBQ0kseUVBQUcseUVBQUgsb0JBQXdCO0FBQUcsUUFBSSxFQUFDO0FBQVIsZ0NBQXhCLENBREosQ0FGSixDQWhCSixDQURKLENBMUNKLENBREosQ0FESixDQURKLENBRkosQ0FESixDQURKLENBREosQ0FESixDQURKO0FBdUZIOzs7Ozs7OztVQ2xJRCxxQ0FBcUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZW1ldGVyLy4vc3JjL3BhZ2VzL0NvbnRhY3QvaW5kZXguanN4Iiwid2VicGFjazovL2RlbWV0ZXIvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUm93IGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Sb3cnO1xyXG5pbXBvcnQgQ29sIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Db2wnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9CdXR0b24nO1xyXG5pbXBvcnQgVXNlRm9ybUlucHV0IGZyb20gJ0AvY29tcG9uZW50cy9jb21wb25lbnRzL1VzZUZvcm1JbnB1dCc7XHJcbmltcG9ydCAnLi9jc3Mvc3R5bGUnXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29udGFjdCgpIHtcclxuXHJcblxyXG4gICAgYXN5bmMgZnVuY3Rpb24gU2VuZE1lc3NhZ2UoKSB7XHJcbiAgICAgICAgbGV0IG5hbWVFTE0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hbWVcIikudmFsdWU7XHJcbiAgICAgICAgbGV0IGVtYWlsRUxNID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlbWFpbFwiKS52YWx1ZTtcclxuICAgICAgICBsZXQgc3ViamVjdEVMTSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3ViamVjdFwiKS52YWx1ZTtcclxuICAgICAgICBsZXQgbWVzc2FnZUVMTSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVzc2FnZVwiKS52YWx1ZTtcclxuICAgICAgICB2YXIgc3VjY2Vzc01lc3NhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcm0tbWVzc2FnZS1zdWNjZXNzXCIpO1xyXG4gICAgICAgIHZhciB3YXJuTWVzc2FnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9ybS1tZXNzYWdlLXdhcm5pbmdcIik7XHJcbiAgICAgICAgc3VjY2Vzc01lc3NhZ2Uuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgIHdhcm5NZXNzYWdlLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuXHJcbiAgICAgICAgaWYgKG5hbWVFTE0gPT0gXCJcIiB8fCBlbWFpbEVMTSA9PSBcIlwiIHx8IHN1YmplY3RFTE0gPT0gXCJcIiB8fCBtZXNzYWdlRUxNID09IFwiXCIgKXtcclxuICAgICAgICAgICAgd2Fybk1lc3NhZ2Uuc3R5bGUgPVwiXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgdmFyIHRlbXBsYXRlUGFyYW1zID0ge1xyXG4gICAgICAgICAgICB0bzogJ3pha2lyaXN0ZXN0aW5nQGdtYWlsLmNvbScsXHJcbiAgICAgICAgICAgIG5hbWU6IG5hbWVFTE0sXHJcbiAgICAgICAgICAgIGVtYWlsOiBlbWFpbEVMTSxcclxuICAgICAgICAgICAgc3ViamVjdDogc3ViamVjdEVMTSxcclxuICAgICAgICAgICAgbWVzc2FnZTogbWVzc2FnZUVMTVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGF3YWl0IGVtYWlsanMuc2VuZCgnc2VydmljZV8xeGZhczRqJywgJ3RlbXBsYXRlX3VzaTFicmwnLCB0ZW1wbGF0ZVBhcmFtcywgXCJRTC1nenFnMDE0UmRfUXZNTVwiKVxyXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTVUNDRVNTIScsIHJlc3BvbnNlLnN0YXR1cywgcmVzcG9uc2UudGV4dCk7XHJcbnN1Y2Nlc3NNZXNzYWdlLnN0eWxlID0gXCJcIlxyXG4gICAgICAgICAgICB9LCBmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIHdhcm5NZXNzYWdlLnN0eWxlID0gXCJcIjtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdGQUlMRUQuLi4nLCBlcnJvcik7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICA8Q29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzPVwiZnRjby1zZWN0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTEwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IG5vLWd1dHRlcnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhY3Qtd3JhcCB3LTEwMCBwLWxnLTUgcC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJtYi00XCI+U2VuZCB1cyBhIG1lc3NhZ2U8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cImZvcm0tbWVzc2FnZS13YXJuaW5nXCIgc3R5bGU9e3tcImRpc3BsYXlcIjpcIm5vbmVcIn19ICBjbGFzcz1cIm1iLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQbGVhc2UgdHJ5IGFnYWluIVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiZm9ybS1tZXNzYWdlLXN1Y2Nlc3NcIiBzdHlsZT17e1wiZGlzcGxheVwiOlwibm9uZVwifX0gY2xhc3M9XCJtYi00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWW91ciBtZXNzYWdlIHdhcyBzZW50LCB0aGFuayB5b3UhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJjb250YWN0Rm9ybVwiIG5hbWU9XCJjb250YWN0Rm9ybVwiIGNsYXNzPVwiY29udGFjdEZvcm1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwibmFtZVwiIGlkPVwibmFtZVwiIHBsYWNlaG9sZGVyPVwiTmFtZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cImVtYWlsXCIgaWQ9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwiRW1haWxcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cInN1YmplY3RcIiBpZD1cInN1YmplY3RcIiBwbGFjZWhvbGRlcj1cIlN1YmplY3RcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBuYW1lPVwibWVzc2FnZVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJtZXNzYWdlXCIgY29scz1cIjMwXCIgcm93cz1cIjZcIiBwbGFjZWhvbGRlcj1cIk1lc3NhZ2VcIj48L3RleHRhcmVhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17U2VuZE1lc3NhZ2V9IHZhbHVlPVwiU2VuZCBNZXNzYWdlXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdWJtaXR0aW5nXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC02IGQtZmxleCBhbGlnbi1pdGVtcy1zdHJldGNoXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbmZvLXdyYXAgdy0xMDAgcC1sZy01IHAtNCBpbWdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5Db250YWN0IHVzPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwibWItNFwiPldlJ3JlIG9wZW4gZm9yIGFueSBzdWdnZXN0aW9uIG9yIGp1c3QgdG8gaGF2ZSBhIGNoYXQ8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGJveCB3LTEwMCBkLWZsZXggYWxpZ24taXRlbXMtc3RhcnRcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQgcGwtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD48c3Bhbj5BZGRyZXNzOjwvc3Bhbj4gRGUgUHVkZGluZ2ZhYnJpZWssIEdyb25pbmdlbiwgVGhlIE5ldGhlcmxhbmRzPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRib3ggdy0xMDAgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dCBwbC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPjxzcGFuPkVtYWlsOjwvc3Bhbj4gPGEgaHJlZj1cIm1haWx0bzpzdGV2ZS50aGlqc3NlbjIwQGdtYWlsLmNvbVwiPnN0ZXZlLnRoaWpzc2VuMjBAZ21haWwuY29tPC9hPjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRib3ggdy0xMDAgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dCBwbC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPjxzcGFuPldlYnNpdGU8L3NwYW4+IDxhIGhyZWY9XCIjXCI+aHR0cHM6Ly9kZW1ldGVyZ2lmdC5jb20vPC9hPjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn0iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSBmdW5jdGlvbigpIHsgcmV0dXJuIFwiNjdmMmMwMDdhZGVlNjY5ZmZkOGJcIjsgfSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiUm93IiwiQ29sIiwiQnV0dG9uIiwiVXNlRm9ybUlucHV0IiwiQ29udGFjdCIsIlNlbmRNZXNzYWdlIiwibmFtZUVMTSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ2YWx1ZSIsImVtYWlsRUxNIiwic3ViamVjdEVMTSIsIm1lc3NhZ2VFTE0iLCJzdWNjZXNzTWVzc2FnZSIsIndhcm5NZXNzYWdlIiwic3R5bGUiLCJkaXNwbGF5IiwidGVtcGxhdGVQYXJhbXMiLCJ0byIsIm5hbWUiLCJlbWFpbCIsInN1YmplY3QiLCJtZXNzYWdlIiwiZW1haWxqcyIsInNlbmQiLCJ0aGVuIiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwic3RhdHVzIiwidGV4dCIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==