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
                  "eventid": EventID
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
/******/ 	__webpack_require__.h = function() { return "f747026754422c4ec424"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2luZGV4LmRjYTBjMzBhMTA1Y2JjNjVlNjA4LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRWUsU0FBU1csY0FBVCxPQVNaO0FBQUEsTUFSRkMsSUFRRSxRQVJGQSxJQVFFO0FBQUEsTUFQRkMsTUFPRSxRQVBGQSxNQU9FO0FBQUEsTUFORkMsYUFNRSxRQU5GQSxhQU1FO0FBQUEsTUFMRkMsSUFLRSxRQUxGQSxJQUtFO0FBQUEsTUFKRkMsT0FJRSxRQUpGQSxPQUlFO0FBQUEsTUFIRkMsYUFHRSxRQUhGQSxhQUdFO0FBQUEsTUFGRkMsT0FFRSxRQUZGQSxPQUVFO0FBQUEsTUFERkMsY0FDRSxRQURGQSxjQUNFOztBQUVGLHFCQUFvQ1YsaUVBQVcsQ0FBQyxRQUFELENBQS9DO0FBQUEsTUFBUVcsUUFBUixnQkFBUUEsUUFBUjtBQUFBLE1BQWtCQyxhQUFsQixnQkFBa0JBLGFBQWxCOztBQUNBLGtCQUE0Q3BCLCtDQUFRLENBQUMsY0FBRCxDQUFwRDtBQUFBO0FBQUEsTUFBT3FCLGNBQVA7QUFBQSxNQUF1QkMsaUJBQXZCOztBQUVBLG1CQUFzQ3RCLCtDQUFRLENBQUMsaUJBQUQsQ0FBOUM7QUFBQTtBQUFBLE1BQU91QixXQUFQO0FBQUEsTUFBb0JDLGNBQXBCOztBQUNBLG1CQUFrQ3hCLCtDQUFRLENBQUMsd0JBQUQsQ0FBMUM7QUFBQTtBQUFBLE1BQU95QixTQUFQO0FBQUEsTUFBa0JDLFlBQWxCOztBQUNBLG1CQUFzQzFCLCtDQUFRLENBQUMseUJBQUQsQ0FBOUM7QUFBQTtBQUFBLE1BQU8yQixXQUFQO0FBQUEsTUFBb0JDLGNBQXBCOztBQUVBLHNCQUEwQnZCLHlEQUFZLENBQUM7QUFDdENTLElBQUFBLElBQUksRUFBRSxNQURnQztBQUV0Q2UsSUFBQUEsV0FBVyxFQUFFO0FBRnlCLEdBQUQsQ0FBdEM7QUFBQTtBQUFB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RUFBQyxNQUF0QjtBQUE2QixhQUFTLEVBQUM7QUFBdkMsa0JBQ0MsaURBQUMsbUVBQUQsNkJBREQsRUFFRTRCLHNCQUZGLENBREEsZ0JBTUEsaURBQUMsbUVBQUQ7QUFBWSxhQUFTLEVBQUMsTUFBdEI7QUFBNkIsYUFBUyxFQUFDO0FBQXZDLGtCQUNDLGlEQUFDLG1FQUFELHNCQURELEVBRUVGLGVBRkYsQ0F4QkYsZUFnQ0M7QUFBSyxhQUFTLEVBQUMsUUFBZjtBQUF3QixTQUFLLEVBQUU7QUFBRXdDLE1BQUFBLFNBQVMsRUFBRTtBQUFiO0FBQS9CLGtCQUNDLGlEQUFDLCtEQUFEO0FBQVEsV0FBTyxFQUFDLFNBQWhCO0FBQTBCLFdBQU8sRUFBRXJDO0FBQW5DLGdCQUNTN0IsSUFEVCxDQURELENBaENELENBREQsQ0FiRCxDQURPLENBQVI7QUE0REE7Ozs7Ozs7O1VDck1ELHFDQUFxQyIsInNvdXJjZXMiOlsid2VicGFjazovL2RlbWV0ZXJnaWZ0Ly4vc3JjL2NvbXBvbmVudHMvY29tcG9uZW50cy9tb2RhbHMvRG9uYXRlTkZUTW9kYWwuanN4Iiwid2VicGFjazovL2RlbWV0ZXJnaWZ0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBNb2RhbCBmcm9tICdyZWFjdC1ib290c3RyYXAvTW9kYWwnO1xuaW1wb3J0IEZvcm0gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0Zvcm0nO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdyZWFjdC1ib290c3RyYXAvQnV0dG9uJztcbmltcG9ydCBVc2VGb3JtSW5wdXQgZnJvbSAnLi4vVXNlRm9ybUlucHV0JztcbmltcG9ydCB7IGNyZWF0ZVRva2VuQVBJIH0gZnJvbSAnQC9wYWdlcy9FdmVudHMvdG9rZW4nO1xuXG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcblxuaW1wb3J0IHVzZUNvbnRyYWN0IGZyb20gJy4uLy4uLy4uLy4uL3NlcnZpY2VzL3VzZUNvbnRyYWN0JztcbmltcG9ydCB7IFdhbGxldEFjY291bnQgfSBmcm9tICduZWFyLWFwaS1qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERvbmF0ZU5GVE1vZGFsKHtcblx0c2hvdyxcblx0b25IaWRlLFxuXHRzZW5kZXJBZGRyZXNzLFxuXHR0eXBlLFxuXHRFdmVudElELFxuXHRTZWxlY3RlZFRpdGxlLFxuXHRlbmRkYXRlLFxuXHRzZWxlY3RlZFdhbGxldFxufSkge1xuXG5cdGNvbnN0IHsgY29udHJhY3QsIHNpZ25lckFkZHJlc3MgfSA9IHVzZUNvbnRyYWN0KCdFUkM3MjEnKTtcblx0Y29uc3QgW3NlbGVjdGVkTWFya2V0LCBzZXRTZWxlY3RlZE1hcmtldF0gPSB1c2VTdGF0ZShcIkF1cm9yYS9QYXJhc1wiKTtcblxuXHRjb25zdCBbUGVuZGluZ1RleHQsIHNldFBlbmRpbmdUZXh0XSA9IHVzZVN0YXRlKFwiIGlzIGNyZWF0aW5nLi4uXCIpO1xuXHRjb25zdCBbRXJyb3JUZXh0LCBzZXRFcnJvclRleHRdID0gdXNlU3RhdGUoXCJQbGVhc2UgdHJ5IGFnYWluIGxhdGVyXCIpO1xuXHRjb25zdCBbU3VjY2Vzc1RleHQsIHNldFN1Y2Nlc3NUZXh0XSA9IHVzZVN0YXRlKFwiIGhhcyBjcmVhdGVkIG9uIEF1cm9yYSFcIik7XG5cblx0Y29uc3QgW25hbWUsIG5hbWVJbnB1dF0gPSBVc2VGb3JtSW5wdXQoe1xuXHRcdHR5cGU6ICd0ZXh0Jyxcblx0XHRwbGFjZWhvbGRlcjogJ0VudGVyIG5hbWUnLFxuXHR9KTtcblx0Y29uc3QgW2Rlc2NyaXB0aW9uLCBkZXNjcmlwdGlvbklucHV0XSA9IFVzZUZvcm1JbnB1dCh7XG5cdFx0YXM6ICd0ZXh0YXJlYScsXG5cdFx0cGxhY2Vob2xkZXI6ICdFbnRlciBkZXNjcmlwdGlvbicsXG5cdH0pO1xuXHRjb25zdCBbdXJsLCB1cmxJbnB1dF0gPSBVc2VGb3JtSW5wdXQoe1xuXHRcdHR5cGU6ICd0ZXh0Jyxcblx0XHRwbGFjZWhvbGRlcjogJ0VudGVyIGltYWdlIHVybCcsXG5cdH0pO1xuXG5cdGNvbnN0IFtwcmljZSwgcHJpY2VJbnB1dF0gPSBVc2VGb3JtSW5wdXQoe1xuXHRcdHR5cGU6ICd0ZXh0Jyxcblx0XHRwbGFjZWhvbGRlcjogJ0VudGVyIFByaWNlJyxcblx0fSk7XG5cdGNvbnN0IFtORlRhZGRyZXNzLCBORlRhZGRyZXNzSW5wdXRdID0gVXNlRm9ybUlucHV0KHtcblx0XHR0eXBlOiAndGV4dCcsXG5cdFx0cGxhY2Vob2xkZXI6ICdFbnRlciBORlQgYWRkcmVzcycsXG5cdH0pO1xuXHRjb25zdCBbQ3J5cHRvcHVua2FkZHJlc3MsIENyeXB0b3B1bmthZGRyZXNzSW5wdXRdID0gVXNlRm9ybUlucHV0KHtcblx0XHR0eXBlOiAndGV4dCcsXG5cdFx0cGxhY2Vob2xkZXI6ICdFbnRlciBDcnlwdG9wdW5rIGFkZHJlc3MnLFxuXHR9KTtcblxuXHRhc3luYyBmdW5jdGlvbiBjcmVhdGVORlQoKSB7XG5cdFx0YXdhaXQgdG9hc3QucHJvbWlzZShDcmVhdGluZ05GVEFpcnRhYmxlLCB7XG5cdFx0XHRwZW5kaW5nOiBgQ3JlYXRpbmcgJHt0eXBlfSBvbiBBaXJ0YWJsZS4uLmAsXG5cdFx0XHRlcnJvcjogYFBsZWFzZSB0cnkgYWdhaW5gLFxuXHRcdFx0c3VjY2VzczogYENyZWF0ZWQgJHt0eXBlfSBvbiBBaXJ0YWJsZSFgXG5cdFx0fSk7XG5cdFx0YXdhaXQgdG9hc3QucHJvbWlzZShjcmVhdGluZ05GVG9uQXVyb3JhLCB7XG5cdFx0XHRwZW5kaW5nOiBgQ3JlYXRpbmcgJHt0eXBlfSBvbiBBdXJvcmEuLi5gLFxuXHRcdFx0ZXJyb3I6IGBQbGVhc2UgdHJ5IGFnYWluYCxcblx0XHRcdHN1Y2Nlc3M6IGBDcmVhdGVkICR7dHlwZX0gb24gQXVyb3JhIWBcblx0XHR9KTtcblx0fVxuXHRhc3luYyBmdW5jdGlvbiBDcmVhdGluZ05GVEFpcnRhYmxlKCkge1xuXG4gICAgICAgIHZhciBBaXJ0YWJsZSA9IHJlcXVpcmUoJ2FpcnRhYmxlJyk7XG4gICAgICAgIEFpcnRhYmxlLmNvbmZpZ3VyZSh7XG4gICAgICAgICAgICBlbmRwb2ludFVybDogJ2h0dHBzOi8vYXBpLmFpcnRhYmxlLmNvbScsXG4gICAgICAgICAgICBhcGlLZXk6ICdrZXlSMVJyY2w5TzJzOWJUcydcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IGJhc2UgPSByZXF1aXJlKCdhaXJ0YWJsZScpLmJhc2UoJ2FwcGdiUkNwYmt6bWRjdWNPJyk7XG4gICAgICAgXG4gICAgICAgIGF3YWl0IGJhc2UoJ25mdGNyeXB0b3B1bmtzJykuY3JlYXRlKFtcblx0XHRcdHtcblx0XHRcdCAgXCJmaWVsZHNcIjoge1xuXHRcdFx0XHRcIm5hbWVcIjogbmFtZSxcblx0XHRcdFx0XCJkZXNjcmlwdGlvblwiOiBkZXNjcmlwdGlvbixcblx0XHRcdFx0XCJwcmljZVwiOiBwcmljZSxcblx0XHRcdFx0XCJ0eXBlXCI6IHR5cGUsXG5cdFx0XHRcdFwiaW1hZ2VcIjogdXJsLFxuXHRcdFx0XHRcImV2ZW50aWRcIjogRXZlbnRJRFxuXHRcdFx0ICB9XG5cdFx0XHR9XG4gICAgICAgIF0sIGZ1bmN0aW9uIChlcnIsIHJlY29yZHMpIHtcbiAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVjb3Jkcy5mb3JFYWNoKGZ1bmN0aW9uIChyZWNvcmQpIHtcbiAgICAgICAgICAgICAgICBldmVudElEID0gcmVjb3JkLmdldElkKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgXG5cbiAgICB9XG5cdGFzeW5jIGZ1bmN0aW9uIGNyZWF0aW5nTkZUb25BdXJvcmEoKSB7XG5cdFx0bGV0IExvZ291cmwgPSB1cmw7XG5cdFx0dmFyIHRva2VuQWRkcmVzcyA9IE5GVGFkZHJlc3M7XG5cdFx0aWYgKFwiQ3J5cHRvcHVua1wiID09IHR5cGUpIHtcblx0XHRcdHRva2VuQWRkcmVzcyA9IENyeXB0b3B1bmthZGRyZXNzO1xuXHRcdH1cblxuXHRcdHRyeSB7XG5cblx0XHRcdGNvbnN0IHRva2VuSUQgPSBhd2FpdCBjcmVhdGVUb2tlbkFQSShFdmVudElELCBuYW1lLCBkZXNjcmlwdGlvbiwgcHJpY2UsIHR5cGUsIExvZ291cmwpO1xuXHRcdFx0Y29uc3QgY3JlYXRlZE9iamVjdCA9IHtcblx0XHRcdFx0ZXZlbnRpZDogRXZlbnRJRCxcblx0XHRcdFx0bmFtZTogbmFtZSxcblx0XHRcdFx0ZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLFxuXHRcdFx0XHRCaWRwcmljZTogcHJpY2UsXG5cdFx0XHRcdHByaWNlOiBwcmljZSxcblx0XHRcdFx0dHlwZTogdHlwZSxcblx0XHRcdFx0aW1hZ2U6IExvZ291cmxcblx0XHRcdH07XG5cdFx0XHRjb25zdCByZXN1bHQgPSBhd2FpdCBjb250cmFjdC5jbGFpbVRva2VuKFxuXHRcdFx0XHRzaWduZXJBZGRyZXNzLFxuXHRcdFx0XHRFdmVudElELFxuXHRcdFx0XHR0b2tlbklELFxuXHRcdFx0XHRjcmVhdGVkT2JqZWN0XG5cdFx0XHQpO1xuXG5cdFx0XHRjb25zb2xlLmxvZyhyZXN1bHQpO1xuXHRcdFx0d2luZG93LmxvY2F0aW9uLmhyZWYgPSBgL2RvbmF0aW9uL2F1Y3Rpb24/JHtFdmVudElEfWA7XG5cdFx0XHR3aW5kb3cuZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImJ0bi1jbG9zZVwiKVswXS5jbGljaygpO1xuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRyZXR1cm4gKGVycm9yKTtcblx0XHR9XG5cblxuXHR9XG5cblxuXHRyZXR1cm4gKDw+XG5cdFx0PE1vZGFsXG5cdFx0XHRzaG93PXtzaG93fVxuXHRcdFx0b25IaWRlPXtvbkhpZGV9XG5cdFx0XHRhcmlhLWxhYmVsbGVkYnk9XCJjb250YWluZWQtbW9kYWwtdGl0bGUtdmNlbnRlclwiXG5cdFx0XHRzaXplPVwibGdcIlxuXHRcdFx0Y2VudGVyZWRcblx0XHQ+XG5cdFx0XHQ8TW9kYWwuSGVhZGVyIGNsb3NlQnV0dG9uPlxuXHRcdFx0XHQ8TW9kYWwuVGl0bGUgaWQ9XCJjb250YWluZWQtbW9kYWwtdGl0bGUtdmNlbnRlclwiPlxuXHRcdFx0XHRcdERvbmF0ZSB7dHlwZX0gLSB7U2VsZWN0ZWRUaXRsZX1cblx0XHRcdFx0PC9Nb2RhbC5UaXRsZT5cblxuXHRcdFx0PC9Nb2RhbC5IZWFkZXI+XG5cdFx0XHQ8TW9kYWwuQm9keSBjbGFzc05hbWU9XCJzaG93LWdyaWRcIj5cblx0XHRcdFx0PEZvcm0+XG5cdFx0XHRcdFx0PEZvcm0uR3JvdXAgY2xhc3NOYW1lPVwibWItM1wiIGNvbnRyb2xJZD1cImZvcm1Hcm91cE5hbWVcIj5cblx0XHRcdFx0XHRcdDxGb3JtLkxhYmVsPk5hbWU8L0Zvcm0uTGFiZWw+XG5cdFx0XHRcdFx0XHR7bmFtZUlucHV0fVxuXHRcdFx0XHRcdDwvRm9ybS5Hcm91cD5cblx0XHRcdFx0XHQ8Rm9ybS5Hcm91cCBjbGFzc05hbWU9XCJtYi0zXCIgY29udHJvbElkPVwiZm9ybUdyb3VwRGVzY3JpcHRpb25cIj5cblx0XHRcdFx0XHRcdDxGb3JtLkxhYmVsPkRlc2NyaXB0aW9uPC9Gb3JtLkxhYmVsPlxuXHRcdFx0XHRcdFx0e2Rlc2NyaXB0aW9uSW5wdXR9XG5cdFx0XHRcdFx0PC9Gb3JtLkdyb3VwPlxuXHRcdFx0XHRcdDxGb3JtLkdyb3VwIGNsYXNzTmFtZT1cIm1iLTNcIiBjb250cm9sSWQ9XCJmb3JtR3JvdXBOYW1lXCI+XG5cdFx0XHRcdFx0XHQ8Rm9ybS5MYWJlbD5PcGVuaW5nIHByaWNlIGluIE5FQVI8L0Zvcm0uTGFiZWw+XG5cdFx0XHRcdFx0XHR7cHJpY2VJbnB1dH1cblx0XHRcdFx0XHQ8L0Zvcm0uR3JvdXA+XG5cblx0XHRcdFx0XHQ8Rm9ybS5Hcm91cCBjbGFzc05hbWU9XCJtYi0zXCIgY29udHJvbElkPVwiZm9ybUdyb3VwSW1hZ2VVcmxcIj5cblx0XHRcdFx0XHRcdDxGb3JtLkxhYmVsPkVudGVyIGltYWdlIFVSTDwvRm9ybS5MYWJlbD5cblx0XHRcdFx0XHRcdHt1cmxJbnB1dH1cblx0XHRcdFx0XHQ8L0Zvcm0uR3JvdXA+XG5cdFx0XHRcdFx0eyh0eXBlID09IFwiQ3J5cHRvcHVua1wiKSA/IChcblx0XHRcdFx0XHRcdDxGb3JtLkdyb3VwIGNsYXNzTmFtZT1cIm1iLTNcIiBjb250cm9sSWQ9XCJmb3JtR3JvdXBJbWFnZVVybFwiPlxuXHRcdFx0XHRcdFx0XHQ8Rm9ybS5MYWJlbD5DcnlwdG9wdW5rIGFkZHJlc3M8L0Zvcm0uTGFiZWw+XG5cdFx0XHRcdFx0XHRcdHtDcnlwdG9wdW5rYWRkcmVzc0lucHV0fVxuXHRcdFx0XHRcdFx0PC9Gb3JtLkdyb3VwPlxuXHRcdFx0XHRcdCkgOiAoXG5cdFx0XHRcdFx0XHQ8Rm9ybS5Hcm91cCBjbGFzc05hbWU9XCJtYi0zXCIgY29udHJvbElkPVwiZm9ybUdyb3VwSW1hZ2VVcmxcIj5cblx0XHRcdFx0XHRcdFx0PEZvcm0uTGFiZWw+TkZUIGFkZHJlc3M8L0Zvcm0uTGFiZWw+XG5cdFx0XHRcdFx0XHRcdHtORlRhZGRyZXNzSW5wdXR9XG5cdFx0XHRcdFx0XHQ8L0Zvcm0uR3JvdXA+XG5cdFx0XHRcdFx0KVxuXG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkLWdyaWRcIiBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMjBweFwiIH19PlxuXHRcdFx0XHRcdFx0PEJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiIG9uQ2xpY2s9e2NyZWF0ZU5GVH0+XG5cdFx0XHRcdFx0XHRcdERvbmF0ZSB7dHlwZX1cblx0XHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L0Zvcm0+XG5cdFx0XHQ8L01vZGFsLkJvZHk+XG5cdFx0PC9Nb2RhbD5cblx0XHRcblx0PC8+XG5cblxuXHQpO1xufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gZnVuY3Rpb24oKSB7IHJldHVybiBcImY3NDcwMjY3NTQ0MjJjNGVjNDI0XCI7IH0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIk1vZGFsIiwiRm9ybSIsIkJ1dHRvbiIsIlVzZUZvcm1JbnB1dCIsImNyZWF0ZVRva2VuQVBJIiwidG9hc3QiLCJ1c2VDb250cmFjdCIsIldhbGxldEFjY291bnQiLCJEb25hdGVORlRNb2RhbCIsInNob3ciLCJvbkhpZGUiLCJzZW5kZXJBZGRyZXNzIiwidHlwZSIsIkV2ZW50SUQiLCJTZWxlY3RlZFRpdGxlIiwiZW5kZGF0ZSIsInNlbGVjdGVkV2FsbGV0IiwiY29udHJhY3QiLCJzaWduZXJBZGRyZXNzIiwic2VsZWN0ZWRNYXJrZXQiLCJzZXRTZWxlY3RlZE1hcmtldCIsIlBlbmRpbmdUZXh0Iiwic2V0UGVuZGluZ1RleHQiLCJFcnJvclRleHQiLCJzZXRFcnJvclRleHQiLCJTdWNjZXNzVGV4dCIsInNldFN1Y2Nlc3NUZXh0IiwicGxhY2Vob2xkZXIiLCJuYW1lIiwibmFtZUlucHV0IiwiYXMiLCJkZXNjcmlwdGlvbiIsImRlc2NyaXB0aW9uSW5wdXQiLCJ1cmwiLCJ1cmxJbnB1dCIsInByaWNlIiwicHJpY2VJbnB1dCIsIk5GVGFkZHJlc3MiLCJORlRhZGRyZXNzSW5wdXQiLCJDcnlwdG9wdW5rYWRkcmVzcyIsIkNyeXB0b3B1bmthZGRyZXNzSW5wdXQiLCJjcmVhdGVORlQiLCJwcm9taXNlIiwiQ3JlYXRpbmdORlRBaXJ0YWJsZSIsInBlbmRpbmciLCJlcnJvciIsInN1Y2Nlc3MiLCJjcmVhdGluZ05GVG9uQXVyb3JhIiwiQWlydGFibGUiLCJyZXF1aXJlIiwiY29uZmlndXJlIiwiZW5kcG9pbnRVcmwiLCJhcGlLZXkiLCJiYXNlIiwiY3JlYXRlIiwiZXJyIiwicmVjb3JkcyIsImNvbnNvbGUiLCJmb3JFYWNoIiwicmVjb3JkIiwiZXZlbnRJRCIsImdldElkIiwiTG9nb3VybCIsInRva2VuQWRkcmVzcyIsInRva2VuSUQiLCJjcmVhdGVkT2JqZWN0IiwiZXZlbnRpZCIsIkJpZHByaWNlIiwiaW1hZ2UiLCJjbGFpbVRva2VuIiwicmVzdWx0IiwibG9nIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiY2xpY2siLCJtYXJnaW5Ub3AiXSwic291cmNlUm9vdCI6IiJ9