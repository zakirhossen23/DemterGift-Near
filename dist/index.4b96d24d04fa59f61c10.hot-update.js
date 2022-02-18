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

  function CreateCateCategories(_x) {
    return _CreateCateCategories.apply(this, arguments);
  }

  function _CreateCateCategories() {
    _CreateCateCategories = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee3(eventID) {
      var Airtable, base, i;
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
              i = 0;

            case 4:
              if (!(i < eventCategories.length)) {
                _context3.next = 10;
                break;
              }

              _context3.next = 7;
              return base('eventcategories').create([{
                "fields": {
                  "eventid": eventID,
                  "title": eventCategories[i].title,
                  "price": eventCategories[i].price,
                  "amount": eventCategories[i].amount,
                  "image": eventCategories[i].image
                }
              }], function (err, records) {
                console.error(err);
              });

            case 7:
              i++;
              _context3.next = 4;
              break;

            case 10:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));
    return _CreateCateCategories.apply(this, arguments);
  }

  function CreatingEventAirtable() {
    return _CreatingEventAirtable.apply(this, arguments);
  }

  function _CreatingEventAirtable() {
    _CreatingEventAirtable = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee4() {
      var Airtable, base;
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
              _context4.t0 = base('events');
              _context4.t1 = [{
                "fields": {
                  "title": EventTitle,
                  "description": "",
                  "endDate": EventDate,
                  "Goal": EventGoal,
                  "logolink": EventLogo,
                  "wallet": EventWalletAddress,
                  "wallettype": "NEAR"
                }
              }];
              _context4.next = 7;
              return function (err, records) {
                if (err) {
                  console.error(err);
                  return;
                }

                CreateCateCategories(records[0].fields.id);
              };

            case 7:
              _context4.t2 = _context4.sent;
              _context4.next = 10;
              return _context4.t0.create.call(_context4.t0, _context4.t1, _context4.t2);

            case 10:
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
/******/ 	__webpack_require__.h = function() { return "92032ce35ca76167ca0c"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2luZGV4LjRiOTZkMjRkMDRmYTU5ZjYxYzEwLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQU9BO0FBR0E7QUFHQTtBQUVBWSxNQUFNLENBQUNDLFVBQVAsR0FBb0JILDhDQUFTLENBQUMsYUFBRCxDQUE3QjtBQUNlLFNBQVNJLFlBQVQsR0FBd0I7QUFDbkMscUJBQXFCSCxrRUFBVyxDQUFDLFFBQUQsQ0FBaEM7QUFBQSxNQUFRSSxRQUFSLGdCQUFRQSxRQUFSLENBRG1DLENBRW5DOzs7QUFFQSxzQkFBc0NSLCtFQUFZLENBQUM7QUFDL0NTLElBQUFBLFlBQVksRUFBRSxFQURpQztBQUUvQ0MsSUFBQUEsSUFBSSxFQUFFLE1BRnlDO0FBRy9DQyxJQUFBQSxXQUFXLEVBQUUsYUFIa0M7QUFJL0NDLElBQUFBLEVBQUUsRUFBRTtBQUoyQyxHQUFELENBQWxEO0FBQUE7QUFBQSxNQUFPQyxVQUFQO0FBQUEsTUFBbUJDLGVBQW5COztBQU9BLHVCQUFvQ2QsK0VBQVksQ0FBQztBQUM3Q1MsSUFBQUEsWUFBWSxFQUFFLEVBRCtCO0FBRTdDQyxJQUFBQSxJQUFJLEVBQUUsZ0JBRnVDO0FBRzdDQyxJQUFBQSxXQUFXLEVBQUUsaUJBSGdDO0FBSTdDQyxJQUFBQSxFQUFFLEVBQUU7QUFKeUMsR0FBRCxDQUFoRDtBQUFBO0FBQUEsTUFBT0csU0FBUDtBQUFBLE1BQWtCQyxjQUFsQjs7QUFNQSx1QkFBZ0RoQiwrRUFBWSxDQUFDO0FBQ3pEUyxJQUFBQSxZQUFZLEVBQUUsTUFEMkM7QUFFekRDLElBQUFBLElBQUksRUFBRSxRQUZtRDtBQUd6REUsSUFBQUEsRUFBRSxFQUFFLFlBSHFEO0FBSXpESyxJQUFBQSxjQUFjLEVBQUUsQ0FBQztBQUFFQyxNQUFBQSxLQUFLLEVBQUUsTUFBVDtBQUFpQkMsTUFBQUEsSUFBSSxFQUFFO0FBQXZC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TUFBaEI7QUFBd0JXLE1BQUFBLEtBQUssRUFBRTtBQUEvQjtBQUFYLDJCQURKLGVBRUksaURBQUMscUVBQUQ7QUFDSSxTQUFLLEVBQUV4RyxrQkFEWDtBQUVJLGVBQVcsRUFBRSxxQkFGakI7QUFHSSxZQUFRLEVBQUUsa0JBQUNrRSxDQUFEO0FBQUEsYUFBT2pFLHFCQUFxQixDQUFDaUUsQ0FBQyxDQUFDRSxNQUFGLENBQVNwRixLQUFWLENBQTVCO0FBQUEsS0FIZDtBQUlJLFFBQUksRUFBRSxNQUpWO0FBS0ksTUFBRSxFQUFFO0FBTFIsSUFGSixDQS9CSixlQXlDSSxpREFBQywrREFBRDtBQUFRLFNBQUssRUFBRTtBQUFFNEcsTUFBQUEsTUFBTSxFQUFFLGdCQUFWO0FBQTRCTixNQUFBQSxLQUFLLEVBQUU7QUFBbkMsS0FBZjtBQUE0RCxXQUFPLEVBQUUvQjtBQUFyRSx1QkF6Q0osQ0FQSixDQTNHRixDQUFGLENBREo7QUFtS0g7Ozs7Ozs7O1VDclpELHFDQUFxQyIsInNvdXJjZXMiOlsid2VicGFjazovL2RlbWV0ZXJnaWZ0Ly4vc3JjL3BhZ2VzL0NyZWF0ZUV2ZW50cy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vZGVtZXRlcmdpZnQvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUm93IGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Sb3cnO1xyXG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcclxuaW1wb3J0IENvbCBmcm9tICdyZWFjdC1ib290c3RyYXAvQ29sJztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdyZWFjdC1ib290c3RyYXAvQnV0dG9uJztcclxuaW1wb3J0IFVzZUZvcm1JbnB1dCBmcm9tICdAL2NvbXBvbmVudHMvY29tcG9uZW50cy9Vc2VGb3JtSW5wdXQnO1xyXG5pbXBvcnQgeyBjcmVhdGVFdmVudEFQSSwgY3JlYXRlRXZlbnRDYXRlZ29yeUFQSSB9IGZyb20gJ0AvcGFnZXMvRXZlbnRzL2V2ZW50JztcclxuaW1wb3J0IHsgQ3JlYXRlUGx1Z2luIH0gZnJvbSAnQC9wYWdlcy9FdmVudHMvZXZlbnQnO1xyXG5pbXBvcnQgeyBJY29uIH0gZnJvbSAnQC9jb21wb25lbnRzL2NvbW1vbi9JY29uJ1xyXG5pbXBvcnQgTW9kYWwgZnJvbSAncmVhY3QtYm9vdHN0cmFwL01vZGFsJztcclxuaW1wb3J0IEZvcm0gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0Zvcm0nO1xyXG5pbXBvcnQge1xyXG4gICAgQnVpbGRlckZpZWxkLFxyXG4gICAgQnVpbGRlclN1Ym1pdEJ1dHRvbixcclxuICAgIEJ1aWxkZXJUcmFuc2FjdGlvbixcclxufSBmcm9tICdAL21vZHVsZXMvQnVpbGRlci9jb21wb25lbnRzJ1xyXG5pbXBvcnQgeyBTZWxlY3QgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCBcInJlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZVwiO1xyXG5cclxuaW1wb3J0ICogYXMgbmVhckFQSSBmcm9tIFwibmVhci1hcGktanNcIlxyXG5pbXBvcnQgZ2V0Q29uZmlnIGZyb20gXCJAL2NvbmZpZ1wiXHJcblxyXG5cclxuaW1wb3J0IHVzZUNvbnRyYWN0IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL3VzZUNvbnRyYWN0JztcclxuXHJcbndpbmRvdy5uZWFyQ29uZmlnID0gZ2V0Q29uZmlnKFwiZGV2ZWxvcG1lbnRcIik7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENyZWF0ZUV2ZW50cygpIHtcclxuICAgIGNvbnN0IHsgY29udHJhY3QgfSA9IHVzZUNvbnRyYWN0KCdFUkM3MjEnKTtcclxuICAgIC8vIEFwcGxpY2F0aW9uIGluaXRpYWxpemF0aW9uXHJcblxyXG4gICAgY29uc3QgW0V2ZW50VGl0bGUsIEV2ZW50VGl0bGVJbnB1dF0gPSBVc2VGb3JtSW5wdXQoe1xyXG4gICAgICAgIGRlZmF1bHRWYWx1ZTogXCJcIixcclxuICAgICAgICB0eXBlOiAndGV4dCcsXHJcbiAgICAgICAgcGxhY2Vob2xkZXI6ICdFdmVudCBUaXRsZScsXHJcbiAgICAgICAgaWQ6ICcnXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBbRXZlbnREYXRlLCBFdmVudERhdGVJbnB1dF0gPSBVc2VGb3JtSW5wdXQoe1xyXG4gICAgICAgIGRlZmF1bHRWYWx1ZTogXCJcIixcclxuICAgICAgICB0eXBlOiAnZGF0ZXRpbWUtbG9jYWwnLFxyXG4gICAgICAgIHBsYWNlaG9sZGVyOiAnRXZlbnQgRW5kIERhdGUgJyxcclxuICAgICAgICBpZDogJ2VuZGRhdGUnLFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBbRXZlbnRXYWxsZXRUeXBlLCBFdmVudFdhbGxldFR5cGVJbnB1dF0gPSBVc2VGb3JtSW5wdXQoe1xyXG4gICAgICAgIGRlZmF1bHRWYWx1ZTogXCJORUFSXCIsXHJcbiAgICAgICAgdHlwZTogJ3NlbGVjdCcsXHJcbiAgICAgICAgaWQ6ICd3YWxsZXRUeXBlJyxcclxuICAgICAgICBzZWxlY3Rfb3B0aW9uczogW3sgdmFsdWU6IFwiTkVBUlwiLCB0ZXh0OiBcIk5FQVJcIiB9XVxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBbRXZlbnRXYWxsZXRBZGRyZXNzLCBFdmVudFdhbGxldEFkZHJlc3NJbnB1dF0gPSBVc2VGb3JtSW5wdXQoe1xyXG4gICAgICAgIGRlZmF1bHRWYWx1ZTogXCJcIixcclxuICAgICAgICB0eXBlOiAndGV4dCcsXHJcbiAgICAgICAgcGxhY2Vob2xkZXI6ICdXYWxsZXQnLFxyXG4gICAgICAgIGlkOiAnd2FsbGV0JyxcclxuICAgIH0pO1xyXG4gICAgY29uc3QgW0V2ZW50R29hbCwgc2V0RXZlbnRHb2FsXSA9IHVzZVN0YXRlKDApO1xyXG5cclxuICAgIGNvbnN0IFtFdmVudExvZ28sIEV2ZW50TG9nb0lucHV0XSA9IFVzZUZvcm1JbnB1dCh7XHJcbiAgICAgICAgZGVmYXVsdFZhbHVlOiBcIlwiLFxyXG4gICAgICAgIHR5cGU6ICd0ZXh0JyxcclxuICAgICAgICBwbGFjZWhvbGRlcjogJ0V2ZW50IExvZ28gTGluaycsXHJcbiAgICAgICAgaWQ6ICdsb2dvJ1xyXG4gICAgfSk7XHJcbiAgICBjb25zdCBbZXZlbnRDYXRlZ29yaWVzLCBzZXRFdmVudENhdGVnb3JpZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW2NyZWF0ZUNhdGVnb3J5TW9kYWwsIHNldENyZWF0ZUNhdGVnb3J5TW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW25ld0NhdGVnb3J5VGl0bGUsIHNldE5ld0NhdGVnb3J5VGl0bGVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbbmV3Q2F0ZWdvcnlJbWdMaW5rLCBzZXROZXdDYXRlZ29yeUltZ0xpbmtdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbbmV3Q2F0ZWdvcnlQcmljZSwgc2V0TmV3Q2F0ZWdvcnlQcmljZV0gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IFtuZXdDYXRlZ29yeUFtb3VudCwgc2V0TmV3Q2F0ZWdvcnlBbW91bnRdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBbb3RoZXJDYXRlZ29yeSwgc2V0T3RoZXJDYXRlZ29yeV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFtOZWFyUHJpY2VVU0QsIHNldE5lYXJQcmljZVVTRF0gPSB1c2VTdGF0ZSgwKTtcclxuXHJcblxyXG5cclxuICAgIGFzeW5jIGZ1bmN0aW9uIENyZWF0ZUV2ZW50KCkge1xyXG4gICAgICAgIGlmICh3aW5kb3cud2FsbGV0QWNjb3VudC5pc1NpZ25lZEluKCkgPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgdG9hc3Qud2FybmluZyhcIlBsZWFzZSBjb25uZWN0IE5lYXIgQWNjb3VudCFcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGF3YWl0IHRvYXN0LnByb21pc2UoQ3JlYXRpbmdFdmVudEFpcnRhYmxlLCB7XHJcbiAgICAgICAgICAgIHBlbmRpbmc6IFwiRXZlbnQgaXMgY3JlYXRpbmcgb24gQWlydGFibGUuLi5cIixcclxuICAgICAgICAgICAgZXJyb3I6IFwiUGxlYXNlIHRyeSBhZ2FpbiBsYXRlclwiLFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBcIkV2ZW50IGhhcyBjcmVhdGVkIG9uIEFpcnRhYmxlIVwiXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgYXdhaXQgdG9hc3QucHJvbWlzZShDcmVhdGluZ0V2ZW50LCB7XHJcbiAgICAgICAgICAgIHBlbmRpbmc6IFwiRXZlbnQgaXMgY3JlYXRpbmcgb24gQXVyb3JhLi4uXCIsXHJcbiAgICAgICAgICAgIGVycm9yOiBcIlBsZWFzZSB0cnkgYWdhaW4gbGF0ZXJcIixcclxuICAgICAgICAgICAgc3VjY2VzczogXCJFdmVudCBoYXMgY3JlYXRlZCBvbiBBdXJvcmEhXCJcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbaHJlZj1cIi9kb25hdGlvblwiXScpWzBdLmNsaWNrKClcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiBDcmVhdGVDYXRlQ2F0ZWdvcmllcyhldmVudElEKSB7XHJcbiAgICAgICAgdmFyIEFpcnRhYmxlID0gcmVxdWlyZSgnYWlydGFibGUnKTtcclxuICAgICAgICBBaXJ0YWJsZS5jb25maWd1cmUoe1xyXG4gICAgICAgICAgICBlbmRwb2ludFVybDogJ2h0dHBzOi8vYXBpLmFpcnRhYmxlLmNvbScsXHJcbiAgICAgICAgICAgIGFwaUtleTogJ2tleVIxUnJjbDlPMnM5YlRzJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IGJhc2UgPSByZXF1aXJlKCdhaXJ0YWJsZScpLmJhc2UoJ2FwcGdiUkNwYmt6bWRjdWNPJyk7XHJcblxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZXZlbnRDYXRlZ29yaWVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGF3YWl0IGJhc2UoJ2V2ZW50Y2F0ZWdvcmllcycpLmNyZWF0ZShbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJmaWVsZHNcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImV2ZW50aWRcIjogZXZlbnRJRCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0aXRsZVwiOiBldmVudENhdGVnb3JpZXNbaV0udGl0bGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicHJpY2VcIjogZXZlbnRDYXRlZ29yaWVzW2ldLnByaWNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImFtb3VudFwiOiBldmVudENhdGVnb3JpZXNbaV0uYW1vdW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImltYWdlXCI6IGV2ZW50Q2F0ZWdvcmllc1tpXS5pbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSwgZnVuY3Rpb24gKGVyciwgcmVjb3JkcykgeyBjb25zb2xlLmVycm9yKGVycil9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBhc3luYyBmdW5jdGlvbiBDcmVhdGluZ0V2ZW50QWlydGFibGUoKSB7XHJcblxyXG4gICAgICAgIHZhciBBaXJ0YWJsZSA9IHJlcXVpcmUoJ2FpcnRhYmxlJyk7XHJcbiAgICAgICAgQWlydGFibGUuY29uZmlndXJlKHtcclxuICAgICAgICAgICAgZW5kcG9pbnRVcmw6ICdodHRwczovL2FwaS5haXJ0YWJsZS5jb20nLFxyXG4gICAgICAgICAgICBhcGlLZXk6ICdrZXlSMVJyY2w5TzJzOWJUcydcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCBiYXNlID0gcmVxdWlyZSgnYWlydGFibGUnKS5iYXNlKCdhcHBnYlJDcGJrem1kY3VjTycpO1xyXG5cclxuICAgICAgICBhd2FpdCBiYXNlKCdldmVudHMnKS5jcmVhdGUoW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcImZpZWxkc1wiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0aXRsZVwiOiBFdmVudFRpdGxlLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBcImVuZERhdGVcIjogRXZlbnREYXRlLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiR29hbFwiOiBFdmVudEdvYWwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJsb2dvbGlua1wiOiBFdmVudExvZ28sXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ3YWxsZXRcIjogRXZlbnRXYWxsZXRBZGRyZXNzLFxyXG4gICAgICAgICAgICAgICAgICAgIFwid2FsbGV0dHlwZVwiOiBcIk5FQVJcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXSwgYXdhaXQgZnVuY3Rpb24gKGVyciwgcmVjb3Jkcykge1xyXG4gICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgQ3JlYXRlQ2F0ZUNhdGVnb3JpZXMocmVjb3Jkc1swXS5maWVsZHMuaWQpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgQ3JlYXRpbmdFdmVudCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICAvLyAgQ29udHJhY3RcclxuICAgICAgICBjb25zb2xlLmxvZyhjb250cmFjdCk7XHJcbiAgICAgICAgY29uc3QgY3JlYXRlZE9iamVjdCA9IHtcclxuICAgICAgICAgICAgVGl0bGU6IEV2ZW50VGl0bGUsXHJcbiAgICAgICAgICAgIERhdGU6IEV2ZW50RGF0ZSxcclxuICAgICAgICAgICAgQWRkcmVzczogRXZlbnRXYWxsZXRBZGRyZXNzLFxyXG4gICAgICAgICAgICBHb2FsOiBFdmVudEdvYWwsXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgY29udHJhY3QuY3JlYXRlRXZlbnQoXHJcbiAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KGNyZWF0ZWRPYmplY3QpXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGZvcm1hdHRlciA9IG5ldyBJbnRsLk51bWJlckZvcm1hdCgnZW4tVVMnLCB7XHJcbiAgICAgICAgbWluaW11bUZyYWN0aW9uRGlnaXRzOiAyLFxyXG4gICAgICAgIG1heGltdW1GcmFjdGlvbkRpZ2l0czogMixcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IENyZWF0ZUNhdGVnb3J5ID0gKCkgPT4ge1xyXG4gICAgICAgIHZhciBuZXdfY2F0ZWdvcnkgPSB7XHJcbiAgICAgICAgICAgIHRpdGxlOiBuZXdDYXRlZ29yeVRpdGxlLFxyXG4gICAgICAgICAgICBwcmljZTogbmV3Q2F0ZWdvcnlQcmljZSxcclxuICAgICAgICAgICAgYW1vdW50OiBuZXdDYXRlZ29yeUFtb3VudCxcclxuICAgICAgICAgICAgaW1hZ2U6IG5ld0NhdGVnb3J5SW1nTGlua1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgdGVtcF9hcnIgPSBldmVudENhdGVnb3JpZXM7XHJcbiAgICAgICAgdGVtcF9hcnIucHVzaChuZXdfY2F0ZWdvcnkpO1xyXG4gICAgICAgIHZhciBzdW0gPSAwO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGVtcF9hcnIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgc3VtICs9IHRlbXBfYXJyW2ldLnByaWNlICogdGVtcF9hcnJbaV0uYW1vdW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgdXNkRXZlbnRHb2FsID0gTnVtYmVyKE5lYXJQcmljZVVTRCkgKiBOdW1iZXIoRXZlbnRHb2FsKTtcclxuICAgICAgICB2YXIgVHdvRGVjaW1hbCA9IGZvcm1hdHRlci5mb3JtYXQodXNkRXZlbnRHb2FsIC0gc3VtKTtcclxuICAgICAgICBzZXRPdGhlckNhdGVnb3J5KFR3b0RlY2ltYWwudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgc2V0RXZlbnRDYXRlZ29yaWVzKHRlbXBfYXJyKTtcclxuICAgICAgICBzZXRDcmVhdGVDYXRlZ29yeU1vZGFsKGZhbHNlKTtcclxuICAgICAgICBzZXROZXdDYXRlZ29yeVRpdGxlKFwiXCIpO1xyXG4gICAgICAgIHNldE5ld0NhdGVnb3J5SW1nTGluayhcIlwiKTtcclxuICAgICAgICBzZXROZXdDYXRlZ29yeVByaWNlKDApO1xyXG4gICAgICAgIHNldE5ld0NhdGVnb3J5QW1vdW50KDApO1xyXG4gICAgfVxyXG4gICAgY29uc3QgcmVtb3ZlQ2F0ZWdvcnkgPSAoZSkgPT4ge1xyXG4gICAgICAgIHZhciBjYXRlZ29yeV9pZCA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImNhdGVnb3J5aWRcIik7XHJcbiAgICAgICAgdmFyIHRlbXBfYXJyID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBldmVudENhdGVnb3JpZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGkgIT0gY2F0ZWdvcnlfaWQpIHtcclxuICAgICAgICAgICAgICAgIHRlbXBfYXJyLnB1c2goZXZlbnRDYXRlZ29yaWVzW2ldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRFdmVudENhdGVnb3JpZXModGVtcF9hcnIpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgZXZlbnRHb2FsQ2hhbmdlZCA9ICh2YWx1ZSkgPT4ge1xyXG4gICAgICAgIHNldEV2ZW50R29hbCh2YWx1ZSk7XHJcbiAgICAgICAgdmFyIHN1bSA9IDA7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBldmVudENhdGVnb3JpZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgc3VtICs9IGV2ZW50Q2F0ZWdvcmllc1tpXS5wcmljZSAqIGV2ZW50Q2F0ZWdvcmllc1tpXS5hbW91bnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldE90aGVyQ2F0ZWdvcnkoRXZlbnRHb2FsIC0gc3VtKTtcclxuICAgIH1cclxuICAgIGFzeW5jIGZ1bmN0aW9uIGZldGNoRGF0YSgpIHtcclxuXHJcbiAgICAgICAgLy9OZWFyIGN1cnJlbmN5XHJcbiAgICAgICAgdmFyIG5lYXJQcmljZSA9IDA7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgdmFyIG5lYXJDdXJyZW5jeVVybCA9IFwiaHR0cHM6Ly9hcGkuY29pbm1hcmtldGNhcC5jb20vZGF0YS1hcGkvdjMvY3J5cHRvY3VycmVuY3kvbWFya2V0LXBhaXJzL2xhdGVzdD9zbHVnPW5lYXItcHJvdG9jb2wmc3RhcnQ9MSZsaW1pdD0xJmNhdGVnb3J5PXNwb3Qmc29ydD1jbWNfcmFua19hZHZhbmNlZFwiO1xyXG4gICAgICAgICAgICBsZXQgb3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgICAgICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uLCB0ZXh0L3BsYWluLCAqLyonXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB2YXIgYWxsbmVhckRhdGE7XHJcbiAgICAgICAgICAgIGF3YWl0IGZldGNoKG5lYXJDdXJyZW5jeVVybCwgb3B0aW9ucykudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuICAgICAgICAgICAgICAgIC50aGVuKGpzb24gPT4gYWxsbmVhckRhdGEgPSBqc29uKVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKCdlcnJvcjonICsgZXJyKSk7XHJcbiAgICAgICAgICAgIG5lYXJQcmljZSA9IGFsbG5lYXJEYXRhLmRhdGEubWFya2V0UGFpcnNbMF0ucHJpY2U7XHJcbiAgICAgICAgfSBjYXRjaCAoZXgpIHtcclxuICAgICAgICAgICAgdmFyIG5lYXJQcmljZSA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldE5lYXJQcmljZVVTRChuZWFyUHJpY2UpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGZldGNoRGF0YSgpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD48PlxyXG4gICAgICAgICAgICA8Um93PlxyXG5cclxuICAgICAgICAgICAgICAgIDxDb2wgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiNDV2d1wiLCBiYWNrZ3JvdW5kOiBcInRyYW5zcGFyZW50XCIsIHBhZGRpbmc6IFwiMTlweFwiLCBib3JkZXJSYWRpdXM6IFwiNHB4XCIsIGhlaWdodDogXCIxMDAlXCIsIGJvcmRlcjogXCJ3aGl0ZSBzb2xpZFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbjogXCIwcHggMHB4IDMwcHggMHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDEgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBcIjEwcHhcIiB9fT5DcmVhdGUgRXZlbnQ8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luOiBcIjE4cHggMFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCIxMHB4XCIgfX0+RXZlbnQgVGl0bGU8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge0V2ZW50VGl0bGVJbnB1dH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbjogXCIxOHB4IDBcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiMTBweFwiIH19PkV2ZW50IEVuZCBEYXRlPC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtFdmVudERhdGVJbnB1dH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luOiBcIjE4cHggMFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCIxMHB4XCIgfX0+V2FsbGV0IFR5cGU8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge0V2ZW50V2FsbGV0VHlwZUlucHV0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW46IFwiMThweCAwXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7RXZlbnRXYWxsZXRUeXBlID09IFwiTkVBUlwiID8gKDw+PGg0IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCIxMHB4XCIgfX0+QWNjb3VudCBJRCBvZiB7RXZlbnRXYWxsZXRUeXBlfSB3YWxsZXQ8L2g0PjwvPikgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD4gPGg0IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCIxMHB4XCIgfX0+V2FsbGV0IEFkZHJlc3MgaW4ge0V2ZW50V2FsbGV0VHlwZX08L2g0PjwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7RXZlbnRXYWxsZXRBZGRyZXNzSW5wdXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbjogXCIxOHB4IDBcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiMTBweFwiIH19PkV2ZW50IEdvYWwgaW4ge0V2ZW50V2FsbGV0VHlwZX08L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtFdmVudEdvYWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2BFdmVudCBHb2FsIGluICR7RXZlbnRXYWxsZXRUeXBlfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBldmVudEdvYWxDaGFuZ2VkKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPXtcIm51bWJlclwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtcImdvYWxcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbjogXCIxOHB4IDBcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiMTBweFwiIH19PkNhdGVnb3JpZXMgZm9yIFN1cHBvcnQ8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5MZWZ0OiBcIi0xMHB4XCIsIG1hcmdpblJpZ2h0OiBcIi0xMHB4XCIsIGRpc3BsYXk6IFwiZmxleFwiLCBmbGV4RGlyZWN0aW9uOiBcInJvd1wiLCBmbGV4V3JhcDogXCJ3cmFwXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudENhdGVnb3JpZXMubWFwKChldmVudENhdGVnb3J5LCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogXCIzMyVcIiwgcGFkZGluZzogXCIwIDEwcHhcIiwgbWFyZ2luQm90dG9tOiBcIjEwcHhcIiB9fSBrZXk9e2luZGV4fSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBiYWNrZ3JvdW5kOiBcIndoaXRlXCIsIHBhZGRpbmc6IFwiOHB4IDE1cHhcIiwgYm9yZGVyOiBcIjFweCBzb2xpZCB0cmFuc3BhcmVudFwiLCBib3JkZXJSYWRpdXM6IFwiNXB4XCIsIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLWljb24gcG9wdXAtY2xvc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17cmVtb3ZlQ2F0ZWdvcnl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeWlkPXtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBqdXN0aWZ5Q29udGVudDogXCJmbGV4LWVuZFwiLCBmb250U2l6ZTogMjAsIGNvbG9yOiBcImJsYWNrXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCIxMHB4XCIsIGNvbG9yOiBcIiMxNTFGMjhcIiwgdGV4dEFsaWduOiBcImNlbnRlclwiIH19PntldmVudENhdGVnb3J5LnRpdGxlfTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtldmVudENhdGVnb3J5LmltYWdlfSBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGJvcmRlclJhZGl1czogXCI1cHhcIiwgaGVpZ2h0OiBcIjk0cHhcIiB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgc3R5bGU9e3sgY29sb3I6IFwiIzE1MUYyOFwiLCB0ZXh0QWxpZ246IFwiY2VudGVyXCIsIG1hcmdpblRvcDogXCIxMHB4XCIsIGxpbmVIZWlnaHQ6IFwiMTRweFwiIH19PntldmVudENhdGVnb3J5LnByaWNlICogZXZlbnRDYXRlZ29yeS5hbW91bnR9IFVTRDwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBzdHlsZT17eyBjb2xvcjogXCIjMTUxRjI4XCIsIHRleHRBbGlnbjogXCJjZW50ZXJcIiwgbGluZUhlaWdodDogXCIxNHB4XCIgfX0+KHtldmVudENhdGVnb3J5LmFtb3VudH0gcGllY2VzKTwvaDU+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjMzJVwiLCBwYWRkaW5nOiBcIjAgMTBweFwiLCBkaXNwbGF5OiBcImZsZXhcIiwgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGV2ZW50Q2F0ZWdvcmllcy5sZW5ndGggPiAwKSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKDxkaXYgc3R5bGU9e3sgYmFja2dyb3VuZDogXCJ3aGl0ZVwiLCBwYWRkaW5nOiBcIjEwcHhcIiwgYm9yZGVyOiBcIjFweCBzb2xpZCB0cmFuc3BhcmVudFwiLCBib3JkZXJSYWRpdXM6IFwiNXB4XCIsIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsIGhlaWdodDogXCI4MHB4XCIsIG1hcmdpbkJvdHRvbTogXCIxNXB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiMTBweFwiLCBjb2xvcjogXCIjMTUxRjI4XCIsIHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5PdGhlciBzdXBwb3J0PC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IHN0eWxlPXt7IGNvbG9yOiBcIiMxNTFGMjhcIiwgdGV4dEFsaWduOiBcImNlbnRlclwiLCBtYXJnaW5Ub3A6IFwiMTBweFwiLCBsaW5lSGVpZ2h0OiBcIjE0cHhcIiB9fT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdGhlckNhdGVnb3J5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gVVNEPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4pIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGJhY2tncm91bmQ6IFwid2hpdGVcIiwgcGFkZGluZzogXCIxMHB4XCIsIGJvcmRlcjogXCIxcHggc29saWQgdHJhbnNwYXJlbnRcIiwgYm9yZGVyUmFkaXVzOiBcIjVweFwiLCBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLCBoZWlnaHQ6IFwiODBweFwiLCBkaXNwbGF5OiBcImZsZXhcIiwganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIgfX0gb25DbGljaz17KCkgPT4gc2V0Q3JlYXRlQ2F0ZWdvcnlNb2RhbCh0cnVlKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDEgc3R5bGU9e3sgY29sb3I6IFwiIzc1NzU3NVwiLCB0ZXh0QWxpZ246IFwiY2VudGVyXCIsIGxpbmVIZWlnaHQ6IFwiMTRweFwiLCBmb250U2l6ZTogXCI1MHB4XCIgfX0+KzwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW46IFwiMThweCAwXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBcIjEwcHhcIiB9fT5FdmVudCBMb2dvIExpbms8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge0V2ZW50TG9nb0lucHV0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogJzE4cHggMHB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduQ29udGVudDogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FwOiAnNXB4J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJwbHVnaW5cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PkdlbmVyYXRlIFBsdWdpbj88L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHN0eWxlPXt7IG1hcmdpbjogXCIxN3B4IDAgMHB4IDBweFwiLCB3aWR0aDogXCIxMDAlXCIgfX0gb25DbGljaz17Q3JlYXRlRXZlbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ3JlYXRlIEV2ZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcblxyXG4gICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgPE1vZGFsIHNob3c9e2NyZWF0ZUNhdGVnb3J5TW9kYWx9XHJcbiAgICAgICAgICAgICAgICBvbkhpZGU9eygpID0+IHNldENyZWF0ZUNhdGVnb3J5TW9kYWwoZmFsc2UpfVxyXG4gICAgICAgICAgICAgICAgc2l6ZT0nbGcnXHJcbiAgICAgICAgICAgICAgICBjZW50ZXJlZCBzdHlsZT17eyBwYWRkaW5nOiBcIjIwcHhcIiB9fT5cclxuICAgICAgICAgICAgICAgIDxNb2RhbC5IZWFkZXIgY2xvc2VCdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgQ3JlYXRlIGEgbmV3IGNhdGVnb3J5XHJcbiAgICAgICAgICAgICAgICA8L01vZGFsLkhlYWRlcj5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luOiBcIjIwcHhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbjogXCIxOHB4IDBcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCIxMHB4XCIsIGNvbG9yOiBcImJsYWNrXCIgfX0+Q2F0ZWdvcnkgVGl0bGU8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bmV3Q2F0ZWdvcnlUaXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtcIkNhdGVnb3J5IFRpdGxlXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE5ld0NhdGVnb3J5VGl0bGUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT17XCJ0ZXh0XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17XCJjYXRfdGl0bGVcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbjogXCIxOHB4IDBcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCIxMHB4XCIsIGNvbG9yOiBcImJsYWNrXCIgfX0+QW1vdW50PC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e25ld0NhdGVnb3J5QW1vdW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e1wiQW1vdW50XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE5ld0NhdGVnb3J5QW1vdW50KGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9e1wibnVtYmVyXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17XCJjYXRfcGllY2VcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbjogXCIxOHB4IDBcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCIxMHB4XCIsIGNvbG9yOiBcImJsYWNrXCIgfX0+UHJpY2Ugb2YgQSBQaWVjZTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtuZXdDYXRlZ29yeVByaWNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e1wiQ2F0ZWdvcnkgUHJpY2VcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmV3Q2F0ZWdvcnlQcmljZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPXtcIm51bWJlclwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e1wiY2F0X3ByaWNlXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW46IFwiMThweCAwXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiMTBweFwiLCBjb2xvcjogXCJibGFja1wiIH19PkNhdGVnb3J5IEltYWdlIExpbms8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bmV3Q2F0ZWdvcnlJbWdMaW5rfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e1wiQ2F0ZWdvcnkgSW1hZ2UgTGlua1wifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROZXdDYXRlZ29yeUltZ0xpbmsoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT17XCJ0ZXh0XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17XCJjYXRfaW1hZ2VcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHN0eWxlPXt7IG1hcmdpbjogXCIxN3B4IDAgMHB4IDBweFwiLCB3aWR0aDogXCIxMDAlXCIgfX0gb25DbGljaz17Q3JlYXRlQ2F0ZWdvcnl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDcmVhdGUgQ2F0ZWdvcnlcclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L01vZGFsPlxyXG4gICAgICAgIDwvPjwvPlxyXG4gICAgKTtcclxufSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gXCI5MjAzMmNlMzVjYTc2MTY3Y2EwY1wiOyB9Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJSb3ciLCJ0b2FzdCIsIkNvbCIsIkJ1dHRvbiIsIlVzZUZvcm1JbnB1dCIsIk1vZGFsIiwiRm9ybSIsImdldENvbmZpZyIsInVzZUNvbnRyYWN0Iiwid2luZG93IiwibmVhckNvbmZpZyIsIkNyZWF0ZUV2ZW50cyIsImNvbnRyYWN0IiwiZGVmYXVsdFZhbHVlIiwidHlwZSIsInBsYWNlaG9sZGVyIiwiaWQiLCJFdmVudFRpdGxlIiwiRXZlbnRUaXRsZUlucHV0IiwiRXZlbnREYXRlIiwiRXZlbnREYXRlSW5wdXQiLCJzZWxlY3Rfb3B0aW9ucyIsInZhbHVlIiwidGV4dCIsIkV2ZW50V2FsbGV0VHlwZSIsIkV2ZW50V2FsbGV0VHlwZUlucHV0IiwiRXZlbnRXYWxsZXRBZGRyZXNzIiwiRXZlbnRXYWxsZXRBZGRyZXNzSW5wdXQiLCJFdmVudEdvYWwiLCJzZXRFdmVudEdvYWwiLCJFdmVudExvZ28iLCJFdmVudExvZ29JbnB1dCIsImV2ZW50Q2F0ZWdvcmllcyIsInNldEV2ZW50Q2F0ZWdvcmllcyIsImNyZWF0ZUNhdGVnb3J5TW9kYWwiLCJzZXRDcmVhdGVDYXRlZ29yeU1vZGFsIiwibmV3Q2F0ZWdvcnlUaXRsZSIsInNldE5ld0NhdGVnb3J5VGl0bGUiLCJuZXdDYXRlZ29yeUltZ0xpbmsiLCJzZXROZXdDYXRlZ29yeUltZ0xpbmsiLCJuZXdDYXRlZ29yeVByaWNlIiwic2V0TmV3Q2F0ZWdvcnlQcmljZSIsIm5ld0NhdGVnb3J5QW1vdW50Iiwic2V0TmV3Q2F0ZWdvcnlBbW91bnQiLCJvdGhlckNhdGVnb3J5Iiwic2V0T3RoZXJDYXRlZ29yeSIsIk5lYXJQcmljZVVTRCIsInNldE5lYXJQcmljZVVTRCIsIkNyZWF0ZUV2ZW50Iiwid2FsbGV0QWNjb3VudCIsImlzU2lnbmVkSW4iLCJ3YXJuaW5nIiwicHJvbWlzZSIsIkNyZWF0aW5nRXZlbnRBaXJ0YWJsZSIsInBlbmRpbmciLCJlcnJvciIsInN1Y2Nlc3MiLCJDcmVhdGluZ0V2ZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY2xpY2siLCJDcmVhdGVDYXRlQ2F0ZWdvcmllcyIsImV2ZW50SUQiLCJBaXJ0YWJsZSIsInJlcXVpcmUiLCJjb25maWd1cmUiLCJlbmRwb2ludFVybCIsImFwaUtleSIsImJhc2UiLCJpIiwibGVuZ3RoIiwiY3JlYXRlIiwidGl0bGUiLCJwcmljZSIsImFtb3VudCIsImltYWdlIiwiZXJyIiwicmVjb3JkcyIsImNvbnNvbGUiLCJmaWVsZHMiLCJsb2ciLCJjcmVhdGVkT2JqZWN0IiwiVGl0bGUiLCJEYXRlIiwiQWRkcmVzcyIsIkdvYWwiLCJjcmVhdGVFdmVudCIsInJlc3VsdCIsImZvcm1hdHRlciIsIkludGwiLCJOdW1iZXJGb3JtYXQiLCJtaW5pbXVtRnJhY3Rpb25EaWdpdHMiLCJtYXhpbXVtRnJhY3Rpb25EaWdpdHMiLCJDcmVhdGVDYXRlZ29yeSIsIm5ld19jYXRlZ29yeSIsInRlbXBfYXJyIiwicHVzaCIsInN1bSIsInVzZEV2ZW50R29hbCIsIk51bWJlciIsIlR3b0RlY2ltYWwiLCJmb3JtYXQiLCJ0b1N0cmluZyIsInJlbW92ZUNhdGVnb3J5IiwiZSIsImNhdGVnb3J5X2lkIiwidGFyZ2V0IiwiZ2V0QXR0cmlidXRlIiwiZXZlbnRHb2FsQ2hhbmdlZCIsImZldGNoRGF0YSIsIm5lYXJQcmljZSIsIm5lYXJDdXJyZW5jeVVybCIsIm9wdGlvbnMiLCJtZXRob2QiLCJoZWFkZXJzIiwiQWNjZXB0IiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsImFsbG5lYXJEYXRhIiwiY2F0Y2giLCJkYXRhIiwibWFya2V0UGFpcnMiLCJ3aWR0aCIsImJhY2tncm91bmQiLCJwYWRkaW5nIiwiYm9yZGVyUmFkaXVzIiwiaGVpZ2h0IiwiYm9yZGVyIiwibWFyZ2luIiwibWFyZ2luQm90dG9tIiwibWFyZ2luTGVmdCIsIm1hcmdpblJpZ2h0IiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJmbGV4V3JhcCIsImV2ZW50Q2F0ZWdvcnkiLCJpbmRleCIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImZvbnRTaXplIiwiY29sb3IiLCJ0ZXh0QWxpZ24iLCJtYXJnaW5Ub3AiLCJsaW5lSGVpZ2h0IiwiYWxpZ25Db250ZW50IiwiZ2FwIl0sInNvdXJjZVJvb3QiOiIifQ==