"use strict";
self["webpackHotUpdatedemetergift"]("/index",{

/***/ "./src/components/components/modals/BidNFTModal.jsx":
/*!**********************************************************!*\
  !*** ./src/components/components/modals/BidNFTModal.jsx ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ BidNFTModal; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/asyncToGenerator */ "./node_modules/@babel/runtime-corejs3/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/slicedToArray */ "./node_modules/@babel/runtime-corejs3/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_index_of__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/index-of */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/index-of.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_index_of__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_index_of__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs3/regenerator */ "./node_modules/@babel/runtime-corejs3/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-bootstrap/Modal */ "./node_modules/react-bootstrap/esm/Modal.js");
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-bootstrap/Form */ "./node_modules/react-bootstrap/esm/Form.js");
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-bootstrap/Button */ "./node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var _UseFormInput__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../UseFormInput */ "./src/components/components/UseFormInput.jsx");
/* harmony import */ var _pages_Events_token__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/pages/Events/token */ "./src/pages/Events/token.jsx");
/* harmony import */ var _components_common_Icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/components/common/Icon */ "./src/components/common/Icon/index.tsx");
/* harmony import */ var _pages_Events_event__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../pages/Events/event */ "./src/pages/Events/event.jsx");
/* harmony import */ var near_api_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! near-api-js */ "./node_modules/near-api-js/lib/browser-index.js");
/* harmony import */ var near_api_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(near_api_js__WEBPACK_IMPORTED_MODULE_11__);















function BidNFTModal(_ref) {
  var show = _ref.show,
      onHide = _ref.onHide,
      ToAddress = _ref.ToAddress,
      tokenId = _ref.tokenId,
      recid = _ref.recid,
      type = _ref.type,
      Highestbid = _ref.Highestbid,
      walletType = _ref.walletType,
      eventId = _ref.eventId;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(''),
      _useState2 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      Alert = _useState2[0],
      setAlert = _useState2[1];

  var _UseFormInput = (0,_UseFormInput__WEBPACK_IMPORTED_MODULE_7__["default"])({
    type: 'text',
    placeholder: 'Amount'
  }),
      _UseFormInput2 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_UseFormInput, 2),
      Amount = _UseFormInput2[0],
      AmountInput = _UseFormInput2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(-1),
      _useState4 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState3, 2),
      otherCategory = _useState4[0],
      setOtherCategory = _useState4[1];

  function activateWarningModal() {
    var alertELM = document.getElementById("alert");
    alertELM.style = 'contents';
    setAlert("Amount cannot be under ".concat(Highestbid, " NEAR"));
  }

  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)( /*#__PURE__*/(0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee() {
    var boolTrue, _categories, event, goal, sumofmain, categories_, i;

    return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            boolTrue = true;

          case 1:
            if (!boolTrue) {
              _context.next = 27;
              break;
            }

            _context.prev = 2;
            _context.next = 5;
            return (0,_pages_Events_event__WEBPACK_IMPORTED_MODULE_10__.getCategoriesbyeventid)(eventId);

          case 5:
            _categories = _context.sent;
            console.log("categories for event:");
            console.log(_categories);
            _context.next = 10;
            return (0,_pages_Events_event__WEBPACK_IMPORTED_MODULE_10__.eventgetbyid)(eventId);

          case 10:
            event = _context.sent;
            goal = event.Goal;
            console.log("goal:");
            console.log(goal);
            sumofmain = 0;
            categories_ = _categories;

            for (i = 0; i < categories_.length; i++) {
              sumofmain += categories_[i].price * categories_[i].amount;
            }

            setOtherCategory(goal - sumofmain);
            setCategories(categories_);
            return _context.abrupt("break", 27);

          case 22:
            _context.prev = 22;
            _context.t0 = _context["catch"](2);
            return _context.abrupt("continue", 1);

          case 25:
            _context.next = 1;
            break;

          case 27:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 22]]);
  })), [categories]);

  function bidNFT() {
    return _bidNFT.apply(this, arguments);
  }

  function _bidNFT() {
    _bidNFT = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee2() {
      return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.promise(UpdateAirtable, {
                pending: "Bidding...",
                error: "Please try again later",
                success: "Success!!!"
              });

            case 2:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return _bidNFT.apply(this, arguments);
  }

  function CreatingOnAirTable() {
    return _CreatingOnAirTable.apply(this, arguments);
  }

  function _CreatingOnAirTable() {
    _CreatingOnAirTable = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee3() {
      var Airtable, base, currentDate;
      return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              Airtable = __webpack_require__(/*! airtable */ "./node_modules/airtable/lib/airtable.js");
              base = new Airtable({
                apiKey: 'keyR1Rrcl9O2s9bTs'
              }).base('appgbRCpbkzmdcucO');
              currentDate = new Date();
              _context3.next = 5;
              return base('tokenbid').create([{
                "fields": {
                  "Tokenid": tokenId,
                  "Date": currentDate,
                  "UserName": walletAccount.getAccountId().toString(),
                  "Bidprice": Amount
                }
              }]);

            case 5:
              react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.success("Bid created on Airtable");
              _context3.next = 8;
              return UpdateAirtable();

            case 8:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));
    return _CreatingOnAirTable.apply(this, arguments);
  }

  function UpdateAirtable() {
    return _UpdateAirtable.apply(this, arguments);
  }

  function _UpdateAirtable() {
    _UpdateAirtable = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee4() {
      var Airtable, base, i;
      return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              Airtable = __webpack_require__(/*! airtable */ "./node_modules/airtable/lib/airtable.js");
              base = new Airtable({
                apiKey: 'keyR1Rrcl9O2s9bTs'
              }).base('appgbRCpbkzmdcucO'); // await base('nftcryptopunks').update([
              // 	{
              // 		"id": recid,
              // 		"fields": {
              // 			"price": Amount
              // 		}
              // 	}
              // ]);

              i = 0;

            case 3:
              if (!(i < selectedCategory.length)) {
                _context4.next = 9;
                break;
              }

              _context4.next = 6;
              return (0,_pages_Events_token__WEBPACK_IMPORTED_MODULE_8__.ReduceCategory)(selectedCategory[i]);

            case 6:
              i++;
              _context4.next = 3;
              break;

            case 9:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));
    return _UpdateAirtable.apply(this, arguments);
  }

  function bidNFTbyNEAR() {
    return _bidNFTbyNEAR.apply(this, arguments);
  }

  function _bidNFTbyNEAR() {
    _bidNFTbyNEAR = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee6() {
      var buttonProps, config, near, account, amountInYocto;
      return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              if (!(Number(Amount) < Number(Highestbid))) {
                _context6.next = 3;
                break;
              }

              activateWarningModal();
              return _context6.abrupt("return");

            case 3:
              buttonProps = document.getElementsByClassName("btn btn-primary")[0];

              if (!(window.walletAccount.isSignedIn() == false)) {
                _context6.next = 11;
                break;
              }

              buttonProps.innerText = "Connect to NEAR wallet";
              _context6.next = 8;
              return react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.warn("Not connected with NEAR wallet! Connecting...");

            case 8:
              _context6.next = 10;
              return window.walletAccount.requestSignIn(window.nearConfig.contractName, 'DemeterGift');

            case 10:
              return _context6.abrupt("return");

            case 11:
              // We call say Hi and then update who said Hi last.
              // window.contract.sayHi().then(updateWhoSaidHi);
              config = {
                networkId: "testnet",
                keyStore: new near_api_js__WEBPACK_IMPORTED_MODULE_11__.keyStores.BrowserLocalStorageKeyStore(),
                nodeUrl: "https://rpc.testnet.near.org",
                walletUrl: "https://wallet.testnet.near.org",
                helperUrl: "https://helper.testnet.near.org",
                explorerUrl: "https://explorer.testnet.near.org"
              }; // sends NEAR tokens

              _context6.next = 14;
              return near_api_js__WEBPACK_IMPORTED_MODULE_11__.connect(config);

            case 14:
              near = _context6.sent;
              _context6.next = 17;
              return near.account(walletAccount.getAccountId());

            case 17:
              account = _context6.sent;
              amountInYocto = (Number(Amount) * 1000000000000000000000000).toLocaleString('fullwide', {
                useGrouping: false
              });
              _context6.next = 21;
              return account.sendMoney(ToAddress, // receiver account
              amountInYocto // amount in yoctoNEAR
              ).then( /*#__PURE__*/(0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee5() {
                var i;
                return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee5$(_context5) {
                  while (1) {
                    switch (_context5.prev = _context5.next) {
                      case 0:
                        _context5.next = 2;
                        return (0,_pages_Events_token__WEBPACK_IMPORTED_MODULE_8__.createBid)(tokenId, walletAccount.getAccountId().toString(), Amount);

                      case 2:
                        i = 0;

                      case 3:
                        if (!(i < selectedCategory.length)) {
                          _context5.next = 9;
                          break;
                        }

                        _context5.next = 6;
                        return (0,_pages_Events_token__WEBPACK_IMPORTED_MODULE_8__.ReduceCategory)(selectedCategory[i]);

                      case 6:
                        i++;
                        _context5.next = 3;
                        break;

                      case 9:
                      case "end":
                        return _context5.stop();
                    }
                  }
                }, _callee5);
              }))).then(function () {
                window.location.reload();
                window.document.getElementsByClassName("btn-close")[0].click();
              }).catch(function (error) {
                console.error("error:", error);
                console.log(error);
                return;
              });

            case 21:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    }));
    return _bidNFTbyNEAR.apply(this, arguments);
  }

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]),
      _useState6 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState5, 2),
      categories = _useState6[0],
      setCategories = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false),
      _useState8 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState7, 2),
      allSelected = _useState8[0],
      setAllSelected = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false),
      _useState10 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState9, 2),
      otherSelected = _useState10[0],
      setOtherSelected = _useState10[1];

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]),
      _useState12 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState11, 2),
      selectedCategory = _useState12[0],
      setSelectedCategory = _useState12[1];

  var selectCategory = function selectCategory(category_id) {
    console.log("category_id");
    console.log(category_id);
    var temp_arr = [];

    for (var i = 0; i < selectedCategory.length; i++) {
      temp_arr.push(selectedCategory[i]);
    }

    temp_arr.push(category_id);
    console.log(temp_arr);
    setSelectedCategory(temp_arr);
  };

  var unselectCategory = function unselectCategory(category_id) {
    var temp_arr = [];

    for (var i = 0; i < selectedCategory.length; i++) {
      if (selectedCategory[i] != category_id) temp_arr.push(selectedCategory[i]);
    }

    console.log(temp_arr);
    setSelectedCategory(temp_arr);
  };

  var selectAllCategory = function selectAllCategory() {
    if (allSelected) {
      setAllSelected(false);
      setSelectedCategory([]);
    } else {
      setAllSelected(true);
      var temp_arr = [];

      for (var i = 0; i < categories.length; i++) {
        temp_arr.push(categories[i].id);
      }

      temp_arr.push(-1);
      setSelectedCategory(temp_arr);
    }
  };

  var otherSelect = function otherSelect() {
    if (otherSelected) {
      setOtherSelected(false);
      var temp_arr = [];

      for (var i = 0; i < selectedCategory.length; i++) {
        if (selectedCategory[i] != -1) temp_arr.push(selectedCategory[i]);
      }

      setSelectedCategory(temp_arr);
    } else {
      setOtherSelected(true);
      var temp_arr = [];

      for (var i = 0; i < selectedCategory.length; i++) {
        temp_arr.push(selectedCategory[i]);
      }

      temp_arr.push(-1);
      setSelectedCategory(temp_arr);
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(react__WEBPACK_IMPORTED_MODULE_5__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_12__["default"], {
    show: show,
    onHide: onHide,
    "aria-labelledby": "contained-modal-title-vcenter",
    centered: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_12__["default"].Header, {
    closeButton: true
  }, type == "Cryptopunk" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_12__["default"].Title, {
    id: "contained-modal-title-vcenter"
  }, "Bid Cryptopunk") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_12__["default"].Title, {
    id: "contained-modal-title-vcenter"
  }, "Bid NFT")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_12__["default"].Body, {
    className: "show-grid"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_13__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
    id: "alert",
    style: {
      display: 'none'
    },
    className: "alert alert-danger",
    role: "alert"
  }, Alert), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_13__["default"].Group, {
    className: "mb-3",
    controlId: "formGroupName"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_13__["default"].Label, null, "Bid Amount in NEAR"), AmountInput), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
    className: "selectCategoryAll"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("h4", {
    style: {
      marginBottom: "10px"
    }
  }, "Choose where you want to give support"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
    style: {
      width: "100%",
      padding: "5px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
      background: "bisque",
      height: "40px",
      borderRadius: "5px",
      marginBottom: "10px"
    },
    onClick: function onClick() {
      selectAllCategory();
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("h4", {
    style: {
      alignSelf: "center",
      color: "black"
    }
  }, "Support in general "), allSelected ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
    style: {
      position: "absolute",
      right: "10px",
      top: "-7px"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
    style: {
      marginTop: "10px",
      display: "flex",
      width: "32px",
      height: "32px",
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center",
      borderRadius: "16px",
      background: "#EEF1F4"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(_components_common_Icon__WEBPACK_IMPORTED_MODULE_9__.Icon, {
    icon: "heartSelected"
  }))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
    style: {
      position: "absolute",
      right: "10px",
      top: "-7px"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
    style: {
      marginTop: "10px",
      display: "flex",
      width: "32px",
      height: "32px",
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center",
      borderRadius: "16px",
      background: "#EEF1F4"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(_components_common_Icon__WEBPACK_IMPORTED_MODULE_9__.Icon, {
    icon: "heartUnselected"
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
    className: "selectCategory",
    style: {
      marginLeft: "-10px",
      marginRight: "-10px",
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap"
    }
  }, _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_2___default()(categories).call(categories, function (category) {
    return _babel_runtime_corejs3_core_js_stable_instance_index_of__WEBPACK_IMPORTED_MODULE_3___default()(selectedCategory).call(selectedCategory, category.id) !== -1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
      style: {
        width: "33%",
        padding: "0 10px",
        marginBottom: "10px"
      },
      key: category.id,
      onClick: function onClick() {
        return unselectCategory(category.id);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
      style: {
        background: "white",
        padding: "8px 15px",
        border: "1px solid transparent",
        borderRadius: "5px",
        alignItems: "center"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("h4", {
      style: {
        marginBottom: "10px",
        color: "#151F28",
        textAlign: "center"
      }
    }, category.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("img", {
      src: category.image,
      style: {
        width: "100%",
        borderRadius: "5px",
        height: "94px"
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("h5", {
      style: {
        color: "#151F28",
        textAlign: "center",
        marginTop: "10px",
        lineHeight: "14px"
      }
    }, category.amount * category.price, " USD"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("h5", {
      style: {
        color: "#151F28",
        textAlign: "center",
        lineHeight: "14px"
      }
    }, "(", category.amount, " pieces)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "flex-end"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
      style: {
        marginTop: "10px",
        display: "flex",
        width: "32px",
        height: "32px",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        borderRadius: "16px",
        background: "#EEF1F4"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(_components_common_Icon__WEBPACK_IMPORTED_MODULE_9__.Icon, {
      icon: "heartSelected"
    }))))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
      style: {
        width: "33%",
        padding: "0 10px",
        marginBottom: "10px"
      },
      key: category.id,
      onClick: function onClick() {
        return selectCategory(category.id);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
      style: {
        background: "white",
        padding: "8px 15px",
        border: "1px solid transparent",
        borderRadius: "5px",
        alignItems: "center"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("h4", {
      style: {
        marginBottom: "10px",
        color: "#151F28",
        textAlign: "center"
      }
    }, category.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("img", {
      src: category.image,
      style: {
        width: "100%",
        borderRadius: "5px",
        height: "94px"
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("h5", {
      style: {
        color: "#151F28",
        textAlign: "center",
        marginTop: "10px",
        lineHeight: "14px"
      }
    }, category.amount * category.price, " USD"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("h5", {
      style: {
        color: "#151F28",
        textAlign: "center",
        lineHeight: "14px"
      }
    }, "(", category.amount, " pieces)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "flex-end"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
      style: {
        marginTop: "10px",
        display: "flex",
        width: "32px",
        height: "32px",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        borderRadius: "16px",
        background: "#EEF1F4"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(_components_common_Icon__WEBPACK_IMPORTED_MODULE_9__.Icon, {
      icon: "heartUnselected"
    })))));
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
    style: {
      width: "33%",
      padding: "0 10px",
      display: "flex",
      flexDirection: "column"
    },
    onClick: function onClick() {
      return otherSelect();
    }
  }, categories.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
    style: {
      background: "white",
      padding: "10px",
      border: "1px solid transparent",
      borderRadius: "5px",
      alignItems: "center",
      marginBottom: "15px"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("h4", {
    style: {
      marginBottom: "10px",
      color: "#151F28",
      textAlign: "center"
    }
  }, "Other support"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("h5", {
    style: {
      color: "#151F28",
      textAlign: "center",
      marginTop: "10px",
      lineHeight: "14px"
    }
  }, otherCategory, " USD"), _babel_runtime_corejs3_core_js_stable_instance_index_of__WEBPACK_IMPORTED_MODULE_3___default()(selectedCategory).call(selectedCategory, -1) !== -1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "flex-end"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
    style: {
      marginTop: "10px",
      display: "flex",
      width: "32px",
      height: "32px",
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center",
      borderRadius: "16px",
      background: "#EEF1F4"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(_components_common_Icon__WEBPACK_IMPORTED_MODULE_9__.Icon, {
    icon: "heartSelected"
  }))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "flex-end"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
    style: {
      marginTop: "10px",
      display: "flex",
      width: "32px",
      height: "32px",
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center",
      borderRadius: "16px",
      background: "#EEF1F4"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(_components_common_Icon__WEBPACK_IMPORTED_MODULE_9__.Icon, {
    icon: "heartUnselected"
  })))) : null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
    className: "d-grid"
  }, type == "Cryptopunk" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_14__["default"], {
    variant: "primary",
    onClick: bidNFT
  }, "Bid Cryptopunk") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_14__["default"], {
    variant: "primary",
    onClick: bidNFT
  }, "Bid NFT"))))));
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "88753e0137346779f074"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2luZGV4LmI0MmVmZGY3OGJjOGY0MTQ4NDY2LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2UsU0FBU2UsV0FBVCxPQVVaO0FBQUEsTUFURkMsSUFTRSxRQVRGQSxJQVNFO0FBQUEsTUFSRkMsTUFRRSxRQVJGQSxNQVFFO0FBQUEsTUFQRkMsU0FPRSxRQVBGQSxTQU9FO0FBQUEsTUFORkMsT0FNRSxRQU5GQSxPQU1FO0FBQUEsTUFMRkMsS0FLRSxRQUxGQSxLQUtFO0FBQUEsTUFKRkMsSUFJRSxRQUpGQSxJQUlFO0FBQUEsTUFIRkMsVUFHRSxRQUhGQSxVQUdFO0FBQUEsTUFGRkMsVUFFRSxRQUZGQSxVQUVFO0FBQUEsTUFERkMsT0FDRSxRQURGQSxPQUNFOztBQUNGLGtCQUEwQnZCLCtDQUFRLENBQUMsRUFBRCxDQUFsQztBQUFBO0FBQUEsTUFBT3dCLEtBQVA7QUFBQSxNQUFjQyxRQUFkOztBQUNBLHNCQUE4QmxCLHlEQUFZLENBQUM7QUFDMUNhLElBQUFBLElBQUksRUFBRSxNQURvQztBQUUxQ00sSUFBQUEsV0FBVyxFQUFFO0FBRjZCLEdBQUQsQ0FBMUM7QUFBQTtBQUFBLE1BQU9DLE1BQVA7QUFBQSxNQUFlQyxXQUFmOztBQUlBLG1CQUEwQzVCLCtDQUFRLENBQUMsQ0FBQyxDQUFGLENBQWxEO0FBQUE7QUFBQSxNQUFPNkIsYUFBUDtBQUFBLE1BQXNCQyxnQkFBdEI7O0FBRUEsV0FBU0Msb0JBQVQsR0FBZ0M7QUFDL0IsUUFBSUMsUUFBUSxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsT0FBeEIsQ0FBZjtBQUNBRixJQUFBQSxRQUFRLENBQUNHLEtBQVQsR0FBaUIsVUFBakI7QUFDQVYsSUFBQUEsUUFBUSxrQ0FBMkJKLFVBQTNCLFdBQVI7QUFDQTs7QUFFRHBCLEVBQUFBLGdEQUFTLHdNQUFDO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDSG1DLFlBQUFBLFFBREcsR0FDUSxJQURSOztBQUFBO0FBQUEsaUJBRUZBLFFBRkU7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLG1CQUlrQnpCLDRFQUFzQixDQUFDWSxPQUFELENBSnhDOztBQUFBO0FBSURjLFlBQUFBLFdBSkM7QUFLUEMsWUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksdUJBQVo7QUFDQUQsWUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlGLFdBQVo7QUFOTztBQUFBLG1CQU9XekIsa0VBQVksQ0FBQ1csT0FBRCxDQVB2Qjs7QUFBQTtBQU9IaUIsWUFBQUEsS0FQRztBQVFIQyxZQUFBQSxJQVJHLEdBUUlELEtBQUssQ0FBQ0UsSUFSVjtBQVNQSixZQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxPQUFaO0FBQ0FELFlBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRSxJQUFaO0FBQ0lFLFlBQUFBLFNBWEcsR0FXUyxDQVhUO0FBWUhDLFlBQUFBLFdBWkcsR0FZV1AsV0FaWDs7QUFhUCxpQkFBU1EsQ0FBVCxHQUFhLENBQWIsRUFBZ0JBLENBQUMsR0FBR0QsV0FBVyxDQUFDRSxNQUFoQyxFQUF3Q0QsQ0FBQyxFQUF6QyxFQUE2QztBQUM1Q0YsY0FBQUEsU0FBUyxJQUFJQyxXQUFXLENBQUNDLENBQUQsQ0FBWCxDQUFlRSxLQUFmLEdBQXVCSCxXQUFXLENBQUNDLENBQUQsQ0FBWCxDQUFlRyxNQUFuRDtBQUNBOztBQUVEbEIsWUFBQUEsZ0JBQWdCLENBQUNXLElBQUksR0FBR0UsU0FBUixDQUFoQjtBQUNBTSxZQUFBQSxhQUFhLENBQUNMLFdBQUQsQ0FBYjtBQWxCTzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBRCxJQTBCTixDQUFDUCxVQUFELENBMUJNLENBQVQ7O0FBZEUsV0EwQ2FhLE1BMUNiO0FBQUE7QUFBQTs7QUFBQTtBQUFBLHVNQTBDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFFTzVDLHlEQUFBLENBQWM4QyxjQUFkLEVBQThCO0FBQ25DQyxnQkFBQUEsT0FBTyxjQUQ0QjtBQUVuQ0MsZ0JBQUFBLEtBQUssRUFBRSx3QkFGNEI7QUFHbkNDLGdCQUFBQSxPQUFPO0FBSDRCLGVBQTlCLENBRlA7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0ExQ0U7QUFBQTtBQUFBOztBQUFBLFdBeURhQyxrQkF6RGI7QUFBQTtBQUFBOztBQUFBO0FBQUEsbU5BeURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNLQyxjQUFBQSxRQURMLEdBQ2dCQyxtQkFBTyxDQUFDLHlEQUFELENBRHZCO0FBRUtDLGNBQUFBLElBRkwsR0FFWSxJQUFJRixRQUFKLENBQWE7QUFBRUcsZ0JBQUFBLE1BQU0sRUFBRTtBQUFWLGVBQWIsRUFBOENELElBQTlDLENBQW1ELG1CQUFuRCxDQUZaO0FBR0tFLGNBQUFBLFdBSEwsR0FHbUIsSUFBSUMsSUFBSixFQUhuQjtBQUFBO0FBQUEscUJBSU9ILElBQUksQ0FBQyxVQUFELENBQUosQ0FBaUJJLE1BQWpCLENBQXdCLENBQzdCO0FBQ0MsMEJBQVU7QUFDVCw2QkFBVzdDLE9BREY7QUFFVCwwQkFBUTJDLFdBRkM7QUFHVCw4QkFBWUcsYUFBYSxDQUFDQyxZQUFkLEdBQTZCQyxRQUE3QixFQUhIO0FBSVQsOEJBQVl2QztBQUpIO0FBRFgsZUFENkIsQ0FBeEIsQ0FKUDs7QUFBQTtBQWFDckIsY0FBQUEseURBQUEsQ0FBYyx5QkFBZDtBQWJEO0FBQUEscUJBY0s4QyxjQUFjLEVBZG5COztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBekRFO0FBQUE7QUFBQTs7QUFBQSxXQTBFYUEsY0ExRWI7QUFBQTtBQUFBOztBQUFBO0FBQUEsK01BMEVGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNLSyxjQUFBQSxRQURMLEdBQ2dCQyxtQkFBTyxDQUFDLHlEQUFELENBRHZCO0FBRUtDLGNBQUFBLElBRkwsR0FFWSxJQUFJRixRQUFKLENBQWE7QUFBRUcsZ0JBQUFBLE1BQU0sRUFBRTtBQUFWLGVBQWIsRUFBOENELElBQTlDLENBQW1ELG1CQUFuRCxDQUZaLEVBSUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFU2QsY0FBQUEsQ0FiVixHQWFjLENBYmQ7O0FBQUE7QUFBQSxvQkFhaUJBLENBQUMsR0FBR3NCLGdCQUFnQixDQUFDckIsTUFidEM7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxxQkFnQlFyQyxtRUFBYyxDQUFDMEQsZ0JBQWdCLENBQUN0QixDQUFELENBQWpCLENBaEJ0Qjs7QUFBQTtBQWE4Q0EsY0FBQUEsQ0FBQyxFQWIvQztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0ExRUU7QUFBQTtBQUFBOztBQUFBLFdBK0ZhdUIsWUEvRmI7QUFBQTtBQUFBOztBQUFBO0FBQUEsNk1BK0ZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUNLQyxNQUFNLENBQUMxQyxNQUFELENBQU4sR0FBaUIwQyxNQUFNLENBQUNoRCxVQUFELENBRDVCO0FBQUE7QUFBQTtBQUFBOztBQUVFVSxjQUFBQSxvQkFBb0I7QUFGdEI7O0FBQUE7QUFLS3VDLGNBQUFBLFdBTEwsR0FLbUJyQyxRQUFRLENBQUNzQyxzQkFBVCxDQUFnQyxpQkFBaEMsRUFBbUQsQ0FBbkQsQ0FMbkI7O0FBQUEsb0JBTUtDLE1BQU0sQ0FBQ1IsYUFBUCxDQUFxQlMsVUFBckIsTUFBcUMsS0FOMUM7QUFBQTtBQUFBO0FBQUE7O0FBT0VILGNBQUFBLFdBQVcsQ0FBQ0ksU0FBWixHQUF3Qix3QkFBeEI7QUFQRjtBQUFBLHFCQVFRcEUsc0RBQUEsQ0FBVywrQ0FBWCxDQVJSOztBQUFBO0FBQUE7QUFBQSxxQkFTUWtFLE1BQU0sQ0FBQ1IsYUFBUCxDQUFxQlksYUFBckIsQ0FDTEosTUFBTSxDQUFDSyxVQUFQLENBQWtCQyxZQURiLEVBRUwsYUFGSyxDQVRSOztBQUFBO0FBQUE7O0FBQUE7QUFjQztBQUNBO0FBQ01DLGNBQUFBLE1BaEJQLEdBZ0JnQjtBQUNkQyxnQkFBQUEsU0FBUyxFQUFFLFNBREc7QUFFZEMsZ0JBQUFBLFFBQVEsRUFBRSxJQUFJcEUsK0VBQUosRUFGSTtBQUdkdUUsZ0JBQUFBLE9BQU8sRUFBRSw4QkFISztBQUlkQyxnQkFBQUEsU0FBUyxFQUFFLGlDQUpHO0FBS2RDLGdCQUFBQSxTQUFTLEVBQUUsaUNBTEc7QUFNZEMsZ0JBQUFBLFdBQVcsRUFBRTtBQU5DLGVBaEJoQixFQXdCQzs7QUF4QkQ7QUFBQSxxQkF5Qm9CMUUsaURBQUEsQ0FBZ0JrRSxNQUFoQixDQXpCcEI7O0FBQUE7QUF5Qk9VLGNBQUFBLElBekJQO0FBQUE7QUFBQSxxQkEwQnVCQSxJQUFJLENBQUNDLE9BQUwsQ0FBYTFCLGFBQWEsQ0FBQ0MsWUFBZCxFQUFiLENBMUJ2Qjs7QUFBQTtBQTBCT3lCLGNBQUFBLE9BMUJQO0FBMkJPQyxjQUFBQSxhQTNCUCxHQTJCdUIsQ0FBQ3RCLE1BQU0sQ0FBQzFDLE1BQUQsQ0FBTixHQUFpQix5QkFBbEIsRUFBNkNpRSxjQUE3QyxDQUE0RCxVQUE1RCxFQUF3RTtBQUFFQyxnQkFBQUEsV0FBVyxFQUFFO0FBQWYsZUFBeEUsQ0EzQnZCO0FBQUE7QUFBQSxxQkE2Qk9ILE9BQU8sQ0FBQ0ksU0FBUixDQUNMN0UsU0FESyxFQUNNO0FBQ1gwRSxjQUFBQSxhQUZLLENBRVM7QUFGVCxnQkFHSkksSUFISSx3TUFHQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQUNBdkYsOERBQVMsQ0FBQ1UsT0FBRCxFQUFVOEMsYUFBYSxDQUFDQyxZQUFkLEdBQTZCQyxRQUE3QixFQUFWLEVBQW1EdkMsTUFBbkQsQ0FEVDs7QUFBQTtBQUVHa0Isd0JBQUFBLENBRkgsR0FFTyxDQUZQOztBQUFBO0FBQUEsOEJBRVVBLENBQUMsR0FBR3NCLGdCQUFnQixDQUFDckIsTUFGL0I7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSwrQkFHQ3JDLG1FQUFjLENBQUMwRCxnQkFBZ0IsQ0FBQ3RCLENBQUQsQ0FBakIsQ0FIZjs7QUFBQTtBQUV1Q0Esd0JBQUFBLENBQUMsRUFGeEM7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSEQsSUFTSGtELElBVEcsQ0FTRSxZQUFNO0FBQ2J2QixnQkFBQUEsTUFBTSxDQUFDd0IsUUFBUCxDQUFnQkMsTUFBaEI7QUFDQXpCLGdCQUFBQSxNQUFNLENBQUN2QyxRQUFQLENBQWdCc0Msc0JBQWhCLENBQXVDLFdBQXZDLEVBQW9ELENBQXBELEVBQXVEMkIsS0FBdkQ7QUFDQSxlQVpLLEVBYUpDLEtBYkksQ0FhRSxVQUFDN0MsS0FBRCxFQUFXO0FBQ2pCaEIsZ0JBQUFBLE9BQU8sQ0FBQ2dCLEtBQVIsQ0FBYyxRQUFkLEVBQXdCQSxLQUF4QjtBQUNBaEIsZ0JBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZZSxLQUFaO0FBQ0E7QUFDQSxlQWpCSSxDQTdCUDs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQS9GRTtBQUFBO0FBQUE7O0FBZ0pGLG1CQUFvQ3RELCtDQUFRLENBQUMsRUFBRCxDQUE1QztBQUFBO0FBQUEsTUFBT3FDLFVBQVA7QUFBQSxNQUFtQlksYUFBbkI7O0FBR0EsbUJBQXNDakQsK0NBQVEsQ0FBQyxLQUFELENBQTlDO0FBQUE7QUFBQSxNQUFPb0csV0FBUDtBQUFBLE1BQW9CQyxjQUFwQjs7QUFDQSxtQkFBMENyRywrQ0FBUSxDQUFDLEtBQUQsQ0FBbEQ7QUFBQTtBQUFBLE1BQU9zRyxhQUFQO0FBQUEsTUFBc0JDLGdCQUF0Qjs7QUFDQSxvQkFBZ0R2RywrQ0FBUSxDQUFDLEVBQUQsQ0FBeEQ7QUFBQTtBQUFBLE1BQU9tRSxnQkFBUDtBQUFBLE1BQXlCcUMsbUJBQXpCOztBQUVBLE1BQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ0MsV0FBRCxFQUFpQjtBQUN2Q3BFLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGFBQVo7QUFDQUQsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVltRSxXQUFaO0FBQ0EsUUFBSUMsUUFBUSxHQUFHLEVBQWY7O0FBQ0EsU0FBSyxJQUFJOUQsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR3NCLGdCQUFnQixDQUFDckIsTUFBckMsRUFBNkNELENBQUMsRUFBOUMsRUFBa0Q7QUFDakQ4RCxNQUFBQSxRQUFRLENBQUNDLElBQVQsQ0FBY3pDLGdCQUFnQixDQUFDdEIsQ0FBRCxDQUE5QjtBQUNBOztBQUNEOEQsSUFBQUEsUUFBUSxDQUFDQyxJQUFULENBQWNGLFdBQWQ7QUFDQXBFLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZb0UsUUFBWjtBQUVBSCxJQUFBQSxtQkFBbUIsQ0FBQ0csUUFBRCxDQUFuQjtBQUNBLEdBWEQ7O0FBWUEsTUFBTUUsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFDSCxXQUFELEVBQWlCO0FBQ3pDLFFBQUlDLFFBQVEsR0FBRyxFQUFmOztBQUNBLFNBQUssSUFBSTlELENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdzQixnQkFBZ0IsQ0FBQ3JCLE1BQXJDLEVBQTZDRCxDQUFDLEVBQTlDLEVBQWtEO0FBQ2pELFVBQUlzQixnQkFBZ0IsQ0FBQ3RCLENBQUQsQ0FBaEIsSUFBdUI2RCxXQUEzQixFQUNDQyxRQUFRLENBQUNDLElBQVQsQ0FBY3pDLGdCQUFnQixDQUFDdEIsQ0FBRCxDQUE5QjtBQUNEOztBQUNEUCxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWW9FLFFBQVo7QUFDQUgsSUFBQUEsbUJBQW1CLENBQUNHLFFBQUQsQ0FBbkI7QUFDQSxHQVJEOztBQVVBLE1BQU1HLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsR0FBTTtBQUMvQixRQUFJVixXQUFKLEVBQWlCO0FBQ2hCQyxNQUFBQSxjQUFjLENBQUMsS0FBRCxDQUFkO0FBQ0FHLE1BQUFBLG1CQUFtQixDQUFDLEVBQUQsQ0FBbkI7QUFDQSxLQUhELE1BR087QUFFTkgsTUFBQUEsY0FBYyxDQUFDLElBQUQsQ0FBZDtBQUNBLFVBQUlNLFFBQVEsR0FBRyxFQUFmOztBQUNBLFdBQUssSUFBSTlELENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdSLFVBQVUsQ0FBQ1MsTUFBL0IsRUFBdUNELENBQUMsRUFBeEMsRUFBNEM7QUFDM0M4RCxRQUFBQSxRQUFRLENBQUNDLElBQVQsQ0FBY3ZFLFVBQVUsQ0FBQ1EsQ0FBRCxDQUFWLENBQWNrRSxFQUE1QjtBQUNBOztBQUNESixNQUFBQSxRQUFRLENBQUNDLElBQVQsQ0FBYyxDQUFDLENBQWY7QUFDQUosTUFBQUEsbUJBQW1CLENBQUNHLFFBQUQsQ0FBbkI7QUFDQTtBQUVELEdBZkQ7O0FBZ0JBLE1BQU1LLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDekIsUUFBSVYsYUFBSixFQUFtQjtBQUNsQkMsTUFBQUEsZ0JBQWdCLENBQUMsS0FBRCxDQUFoQjtBQUNBLFVBQUlJLFFBQVEsR0FBRyxFQUFmOztBQUNBLFdBQUssSUFBSTlELENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdzQixnQkFBZ0IsQ0FBQ3JCLE1BQXJDLEVBQTZDRCxDQUFDLEVBQTlDLEVBQWtEO0FBQ2pELFlBQUlzQixnQkFBZ0IsQ0FBQ3RCLENBQUQsQ0FBaEIsSUFBdUIsQ0FBQyxDQUE1QixFQUNDOEQsUUFBUSxDQUFDQyxJQUFULENBQWN6QyxnQkFBZ0IsQ0FBQ3RCLENBQUQsQ0FBOUI7QUFDRDs7QUFDRDJELE1BQUFBLG1CQUFtQixDQUFDRyxRQUFELENBQW5CO0FBQ0EsS0FSRCxNQVFPO0FBQ05KLE1BQUFBLGdCQUFnQixDQUFDLElBQUQsQ0FBaEI7QUFDQSxVQUFJSSxRQUFRLEdBQUcsRUFBZjs7QUFDQSxXQUFLLElBQUk5RCxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHc0IsZ0JBQWdCLENBQUNyQixNQUFyQyxFQUE2Q0QsQ0FBQyxFQUE5QyxFQUFrRDtBQUNqRDhELFFBQUFBLFFBQVEsQ0FBQ0MsSUFBVCxDQUFjekMsZ0JBQWdCLENBQUN0QixDQUFELENBQTlCO0FBQ0E7O0FBQ0Q4RCxNQUFBQSxRQUFRLENBQUNDLElBQVQsQ0FBYyxDQUFDLENBQWY7QUFDQUosTUFBQUEsbUJBQW1CLENBQUNHLFFBQUQsQ0FBbkI7QUFDQTtBQUNELEdBbEJEOztBQW1CQSxzQkFDQyxpSEFDQyxpREFBQyw4REFBRDtBQUNDLFFBQUksRUFBRTVGLElBRFA7QUFFQyxVQUFNLEVBQUVDLE1BRlQ7QUFHQyx1QkFBZ0IsK0JBSGpCO0FBSUMsWUFBUTtBQUpULGtCQU1DLGlEQUFDLHFFQUFEO0FBQWMsZUFBVztBQUF6QixLQUNHSSxJQUFJLElBQUksWUFBVCxnQkFDQSxpREFBQyxvRUFBRDtBQUFhLE1BQUUsRUFBQztBQUFoQixzQkFEQSxnQkFJQSxpREFBQyxvRUFBRDtBQUFhLE1BQUUsRUFBQztBQUFoQixlQUxGLENBTkQsZUFnQkMsaURBQUMsbUVBQUQ7QUFBWSxhQUFTLEVBQUM7QUFBdEIsa0JBQ0MsaURBQUMsNkRBQUQscUJBQ0M7QUFBSyxNQUFFLEVBQUMsT0FBUjtBQUFnQixTQUFLLEVBQUU7QUFBRTZGLE1BQUFBLE9BQU8sRUFBRTtBQUFYLEtBQXZCO0FBQTRDLGFBQVMsRUFBQyxvQkFBdEQ7QUFBMkUsUUFBSSxFQUFDO0FBQWhGLEtBQ0V6RixLQURGLENBREQsZUFJQyxpREFBQyxtRUFBRDtBQUFZLGFBQVMsRUFBQyxNQUF0QjtBQUE2QixhQUFTLEVBQUM7QUFBdkMsa0JBQ0MsaURBQUMsbUVBQUQsNkJBREQsRUFFRUksV0FGRixDQUpELGVBUUM7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDQztBQUFJLFNBQUssRUFBRTtBQUFFc0YsTUFBQUEsWUFBWSxFQUFFO0FBQWhCO0FBQVgsNkNBREQsZUFFQztBQUFLLFNBQUssRUFBRTtBQUFFQyxNQUFBQSxLQUFLLEVBQUUsTUFBVDtBQUFpQkMsTUFBQUEsT0FBTyxFQUFFLEtBQTFCO0FBQWlDSCxNQUFBQSxPQUFPLEVBQUUsTUFBMUM7QUFBa0RJLE1BQUFBLGNBQWMsRUFBRSxRQUFsRTtBQUE0RUMsTUFBQUEsVUFBVSxFQUFFLFFBQXhGO0FBQWtHQyxNQUFBQSxRQUFRLEVBQUUsVUFBNUc7QUFBd0hDLE1BQUFBLFVBQVUsRUFBRSxRQUFwSTtBQUE4SUMsTUFBQUEsTUFBTSxFQUFFLE1BQXRKO0FBQThKQyxNQUFBQSxZQUFZLEVBQUUsS0FBNUs7QUFBbUxSLE1BQUFBLFlBQVksRUFBRTtBQUFqTSxLQUFaO0FBQXVOLFdBQU8sRUFBRSxtQkFBTTtBQUVyT0osTUFBQUEsaUJBQWlCO0FBQ2pCO0FBSEQsa0JBSUM7QUFBSSxTQUFLLEVBQUU7QUFBRWEsTUFBQUEsU0FBUyxFQUFFLFFBQWI7QUFBdUJDLE1BQUFBLEtBQUssRUFBRTtBQUE5QjtBQUFYLDJCQUpELEVBS0V4QixXQUFXLGdCQUNYO0FBQUssU0FBSyxFQUFFO0FBQUVtQixNQUFBQSxRQUFRLEVBQUUsVUFBWjtBQUF3Qk0sTUFBQUEsS0FBSyxFQUFFLE1BQS9CO0FBQXVDQyxNQUFBQSxHQUFHLEVBQUU7QUFBNUM7QUFBWixrQkFDQztBQUFLLFNBQUssRUFBRTtBQUNYQyxNQUFBQSxTQUFTLEVBQUUsTUFEQTtBQUVYZCxNQUFBQSxPQUFPLEVBQUUsTUFGRTtBQUdYRSxNQUFBQSxLQUFLLEVBQUUsTUFISTtBQUlYTSxNQUFBQSxNQUFNLEVBQUUsTUFKRztBQUtYSixNQUFBQSxjQUFjLEVBQUUsUUFMTDtBQU1YVyxNQUFBQSxhQUFhLEVBQUUsUUFOSjtBQU9YVixNQUFBQSxVQUFVLEVBQUUsUUFQRDtBQVFYSSxNQUFBQSxZQUFZLEVBQUUsTUFSSDtBQVNYRixNQUFBQSxVQUFVLEVBQUU7QUFURDtBQUFaLGtCQVVHLGlEQUFDLHlEQUFEO0FBQU0sUUFBSSxFQUFDO0FBQVgsSUFWSCxDQURELENBRFcsZ0JBY1g7QUFBSyxTQUFLLEVBQUU7QUFBRUQsTUFBQUEsUUFBUSxFQUFFLFVBQVo7QUFBd0JNLE1BQUFBLEtBQUssRUFBRSxNQUEvQjtBQUF1Q0MsTUFBQUEsR0FBRyxFQUFFO0FBQTVDO0FBQVosa0JBQ0M7QUFBSyxTQUFLLEVBQUU7QUFDWEMsTUFBQUEsU0FBUyxFQUFFLE1BREE7QUFFWGQsTUFBQUEsT0FBTyxFQUFFLE1BRkU7QUFHWEUsTUFBQUEsS0FBSyxFQUFFLE1BSEk7QUFJWE0sTUFBQUEsTUFBTSxFQUFFLE1BSkc7QUFLWEosTUFBQUEsY0FBYyxFQUFFLFFBTEw7QUFNWFcsTUFBQUEsYUFBYSxFQUFFLFFBTko7QUFPWFYsTUFBQUEsVUFBVSxFQUFFLFFBUEQ7QUFRWEksTUFBQUEsWUFBWSxFQUFFLE1BUkg7QUFTWEYsTUFBQUEsVUFBVSxFQUFFO0FBVEQ7QUFBWixrQkFVRyxpREFBQyx5REFBRDtBQUFNLFFBQUksRUFBQztBQUFYLElBVkgsQ0FERCxDQW5CRixDQUZELENBUkQsZUE0Q0M7QUFBSyxhQUFTLEVBQUMsZ0JBQWY7QUFBZ0MsU0FBSyxFQUFFO0FBQUVTLE1BQUFBLFVBQVUsRUFBRSxPQUFkO0FBQXVCQyxNQUFBQSxXQUFXLEVBQUUsT0FBcEM7QUFBNkNqQixNQUFBQSxPQUFPLEVBQUUsTUFBdEQ7QUFBOERlLE1BQUFBLGFBQWEsRUFBRSxLQUE3RTtBQUFvRkcsTUFBQUEsUUFBUSxFQUFFO0FBQTlGO0FBQXZDLEtBRUUsMEZBQUE5RixVQUFVLE1BQVYsQ0FBQUEsVUFBVSxFQUFLLFVBQUMrRixRQUFEO0FBQUEsV0FDYiwrRkFBQWpFLGdCQUFnQixNQUFoQixDQUFBQSxnQkFBZ0IsRUFBU2lFLFFBQVEsQ0FBQ3JCLEVBQWxCLENBQWhCLEtBQTBDLENBQUMsQ0FBNUMsZ0JBQ0U7QUFBSyxXQUFLLEVBQUU7QUFBRUksUUFBQUEsS0FBSyxFQUFFLEtBQVQ7QUFBZ0JDLFFBQUFBLE9BQU8sRUFBRSxRQUF6QjtBQUFtQ0YsUUFBQUEsWUFBWSxFQUFFO0FBQWpELE9BQVo7QUFBdUUsU0FBRyxFQUFFa0IsUUFBUSxDQUFDckIsRUFBckY7QUFBeUYsYUFBTyxFQUFFO0FBQUEsZUFBTUYsZ0JBQWdCLENBQUN1QixRQUFRLENBQUNyQixFQUFWLENBQXRCO0FBQUE7QUFBbEcsb0JBQ0E7QUFBSyxXQUFLLEVBQUU7QUFBRVMsUUFBQUEsVUFBVSxFQUFFLE9BQWQ7QUFBdUJKLFFBQUFBLE9BQU8sRUFBRSxVQUFoQztBQUE0Q2lCLFFBQUFBLE1BQU0sRUFBRSx1QkFBcEQ7QUFBNkVYLFFBQUFBLFlBQVksRUFBRSxLQUEzRjtBQUFrR0osUUFBQUEsVUFBVSxFQUFFO0FBQTlHO0FBQVosb0JBQ0M7QUFBSSxXQUFLLEVBQUU7QUFBRUosUUFBQUEsWUFBWSxFQUFFLE1BQWhCO0FBQXdCVSxRQUFBQSxLQUFLLEVBQUUsU0FBL0I7QUFBMENVLFFBQUFBLFNBQVMsRUFBRTtBQUFyRDtBQUFYLE9BQTZFRixRQUFRLENBQUNHLEtBQXRGLENBREQsZUFFQztBQUFLLFNBQUcsRUFBRUgsUUFBUSxDQUFDSSxLQUFuQjtBQUEwQixXQUFLLEVBQUU7QUFBRXJCLFFBQUFBLEtBQUssRUFBRSxNQUFUO0FBQWlCTyxRQUFBQSxZQUFZLEVBQUUsS0FBL0I7QUFBc0NELFFBQUFBLE1BQU0sRUFBRTtBQUE5QztBQUFqQyxNQUZELGVBR0M7QUFBSSxXQUFLLEVBQUU7QUFBRUcsUUFBQUEsS0FBSyxFQUFFLFNBQVQ7QUFBb0JVLFFBQUFBLFNBQVMsRUFBRSxRQUEvQjtBQUF5Q1AsUUFBQUEsU0FBUyxFQUFFLE1BQXBEO0FBQTREVSxRQUFBQSxVQUFVLEVBQUU7QUFBeEU7QUFBWCxPQUE4RkwsUUFBUSxDQUFDcEYsTUFBVCxHQUFrQm9GLFFBQVEsQ0FBQ3JGLEtBQXpILFNBSEQsZUFJQztBQUFJLFdBQUssRUFBRTtBQUFFNkUsUUFBQUEsS0FBSyxFQUFFLFNBQVQ7QUFBb0JVLFFBQUFBLFNBQVMsRUFBRSxRQUEvQjtBQUF5Q0csUUFBQUEsVUFBVSxFQUFFO0FBQXJEO0FBQVgsWUFBNEVMLFFBQVEsQ0FBQ3BGLE1BQXJGLGFBSkQsZUFRQztBQUFLLFdBQUssRUFBRTtBQUFFaUUsUUFBQUEsT0FBTyxFQUFFLE1BQVg7QUFBbUJJLFFBQUFBLGNBQWMsRUFBRTtBQUFuQztBQUFaLG9CQUNDO0FBQUssV0FBSyxFQUFFO0FBQ1hVLFFBQUFBLFNBQVMsRUFBRSxNQURBO0FBRVhkLFFBQUFBLE9BQU8sRUFBRSxNQUZFO0FBR1hFLFFBQUFBLEtBQUssRUFBRSxNQUhJO0FBSVhNLFFBQUFBLE1BQU0sRUFBRSxNQUpHO0FBS1hKLFFBQUFBLGNBQWMsRUFBRSxRQUxMO0FBTVhXLFFBQUFBLGFBQWEsRUFBRSxRQU5KO0FBT1hWLFFBQUFBLFVBQVUsRUFBRSxRQVBEO0FBUVhJLFFBQUFBLFlBQVksRUFBRSxNQVJIO0FBU1hGLFFBQUFBLFVBQVUsRUFBRTtBQVREO0FBQVosb0JBV0csaURBQUMseURBQUQ7QUFBTSxVQUFJLEVBQUM7QUFBWCxNQVhILENBREQsQ0FSRCxDQURBLENBREYsZ0JBMkJFO0FBQUssV0FBSyxFQUFFO0FBQUVMLFFBQUFBLEtBQUssRUFBRSxLQUFUO0FBQWdCQyxRQUFBQSxPQUFPLEVBQUUsUUFBekI7QUFBbUNGLFFBQUFBLFlBQVksRUFBRTtBQUFqRCxPQUFaO0FBQXVFLFNBQUcsRUFBRWtCLFFBQVEsQ0FBQ3JCLEVBQXJGO0FBQXlGLGFBQU8sRUFBRTtBQUFBLGVBQU1OLGNBQWMsQ0FBQzJCLFFBQVEsQ0FBQ3JCLEVBQVYsQ0FBcEI7QUFBQTtBQUFsRyxvQkFDQTtBQUFLLFdBQUssRUFBRTtBQUFFUyxRQUFBQSxVQUFVLEVBQUUsT0FBZDtBQUF1QkosUUFBQUEsT0FBTyxFQUFFLFVBQWhDO0FBQTRDaUIsUUFBQUEsTUFBTSxFQUFFLHVCQUFwRDtBQUE2RVgsUUFBQUEsWUFBWSxFQUFFLEtBQTNGO0FBQWtHSixRQUFBQSxVQUFVLEVBQUU7QUFBOUc7QUFBWixvQkFDQztBQUFJLFdBQUssRUFBRTtBQUFFSixRQUFBQSxZQUFZLEVBQUUsTUFBaEI7QUFBd0JVLFFBQUFBLEtBQUssRUFBRSxTQUEvQjtBQUEwQ1UsUUFBQUEsU0FBUyxFQUFFO0FBQXJEO0FBQVgsT0FBNkVGLFFBQVEsQ0FBQ0csS0FBdEYsQ0FERCxlQUVDO0FBQUssU0FBRyxFQUFFSCxRQUFRLENBQUNJLEtBQW5CO0FBQTBCLFdBQUssRUFBRTtBQUFFckIsUUFBQUEsS0FBSyxFQUFFLE1BQVQ7QUFBaUJPLFFBQUFBLFlBQVksRUFBRSxLQUEvQjtBQUFzQ0QsUUFBQUEsTUFBTSxFQUFFO0FBQTlDO0FBQWpDLE1BRkQsZUFHQztBQUFJLFdBQUssRUFBRTtBQUFFRyxRQUFBQSxLQUFLLEVBQUUsU0FBVDtBQUFvQlUsUUFBQUEsU0FBUyxFQUFFLFFBQS9CO0FBQXlDUCxRQUFBQSxTQUFTLEVBQUUsTUFBcEQ7QUFBNERVLFFBQUFBLFVBQVUsRUFBRTtBQUF4RTtBQUFYLE9BQThGTCxRQUFRLENBQUNwRixNQUFULEdBQWtCb0YsUUFBUSxDQUFDckYsS0FBekgsU0FIRCxlQUlDO0FBQUksV0FBSyxFQUFFO0FBQUU2RSxRQUFBQSxLQUFLLEVBQUUsU0FBVDtBQUFvQlUsUUFBQUEsU0FBUyxFQUFFLFFBQS9CO0FBQXlDRyxRQUFBQSxVQUFVLEVBQUU7QUFBckQ7QUFBWCxZQUE0RUwsUUFBUSxDQUFDcEYsTUFBckYsYUFKRCxlQU9DO0FBQUssV0FBSyxFQUFFO0FBQUVpRSxRQUFBQSxPQUFPLEVBQUUsTUFBWDtBQUFtQkksUUFBQUEsY0FBYyxFQUFFO0FBQW5DO0FBQVosb0JBQ0M7QUFBSyxXQUFLLEVBQUU7QUFDWFUsUUFBQUEsU0FBUyxFQUFFLE1BREE7QUFFWGQsUUFBQUEsT0FBTyxFQUFFLE1BRkU7QUFHWEUsUUFBQUEsS0FBSyxFQUFFLE1BSEk7QUFJWE0sUUFBQUEsTUFBTSxFQUFFLE1BSkc7QUFLWEosUUFBQUEsY0FBYyxFQUFFLFFBTEw7QUFNWFcsUUFBQUEsYUFBYSxFQUFFLFFBTko7QUFPWFYsUUFBQUEsVUFBVSxFQUFFLFFBUEQ7QUFRWEksUUFBQUEsWUFBWSxFQUFFLE1BUkg7QUFTWEYsUUFBQUEsVUFBVSxFQUFFO0FBVEQ7QUFBWixvQkFVRyxpREFBQyx5REFBRDtBQUFNLFVBQUksRUFBQztBQUFYLE1BVkgsQ0FERCxDQVBELENBREEsQ0E1Qlk7QUFBQSxHQUFMLENBRlosZUEyREM7QUFBSyxTQUFLLEVBQUU7QUFBRUwsTUFBQUEsS0FBSyxFQUFFLEtBQVQ7QUFBZ0JDLE1BQUFBLE9BQU8sRUFBRSxRQUF6QjtBQUFtQ0gsTUFBQUEsT0FBTyxFQUFFLE1BQTVDO0FBQW9EZSxNQUFBQSxhQUFhLEVBQUU7QUFBbkUsS0FBWjtBQUEyRixXQUFPLEVBQUU7QUFBQSxhQUFNaEIsV0FBVyxFQUFqQjtBQUFBO0FBQXBHLEtBRUczRSxVQUFVLENBQUNTLE1BQVgsR0FBb0IsQ0FBckIsZ0JBQ0U7QUFBSyxTQUFLLEVBQUU7QUFBRTBFLE1BQUFBLFVBQVUsRUFBRSxPQUFkO0FBQXVCSixNQUFBQSxPQUFPLEVBQUUsTUFBaEM7QUFBd0NpQixNQUFBQSxNQUFNLEVBQUUsdUJBQWhEO0FBQXlFWCxNQUFBQSxZQUFZLEVBQUUsS0FBdkY7QUFBOEZKLE1BQUFBLFVBQVUsRUFBRSxRQUExRztBQUFvSEosTUFBQUEsWUFBWSxFQUFFO0FBQWxJO0FBQVosa0JBQ0E7QUFBSSxTQUFLLEVBQUU7QUFBRUEsTUFBQUEsWUFBWSxFQUFFLE1BQWhCO0FBQXdCVSxNQUFBQSxLQUFLLEVBQUUsU0FBL0I7QUFBMENVLE1BQUFBLFNBQVMsRUFBRTtBQUFyRDtBQUFYLHFCQURBLGVBRUE7QUFBSSxTQUFLLEVBQUU7QUFBRVYsTUFBQUEsS0FBSyxFQUFFLFNBQVQ7QUFBb0JVLE1BQUFBLFNBQVMsRUFBRSxRQUEvQjtBQUF5Q1AsTUFBQUEsU0FBUyxFQUFFLE1BQXBEO0FBQTREVSxNQUFBQSxVQUFVLEVBQUU7QUFBeEU7QUFBWCxLQUNDNUcsYUFERCxTQUZBLEVBTUUsK0ZBQUFzQyxnQkFBZ0IsTUFBaEIsQ0FBQUEsZ0JBQWdCLEVBQVMsQ0FBQyxDQUFWLENBQWhCLEtBQWlDLENBQUMsQ0FBbkMsZ0JBQ0M7QUFBSyxTQUFLLEVBQUU7QUFBRThDLE1BQUFBLE9BQU8sRUFBRSxNQUFYO0FBQW1CSSxNQUFBQSxjQUFjLEVBQUU7QUFBbkM7QUFBWixrQkFDQztBQUFLLFNBQUssRUFBRTtBQUNYVSxNQUFBQSxTQUFTLEVBQUUsTUFEQTtBQUVYZCxNQUFBQSxPQUFPLEVBQUUsTUFGRTtBQUdYRSxNQUFBQSxLQUFLLEVBQUUsTUFISTtBQUlYTSxNQUFBQSxNQUFNLEVBQUUsTUFKRztBQUtYSixNQUFBQSxjQUFjLEVBQUUsUUFMTDtBQU1YVyxNQUFBQSxhQUFhLEVBQUUsUUFOSjtBQU9YVixNQUFBQSxVQUFVLEVBQUUsUUFQRDtBQVFYSSxNQUFBQSxZQUFZLEVBQUUsTUFSSDtBQVNYRixNQUFBQSxVQUFVLEVBQUU7QUFURDtBQUFaLGtCQVdHLGlEQUFDLHlEQUFEO0FBQU0sUUFBSSxFQUFDO0FBQVgsSUFYSCxDQURELENBREQsZ0JBZUM7QUFBSyxTQUFLLEVBQUU7QUFBRVAsTUFBQUEsT0FBTyxFQUFFLE1BQVg7QUFBbUJJLE1BQUFBLGNBQWMsRUFBRTtBQUFuQztBQUFaLGtCQUNDO0FBQUssU0FBSyxFQUFFO0FBQ1hVLE1BQUFBLFNBQVMsRUFBRSxNQURBO0FBRVhkLE1BQUFBLE9BQU8sRUFBRSxNQUZFO0FBR1hFLE1BQUFBLEtBQUssRUFBRSxNQUhJO0FBSVhNLE1BQUFBLE1BQU0sRUFBRSxNQUpHO0FBS1hKLE1BQUFBLGNBQWMsRUFBRSxRQUxMO0FBTVhXLE1BQUFBLGFBQWEsRUFBRSxRQU5KO0FBT1hWLE1BQUFBLFVBQVUsRUFBRSxRQVBEO0FBUVhJLE1BQUFBLFlBQVksRUFBRSxNQVJIO0FBU1hGLE1BQUFBLFVBQVUsRUFBRTtBQVREO0FBQVosa0JBV0csaURBQUMseURBQUQ7QUFBTSxRQUFJLEVBQUM7QUFBWCxJQVhILENBREQsQ0FyQkYsQ0FERixHQXNDVyxJQXhDYixDQTNERCxDQTVDRCxlQW9KQztBQUFLLGFBQVMsRUFBQztBQUFmLEtBRUdwRyxJQUFJLElBQUksWUFBVCxnQkFDQSxpREFBQywrREFBRDtBQUFRLFdBQU8sRUFBQyxTQUFoQjtBQUEwQixXQUFPLEVBQUU4QjtBQUFuQyxzQkFEQSxnQkFLQyxpREFBQywrREFBRDtBQUFRLFdBQU8sRUFBQyxTQUFoQjtBQUEwQixXQUFPLEVBQUVBO0FBQW5DLGVBUEgsQ0FwSkQsQ0FERCxDQWhCRCxDQURELENBREQ7QUEwTEE7Ozs7Ozs7O1VDaGFELHFDQUFxQyIsInNvdXJjZXMiOlsid2VicGFjazovL2RlbWV0ZXJnaWZ0Ly4vc3JjL2NvbXBvbmVudHMvY29tcG9uZW50cy9tb2RhbHMvQmlkTkZUTW9kYWwuanN4Iiwid2VicGFjazovL2RlbWV0ZXJnaWZ0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTW9kYWwgZnJvbSAncmVhY3QtYm9vdHN0cmFwL01vZGFsJztcbmltcG9ydCBGb3JtIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Gb3JtJztcbmltcG9ydCBCdXR0b24gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0J1dHRvbic7XG5cbmltcG9ydCB7IHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xuXG5pbXBvcnQgVXNlRm9ybUlucHV0IGZyb20gJy4uL1VzZUZvcm1JbnB1dCc7XG5pbXBvcnQgeyBjcmVhdGVCaWQsIFJlZHVjZUNhdGVnb3J5IH0gZnJvbSAnQC9wYWdlcy9FdmVudHMvdG9rZW4nXG5pbXBvcnQgeyBJY29uIH0gZnJvbSAnQC9jb21wb25lbnRzL2NvbW1vbi9JY29uJ1xuaW1wb3J0IHsgZ2V0Q2F0ZWdvcmllc2J5ZXZlbnRpZCwgZXZlbnRnZXRieWlkIH0gZnJvbSAnLi4vLi4vLi4vcGFnZXMvRXZlbnRzL2V2ZW50J1xuaW1wb3J0ICogYXMgbmVhckFQSSBmcm9tIFwibmVhci1hcGktanNcIlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmlkTkZUTW9kYWwoe1xuXHRzaG93LFxuXHRvbkhpZGUsXG5cdFRvQWRkcmVzcyxcblx0dG9rZW5JZCxcblx0cmVjaWQsXG5cdHR5cGUsXG5cdEhpZ2hlc3RiaWQsXG5cdHdhbGxldFR5cGUsXG5cdGV2ZW50SWQsXG59KSB7XG5cdGNvbnN0IFtBbGVydCwgc2V0QWxlcnRdID0gdXNlU3RhdGUoJycpO1xuXHRjb25zdCBbQW1vdW50LCBBbW91bnRJbnB1dF0gPSBVc2VGb3JtSW5wdXQoe1xuXHRcdHR5cGU6ICd0ZXh0Jyxcblx0XHRwbGFjZWhvbGRlcjogJ0Ftb3VudCcsXG5cdH0pO1xuXHRjb25zdCBbb3RoZXJDYXRlZ29yeSwgc2V0T3RoZXJDYXRlZ29yeV0gPSB1c2VTdGF0ZSgtMSk7XG5cblx0ZnVuY3Rpb24gYWN0aXZhdGVXYXJuaW5nTW9kYWwoKSB7XG5cdFx0dmFyIGFsZXJ0RUxNID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbGVydFwiKTtcblx0XHRhbGVydEVMTS5zdHlsZSA9ICdjb250ZW50cyc7XG5cdFx0c2V0QWxlcnQoYEFtb3VudCBjYW5ub3QgYmUgdW5kZXIgJHtIaWdoZXN0YmlkfSBORUFSYClcblx0fVxuXG5cdHVzZUVmZmVjdChhc3luYyAoKSA9PiB7XG5cdFx0Y29uc3QgYm9vbFRydWUgPSB0cnVlO1xuXHRcdHdoaWxlIChib29sVHJ1ZSkge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0Y29uc3QgY2F0ZWdvcmllcyA9IGF3YWl0IGdldENhdGVnb3JpZXNieWV2ZW50aWQoZXZlbnRJZCk7XG5cdFx0XHRcdGNvbnNvbGUubG9nKFwiY2F0ZWdvcmllcyBmb3IgZXZlbnQ6XCIpO1xuXHRcdFx0XHRjb25zb2xlLmxvZyhjYXRlZ29yaWVzKTtcblx0XHRcdFx0bGV0IGV2ZW50ID0gYXdhaXQgZXZlbnRnZXRieWlkKGV2ZW50SWQpO1xuXHRcdFx0XHR2YXIgZ29hbCA9IGV2ZW50LkdvYWw7XG5cdFx0XHRcdGNvbnNvbGUubG9nKFwiZ29hbDpcIik7XG5cdFx0XHRcdGNvbnNvbGUubG9nKGdvYWwpO1xuXHRcdFx0XHR2YXIgc3Vtb2ZtYWluID0gMDtcblx0XHRcdFx0dmFyIGNhdGVnb3JpZXNfID0gY2F0ZWdvcmllcztcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBjYXRlZ29yaWVzXy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdHN1bW9mbWFpbiArPSBjYXRlZ29yaWVzX1tpXS5wcmljZSAqIGNhdGVnb3JpZXNfW2ldLmFtb3VudDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHNldE90aGVyQ2F0ZWdvcnkoZ29hbCAtIHN1bW9mbWFpbik7XG5cdFx0XHRcdHNldENhdGVnb3JpZXMoY2F0ZWdvcmllc18pO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdH0sIFtjYXRlZ29yaWVzXSk7XG5cblx0YXN5bmMgZnVuY3Rpb24gYmlkTkZUKCkge1xuXG5cdFx0YXdhaXQgdG9hc3QucHJvbWlzZShVcGRhdGVBaXJ0YWJsZSwge1xuXHRcdFx0cGVuZGluZzogYEJpZGRpbmcuLi5gLFxuXHRcdFx0ZXJyb3I6IFwiUGxlYXNlIHRyeSBhZ2FpbiBsYXRlclwiLFxuXHRcdFx0c3VjY2VzczogYFN1Y2Nlc3MhISFgXG5cdFx0fSk7XG5cblx0XHQvLyBhd2FpdCB0b2FzdC5wcm9taXNlKGJpZE5GVGJ5TkVBUiwge1xuXHRcdC8vIFx0cGVuZGluZzogYEJpZGRpbmcuLi5gLFxuXHRcdC8vIFx0ZXJyb3I6IFwiUGxlYXNlIHRyeSBhZ2FpbiBsYXRlclwiLFxuXHRcdC8vIFx0c3VjY2VzczogYFN1Y2Nlc3MhISFgXG5cdFx0Ly8gfSk7XG5cblx0fVxuXHRhc3luYyBmdW5jdGlvbiBDcmVhdGluZ09uQWlyVGFibGUoKSB7XG5cdFx0dmFyIEFpcnRhYmxlID0gcmVxdWlyZSgnYWlydGFibGUnKTtcblx0XHR2YXIgYmFzZSA9IG5ldyBBaXJ0YWJsZSh7IGFwaUtleTogJ2tleVIxUnJjbDlPMnM5YlRzJyB9KS5iYXNlKCdhcHBnYlJDcGJrem1kY3VjTycpO1xuXHRcdGxldCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XG5cdFx0YXdhaXQgYmFzZSgndG9rZW5iaWQnKS5jcmVhdGUoW1xuXHRcdFx0e1xuXHRcdFx0XHRcImZpZWxkc1wiOiB7XG5cdFx0XHRcdFx0XCJUb2tlbmlkXCI6IHRva2VuSWQsXG5cdFx0XHRcdFx0XCJEYXRlXCI6IGN1cnJlbnREYXRlLFxuXHRcdFx0XHRcdFwiVXNlck5hbWVcIjogd2FsbGV0QWNjb3VudC5nZXRBY2NvdW50SWQoKS50b1N0cmluZygpLFxuXHRcdFx0XHRcdFwiQmlkcHJpY2VcIjogQW1vdW50XG5cdFx0XHRcdH1cblx0XHRcdH1dKTtcblx0XHR0b2FzdC5zdWNjZXNzKFwiQmlkIGNyZWF0ZWQgb24gQWlydGFibGVcIik7XG5hd2FpdCBVcGRhdGVBaXJ0YWJsZSgpO1xuXG5cdH1cblx0YXN5bmMgZnVuY3Rpb24gVXBkYXRlQWlydGFibGUoKSB7XG5cdFx0dmFyIEFpcnRhYmxlID0gcmVxdWlyZSgnYWlydGFibGUnKTtcblx0XHR2YXIgYmFzZSA9IG5ldyBBaXJ0YWJsZSh7IGFwaUtleTogJ2tleVIxUnJjbDlPMnM5YlRzJyB9KS5iYXNlKCdhcHBnYlJDcGJrem1kY3VjTycpO1xuXG5cdFx0Ly8gYXdhaXQgYmFzZSgnbmZ0Y3J5cHRvcHVua3MnKS51cGRhdGUoW1xuXHRcdC8vIFx0e1xuXHRcdC8vIFx0XHRcImlkXCI6IHJlY2lkLFxuXHRcdC8vIFx0XHRcImZpZWxkc1wiOiB7XG5cdFx0Ly8gXHRcdFx0XCJwcmljZVwiOiBBbW91bnRcblx0XHQvLyBcdFx0fVxuXHRcdC8vIFx0fVxuXHRcdC8vIF0pO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzZWxlY3RlZENhdGVnb3J5Lmxlbmd0aDsgaSsrKSB7XG5cblxuXHRcdFx0YXdhaXQgUmVkdWNlQ2F0ZWdvcnkoc2VsZWN0ZWRDYXRlZ29yeVtpXSk7XG5cdFx0fVxuXG5cdH1cblxuXHRhc3luYyBmdW5jdGlvbiBiaWRORlRieU5FQVIoKSB7XG5cdFx0aWYgKE51bWJlcihBbW91bnQpIDwgTnVtYmVyKEhpZ2hlc3RiaWQpKSB7XG5cdFx0XHRhY3RpdmF0ZVdhcm5pbmdNb2RhbCgpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHR2YXIgYnV0dG9uUHJvcHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYnRuIGJ0bi1wcmltYXJ5XCIpWzBdO1xuXHRcdGlmICh3aW5kb3cud2FsbGV0QWNjb3VudC5pc1NpZ25lZEluKCkgPT0gZmFsc2UpIHtcblx0XHRcdGJ1dHRvblByb3BzLmlubmVyVGV4dCA9IFwiQ29ubmVjdCB0byBORUFSIHdhbGxldFwiXG5cdFx0XHRhd2FpdCB0b2FzdC53YXJuKFwiTm90IGNvbm5lY3RlZCB3aXRoIE5FQVIgd2FsbGV0ISBDb25uZWN0aW5nLi4uXCIpO1xuXHRcdFx0YXdhaXQgd2luZG93LndhbGxldEFjY291bnQucmVxdWVzdFNpZ25Jbihcblx0XHRcdFx0d2luZG93Lm5lYXJDb25maWcuY29udHJhY3ROYW1lLFxuXHRcdFx0XHQnRGVtZXRlckdpZnQnKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Ly8gV2UgY2FsbCBzYXkgSGkgYW5kIHRoZW4gdXBkYXRlIHdobyBzYWlkIEhpIGxhc3QuXG5cdFx0Ly8gd2luZG93LmNvbnRyYWN0LnNheUhpKCkudGhlbih1cGRhdGVXaG9TYWlkSGkpO1xuXHRcdGNvbnN0IGNvbmZpZyA9IHtcblx0XHRcdG5ldHdvcmtJZDogXCJ0ZXN0bmV0XCIsXG5cdFx0XHRrZXlTdG9yZTogbmV3IG5lYXJBUEkua2V5U3RvcmVzLkJyb3dzZXJMb2NhbFN0b3JhZ2VLZXlTdG9yZSgpLFxuXHRcdFx0bm9kZVVybDogXCJodHRwczovL3JwYy50ZXN0bmV0Lm5lYXIub3JnXCIsXG5cdFx0XHR3YWxsZXRVcmw6IFwiaHR0cHM6Ly93YWxsZXQudGVzdG5ldC5uZWFyLm9yZ1wiLFxuXHRcdFx0aGVscGVyVXJsOiBcImh0dHBzOi8vaGVscGVyLnRlc3RuZXQubmVhci5vcmdcIixcblx0XHRcdGV4cGxvcmVyVXJsOiBcImh0dHBzOi8vZXhwbG9yZXIudGVzdG5ldC5uZWFyLm9yZ1wiLFxuXHRcdH07XG5cdFx0Ly8gc2VuZHMgTkVBUiB0b2tlbnNcblx0XHRjb25zdCBuZWFyID0gYXdhaXQgbmVhckFQSS5jb25uZWN0KGNvbmZpZyk7XG5cdFx0Y29uc3QgYWNjb3VudCA9IGF3YWl0IG5lYXIuYWNjb3VudCh3YWxsZXRBY2NvdW50LmdldEFjY291bnRJZCgpKTtcblx0XHRjb25zdCBhbW91bnRJbllvY3RvID0gKE51bWJlcihBbW91bnQpICogMTAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMCkudG9Mb2NhbGVTdHJpbmcoJ2Z1bGx3aWRlJywgeyB1c2VHcm91cGluZzogZmFsc2UgfSk7XG5cblx0XHRhd2FpdCBhY2NvdW50LnNlbmRNb25leShcblx0XHRcdFRvQWRkcmVzcywgLy8gcmVjZWl2ZXIgYWNjb3VudFxuXHRcdFx0YW1vdW50SW5Zb2N0byAvLyBhbW91bnQgaW4geW9jdG9ORUFSXG5cdFx0KS50aGVuKGFzeW5jICgpID0+IHtcblx0XHRcdGF3YWl0IGNyZWF0ZUJpZCh0b2tlbklkLCB3YWxsZXRBY2NvdW50LmdldEFjY291bnRJZCgpLnRvU3RyaW5nKCksIEFtb3VudCk7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHNlbGVjdGVkQ2F0ZWdvcnkubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0YXdhaXQgUmVkdWNlQ2F0ZWdvcnkoc2VsZWN0ZWRDYXRlZ29yeVtpXSk7XG5cdFx0XHR9XG5cblx0XHR9KS50aGVuKCgpID0+IHtcblx0XHRcdHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcblx0XHRcdHdpbmRvdy5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYnRuLWNsb3NlXCIpWzBdLmNsaWNrKCk7XG5cdFx0fSlcblx0XHRcdC5jYXRjaCgoZXJyb3IpID0+IHtcblx0XHRcdFx0Y29uc29sZS5lcnJvcihcImVycm9yOlwiLCBlcnJvcik7XG5cdFx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fSlcblx0fVxuXG5cdGNvbnN0IFtjYXRlZ29yaWVzLCBzZXRDYXRlZ29yaWVzXSA9IHVzZVN0YXRlKFtdKTtcblxuXG5cdGNvbnN0IFthbGxTZWxlY3RlZCwgc2V0QWxsU2VsZWN0ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXHRjb25zdCBbb3RoZXJTZWxlY3RlZCwgc2V0T3RoZXJTZWxlY3RlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cdGNvbnN0IFtzZWxlY3RlZENhdGVnb3J5LCBzZXRTZWxlY3RlZENhdGVnb3J5XSA9IHVzZVN0YXRlKFtdKTtcblxuXHRjb25zdCBzZWxlY3RDYXRlZ29yeSA9IChjYXRlZ29yeV9pZCkgPT4ge1xuXHRcdGNvbnNvbGUubG9nKFwiY2F0ZWdvcnlfaWRcIik7XG5cdFx0Y29uc29sZS5sb2coY2F0ZWdvcnlfaWQpO1xuXHRcdHZhciB0ZW1wX2FyciA9IFtdO1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc2VsZWN0ZWRDYXRlZ29yeS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dGVtcF9hcnIucHVzaChzZWxlY3RlZENhdGVnb3J5W2ldKTtcblx0XHR9XG5cdFx0dGVtcF9hcnIucHVzaChjYXRlZ29yeV9pZCk7XG5cdFx0Y29uc29sZS5sb2codGVtcF9hcnIpO1xuXG5cdFx0c2V0U2VsZWN0ZWRDYXRlZ29yeSh0ZW1wX2Fycik7XG5cdH1cblx0Y29uc3QgdW5zZWxlY3RDYXRlZ29yeSA9IChjYXRlZ29yeV9pZCkgPT4ge1xuXHRcdHZhciB0ZW1wX2FyciA9IFtdO1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc2VsZWN0ZWRDYXRlZ29yeS5sZW5ndGg7IGkrKykge1xuXHRcdFx0aWYgKHNlbGVjdGVkQ2F0ZWdvcnlbaV0gIT0gY2F0ZWdvcnlfaWQpXG5cdFx0XHRcdHRlbXBfYXJyLnB1c2goc2VsZWN0ZWRDYXRlZ29yeVtpXSk7XG5cdFx0fVxuXHRcdGNvbnNvbGUubG9nKHRlbXBfYXJyKTtcblx0XHRzZXRTZWxlY3RlZENhdGVnb3J5KHRlbXBfYXJyKTtcblx0fVxuXG5cdGNvbnN0IHNlbGVjdEFsbENhdGVnb3J5ID0gKCkgPT4ge1xuXHRcdGlmIChhbGxTZWxlY3RlZCkge1xuXHRcdFx0c2V0QWxsU2VsZWN0ZWQoZmFsc2UpO1xuXHRcdFx0c2V0U2VsZWN0ZWRDYXRlZ29yeShbXSk7XG5cdFx0fSBlbHNlIHtcblxuXHRcdFx0c2V0QWxsU2VsZWN0ZWQodHJ1ZSk7XG5cdFx0XHR2YXIgdGVtcF9hcnIgPSBbXTtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgY2F0ZWdvcmllcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHR0ZW1wX2Fyci5wdXNoKGNhdGVnb3JpZXNbaV0uaWQpXG5cdFx0XHR9XG5cdFx0XHR0ZW1wX2Fyci5wdXNoKC0xKTtcblx0XHRcdHNldFNlbGVjdGVkQ2F0ZWdvcnkodGVtcF9hcnIpO1xuXHRcdH1cblxuXHR9XG5cdGNvbnN0IG90aGVyU2VsZWN0ID0gKCkgPT4ge1xuXHRcdGlmIChvdGhlclNlbGVjdGVkKSB7XG5cdFx0XHRzZXRPdGhlclNlbGVjdGVkKGZhbHNlKTtcblx0XHRcdHZhciB0ZW1wX2FyciA9IFtdO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzZWxlY3RlZENhdGVnb3J5Lmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGlmIChzZWxlY3RlZENhdGVnb3J5W2ldICE9IC0xKVxuXHRcdFx0XHRcdHRlbXBfYXJyLnB1c2goc2VsZWN0ZWRDYXRlZ29yeVtpXSlcblx0XHRcdH1cblx0XHRcdHNldFNlbGVjdGVkQ2F0ZWdvcnkodGVtcF9hcnIpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzZXRPdGhlclNlbGVjdGVkKHRydWUpO1xuXHRcdFx0dmFyIHRlbXBfYXJyID0gW107XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHNlbGVjdGVkQ2F0ZWdvcnkubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0dGVtcF9hcnIucHVzaChzZWxlY3RlZENhdGVnb3J5W2ldKVxuXHRcdFx0fVxuXHRcdFx0dGVtcF9hcnIucHVzaCgtMSk7XG5cdFx0XHRzZXRTZWxlY3RlZENhdGVnb3J5KHRlbXBfYXJyKTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIChcblx0XHQ8PlxuXHRcdFx0PE1vZGFsXG5cdFx0XHRcdHNob3c9e3Nob3d9XG5cdFx0XHRcdG9uSGlkZT17b25IaWRlfVxuXHRcdFx0XHRhcmlhLWxhYmVsbGVkYnk9XCJjb250YWluZWQtbW9kYWwtdGl0bGUtdmNlbnRlclwiXG5cdFx0XHRcdGNlbnRlcmVkXG5cdFx0XHQ+XG5cdFx0XHRcdDxNb2RhbC5IZWFkZXIgY2xvc2VCdXR0b24+XG5cdFx0XHRcdFx0eyh0eXBlID09IFwiQ3J5cHRvcHVua1wiKSA/IChcblx0XHRcdFx0XHRcdDxNb2RhbC5UaXRsZSBpZD1cImNvbnRhaW5lZC1tb2RhbC10aXRsZS12Y2VudGVyXCI+XG5cdFx0XHRcdFx0XHRcdEJpZCBDcnlwdG9wdW5rXG5cdFx0XHRcdFx0XHQ8L01vZGFsLlRpdGxlPikgOiAoXG5cdFx0XHRcdFx0XHQ8TW9kYWwuVGl0bGUgaWQ9XCJjb250YWluZWQtbW9kYWwtdGl0bGUtdmNlbnRlclwiPlxuXHRcdFx0XHRcdFx0XHRCaWQgTkZUXG5cdFx0XHRcdFx0XHQ8L01vZGFsLlRpdGxlPlxuXHRcdFx0XHRcdCl9XG5cdFx0XHRcdDwvTW9kYWwuSGVhZGVyPlxuXHRcdFx0XHQ8TW9kYWwuQm9keSBjbGFzc05hbWU9XCJzaG93LWdyaWRcIj5cblx0XHRcdFx0XHQ8Rm9ybT5cblx0XHRcdFx0XHRcdDxkaXYgaWQ9J2FsZXJ0JyBzdHlsZT17eyBkaXNwbGF5OiAnbm9uZScgfX0gY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCIgcm9sZT1cImFsZXJ0XCI+XG5cdFx0XHRcdFx0XHRcdHtBbGVydH1cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PEZvcm0uR3JvdXAgY2xhc3NOYW1lPVwibWItM1wiIGNvbnRyb2xJZD1cImZvcm1Hcm91cE5hbWVcIj5cblx0XHRcdFx0XHRcdFx0PEZvcm0uTGFiZWw+QmlkIEFtb3VudCBpbiBORUFSPC9Gb3JtLkxhYmVsPlxuXHRcdFx0XHRcdFx0XHR7QW1vdW50SW5wdXR9XG5cdFx0XHRcdFx0XHQ8L0Zvcm0uR3JvdXA+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nc2VsZWN0Q2F0ZWdvcnlBbGwnPlxuXHRcdFx0XHRcdFx0XHQ8aDQgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBcIjEwcHhcIiB9fT5DaG9vc2Ugd2hlcmUgeW91IHdhbnQgdG8gZ2l2ZSBzdXBwb3J0PC9oND5cblx0XHRcdFx0XHRcdFx0PGRpdiBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIHBhZGRpbmc6IFwiNXB4XCIsIGRpc3BsYXk6IFwiZmxleFwiLCBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIiwgYWxpZ25JdGVtczogXCJjZW50ZXJcIiwgcG9zaXRpb246IFwicmVsYXRpdmVcIiwgYmFja2dyb3VuZDogXCJiaXNxdWVcIiwgaGVpZ2h0OiBcIjQwcHhcIiwgYm9yZGVyUmFkaXVzOiBcIjVweFwiLCBtYXJnaW5Cb3R0b206IFwiMTBweFwiIH19IG9uQ2xpY2s9eygpID0+IHtcblxuXHRcdFx0XHRcdFx0XHRcdHNlbGVjdEFsbENhdGVnb3J5KCk7XG5cdFx0XHRcdFx0XHRcdH19PlxuXHRcdFx0XHRcdFx0XHRcdDxoNCBzdHlsZT17eyBhbGlnblNlbGY6IFwiY2VudGVyXCIsIGNvbG9yOiBcImJsYWNrXCIgfX0+U3VwcG9ydCBpbiBnZW5lcmFsIDwvaDQ+XG5cdFx0XHRcdFx0XHRcdFx0e2FsbFNlbGVjdGVkID9cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgc3R5bGU9e3sgcG9zaXRpb246IFwiYWJzb2x1dGVcIiwgcmlnaHQ6IFwiMTBweFwiLCB0b3A6IFwiLTdweFwiIH19ID5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBzdHlsZT17e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1hcmdpblRvcDogXCIxMHB4XCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGlzcGxheTogXCJmbGV4XCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0d2lkdGg6IFwiMzJweFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGhlaWdodDogXCIzMnB4XCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0anVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJvcmRlclJhZGl1czogXCIxNnB4XCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZDogXCIjRUVGMUY0XCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fX0+PEljb24gaWNvbj1cImhlYXJ0U2VsZWN0ZWRcIiAvPjwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+IDpcblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgc3R5bGU9e3sgcG9zaXRpb246IFwiYWJzb2x1dGVcIiwgcmlnaHQ6IFwiMTBweFwiLCB0b3A6IFwiLTdweFwiIH19ID5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBzdHlsZT17e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1hcmdpblRvcDogXCIxMHB4XCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGlzcGxheTogXCJmbGV4XCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0d2lkdGg6IFwiMzJweFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGhlaWdodDogXCIzMnB4XCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0anVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJvcmRlclJhZGl1czogXCIxNnB4XCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZDogXCIjRUVGMUY0XCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fX0+PEljb24gaWNvbj1cImhlYXJ0VW5zZWxlY3RlZFwiIC8+PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj59XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nc2VsZWN0Q2F0ZWdvcnknIHN0eWxlPXt7IG1hcmdpbkxlZnQ6IFwiLTEwcHhcIiwgbWFyZ2luUmlnaHQ6IFwiLTEwcHhcIiwgZGlzcGxheTogXCJmbGV4XCIsIGZsZXhEaXJlY3Rpb246IFwicm93XCIsIGZsZXhXcmFwOiBcIndyYXBcIiB9fT5cblx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdGNhdGVnb3JpZXMubWFwKChjYXRlZ29yeSkgPT4gKFxuXHRcdFx0XHRcdFx0XHRcdFx0KHNlbGVjdGVkQ2F0ZWdvcnkuaW5kZXhPZihjYXRlZ29yeS5pZCkgIT09IC0xKSA/XG5cdFx0XHRcdFx0XHRcdFx0XHRcdCg8ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjMzJVwiLCBwYWRkaW5nOiBcIjAgMTBweFwiLCBtYXJnaW5Cb3R0b206IFwiMTBweFwiIH19IGtleT17Y2F0ZWdvcnkuaWR9IG9uQ2xpY2s9eygpID0+IHVuc2VsZWN0Q2F0ZWdvcnkoY2F0ZWdvcnkuaWQpfT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IHN0eWxlPXt7IGJhY2tncm91bmQ6IFwid2hpdGVcIiwgcGFkZGluZzogXCI4cHggMTVweFwiLCBib3JkZXI6IFwiMXB4IHNvbGlkIHRyYW5zcGFyZW50XCIsIGJvcmRlclJhZGl1czogXCI1cHhcIiwgYWxpZ25JdGVtczogXCJjZW50ZXJcIiwgfX0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aDQgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBcIjEwcHhcIiwgY29sb3I6IFwiIzE1MUYyOFwiLCB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+e2NhdGVnb3J5LnRpdGxlfTwvaDQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz17Y2F0ZWdvcnkuaW1hZ2V9IHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgYm9yZGVyUmFkaXVzOiBcIjVweFwiLCBoZWlnaHQ6IFwiOTRweFwiIH19IC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aDUgc3R5bGU9e3sgY29sb3I6IFwiIzE1MUYyOFwiLCB0ZXh0QWxpZ246IFwiY2VudGVyXCIsIG1hcmdpblRvcDogXCIxMHB4XCIsIGxpbmVIZWlnaHQ6IFwiMTRweFwiIH19PntjYXRlZ29yeS5hbW91bnQgKiBjYXRlZ29yeS5wcmljZX0gVVNEPC9oNT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxoNSBzdHlsZT17eyBjb2xvcjogXCIjMTUxRjI4XCIsIHRleHRBbGlnbjogXCJjZW50ZXJcIiwgbGluZUhlaWdodDogXCIxNHB4XCIgfX0+KHtjYXRlZ29yeS5hbW91bnR9IHBpZWNlcyk8L2g1PlxuXG5cblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwganVzdGlmeUNvbnRlbnQ6IFwiZmxleC1lbmRcIiB9fSAgPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IHN0eWxlPXt7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bWFyZ2luVG9wOiBcIjEwcHhcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBcImZsZXhcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR3aWR0aDogXCIzMnB4XCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aGVpZ2h0OiBcIjMycHhcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ym9yZGVyUmFkaXVzOiBcIjE2cHhcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiBcIiNFRUYxRjRcIlxuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH19PjxJY29uIGljb249XCJoZWFydFNlbGVjdGVkXCIgLz48L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj4pXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDpcblx0XHRcdFx0XHRcdFx0XHRcdFx0KDxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiMzMlXCIsIHBhZGRpbmc6IFwiMCAxMHB4XCIsIG1hcmdpbkJvdHRvbTogXCIxMHB4XCIgfX0ga2V5PXtjYXRlZ29yeS5pZH0gb25DbGljaz17KCkgPT4gc2VsZWN0Q2F0ZWdvcnkoY2F0ZWdvcnkuaWQpfT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IHN0eWxlPXt7IGJhY2tncm91bmQ6IFwid2hpdGVcIiwgcGFkZGluZzogXCI4cHggMTVweFwiLCBib3JkZXI6IFwiMXB4IHNvbGlkIHRyYW5zcGFyZW50XCIsIGJvcmRlclJhZGl1czogXCI1cHhcIiwgYWxpZ25JdGVtczogXCJjZW50ZXJcIiwgfX0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aDQgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBcIjEwcHhcIiwgY29sb3I6IFwiIzE1MUYyOFwiLCB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+e2NhdGVnb3J5LnRpdGxlfTwvaDQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz17Y2F0ZWdvcnkuaW1hZ2V9IHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgYm9yZGVyUmFkaXVzOiBcIjVweFwiLCBoZWlnaHQ6IFwiOTRweFwiIH19IC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aDUgc3R5bGU9e3sgY29sb3I6IFwiIzE1MUYyOFwiLCB0ZXh0QWxpZ246IFwiY2VudGVyXCIsIG1hcmdpblRvcDogXCIxMHB4XCIsIGxpbmVIZWlnaHQ6IFwiMTRweFwiIH19PntjYXRlZ29yeS5hbW91bnQgKiBjYXRlZ29yeS5wcmljZX0gVVNEPC9oNT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxoNSBzdHlsZT17eyBjb2xvcjogXCIjMTUxRjI4XCIsIHRleHRBbGlnbjogXCJjZW50ZXJcIiwgbGluZUhlaWdodDogXCIxNHB4XCIgfX0+KHtjYXRlZ29yeS5hbW91bnR9IHBpZWNlcyk8L2g1PlxuXG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGp1c3RpZnlDb250ZW50OiBcImZsZXgtZW5kXCIgfX0gPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IHN0eWxlPXt7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bWFyZ2luVG9wOiBcIjEwcHhcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBcImZsZXhcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR3aWR0aDogXCIzMnB4XCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aGVpZ2h0OiBcIjMycHhcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ym9yZGVyUmFkaXVzOiBcIjE2cHhcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiBcIiNFRUYxRjRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9fT48SWNvbiBpY29uPVwiaGVhcnRVbnNlbGVjdGVkXCIgLz48L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXG5cblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj4pXG5cblx0XHRcdFx0XHRcdFx0XHQpKVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdDxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiMzMlXCIsIHBhZGRpbmc6IFwiMCAxMHB4XCIsIGRpc3BsYXk6IFwiZmxleFwiLCBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiIH19IG9uQ2xpY2s9eygpID0+IG90aGVyU2VsZWN0KCl9PlxuXHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdChjYXRlZ29yaWVzLmxlbmd0aCA+IDApID9cblx0XHRcdFx0XHRcdFx0XHRcdFx0KDxkaXYgc3R5bGU9e3sgYmFja2dyb3VuZDogXCJ3aGl0ZVwiLCBwYWRkaW5nOiBcIjEwcHhcIiwgYm9yZGVyOiBcIjFweCBzb2xpZCB0cmFuc3BhcmVudFwiLCBib3JkZXJSYWRpdXM6IFwiNXB4XCIsIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsIG1hcmdpbkJvdHRvbTogXCIxNXB4XCIgfX0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGg0IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCIxMHB4XCIsIGNvbG9yOiBcIiMxNTFGMjhcIiwgdGV4dEFsaWduOiBcImNlbnRlclwiIH19Pk90aGVyIHN1cHBvcnQ8L2g0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxoNSBzdHlsZT17eyBjb2xvcjogXCIjMTUxRjI4XCIsIHRleHRBbGlnbjogXCJjZW50ZXJcIiwgbWFyZ2luVG9wOiBcIjEwcHhcIiwgbGluZUhlaWdodDogXCIxNHB4XCIgfX0+e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b3RoZXJDYXRlZ29yeVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0gVVNEPC9oNT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQoc2VsZWN0ZWRDYXRlZ29yeS5pbmRleE9mKC0xKSAhPT0gLTEpID8gKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBqdXN0aWZ5Q29udGVudDogXCJmbGV4LWVuZFwiIH19ID5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IHN0eWxlPXt7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtYXJnaW5Ub3A6IFwiMTBweFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGlzcGxheTogXCJmbGV4XCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR3aWR0aDogXCIzMnB4XCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ6IFwiMzJweFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0anVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YWxpZ25JdGVtczogXCJjZW50ZXJcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJvcmRlclJhZGl1czogXCIxNnB4XCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiBcIiNFRUYxRjRcIlxuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fX0+PEljb24gaWNvbj1cImhlYXJ0U2VsZWN0ZWRcIiAvPjwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj4pIDogKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBqdXN0aWZ5Q29udGVudDogXCJmbGV4LWVuZFwiIH19ID5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IHN0eWxlPXt7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtYXJnaW5Ub3A6IFwiMTBweFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGlzcGxheTogXCJmbGV4XCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR3aWR0aDogXCIzMnB4XCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ6IFwiMzJweFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0anVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YWxpZ25JdGVtczogXCJjZW50ZXJcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJvcmRlclJhZGl1czogXCIxNnB4XCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiBcIiNFRUYxRjRcIlxuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fX0+PEljb24gaWNvbj1cImhlYXJ0VW5zZWxlY3RlZFwiIC8+PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+KSA6IG51bGxcblx0XHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZC1ncmlkXCI+XG5cblx0XHRcdFx0XHRcdFx0eyh0eXBlID09IFwiQ3J5cHRvcHVua1wiKSA/IChcblx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uIHZhcmlhbnQ9XCJwcmltYXJ5XCIgb25DbGljaz17YmlkTkZUfT5cblx0XHRcdFx0XHRcdFx0XHRcdEJpZCBDcnlwdG9wdW5rXG5cdFx0XHRcdFx0XHRcdFx0PC9CdXR0b24+KVxuXHRcdFx0XHRcdFx0XHRcdDogKFxuXHRcdFx0XHRcdFx0XHRcdFx0PEJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiIG9uQ2xpY2s9e2JpZE5GVH0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdEJpZCBORlRcblx0XHRcdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L0Zvcm0+XG5cdFx0XHRcdDwvTW9kYWwuQm9keT5cblxuXHRcdFx0PC9Nb2RhbD5cblxuXHRcdDwvPlxuXHQpO1xufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gZnVuY3Rpb24oKSB7IHJldHVybiBcIjg4NzUzZTAxMzczNDY3NzlmMDc0XCI7IH0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZUNhbGxiYWNrIiwiTW9kYWwiLCJGb3JtIiwiQnV0dG9uIiwidG9hc3QiLCJVc2VGb3JtSW5wdXQiLCJjcmVhdGVCaWQiLCJSZWR1Y2VDYXRlZ29yeSIsIkljb24iLCJnZXRDYXRlZ29yaWVzYnlldmVudGlkIiwiZXZlbnRnZXRieWlkIiwibmVhckFQSSIsIkJpZE5GVE1vZGFsIiwic2hvdyIsIm9uSGlkZSIsIlRvQWRkcmVzcyIsInRva2VuSWQiLCJyZWNpZCIsInR5cGUiLCJIaWdoZXN0YmlkIiwid2FsbGV0VHlwZSIsImV2ZW50SWQiLCJBbGVydCIsInNldEFsZXJ0IiwicGxhY2Vob2xkZXIiLCJBbW91bnQiLCJBbW91bnRJbnB1dCIsIm90aGVyQ2F0ZWdvcnkiLCJzZXRPdGhlckNhdGVnb3J5IiwiYWN0aXZhdGVXYXJuaW5nTW9kYWwiLCJhbGVydEVMTSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzdHlsZSIsImJvb2xUcnVlIiwiY2F0ZWdvcmllcyIsImNvbnNvbGUiLCJsb2ciLCJldmVudCIsImdvYWwiLCJHb2FsIiwic3Vtb2ZtYWluIiwiY2F0ZWdvcmllc18iLCJpIiwibGVuZ3RoIiwicHJpY2UiLCJhbW91bnQiLCJzZXRDYXRlZ29yaWVzIiwiYmlkTkZUIiwicHJvbWlzZSIsIlVwZGF0ZUFpcnRhYmxlIiwicGVuZGluZyIsImVycm9yIiwic3VjY2VzcyIsIkNyZWF0aW5nT25BaXJUYWJsZSIsIkFpcnRhYmxlIiwicmVxdWlyZSIsImJhc2UiLCJhcGlLZXkiLCJjdXJyZW50RGF0ZSIsIkRhdGUiLCJjcmVhdGUiLCJ3YWxsZXRBY2NvdW50IiwiZ2V0QWNjb3VudElkIiwidG9TdHJpbmciLCJzZWxlY3RlZENhdGVnb3J5IiwiYmlkTkZUYnlORUFSIiwiTnVtYmVyIiwiYnV0dG9uUHJvcHMiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwid2luZG93IiwiaXNTaWduZWRJbiIsImlubmVyVGV4dCIsIndhcm4iLCJyZXF1ZXN0U2lnbkluIiwibmVhckNvbmZpZyIsImNvbnRyYWN0TmFtZSIsImNvbmZpZyIsIm5ldHdvcmtJZCIsImtleVN0b3JlIiwia2V5U3RvcmVzIiwiQnJvd3NlckxvY2FsU3RvcmFnZUtleVN0b3JlIiwibm9kZVVybCIsIndhbGxldFVybCIsImhlbHBlclVybCIsImV4cGxvcmVyVXJsIiwiY29ubmVjdCIsIm5lYXIiLCJhY2NvdW50IiwiYW1vdW50SW5Zb2N0byIsInRvTG9jYWxlU3RyaW5nIiwidXNlR3JvdXBpbmciLCJzZW5kTW9uZXkiLCJ0aGVuIiwibG9jYXRpb24iLCJyZWxvYWQiLCJjbGljayIsImNhdGNoIiwiYWxsU2VsZWN0ZWQiLCJzZXRBbGxTZWxlY3RlZCIsIm90aGVyU2VsZWN0ZWQiLCJzZXRPdGhlclNlbGVjdGVkIiwic2V0U2VsZWN0ZWRDYXRlZ29yeSIsInNlbGVjdENhdGVnb3J5IiwiY2F0ZWdvcnlfaWQiLCJ0ZW1wX2FyciIsInB1c2giLCJ1bnNlbGVjdENhdGVnb3J5Iiwic2VsZWN0QWxsQ2F0ZWdvcnkiLCJpZCIsIm90aGVyU2VsZWN0IiwiZGlzcGxheSIsIm1hcmdpbkJvdHRvbSIsIndpZHRoIiwicGFkZGluZyIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsInBvc2l0aW9uIiwiYmFja2dyb3VuZCIsImhlaWdodCIsImJvcmRlclJhZGl1cyIsImFsaWduU2VsZiIsImNvbG9yIiwicmlnaHQiLCJ0b3AiLCJtYXJnaW5Ub3AiLCJmbGV4RGlyZWN0aW9uIiwibWFyZ2luTGVmdCIsIm1hcmdpblJpZ2h0IiwiZmxleFdyYXAiLCJjYXRlZ29yeSIsImJvcmRlciIsInRleHRBbGlnbiIsInRpdGxlIiwiaW1hZ2UiLCJsaW5lSGVpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==