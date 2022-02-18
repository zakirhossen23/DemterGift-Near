"use strict";
self["webpackHotUpdatedemetergift"]("/index",{

/***/ "./src/pages/CreateEvents/index.tsx":
/*!******************************************!*\
  !*** ./src/pages/CreateEvents/index.tsx ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ CreateEvents; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/asyncToGenerator */ "./node_modules/@babel/runtime-corejs3/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/slicedToArray */ "./node_modules/@babel/runtime-corejs3/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/regenerator */ "./node_modules/@babel/runtime-corejs3/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/json/stringify */ "./node_modules/@babel/runtime-corejs3/core-js-stable/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-bootstrap/Row */ "./node_modules/react-bootstrap/esm/Row.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-bootstrap/Col */ "./node_modules/react-bootstrap/esm/Col.js");
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-bootstrap/Button */ "./node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var _components_components_UseFormInput__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/components/UseFormInput */ "./src/components/components/UseFormInput.jsx");
/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-bootstrap/Modal */ "./node_modules/react-bootstrap/esm/Modal.js");
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-bootstrap/Form */ "./node_modules/react-bootstrap/esm/Form.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/config */ "./src/config.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _services_useContract__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../services/useContract */ "./services/useContract.js");
















window.nearConfig = _config__WEBPACK_IMPORTED_MODULE_9___default()("development");
function CreateEvents() {
  var _useContract = (0,_services_useContract__WEBPACK_IMPORTED_MODULE_10__["default"])('ERC721'),
      contract = _useContract.contract; // Application initialization


  var _UseFormInput = (0,_components_components_UseFormInput__WEBPACK_IMPORTED_MODULE_7__["default"])({
    defaultValue: "",
    type: 'text',
    placeholder: 'Event Title',
    id: ''
  }),
      _UseFormInput2 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_UseFormInput, 2),
      EventTitle = _UseFormInput2[0],
      EventTitleInput = _UseFormInput2[1];

  var _UseFormInput3 = (0,_components_components_UseFormInput__WEBPACK_IMPORTED_MODULE_7__["default"])({
    defaultValue: "",
    type: 'datetime-local',
    placeholder: 'Event End Date ',
    id: 'enddate'
  }),
      _UseFormInput4 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_UseFormInput3, 2),
      EventDate = _UseFormInput4[0],
      EventDateInput = _UseFormInput4[1];

  var _UseFormInput5 = (0,_components_components_UseFormInput__WEBPACK_IMPORTED_MODULE_7__["default"])({
    defaultValue: "NEAR",
    type: 'select',
    id: 'walletType',
    select_options: [{
      value: "NEAR",
      text: "NEAR"
    }]
  }),
      _UseFormInput6 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_UseFormInput5, 2),
      EventWalletType = _UseFormInput6[0],
      EventWalletTypeInput = _UseFormInput6[1];

  var _UseFormInput7 = (0,_components_components_UseFormInput__WEBPACK_IMPORTED_MODULE_7__["default"])({
    defaultValue: "",
    type: 'text',
    placeholder: 'Wallet',
    id: 'wallet'
  }),
      _UseFormInput8 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_UseFormInput7, 2),
      EventWalletAddress = _UseFormInput8[0],
      EventWalletAddressInput = _UseFormInput8[1];

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(0),
      _useState2 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      EventGoal = _useState2[0],
      setEventGoal = _useState2[1];

  var _UseFormInput9 = (0,_components_components_UseFormInput__WEBPACK_IMPORTED_MODULE_7__["default"])({
    defaultValue: "",
    type: 'text',
    placeholder: 'Event Logo Link',
    id: 'logo'
  }),
      _UseFormInput10 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_UseFormInput9, 2),
      EventLogo = _UseFormInput10[0],
      EventLogoInput = _UseFormInput10[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]),
      _useState4 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState3, 2),
      eventCategories = _useState4[0],
      setEventCategories = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false),
      _useState6 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState5, 2),
      createCategoryModal = _useState6[0],
      setCreateCategoryModal = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(""),
      _useState8 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState7, 2),
      newCategoryTitle = _useState8[0],
      setNewCategoryTitle = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(""),
      _useState10 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState9, 2),
      newCategoryImgLink = _useState10[0],
      setNewCategoryImgLink = _useState10[1];

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(0),
      _useState12 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState11, 2),
      newCategoryPrice = _useState12[0],
      setNewCategoryPrice = _useState12[1];

  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(0),
      _useState14 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState13, 2),
      newCategoryAmount = _useState14[0],
      setNewCategoryAmount = _useState14[1];

  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(""),
      _useState16 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState15, 2),
      otherCategory = _useState16[0],
      setOtherCategory = _useState16[1];

  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(0),
      _useState18 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState17, 2),
      NearPriceUSD = _useState18[0],
      setNearPriceUSD = _useState18[1];

  function CreateEvent() {
    return _CreateEvent.apply(this, arguments);
  }

  function _CreateEvent() {
    _CreateEvent = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2() {
      return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (!(window.walletAccount.isSignedIn() == false)) {
                _context2.next = 3;
                break;
              }

              react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.warning("Please connect Near Account!");
              return _context2.abrupt("return");

            case 3:
              _context2.next = 5;
              return react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.promise(CreatingEventAirtable, {
                pending: "Event is creating on Airtable...",
                error: "Please try again later",
                success: "Event has created on Airtable!"
              });

            case 5:
              _context2.next = 7;
              return react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.promise(CreatingEvent, {
                pending: "Event is creating on Aurora...",
                error: "Please try again later",
                success: "Event has created on Aurora!"
              });

            case 7:
              document.querySelectorAll('[href="/donation"]')[0].click();

            case 8:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return _CreateEvent.apply(this, arguments);
  }

  function CreatingEventAirtable() {
    return _CreatingEventAirtable.apply(this, arguments);
  }

  function _CreatingEventAirtable() {
    _CreatingEventAirtable = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee4() {
      var Airtable, base, eventID, booltrue, i;
      return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              Airtable = __webpack_require__(/*! airtable */ "./node_modules/airtable/lib/airtable.js");
              Airtable.configure({
                endpointUrl: 'https://api.airtable.com',
                apiKey: 'keyR1Rrcl9O2s9bTs'
              });
              base = __webpack_require__(/*! airtable */ "./node_modules/airtable/lib/airtable.js").base('appgbRCpbkzmdcucO');
              eventID = 0;
              _context4.next = 6;
              return base('events').create([{
                "fields": {
                  "title": EventTitle,
                  "description": "",
                  "endDate": EventDate,
                  "Goal": EventGoal,
                  "logolink": EventLogo,
                  "wallet": EventWalletAddress,
                  "wallettype": "NEAR"
                }
              }], function (err, records) {
                if (err) {
                  console.error(err);
                  return;
                }

                records.forEach( /*#__PURE__*/function () {
                  var _ref2 = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee3(record) {
                    return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee3$(_context3) {
                      while (1) {
                        switch (_context3.prev = _context3.next) {
                          case 0:
                            eventID = record.get("id");

                          case 1:
                          case "end":
                            return _context3.stop();
                        }
                      }
                    }, _callee3);
                  }));

                  return function (_x) {
                    return _ref2.apply(this, arguments);
                  };
                }());
              });

            case 6:
              booltrue = true;

            case 7:
              if (!booltrue) {
                _context4.next = 12;
                break;
              }

              if (!(eventID != 0)) {
                _context4.next = 10;
                break;
              }

              return _context4.abrupt("break", 12);

            case 10:
              _context4.next = 7;
              break;

            case 12:
              i = 0;

            case 13:
              if (!(i < eventCategories.length)) {
                _context4.next = 19;
                break;
              }

              _context4.next = 16;
              return base('eventcategories').create([{
                "fields": {
                  "eventid": Number(eventID),
                  "title": eventCategories[i].title,
                  "price": eventCategories[i].price,
                  "amount": eventCategories[i].amount,
                  "image": eventCategories[i].image
                }
              }], function (err, records) {});

            case 16:
              i++;
              _context4.next = 13;
              break;

            case 19:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));
    return _CreatingEventAirtable.apply(this, arguments);
  }

  var CreatingEvent = /*#__PURE__*/function () {
    var _ref = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
      var createdObject, result;
      return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              //  Contract
              console.log(contract);
              createdObject = {
                Title: EventTitle,
                Date: EventDate,
                Address: EventWalletAddress,
                Goal: EventGoal
              };
              _context.next = 4;
              return contract.createEvent(_babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_3___default()(createdObject));

            case 4:
              result = _context.sent;
              console.log(result);

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function CreatingEvent() {
      return _ref.apply(this, arguments);
    };
  }();

  var formatter = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });

  var CreateCategory = function CreateCategory() {
    var new_category = {
      title: newCategoryTitle,
      price: newCategoryPrice,
      amount: newCategoryAmount,
      image: newCategoryImgLink
    };
    var temp_arr = eventCategories;
    temp_arr.push(new_category);
    var sum = 0;

    for (var i = 0; i < temp_arr.length; i++) {
      sum += temp_arr[i].price * temp_arr[i].amount;
    }

    var usdEventGoal = Number(NearPriceUSD) * Number(EventGoal);
    var TwoDecimal = formatter.format(usdEventGoal - sum);
    setOtherCategory(TwoDecimal.toString());
    setEventCategories(temp_arr);
    setCreateCategoryModal(false);
    setNewCategoryTitle("");
    setNewCategoryImgLink("");
    setNewCategoryPrice(0);
    setNewCategoryAmount(0);
  };

  var removeCategory = function removeCategory(e) {
    var category_id = e.target.getAttribute("categoryid");
    var temp_arr = [];

    for (var i = 0; i < eventCategories.length; i++) {
      if (i != category_id) {
        temp_arr.push(eventCategories[i]);
      }
    }

    setEventCategories(temp_arr);
  };

  var eventGoalChanged = function eventGoalChanged(value) {
    setEventGoal(value);
    var sum = 0;

    for (var i = 0; i < eventCategories.length; i++) {
      sum += eventCategories[i].price * eventCategories[i].amount;
    }

    setOtherCategory(EventGoal - sum);
  };

  function fetchData() {
    return _fetchData.apply(this, arguments);
  }

  function _fetchData() {
    _fetchData = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee5() {
      var nearPrice, nearCurrencyUrl, options, allnearData;
      return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              //Near currency
              nearPrice = 0;
              _context5.prev = 1;
              nearCurrencyUrl = "https://api.coinmarketcap.com/data-api/v3/cryptocurrency/market-pairs/latest?slug=near-protocol&start=1&limit=1&category=spot&sort=cmc_rank_advanced";
              options = {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                  Accept: 'application/json, text/plain, */*'
                }
              };
              _context5.next = 6;
              return fetch(nearCurrencyUrl, options).then(function (res) {
                return res.json();
              }).then(function (json) {
                return allnearData = json;
              }).catch(function (err) {
                return console.error('error:' + err);
              });

            case 6:
              nearPrice = allnearData.data.marketPairs[0].price;
              _context5.next = 12;
              break;

            case 9:
              _context5.prev = 9;
              _context5.t0 = _context5["catch"](1);
              nearPrice = 0;

            case 12:
              setNearPriceUSD(nearPrice);

            case 13:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, null, [[1, 9]]);
    }));
    return _fetchData.apply(this, arguments);
  }

  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function () {
    fetchData();
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(react__WEBPACK_IMPORTED_MODULE_5__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(react__WEBPACK_IMPORTED_MODULE_5__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_11__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_12__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
    style: {
      width: "45vw",
      background: "transparent",
      padding: "19px",
      borderRadius: "4px",
      height: "100%",
      border: "white solid"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
    style: {
      margin: "0px 0px 30px 0px"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("h1", {
    style: {
      marginBottom: "10px"
    }
  }, "Create Event")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
    style: {
      margin: "18px 0"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("h4", {
    style: {
      marginBottom: "10px"
    }
  }, "Event Title"), EventTitleInput), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
    style: {
      margin: "18px 0"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("h4", {
    style: {
      marginBottom: "10px"
    }
  }, "Event End Date"), EventDateInput), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
    style: {
      margin: "18px 0"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("h4", {
    style: {
      marginBottom: "10px"
    }
  }, "Wallet Type"), EventWalletTypeInput), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
    style: {
      margin: "18px 0"
    }
  }, EventWalletType == "NEAR" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(react__WEBPACK_IMPORTED_MODULE_5__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("h4", {
    style: {
      marginBottom: "10px"
    }
  }, "Account ID of ", EventWalletType, " wallet")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(react__WEBPACK_IMPORTED_MODULE_5__.Fragment, null, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("h4", {
    style: {
      marginBottom: "10px"
    }
  }, "Wallet Address in ", EventWalletType)), EventWalletAddressInput), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
    style: {
      margin: "18px 0"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("h4", {
    style: {
      marginBottom: "10px"
    }
  }, "Event Goal in ", EventWalletType), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_13__["default"].Control, {
    value: EventGoal,
    placeholder: "Event Goal in ".concat(EventWalletType),
    onChange: function onChange(e) {
      return eventGoalChanged(e.target.value);
    },
    type: "number",
    id: "goal"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
    style: {
      margin: "18px 0"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("h4", {
    style: {
      marginBottom: "10px"
    }
  }, "Categories for Support"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
    style: {
      marginLeft: "-10px",
      marginRight: "-10px",
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap"
    }
  }, _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_4___default()(eventCategories).call(eventCategories, function (eventCategory, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
      style: {
        width: "33%",
        padding: "0 10px",
        marginBottom: "10px"
      },
      key: index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
      style: {
        background: "white",
        padding: "8px 15px",
        border: "1px solid transparent",
        borderRadius: "5px",
        alignItems: "center"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
      className: "btn btn-icon popup-close",
      onClick: removeCategory,
      categoryid: index,
      style: {
        display: "flex",
        justifyContent: "flex-end",
        fontSize: 20,
        color: "black"
      }
    }, "X"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("h4", {
      style: {
        marginBottom: "10px",
        color: "#151F28",
        textAlign: "center"
      }
    }, eventCategory.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("img", {
      src: eventCategory.image,
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
    }, eventCategory.price * eventCategory.amount, " USD"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("h5", {
      style: {
        color: "#151F28",
        textAlign: "center",
        lineHeight: "14px"
      }
    }, "(", eventCategory.amount, " pieces)")));
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
    style: {
      width: "33%",
      padding: "0 10px",
      display: "flex",
      flexDirection: "column"
    }
  }, eventCategories.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
    style: {
      background: "white",
      padding: "10px",
      border: "1px solid transparent",
      borderRadius: "5px",
      alignItems: "center",
      height: "80px",
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
  }, otherCategory, " USD")) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
    style: {
      background: "white",
      padding: "10px",
      border: "1px solid transparent",
      borderRadius: "5px",
      alignItems: "center",
      height: "80px",
      display: "flex",
      justifyContent: "center"
    },
    onClick: function onClick() {
      return setCreateCategoryModal(true);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("h1", {
    style: {
      color: "#757575",
      textAlign: "center",
      lineHeight: "14px",
      fontSize: "50px"
    }
  }, "+"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
    style: {
      margin: "18px 0"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("h4", {
    style: {
      marginBottom: "10px"
    }
  }, "Event Logo Link"), EventLogoInput), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
    style: {
      margin: '18px 0px',
      display: 'flex',
      alignContent: 'center',
      flexDirection: 'row',
      alignItems: 'center',
      gap: '5px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("input", {
    type: "checkbox",
    id: "plugin"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("h4", null, "Generate Plugin?")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_14__["default"], {
    style: {
      margin: "17px 0 0px 0px",
      width: "100%"
    },
    onClick: CreateEvent
  }, "Create Event")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_15__["default"], {
    show: createCategoryModal,
    onHide: function onHide() {
      return setCreateCategoryModal(false);
    },
    size: "lg",
    centered: true,
    style: {
      padding: "20px"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_15__["default"].Header, {
    closeButton: true
  }, "Create a new category"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
    style: {
      margin: "20px"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
    style: {
      margin: "18px 0"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("h4", {
    style: {
      marginBottom: "10px",
      color: "black"
    }
  }, "Category Title"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_13__["default"].Control, {
    value: newCategoryTitle,
    placeholder: "Category Title",
    onChange: function onChange(e) {
      return setNewCategoryTitle(e.target.value);
    },
    type: "text",
    id: "cat_title"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
    style: {
      margin: "18px 0"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("h4", {
    style: {
      marginBottom: "10px",
      color: "black"
    }
  }, "Amount"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_13__["default"].Control, {
    value: newCategoryAmount,
    placeholder: "Amount",
    onChange: function onChange(e) {
      return setNewCategoryAmount(e.target.value);
    },
    type: "number",
    id: "cat_piece"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
    style: {
      margin: "18px 0"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("h4", {
    style: {
      marginBottom: "10px",
      color: "black"
    }
  }, "Price of A Piece"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_13__["default"].Control, {
    value: newCategoryPrice,
    placeholder: "Category Price",
    onChange: function onChange(e) {
      return setNewCategoryPrice(e.target.value);
    },
    type: "number",
    id: "cat_price"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
    style: {
      margin: "18px 0"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("h4", {
    style: {
      marginBottom: "10px",
      color: "black"
    }
  }, "Category Image Link"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_13__["default"].Control, {
    value: newCategoryImgLink,
    placeholder: "Category Image Link",
    onChange: function onChange(e) {
      return setNewCategoryImgLink(e.target.value);
    },
    type: "text",
    id: "cat_image"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_14__["default"], {
    style: {
      margin: "17px 0 0px 0px",
      width: "100%"
    },
    onClick: CreateCategory
  }, "Create Category")))));
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "900c358957b690755767"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2luZGV4LmU0OTJjOWQyZDgwNTExNDY3MDcwLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQU9BO0FBR0E7QUFHQTtBQUVBWSxNQUFNLENBQUNDLFVBQVAsR0FBb0JILDhDQUFTLENBQUMsYUFBRCxDQUE3QjtBQUNlLFNBQVNJLFlBQVQsR0FBd0I7QUFDbkMscUJBQXFCSCxrRUFBVyxDQUFDLFFBQUQsQ0FBaEM7QUFBQSxNQUFRSSxRQUFSLGdCQUFRQSxRQUFSLENBRG1DLENBRW5DOzs7QUFFQSxzQkFBc0NSLCtFQUFZLENBQUM7QUFDL0NTLElBQUFBLFlBQVksRUFBRSxFQURpQztBQUUvQ0MsSUFBQUEsSUFBSSxFQUFFLE1BRnlDO0FBRy9DQyxJQUFBQSxXQUFXLEVBQUUsYUFIa0M7QUFJL0NDLElBQUFBLEVBQUUsRUFBRTtBQUoyQyxHQUFELENBQWxEO0FBQUE7QUFBQSxNQUFPQyxVQUFQO0FBQUEsTUFBbUJDLGVBQW5COztBQU9BLHVCQUFvQ2QsK0VBQVksQ0FBQztBQUM3Q1MsSUFBQUEsWUFBWSxFQUFFLEVBRCtCO0FBRTdDQyxJQUFBQSxJQUFJLEVBQUUsZ0JBRnVDO0FBRzdDQyxJQUFBQSxXQUFXLEVBQUUsaUJBSGdDO0FBSTdDQyxJQUFBQSxFQUFFLEVBQUU7QUFKeUMsR0FBRCxDQUFoRDtBQUFBO0FBQUEsTUFBT0csU0FBUDtBQUFBLE1BQWtCQyxjQUFsQjs7QUFNQSx1QkFBZ0RoQiwrRUFBWSxDQUFDO0FBQ3pEUyxJQUFBQSxZQUFZLEVBQUUsTUFEMkM7QUFFekRDLElBQUFBLElBQUksRUFBRSxRQUZtRDtBQUd6REUsSUFBQUEsRUFBRSxFQUFFLFlBSHFEO0FBSXpESyxJQUFBQSxjQUFjLEVBQUUsQ0FBQztBQUFFQyxNQUFBQSxLQUFLLEVBQUUsTUFBVDtBQUFpQkMsTUFBQUEsSUFBSSxFQUFFO0FBQXZC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SSxlQUFXLEVBQUUscUJBRmpCO0FBR0ksWUFBUSxFQUFFLGtCQUFDb0UsQ0FBRDtBQUFBLGFBQU9uRSxxQkFBcUIsQ0FBQ21FLENBQUMsQ0FBQ0UsTUFBRixDQUFTdEYsS0FBVixDQUE1QjtBQUFBLEtBSGQ7QUFJSSxRQUFJLEVBQUUsTUFKVjtBQUtJLE1BQUUsRUFBRTtBQUxSLElBRkosQ0EvQkosZUF5Q0ksaURBQUMsK0RBQUQ7QUFBUSxTQUFLLEVBQUU7QUFBRThHLE1BQUFBLE1BQU0sRUFBRSxnQkFBVjtBQUE0Qk4sTUFBQUEsS0FBSyxFQUFFO0FBQW5DLEtBQWY7QUFBNEQsV0FBTyxFQUFFOUI7QUFBckUsdUJBekNKLENBUEosQ0EzR0YsQ0FBRixDQURKO0FBbUtIOzs7Ozs7OztVQ3JaRCxxQ0FBcUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZW1ldGVyZ2lmdC8uL3NyYy9wYWdlcy9DcmVhdGVFdmVudHMvaW5kZXgudHN4Iiwid2VicGFjazovL2RlbWV0ZXJnaWZ0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJvdyBmcm9tICdyZWFjdC1ib290c3RyYXAvUm93JztcclxuaW1wb3J0IHsgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XHJcbmltcG9ydCBDb2wgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0NvbCc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0J1dHRvbic7XHJcbmltcG9ydCBVc2VGb3JtSW5wdXQgZnJvbSAnQC9jb21wb25lbnRzL2NvbXBvbmVudHMvVXNlRm9ybUlucHV0JztcclxuaW1wb3J0IHsgY3JlYXRlRXZlbnRBUEksIGNyZWF0ZUV2ZW50Q2F0ZWdvcnlBUEkgfSBmcm9tICdAL3BhZ2VzL0V2ZW50cy9ldmVudCc7XHJcbmltcG9ydCB7IENyZWF0ZVBsdWdpbiB9IGZyb20gJ0AvcGFnZXMvRXZlbnRzL2V2ZW50JztcclxuaW1wb3J0IHsgSWNvbiB9IGZyb20gJ0AvY29tcG9uZW50cy9jb21tb24vSWNvbidcclxuaW1wb3J0IE1vZGFsIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Nb2RhbCc7XHJcbmltcG9ydCBGb3JtIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Gb3JtJztcclxuaW1wb3J0IHtcclxuICAgIEJ1aWxkZXJGaWVsZCxcclxuICAgIEJ1aWxkZXJTdWJtaXRCdXR0b24sXHJcbiAgICBCdWlsZGVyVHJhbnNhY3Rpb24sXHJcbn0gZnJvbSAnQC9tb2R1bGVzL0J1aWxkZXIvY29tcG9uZW50cydcclxuaW1wb3J0IHsgU2VsZWN0IH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgXCJyZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWVcIjtcclxuXHJcbmltcG9ydCAqIGFzIG5lYXJBUEkgZnJvbSBcIm5lYXItYXBpLWpzXCJcclxuaW1wb3J0IGdldENvbmZpZyBmcm9tIFwiQC9jb25maWdcIlxyXG5cclxuXHJcbmltcG9ydCB1c2VDb250cmFjdCBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy91c2VDb250cmFjdCc7XHJcblxyXG53aW5kb3cubmVhckNvbmZpZyA9IGdldENvbmZpZyhcImRldmVsb3BtZW50XCIpO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDcmVhdGVFdmVudHMoKSB7XHJcbiAgICBjb25zdCB7IGNvbnRyYWN0IH0gPSB1c2VDb250cmFjdCgnRVJDNzIxJyk7XHJcbiAgICAvLyBBcHBsaWNhdGlvbiBpbml0aWFsaXphdGlvblxyXG5cclxuICAgIGNvbnN0IFtFdmVudFRpdGxlLCBFdmVudFRpdGxlSW5wdXRdID0gVXNlRm9ybUlucHV0KHtcclxuICAgICAgICBkZWZhdWx0VmFsdWU6IFwiXCIsXHJcbiAgICAgICAgdHlwZTogJ3RleHQnLFxyXG4gICAgICAgIHBsYWNlaG9sZGVyOiAnRXZlbnQgVGl0bGUnLFxyXG4gICAgICAgIGlkOiAnJ1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgW0V2ZW50RGF0ZSwgRXZlbnREYXRlSW5wdXRdID0gVXNlRm9ybUlucHV0KHtcclxuICAgICAgICBkZWZhdWx0VmFsdWU6IFwiXCIsXHJcbiAgICAgICAgdHlwZTogJ2RhdGV0aW1lLWxvY2FsJyxcclxuICAgICAgICBwbGFjZWhvbGRlcjogJ0V2ZW50IEVuZCBEYXRlICcsXHJcbiAgICAgICAgaWQ6ICdlbmRkYXRlJyxcclxuICAgIH0pO1xyXG4gICAgY29uc3QgW0V2ZW50V2FsbGV0VHlwZSwgRXZlbnRXYWxsZXRUeXBlSW5wdXRdID0gVXNlRm9ybUlucHV0KHtcclxuICAgICAgICBkZWZhdWx0VmFsdWU6IFwiTkVBUlwiLFxyXG4gICAgICAgIHR5cGU6ICdzZWxlY3QnLFxyXG4gICAgICAgIGlkOiAnd2FsbGV0VHlwZScsXHJcbiAgICAgICAgc2VsZWN0X29wdGlvbnM6IFt7IHZhbHVlOiBcIk5FQVJcIiwgdGV4dDogXCJORUFSXCIgfV1cclxuICAgIH0pO1xyXG4gICAgY29uc3QgW0V2ZW50V2FsbGV0QWRkcmVzcywgRXZlbnRXYWxsZXRBZGRyZXNzSW5wdXRdID0gVXNlRm9ybUlucHV0KHtcclxuICAgICAgICBkZWZhdWx0VmFsdWU6IFwiXCIsXHJcbiAgICAgICAgdHlwZTogJ3RleHQnLFxyXG4gICAgICAgIHBsYWNlaG9sZGVyOiAnV2FsbGV0JyxcclxuICAgICAgICBpZDogJ3dhbGxldCcsXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IFtFdmVudEdvYWwsIHNldEV2ZW50R29hbF0gPSB1c2VTdGF0ZSgwKTtcclxuXHJcbiAgICBjb25zdCBbRXZlbnRMb2dvLCBFdmVudExvZ29JbnB1dF0gPSBVc2VGb3JtSW5wdXQoe1xyXG4gICAgICAgIGRlZmF1bHRWYWx1ZTogXCJcIixcclxuICAgICAgICB0eXBlOiAndGV4dCcsXHJcbiAgICAgICAgcGxhY2Vob2xkZXI6ICdFdmVudCBMb2dvIExpbmsnLFxyXG4gICAgICAgIGlkOiAnbG9nbydcclxuICAgIH0pO1xyXG4gICAgY29uc3QgW2V2ZW50Q2F0ZWdvcmllcywgc2V0RXZlbnRDYXRlZ29yaWVzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtjcmVhdGVDYXRlZ29yeU1vZGFsLCBzZXRDcmVhdGVDYXRlZ29yeU1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtuZXdDYXRlZ29yeVRpdGxlLCBzZXROZXdDYXRlZ29yeVRpdGxlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW25ld0NhdGVnb3J5SW1nTGluaywgc2V0TmV3Q2F0ZWdvcnlJbWdMaW5rXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW25ld0NhdGVnb3J5UHJpY2UsIHNldE5ld0NhdGVnb3J5UHJpY2VdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBbbmV3Q2F0ZWdvcnlBbW91bnQsIHNldE5ld0NhdGVnb3J5QW1vdW50XSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW290aGVyQ2F0ZWdvcnksIHNldE90aGVyQ2F0ZWdvcnldID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbTmVhclByaWNlVVNELCBzZXROZWFyUHJpY2VVU0RdID0gdXNlU3RhdGUoMCk7XHJcblxyXG5cclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiBDcmVhdGVFdmVudCgpIHtcclxuICAgICAgICBpZiAod2luZG93LndhbGxldEFjY291bnQuaXNTaWduZWRJbigpID09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIHRvYXN0Lndhcm5pbmcoXCJQbGVhc2UgY29ubmVjdCBOZWFyIEFjY291bnQhXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhd2FpdCB0b2FzdC5wcm9taXNlKENyZWF0aW5nRXZlbnRBaXJ0YWJsZSwge1xyXG4gICAgICAgICAgICBwZW5kaW5nOiBcIkV2ZW50IGlzIGNyZWF0aW5nIG9uIEFpcnRhYmxlLi4uXCIsXHJcbiAgICAgICAgICAgIGVycm9yOiBcIlBsZWFzZSB0cnkgYWdhaW4gbGF0ZXJcIixcclxuICAgICAgICAgICAgc3VjY2VzczogXCJFdmVudCBoYXMgY3JlYXRlZCBvbiBBaXJ0YWJsZSFcIlxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGF3YWl0IHRvYXN0LnByb21pc2UoQ3JlYXRpbmdFdmVudCwge1xyXG4gICAgICAgICAgICBwZW5kaW5nOiBcIkV2ZW50IGlzIGNyZWF0aW5nIG9uIEF1cm9yYS4uLlwiLFxyXG4gICAgICAgICAgICBlcnJvcjogXCJQbGVhc2UgdHJ5IGFnYWluIGxhdGVyXCIsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IFwiRXZlbnQgaGFzIGNyZWF0ZWQgb24gQXVyb3JhIVwiXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2hyZWY9XCIvZG9uYXRpb25cIl0nKVswXS5jbGljaygpXHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgZnVuY3Rpb24gQ3JlYXRpbmdFdmVudEFpcnRhYmxlKCkge1xyXG5cclxuICAgICAgICB2YXIgQWlydGFibGUgPSByZXF1aXJlKCdhaXJ0YWJsZScpO1xyXG4gICAgICAgIEFpcnRhYmxlLmNvbmZpZ3VyZSh7XHJcbiAgICAgICAgICAgIGVuZHBvaW50VXJsOiAnaHR0cHM6Ly9hcGkuYWlydGFibGUuY29tJyxcclxuICAgICAgICAgICAgYXBpS2V5OiAna2V5UjFScmNsOU8yczliVHMnXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3QgYmFzZSA9IHJlcXVpcmUoJ2FpcnRhYmxlJykuYmFzZSgnYXBwZ2JSQ3Bia3ptZGN1Y08nKTtcclxuICAgICAgICB2YXIgZXZlbnRJRCA9IDA7XHJcbiAgICAgICAgYXdhaXQgYmFzZSgnZXZlbnRzJykuY3JlYXRlKFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJmaWVsZHNcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgIFwidGl0bGVcIjogRXZlbnRUaXRsZSxcclxuICAgICAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJlbmREYXRlXCI6IEV2ZW50RGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICBcIkdvYWxcIjogRXZlbnRHb2FsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibG9nb2xpbmtcIjogRXZlbnRMb2dvLFxyXG4gICAgICAgICAgICAgICAgICAgIFwid2FsbGV0XCI6IEV2ZW50V2FsbGV0QWRkcmVzcyxcclxuICAgICAgICAgICAgICAgICAgICBcIndhbGxldHR5cGVcIjogXCJORUFSXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF0sIGZ1bmN0aW9uIChlcnIsIHJlY29yZHMpIHtcclxuICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJlY29yZHMuZm9yRWFjaChhc3luYyBmdW5jdGlvbiAocmVjb3JkKSB7XHJcbiAgICAgICAgICAgICAgICBldmVudElEID0gcmVjb3JkLmdldChcImlkXCIpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB2YXIgYm9vbHRydWUgPSB0cnVlO1xyXG4gICAgICAgIHdoaWxlIChib29sdHJ1ZSl7XHJcbiAgICAgICAgICAgIGlmIChldmVudElEICE9IDApe1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZXZlbnRDYXRlZ29yaWVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGF3YWl0IGJhc2UoJ2V2ZW50Y2F0ZWdvcmllcycpLmNyZWF0ZShbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJmaWVsZHNcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImV2ZW50aWRcIjogTnVtYmVyKGV2ZW50SUQpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInRpdGxlXCI6IGV2ZW50Q2F0ZWdvcmllc1tpXS50aXRsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJwcmljZVwiOiBldmVudENhdGVnb3JpZXNbaV0ucHJpY2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYW1vdW50XCI6IGV2ZW50Q2F0ZWdvcmllc1tpXS5hbW91bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaW1hZ2VcIjogZXZlbnRDYXRlZ29yaWVzW2ldLmltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLCBmdW5jdGlvbiAoZXJyLCByZWNvcmRzKSB7IH0pO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IENyZWF0aW5nRXZlbnQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgLy8gIENvbnRyYWN0XHJcbiAgICAgICAgY29uc29sZS5sb2coY29udHJhY3QpO1xyXG4gICAgICAgIGNvbnN0IGNyZWF0ZWRPYmplY3QgPSB7XHJcbiAgICAgICAgICAgIFRpdGxlOiBFdmVudFRpdGxlLFxyXG4gICAgICAgICAgICBEYXRlOiBFdmVudERhdGUsXHJcbiAgICAgICAgICAgIEFkZHJlc3M6IEV2ZW50V2FsbGV0QWRkcmVzcyxcclxuICAgICAgICAgICAgR29hbDogRXZlbnRHb2FsLFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNvbnRyYWN0LmNyZWF0ZUV2ZW50KFxyXG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeShjcmVhdGVkT2JqZWN0KVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBmb3JtYXR0ZXIgPSBuZXcgSW50bC5OdW1iZXJGb3JtYXQoJ2VuLVVTJywge1xyXG4gICAgICAgIG1pbmltdW1GcmFjdGlvbkRpZ2l0czogMixcclxuICAgICAgICBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDIsXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBDcmVhdGVDYXRlZ29yeSA9ICgpID0+IHtcclxuICAgICAgICB2YXIgbmV3X2NhdGVnb3J5ID0ge1xyXG4gICAgICAgICAgICB0aXRsZTogbmV3Q2F0ZWdvcnlUaXRsZSxcclxuICAgICAgICAgICAgcHJpY2U6IG5ld0NhdGVnb3J5UHJpY2UsXHJcbiAgICAgICAgICAgIGFtb3VudDogbmV3Q2F0ZWdvcnlBbW91bnQsXHJcbiAgICAgICAgICAgIGltYWdlOiBuZXdDYXRlZ29yeUltZ0xpbmtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHRlbXBfYXJyID0gZXZlbnRDYXRlZ29yaWVzO1xyXG4gICAgICAgIHRlbXBfYXJyLnB1c2gobmV3X2NhdGVnb3J5KTtcclxuICAgICAgICB2YXIgc3VtID0gMDtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRlbXBfYXJyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHN1bSArPSB0ZW1wX2FycltpXS5wcmljZSAqIHRlbXBfYXJyW2ldLmFtb3VudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHVzZEV2ZW50R29hbCA9IE51bWJlcihOZWFyUHJpY2VVU0QpICogTnVtYmVyKEV2ZW50R29hbCk7XHJcbiAgICAgICAgdmFyIFR3b0RlY2ltYWwgPSBmb3JtYXR0ZXIuZm9ybWF0KHVzZEV2ZW50R29hbCAtIHN1bSk7XHJcbiAgICAgICAgc2V0T3RoZXJDYXRlZ29yeShUd29EZWNpbWFsLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgIHNldEV2ZW50Q2F0ZWdvcmllcyh0ZW1wX2Fycik7XHJcbiAgICAgICAgc2V0Q3JlYXRlQ2F0ZWdvcnlNb2RhbChmYWxzZSk7XHJcbiAgICAgICAgc2V0TmV3Q2F0ZWdvcnlUaXRsZShcIlwiKTtcclxuICAgICAgICBzZXROZXdDYXRlZ29yeUltZ0xpbmsoXCJcIik7XHJcbiAgICAgICAgc2V0TmV3Q2F0ZWdvcnlQcmljZSgwKTtcclxuICAgICAgICBzZXROZXdDYXRlZ29yeUFtb3VudCgwKTtcclxuICAgIH1cclxuICAgIGNvbnN0IHJlbW92ZUNhdGVnb3J5ID0gKGUpID0+IHtcclxuICAgICAgICB2YXIgY2F0ZWdvcnlfaWQgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJjYXRlZ29yeWlkXCIpO1xyXG4gICAgICAgIHZhciB0ZW1wX2FyciA9IFtdO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZXZlbnRDYXRlZ29yaWVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChpICE9IGNhdGVnb3J5X2lkKSB7XHJcbiAgICAgICAgICAgICAgICB0ZW1wX2Fyci5wdXNoKGV2ZW50Q2F0ZWdvcmllc1tpXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0RXZlbnRDYXRlZ29yaWVzKHRlbXBfYXJyKTtcclxuICAgIH1cclxuICAgIGNvbnN0IGV2ZW50R29hbENoYW5nZWQgPSAodmFsdWUpID0+IHtcclxuICAgICAgICBzZXRFdmVudEdvYWwodmFsdWUpO1xyXG4gICAgICAgIHZhciBzdW0gPSAwO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZXZlbnRDYXRlZ29yaWVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHN1bSArPSBldmVudENhdGVnb3JpZXNbaV0ucHJpY2UgKiBldmVudENhdGVnb3JpZXNbaV0uYW1vdW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRPdGhlckNhdGVnb3J5KEV2ZW50R29hbCAtIHN1bSk7XHJcbiAgICB9XHJcbiAgICBhc3luYyBmdW5jdGlvbiBmZXRjaERhdGEoKSB7XHJcblxyXG4gICAgICAgIC8vTmVhciBjdXJyZW5jeVxyXG4gICAgICAgIHZhciBuZWFyUHJpY2UgPSAwO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHZhciBuZWFyQ3VycmVuY3lVcmwgPSBcImh0dHBzOi8vYXBpLmNvaW5tYXJrZXRjYXAuY29tL2RhdGEtYXBpL3YzL2NyeXB0b2N1cnJlbmN5L21hcmtldC1wYWlycy9sYXRlc3Q/c2x1Zz1uZWFyLXByb3RvY29sJnN0YXJ0PTEmbGltaXQ9MSZjYXRlZ29yeT1zcG90JnNvcnQ9Y21jX3JhbmtfYWR2YW5jZWRcIjtcclxuICAgICAgICAgICAgbGV0IG9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbiwgdGV4dC9wbGFpbiwgKi8qJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgdmFyIGFsbG5lYXJEYXRhO1xyXG4gICAgICAgICAgICBhd2FpdCBmZXRjaChuZWFyQ3VycmVuY3lVcmwsIG9wdGlvbnMpLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgICAgICAgICAudGhlbihqc29uID0+IGFsbG5lYXJEYXRhID0ganNvbilcclxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcignZXJyb3I6JyArIGVycikpO1xyXG4gICAgICAgICAgICBuZWFyUHJpY2UgPSBhbGxuZWFyRGF0YS5kYXRhLm1hcmtldFBhaXJzWzBdLnByaWNlO1xyXG4gICAgICAgIH0gY2F0Y2ggKGV4KSB7XHJcbiAgICAgICAgICAgIHZhciBuZWFyUHJpY2UgPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXROZWFyUHJpY2VVU0QobmVhclByaWNlKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBmZXRjaERhdGEoKTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+PD5cclxuICAgICAgICAgICAgPFJvdz5cclxuXHJcbiAgICAgICAgICAgICAgICA8Q29sID5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjQ1dndcIiwgYmFja2dyb3VuZDogXCJ0cmFuc3BhcmVudFwiLCBwYWRkaW5nOiBcIjE5cHhcIiwgYm9yZGVyUmFkaXVzOiBcIjRweFwiLCBoZWlnaHQ6IFwiMTAwJVwiLCBib3JkZXI6IFwid2hpdGUgc29saWRcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW46IFwiMHB4IDBweCAzMHB4IDBweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCIxMHB4XCIgfX0+Q3JlYXRlIEV2ZW50PC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbjogXCIxOHB4IDBcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiMTBweFwiIH19PkV2ZW50IFRpdGxlPC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtFdmVudFRpdGxlSW5wdXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW46IFwiMThweCAwXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBcIjEwcHhcIiB9fT5FdmVudCBFbmQgRGF0ZTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7RXZlbnREYXRlSW5wdXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbjogXCIxOHB4IDBcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiMTBweFwiIH19PldhbGxldCBUeXBlPC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtFdmVudFdhbGxldFR5cGVJbnB1dH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luOiBcIjE4cHggMFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge0V2ZW50V2FsbGV0VHlwZSA9PSBcIk5FQVJcIiA/ICg8PjxoNCBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiMTBweFwiIH19PkFjY291bnQgSUQgb2Yge0V2ZW50V2FsbGV0VHlwZX0gd2FsbGV0PC9oND48Lz4pIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+IDxoNCBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiMTBweFwiIH19PldhbGxldCBBZGRyZXNzIGluIHtFdmVudFdhbGxldFR5cGV9PC9oND48Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge0V2ZW50V2FsbGV0QWRkcmVzc0lucHV0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW46IFwiMThweCAwXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBcIjEwcHhcIiB9fT5FdmVudCBHb2FsIGluIHtFdmVudFdhbGxldFR5cGV9PC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17RXZlbnRHb2FsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtgRXZlbnQgR29hbCBpbiAke0V2ZW50V2FsbGV0VHlwZX1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gZXZlbnRHb2FsQ2hhbmdlZChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT17XCJudW1iZXJcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17XCJnb2FsXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW46IFwiMThweCAwXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBcIjEwcHhcIiB9fT5DYXRlZ29yaWVzIGZvciBTdXBwb3J0PC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luTGVmdDogXCItMTBweFwiLCBtYXJnaW5SaWdodDogXCItMTBweFwiLCBkaXNwbGF5OiBcImZsZXhcIiwgZmxleERpcmVjdGlvbjogXCJyb3dcIiwgZmxleFdyYXA6IFwid3JhcFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnRDYXRlZ29yaWVzLm1hcCgoZXZlbnRDYXRlZ29yeSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiMzMlXCIsIHBhZGRpbmc6IFwiMCAxMHB4XCIsIG1hcmdpbkJvdHRvbTogXCIxMHB4XCIgfX0ga2V5PXtpbmRleH0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgYmFja2dyb3VuZDogXCJ3aGl0ZVwiLCBwYWRkaW5nOiBcIjhweCAxNXB4XCIsIGJvcmRlcjogXCIxcHggc29saWQgdHJhbnNwYXJlbnRcIiwgYm9yZGVyUmFkaXVzOiBcIjVweFwiLCBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1pY29uIHBvcHVwLWNsb3NlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3JlbW92ZUNhdGVnb3J5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnlpZD17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwganVzdGlmeUNvbnRlbnQ6IFwiZmxleC1lbmRcIiwgZm9udFNpemU6IDIwLCBjb2xvcjogXCJibGFja1wiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiMTBweFwiLCBjb2xvcjogXCIjMTUxRjI4XCIsIHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT57ZXZlbnRDYXRlZ29yeS50aXRsZX08L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17ZXZlbnRDYXRlZ29yeS5pbWFnZX0gc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBib3JkZXJSYWRpdXM6IFwiNXB4XCIsIGhlaWdodDogXCI5NHB4XCIgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IHN0eWxlPXt7IGNvbG9yOiBcIiMxNTFGMjhcIiwgdGV4dEFsaWduOiBcImNlbnRlclwiLCBtYXJnaW5Ub3A6IFwiMTBweFwiLCBsaW5lSGVpZ2h0OiBcIjE0cHhcIiB9fT57ZXZlbnRDYXRlZ29yeS5wcmljZSAqIGV2ZW50Q2F0ZWdvcnkuYW1vdW50fSBVU0Q8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgc3R5bGU9e3sgY29sb3I6IFwiIzE1MUYyOFwiLCB0ZXh0QWxpZ246IFwiY2VudGVyXCIsIGxpbmVIZWlnaHQ6IFwiMTRweFwiIH19Pih7ZXZlbnRDYXRlZ29yeS5hbW91bnR9IHBpZWNlcyk8L2g1PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogXCIzMyVcIiwgcGFkZGluZzogXCIwIDEwcHhcIiwgZGlzcGxheTogXCJmbGV4XCIsIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChldmVudENhdGVnb3JpZXMubGVuZ3RoID4gMCkgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICg8ZGl2IHN0eWxlPXt7IGJhY2tncm91bmQ6IFwid2hpdGVcIiwgcGFkZGluZzogXCIxMHB4XCIsIGJvcmRlcjogXCIxcHggc29saWQgdHJhbnNwYXJlbnRcIiwgYm9yZGVyUmFkaXVzOiBcIjVweFwiLCBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLCBoZWlnaHQ6IFwiODBweFwiLCBtYXJnaW5Cb3R0b206IFwiMTVweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBcIjEwcHhcIiwgY29sb3I6IFwiIzE1MUYyOFwiLCB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+T3RoZXIgc3VwcG9ydDwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBzdHlsZT17eyBjb2xvcjogXCIjMTUxRjI4XCIsIHRleHRBbGlnbjogXCJjZW50ZXJcIiwgbWFyZ2luVG9wOiBcIjEwcHhcIiwgbGluZUhlaWdodDogXCIxNHB4XCIgfX0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3RoZXJDYXRlZ29yeVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IFVTRDwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+KSA6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBiYWNrZ3JvdW5kOiBcIndoaXRlXCIsIHBhZGRpbmc6IFwiMTBweFwiLCBib3JkZXI6IFwiMXB4IHNvbGlkIHRyYW5zcGFyZW50XCIsIGJvcmRlclJhZGl1czogXCI1cHhcIiwgYWxpZ25JdGVtczogXCJjZW50ZXJcIiwgaGVpZ2h0OiBcIjgwcHhcIiwgZGlzcGxheTogXCJmbGV4XCIsIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiIH19IG9uQ2xpY2s9eygpID0+IHNldENyZWF0ZUNhdGVnb3J5TW9kYWwodHJ1ZSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxIHN0eWxlPXt7IGNvbG9yOiBcIiM3NTc1NzVcIiwgdGV4dEFsaWduOiBcImNlbnRlclwiLCBsaW5lSGVpZ2h0OiBcIjE0cHhcIiwgZm9udFNpemU6IFwiNTBweFwiIH19Pis8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luOiBcIjE4cHggMFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCIxMHB4XCIgfX0+RXZlbnQgTG9nbyBMaW5rPC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtFdmVudExvZ29JbnB1dH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46ICcxOHB4IDBweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbkNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogJ3JvdycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhcDogJzVweCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGlkPVwicGx1Z2luXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND5HZW5lcmF0ZSBQbHVnaW4/PC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBzdHlsZT17eyBtYXJnaW46IFwiMTdweCAwIDBweCAwcHhcIiwgd2lkdGg6IFwiMTAwJVwiIH19IG9uQ2xpY2s9e0NyZWF0ZUV2ZW50fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENyZWF0ZSBFdmVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG5cclxuICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgIDxNb2RhbCBzaG93PXtjcmVhdGVDYXRlZ29yeU1vZGFsfVxyXG4gICAgICAgICAgICAgICAgb25IaWRlPXsoKSA9PiBzZXRDcmVhdGVDYXRlZ29yeU1vZGFsKGZhbHNlKX1cclxuICAgICAgICAgICAgICAgIHNpemU9J2xnJ1xyXG4gICAgICAgICAgICAgICAgY2VudGVyZWQgc3R5bGU9e3sgcGFkZGluZzogXCIyMHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICA8TW9kYWwuSGVhZGVyIGNsb3NlQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIENyZWF0ZSBhIG5ldyBjYXRlZ29yeVxyXG4gICAgICAgICAgICAgICAgPC9Nb2RhbC5IZWFkZXI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbjogXCIyMHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW46IFwiMThweCAwXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiMTBweFwiLCBjb2xvcjogXCJibGFja1wiIH19PkNhdGVnb3J5IFRpdGxlPC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e25ld0NhdGVnb3J5VGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17XCJDYXRlZ29yeSBUaXRsZVwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROZXdDYXRlZ29yeVRpdGxlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9e1widGV4dFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e1wiY2F0X3RpdGxlXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW46IFwiMThweCAwXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiMTBweFwiLCBjb2xvcjogXCJibGFja1wiIH19PkFtb3VudDwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtuZXdDYXRlZ29yeUFtb3VudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtcIkFtb3VudFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROZXdDYXRlZ29yeUFtb3VudChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPXtcIm51bWJlclwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e1wiY2F0X3BpZWNlXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW46IFwiMThweCAwXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiMTBweFwiLCBjb2xvcjogXCJibGFja1wiIH19PlByaWNlIG9mIEEgUGllY2U8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bmV3Q2F0ZWdvcnlQcmljZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtcIkNhdGVnb3J5IFByaWNlXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE5ld0NhdGVnb3J5UHJpY2UoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT17XCJudW1iZXJcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtcImNhdF9wcmljZVwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luOiBcIjE4cHggMFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBcIjEwcHhcIiwgY29sb3I6IFwiYmxhY2tcIiB9fT5DYXRlZ29yeSBJbWFnZSBMaW5rPC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e25ld0NhdGVnb3J5SW1nTGlua31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtcIkNhdGVnb3J5IEltYWdlIExpbmtcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmV3Q2F0ZWdvcnlJbWdMaW5rKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9e1widGV4dFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e1wiY2F0X2ltYWdlXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBzdHlsZT17eyBtYXJnaW46IFwiMTdweCAwIDBweCAwcHhcIiwgd2lkdGg6IFwiMTAwJVwiIH19IG9uQ2xpY2s9e0NyZWF0ZUNhdGVnb3J5fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQ3JlYXRlIENhdGVnb3J5XHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgICA8Lz48Lz5cclxuICAgICk7XHJcbn0iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSBmdW5jdGlvbigpIHsgcmV0dXJuIFwiOTAwYzM1ODk1N2I2OTA3NTU3NjdcIjsgfSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiUm93IiwidG9hc3QiLCJDb2wiLCJCdXR0b24iLCJVc2VGb3JtSW5wdXQiLCJNb2RhbCIsIkZvcm0iLCJnZXRDb25maWciLCJ1c2VDb250cmFjdCIsIndpbmRvdyIsIm5lYXJDb25maWciLCJDcmVhdGVFdmVudHMiLCJjb250cmFjdCIsImRlZmF1bHRWYWx1ZSIsInR5cGUiLCJwbGFjZWhvbGRlciIsImlkIiwiRXZlbnRUaXRsZSIsIkV2ZW50VGl0bGVJbnB1dCIsIkV2ZW50RGF0ZSIsIkV2ZW50RGF0ZUlucHV0Iiwic2VsZWN0X29wdGlvbnMiLCJ2YWx1ZSIsInRleHQiLCJFdmVudFdhbGxldFR5cGUiLCJFdmVudFdhbGxldFR5cGVJbnB1dCIsIkV2ZW50V2FsbGV0QWRkcmVzcyIsIkV2ZW50V2FsbGV0QWRkcmVzc0lucHV0IiwiRXZlbnRHb2FsIiwic2V0RXZlbnRHb2FsIiwiRXZlbnRMb2dvIiwiRXZlbnRMb2dvSW5wdXQiLCJldmVudENhdGVnb3JpZXMiLCJzZXRFdmVudENhdGVnb3JpZXMiLCJjcmVhdGVDYXRlZ29yeU1vZGFsIiwic2V0Q3JlYXRlQ2F0ZWdvcnlNb2RhbCIsIm5ld0NhdGVnb3J5VGl0bGUiLCJzZXROZXdDYXRlZ29yeVRpdGxlIiwibmV3Q2F0ZWdvcnlJbWdMaW5rIiwic2V0TmV3Q2F0ZWdvcnlJbWdMaW5rIiwibmV3Q2F0ZWdvcnlQcmljZSIsInNldE5ld0NhdGVnb3J5UHJpY2UiLCJuZXdDYXRlZ29yeUFtb3VudCIsInNldE5ld0NhdGVnb3J5QW1vdW50Iiwib3RoZXJDYXRlZ29yeSIsInNldE90aGVyQ2F0ZWdvcnkiLCJOZWFyUHJpY2VVU0QiLCJzZXROZWFyUHJpY2VVU0QiLCJDcmVhdGVFdmVudCIsIndhbGxldEFjY291bnQiLCJpc1NpZ25lZEluIiwid2FybmluZyIsInByb21pc2UiLCJDcmVhdGluZ0V2ZW50QWlydGFibGUiLCJwZW5kaW5nIiwiZXJyb3IiLCJzdWNjZXNzIiwiQ3JlYXRpbmdFdmVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImNsaWNrIiwiQWlydGFibGUiLCJyZXF1aXJlIiwiY29uZmlndXJlIiwiZW5kcG9pbnRVcmwiLCJhcGlLZXkiLCJiYXNlIiwiZXZlbnRJRCIsImNyZWF0ZSIsImVyciIsInJlY29yZHMiLCJjb25zb2xlIiwiZm9yRWFjaCIsInJlY29yZCIsImdldCIsImJvb2x0cnVlIiwiaSIsImxlbmd0aCIsIk51bWJlciIsInRpdGxlIiwicHJpY2UiLCJhbW91bnQiLCJpbWFnZSIsImxvZyIsImNyZWF0ZWRPYmplY3QiLCJUaXRsZSIsIkRhdGUiLCJBZGRyZXNzIiwiR29hbCIsImNyZWF0ZUV2ZW50IiwicmVzdWx0IiwiZm9ybWF0dGVyIiwiSW50bCIsIk51bWJlckZvcm1hdCIsIm1pbmltdW1GcmFjdGlvbkRpZ2l0cyIsIm1heGltdW1GcmFjdGlvbkRpZ2l0cyIsIkNyZWF0ZUNhdGVnb3J5IiwibmV3X2NhdGVnb3J5IiwidGVtcF9hcnIiLCJwdXNoIiwic3VtIiwidXNkRXZlbnRHb2FsIiwiVHdvRGVjaW1hbCIsImZvcm1hdCIsInRvU3RyaW5nIiwicmVtb3ZlQ2F0ZWdvcnkiLCJlIiwiY2F0ZWdvcnlfaWQiLCJ0YXJnZXQiLCJnZXRBdHRyaWJ1dGUiLCJldmVudEdvYWxDaGFuZ2VkIiwiZmV0Y2hEYXRhIiwibmVhclByaWNlIiwibmVhckN1cnJlbmN5VXJsIiwib3B0aW9ucyIsIm1ldGhvZCIsImhlYWRlcnMiLCJBY2NlcHQiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiYWxsbmVhckRhdGEiLCJjYXRjaCIsImRhdGEiLCJtYXJrZXRQYWlycyIsIndpZHRoIiwiYmFja2dyb3VuZCIsInBhZGRpbmciLCJib3JkZXJSYWRpdXMiLCJoZWlnaHQiLCJib3JkZXIiLCJtYXJnaW4iLCJtYXJnaW5Cb3R0b20iLCJtYXJnaW5MZWZ0IiwibWFyZ2luUmlnaHQiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImZsZXhXcmFwIiwiZXZlbnRDYXRlZ29yeSIsImluZGV4IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiZm9udFNpemUiLCJjb2xvciIsInRleHRBbGlnbiIsIm1hcmdpblRvcCIsImxpbmVIZWlnaHQiLCJhbGlnbkNvbnRlbnQiLCJnYXAiXSwic291cmNlUm9vdCI6IiJ9