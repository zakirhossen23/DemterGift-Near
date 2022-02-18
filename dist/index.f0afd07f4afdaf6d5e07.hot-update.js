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
                  sort: [{
                    field: "endDate",
                    direction: "asc"
                  }],
                  view: "Grid view"
                }).eachPage(function page(records, fetchNextPage) {
                  // This function (`page`) will get called for each page of records.
                  var arr = [];
                  records.forEach(function (record) {
                    var goalPrice2usd = 0;
                    goalPrice2usd = Number(Number(record.get("Goal")) * nearPrice);
                    arr.push({
                      id: record.id,
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
/******/ 	__webpack_require__.h = function() { return "e7ec1bad1d44ef5fcae5"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2luZGV4LmYwYWZkMDdmNGFmZGFmNmQ1ZTA3LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFZSxTQUFTSyxRQUFULEdBQW9CO0FBQy9CLGtCQUF3Q0osK0NBQVEsQ0FBQyxLQUFELENBQWhEO0FBQUE7QUFBQSxNQUFPSyxlQUFQO0FBQUEsTUFBd0JDLFlBQXhCOztBQUVBLG1CQUF3Qk4sK0NBQVEsQ0FBQyxFQUFELENBQWhDO0FBQUE7QUFBQSxNQUFPTyxJQUFQO0FBQUEsTUFBYUMsT0FBYjs7QUFDQSxtQkFBZ0NSLCtDQUFRLENBQUMsRUFBRCxDQUF4QztBQUFBO0FBQUEsTUFBT1MsUUFBUDtBQUFBLE1BQWlCQyxXQUFqQjs7QUFDQSxtQkFBd0NWLCtDQUFRLENBQUMsRUFBRCxDQUFoRDtBQUFBO0FBQUEsTUFBT1csWUFBUDtBQUFBLE1BQXFCQyxlQUFyQjs7QUFDQSxtQkFBMENaLCtDQUFRLENBQUMsRUFBRCxDQUFsRDtBQUFBO0FBQUEsTUFBT2EsYUFBUDtBQUFBLE1BQXNCQyxnQkFBdEI7O0FBQ0Esb0JBQThDZCwrQ0FBUSxDQUFDLEVBQUQsQ0FBdEQ7QUFBQTtBQUFBLE1BQU9lLGVBQVA7QUFBQSxNQUF3QkMsa0JBQXhCOztBQUNBLG9CQUE0Q2hCLCtDQUFRLENBQUMsRUFBRCxDQUFwRDtBQUFBO0FBQUEsTUFBT2lCLGNBQVA7QUFBQSxNQUF1QkMsaUJBQXZCOztBQUdBakIsRUFBQUEsZ0RBQVMsQ0FBQyxZQUFNO0FBQ1prQixJQUFBQSxpQkFBaUI7QUFDcEIsR0FGUSxFQUVOLEVBRk0sQ0FBVDs7QUFJQSxXQUFTQyxpQkFBVCxHQUE2QjtBQUN6QixRQUFJO0FBQ0EsVUFBSUMsUUFBUSxHQUFHQyxRQUFRLENBQUNDLGlCQUFULENBQTJCLFdBQTNCLENBQWY7O0FBQ0EsV0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHSCxRQUFRLENBQUNJLE1BQTdC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QUFTLFFBQUUsOEJBQXVCUCxRQUFRLENBQUM1QixPQUFoQztBQUFYLG9CQUVJO0FBQUssZUFBUyxFQUFDLFdBQWY7QUFBMkIsV0FBSyxFQUFFO0FBQzlCNkIsUUFBQUEsTUFBTSxFQUFFLE1BRHNCO0FBRTlCb0IsUUFBQUEsVUFBVSxFQUFFO0FBRmtCO0FBQWxDLHVCQUZKLENBVkosQ0F0Q0osQ0FWSixDQWRKLENBWEosQ0FuQkosQ0FETTtBQUFBLEdBQUwsQ0F4QlQsZUFrSkksaURBQUMsb0ZBQUQ7QUFDSSxRQUFJLEVBQUV2SCxlQURWO0FBRUksVUFBTSxFQUFFLGtCQUFNO0FBQ1ZDLE1BQUFBLFlBQVksQ0FBQyxLQUFELENBQVosQ0FEVSxDQUVWO0FBQ0gsS0FMTDtBQU1JLFdBQU8sRUFBRUcsUUFOYjtBQU9JLFFBQUksRUFBRUUsWUFQVjtBQVFJLGlCQUFhLEVBQUVFLGFBUm5CO0FBU0ksa0JBQWMsRUFBRUksY0FUcEI7QUFVSSxXQUFPLEVBQUVGO0FBVmIsSUFsSkosQ0FESjtBQWlLSDs7Ozs7Ozs7VUM1U0QscUNBQXFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGVtZXRlcmdpZnQvLi9zcmMvcGFnZXMvZG9uYXRpb24vaW5kZXguanN4Iiwid2VicGFjazovL2RlbWV0ZXJnaWZ0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTmF2TGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXHJcbmltcG9ydCBEb25hdGVORlRNb2RhbCBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NvbXBvbmVudHMvbW9kYWxzL0RvbmF0ZU5GVE1vZGFsJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERvbmF0aW9uKCkge1xyXG4gICAgY29uc3QgW0NyZWF0ZW1vZGFsU2hvdywgc2V0TW9kYWxTaG93XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCBbbGlzdCwgc2V0TGlzdF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbc2VsZWN0aWQsIHNldHNlbGVjdGlkXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtzZWxlY3RlZHR5cGUsIHNldHNlbGVjdGVkdHlwZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbU2VsZWN0ZWRUaXRsZSwgc2V0U2VsZWN0ZWRUaXRsZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbU2VsZWN0ZWRlbmREYXRlLCBzZXRTZWxlY3RlZGVuZERhdGVdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3NlbGVjdGVkV2FsbGV0LCBzZXRTZWxlY3RlZFdhbGxldF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBmZXRjaENvbnRyYWN0RGF0YSgpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGZ1bmN0aW9uIGNhbGN1bGF0ZVRpbWVMZWZ0KCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHZhciBhbGxEYXRlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKFwiRGF0ZUNvdW50XCIpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbERhdGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZGF0ZSA9IChhbGxEYXRlc1tpXSkuZ2V0QXR0cmlidXRlKFwiZGF0ZVwiKTtcclxuICAgICAgICAgICAgICAgIGFsbERhdGVzW2ldLmlubmVySFRNTCA9IExlZnREYXRlKGRhdGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjYWxjdWxhdGVUaW1lTGVmdCgpO1xyXG4gICAgfSwgMTAwMCk7XHJcbiAgICBjb25zdCBmb3JtYXR0ZXIgPSBuZXcgSW50bC5OdW1iZXJGb3JtYXQoJ2VuLVVTJywge1xyXG4gICAgICAgIG1pbmltdW1GcmFjdGlvbkRpZ2l0czogMixcclxuICAgICAgICBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDIsXHJcbiAgICB9KTtcclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiBmZXRjaENvbnRyYWN0RGF0YSgpIHtcclxuXHJcbiAgICAgICAgICAgIC8vTmVhciBjdXJyZW5jeVxyXG4gICAgICAgICAgICB2YXIgbmVhclByaWNlID0gMDtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIHZhciBuZWFyQ3VycmVuY3lVcmwgPSBcImh0dHBzOi8vYXBpLmNvaW5tYXJrZXRjYXAuY29tL2RhdGEtYXBpL3YzL2NyeXB0b2N1cnJlbmN5L21hcmtldC1wYWlycy9sYXRlc3Q/c2x1Zz1uZWFyLXByb3RvY29sJnN0YXJ0PTEmbGltaXQ9MSZjYXRlZ29yeT1zcG90JnNvcnQ9Y21jX3JhbmtfYWR2YW5jZWRcIjtcclxuICAgICAgICAgICAgICAgIGxldCBvcHRpb25zID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uLCB0ZXh0L3BsYWluLCAqLyonXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBhd2FpdCBmZXRjaChuZWFyQ3VycmVuY3lVcmwsIG9wdGlvbnMpLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oanNvbiA9PiBuZWFyUHJpY2UgPSBqc29uKVxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcignZXJyb3I6JyArIGVycikpO1xyXG4gICAgICAgICAgICAgICAgbmVhclByaWNlID0gbmVhclByaWNlLmRhdGEubWFya2V0UGFpcnNbMF0ucHJpY2U7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGV4KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbmVhclByaWNlID0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHZhciBBaXJ0YWJsZSA9IHJlcXVpcmUoJ2FpcnRhYmxlJyk7XHJcbiAgICAgICAgICAgIHZhciBiYXNlID0gbmV3IEFpcnRhYmxlKHsgYXBpS2V5OiAna2V5UjFScmNsOU8yczliVHMnIH0pLmJhc2UoJ2FwcGdiUkNwYmt6bWRjdWNPJyk7XHJcblxyXG4gICAgICAgICAgICBiYXNlKCdldmVudHMnKS5zZWxlY3Qoe1xyXG4gICAgICAgICAgICAgICAgLy8gU2VsZWN0aW5nIHRoZSBmaXJzdCAzIHJlY29yZHMgaW4gR3JpZCB2aWV3OlxyXG4gICAgICAgICAgICAgICAgbWF4UmVjb3JkczogMTAsXHJcbiAgICAgICAgICAgICAgICBzb3J0OiBbe2ZpZWxkOiBcImVuZERhdGVcIiwgZGlyZWN0aW9uOiBcImFzY1wifV0sXHJcbiAgICAgICAgICAgICAgICB2aWV3OiBcIkdyaWQgdmlld1wiXHJcbiAgICAgICAgICAgIH0pLmVhY2hQYWdlKGZ1bmN0aW9uIHBhZ2UocmVjb3JkcywgZmV0Y2hOZXh0UGFnZSkge1xyXG4gICAgICAgICAgICAgICAgLy8gVGhpcyBmdW5jdGlvbiAoYHBhZ2VgKSB3aWxsIGdldCBjYWxsZWQgZm9yIGVhY2ggcGFnZSBvZiByZWNvcmRzLlxyXG4gICAgICAgICAgICAgICAgdmFyIGFyciA9IFtdO1xyXG4gICAgICAgICAgICAgICAgcmVjb3Jkcy5mb3JFYWNoKGZ1bmN0aW9uIChyZWNvcmQpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZ29hbFByaWNlMnVzZCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZ29hbFByaWNlMnVzZCA9IE51bWJlcihOdW1iZXIocmVjb3JkLmdldChcIkdvYWxcIikpICogbmVhclByaWNlKTtcclxuICAgICAgICAgICAgICAgICAgICBhcnIucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiByZWNvcmQuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50SWQ6IHJlY29yZC5nZXQoXCJpZFwiKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgVGl0bGU6IHJlY29yZC5nZXQoXCJ0aXRsZVwiKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgRGF0ZTogcmVjb3JkLmdldChcImVuZERhdGVcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEdvYWx1c2Q6IGZvcm1hdHRlci5mb3JtYXQoZ29hbFByaWNlMnVzZCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEdvYWw6IHJlY29yZC5nZXQoXCJHb2FsXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2dvOiAgcmVjb3JkLmdldChcImxvZ29saW5rXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3YWxsZXR0eXBlOiByZWNvcmQuZ2V0KFwid2FsbGV0dHlwZVwiKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgc2V0TGlzdChhcnIpO1xyXG4gICAgICAgICAgICAgICAgLy8gVG8gZmV0Y2ggdGhlIG5leHQgcGFnZSBvZiByZWNvcmRzLCBjYWxsIGBmZXRjaE5leHRQYWdlYC5cclxuICAgICAgICAgICAgICAgIC8vIElmIHRoZXJlIGFyZSBtb3JlIHJlY29yZHMsIGBwYWdlYCB3aWxsIGdldCBjYWxsZWQgYWdhaW4uXHJcbiAgICAgICAgICAgICAgICAvLyBJZiB0aGVyZSBhcmUgbm8gbW9yZSByZWNvcmRzLCBgZG9uZWAgd2lsbCBnZXQgY2FsbGVkLlxyXG4gICAgICAgICAgICAgICAvLyBmZXRjaE5leHRQYWdlKCk7XHJcblxyXG4gICAgICAgICAgICB9LCBmdW5jdGlvbiBkb25lKGVycikge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVycikgeyBjb25zb2xlLmVycm9yKGVycik7IHJldHVybjsgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIkxvYWRpbmdcIikpIHtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiTG9hZGluZ1wiKS5zdHlsZSA9IFwiZGlzcGxheTpub25lXCI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gYWN0aXZhdGVDcmVhdGVORlRNb2RhbChlKSB7XHJcbiAgICAgICAgc2V0c2VsZWN0aWQoZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZXZlbnRpZFwiKSk7XHJcbiAgICAgICAgc2V0U2VsZWN0ZWRUaXRsZShlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJldmVudHRpdGxlXCIpKTtcclxuICAgICAgICBzZXRTZWxlY3RlZGVuZERhdGUoZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0ZVwiKSk7XHJcbiAgICAgICAgc2V0U2VsZWN0ZWRXYWxsZXQoZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwid2FsbGV0dHlwZVwiKSk7XHJcbiAgICAgICAgc2V0c2VsZWN0ZWR0eXBlKFwiTkZUXCIpO1xyXG5cclxuICAgICAgICBzZXRNb2RhbFNob3codHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gYWN0aXZhdGVDcmVhdGVDcnlwdG9wdW5rTW9kYWwoZSkge1xyXG4gICAgICAgIHNldHNlbGVjdGlkKGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImV2ZW50aWRcIikpO1xyXG4gICAgICAgIHNldFNlbGVjdGVkVGl0bGUoZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZXZlbnR0aXRsZVwiKSk7XHJcbiAgICAgICAgc2V0U2VsZWN0ZWRlbmREYXRlKGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGVcIikpO1xyXG4gICAgICAgIHNldHNlbGVjdGVkdHlwZShcIkNyeXB0b3B1bmtcIik7XHJcblxyXG4gICAgICAgIHNldE1vZGFsU2hvdyh0cnVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgZnVuY3Rpb24gTGVmdERhdGUoZGF0ZXRleHQpIHtcclxuICAgICAgICB2YXIgYyA9IG5ldyBEYXRlKGRhdGV0ZXh0KS5nZXRUaW1lKCk7XHJcbiAgICAgICAgdmFyIG4gPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgICAgICB2YXIgZCA9IGMgLSBuO1xyXG4gICAgICAgIHZhciBkYSA9IE1hdGguZmxvb3IoZCAvICgxMDAwICogNjAgKiA2MCAqIDI0KSk7XHJcbiAgICAgICAgdmFyIGggPSBNYXRoLmZsb29yKChkICUgKDEwMDAgKiA2MCAqIDYwICogMjQpKSAvICgxMDAwICogNjAgKiA2MCkpO1xyXG4gICAgICAgIHZhciBtID0gTWF0aC5mbG9vcigoZCAlICgxMDAwICogNjAgKiA2MCkpIC8gKDEwMDAgKiA2MCkpO1xyXG4gICAgICAgIHZhciBzID0gTWF0aC5mbG9vcigoZCAlICgxMDAwICogNjApKSAvIDEwMDApO1xyXG4gICAgICAgIHZhciBvdXRwdXQgPSBkYS50b1N0cmluZygpICsgXCIgRGF5cyBcIiArIGgudG9TdHJpbmcoKSArIFwiIGhvdXJzIFwiICsgbS50b1N0cmluZygpICsgXCIgbWludXRlcyBcIiArIHMudG9TdHJpbmcoKSArIFwiIHNlY29uZHNcIjtcclxuICAgICAgICAvLyBpZiAoXCItXCIgaW4gb3V0cHV0KSB7XHJcbiAgICAgICAgLy8gICAgIG91dHB1dCA9IFwiRXhwaXJlZCFcIlxyXG4gICAgICAgIC8vIH1cclxuICAgICAgICByZXR1cm4gKG91dHB1dCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JvdyBEb25hdGlvbkJhcic+XHJcbiAgICAgICAgICAgICAgICA8TmF2TGluayB0bz0nP3E9QWxsJz5cclxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9J0RvbmF0aW9uQmFyTGluayBhY3RpdmUnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBBbGxcclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgICAgICAgICA8TmF2TGluayB0bz0nP3E9VG9kYXknPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT0nRG9uYXRpb25CYXJMaW5rJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgVG9kYXlcclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgICAgICAgICA8TmF2TGluayB0bz0nP3E9VGhpcyBNb250aCc+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPSdEb25hdGlvbkJhckxpbmsnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBUaGlzIE1vbnRoXHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBpZD0nTG9hZGluZycgY2xhc3NOYW1lPVwiTG9hZGluZ0FyZWFcIj5cclxuICAgICAgICAgICAgICAgIDxoMT5Mb2FkaW5nLi4uPC9oMT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICAgICAge2xpc3QubWFwKChsaXN0SXRlbSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e2xpc3RJdGVtLmV2ZW50SWR9IGNsYXNzTmFtZT0ncm93JyBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzM5N3B4JyxcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46ICcyOHB4JyxcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJ3doaXRlJyxcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ2JsYWNrJyxcclxuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogJzE0cHggN3B4JyxcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiAnZmxleC1zdGFydCcsXHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ25Db250ZW50OiAnZmxleC1zdGFydCdcclxuICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAnMThweCdcclxuICAgICAgICAgICAgICAgICAgICB9fT48aDQgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcyLjB2dycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0OiAnbGVmdCdcclxuICAgICAgICAgICAgICAgICAgICB9fSBuYW1lPVwiRGF0ZUNvdW50XCIgZGF0ZT17bGlzdEl0ZW0uRGF0ZX0+e0xlZnREYXRlKGxpc3RJdGVtLkRhdGUpfTwvaDQ+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6ICczOHB4IDE4cHgnXHJcbiAgICAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiMzMlXCIsIGhlaWdodDogJzIzOHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtsaXN0SXRlbS5sb2dvfSBzdHlsZT17e1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhIZWlnaHQ6ICcyNTlweCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiAnNTBweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dHYXA6ICcxMHB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduQ29udGVudDogJ3N0cmV0Y2gnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IHN0eWxlPXt7IGZvbnRTaXplOiAnMS43dncnIH19PntsaXN0SXRlbS5UaXRsZX08L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgXCJ3aGl0ZVNwYWNlXCI6IFwicHJlLXdyYXBcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgc3R5bGU9e3sgZm9udFNpemU6ICcxLjd2dycgfX0+R29hbDogIDwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IHN0eWxlPXt7IGZvbnRTaXplOiAnMS43dncnIH19PiR7bGlzdEl0ZW0uR29hbHVzZH0gKHtsaXN0SXRlbS5Hb2FsfSBORUFSKTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0OiAncmlnaHQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6ICdmbGV4LXN0YXJ0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiAnMHB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnZmxleC1lbmQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IFwiZGlzcGxheVwiOiBcImZsZXhcIiwgZ2FwOiBcIjE0cHhcIiB9fT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJyMwQkQ2QkUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnNzJweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzI0NHB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0OiAncmlnaHQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogJzBweCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gZXZlbnRpZD17bGlzdEl0ZW0uZXZlbnRJZH0gZGF0ZT17bGlzdEl0ZW0uRGF0ZX0gZXZlbnR0aXRsZT17bGlzdEl0ZW0uVGl0bGV9IGNsYXNzTmFtZT1cImNhcmRcIiB3YWxsZXR0eXBlPXtsaXN0SXRlbS53YWxsZXR0eXBlfSBvbkNsaWNrPXthY3RpdmF0ZUNyZWF0ZU5GVE1vZGFsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgZXZlbnRpZD17bGlzdEl0ZW0uZXZlbnRJZH0gZGF0ZT17bGlzdEl0ZW0uRGF0ZX0gZXZlbnR0aXRsZT17bGlzdEl0ZW0uVGl0bGV9IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1RvcDogJzM0cHgnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSB3YWxsZXR0eXBlPXtsaXN0SXRlbS53YWxsZXR0eXBlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEb25hdGUgTkZUXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJyMwQkQ2QkUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICcyNzNweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbG9hdDogJ3JpZ2h0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6ICcwJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gZXZlbnRpZD17bGlzdEl0ZW0uZXZlbnRJZH0gb25DbGljaz17YWN0aXZhdGVDcmVhdGVDcnlwdG9wdW5rTW9kYWx9IGRhdGU9e2xpc3RJdGVtLkRhdGV9IGV2ZW50dGl0bGU9e2xpc3RJdGVtLlRpdGxlfSBjbGFzc05hbWU9XCJjYXJkXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBldmVudGlkPXtsaXN0SXRlbS5ldmVudElkfSBkYXRlPXtsaXN0SXRlbS5EYXRlfSBldmVudHRpdGxlPXtsaXN0SXRlbS5UaXRsZX0gY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCIgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nVG9wOiAnMzRweCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERvbmF0ZSBDcnlwdG9wdW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICcjMEJENkJFJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6ICdwb2ludGVyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMjQ0cHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXQ6ICdyaWdodCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAnMCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19IGNsYXNzTmFtZT1cImNhcmRcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2TGluayB0bz17YC9kb25hdGlvbi9hdWN0aW9uPyR7bGlzdEl0ZW0uZXZlbnRJZH1gfT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIiBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1RvcDogJzM0cHgnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdvIHRvIGF1Y3Rpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDxEb25hdGVORlRNb2RhbFxyXG4gICAgICAgICAgICAgICAgc2hvdz17Q3JlYXRlbW9kYWxTaG93fVxyXG4gICAgICAgICAgICAgICAgb25IaWRlPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0TW9kYWxTaG93KGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBUaGlzIGlzIGEgcG9vciBpbXBsZW1lbnRhdGlvbiwgYmV0dGVyIHRvIGltcGxlbWVudCBhbiBldmVudCBsaXN0ZW5lclxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIEV2ZW50SUQ9e3NlbGVjdGlkfVxyXG4gICAgICAgICAgICAgICAgdHlwZT17c2VsZWN0ZWR0eXBlfVxyXG4gICAgICAgICAgICAgICAgU2VsZWN0ZWRUaXRsZT17U2VsZWN0ZWRUaXRsZX1cclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkV2FsbGV0PXtzZWxlY3RlZFdhbGxldH1cclxuICAgICAgICAgICAgICAgIGVuZGRhdGU9e1NlbGVjdGVkZW5kRGF0ZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn1cclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gZnVuY3Rpb24oKSB7IHJldHVybiBcImU3ZWMxYmFkMWQ0NGVmNWZjYWU1XCI7IH0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIk5hdkxpbmsiLCJEb25hdGVORlRNb2RhbCIsIkRvbmF0aW9uIiwiQ3JlYXRlbW9kYWxTaG93Iiwic2V0TW9kYWxTaG93IiwibGlzdCIsInNldExpc3QiLCJzZWxlY3RpZCIsInNldHNlbGVjdGlkIiwic2VsZWN0ZWR0eXBlIiwic2V0c2VsZWN0ZWR0eXBlIiwiU2VsZWN0ZWRUaXRsZSIsInNldFNlbGVjdGVkVGl0bGUiLCJTZWxlY3RlZGVuZERhdGUiLCJzZXRTZWxlY3RlZGVuZERhdGUiLCJzZWxlY3RlZFdhbGxldCIsInNldFNlbGVjdGVkV2FsbGV0IiwiZmV0Y2hDb250cmFjdERhdGEiLCJjYWxjdWxhdGVUaW1lTGVmdCIsImFsbERhdGVzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5TmFtZSIsImkiLCJsZW5ndGgiLCJkYXRlIiwiZ2V0QXR0cmlidXRlIiwiaW5uZXJIVE1MIiwiTGVmdERhdGUiLCJlcnJvciIsInNldEludGVydmFsIiwiZm9ybWF0dGVyIiwiSW50bCIsIk51bWJlckZvcm1hdCIsIm1pbmltdW1GcmFjdGlvbkRpZ2l0cyIsIm1heGltdW1GcmFjdGlvbkRpZ2l0cyIsIm5lYXJQcmljZSIsIm5lYXJDdXJyZW5jeVVybCIsIm9wdGlvbnMiLCJtZXRob2QiLCJoZWFkZXJzIiwiQWNjZXB0IiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsImNhdGNoIiwiZXJyIiwiY29uc29sZSIsImRhdGEiLCJtYXJrZXRQYWlycyIsInByaWNlIiwiQWlydGFibGUiLCJyZXF1aXJlIiwiYmFzZSIsImFwaUtleSIsInNlbGVjdCIsIm1heFJlY29yZHMiLCJzb3J0IiwiZmllbGQiLCJkaXJlY3Rpb24iLCJ2aWV3IiwiZWFjaFBhZ2UiLCJwYWdlIiwicmVjb3JkcyIsImZldGNoTmV4dFBhZ2UiLCJhcnIiLCJmb3JFYWNoIiwicmVjb3JkIiwiZ29hbFByaWNlMnVzZCIsIk51bWJlciIsImdldCIsInB1c2giLCJpZCIsImV2ZW50SWQiLCJUaXRsZSIsIkRhdGUiLCJHb2FsdXNkIiwiZm9ybWF0IiwiR29hbCIsImxvZ28iLCJ3YWxsZXR0eXBlIiwiZG9uZSIsImdldEVsZW1lbnRCeUlkIiwic3R5bGUiLCJhY3RpdmF0ZUNyZWF0ZU5GVE1vZGFsIiwiZSIsInRhcmdldCIsImFjdGl2YXRlQ3JlYXRlQ3J5cHRvcHVua01vZGFsIiwiZGF0ZXRleHQiLCJjIiwiZ2V0VGltZSIsIm4iLCJkIiwiZGEiLCJNYXRoIiwiZmxvb3IiLCJoIiwibSIsInMiLCJvdXRwdXQiLCJ0b1N0cmluZyIsImxpc3RJdGVtIiwiaGVpZ2h0IiwibWFyZ2luIiwiZGlzcGxheSIsImJhY2tncm91bmQiLCJjb2xvciIsIm92ZXJmbG93IiwicGFkZGluZyIsImFsaWduSXRlbXMiLCJhbGlnbkNvbnRlbnQiLCJ3aWR0aCIsImZvbnRTaXplIiwiZmxvYXQiLCJtYXhIZWlnaHQiLCJtYXJnaW5MZWZ0IiwiZmxleERpcmVjdGlvbiIsInJvd0dhcCIsImp1c3RpZnlDb250ZW50IiwiZ2FwIiwidGV4dEFsaWduIiwiY3Vyc29yIiwicGFkZGluZ1RvcCJdLCJzb3VyY2VSb290IjoiIn0=