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
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/Row */ "./node_modules/react-bootstrap/esm/Row.js");
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap/Col */ "./node_modules/react-bootstrap/esm/Col.js");
/* harmony import */ var _components_components_UseFormInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/components/UseFormInput */ "./src/components/components/UseFormInput.jsx");
/* harmony import */ var _css_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./css/style */ "./src/pages/Contact/css/style.css");
/* harmony import */ var emailjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! emailjs */ "./node_modules/emailjs/rollup/email.mjs");









function Contact() {
  function SendMessage() {
    return _SendMessage.apply(this, arguments);
  }

  function _SendMessage() {
    _SendMessage = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
      var nameELM, emailELM, subjectELM, messageELM, client;
      return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              nameELM = document.getElementById("name").value;
              emailELM = document.getElementById("email").value;
              subjectELM = document.getElementById("subject").value;
              messageELM = document.getElementById("message").value;
              client = new emailjs__WEBPACK_IMPORTED_MODULE_5__.SMTPClient({
                user: 'noreplaydemetergift@gmail.com',
                password: 'zakir%%$',
                host: 'smtp.gmail.com',
                ssl: true
              });
              _context.prev = 5;
              _context.next = 8;
              return client.send({
                text: messageELM,
                from: 'noreplaydemetergift@gmail.com',
                to: 'zakiristesting@gmail.com',
                subject: subjectELM
              });

            case 8:
              _context.next = 13;
              break;

            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](5);
              console.error(_context.t0);

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[5, 10]]);
    }));
    return _SendMessage.apply(this, arguments);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_6__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_7__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("section", {
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
    class: "mb-4"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    id: "form-message-success",
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
/******/ 	__webpack_require__.h = function() { return "b9643e2cc3a6bbd8201a"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2luZGV4LjdhZGU3NGYwOWZhOWFlZjI2YjhmLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTUSxPQUFULEdBQW1CO0FBQUEsV0FHZkMsV0FIZTtBQUFBO0FBQUE7O0FBQUE7QUFBQSw0TUFHOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1FDLGNBQUFBLE9BRFIsR0FDa0JDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixNQUF4QixFQUFnQ0MsS0FEbEQ7QUFFUUMsY0FBQUEsUUFGUixHQUVtQkgsUUFBUSxDQUFDQyxjQUFULENBQXdCLE9BQXhCLEVBQWlDQyxLQUZwRDtBQUdRRSxjQUFBQSxVQUhSLEdBR3FCSixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsU0FBeEIsRUFBbUNDLEtBSHhEO0FBSVFHLGNBQUFBLFVBSlIsR0FJcUJMLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixTQUF4QixFQUFtQ0MsS0FKeEQ7QUFNVUksY0FBQUEsTUFOVixHQU1tQixJQUFJViwrQ0FBSixDQUFlO0FBQzFCVyxnQkFBQUEsSUFBSSxFQUFFLCtCQURvQjtBQUUxQkMsZ0JBQUFBLFFBQVEsRUFBRSxVQUZnQjtBQUcxQkMsZ0JBQUFBLElBQUksRUFBRSxnQkFIb0I7QUFJMUJDLGdCQUFBQSxHQUFHLEVBQUU7QUFKcUIsZUFBZixDQU5uQjtBQUFBO0FBQUE7QUFBQSxxQkFhY0osTUFBTSxDQUFDSyxJQUFQLENBQ0Y7QUFDSUMsZ0JBQUFBLElBQUksRUFBRVAsVUFEVjtBQUVJUSxnQkFBQUEsSUFBSSxFQUFFLCtCQUZWO0FBR0lDLGdCQUFBQSxFQUFFLEVBQUUsMEJBSFI7QUFJSUMsZ0JBQUFBLE9BQU8sRUFBRVg7QUFKYixlQURFLENBYmQ7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQXVCUVksY0FBQUEsT0FBTyxDQUFDQyxLQUFSOztBQXZCUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUg4QjtBQUFBO0FBQUE7O0FBZ0M5QixzQkFDSSxpSEFDSSxpREFBQywyREFBRCxxQkFDSSxpREFBQywyREFBRCxxQkFDSTtBQUFTLFNBQUssRUFBQztBQUFmLGtCQUNJO0FBQUssU0FBSyxFQUFDO0FBQVgsa0JBRUk7QUFBSyxTQUFLLEVBQUM7QUFBWCxrQkFDSTtBQUFLLFNBQUssRUFBQztBQUFYLGtCQUNJO0FBQUssU0FBSyxFQUFDO0FBQVgsa0JBQ0k7QUFBSyxTQUFLLEVBQUM7QUFBWCxrQkFDSTtBQUFLLFNBQUssRUFBQztBQUFYLGtCQUNJO0FBQUssU0FBSyxFQUFDO0FBQVgsa0JBQ0k7QUFBSSxTQUFLLEVBQUM7QUFBVix5QkFESixlQUVJO0FBQUssTUFBRSxFQUFDLHNCQUFSO0FBQStCLFNBQUssRUFBQztBQUFyQyxJQUZKLGVBR0k7QUFBSyxNQUFFLEVBQUMsc0JBQVI7QUFBK0IsU0FBSyxFQUFDO0FBQXJDLHlDQUhKLGVBTUk7QUFBSyxNQUFFLEVBQUMsYUFBUjtBQUFzQixRQUFJLEVBQUMsYUFBM0I7QUFBeUMsU0FBSyxFQUFDO0FBQS9DLGtCQUNJO0FBQUssU0FBSyxFQUFDO0FBQVgsa0JBQ0k7QUFBSyxTQUFLLEVBQUM7QUFBWCxrQkFDSTtBQUFLLFNBQUssRUFBQztBQUFYLGtCQUNJO0FBQU8sUUFBSSxFQUFDLE1BQVo7QUFBbUIsU0FBSyxFQUFDLGNBQXpCO0FBQXdDLFFBQUksRUFBQyxNQUE3QztBQUFvRCxNQUFFLEVBQUMsTUFBdkQ7QUFBOEQsZUFBVyxFQUFDO0FBQTFFLElBREosQ0FESixDQURKLGVBTUk7QUFBSyxTQUFLLEVBQUM7QUFBWCxrQkFDSTtBQUFLLFNBQUssRUFBQztBQUFYLGtCQUNJO0FBQU8sUUFBSSxFQUFDLE9BQVo7QUFBb0IsU0FBSyxFQUFDLGNBQTFCO0FBQXlDLFFBQUksRUFBQyxPQUE5QztBQUFzRCxNQUFFLEVBQUMsT0FBekQ7QUFBaUUsZUFBVyxFQUFDO0FBQTdFLElBREosQ0FESixDQU5KLGVBV0k7QUFBSyxTQUFLLEVBQUM7QUFBWCxrQkFDSTtBQUFLLFNBQUssRUFBQztBQUFYLGtCQUNJO0FBQU8sUUFBSSxFQUFDLE1BQVo7QUFBbUIsU0FBSyxFQUFDLGNBQXpCO0FBQXdDLFFBQUksRUFBQyxTQUE3QztBQUF1RCxNQUFFLEVBQUMsU0FBMUQ7QUFBb0UsZUFBVyxFQUFDO0FBQWhGLElBREosQ0FESixDQVhKLGVBZ0JJO0FBQUssU0FBSyxFQUFDO0FBQVgsa0JBQ0k7QUFBSyxTQUFLLEVBQUM7QUFBWCxrQkFDSTtBQUFVLFFBQUksRUFBQyxTQUFmO0FBQXlCLFNBQUssRUFBQyxjQUEvQjtBQUE4QyxNQUFFLEVBQUMsU0FBakQ7QUFBMkQsUUFBSSxFQUFDLElBQWhFO0FBQXFFLFFBQUksRUFBQyxHQUExRTtBQUE4RSxlQUFXLEVBQUM7QUFBMUYsSUFESixDQURKLENBaEJKLGVBcUJJO0FBQUssU0FBSyxFQUFDO0FBQVgsa0JBQ0k7QUFBSyxTQUFLLEVBQUM7QUFBWCxrQkFDSTtBQUFPLFFBQUksRUFBQyxRQUFaO0FBQXFCLFdBQU8sRUFBRW5CLFdBQTlCO0FBQTJDLFNBQUssRUFBQyxjQUFqRDtBQUFnRSxTQUFLLEVBQUM7QUFBdEUsSUFESixlQUVJO0FBQUssU0FBSyxFQUFDO0FBQVgsSUFGSixDQURKLENBckJKLENBREosQ0FOSixDQURKLENBREosZUF3Q0k7QUFBSyxTQUFLLEVBQUM7QUFBWCxrQkFDSTtBQUFLLFNBQUssRUFBQztBQUFYLGtCQUNJLDBFQURKLGVBRUk7QUFBRyxTQUFLLEVBQUM7QUFBVCw0REFGSixlQUdJO0FBQUssU0FBSyxFQUFDO0FBQVgsa0JBRUk7QUFBSyxTQUFLLEVBQUM7QUFBWCxrQkFDSSx5RUFBRywwRUFBSCxtREFESixDQUZKLENBSEosZUFVSTtBQUFLLFNBQUssRUFBQztBQUFYLGtCQUVJO0FBQUssU0FBSyxFQUFDO0FBQVgsa0JBQ0kseUVBQUcsd0VBQUgsb0JBQXVCO0FBQUcsUUFBSSxFQUFDO0FBQVIsa0NBQXZCLENBREosQ0FGSixDQVZKLGVBZ0JJO0FBQUssU0FBSyxFQUFDO0FBQVgsa0JBRUk7QUFBSyxTQUFLLEVBQUM7QUFBWCxrQkFDSSx5RUFBRyx5RUFBSCxvQkFBd0I7QUFBRyxRQUFJLEVBQUM7QUFBUixnQ0FBeEIsQ0FESixDQUZKLENBaEJKLENBREosQ0F4Q0osQ0FESixDQURKLENBREosQ0FGSixDQURKLENBREosQ0FESixDQURKLENBREo7QUFxRkg7Ozs7Ozs7O1VDN0hELHFDQUFxQyIsInNvdXJjZXMiOlsid2VicGFjazovL2RlbWV0ZXIvLi9zcmMvcGFnZXMvQ29udGFjdC9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vZGVtZXRlci93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSb3cgZnJvbSAncmVhY3QtYm9vdHN0cmFwL1Jvdyc7XHJcbmltcG9ydCBDb2wgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0NvbCc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0J1dHRvbic7XHJcbmltcG9ydCBVc2VGb3JtSW5wdXQgZnJvbSAnQC9jb21wb25lbnRzL2NvbXBvbmVudHMvVXNlRm9ybUlucHV0JztcclxuaW1wb3J0ICcuL2Nzcy9zdHlsZSdcclxuaW1wb3J0IHsgU01UUENsaWVudCB9IGZyb20gJ2VtYWlsanMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29udGFjdCgpIHtcclxuXHJcblxyXG4gICAgYXN5bmMgZnVuY3Rpb24gU2VuZE1lc3NhZ2UoKSB7XHJcbiAgICAgICAgbGV0IG5hbWVFTE0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hbWVcIikudmFsdWU7XHJcbiAgICAgICAgbGV0IGVtYWlsRUxNID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlbWFpbFwiKS52YWx1ZTtcclxuICAgICAgICBsZXQgc3ViamVjdEVMTSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3ViamVjdFwiKS52YWx1ZTtcclxuICAgICAgICBsZXQgbWVzc2FnZUVMTSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVzc2FnZVwiKS52YWx1ZTtcclxuXHJcbiAgICAgICAgY29uc3QgY2xpZW50ID0gbmV3IFNNVFBDbGllbnQoe1xyXG4gICAgICAgICAgICB1c2VyOiAnbm9yZXBsYXlkZW1ldGVyZ2lmdEBnbWFpbC5jb20nLFxyXG4gICAgICAgICAgICBwYXNzd29yZDogJ3pha2lyJSUkJyxcclxuICAgICAgICAgICAgaG9zdDogJ3NtdHAuZ21haWwuY29tJyxcclxuICAgICAgICAgICAgc3NsOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgYXdhaXQgY2xpZW50LnNlbmQoXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogbWVzc2FnZUVMTSxcclxuICAgICAgICAgICAgICAgICAgICBmcm9tOiAnbm9yZXBsYXlkZW1ldGVyZ2lmdEBnbWFpbC5jb20nLFxyXG4gICAgICAgICAgICAgICAgICAgIHRvOiAnemFraXJpc3Rlc3RpbmdAZ21haWwuY29tJyxcclxuICAgICAgICAgICAgICAgICAgICBzdWJqZWN0OiBzdWJqZWN0RUxNLFxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlKVxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgIDxDb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJmdGNvLXNlY3Rpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIndyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgbm8tZ3V0dGVyc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFjdC13cmFwIHctMTAwIHAtbGctNSBwLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cIm1iLTRcIj5TZW5kIHVzIGEgbWVzc2FnZTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiZm9ybS1tZXNzYWdlLXdhcm5pbmdcIiBjbGFzcz1cIm1iLTRcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJmb3JtLW1lc3NhZ2Utc3VjY2Vzc1wiIGNsYXNzPVwibWItNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFlvdXIgbWVzc2FnZSB3YXMgc2VudCwgdGhhbmsgeW91IVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiY29udGFjdEZvcm1cIiBuYW1lPVwiY29udGFjdEZvcm1cIiBjbGFzcz1cImNvbnRhY3RGb3JtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cIm5hbWVcIiBpZD1cIm5hbWVcIiBwbGFjZWhvbGRlcj1cIk5hbWVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJlbWFpbFwiIGlkPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cIkVtYWlsXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJzdWJqZWN0XCIgaWQ9XCJzdWJqZWN0XCIgcGxhY2Vob2xkZXI9XCJTdWJqZWN0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgbmFtZT1cIm1lc3NhZ2VcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIGlkPVwibWVzc2FnZVwiIGNvbHM9XCIzMFwiIHJvd3M9XCI2XCIgcGxhY2Vob2xkZXI9XCJNZXNzYWdlXCI+PC90ZXh0YXJlYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e1NlbmRNZXNzYWdlfSB2YWx1ZT1cIlNlbmQgTWVzc2FnZVwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3VibWl0dGluZ1wiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNiBkLWZsZXggYWxpZ24taXRlbXMtc3RyZXRjaFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5mby13cmFwIHctMTAwIHAtbGctNSBwLTQgaW1nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+Q29udGFjdCB1czwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIm1iLTRcIj5XZSdyZSBvcGVuIGZvciBhbnkgc3VnZ2VzdGlvbiBvciBqdXN0IHRvIGhhdmUgYSBjaGF0PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRib3ggdy0xMDAgZC1mbGV4IGFsaWduLWl0ZW1zLXN0YXJ0XCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0IHBsLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+PHNwYW4+QWRkcmVzczo8L3NwYW4+IERlIFB1ZGRpbmdmYWJyaWVrLCBHcm9uaW5nZW4sIFRoZSBOZXRoZXJsYW5kczwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkYm94IHctMTAwIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQgcGwtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD48c3Bhbj5FbWFpbDo8L3NwYW4+IDxhIGhyZWY9XCJtYWlsdG86c3RldmUudGhpanNzZW4yMEBnbWFpbC5jb21cIj5zdGV2ZS50aGlqc3NlbjIwQGdtYWlsLmNvbTwvYT48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkYm94IHctMTAwIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQgcGwtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD48c3Bhbj5XZWJzaXRlPC9zcGFuPiA8YSBocmVmPVwiI1wiPmh0dHBzOi8vZGVtZXRlcmdpZnQuY29tLzwvYT48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gZnVuY3Rpb24oKSB7IHJldHVybiBcImI5NjQzZTJjYzNhNmJiZDgyMDFhXCI7IH0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlJvdyIsIkNvbCIsIkJ1dHRvbiIsIlVzZUZvcm1JbnB1dCIsIlNNVFBDbGllbnQiLCJDb250YWN0IiwiU2VuZE1lc3NhZ2UiLCJuYW1lRUxNIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInZhbHVlIiwiZW1haWxFTE0iLCJzdWJqZWN0RUxNIiwibWVzc2FnZUVMTSIsImNsaWVudCIsInVzZXIiLCJwYXNzd29yZCIsImhvc3QiLCJzc2wiLCJzZW5kIiwidGV4dCIsImZyb20iLCJ0byIsInN1YmplY3QiLCJjb25zb2xlIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9