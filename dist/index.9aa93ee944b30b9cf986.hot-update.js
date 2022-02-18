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
                  throw err;
                  return;
                }
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
/******/ 	__webpack_require__.h = function() { return "305fbf4e99c43ad1c4a3"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2luZGV4LjlhYTkzZWU5NDRiMzBiOWNmOTg2LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRWUsU0FBU1csY0FBVCxPQVNaO0FBQUEsTUFSRkMsSUFRRSxRQVJGQSxJQVFFO0FBQUEsTUFQRkMsTUFPRSxRQVBGQSxNQU9FO0FBQUEsTUFORkMsYUFNRSxRQU5GQSxhQU1FO0FBQUEsTUFMRkMsSUFLRSxRQUxGQSxJQUtFO0FBQUEsTUFKRkMsT0FJRSxRQUpGQSxPQUlFO0FBQUEsTUFIRkMsYUFHRSxRQUhGQSxhQUdFO0FBQUEsTUFGRkMsT0FFRSxRQUZGQSxPQUVFO0FBQUEsTUFERkMsY0FDRSxRQURGQSxjQUNFOztBQUVGLHFCQUFvQ1YsaUVBQVcsQ0FBQyxRQUFELENBQS9DO0FBQUEsTUFBUVcsUUFBUixnQkFBUUEsUUFBUjtBQUFBLE1BQWtCQyxhQUFsQixnQkFBa0JBLGFBQWxCOztBQUNBLGtCQUE0Q3BCLCtDQUFRLENBQUMsY0FBRCxDQUFwRDtBQUFBO0FBQUEsTUFBT3FCLGNBQVA7QUFBQSxNQUF1QkMsaUJBQXZCOztBQUVBLG1CQUFzQ3RCLCtDQUFRLENBQUMsaUJBQUQsQ0FBOUM7QUFBQTtBQUFBLE1BQU91QixXQUFQO0FBQUEsTUFBb0JDLGNBQXBCOztBQUNBLG1CQUFrQ3hCLCtDQUFRLENBQUMsd0JBQUQsQ0FBMUM7QUFBQTtBQUFBLE1BQU95QixTQUFQO0FBQUEsTUFBa0JDLFlBQWxCOztBQUNBLG1CQUFzQzFCLCtDQUFRLENBQUMseUJBQUQsQ0FBOUM7QUFBQTtBQUFBLE1BQU8yQixXQUFQO0FBQUEsTUFBb0JDLGNBQXBCOztBQUVBLHNCQUEwQnZCLHlEQUFZLENBQUM7QUFDdENTLElBQUFBLElBQUksRUFBRSxNQURnQztBQUV0Q2UsSUFBQUEsV0FBVyxFQUFFO0FBRnlCLEdBQUQsQ0FBdEM7QUFBQTtBQUFBLE1BQU9DLElBQVA7QUFBQSxNQUFhQyxTQUFiOztBQUlBLHVCQUF3QzFCLHlEQUFZLENBQUM7QUFDcEQyQixJQUFBQSxFQUFFLEVBQUUsVUFEZ0Q7QUFFcERILElBQUFBLFdBQVcsRUFBRTtBQUZ1QyxHQUFELENBQXBEO0FBQUE7QUFBQSxNQUFPSSxXQUFQO0FBQUEsTUFBb0JDLGdCQUFwQjs7QUFJQSx1QkFBd0I3Qix5REFBWSxDQUFDO0FBQ3BDUyxJQUFBQSxJQUFJLEVBQUUsTUFEOEI7QUFFcENlLElBQUFBLFdBQVcsRUFBRTtBQUZ1QixHQUFELENBQXBDO0FBQUE7QUFBQSxNQUFPTSxHQUFQO0FBQUEsTUFBWUMsUUFBWjs7QUFLQSx1QkFBNEIvQix5REFBWSxDQUFDO0FBQ3hDUyxJQUFBQSxJQUFJLEVBQUUsTUFEa0M7QUFFeENlLElBQUFBLFdBQVcsRUFBRTtBQUYyQixHQUFELENBQXhDO0FBQUE7QUFBQSxNQUFPUSxLQUFQO0FBQUEsTUFBY0MsVUFBZDs7QUFJQSx1QkFBc0NqQyx5REFBWSxDQUFDO0FBQ2xEUyxJQUFBQSxJQUFJLEVBQUUsTUFENEM7QUFFbERlLElBQUFBLFdBQVcsRUFBRTtBQUZxQyxHQUFELENBQWxEO0FBQUE7QUFBQSxNQUFPVSxVQUFQO0FBQUEsTUFBbUJDLGVBQW5COztBQUlBLHdCQUFvRG5DLHlEQUFZLENBQUM7QUFDaEVTLElBQUFBLElBQUksRUFBRSxNQUQwRDtBQUVoRWUsSUFBQUEsV0FBVyxFQUFFO0FBRm1ELEdBQUQsQ0FBaEU7QUFBQTtBQUFBLE1BQU9ZLGlCQUFQO0FBQUEsTUFBMEJDLHNCQUExQjs7QUE5QkUsV0FtQ2FDLFNBbkNiO0FBQUE7QUFBQTs7QUFBQTtBQUFBLDBNQW1DRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDT3BDLHlEQUFBLENBQWNzQyxtQkFBZCxFQUFtQztBQUN4Q0MsZ0JBQUFBLE9BQU8scUJBQWNoQyxJQUFkLG9CQURpQztBQUV4Q2lDLGdCQUFBQSxLQUFLLG9CQUZtQztBQUd4Q0MsZ0JBQUFBLE9BQU8sb0JBQWFsQyxJQUFiO0FBSGlDLGVBQW5DLENBRFA7O0FBQUE7QUFBQTtBQUFBLHFCQU1PUCx5REFBQSxDQUFjMEMsbUJBQWQsRUFBbUM7QUFDeENILGdCQUFBQSxPQUFPLHFCQUFjaEMsSUFBZCxrQkFEaUM7QUFFeENpQyxnQkFBQUEsS0FBSyxvQkFGbUM7QUFHeENDLGdCQUFBQSxPQUFPLG9CQUFhbEMsSUFBYjtBQUhpQyxlQUFuQyxDQU5QOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBbkNFO0FBQUE7QUFBQTs7QUFBQSxXQStDYStCLG1CQS9DYjtBQUFBO0FBQUE7O0FBQUE7QUFBQSxvTkErQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRVdLLGNBQUFBLFFBRlgsR0FFc0JDLG1CQUFPLENBQUMseURBQUQsQ0FGN0I7QUFHT0QsY0FBQUEsUUFBUSxDQUFDRSxTQUFULENBQW1CO0FBQ2ZDLGdCQUFBQSxXQUFXLEVBQUUsMEJBREU7QUFFZkMsZ0JBQUFBLE1BQU0sRUFBRTtBQUZPLGVBQW5CO0FBSU1DLGNBQUFBLElBUGIsR0FPb0JKLG1GQUFBLENBQXlCLG1CQUF6QixDQVBwQjtBQUFBO0FBQUEscUJBU2FJLElBQUksQ0FBQyxnQkFBRCxDQUFKLENBQXVCQyxNQUF2QixDQUE4QixDQUN6QztBQUNFLDBCQUFVO0FBQ1gsMEJBQVExQixJQURHO0FBRVgsaUNBQWVHLFdBRko7QUFHWCwyQkFBU0ksS0FIRTtBQUlYLDBCQUFRdkIsSUFKRztBQUtYLDJCQUFTcUIsR0FMRTtBQU1YLDZCQUFXc0IsTUFBTSxDQUFDMUMsT0FBRDtBQU5OO0FBRFosZUFEeUMsQ0FBOUIsRUFXSCxVQUFVMkMsR0FBVixFQUFlQyxPQUFmLEVBQXdCO0FBQ3ZCLG9CQUFJRCxHQUFKLEVBQVM7QUFDTEUsa0JBQUFBLE9BQU8sQ0FBQ2IsS0FBUixDQUFjVyxHQUFkO0FBQ1osd0JBQU1BLEdBQU47QUFDWTtBQUNIO0FBRUosZUFsQkssQ0FUYjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQS9DRTtBQUFBO0FBQUE7O0FBQUEsV0E4RWFULG1CQTlFYjtBQUFBO0FBQUE7O0FBQUE7QUFBQSxvTkE4RUY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0tZLGNBQUFBLE9BREwsR0FDZTFCLEdBRGY7QUFFSzJCLGNBQUFBLFlBRkwsR0FFb0J2QixVQUZwQjs7QUFHQyxrQkFBSSxnQkFBZ0J6QixJQUFwQixFQUEwQjtBQUN6QmdELGdCQUFBQSxZQUFZLEdBQUdyQixpQkFBZjtBQUNBOztBQUxGO0FBQUE7QUFBQSxxQkFTd0JuQyxtRUFBYyxDQUFDUyxPQUFELEVBQVVlLElBQVYsRUFBZ0JHLFdBQWhCLEVBQTZCSSxLQUE3QixFQUFvQ3ZCLElBQXBDLEVBQTBDK0MsT0FBMUMsQ0FUdEM7O0FBQUE7QUFTUUUsY0FBQUEsT0FUUjtBQVVRQyxjQUFBQSxhQVZSLEdBVXdCO0FBQ3JCQyxnQkFBQUEsT0FBTyxFQUFFbEQsT0FEWTtBQUVyQmUsZ0JBQUFBLElBQUksRUFBRUEsSUFGZTtBQUdyQkcsZ0JBQUFBLFdBQVcsRUFBRUEsV0FIUTtBQUlyQmlDLGdCQUFBQSxRQUFRLEVBQUU3QixLQUpXO0FBS3JCQSxnQkFBQUEsS0FBSyxFQUFFQSxLQUxjO0FBTXJCdkIsZ0JBQUFBLElBQUksRUFBRUEsSUFOZTtBQU9yQnFELGdCQUFBQSxLQUFLLEVBQUVOO0FBUGMsZUFWeEI7QUFBQTtBQUFBLHFCQW1CdUIxQyxRQUFRLENBQUNpRCxVQUFULENBQ3BCaEQsYUFEb0IsRUFFcEJMLE9BRm9CLEVBR3BCZ0QsT0FIb0IsRUFJcEJDLGFBSm9CLENBbkJ2Qjs7QUFBQTtBQW1CUUssY0FBQUEsTUFuQlI7QUEwQkVULGNBQUFBLE9BQU8sQ0FBQ1UsR0FBUixDQUFZRCxNQUFaO0FBQ0FFLGNBQUFBLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsSUFBaEIsK0JBQTRDMUQsT0FBNUM7QUFDQXdELGNBQUFBLE1BQU0sQ0FBQ0csUUFBUCxDQUFnQkMsc0JBQWhCLENBQXVDLFdBQXZDLEVBQW9ELENBQXBELEVBQXVEQyxLQUF2RDtBQTVCRjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBOUVFO0FBQUE7QUFBQTs7QUFtSEYsc0JBQVEsaUhBQ1AsaURBQUMsNkRBQUQ7QUFDQyxRQUFJLEVBQUVqRSxJQURQO0FBRUMsVUFBTSxFQUFFQyxNQUZUO0FBR0MsdUJBQWdCLCtCQUhqQjtBQUlDLFFBQUksRUFBQyxJQUpOO0FBS0MsWUFBUTtBQUxULGtCQU9DLGlEQUFDLG9FQUFEO0FBQWMsZUFBVztBQUF6QixrQkFDQyxpREFBQyxtRUFBRDtBQUFhLE1BQUUsRUFBQztBQUFoQixnQkFDU0UsSUFEVCxTQUNrQkUsYUFEbEIsQ0FERCxDQVBELGVBYUMsaURBQUMsa0VBQUQ7QUFBWSxhQUFTLEVBQUM7QUFBdEIsa0JBQ0MsaURBQUMsNkRBQUQscUJBQ0MsaURBQUMsbUVBQUQ7QUFBWSxhQUFTLEVBQUMsTUFBdEI7QUFBNkIsYUFBUyxFQUFDO0FBQXZDLGtCQUNDLGlEQUFDLG1FQUFELGVBREQsRUFFRWUsU0FGRixDQURELGVBS0MsaURBQUMsbUVBQUQ7QUFBWSxhQUFTLEVBQUMsTUFBdEI7QUFBNkIsYUFBUyxFQUFDO0FBQXZDLGtCQUNDLGlEQUFDLG1FQUFELHNCQURELEVBRUVHLGdCQUZGLENBTEQsZUFTQyxpREFBQyxtRUFBRDtBQUFZLGFBQVMsRUFBQyxNQUF0QjtBQUE2QixhQUFTLEVBQUM7QUFBdkMsa0JBQ0MsaURBQUMsbUVBQUQsZ0NBREQsRUFFRUksVUFGRixDQVRELGVBY0MsaURBQUMsbUVBQUQ7QUFBWSxhQUFTLEVBQUMsTUFBdEI7QUFBNkIsYUFBUyxFQUFDO0FBQXZDLGtCQUNDLGlEQUFDLG1FQUFELDBCQURELEVBRUVGLFFBRkYsQ0FkRCxFQWtCR3RCLElBQUksSUFBSSxZQUFULGdCQUNBLGlEQUFDLG1FQUFEO0FBQVksYUFBUyxFQUFDLE1BQXRCO0FBQTZCLGFBQVMsRUFBQztBQUF2QyxrQkFDQyxpREFBQyxtRUFBRCw2QkFERCxFQUVFNEIsc0JBRkYsQ0FEQSxnQkFNQSxpREFBQyxtRUFBRDtBQUFZLGFBQVMsRUFBQyxNQUF0QjtBQUE2QixhQUFTLEVBQUM7QUFBdkMsa0JBQ0MsaURBQUMsbUVBQUQsc0JBREQsRUFFRUYsZUFGRixDQXhCRixlQWdDQztBQUFLLGFBQVMsRUFBQyxRQUFmO0FBQXdCLFNBQUssRUFBRTtBQUFFcUMsTUFBQUEsU0FBUyxFQUFFO0FBQWI7QUFBL0Isa0JBQ0MsaURBQUMsK0RBQUQ7QUFBUSxXQUFPLEVBQUMsU0FBaEI7QUFBMEIsV0FBTyxFQUFFbEM7QUFBbkMsZ0JBQ1M3QixJQURULENBREQsQ0FoQ0QsQ0FERCxDQWJELENBRE8sQ0FBUjtBQTREQTs7Ozs7Ozs7VUNwTUQscUNBQXFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGVtZXRlcmdpZnQvLi9zcmMvY29tcG9uZW50cy9jb21wb25lbnRzL21vZGFscy9Eb25hdGVORlRNb2RhbC5qc3giLCJ3ZWJwYWNrOi8vZGVtZXRlcmdpZnQvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IE1vZGFsIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Nb2RhbCc7XG5pbXBvcnQgRm9ybSBmcm9tICdyZWFjdC1ib290c3RyYXAvRm9ybSc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9CdXR0b24nO1xuaW1wb3J0IFVzZUZvcm1JbnB1dCBmcm9tICcuLi9Vc2VGb3JtSW5wdXQnO1xuaW1wb3J0IHsgY3JlYXRlVG9rZW5BUEkgfSBmcm9tICdAL3BhZ2VzL0V2ZW50cy90b2tlbic7XG5cbmltcG9ydCB7IHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xuXG5pbXBvcnQgdXNlQ29udHJhY3QgZnJvbSAnLi4vLi4vLi4vLi4vc2VydmljZXMvdXNlQ29udHJhY3QnO1xuaW1wb3J0IHsgV2FsbGV0QWNjb3VudCB9IGZyb20gJ25lYXItYXBpLWpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRG9uYXRlTkZUTW9kYWwoe1xuXHRzaG93LFxuXHRvbkhpZGUsXG5cdHNlbmRlckFkZHJlc3MsXG5cdHR5cGUsXG5cdEV2ZW50SUQsXG5cdFNlbGVjdGVkVGl0bGUsXG5cdGVuZGRhdGUsXG5cdHNlbGVjdGVkV2FsbGV0XG59KSB7XG5cblx0Y29uc3QgeyBjb250cmFjdCwgc2lnbmVyQWRkcmVzcyB9ID0gdXNlQ29udHJhY3QoJ0VSQzcyMScpO1xuXHRjb25zdCBbc2VsZWN0ZWRNYXJrZXQsIHNldFNlbGVjdGVkTWFya2V0XSA9IHVzZVN0YXRlKFwiQXVyb3JhL1BhcmFzXCIpO1xuXG5cdGNvbnN0IFtQZW5kaW5nVGV4dCwgc2V0UGVuZGluZ1RleHRdID0gdXNlU3RhdGUoXCIgaXMgY3JlYXRpbmcuLi5cIik7XG5cdGNvbnN0IFtFcnJvclRleHQsIHNldEVycm9yVGV4dF0gPSB1c2VTdGF0ZShcIlBsZWFzZSB0cnkgYWdhaW4gbGF0ZXJcIik7XG5cdGNvbnN0IFtTdWNjZXNzVGV4dCwgc2V0U3VjY2Vzc1RleHRdID0gdXNlU3RhdGUoXCIgaGFzIGNyZWF0ZWQgb24gQXVyb3JhIVwiKTtcblxuXHRjb25zdCBbbmFtZSwgbmFtZUlucHV0XSA9IFVzZUZvcm1JbnB1dCh7XG5cdFx0dHlwZTogJ3RleHQnLFxuXHRcdHBsYWNlaG9sZGVyOiAnRW50ZXIgbmFtZScsXG5cdH0pO1xuXHRjb25zdCBbZGVzY3JpcHRpb24sIGRlc2NyaXB0aW9uSW5wdXRdID0gVXNlRm9ybUlucHV0KHtcblx0XHRhczogJ3RleHRhcmVhJyxcblx0XHRwbGFjZWhvbGRlcjogJ0VudGVyIGRlc2NyaXB0aW9uJyxcblx0fSk7XG5cdGNvbnN0IFt1cmwsIHVybElucHV0XSA9IFVzZUZvcm1JbnB1dCh7XG5cdFx0dHlwZTogJ3RleHQnLFxuXHRcdHBsYWNlaG9sZGVyOiAnRW50ZXIgaW1hZ2UgdXJsJyxcblx0fSk7XG5cblx0Y29uc3QgW3ByaWNlLCBwcmljZUlucHV0XSA9IFVzZUZvcm1JbnB1dCh7XG5cdFx0dHlwZTogJ3RleHQnLFxuXHRcdHBsYWNlaG9sZGVyOiAnRW50ZXIgUHJpY2UnLFxuXHR9KTtcblx0Y29uc3QgW05GVGFkZHJlc3MsIE5GVGFkZHJlc3NJbnB1dF0gPSBVc2VGb3JtSW5wdXQoe1xuXHRcdHR5cGU6ICd0ZXh0Jyxcblx0XHRwbGFjZWhvbGRlcjogJ0VudGVyIE5GVCBhZGRyZXNzJyxcblx0fSk7XG5cdGNvbnN0IFtDcnlwdG9wdW5rYWRkcmVzcywgQ3J5cHRvcHVua2FkZHJlc3NJbnB1dF0gPSBVc2VGb3JtSW5wdXQoe1xuXHRcdHR5cGU6ICd0ZXh0Jyxcblx0XHRwbGFjZWhvbGRlcjogJ0VudGVyIENyeXB0b3B1bmsgYWRkcmVzcycsXG5cdH0pO1xuXG5cdGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZU5GVCgpIHtcblx0XHRhd2FpdCB0b2FzdC5wcm9taXNlKENyZWF0aW5nTkZUQWlydGFibGUsIHtcblx0XHRcdHBlbmRpbmc6IGBDcmVhdGluZyAke3R5cGV9IG9uIEFpcnRhYmxlLi4uYCxcblx0XHRcdGVycm9yOiBgUGxlYXNlIHRyeSBhZ2FpbmAsXG5cdFx0XHRzdWNjZXNzOiBgQ3JlYXRlZCAke3R5cGV9IG9uIEFpcnRhYmxlIWBcblx0XHR9KTtcblx0XHRhd2FpdCB0b2FzdC5wcm9taXNlKGNyZWF0aW5nTkZUb25BdXJvcmEsIHtcblx0XHRcdHBlbmRpbmc6IGBDcmVhdGluZyAke3R5cGV9IG9uIEF1cm9yYS4uLmAsXG5cdFx0XHRlcnJvcjogYFBsZWFzZSB0cnkgYWdhaW5gLFxuXHRcdFx0c3VjY2VzczogYENyZWF0ZWQgJHt0eXBlfSBvbiBBdXJvcmEhYFxuXHRcdH0pO1xuXHR9XG5cdGFzeW5jIGZ1bmN0aW9uIENyZWF0aW5nTkZUQWlydGFibGUoKSB7XG5cbiAgICAgICAgdmFyIEFpcnRhYmxlID0gcmVxdWlyZSgnYWlydGFibGUnKTtcbiAgICAgICAgQWlydGFibGUuY29uZmlndXJlKHtcbiAgICAgICAgICAgIGVuZHBvaW50VXJsOiAnaHR0cHM6Ly9hcGkuYWlydGFibGUuY29tJyxcbiAgICAgICAgICAgIGFwaUtleTogJ2tleVIxUnJjbDlPMnM5YlRzJ1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgYmFzZSA9IHJlcXVpcmUoJ2FpcnRhYmxlJykuYmFzZSgnYXBwZ2JSQ3Bia3ptZGN1Y08nKTtcbiAgICAgICBcbiAgICAgICAgYXdhaXQgYmFzZSgnbmZ0Y3J5cHRvcHVua3MnKS5jcmVhdGUoW1xuXHRcdFx0e1xuXHRcdFx0ICBcImZpZWxkc1wiOiB7XG5cdFx0XHRcdFwibmFtZVwiOiBuYW1lLFxuXHRcdFx0XHRcImRlc2NyaXB0aW9uXCI6IGRlc2NyaXB0aW9uLFxuXHRcdFx0XHRcInByaWNlXCI6IHByaWNlLFxuXHRcdFx0XHRcInR5cGVcIjogdHlwZSxcblx0XHRcdFx0XCJpbWFnZVwiOiB1cmwsXG5cdFx0XHRcdFwiZXZlbnRpZFwiOiBOdW1iZXIoRXZlbnRJRClcblx0XHRcdCAgfVxuXHRcdFx0fVxuICAgICAgICBdLCBmdW5jdGlvbiAoZXJyLCByZWNvcmRzKSB7XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuXHRcdFx0XHR0aHJvdyBlcnI7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIH0pO1xuICAgIFxuXG4gICAgfVxuXHRhc3luYyBmdW5jdGlvbiBjcmVhdGluZ05GVG9uQXVyb3JhKCkge1xuXHRcdGxldCBMb2dvdXJsID0gdXJsO1xuXHRcdHZhciB0b2tlbkFkZHJlc3MgPSBORlRhZGRyZXNzO1xuXHRcdGlmIChcIkNyeXB0b3B1bmtcIiA9PSB0eXBlKSB7XG5cdFx0XHR0b2tlbkFkZHJlc3MgPSBDcnlwdG9wdW5rYWRkcmVzcztcblx0XHR9XG5cblx0XHR0cnkge1xuXG5cdFx0XHRjb25zdCB0b2tlbklEID0gYXdhaXQgY3JlYXRlVG9rZW5BUEkoRXZlbnRJRCwgbmFtZSwgZGVzY3JpcHRpb24sIHByaWNlLCB0eXBlLCBMb2dvdXJsKTtcblx0XHRcdGNvbnN0IGNyZWF0ZWRPYmplY3QgPSB7XG5cdFx0XHRcdGV2ZW50aWQ6IEV2ZW50SUQsXG5cdFx0XHRcdG5hbWU6IG5hbWUsXG5cdFx0XHRcdGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbixcblx0XHRcdFx0QmlkcHJpY2U6IHByaWNlLFxuXHRcdFx0XHRwcmljZTogcHJpY2UsXG5cdFx0XHRcdHR5cGU6IHR5cGUsXG5cdFx0XHRcdGltYWdlOiBMb2dvdXJsXG5cdFx0XHR9O1xuXHRcdFx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgY29udHJhY3QuY2xhaW1Ub2tlbihcblx0XHRcdFx0c2lnbmVyQWRkcmVzcyxcblx0XHRcdFx0RXZlbnRJRCxcblx0XHRcdFx0dG9rZW5JRCxcblx0XHRcdFx0Y3JlYXRlZE9iamVjdFxuXHRcdFx0KTtcblxuXHRcdFx0Y29uc29sZS5sb2cocmVzdWx0KTtcblx0XHRcdHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYC9kb25hdGlvbi9hdWN0aW9uPyR7RXZlbnRJRH1gO1xuXHRcdFx0d2luZG93LmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJidG4tY2xvc2VcIilbMF0uY2xpY2soKTtcblx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0cmV0dXJuIChlcnJvcik7XG5cdFx0fVxuXG5cblx0fVxuXG5cblx0cmV0dXJuICg8PlxuXHRcdDxNb2RhbFxuXHRcdFx0c2hvdz17c2hvd31cblx0XHRcdG9uSGlkZT17b25IaWRlfVxuXHRcdFx0YXJpYS1sYWJlbGxlZGJ5PVwiY29udGFpbmVkLW1vZGFsLXRpdGxlLXZjZW50ZXJcIlxuXHRcdFx0c2l6ZT1cImxnXCJcblx0XHRcdGNlbnRlcmVkXG5cdFx0PlxuXHRcdFx0PE1vZGFsLkhlYWRlciBjbG9zZUJ1dHRvbj5cblx0XHRcdFx0PE1vZGFsLlRpdGxlIGlkPVwiY29udGFpbmVkLW1vZGFsLXRpdGxlLXZjZW50ZXJcIj5cblx0XHRcdFx0XHREb25hdGUge3R5cGV9IC0ge1NlbGVjdGVkVGl0bGV9XG5cdFx0XHRcdDwvTW9kYWwuVGl0bGU+XG5cblx0XHRcdDwvTW9kYWwuSGVhZGVyPlxuXHRcdFx0PE1vZGFsLkJvZHkgY2xhc3NOYW1lPVwic2hvdy1ncmlkXCI+XG5cdFx0XHRcdDxGb3JtPlxuXHRcdFx0XHRcdDxGb3JtLkdyb3VwIGNsYXNzTmFtZT1cIm1iLTNcIiBjb250cm9sSWQ9XCJmb3JtR3JvdXBOYW1lXCI+XG5cdFx0XHRcdFx0XHQ8Rm9ybS5MYWJlbD5OYW1lPC9Gb3JtLkxhYmVsPlxuXHRcdFx0XHRcdFx0e25hbWVJbnB1dH1cblx0XHRcdFx0XHQ8L0Zvcm0uR3JvdXA+XG5cdFx0XHRcdFx0PEZvcm0uR3JvdXAgY2xhc3NOYW1lPVwibWItM1wiIGNvbnRyb2xJZD1cImZvcm1Hcm91cERlc2NyaXB0aW9uXCI+XG5cdFx0XHRcdFx0XHQ8Rm9ybS5MYWJlbD5EZXNjcmlwdGlvbjwvRm9ybS5MYWJlbD5cblx0XHRcdFx0XHRcdHtkZXNjcmlwdGlvbklucHV0fVxuXHRcdFx0XHRcdDwvRm9ybS5Hcm91cD5cblx0XHRcdFx0XHQ8Rm9ybS5Hcm91cCBjbGFzc05hbWU9XCJtYi0zXCIgY29udHJvbElkPVwiZm9ybUdyb3VwTmFtZVwiPlxuXHRcdFx0XHRcdFx0PEZvcm0uTGFiZWw+T3BlbmluZyBwcmljZSBpbiBORUFSPC9Gb3JtLkxhYmVsPlxuXHRcdFx0XHRcdFx0e3ByaWNlSW5wdXR9XG5cdFx0XHRcdFx0PC9Gb3JtLkdyb3VwPlxuXG5cdFx0XHRcdFx0PEZvcm0uR3JvdXAgY2xhc3NOYW1lPVwibWItM1wiIGNvbnRyb2xJZD1cImZvcm1Hcm91cEltYWdlVXJsXCI+XG5cdFx0XHRcdFx0XHQ8Rm9ybS5MYWJlbD5FbnRlciBpbWFnZSBVUkw8L0Zvcm0uTGFiZWw+XG5cdFx0XHRcdFx0XHR7dXJsSW5wdXR9XG5cdFx0XHRcdFx0PC9Gb3JtLkdyb3VwPlxuXHRcdFx0XHRcdHsodHlwZSA9PSBcIkNyeXB0b3B1bmtcIikgPyAoXG5cdFx0XHRcdFx0XHQ8Rm9ybS5Hcm91cCBjbGFzc05hbWU9XCJtYi0zXCIgY29udHJvbElkPVwiZm9ybUdyb3VwSW1hZ2VVcmxcIj5cblx0XHRcdFx0XHRcdFx0PEZvcm0uTGFiZWw+Q3J5cHRvcHVuayBhZGRyZXNzPC9Gb3JtLkxhYmVsPlxuXHRcdFx0XHRcdFx0XHR7Q3J5cHRvcHVua2FkZHJlc3NJbnB1dH1cblx0XHRcdFx0XHRcdDwvRm9ybS5Hcm91cD5cblx0XHRcdFx0XHQpIDogKFxuXHRcdFx0XHRcdFx0PEZvcm0uR3JvdXAgY2xhc3NOYW1lPVwibWItM1wiIGNvbnRyb2xJZD1cImZvcm1Hcm91cEltYWdlVXJsXCI+XG5cdFx0XHRcdFx0XHRcdDxGb3JtLkxhYmVsPk5GVCBhZGRyZXNzPC9Gb3JtLkxhYmVsPlxuXHRcdFx0XHRcdFx0XHR7TkZUYWRkcmVzc0lucHV0fVxuXHRcdFx0XHRcdFx0PC9Gb3JtLkdyb3VwPlxuXHRcdFx0XHRcdClcblxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZC1ncmlkXCIgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjIwcHhcIiB9fT5cblx0XHRcdFx0XHRcdDxCdXR0b24gdmFyaWFudD1cInByaW1hcnlcIiBvbkNsaWNrPXtjcmVhdGVORlR9PlxuXHRcdFx0XHRcdFx0XHREb25hdGUge3R5cGV9XG5cdFx0XHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9Gb3JtPlxuXHRcdFx0PC9Nb2RhbC5Cb2R5PlxuXHRcdDwvTW9kYWw+XG5cdFx0XG5cdDwvPlxuXG5cblx0KTtcbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gXCIzMDVmYmY0ZTk5YzQzYWQxYzRhM1wiOyB9Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJNb2RhbCIsIkZvcm0iLCJCdXR0b24iLCJVc2VGb3JtSW5wdXQiLCJjcmVhdGVUb2tlbkFQSSIsInRvYXN0IiwidXNlQ29udHJhY3QiLCJXYWxsZXRBY2NvdW50IiwiRG9uYXRlTkZUTW9kYWwiLCJzaG93Iiwib25IaWRlIiwic2VuZGVyQWRkcmVzcyIsInR5cGUiLCJFdmVudElEIiwiU2VsZWN0ZWRUaXRsZSIsImVuZGRhdGUiLCJzZWxlY3RlZFdhbGxldCIsImNvbnRyYWN0Iiwic2lnbmVyQWRkcmVzcyIsInNlbGVjdGVkTWFya2V0Iiwic2V0U2VsZWN0ZWRNYXJrZXQiLCJQZW5kaW5nVGV4dCIsInNldFBlbmRpbmdUZXh0IiwiRXJyb3JUZXh0Iiwic2V0RXJyb3JUZXh0IiwiU3VjY2Vzc1RleHQiLCJzZXRTdWNjZXNzVGV4dCIsInBsYWNlaG9sZGVyIiwibmFtZSIsIm5hbWVJbnB1dCIsImFzIiwiZGVzY3JpcHRpb24iLCJkZXNjcmlwdGlvbklucHV0IiwidXJsIiwidXJsSW5wdXQiLCJwcmljZSIsInByaWNlSW5wdXQiLCJORlRhZGRyZXNzIiwiTkZUYWRkcmVzc0lucHV0IiwiQ3J5cHRvcHVua2FkZHJlc3MiLCJDcnlwdG9wdW5rYWRkcmVzc0lucHV0IiwiY3JlYXRlTkZUIiwicHJvbWlzZSIsIkNyZWF0aW5nTkZUQWlydGFibGUiLCJwZW5kaW5nIiwiZXJyb3IiLCJzdWNjZXNzIiwiY3JlYXRpbmdORlRvbkF1cm9yYSIsIkFpcnRhYmxlIiwicmVxdWlyZSIsImNvbmZpZ3VyZSIsImVuZHBvaW50VXJsIiwiYXBpS2V5IiwiYmFzZSIsImNyZWF0ZSIsIk51bWJlciIsImVyciIsInJlY29yZHMiLCJjb25zb2xlIiwiTG9nb3VybCIsInRva2VuQWRkcmVzcyIsInRva2VuSUQiLCJjcmVhdGVkT2JqZWN0IiwiZXZlbnRpZCIsIkJpZHByaWNlIiwiaW1hZ2UiLCJjbGFpbVRva2VuIiwicmVzdWx0IiwibG9nIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiY2xpY2siLCJtYXJnaW5Ub3AiXSwic291cmNlUm9vdCI6IiJ9