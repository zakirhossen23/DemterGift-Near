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
              return base('nftcryptopunks').select({
                filterByFormula: "({id} = '".concat(selectedCategory[i], "')"),
                sort: [{
                  field: "price",
                  direction: "desc"
                }],
                view: "Grid view"
              }).eachPage(function page(records, fetchNextPage) {
                // This function (`page`) will get called for each page of records.
                var arr = [];
                records.forEach(function (record) {
                  console.log(record);
                });
              }, function done(err) {
                if (err) {
                  console.error(err);
                  return;
                }
              });

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
/******/ 	__webpack_require__.h = function() { return "2a144e24ff1970846c17"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2luZGV4Ljg4NzUzZTAxMzczNDY3NzlmMDc0LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2UsU0FBU2UsV0FBVCxPQVVaO0FBQUEsTUFURkMsSUFTRSxRQVRGQSxJQVNFO0FBQUEsTUFSRkMsTUFRRSxRQVJGQSxNQVFFO0FBQUEsTUFQRkMsU0FPRSxRQVBGQSxTQU9FO0FBQUEsTUFORkMsT0FNRSxRQU5GQSxPQU1FO0FBQUEsTUFMRkMsS0FLRSxRQUxGQSxLQUtFO0FBQUEsTUFKRkMsSUFJRSxRQUpGQSxJQUlFO0FBQUEsTUFIRkMsVUFHRSxRQUhGQSxVQUdFO0FBQUEsTUFGRkMsVUFFRSxRQUZGQSxVQUVFO0FBQUEsTUFERkMsT0FDRSxRQURGQSxPQUNFOztBQUNGLGtCQUEwQnZCLCtDQUFRLENBQUMsRUFBRCxDQUFsQztBQUFBO0FBQUEsTUFBT3dCLEtBQVA7QUFBQSxNQUFjQyxRQUFkOztBQUNBLHNCQUE4QmxCLHlEQUFZLENBQUM7QUFDMUNhLElBQUFBLElBQUksRUFBRSxNQURvQztBQUUxQ00sSUFBQUEsV0FBVyxFQUFFO0FBRjZCLEdBQUQsQ0FBMUM7QUFBQTtBQUFBLE1BQU9DLE1BQVA7QUFBQSxNQUFlQyxXQUFmOztBQUlBLG1CQUEwQzVCLCtDQUFRLENBQUMsQ0FBQyxDQUFGLENBQWxEO0FBQUE7QUFBQSxNQUFPNkIsYUFBUDtBQUFBLE1BQXNCQyxnQkFBdEI7O0FBRUEsV0FBU0Msb0JBQVQsR0FBZ0M7QUFDL0IsUUFBSUMsUUFBUSxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsT0FBeEIsQ0FBZjtBQUNBRixJQUFBQSxRQUFRLENBQUNHLEtBQVQsR0FBaUIsVUFBakI7QUFDQVYsSUFBQUEsUUFBUSxrQ0FBMkJKLFVBQTNCLFdBQVI7QUFDQTs7QUFFRHBCLEVBQUFBLGdEQUFTLHdN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QUUsTUFISTtBQUlYTSxNQUFBQSxNQUFNLEVBQUUsTUFKRztBQUtYSixNQUFBQSxjQUFjLEVBQUUsUUFMTDtBQU1YVyxNQUFBQSxhQUFhLEVBQUUsUUFOSjtBQU9YVixNQUFBQSxVQUFVLEVBQUUsUUFQRDtBQVFYSSxNQUFBQSxZQUFZLEVBQUUsTUFSSDtBQVNYRixNQUFBQSxVQUFVLEVBQUU7QUFURDtBQUFaLGtCQVdHLGlEQUFDLHlEQUFEO0FBQU0sUUFBSSxFQUFDO0FBQVgsSUFYSCxDQURELENBckJGLENBREYsR0FzQ1csSUF4Q2IsQ0EzREQsQ0E1Q0QsZUFvSkM7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUVHbkgsSUFBSSxJQUFJLFlBQVQsZ0JBQ0EsaURBQUMsK0RBQUQ7QUFBUSxXQUFPLEVBQUMsU0FBaEI7QUFBMEIsV0FBTyxFQUFFOEI7QUFBbkMsc0JBREEsZ0JBS0MsaURBQUMsK0RBQUQ7QUFBUSxXQUFPLEVBQUMsU0FBaEI7QUFBMEIsV0FBTyxFQUFFQTtBQUFuQyxlQVBILENBcEpELENBREQsQ0FoQkQsQ0FERCxDQUREO0FBMExBOzs7Ozs7OztVQzNhRCxxQ0FBcUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZW1ldGVyZ2lmdC8uL3NyYy9jb21wb25lbnRzL2NvbXBvbmVudHMvbW9kYWxzL0JpZE5GVE1vZGFsLmpzeCIsIndlYnBhY2s6Ly9kZW1ldGVyZ2lmdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IE1vZGFsIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Nb2RhbCc7XG5pbXBvcnQgRm9ybSBmcm9tICdyZWFjdC1ib290c3RyYXAvRm9ybSc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9CdXR0b24nO1xuXG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcblxuaW1wb3J0IFVzZUZvcm1JbnB1dCBmcm9tICcuLi9Vc2VGb3JtSW5wdXQnO1xuaW1wb3J0IHsgY3JlYXRlQmlkLCBSZWR1Y2VDYXRlZ29yeSB9IGZyb20gJ0AvcGFnZXMvRXZlbnRzL3Rva2VuJ1xuaW1wb3J0IHsgSWNvbiB9IGZyb20gJ0AvY29tcG9uZW50cy9jb21tb24vSWNvbidcbmltcG9ydCB7IGdldENhdGVnb3JpZXNieWV2ZW50aWQsIGV2ZW50Z2V0YnlpZCB9IGZyb20gJy4uLy4uLy4uL3BhZ2VzL0V2ZW50cy9ldmVudCdcbmltcG9ydCAqIGFzIG5lYXJBUEkgZnJvbSBcIm5lYXItYXBpLWpzXCJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJpZE5GVE1vZGFsKHtcblx0c2hvdyxcblx0b25IaWRlLFxuXHRUb0FkZHJlc3MsXG5cdHRva2VuSWQsXG5cdHJlY2lkLFxuXHR0eXBlLFxuXHRIaWdoZXN0YmlkLFxuXHR3YWxsZXRUeXBlLFxuXHRldmVudElkLFxufSkge1xuXHRjb25zdCBbQWxlcnQsIHNldEFsZXJ0XSA9IHVzZVN0YXRlKCcnKTtcblx0Y29uc3QgW0Ftb3VudCwgQW1vdW50SW5wdXRdID0gVXNlRm9ybUlucHV0KHtcblx0XHR0eXBlOiAndGV4dCcsXG5cdFx0cGxhY2Vob2xkZXI6ICdBbW91bnQnLFxuXHR9KTtcblx0Y29uc3QgW290aGVyQ2F0ZWdvcnksIHNldE90aGVyQ2F0ZWdvcnldID0gdXNlU3RhdGUoLTEpO1xuXG5cdGZ1bmN0aW9uIGFjdGl2YXRlV2FybmluZ01vZGFsKCkge1xuXHRcdHZhciBhbGVydEVMTSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWxlcnRcIik7XG5cdFx0YWxlcnRFTE0uc3R5bGUgPSAnY29udGVudHMnO1xuXHRcdHNldEFsZXJ0KGBBbW91bnQgY2Fubm90IGJlIHVuZGVyICR7SGlnaGVzdGJpZH0gTkVBUmApXG5cdH1cblxuXHR1c2VFZmZlY3QoYXN5bmMgKCkgPT4ge1xuXHRcdGNvbnN0IGJvb2xUcnVlID0gdHJ1ZTtcblx0XHR3aGlsZSAoYm9vbFRydWUpIHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGNvbnN0IGNhdGVnb3JpZXMgPSBhd2FpdCBnZXRDYXRlZ29yaWVzYnlldmVudGlkKGV2ZW50SWQpO1xuXHRcdFx0XHRjb25zb2xlLmxvZyhcImNhdGVnb3JpZXMgZm9yIGV2ZW50OlwiKTtcblx0XHRcdFx0Y29uc29sZS5sb2coY2F0ZWdvcmllcyk7XG5cdFx0XHRcdGxldCBldmVudCA9IGF3YWl0IGV2ZW50Z2V0YnlpZChldmVudElkKTtcblx0XHRcdFx0dmFyIGdvYWwgPSBldmVudC5Hb2FsO1xuXHRcdFx0XHRjb25zb2xlLmxvZyhcImdvYWw6XCIpO1xuXHRcdFx0XHRjb25zb2xlLmxvZyhnb2FsKTtcblx0XHRcdFx0dmFyIHN1bW9mbWFpbiA9IDA7XG5cdFx0XHRcdHZhciBjYXRlZ29yaWVzXyA9IGNhdGVnb3JpZXM7XG5cdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgY2F0ZWdvcmllc18ubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRzdW1vZm1haW4gKz0gY2F0ZWdvcmllc19baV0ucHJpY2UgKiBjYXRlZ29yaWVzX1tpXS5hbW91bnQ7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRzZXRPdGhlckNhdGVnb3J5KGdvYWwgLSBzdW1vZm1haW4pO1xuXHRcdFx0XHRzZXRDYXRlZ29yaWVzKGNhdGVnb3JpZXNfKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblxuXHRcdH1cblxuXHR9LCBbY2F0ZWdvcmllc10pO1xuXG5cdGFzeW5jIGZ1bmN0aW9uIGJpZE5GVCgpIHtcblxuXHRcdGF3YWl0IHRvYXN0LnByb21pc2UoVXBkYXRlQWlydGFibGUsIHtcblx0XHRcdHBlbmRpbmc6IGBCaWRkaW5nLi4uYCxcblx0XHRcdGVycm9yOiBcIlBsZWFzZSB0cnkgYWdhaW4gbGF0ZXJcIixcblx0XHRcdHN1Y2Nlc3M6IGBTdWNjZXNzISEhYFxuXHRcdH0pO1xuXG5cdFx0Ly8gYXdhaXQgdG9hc3QucHJvbWlzZShiaWRORlRieU5FQVIsIHtcblx0XHQvLyBcdHBlbmRpbmc6IGBCaWRkaW5nLi4uYCxcblx0XHQvLyBcdGVycm9yOiBcIlBsZWFzZSB0cnkgYWdhaW4gbGF0ZXJcIixcblx0XHQvLyBcdHN1Y2Nlc3M6IGBTdWNjZXNzISEhYFxuXHRcdC8vIH0pO1xuXG5cdH1cblx0YXN5bmMgZnVuY3Rpb24gQ3JlYXRpbmdPbkFpclRhYmxlKCkge1xuXHRcdHZhciBBaXJ0YWJsZSA9IHJlcXVpcmUoJ2FpcnRhYmxlJyk7XG5cdFx0dmFyIGJhc2UgPSBuZXcgQWlydGFibGUoeyBhcGlLZXk6ICdrZXlSMVJyY2w5TzJzOWJUcycgfSkuYmFzZSgnYXBwZ2JSQ3Bia3ptZGN1Y08nKTtcblx0XHRsZXQgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xuXHRcdGF3YWl0IGJhc2UoJ3Rva2VuYmlkJykuY3JlYXRlKFtcblx0XHRcdHtcblx0XHRcdFx0XCJmaWVsZHNcIjoge1xuXHRcdFx0XHRcdFwiVG9rZW5pZFwiOiB0b2tlbklkLFxuXHRcdFx0XHRcdFwiRGF0ZVwiOiBjdXJyZW50RGF0ZSxcblx0XHRcdFx0XHRcIlVzZXJOYW1lXCI6IHdhbGxldEFjY291bnQuZ2V0QWNjb3VudElkKCkudG9TdHJpbmcoKSxcblx0XHRcdFx0XHRcIkJpZHByaWNlXCI6IEFtb3VudFxuXHRcdFx0XHR9XG5cdFx0XHR9XSk7XG5cdFx0dG9hc3Quc3VjY2VzcyhcIkJpZCBjcmVhdGVkIG9uIEFpcnRhYmxlXCIpO1xuYXdhaXQgVXBkYXRlQWlydGFibGUoKTtcblxuXHR9XG5cdGFzeW5jIGZ1bmN0aW9uIFVwZGF0ZUFpcnRhYmxlKCkge1xuXHRcdHZhciBBaXJ0YWJsZSA9IHJlcXVpcmUoJ2FpcnRhYmxlJyk7XG5cdFx0dmFyIGJhc2UgPSBuZXcgQWlydGFibGUoeyBhcGlLZXk6ICdrZXlSMVJyY2w5TzJzOWJUcycgfSkuYmFzZSgnYXBwZ2JSQ3Bia3ptZGN1Y08nKTtcblxuXHRcdC8vIGF3YWl0IGJhc2UoJ25mdGNyeXB0b3B1bmtzJykudXBkYXRlKFtcblx0XHQvLyBcdHtcblx0XHQvLyBcdFx0XCJpZFwiOiByZWNpZCxcblx0XHQvLyBcdFx0XCJmaWVsZHNcIjoge1xuXHRcdC8vIFx0XHRcdFwicHJpY2VcIjogQW1vdW50XG5cdFx0Ly8gXHRcdH1cblx0XHQvLyBcdH1cblx0XHQvLyBdKTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc2VsZWN0ZWRDYXRlZ29yeS5sZW5ndGg7IGkrKykge1xuXG5cdFx0XHRhd2FpdCAgYmFzZSgnbmZ0Y3J5cHRvcHVua3MnKS5zZWxlY3Qoe1xuXHRcdFx0XHRmaWx0ZXJCeUZvcm11bGE6IGAoe2lkfSA9ICcke3NlbGVjdGVkQ2F0ZWdvcnlbaV19JylgLFxuICAgICAgICAgICAgICAgIHNvcnQ6IFt7ZmllbGQ6IFwicHJpY2VcIiwgZGlyZWN0aW9uOiBcImRlc2NcIn1dLFxuICAgICAgICAgICAgICAgIHZpZXc6IFwiR3JpZCB2aWV3XCJcbiAgICAgICAgICAgIH0pLmVhY2hQYWdlKGZ1bmN0aW9uIHBhZ2UocmVjb3JkcywgZmV0Y2hOZXh0UGFnZSkge1xuICAgICAgICAgICAgICAgIC8vIFRoaXMgZnVuY3Rpb24gKGBwYWdlYCkgd2lsbCBnZXQgY2FsbGVkIGZvciBlYWNoIHBhZ2Ugb2YgcmVjb3Jkcy5cbiAgICAgICAgICAgICAgICB2YXIgYXJyID0gW107XG4gICAgICAgICAgICAgICAgcmVjb3Jkcy5mb3JFYWNoKGZ1bmN0aW9uIChyZWNvcmQpIHtcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhyZWNvcmQpO1xuXHRcdFx0XHR9KTt9LCBmdW5jdGlvbiBkb25lKGVycikge1xuXHRcdFx0XHRcdGlmIChlcnIpIHsgY29uc29sZS5lcnJvcihlcnIpOyByZXR1cm47IH1cblx0XHRcdFx0fSk7XG5cdFx0Ly9cdGF3YWl0IFJlZHVjZUNhdGVnb3J5KHNlbGVjdGVkQ2F0ZWdvcnlbaV0pO1xuXHRcdH1cblxuXHR9XG5cblx0YXN5bmMgZnVuY3Rpb24gYmlkTkZUYnlORUFSKCkge1xuXHRcdGlmIChOdW1iZXIoQW1vdW50KSA8IE51bWJlcihIaWdoZXN0YmlkKSkge1xuXHRcdFx0YWN0aXZhdGVXYXJuaW5nTW9kYWwoKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0dmFyIGJ1dHRvblByb3BzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImJ0biBidG4tcHJpbWFyeVwiKVswXTtcblx0XHRpZiAod2luZG93LndhbGxldEFjY291bnQuaXNTaWduZWRJbigpID09IGZhbHNlKSB7XG5cdFx0XHRidXR0b25Qcm9wcy5pbm5lclRleHQgPSBcIkNvbm5lY3QgdG8gTkVBUiB3YWxsZXRcIlxuXHRcdFx0YXdhaXQgdG9hc3Qud2FybihcIk5vdCBjb25uZWN0ZWQgd2l0aCBORUFSIHdhbGxldCEgQ29ubmVjdGluZy4uLlwiKTtcblx0XHRcdGF3YWl0IHdpbmRvdy53YWxsZXRBY2NvdW50LnJlcXVlc3RTaWduSW4oXG5cdFx0XHRcdHdpbmRvdy5uZWFyQ29uZmlnLmNvbnRyYWN0TmFtZSxcblx0XHRcdFx0J0RlbWV0ZXJHaWZ0Jyk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdC8vIFdlIGNhbGwgc2F5IEhpIGFuZCB0aGVuIHVwZGF0ZSB3aG8gc2FpZCBIaSBsYXN0LlxuXHRcdC8vIHdpbmRvdy5jb250cmFjdC5zYXlIaSgpLnRoZW4odXBkYXRlV2hvU2FpZEhpKTtcblx0XHRjb25zdCBjb25maWcgPSB7XG5cdFx0XHRuZXR3b3JrSWQ6IFwidGVzdG5ldFwiLFxuXHRcdFx0a2V5U3RvcmU6IG5ldyBuZWFyQVBJLmtleVN0b3Jlcy5Ccm93c2VyTG9jYWxTdG9yYWdlS2V5U3RvcmUoKSxcblx0XHRcdG5vZGVVcmw6IFwiaHR0cHM6Ly9ycGMudGVzdG5ldC5uZWFyLm9yZ1wiLFxuXHRcdFx0d2FsbGV0VXJsOiBcImh0dHBzOi8vd2FsbGV0LnRlc3RuZXQubmVhci5vcmdcIixcblx0XHRcdGhlbHBlclVybDogXCJodHRwczovL2hlbHBlci50ZXN0bmV0Lm5lYXIub3JnXCIsXG5cdFx0XHRleHBsb3JlclVybDogXCJodHRwczovL2V4cGxvcmVyLnRlc3RuZXQubmVhci5vcmdcIixcblx0XHR9O1xuXHRcdC8vIHNlbmRzIE5FQVIgdG9rZW5zXG5cdFx0Y29uc3QgbmVhciA9IGF3YWl0IG5lYXJBUEkuY29ubmVjdChjb25maWcpO1xuXHRcdGNvbnN0IGFjY291bnQgPSBhd2FpdCBuZWFyLmFjY291bnQod2FsbGV0QWNjb3VudC5nZXRBY2NvdW50SWQoKSk7XG5cdFx0Y29uc3QgYW1vdW50SW5Zb2N0byA9IChOdW1iZXIoQW1vdW50KSAqIDEwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDApLnRvTG9jYWxlU3RyaW5nKCdmdWxsd2lkZScsIHsgdXNlR3JvdXBpbmc6IGZhbHNlIH0pO1xuXG5cdFx0YXdhaXQgYWNjb3VudC5zZW5kTW9uZXkoXG5cdFx0XHRUb0FkZHJlc3MsIC8vIHJlY2VpdmVyIGFjY291bnRcblx0XHRcdGFtb3VudEluWW9jdG8gLy8gYW1vdW50IGluIHlvY3RvTkVBUlxuXHRcdCkudGhlbihhc3luYyAoKSA9PiB7XG5cdFx0XHRhd2FpdCBjcmVhdGVCaWQodG9rZW5JZCwgd2FsbGV0QWNjb3VudC5nZXRBY2NvdW50SWQoKS50b1N0cmluZygpLCBBbW91bnQpO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzZWxlY3RlZENhdGVnb3J5Lmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGF3YWl0IFJlZHVjZUNhdGVnb3J5KHNlbGVjdGVkQ2F0ZWdvcnlbaV0pO1xuXHRcdFx0fVxuXG5cdFx0fSkudGhlbigoKSA9PiB7XG5cdFx0XHR3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG5cdFx0XHR3aW5kb3cuZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImJ0bi1jbG9zZVwiKVswXS5jbGljaygpO1xuXHRcdH0pXG5cdFx0XHQuY2F0Y2goKGVycm9yKSA9PiB7XG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoXCJlcnJvcjpcIiwgZXJyb3IpO1xuXHRcdFx0XHRjb25zb2xlLmxvZyhlcnJvcik7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH0pXG5cdH1cblxuXHRjb25zdCBbY2F0ZWdvcmllcywgc2V0Q2F0ZWdvcmllc10gPSB1c2VTdGF0ZShbXSk7XG5cblxuXHRjb25zdCBbYWxsU2VsZWN0ZWQsIHNldEFsbFNlbGVjdGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblx0Y29uc3QgW290aGVyU2VsZWN0ZWQsIHNldE90aGVyU2VsZWN0ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXHRjb25zdCBbc2VsZWN0ZWRDYXRlZ29yeSwgc2V0U2VsZWN0ZWRDYXRlZ29yeV0gPSB1c2VTdGF0ZShbXSk7XG5cblx0Y29uc3Qgc2VsZWN0Q2F0ZWdvcnkgPSAoY2F0ZWdvcnlfaWQpID0+IHtcblx0XHRjb25zb2xlLmxvZyhcImNhdGVnb3J5X2lkXCIpO1xuXHRcdGNvbnNvbGUubG9nKGNhdGVnb3J5X2lkKTtcblx0XHR2YXIgdGVtcF9hcnIgPSBbXTtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHNlbGVjdGVkQ2F0ZWdvcnkubGVuZ3RoOyBpKyspIHtcblx0XHRcdHRlbXBfYXJyLnB1c2goc2VsZWN0ZWRDYXRlZ29yeVtpXSk7XG5cdFx0fVxuXHRcdHRlbXBfYXJyLnB1c2goY2F0ZWdvcnlfaWQpO1xuXHRcdGNvbnNvbGUubG9nKHRlbXBfYXJyKTtcblxuXHRcdHNldFNlbGVjdGVkQ2F0ZWdvcnkodGVtcF9hcnIpO1xuXHR9XG5cdGNvbnN0IHVuc2VsZWN0Q2F0ZWdvcnkgPSAoY2F0ZWdvcnlfaWQpID0+IHtcblx0XHR2YXIgdGVtcF9hcnIgPSBbXTtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHNlbGVjdGVkQ2F0ZWdvcnkubGVuZ3RoOyBpKyspIHtcblx0XHRcdGlmIChzZWxlY3RlZENhdGVnb3J5W2ldICE9IGNhdGVnb3J5X2lkKVxuXHRcdFx0XHR0ZW1wX2Fyci5wdXNoKHNlbGVjdGVkQ2F0ZWdvcnlbaV0pO1xuXHRcdH1cblx0XHRjb25zb2xlLmxvZyh0ZW1wX2Fycik7XG5cdFx0c2V0U2VsZWN0ZWRDYXRlZ29yeSh0ZW1wX2Fycik7XG5cdH1cblxuXHRjb25zdCBzZWxlY3RBbGxDYXRlZ29yeSA9ICgpID0+IHtcblx0XHRpZiAoYWxsU2VsZWN0ZWQpIHtcblx0XHRcdHNldEFsbFNlbGVjdGVkKGZhbHNlKTtcblx0XHRcdHNldFNlbGVjdGVkQ2F0ZWdvcnkoW10pO1xuXHRcdH0gZWxzZSB7XG5cblx0XHRcdHNldEFsbFNlbGVjdGVkKHRydWUpO1xuXHRcdFx0dmFyIHRlbXBfYXJyID0gW107XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGNhdGVnb3JpZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0dGVtcF9hcnIucHVzaChjYXRlZ29yaWVzW2ldLmlkKVxuXHRcdFx0fVxuXHRcdFx0dGVtcF9hcnIucHVzaCgtMSk7XG5cdFx0XHRzZXRTZWxlY3RlZENhdGVnb3J5KHRlbXBfYXJyKTtcblx0XHR9XG5cblx0fVxuXHRjb25zdCBvdGhlclNlbGVjdCA9ICgpID0+IHtcblx0XHRpZiAob3RoZXJTZWxlY3RlZCkge1xuXHRcdFx0c2V0T3RoZXJTZWxlY3RlZChmYWxzZSk7XG5cdFx0XHR2YXIgdGVtcF9hcnIgPSBbXTtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc2VsZWN0ZWRDYXRlZ29yeS5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRpZiAoc2VsZWN0ZWRDYXRlZ29yeVtpXSAhPSAtMSlcblx0XHRcdFx0XHR0ZW1wX2Fyci5wdXNoKHNlbGVjdGVkQ2F0ZWdvcnlbaV0pXG5cdFx0XHR9XG5cdFx0XHRzZXRTZWxlY3RlZENhdGVnb3J5KHRlbXBfYXJyKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c2V0T3RoZXJTZWxlY3RlZCh0cnVlKTtcblx0XHRcdHZhciB0ZW1wX2FyciA9IFtdO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzZWxlY3RlZENhdGVnb3J5Lmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdHRlbXBfYXJyLnB1c2goc2VsZWN0ZWRDYXRlZ29yeVtpXSlcblx0XHRcdH1cblx0XHRcdHRlbXBfYXJyLnB1c2goLTEpO1xuXHRcdFx0c2V0U2VsZWN0ZWRDYXRlZ29yeSh0ZW1wX2Fycik7XG5cdFx0fVxuXHR9XG5cdHJldHVybiAoXG5cdFx0PD5cblx0XHRcdDxNb2RhbFxuXHRcdFx0XHRzaG93PXtzaG93fVxuXHRcdFx0XHRvbkhpZGU9e29uSGlkZX1cblx0XHRcdFx0YXJpYS1sYWJlbGxlZGJ5PVwiY29udGFpbmVkLW1vZGFsLXRpdGxlLXZjZW50ZXJcIlxuXHRcdFx0XHRjZW50ZXJlZFxuXHRcdFx0PlxuXHRcdFx0XHQ8TW9kYWwuSGVhZGVyIGNsb3NlQnV0dG9uPlxuXHRcdFx0XHRcdHsodHlwZSA9PSBcIkNyeXB0b3B1bmtcIikgPyAoXG5cdFx0XHRcdFx0XHQ8TW9kYWwuVGl0bGUgaWQ9XCJjb250YWluZWQtbW9kYWwtdGl0bGUtdmNlbnRlclwiPlxuXHRcdFx0XHRcdFx0XHRCaWQgQ3J5cHRvcHVua1xuXHRcdFx0XHRcdFx0PC9Nb2RhbC5UaXRsZT4pIDogKFxuXHRcdFx0XHRcdFx0PE1vZGFsLlRpdGxlIGlkPVwiY29udGFpbmVkLW1vZGFsLXRpdGxlLXZjZW50ZXJcIj5cblx0XHRcdFx0XHRcdFx0QmlkIE5GVFxuXHRcdFx0XHRcdFx0PC9Nb2RhbC5UaXRsZT5cblx0XHRcdFx0XHQpfVxuXHRcdFx0XHQ8L01vZGFsLkhlYWRlcj5cblx0XHRcdFx0PE1vZGFsLkJvZHkgY2xhc3NOYW1lPVwic2hvdy1ncmlkXCI+XG5cdFx0XHRcdFx0PEZvcm0+XG5cdFx0XHRcdFx0XHQ8ZGl2IGlkPSdhbGVydCcgc3R5bGU9e3sgZGlzcGxheTogJ25vbmUnIH19IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiIHJvbGU9XCJhbGVydFwiPlxuXHRcdFx0XHRcdFx0XHR7QWxlcnR9XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxGb3JtLkdyb3VwIGNsYXNzTmFtZT1cIm1iLTNcIiBjb250cm9sSWQ9XCJmb3JtR3JvdXBOYW1lXCI+XG5cdFx0XHRcdFx0XHRcdDxGb3JtLkxhYmVsPkJpZCBBbW91bnQgaW4gTkVBUjwvRm9ybS5MYWJlbD5cblx0XHRcdFx0XHRcdFx0e0Ftb3VudElucHV0fVxuXHRcdFx0XHRcdFx0PC9Gb3JtLkdyb3VwPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3NlbGVjdENhdGVnb3J5QWxsJz5cblx0XHRcdFx0XHRcdFx0PGg0IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCIxMHB4XCIgfX0+Q2hvb3NlIHdoZXJlIHlvdSB3YW50IHRvIGdpdmUgc3VwcG9ydDwvaDQ+XG5cdFx0XHRcdFx0XHRcdDxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBwYWRkaW5nOiBcIjVweFwiLCBkaXNwbGF5OiBcImZsZXhcIiwganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsIGJhY2tncm91bmQ6IFwiYmlzcXVlXCIsIGhlaWdodDogXCI0MHB4XCIsIGJvcmRlclJhZGl1czogXCI1cHhcIiwgbWFyZ2luQm90dG9tOiBcIjEwcHhcIiB9fSBvbkNsaWNrPXsoKSA9PiB7XG5cblx0XHRcdFx0XHRcdFx0XHRzZWxlY3RBbGxDYXRlZ29yeSgpO1xuXHRcdFx0XHRcdFx0XHR9fT5cblx0XHRcdFx0XHRcdFx0XHQ8aDQgc3R5bGU9e3sgYWxpZ25TZWxmOiBcImNlbnRlclwiLCBjb2xvcjogXCJibGFja1wiIH19PlN1cHBvcnQgaW4gZ2VuZXJhbCA8L2g0PlxuXHRcdFx0XHRcdFx0XHRcdHthbGxTZWxlY3RlZCA/XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiBcImFic29sdXRlXCIsIHJpZ2h0OiBcIjEwcHhcIiwgdG9wOiBcIi03cHhcIiB9fSA+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgc3R5bGU9e3tcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtYXJnaW5Ub3A6IFwiMTBweFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRpc3BsYXk6IFwiZmxleFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHdpZHRoOiBcIjMycHhcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ6IFwiMzJweFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0YWxpZ25JdGVtczogXCJjZW50ZXJcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRib3JkZXJSYWRpdXM6IFwiMTZweFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmQ6IFwiI0VFRjFGNFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH19PjxJY29uIGljb249XCJoZWFydFNlbGVjdGVkXCIgLz48L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PiA6XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiBcImFic29sdXRlXCIsIHJpZ2h0OiBcIjEwcHhcIiwgdG9wOiBcIi03cHhcIiB9fSA+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgc3R5bGU9e3tcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtYXJnaW5Ub3A6IFwiMTBweFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRpc3BsYXk6IFwiZmxleFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHdpZHRoOiBcIjMycHhcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ6IFwiMzJweFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0YWxpZ25JdGVtczogXCJjZW50ZXJcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRib3JkZXJSYWRpdXM6IFwiMTZweFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmQ6IFwiI0VFRjFGNFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH19PjxJY29uIGljb249XCJoZWFydFVuc2VsZWN0ZWRcIiAvPjwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+fVxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3NlbGVjdENhdGVnb3J5JyBzdHlsZT17eyBtYXJnaW5MZWZ0OiBcIi0xMHB4XCIsIG1hcmdpblJpZ2h0OiBcIi0xMHB4XCIsIGRpc3BsYXk6IFwiZmxleFwiLCBmbGV4RGlyZWN0aW9uOiBcInJvd1wiLCBmbGV4V3JhcDogXCJ3cmFwXCIgfX0+XG5cdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRjYXRlZ29yaWVzLm1hcCgoY2F0ZWdvcnkpID0+IChcblx0XHRcdFx0XHRcdFx0XHRcdChzZWxlY3RlZENhdGVnb3J5LmluZGV4T2YoY2F0ZWdvcnkuaWQpICE9PSAtMSkgP1xuXHRcdFx0XHRcdFx0XHRcdFx0XHQoPGRpdiBzdHlsZT17eyB3aWR0aDogXCIzMyVcIiwgcGFkZGluZzogXCIwIDEwcHhcIiwgbWFyZ2luQm90dG9tOiBcIjEwcHhcIiB9fSBrZXk9e2NhdGVnb3J5LmlkfSBvbkNsaWNrPXsoKSA9PiB1bnNlbGVjdENhdGVnb3J5KGNhdGVnb3J5LmlkKX0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBzdHlsZT17eyBiYWNrZ3JvdW5kOiBcIndoaXRlXCIsIHBhZGRpbmc6IFwiOHB4IDE1cHhcIiwgYm9yZGVyOiBcIjFweCBzb2xpZCB0cmFuc3BhcmVudFwiLCBib3JkZXJSYWRpdXM6IFwiNXB4XCIsIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsIH19PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGg0IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCIxMHB4XCIsIGNvbG9yOiBcIiMxNTFGMjhcIiwgdGV4dEFsaWduOiBcImNlbnRlclwiIH19PntjYXRlZ29yeS50aXRsZX08L2g0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGltZyBzcmM9e2NhdGVnb3J5LmltYWdlfSBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGJvcmRlclJhZGl1czogXCI1cHhcIiwgaGVpZ2h0OiBcIjk0cHhcIiB9fSAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGg1IHN0eWxlPXt7IGNvbG9yOiBcIiMxNTFGMjhcIiwgdGV4dEFsaWduOiBcImNlbnRlclwiLCBtYXJnaW5Ub3A6IFwiMTBweFwiLCBsaW5lSGVpZ2h0OiBcIjE0cHhcIiB9fT57Y2F0ZWdvcnkuYW1vdW50ICogY2F0ZWdvcnkucHJpY2V9IFVTRDwvaDU+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aDUgc3R5bGU9e3sgY29sb3I6IFwiIzE1MUYyOFwiLCB0ZXh0QWxpZ246IFwiY2VudGVyXCIsIGxpbmVIZWlnaHQ6IFwiMTRweFwiIH19Pih7Y2F0ZWdvcnkuYW1vdW50fSBwaWVjZXMpPC9oNT5cblxuXG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGp1c3RpZnlDb250ZW50OiBcImZsZXgtZW5kXCIgfX0gID5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBzdHlsZT17e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1hcmdpblRvcDogXCIxMHB4XCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGlzcGxheTogXCJmbGV4XCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0d2lkdGg6IFwiMzJweFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGhlaWdodDogXCIzMnB4XCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0anVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJvcmRlclJhZGl1czogXCIxNnB4XCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZDogXCIjRUVGMUY0XCJcblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9fT48SWNvbiBpY29uPVwiaGVhcnRTZWxlY3RlZFwiIC8+PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+KVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ6XG5cdFx0XHRcdFx0XHRcdFx0XHRcdCg8ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjMzJVwiLCBwYWRkaW5nOiBcIjAgMTBweFwiLCBtYXJnaW5Cb3R0b206IFwiMTBweFwiIH19IGtleT17Y2F0ZWdvcnkuaWR9IG9uQ2xpY2s9eygpID0+IHNlbGVjdENhdGVnb3J5KGNhdGVnb3J5LmlkKX0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBzdHlsZT17eyBiYWNrZ3JvdW5kOiBcIndoaXRlXCIsIHBhZGRpbmc6IFwiOHB4IDE1cHhcIiwgYm9yZGVyOiBcIjFweCBzb2xpZCB0cmFuc3BhcmVudFwiLCBib3JkZXJSYWRpdXM6IFwiNXB4XCIsIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsIH19PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGg0IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCIxMHB4XCIsIGNvbG9yOiBcIiMxNTFGMjhcIiwgdGV4dEFsaWduOiBcImNlbnRlclwiIH19PntjYXRlZ29yeS50aXRsZX08L2g0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGltZyBzcmM9e2NhdGVnb3J5LmltYWdlfSBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGJvcmRlclJhZGl1czogXCI1cHhcIiwgaGVpZ2h0OiBcIjk0cHhcIiB9fSAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGg1IHN0eWxlPXt7IGNvbG9yOiBcIiMxNTFGMjhcIiwgdGV4dEFsaWduOiBcImNlbnRlclwiLCBtYXJnaW5Ub3A6IFwiMTBweFwiLCBsaW5lSGVpZ2h0OiBcIjE0cHhcIiB9fT57Y2F0ZWdvcnkuYW1vdW50ICogY2F0ZWdvcnkucHJpY2V9IFVTRDwvaDU+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aDUgc3R5bGU9e3sgY29sb3I6IFwiIzE1MUYyOFwiLCB0ZXh0QWxpZ246IFwiY2VudGVyXCIsIGxpbmVIZWlnaHQ6IFwiMTRweFwiIH19Pih7Y2F0ZWdvcnkuYW1vdW50fSBwaWVjZXMpPC9oNT5cblxuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBqdXN0aWZ5Q29udGVudDogXCJmbGV4LWVuZFwiIH19ID5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBzdHlsZT17e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1hcmdpblRvcDogXCIxMHB4XCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGlzcGxheTogXCJmbGV4XCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0d2lkdGg6IFwiMzJweFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGhlaWdodDogXCIzMnB4XCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0anVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJvcmRlclJhZGl1czogXCIxNnB4XCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZDogXCIjRUVGMUY0XCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fX0+PEljb24gaWNvbj1cImhlYXJ0VW5zZWxlY3RlZFwiIC8+PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblxuXG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+KVxuXG5cdFx0XHRcdFx0XHRcdFx0KSlcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHQ8ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjMzJVwiLCBwYWRkaW5nOiBcIjAgMTBweFwiLCBkaXNwbGF5OiBcImZsZXhcIiwgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIiB9fSBvbkNsaWNrPXsoKSA9PiBvdGhlclNlbGVjdCgpfT5cblx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHQoY2F0ZWdvcmllcy5sZW5ndGggPiAwKSA/XG5cdFx0XHRcdFx0XHRcdFx0XHRcdCg8ZGl2IHN0eWxlPXt7IGJhY2tncm91bmQ6IFwid2hpdGVcIiwgcGFkZGluZzogXCIxMHB4XCIsIGJvcmRlcjogXCIxcHggc29saWQgdHJhbnNwYXJlbnRcIiwgYm9yZGVyUmFkaXVzOiBcIjVweFwiLCBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLCBtYXJnaW5Cb3R0b206IFwiMTVweFwiIH19PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxoNCBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiMTBweFwiLCBjb2xvcjogXCIjMTUxRjI4XCIsIHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5PdGhlciBzdXBwb3J0PC9oND5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aDUgc3R5bGU9e3sgY29sb3I6IFwiIzE1MUYyOFwiLCB0ZXh0QWxpZ246IFwiY2VudGVyXCIsIG1hcmdpblRvcDogXCIxMHB4XCIsIGxpbmVIZWlnaHQ6IFwiMTRweFwiIH19Pntcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG90aGVyQ2F0ZWdvcnlcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9IFVTRDwvaDU+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0KHNlbGVjdGVkQ2F0ZWdvcnkuaW5kZXhPZigtMSkgIT09IC0xKSA/IChcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwganVzdGlmeUNvbnRlbnQ6IFwiZmxleC1lbmRcIiB9fSA+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBzdHlsZT17e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bWFyZ2luVG9wOiBcIjEwcHhcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRpc3BsYXk6IFwiZmxleFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0d2lkdGg6IFwiMzJweFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aGVpZ2h0OiBcIjMycHhcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRib3JkZXJSYWRpdXM6IFwiMTZweFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZDogXCIjRUVGMUY0XCJcblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH19PjxJY29uIGljb249XCJoZWFydFNlbGVjdGVkXCIgLz48L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+KSA6IChcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwganVzdGlmeUNvbnRlbnQ6IFwiZmxleC1lbmRcIiB9fSA+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBzdHlsZT17e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bWFyZ2luVG9wOiBcIjEwcHhcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRpc3BsYXk6IFwiZmxleFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0d2lkdGg6IFwiMzJweFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aGVpZ2h0OiBcIjMycHhcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRib3JkZXJSYWRpdXM6IFwiMTZweFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZDogXCIjRUVGMUY0XCJcblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH19PjxJY29uIGljb249XCJoZWFydFVuc2VsZWN0ZWRcIiAvPjwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PikgOiBudWxsXG5cdFx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImQtZ3JpZFwiPlxuXG5cdFx0XHRcdFx0XHRcdHsodHlwZSA9PSBcIkNyeXB0b3B1bmtcIikgPyAoXG5cdFx0XHRcdFx0XHRcdFx0PEJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiIG9uQ2xpY2s9e2JpZE5GVH0+XG5cdFx0XHRcdFx0XHRcdFx0XHRCaWQgQ3J5cHRvcHVua1xuXHRcdFx0XHRcdFx0XHRcdDwvQnV0dG9uPilcblx0XHRcdFx0XHRcdFx0XHQ6IChcblx0XHRcdFx0XHRcdFx0XHRcdDxCdXR0b24gdmFyaWFudD1cInByaW1hcnlcIiBvbkNsaWNrPXtiaWRORlR9PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRCaWQgTkZUXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9Gb3JtPlxuXHRcdFx0XHQ8L01vZGFsLkJvZHk+XG5cblx0XHRcdDwvTW9kYWw+XG5cblx0XHQ8Lz5cblx0KTtcbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gXCIyYTE0NGUyNGZmMTk3MDg0NmMxN1wiOyB9Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VDYWxsYmFjayIsIk1vZGFsIiwiRm9ybSIsIkJ1dHRvbiIsInRvYXN0IiwiVXNlRm9ybUlucHV0IiwiY3JlYXRlQmlkIiwiUmVkdWNlQ2F0ZWdvcnkiLCJJY29uIiwiZ2V0Q2F0ZWdvcmllc2J5ZXZlbnRpZCIsImV2ZW50Z2V0YnlpZCIsIm5lYXJBUEkiLCJCaWRORlRNb2RhbCIsInNob3ciLCJvbkhpZGUiLCJUb0FkZHJlc3MiLCJ0b2tlbklkIiwicmVjaWQiLCJ0eXBlIiwiSGlnaGVzdGJpZCIsIndhbGxldFR5cGUiLCJldmVudElkIiwiQWxlcnQiLCJzZXRBbGVydCIsInBsYWNlaG9sZGVyIiwiQW1vdW50IiwiQW1vdW50SW5wdXQiLCJvdGhlckNhdGVnb3J5Iiwic2V0T3RoZXJDYXRlZ29yeSIsImFjdGl2YXRlV2FybmluZ01vZGFsIiwiYWxlcnRFTE0iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic3R5bGUiLCJib29sVHJ1ZSIsImNhdGVnb3JpZXMiLCJjb25zb2xlIiwibG9nIiwiZXZlbnQiLCJnb2FsIiwiR29hbCIsInN1bW9mbWFpbiIsImNhdGVnb3JpZXNfIiwiaSIsImxlbmd0aCIsInByaWNlIiwiYW1vdW50Iiwic2V0Q2F0ZWdvcmllcyIsImJpZE5GVCIsInByb21pc2UiLCJVcGRhdGVBaXJ0YWJsZSIsInBlbmRpbmciLCJlcnJvciIsInN1Y2Nlc3MiLCJDcmVhdGluZ09uQWlyVGFibGUiLCJBaXJ0YWJsZSIsInJlcXVpcmUiLCJiYXNlIiwiYXBpS2V5IiwiY3VycmVudERhdGUiLCJEYXRlIiwiY3JlYXRlIiwid2FsbGV0QWNjb3VudCIsImdldEFjY291bnRJZCIsInRvU3RyaW5nIiwic2VsZWN0ZWRDYXRlZ29yeSIsInNlbGVjdCIsImZpbHRlckJ5Rm9ybXVsYSIsInNvcnQiLCJmaWVsZCIsImRpcmVjdGlvbiIsInZpZXciLCJlYWNoUGFnZSIsInBhZ2UiLCJyZWNvcmRzIiwiZmV0Y2hOZXh0UGFnZSIsImFyciIsImZvckVhY2giLCJyZWNvcmQiLCJkb25lIiwiZXJyIiwiYmlkTkZUYnlORUFSIiwiTnVtYmVyIiwiYnV0dG9uUHJvcHMiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwid2luZG93IiwiaXNTaWduZWRJbiIsImlubmVyVGV4dCIsIndhcm4iLCJyZXF1ZXN0U2lnbkluIiwibmVhckNvbmZpZyIsImNvbnRyYWN0TmFtZSIsImNvbmZpZyIsIm5ldHdvcmtJZCIsImtleVN0b3JlIiwia2V5U3RvcmVzIiwiQnJvd3NlckxvY2FsU3RvcmFnZUtleVN0b3JlIiwibm9kZVVybCIsIndhbGxldFVybCIsImhlbHBlclVybCIsImV4cGxvcmVyVXJsIiwiY29ubmVjdCIsIm5lYXIiLCJhY2NvdW50IiwiYW1vdW50SW5Zb2N0byIsInRvTG9jYWxlU3RyaW5nIiwidXNlR3JvdXBpbmciLCJzZW5kTW9uZXkiLCJ0aGVuIiwibG9jYXRpb24iLCJyZWxvYWQiLCJjbGljayIsImNhdGNoIiwiYWxsU2VsZWN0ZWQiLCJzZXRBbGxTZWxlY3RlZCIsIm90aGVyU2VsZWN0ZWQiLCJzZXRPdGhlclNlbGVjdGVkIiwic2V0U2VsZWN0ZWRDYXRlZ29yeSIsInNlbGVjdENhdGVnb3J5IiwiY2F0ZWdvcnlfaWQiLCJ0ZW1wX2FyciIsInB1c2giLCJ1bnNlbGVjdENhdGVnb3J5Iiwic2VsZWN0QWxsQ2F0ZWdvcnkiLCJpZCIsIm90aGVyU2VsZWN0IiwiZGlzcGxheSIsIm1hcmdpbkJvdHRvbSIsIndpZHRoIiwicGFkZGluZyIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsInBvc2l0aW9uIiwiYmFja2dyb3VuZCIsImhlaWdodCIsImJvcmRlclJhZGl1cyIsImFsaWduU2VsZiIsImNvbG9yIiwicmlnaHQiLCJ0b3AiLCJtYXJnaW5Ub3AiLCJmbGV4RGlyZWN0aW9uIiwibWFyZ2luTGVmdCIsIm1hcmdpblJpZ2h0IiwiZmxleFdyYXAiLCJjYXRlZ29yeSIsImJvcmRlciIsInRleHRBbGlnbiIsInRpdGxlIiwiaW1hZ2UiLCJsaW5lSGVpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==