"use strict";
self["webpackHotUpdatedemetergift"]("/index",{

/***/ "./src/components/components/modals/DonateNFTModal.jsx":
/*!*************************************************************!*\
  !*** ./src/components/components/modals/DonateNFTModal.jsx ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ DonateNFTModal; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/asyncToGenerator */ "./node_modules/@babel/runtime-corejs3/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/slicedToArray */ "./node_modules/@babel/runtime-corejs3/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/regenerator */ "./node_modules/@babel/runtime-corejs3/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap/Modal */ "./node_modules/react-bootstrap/esm/Modal.js");
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-bootstrap/Form */ "./node_modules/react-bootstrap/esm/Form.js");
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-bootstrap/Button */ "./node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var _UseFormInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../UseFormInput */ "./src/components/components/UseFormInput.jsx");
/* harmony import */ var _pages_Events_token__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/pages/Events/token */ "./src/pages/Events/token.jsx");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var _services_useContract__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../services/useContract */ "./services/useContract.js");
/* harmony import */ var near_api_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! near-api-js */ "./node_modules/near-api-js/lib/browser-index.js");
/* harmony import */ var near_api_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(near_api_js__WEBPACK_IMPORTED_MODULE_8__);












function DonateNFTModal(_ref) {
  var show = _ref.show,
      onHide = _ref.onHide,
      senderAddress = _ref.senderAddress,
      type = _ref.type,
      EventID = _ref.EventID,
      SelectedTitle = _ref.SelectedTitle,
      enddate = _ref.enddate,
      selectedWallet = _ref.selectedWallet;

  var _useContract = (0,_services_useContract__WEBPACK_IMPORTED_MODULE_7__["default"])('ERC721'),
      contract = _useContract.contract,
      signerAddress = _useContract.signerAddress;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("Aurora/Paras"),
      _useState2 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      selectedMarket = _useState2[0],
      setSelectedMarket = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(" is creating..."),
      _useState4 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState3, 2),
      PendingText = _useState4[0],
      setPendingText = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("Please try again later"),
      _useState6 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState5, 2),
      ErrorText = _useState6[0],
      setErrorText = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(" has created on Aurora!"),
      _useState8 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState7, 2),
      SuccessText = _useState8[0],
      setSuccessText = _useState8[1];

  var _UseFormInput = (0,_UseFormInput__WEBPACK_IMPORTED_MODULE_4__["default"])({
    type: 'text',
    placeholder: 'Enter name'
  }),
      _UseFormInput2 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_UseFormInput, 2),
      name = _UseFormInput2[0],
      nameInput = _UseFormInput2[1];

  var _UseFormInput3 = (0,_UseFormInput__WEBPACK_IMPORTED_MODULE_4__["default"])({
    as: 'textarea',
    placeholder: 'Enter description'
  }),
      _UseFormInput4 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_UseFormInput3, 2),
      description = _UseFormInput4[0],
      descriptionInput = _UseFormInput4[1];

  var _UseFormInput5 = (0,_UseFormInput__WEBPACK_IMPORTED_MODULE_4__["default"])({
    type: 'text',
    placeholder: 'Enter image url'
  }),
      _UseFormInput6 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_UseFormInput5, 2),
      url = _UseFormInput6[0],
      urlInput = _UseFormInput6[1];

  var _UseFormInput7 = (0,_UseFormInput__WEBPACK_IMPORTED_MODULE_4__["default"])({
    type: 'text',
    placeholder: 'Enter Price'
  }),
      _UseFormInput8 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_UseFormInput7, 2),
      price = _UseFormInput8[0],
      priceInput = _UseFormInput8[1];

  var _UseFormInput9 = (0,_UseFormInput__WEBPACK_IMPORTED_MODULE_4__["default"])({
    type: 'text',
    placeholder: 'Enter NFT address'
  }),
      _UseFormInput10 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_UseFormInput9, 2),
      NFTaddress = _UseFormInput10[0],
      NFTaddressInput = _UseFormInput10[1];

  var _UseFormInput11 = (0,_UseFormInput__WEBPACK_IMPORTED_MODULE_4__["default"])({
    type: 'text',
    placeholder: 'Enter Cryptopunk address'
  }),
      _UseFormInput12 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_UseFormInput11, 2),
      Cryptopunkaddress = _UseFormInput12[0],
      CryptopunkaddressInput = _UseFormInput12[1];

  function createNFT() {
    return _createNFT.apply(this, arguments);
  }

  function _createNFT() {
    _createNFT = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
      return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.promise(CreatingNFTAirtable, {
                pending: "Creating ".concat(type, " on Airtable..."),
                error: "Please try again",
                success: "Created ".concat(type, " on Airtable!")
              });

            case 2:
              _context.next = 4;
              return react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.promise(creatingNFTonAurora, {
                pending: "Creating ".concat(type, " on Aurora..."),
                error: "Please try again",
                success: "Created ".concat(type, " on Aurora!")
              });

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _createNFT.apply(this, arguments);
  }

  function CreatingNFTAirtable() {
    return _CreatingNFTAirtable.apply(this, arguments);
  }

  function _CreatingNFTAirtable() {
    _CreatingNFTAirtable = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2() {
      var Airtable, base;
      return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              Airtable = __webpack_require__(/*! airtable */ "./node_modules/airtable/lib/airtable.js");
              Airtable.configure({
                endpointUrl: 'https://api.airtable.com',
                apiKey: 'keyR1Rrcl9O2s9bTs'
              });
              base = __webpack_require__(/*! airtable */ "./node_modules/airtable/lib/airtable.js").base('appgbRCpbkzmdcucO');
              _context2.next = 5;
              return base('nftcryptopunks').create([{
                "fields": {
                  "name": name,
                  "description": description,
                  "price": price,
                  "type": type,
                  "image": url,
                  "eventid": Number(EventID)
                }
              }], function (err, records) {
                if (err) {
                  console.error(err);
                  return;
                }

                records.forEach(function (record) {
                  eventID = record.getId();
                });
              });

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return _CreatingNFTAirtable.apply(this, arguments);
  }

  function creatingNFTonAurora() {
    return _creatingNFTonAurora.apply(this, arguments);
  }

  function _creatingNFTonAurora() {
    _creatingNFTonAurora = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee3() {
      var Logourl, tokenAddress, tokenID, createdObject, result;
      return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              Logourl = url;
              tokenAddress = NFTaddress;

              if ("Cryptopunk" == type) {
                tokenAddress = Cryptopunkaddress;
              }

              _context3.prev = 3;
              _context3.next = 6;
              return (0,_pages_Events_token__WEBPACK_IMPORTED_MODULE_5__.createTokenAPI)(EventID, name, description, price, type, Logourl);

            case 6:
              tokenID = _context3.sent;
              createdObject = {
                eventid: EventID,
                name: name,
                description: description,
                Bidprice: price,
                price: price,
                type: type,
                image: Logourl
              };
              _context3.next = 10;
              return contract.claimToken(signerAddress, EventID, tokenID, createdObject);

            case 10:
              result = _context3.sent;
              console.log(result);
              window.location.href = "/donation/auction?".concat(EventID);
              window.document.getElementsByClassName("btn-close")[0].click();
              _context3.next = 19;
              break;

            case 16:
              _context3.prev = 16;
              _context3.t0 = _context3["catch"](3);
              return _context3.abrupt("return", _context3.t0);

            case 19:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[3, 16]]);
    }));
    return _creatingNFTonAurora.apply(this, arguments);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react__WEBPACK_IMPORTED_MODULE_3__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_9__["default"], {
    show: show,
    onHide: onHide,
    "aria-labelledby": "contained-modal-title-vcenter",
    size: "lg",
    centered: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_9__["default"].Header, {
    closeButton: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_9__["default"].Title, {
    id: "contained-modal-title-vcenter"
  }, "Donate ", type, " - ", SelectedTitle)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_9__["default"].Body, {
    className: "show-grid"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10__["default"].Group, {
    className: "mb-3",
    controlId: "formGroupName"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10__["default"].Label, null, "Name"), nameInput), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10__["default"].Group, {
    className: "mb-3",
    controlId: "formGroupDescription"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10__["default"].Label, null, "Description"), descriptionInput), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10__["default"].Group, {
    className: "mb-3",
    controlId: "formGroupName"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10__["default"].Label, null, "Opening price in NEAR"), priceInput), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10__["default"].Group, {
    className: "mb-3",
    controlId: "formGroupImageUrl"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10__["default"].Label, null, "Enter image URL"), urlInput), type == "Cryptopunk" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10__["default"].Group, {
    className: "mb-3",
    controlId: "formGroupImageUrl"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10__["default"].Label, null, "Cryptopunk address"), CryptopunkaddressInput) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10__["default"].Group, {
    className: "mb-3",
    controlId: "formGroupImageUrl"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10__["default"].Label, null, "NFT address"), NFTaddressInput), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    className: "d-grid",
    style: {
      marginTop: "20px"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_11__["default"], {
    variant: "primary",
    onClick: createNFT
  }, "Donate ", type))))));
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "9aa93ee944b30b9cf986"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2luZGV4LmY3NDcwMjY3NTQ0MjJjNGVjNDI0LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRWUsU0FBU1csY0FBVCxPQVNaO0FBQUEsTUFSRkMsSUFRRSxRQVJGQSxJQVFFO0FBQUEsTUFQRkMsTUFPRSxRQVBGQSxNQU9FO0FBQUEsTUFORkMsYUFNRSxRQU5GQSxhQU1FO0FBQUEsTUFMRkMsSUFLRSxRQUxGQSxJQUtFO0FBQUEsTUFKRkMsT0FJRSxRQUpGQSxPQUlFO0FBQUEsTUFIRkMsYUFHRSxRQUhGQSxhQUdFO0FBQUEsTUFGRkMsT0FFRSxRQUZGQSxPQUVFO0FBQUEsTUFERkMsY0FDRSxRQURGQSxjQUNFOztBQUVGLHFCQUFvQ1YsaUVBQVcsQ0FBQyxRQUFELENBQS9DO0FBQUEsTUFBUVcsUUFBUixnQkFBUUEsUUFBUjtBQUFBLE1BQWtCQyxhQUFsQixnQkFBa0JBLGFBQWxCOztBQUNBLGtCQUE0Q3BCLCtDQUFRLENBQUMsY0FBRCxDQUFwRDtBQUFBO0FBQUEsTUFBT3FCLGNBQVA7QUFBQSxNQUF1QkMsaUJBQXZCOztBQUVBLG1CQUFzQ3RCLCtDQUFRLENBQUMsaUJBQUQsQ0FBOUM7QUFBQTtBQUFBLE1BQU91QixXQUFQO0FBQUEsTUFBb0JDLGNBQXBCOztBQUNBLG1CQUFrQ3hCLCtDQUFRLENBQUMsd0JBQUQsQ0FBMUM7QUFBQTtBQUFBLE1BQU95QixTQUFQO0FBQUEsTUFBa0JDLFlBQWxCOztBQUNBLG1CQUFzQzFCLCtDQUFRLENBQUMseUJBQUQsQ0FBOUM7QUFBQTtBQUFBLE1BQU8yQixXQUFQO0FBQUEsTUFBb0JDLGNBQXBCOztBQUVBLHNCQUEwQnZCLHlEQUFZLENBQUM7QUFDdENTLElBQUFBLElBQUksRUFBRSxNQURnQztBQUV0Q2UsSUFBQUEsV0FBVyxFQUFFO0FBRnlCLEdBQUQsQ0FBdEM7QUFBQTtBQUFB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QyxtRUFBRDtBQUFZLGFBQVMsRUFBQyxNQUF0QjtBQUE2QixhQUFTLEVBQUM7QUFBdkMsa0JBQ0MsaURBQUMsbUVBQUQsNkJBREQsRUFFRTRCLHNCQUZGLENBREEsZ0JBTUEsaURBQUMsbUVBQUQ7QUFBWSxhQUFTLEVBQUMsTUFBdEI7QUFBNkIsYUFBUyxFQUFDO0FBQXZDLGtCQUNDLGlEQUFDLG1FQUFELHNCQURELEVBRUVGLGVBRkYsQ0F4QkYsZUFnQ0M7QUFBSyxhQUFTLEVBQUMsUUFBZjtBQUF3QixTQUFLLEVBQUU7QUFBRXlDLE1BQUFBLFNBQVMsRUFBRTtBQUFiO0FBQS9CLGtCQUNDLGlEQUFDLCtEQUFEO0FBQVEsV0FBTyxFQUFDLFNBQWhCO0FBQTBCLFdBQU8sRUFBRXRDO0FBQW5DLGdCQUNTN0IsSUFEVCxDQURELENBaENELENBREQsQ0FiRCxDQURPLENBQVI7QUE0REE7Ozs7Ozs7O1VDck1ELHFDQUFxQyIsInNvdXJjZXMiOlsid2VicGFjazovL2RlbWV0ZXJnaWZ0Ly4vc3JjL2NvbXBvbmVudHMvY29tcG9uZW50cy9tb2RhbHMvRG9uYXRlTkZUTW9kYWwuanN4Iiwid2VicGFjazovL2RlbWV0ZXJnaWZ0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBNb2RhbCBmcm9tICdyZWFjdC1ib290c3RyYXAvTW9kYWwnO1xuaW1wb3J0IEZvcm0gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0Zvcm0nO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdyZWFjdC1ib290c3RyYXAvQnV0dG9uJztcbmltcG9ydCBVc2VGb3JtSW5wdXQgZnJvbSAnLi4vVXNlRm9ybUlucHV0JztcbmltcG9ydCB7IGNyZWF0ZVRva2VuQVBJIH0gZnJvbSAnQC9wYWdlcy9FdmVudHMvdG9rZW4nO1xuXG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcblxuaW1wb3J0IHVzZUNvbnRyYWN0IGZyb20gJy4uLy4uLy4uLy4uL3NlcnZpY2VzL3VzZUNvbnRyYWN0JztcbmltcG9ydCB7IFdhbGxldEFjY291bnQgfSBmcm9tICduZWFyLWFwaS1qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERvbmF0ZU5GVE1vZGFsKHtcblx0c2hvdyxcblx0b25IaWRlLFxuXHRzZW5kZXJBZGRyZXNzLFxuXHR0eXBlLFxuXHRFdmVudElELFxuXHRTZWxlY3RlZFRpdGxlLFxuXHRlbmRkYXRlLFxuXHRzZWxlY3RlZFdhbGxldFxufSkge1xuXG5cdGNvbnN0IHsgY29udHJhY3QsIHNpZ25lckFkZHJlc3MgfSA9IHVzZUNvbnRyYWN0KCdFUkM3MjEnKTtcblx0Y29uc3QgW3NlbGVjdGVkTWFya2V0LCBzZXRTZWxlY3RlZE1hcmtldF0gPSB1c2VTdGF0ZShcIkF1cm9yYS9QYXJhc1wiKTtcblxuXHRjb25zdCBbUGVuZGluZ1RleHQsIHNldFBlbmRpbmdUZXh0XSA9IHVzZVN0YXRlKFwiIGlzIGNyZWF0aW5nLi4uXCIpO1xuXHRjb25zdCBbRXJyb3JUZXh0LCBzZXRFcnJvclRleHRdID0gdXNlU3RhdGUoXCJQbGVhc2UgdHJ5IGFnYWluIGxhdGVyXCIpO1xuXHRjb25zdCBbU3VjY2Vzc1RleHQsIHNldFN1Y2Nlc3NUZXh0XSA9IHVzZVN0YXRlKFwiIGhhcyBjcmVhdGVkIG9uIEF1cm9yYSFcIik7XG5cblx0Y29uc3QgW25hbWUsIG5hbWVJbnB1dF0gPSBVc2VGb3JtSW5wdXQoe1xuXHRcdHR5cGU6ICd0ZXh0Jyxcblx0XHRwbGFjZWhvbGRlcjogJ0VudGVyIG5hbWUnLFxuXHR9KTtcblx0Y29uc3QgW2Rlc2NyaXB0aW9uLCBkZXNjcmlwdGlvbklucHV0XSA9IFVzZUZvcm1JbnB1dCh7XG5cdFx0YXM6ICd0ZXh0YXJlYScsXG5cdFx0cGxhY2Vob2xkZXI6ICdFbnRlciBkZXNjcmlwdGlvbicsXG5cdH0pO1xuXHRjb25zdCBbdXJsLCB1cmxJbnB1dF0gPSBVc2VGb3JtSW5wdXQoe1xuXHRcdHR5cGU6ICd0ZXh0Jyxcblx0XHRwbGFjZWhvbGRlcjogJ0VudGVyIGltYWdlIHVybCcsXG5cdH0pO1xuXG5cdGNvbnN0IFtwcmljZSwgcHJpY2VJbnB1dF0gPSBVc2VGb3JtSW5wdXQoe1xuXHRcdHR5cGU6ICd0ZXh0Jyxcblx0XHRwbGFjZWhvbGRlcjogJ0VudGVyIFByaWNlJyxcblx0fSk7XG5cdGNvbnN0IFtORlRhZGRyZXNzLCBORlRhZGRyZXNzSW5wdXRdID0gVXNlRm9ybUlucHV0KHtcblx0XHR0eXBlOiAndGV4dCcsXG5cdFx0cGxhY2Vob2xkZXI6ICdFbnRlciBORlQgYWRkcmVzcycsXG5cdH0pO1xuXHRjb25zdCBbQ3J5cHRvcHVua2FkZHJlc3MsIENyeXB0b3B1bmthZGRyZXNzSW5wdXRdID0gVXNlRm9ybUlucHV0KHtcblx0XHR0eXBlOiAndGV4dCcsXG5cdFx0cGxhY2Vob2xkZXI6ICdFbnRlciBDcnlwdG9wdW5rIGFkZHJlc3MnLFxuXHR9KTtcblxuXHRhc3luYyBmdW5jdGlvbiBjcmVhdGVORlQoKSB7XG5cdFx0YXdhaXQgdG9hc3QucHJvbWlzZShDcmVhdGluZ05GVEFpcnRhYmxlLCB7XG5cdFx0XHRwZW5kaW5nOiBgQ3JlYXRpbmcgJHt0eXBlfSBvbiBBaXJ0YWJsZS4uLmAsXG5cdFx0XHRlcnJvcjogYFBsZWFzZSB0cnkgYWdhaW5gLFxuXHRcdFx0c3VjY2VzczogYENyZWF0ZWQgJHt0eXBlfSBvbiBBaXJ0YWJsZSFgXG5cdFx0fSk7XG5cdFx0YXdhaXQgdG9hc3QucHJvbWlzZShjcmVhdGluZ05GVG9uQXVyb3JhLCB7XG5cdFx0XHRwZW5kaW5nOiBgQ3JlYXRpbmcgJHt0eXBlfSBvbiBBdXJvcmEuLi5gLFxuXHRcdFx0ZXJyb3I6IGBQbGVhc2UgdHJ5IGFnYWluYCxcblx0XHRcdHN1Y2Nlc3M6IGBDcmVhdGVkICR7dHlwZX0gb24gQXVyb3JhIWBcblx0XHR9KTtcblx0fVxuXHRhc3luYyBmdW5jdGlvbiBDcmVhdGluZ05GVEFpcnRhYmxlKCkge1xuXG4gICAgICAgIHZhciBBaXJ0YWJsZSA9IHJlcXVpcmUoJ2FpcnRhYmxlJyk7XG4gICAgICAgIEFpcnRhYmxlLmNvbmZpZ3VyZSh7XG4gICAgICAgICAgICBlbmRwb2ludFVybDogJ2h0dHBzOi8vYXBpLmFpcnRhYmxlLmNvbScsXG4gICAgICAgICAgICBhcGlLZXk6ICdrZXlSMVJyY2w5TzJzOWJUcydcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IGJhc2UgPSByZXF1aXJlKCdhaXJ0YWJsZScpLmJhc2UoJ2FwcGdiUkNwYmt6bWRjdWNPJyk7XG4gICAgICAgXG4gICAgICAgIGF3YWl0IGJhc2UoJ25mdGNyeXB0b3B1bmtzJykuY3JlYXRlKFtcblx0XHRcdHtcblx0XHRcdCAgXCJmaWVsZHNcIjoge1xuXHRcdFx0XHRcIm5hbWVcIjogbmFtZSxcblx0XHRcdFx0XCJkZXNjcmlwdGlvblwiOiBkZXNjcmlwdGlvbixcblx0XHRcdFx0XCJwcmljZVwiOiBwcmljZSxcblx0XHRcdFx0XCJ0eXBlXCI6IHR5cGUsXG5cdFx0XHRcdFwiaW1hZ2VcIjogdXJsLFxuXHRcdFx0XHRcImV2ZW50aWRcIjogTnVtYmVyKEV2ZW50SUQpXG5cdFx0XHQgIH1cblx0XHRcdH1cbiAgICAgICAgXSwgZnVuY3Rpb24gKGVyciwgcmVjb3Jkcykge1xuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZWNvcmRzLmZvckVhY2goZnVuY3Rpb24gKHJlY29yZCkge1xuICAgICAgICAgICAgICAgIGV2ZW50SUQgPSByZWNvcmQuZ2V0SWQoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICBcblxuICAgIH1cblx0YXN5bmMgZnVuY3Rpb24gY3JlYXRpbmdORlRvbkF1cm9yYSgpIHtcblx0XHRsZXQgTG9nb3VybCA9IHVybDtcblx0XHR2YXIgdG9rZW5BZGRyZXNzID0gTkZUYWRkcmVzcztcblx0XHRpZiAoXCJDcnlwdG9wdW5rXCIgPT0gdHlwZSkge1xuXHRcdFx0dG9rZW5BZGRyZXNzID0gQ3J5cHRvcHVua2FkZHJlc3M7XG5cdFx0fVxuXG5cdFx0dHJ5IHtcblxuXHRcdFx0Y29uc3QgdG9rZW5JRCA9IGF3YWl0IGNyZWF0ZVRva2VuQVBJKEV2ZW50SUQsIG5hbWUsIGRlc2NyaXB0aW9uLCBwcmljZSwgdHlwZSwgTG9nb3VybCk7XG5cdFx0XHRjb25zdCBjcmVhdGVkT2JqZWN0ID0ge1xuXHRcdFx0XHRldmVudGlkOiBFdmVudElELFxuXHRcdFx0XHRuYW1lOiBuYW1lLFxuXHRcdFx0XHRkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24sXG5cdFx0XHRcdEJpZHByaWNlOiBwcmljZSxcblx0XHRcdFx0cHJpY2U6IHByaWNlLFxuXHRcdFx0XHR0eXBlOiB0eXBlLFxuXHRcdFx0XHRpbWFnZTogTG9nb3VybFxuXHRcdFx0fTtcblx0XHRcdGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNvbnRyYWN0LmNsYWltVG9rZW4oXG5cdFx0XHRcdHNpZ25lckFkZHJlc3MsXG5cdFx0XHRcdEV2ZW50SUQsXG5cdFx0XHRcdHRva2VuSUQsXG5cdFx0XHRcdGNyZWF0ZWRPYmplY3Rcblx0XHRcdCk7XG5cblx0XHRcdGNvbnNvbGUubG9nKHJlc3VsdCk7XG5cdFx0XHR3aW5kb3cubG9jYXRpb24uaHJlZiA9IGAvZG9uYXRpb24vYXVjdGlvbj8ke0V2ZW50SUR9YDtcblx0XHRcdHdpbmRvdy5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYnRuLWNsb3NlXCIpWzBdLmNsaWNrKCk7XG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdHJldHVybiAoZXJyb3IpO1xuXHRcdH1cblxuXG5cdH1cblxuXG5cdHJldHVybiAoPD5cblx0XHQ8TW9kYWxcblx0XHRcdHNob3c9e3Nob3d9XG5cdFx0XHRvbkhpZGU9e29uSGlkZX1cblx0XHRcdGFyaWEtbGFiZWxsZWRieT1cImNvbnRhaW5lZC1tb2RhbC10aXRsZS12Y2VudGVyXCJcblx0XHRcdHNpemU9XCJsZ1wiXG5cdFx0XHRjZW50ZXJlZFxuXHRcdD5cblx0XHRcdDxNb2RhbC5IZWFkZXIgY2xvc2VCdXR0b24+XG5cdFx0XHRcdDxNb2RhbC5UaXRsZSBpZD1cImNvbnRhaW5lZC1tb2RhbC10aXRsZS12Y2VudGVyXCI+XG5cdFx0XHRcdFx0RG9uYXRlIHt0eXBlfSAtIHtTZWxlY3RlZFRpdGxlfVxuXHRcdFx0XHQ8L01vZGFsLlRpdGxlPlxuXG5cdFx0XHQ8L01vZGFsLkhlYWRlcj5cblx0XHRcdDxNb2RhbC5Cb2R5IGNsYXNzTmFtZT1cInNob3ctZ3JpZFwiPlxuXHRcdFx0XHQ8Rm9ybT5cblx0XHRcdFx0XHQ8Rm9ybS5Hcm91cCBjbGFzc05hbWU9XCJtYi0zXCIgY29udHJvbElkPVwiZm9ybUdyb3VwTmFtZVwiPlxuXHRcdFx0XHRcdFx0PEZvcm0uTGFiZWw+TmFtZTwvRm9ybS5MYWJlbD5cblx0XHRcdFx0XHRcdHtuYW1lSW5wdXR9XG5cdFx0XHRcdFx0PC9Gb3JtLkdyb3VwPlxuXHRcdFx0XHRcdDxGb3JtLkdyb3VwIGNsYXNzTmFtZT1cIm1iLTNcIiBjb250cm9sSWQ9XCJmb3JtR3JvdXBEZXNjcmlwdGlvblwiPlxuXHRcdFx0XHRcdFx0PEZvcm0uTGFiZWw+RGVzY3JpcHRpb248L0Zvcm0uTGFiZWw+XG5cdFx0XHRcdFx0XHR7ZGVzY3JpcHRpb25JbnB1dH1cblx0XHRcdFx0XHQ8L0Zvcm0uR3JvdXA+XG5cdFx0XHRcdFx0PEZvcm0uR3JvdXAgY2xhc3NOYW1lPVwibWItM1wiIGNvbnRyb2xJZD1cImZvcm1Hcm91cE5hbWVcIj5cblx0XHRcdFx0XHRcdDxGb3JtLkxhYmVsPk9wZW5pbmcgcHJpY2UgaW4gTkVBUjwvRm9ybS5MYWJlbD5cblx0XHRcdFx0XHRcdHtwcmljZUlucHV0fVxuXHRcdFx0XHRcdDwvRm9ybS5Hcm91cD5cblxuXHRcdFx0XHRcdDxGb3JtLkdyb3VwIGNsYXNzTmFtZT1cIm1iLTNcIiBjb250cm9sSWQ9XCJmb3JtR3JvdXBJbWFnZVVybFwiPlxuXHRcdFx0XHRcdFx0PEZvcm0uTGFiZWw+RW50ZXIgaW1hZ2UgVVJMPC9Gb3JtLkxhYmVsPlxuXHRcdFx0XHRcdFx0e3VybElucHV0fVxuXHRcdFx0XHRcdDwvRm9ybS5Hcm91cD5cblx0XHRcdFx0XHR7KHR5cGUgPT0gXCJDcnlwdG9wdW5rXCIpID8gKFxuXHRcdFx0XHRcdFx0PEZvcm0uR3JvdXAgY2xhc3NOYW1lPVwibWItM1wiIGNvbnRyb2xJZD1cImZvcm1Hcm91cEltYWdlVXJsXCI+XG5cdFx0XHRcdFx0XHRcdDxGb3JtLkxhYmVsPkNyeXB0b3B1bmsgYWRkcmVzczwvRm9ybS5MYWJlbD5cblx0XHRcdFx0XHRcdFx0e0NyeXB0b3B1bmthZGRyZXNzSW5wdXR9XG5cdFx0XHRcdFx0XHQ8L0Zvcm0uR3JvdXA+XG5cdFx0XHRcdFx0KSA6IChcblx0XHRcdFx0XHRcdDxGb3JtLkdyb3VwIGNsYXNzTmFtZT1cIm1iLTNcIiBjb250cm9sSWQ9XCJmb3JtR3JvdXBJbWFnZVVybFwiPlxuXHRcdFx0XHRcdFx0XHQ8Rm9ybS5MYWJlbD5ORlQgYWRkcmVzczwvRm9ybS5MYWJlbD5cblx0XHRcdFx0XHRcdFx0e05GVGFkZHJlc3NJbnB1dH1cblx0XHRcdFx0XHRcdDwvRm9ybS5Hcm91cD5cblx0XHRcdFx0XHQpXG5cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImQtZ3JpZFwiIHN0eWxlPXt7IG1hcmdpblRvcDogXCIyMHB4XCIgfX0+XG5cdFx0XHRcdFx0XHQ8QnV0dG9uIHZhcmlhbnQ9XCJwcmltYXJ5XCIgb25DbGljaz17Y3JlYXRlTkZUfT5cblx0XHRcdFx0XHRcdFx0RG9uYXRlIHt0eXBlfVxuXHRcdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvRm9ybT5cblx0XHRcdDwvTW9kYWwuQm9keT5cblx0XHQ8L01vZGFsPlxuXHRcdFxuXHQ8Lz5cblxuXG5cdCk7XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSBmdW5jdGlvbigpIHsgcmV0dXJuIFwiOWFhOTNlZTk0NGIzMGI5Y2Y5ODZcIjsgfSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiTW9kYWwiLCJGb3JtIiwiQnV0dG9uIiwiVXNlRm9ybUlucHV0IiwiY3JlYXRlVG9rZW5BUEkiLCJ0b2FzdCIsInVzZUNvbnRyYWN0IiwiV2FsbGV0QWNjb3VudCIsIkRvbmF0ZU5GVE1vZGFsIiwic2hvdyIsIm9uSGlkZSIsInNlbmRlckFkZHJlc3MiLCJ0eXBlIiwiRXZlbnRJRCIsIlNlbGVjdGVkVGl0bGUiLCJlbmRkYXRlIiwic2VsZWN0ZWRXYWxsZXQiLCJjb250cmFjdCIsInNpZ25lckFkZHJlc3MiLCJzZWxlY3RlZE1hcmtldCIsInNldFNlbGVjdGVkTWFya2V0IiwiUGVuZGluZ1RleHQiLCJzZXRQZW5kaW5nVGV4dCIsIkVycm9yVGV4dCIsInNldEVycm9yVGV4dCIsIlN1Y2Nlc3NUZXh0Iiwic2V0U3VjY2Vzc1RleHQiLCJwbGFjZWhvbGRlciIsIm5hbWUiLCJuYW1lSW5wdXQiLCJhcyIsImRlc2NyaXB0aW9uIiwiZGVzY3JpcHRpb25JbnB1dCIsInVybCIsInVybElucHV0IiwicHJpY2UiLCJwcmljZUlucHV0IiwiTkZUYWRkcmVzcyIsIk5GVGFkZHJlc3NJbnB1dCIsIkNyeXB0b3B1bmthZGRyZXNzIiwiQ3J5cHRvcHVua2FkZHJlc3NJbnB1dCIsImNyZWF0ZU5GVCIsInByb21pc2UiLCJDcmVhdGluZ05GVEFpcnRhYmxlIiwicGVuZGluZyIsImVycm9yIiwic3VjY2VzcyIsImNyZWF0aW5nTkZUb25BdXJvcmEiLCJBaXJ0YWJsZSIsInJlcXVpcmUiLCJjb25maWd1cmUiLCJlbmRwb2ludFVybCIsImFwaUtleSIsImJhc2UiLCJjcmVhdGUiLCJOdW1iZXIiLCJlcnIiLCJyZWNvcmRzIiwiY29uc29sZSIsImZvckVhY2giLCJyZWNvcmQiLCJldmVudElEIiwiZ2V0SWQiLCJMb2dvdXJsIiwidG9rZW5BZGRyZXNzIiwidG9rZW5JRCIsImNyZWF0ZWRPYmplY3QiLCJldmVudGlkIiwiQmlkcHJpY2UiLCJpbWFnZSIsImNsYWltVG9rZW4iLCJyZXN1bHQiLCJsb2ciLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJjbGljayIsIm1hcmdpblRvcCJdLCJzb3VyY2VSb290IjoiIn0=