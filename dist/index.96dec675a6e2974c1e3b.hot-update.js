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
                  var arr;
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
                  }); // To fetch the next page of records, call `fetchNextPage`.
                  // If there are more records, `page` will get called again.
                  // If there are no more records, `done` will get called.

                  fetchNextPage();
                }, function done(err) {
                  if (err) {
                    console.error(err);
                    return;
                  }
                });
                setList(arr);

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
/******/ 	__webpack_require__.h = function() { return "f252c678333c7630792f"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2luZGV4Ljk2ZGVjNjc1YTZlMjk3NGMxZTNiLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFZSxTQUFTSyxRQUFULEdBQW9CO0FBQy9CLGtCQUF3Q0osK0NBQVEsQ0FBQyxLQUFELENBQWhEO0FBQUE7QUFBQSxNQUFPSyxlQUFQO0FBQUEsTUFBd0JDLFlBQXhCOztBQUVBLG1CQUF3Qk4sK0NBQVEsQ0FBQyxFQUFELENBQWhDO0FBQUE7QUFBQSxNQUFPTyxJQUFQO0FBQUEsTUFBYUMsT0FBYjs7QUFDQSxtQkFBZ0NSLCtDQUFRLENBQUMsRUFBRCxDQUF4QztBQUFBO0FBQUEsTUFBT1MsUUFBUDtBQUFBLE1BQWlCQyxXQUFqQjs7QUFDQSxtQkFBd0NWLCtDQUFRLENBQUMsRUFBRCxDQUFoRDtBQUFBO0FBQUEsTUFBT1csWUFBUDtBQUFBLE1BQXFCQyxlQUFyQjs7QUFDQSxtQkFBMENaLCtDQUFRLENBQUMsRUFBRCxDQUFsRDtBQUFBO0FBQUEsTUFBT2EsYUFBUDtBQUFBLE1BQXNCQyxnQkFBdEI7O0FBQ0Esb0JBQThDZCwrQ0FBUSxDQUFDLEVBQUQsQ0FBdEQ7QUFBQTtBQUFBLE1BQU9lLGVBQVA7QUFBQSxNQUF3QkMsa0JBQXhCOztBQUNBLG9CQUE0Q2hCLCtDQUFRLENBQUMsRUFBRCxDQUFwRDtBQUFBO0FBQUEsTUFBT2lCLGNBQVA7QUFBQSxNQUF1QkMsaUJBQXZCOztBQUdBakIsRUFBQUEsZ0RBQVMsQ0FBQyxZQUFNO0FBQ1prQixJQUFBQSxpQkFBaUI7QUFDcEIsR0FGUSxFQUVOLEVBRk0sQ0FBVDs7QUFJQSxXQUFTQyxpQkFBVCxHQUE2QjtBQUN6QixRQUFJO0FBQ0EsVUFBSUMsUUFBUSxHQUFHQyxRQUFRLENBQUNDLGlCQUFULENBQTJCLFdBQTNCLENBQWY7O0FBQ0EsV0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHSCxRQUFRLENBQUNJLE1BQTdC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RTtBQUZrQjtBQUFsQyx1QkFGSixDQVZKLENBdENKLENBVkosQ0FkSixDQVhKLENBbkJKLENBRE07QUFBQSxHQUFMLENBeEJULGVBa0pJLGlEQUFDLG9GQUFEO0FBQ0ksUUFBSSxFQUFFbkgsZUFEVjtBQUVJLFVBQU0sRUFBRSxrQkFBTTtBQUNWQyxNQUFBQSxZQUFZLENBQUMsS0FBRCxDQUFaLENBRFUsQ0FFVjtBQUNILEtBTEw7QUFNSSxXQUFPLEVBQUVHLFFBTmI7QUFPSSxRQUFJLEVBQUVFLFlBUFY7QUFRSSxpQkFBYSxFQUFFRSxhQVJuQjtBQVNJLGtCQUFjLEVBQUVJLGNBVHBCO0FBVUksV0FBTyxFQUFFRjtBQVZiLElBbEpKLENBREo7QUFpS0g7Ozs7Ozs7O1VDelNELHFDQUFxQyIsInNvdXJjZXMiOlsid2VicGFjazovL2RlbWV0ZXJnaWZ0Ly4vc3JjL3BhZ2VzL2RvbmF0aW9uL2luZGV4LmpzeCIsIndlYnBhY2s6Ly9kZW1ldGVyZ2lmdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IE5hdkxpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xyXG5pbXBvcnQgRG9uYXRlTkZUTW9kYWwgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb21wb25lbnRzL21vZGFscy9Eb25hdGVORlRNb2RhbCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEb25hdGlvbigpIHtcclxuICAgIGNvbnN0IFtDcmVhdGVtb2RhbFNob3csIHNldE1vZGFsU2hvd10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgY29uc3QgW2xpc3QsIHNldExpc3RdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW3NlbGVjdGlkLCBzZXRzZWxlY3RpZF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbc2VsZWN0ZWR0eXBlLCBzZXRzZWxlY3RlZHR5cGVdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW1NlbGVjdGVkVGl0bGUsIHNldFNlbGVjdGVkVGl0bGVdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW1NlbGVjdGVkZW5kRGF0ZSwgc2V0U2VsZWN0ZWRlbmREYXRlXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtzZWxlY3RlZFdhbGxldCwgc2V0U2VsZWN0ZWRXYWxsZXRdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZmV0Y2hDb250cmFjdERhdGEoKTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBmdW5jdGlvbiBjYWxjdWxhdGVUaW1lTGVmdCgpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICB2YXIgYWxsRGF0ZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShcIkRhdGVDb3VudFwiKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxEYXRlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdmFyIGRhdGUgPSAoYWxsRGF0ZXNbaV0pLmdldEF0dHJpYnV0ZShcImRhdGVcIik7XHJcbiAgICAgICAgICAgICAgICBhbGxEYXRlc1tpXS5pbm5lckhUTUwgPSBMZWZ0RGF0ZShkYXRlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY2FsY3VsYXRlVGltZUxlZnQoKTtcclxuICAgIH0sIDEwMDApO1xyXG4gICAgY29uc3QgZm9ybWF0dGVyID0gbmV3IEludGwuTnVtYmVyRm9ybWF0KCdlbi1VUycsIHtcclxuICAgICAgICBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDIsXHJcbiAgICAgICAgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAyLFxyXG4gICAgfSk7XHJcblxyXG4gICAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hDb250cmFjdERhdGEoKSB7XHJcblxyXG4gICAgICAgICAgICAvL05lYXIgY3VycmVuY3lcclxuICAgICAgICAgICAgdmFyIG5lYXJQcmljZSA9IDA7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbmVhckN1cnJlbmN5VXJsID0gXCJodHRwczovL2FwaS5jb2lubWFya2V0Y2FwLmNvbS9kYXRhLWFwaS92My9jcnlwdG9jdXJyZW5jeS9tYXJrZXQtcGFpcnMvbGF0ZXN0P3NsdWc9bmVhci1wcm90b2NvbCZzdGFydD0xJmxpbWl0PTEmY2F0ZWdvcnk9c3BvdCZzb3J0PWNtY19yYW5rX2FkdmFuY2VkXCI7XHJcbiAgICAgICAgICAgICAgICBsZXQgb3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbiwgdGV4dC9wbGFpbiwgKi8qJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgZmV0Y2gobmVhckN1cnJlbmN5VXJsLCBvcHRpb25zKS50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGpzb24gPT4gbmVhclByaWNlID0ganNvbilcclxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoJ2Vycm9yOicgKyBlcnIpKTtcclxuICAgICAgICAgICAgICAgIG5lYXJQcmljZSA9IG5lYXJQcmljZS5kYXRhLm1hcmtldFBhaXJzWzBdLnByaWNlO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChleCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIG5lYXJQcmljZSA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICB2YXIgQWlydGFibGUgPSByZXF1aXJlKCdhaXJ0YWJsZScpO1xyXG4gICAgICAgICAgICB2YXIgYmFzZSA9IG5ldyBBaXJ0YWJsZSh7IGFwaUtleTogJ2tleVIxUnJjbDlPMnM5YlRzJyB9KS5iYXNlKCdhcHBnYlJDcGJrem1kY3VjTycpO1xyXG5cclxuICAgICAgICAgICAgYmFzZSgnZXZlbnRzJykuc2VsZWN0KHtcclxuICAgICAgICAgICAgICAgIC8vIFNlbGVjdGluZyB0aGUgZmlyc3QgMyByZWNvcmRzIGluIEdyaWQgdmlldzpcclxuICAgICAgICAgICAgICAgIG1heFJlY29yZHM6IDEwLFxyXG4gICAgICAgICAgICAgICAgdmlldzogXCJHcmlkIHZpZXdcIlxyXG4gICAgICAgICAgICB9KS5lYWNoUGFnZShmdW5jdGlvbiBwYWdlKHJlY29yZHMsIGZldGNoTmV4dFBhZ2UpIHtcclxuICAgICAgICAgICAgICAgIC8vIFRoaXMgZnVuY3Rpb24gKGBwYWdlYCkgd2lsbCBnZXQgY2FsbGVkIGZvciBlYWNoIHBhZ2Ugb2YgcmVjb3Jkcy5cclxuICAgICAgICAgICAgICAgIHZhciBhcnI7XHJcbiAgICAgICAgICAgICAgICByZWNvcmRzLmZvckVhY2goZnVuY3Rpb24gKHJlY29yZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBnb2FsUHJpY2UydXNkID0gMDtcclxuICAgICAgICAgICAgICAgICAgICBnb2FsUHJpY2UydXNkID0gTnVtYmVyKE51bWJlcihyZWNvcmQuZ2V0KFwiR29hbFwiKSkgKiBuZWFyUHJpY2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIGFyci5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnRJZDogcmVjb3JkLmdldChcImlkXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBUaXRsZTogcmVjb3JkLmdldChcInRpdGxlXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBEYXRlOiByZWNvcmQuZ2V0KFwiZW5kRGF0ZVwiKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgR29hbHVzZDogZm9ybWF0dGVyLmZvcm1hdChnb2FsUHJpY2UydXNkKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgR29hbDogcmVjb3JkLmdldChcIkdvYWxcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZ286ICByZWNvcmQuZ2V0KFwibG9nb2xpbmtcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdhbGxldHR5cGU6IHJlY29yZC5nZXQoXCJ3YWxsZXR0eXBlXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBUbyBmZXRjaCB0aGUgbmV4dCBwYWdlIG9mIHJlY29yZHMsIGNhbGwgYGZldGNoTmV4dFBhZ2VgLlxyXG4gICAgICAgICAgICAgICAgLy8gSWYgdGhlcmUgYXJlIG1vcmUgcmVjb3JkcywgYHBhZ2VgIHdpbGwgZ2V0IGNhbGxlZCBhZ2Fpbi5cclxuICAgICAgICAgICAgICAgIC8vIElmIHRoZXJlIGFyZSBubyBtb3JlIHJlY29yZHMsIGBkb25lYCB3aWxsIGdldCBjYWxsZWQuXHJcbiAgICAgICAgICAgICAgICBmZXRjaE5leHRQYWdlKCk7XHJcblxyXG4gICAgICAgICAgICB9LCBmdW5jdGlvbiBkb25lKGVycikge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVycikgeyBjb25zb2xlLmVycm9yKGVycik7IHJldHVybjsgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgc2V0TGlzdChhcnIpO1xyXG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJMb2FkaW5nXCIpKSB7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIkxvYWRpbmdcIikuc3R5bGUgPSBcImRpc3BsYXk6bm9uZVwiO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGFjdGl2YXRlQ3JlYXRlTkZUTW9kYWwoZSkge1xyXG4gICAgICAgIHNldHNlbGVjdGlkKGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImV2ZW50aWRcIikpO1xyXG4gICAgICAgIHNldFNlbGVjdGVkVGl0bGUoZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZXZlbnR0aXRsZVwiKSk7XHJcbiAgICAgICAgc2V0U2VsZWN0ZWRlbmREYXRlKGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGVcIikpO1xyXG4gICAgICAgIHNldFNlbGVjdGVkV2FsbGV0KGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcIndhbGxldHR5cGVcIikpO1xyXG4gICAgICAgIHNldHNlbGVjdGVkdHlwZShcIk5GVFwiKTtcclxuXHJcbiAgICAgICAgc2V0TW9kYWxTaG93KHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGFjdGl2YXRlQ3JlYXRlQ3J5cHRvcHVua01vZGFsKGUpIHtcclxuICAgICAgICBzZXRzZWxlY3RpZChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJldmVudGlkXCIpKTtcclxuICAgICAgICBzZXRTZWxlY3RlZFRpdGxlKGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImV2ZW50dGl0bGVcIikpO1xyXG4gICAgICAgIHNldFNlbGVjdGVkZW5kRGF0ZShlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRlXCIpKTtcclxuICAgICAgICBzZXRzZWxlY3RlZHR5cGUoXCJDcnlwdG9wdW5rXCIpO1xyXG5cclxuICAgICAgICBzZXRNb2RhbFNob3codHJ1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIExlZnREYXRlKGRhdGV0ZXh0KSB7XHJcbiAgICAgICAgdmFyIGMgPSBuZXcgRGF0ZShkYXRldGV4dCkuZ2V0VGltZSgpO1xyXG4gICAgICAgIHZhciBuID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgICAgICAgdmFyIGQgPSBjIC0gbjtcclxuICAgICAgICB2YXIgZGEgPSBNYXRoLmZsb29yKGQgLyAoMTAwMCAqIDYwICogNjAgKiAyNCkpO1xyXG4gICAgICAgIHZhciBoID0gTWF0aC5mbG9vcigoZCAlICgxMDAwICogNjAgKiA2MCAqIDI0KSkgLyAoMTAwMCAqIDYwICogNjApKTtcclxuICAgICAgICB2YXIgbSA9IE1hdGguZmxvb3IoKGQgJSAoMTAwMCAqIDYwICogNjApKSAvICgxMDAwICogNjApKTtcclxuICAgICAgICB2YXIgcyA9IE1hdGguZmxvb3IoKGQgJSAoMTAwMCAqIDYwKSkgLyAxMDAwKTtcclxuICAgICAgICB2YXIgb3V0cHV0ID0gZGEudG9TdHJpbmcoKSArIFwiIERheXMgXCIgKyBoLnRvU3RyaW5nKCkgKyBcIiBob3VycyBcIiArIG0udG9TdHJpbmcoKSArIFwiIG1pbnV0ZXMgXCIgKyBzLnRvU3RyaW5nKCkgKyBcIiBzZWNvbmRzXCI7XHJcbiAgICAgICAgLy8gaWYgKFwiLVwiIGluIG91dHB1dCkge1xyXG4gICAgICAgIC8vICAgICBvdXRwdXQgPSBcIkV4cGlyZWQhXCJcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgcmV0dXJuIChvdXRwdXQpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cgRG9uYXRpb25CYXInPlxyXG4gICAgICAgICAgICAgICAgPE5hdkxpbmsgdG89Jz9xPUFsbCc+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPSdEb25hdGlvbkJhckxpbmsgYWN0aXZlJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQWxsXHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICAgICAgPE5hdkxpbmsgdG89Jz9xPVRvZGF5Jz5cclxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9J0RvbmF0aW9uQmFyTGluayc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFRvZGF5XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICAgICAgPE5hdkxpbmsgdG89Jz9xPVRoaXMgTW9udGgnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT0nRG9uYXRpb25CYXJMaW5rJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgVGhpcyBNb250aFxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgaWQ9J0xvYWRpbmcnIGNsYXNzTmFtZT1cIkxvYWRpbmdBcmVhXCI+XHJcbiAgICAgICAgICAgICAgICA8aDE+TG9hZGluZy4uLjwvaDE+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICAgICAgICAgIHtsaXN0Lm1hcCgobGlzdEl0ZW0pID0+IChcclxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtsaXN0SXRlbS5ldmVudElkfSBjbGFzc05hbWU9J3Jvdycgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICczOTdweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAnMjhweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICd3aGl0ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICdibGFjaycsXHJcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6ICcxNHB4IDdweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogJ2ZsZXgtc3RhcnQnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduQ29udGVudDogJ2ZsZXgtc3RhcnQnXHJcbiAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogJzE4cHgnXHJcbiAgICAgICAgICAgICAgICAgICAgfX0+PGg0IHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMi4wdncnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbG9hdDogJ2xlZnQnXHJcbiAgICAgICAgICAgICAgICAgICAgfX0gbmFtZT1cIkRhdGVDb3VudFwiIGRhdGU9e2xpc3RJdGVtLkRhdGV9PntMZWZ0RGF0ZShsaXN0SXRlbS5EYXRlKX08L2g0PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAnMzhweCAxOHB4J1xyXG4gICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjMzJVwiLCBoZWlnaHQ6ICcyMzhweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17bGlzdEl0ZW0ubG9nb30gc3R5bGU9e3tcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4SGVpZ2h0OiAnMjU5cHgnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogJzUwcHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93R2FwOiAnMTBweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbkNvbnRlbnQ6ICdzdHJldGNoJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBzdHlsZT17eyBmb250U2l6ZTogJzEuN3Z3JyB9fT57bGlzdEl0ZW0uVGl0bGV9PC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIFwid2hpdGVTcGFjZVwiOiBcInByZS13cmFwXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IHN0eWxlPXt7IGZvbnRTaXplOiAnMS43dncnIH19PkdvYWw6ICA8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBzdHlsZT17eyBmb250U2l6ZTogJzEuN3Z3JyB9fT4ke2xpc3RJdGVtLkdvYWx1c2R9ICh7bGlzdEl0ZW0uR29hbH0gTkVBUik8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbG9hdDogJ3JpZ2h0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiAnZmxleC1zdGFydCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogJzBweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtZW5kJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBcImRpc3BsYXlcIjogXCJmbGV4XCIsIGdhcDogXCIxNHB4XCIgfX0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICcjMEJENkJFJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6ICdwb2ludGVyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzcycHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICcyNDRweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbG9hdDogJ3JpZ2h0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6ICcwcHgnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19IGV2ZW50aWQ9e2xpc3RJdGVtLmV2ZW50SWR9IGRhdGU9e2xpc3RJdGVtLkRhdGV9IGV2ZW50dGl0bGU9e2xpc3RJdGVtLlRpdGxlfSBjbGFzc05hbWU9XCJjYXJkXCIgd2FsbGV0dHlwZT17bGlzdEl0ZW0ud2FsbGV0dHlwZX0gb25DbGljaz17YWN0aXZhdGVDcmVhdGVORlRNb2RhbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGV2ZW50aWQ9e2xpc3RJdGVtLmV2ZW50SWR9IGRhdGU9e2xpc3RJdGVtLkRhdGV9IGV2ZW50dGl0bGU9e2xpc3RJdGVtLlRpdGxlfSBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIiBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdUb3A6ICczNHB4J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gd2FsbGV0dHlwZT17bGlzdEl0ZW0ud2FsbGV0dHlwZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRG9uYXRlIE5GVFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICcjMEJENkJFJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6ICdwb2ludGVyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMjczcHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXQ6ICdyaWdodCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAnMCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19IGV2ZW50aWQ9e2xpc3RJdGVtLmV2ZW50SWR9IG9uQ2xpY2s9e2FjdGl2YXRlQ3JlYXRlQ3J5cHRvcHVua01vZGFsfSBkYXRlPXtsaXN0SXRlbS5EYXRlfSBldmVudHRpdGxlPXtsaXN0SXRlbS5UaXRsZX0gY2xhc3NOYW1lPVwiY2FyZFwiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgZXZlbnRpZD17bGlzdEl0ZW0uZXZlbnRJZH0gZGF0ZT17bGlzdEl0ZW0uRGF0ZX0gZXZlbnR0aXRsZT17bGlzdEl0ZW0uVGl0bGV9IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1RvcDogJzM0cHgnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEb25hdGUgQ3J5cHRvcHVua1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAnIzBCRDZCRScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzI0NHB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0OiAncmlnaHQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogJzAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSBjbGFzc05hbWU9XCJjYXJkXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkxpbmsgdG89e2AvZG9uYXRpb24vYXVjdGlvbj8ke2xpc3RJdGVtLmV2ZW50SWR9YH0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCIgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdUb3A6ICczNHB4J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHbyB0byBhdWN0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8RG9uYXRlTkZUTW9kYWxcclxuICAgICAgICAgICAgICAgIHNob3c9e0NyZWF0ZW1vZGFsU2hvd31cclxuICAgICAgICAgICAgICAgIG9uSGlkZT17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldE1vZGFsU2hvdyhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gVGhpcyBpcyBhIHBvb3IgaW1wbGVtZW50YXRpb24sIGJldHRlciB0byBpbXBsZW1lbnQgYW4gZXZlbnQgbGlzdGVuZXJcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBFdmVudElEPXtzZWxlY3RpZH1cclxuICAgICAgICAgICAgICAgIHR5cGU9e3NlbGVjdGVkdHlwZX1cclxuICAgICAgICAgICAgICAgIFNlbGVjdGVkVGl0bGU9e1NlbGVjdGVkVGl0bGV9XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZFdhbGxldD17c2VsZWN0ZWRXYWxsZXR9XHJcbiAgICAgICAgICAgICAgICBlbmRkYXRlPXtTZWxlY3RlZGVuZERhdGV9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59XHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gXCJmMjUyYzY3ODMzM2M3NjMwNzkyZlwiOyB9Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJOYXZMaW5rIiwiRG9uYXRlTkZUTW9kYWwiLCJEb25hdGlvbiIsIkNyZWF0ZW1vZGFsU2hvdyIsInNldE1vZGFsU2hvdyIsImxpc3QiLCJzZXRMaXN0Iiwic2VsZWN0aWQiLCJzZXRzZWxlY3RpZCIsInNlbGVjdGVkdHlwZSIsInNldHNlbGVjdGVkdHlwZSIsIlNlbGVjdGVkVGl0bGUiLCJzZXRTZWxlY3RlZFRpdGxlIiwiU2VsZWN0ZWRlbmREYXRlIiwic2V0U2VsZWN0ZWRlbmREYXRlIiwic2VsZWN0ZWRXYWxsZXQiLCJzZXRTZWxlY3RlZFdhbGxldCIsImZldGNoQ29udHJhY3REYXRhIiwiY2FsY3VsYXRlVGltZUxlZnQiLCJhbGxEYXRlcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeU5hbWUiLCJpIiwibGVuZ3RoIiwiZGF0ZSIsImdldEF0dHJpYnV0ZSIsImlubmVySFRNTCIsIkxlZnREYXRlIiwiZXJyb3IiLCJzZXRJbnRlcnZhbCIsImZvcm1hdHRlciIsIkludGwiLCJOdW1iZXJGb3JtYXQiLCJtaW5pbXVtRnJhY3Rpb25EaWdpdHMiLCJtYXhpbXVtRnJhY3Rpb25EaWdpdHMiLCJuZWFyUHJpY2UiLCJuZWFyQ3VycmVuY3lVcmwiLCJvcHRpb25zIiwibWV0aG9kIiwiaGVhZGVycyIsIkFjY2VwdCIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJjYXRjaCIsImVyciIsImNvbnNvbGUiLCJkYXRhIiwibWFya2V0UGFpcnMiLCJwcmljZSIsIkFpcnRhYmxlIiwicmVxdWlyZSIsImJhc2UiLCJhcGlLZXkiLCJzZWxlY3QiLCJtYXhSZWNvcmRzIiwidmlldyIsImVhY2hQYWdlIiwicGFnZSIsInJlY29yZHMiLCJmZXRjaE5leHRQYWdlIiwiYXJyIiwiZm9yRWFjaCIsInJlY29yZCIsImdvYWxQcmljZTJ1c2QiLCJOdW1iZXIiLCJnZXQiLCJwdXNoIiwiZXZlbnRJZCIsIlRpdGxlIiwiRGF0ZSIsIkdvYWx1c2QiLCJmb3JtYXQiLCJHb2FsIiwibG9nbyIsIndhbGxldHR5cGUiLCJkb25lIiwiZ2V0RWxlbWVudEJ5SWQiLCJzdHlsZSIsImFjdGl2YXRlQ3JlYXRlTkZUTW9kYWwiLCJlIiwidGFyZ2V0IiwiYWN0aXZhdGVDcmVhdGVDcnlwdG9wdW5rTW9kYWwiLCJkYXRldGV4dCIsImMiLCJnZXRUaW1lIiwibiIsImQiLCJkYSIsIk1hdGgiLCJmbG9vciIsImgiLCJtIiwicyIsIm91dHB1dCIsInRvU3RyaW5nIiwibGlzdEl0ZW0iLCJoZWlnaHQiLCJtYXJnaW4iLCJkaXNwbGF5IiwiYmFja2dyb3VuZCIsImNvbG9yIiwib3ZlcmZsb3ciLCJwYWRkaW5nIiwiYWxpZ25JdGVtcyIsImFsaWduQ29udGVudCIsIndpZHRoIiwiZm9udFNpemUiLCJmbG9hdCIsIm1heEhlaWdodCIsIm1hcmdpbkxlZnQiLCJmbGV4RGlyZWN0aW9uIiwicm93R2FwIiwianVzdGlmeUNvbnRlbnQiLCJnYXAiLCJ0ZXh0QWxpZ24iLCJjdXJzb3IiLCJwYWRkaW5nVG9wIl0sInNvdXJjZVJvb3QiOiIifQ==