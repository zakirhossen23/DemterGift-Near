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

  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(0),
      _useState16 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState15, 2),
      otherCategory = _useState16[0],
      setOtherCategory = _useState16[1];

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
              base('events').create([{
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
              i = 0;

            case 6:
              if (!(i < eventCategories.length)) {
                _context3.next = 12;
                break;
              }

              _context3.next = 9;
              return base('eventcategories').create([{
                "fields": {
                  "eventid": eventID,
                  "title": eventCategories[i].title,
                  "price": eventCategories[i].price,
                  "amount": eventCategories[i].amount,
                  "image": eventCategories[i].image
                }
              }], function (err, records) {});

            case 9:
              i++;
              _context3.next = 6;
              break;

            case 12:
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
                Type: EventWalletType,
                Address: EventWalletAddress,
                Goal: EventGoal,
                logo: EventLogo,
                categories: eventCategories
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

    setOtherCategory(EventGoal - sum);
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
/******/ 	__webpack_require__.h = function() { return "f1d0ee11a13114a8abc5"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2luZGV4LjBkZDJjOTM4M2VkZjBlNDNhMjk5LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQU9BO0FBR0E7QUFHQTtBQUVBVyxNQUFNLENBQUNDLFVBQVAsR0FBb0JILDhDQUFTLENBQUMsYUFBRCxDQUE3QjtBQUNlLFNBQVNJLFlBQVQsR0FBd0I7QUFDbkMscUJBQXFCSCxrRUFBVyxDQUFDLFFBQUQsQ0FBaEM7QUFBQSxNQUFRSSxRQUFSLGdCQUFRQSxRQUFSLENBRG1DLENBRW5DOzs7QUFFQSxzQkFBc0NSLCtFQUFZLENBQUM7QUFDL0NTLElBQUFBLFlBQVksRUFBRSxFQURpQztBQUUvQ0MsSUFBQUEsSUFBSSxFQUFFLE1BRnlDO0FBRy9DQyxJQUFBQSxXQUFXLEVBQUUsYUFIa0M7QUFJL0NDLElBQUFBLEVBQUUsRUFBRTtBQUoyQyxHQUFELENBQWxEO0FBQUE7QUFBQSxNQUFPQyxVQUFQO0FBQUEsTUFBbUJDLGVBQW5COztBQU9BLHVCQUFvQ2QsK0VBQVksQ0FBQztBQUM3Q1MsSUFBQUEsWUFBWSxFQUFFLEVBRCtCO0FBRTdDQyxJQUFBQSxJQUFJLEVBQUUsZ0JBRnVDO0FBRzdDQyxJQUFBQSxXQUFXLEVBQUUsaUJBSGdDO0FBSTdDQyxJQUFBQSxFQUFFLEVBQUU7QUFKeUMsR0FBRCxDQUFoRDtBQUFBO0FBQUEsTUFBT0csU0FBUDtBQUFBLE1BQWtCQyxjQUFsQjs7QUFNQSx1QkFBZ0RoQiwrRUFBWSxDQUFDO0FBQ3pEUyxJQUFBQSxZQUFZLEVBQUUsTUFEMkM7QUFFekRDLElBQUFBLElBQUksRUFBRSxRQUZtRDtBQUd6REUsSUFBQUEsRUFBRSxFQUFFLFlBSHFEO0FBSXpESyxJQUFBQSxjQUFjLEVBQUUsQ0FBQztBQUFFQyxNQUFBQSxLQUFLLEVBQUUsTUFBVDtBQUFpQkMsTUFBQUEsSUFBSSxFQUFFO0FBQXZC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aURBQUMscUVBQUQ7QUFDSSxTQUFLLEVBQUUvRSxnQkFEWDtBQUVJLGVBQVcsRUFBRSxnQkFGakI7QUFHSSxZQUFRLEVBQUUsa0JBQUN3RCxDQUFEO0FBQUEsYUFBT3ZELG1CQUFtQixDQUFDdUQsQ0FBQyxDQUFDRSxNQUFGLENBQVM1RSxLQUFWLENBQTFCO0FBQUEsS0FIZDtBQUlJLFFBQUksRUFBRSxRQUpWO0FBS0ksTUFBRSxFQUFFO0FBTFIsSUFGSixDQXJCSixlQStCSTtBQUFLLFNBQUssRUFBRTtBQUFFcUYsTUFBQUEsTUFBTSxFQUFFO0FBQVY7QUFBWixrQkFDSTtBQUFJLFNBQUssRUFBRTtBQUFFQyxNQUFBQSxZQUFZLEVBQUUsTUFBaEI7QUFBd0JXLE1BQUFBLEtBQUssRUFBRTtBQUEvQjtBQUFYLDJCQURKLGVBRUksaURBQUMscUVBQUQ7QUFDSSxTQUFLLEVBQUVqRixrQkFEWDtBQUVJLGVBQVcsRUFBRSxxQkFGakI7QUFHSSxZQUFRLEVBQUUsa0JBQUMwRCxDQUFEO0FBQUEsYUFBT3pELHFCQUFxQixDQUFDeUQsQ0FBQyxDQUFDRSxNQUFGLENBQVM1RSxLQUFWLENBQTVCO0FBQUEsS0FIZDtBQUlJLFFBQUksRUFBRSxNQUpWO0FBS0ksTUFBRSxFQUFFO0FBTFIsSUFGSixDQS9CSixlQXlDSSxpREFBQywrREFBRDtBQUFRLFNBQUssRUFBRTtBQUFFcUYsTUFBQUEsTUFBTSxFQUFFLGdCQUFWO0FBQTRCTixNQUFBQSxLQUFLLEVBQUU7QUFBbkMsS0FBZjtBQUE0RCxXQUFPLEVBQUVYO0FBQXJFLHVCQXpDSixDQVBKLENBM0dGLENBQUYsQ0FESjtBQW1LSDs7Ozs7Ozs7VUMzV0QscUNBQXFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGVtZXRlcmdpZnQvLi9zcmMvcGFnZXMvQ3JlYXRlRXZlbnRzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9kZW1ldGVyZ2lmdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSb3cgZnJvbSAncmVhY3QtYm9vdHN0cmFwL1Jvdyc7XHJcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xyXG5pbXBvcnQgQ29sIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Db2wnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9CdXR0b24nO1xyXG5pbXBvcnQgVXNlRm9ybUlucHV0IGZyb20gJ0AvY29tcG9uZW50cy9jb21wb25lbnRzL1VzZUZvcm1JbnB1dCc7XHJcbmltcG9ydCB7IGNyZWF0ZUV2ZW50QVBJLCBjcmVhdGVFdmVudENhdGVnb3J5QVBJIH0gZnJvbSAnQC9wYWdlcy9FdmVudHMvZXZlbnQnO1xyXG5pbXBvcnQgeyBDcmVhdGVQbHVnaW4gfSBmcm9tICdAL3BhZ2VzL0V2ZW50cy9ldmVudCc7XHJcbmltcG9ydCB7IEljb24gfSBmcm9tICdAL2NvbXBvbmVudHMvY29tbW9uL0ljb24nXHJcbmltcG9ydCBNb2RhbCBmcm9tICdyZWFjdC1ib290c3RyYXAvTW9kYWwnO1xyXG5pbXBvcnQgRm9ybSBmcm9tICdyZWFjdC1ib290c3RyYXAvRm9ybSc7XHJcbmltcG9ydCB7XHJcbiAgICBCdWlsZGVyRmllbGQsXHJcbiAgICBCdWlsZGVyU3VibWl0QnV0dG9uLFxyXG4gICAgQnVpbGRlclRyYW5zYWN0aW9uLFxyXG59IGZyb20gJ0AvbW9kdWxlcy9CdWlsZGVyL2NvbXBvbmVudHMnXHJcbmltcG9ydCB7IFNlbGVjdCB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IFwicmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lXCI7XHJcblxyXG5pbXBvcnQgKiBhcyBuZWFyQVBJIGZyb20gXCJuZWFyLWFwaS1qc1wiXHJcbmltcG9ydCBnZXRDb25maWcgZnJvbSBcIkAvY29uZmlnXCJcclxuXHJcblxyXG5pbXBvcnQgdXNlQ29udHJhY3QgZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvdXNlQ29udHJhY3QnO1xyXG5cclxud2luZG93Lm5lYXJDb25maWcgPSBnZXRDb25maWcoXCJkZXZlbG9wbWVudFwiKTtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ3JlYXRlRXZlbnRzKCkge1xyXG4gICAgY29uc3QgeyBjb250cmFjdCB9ID0gdXNlQ29udHJhY3QoJ0VSQzcyMScpO1xyXG4gICAgLy8gQXBwbGljYXRpb24gaW5pdGlhbGl6YXRpb25cclxuXHJcbiAgICBjb25zdCBbRXZlbnRUaXRsZSwgRXZlbnRUaXRsZUlucHV0XSA9IFVzZUZvcm1JbnB1dCh7XHJcbiAgICAgICAgZGVmYXVsdFZhbHVlOiBcIlwiLFxyXG4gICAgICAgIHR5cGU6ICd0ZXh0JyxcclxuICAgICAgICBwbGFjZWhvbGRlcjogJ0V2ZW50IFRpdGxlJyxcclxuICAgICAgICBpZDogJydcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IFtFdmVudERhdGUsIEV2ZW50RGF0ZUlucHV0XSA9IFVzZUZvcm1JbnB1dCh7XHJcbiAgICAgICAgZGVmYXVsdFZhbHVlOiBcIlwiLFxyXG4gICAgICAgIHR5cGU6ICdkYXRldGltZS1sb2NhbCcsXHJcbiAgICAgICAgcGxhY2Vob2xkZXI6ICdFdmVudCBFbmQgRGF0ZSAnLFxyXG4gICAgICAgIGlkOiAnZW5kZGF0ZScsXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IFtFdmVudFdhbGxldFR5cGUsIEV2ZW50V2FsbGV0VHlwZUlucHV0XSA9IFVzZUZvcm1JbnB1dCh7XHJcbiAgICAgICAgZGVmYXVsdFZhbHVlOiBcIk5FQVJcIixcclxuICAgICAgICB0eXBlOiAnc2VsZWN0JyxcclxuICAgICAgICBpZDogJ3dhbGxldFR5cGUnLFxyXG4gICAgICAgIHNlbGVjdF9vcHRpb25zOiBbeyB2YWx1ZTogXCJORUFSXCIsIHRleHQ6IFwiTkVBUlwiIH1dXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IFtFdmVudFdhbGxldEFkZHJlc3MsIEV2ZW50V2FsbGV0QWRkcmVzc0lucHV0XSA9IFVzZUZvcm1JbnB1dCh7XHJcbiAgICAgICAgZGVmYXVsdFZhbHVlOiBcIlwiLFxyXG4gICAgICAgIHR5cGU6ICd0ZXh0JyxcclxuICAgICAgICBwbGFjZWhvbGRlcjogJ1dhbGxldCcsXHJcbiAgICAgICAgaWQ6ICd3YWxsZXQnLFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBbRXZlbnRHb2FsLCBzZXRFdmVudEdvYWxdID0gdXNlU3RhdGUoMCk7XHJcblxyXG4gICAgY29uc3QgW0V2ZW50TG9nbywgRXZlbnRMb2dvSW5wdXRdID0gVXNlRm9ybUlucHV0KHtcclxuICAgICAgICBkZWZhdWx0VmFsdWU6IFwiXCIsXHJcbiAgICAgICAgdHlwZTogJ3RleHQnLFxyXG4gICAgICAgIHBsYWNlaG9sZGVyOiAnRXZlbnQgTG9nbyBMaW5rJyxcclxuICAgICAgICBpZDogJ2xvZ28nXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IFtldmVudENhdGVnb3JpZXMsIHNldEV2ZW50Q2F0ZWdvcmllc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbY3JlYXRlQ2F0ZWdvcnlNb2RhbCwgc2V0Q3JlYXRlQ2F0ZWdvcnlNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbbmV3Q2F0ZWdvcnlUaXRsZSwgc2V0TmV3Q2F0ZWdvcnlUaXRsZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFtuZXdDYXRlZ29yeUltZ0xpbmssIHNldE5ld0NhdGVnb3J5SW1nTGlua10gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFtuZXdDYXRlZ29yeVByaWNlLCBzZXROZXdDYXRlZ29yeVByaWNlXSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW25ld0NhdGVnb3J5QW1vdW50LCBzZXROZXdDYXRlZ29yeUFtb3VudF0gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IFtvdGhlckNhdGVnb3J5LCBzZXRPdGhlckNhdGVnb3J5XSA9IHVzZVN0YXRlKDApO1xyXG5cclxuICAgIGFzeW5jIGZ1bmN0aW9uIENyZWF0ZUV2ZW50KCkge1xyXG4gICAgICAgIGlmICh3aW5kb3cud2FsbGV0QWNjb3VudC5pc1NpZ25lZEluKCkgPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgdG9hc3Qud2FybmluZyhcIlBsZWFzZSBjb25uZWN0IE5lYXIgQWNjb3VudCFcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGF3YWl0IHRvYXN0LnByb21pc2UoQ3JlYXRpbmdFdmVudEFpcnRhYmxlLCB7XHJcbiAgICAgICAgICAgIHBlbmRpbmc6IFwiRXZlbnQgaXMgY3JlYXRpbmcgb24gQWlydGFibGUuLi5cIixcclxuICAgICAgICAgICAgZXJyb3I6IFwiUGxlYXNlIHRyeSBhZ2FpbiBsYXRlclwiLFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBcIkV2ZW50IGhhcyBjcmVhdGVkIG9uIEFpcnRhYmxlIVwiXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgYXdhaXQgdG9hc3QucHJvbWlzZShDcmVhdGluZ0V2ZW50LCB7XHJcbiAgICAgICAgICAgIHBlbmRpbmc6IFwiRXZlbnQgaXMgY3JlYXRpbmcgb24gQXVyb3JhLi4uXCIsXHJcbiAgICAgICAgICAgIGVycm9yOiBcIlBsZWFzZSB0cnkgYWdhaW4gbGF0ZXJcIixcclxuICAgICAgICAgICAgc3VjY2VzczogXCJFdmVudCBoYXMgY3JlYXRlZCBvbiBBdXJvcmEhXCJcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbaHJlZj1cIi9kb25hdGlvblwiXScpWzBdLmNsaWNrKClcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiBDcmVhdGluZ0V2ZW50QWlydGFibGUoKSB7XHJcblxyXG4gICAgICAgIHZhciBBaXJ0YWJsZSA9IHJlcXVpcmUoJ2FpcnRhYmxlJyk7XHJcbiAgICAgICAgQWlydGFibGUuY29uZmlndXJlKHtcclxuICAgICAgICAgICAgZW5kcG9pbnRVcmw6ICdodHRwczovL2FwaS5haXJ0YWJsZS5jb20nLFxyXG4gICAgICAgICAgICBhcGlLZXk6ICdrZXlSMVJyY2w5TzJzOWJUcydcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCBiYXNlID0gcmVxdWlyZSgnYWlydGFibGUnKS5iYXNlKCdhcHBnYlJDcGJrem1kY3VjTycpO1xyXG4gICAgICAgIHZhciBldmVudElEID0gMDtcclxuICAgICAgICBiYXNlKCdldmVudHMnKS5jcmVhdGUoW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcImZpZWxkc1wiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0aXRsZVwiOiBFdmVudFRpdGxlLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBcImVuZERhdGVcIjogRXZlbnREYXRlLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiR29hbFwiOiBFdmVudEdvYWwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJsb2dvbGlua1wiOiBFdmVudExvZ28sXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ3YWxsZXRcIjogRXZlbnRXYWxsZXRBZGRyZXNzLFxyXG4gICAgICAgICAgICAgICAgICAgIFwid2FsbGV0dHlwZVwiOiBcIk5FQVJcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXSwgZnVuY3Rpb24gKGVyciwgcmVjb3Jkcykge1xyXG4gICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmVjb3Jkcy5mb3JFYWNoKGZ1bmN0aW9uIChyZWNvcmQpIHtcclxuICAgICAgICAgICAgICAgIGV2ZW50SUQgPSByZWNvcmQuZ2V0SWQoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBldmVudENhdGVnb3JpZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgYXdhaXQgYmFzZSgnZXZlbnRjYXRlZ29yaWVzJykuY3JlYXRlKFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImZpZWxkc1wiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZXZlbnRpZFwiOiBldmVudElELFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInRpdGxlXCI6IGV2ZW50Q2F0ZWdvcmllc1tpXS50aXRsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJwcmljZVwiOiBldmVudENhdGVnb3JpZXNbaV0ucHJpY2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYW1vdW50XCI6IGV2ZW50Q2F0ZWdvcmllc1tpXS5hbW91bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaW1hZ2VcIjogZXZlbnRDYXRlZ29yaWVzW2ldLmltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLCBmdW5jdGlvbiAoZXJyLCByZWNvcmRzKSB7IH0pO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IENyZWF0aW5nRXZlbnQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgLy8gIENvbnRyYWN0XHJcbiAgICAgICAgY29uc29sZS5sb2coY29udHJhY3QpO1xyXG4gICAgICAgIGNvbnN0IGNyZWF0ZWRPYmplY3QgPSB7XHJcbiAgICAgICAgICAgIFRpdGxlOiBFdmVudFRpdGxlLFxyXG4gICAgICAgICAgICBEYXRlOiBFdmVudERhdGUsXHJcbiAgICAgICAgICAgIFR5cGU6IEV2ZW50V2FsbGV0VHlwZSxcclxuICAgICAgICAgICAgQWRkcmVzczogRXZlbnRXYWxsZXRBZGRyZXNzLFxyXG4gICAgICAgICAgICBHb2FsOiBFdmVudEdvYWwsXHJcbiAgICAgICAgICAgIGxvZ286IEV2ZW50TG9nbyxcclxuICAgICAgICAgICAgY2F0ZWdvcmllczogZXZlbnRDYXRlZ29yaWVzXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgY29udHJhY3QuY3JlYXRlRXZlbnQoXHJcbiAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KGNyZWF0ZWRPYmplY3QpXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgIFxyXG4gICAgfTtcclxuXHJcblxyXG4gICAgY29uc3QgQ3JlYXRlQ2F0ZWdvcnkgPSAoKSA9PiB7XHJcbiAgICAgICAgdmFyIG5ld19jYXRlZ29yeSA9IHtcclxuICAgICAgICAgICAgdGl0bGU6IG5ld0NhdGVnb3J5VGl0bGUsXHJcbiAgICAgICAgICAgIHByaWNlOiBuZXdDYXRlZ29yeVByaWNlLFxyXG4gICAgICAgICAgICBhbW91bnQ6IG5ld0NhdGVnb3J5QW1vdW50LFxyXG4gICAgICAgICAgICBpbWFnZTogbmV3Q2F0ZWdvcnlJbWdMaW5rXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciB0ZW1wX2FyciA9IGV2ZW50Q2F0ZWdvcmllcztcclxuICAgICAgICB0ZW1wX2Fyci5wdXNoKG5ld19jYXRlZ29yeSk7XHJcbiAgICAgICAgdmFyIHN1bSA9IDA7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0ZW1wX2Fyci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBzdW0gKz0gdGVtcF9hcnJbaV0ucHJpY2UgKiB0ZW1wX2FycltpXS5hbW91bnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldE90aGVyQ2F0ZWdvcnkoRXZlbnRHb2FsIC0gc3VtKTtcclxuICAgICAgICBzZXRFdmVudENhdGVnb3JpZXModGVtcF9hcnIpO1xyXG4gICAgICAgIHNldENyZWF0ZUNhdGVnb3J5TW9kYWwoZmFsc2UpO1xyXG4gICAgICAgIHNldE5ld0NhdGVnb3J5VGl0bGUoXCJcIik7XHJcbiAgICAgICAgc2V0TmV3Q2F0ZWdvcnlJbWdMaW5rKFwiXCIpO1xyXG4gICAgICAgIHNldE5ld0NhdGVnb3J5UHJpY2UoMCk7XHJcbiAgICAgICAgc2V0TmV3Q2F0ZWdvcnlBbW91bnQoMCk7XHJcbiAgICB9XHJcbiAgICBjb25zdCByZW1vdmVDYXRlZ29yeSA9IChlKSA9PiB7XHJcbiAgICAgICAgdmFyIGNhdGVnb3J5X2lkID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiY2F0ZWdvcnlpZFwiKTtcclxuICAgICAgICB2YXIgdGVtcF9hcnIgPSBbXTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGV2ZW50Q2F0ZWdvcmllcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoaSAhPSBjYXRlZ29yeV9pZCkge1xyXG4gICAgICAgICAgICAgICAgdGVtcF9hcnIucHVzaChldmVudENhdGVnb3JpZXNbaV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldEV2ZW50Q2F0ZWdvcmllcyh0ZW1wX2Fycik7XHJcbiAgICB9XHJcbiAgICBjb25zdCBldmVudEdvYWxDaGFuZ2VkID0gKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgc2V0RXZlbnRHb2FsKHZhbHVlKTtcclxuICAgICAgICB2YXIgc3VtID0gMDtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGV2ZW50Q2F0ZWdvcmllcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBzdW0gKz0gZXZlbnRDYXRlZ29yaWVzW2ldLnByaWNlICogZXZlbnRDYXRlZ29yaWVzW2ldLmFtb3VudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0T3RoZXJDYXRlZ29yeShFdmVudEdvYWwgLSBzdW0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Pjw+XHJcbiAgICAgICAgICAgIDxSb3c+XHJcblxyXG4gICAgICAgICAgICAgICAgPENvbCA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogXCI0NXZ3XCIsIGJhY2tncm91bmQ6IFwidHJhbnNwYXJlbnRcIiwgcGFkZGluZzogXCIxOXB4XCIsIGJvcmRlclJhZGl1czogXCI0cHhcIiwgaGVpZ2h0OiBcIjEwMCVcIiwgYm9yZGVyOiBcIndoaXRlIHNvbGlkXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luOiBcIjBweCAwcHggMzBweCAwcHhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiMTBweFwiIH19PkNyZWF0ZSBFdmVudDwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW46IFwiMThweCAwXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBcIjEwcHhcIiB9fT5FdmVudCBUaXRsZTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7RXZlbnRUaXRsZUlucHV0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luOiBcIjE4cHggMFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCIxMHB4XCIgfX0+RXZlbnQgRW5kIERhdGU8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge0V2ZW50RGF0ZUlucHV0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW46IFwiMThweCAwXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBcIjEwcHhcIiB9fT5XYWxsZXQgVHlwZTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7RXZlbnRXYWxsZXRUeXBlSW5wdXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbjogXCIxOHB4IDBcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtFdmVudFdhbGxldFR5cGUgPT0gXCJORUFSXCIgPyAoPD48aDQgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBcIjEwcHhcIiB9fT5BY2NvdW50IElEIG9mIHtFdmVudFdhbGxldFR5cGV9IHdhbGxldDwvaDQ+PC8+KSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PiA8aDQgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBcIjEwcHhcIiB9fT5XYWxsZXQgQWRkcmVzcyBpbiB7RXZlbnRXYWxsZXRUeXBlfTwvaDQ+PC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtFdmVudFdhbGxldEFkZHJlc3NJbnB1dH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luOiBcIjE4cHggMFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCIxMHB4XCIgfX0+RXZlbnQgR29hbCBpbiB7RXZlbnRXYWxsZXRUeXBlfTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e0V2ZW50R29hbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17YEV2ZW50IEdvYWwgaW4gJHtFdmVudFdhbGxldFR5cGV9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGV2ZW50R29hbENoYW5nZWQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9e1wibnVtYmVyXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e1wiZ29hbFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luOiBcIjE4cHggMFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCIxMHB4XCIgfX0+Q2F0ZWdvcmllcyBmb3IgU3VwcG9ydDwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkxlZnQ6IFwiLTEwcHhcIiwgbWFyZ2luUmlnaHQ6IFwiLTEwcHhcIiwgZGlzcGxheTogXCJmbGV4XCIsIGZsZXhEaXJlY3Rpb246IFwicm93XCIsIGZsZXhXcmFwOiBcIndyYXBcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50Q2F0ZWdvcmllcy5tYXAoKGV2ZW50Q2F0ZWdvcnksIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjMzJVwiLCBwYWRkaW5nOiBcIjAgMTBweFwiLCBtYXJnaW5Cb3R0b206IFwiMTBweFwiIH19IGtleT17aW5kZXh9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGJhY2tncm91bmQ6IFwid2hpdGVcIiwgcGFkZGluZzogXCI4cHggMTVweFwiLCBib3JkZXI6IFwiMXB4IHNvbGlkIHRyYW5zcGFyZW50XCIsIGJvcmRlclJhZGl1czogXCI1cHhcIiwgYWxpZ25JdGVtczogXCJjZW50ZXJcIiwgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4taWNvbiBwb3B1cC1jbG9zZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtyZW1vdmVDYXRlZ29yeX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5aWQ9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGp1c3RpZnlDb250ZW50OiBcImZsZXgtZW5kXCIsIGZvbnRTaXplOiAyMCwgY29sb3I6IFwiYmxhY2tcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBYXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBcIjEwcHhcIiwgY29sb3I6IFwiIzE1MUYyOFwiLCB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+e2V2ZW50Q2F0ZWdvcnkudGl0bGV9PC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2V2ZW50Q2F0ZWdvcnkuaW1hZ2V9IHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgYm9yZGVyUmFkaXVzOiBcIjVweFwiLCBoZWlnaHQ6IFwiOTRweFwiIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBzdHlsZT17eyBjb2xvcjogXCIjMTUxRjI4XCIsIHRleHRBbGlnbjogXCJjZW50ZXJcIiwgbWFyZ2luVG9wOiBcIjEwcHhcIiwgbGluZUhlaWdodDogXCIxNHB4XCIgfX0+e2V2ZW50Q2F0ZWdvcnkucHJpY2UgKiBldmVudENhdGVnb3J5LmFtb3VudH0gVVNEPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IHN0eWxlPXt7IGNvbG9yOiBcIiMxNTFGMjhcIiwgdGV4dEFsaWduOiBcImNlbnRlclwiLCBsaW5lSGVpZ2h0OiBcIjE0cHhcIiB9fT4oe2V2ZW50Q2F0ZWdvcnkuYW1vdW50fSBwaWVjZXMpPC9oNT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiMzMlXCIsIHBhZGRpbmc6IFwiMCAxMHB4XCIsIGRpc3BsYXk6IFwiZmxleFwiLCBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZXZlbnRDYXRlZ29yaWVzLmxlbmd0aCA+IDApID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoPGRpdiBzdHlsZT17eyBiYWNrZ3JvdW5kOiBcIndoaXRlXCIsIHBhZGRpbmc6IFwiMTBweFwiLCBib3JkZXI6IFwiMXB4IHNvbGlkIHRyYW5zcGFyZW50XCIsIGJvcmRlclJhZGl1czogXCI1cHhcIiwgYWxpZ25JdGVtczogXCJjZW50ZXJcIiwgaGVpZ2h0OiBcIjgwcHhcIiwgbWFyZ2luQm90dG9tOiBcIjE1cHhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCIxMHB4XCIsIGNvbG9yOiBcIiMxNTFGMjhcIiwgdGV4dEFsaWduOiBcImNlbnRlclwiIH19Pk90aGVyIHN1cHBvcnQ8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgc3R5bGU9e3sgY29sb3I6IFwiIzE1MUYyOFwiLCB0ZXh0QWxpZ246IFwiY2VudGVyXCIsIG1hcmdpblRvcDogXCIxMHB4XCIsIGxpbmVIZWlnaHQ6IFwiMTRweFwiIH19PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG90aGVyQ2F0ZWdvcnlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBVU0Q8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PikgOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgYmFja2dyb3VuZDogXCJ3aGl0ZVwiLCBwYWRkaW5nOiBcIjEwcHhcIiwgYm9yZGVyOiBcIjFweCBzb2xpZCB0cmFuc3BhcmVudFwiLCBib3JkZXJSYWRpdXM6IFwiNXB4XCIsIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsIGhlaWdodDogXCI4MHB4XCIsIGRpc3BsYXk6IFwiZmxleFwiLCBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIiB9fSBvbkNsaWNrPXsoKSA9PiBzZXRDcmVhdGVDYXRlZ29yeU1vZGFsKHRydWUpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBzdHlsZT17eyBjb2xvcjogXCIjNzU3NTc1XCIsIHRleHRBbGlnbjogXCJjZW50ZXJcIiwgbGluZUhlaWdodDogXCIxNHB4XCIsIGZvbnRTaXplOiBcIjUwcHhcIiB9fT4rPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbjogXCIxOHB4IDBcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiMTBweFwiIH19PkV2ZW50IExvZ28gTGluazwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7RXZlbnRMb2dvSW5wdXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAnMThweCAwcHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ25Db250ZW50OiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYXA6ICc1cHgnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBpZD1cInBsdWdpblwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+R2VuZXJhdGUgUGx1Z2luPzwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gc3R5bGU9e3sgbWFyZ2luOiBcIjE3cHggMCAwcHggMHB4XCIsIHdpZHRoOiBcIjEwMCVcIiB9fSBvbkNsaWNrPXtDcmVhdGVFdmVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDcmVhdGUgRXZlbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuXHJcbiAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICA8TW9kYWwgc2hvdz17Y3JlYXRlQ2F0ZWdvcnlNb2RhbH1cclxuICAgICAgICAgICAgICAgIG9uSGlkZT17KCkgPT4gc2V0Q3JlYXRlQ2F0ZWdvcnlNb2RhbChmYWxzZSl9XHJcbiAgICAgICAgICAgICAgICBzaXplPSdsZydcclxuICAgICAgICAgICAgICAgIGNlbnRlcmVkIHN0eWxlPXt7IHBhZGRpbmc6IFwiMjBweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgPE1vZGFsLkhlYWRlciBjbG9zZUJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICBDcmVhdGUgYSBuZXcgY2F0ZWdvcnlcclxuICAgICAgICAgICAgICAgIDwvTW9kYWwuSGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW46IFwiMjBweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luOiBcIjE4cHggMFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBcIjEwcHhcIiwgY29sb3I6IFwiYmxhY2tcIiB9fT5DYXRlZ29yeSBUaXRsZTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtuZXdDYXRlZ29yeVRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e1wiQ2F0ZWdvcnkgVGl0bGVcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmV3Q2F0ZWdvcnlUaXRsZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPXtcInRleHRcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtcImNhdF90aXRsZVwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luOiBcIjE4cHggMFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBcIjEwcHhcIiwgY29sb3I6IFwiYmxhY2tcIiB9fT5BbW91bnQ8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bmV3Q2F0ZWdvcnlBbW91bnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17XCJBbW91bnRcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmV3Q2F0ZWdvcnlBbW91bnQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT17XCJudW1iZXJcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtcImNhdF9waWVjZVwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luOiBcIjE4cHggMFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBcIjEwcHhcIiwgY29sb3I6IFwiYmxhY2tcIiB9fT5QcmljZSBvZiBBIFBpZWNlPC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e25ld0NhdGVnb3J5UHJpY2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17XCJDYXRlZ29yeSBQcmljZVwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROZXdDYXRlZ29yeVByaWNlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9e1wibnVtYmVyXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17XCJjYXRfcHJpY2VcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbjogXCIxOHB4IDBcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCIxMHB4XCIsIGNvbG9yOiBcImJsYWNrXCIgfX0+Q2F0ZWdvcnkgSW1hZ2UgTGluazwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtuZXdDYXRlZ29yeUltZ0xpbmt9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17XCJDYXRlZ29yeSBJbWFnZSBMaW5rXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE5ld0NhdGVnb3J5SW1nTGluayhlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPXtcInRleHRcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtcImNhdF9pbWFnZVwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gc3R5bGU9e3sgbWFyZ2luOiBcIjE3cHggMCAwcHggMHB4XCIsIHdpZHRoOiBcIjEwMCVcIiB9fSBvbkNsaWNrPXtDcmVhdGVDYXRlZ29yeX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENyZWF0ZSBDYXRlZ29yeVxyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvTW9kYWw+XHJcbiAgICAgICAgPC8+PC8+XHJcbiAgICApO1xyXG59IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gZnVuY3Rpb24oKSB7IHJldHVybiBcImYxZDBlZTExYTEzMTE0YThhYmM1XCI7IH0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIlJvdyIsInRvYXN0IiwiQ29sIiwiQnV0dG9uIiwiVXNlRm9ybUlucHV0IiwiTW9kYWwiLCJGb3JtIiwiZ2V0Q29uZmlnIiwidXNlQ29udHJhY3QiLCJ3aW5kb3ciLCJuZWFyQ29uZmlnIiwiQ3JlYXRlRXZlbnRzIiwiY29udHJhY3QiLCJkZWZhdWx0VmFsdWUiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJpZCIsIkV2ZW50VGl0bGUiLCJFdmVudFRpdGxlSW5wdXQiLCJFdmVudERhdGUiLCJFdmVudERhdGVJbnB1dCIsInNlbGVjdF9vcHRpb25zIiwidmFsdWUiLCJ0ZXh0IiwiRXZlbnRXYWxsZXRUeXBlIiwiRXZlbnRXYWxsZXRUeXBlSW5wdXQiLCJFdmVudFdhbGxldEFkZHJlc3MiLCJFdmVudFdhbGxldEFkZHJlc3NJbnB1dCIsIkV2ZW50R29hbCIsInNldEV2ZW50R29hbCIsIkV2ZW50TG9nbyIsIkV2ZW50TG9nb0lucHV0IiwiZXZlbnRDYXRlZ29yaWVzIiwic2V0RXZlbnRDYXRlZ29yaWVzIiwiY3JlYXRlQ2F0ZWdvcnlNb2RhbCIsInNldENyZWF0ZUNhdGVnb3J5TW9kYWwiLCJuZXdDYXRlZ29yeVRpdGxlIiwic2V0TmV3Q2F0ZWdvcnlUaXRsZSIsIm5ld0NhdGVnb3J5SW1nTGluayIsInNldE5ld0NhdGVnb3J5SW1nTGluayIsIm5ld0NhdGVnb3J5UHJpY2UiLCJzZXROZXdDYXRlZ29yeVByaWNlIiwibmV3Q2F0ZWdvcnlBbW91bnQiLCJzZXROZXdDYXRlZ29yeUFtb3VudCIsIm90aGVyQ2F0ZWdvcnkiLCJzZXRPdGhlckNhdGVnb3J5IiwiQ3JlYXRlRXZlbnQiLCJ3YWxsZXRBY2NvdW50IiwiaXNTaWduZWRJbiIsIndhcm5pbmciLCJwcm9taXNlIiwiQ3JlYXRpbmdFdmVudEFpcnRhYmxlIiwicGVuZGluZyIsImVycm9yIiwic3VjY2VzcyIsIkNyZWF0aW5nRXZlbnQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjbGljayIsIkFpcnRhYmxlIiwicmVxdWlyZSIsImNvbmZpZ3VyZSIsImVuZHBvaW50VXJsIiwiYXBpS2V5IiwiYmFzZSIsImV2ZW50SUQiLCJjcmVhdGUiLCJlcnIiLCJyZWNvcmRzIiwiY29uc29sZSIsImZvckVhY2giLCJyZWNvcmQiLCJnZXRJZCIsImkiLCJsZW5ndGgiLCJ0aXRsZSIsInByaWNlIiwiYW1vdW50IiwiaW1hZ2UiLCJsb2ciLCJjcmVhdGVkT2JqZWN0IiwiVGl0bGUiLCJEYXRlIiwiVHlwZSIsIkFkZHJlc3MiLCJHb2FsIiwibG9nbyIsImNhdGVnb3JpZXMiLCJjcmVhdGVFdmVudCIsInJlc3VsdCIsIkNyZWF0ZUNhdGVnb3J5IiwibmV3X2NhdGVnb3J5IiwidGVtcF9hcnIiLCJwdXNoIiwic3VtIiwicmVtb3ZlQ2F0ZWdvcnkiLCJlIiwiY2F0ZWdvcnlfaWQiLCJ0YXJnZXQiLCJnZXRBdHRyaWJ1dGUiLCJldmVudEdvYWxDaGFuZ2VkIiwid2lkdGgiLCJiYWNrZ3JvdW5kIiwicGFkZGluZyIsImJvcmRlclJhZGl1cyIsImhlaWdodCIsImJvcmRlciIsIm1hcmdpbiIsIm1hcmdpbkJvdHRvbSIsIm1hcmdpbkxlZnQiLCJtYXJnaW5SaWdodCIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiZmxleFdyYXAiLCJldmVudENhdGVnb3J5IiwiaW5kZXgiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJmb250U2l6ZSIsImNvbG9yIiwidGV4dEFsaWduIiwibWFyZ2luVG9wIiwibGluZUhlaWdodCIsImFsaWduQ29udGVudCIsImdhcCJdLCJzb3VyY2VSb290IjoiIn0=