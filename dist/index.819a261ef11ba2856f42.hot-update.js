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
              return react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.promise(CreatingOnAirTable, {
                pending: "Updating on Airtable...",
                error: "Please try again later",
                success: "Updated on Airtable"
              });

            case 2:
              _context2.next = 4;
              return react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.promise(bidNFTbyNEAR, {
                pending: "Bidding...",
                error: "Please try again later",
                success: "Success!!!"
              });

            case 4:
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
              return base('eventcategories').select({
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
/******/ 	__webpack_require__.h = function() { return "c28df8613e5da3ad6ef1"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2luZGV4LjgxOWEyNjFlZjExYmEyODU2ZjQyLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2UsU0FBU2UsV0FBVCxPQVVaO0FBQUEsTUFURkMsSUFTRSxRQVRGQSxJQVNFO0FBQUEsTUFSRkMsTUFRRSxRQVJGQSxNQVFFO0FBQUEsTUFQRkMsU0FPRSxRQVBGQSxTQU9FO0FBQUEsTUFORkMsT0FNRSxRQU5GQSxPQU1FO0FBQUEsTUFMRkMsS0FLRSxRQUxGQSxLQUtFO0FBQUEsTUFKRkMsSUFJRSxRQUpGQSxJQUlFO0FBQUEsTUFIRkMsVUFHRSxRQUhGQSxVQUdFO0FBQUEsTUFGRkMsVUFFRSxRQUZGQSxVQUVFO0FBQUEsTUFERkMsT0FDRSxRQURGQSxPQUNFOztBQUNGLGtCQUEwQnZCLCtDQUFRLENBQUMsRUFBRCxDQUFsQztBQUFBO0FBQUEsTUFBT3dCLEtBQVA7QUFBQSxNQUFjQyxRQUFkOztBQUNBLHNCQUE4QmxCLHlEQUFZLENBQUM7QUFDMUNhLElBQUFBLElBQUksRUFBRSxNQURvQztBQUUxQ00sSUFBQUEsV0FBVyxFQUFFO0FBRjZCLEdBQUQsQ0FBMUM7QUFBQTtBQUFBLE1BQU9DLE1BQVA7QUFBQSxNQUFlQyxXQUFmOztBQUlBLG1CQUEwQzVCLCtDQUFRLENBQUMsQ0FBQyxDQUFGLENBQWxEO0FBQUE7QUFBQSxNQUFPNkIsYUFBUDtBQUFBLE1BQXNCQyxnQkFBdEI7O0FBRUEsV0FBU0Msb0JBQVQsR0FBZ0M7QUFDL0IsUUFBSUMsUUFBUSxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsT0FBeEIsQ0FBZjtBQUNBRixJQUFBQSxRQUFRLENBQUNHLEtBQVQsR0FBaUIsVUFBakI7QUFDQVYsSUFBQUEsUUFBUSxrQ0FBMkJKLFVBQTNCLFdBQVI7QUFDQTs7QUFFRHBCLEVBQUFBLGdEQUFTLHdNQUFDO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDSG1DLFlBQUFBLFFBREcsR0FDUSxJQURSOztBQUFBO0FBQUEsaUJBRUZBLFFBRkU7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLG1CQUlrQnpCLDRFQUFzQixDQUFDWSxPQUFELENBSnhDOztBQUFBO0FBSURjLFlBQUFBLFdBSkM7QUFLUEMsWUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksdUJBQVo7QUFDQUQsWUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlGLFdBQVo7QUFOTztBQUFBLG1CQU9XekIsa0VBQVksQ0FBQ1csT0FBRCxDQVB2Qjs7QUFBQTtBQU9IaUIsWUFBQUEsS0FQRztBQVFIQyxZQUFBQSxJQVJHLEdBUUlELEtBQUssQ0FBQ0UsSUFSVjtBQVNQSixZQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxPQUFaO0FBQ0FELFlBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRSxJQUFaO0FBQ0lFLFlBQUFBLFNBWEcsR0FXUyxDQVhUO0FBWUhDLFlBQUFBLFdBWkcsR0FZV1AsV0FaWDs7QUFhUCxpQkFBU1EsQ0FBVCxHQUFhLENBQWIsRUFBZ0JBLENBQUMsR0FBR0QsV0FBVyxDQUFDRSxNQUFoQyxFQUF3Q0QsQ0FBQyxFQUF6QyxFQUE2QztBQUM1Q0YsY0FBQUEsU0FBUyxJQUFJQyxXQUFXLENBQUNDLENBQUQsQ0FBWCxDQUFlRSxLQUFmLEdBQXVCSCxXQUFXLENBQUNDLENBQUQsQ0FBWCxDQUFlRyxNQUFuRDtBQUNBOztBQUVEbEIsWUFBQUEsZ0JBQWdCLENBQUNXLElBQUksR0FBR0UsU0FBUixDQUFoQjtBQUNBTSxZQUFBQSxhQUFhLENBQUNMLFdBQUQsQ0FBYjtBQWxCTzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBRCxJQTBCTixDQUFDUCxVQUFELENBMUJNLENBQVQ7O0FBZEUsV0EwQ2FhLE1BMUNiO0FBQUE7QUFBQTs7QUFBQTtBQUFBLHVNQTBDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFFTzVDLHlEQUFBLENBQWM4QyxrQkFBZCxFQUFrQztBQUN2Q0MsZ0JBQUFBLE9BQU8sMkJBRGdDO0FBRXZDQyxnQkFBQUEsS0FBSyxFQUFFLHdCQUZnQztBQUd2Q0MsZ0JBQUFBLE9BQU87QUFIZ0MsZUFBbEMsQ0FGUDs7QUFBQTtBQUFBO0FBQUEscUJBUU9qRCx5REFBQSxDQUFja0QsWUFBZCxFQUE0QjtBQUNqQ0gsZ0JBQUFBLE9BQU8sY0FEMEI7QUFFakNDLGdCQUFBQSxLQUFLLEVBQUUsd0JBRjBCO0FBR2pDQyxnQkFBQUEsT0FBTztBQUgwQixlQUE1QixDQVJQOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBMUNFO0FBQUE7QUFBQTs7QUFBQSxXQXlEYUgsa0JBekRiO0FBQUE7QUFBQTs7QUFBQTtBQUFBLG1OQXlERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDS0ssY0FBQUEsUUFETCxHQUNnQkMsbUJBQU8sQ0FBQyx5REFBRCxDQUR2QjtBQUVLQyxjQUFBQSxJQUZMLEdBRVksSUFBSUYsUUFBSixDQUFhO0FBQUVHLGdCQUFBQSxNQUFNLEVBQUU7QUFBVixlQUFiLEVBQThDRCxJQUE5QyxDQUFtRCxtQkFBbkQsQ0FGWjtBQUdLRSxjQUFBQSxXQUhMLEdBR21CLElBQUlDLElBQUosRUFIbkI7QUFBQTtBQUFBLHFCQUlPSCxJQUFJLENBQUMsVUFBRCxDQUFKLENBQWlCSSxNQUFqQixDQUF3QixDQUM3QjtBQUNDLDBCQUFVO0FBQ1QsNkJBQVc3QyxPQURGO0FBRVQsMEJBQVEyQyxXQUZDO0FBR1QsOEJBQVlHLGFBQWEsQ0FBQ0MsWUFBZCxHQUE2QkMsUUFBN0IsRUFISDtBQUlULDhCQUFZdkM7QUFKSDtBQURYLGVBRDZCLENBQXhCLENBSlA7O0FBQUE7QUFhQ3JCLGNBQUFBLHlEQUFBLENBQWMseUJBQWQ7QUFiRDtBQUFBLHFCQWNLNkQsY0FBYyxFQWRuQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQXpERTtBQUFBO0FBQUE7O0FBQUEsV0EwRWFBLGNBMUViO0FBQUE7QUFBQTs7QUFBQTtBQUFBLCtNQTBFRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDS1YsY0FBQUEsUUFETCxHQUNnQkMsbUJBQU8sQ0FBQyx5REFBRCxDQUR2QjtBQUVLQyxjQUFBQSxJQUZMLEdBRVksSUFBSUYsUUFBSixDQUFhO0FBQUVHLGdCQUFBQSxNQUFNLEVBQUU7QUFBVixlQUFiLEVBQThDRCxJQUE5QyxDQUFtRCxtQkFBbkQsQ0FGWixFQUlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRVNkLGNBQUFBLENBYlYsR0FhYyxDQWJkOztBQUFBO0FBQUEsb0JBYWlCQSxDQUFDLEdBQUd1QixnQkFBZ0IsQ0FBQ3RCLE1BYnRDO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEscUJBZVNhLElBQUksQ0FBQyxpQkFBRCxDQUFKLENBQXdCVSxNQUF4QixDQUErQjtBQUNyQ0MsZ0JBQUFBLGVBQWUscUJBQWNGLGdCQUFnQixDQUFDdkIsQ0FBRCxDQUE5QixPQURzQjtBQUV6QjBCLGdCQUFBQSxJQUFJLEVBQUUsQ0FBQztBQUFDQyxrQkFBQUEsS0FBSyxFQUFFLE9BQVI7QUFBaUJDLGtCQUFBQSxTQUFTLEVBQUU7QUFBNUIsaUJBQUQsQ0FGbUI7QUFHekJDLGdCQUFBQSxJQUFJLEVBQUU7QUFIbUIsZUFBL0IsRUFJS0MsUUFKTCxDQUljLFNBQVNDLElBQVQsQ0FBY0MsT0FBZCxFQUF1QkMsYUFBdkIsRUFBc0M7QUFDOUM7QUFDQSxvQkFBSUMsR0FBRyxHQUFHLEVBQVY7QUFDQUYsZ0JBQUFBLE9BQU8sQ0FBQ0csT0FBUixDQUFnQixVQUFVQyxNQUFWLEVBQWtCO0FBQzdDM0Msa0JBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZMEMsTUFBWjtBQUNBLGlCQUZXO0FBRVIsZUFURSxFQVNBLFNBQVNDLElBQVQsQ0FBY0MsR0FBZCxFQUFtQjtBQUN4QixvQkFBSUEsR0FBSixFQUFTO0FBQUU3QyxrQkFBQUEsT0FBTyxDQUFDZ0IsS0FBUixDQUFjNkIsR0FBZDtBQUFvQjtBQUFTO0FBQ3hDLGVBWEssQ0FmVDs7QUFBQTtBQWE4Q3RDLGNBQUFBLENBQUMsRUFiL0M7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBMUVFO0FBQUE7QUFBQTs7QUFBQSxXQTBHYVcsWUExR2I7QUFBQTtBQUFBOztBQUFBO0FBQUEsNk1BMEdGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUNLNEIsTUFBTSxDQUFDekQsTUFBRCxDQUFOLEdBQWlCeUQsTUFBTSxDQUFDL0QsVUFBRCxDQUQ1QjtBQUFBO0FBQUE7QUFBQTs7QUFFRVUsY0FBQUEsb0JBQW9CO0FBRnRCOztBQUFBO0FBS0tzRCxjQUFBQSxXQUxMLEdBS21CcEQsUUFBUSxDQUFDcUQsc0JBQVQsQ0FBZ0MsaUJBQWhDLEVBQW1ELENBQW5ELENBTG5COztBQUFBLG9CQU1LQyxNQUFNLENBQUN2QixhQUFQLENBQXFCd0IsVUFBckIsTUFBcUMsS0FOMUM7QUFBQTtBQUFBO0FBQUE7O0FBT0VILGNBQUFBLFdBQVcsQ0FBQ0ksU0FBWixHQUF3Qix3QkFBeEI7QUFQRjtBQUFBLHFCQVFRbkYsc0RBQUEsQ0FBVywrQ0FBWCxDQVJSOztBQUFBO0FBQUE7QUFBQSxxQkFTUWlGLE1BQU0sQ0FBQ3ZCLGFBQVAsQ0FBcUIyQixhQUFyQixDQUNMSixNQUFNLENBQUNLLFVBQVAsQ0FBa0JDLFlBRGIsRUFFTCxhQUZLLENBVFI7O0FBQUE7QUFBQTs7QUFBQTtBQWNDO0FBQ0E7QUFDTUMsY0FBQUEsTUFoQlAsR0FnQmdCO0FBQ2RDLGdCQUFBQSxTQUFTLEVBQUUsU0FERztBQUVkQyxnQkFBQUEsUUFBUSxFQUFFLElBQUluRiwrRUFBSixFQUZJO0FBR2RzRixnQkFBQUEsT0FBTyxFQUFFLDhCQUhLO0FBSWRDLGdCQUFBQSxTQUFTLEVBQUUsaUNBSkc7QUFLZEMsZ0JBQUFBLFNBQVMsRUFBRSxpQ0FMRztBQU1kQyxnQkFBQUEsV0FBVyxFQUFFO0FBTkMsZUFoQmhCLEVBd0JDOztBQXhCRDtBQUFBLHFCQXlCb0J6RixpREFBQSxDQUFnQmlGLE1BQWhCLENBekJwQjs7QUFBQTtBQXlCT1UsY0FBQUEsSUF6QlA7QUFBQTtBQUFBLHFCQTBCdUJBLElBQUksQ0FBQ0MsT0FBTCxDQUFhekMsYUFBYSxDQUFDQyxZQUFkLEVBQWIsQ0ExQnZCOztBQUFBO0FBMEJPd0MsY0FBQUEsT0ExQlA7QUEyQk9DLGNBQUFBLGFBM0JQLEdBMkJ1QixDQUFDdEIsTUFBTSxDQUFDekQsTUFBRCxDQUFOLEdBQWlCLHlCQUFsQixFQUE2Q2dGLGNBQTdDLENBQTRELFVBQTVELEVBQXdFO0FBQUVDLGdCQUFBQSxXQUFXLEVBQUU7QUFBZixlQUF4RSxDQTNCdkI7QUFBQTtBQUFBLHFCQTZCT0gsT0FBTyxDQUFDSSxTQUFSLENBQ0w1RixTQURLLEVBQ007QUFDWHlGLGNBQUFBLGFBRkssQ0FFUztBQUZULGdCQUdKSSxJQUhJLHdNQUdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBQ0F0Ryw4REFBUyxDQUFDVSxPQUFELEVBQVU4QyxhQUFhLENBQUNDLFlBQWQsR0FBNkJDLFFBQTdCLEVBQVYsRUFBbUR2QyxNQUFuRCxDQURUOztBQUFBO0FBRUdrQix3QkFBQUEsQ0FGSCxHQUVPLENBRlA7O0FBQUE7QUFBQSw4QkFFVUEsQ0FBQyxHQUFHdUIsZ0JBQWdCLENBQUN0QixNQUYvQjtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLCtCQUdDckMsbUVBQWMsQ0FBQzJELGdCQUFnQixDQUFDdkIsQ0FBRCxDQUFqQixDQUhmOztBQUFBO0FBRXVDQSx3QkFBQUEsQ0FBQyxFQUZ4QztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFIRCxJQVNIaUUsSUFURyxDQVNFLFlBQU07QUFDYnZCLGdCQUFBQSxNQUFNLENBQUN3QixRQUFQLENBQWdCQyxNQUFoQjtBQUNBekIsZ0JBQUFBLE1BQU0sQ0FBQ3RELFFBQVAsQ0FBZ0JxRCxzQkFBaEIsQ0FBdUMsV0FBdkMsRUFBb0QsQ0FBcEQsRUFBdUQyQixLQUF2RDtBQUNBLGVBWkssRUFhSkMsS0FiSSxDQWFFLFVBQUM1RCxLQUFELEVBQVc7QUFDakJoQixnQkFBQUEsT0FBTyxDQUFDZ0IsS0FBUixDQUFjLFFBQWQsRUFBd0JBLEtBQXhCO0FBQ0FoQixnQkFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVllLEtBQVo7QUFDQTtBQUNBLGVBakJJLENBN0JQOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBMUdFO0FBQUE7QUFBQTs7QUEySkYsbUJBQW9DdEQsK0NBQVEsQ0FBQyxFQUFELENBQTVDO0FBQUE7QUFBQSxNQUFPcUMsVUFBUDtBQUFBLE1BQW1CWSxhQUFuQjs7QUFHQSxtQkFBc0NqRCwrQ0FBUSxDQUFDLEtBQUQsQ0FBOUM7QUFBQTtBQUFBLE1BQU9tSCxXQUFQO0FBQUEsTUFBb0JDLGNBQXBCOztBQUNBLG1CQUEwQ3BILCtDQUFRLENBQUMsS0FBRCxDQUFsRDtBQUFBO0FBQUEsTUFBT3FILGFBQVA7QUFBQSxNQUFzQkMsZ0JBQXRCOztBQUNBLG9CQUFnRHRILCtDQUFRLENBQUMsRUFBRCxDQUF4RDtBQUFBO0FBQUEsTUFBT29FLGdCQUFQO0FBQUEsTUFBeUJtRCxtQkFBekI7O0FBRUEsTUFBTUMsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDQyxXQUFELEVBQWlCO0FBQ3ZDbkYsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksYUFBWjtBQUNBRCxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWWtGLFdBQVo7QUFDQSxRQUFJQyxRQUFRLEdBQUcsRUFBZjs7QUFDQSxTQUFLLElBQUk3RSxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHdUIsZ0JBQWdCLENBQUN0QixNQUFyQyxFQUE2Q0QsQ0FBQyxFQUE5QyxFQUFrRDtBQUNqRDZFLE1BQUFBLFFBQVEsQ0FBQ0MsSUFBVCxDQUFjdkQsZ0JBQWdCLENBQUN2QixDQUFELENBQTlCO0FBQ0E7O0FBQ0Q2RSxJQUFBQSxRQUFRLENBQUNDLElBQVQsQ0FBY0YsV0FBZDtBQUNBbkYsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVltRixRQUFaO0FBRUFILElBQUFBLG1CQUFtQixDQUFDRyxRQUFELENBQW5CO0FBQ0EsR0FYRDs7QUFZQSxNQUFNRSxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUNILFdBQUQsRUFBaUI7QUFDekMsUUFBSUMsUUFBUSxHQUFHLEVBQWY7O0FBQ0EsU0FBSyxJQUFJN0UsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR3VCLGdCQUFnQixDQUFDdEIsTUFBckMsRUFBNkNELENBQUMsRUFBOUMsRUFBa0Q7QUFDakQsVUFBSXVCLGdCQUFnQixDQUFDdkIsQ0FBRCxDQUFoQixJQUF1QjRFLFdBQTNCLEVBQ0NDLFFBQVEsQ0FBQ0MsSUFBVCxDQUFjdkQsZ0JBQWdCLENBQUN2QixDQUFELENBQTlCO0FBQ0Q7O0FBQ0RQLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZbUYsUUFBWjtBQUNBSCxJQUFBQSxtQkFBbUIsQ0FBQ0csUUFBRCxDQUFuQjtBQUNBLEdBUkQ7O0FBVUEsTUFBTUcsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixHQUFNO0FBQy9CLFFBQUlWLFdBQUosRUFBaUI7QUFDaEJDLE1BQUFBLGNBQWMsQ0FBQyxLQUFELENBQWQ7QUFDQUcsTUFBQUEsbUJBQW1CLENBQUMsRUFBRCxDQUFuQjtBQUNBLEtBSEQsTUFHTztBQUVOSCxNQUFBQSxjQUFjLENBQUMsSUFBRCxDQUFkO0FBQ0EsVUFBSU0sUUFBUSxHQUFHLEVBQWY7O0FBQ0EsV0FBSyxJQUFJN0UsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR1IsVUFBVSxDQUFDUyxNQUEvQixFQUF1Q0QsQ0FBQyxFQUF4QyxFQUE0QztBQUMzQzZFLFFBQUFBLFFBQVEsQ0FBQ0MsSUFBVCxDQUFjdEYsVUFBVSxDQUFDUSxDQUFELENBQVYsQ0FBY2lGLEVBQTVCO0FBQ0E7O0FBQ0RKLE1BQUFBLFFBQVEsQ0FBQ0MsSUFBVCxDQUFjLENBQUMsQ0FBZjtBQUNBSixNQUFBQSxtQkFBbUIsQ0FBQ0csUUFBRCxDQUFuQjtBQUNBO0FBRUQsR0FmRDs7QUFnQkEsTUFBTUssV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUN6QixRQUFJVixhQUFKLEVBQW1CO0FBQ2xCQyxNQUFBQSxnQkFBZ0IsQ0FBQyxLQUFELENBQWhCO0FBQ0EsVUFBSUksUUFBUSxHQUFHLEVBQWY7O0FBQ0EsV0FBSyxJQUFJN0UsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR3VCLGdCQUFnQixDQUFDdEIsTUFBckMsRUFBNkNELENBQUMsRUFBOUMsRUFBa0Q7QUFDakQsWUFBSXVCLGdCQUFnQixDQUFDdkIsQ0FBRCxDQUFoQixJQUF1QixDQUFDLENBQTVCLEVBQ0M2RSxRQUFRLENBQUNDLElBQVQsQ0FBY3ZELGdCQUFnQixDQUFDdkIsQ0FBRCxDQUE5QjtBQUNEOztBQUNEMEUsTUFBQUEsbUJBQW1CLENBQUNHLFFBQUQsQ0FBbkI7QUFDQSxLQVJELE1BUU87QUFDTkosTUFBQUEsZ0JBQWdCLENBQUMsSUFBRCxDQUFoQjtBQUNBLFVBQUlJLFFBQVEsR0FBRyxFQUFmOztBQUNBLFdBQUssSUFBSTdFLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUd1QixnQkFBZ0IsQ0FBQ3RCLE1BQXJDLEVBQTZDRCxDQUFDLEVBQTlDLEVBQWtEO0FBQ2pENkUsUUFBQUEsUUFBUSxDQUFDQyxJQUFULENBQWN2RCxnQkFBZ0IsQ0FBQ3ZCLENBQUQsQ0FBOUI7QUFDQTs7QUFDRDZFLE1BQUFBLFFBQVEsQ0FBQ0MsSUFBVCxDQUFjLENBQUMsQ0FBZjtBQUNBSixNQUFBQSxtQkFBbUIsQ0FBQ0csUUFBRCxDQUFuQjtBQUNBO0FBQ0QsR0FsQkQ7O0FBbUJBLHNCQUNDLGlIQUNDLGlEQUFDLDhEQUFEO0FBQ0MsUUFBSSxFQUFFM0csSUFEUDtBQUVDLFVBQU0sRUFBRUMsTUFGVDtBQUdDLHVCQUFnQiwrQkFIakI7QUFJQyxZQUFRO0FBSlQsa0JBTUMsaURBQUMscUVBQUQ7QUFBYyxlQUFXO0FBQXpCLEtBQ0dJLElBQUksSUFBSSxZQUFULGdCQUNBLGlEQUFDLG9FQUFEO0FBQWEsTUFBRSxFQUFDO0FBQWhCLHNCQURBLGdCQUlBLGlEQUFDLG9FQUFEO0FBQWEsTUFBRSxFQUFDO0FBQWhCLGVBTEYsQ0FORCxlQWdCQyxpREFBQyxtRUFBRDtBQUFZLGFBQVMsRUFBQztBQUF0QixrQkFDQyxpREFBQyw2REFBRCxxQkFDQztBQUFLLE1BQUUsRUFBQyxPQUFSO0FBQWdCLFNBQUssRUFBRTtBQUFFNEcsTUFBQUEsT0FBTyxFQUFFO0FBQVgsS0FBdkI7QUFBNEMsYUFBUyxFQUFDLG9CQUF0RDtBQUEyRSxRQUFJLEVBQUM7QUFBaEYsS0FDRXhHLEtBREYsQ0FERCxlQUlDLGlEQUFDLG1FQUFEO0FBQVksYUFBUyxFQUFDLE1BQXRCO0FBQTZCLGFBQVMsRUFBQztBQUF2QyxrQkFDQyxpREFBQyxtRUFBRCw2QkFERCxFQUVFSSxXQUZGLENBSkQsZUFRQztBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNDO0FBQUksU0FBSyxFQUFFO0FBQUVxRyxNQUFBQSxZQUFZLEVBQUU7QUFBaEI7QUFBWCw2Q0FERCxlQUVDO0FBQUssU0FBSyxFQUFFO0FBQUVDLE1BQUFBLEtBQUssRUFBRSxNQUFUO0FBQWlCQyxNQUFBQSxPQUFPLEVBQUUsS0FBMUI7QUFBaUNILE1BQUFBLE9BQU8sRUFBRSxNQUExQztBQUFrREksTUFBQUEsY0FBYyxFQUFFLFFBQWxFO0FBQTRFQyxNQUFBQSxVQUFVLEVBQUUsUUFBeEY7QUFBa0dDLE1BQUFBLFFBQVEsRUFBRSxVQUE1RztBQUF3SEMsTUFBQUEsVUFBVSxFQUFFLFFBQXBJO0FBQThJQyxNQUFBQSxNQUFNLEVBQUUsTUFBdEo7QUFBOEpDLE1BQUFBLFlBQVksRUFBRSxLQUE1SztBQUFtTFIsTUFBQUEsWUFBWSxFQUFFO0FBQWpNLEtBQVo7QUFBdU4sV0FBTyxFQUFFLG1CQUFNO0FBRXJPSixNQUFBQSxpQkFBaUI7QUFDakI7QUFIRCxrQkFJQztBQUFJLFNBQUssRUFBRTtBQUFFYSxNQUFBQSxTQUFTLEVBQUUsUUFBYjtBQUF1QkMsTUFBQUEsS0FBSyxFQUFFO0FBQTlCO0FBQVgsMkJBSkQsRUFLRXhCLFdBQVcsZ0JBQ1g7QUFBSyxTQUFLLEVBQUU7QUFBRW1CLE1BQUFBLFFBQVEsRUFBRSxVQUFaO0FBQXdCTSxNQUFBQSxLQUFLLEVBQUUsTUFBL0I7QUFBdUNDLE1BQUFBLEdBQUcsRUFBRTtBQUE1QztBQUFaLGtCQUNDO0FBQUssU0FBSyxFQUFFO0FBQ1hDLE1BQUFBLFNBQVMsRUFBRSxNQURBO0FBRVhkLE1BQUFBLE9BQU8sRUFBRSxNQUZFO0FBR1hFLE1BQUFBLEtBQUssRUFBRSxNQUhJO0FBSVhNLE1BQUFBLE1BQU0sRUFBRSxNQUpHO0FBS1hKLE1BQUFBLGNBQWMsRUFBRSxRQUxMO0FBTVhXLE1BQUFBLGFBQWEsRUFBRSxRQU5KO0FBT1hWLE1BQUFBLFVBQVUsRUFBRSxRQVBEO0FBUVhJLE1BQUFBLFlBQVksRUFBRSxNQVJIO0FBU1hGLE1BQUFBLFVBQVUsRUFBRTtBQVREO0FBQVosa0JBVUcsaURBQUMseURBQUQ7QUFBTSxRQUFJLEVBQUM7QUFBWCxJQVZILENBREQsQ0FEVyxnQkFjWDtBQUFLLFNBQUssRUFBRTtBQUFFRCxNQUFBQSxRQUFRLEVBQUUsVUFBWjtBQUF3Qk0sTUFBQUEsS0FBSyxFQUFFLE1BQS9CO0FBQXVDQyxNQUFBQSxHQUFHLEVBQUU7QUFBNUM7QUFBWixrQkFDQztBQUFLLFNBQUssRUFBRTtBQUNYQyxNQUFBQSxTQUFTLEVBQUUsTUFEQTtBQUVYZCxNQUFBQSxPQUFPLEVBQUUsTUFGRTtBQUdYRSxNQUFBQSxLQUFLLEVBQUUsTUFISTtBQUlYTSxNQUFBQSxNQUFNLEVBQUUsTUFKRztBQUtYSixNQUFBQSxjQUFjLEVBQUUsUUFMTDtBQU1YVyxNQUFBQSxhQUFhLEVBQUUsUUFOSjtBQU9YVixNQUFBQSxVQUFVLEVBQUUsUUFQRDtBQVFYSSxNQUFBQSxZQUFZLEVBQUUsTUFSSDtBQVNYRixNQUFBQSxVQUFVLEVBQUU7QUFURDtBQUFaLGtCQVVHLGlEQUFDLHlEQUFEO0FBQU0sUUFBSSxFQUFDO0FBQVgsSUFWSCxDQURELENBbkJGLENBRkQsQ0FSRCxlQTRDQztBQUFLLGFBQVMsRUFBQyxnQkFBZjtBQUFnQyxTQUFLLEVBQUU7QUFBRVMsTUFBQUEsVUFBVSxFQUFFLE9BQWQ7QUFBdUJDLE1BQUFBLFdBQVcsRUFBRSxPQUFwQztBQUE2Q2pCLE1BQUFBLE9BQU8sRUFBRSxNQUF0RDtBQUE4RGUsTUFBQUEsYUFBYSxFQUFFLEtBQTdFO0FBQW9GRyxNQUFBQSxRQUFRLEVBQUU7QUFBOUY7QUFBdkMsS0FFRSwwRkFBQTdHLFVBQVUsTUFBVixDQUFBQSxVQUFVLEVBQUssVUFBQzhHLFFBQUQ7QUFBQSxXQUNiLCtGQUFBL0UsZ0JBQWdCLE1BQWhCLENBQUFBLGdCQUFnQixFQUFTK0UsUUFBUSxDQUFDckIsRUFBbEIsQ0FBaEIsS0FBMEMsQ0FBQyxDQUE1QyxnQkFDRTtBQUFLLFdBQUssRUFBRTtBQUFFSSxRQUFBQSxLQUFLLEVBQUUsS0FBVDtBQUFnQkMsUUFBQUEsT0FBTyxFQUFFLFFBQXpCO0FBQW1DRixRQUFBQSxZQUFZLEVBQUU7QUFBakQsT0FBWjtBQUF1RSxTQUFHLEVBQUVrQixRQUFRLENBQUNyQixFQUFyRjtBQUF5RixhQUFPLEVBQUU7QUFBQSxlQUFNRixnQkFBZ0IsQ0FBQ3VCLFFBQVEsQ0FBQ3JCLEVBQVYsQ0FBdEI7QUFBQTtBQUFsRyxvQkFDQTtBQUFLLFdBQUssRUFBRTtBQUFFUyxRQUFBQSxVQUFVLEVBQUUsT0FBZDtBQUF1QkosUUFBQUEsT0FBTyxFQUFFLFVBQWhDO0FBQTRDaUIsUUFBQUEsTUFBTSxFQUFFLHVCQUFwRDtBQUE2RVgsUUFBQUEsWUFBWSxFQUFFLEtBQTNGO0FBQWtHSixRQUFBQSxVQUFVLEVBQUU7QUFBOUc7QUFBWixvQkFDQztBQUFJLFdBQUssRUFBRTtBQUFFSixRQUFBQSxZQUFZLEVBQUUsTUFBaEI7QUFBd0JVLFFBQUFBLEtBQUssRUFBRSxTQUEvQjtBQUEwQ1UsUUFBQUEsU0FBUyxFQUFFO0FBQXJEO0FBQVgsT0FBNkVGLFFBQVEsQ0FBQ0csS0FBdEYsQ0FERCxlQUVDO0FBQUssU0FBRyxFQUFFSCxRQUFRLENBQUNJLEtBQW5CO0FBQTBCLFdBQUssRUFBRTtBQUFFckIsUUFBQUEsS0FBSyxFQUFFLE1BQVQ7QUFBaUJPLFFBQUFBLFlBQVksRUFBRSxLQUEvQjtBQUFzQ0QsUUFBQUEsTUFBTSxFQUFFO0FBQTlDO0FBQWpDLE1BRkQsZUFHQztBQUFJLFdBQUssRUFBRTtBQUFFRyxRQUFBQSxLQUFLLEVBQUUsU0FBVDtBQUFvQlUsUUFBQUEsU0FBUyxFQUFFLFFBQS9CO0FBQXlDUCxRQUFBQSxTQUFTLEVBQUUsTUFBcEQ7QUFBNERVLFFBQUFBLFVBQVUsRUFBRTtBQUF4RTtBQUFYLE9BQThGTCxRQUFRLENBQUNuRyxNQUFULEdBQWtCbUcsUUFBUSxDQUFDcEcsS0FBekgsU0FIRCxlQUlDO0FBQUksV0FBSyxFQUFFO0FBQUU0RixRQUFBQSxLQUFLLEVBQUUsU0FBVDtBQUFvQlUsUUFBQUEsU0FBUyxFQUFFLFFBQS9CO0FBQXlDRyxRQUFBQSxVQUFVLEVBQUU7QUFBckQ7QUFBWCxZQUE0RUwsUUFBUSxDQUFDbkcsTUFBckYsYUFKRCxlQVFDO0FBQUssV0FBSyxFQUFFO0FBQUVnRixRQUFBQSxPQUFPLEVBQUUsTUFBWDtBQUFtQkksUUFBQUEsY0FBYyxFQUFFO0FBQW5DO0FBQVosb0JBQ0M7QUFBSyxXQUFLLEVBQUU7QUFDWFUsUUFBQUEsU0FBUyxFQUFFLE1BREE7QUFFWGQsUUFBQUEsT0FBTyxFQUFFLE1BRkU7QUFHWEUsUUFBQUEsS0FBSyxFQUFFLE1BSEk7QUFJWE0sUUFBQUEsTUFBTSxFQUFFLE1BSkc7QUFLWEosUUFBQUEsY0FBYyxFQUFFLFFBTEw7QUFNWFcsUUFBQUEsYUFBYSxFQUFFLFFBTko7QUFPWFYsUUFBQUEsVUFBVSxFQUFFLFFBUEQ7QUFRWEksUUFBQUEsWUFBWSxFQUFFLE1BUkg7QUFTWEYsUUFBQUEsVUFBVSxFQUFFO0FBVEQ7QUFBWixvQkFXRyxpREFBQyx5REFBRDtBQUFNLFVBQUksRUFBQztBQUFYLE1BWEgsQ0FERCxDQVJELENBREEsQ0FERixnQkEyQkU7QUFBSyxXQUFLLEVBQUU7QUFBRUwsUUFBQUEsS0FBSyxFQUFFLEtBQVQ7QUFBZ0JDLFFBQUFBLE9BQU8sRUFBRSxRQUF6QjtBQUFtQ0YsUUFBQUEsWUFBWSxFQUFFO0FBQWpELE9BQVo7QUFBdUUsU0FBRyxFQUFFa0IsUUFBUSxDQUFDckIsRUFBckY7QUFBeUYsYUFBTyxFQUFFO0FBQUEsZUFBTU4sY0FBYyxDQUFDMkIsUUFBUSxDQUFDckIsRUFBVixDQUFwQjtBQUFBO0FBQWxHLG9CQUNBO0FBQUssV0FBSyxFQUFFO0FBQUVTLFFBQUFBLFVBQVUsRUFBRSxPQUFkO0FBQXVCSixRQUFBQSxPQUFPLEVBQUUsVUFBaEM7QUFBNENpQixRQUFBQSxNQUFNLEVBQUUsdUJBQXBEO0FBQTZFWCxRQUFBQSxZQUFZLEVBQUUsS0FBM0Y7QUFBa0dKLFFBQUFBLFVBQVUsRUFBRTtBQUE5RztBQUFaLG9CQUNDO0FBQUksV0FBSyxFQUFFO0FBQUVKLFFBQUFBLFlBQVksRUFBRSxNQUFoQjtBQUF3QlUsUUFBQUEsS0FBSyxFQUFFLFNBQS9CO0FBQTBDVSxRQUFBQSxTQUFTLEVBQUU7QUFBckQ7QUFBWCxPQUE2RUYsUUFBUSxDQUFDRyxLQUF0RixDQURELGVBRUM7QUFBSyxTQUFHLEVBQUVILFFBQVEsQ0FBQ0ksS0FBbkI7QUFBMEIsV0FBSyxFQUFFO0FBQUVyQixRQUFBQSxLQUFLLEVBQUUsTUFBVDtBQUFpQk8sUUFBQUEsWUFBWSxFQUFFLEtBQS9CO0FBQXNDRCxRQUFBQSxNQUFNLEVBQUU7QUFBOUM7QUFBakMsTUFGRCxlQUdDO0FBQUksV0FBSyxFQUFFO0FBQUVHLFFBQUFBLEtBQUssRUFBRSxTQUFUO0FBQW9CVSxRQUFBQSxTQUFTLEVBQUUsUUFBL0I7QUFBeUNQLFFBQUFBLFNBQVMsRUFBRSxNQUFwRDtBQUE0RFUsUUFBQUEsVUFBVSxFQUFFO0FBQXhFO0FBQVgsT0FBOEZMLFFBQVEsQ0FBQ25HLE1BQVQsR0FBa0JtRyxRQUFRLENBQUNwRyxLQUF6SCxTQUhELGVBSUM7QUFBSSxXQUFLLEVBQUU7QUFBRTRGLFFBQUFBLEtBQUssRUFBRSxTQUFUO0FBQW9CVSxRQUFBQSxTQUFTLEVBQUUsUUFBL0I7QUFBeUNHLFFBQUFBLFVBQVUsRUFBRTtBQUFyRDtBQUFYLFlBQTRFTCxRQUFRLENBQUNuRyxNQUFyRixhQUpELGVBT0M7QUFBSyxXQUFLLEVBQUU7QUFBRWdGLFFBQUFBLE9BQU8sRUFBRSxNQUFYO0FBQW1CSSxRQUFBQSxjQUFjLEVBQUU7QUFBbkM7QUFBWixvQkFDQztBQUFLLFdBQUssRUFBRTtBQUNYVSxRQUFBQSxTQUFTLEVBQUUsTUFEQTtBQUVYZCxRQUFBQSxPQUFPLEVBQUUsTUFGRTtBQUdYRSxRQUFBQSxLQUFLLEVBQUUsTUFISTtBQUlYTSxRQUFBQSxNQUFNLEVBQUUsTUFKRztBQUtYSixRQUFBQSxjQUFjLEVBQUUsUUFMTDtBQU1YVyxRQUFBQSxhQUFhLEVBQUUsUUFOSjtBQU9YVixRQUFBQSxVQUFVLEVBQUUsUUFQRDtBQVFYSSxRQUFBQSxZQUFZLEVBQUUsTUFSSDtBQVNYRixRQUFBQSxVQUFVLEVBQUU7QUFURDtBQUFaLG9CQVVHLGlEQUFDLHlEQUFEO0FBQU0sVUFBSSxFQUFDO0FBQVgsTUFWSCxDQURELENBUEQsQ0FEQSxDQTVCWTtBQUFBLEdBQUwsQ0FGWixlQTJEQztBQUFLLFNBQUssRUFBRTtBQUFFTCxNQUFBQSxLQUFLLEVBQUUsS0FBVDtBQUFnQkMsTUFBQUEsT0FBTyxFQUFFLFFBQXpCO0FBQW1DSCxNQUFBQSxPQUFPLEVBQUUsTUFBNUM7QUFBb0RlLE1BQUFBLGFBQWEsRUFBRTtBQUFuRSxLQUFaO0FBQTJGLFdBQU8sRUFBRTtBQUFBLGFBQU1oQixXQUFXLEVBQWpCO0FBQUE7QUFBcEcsS0FFRzFGLFVBQVUsQ0FBQ1MsTUFBWCxHQUFvQixDQUFyQixnQkFDRTtBQUFLLFNBQUssRUFBRTtBQUFFeUYsTUFBQUEsVUFBVSxFQUFFLE9BQWQ7QUFBdUJKLE1BQUFBLE9BQU8sRUFBRSxNQUFoQztBQUF3Q2lCLE1BQUFBLE1BQU0sRUFBRSx1QkFBaEQ7QUFBeUVYLE1BQUFBLFlBQVksRUFBRSxLQUF2RjtBQUE4RkosTUFBQUEsVUFBVSxFQUFFLFFBQTFHO0FBQW9ISixNQUFBQSxZQUFZLEVBQUU7QUFBbEk7QUFBWixrQkFDQTtBQUFJLFNBQUssRUFBRTtBQUFFQSxNQUFBQSxZQUFZLEVBQUUsTUFBaEI7QUFBd0JVLE1BQUFBLEtBQUssRUFBRSxTQUEvQjtBQUEwQ1UsTUFBQUEsU0FBUyxFQUFFO0FBQXJEO0FBQVgscUJBREEsZUFFQTtBQUFJLFNBQUssRUFBRTtBQUFFVixNQUFBQSxLQUFLLEVBQUUsU0FBVDtBQUFvQlUsTUFBQUEsU0FBUyxFQUFFLFFBQS9CO0FBQXlDUCxNQUFBQSxTQUFTLEVBQUUsTUFBcEQ7QUFBNERVLE1BQUFBLFVBQVUsRUFBRTtBQUF4RTtBQUFYLEtBQ0MzSCxhQURELFNBRkEsRUFNRSwrRkFBQXVDLGdCQUFnQixNQUFoQixDQUFBQSxnQkFBZ0IsRUFBUyxDQUFDLENBQVYsQ0FBaEIsS0FBaUMsQ0FBQyxDQUFuQyxnQkFDQztBQUFLLFNBQUssRUFBRTtBQUFFNEQsTUFBQUEsT0FBTyxFQUFFLE1BQVg7QUFBbUJJLE1BQUFBLGNBQWMsRUFBRTtBQUFuQztBQUFaLGtCQUNDO0FBQUssU0FBSyxFQUFFO0FBQ1hVLE1BQUFBLFNBQVMsRUFBRSxNQURBO0FBRVhkLE1BQUFBLE9BQU8sRUFBRSxNQUZFO0FBR1hFLE1BQUFBLEtBQUssRUFBRSxNQUhJO0FBSVhNLE1BQUFBLE1BQU0sRUFBRSxNQUpHO0FBS1hKLE1BQUFBLGNBQWMsRUFBRSxRQUxMO0FBTVhXLE1BQUFBLGFBQWEsRUFBRSxRQU5KO0FBT1hWLE1BQUFBLFVBQVUsRUFBRSxRQVBEO0FBUVhJLE1BQUFBLFlBQVksRUFBRSxNQVJIO0FBU1hGLE1BQUFBLFVBQVUsRUFBRTtBQVREO0FBQVosa0JBV0csaURBQUMseURBQUQ7QUFBTSxRQUFJLEVBQUM7QUFBWCxJQVhILENBREQsQ0FERCxnQkFlQztBQUFLLFNBQUssRUFBRTtBQUFFUCxNQUFBQSxPQUFPLEVBQUUsTUFBWDtBQUFtQkksTUFBQUEsY0FBYyxFQUFFO0FBQW5DO0FBQVosa0JBQ0M7QUFBSyxTQUFLLEVBQUU7QUFDWFUsTUFBQUEsU0FBUyxFQUFFLE1BREE7QUFFWGQsTUFBQUEsT0FBTyxFQUFFLE1BRkU7QUFHWEUsTUFBQUEsS0FBSyxFQUFFLE1BSEk7QUFJWE0sTUFBQUEsTUFBTSxFQUFFLE1BSkc7QUFLWEosTUFBQUEsY0FBYyxFQUFFLFFBTEw7QUFNWFcsTUFBQUEsYUFBYSxFQUFFLFFBTko7QUFPWFYsTUFBQUEsVUFBVSxFQUFFLFFBUEQ7QUFRWEksTUFBQUEsWUFBWSxFQUFFLE1BUkg7QUFTWEYsTUFBQUEsVUFBVSxFQUFFO0FBVEQ7QUFBWixrQkFXRyxpREFBQyx5REFBRDtBQUFNLFFBQUksRUFBQztBQUFYLElBWEgsQ0FERCxDQXJCRixDQURGLEdBc0NXLElBeENiLENBM0RELENBNUNELGVBb0pDO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FFR25ILElBQUksSUFBSSxZQUFULGdCQUNBLGlEQUFDLCtEQUFEO0FBQVEsV0FBTyxFQUFDLFNBQWhCO0FBQTBCLFdBQU8sRUFBRThCO0FBQW5DLHNCQURBLGdCQUtDLGlEQUFDLCtEQUFEO0FBQVEsV0FBTyxFQUFDLFNBQWhCO0FBQTBCLFdBQU8sRUFBRUE7QUFBbkMsZUFQSCxDQXBKRCxDQURELENBaEJELENBREQsQ0FERDtBQTBMQTs7Ozs7Ozs7VUMzYUQscUNBQXFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGVtZXRlcmdpZnQvLi9zcmMvY29tcG9uZW50cy9jb21wb25lbnRzL21vZGFscy9CaWRORlRNb2RhbC5qc3giLCJ3ZWJwYWNrOi8vZGVtZXRlcmdpZnQvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBNb2RhbCBmcm9tICdyZWFjdC1ib290c3RyYXAvTW9kYWwnO1xuaW1wb3J0IEZvcm0gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0Zvcm0nO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdyZWFjdC1ib290c3RyYXAvQnV0dG9uJztcblxuaW1wb3J0IHsgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XG5cbmltcG9ydCBVc2VGb3JtSW5wdXQgZnJvbSAnLi4vVXNlRm9ybUlucHV0JztcbmltcG9ydCB7IGNyZWF0ZUJpZCwgUmVkdWNlQ2F0ZWdvcnkgfSBmcm9tICdAL3BhZ2VzL0V2ZW50cy90b2tlbidcbmltcG9ydCB7IEljb24gfSBmcm9tICdAL2NvbXBvbmVudHMvY29tbW9uL0ljb24nXG5pbXBvcnQgeyBnZXRDYXRlZ29yaWVzYnlldmVudGlkLCBldmVudGdldGJ5aWQgfSBmcm9tICcuLi8uLi8uLi9wYWdlcy9FdmVudHMvZXZlbnQnXG5pbXBvcnQgKiBhcyBuZWFyQVBJIGZyb20gXCJuZWFyLWFwaS1qc1wiXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCaWRORlRNb2RhbCh7XG5cdHNob3csXG5cdG9uSGlkZSxcblx0VG9BZGRyZXNzLFxuXHR0b2tlbklkLFxuXHRyZWNpZCxcblx0dHlwZSxcblx0SGlnaGVzdGJpZCxcblx0d2FsbGV0VHlwZSxcblx0ZXZlbnRJZCxcbn0pIHtcblx0Y29uc3QgW0FsZXJ0LCBzZXRBbGVydF0gPSB1c2VTdGF0ZSgnJyk7XG5cdGNvbnN0IFtBbW91bnQsIEFtb3VudElucHV0XSA9IFVzZUZvcm1JbnB1dCh7XG5cdFx0dHlwZTogJ3RleHQnLFxuXHRcdHBsYWNlaG9sZGVyOiAnQW1vdW50Jyxcblx0fSk7XG5cdGNvbnN0IFtvdGhlckNhdGVnb3J5LCBzZXRPdGhlckNhdGVnb3J5XSA9IHVzZVN0YXRlKC0xKTtcblxuXHRmdW5jdGlvbiBhY3RpdmF0ZVdhcm5pbmdNb2RhbCgpIHtcblx0XHR2YXIgYWxlcnRFTE0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFsZXJ0XCIpO1xuXHRcdGFsZXJ0RUxNLnN0eWxlID0gJ2NvbnRlbnRzJztcblx0XHRzZXRBbGVydChgQW1vdW50IGNhbm5vdCBiZSB1bmRlciAke0hpZ2hlc3RiaWR9IE5FQVJgKVxuXHR9XG5cblx0dXNlRWZmZWN0KGFzeW5jICgpID0+IHtcblx0XHRjb25zdCBib29sVHJ1ZSA9IHRydWU7XG5cdFx0d2hpbGUgKGJvb2xUcnVlKSB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRjb25zdCBjYXRlZ29yaWVzID0gYXdhaXQgZ2V0Q2F0ZWdvcmllc2J5ZXZlbnRpZChldmVudElkKTtcblx0XHRcdFx0Y29uc29sZS5sb2coXCJjYXRlZ29yaWVzIGZvciBldmVudDpcIik7XG5cdFx0XHRcdGNvbnNvbGUubG9nKGNhdGVnb3JpZXMpO1xuXHRcdFx0XHRsZXQgZXZlbnQgPSBhd2FpdCBldmVudGdldGJ5aWQoZXZlbnRJZCk7XG5cdFx0XHRcdHZhciBnb2FsID0gZXZlbnQuR29hbDtcblx0XHRcdFx0Y29uc29sZS5sb2coXCJnb2FsOlwiKTtcblx0XHRcdFx0Y29uc29sZS5sb2coZ29hbCk7XG5cdFx0XHRcdHZhciBzdW1vZm1haW4gPSAwO1xuXHRcdFx0XHR2YXIgY2F0ZWdvcmllc18gPSBjYXRlZ29yaWVzO1xuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGNhdGVnb3JpZXNfLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0c3Vtb2ZtYWluICs9IGNhdGVnb3JpZXNfW2ldLnByaWNlICogY2F0ZWdvcmllc19baV0uYW1vdW50O1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0c2V0T3RoZXJDYXRlZ29yeShnb2FsIC0gc3Vtb2ZtYWluKTtcblx0XHRcdFx0c2V0Q2F0ZWdvcmllcyhjYXRlZ29yaWVzXyk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHR9XG5cblx0fSwgW2NhdGVnb3JpZXNdKTtcblxuXHRhc3luYyBmdW5jdGlvbiBiaWRORlQoKSB7XG5cblx0XHRhd2FpdCB0b2FzdC5wcm9taXNlKENyZWF0aW5nT25BaXJUYWJsZSwge1xuXHRcdFx0cGVuZGluZzogYFVwZGF0aW5nIG9uIEFpcnRhYmxlLi4uYCxcblx0XHRcdGVycm9yOiBcIlBsZWFzZSB0cnkgYWdhaW4gbGF0ZXJcIixcblx0XHRcdHN1Y2Nlc3M6IGBVcGRhdGVkIG9uIEFpcnRhYmxlYFxuXHRcdH0pO1xuXG5cdFx0YXdhaXQgdG9hc3QucHJvbWlzZShiaWRORlRieU5FQVIsIHtcblx0XHRcdHBlbmRpbmc6IGBCaWRkaW5nLi4uYCxcblx0XHRcdGVycm9yOiBcIlBsZWFzZSB0cnkgYWdhaW4gbGF0ZXJcIixcblx0XHRcdHN1Y2Nlc3M6IGBTdWNjZXNzISEhYFxuXHRcdH0pO1xuXG5cdH1cblx0YXN5bmMgZnVuY3Rpb24gQ3JlYXRpbmdPbkFpclRhYmxlKCkge1xuXHRcdHZhciBBaXJ0YWJsZSA9IHJlcXVpcmUoJ2FpcnRhYmxlJyk7XG5cdFx0dmFyIGJhc2UgPSBuZXcgQWlydGFibGUoeyBhcGlLZXk6ICdrZXlSMVJyY2w5TzJzOWJUcycgfSkuYmFzZSgnYXBwZ2JSQ3Bia3ptZGN1Y08nKTtcblx0XHRsZXQgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xuXHRcdGF3YWl0IGJhc2UoJ3Rva2VuYmlkJykuY3JlYXRlKFtcblx0XHRcdHtcblx0XHRcdFx0XCJmaWVsZHNcIjoge1xuXHRcdFx0XHRcdFwiVG9rZW5pZFwiOiB0b2tlbklkLFxuXHRcdFx0XHRcdFwiRGF0ZVwiOiBjdXJyZW50RGF0ZSxcblx0XHRcdFx0XHRcIlVzZXJOYW1lXCI6IHdhbGxldEFjY291bnQuZ2V0QWNjb3VudElkKCkudG9TdHJpbmcoKSxcblx0XHRcdFx0XHRcIkJpZHByaWNlXCI6IEFtb3VudFxuXHRcdFx0XHR9XG5cdFx0XHR9XSk7XG5cdFx0dG9hc3Quc3VjY2VzcyhcIkJpZCBjcmVhdGVkIG9uIEFpcnRhYmxlXCIpO1xuYXdhaXQgVXBkYXRlQWlydGFibGUoKTtcblxuXHR9XG5cdGFzeW5jIGZ1bmN0aW9uIFVwZGF0ZUFpcnRhYmxlKCkge1xuXHRcdHZhciBBaXJ0YWJsZSA9IHJlcXVpcmUoJ2FpcnRhYmxlJyk7XG5cdFx0dmFyIGJhc2UgPSBuZXcgQWlydGFibGUoeyBhcGlLZXk6ICdrZXlSMVJyY2w5TzJzOWJUcycgfSkuYmFzZSgnYXBwZ2JSQ3Bia3ptZGN1Y08nKTtcblxuXHRcdC8vIGF3YWl0IGJhc2UoJ25mdGNyeXB0b3B1bmtzJykudXBkYXRlKFtcblx0XHQvLyBcdHtcblx0XHQvLyBcdFx0XCJpZFwiOiByZWNpZCxcblx0XHQvLyBcdFx0XCJmaWVsZHNcIjoge1xuXHRcdC8vIFx0XHRcdFwicHJpY2VcIjogQW1vdW50XG5cdFx0Ly8gXHRcdH1cblx0XHQvLyBcdH1cblx0XHQvLyBdKTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc2VsZWN0ZWRDYXRlZ29yeS5sZW5ndGg7IGkrKykge1xuXG5cdFx0XHRhd2FpdCAgYmFzZSgnZXZlbnRjYXRlZ29yaWVzJykuc2VsZWN0KHtcblx0XHRcdFx0ZmlsdGVyQnlGb3JtdWxhOiBgKHtpZH0gPSAnJHtzZWxlY3RlZENhdGVnb3J5W2ldfScpYCxcbiAgICAgICAgICAgICAgICBzb3J0OiBbe2ZpZWxkOiBcInByaWNlXCIsIGRpcmVjdGlvbjogXCJkZXNjXCJ9XSxcbiAgICAgICAgICAgICAgICB2aWV3OiBcIkdyaWQgdmlld1wiXG4gICAgICAgICAgICB9KS5lYWNoUGFnZShmdW5jdGlvbiBwYWdlKHJlY29yZHMsIGZldGNoTmV4dFBhZ2UpIHtcbiAgICAgICAgICAgICAgICAvLyBUaGlzIGZ1bmN0aW9uIChgcGFnZWApIHdpbGwgZ2V0IGNhbGxlZCBmb3IgZWFjaCBwYWdlIG9mIHJlY29yZHMuXG4gICAgICAgICAgICAgICAgdmFyIGFyciA9IFtdO1xuICAgICAgICAgICAgICAgIHJlY29yZHMuZm9yRWFjaChmdW5jdGlvbiAocmVjb3JkKSB7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2cocmVjb3JkKTtcblx0XHRcdFx0fSk7fSwgZnVuY3Rpb24gZG9uZShlcnIpIHtcblx0XHRcdFx0XHRpZiAoZXJyKSB7IGNvbnNvbGUuZXJyb3IoZXJyKTsgcmV0dXJuOyB9XG5cdFx0XHRcdH0pO1xuXHRcdC8vXHRhd2FpdCBSZWR1Y2VDYXRlZ29yeShzZWxlY3RlZENhdGVnb3J5W2ldKTtcblx0XHR9XG5cblx0fVxuXG5cdGFzeW5jIGZ1bmN0aW9uIGJpZE5GVGJ5TkVBUigpIHtcblx0XHRpZiAoTnVtYmVyKEFtb3VudCkgPCBOdW1iZXIoSGlnaGVzdGJpZCkpIHtcblx0XHRcdGFjdGl2YXRlV2FybmluZ01vZGFsKCk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHZhciBidXR0b25Qcm9wcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJidG4gYnRuLXByaW1hcnlcIilbMF07XG5cdFx0aWYgKHdpbmRvdy53YWxsZXRBY2NvdW50LmlzU2lnbmVkSW4oKSA9PSBmYWxzZSkge1xuXHRcdFx0YnV0dG9uUHJvcHMuaW5uZXJUZXh0ID0gXCJDb25uZWN0IHRvIE5FQVIgd2FsbGV0XCJcblx0XHRcdGF3YWl0IHRvYXN0Lndhcm4oXCJOb3QgY29ubmVjdGVkIHdpdGggTkVBUiB3YWxsZXQhIENvbm5lY3RpbmcuLi5cIik7XG5cdFx0XHRhd2FpdCB3aW5kb3cud2FsbGV0QWNjb3VudC5yZXF1ZXN0U2lnbkluKFxuXHRcdFx0XHR3aW5kb3cubmVhckNvbmZpZy5jb250cmFjdE5hbWUsXG5cdFx0XHRcdCdEZW1ldGVyR2lmdCcpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHQvLyBXZSBjYWxsIHNheSBIaSBhbmQgdGhlbiB1cGRhdGUgd2hvIHNhaWQgSGkgbGFzdC5cblx0XHQvLyB3aW5kb3cuY29udHJhY3Quc2F5SGkoKS50aGVuKHVwZGF0ZVdob1NhaWRIaSk7XG5cdFx0Y29uc3QgY29uZmlnID0ge1xuXHRcdFx0bmV0d29ya0lkOiBcInRlc3RuZXRcIixcblx0XHRcdGtleVN0b3JlOiBuZXcgbmVhckFQSS5rZXlTdG9yZXMuQnJvd3NlckxvY2FsU3RvcmFnZUtleVN0b3JlKCksXG5cdFx0XHRub2RlVXJsOiBcImh0dHBzOi8vcnBjLnRlc3RuZXQubmVhci5vcmdcIixcblx0XHRcdHdhbGxldFVybDogXCJodHRwczovL3dhbGxldC50ZXN0bmV0Lm5lYXIub3JnXCIsXG5cdFx0XHRoZWxwZXJVcmw6IFwiaHR0cHM6Ly9oZWxwZXIudGVzdG5ldC5uZWFyLm9yZ1wiLFxuXHRcdFx0ZXhwbG9yZXJVcmw6IFwiaHR0cHM6Ly9leHBsb3Jlci50ZXN0bmV0Lm5lYXIub3JnXCIsXG5cdFx0fTtcblx0XHQvLyBzZW5kcyBORUFSIHRva2Vuc1xuXHRcdGNvbnN0IG5lYXIgPSBhd2FpdCBuZWFyQVBJLmNvbm5lY3QoY29uZmlnKTtcblx0XHRjb25zdCBhY2NvdW50ID0gYXdhaXQgbmVhci5hY2NvdW50KHdhbGxldEFjY291bnQuZ2V0QWNjb3VudElkKCkpO1xuXHRcdGNvbnN0IGFtb3VudEluWW9jdG8gPSAoTnVtYmVyKEFtb3VudCkgKiAxMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwKS50b0xvY2FsZVN0cmluZygnZnVsbHdpZGUnLCB7IHVzZUdyb3VwaW5nOiBmYWxzZSB9KTtcblxuXHRcdGF3YWl0IGFjY291bnQuc2VuZE1vbmV5KFxuXHRcdFx0VG9BZGRyZXNzLCAvLyByZWNlaXZlciBhY2NvdW50XG5cdFx0XHRhbW91bnRJbllvY3RvIC8vIGFtb3VudCBpbiB5b2N0b05FQVJcblx0XHQpLnRoZW4oYXN5bmMgKCkgPT4ge1xuXHRcdFx0YXdhaXQgY3JlYXRlQmlkKHRva2VuSWQsIHdhbGxldEFjY291bnQuZ2V0QWNjb3VudElkKCkudG9TdHJpbmcoKSwgQW1vdW50KTtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc2VsZWN0ZWRDYXRlZ29yeS5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRhd2FpdCBSZWR1Y2VDYXRlZ29yeShzZWxlY3RlZENhdGVnb3J5W2ldKTtcblx0XHRcdH1cblxuXHRcdH0pLnRoZW4oKCkgPT4ge1xuXHRcdFx0d2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuXHRcdFx0d2luZG93LmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJidG4tY2xvc2VcIilbMF0uY2xpY2soKTtcblx0XHR9KVxuXHRcdFx0LmNhdGNoKChlcnJvcikgPT4ge1xuXHRcdFx0XHRjb25zb2xlLmVycm9yKFwiZXJyb3I6XCIsIGVycm9yKTtcblx0XHRcdFx0Y29uc29sZS5sb2coZXJyb3IpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9KVxuXHR9XG5cblx0Y29uc3QgW2NhdGVnb3JpZXMsIHNldENhdGVnb3JpZXNdID0gdXNlU3RhdGUoW10pO1xuXG5cblx0Y29uc3QgW2FsbFNlbGVjdGVkLCBzZXRBbGxTZWxlY3RlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cdGNvbnN0IFtvdGhlclNlbGVjdGVkLCBzZXRPdGhlclNlbGVjdGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblx0Y29uc3QgW3NlbGVjdGVkQ2F0ZWdvcnksIHNldFNlbGVjdGVkQ2F0ZWdvcnldID0gdXNlU3RhdGUoW10pO1xuXG5cdGNvbnN0IHNlbGVjdENhdGVnb3J5ID0gKGNhdGVnb3J5X2lkKSA9PiB7XG5cdFx0Y29uc29sZS5sb2coXCJjYXRlZ29yeV9pZFwiKTtcblx0XHRjb25zb2xlLmxvZyhjYXRlZ29yeV9pZCk7XG5cdFx0dmFyIHRlbXBfYXJyID0gW107XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzZWxlY3RlZENhdGVnb3J5Lmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR0ZW1wX2Fyci5wdXNoKHNlbGVjdGVkQ2F0ZWdvcnlbaV0pO1xuXHRcdH1cblx0XHR0ZW1wX2Fyci5wdXNoKGNhdGVnb3J5X2lkKTtcblx0XHRjb25zb2xlLmxvZyh0ZW1wX2Fycik7XG5cblx0XHRzZXRTZWxlY3RlZENhdGVnb3J5KHRlbXBfYXJyKTtcblx0fVxuXHRjb25zdCB1bnNlbGVjdENhdGVnb3J5ID0gKGNhdGVnb3J5X2lkKSA9PiB7XG5cdFx0dmFyIHRlbXBfYXJyID0gW107XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzZWxlY3RlZENhdGVnb3J5Lmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRpZiAoc2VsZWN0ZWRDYXRlZ29yeVtpXSAhPSBjYXRlZ29yeV9pZClcblx0XHRcdFx0dGVtcF9hcnIucHVzaChzZWxlY3RlZENhdGVnb3J5W2ldKTtcblx0XHR9XG5cdFx0Y29uc29sZS5sb2codGVtcF9hcnIpO1xuXHRcdHNldFNlbGVjdGVkQ2F0ZWdvcnkodGVtcF9hcnIpO1xuXHR9XG5cblx0Y29uc3Qgc2VsZWN0QWxsQ2F0ZWdvcnkgPSAoKSA9PiB7XG5cdFx0aWYgKGFsbFNlbGVjdGVkKSB7XG5cdFx0XHRzZXRBbGxTZWxlY3RlZChmYWxzZSk7XG5cdFx0XHRzZXRTZWxlY3RlZENhdGVnb3J5KFtdKTtcblx0XHR9IGVsc2Uge1xuXG5cdFx0XHRzZXRBbGxTZWxlY3RlZCh0cnVlKTtcblx0XHRcdHZhciB0ZW1wX2FyciA9IFtdO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBjYXRlZ29yaWVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdHRlbXBfYXJyLnB1c2goY2F0ZWdvcmllc1tpXS5pZClcblx0XHRcdH1cblx0XHRcdHRlbXBfYXJyLnB1c2goLTEpO1xuXHRcdFx0c2V0U2VsZWN0ZWRDYXRlZ29yeSh0ZW1wX2Fycik7XG5cdFx0fVxuXG5cdH1cblx0Y29uc3Qgb3RoZXJTZWxlY3QgPSAoKSA9PiB7XG5cdFx0aWYgKG90aGVyU2VsZWN0ZWQpIHtcblx0XHRcdHNldE90aGVyU2VsZWN0ZWQoZmFsc2UpO1xuXHRcdFx0dmFyIHRlbXBfYXJyID0gW107XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHNlbGVjdGVkQ2F0ZWdvcnkubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0aWYgKHNlbGVjdGVkQ2F0ZWdvcnlbaV0gIT0gLTEpXG5cdFx0XHRcdFx0dGVtcF9hcnIucHVzaChzZWxlY3RlZENhdGVnb3J5W2ldKVxuXHRcdFx0fVxuXHRcdFx0c2V0U2VsZWN0ZWRDYXRlZ29yeSh0ZW1wX2Fycik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHNldE90aGVyU2VsZWN0ZWQodHJ1ZSk7XG5cdFx0XHR2YXIgdGVtcF9hcnIgPSBbXTtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc2VsZWN0ZWRDYXRlZ29yeS5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHR0ZW1wX2Fyci5wdXNoKHNlbGVjdGVkQ2F0ZWdvcnlbaV0pXG5cdFx0XHR9XG5cdFx0XHR0ZW1wX2Fyci5wdXNoKC0xKTtcblx0XHRcdHNldFNlbGVjdGVkQ2F0ZWdvcnkodGVtcF9hcnIpO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHQ8TW9kYWxcblx0XHRcdFx0c2hvdz17c2hvd31cblx0XHRcdFx0b25IaWRlPXtvbkhpZGV9XG5cdFx0XHRcdGFyaWEtbGFiZWxsZWRieT1cImNvbnRhaW5lZC1tb2RhbC10aXRsZS12Y2VudGVyXCJcblx0XHRcdFx0Y2VudGVyZWRcblx0XHRcdD5cblx0XHRcdFx0PE1vZGFsLkhlYWRlciBjbG9zZUJ1dHRvbj5cblx0XHRcdFx0XHR7KHR5cGUgPT0gXCJDcnlwdG9wdW5rXCIpID8gKFxuXHRcdFx0XHRcdFx0PE1vZGFsLlRpdGxlIGlkPVwiY29udGFpbmVkLW1vZGFsLXRpdGxlLXZjZW50ZXJcIj5cblx0XHRcdFx0XHRcdFx0QmlkIENyeXB0b3B1bmtcblx0XHRcdFx0XHRcdDwvTW9kYWwuVGl0bGU+KSA6IChcblx0XHRcdFx0XHRcdDxNb2RhbC5UaXRsZSBpZD1cImNvbnRhaW5lZC1tb2RhbC10aXRsZS12Y2VudGVyXCI+XG5cdFx0XHRcdFx0XHRcdEJpZCBORlRcblx0XHRcdFx0XHRcdDwvTW9kYWwuVGl0bGU+XG5cdFx0XHRcdFx0KX1cblx0XHRcdFx0PC9Nb2RhbC5IZWFkZXI+XG5cdFx0XHRcdDxNb2RhbC5Cb2R5IGNsYXNzTmFtZT1cInNob3ctZ3JpZFwiPlxuXHRcdFx0XHRcdDxGb3JtPlxuXHRcdFx0XHRcdFx0PGRpdiBpZD0nYWxlcnQnIHN0eWxlPXt7IGRpc3BsYXk6ICdub25lJyB9fSBjbGFzc05hbWU9XCJhbGVydCBhbGVydC1kYW5nZXJcIiByb2xlPVwiYWxlcnRcIj5cblx0XHRcdFx0XHRcdFx0e0FsZXJ0fVxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8Rm9ybS5Hcm91cCBjbGFzc05hbWU9XCJtYi0zXCIgY29udHJvbElkPVwiZm9ybUdyb3VwTmFtZVwiPlxuXHRcdFx0XHRcdFx0XHQ8Rm9ybS5MYWJlbD5CaWQgQW1vdW50IGluIE5FQVI8L0Zvcm0uTGFiZWw+XG5cdFx0XHRcdFx0XHRcdHtBbW91bnRJbnB1dH1cblx0XHRcdFx0XHRcdDwvRm9ybS5Hcm91cD5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdzZWxlY3RDYXRlZ29yeUFsbCc+XG5cdFx0XHRcdFx0XHRcdDxoNCBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiMTBweFwiIH19PkNob29zZSB3aGVyZSB5b3Ugd2FudCB0byBnaXZlIHN1cHBvcnQ8L2g0PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgcGFkZGluZzogXCI1cHhcIiwgZGlzcGxheTogXCJmbGV4XCIsIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLCBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLCBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLCBiYWNrZ3JvdW5kOiBcImJpc3F1ZVwiLCBoZWlnaHQ6IFwiNDBweFwiLCBib3JkZXJSYWRpdXM6IFwiNXB4XCIsIG1hcmdpbkJvdHRvbTogXCIxMHB4XCIgfX0gb25DbGljaz17KCkgPT4ge1xuXG5cdFx0XHRcdFx0XHRcdFx0c2VsZWN0QWxsQ2F0ZWdvcnkoKTtcblx0XHRcdFx0XHRcdFx0fX0+XG5cdFx0XHRcdFx0XHRcdFx0PGg0IHN0eWxlPXt7IGFsaWduU2VsZjogXCJjZW50ZXJcIiwgY29sb3I6IFwiYmxhY2tcIiB9fT5TdXBwb3J0IGluIGdlbmVyYWwgPC9oND5cblx0XHRcdFx0XHRcdFx0XHR7YWxsU2VsZWN0ZWQgP1xuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBzdHlsZT17eyBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLCByaWdodDogXCIxMHB4XCIsIHRvcDogXCItN3B4XCIgfX0gPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IHN0eWxlPXt7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bWFyZ2luVG9wOiBcIjEwcHhcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBcImZsZXhcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR3aWR0aDogXCIzMnB4XCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aGVpZ2h0OiBcIjMycHhcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ym9yZGVyUmFkaXVzOiBcIjE2cHhcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiBcIiNFRUYxRjRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9fT48SWNvbiBpY29uPVwiaGVhcnRTZWxlY3RlZFwiIC8+PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj4gOlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBzdHlsZT17eyBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLCByaWdodDogXCIxMHB4XCIsIHRvcDogXCItN3B4XCIgfX0gPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IHN0eWxlPXt7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bWFyZ2luVG9wOiBcIjEwcHhcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBcImZsZXhcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR3aWR0aDogXCIzMnB4XCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aGVpZ2h0OiBcIjMycHhcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ym9yZGVyUmFkaXVzOiBcIjE2cHhcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiBcIiNFRUYxRjRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9fT48SWNvbiBpY29uPVwiaGVhcnRVbnNlbGVjdGVkXCIgLz48L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2Pn1cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdzZWxlY3RDYXRlZ29yeScgc3R5bGU9e3sgbWFyZ2luTGVmdDogXCItMTBweFwiLCBtYXJnaW5SaWdodDogXCItMTBweFwiLCBkaXNwbGF5OiBcImZsZXhcIiwgZmxleERpcmVjdGlvbjogXCJyb3dcIiwgZmxleFdyYXA6IFwid3JhcFwiIH19PlxuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0Y2F0ZWdvcmllcy5tYXAoKGNhdGVnb3J5KSA9PiAoXG5cdFx0XHRcdFx0XHRcdFx0XHQoc2VsZWN0ZWRDYXRlZ29yeS5pbmRleE9mKGNhdGVnb3J5LmlkKSAhPT0gLTEpID9cblx0XHRcdFx0XHRcdFx0XHRcdFx0KDxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiMzMlXCIsIHBhZGRpbmc6IFwiMCAxMHB4XCIsIG1hcmdpbkJvdHRvbTogXCIxMHB4XCIgfX0ga2V5PXtjYXRlZ29yeS5pZH0gb25DbGljaz17KCkgPT4gdW5zZWxlY3RDYXRlZ29yeShjYXRlZ29yeS5pZCl9PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgc3R5bGU9e3sgYmFja2dyb3VuZDogXCJ3aGl0ZVwiLCBwYWRkaW5nOiBcIjhweCAxNXB4XCIsIGJvcmRlcjogXCIxcHggc29saWQgdHJhbnNwYXJlbnRcIiwgYm9yZGVyUmFkaXVzOiBcIjVweFwiLCBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLCB9fT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxoNCBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiMTBweFwiLCBjb2xvcjogXCIjMTUxRjI4XCIsIHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT57Y2F0ZWdvcnkudGl0bGV9PC9oND5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbWcgc3JjPXtjYXRlZ29yeS5pbWFnZX0gc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBib3JkZXJSYWRpdXM6IFwiNXB4XCIsIGhlaWdodDogXCI5NHB4XCIgfX0gLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxoNSBzdHlsZT17eyBjb2xvcjogXCIjMTUxRjI4XCIsIHRleHRBbGlnbjogXCJjZW50ZXJcIiwgbWFyZ2luVG9wOiBcIjEwcHhcIiwgbGluZUhlaWdodDogXCIxNHB4XCIgfX0+e2NhdGVnb3J5LmFtb3VudCAqIGNhdGVnb3J5LnByaWNlfSBVU0Q8L2g1PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGg1IHN0eWxlPXt7IGNvbG9yOiBcIiMxNTFGMjhcIiwgdGV4dEFsaWduOiBcImNlbnRlclwiLCBsaW5lSGVpZ2h0OiBcIjE0cHhcIiB9fT4oe2NhdGVnb3J5LmFtb3VudH0gcGllY2VzKTwvaDU+XG5cblxuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBqdXN0aWZ5Q29udGVudDogXCJmbGV4LWVuZFwiIH19ICA+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgc3R5bGU9e3tcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtYXJnaW5Ub3A6IFwiMTBweFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRpc3BsYXk6IFwiZmxleFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHdpZHRoOiBcIjMycHhcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ6IFwiMzJweFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YWxpZ25JdGVtczogXCJjZW50ZXJcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRib3JkZXJSYWRpdXM6IFwiMTZweFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmQ6IFwiI0VFRjFGNFwiXG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fX0+PEljb24gaWNvbj1cImhlYXJ0U2VsZWN0ZWRcIiAvPjwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2Pilcblx0XHRcdFx0XHRcdFx0XHRcdFx0OlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQoPGRpdiBzdHlsZT17eyB3aWR0aDogXCIzMyVcIiwgcGFkZGluZzogXCIwIDEwcHhcIiwgbWFyZ2luQm90dG9tOiBcIjEwcHhcIiB9fSBrZXk9e2NhdGVnb3J5LmlkfSBvbkNsaWNrPXsoKSA9PiBzZWxlY3RDYXRlZ29yeShjYXRlZ29yeS5pZCl9PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgc3R5bGU9e3sgYmFja2dyb3VuZDogXCJ3aGl0ZVwiLCBwYWRkaW5nOiBcIjhweCAxNXB4XCIsIGJvcmRlcjogXCIxcHggc29saWQgdHJhbnNwYXJlbnRcIiwgYm9yZGVyUmFkaXVzOiBcIjVweFwiLCBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLCB9fT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxoNCBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiMTBweFwiLCBjb2xvcjogXCIjMTUxRjI4XCIsIHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT57Y2F0ZWdvcnkudGl0bGV9PC9oND5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbWcgc3JjPXtjYXRlZ29yeS5pbWFnZX0gc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBib3JkZXJSYWRpdXM6IFwiNXB4XCIsIGhlaWdodDogXCI5NHB4XCIgfX0gLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxoNSBzdHlsZT17eyBjb2xvcjogXCIjMTUxRjI4XCIsIHRleHRBbGlnbjogXCJjZW50ZXJcIiwgbWFyZ2luVG9wOiBcIjEwcHhcIiwgbGluZUhlaWdodDogXCIxNHB4XCIgfX0+e2NhdGVnb3J5LmFtb3VudCAqIGNhdGVnb3J5LnByaWNlfSBVU0Q8L2g1PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGg1IHN0eWxlPXt7IGNvbG9yOiBcIiMxNTFGMjhcIiwgdGV4dEFsaWduOiBcImNlbnRlclwiLCBsaW5lSGVpZ2h0OiBcIjE0cHhcIiB9fT4oe2NhdGVnb3J5LmFtb3VudH0gcGllY2VzKTwvaDU+XG5cblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwganVzdGlmeUNvbnRlbnQ6IFwiZmxleC1lbmRcIiB9fSA+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgc3R5bGU9e3tcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtYXJnaW5Ub3A6IFwiMTBweFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRpc3BsYXk6IFwiZmxleFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHdpZHRoOiBcIjMycHhcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ6IFwiMzJweFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YWxpZ25JdGVtczogXCJjZW50ZXJcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRib3JkZXJSYWRpdXM6IFwiMTZweFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmQ6IFwiI0VFRjFGNFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH19PjxJY29uIGljb249XCJoZWFydFVuc2VsZWN0ZWRcIiAvPjwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cblxuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PilcblxuXHRcdFx0XHRcdFx0XHRcdCkpXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0PGRpdiBzdHlsZT17eyB3aWR0aDogXCIzMyVcIiwgcGFkZGluZzogXCIwIDEwcHhcIiwgZGlzcGxheTogXCJmbGV4XCIsIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIgfX0gb25DbGljaz17KCkgPT4gb3RoZXJTZWxlY3QoKX0+XG5cdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0KGNhdGVnb3JpZXMubGVuZ3RoID4gMCkgP1xuXHRcdFx0XHRcdFx0XHRcdFx0XHQoPGRpdiBzdHlsZT17eyBiYWNrZ3JvdW5kOiBcIndoaXRlXCIsIHBhZGRpbmc6IFwiMTBweFwiLCBib3JkZXI6IFwiMXB4IHNvbGlkIHRyYW5zcGFyZW50XCIsIGJvcmRlclJhZGl1czogXCI1cHhcIiwgYWxpZ25JdGVtczogXCJjZW50ZXJcIiwgbWFyZ2luQm90dG9tOiBcIjE1cHhcIiB9fT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aDQgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBcIjEwcHhcIiwgY29sb3I6IFwiIzE1MUYyOFwiLCB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+T3RoZXIgc3VwcG9ydDwvaDQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGg1IHN0eWxlPXt7IGNvbG9yOiBcIiMxNTFGMjhcIiwgdGV4dEFsaWduOiBcImNlbnRlclwiLCBtYXJnaW5Ub3A6IFwiMTBweFwiLCBsaW5lSGVpZ2h0OiBcIjE0cHhcIiB9fT57XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvdGhlckNhdGVnb3J5XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSBVU0Q8L2g1PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdChzZWxlY3RlZENhdGVnb3J5LmluZGV4T2YoLTEpICE9PSAtMSkgPyAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGp1c3RpZnlDb250ZW50OiBcImZsZXgtZW5kXCIgfX0gPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgc3R5bGU9e3tcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1hcmdpblRvcDogXCIxMHB4XCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBcImZsZXhcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHdpZHRoOiBcIjMycHhcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGhlaWdodDogXCIzMnB4XCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ym9yZGVyUmFkaXVzOiBcIjE2cHhcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmQ6IFwiI0VFRjFGNFwiXG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9fT48SWNvbiBpY29uPVwiaGVhcnRTZWxlY3RlZFwiIC8+PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PikgOiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGp1c3RpZnlDb250ZW50OiBcImZsZXgtZW5kXCIgfX0gPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgc3R5bGU9e3tcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1hcmdpblRvcDogXCIxMHB4XCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBcImZsZXhcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHdpZHRoOiBcIjMycHhcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGhlaWdodDogXCIzMnB4XCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ym9yZGVyUmFkaXVzOiBcIjE2cHhcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmQ6IFwiI0VFRjFGNFwiXG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9fT48SWNvbiBpY29uPVwiaGVhcnRVbnNlbGVjdGVkXCIgLz48L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj4pIDogbnVsbFxuXHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkLWdyaWRcIj5cblxuXHRcdFx0XHRcdFx0XHR7KHR5cGUgPT0gXCJDcnlwdG9wdW5rXCIpID8gKFxuXHRcdFx0XHRcdFx0XHRcdDxCdXR0b24gdmFyaWFudD1cInByaW1hcnlcIiBvbkNsaWNrPXtiaWRORlR9PlxuXHRcdFx0XHRcdFx0XHRcdFx0QmlkIENyeXB0b3B1bmtcblx0XHRcdFx0XHRcdFx0XHQ8L0J1dHRvbj4pXG5cdFx0XHRcdFx0XHRcdFx0OiAoXG5cdFx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uIHZhcmlhbnQ9XCJwcmltYXJ5XCIgb25DbGljaz17YmlkTkZUfT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0QmlkIE5GVFxuXHRcdFx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvRm9ybT5cblx0XHRcdFx0PC9Nb2RhbC5Cb2R5PlxuXG5cdFx0XHQ8L01vZGFsPlxuXG5cdFx0PC8+XG5cdCk7XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSBmdW5jdGlvbigpIHsgcmV0dXJuIFwiYzI4ZGY4NjEzZTVkYTNhZDZlZjFcIjsgfSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlQ2FsbGJhY2siLCJNb2RhbCIsIkZvcm0iLCJCdXR0b24iLCJ0b2FzdCIsIlVzZUZvcm1JbnB1dCIsImNyZWF0ZUJpZCIsIlJlZHVjZUNhdGVnb3J5IiwiSWNvbiIsImdldENhdGVnb3JpZXNieWV2ZW50aWQiLCJldmVudGdldGJ5aWQiLCJuZWFyQVBJIiwiQmlkTkZUTW9kYWwiLCJzaG93Iiwib25IaWRlIiwiVG9BZGRyZXNzIiwidG9rZW5JZCIsInJlY2lkIiwidHlwZSIsIkhpZ2hlc3RiaWQiLCJ3YWxsZXRUeXBlIiwiZXZlbnRJZCIsIkFsZXJ0Iiwic2V0QWxlcnQiLCJwbGFjZWhvbGRlciIsIkFtb3VudCIsIkFtb3VudElucHV0Iiwib3RoZXJDYXRlZ29yeSIsInNldE90aGVyQ2F0ZWdvcnkiLCJhY3RpdmF0ZVdhcm5pbmdNb2RhbCIsImFsZXJ0RUxNIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInN0eWxlIiwiYm9vbFRydWUiLCJjYXRlZ29yaWVzIiwiY29uc29sZSIsImxvZyIsImV2ZW50IiwiZ29hbCIsIkdvYWwiLCJzdW1vZm1haW4iLCJjYXRlZ29yaWVzXyIsImkiLCJsZW5ndGgiLCJwcmljZSIsImFtb3VudCIsInNldENhdGVnb3JpZXMiLCJiaWRORlQiLCJwcm9taXNlIiwiQ3JlYXRpbmdPbkFpclRhYmxlIiwicGVuZGluZyIsImVycm9yIiwic3VjY2VzcyIsImJpZE5GVGJ5TkVBUiIsIkFpcnRhYmxlIiwicmVxdWlyZSIsImJhc2UiLCJhcGlLZXkiLCJjdXJyZW50RGF0ZSIsIkRhdGUiLCJjcmVhdGUiLCJ3YWxsZXRBY2NvdW50IiwiZ2V0QWNjb3VudElkIiwidG9TdHJpbmciLCJVcGRhdGVBaXJ0YWJsZSIsInNlbGVjdGVkQ2F0ZWdvcnkiLCJzZWxlY3QiLCJmaWx0ZXJCeUZvcm11bGEiLCJzb3J0IiwiZmllbGQiLCJkaXJlY3Rpb24iLCJ2aWV3IiwiZWFjaFBhZ2UiLCJwYWdlIiwicmVjb3JkcyIsImZldGNoTmV4dFBhZ2UiLCJhcnIiLCJmb3JFYWNoIiwicmVjb3JkIiwiZG9uZSIsImVyciIsIk51bWJlciIsImJ1dHRvblByb3BzIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsIndpbmRvdyIsImlzU2lnbmVkSW4iLCJpbm5lclRleHQiLCJ3YXJuIiwicmVxdWVzdFNpZ25JbiIsIm5lYXJDb25maWciLCJjb250cmFjdE5hbWUiLCJjb25maWciLCJuZXR3b3JrSWQiLCJrZXlTdG9yZSIsImtleVN0b3JlcyIsIkJyb3dzZXJMb2NhbFN0b3JhZ2VLZXlTdG9yZSIsIm5vZGVVcmwiLCJ3YWxsZXRVcmwiLCJoZWxwZXJVcmwiLCJleHBsb3JlclVybCIsImNvbm5lY3QiLCJuZWFyIiwiYWNjb3VudCIsImFtb3VudEluWW9jdG8iLCJ0b0xvY2FsZVN0cmluZyIsInVzZUdyb3VwaW5nIiwic2VuZE1vbmV5IiwidGhlbiIsImxvY2F0aW9uIiwicmVsb2FkIiwiY2xpY2siLCJjYXRjaCIsImFsbFNlbGVjdGVkIiwic2V0QWxsU2VsZWN0ZWQiLCJvdGhlclNlbGVjdGVkIiwic2V0T3RoZXJTZWxlY3RlZCIsInNldFNlbGVjdGVkQ2F0ZWdvcnkiLCJzZWxlY3RDYXRlZ29yeSIsImNhdGVnb3J5X2lkIiwidGVtcF9hcnIiLCJwdXNoIiwidW5zZWxlY3RDYXRlZ29yeSIsInNlbGVjdEFsbENhdGVnb3J5IiwiaWQiLCJvdGhlclNlbGVjdCIsImRpc3BsYXkiLCJtYXJnaW5Cb3R0b20iLCJ3aWR0aCIsInBhZGRpbmciLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJwb3NpdGlvbiIsImJhY2tncm91bmQiLCJoZWlnaHQiLCJib3JkZXJSYWRpdXMiLCJhbGlnblNlbGYiLCJjb2xvciIsInJpZ2h0IiwidG9wIiwibWFyZ2luVG9wIiwiZmxleERpcmVjdGlvbiIsIm1hcmdpbkxlZnQiLCJtYXJnaW5SaWdodCIsImZsZXhXcmFwIiwiY2F0ZWdvcnkiLCJib3JkZXIiLCJ0ZXh0QWxpZ24iLCJ0aXRsZSIsImltYWdlIiwibGluZUhlaWdodCJdLCJzb3VyY2VSb290IjoiIn0=