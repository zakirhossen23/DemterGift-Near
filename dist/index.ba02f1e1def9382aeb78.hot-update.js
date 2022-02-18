"use strict";
self["webpackHotUpdatedemetergift"]("/index",{

/***/ "./src/pages/donation/index.jsx":
/*!**************************************!*\
  !*** ./src/pages/donation/index.jsx ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Donation; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/asyncToGenerator */ "./node_modules/@babel/runtime-corejs3/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/slicedToArray */ "./node_modules/@babel/runtime-corejs3/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/regenerator */ "./node_modules/@babel/runtime-corejs3/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _components_components_modals_DonateNFTModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/components/modals/DonateNFTModal */ "./src/components/components/modals/DonateNFTModal.jsx");







function Donation() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false),
      _useState2 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      CreatemodalShow = _useState2[0],
      setModalShow = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]),
      _useState4 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState3, 2),
      list = _useState4[0],
      setList = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(''),
      _useState6 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState5, 2),
      selectid = _useState6[0],
      setselectid = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(''),
      _useState8 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState7, 2),
      selectedtype = _useState8[0],
      setselectedtype = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(''),
      _useState10 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState9, 2),
      SelectedTitle = _useState10[0],
      setSelectedTitle = _useState10[1];

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(''),
      _useState12 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState11, 2),
      SelectedendDate = _useState12[0],
      setSelectedendDate = _useState12[1];

  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(""),
      _useState14 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState13, 2),
      selectedWallet = _useState14[0],
      setSelectedWallet = _useState14[1];

  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {
    fetchContractData();
  }, []);

  function calculateTimeLeft() {
    try {
      var allDates = document.getElementsByName("DateCount");

      for (var i = 0; i < allDates.length; i++) {
        var date = allDates[i].getAttribute("date");
        allDates[i].innerHTML = LeftDate(date);
      }
    } catch (error) {}
  }

  setInterval(function () {
    calculateTimeLeft();
  }, 1000);
  var formatter = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });

  function fetchContractData() {
    return _fetchContractData.apply(this, arguments);
  }

  function _fetchContractData() {
    _fetchContractData = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
      var nearPrice, nearCurrencyUrl, options, Airtable, base;
      return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              //Near currency
              nearPrice = 0;
              _context.prev = 1;
              nearCurrencyUrl = "https://api.coinmarketcap.com/data-api/v3/cryptocurrency/market-pairs/latest?slug=near-protocol&start=1&limit=1&category=spot&sort=cmc_rank_advanced";
              options = {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                  Accept: 'application/json, text/plain, */*'
                }
              };
              _context.next = 6;
              return fetch(nearCurrencyUrl, options).then(function (res) {
                return res.json();
              }).then(function (json) {
                return nearPrice = json;
              }).catch(function (err) {
                return console.error('error:' + err);
              });

            case 6:
              nearPrice = nearPrice.data.marketPairs[0].price;
              _context.next = 12;
              break;

            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](1);
              nearPrice = 0;

            case 12:
              try {
                Airtable = __webpack_require__(/*! airtable */ "./node_modules/airtable/lib/airtable.js");
                base = new Airtable({
                  apiKey: 'keyR1Rrcl9O2s9bTs'
                }).base('appgbRCpbkzmdcucO');
                base('events').select({
                  // Selecting the first 3 records in Grid view:
                  maxRecords: 10,
                  view: "Grid view"
                }).eachPage(function page(records, fetchNextPage) {
                  // This function (`page`) will get called for each page of records.
                  var arr = [];
                  records.forEach(function (record) {
                    var goalPrice2usd = 0;
                    goalPrice2usd = Number(Number(record.get("Goal")) * nearPrice);
                    arr.push({
                      eventId: record.get("id"),
                      Title: record.get("title"),
                      Date: record.get("endDate"),
                      Goalusd: formatter.format(goalPrice2usd),
                      Goal: record.get("Goal"),
                      logo: record.get("logolink"),
                      wallettype: record.get("wallettype")
                    });
                  });
                  setList(arr); // To fetch the next page of records, call `fetchNextPage`.
                  // If there are more records, `page` will get called again.
                  // If there are no more records, `done` will get called.
                  // fetchNextPage();
                }, function done(err) {
                  if (err) {
                    console.error(err);
                    return;
                  }
                });

                if (document.getElementById("Loading")) {
                  document.getElementById("Loading").style = "display:none";
                }
              } catch (error) {
                console.error(error);
              }

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 9]]);
    }));
    return _fetchContractData.apply(this, arguments);
  }

  function activateCreateNFTModal(e) {
    setselectid(e.target.getAttribute("eventid"));
    setSelectedTitle(e.target.getAttribute("eventtitle"));
    setSelectedendDate(e.target.getAttribute("date"));
    setSelectedWallet(e.target.getAttribute("wallettype"));
    setselectedtype("NFT");
    setModalShow(true);
  }

  function activateCreateCryptopunkModal(e) {
    setselectid(e.target.getAttribute("eventid"));
    setSelectedTitle(e.target.getAttribute("eventtitle"));
    setSelectedendDate(e.target.getAttribute("date"));
    setselectedtype("Cryptopunk");
    setModalShow(true);
  }

  function LeftDate(datetext) {
    var c = new Date(datetext).getTime();
    var n = new Date().getTime();
    var d = c - n;
    var da = Math.floor(d / (1000 * 60 * 60 * 24));
    var h = Math.floor(d % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    var m = Math.floor(d % (1000 * 60 * 60) / (1000 * 60));
    var s = Math.floor(d % (1000 * 60) / 1000);
    var output = da.toString() + " Days " + h.toString() + " hours " + m.toString() + " minutes " + s.toString() + " seconds"; // if ("-" in output) {
    //     output = "Expired!"
    // }

    return output;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react__WEBPACK_IMPORTED_MODULE_4__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
    className: "row DonationBar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.NavLink, {
    to: "?q=All"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("a", {
    className: "DonationBarLink active"
  }, "All")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.NavLink, {
    to: "?q=Today"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("a", {
    className: "DonationBarLink"
  }, "Today")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.NavLink, {
    to: "?q=This Month"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("a", {
    className: "DonationBarLink"
  }, "This Month"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
    id: "Loading",
    className: "LoadingArea"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("h1", null, "Loading...")), _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_3___default()(list).call(list, function (listItem) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
      key: listItem.eventId,
      className: "row",
      style: {
        height: '397px',
        margin: '28px',
        display: 'flex',
        background: 'white',
        color: 'black',
        overflow: 'hidden',
        padding: '14px 7px',
        alignItems: 'flex-start',
        alignContent: 'flex-start'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
      style: {
        display: 'flex',
        width: '100%',
        padding: '18px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("h4", {
      style: {
        fontSize: '2.0vw',
        float: 'left'
      },
      name: "DateCount",
      date: listItem.Date
    }, LeftDate(listItem.Date))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
      style: {
        display: 'flex',
        width: '100%',
        padding: '38px 18px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
      style: {
        width: "33%",
        height: '238px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("img", {
      src: listItem.logo,
      style: {
        maxHeight: '259px'
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
      style: {
        marginLeft: '50px',
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        rowGap: '10px',
        alignContent: 'stretch'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("h4", {
      style: {
        fontSize: '1.7vw'
      }
    }, listItem.Title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
      style: {
        display: "flex",
        "whiteSpace": "pre-wrap"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("h4", {
      style: {
        fontSize: '1.7vw'
      }
    }, "Goal:  "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("h4", {
      style: {
        fontSize: '1.7vw'
      }
    }, "$", listItem.Goalusd, " (", listItem.Goal, " NEAR)")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
      style: {
        display: 'flex',
        height: '100%',
        float: 'right',
        alignItems: 'flex-start',
        marginLeft: '0px',
        flexDirection: 'column',
        width: '100%',
        justifyContent: 'flex-end'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
      style: {
        "display": "flex",
        gap: "14px"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
      style: {
        color: 'white',
        overflow: 'hidden',
        background: '#0BD6BE',
        textAlign: 'center',
        cursor: 'pointer',
        height: '72px',
        width: '244px',
        float: 'right',
        padding: '0px'
      },
      eventid: listItem.eventId,
      date: listItem.Date,
      eventtitle: listItem.Title,
      className: "card",
      wallettype: listItem.wallettype,
      onClick: activateCreateNFTModal
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
      eventid: listItem.eventId,
      date: listItem.Date,
      eventtitle: listItem.Title,
      className: "card-body",
      style: {
        height: '100%',
        paddingTop: '34px'
      },
      wallettype: listItem.wallettype
    }, "Donate NFT")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
      style: {
        color: 'white',
        overflow: 'hidden',
        background: '#0BD6BE',
        textAlign: 'center',
        cursor: 'pointer',
        width: '273px',
        float: 'right',
        padding: '0'
      },
      eventid: listItem.eventId,
      onClick: activateCreateCryptopunkModal,
      date: listItem.Date,
      eventtitle: listItem.Title,
      className: "card"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
      eventid: listItem.eventId,
      date: listItem.Date,
      eventtitle: listItem.Title,
      className: "card-body",
      style: {
        height: '100%',
        paddingTop: '34px'
      }
    }, "Donate Cryptopunk")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
      style: {
        color: 'white',
        overflow: 'hidden',
        background: '#0BD6BE',
        textAlign: 'center',
        cursor: 'pointer',
        width: '244px',
        float: 'right',
        padding: '0'
      },
      className: "card"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.NavLink, {
      to: "/donation/auction?".concat(listItem.eventId)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
      className: "card-body",
      style: {
        height: '100%',
        paddingTop: '34px'
      }
    }, "Go to auction"))))))));
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_components_components_modals_DonateNFTModal__WEBPACK_IMPORTED_MODULE_5__["default"], {
    show: CreatemodalShow,
    onHide: function onHide() {
      setModalShow(false); // This is a poor implementation, better to implement an event listener
    },
    EventID: selectid,
    type: selectedtype,
    SelectedTitle: SelectedTitle,
    selectedWallet: selectedWallet,
    enddate: SelectedendDate
  }));
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "85866554243a5d42ef7b"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2luZGV4LmJhMDJmMWUxZGVmOTM4MmFlYjc4LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFZSxTQUFTSyxRQUFULEdBQW9CO0FBQy9CLGtCQUF3Q0osK0NBQVEsQ0FBQyxLQUFELENBQWhEO0FBQUE7QUFBQSxNQUFPSyxlQUFQO0FBQUEsTUFBd0JDLFlBQXhCOztBQUVBLG1CQUF3Qk4sK0NBQVEsQ0FBQyxFQUFELENBQWhDO0FBQUE7QUFBQSxNQUFPTyxJQUFQO0FBQUEsTUFBYUMsT0FBYjs7QUFDQSxtQkFBZ0NSLCtDQUFRLENBQUMsRUFBRCxDQUF4QztBQUFBO0FBQUEsTUFBT1MsUUFBUDtBQUFBLE1BQWlCQyxXQUFqQjs7QUFDQSxtQkFBd0NWLCtDQUFRLENBQUMsRUFBRCxDQUFoRDtBQUFBO0FBQUEsTUFBT1csWUFBUDtBQUFBLE1BQXFCQyxlQUFyQjs7QUFDQSxtQkFBMENaLCtDQUFRLENBQUMsRUFBRCxDQUFsRDtBQUFBO0FBQUEsTUFBT2EsYUFBUDtBQUFBLE1BQXNCQyxnQkFBdEI7O0FBQ0Esb0JBQThDZCwrQ0FBUSxDQUFDLEVBQUQsQ0FBdEQ7QUFBQTtBQUFBLE1BQU9lLGVBQVA7QUFBQSxNQUF3QkMsa0JBQXhCOztBQUNBLG9CQUE0Q2hCLCtDQUFRLENBQUMsRUFBRCxDQUFwRDtBQUFBO0FBQUEsTUFBT2lCLGNBQVA7QUFBQSxNQUF1QkMsaUJBQXZCOztBQUdBakIsRUFBQUEsZ0RBQVMsQ0FBQyxZQUFNO0FBQ1prQixJQUFBQSxpQkFBaUI7QUFDcEIsR0FGUSxFQUVOLEVBRk0sQ0FBVDs7QUFJQSxXQUFTQyxpQkFBVCxHQUE2QjtBQUN6QixRQUFJO0FBQ0EsVUFBSUMsUUFBUSxHQUFHQyxRQUFRLENBQUNDLGlCQUFULENBQTJCLFdBQTNCLENBQWY7O0FBQ0EsV0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHSCxRQUFRLENBQUNJLE1BQTdC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a0I7QUFBbEMsdUJBRkosQ0FWSixDQXRDSixDQVZKLENBZEosQ0FYSixDQW5CSixDQURNO0FBQUEsR0FBTCxDQXhCVCxlQWtKSSxpREFBQyxvRkFBRDtBQUNJLFFBQUksRUFBRW5ILGVBRFY7QUFFSSxVQUFNLEVBQUUsa0JBQU07QUFDVkMsTUFBQUEsWUFBWSxDQUFDLEtBQUQsQ0FBWixDQURVLENBRVY7QUFDSCxLQUxMO0FBTUksV0FBTyxFQUFFRyxRQU5iO0FBT0ksUUFBSSxFQUFFRSxZQVBWO0FBUUksaUJBQWEsRUFBRUUsYUFSbkI7QUFTSSxrQkFBYyxFQUFFSSxjQVRwQjtBQVVJLFdBQU8sRUFBRUY7QUFWYixJQWxKSixDQURKO0FBaUtIOzs7Ozs7OztVQzFTRCxxQ0FBcUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZW1ldGVyZ2lmdC8uL3NyYy9wYWdlcy9kb25hdGlvbi9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vZGVtZXRlcmdpZnQvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBOYXZMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcclxuaW1wb3J0IERvbmF0ZU5GVE1vZGFsIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY29tcG9uZW50cy9tb2RhbHMvRG9uYXRlTkZUTW9kYWwnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRG9uYXRpb24oKSB7XHJcbiAgICBjb25zdCBbQ3JlYXRlbW9kYWxTaG93LCBzZXRNb2RhbFNob3ddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIGNvbnN0IFtsaXN0LCBzZXRMaXN0XSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtzZWxlY3RpZCwgc2V0c2VsZWN0aWRdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3NlbGVjdGVkdHlwZSwgc2V0c2VsZWN0ZWR0eXBlXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtTZWxlY3RlZFRpdGxlLCBzZXRTZWxlY3RlZFRpdGxlXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtTZWxlY3RlZGVuZERhdGUsIHNldFNlbGVjdGVkZW5kRGF0ZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbc2VsZWN0ZWRXYWxsZXQsIHNldFNlbGVjdGVkV2FsbGV0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGZldGNoQ29udHJhY3REYXRhKCk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgZnVuY3Rpb24gY2FsY3VsYXRlVGltZUxlZnQoKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgdmFyIGFsbERhdGVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoXCJEYXRlQ291bnRcIik7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsRGF0ZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHZhciBkYXRlID0gKGFsbERhdGVzW2ldKS5nZXRBdHRyaWJ1dGUoXCJkYXRlXCIpO1xyXG4gICAgICAgICAgICAgICAgYWxsRGF0ZXNbaV0uaW5uZXJIVE1MID0gTGVmdERhdGUoZGF0ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNhbGN1bGF0ZVRpbWVMZWZ0KCk7XHJcbiAgICB9LCAxMDAwKTtcclxuICAgIGNvbnN0IGZvcm1hdHRlciA9IG5ldyBJbnRsLk51bWJlckZvcm1hdCgnZW4tVVMnLCB7XHJcbiAgICAgICAgbWluaW11bUZyYWN0aW9uRGlnaXRzOiAyLFxyXG4gICAgICAgIG1heGltdW1GcmFjdGlvbkRpZ2l0czogMixcclxuICAgIH0pO1xyXG5cclxuICAgIGFzeW5jIGZ1bmN0aW9uIGZldGNoQ29udHJhY3REYXRhKCkge1xyXG5cclxuICAgICAgICAgICAgLy9OZWFyIGN1cnJlbmN5XHJcbiAgICAgICAgICAgIHZhciBuZWFyUHJpY2UgPSAwO1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgdmFyIG5lYXJDdXJyZW5jeVVybCA9IFwiaHR0cHM6Ly9hcGkuY29pbm1hcmtldGNhcC5jb20vZGF0YS1hcGkvdjMvY3J5cHRvY3VycmVuY3kvbWFya2V0LXBhaXJzL2xhdGVzdD9zbHVnPW5lYXItcHJvdG9jb2wmc3RhcnQ9MSZsaW1pdD0xJmNhdGVnb3J5PXNwb3Qmc29ydD1jbWNfcmFua19hZHZhbmNlZFwiO1xyXG4gICAgICAgICAgICAgICAgbGV0IG9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24sIHRleHQvcGxhaW4sICovKidcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIGF3YWl0IGZldGNoKG5lYXJDdXJyZW5jeVVybCwgb3B0aW9ucykudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuICAgICAgICAgICAgICAgICAgICAudGhlbihqc29uID0+IG5lYXJQcmljZSA9IGpzb24pXHJcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKCdlcnJvcjonICsgZXJyKSk7XHJcbiAgICAgICAgICAgICAgICBuZWFyUHJpY2UgPSBuZWFyUHJpY2UuZGF0YS5tYXJrZXRQYWlyc1swXS5wcmljZTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZXgpIHtcclxuICAgICAgICAgICAgICAgIHZhciBuZWFyUHJpY2UgPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgdmFyIEFpcnRhYmxlID0gcmVxdWlyZSgnYWlydGFibGUnKTtcclxuICAgICAgICAgICAgdmFyIGJhc2UgPSBuZXcgQWlydGFibGUoeyBhcGlLZXk6ICdrZXlSMVJyY2w5TzJzOWJUcycgfSkuYmFzZSgnYXBwZ2JSQ3Bia3ptZGN1Y08nKTtcclxuXHJcbiAgICAgICAgICAgIGJhc2UoJ2V2ZW50cycpLnNlbGVjdCh7XHJcbiAgICAgICAgICAgICAgICAvLyBTZWxlY3RpbmcgdGhlIGZpcnN0IDMgcmVjb3JkcyBpbiBHcmlkIHZpZXc6XHJcbiAgICAgICAgICAgICAgICBtYXhSZWNvcmRzOiAxMCxcclxuICAgICAgICAgICAgICAgIHZpZXc6IFwiR3JpZCB2aWV3XCJcclxuICAgICAgICAgICAgfSkuZWFjaFBhZ2UoZnVuY3Rpb24gcGFnZShyZWNvcmRzLCBmZXRjaE5leHRQYWdlKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBUaGlzIGZ1bmN0aW9uIChgcGFnZWApIHdpbGwgZ2V0IGNhbGxlZCBmb3IgZWFjaCBwYWdlIG9mIHJlY29yZHMuXHJcbiAgICAgICAgICAgICAgICB2YXIgYXJyID0gW107XHJcbiAgICAgICAgICAgICAgICByZWNvcmRzLmZvckVhY2goZnVuY3Rpb24gKHJlY29yZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBnb2FsUHJpY2UydXNkID0gMDtcclxuICAgICAgICAgICAgICAgICAgICBnb2FsUHJpY2UydXNkID0gTnVtYmVyKE51bWJlcihyZWNvcmQuZ2V0KFwiR29hbFwiKSkgKiBuZWFyUHJpY2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIGFyci5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnRJZDogcmVjb3JkLmdldChcImlkXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBUaXRsZTogcmVjb3JkLmdldChcInRpdGxlXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBEYXRlOiByZWNvcmQuZ2V0KFwiZW5kRGF0ZVwiKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgR29hbHVzZDogZm9ybWF0dGVyLmZvcm1hdChnb2FsUHJpY2UydXNkKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgR29hbDogcmVjb3JkLmdldChcIkdvYWxcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZ286ICByZWNvcmQuZ2V0KFwibG9nb2xpbmtcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdhbGxldHR5cGU6IHJlY29yZC5nZXQoXCJ3YWxsZXR0eXBlXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBzZXRMaXN0KGFycik7XHJcbiAgICAgICAgICAgICAgICAvLyBUbyBmZXRjaCB0aGUgbmV4dCBwYWdlIG9mIHJlY29yZHMsIGNhbGwgYGZldGNoTmV4dFBhZ2VgLlxyXG4gICAgICAgICAgICAgICAgLy8gSWYgdGhlcmUgYXJlIG1vcmUgcmVjb3JkcywgYHBhZ2VgIHdpbGwgZ2V0IGNhbGxlZCBhZ2Fpbi5cclxuICAgICAgICAgICAgICAgIC8vIElmIHRoZXJlIGFyZSBubyBtb3JlIHJlY29yZHMsIGBkb25lYCB3aWxsIGdldCBjYWxsZWQuXHJcbiAgICAgICAgICAgICAgIC8vIGZldGNoTmV4dFBhZ2UoKTtcclxuXHJcbiAgICAgICAgICAgIH0sIGZ1bmN0aW9uIGRvbmUoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7IGNvbnNvbGUuZXJyb3IoZXJyKTsgcmV0dXJuOyB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICBcclxuICAgICAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiTG9hZGluZ1wiKSkge1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJMb2FkaW5nXCIpLnN0eWxlID0gXCJkaXNwbGF5Om5vbmVcIjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBhY3RpdmF0ZUNyZWF0ZU5GVE1vZGFsKGUpIHtcclxuICAgICAgICBzZXRzZWxlY3RpZChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJldmVudGlkXCIpKTtcclxuICAgICAgICBzZXRTZWxlY3RlZFRpdGxlKGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImV2ZW50dGl0bGVcIikpO1xyXG4gICAgICAgIHNldFNlbGVjdGVkZW5kRGF0ZShlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRlXCIpKTtcclxuICAgICAgICBzZXRTZWxlY3RlZFdhbGxldChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJ3YWxsZXR0eXBlXCIpKTtcclxuICAgICAgICBzZXRzZWxlY3RlZHR5cGUoXCJORlRcIik7XHJcblxyXG4gICAgICAgIHNldE1vZGFsU2hvdyh0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBhY3RpdmF0ZUNyZWF0ZUNyeXB0b3B1bmtNb2RhbChlKSB7XHJcbiAgICAgICAgc2V0c2VsZWN0aWQoZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZXZlbnRpZFwiKSk7XHJcbiAgICAgICAgc2V0U2VsZWN0ZWRUaXRsZShlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJldmVudHRpdGxlXCIpKTtcclxuICAgICAgICBzZXRTZWxlY3RlZGVuZERhdGUoZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0ZVwiKSk7XHJcbiAgICAgICAgc2V0c2VsZWN0ZWR0eXBlKFwiQ3J5cHRvcHVua1wiKTtcclxuXHJcbiAgICAgICAgc2V0TW9kYWxTaG93KHRydWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBmdW5jdGlvbiBMZWZ0RGF0ZShkYXRldGV4dCkge1xyXG4gICAgICAgIHZhciBjID0gbmV3IERhdGUoZGF0ZXRleHQpLmdldFRpbWUoKTtcclxuICAgICAgICB2YXIgbiA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgICAgIHZhciBkID0gYyAtIG47XHJcbiAgICAgICAgdmFyIGRhID0gTWF0aC5mbG9vcihkIC8gKDEwMDAgKiA2MCAqIDYwICogMjQpKTtcclxuICAgICAgICB2YXIgaCA9IE1hdGguZmxvb3IoKGQgJSAoMTAwMCAqIDYwICogNjAgKiAyNCkpIC8gKDEwMDAgKiA2MCAqIDYwKSk7XHJcbiAgICAgICAgdmFyIG0gPSBNYXRoLmZsb29yKChkICUgKDEwMDAgKiA2MCAqIDYwKSkgLyAoMTAwMCAqIDYwKSk7XHJcbiAgICAgICAgdmFyIHMgPSBNYXRoLmZsb29yKChkICUgKDEwMDAgKiA2MCkpIC8gMTAwMCk7XHJcbiAgICAgICAgdmFyIG91dHB1dCA9IGRhLnRvU3RyaW5nKCkgKyBcIiBEYXlzIFwiICsgaC50b1N0cmluZygpICsgXCIgaG91cnMgXCIgKyBtLnRvU3RyaW5nKCkgKyBcIiBtaW51dGVzIFwiICsgcy50b1N0cmluZygpICsgXCIgc2Vjb25kc1wiO1xyXG4gICAgICAgIC8vIGlmIChcIi1cIiBpbiBvdXRwdXQpIHtcclxuICAgICAgICAvLyAgICAgb3V0cHV0ID0gXCJFeHBpcmVkIVwiXHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIHJldHVybiAob3V0cHV0KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93IERvbmF0aW9uQmFyJz5cclxuICAgICAgICAgICAgICAgIDxOYXZMaW5rIHRvPSc/cT1BbGwnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT0nRG9uYXRpb25CYXJMaW5rIGFjdGl2ZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFsbFxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgICAgICAgICAgIDxOYXZMaW5rIHRvPSc/cT1Ub2RheSc+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPSdEb25hdGlvbkJhckxpbmsnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBUb2RheVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgICAgICAgICAgIDxOYXZMaW5rIHRvPSc/cT1UaGlzIE1vbnRoJz5cclxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9J0RvbmF0aW9uQmFyTGluayc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFRoaXMgTW9udGhcclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGlkPSdMb2FkaW5nJyBjbGFzc05hbWU9XCJMb2FkaW5nQXJlYVwiPlxyXG4gICAgICAgICAgICAgICAgPGgxPkxvYWRpbmcuLi48L2gxPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgICAgICAgICB7bGlzdC5tYXAoKGxpc3RJdGVtKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17bGlzdEl0ZW0uZXZlbnRJZH0gY2xhc3NOYW1lPSdyb3cnIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnMzk3cHgnLFxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogJzI4cHgnLFxyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAnd2hpdGUnLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnYmxhY2snLFxyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAnMTRweCA3cHgnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6ICdmbGV4LXN0YXJ0JyxcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbkNvbnRlbnQ6ICdmbGV4LXN0YXJ0J1xyXG4gICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6ICcxOHB4J1xyXG4gICAgICAgICAgICAgICAgICAgIH19PjxoNCBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzIuMHZ3JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXQ6ICdsZWZ0J1xyXG4gICAgICAgICAgICAgICAgICAgIH19IG5hbWU9XCJEYXRlQ291bnRcIiBkYXRlPXtsaXN0SXRlbS5EYXRlfT57TGVmdERhdGUobGlzdEl0ZW0uRGF0ZSl9PC9oND48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogJzM4cHggMThweCdcclxuICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogXCIzMyVcIiwgaGVpZ2h0OiAnMjM4cHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2xpc3RJdGVtLmxvZ299IHN0eWxlPXt7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heEhlaWdodDogJzI1OXB4J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6ICc1MHB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd0dhcDogJzEwcHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ25Db250ZW50OiAnc3RyZXRjaCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgc3R5bGU9e3sgZm9udFNpemU6ICcxLjd2dycgfX0+e2xpc3RJdGVtLlRpdGxlfTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBcIndoaXRlU3BhY2VcIjogXCJwcmUtd3JhcFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBzdHlsZT17eyBmb250U2l6ZTogJzEuN3Z3JyB9fT5Hb2FsOiAgPC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgc3R5bGU9e3sgZm9udFNpemU6ICcxLjd2dycgfX0+JHtsaXN0SXRlbS5Hb2FsdXNkfSAoe2xpc3RJdGVtLkdvYWx9IE5FQVIpPC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXQ6ICdyaWdodCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogJ2ZsZXgtc3RhcnQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6ICcwcHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdmbGV4LWVuZCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgXCJkaXNwbGF5XCI6IFwiZmxleFwiLCBnYXA6IFwiMTRweFwiIH19PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAnIzBCRDZCRScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICc3MnB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMjQ0cHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXQ6ICdyaWdodCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAnMHB4J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSBldmVudGlkPXtsaXN0SXRlbS5ldmVudElkfSBkYXRlPXtsaXN0SXRlbS5EYXRlfSBldmVudHRpdGxlPXtsaXN0SXRlbS5UaXRsZX0gY2xhc3NOYW1lPVwiY2FyZFwiIHdhbGxldHR5cGU9e2xpc3RJdGVtLndhbGxldHR5cGV9IG9uQ2xpY2s9e2FjdGl2YXRlQ3JlYXRlTkZUTW9kYWx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBldmVudGlkPXtsaXN0SXRlbS5ldmVudElkfSBkYXRlPXtsaXN0SXRlbS5EYXRlfSBldmVudHRpdGxlPXtsaXN0SXRlbS5UaXRsZX0gY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCIgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nVG9wOiAnMzRweCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19IHdhbGxldHR5cGU9e2xpc3RJdGVtLndhbGxldHR5cGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERvbmF0ZSBORlRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAnIzBCRDZCRScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzI3M3B4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0OiAncmlnaHQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogJzAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSBldmVudGlkPXtsaXN0SXRlbS5ldmVudElkfSBvbkNsaWNrPXthY3RpdmF0ZUNyZWF0ZUNyeXB0b3B1bmtNb2RhbH0gZGF0ZT17bGlzdEl0ZW0uRGF0ZX0gZXZlbnR0aXRsZT17bGlzdEl0ZW0uVGl0bGV9IGNsYXNzTmFtZT1cImNhcmRcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGV2ZW50aWQ9e2xpc3RJdGVtLmV2ZW50SWR9IGRhdGU9e2xpc3RJdGVtLkRhdGV9IGV2ZW50dGl0bGU9e2xpc3RJdGVtLlRpdGxlfSBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIiBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdUb3A6ICczNHB4J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRG9uYXRlIENyeXB0b3B1bmtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJyMwQkQ2QkUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICcyNDRweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbG9hdDogJ3JpZ2h0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6ICcwJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gY2xhc3NOYW1lPVwiY2FyZFwiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZMaW5rIHRvPXtgL2RvbmF0aW9uL2F1Y3Rpb24/JHtsaXN0SXRlbS5ldmVudElkfWB9PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nVG9wOiAnMzRweCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR28gdG8gYXVjdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPERvbmF0ZU5GVE1vZGFsXHJcbiAgICAgICAgICAgICAgICBzaG93PXtDcmVhdGVtb2RhbFNob3d9XHJcbiAgICAgICAgICAgICAgICBvbkhpZGU9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRNb2RhbFNob3coZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFRoaXMgaXMgYSBwb29yIGltcGxlbWVudGF0aW9uLCBiZXR0ZXIgdG8gaW1wbGVtZW50IGFuIGV2ZW50IGxpc3RlbmVyXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgRXZlbnRJRD17c2VsZWN0aWR9XHJcbiAgICAgICAgICAgICAgICB0eXBlPXtzZWxlY3RlZHR5cGV9XHJcbiAgICAgICAgICAgICAgICBTZWxlY3RlZFRpdGxlPXtTZWxlY3RlZFRpdGxlfVxyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRXYWxsZXQ9e3NlbGVjdGVkV2FsbGV0fVxyXG4gICAgICAgICAgICAgICAgZW5kZGF0ZT17U2VsZWN0ZWRlbmREYXRlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSBmdW5jdGlvbigpIHsgcmV0dXJuIFwiODU4NjY1NTQyNDNhNWQ0MmVmN2JcIjsgfSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiTmF2TGluayIsIkRvbmF0ZU5GVE1vZGFsIiwiRG9uYXRpb24iLCJDcmVhdGVtb2RhbFNob3ciLCJzZXRNb2RhbFNob3ciLCJsaXN0Iiwic2V0TGlzdCIsInNlbGVjdGlkIiwic2V0c2VsZWN0aWQiLCJzZWxlY3RlZHR5cGUiLCJzZXRzZWxlY3RlZHR5cGUiLCJTZWxlY3RlZFRpdGxlIiwic2V0U2VsZWN0ZWRUaXRsZSIsIlNlbGVjdGVkZW5kRGF0ZSIsInNldFNlbGVjdGVkZW5kRGF0ZSIsInNlbGVjdGVkV2FsbGV0Iiwic2V0U2VsZWN0ZWRXYWxsZXQiLCJmZXRjaENvbnRyYWN0RGF0YSIsImNhbGN1bGF0ZVRpbWVMZWZ0IiwiYWxsRGF0ZXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlOYW1lIiwiaSIsImxlbmd0aCIsImRhdGUiLCJnZXRBdHRyaWJ1dGUiLCJpbm5lckhUTUwiLCJMZWZ0RGF0ZSIsImVycm9yIiwic2V0SW50ZXJ2YWwiLCJmb3JtYXR0ZXIiLCJJbnRsIiwiTnVtYmVyRm9ybWF0IiwibWluaW11bUZyYWN0aW9uRGlnaXRzIiwibWF4aW11bUZyYWN0aW9uRGlnaXRzIiwibmVhclByaWNlIiwibmVhckN1cnJlbmN5VXJsIiwib3B0aW9ucyIsIm1ldGhvZCIsImhlYWRlcnMiLCJBY2NlcHQiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiY2F0Y2giLCJlcnIiLCJjb25zb2xlIiwiZGF0YSIsIm1hcmtldFBhaXJzIiwicHJpY2UiLCJBaXJ0YWJsZSIsInJlcXVpcmUiLCJiYXNlIiwiYXBpS2V5Iiwic2VsZWN0IiwibWF4UmVjb3JkcyIsInZpZXciLCJlYWNoUGFnZSIsInBhZ2UiLCJyZWNvcmRzIiwiZmV0Y2hOZXh0UGFnZSIsImFyciIsImZvckVhY2giLCJyZWNvcmQiLCJnb2FsUHJpY2UydXNkIiwiTnVtYmVyIiwiZ2V0IiwicHVzaCIsImV2ZW50SWQiLCJUaXRsZSIsIkRhdGUiLCJHb2FsdXNkIiwiZm9ybWF0IiwiR29hbCIsImxvZ28iLCJ3YWxsZXR0eXBlIiwiZG9uZSIsImdldEVsZW1lbnRCeUlkIiwic3R5bGUiLCJhY3RpdmF0ZUNyZWF0ZU5GVE1vZGFsIiwiZSIsInRhcmdldCIsImFjdGl2YXRlQ3JlYXRlQ3J5cHRvcHVua01vZGFsIiwiZGF0ZXRleHQiLCJjIiwiZ2V0VGltZSIsIm4iLCJkIiwiZGEiLCJNYXRoIiwiZmxvb3IiLCJoIiwibSIsInMiLCJvdXRwdXQiLCJ0b1N0cmluZyIsImxpc3RJdGVtIiwiaGVpZ2h0IiwibWFyZ2luIiwiZGlzcGxheSIsImJhY2tncm91bmQiLCJjb2xvciIsIm92ZXJmbG93IiwicGFkZGluZyIsImFsaWduSXRlbXMiLCJhbGlnbkNvbnRlbnQiLCJ3aWR0aCIsImZvbnRTaXplIiwiZmxvYXQiLCJtYXhIZWlnaHQiLCJtYXJnaW5MZWZ0IiwiZmxleERpcmVjdGlvbiIsInJvd0dhcCIsImp1c3RpZnlDb250ZW50IiwiZ2FwIiwidGV4dEFsaWduIiwiY3Vyc29yIiwicGFkZGluZ1RvcCJdLCJzb3VyY2VSb290IjoiIn0=