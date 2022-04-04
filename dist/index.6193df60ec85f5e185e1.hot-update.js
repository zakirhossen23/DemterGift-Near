"use strict";
self["webpackHotUpdatedemeter"]("/index",{

/***/ "./src/pages/Home/index.jsx":
/*!**********************************!*\
  !*** ./src/pages/Home/index.jsx ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Home; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/asyncToGenerator */ "./node_modules/@babel/runtime-corejs3/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/slicedToArray */ "./node_modules/@babel/runtime-corejs3/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/regenerator */ "./node_modules/@babel/runtime-corejs3/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _modals_login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/modals/login */ "./src/modals/login/index.tsx");
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Row */ "./node_modules/react-bootstrap/esm/Row.js");
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/Col */ "./node_modules/react-bootstrap/esm/Col.js");








function Home() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
      _useState2 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      modalShow = _useState2[0],
      setModalShow = _useState2[1];

  function SendMessage() {
    return _SendMessage.apply(this, arguments);
  }

  function _SendMessage() {
    _SendMessage = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
      var nameBox, emailBox, subjectBox, messageBox, nameELM, emailELM, subjectELM, messageELM, successMessage, warnMessage, templateParams;
      return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              nameBox = document.getElementById("name");
              emailBox = document.getElementById("email");
              subjectBox = document.getElementById("subject");
              messageBox = document.getElementById("message");
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
                to: 'steve.thijssen20@gmail.com',
                name: nameELM,
                email: emailELM,
                subject: subjectELM,
                message: messageELM
              };
              _context.next = 16;
              return emailjs.send('service_1xfas4j', 'template_usi1brl', templateParams, "QL-gzqg014Rd_QvMM").then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
                successMessage.style = "";
                nameBox.value = "";
                emailBox.value = "";
                subjectBox.value = "";
                messageBox.value = "";
              }, function (error) {
                warnMessage.style = "";
                console.log('FAILED...', error);
              });

            case 16:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _SendMessage.apply(this, arguments);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react__WEBPACK_IMPORTED_MODULE_3__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react__WEBPACK_IMPORTED_MODULE_3__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_5__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_6__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("section", {
    class: "ftco-section"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    class: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    class: "row justify-content-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    class: "col-md-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    class: "wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    class: "row no-gutters"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    class: "col-md-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    class: "contact-wrap w-100 p-lg-5 p-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("h3", {
    class: "mb-4"
  }, "Send us a message"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    id: "form-message-warning",
    style: {
      "display": "none"
    },
    class: "mb-4"
  }, "Please try again!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    id: "form-message-success",
    style: {
      "display": "none"
    },
    class: "mb-4"
  }, "Your message was sent, thank you!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    id: "contactForm",
    name: "contactForm",
    class: "contactForm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    class: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    class: "col-md-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    class: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("input", {
    type: "text",
    class: "form-control",
    name: "name",
    id: "name",
    placeholder: "Name"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    class: "col-md-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    class: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("input", {
    type: "email",
    class: "form-control",
    name: "email",
    id: "email",
    placeholder: "Email"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    class: "col-md-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    class: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("input", {
    type: "text",
    class: "form-control",
    name: "subject",
    id: "subject",
    placeholder: "Subject"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    class: "col-md-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    class: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("textarea", {
    name: "message",
    class: "form-control",
    id: "message",
    cols: "30",
    rows: "6",
    placeholder: "Message"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    class: "col-md-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    class: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("input", {
    type: "button",
    onClick: SendMessage,
    value: "Send Message",
    class: "btn btn-primary"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    class: "submitting"
  }))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    class: "col-md-6 d-flex align-items-stretch"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    class: "info-wrap w-100 p-lg-5 p-4 img"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("h3", null, "Contact us"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("p", {
    class: "mb-4"
  }, "We're open for any suggestion or just to have a chat"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    class: "dbox w-100 d-flex align-items-start"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    class: "text pl-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", null, "Address:"), " De Puddingfabriek, Groningen, The Netherlands"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    class: "dbox w-100 d-flex align-items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    class: "text pl-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", null, "Email:"), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("a", {
    href: "mailto:steve.thijssen20@gmail.com"
  }, "steve.thijssen20@gmail.com")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    class: "dbox w-100 d-flex align-items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    class: "text pl-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", null, "Website"), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("a", {
    href: "#"
  }, "https://demetergift.com/"))))))))))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    className: "mb-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("img", {
    style: {
      'width': '340px'
    },
    src: "https://i.postimg.cc/1z7RpZsX/favicon.png"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    className: "col"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    className: "text-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("h1", {
    style: {
      fontSize: '39px'
    }
  }, "A gift with a story")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    style: {
      'width': '690px'
    },
    className: "col"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    className: "text-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("h4", {
    style: {
      fontSize: '20px'
    }
  }, "DemeterGift creates the most easy, transparent and fun NFT charity auction on Web3, by helping charities raise additional support!")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    style: {
      width: '250px'
    },
    className: "col"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.NavLink, {
    to: "/login?[/donation]"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    style: {
      background: 'rgb(236, 201, 0)',
      textAlign: 'center',
      cursor: 'pointer',
      height: '73px',
      padding: '10px 0px',
      width: '100%',
      margin: '0px'
    },
    className: "card card-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    className: "card-body"
  }, "Let\u2019s donate!"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    className: "Event row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("img", {
    style: {
      'padding': '0',
      width: '-webkit-fill-available'
    },
    src: "https://www.metisgift.com/Event/Panel.svg"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("img", {
    style: {
      "position": "absolute",
      "bottom": "0"
    },
    src: "https://www.metisgift.com/Event/Group.svg"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("img", {
    style: {
      "padding": "0px",
      "position": "absolute",
      "width": "56%",
      "marginTop": "10%"
    },
    src: "https://www.metisgift.com/Event/CharityText.svg"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    className: "card-body EventBTN"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.NavLink, {
    to: "/login?[/CreateEvents]"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", null, "Start event"))))));
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "440fe8742e18d45b8f34"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2luZGV4LjYxOTNkZjYwZWM4NWY1ZTE4NWUxLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTTyxJQUFULEdBQWdCO0FBRTlCLGtCQUFrQ04sK0NBQVEsQ0FBQyxLQUFELENBQTFDO0FBQUE7QUFBQSxNQUFPTyxTQUFQO0FBQUEsTUFBa0JDLFlBQWxCOztBQUY4QixXQUlaQyxXQUpZO0FBQUE7QUFBQTs7QUFBQTtBQUFBLDRNQUkzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDUUMsY0FBQUEsT0FEUixHQUNrQkMsUUFBUSxDQUFDQyxjQUFULENBQXdCLE1BQXhCLENBRGxCO0FBRVFDLGNBQUFBLFFBRlIsR0FFbUJGLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixPQUF4QixDQUZuQjtBQUdRRSxjQUFBQSxVQUhSLEdBR3FCSCxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsU0FBeEIsQ0FIckI7QUFJUUcsY0FBQUEsVUFKUixHQUlxQkosUUFBUSxDQUFDQyxjQUFULENBQXdCLFNBQXhCLENBSnJCO0FBTVFJLGNBQUFBLE9BTlIsR0FNa0JMLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixNQUF4QixFQUFnQ0ssS0FObEQ7QUFPUUMsY0FBQUEsUUFQUixHQU9tQlAsUUFBUSxDQUFDQyxjQUFULENBQXdCLE9BQXhCLEVBQWlDSyxLQVBwRDtBQVFRRSxjQUFBQSxVQVJSLEdBUXFCUixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsU0FBeEIsRUFBbUNLLEtBUnhEO0FBU1FHLGNBQUFBLFVBVFIsR0FTcUJULFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixTQUF4QixFQUFtQ0ssS0FUeEQ7QUFVUUksY0FBQUEsY0FWUixHQVV5QlYsUUFBUSxDQUFDQyxjQUFULENBQXdCLHNCQUF4QixDQVZ6QjtBQVdRVSxjQUFBQSxXQVhSLEdBV3NCWCxRQUFRLENBQUNDLGNBQVQsQ0FBd0Isc0JBQXhCLENB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QUFBZ0MsYUFBUyxFQUFDO0FBQTFDLGtCQUNDLGlEQUFDLHFEQUFEO0FBQVMsTUFBRSxFQUFDO0FBQVosa0JBRUM7QUFBSyxTQUFLLEVBQUU7QUFDWEMsTUFBQUEsVUFBVSxFQUFFLGtCQUREO0FBRVhDLE1BQUFBLFNBQVMsRUFBRSxRQUZBO0FBR1hDLE1BQUFBLE1BQU0sRUFBRSxTQUhHO0FBSVhDLE1BQUFBLE1BQU0sRUFBRSxNQUpHO0FBS1hDLE1BQUFBLE9BQU8sRUFBRSxVQUxFO0FBTVhMLE1BQUFBLEtBQUssRUFBRSxNQU5JO0FBT1hNLE1BQUFBLE1BQU0sRUFBRTtBQVBHLEtBQVo7QUFRRyxhQUFTLEVBQUM7QUFSYixrQkFTQztBQUFLLGFBQVMsRUFBQztBQUFmLDBCQVRELENBRkQsQ0FERCxDQURELENBbkJELGVBc0NDO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0M7QUFBSyxTQUFLLEVBQUU7QUFBRSxpQkFBVyxHQUFiO0FBQWtCTixNQUFBQSxLQUFLLEVBQUU7QUFBekIsS0FBWjtBQUFpRSxPQUFHLEVBQUM7QUFBckUsSUFERCxlQUVDO0FBQUssU0FBSyxFQUFFO0FBQUUsa0JBQVksVUFBZDtBQUEwQixnQkFBVTtBQUFwQyxLQUFaO0FBQXVELE9BQUcsRUFBQztBQUEzRCxJQUZELGVBR0M7QUFBSyxTQUFLLEVBQUU7QUFBRSxpQkFBVyxLQUFiO0FBQW9CLGtCQUFZLFVBQWhDO0FBQTRDLGVBQVMsS0FBckQ7QUFBNEQsbUJBQWE7QUFBekUsS0FBWjtBQUE4RixPQUFHLEVBQUM7QUFBbEcsSUFIRCxlQUlDO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0MsaURBQUMscURBQUQ7QUFBUyxNQUFFLEVBQUM7QUFBWixrQkFDQyw0RUFERCxDQURELENBSkQsQ0F0Q0QsQ0F0Rk8sQ0FBUjtBQTRJQTs7Ozs7Ozs7VUNoTUQscUNBQXFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGVtZXRlci8uL3NyYy9wYWdlcy9Ib21lL2luZGV4LmpzeCIsIndlYnBhY2s6Ly9kZW1ldGVyL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTmF2TGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXHJcbmltcG9ydCBMT0dJTk1vZGFsIGZyb20gJ0AvbW9kYWxzL2xvZ2luJztcclxuaW1wb3J0IFJvdyBmcm9tICdyZWFjdC1ib290c3RyYXAvUm93JztcclxuaW1wb3J0IENvbCBmcm9tICdyZWFjdC1ib290c3RyYXAvQ29sJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcblxyXG5cdGNvbnN0IFttb2RhbFNob3csIHNldE1vZGFsU2hvd10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgYXN5bmMgZnVuY3Rpb24gU2VuZE1lc3NhZ2UoKSB7XHJcbiAgICAgICAgdmFyIG5hbWVCb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hbWVcIik7XHJcbiAgICAgICAgdmFyIGVtYWlsQm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlbWFpbFwiKTtcclxuICAgICAgICB2YXIgc3ViamVjdEJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3ViamVjdFwiKTtcclxuICAgICAgICB2YXIgbWVzc2FnZUJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVzc2FnZVwiKTtcclxuXHJcbiAgICAgICAgbGV0IG5hbWVFTE0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hbWVcIikudmFsdWU7XHJcbiAgICAgICAgbGV0IGVtYWlsRUxNID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlbWFpbFwiKS52YWx1ZTtcclxuICAgICAgICBsZXQgc3ViamVjdEVMTSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3ViamVjdFwiKS52YWx1ZTtcclxuICAgICAgICBsZXQgbWVzc2FnZUVMTSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVzc2FnZVwiKS52YWx1ZTtcclxuICAgICAgICB2YXIgc3VjY2Vzc01lc3NhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcm0tbWVzc2FnZS1zdWNjZXNzXCIpO1xyXG4gICAgICAgIHZhciB3YXJuTWVzc2FnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9ybS1tZXNzYWdlLXdhcm5pbmdcIik7XHJcbiAgICAgICAgc3VjY2Vzc01lc3NhZ2Uuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgIHdhcm5NZXNzYWdlLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuXHJcbiAgICAgICAgaWYgKG5hbWVFTE0gPT0gXCJcIiB8fCBlbWFpbEVMTSA9PSBcIlwiIHx8IHN1YmplY3RFTE0gPT0gXCJcIiB8fCBtZXNzYWdlRUxNID09IFwiXCIpIHtcclxuICAgICAgICAgICAgd2Fybk1lc3NhZ2Uuc3R5bGUgPSBcIlwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgdGVtcGxhdGVQYXJhbXMgPSB7XHJcbiAgICAgICAgICAgIHRvOiAnc3RldmUudGhpanNzZW4yMEBnbWFpbC5jb20nLFxyXG4gICAgICAgICAgICBuYW1lOiBuYW1lRUxNLFxyXG4gICAgICAgICAgICBlbWFpbDogZW1haWxFTE0sXHJcbiAgICAgICAgICAgIHN1YmplY3Q6IHN1YmplY3RFTE0sXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2VFTE1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBhd2FpdCBlbWFpbGpzLnNlbmQoJ3NlcnZpY2VfMXhmYXM0aicsICd0ZW1wbGF0ZV91c2kxYnJsJywgdGVtcGxhdGVQYXJhbXMsIFwiUUwtZ3pxZzAxNFJkX1F2TU1cIilcclxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnU1VDQ0VTUyEnLCByZXNwb25zZS5zdGF0dXMsIHJlc3BvbnNlLnRleHQpO1xyXG4gICAgICAgICAgICAgICAgc3VjY2Vzc01lc3NhZ2Uuc3R5bGUgPSBcIlwiXHJcbiAgICAgICAgICAgICAgICBuYW1lQm94LnZhbHVlID0gXCJcIjtcclxuICAgICAgICAgICAgICAgIGVtYWlsQm94LnZhbHVlID0gXCJcIjtcclxuICAgICAgICAgICAgICAgIHN1YmplY3RCb3gudmFsdWUgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgbWVzc2FnZUJveC52YWx1ZSA9IFwiXCI7XHJcblxyXG4gICAgICAgICAgICB9LCBmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIHdhcm5NZXNzYWdlLnN0eWxlID0gXCJcIjtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdGQUlMRUQuLi4nLCBlcnJvcik7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcblx0cmV0dXJuICg8PlxyXG5cdCAgPD5cclxuICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgIDxDb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJmdGNvLXNlY3Rpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIndyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgbm8tZ3V0dGVyc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFjdC13cmFwIHctMTAwIHAtbGctNSBwLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cIm1iLTRcIj5TZW5kIHVzIGEgbWVzc2FnZTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiZm9ybS1tZXNzYWdlLXdhcm5pbmdcIiBzdHlsZT17eyBcImRpc3BsYXlcIjogXCJub25lXCIgfX0gY2xhc3M9XCJtYi00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUGxlYXNlIHRyeSBhZ2FpbiFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cImZvcm0tbWVzc2FnZS1zdWNjZXNzXCIgc3R5bGU9e3sgXCJkaXNwbGF5XCI6IFwibm9uZVwiIH19IGNsYXNzPVwibWItNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFlvdXIgbWVzc2FnZSB3YXMgc2VudCwgdGhhbmsgeW91IVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiY29udGFjdEZvcm1cIiBuYW1lPVwiY29udGFjdEZvcm1cIiBjbGFzcz1cImNvbnRhY3RGb3JtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cIm5hbWVcIiBpZD1cIm5hbWVcIiBwbGFjZWhvbGRlcj1cIk5hbWVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJlbWFpbFwiIGlkPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cIkVtYWlsXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJzdWJqZWN0XCIgaWQ9XCJzdWJqZWN0XCIgcGxhY2Vob2xkZXI9XCJTdWJqZWN0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgbmFtZT1cIm1lc3NhZ2VcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIGlkPVwibWVzc2FnZVwiIGNvbHM9XCIzMFwiIHJvd3M9XCI2XCIgcGxhY2Vob2xkZXI9XCJNZXNzYWdlXCI+PC90ZXh0YXJlYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e1NlbmRNZXNzYWdlfSB2YWx1ZT1cIlNlbmQgTWVzc2FnZVwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3VibWl0dGluZ1wiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNiBkLWZsZXggYWxpZ24taXRlbXMtc3RyZXRjaFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5mby13cmFwIHctMTAwIHAtbGctNSBwLTQgaW1nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+Q29udGFjdCB1czwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIm1iLTRcIj5XZSdyZSBvcGVuIGZvciBhbnkgc3VnZ2VzdGlvbiBvciBqdXN0IHRvIGhhdmUgYSBjaGF0PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRib3ggdy0xMDAgZC1mbGV4IGFsaWduLWl0ZW1zLXN0YXJ0XCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0IHBsLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+PHNwYW4+QWRkcmVzczo8L3NwYW4+IERlIFB1ZGRpbmdmYWJyaWVrLCBHcm9uaW5nZW4sIFRoZSBOZXRoZXJsYW5kczwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkYm94IHctMTAwIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQgcGwtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD48c3Bhbj5FbWFpbDo8L3NwYW4+IDxhIGhyZWY9XCJtYWlsdG86c3RldmUudGhpanNzZW4yMEBnbWFpbC5jb21cIj5zdGV2ZS50aGlqc3NlbjIwQGdtYWlsLmNvbTwvYT48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkYm94IHctMTAwIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQgcGwtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD48c3Bhbj5XZWJzaXRlPC9zcGFuPiA8YSBocmVmPVwiI1wiPmh0dHBzOi8vZGVtZXRlcmdpZnQuY29tLzwvYT48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgIDwvPlxyXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJtYi01XCI+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcblx0XHRcdFx0PGltZyBzdHlsZT17eyAnd2lkdGgnOiAnMzQwcHgnIH19IHNyYz0naHR0cHM6Ly9pLnBvc3RpbWcuY2MvMXo3UnBac1gvZmF2aWNvbi5wbmcnPjwvaW1nPlxyXG5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cclxuXHRcdFx0XHRcdFx0PGgxIHN0eWxlPXt7IGZvbnRTaXplOiAnMzlweCcgfX0+QSBnaWZ0IHdpdGggYSBzdG9yeTwvaDE+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcblx0XHRcdFx0PGRpdiBzdHlsZT17eyAnd2lkdGgnOiAnNjkwcHgnIH19IGNsYXNzTmFtZT1cImNvbFwiPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxyXG5cdFx0XHRcdFx0XHQ8aDQgc3R5bGU9e3sgZm9udFNpemU6ICcyMHB4JyB9fT5EZW1ldGVyIGNyZWF0ZXMgdGhlIG1vc3QgZWFzeSwgdHJhbnNwYXJlbnQgYW5kIGZ1biBORlQgY2hhcml0eSBhdWN0aW9uIG9uIFdlYjMsIGJ5IGhlbHBpbmcgY2hhcml0aWVzIHJhaXNlIGFkZGl0aW9uYWwgc3VwcG9ydCE8L2g0PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG5cdFx0XHRcdDxkaXYgc3R5bGU9e3sgd2lkdGg6ICcyNTBweCcgfX0gY2xhc3NOYW1lPVwiY29sXCI+XHJcblx0XHRcdFx0XHQ8TmF2TGluayB0bz1cIi9sb2dpbj9bL2RvbmF0aW9uXVwiPlxyXG5cclxuXHRcdFx0XHRcdFx0PGRpdiBzdHlsZT17e1xyXG5cdFx0XHRcdFx0XHRcdGJhY2tncm91bmQ6ICdyZ2IoMjM2LCAyMDEsIDApJyxcclxuXHRcdFx0XHRcdFx0XHR0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG5cdFx0XHRcdFx0XHRcdGN1cnNvcjogJ3BvaW50ZXInLFxyXG5cdFx0XHRcdFx0XHRcdGhlaWdodDogJzczcHgnLFxyXG5cdFx0XHRcdFx0XHRcdHBhZGRpbmc6ICcxMHB4IDBweCcsXHJcblx0XHRcdFx0XHRcdFx0d2lkdGg6ICcxMDAlJyxcclxuXHRcdFx0XHRcdFx0XHRtYXJnaW46ICcwcHgnXHJcblx0XHRcdFx0XHRcdH19IGNsYXNzTmFtZT1cImNhcmQgY2FyZC1ib2R5XCI+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5MZXTigJlzIGRvbmF0ZSE8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L05hdkxpbms+XHJcblx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJFdmVudCByb3dcIj5cclxuXHRcdFx0XHQ8aW1nIHN0eWxlPXt7ICdwYWRkaW5nJzogJzAnLCB3aWR0aDogJy13ZWJraXQtZmlsbC1hdmFpbGFibGUnIH19IHNyYz1cImh0dHBzOi8vd3d3Lm1ldGlzZ2lmdC5jb20vRXZlbnQvUGFuZWwuc3ZnXCIgLz5cclxuXHRcdFx0XHQ8aW1nIHN0eWxlPXt7IFwicG9zaXRpb25cIjogXCJhYnNvbHV0ZVwiLCBcImJvdHRvbVwiOiBcIjBcIiB9fSBzcmM9XCJodHRwczovL3d3dy5tZXRpc2dpZnQuY29tL0V2ZW50L0dyb3VwLnN2Z1wiIC8+XHJcblx0XHRcdFx0PGltZyBzdHlsZT17eyBcInBhZGRpbmdcIjogXCIwcHhcIiwgXCJwb3NpdGlvblwiOiBcImFic29sdXRlXCIsIFwid2lkdGhcIjogXCI1NiVcIiwgXCJtYXJnaW5Ub3BcIjogXCIxMCVcIiB9fSBzcmM9XCJodHRwczovL3d3dy5tZXRpc2dpZnQuY29tL0V2ZW50L0NoYXJpdHlUZXh0LnN2Z1wiIC8+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHkgRXZlbnRCVE5cIj5cclxuXHRcdFx0XHRcdDxOYXZMaW5rIHRvPVwiL2xvZ2luP1svQ3JlYXRlRXZlbnRzXVwiPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFN0YXJ0IGV2ZW50XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9OYXZMaW5rPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdDwvPlxyXG5cclxuXHQpO1xyXG59IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gZnVuY3Rpb24oKSB7IHJldHVybiBcIjQ0MGZlODc0MmUxOGQ0NWI4ZjM0XCI7IH0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIk5hdkxpbmsiLCJMT0dJTk1vZGFsIiwiUm93IiwiQ29sIiwiSG9tZSIsIm1vZGFsU2hvdyIsInNldE1vZGFsU2hvdyIsIlNlbmRNZXNzYWdlIiwibmFtZUJveCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJlbWFpbEJveCIsInN1YmplY3RCb3giLCJtZXNzYWdlQm94IiwibmFtZUVMTSIsInZhbHVlIiwiZW1haWxFTE0iLCJzdWJqZWN0RUxNIiwibWVzc2FnZUVMTSIsInN1Y2Nlc3NNZXNzYWdlIiwid2Fybk1lc3NhZ2UiLCJzdHlsZSIsImRpc3BsYXkiLCJ0ZW1wbGF0ZVBhcmFtcyIsInRvIiwibmFtZSIsImVtYWlsIiwic3ViamVjdCIsIm1lc3NhZ2UiLCJlbWFpbGpzIiwic2VuZCIsInRoZW4iLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJzdGF0dXMiLCJ0ZXh0IiwiZXJyb3IiLCJmb250U2l6ZSIsIndpZHRoIiwiYmFja2dyb3VuZCIsInRleHRBbGlnbiIsImN1cnNvciIsImhlaWdodCIsInBhZGRpbmciLCJtYXJnaW4iXSwic291cmNlUm9vdCI6IiJ9