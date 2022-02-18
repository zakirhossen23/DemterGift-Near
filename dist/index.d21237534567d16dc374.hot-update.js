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
                  "eventid": eventID,
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
/******/ 	__webpack_require__.h = function() { return "e492c9d2d80511467070"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2luZGV4LmQyMTIzNzUzNDU2N2QxNmRjMzc0LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQU9BO0FBR0E7QUFHQTtBQUVBWSxNQUFNLENBQUNDLFVBQVAsR0FBb0JILDhDQUFTLENBQUMsYUFBRCxDQUE3QjtBQUNlLFNBQVNJLFlBQVQsR0FBd0I7QUFDbkMscUJBQXFCSCxrRUFBVyxDQUFDLFFBQUQsQ0FBaEM7QUFBQSxNQUFRSSxRQUFSLGdCQUFRQSxRQUFSLENBRG1DLENBRW5DOzs7QUFFQSxzQkFBc0NSLCtFQUFZLENBQUM7QUFDL0NTLElBQUFBLFlBQVksRUFBRSxFQURpQztBQUUvQ0MsSUFBQUEsSUFBSSxFQUFFLE1BRnlDO0FBRy9DQyxJQUFBQSxXQUFXLEVBQUUsYUFIa0M7QUFJL0NDLElBQUFBLEVBQUUsRUFBRTtBQUoyQyxHQUFELENBQWxEO0FBQUE7QUFBQSxNQUFPQyxVQUFQO0FBQUEsTUFBbUJDLGVBQW5COztBQU9BLHVCQUFvQ2QsK0VBQVksQ0FBQztBQUM3Q1MsSUFBQUEsWUFBWSxFQUFFLEVBRCtCO0FBRTdDQyxJQUFBQSxJQUFJLEVBQUUsZ0JBRnVDO0FBRzdDQyxJQUFBQSxXQUFXLEVBQUUsaUJBSGdDO0FBSTdDQyxJQUFBQSxFQUFFLEVBQUU7QUFKeUMsR0FBRCxDQUFoRDtBQUFBO0FBQUEsTUFBT0csU0FBUDtBQUFBLE1BQWtCQyxjQUFsQjs7QUFNQSx1QkFBZ0RoQiwrRUFBWSxDQUFDO0FBQ3pEUyxJQUFBQSxZQUFZLEVBQUUsTUFEMkM7QUFFekRDLElBQUFBLElBQUksRUFBRSxRQUZtRDtBQUd6REUsSUFBQUEsRUFBRSxFQUFFLFlBSHFEO0FBSXpESyxJQUFBQSxjQUFjLEVBQUUsQ0FBQztBQUFFQyxNQUFBQSxLQUFLLEVBQUUsTUFBVDtBQUFpQkMsTUFBQUEsSUFBSSxFQUFFO0FBQXZC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QjtBQUdJLFlBQVEsRUFBRSxrQkFBQ29FLENBQUQ7QUFBQSxhQUFPbkUscUJBQXFCLENBQUNtRSxDQUFDLENBQUNFLE1BQUYsQ0FBU3RGLEtBQVYsQ0FBNUI7QUFBQSxLQUhkO0FBSUksUUFBSSxFQUFFLE1BSlY7QUFLSSxNQUFFLEVBQUU7QUFMUixJQUZKLENBL0JKLGVBeUNJLGlEQUFDLCtEQUFEO0FBQVEsU0FBSyxFQUFFO0FBQUU4RyxNQUFBQSxNQUFNLEVBQUUsZ0JBQVY7QUFBNEJOLE1BQUFBLEtBQUssRUFBRTtBQUFuQyxLQUFmO0FBQTRELFdBQU8sRUFBRS9CO0FBQXJFLHVCQXpDSixDQVBKLENBM0dGLENBQUYsQ0FESjtBQW1LSDs7Ozs7Ozs7VUNyWkQscUNBQXFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGVtZXRlcmdpZnQvLi9zcmMvcGFnZXMvQ3JlYXRlRXZlbnRzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9kZW1ldGVyZ2lmdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSb3cgZnJvbSAncmVhY3QtYm9vdHN0cmFwL1Jvdyc7XHJcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xyXG5pbXBvcnQgQ29sIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Db2wnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9CdXR0b24nO1xyXG5pbXBvcnQgVXNlRm9ybUlucHV0IGZyb20gJ0AvY29tcG9uZW50cy9jb21wb25lbnRzL1VzZUZvcm1JbnB1dCc7XHJcbmltcG9ydCB7IGNyZWF0ZUV2ZW50QVBJLCBjcmVhdGVFdmVudENhdGVnb3J5QVBJIH0gZnJvbSAnQC9wYWdlcy9FdmVudHMvZXZlbnQnO1xyXG5pbXBvcnQgeyBDcmVhdGVQbHVnaW4gfSBmcm9tICdAL3BhZ2VzL0V2ZW50cy9ldmVudCc7XHJcbmltcG9ydCB7IEljb24gfSBmcm9tICdAL2NvbXBvbmVudHMvY29tbW9uL0ljb24nXHJcbmltcG9ydCBNb2RhbCBmcm9tICdyZWFjdC1ib290c3RyYXAvTW9kYWwnO1xyXG5pbXBvcnQgRm9ybSBmcm9tICdyZWFjdC1ib290c3RyYXAvRm9ybSc7XHJcbmltcG9ydCB7XHJcbiAgICBCdWlsZGVyRmllbGQsXHJcbiAgICBCdWlsZGVyU3VibWl0QnV0dG9uLFxyXG4gICAgQnVpbGRlclRyYW5zYWN0aW9uLFxyXG59IGZyb20gJ0AvbW9kdWxlcy9CdWlsZGVyL2NvbXBvbmVudHMnXHJcbmltcG9ydCB7IFNlbGVjdCB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IFwicmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lXCI7XHJcblxyXG5pbXBvcnQgKiBhcyBuZWFyQVBJIGZyb20gXCJuZWFyLWFwaS1qc1wiXHJcbmltcG9ydCBnZXRDb25maWcgZnJvbSBcIkAvY29uZmlnXCJcclxuXHJcblxyXG5pbXBvcnQgdXNlQ29udHJhY3QgZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvdXNlQ29udHJhY3QnO1xyXG5cclxud2luZG93Lm5lYXJDb25maWcgPSBnZXRDb25maWcoXCJkZXZlbG9wbWVudFwiKTtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ3JlYXRlRXZlbnRzKCkge1xyXG4gICAgY29uc3QgeyBjb250cmFjdCB9ID0gdXNlQ29udHJhY3QoJ0VSQzcyMScpO1xyXG4gICAgLy8gQXBwbGljYXRpb24gaW5pdGlhbGl6YXRpb25cclxuXHJcbiAgICBjb25zdCBbRXZlbnRUaXRsZSwgRXZlbnRUaXRsZUlucHV0XSA9IFVzZUZvcm1JbnB1dCh7XHJcbiAgICAgICAgZGVmYXVsdFZhbHVlOiBcIlwiLFxyXG4gICAgICAgIHR5cGU6ICd0ZXh0JyxcclxuICAgICAgICBwbGFjZWhvbGRlcjogJ0V2ZW50IFRpdGxlJyxcclxuICAgICAgICBpZDogJydcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IFtFdmVudERhdGUsIEV2ZW50RGF0ZUlucHV0XSA9IFVzZUZvcm1JbnB1dCh7XHJcbiAgICAgICAgZGVmYXVsdFZhbHVlOiBcIlwiLFxyXG4gICAgICAgIHR5cGU6ICdkYXRldGltZS1sb2NhbCcsXHJcbiAgICAgICAgcGxhY2Vob2xkZXI6ICdFdmVudCBFbmQgRGF0ZSAnLFxyXG4gICAgICAgIGlkOiAnZW5kZGF0ZScsXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IFtFdmVudFdhbGxldFR5cGUsIEV2ZW50V2FsbGV0VHlwZUlucHV0XSA9IFVzZUZvcm1JbnB1dCh7XHJcbiAgICAgICAgZGVmYXVsdFZhbHVlOiBcIk5FQVJcIixcclxuICAgICAgICB0eXBlOiAnc2VsZWN0JyxcclxuICAgICAgICBpZDogJ3dhbGxldFR5cGUnLFxyXG4gICAgICAgIHNlbGVjdF9vcHRpb25zOiBbeyB2YWx1ZTogXCJORUFSXCIsIHRleHQ6IFwiTkVBUlwiIH1dXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IFtFdmVudFdhbGxldEFkZHJlc3MsIEV2ZW50V2FsbGV0QWRkcmVzc0lucHV0XSA9IFVzZUZvcm1JbnB1dCh7XHJcbiAgICAgICAgZGVmYXVsdFZhbHVlOiBcIlwiLFxyXG4gICAgICAgIHR5cGU6ICd0ZXh0JyxcclxuICAgICAgICBwbGFjZWhvbGRlcjogJ1dhbGxldCcsXHJcbiAgICAgICAgaWQ6ICd3YWxsZXQnLFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBbRXZlbnRHb2FsLCBzZXRFdmVudEdvYWxdID0gdXNlU3RhdGUoMCk7XHJcblxyXG4gICAgY29uc3QgW0V2ZW50TG9nbywgRXZlbnRMb2dvSW5wdXRdID0gVXNlRm9ybUlucHV0KHtcclxuICAgICAgICBkZWZhdWx0VmFsdWU6IFwiXCIsXHJcbiAgICAgICAgdHlwZTogJ3RleHQnLFxyXG4gICAgICAgIHBsYWNlaG9sZGVyOiAnRXZlbnQgTG9nbyBMaW5rJyxcclxuICAgICAgICBpZDogJ2xvZ28nXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IFtldmVudENhdGVnb3JpZXMsIHNldEV2ZW50Q2F0ZWdvcmllc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbY3JlYXRlQ2F0ZWdvcnlNb2RhbCwgc2V0Q3JlYXRlQ2F0ZWdvcnlNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbbmV3Q2F0ZWdvcnlUaXRsZSwgc2V0TmV3Q2F0ZWdvcnlUaXRsZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFtuZXdDYXRlZ29yeUltZ0xpbmssIHNldE5ld0NhdGVnb3J5SW1nTGlua10gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFtuZXdDYXRlZ29yeVByaWNlLCBzZXROZXdDYXRlZ29yeVByaWNlXSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW25ld0NhdGVnb3J5QW1vdW50LCBzZXROZXdDYXRlZ29yeUFtb3VudF0gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IFtvdGhlckNhdGVnb3J5LCBzZXRPdGhlckNhdGVnb3J5XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW05lYXJQcmljZVVTRCwgc2V0TmVhclByaWNlVVNEXSA9IHVzZVN0YXRlKDApO1xyXG5cclxuXHJcblxyXG4gICAgYXN5bmMgZnVuY3Rpb24gQ3JlYXRlRXZlbnQoKSB7XHJcbiAgICAgICAgaWYgKHdpbmRvdy53YWxsZXRBY2NvdW50LmlzU2lnbmVkSW4oKSA9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICB0b2FzdC53YXJuaW5nKFwiUGxlYXNlIGNvbm5lY3QgTmVhciBBY2NvdW50IVwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYXdhaXQgdG9hc3QucHJvbWlzZShDcmVhdGluZ0V2ZW50QWlydGFibGUsIHtcclxuICAgICAgICAgICAgcGVuZGluZzogXCJFdmVudCBpcyBjcmVhdGluZyBvbiBBaXJ0YWJsZS4uLlwiLFxyXG4gICAgICAgICAgICBlcnJvcjogXCJQbGVhc2UgdHJ5IGFnYWluIGxhdGVyXCIsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IFwiRXZlbnQgaGFzIGNyZWF0ZWQgb24gQWlydGFibGUhXCJcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBhd2FpdCB0b2FzdC5wcm9taXNlKENyZWF0aW5nRXZlbnQsIHtcclxuICAgICAgICAgICAgcGVuZGluZzogXCJFdmVudCBpcyBjcmVhdGluZyBvbiBBdXJvcmEuLi5cIixcclxuICAgICAgICAgICAgZXJyb3I6IFwiUGxlYXNlIHRyeSBhZ2FpbiBsYXRlclwiLFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBcIkV2ZW50IGhhcyBjcmVhdGVkIG9uIEF1cm9yYSFcIlxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tocmVmPVwiL2RvbmF0aW9uXCJdJylbMF0uY2xpY2soKVxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGZ1bmN0aW9uIENyZWF0aW5nRXZlbnRBaXJ0YWJsZSgpIHtcclxuXHJcbiAgICAgICAgdmFyIEFpcnRhYmxlID0gcmVxdWlyZSgnYWlydGFibGUnKTtcclxuICAgICAgICBBaXJ0YWJsZS5jb25maWd1cmUoe1xyXG4gICAgICAgICAgICBlbmRwb2ludFVybDogJ2h0dHBzOi8vYXBpLmFpcnRhYmxlLmNvbScsXHJcbiAgICAgICAgICAgIGFwaUtleTogJ2tleVIxUnJjbDlPMnM5YlRzJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IGJhc2UgPSByZXF1aXJlKCdhaXJ0YWJsZScpLmJhc2UoJ2FwcGdiUkNwYmt6bWRjdWNPJyk7XHJcbiAgICAgICAgdmFyIGV2ZW50SUQgPSAwO1xyXG4gICAgICAgIGF3YWl0IGJhc2UoJ2V2ZW50cycpLmNyZWF0ZShbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwiZmllbGRzXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICBcInRpdGxlXCI6IEV2ZW50VGl0bGUsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZW5kRGF0ZVwiOiBFdmVudERhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJHb2FsXCI6IEV2ZW50R29hbCxcclxuICAgICAgICAgICAgICAgICAgICBcImxvZ29saW5rXCI6IEV2ZW50TG9nbyxcclxuICAgICAgICAgICAgICAgICAgICBcIndhbGxldFwiOiBFdmVudFdhbGxldEFkZHJlc3MsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ3YWxsZXR0eXBlXCI6IFwiTkVBUlwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdLCBmdW5jdGlvbiAoZXJyLCByZWNvcmRzKSB7XHJcbiAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZWNvcmRzLmZvckVhY2goYXN5bmMgZnVuY3Rpb24gKHJlY29yZCkge1xyXG4gICAgICAgICAgICAgICAgZXZlbnRJRCA9IHJlY29yZC5nZXQoXCJpZFwiKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdmFyIGJvb2x0cnVlID0gdHJ1ZTtcclxuICAgICAgICB3aGlsZSAoYm9vbHRydWUpe1xyXG4gICAgICAgICAgICBpZiAoZXZlbnRJRCAhPSAwKXtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGV2ZW50Q2F0ZWdvcmllcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBhd2FpdCBiYXNlKCdldmVudGNhdGVnb3JpZXMnKS5jcmVhdGUoW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiZmllbGRzXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJldmVudGlkXCI6IGV2ZW50SUQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidGl0bGVcIjogZXZlbnRDYXRlZ29yaWVzW2ldLnRpdGxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInByaWNlXCI6IGV2ZW50Q2F0ZWdvcmllc1tpXS5wcmljZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJhbW91bnRcIjogZXZlbnRDYXRlZ29yaWVzW2ldLmFtb3VudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJpbWFnZVwiOiBldmVudENhdGVnb3JpZXNbaV0uaW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sIGZ1bmN0aW9uIChlcnIsIHJlY29yZHMpIHsgfSk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgQ3JlYXRpbmdFdmVudCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICAvLyAgQ29udHJhY3RcclxuICAgICAgICBjb25zb2xlLmxvZyhjb250cmFjdCk7XHJcbiAgICAgICAgY29uc3QgY3JlYXRlZE9iamVjdCA9IHtcclxuICAgICAgICAgICAgVGl0bGU6IEV2ZW50VGl0bGUsXHJcbiAgICAgICAgICAgIERhdGU6IEV2ZW50RGF0ZSxcclxuICAgICAgICAgICAgQWRkcmVzczogRXZlbnRXYWxsZXRBZGRyZXNzLFxyXG4gICAgICAgICAgICBHb2FsOiBFdmVudEdvYWwsXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgY29udHJhY3QuY3JlYXRlRXZlbnQoXHJcbiAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KGNyZWF0ZWRPYmplY3QpXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGZvcm1hdHRlciA9IG5ldyBJbnRsLk51bWJlckZvcm1hdCgnZW4tVVMnLCB7XHJcbiAgICAgICAgbWluaW11bUZyYWN0aW9uRGlnaXRzOiAyLFxyXG4gICAgICAgIG1heGltdW1GcmFjdGlvbkRpZ2l0czogMixcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IENyZWF0ZUNhdGVnb3J5ID0gKCkgPT4ge1xyXG4gICAgICAgIHZhciBuZXdfY2F0ZWdvcnkgPSB7XHJcbiAgICAgICAgICAgIHRpdGxlOiBuZXdDYXRlZ29yeVRpdGxlLFxyXG4gICAgICAgICAgICBwcmljZTogbmV3Q2F0ZWdvcnlQcmljZSxcclxuICAgICAgICAgICAgYW1vdW50OiBuZXdDYXRlZ29yeUFtb3VudCxcclxuICAgICAgICAgICAgaW1hZ2U6IG5ld0NhdGVnb3J5SW1nTGlua1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgdGVtcF9hcnIgPSBldmVudENhdGVnb3JpZXM7XHJcbiAgICAgICAgdGVtcF9hcnIucHVzaChuZXdfY2F0ZWdvcnkpO1xyXG4gICAgICAgIHZhciBzdW0gPSAwO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGVtcF9hcnIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgc3VtICs9IHRlbXBfYXJyW2ldLnByaWNlICogdGVtcF9hcnJbaV0uYW1vdW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgdXNkRXZlbnRHb2FsID0gTnVtYmVyKE5lYXJQcmljZVVTRCkgKiBOdW1iZXIoRXZlbnRHb2FsKTtcclxuICAgICAgICB2YXIgVHdvRGVjaW1hbCA9IGZvcm1hdHRlci5mb3JtYXQodXNkRXZlbnRHb2FsIC0gc3VtKTtcclxuICAgICAgICBzZXRPdGhlckNhdGVnb3J5KFR3b0RlY2ltYWwudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgc2V0RXZlbnRDYXRlZ29yaWVzKHRlbXBfYXJyKTtcclxuICAgICAgICBzZXRDcmVhdGVDYXRlZ29yeU1vZGFsKGZhbHNlKTtcclxuICAgICAgICBzZXROZXdDYXRlZ29yeVRpdGxlKFwiXCIpO1xyXG4gICAgICAgIHNldE5ld0NhdGVnb3J5SW1nTGluayhcIlwiKTtcclxuICAgICAgICBzZXROZXdDYXRlZ29yeVByaWNlKDApO1xyXG4gICAgICAgIHNldE5ld0NhdGVnb3J5QW1vdW50KDApO1xyXG4gICAgfVxyXG4gICAgY29uc3QgcmVtb3ZlQ2F0ZWdvcnkgPSAoZSkgPT4ge1xyXG4gICAgICAgIHZhciBjYXRlZ29yeV9pZCA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImNhdGVnb3J5aWRcIik7XHJcbiAgICAgICAgdmFyIHRlbXBfYXJyID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBldmVudENhdGVnb3JpZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGkgIT0gY2F0ZWdvcnlfaWQpIHtcclxuICAgICAgICAgICAgICAgIHRlbXBfYXJyLnB1c2goZXZlbnRDYXRlZ29yaWVzW2ldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRFdmVudENhdGVnb3JpZXModGVtcF9hcnIpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgZXZlbnRHb2FsQ2hhbmdlZCA9ICh2YWx1ZSkgPT4ge1xyXG4gICAgICAgIHNldEV2ZW50R29hbCh2YWx1ZSk7XHJcbiAgICAgICAgdmFyIHN1bSA9IDA7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBldmVudENhdGVnb3JpZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgc3VtICs9IGV2ZW50Q2F0ZWdvcmllc1tpXS5wcmljZSAqIGV2ZW50Q2F0ZWdvcmllc1tpXS5hbW91bnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldE90aGVyQ2F0ZWdvcnkoRXZlbnRHb2FsIC0gc3VtKTtcclxuICAgIH1cclxuICAgIGFzeW5jIGZ1bmN0aW9uIGZldGNoRGF0YSgpIHtcclxuXHJcbiAgICAgICAgLy9OZWFyIGN1cnJlbmN5XHJcbiAgICAgICAgdmFyIG5lYXJQcmljZSA9IDA7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgdmFyIG5lYXJDdXJyZW5jeVVybCA9IFwiaHR0cHM6Ly9hcGkuY29pbm1hcmtldGNhcC5jb20vZGF0YS1hcGkvdjMvY3J5cHRvY3VycmVuY3kvbWFya2V0LXBhaXJzL2xhdGVzdD9zbHVnPW5lYXItcHJvdG9jb2wmc3RhcnQ9MSZsaW1pdD0xJmNhdGVnb3J5PXNwb3Qmc29ydD1jbWNfcmFua19hZHZhbmNlZFwiO1xyXG4gICAgICAgICAgICBsZXQgb3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgICAgICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uLCB0ZXh0L3BsYWluLCAqLyonXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB2YXIgYWxsbmVhckRhdGE7XHJcbiAgICAgICAgICAgIGF3YWl0IGZldGNoKG5lYXJDdXJyZW5jeVVybCwgb3B0aW9ucykudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuICAgICAgICAgICAgICAgIC50aGVuKGpzb24gPT4gYWxsbmVhckRhdGEgPSBqc29uKVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKCdlcnJvcjonICsgZXJyKSk7XHJcbiAgICAgICAgICAgIG5lYXJQcmljZSA9IGFsbG5lYXJEYXRhLmRhdGEubWFya2V0UGFpcnNbMF0ucHJpY2U7XHJcbiAgICAgICAgfSBjYXRjaCAoZXgpIHtcclxuICAgICAgICAgICAgdmFyIG5lYXJQcmljZSA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldE5lYXJQcmljZVVTRChuZWFyUHJpY2UpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGZldGNoRGF0YSgpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD48PlxyXG4gICAgICAgICAgICA8Um93PlxyXG5cclxuICAgICAgICAgICAgICAgIDxDb2wgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiNDV2d1wiLCBiYWNrZ3JvdW5kOiBcInRyYW5zcGFyZW50XCIsIHBhZGRpbmc6IFwiMTlweFwiLCBib3JkZXJSYWRpdXM6IFwiNHB4XCIsIGhlaWdodDogXCIxMDAlXCIsIGJvcmRlcjogXCJ3aGl0ZSBzb2xpZFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbjogXCIwcHggMHB4IDMwcHggMHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDEgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBcIjEwcHhcIiB9fT5DcmVhdGUgRXZlbnQ8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luOiBcIjE4cHggMFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCIxMHB4XCIgfX0+RXZlbnQgVGl0bGU8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge0V2ZW50VGl0bGVJbnB1dH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbjogXCIxOHB4IDBcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiMTBweFwiIH19PkV2ZW50IEVuZCBEYXRlPC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtFdmVudERhdGVJbnB1dH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luOiBcIjE4cHggMFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCIxMHB4XCIgfX0+V2FsbGV0IFR5cGU8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge0V2ZW50V2FsbGV0VHlwZUlucHV0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW46IFwiMThweCAwXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7RXZlbnRXYWxsZXRUeXBlID09IFwiTkVBUlwiID8gKDw+PGg0IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCIxMHB4XCIgfX0+QWNjb3VudCBJRCBvZiB7RXZlbnRXYWxsZXRUeXBlfSB3YWxsZXQ8L2g0PjwvPikgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD4gPGg0IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCIxMHB4XCIgfX0+V2FsbGV0IEFkZHJlc3MgaW4ge0V2ZW50V2FsbGV0VHlwZX08L2g0PjwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7RXZlbnRXYWxsZXRBZGRyZXNzSW5wdXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbjogXCIxOHB4IDBcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiMTBweFwiIH19PkV2ZW50IEdvYWwgaW4ge0V2ZW50V2FsbGV0VHlwZX08L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtFdmVudEdvYWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2BFdmVudCBHb2FsIGluICR7RXZlbnRXYWxsZXRUeXBlfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBldmVudEdvYWxDaGFuZ2VkKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPXtcIm51bWJlclwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtcImdvYWxcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbjogXCIxOHB4IDBcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiMTBweFwiIH19PkNhdGVnb3JpZXMgZm9yIFN1cHBvcnQ8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5MZWZ0OiBcIi0xMHB4XCIsIG1hcmdpblJpZ2h0OiBcIi0xMHB4XCIsIGRpc3BsYXk6IFwiZmxleFwiLCBmbGV4RGlyZWN0aW9uOiBcInJvd1wiLCBmbGV4V3JhcDogXCJ3cmFwXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudENhdGVnb3JpZXMubWFwKChldmVudENhdGVnb3J5LCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogXCIzMyVcIiwgcGFkZGluZzogXCIwIDEwcHhcIiwgbWFyZ2luQm90dG9tOiBcIjEwcHhcIiB9fSBrZXk9e2luZGV4fSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBiYWNrZ3JvdW5kOiBcIndoaXRlXCIsIHBhZGRpbmc6IFwiOHB4IDE1cHhcIiwgYm9yZGVyOiBcIjFweCBzb2xpZCB0cmFuc3BhcmVudFwiLCBib3JkZXJSYWRpdXM6IFwiNXB4XCIsIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLWljb24gcG9wdXAtY2xvc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17cmVtb3ZlQ2F0ZWdvcnl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeWlkPXtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBqdXN0aWZ5Q29udGVudDogXCJmbGV4LWVuZFwiLCBmb250U2l6ZTogMjAsIGNvbG9yOiBcImJsYWNrXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCIxMHB4XCIsIGNvbG9yOiBcIiMxNTFGMjhcIiwgdGV4dEFsaWduOiBcImNlbnRlclwiIH19PntldmVudENhdGVnb3J5LnRpdGxlfTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtldmVudENhdGVnb3J5LmltYWdlfSBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGJvcmRlclJhZGl1czogXCI1cHhcIiwgaGVpZ2h0OiBcIjk0cHhcIiB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgc3R5bGU9e3sgY29sb3I6IFwiIzE1MUYyOFwiLCB0ZXh0QWxpZ246IFwiY2VudGVyXCIsIG1hcmdpblRvcDogXCIxMHB4XCIsIGxpbmVIZWlnaHQ6IFwiMTRweFwiIH19PntldmVudENhdGVnb3J5LnByaWNlICogZXZlbnRDYXRlZ29yeS5hbW91bnR9IFVTRDwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBzdHlsZT17eyBjb2xvcjogXCIjMTUxRjI4XCIsIHRleHRBbGlnbjogXCJjZW50ZXJcIiwgbGluZUhlaWdodDogXCIxNHB4XCIgfX0+KHtldmVudENhdGVnb3J5LmFtb3VudH0gcGllY2VzKTwvaDU+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjMzJVwiLCBwYWRkaW5nOiBcIjAgMTBweFwiLCBkaXNwbGF5OiBcImZsZXhcIiwgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGV2ZW50Q2F0ZWdvcmllcy5sZW5ndGggPiAwKSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKDxkaXYgc3R5bGU9e3sgYmFja2dyb3VuZDogXCJ3aGl0ZVwiLCBwYWRkaW5nOiBcIjEwcHhcIiwgYm9yZGVyOiBcIjFweCBzb2xpZCB0cmFuc3BhcmVudFwiLCBib3JkZXJSYWRpdXM6IFwiNXB4XCIsIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsIGhlaWdodDogXCI4MHB4XCIsIG1hcmdpbkJvdHRvbTogXCIxNXB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiMTBweFwiLCBjb2xvcjogXCIjMTUxRjI4XCIsIHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5PdGhlciBzdXBwb3J0PC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IHN0eWxlPXt7IGNvbG9yOiBcIiMxNTFGMjhcIiwgdGV4dEFsaWduOiBcImNlbnRlclwiLCBtYXJnaW5Ub3A6IFwiMTBweFwiLCBsaW5lSGVpZ2h0OiBcIjE0cHhcIiB9fT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdGhlckNhdGVnb3J5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gVVNEPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4pIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGJhY2tncm91bmQ6IFwid2hpdGVcIiwgcGFkZGluZzogXCIxMHB4XCIsIGJvcmRlcjogXCIxcHggc29saWQgdHJhbnNwYXJlbnRcIiwgYm9yZGVyUmFkaXVzOiBcIjVweFwiLCBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLCBoZWlnaHQ6IFwiODBweFwiLCBkaXNwbGF5OiBcImZsZXhcIiwganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIgfX0gb25DbGljaz17KCkgPT4gc2V0Q3JlYXRlQ2F0ZWdvcnlNb2RhbCh0cnVlKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDEgc3R5bGU9e3sgY29sb3I6IFwiIzc1NzU3NVwiLCB0ZXh0QWxpZ246IFwiY2VudGVyXCIsIGxpbmVIZWlnaHQ6IFwiMTRweFwiLCBmb250U2l6ZTogXCI1MHB4XCIgfX0+KzwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW46IFwiMThweCAwXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBcIjEwcHhcIiB9fT5FdmVudCBMb2dvIExpbms8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge0V2ZW50TG9nb0lucHV0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogJzE4cHggMHB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduQ29udGVudDogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FwOiAnNXB4J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJwbHVnaW5cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PkdlbmVyYXRlIFBsdWdpbj88L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHN0eWxlPXt7IG1hcmdpbjogXCIxN3B4IDAgMHB4IDBweFwiLCB3aWR0aDogXCIxMDAlXCIgfX0gb25DbGljaz17Q3JlYXRlRXZlbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ3JlYXRlIEV2ZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcblxyXG4gICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgPE1vZGFsIHNob3c9e2NyZWF0ZUNhdGVnb3J5TW9kYWx9XHJcbiAgICAgICAgICAgICAgICBvbkhpZGU9eygpID0+IHNldENyZWF0ZUNhdGVnb3J5TW9kYWwoZmFsc2UpfVxyXG4gICAgICAgICAgICAgICAgc2l6ZT0nbGcnXHJcbiAgICAgICAgICAgICAgICBjZW50ZXJlZCBzdHlsZT17eyBwYWRkaW5nOiBcIjIwcHhcIiB9fT5cclxuICAgICAgICAgICAgICAgIDxNb2RhbC5IZWFkZXIgY2xvc2VCdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgQ3JlYXRlIGEgbmV3IGNhdGVnb3J5XHJcbiAgICAgICAgICAgICAgICA8L01vZGFsLkhlYWRlcj5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luOiBcIjIwcHhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbjogXCIxOHB4IDBcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCIxMHB4XCIsIGNvbG9yOiBcImJsYWNrXCIgfX0+Q2F0ZWdvcnkgVGl0bGU8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bmV3Q2F0ZWdvcnlUaXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtcIkNhdGVnb3J5IFRpdGxlXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE5ld0NhdGVnb3J5VGl0bGUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT17XCJ0ZXh0XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17XCJjYXRfdGl0bGVcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbjogXCIxOHB4IDBcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCIxMHB4XCIsIGNvbG9yOiBcImJsYWNrXCIgfX0+QW1vdW50PC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e25ld0NhdGVnb3J5QW1vdW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e1wiQW1vdW50XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE5ld0NhdGVnb3J5QW1vdW50KGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9e1wibnVtYmVyXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17XCJjYXRfcGllY2VcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbjogXCIxOHB4IDBcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCIxMHB4XCIsIGNvbG9yOiBcImJsYWNrXCIgfX0+UHJpY2Ugb2YgQSBQaWVjZTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtuZXdDYXRlZ29yeVByaWNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e1wiQ2F0ZWdvcnkgUHJpY2VcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmV3Q2F0ZWdvcnlQcmljZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPXtcIm51bWJlclwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e1wiY2F0X3ByaWNlXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW46IFwiMThweCAwXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiMTBweFwiLCBjb2xvcjogXCJibGFja1wiIH19PkNhdGVnb3J5IEltYWdlIExpbms8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bmV3Q2F0ZWdvcnlJbWdMaW5rfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e1wiQ2F0ZWdvcnkgSW1hZ2UgTGlua1wifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROZXdDYXRlZ29yeUltZ0xpbmsoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT17XCJ0ZXh0XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17XCJjYXRfaW1hZ2VcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHN0eWxlPXt7IG1hcmdpbjogXCIxN3B4IDAgMHB4IDBweFwiLCB3aWR0aDogXCIxMDAlXCIgfX0gb25DbGljaz17Q3JlYXRlQ2F0ZWdvcnl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDcmVhdGUgQ2F0ZWdvcnlcclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L01vZGFsPlxyXG4gICAgICAgIDwvPjwvPlxyXG4gICAgKTtcclxufSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gXCJlNDkyYzlkMmQ4MDUxMTQ2NzA3MFwiOyB9Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJSb3ciLCJ0b2FzdCIsIkNvbCIsIkJ1dHRvbiIsIlVzZUZvcm1JbnB1dCIsIk1vZGFsIiwiRm9ybSIsImdldENvbmZpZyIsInVzZUNvbnRyYWN0Iiwid2luZG93IiwibmVhckNvbmZpZyIsIkNyZWF0ZUV2ZW50cyIsImNvbnRyYWN0IiwiZGVmYXVsdFZhbHVlIiwidHlwZSIsInBsYWNlaG9sZGVyIiwiaWQiLCJFdmVudFRpdGxlIiwiRXZlbnRUaXRsZUlucHV0IiwiRXZlbnREYXRlIiwiRXZlbnREYXRlSW5wdXQiLCJzZWxlY3Rfb3B0aW9ucyIsInZhbHVlIiwidGV4dCIsIkV2ZW50V2FsbGV0VHlwZSIsIkV2ZW50V2FsbGV0VHlwZUlucHV0IiwiRXZlbnRXYWxsZXRBZGRyZXNzIiwiRXZlbnRXYWxsZXRBZGRyZXNzSW5wdXQiLCJFdmVudEdvYWwiLCJzZXRFdmVudEdvYWwiLCJFdmVudExvZ28iLCJFdmVudExvZ29JbnB1dCIsImV2ZW50Q2F0ZWdvcmllcyIsInNldEV2ZW50Q2F0ZWdvcmllcyIsImNyZWF0ZUNhdGVnb3J5TW9kYWwiLCJzZXRDcmVhdGVDYXRlZ29yeU1vZGFsIiwibmV3Q2F0ZWdvcnlUaXRsZSIsInNldE5ld0NhdGVnb3J5VGl0bGUiLCJuZXdDYXRlZ29yeUltZ0xpbmsiLCJzZXROZXdDYXRlZ29yeUltZ0xpbmsiLCJuZXdDYXRlZ29yeVByaWNlIiwic2V0TmV3Q2F0ZWdvcnlQcmljZSIsIm5ld0NhdGVnb3J5QW1vdW50Iiwic2V0TmV3Q2F0ZWdvcnlBbW91bnQiLCJvdGhlckNhdGVnb3J5Iiwic2V0T3RoZXJDYXRlZ29yeSIsIk5lYXJQcmljZVVTRCIsInNldE5lYXJQcmljZVVTRCIsIkNyZWF0ZUV2ZW50Iiwid2FsbGV0QWNjb3VudCIsImlzU2lnbmVkSW4iLCJ3YXJuaW5nIiwicHJvbWlzZSIsIkNyZWF0aW5nRXZlbnRBaXJ0YWJsZSIsInBlbmRpbmciLCJlcnJvciIsInN1Y2Nlc3MiLCJDcmVhdGluZ0V2ZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY2xpY2siLCJBaXJ0YWJsZSIsInJlcXVpcmUiLCJjb25maWd1cmUiLCJlbmRwb2ludFVybCIsImFwaUtleSIsImJhc2UiLCJldmVudElEIiwiY3JlYXRlIiwiZXJyIiwicmVjb3JkcyIsImNvbnNvbGUiLCJmb3JFYWNoIiwicmVjb3JkIiwiZ2V0IiwiYm9vbHRydWUiLCJpIiwibGVuZ3RoIiwidGl0bGUiLCJwcmljZSIsImFtb3VudCIsImltYWdlIiwibG9nIiwiY3JlYXRlZE9iamVjdCIsIlRpdGxlIiwiRGF0ZSIsIkFkZHJlc3MiLCJHb2FsIiwiY3JlYXRlRXZlbnQiLCJyZXN1bHQiLCJmb3JtYXR0ZXIiLCJJbnRsIiwiTnVtYmVyRm9ybWF0IiwibWluaW11bUZyYWN0aW9uRGlnaXRzIiwibWF4aW11bUZyYWN0aW9uRGlnaXRzIiwiQ3JlYXRlQ2F0ZWdvcnkiLCJuZXdfY2F0ZWdvcnkiLCJ0ZW1wX2FyciIsInB1c2giLCJzdW0iLCJ1c2RFdmVudEdvYWwiLCJOdW1iZXIiLCJUd29EZWNpbWFsIiwiZm9ybWF0IiwidG9TdHJpbmciLCJyZW1vdmVDYXRlZ29yeSIsImUiLCJjYXRlZ29yeV9pZCIsInRhcmdldCIsImdldEF0dHJpYnV0ZSIsImV2ZW50R29hbENoYW5nZWQiLCJmZXRjaERhdGEiLCJuZWFyUHJpY2UiLCJuZWFyQ3VycmVuY3lVcmwiLCJvcHRpb25zIiwibWV0aG9kIiwiaGVhZGVycyIsIkFjY2VwdCIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJhbGxuZWFyRGF0YSIsImNhdGNoIiwiZGF0YSIsIm1hcmtldFBhaXJzIiwid2lkdGgiLCJiYWNrZ3JvdW5kIiwicGFkZGluZyIsImJvcmRlclJhZGl1cyIsImhlaWdodCIsImJvcmRlciIsIm1hcmdpbiIsIm1hcmdpbkJvdHRvbSIsIm1hcmdpbkxlZnQiLCJtYXJnaW5SaWdodCIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiZmxleFdyYXAiLCJldmVudENhdGVnb3J5IiwiaW5kZXgiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJmb250U2l6ZSIsImNvbG9yIiwidGV4dEFsaWduIiwibWFyZ2luVG9wIiwibGluZUhlaWdodCIsImFsaWduQ29udGVudCIsImdhcCJdLCJzb3VyY2VSb290IjoiIn0=