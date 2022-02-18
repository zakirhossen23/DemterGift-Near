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
/* harmony import */ var _babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/slicedToArray */ "./node_modules/@babel/runtime-corejs3/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/asyncToGenerator */ "./node_modules/@babel/runtime-corejs3/helpers/esm/asyncToGenerator.js");
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
      contract = _useContract.contract;

  function CreateEvent() {
    return _CreateEvent.apply(this, arguments);
  }

  function _CreateEvent() {
    _CreateEvent = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2() {
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
    _CreatingEventAirtable = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee3() {
      var Airtable, base;
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
                  console.log(record.getId());
                });
              });

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));
    return _CreatingEventAirtable.apply(this, arguments);
  }

  var CreatingEvent = /*#__PURE__*/function () {
    var _ref = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
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
              console.log(result); // while (true) {
              //     try {
              //         // const eventcategories = JSON.stringify(eventCategories);
              //         // const eventcategories = JSON.stringify(eventCategories);
              //         // console.log(eventcategories);
              //         const keypair =  new nearAPI.keyStores.BrowserLocalStorageKeyStore();
              //         const id = await createEventAPI(EventTitle, "", EventDate, EventWalletAddress, EventGoal, EventLogo, EventWalletType,keypair);
              //         for (var i = 0; i < eventCategories.length; i++) {
              //             await createEventCategoryAPI(id, eventCategories[i].title, eventCategories[i].amount, eventCategories[i].price, eventCategories[i].image);
              //         }
              //         // await createEventCategoryAPI(id, eventCategories[0].title,eventCategories[0].amount,eventCategories[0].price,eventCategories[0].image);
              //         console.log("here1");
              //         console.log(eventCategories);
              //         if (document.getElementById("plugin").checked) {
              //             await CreatePlugin(`https://${window.location.hostname}/donation/auction?${id}`);
              //         }
              //         break;
              //     } catch (error) {
              //         console.error(error);
              //         continue;
              //     }
              // }

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
  }(); // Application initialization


  var _UseFormInput = (0,_components_components_UseFormInput__WEBPACK_IMPORTED_MODULE_7__["default"])({
    defaultValue: "",
    type: 'text',
    placeholder: 'Event Title',
    id: ''
  }),
      _UseFormInput2 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_UseFormInput, 2),
      EventTitle = _UseFormInput2[0],
      EventTitleInput = _UseFormInput2[1];

  var _UseFormInput3 = (0,_components_components_UseFormInput__WEBPACK_IMPORTED_MODULE_7__["default"])({
    defaultValue: "",
    type: 'datetime-local',
    placeholder: 'Event End Date ',
    id: 'enddate'
  }),
      _UseFormInput4 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_UseFormInput3, 2),
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
      _UseFormInput6 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_UseFormInput5, 2),
      EventWalletType = _UseFormInput6[0],
      EventWalletTypeInput = _UseFormInput6[1];

  var _UseFormInput7 = (0,_components_components_UseFormInput__WEBPACK_IMPORTED_MODULE_7__["default"])({
    defaultValue: "",
    type: 'text',
    placeholder: 'Wallet',
    id: 'wallet'
  }),
      _UseFormInput8 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_UseFormInput7, 2),
      EventWalletAddress = _UseFormInput8[0],
      EventWalletAddressInput = _UseFormInput8[1];

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(0),
      _useState2 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      EventGoal = _useState2[0],
      setEventGoal = _useState2[1];

  var _UseFormInput9 = (0,_components_components_UseFormInput__WEBPACK_IMPORTED_MODULE_7__["default"])({
    defaultValue: "",
    type: 'text',
    placeholder: 'Event Logo Link',
    id: 'logo'
  }),
      _UseFormInput10 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_UseFormInput9, 2),
      EventLogo = _UseFormInput10[0],
      EventLogoInput = _UseFormInput10[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]),
      _useState4 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      eventCategories = _useState4[0],
      setEventCategories = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false),
      _useState6 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState5, 2),
      createCategoryModal = _useState6[0],
      setCreateCategoryModal = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(""),
      _useState8 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState7, 2),
      newCategoryTitle = _useState8[0],
      setNewCategoryTitle = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(""),
      _useState10 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState9, 2),
      newCategoryImgLink = _useState10[0],
      setNewCategoryImgLink = _useState10[1];

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(0),
      _useState12 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState11, 2),
      newCategoryPrice = _useState12[0],
      setNewCategoryPrice = _useState12[1];

  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(0),
      _useState14 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState13, 2),
      newCategoryAmount = _useState14[0],
      setNewCategoryAmount = _useState14[1];

  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(0),
      _useState16 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState15, 2),
      otherCategory = _useState16[0],
      setOtherCategory = _useState16[1];

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
/******/ 	__webpack_require__.h = function() { return "8f7d2d4619b7c7004f90"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2luZGV4LmViM2MwOWFkZjFjNTkxMzYxZGI2LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQU9BO0FBR0E7QUFHQTtBQUVBVyxNQUFNLENBQUNDLFVBQVAsR0FBb0JILDhDQUFTLENBQUMsYUFBRCxDQUE3QjtBQUNlLFNBQVNJLFlBQVQsR0FBd0I7QUFDbkMscUJBQXFCSCxrRUFBVyxDQUFDLFFBQUQsQ0FBaEM7QUFBQSxNQUFRSSxRQUFSLGdCQUFRQSxRQUFSOztBQURtQyxXQUdwQkMsV0FIb0I7QUFBQTtBQUFBOztBQUFBO0FBQUEsNE1BR25DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFDUUosTUFBTSxDQUFDSyxhQUFQLENBQXFCQyxVQUFyQixNQUFxQyxLQUQ3QztBQUFBO0FBQUE7QUFBQTs7QUFFUWQsY0FBQUEseURBQUEsQ0FBYyw4QkFBZDtBQUZSOztBQUFBO0FBQUE7QUFBQSxxQkFNVUEseURBQUEsQ0FBY2lCLHFCQUFkLEVBQXFDO0FBQ3ZDQyxnQkFBQUEsT0FBTyxFQUFFLGtDQUQ4QjtBQUV2Q0MsZ0JBQUFBLEtBQUssRUFBRSx3QkFGZ0M7QUFHdkNDLGdCQUFBQSxPQUFPLEVBQUU7QUFIOEIsZUFBckMsQ0FOVjs7QUFBQTtBQUFBO0FBQUEscUJBWU9wQix5REFBQSxDQUFjcUIsYUFBZCxFQUE2QjtBQUM1QkgsZ0JBQUFBLE9BQU8sRUFBRSxnQ0FEbUI7QUFFNUJDLGdCQUFBQSxLQUFLLEVBQUUsd0JBRnFCO0FBRzVCQyxnQkFBQUEsT0FBTyxFQUFFO0FBSG1CLGVBQTdCLENBWlA7O0FBQUE7QUFrQklFLGNBQUFBLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsb0JBQTFCLEVBQWdELENBQWhELEVBQW1EQyxLQUFuRDs7QUFsQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FIbUM7QUFB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WUFBUSxFQUFFLGtCQUFDb0IsQ0FBRDtBQUFBLGFBQU9uQixxQkFBcUIsQ0FBQ21CLENBQUMsQ0FBQ0UsTUFBRixDQUFTakMsS0FBVixDQUE1QjtBQUFBLEtBSGQ7QUFJSSxRQUFJLEVBQUUsTUFKVjtBQUtJLE1BQUUsRUFBRTtBQUxSLElBRkosQ0EvQkosZUF5Q0ksaURBQUMsK0RBQUQ7QUFBUSxTQUFLLEVBQUU7QUFBRTBDLE1BQUFBLE1BQU0sRUFBRSxnQkFBVjtBQUE0Qk4sTUFBQUEsS0FBSyxFQUFFO0FBQW5DLEtBQWY7QUFBNEQsV0FBTyxFQUFFakI7QUFBckUsdUJBekNKLENBUEosQ0EzR0YsQ0FBRixDQURKO0FBbUtIOzs7Ozs7OztVQ3ZYRCxxQ0FBcUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZW1ldGVyZ2lmdC8uL3NyYy9wYWdlcy9DcmVhdGVFdmVudHMvaW5kZXgudHN4Iiwid2VicGFjazovL2RlbWV0ZXJnaWZ0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJvdyBmcm9tICdyZWFjdC1ib290c3RyYXAvUm93JztcclxuaW1wb3J0IHsgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XHJcbmltcG9ydCBDb2wgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0NvbCc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0J1dHRvbic7XHJcbmltcG9ydCBVc2VGb3JtSW5wdXQgZnJvbSAnQC9jb21wb25lbnRzL2NvbXBvbmVudHMvVXNlRm9ybUlucHV0JztcclxuaW1wb3J0IHsgY3JlYXRlRXZlbnRBUEksIGNyZWF0ZUV2ZW50Q2F0ZWdvcnlBUEkgfSBmcm9tICdAL3BhZ2VzL0V2ZW50cy9ldmVudCc7XHJcbmltcG9ydCB7IENyZWF0ZVBsdWdpbiB9IGZyb20gJ0AvcGFnZXMvRXZlbnRzL2V2ZW50JztcclxuaW1wb3J0IHsgSWNvbiB9IGZyb20gJ0AvY29tcG9uZW50cy9jb21tb24vSWNvbidcclxuaW1wb3J0IE1vZGFsIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Nb2RhbCc7XHJcbmltcG9ydCBGb3JtIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Gb3JtJztcclxuaW1wb3J0IHtcclxuICAgIEJ1aWxkZXJGaWVsZCxcclxuICAgIEJ1aWxkZXJTdWJtaXRCdXR0b24sXHJcbiAgICBCdWlsZGVyVHJhbnNhY3Rpb24sXHJcbn0gZnJvbSAnQC9tb2R1bGVzL0J1aWxkZXIvY29tcG9uZW50cydcclxuaW1wb3J0IHsgU2VsZWN0IH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgXCJyZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWVcIjtcclxuXHJcbmltcG9ydCAqIGFzIG5lYXJBUEkgZnJvbSBcIm5lYXItYXBpLWpzXCJcclxuaW1wb3J0IGdldENvbmZpZyBmcm9tIFwiQC9jb25maWdcIlxyXG5cclxuXHJcbmltcG9ydCB1c2VDb250cmFjdCBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy91c2VDb250cmFjdCc7XHJcblxyXG53aW5kb3cubmVhckNvbmZpZyA9IGdldENvbmZpZyhcImRldmVsb3BtZW50XCIpO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDcmVhdGVFdmVudHMoKSB7XHJcbiAgICBjb25zdCB7IGNvbnRyYWN0IH0gPSB1c2VDb250cmFjdCgnRVJDNzIxJyk7XHJcblxyXG4gICAgYXN5bmMgZnVuY3Rpb24gQ3JlYXRlRXZlbnQoKSB7XHJcbiAgICAgICAgaWYgKHdpbmRvdy53YWxsZXRBY2NvdW50LmlzU2lnbmVkSW4oKSA9PSBmYWxzZSl7XHJcbiAgICAgICAgICAgIHRvYXN0Lndhcm5pbmcoXCJQbGVhc2UgY29ubmVjdCBOZWFyIEFjY291bnQhXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhd2FpdCB0b2FzdC5wcm9taXNlKENyZWF0aW5nRXZlbnRBaXJ0YWJsZSwge1xyXG4gICAgICAgICAgICBwZW5kaW5nOiBcIkV2ZW50IGlzIGNyZWF0aW5nIG9uIEFpcnRhYmxlLi4uXCIsXHJcbiAgICAgICAgICAgIGVycm9yOiBcIlBsZWFzZSB0cnkgYWdhaW4gbGF0ZXJcIixcclxuICAgICAgICAgICAgc3VjY2VzczogXCJFdmVudCBoYXMgY3JlYXRlZCBvbiBBaXJ0YWJsZSFcIlxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgIGF3YWl0IHRvYXN0LnByb21pc2UoQ3JlYXRpbmdFdmVudCwge1xyXG4gICAgICAgICAgICBwZW5kaW5nOiBcIkV2ZW50IGlzIGNyZWF0aW5nIG9uIEF1cm9yYS4uLlwiLFxyXG4gICAgICAgICAgICBlcnJvcjogXCJQbGVhc2UgdHJ5IGFnYWluIGxhdGVyXCIsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IFwiRXZlbnQgaGFzIGNyZWF0ZWQgb24gQXVyb3JhIVwiXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2hyZWY9XCIvZG9uYXRpb25cIl0nKVswXS5jbGljaygpXHJcbiAgICB9XHJcblxyXG5hc3luYyBmdW5jdGlvbiBDcmVhdGluZ0V2ZW50QWlydGFibGUoKXtcclxuICAgIFxyXG4gICAgdmFyIEFpcnRhYmxlID0gcmVxdWlyZSgnYWlydGFibGUnKTtcclxuICAgIEFpcnRhYmxlLmNvbmZpZ3VyZSh7XHJcbiAgICAgICAgZW5kcG9pbnRVcmw6ICdodHRwczovL2FwaS5haXJ0YWJsZS5jb20nLFxyXG4gICAgICAgIGFwaUtleTogJ2tleVIxUnJjbDlPMnM5YlRzJ1xyXG4gICAgfSk7XHJcbiAgICBjb25zdCBiYXNlID0gcmVxdWlyZSgnYWlydGFibGUnKS5iYXNlKCdhcHBnYlJDcGJrem1kY3VjTycpO1xyXG5cclxuICAgIGJhc2UoJ2V2ZW50cycpLmNyZWF0ZShbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgXCJmaWVsZHNcIjoge1xyXG4gICAgICAgICAgICBcInRpdGxlXCI6IEV2ZW50VGl0bGUsXHJcbiAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJcIixcclxuICAgICAgICAgICAgXCJlbmREYXRlXCI6IEV2ZW50RGF0ZSxcclxuICAgICAgICAgICAgXCJHb2FsXCI6IEV2ZW50R29hbCxcclxuICAgICAgICAgICAgXCJsb2dvbGlua1wiOiBFdmVudExvZ28sXHJcbiAgICAgICAgICAgIFwid2FsbGV0XCI6IEV2ZW50V2FsbGV0QWRkcmVzcyxcclxuICAgICAgICAgICAgXCJ3YWxsZXR0eXBlXCI6IFwiTkVBUlwiXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICBdLCBmdW5jdGlvbihlcnIsIHJlY29yZHMpIHtcclxuICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJlY29yZHMuZm9yRWFjaChmdW5jdGlvbiAocmVjb3JkKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZWNvcmQuZ2V0SWQoKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG5cclxufVxyXG5cclxuICAgIGNvbnN0IENyZWF0aW5nRXZlbnQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgLy8gIENvbnRyYWN0XHJcbiAgICAgICAgY29uc29sZS5sb2coY29udHJhY3QpO1xyXG4gICAgICAgIGNvbnN0IGNyZWF0ZWRPYmplY3QgPSB7XHJcbiAgICAgICAgICAgIFRpdGxlOiBFdmVudFRpdGxlLFxyXG4gICAgICAgICAgICBEYXRlOiBFdmVudERhdGUsXHJcbiAgICAgICAgICAgIFR5cGU6IEV2ZW50V2FsbGV0VHlwZSxcclxuICAgICAgICAgICAgQWRkcmVzczogRXZlbnRXYWxsZXRBZGRyZXNzLFxyXG4gICAgICAgICAgICBHb2FsOiBFdmVudEdvYWwsXHJcbiAgICAgICAgICAgIGxvZ286IEV2ZW50TG9nbyxcclxuICAgICAgICAgICAgY2F0ZWdvcmllczogZXZlbnRDYXRlZ29yaWVzXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgY29udHJhY3QuY3JlYXRlRXZlbnQoXHJcbiAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KGNyZWF0ZWRPYmplY3QpXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgICAvLyB3aGlsZSAodHJ1ZSkge1xyXG4gICAgICAgIC8vICAgICB0cnkge1xyXG4gICAgICAgIC8vICAgICAgICAgLy8gY29uc3QgZXZlbnRjYXRlZ29yaWVzID0gSlNPTi5zdHJpbmdpZnkoZXZlbnRDYXRlZ29yaWVzKTtcclxuICAgICAgICAvLyAgICAgICAgIC8vIGNvbnN0IGV2ZW50Y2F0ZWdvcmllcyA9IEpTT04uc3RyaW5naWZ5KGV2ZW50Q2F0ZWdvcmllcyk7XHJcbiAgICAgICAgLy8gICAgICAgICAvLyBjb25zb2xlLmxvZyhldmVudGNhdGVnb3JpZXMpO1xyXG4gICAgICAgIC8vICAgICAgICAgY29uc3Qga2V5cGFpciA9ICBuZXcgbmVhckFQSS5rZXlTdG9yZXMuQnJvd3NlckxvY2FsU3RvcmFnZUtleVN0b3JlKCk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAvLyAgICAgICAgIGNvbnN0IGlkID0gYXdhaXQgY3JlYXRlRXZlbnRBUEkoRXZlbnRUaXRsZSwgXCJcIiwgRXZlbnREYXRlLCBFdmVudFdhbGxldEFkZHJlc3MsIEV2ZW50R29hbCwgRXZlbnRMb2dvLCBFdmVudFdhbGxldFR5cGUsa2V5cGFpcik7XHJcblxyXG4gICAgICAgIC8vICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBldmVudENhdGVnb3JpZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAvLyAgICAgICAgICAgICBhd2FpdCBjcmVhdGVFdmVudENhdGVnb3J5QVBJKGlkLCBldmVudENhdGVnb3JpZXNbaV0udGl0bGUsIGV2ZW50Q2F0ZWdvcmllc1tpXS5hbW91bnQsIGV2ZW50Q2F0ZWdvcmllc1tpXS5wcmljZSwgZXZlbnRDYXRlZ29yaWVzW2ldLmltYWdlKTtcclxuICAgICAgICAvLyAgICAgICAgIH1cclxuICAgICAgICAvLyAgICAgICAgIC8vIGF3YWl0IGNyZWF0ZUV2ZW50Q2F0ZWdvcnlBUEkoaWQsIGV2ZW50Q2F0ZWdvcmllc1swXS50aXRsZSxldmVudENhdGVnb3JpZXNbMF0uYW1vdW50LGV2ZW50Q2F0ZWdvcmllc1swXS5wcmljZSxldmVudENhdGVnb3JpZXNbMF0uaW1hZ2UpO1xyXG4gICAgICAgIC8vICAgICAgICAgY29uc29sZS5sb2coXCJoZXJlMVwiKTtcclxuICAgICAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKGV2ZW50Q2F0ZWdvcmllcyk7XHJcbiAgICAgICAgLy8gICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbHVnaW5cIikuY2hlY2tlZCkge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIGF3YWl0IENyZWF0ZVBsdWdpbihgaHR0cHM6Ly8ke3dpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZX0vZG9uYXRpb24vYXVjdGlvbj8ke2lkfWApO1xyXG4gICAgICAgIC8vICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgLy8gICAgICAgICBicmVhaztcclxuICAgICAgICAvLyAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAvLyAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG5cclxuICAgICAgICAvLyAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgIH07XHJcblxyXG4gICAgLy8gQXBwbGljYXRpb24gaW5pdGlhbGl6YXRpb25cclxuXHJcbiAgICBjb25zdCBbRXZlbnRUaXRsZSwgRXZlbnRUaXRsZUlucHV0XSA9IFVzZUZvcm1JbnB1dCh7XHJcbiAgICAgICAgZGVmYXVsdFZhbHVlOiBcIlwiLFxyXG4gICAgICAgIHR5cGU6ICd0ZXh0JyxcclxuICAgICAgICBwbGFjZWhvbGRlcjogJ0V2ZW50IFRpdGxlJyxcclxuICAgICAgICBpZDogJydcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IFtFdmVudERhdGUsIEV2ZW50RGF0ZUlucHV0XSA9IFVzZUZvcm1JbnB1dCh7XHJcbiAgICAgICAgZGVmYXVsdFZhbHVlOiBcIlwiLFxyXG4gICAgICAgIHR5cGU6ICdkYXRldGltZS1sb2NhbCcsXHJcbiAgICAgICAgcGxhY2Vob2xkZXI6ICdFdmVudCBFbmQgRGF0ZSAnLFxyXG4gICAgICAgIGlkOiAnZW5kZGF0ZScsXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IFtFdmVudFdhbGxldFR5cGUsIEV2ZW50V2FsbGV0VHlwZUlucHV0XSA9IFVzZUZvcm1JbnB1dCh7XHJcbiAgICAgICAgZGVmYXVsdFZhbHVlOiBcIk5FQVJcIixcclxuICAgICAgICB0eXBlOiAnc2VsZWN0JyxcclxuICAgICAgICBpZDogJ3dhbGxldFR5cGUnLFxyXG4gICAgICAgIHNlbGVjdF9vcHRpb25zOiBbeyB2YWx1ZTogXCJORUFSXCIsIHRleHQ6IFwiTkVBUlwiIH1dXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IFtFdmVudFdhbGxldEFkZHJlc3MsIEV2ZW50V2FsbGV0QWRkcmVzc0lucHV0XSA9IFVzZUZvcm1JbnB1dCh7XHJcbiAgICAgICAgZGVmYXVsdFZhbHVlOiBcIlwiLFxyXG4gICAgICAgIHR5cGU6ICd0ZXh0JyxcclxuICAgICAgICBwbGFjZWhvbGRlcjogJ1dhbGxldCcsXHJcbiAgICAgICAgaWQ6ICd3YWxsZXQnLFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBbRXZlbnRHb2FsLCBzZXRFdmVudEdvYWxdID0gdXNlU3RhdGUoMCk7XHJcblxyXG4gICAgY29uc3QgW0V2ZW50TG9nbywgRXZlbnRMb2dvSW5wdXRdID0gVXNlRm9ybUlucHV0KHtcclxuICAgICAgICBkZWZhdWx0VmFsdWU6IFwiXCIsXHJcbiAgICAgICAgdHlwZTogJ3RleHQnLFxyXG4gICAgICAgIHBsYWNlaG9sZGVyOiAnRXZlbnQgTG9nbyBMaW5rJyxcclxuICAgICAgICBpZDogJ2xvZ28nXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IFtldmVudENhdGVnb3JpZXMsIHNldEV2ZW50Q2F0ZWdvcmllc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbY3JlYXRlQ2F0ZWdvcnlNb2RhbCwgc2V0Q3JlYXRlQ2F0ZWdvcnlNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbbmV3Q2F0ZWdvcnlUaXRsZSwgc2V0TmV3Q2F0ZWdvcnlUaXRsZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFtuZXdDYXRlZ29yeUltZ0xpbmssIHNldE5ld0NhdGVnb3J5SW1nTGlua10gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFtuZXdDYXRlZ29yeVByaWNlLCBzZXROZXdDYXRlZ29yeVByaWNlXSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW25ld0NhdGVnb3J5QW1vdW50LCBzZXROZXdDYXRlZ29yeUFtb3VudF0gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IFtvdGhlckNhdGVnb3J5LCBzZXRPdGhlckNhdGVnb3J5XSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgQ3JlYXRlQ2F0ZWdvcnkgPSAoKSA9PiB7XHJcbiAgICAgICAgdmFyIG5ld19jYXRlZ29yeSA9IHtcclxuICAgICAgICAgICAgdGl0bGU6IG5ld0NhdGVnb3J5VGl0bGUsXHJcbiAgICAgICAgICAgIHByaWNlOiBuZXdDYXRlZ29yeVByaWNlLFxyXG4gICAgICAgICAgICBhbW91bnQ6IG5ld0NhdGVnb3J5QW1vdW50LFxyXG4gICAgICAgICAgICBpbWFnZTogbmV3Q2F0ZWdvcnlJbWdMaW5rXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciB0ZW1wX2FyciA9IGV2ZW50Q2F0ZWdvcmllcztcclxuICAgICAgICB0ZW1wX2Fyci5wdXNoKG5ld19jYXRlZ29yeSk7XHJcbiAgICAgICAgdmFyIHN1bSA9IDA7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0ZW1wX2Fyci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBzdW0gKz0gdGVtcF9hcnJbaV0ucHJpY2UgKiB0ZW1wX2FycltpXS5hbW91bnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldE90aGVyQ2F0ZWdvcnkoRXZlbnRHb2FsIC0gc3VtKTtcclxuICAgICAgICBzZXRFdmVudENhdGVnb3JpZXModGVtcF9hcnIpO1xyXG4gICAgICAgIHNldENyZWF0ZUNhdGVnb3J5TW9kYWwoZmFsc2UpO1xyXG4gICAgICAgIHNldE5ld0NhdGVnb3J5VGl0bGUoXCJcIik7XHJcbiAgICAgICAgc2V0TmV3Q2F0ZWdvcnlJbWdMaW5rKFwiXCIpO1xyXG4gICAgICAgIHNldE5ld0NhdGVnb3J5UHJpY2UoMCk7XHJcbiAgICAgICAgc2V0TmV3Q2F0ZWdvcnlBbW91bnQoMCk7XHJcbiAgICB9XHJcbiAgICBjb25zdCByZW1vdmVDYXRlZ29yeSA9IChlKSA9PiB7XHJcbiAgICAgICAgdmFyIGNhdGVnb3J5X2lkID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiY2F0ZWdvcnlpZFwiKTtcclxuICAgICAgICB2YXIgdGVtcF9hcnIgPSBbXTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGV2ZW50Q2F0ZWdvcmllcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoaSAhPSBjYXRlZ29yeV9pZCkge1xyXG4gICAgICAgICAgICAgICAgdGVtcF9hcnIucHVzaChldmVudENhdGVnb3JpZXNbaV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldEV2ZW50Q2F0ZWdvcmllcyh0ZW1wX2Fycik7XHJcbiAgICB9XHJcbiAgICBjb25zdCBldmVudEdvYWxDaGFuZ2VkID0gKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgc2V0RXZlbnRHb2FsKHZhbHVlKTtcclxuICAgICAgICB2YXIgc3VtID0gMDtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGV2ZW50Q2F0ZWdvcmllcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBzdW0gKz0gZXZlbnRDYXRlZ29yaWVzW2ldLnByaWNlICogZXZlbnRDYXRlZ29yaWVzW2ldLmFtb3VudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0T3RoZXJDYXRlZ29yeShFdmVudEdvYWwgLSBzdW0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Pjw+XHJcbiAgICAgICAgICAgIDxSb3c+XHJcblxyXG4gICAgICAgICAgICAgICAgPENvbCA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogXCI0NXZ3XCIsIGJhY2tncm91bmQ6IFwidHJhbnNwYXJlbnRcIiwgcGFkZGluZzogXCIxOXB4XCIsIGJvcmRlclJhZGl1czogXCI0cHhcIiwgaGVpZ2h0OiBcIjEwMCVcIiwgYm9yZGVyOiBcIndoaXRlIHNvbGlkXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luOiBcIjBweCAwcHggMzBweCAwcHhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiMTBweFwiIH19PkNyZWF0ZSBFdmVudDwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW46IFwiMThweCAwXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBcIjEwcHhcIiB9fT5FdmVudCBUaXRsZTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7RXZlbnRUaXRsZUlucHV0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luOiBcIjE4cHggMFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCIxMHB4XCIgfX0+RXZlbnQgRW5kIERhdGU8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge0V2ZW50RGF0ZUlucHV0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW46IFwiMThweCAwXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBcIjEwcHhcIiB9fT5XYWxsZXQgVHlwZTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7RXZlbnRXYWxsZXRUeXBlSW5wdXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbjogXCIxOHB4IDBcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtFdmVudFdhbGxldFR5cGUgPT0gXCJORUFSXCIgPyAoPD48aDQgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBcIjEwcHhcIiB9fT5BY2NvdW50IElEIG9mIHtFdmVudFdhbGxldFR5cGV9IHdhbGxldDwvaDQ+PC8+KSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PiA8aDQgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBcIjEwcHhcIiB9fT5XYWxsZXQgQWRkcmVzcyBpbiB7RXZlbnRXYWxsZXRUeXBlfTwvaDQ+PC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtFdmVudFdhbGxldEFkZHJlc3NJbnB1dH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luOiBcIjE4cHggMFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCIxMHB4XCIgfX0+RXZlbnQgR29hbCBpbiB7RXZlbnRXYWxsZXRUeXBlfTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e0V2ZW50R29hbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17YEV2ZW50IEdvYWwgaW4gJHtFdmVudFdhbGxldFR5cGV9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGV2ZW50R29hbENoYW5nZWQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9e1wibnVtYmVyXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e1wiZ29hbFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luOiBcIjE4cHggMFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCIxMHB4XCIgfX0+Q2F0ZWdvcmllcyBmb3IgU3VwcG9ydDwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkxlZnQ6IFwiLTEwcHhcIiwgbWFyZ2luUmlnaHQ6IFwiLTEwcHhcIiwgZGlzcGxheTogXCJmbGV4XCIsIGZsZXhEaXJlY3Rpb246IFwicm93XCIsIGZsZXhXcmFwOiBcIndyYXBcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50Q2F0ZWdvcmllcy5tYXAoKGV2ZW50Q2F0ZWdvcnksIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjMzJVwiLCBwYWRkaW5nOiBcIjAgMTBweFwiLCBtYXJnaW5Cb3R0b206IFwiMTBweFwiIH19IGtleT17aW5kZXh9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGJhY2tncm91bmQ6IFwid2hpdGVcIiwgcGFkZGluZzogXCI4cHggMTVweFwiLCBib3JkZXI6IFwiMXB4IHNvbGlkIHRyYW5zcGFyZW50XCIsIGJvcmRlclJhZGl1czogXCI1cHhcIiwgYWxpZ25JdGVtczogXCJjZW50ZXJcIiwgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4taWNvbiBwb3B1cC1jbG9zZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtyZW1vdmVDYXRlZ29yeX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5aWQ9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGp1c3RpZnlDb250ZW50OiBcImZsZXgtZW5kXCIsIGZvbnRTaXplOiAyMCwgY29sb3I6IFwiYmxhY2tcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBYXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBcIjEwcHhcIiwgY29sb3I6IFwiIzE1MUYyOFwiLCB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+e2V2ZW50Q2F0ZWdvcnkudGl0bGV9PC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2V2ZW50Q2F0ZWdvcnkuaW1hZ2V9IHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgYm9yZGVyUmFkaXVzOiBcIjVweFwiLCBoZWlnaHQ6IFwiOTRweFwiIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBzdHlsZT17eyBjb2xvcjogXCIjMTUxRjI4XCIsIHRleHRBbGlnbjogXCJjZW50ZXJcIiwgbWFyZ2luVG9wOiBcIjEwcHhcIiwgbGluZUhlaWdodDogXCIxNHB4XCIgfX0+e2V2ZW50Q2F0ZWdvcnkucHJpY2UgKiBldmVudENhdGVnb3J5LmFtb3VudH0gVVNEPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IHN0eWxlPXt7IGNvbG9yOiBcIiMxNTFGMjhcIiwgdGV4dEFsaWduOiBcImNlbnRlclwiLCBsaW5lSGVpZ2h0OiBcIjE0cHhcIiB9fT4oe2V2ZW50Q2F0ZWdvcnkuYW1vdW50fSBwaWVjZXMpPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjMzJVwiLCBwYWRkaW5nOiBcIjAgMTBweFwiLCBkaXNwbGF5OiBcImZsZXhcIiwgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGV2ZW50Q2F0ZWdvcmllcy5sZW5ndGggPiAwKSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKDxkaXYgc3R5bGU9e3sgYmFja2dyb3VuZDogXCJ3aGl0ZVwiLCBwYWRkaW5nOiBcIjEwcHhcIiwgYm9yZGVyOiBcIjFweCBzb2xpZCB0cmFuc3BhcmVudFwiLCBib3JkZXJSYWRpdXM6IFwiNXB4XCIsIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsIGhlaWdodDogXCI4MHB4XCIsIG1hcmdpbkJvdHRvbTogXCIxNXB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiMTBweFwiLCBjb2xvcjogXCIjMTUxRjI4XCIsIHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5PdGhlciBzdXBwb3J0PC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IHN0eWxlPXt7IGNvbG9yOiBcIiMxNTFGMjhcIiwgdGV4dEFsaWduOiBcImNlbnRlclwiLCBtYXJnaW5Ub3A6IFwiMTBweFwiLCBsaW5lSGVpZ2h0OiBcIjE0cHhcIiB9fT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdGhlckNhdGVnb3J5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gVVNEPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4pIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGJhY2tncm91bmQ6IFwid2hpdGVcIiwgcGFkZGluZzogXCIxMHB4XCIsIGJvcmRlcjogXCIxcHggc29saWQgdHJhbnNwYXJlbnRcIiwgYm9yZGVyUmFkaXVzOiBcIjVweFwiLCBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLCBoZWlnaHQ6IFwiODBweFwiLCBkaXNwbGF5OiBcImZsZXhcIiwganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIgfX0gb25DbGljaz17KCkgPT4gc2V0Q3JlYXRlQ2F0ZWdvcnlNb2RhbCh0cnVlKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDEgc3R5bGU9e3sgY29sb3I6IFwiIzc1NzU3NVwiLCB0ZXh0QWxpZ246IFwiY2VudGVyXCIsIGxpbmVIZWlnaHQ6IFwiMTRweFwiLCBmb250U2l6ZTogXCI1MHB4XCIgfX0+KzwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW46IFwiMThweCAwXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBcIjEwcHhcIiB9fT5FdmVudCBMb2dvIExpbms8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge0V2ZW50TG9nb0lucHV0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogJzE4cHggMHB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduQ29udGVudDogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FwOiAnNXB4J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJwbHVnaW5cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PkdlbmVyYXRlIFBsdWdpbj88L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHN0eWxlPXt7IG1hcmdpbjogXCIxN3B4IDAgMHB4IDBweFwiLCB3aWR0aDogXCIxMDAlXCIgfX0gb25DbGljaz17Q3JlYXRlRXZlbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ3JlYXRlIEV2ZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcblxyXG4gICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgPE1vZGFsIHNob3c9e2NyZWF0ZUNhdGVnb3J5TW9kYWx9XHJcbiAgICAgICAgICAgICAgICBvbkhpZGU9eygpID0+IHNldENyZWF0ZUNhdGVnb3J5TW9kYWwoZmFsc2UpfVxyXG4gICAgICAgICAgICAgICAgc2l6ZT0nbGcnXHJcbiAgICAgICAgICAgICAgICBjZW50ZXJlZCBzdHlsZT17eyBwYWRkaW5nOiBcIjIwcHhcIiB9fT5cclxuICAgICAgICAgICAgICAgIDxNb2RhbC5IZWFkZXIgY2xvc2VCdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgQ3JlYXRlIGEgbmV3IGNhdGVnb3J5XHJcbiAgICAgICAgICAgICAgICA8L01vZGFsLkhlYWRlcj5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luOiBcIjIwcHhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbjogXCIxOHB4IDBcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCIxMHB4XCIsIGNvbG9yOiBcImJsYWNrXCIgfX0+Q2F0ZWdvcnkgVGl0bGU8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bmV3Q2F0ZWdvcnlUaXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtcIkNhdGVnb3J5IFRpdGxlXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE5ld0NhdGVnb3J5VGl0bGUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT17XCJ0ZXh0XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17XCJjYXRfdGl0bGVcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbjogXCIxOHB4IDBcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCIxMHB4XCIsIGNvbG9yOiBcImJsYWNrXCIgfX0+QW1vdW50PC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e25ld0NhdGVnb3J5QW1vdW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e1wiQW1vdW50XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE5ld0NhdGVnb3J5QW1vdW50KGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9e1wibnVtYmVyXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17XCJjYXRfcGllY2VcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbjogXCIxOHB4IDBcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCIxMHB4XCIsIGNvbG9yOiBcImJsYWNrXCIgfX0+UHJpY2Ugb2YgQSBQaWVjZTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtuZXdDYXRlZ29yeVByaWNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e1wiQ2F0ZWdvcnkgUHJpY2VcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmV3Q2F0ZWdvcnlQcmljZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPXtcIm51bWJlclwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e1wiY2F0X3ByaWNlXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW46IFwiMThweCAwXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiMTBweFwiLCBjb2xvcjogXCJibGFja1wiIH19PkNhdGVnb3J5IEltYWdlIExpbms8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bmV3Q2F0ZWdvcnlJbWdMaW5rfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e1wiQ2F0ZWdvcnkgSW1hZ2UgTGlua1wifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROZXdDYXRlZ29yeUltZ0xpbmsoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT17XCJ0ZXh0XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17XCJjYXRfaW1hZ2VcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHN0eWxlPXt7IG1hcmdpbjogXCIxN3B4IDAgMHB4IDBweFwiLCB3aWR0aDogXCIxMDAlXCIgfX0gb25DbGljaz17Q3JlYXRlQ2F0ZWdvcnl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDcmVhdGUgQ2F0ZWdvcnlcclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L01vZGFsPlxyXG4gICAgICAgIDwvPjwvPlxyXG4gICAgKTtcclxufSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gXCI4ZjdkMmQ0NjE5YjdjNzAwNGY5MFwiOyB9Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJSb3ciLCJ0b2FzdCIsIkNvbCIsIkJ1dHRvbiIsIlVzZUZvcm1JbnB1dCIsIk1vZGFsIiwiRm9ybSIsImdldENvbmZpZyIsInVzZUNvbnRyYWN0Iiwid2luZG93IiwibmVhckNvbmZpZyIsIkNyZWF0ZUV2ZW50cyIsImNvbnRyYWN0IiwiQ3JlYXRlRXZlbnQiLCJ3YWxsZXRBY2NvdW50IiwiaXNTaWduZWRJbiIsIndhcm5pbmciLCJwcm9taXNlIiwiQ3JlYXRpbmdFdmVudEFpcnRhYmxlIiwicGVuZGluZyIsImVycm9yIiwic3VjY2VzcyIsIkNyZWF0aW5nRXZlbnQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjbGljayIsIkFpcnRhYmxlIiwicmVxdWlyZSIsImNvbmZpZ3VyZSIsImVuZHBvaW50VXJsIiwiYXBpS2V5IiwiYmFzZSIsImNyZWF0ZSIsIkV2ZW50VGl0bGUiLCJFdmVudERhdGUiLCJFdmVudEdvYWwiLCJFdmVudExvZ28iLCJFdmVudFdhbGxldEFkZHJlc3MiLCJlcnIiLCJyZWNvcmRzIiwiY29uc29sZSIsImZvckVhY2giLCJyZWNvcmQiLCJsb2ciLCJnZXRJZCIsImNyZWF0ZWRPYmplY3QiLCJUaXRsZSIsIkRhdGUiLCJUeXBlIiwiRXZlbnRXYWxsZXRUeXBlIiwiQWRkcmVzcyIsIkdvYWwiLCJsb2dvIiwiY2F0ZWdvcmllcyIsImV2ZW50Q2F0ZWdvcmllcyIsImNyZWF0ZUV2ZW50IiwicmVzdWx0IiwiZGVmYXVsdFZhbHVlIiwidHlwZSIsInBsYWNlaG9sZGVyIiwiaWQiLCJFdmVudFRpdGxlSW5wdXQiLCJFdmVudERhdGVJbnB1dCIsInNlbGVjdF9vcHRpb25zIiwidmFsdWUiLCJ0ZXh0IiwiRXZlbnRXYWxsZXRUeXBlSW5wdXQiLCJFdmVudFdhbGxldEFkZHJlc3NJbnB1dCIsInNldEV2ZW50R29hbCIsIkV2ZW50TG9nb0lucHV0Iiwic2V0RXZlbnRDYXRlZ29yaWVzIiwiY3JlYXRlQ2F0ZWdvcnlNb2RhbCIsInNldENyZWF0ZUNhdGVnb3J5TW9kYWwiLCJuZXdDYXRlZ29yeVRpdGxlIiwic2V0TmV3Q2F0ZWdvcnlUaXRsZSIsIm5ld0NhdGVnb3J5SW1nTGluayIsInNldE5ld0NhdGVnb3J5SW1nTGluayIsIm5ld0NhdGVnb3J5UHJpY2UiLCJzZXROZXdDYXRlZ29yeVByaWNlIiwibmV3Q2F0ZWdvcnlBbW91bnQiLCJzZXROZXdDYXRlZ29yeUFtb3VudCIsIm90aGVyQ2F0ZWdvcnkiLCJzZXRPdGhlckNhdGVnb3J5IiwiQ3JlYXRlQ2F0ZWdvcnkiLCJuZXdfY2F0ZWdvcnkiLCJ0aXRsZSIsInByaWNlIiwiYW1vdW50IiwiaW1hZ2UiLCJ0ZW1wX2FyciIsInB1c2giLCJzdW0iLCJpIiwibGVuZ3RoIiwicmVtb3ZlQ2F0ZWdvcnkiLCJlIiwiY2F0ZWdvcnlfaWQiLCJ0YXJnZXQiLCJnZXRBdHRyaWJ1dGUiLCJldmVudEdvYWxDaGFuZ2VkIiwid2lkdGgiLCJiYWNrZ3JvdW5kIiwicGFkZGluZyIsImJvcmRlclJhZGl1cyIsImhlaWdodCIsImJvcmRlciIsIm1hcmdpbiIsIm1hcmdpbkJvdHRvbSIsIm1hcmdpbkxlZnQiLCJtYXJnaW5SaWdodCIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiZmxleFdyYXAiLCJldmVudENhdGVnb3J5IiwiaW5kZXgiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJmb250U2l6ZSIsImNvbG9yIiwidGV4dEFsaWduIiwibWFyZ2luVG9wIiwibGluZUhlaWdodCIsImFsaWduQ29udGVudCIsImdhcCJdLCJzb3VyY2VSb290IjoiIn0=