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
    _CreatingEventAirtable = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee3() {
      var Airtable, base, eventID, i;
      return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              Airtable = __webpack_require__(/*! airtable */ "./node_modules/airtable/lib/airtable.js");
              Airtable.configure({
                endpointUrl: 'https://api.airtable.com',
                apiKey: 'keyR1Rrcl9O2s9bTs'
              });
              base = __webpack_require__(/*! airtable */ "./node_modules/airtable/lib/airtable.js").base('appgbRCpbkzmdcucO');
              eventID = 0;
              _context3.next = 6;
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

                records.forEach(function (record) {
                  eventID = record.getId();
                });
              });

            case 6:
              i = 0;

            case 7:
              if (!(i < eventCategories.length)) {
                _context3.next = 13;
                break;
              }

              _context3.next = 10;
              return base('eventcategories').create([{
                "fields": {
                  "eventid": eventID,
                  "title": eventCategories[i].title,
                  "price": eventCategories[i].price,
                  "amount": eventCategories[i].amount,
                  "image": eventCategories[i].image
                }
              }], function (err, records) {});

            case 10:
              i++;
              _context3.next = 7;
              break;

            case 13:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
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
    _fetchData = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee4() {
      var nearPrice, nearCurrencyUrl, options, allnearData;
      return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              //Near currency
              nearPrice = 0;
              _context4.prev = 1;
              nearCurrencyUrl = "https://api.coinmarketcap.com/data-api/v3/cryptocurrency/market-pairs/latest?slug=near-protocol&start=1&limit=1&category=spot&sort=cmc_rank_advanced";
              options = {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                  Accept: 'application/json, text/plain, */*'
                }
              };
              _context4.next = 6;
              return fetch(nearCurrencyUrl, options).then(function (res) {
                return res.json();
              }).then(function (json) {
                return allnearData = json;
              }).catch(function (err) {
                return console.error('error:' + err);
              });

            case 6:
              nearPrice = allnearData.data.marketPairs[0].price;
              _context4.next = 12;
              break;

            case 9:
              _context4.prev = 9;
              _context4.t0 = _context4["catch"](1);
              nearPrice = 0;

            case 12:
              setNearPriceUSD(nearPrice);

            case 13:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[1, 9]]);
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
/******/ 	__webpack_require__.h = function() { return "59c336b4305c7c132ef4"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2luZGV4LmJjMGViMTVmMTFkNjYwMjBkZWRhLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQU9BO0FBR0E7QUFHQTtBQUVBWSxNQUFNLENBQUNDLFVBQVAsR0FBb0JILDhDQUFTLENBQUMsYUFBRCxDQUE3QjtBQUNlLFNBQVNJLFlBQVQsR0FBd0I7QUFDbkMscUJBQXFCSCxrRUFBVyxDQUFDLFFBQUQsQ0FBaEM7QUFBQSxNQUFRSSxRQUFSLGdCQUFRQSxRQUFSLENBRG1DLENBRW5DOzs7QUFFQSxzQkFBc0NSLCtFQUFZLENBQUM7QUFDL0NTLElBQUFBLFlBQVksRUFBRSxFQURpQztBQUUvQ0MsSUFBQUEsSUFBSSxFQUFFLE1BRnlDO0FBRy9DQyxJQUFBQSxXQUFXLEVBQUUsYUFIa0M7QUFJL0NDLElBQUFBLEVBQUUsRUFBRTtBQUoyQyxHQUFELENBQWxEO0FBQUE7QUFBQSxNQUFPQyxVQUFQO0FBQUEsTUFBbUJDLGVBQW5COztBQU9BLHVCQUFvQ2QsK0VBQVksQ0FBQztBQUM3Q1MsSUFBQUEsWUFBWSxFQUFFLEVBRCtCO0FBRTdDQyxJQUFBQSxJQUFJLEVBQUUsZ0JBRnVDO0FBRzdDQyxJQUFBQSxXQUFXLEVBQUUsaUJBSGdDO0FBSTdDQyxJQUFBQSxFQUFFLEVBQUU7QUFKeUMsR0FBRCxDQUFoRDtBQUFBO0FBQUEsTUFBT0csU0FBUDtBQUFBLE1BQWtCQyxjQUFsQjs7QUFNQSx1QkFBZ0RoQiwrRUFBWSxDQUFDO0FBQ3pEUyxJQUFBQSxZQUFZLEVBQUUsTUFEMkM7QUFFekRDLElBQUFBLElBQUksRUFBRSxRQUZtRDtBQUd6REUsSUFBQUEsRUFBRSxFQUFFLFlBSHFEO0FBSXpESyxJQUFBQSxjQUFjLEVBQUUsQ0FBQztBQUFFQyxNQUFBQSxLQUFLLEVBQUUsTUFBVDtBQUFpQkMsTUFBQUEsSUFBSSxFQUFFO0FBQXZC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QUFFO0FBQW5DLEtBQWY7QUFBNEQsV0FBTyxFQUFFL0I7QUFBckUsdUJBekNKLENBUEosQ0EzR0YsQ0FBRixDQURKO0FBbUtIOzs7Ozs7OztVQzlZRCxxQ0FBcUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZW1ldGVyZ2lmdC8uL3NyYy9wYWdlcy9DcmVhdGVFdmVudHMvaW5kZXgudHN4Iiwid2VicGFjazovL2RlbWV0ZXJnaWZ0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJvdyBmcm9tICdyZWFjdC1ib290c3RyYXAvUm93JztcclxuaW1wb3J0IHsgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XHJcbmltcG9ydCBDb2wgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0NvbCc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0J1dHRvbic7XHJcbmltcG9ydCBVc2VGb3JtSW5wdXQgZnJvbSAnQC9jb21wb25lbnRzL2NvbXBvbmVudHMvVXNlRm9ybUlucHV0JztcclxuaW1wb3J0IHsgY3JlYXRlRXZlbnRBUEksIGNyZWF0ZUV2ZW50Q2F0ZWdvcnlBUEkgfSBmcm9tICdAL3BhZ2VzL0V2ZW50cy9ldmVudCc7XHJcbmltcG9ydCB7IENyZWF0ZVBsdWdpbiB9IGZyb20gJ0AvcGFnZXMvRXZlbnRzL2V2ZW50JztcclxuaW1wb3J0IHsgSWNvbiB9IGZyb20gJ0AvY29tcG9uZW50cy9jb21tb24vSWNvbidcclxuaW1wb3J0IE1vZGFsIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Nb2RhbCc7XHJcbmltcG9ydCBGb3JtIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Gb3JtJztcclxuaW1wb3J0IHtcclxuICAgIEJ1aWxkZXJGaWVsZCxcclxuICAgIEJ1aWxkZXJTdWJtaXRCdXR0b24sXHJcbiAgICBCdWlsZGVyVHJhbnNhY3Rpb24sXHJcbn0gZnJvbSAnQC9tb2R1bGVzL0J1aWxkZXIvY29tcG9uZW50cydcclxuaW1wb3J0IHsgU2VsZWN0IH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgXCJyZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWVcIjtcclxuXHJcbmltcG9ydCAqIGFzIG5lYXJBUEkgZnJvbSBcIm5lYXItYXBpLWpzXCJcclxuaW1wb3J0IGdldENvbmZpZyBmcm9tIFwiQC9jb25maWdcIlxyXG5cclxuXHJcbmltcG9ydCB1c2VDb250cmFjdCBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy91c2VDb250cmFjdCc7XHJcblxyXG53aW5kb3cubmVhckNvbmZpZyA9IGdldENvbmZpZyhcImRldmVsb3BtZW50XCIpO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDcmVhdGVFdmVudHMoKSB7XHJcbiAgICBjb25zdCB7IGNvbnRyYWN0IH0gPSB1c2VDb250cmFjdCgnRVJDNzIxJyk7XHJcbiAgICAvLyBBcHBsaWNhdGlvbiBpbml0aWFsaXphdGlvblxyXG5cclxuICAgIGNvbnN0IFtFdmVudFRpdGxlLCBFdmVudFRpdGxlSW5wdXRdID0gVXNlRm9ybUlucHV0KHtcclxuICAgICAgICBkZWZhdWx0VmFsdWU6IFwiXCIsXHJcbiAgICAgICAgdHlwZTogJ3RleHQnLFxyXG4gICAgICAgIHBsYWNlaG9sZGVyOiAnRXZlbnQgVGl0bGUnLFxyXG4gICAgICAgIGlkOiAnJ1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgW0V2ZW50RGF0ZSwgRXZlbnREYXRlSW5wdXRdID0gVXNlRm9ybUlucHV0KHtcclxuICAgICAgICBkZWZhdWx0VmFsdWU6IFwiXCIsXHJcbiAgICAgICAgdHlwZTogJ2RhdGV0aW1lLWxvY2FsJyxcclxuICAgICAgICBwbGFjZWhvbGRlcjogJ0V2ZW50IEVuZCBEYXRlICcsXHJcbiAgICAgICAgaWQ6ICdlbmRkYXRlJyxcclxuICAgIH0pO1xyXG4gICAgY29uc3QgW0V2ZW50V2FsbGV0VHlwZSwgRXZlbnRXYWxsZXRUeXBlSW5wdXRdID0gVXNlRm9ybUlucHV0KHtcclxuICAgICAgICBkZWZhdWx0VmFsdWU6IFwiTkVBUlwiLFxyXG4gICAgICAgIHR5cGU6ICdzZWxlY3QnLFxyXG4gICAgICAgIGlkOiAnd2FsbGV0VHlwZScsXHJcbiAgICAgICAgc2VsZWN0X29wdGlvbnM6IFt7IHZhbHVlOiBcIk5FQVJcIiwgdGV4dDogXCJORUFSXCIgfV1cclxuICAgIH0pO1xyXG4gICAgY29uc3QgW0V2ZW50V2FsbGV0QWRkcmVzcywgRXZlbnRXYWxsZXRBZGRyZXNzSW5wdXRdID0gVXNlRm9ybUlucHV0KHtcclxuICAgICAgICBkZWZhdWx0VmFsdWU6IFwiXCIsXHJcbiAgICAgICAgdHlwZTogJ3RleHQnLFxyXG4gICAgICAgIHBsYWNlaG9sZGVyOiAnV2FsbGV0JyxcclxuICAgICAgICBpZDogJ3dhbGxldCcsXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IFtFdmVudEdvYWwsIHNldEV2ZW50R29hbF0gPSB1c2VTdGF0ZSgwKTtcclxuXHJcbiAgICBjb25zdCBbRXZlbnRMb2dvLCBFdmVudExvZ29JbnB1dF0gPSBVc2VGb3JtSW5wdXQoe1xyXG4gICAgICAgIGRlZmF1bHRWYWx1ZTogXCJcIixcclxuICAgICAgICB0eXBlOiAndGV4dCcsXHJcbiAgICAgICAgcGxhY2Vob2xkZXI6ICdFdmVudCBMb2dvIExpbmsnLFxyXG4gICAgICAgIGlkOiAnbG9nbydcclxuICAgIH0pO1xyXG4gICAgY29uc3QgW2V2ZW50Q2F0ZWdvcmllcywgc2V0RXZlbnRDYXRlZ29yaWVzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtjcmVhdGVDYXRlZ29yeU1vZGFsLCBzZXRDcmVhdGVDYXRlZ29yeU1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtuZXdDYXRlZ29yeVRpdGxlLCBzZXROZXdDYXRlZ29yeVRpdGxlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW25ld0NhdGVnb3J5SW1nTGluaywgc2V0TmV3Q2F0ZWdvcnlJbWdMaW5rXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW25ld0NhdGVnb3J5UHJpY2UsIHNldE5ld0NhdGVnb3J5UHJpY2VdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBbbmV3Q2F0ZWdvcnlBbW91bnQsIHNldE5ld0NhdGVnb3J5QW1vdW50XSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW290aGVyQ2F0ZWdvcnksIHNldE90aGVyQ2F0ZWdvcnldID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbTmVhclByaWNlVVNELCBzZXROZWFyUHJpY2VVU0RdID0gdXNlU3RhdGUoMCk7XHJcblxyXG5cclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiBDcmVhdGVFdmVudCgpIHtcclxuICAgICAgICBpZiAod2luZG93LndhbGxldEFjY291bnQuaXNTaWduZWRJbigpID09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIHRvYXN0Lndhcm5pbmcoXCJQbGVhc2UgY29ubmVjdCBOZWFyIEFjY291bnQhXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhd2FpdCB0b2FzdC5wcm9taXNlKENyZWF0aW5nRXZlbnRBaXJ0YWJsZSwge1xyXG4gICAgICAgICAgICBwZW5kaW5nOiBcIkV2ZW50IGlzIGNyZWF0aW5nIG9uIEFpcnRhYmxlLi4uXCIsXHJcbiAgICAgICAgICAgIGVycm9yOiBcIlBsZWFzZSB0cnkgYWdhaW4gbGF0ZXJcIixcclxuICAgICAgICAgICAgc3VjY2VzczogXCJFdmVudCBoYXMgY3JlYXRlZCBvbiBBaXJ0YWJsZSFcIlxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGF3YWl0IHRvYXN0LnByb21pc2UoQ3JlYXRpbmdFdmVudCwge1xyXG4gICAgICAgICAgICBwZW5kaW5nOiBcIkV2ZW50IGlzIGNyZWF0aW5nIG9uIEF1cm9yYS4uLlwiLFxyXG4gICAgICAgICAgICBlcnJvcjogXCJQbGVhc2UgdHJ5IGFnYWluIGxhdGVyXCIsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IFwiRXZlbnQgaGFzIGNyZWF0ZWQgb24gQXVyb3JhIVwiXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2hyZWY9XCIvZG9uYXRpb25cIl0nKVswXS5jbGljaygpXHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgZnVuY3Rpb24gQ3JlYXRpbmdFdmVudEFpcnRhYmxlKCkge1xyXG5cclxuICAgICAgICB2YXIgQWlydGFibGUgPSByZXF1aXJlKCdhaXJ0YWJsZScpO1xyXG4gICAgICAgIEFpcnRhYmxlLmNvbmZpZ3VyZSh7XHJcbiAgICAgICAgICAgIGVuZHBvaW50VXJsOiAnaHR0cHM6Ly9hcGkuYWlydGFibGUuY29tJyxcclxuICAgICAgICAgICAgYXBpS2V5OiAna2V5UjFScmNsOU8yczliVHMnXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3QgYmFzZSA9IHJlcXVpcmUoJ2FpcnRhYmxlJykuYmFzZSgnYXBwZ2JSQ3Bia3ptZGN1Y08nKTtcclxuICAgICAgICB2YXIgZXZlbnRJRCA9IDA7XHJcbiAgICAgICAgYXdhaXQgYmFzZSgnZXZlbnRzJykuY3JlYXRlKFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJmaWVsZHNcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgIFwidGl0bGVcIjogRXZlbnRUaXRsZSxcclxuICAgICAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJlbmREYXRlXCI6IEV2ZW50RGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICBcIkdvYWxcIjogRXZlbnRHb2FsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibG9nb2xpbmtcIjogRXZlbnRMb2dvLFxyXG4gICAgICAgICAgICAgICAgICAgIFwid2FsbGV0XCI6IEV2ZW50V2FsbGV0QWRkcmVzcyxcclxuICAgICAgICAgICAgICAgICAgICBcIndhbGxldHR5cGVcIjogXCJORUFSXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF0sIGZ1bmN0aW9uIChlcnIsIHJlY29yZHMpIHtcclxuICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJlY29yZHMuZm9yRWFjaChmdW5jdGlvbiAocmVjb3JkKSB7XHJcbiAgICAgICAgICAgICAgICBldmVudElEID0gcmVjb3JkLmdldElkKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZXZlbnRDYXRlZ29yaWVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGF3YWl0IGJhc2UoJ2V2ZW50Y2F0ZWdvcmllcycpLmNyZWF0ZShbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJmaWVsZHNcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImV2ZW50aWRcIjogZXZlbnRJRCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0aXRsZVwiOiBldmVudENhdGVnb3JpZXNbaV0udGl0bGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicHJpY2VcIjogZXZlbnRDYXRlZ29yaWVzW2ldLnByaWNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImFtb3VudFwiOiBldmVudENhdGVnb3JpZXNbaV0uYW1vdW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImltYWdlXCI6IGV2ZW50Q2F0ZWdvcmllc1tpXS5pbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSwgZnVuY3Rpb24gKGVyciwgcmVjb3JkcykgeyB9KTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBDcmVhdGluZ0V2ZW50ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIC8vICBDb250cmFjdFxyXG4gICAgICAgIGNvbnNvbGUubG9nKGNvbnRyYWN0KTtcclxuICAgICAgICBjb25zdCBjcmVhdGVkT2JqZWN0ID0ge1xyXG4gICAgICAgICAgICBUaXRsZTogRXZlbnRUaXRsZSxcclxuICAgICAgICAgICAgRGF0ZTogRXZlbnREYXRlLFxyXG4gICAgICAgICAgICBBZGRyZXNzOiBFdmVudFdhbGxldEFkZHJlc3MsXHJcbiAgICAgICAgICAgIEdvYWw6IEV2ZW50R29hbCxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBjb250cmFjdC5jcmVhdGVFdmVudChcclxuICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoY3JlYXRlZE9iamVjdClcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG5cclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgZm9ybWF0dGVyID0gbmV3IEludGwuTnVtYmVyRm9ybWF0KCdlbi1VUycsIHtcclxuICAgICAgICBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDIsXHJcbiAgICAgICAgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAyLFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgQ3JlYXRlQ2F0ZWdvcnkgPSAoKSA9PiB7XHJcbiAgICAgICAgdmFyIG5ld19jYXRlZ29yeSA9IHtcclxuICAgICAgICAgICAgdGl0bGU6IG5ld0NhdGVnb3J5VGl0bGUsXHJcbiAgICAgICAgICAgIHByaWNlOiBuZXdDYXRlZ29yeVByaWNlLFxyXG4gICAgICAgICAgICBhbW91bnQ6IG5ld0NhdGVnb3J5QW1vdW50LFxyXG4gICAgICAgICAgICBpbWFnZTogbmV3Q2F0ZWdvcnlJbWdMaW5rXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciB0ZW1wX2FyciA9IGV2ZW50Q2F0ZWdvcmllcztcclxuICAgICAgICB0ZW1wX2Fyci5wdXNoKG5ld19jYXRlZ29yeSk7XHJcbiAgICAgICAgdmFyIHN1bSA9IDA7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0ZW1wX2Fyci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBzdW0gKz0gdGVtcF9hcnJbaV0ucHJpY2UgKiB0ZW1wX2FycltpXS5hbW91bnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciB1c2RFdmVudEdvYWwgPSBOdW1iZXIoTmVhclByaWNlVVNEKSAqIE51bWJlcihFdmVudEdvYWwpO1xyXG4gICAgICAgIHZhciBUd29EZWNpbWFsID0gZm9ybWF0dGVyLmZvcm1hdCh1c2RFdmVudEdvYWwgLSBzdW0pO1xyXG4gICAgICAgIHNldE90aGVyQ2F0ZWdvcnkoVHdvRGVjaW1hbC50b1N0cmluZygpKTtcclxuICAgICAgICBzZXRFdmVudENhdGVnb3JpZXModGVtcF9hcnIpO1xyXG4gICAgICAgIHNldENyZWF0ZUNhdGVnb3J5TW9kYWwoZmFsc2UpO1xyXG4gICAgICAgIHNldE5ld0NhdGVnb3J5VGl0bGUoXCJcIik7XHJcbiAgICAgICAgc2V0TmV3Q2F0ZWdvcnlJbWdMaW5rKFwiXCIpO1xyXG4gICAgICAgIHNldE5ld0NhdGVnb3J5UHJpY2UoMCk7XHJcbiAgICAgICAgc2V0TmV3Q2F0ZWdvcnlBbW91bnQoMCk7XHJcbiAgICB9XHJcbiAgICBjb25zdCByZW1vdmVDYXRlZ29yeSA9IChlKSA9PiB7XHJcbiAgICAgICAgdmFyIGNhdGVnb3J5X2lkID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiY2F0ZWdvcnlpZFwiKTtcclxuICAgICAgICB2YXIgdGVtcF9hcnIgPSBbXTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGV2ZW50Q2F0ZWdvcmllcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoaSAhPSBjYXRlZ29yeV9pZCkge1xyXG4gICAgICAgICAgICAgICAgdGVtcF9hcnIucHVzaChldmVudENhdGVnb3JpZXNbaV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldEV2ZW50Q2F0ZWdvcmllcyh0ZW1wX2Fycik7XHJcbiAgICB9XHJcbiAgICBjb25zdCBldmVudEdvYWxDaGFuZ2VkID0gKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgc2V0RXZlbnRHb2FsKHZhbHVlKTtcclxuICAgICAgICB2YXIgc3VtID0gMDtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGV2ZW50Q2F0ZWdvcmllcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBzdW0gKz0gZXZlbnRDYXRlZ29yaWVzW2ldLnByaWNlICogZXZlbnRDYXRlZ29yaWVzW2ldLmFtb3VudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0T3RoZXJDYXRlZ29yeShFdmVudEdvYWwgLSBzdW0pO1xyXG4gICAgfVxyXG4gICAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hEYXRhKCkge1xyXG5cclxuICAgICAgICAvL05lYXIgY3VycmVuY3lcclxuICAgICAgICB2YXIgbmVhclByaWNlID0gMDtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICB2YXIgbmVhckN1cnJlbmN5VXJsID0gXCJodHRwczovL2FwaS5jb2lubWFya2V0Y2FwLmNvbS9kYXRhLWFwaS92My9jcnlwdG9jdXJyZW5jeS9tYXJrZXQtcGFpcnMvbGF0ZXN0P3NsdWc9bmVhci1wcm90b2NvbCZzdGFydD0xJmxpbWl0PTEmY2F0ZWdvcnk9c3BvdCZzb3J0PWNtY19yYW5rX2FkdmFuY2VkXCI7XHJcbiAgICAgICAgICAgIGxldCBvcHRpb25zID0ge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAgICAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24sIHRleHQvcGxhaW4sICovKidcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHZhciBhbGxuZWFyRGF0YTtcclxuICAgICAgICAgICAgYXdhaXQgZmV0Y2gobmVhckN1cnJlbmN5VXJsLCBvcHRpb25zKS50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oanNvbiA9PiBhbGxuZWFyRGF0YSA9IGpzb24pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoJ2Vycm9yOicgKyBlcnIpKTtcclxuICAgICAgICAgICAgbmVhclByaWNlID0gYWxsbmVhckRhdGEuZGF0YS5tYXJrZXRQYWlyc1swXS5wcmljZTtcclxuICAgICAgICB9IGNhdGNoIChleCkge1xyXG4gICAgICAgICAgICB2YXIgbmVhclByaWNlID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0TmVhclByaWNlVVNEKG5lYXJQcmljZSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZmV0Y2hEYXRhKCk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Pjw+XHJcbiAgICAgICAgICAgIDxSb3c+XHJcblxyXG4gICAgICAgICAgICAgICAgPENvbCA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogXCI0NXZ3XCIsIGJhY2tncm91bmQ6IFwidHJhbnNwYXJlbnRcIiwgcGFkZGluZzogXCIxOXB4XCIsIGJvcmRlclJhZGl1czogXCI0cHhcIiwgaGVpZ2h0OiBcIjEwMCVcIiwgYm9yZGVyOiBcIndoaXRlIHNvbGlkXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luOiBcIjBweCAwcHggMzBweCAwcHhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiMTBweFwiIH19PkNyZWF0ZSBFdmVudDwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW46IFwiMThweCAwXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBcIjEwcHhcIiB9fT5FdmVudCBUaXRsZTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7RXZlbnRUaXRsZUlucHV0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luOiBcIjE4cHggMFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCIxMHB4XCIgfX0+RXZlbnQgRW5kIERhdGU8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge0V2ZW50RGF0ZUlucHV0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW46IFwiMThweCAwXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBcIjEwcHhcIiB9fT5XYWxsZXQgVHlwZTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7RXZlbnRXYWxsZXRUeXBlSW5wdXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbjogXCIxOHB4IDBcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtFdmVudFdhbGxldFR5cGUgPT0gXCJORUFSXCIgPyAoPD48aDQgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBcIjEwcHhcIiB9fT5BY2NvdW50IElEIG9mIHtFdmVudFdhbGxldFR5cGV9IHdhbGxldDwvaDQ+PC8+KSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PiA8aDQgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBcIjEwcHhcIiB9fT5XYWxsZXQgQWRkcmVzcyBpbiB7RXZlbnRXYWxsZXRUeXBlfTwvaDQ+PC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtFdmVudFdhbGxldEFkZHJlc3NJbnB1dH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luOiBcIjE4cHggMFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCIxMHB4XCIgfX0+RXZlbnQgR29hbCBpbiB7RXZlbnRXYWxsZXRUeXBlfTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e0V2ZW50R29hbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17YEV2ZW50IEdvYWwgaW4gJHtFdmVudFdhbGxldFR5cGV9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGV2ZW50R29hbENoYW5nZWQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9e1wibnVtYmVyXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e1wiZ29hbFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luOiBcIjE4cHggMFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCIxMHB4XCIgfX0+Q2F0ZWdvcmllcyBmb3IgU3VwcG9ydDwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkxlZnQ6IFwiLTEwcHhcIiwgbWFyZ2luUmlnaHQ6IFwiLTEwcHhcIiwgZGlzcGxheTogXCJmbGV4XCIsIGZsZXhEaXJlY3Rpb246IFwicm93XCIsIGZsZXhXcmFwOiBcIndyYXBcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50Q2F0ZWdvcmllcy5tYXAoKGV2ZW50Q2F0ZWdvcnksIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjMzJVwiLCBwYWRkaW5nOiBcIjAgMTBweFwiLCBtYXJnaW5Cb3R0b206IFwiMTBweFwiIH19IGtleT17aW5kZXh9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGJhY2tncm91bmQ6IFwid2hpdGVcIiwgcGFkZGluZzogXCI4cHggMTVweFwiLCBib3JkZXI6IFwiMXB4IHNvbGlkIHRyYW5zcGFyZW50XCIsIGJvcmRlclJhZGl1czogXCI1cHhcIiwgYWxpZ25JdGVtczogXCJjZW50ZXJcIiwgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4taWNvbiBwb3B1cC1jbG9zZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtyZW1vdmVDYXRlZ29yeX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5aWQ9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGp1c3RpZnlDb250ZW50OiBcImZsZXgtZW5kXCIsIGZvbnRTaXplOiAyMCwgY29sb3I6IFwiYmxhY2tcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBYXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBcIjEwcHhcIiwgY29sb3I6IFwiIzE1MUYyOFwiLCB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+e2V2ZW50Q2F0ZWdvcnkudGl0bGV9PC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2V2ZW50Q2F0ZWdvcnkuaW1hZ2V9IHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgYm9yZGVyUmFkaXVzOiBcIjVweFwiLCBoZWlnaHQ6IFwiOTRweFwiIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBzdHlsZT17eyBjb2xvcjogXCIjMTUxRjI4XCIsIHRleHRBbGlnbjogXCJjZW50ZXJcIiwgbWFyZ2luVG9wOiBcIjEwcHhcIiwgbGluZUhlaWdodDogXCIxNHB4XCIgfX0+e2V2ZW50Q2F0ZWdvcnkucHJpY2UgKiBldmVudENhdGVnb3J5LmFtb3VudH0gVVNEPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IHN0eWxlPXt7IGNvbG9yOiBcIiMxNTFGMjhcIiwgdGV4dEFsaWduOiBcImNlbnRlclwiLCBsaW5lSGVpZ2h0OiBcIjE0cHhcIiB9fT4oe2V2ZW50Q2F0ZWdvcnkuYW1vdW50fSBwaWVjZXMpPC9oNT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiMzMlXCIsIHBhZGRpbmc6IFwiMCAxMHB4XCIsIGRpc3BsYXk6IFwiZmxleFwiLCBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZXZlbnRDYXRlZ29yaWVzLmxlbmd0aCA+IDApID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoPGRpdiBzdHlsZT17eyBiYWNrZ3JvdW5kOiBcIndoaXRlXCIsIHBhZGRpbmc6IFwiMTBweFwiLCBib3JkZXI6IFwiMXB4IHNvbGlkIHRyYW5zcGFyZW50XCIsIGJvcmRlclJhZGl1czogXCI1cHhcIiwgYWxpZ25JdGVtczogXCJjZW50ZXJcIiwgaGVpZ2h0OiBcIjgwcHhcIiwgbWFyZ2luQm90dG9tOiBcIjE1cHhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCIxMHB4XCIsIGNvbG9yOiBcIiMxNTFGMjhcIiwgdGV4dEFsaWduOiBcImNlbnRlclwiIH19Pk90aGVyIHN1cHBvcnQ8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgc3R5bGU9e3sgY29sb3I6IFwiIzE1MUYyOFwiLCB0ZXh0QWxpZ246IFwiY2VudGVyXCIsIG1hcmdpblRvcDogXCIxMHB4XCIsIGxpbmVIZWlnaHQ6IFwiMTRweFwiIH19PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG90aGVyQ2F0ZWdvcnlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBVU0Q8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PikgOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgYmFja2dyb3VuZDogXCJ3aGl0ZVwiLCBwYWRkaW5nOiBcIjEwcHhcIiwgYm9yZGVyOiBcIjFweCBzb2xpZCB0cmFuc3BhcmVudFwiLCBib3JkZXJSYWRpdXM6IFwiNXB4XCIsIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsIGhlaWdodDogXCI4MHB4XCIsIGRpc3BsYXk6IFwiZmxleFwiLCBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIiB9fSBvbkNsaWNrPXsoKSA9PiBzZXRDcmVhdGVDYXRlZ29yeU1vZGFsKHRydWUpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBzdHlsZT17eyBjb2xvcjogXCIjNzU3NTc1XCIsIHRleHRBbGlnbjogXCJjZW50ZXJcIiwgbGluZUhlaWdodDogXCIxNHB4XCIsIGZvbnRTaXplOiBcIjUwcHhcIiB9fT4rPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbjogXCIxOHB4IDBcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiMTBweFwiIH19PkV2ZW50IExvZ28gTGluazwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7RXZlbnRMb2dvSW5wdXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAnMThweCAwcHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ25Db250ZW50OiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYXA6ICc1cHgnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBpZD1cInBsdWdpblwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+R2VuZXJhdGUgUGx1Z2luPzwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gc3R5bGU9e3sgbWFyZ2luOiBcIjE3cHggMCAwcHggMHB4XCIsIHdpZHRoOiBcIjEwMCVcIiB9fSBvbkNsaWNrPXtDcmVhdGVFdmVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDcmVhdGUgRXZlbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuXHJcbiAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICA8TW9kYWwgc2hvdz17Y3JlYXRlQ2F0ZWdvcnlNb2RhbH1cclxuICAgICAgICAgICAgICAgIG9uSGlkZT17KCkgPT4gc2V0Q3JlYXRlQ2F0ZWdvcnlNb2RhbChmYWxzZSl9XHJcbiAgICAgICAgICAgICAgICBzaXplPSdsZydcclxuICAgICAgICAgICAgICAgIGNlbnRlcmVkIHN0eWxlPXt7IHBhZGRpbmc6IFwiMjBweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgPE1vZGFsLkhlYWRlciBjbG9zZUJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICBDcmVhdGUgYSBuZXcgY2F0ZWdvcnlcclxuICAgICAgICAgICAgICAgIDwvTW9kYWwuSGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW46IFwiMjBweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luOiBcIjE4cHggMFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBcIjEwcHhcIiwgY29sb3I6IFwiYmxhY2tcIiB9fT5DYXRlZ29yeSBUaXRsZTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtuZXdDYXRlZ29yeVRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e1wiQ2F0ZWdvcnkgVGl0bGVcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmV3Q2F0ZWdvcnlUaXRsZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPXtcInRleHRcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtcImNhdF90aXRsZVwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luOiBcIjE4cHggMFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBcIjEwcHhcIiwgY29sb3I6IFwiYmxhY2tcIiB9fT5BbW91bnQ8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bmV3Q2F0ZWdvcnlBbW91bnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17XCJBbW91bnRcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmV3Q2F0ZWdvcnlBbW91bnQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT17XCJudW1iZXJcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtcImNhdF9waWVjZVwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luOiBcIjE4cHggMFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBcIjEwcHhcIiwgY29sb3I6IFwiYmxhY2tcIiB9fT5QcmljZSBvZiBBIFBpZWNlPC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e25ld0NhdGVnb3J5UHJpY2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17XCJDYXRlZ29yeSBQcmljZVwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROZXdDYXRlZ29yeVByaWNlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9e1wibnVtYmVyXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17XCJjYXRfcHJpY2VcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbjogXCIxOHB4IDBcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCIxMHB4XCIsIGNvbG9yOiBcImJsYWNrXCIgfX0+Q2F0ZWdvcnkgSW1hZ2UgTGluazwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtuZXdDYXRlZ29yeUltZ0xpbmt9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17XCJDYXRlZ29yeSBJbWFnZSBMaW5rXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE5ld0NhdGVnb3J5SW1nTGluayhlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPXtcInRleHRcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtcImNhdF9pbWFnZVwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gc3R5bGU9e3sgbWFyZ2luOiBcIjE3cHggMCAwcHggMHB4XCIsIHdpZHRoOiBcIjEwMCVcIiB9fSBvbkNsaWNrPXtDcmVhdGVDYXRlZ29yeX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENyZWF0ZSBDYXRlZ29yeVxyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvTW9kYWw+XHJcbiAgICAgICAgPC8+PC8+XHJcbiAgICApO1xyXG59IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gZnVuY3Rpb24oKSB7IHJldHVybiBcIjU5YzMzNmI0MzA1YzdjMTMyZWY0XCI7IH0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlJvdyIsInRvYXN0IiwiQ29sIiwiQnV0dG9uIiwiVXNlRm9ybUlucHV0IiwiTW9kYWwiLCJGb3JtIiwiZ2V0Q29uZmlnIiwidXNlQ29udHJhY3QiLCJ3aW5kb3ciLCJuZWFyQ29uZmlnIiwiQ3JlYXRlRXZlbnRzIiwiY29udHJhY3QiLCJkZWZhdWx0VmFsdWUiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJpZCIsIkV2ZW50VGl0bGUiLCJFdmVudFRpdGxlSW5wdXQiLCJFdmVudERhdGUiLCJFdmVudERhdGVJbnB1dCIsInNlbGVjdF9vcHRpb25zIiwidmFsdWUiLCJ0ZXh0IiwiRXZlbnRXYWxsZXRUeXBlIiwiRXZlbnRXYWxsZXRUeXBlSW5wdXQiLCJFdmVudFdhbGxldEFkZHJlc3MiLCJFdmVudFdhbGxldEFkZHJlc3NJbnB1dCIsIkV2ZW50R29hbCIsInNldEV2ZW50R29hbCIsIkV2ZW50TG9nbyIsIkV2ZW50TG9nb0lucHV0IiwiZXZlbnRDYXRlZ29yaWVzIiwic2V0RXZlbnRDYXRlZ29yaWVzIiwiY3JlYXRlQ2F0ZWdvcnlNb2RhbCIsInNldENyZWF0ZUNhdGVnb3J5TW9kYWwiLCJuZXdDYXRlZ29yeVRpdGxlIiwic2V0TmV3Q2F0ZWdvcnlUaXRsZSIsIm5ld0NhdGVnb3J5SW1nTGluayIsInNldE5ld0NhdGVnb3J5SW1nTGluayIsIm5ld0NhdGVnb3J5UHJpY2UiLCJzZXROZXdDYXRlZ29yeVByaWNlIiwibmV3Q2F0ZWdvcnlBbW91bnQiLCJzZXROZXdDYXRlZ29yeUFtb3VudCIsIm90aGVyQ2F0ZWdvcnkiLCJzZXRPdGhlckNhdGVnb3J5IiwiTmVhclByaWNlVVNEIiwic2V0TmVhclByaWNlVVNEIiwiQ3JlYXRlRXZlbnQiLCJ3YWxsZXRBY2NvdW50IiwiaXNTaWduZWRJbiIsIndhcm5pbmciLCJwcm9taXNlIiwiQ3JlYXRpbmdFdmVudEFpcnRhYmxlIiwicGVuZGluZyIsImVycm9yIiwic3VjY2VzcyIsIkNyZWF0aW5nRXZlbnQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjbGljayIsIkFpcnRhYmxlIiwicmVxdWlyZSIsImNvbmZpZ3VyZSIsImVuZHBvaW50VXJsIiwiYXBpS2V5IiwiYmFzZSIsImV2ZW50SUQiLCJjcmVhdGUiLCJlcnIiLCJyZWNvcmRzIiwiY29uc29sZSIsImZvckVhY2giLCJyZWNvcmQiLCJnZXRJZCIsImkiLCJsZW5ndGgiLCJ0aXRsZSIsInByaWNlIiwiYW1vdW50IiwiaW1hZ2UiLCJsb2ciLCJjcmVhdGVkT2JqZWN0IiwiVGl0bGUiLCJEYXRlIiwiQWRkcmVzcyIsIkdvYWwiLCJjcmVhdGVFdmVudCIsInJlc3VsdCIsImZvcm1hdHRlciIsIkludGwiLCJOdW1iZXJGb3JtYXQiLCJtaW5pbXVtRnJhY3Rpb25EaWdpdHMiLCJtYXhpbXVtRnJhY3Rpb25EaWdpdHMiLCJDcmVhdGVDYXRlZ29yeSIsIm5ld19jYXRlZ29yeSIsInRlbXBfYXJyIiwicHVzaCIsInN1bSIsInVzZEV2ZW50R29hbCIsIk51bWJlciIsIlR3b0RlY2ltYWwiLCJmb3JtYXQiLCJ0b1N0cmluZyIsInJlbW92ZUNhdGVnb3J5IiwiZSIsImNhdGVnb3J5X2lkIiwidGFyZ2V0IiwiZ2V0QXR0cmlidXRlIiwiZXZlbnRHb2FsQ2hhbmdlZCIsImZldGNoRGF0YSIsIm5lYXJQcmljZSIsIm5lYXJDdXJyZW5jeVVybCIsIm9wdGlvbnMiLCJtZXRob2QiLCJoZWFkZXJzIiwiQWNjZXB0IiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsImFsbG5lYXJEYXRhIiwiY2F0Y2giLCJkYXRhIiwibWFya2V0UGFpcnMiLCJ3aWR0aCIsImJhY2tncm91bmQiLCJwYWRkaW5nIiwiYm9yZGVyUmFkaXVzIiwiaGVpZ2h0IiwiYm9yZGVyIiwibWFyZ2luIiwibWFyZ2luQm90dG9tIiwibWFyZ2luTGVmdCIsIm1hcmdpblJpZ2h0IiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJmbGV4V3JhcCIsImV2ZW50Q2F0ZWdvcnkiLCJpbmRleCIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImZvbnRTaXplIiwiY29sb3IiLCJ0ZXh0QWxpZ24iLCJtYXJnaW5Ub3AiLCJsaW5lSGVpZ2h0IiwiYWxpZ25Db250ZW50IiwiZ2FwIl0sInNvdXJjZVJvb3QiOiIifQ==