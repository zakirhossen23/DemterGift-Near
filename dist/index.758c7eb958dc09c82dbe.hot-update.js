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
                  }); // To fetch the next page of records, call `fetchNextPage`.
                  // If there are more records, `page` will get called again.
                  // If there are no more records, `done` will get called.
                  // fetchNextPage();
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
/******/ 	__webpack_require__.h = function() { return "ba02f1e1def9382aeb78"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2luZGV4Ljc1OGM3ZWI5NThkYzA5YzgyZGJlLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFZSxTQUFTSyxRQUFULEdBQW9CO0FBQy9CLGtCQUF3Q0osK0NBQVEsQ0FBQyxLQUFELENBQWhEO0FBQUE7QUFBQSxNQUFPSyxlQUFQO0FBQUEsTUFBd0JDLFlBQXhCOztBQUVBLG1CQUF3Qk4sK0NBQVEsQ0FBQyxFQUFELENBQWhDO0FBQUE7QUFBQSxNQUFPTyxJQUFQO0FBQUEsTUFBYUMsT0FBYjs7QUFDQSxtQkFBZ0NSLCtDQUFRLENBQUMsRUFBRCxDQUF4QztBQUFBO0FBQUEsTUFBT1MsUUFBUDtBQUFBLE1BQWlCQyxXQUFqQjs7QUFDQSxtQkFBd0NWLCtDQUFRLENBQUMsRUFBRCxDQUFoRDtBQUFBO0FBQUEsTUFBT1csWUFBUDtBQUFBLE1BQXFCQyxlQUFyQjs7QUFDQSxtQkFBMENaLCtDQUFRLENBQUMsRUFBRCxDQUFsRDtBQUFBO0FBQUEsTUFBT2EsYUFBUDtBQUFBLE1BQXNCQyxnQkFBdEI7O0FBQ0Esb0JBQThDZCwrQ0FBUSxDQUFDLEVBQUQsQ0FBdEQ7QUFBQTtBQUFBLE1BQU9lLGVBQVA7QUFBQSxNQUF3QkMsa0JBQXhCOztBQUNBLG9CQUE0Q2hCLCtDQUFRLENBQUMsRUFBRCxDQUFwRDtBQUFBO0FBQUEsTUFBT2lCLGNBQVA7QUFBQSxNQUF1QkMsaUJBQXZCOztBQUdBakIsRUFBQUEsZ0RBQVMsQ0FBQyxZQUFNO0FBQ1prQixJQUFBQSxpQkFBaUI7QUFDcEIsR0FGUSxFQUVOLEVBRk0sQ0FBVDs7QUFJQSxXQUFTQyxpQkFBVCxHQUE2QjtBQUN6QixRQUFJO0FBQ0EsVUFBSUMsUUFBUSxHQUFHQyxRQUFRLENBQUNDLGlCQUFULENBQTJCLFdBQTNCLENBQWY7O0FBQ0EsV0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHSCxRQUFRLENBQUNJLE1BQTdC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QjtBQUFsQyx1QkFGSixDQVZKLENBdENKLENBVkosQ0FkSixDQVhKLENBbkJKLENBRE07QUFBQSxHQUFMLENBeEJULGVBa0pJLGlEQUFDLG9GQUFEO0FBQ0ksUUFBSSxFQUFFbkgsZUFEVjtBQUVJLFVBQU0sRUFBRSxrQkFBTTtBQUNWQyxNQUFBQSxZQUFZLENBQUMsS0FBRCxDQUFaLENBRFUsQ0FFVjtBQUNILEtBTEw7QUFNSSxXQUFPLEVBQUVHLFFBTmI7QUFPSSxRQUFJLEVBQUVFLFlBUFY7QUFRSSxpQkFBYSxFQUFFRSxhQVJuQjtBQVNJLGtCQUFjLEVBQUVJLGNBVHBCO0FBVUksV0FBTyxFQUFFRjtBQVZiLElBbEpKLENBREo7QUFpS0g7Ozs7Ozs7O1VDelNELHFDQUFxQyIsInNvdXJjZXMiOlsid2VicGFjazovL2RlbWV0ZXJnaWZ0Ly4vc3JjL3BhZ2VzL2RvbmF0aW9uL2luZGV4LmpzeCIsIndlYnBhY2s6Ly9kZW1ldGVyZ2lmdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IE5hdkxpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xyXG5pbXBvcnQgRG9uYXRlTkZUTW9kYWwgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb21wb25lbnRzL21vZGFscy9Eb25hdGVORlRNb2RhbCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEb25hdGlvbigpIHtcclxuICAgIGNvbnN0IFtDcmVhdGVtb2RhbFNob3csIHNldE1vZGFsU2hvd10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgY29uc3QgW2xpc3QsIHNldExpc3RdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW3NlbGVjdGlkLCBzZXRzZWxlY3RpZF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbc2VsZWN0ZWR0eXBlLCBzZXRzZWxlY3RlZHR5cGVdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW1NlbGVjdGVkVGl0bGUsIHNldFNlbGVjdGVkVGl0bGVdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW1NlbGVjdGVkZW5kRGF0ZSwgc2V0U2VsZWN0ZWRlbmREYXRlXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtzZWxlY3RlZFdhbGxldCwgc2V0U2VsZWN0ZWRXYWxsZXRdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZmV0Y2hDb250cmFjdERhdGEoKTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBmdW5jdGlvbiBjYWxjdWxhdGVUaW1lTGVmdCgpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICB2YXIgYWxsRGF0ZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShcIkRhdGVDb3VudFwiKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxEYXRlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdmFyIGRhdGUgPSAoYWxsRGF0ZXNbaV0pLmdldEF0dHJpYnV0ZShcImRhdGVcIik7XHJcbiAgICAgICAgICAgICAgICBhbGxEYXRlc1tpXS5pbm5lckhUTUwgPSBMZWZ0RGF0ZShkYXRlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY2FsY3VsYXRlVGltZUxlZnQoKTtcclxuICAgIH0sIDEwMDApO1xyXG4gICAgY29uc3QgZm9ybWF0dGVyID0gbmV3IEludGwuTnVtYmVyRm9ybWF0KCdlbi1VUycsIHtcclxuICAgICAgICBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDIsXHJcbiAgICAgICAgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAyLFxyXG4gICAgfSk7XHJcblxyXG4gICAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hDb250cmFjdERhdGEoKSB7XHJcblxyXG4gICAgICAgICAgICAvL05lYXIgY3VycmVuY3lcclxuICAgICAgICAgICAgdmFyIG5lYXJQcmljZSA9IDA7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbmVhckN1cnJlbmN5VXJsID0gXCJodHRwczovL2FwaS5jb2lubWFya2V0Y2FwLmNvbS9kYXRhLWFwaS92My9jcnlwdG9jdXJyZW5jeS9tYXJrZXQtcGFpcnMvbGF0ZXN0P3NsdWc9bmVhci1wcm90b2NvbCZzdGFydD0xJmxpbWl0PTEmY2F0ZWdvcnk9c3BvdCZzb3J0PWNtY19yYW5rX2FkdmFuY2VkXCI7XHJcbiAgICAgICAgICAgICAgICBsZXQgb3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbiwgdGV4dC9wbGFpbiwgKi8qJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgZmV0Y2gobmVhckN1cnJlbmN5VXJsLCBvcHRpb25zKS50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGpzb24gPT4gbmVhclByaWNlID0ganNvbilcclxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoJ2Vycm9yOicgKyBlcnIpKTtcclxuICAgICAgICAgICAgICAgIG5lYXJQcmljZSA9IG5lYXJQcmljZS5kYXRhLm1hcmtldFBhaXJzWzBdLnByaWNlO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChleCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIG5lYXJQcmljZSA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICB2YXIgQWlydGFibGUgPSByZXF1aXJlKCdhaXJ0YWJsZScpO1xyXG4gICAgICAgICAgICB2YXIgYmFzZSA9IG5ldyBBaXJ0YWJsZSh7IGFwaUtleTogJ2tleVIxUnJjbDlPMnM5YlRzJyB9KS5iYXNlKCdhcHBnYlJDcGJrem1kY3VjTycpO1xyXG5cclxuICAgICAgICAgICAgYmFzZSgnZXZlbnRzJykuc2VsZWN0KHtcclxuICAgICAgICAgICAgICAgIC8vIFNlbGVjdGluZyB0aGUgZmlyc3QgMyByZWNvcmRzIGluIEdyaWQgdmlldzpcclxuICAgICAgICAgICAgICAgIG1heFJlY29yZHM6IDEwLFxyXG4gICAgICAgICAgICAgICAgdmlldzogXCJHcmlkIHZpZXdcIlxyXG4gICAgICAgICAgICB9KS5lYWNoUGFnZShmdW5jdGlvbiBwYWdlKHJlY29yZHMsIGZldGNoTmV4dFBhZ2UpIHtcclxuICAgICAgICAgICAgICAgIC8vIFRoaXMgZnVuY3Rpb24gKGBwYWdlYCkgd2lsbCBnZXQgY2FsbGVkIGZvciBlYWNoIHBhZ2Ugb2YgcmVjb3Jkcy5cclxuICAgICAgICAgICAgICAgIHZhciBhcnIgPSBbXTtcclxuICAgICAgICAgICAgICAgIHJlY29yZHMuZm9yRWFjaChmdW5jdGlvbiAocmVjb3JkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGdvYWxQcmljZTJ1c2QgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGdvYWxQcmljZTJ1c2QgPSBOdW1iZXIoTnVtYmVyKHJlY29yZC5nZXQoXCJHb2FsXCIpKSAqIG5lYXJQcmljZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYXJyLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudElkOiByZWNvcmQuZ2V0KFwiaWRcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFRpdGxlOiByZWNvcmQuZ2V0KFwidGl0bGVcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIERhdGU6IHJlY29yZC5nZXQoXCJlbmREYXRlXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBHb2FsdXNkOiBmb3JtYXR0ZXIuZm9ybWF0KGdvYWxQcmljZTJ1c2QpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBHb2FsOiByZWNvcmQuZ2V0KFwiR29hbFwiKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9nbzogIHJlY29yZC5nZXQoXCJsb2dvbGlua1wiKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2FsbGV0dHlwZTogcmVjb3JkLmdldChcIndhbGxldHR5cGVcIilcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIFRvIGZldGNoIHRoZSBuZXh0IHBhZ2Ugb2YgcmVjb3JkcywgY2FsbCBgZmV0Y2hOZXh0UGFnZWAuXHJcbiAgICAgICAgICAgICAgICAvLyBJZiB0aGVyZSBhcmUgbW9yZSByZWNvcmRzLCBgcGFnZWAgd2lsbCBnZXQgY2FsbGVkIGFnYWluLlxyXG4gICAgICAgICAgICAgICAgLy8gSWYgdGhlcmUgYXJlIG5vIG1vcmUgcmVjb3JkcywgYGRvbmVgIHdpbGwgZ2V0IGNhbGxlZC5cclxuICAgICAgICAgICAgICAgLy8gZmV0Y2hOZXh0UGFnZSgpO1xyXG5cclxuICAgICAgICAgICAgfSwgZnVuY3Rpb24gZG9uZShlcnIpIHtcclxuICAgICAgICAgICAgICAgIGlmIChlcnIpIHsgY29uc29sZS5lcnJvcihlcnIpOyByZXR1cm47IH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHNldExpc3QoYXJyKTtcclxuICAgICAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiTG9hZGluZ1wiKSkge1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJMb2FkaW5nXCIpLnN0eWxlID0gXCJkaXNwbGF5Om5vbmVcIjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBhY3RpdmF0ZUNyZWF0ZU5GVE1vZGFsKGUpIHtcclxuICAgICAgICBzZXRzZWxlY3RpZChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJldmVudGlkXCIpKTtcclxuICAgICAgICBzZXRTZWxlY3RlZFRpdGxlKGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImV2ZW50dGl0bGVcIikpO1xyXG4gICAgICAgIHNldFNlbGVjdGVkZW5kRGF0ZShlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRlXCIpKTtcclxuICAgICAgICBzZXRTZWxlY3RlZFdhbGxldChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJ3YWxsZXR0eXBlXCIpKTtcclxuICAgICAgICBzZXRzZWxlY3RlZHR5cGUoXCJORlRcIik7XHJcblxyXG4gICAgICAgIHNldE1vZGFsU2hvdyh0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBhY3RpdmF0ZUNyZWF0ZUNyeXB0b3B1bmtNb2RhbChlKSB7XHJcbiAgICAgICAgc2V0c2VsZWN0aWQoZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZXZlbnRpZFwiKSk7XHJcbiAgICAgICAgc2V0U2VsZWN0ZWRUaXRsZShlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJldmVudHRpdGxlXCIpKTtcclxuICAgICAgICBzZXRTZWxlY3RlZGVuZERhdGUoZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0ZVwiKSk7XHJcbiAgICAgICAgc2V0c2VsZWN0ZWR0eXBlKFwiQ3J5cHRvcHVua1wiKTtcclxuXHJcbiAgICAgICAgc2V0TW9kYWxTaG93KHRydWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBmdW5jdGlvbiBMZWZ0RGF0ZShkYXRldGV4dCkge1xyXG4gICAgICAgIHZhciBjID0gbmV3IERhdGUoZGF0ZXRleHQpLmdldFRpbWUoKTtcclxuICAgICAgICB2YXIgbiA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgICAgIHZhciBkID0gYyAtIG47XHJcbiAgICAgICAgdmFyIGRhID0gTWF0aC5mbG9vcihkIC8gKDEwMDAgKiA2MCAqIDYwICogMjQpKTtcclxuICAgICAgICB2YXIgaCA9IE1hdGguZmxvb3IoKGQgJSAoMTAwMCAqIDYwICogNjAgKiAyNCkpIC8gKDEwMDAgKiA2MCAqIDYwKSk7XHJcbiAgICAgICAgdmFyIG0gPSBNYXRoLmZsb29yKChkICUgKDEwMDAgKiA2MCAqIDYwKSkgLyAoMTAwMCAqIDYwKSk7XHJcbiAgICAgICAgdmFyIHMgPSBNYXRoLmZsb29yKChkICUgKDEwMDAgKiA2MCkpIC8gMTAwMCk7XHJcbiAgICAgICAgdmFyIG91dHB1dCA9IGRhLnRvU3RyaW5nKCkgKyBcIiBEYXlzIFwiICsgaC50b1N0cmluZygpICsgXCIgaG91cnMgXCIgKyBtLnRvU3RyaW5nKCkgKyBcIiBtaW51dGVzIFwiICsgcy50b1N0cmluZygpICsgXCIgc2Vjb25kc1wiO1xyXG4gICAgICAgIC8vIGlmIChcIi1cIiBpbiBvdXRwdXQpIHtcclxuICAgICAgICAvLyAgICAgb3V0cHV0ID0gXCJFeHBpcmVkIVwiXHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIHJldHVybiAob3V0cHV0KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93IERvbmF0aW9uQmFyJz5cclxuICAgICAgICAgICAgICAgIDxOYXZMaW5rIHRvPSc/cT1BbGwnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT0nRG9uYXRpb25CYXJMaW5rIGFjdGl2ZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFsbFxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgICAgICAgICAgIDxOYXZMaW5rIHRvPSc/cT1Ub2RheSc+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPSdEb25hdGlvbkJhckxpbmsnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBUb2RheVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgICAgICAgICAgIDxOYXZMaW5rIHRvPSc/cT1UaGlzIE1vbnRoJz5cclxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9J0RvbmF0aW9uQmFyTGluayc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFRoaXMgTW9udGhcclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGlkPSdMb2FkaW5nJyBjbGFzc05hbWU9XCJMb2FkaW5nQXJlYVwiPlxyXG4gICAgICAgICAgICAgICAgPGgxPkxvYWRpbmcuLi48L2gxPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgICAgICAgICB7bGlzdC5tYXAoKGxpc3RJdGVtKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17bGlzdEl0ZW0uZXZlbnRJZH0gY2xhc3NOYW1lPSdyb3cnIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnMzk3cHgnLFxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogJzI4cHgnLFxyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAnd2hpdGUnLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnYmxhY2snLFxyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAnMTRweCA3cHgnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6ICdmbGV4LXN0YXJ0JyxcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbkNvbnRlbnQ6ICdmbGV4LXN0YXJ0J1xyXG4gICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6ICcxOHB4J1xyXG4gICAgICAgICAgICAgICAgICAgIH19PjxoNCBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzIuMHZ3JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXQ6ICdsZWZ0J1xyXG4gICAgICAgICAgICAgICAgICAgIH19IG5hbWU9XCJEYXRlQ291bnRcIiBkYXRlPXtsaXN0SXRlbS5EYXRlfT57TGVmdERhdGUobGlzdEl0ZW0uRGF0ZSl9PC9oND48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogJzM4cHggMThweCdcclxuICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogXCIzMyVcIiwgaGVpZ2h0OiAnMjM4cHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2xpc3RJdGVtLmxvZ299IHN0eWxlPXt7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heEhlaWdodDogJzI1OXB4J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6ICc1MHB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd0dhcDogJzEwcHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ25Db250ZW50OiAnc3RyZXRjaCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgc3R5bGU9e3sgZm9udFNpemU6ICcxLjd2dycgfX0+e2xpc3RJdGVtLlRpdGxlfTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBcIndoaXRlU3BhY2VcIjogXCJwcmUtd3JhcFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBzdHlsZT17eyBmb250U2l6ZTogJzEuN3Z3JyB9fT5Hb2FsOiAgPC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgc3R5bGU9e3sgZm9udFNpemU6ICcxLjd2dycgfX0+JHtsaXN0SXRlbS5Hb2FsdXNkfSAoe2xpc3RJdGVtLkdvYWx9IE5FQVIpPC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXQ6ICdyaWdodCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogJ2ZsZXgtc3RhcnQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6ICcwcHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdmbGV4LWVuZCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgXCJkaXNwbGF5XCI6IFwiZmxleFwiLCBnYXA6IFwiMTRweFwiIH19PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAnIzBCRDZCRScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICc3MnB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMjQ0cHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXQ6ICdyaWdodCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAnMHB4J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSBldmVudGlkPXtsaXN0SXRlbS5ldmVudElkfSBkYXRlPXtsaXN0SXRlbS5EYXRlfSBldmVudHRpdGxlPXtsaXN0SXRlbS5UaXRsZX0gY2xhc3NOYW1lPVwiY2FyZFwiIHdhbGxldHR5cGU9e2xpc3RJdGVtLndhbGxldHR5cGV9IG9uQ2xpY2s9e2FjdGl2YXRlQ3JlYXRlTkZUTW9kYWx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBldmVudGlkPXtsaXN0SXRlbS5ldmVudElkfSBkYXRlPXtsaXN0SXRlbS5EYXRlfSBldmVudHRpdGxlPXtsaXN0SXRlbS5UaXRsZX0gY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCIgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nVG9wOiAnMzRweCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19IHdhbGxldHR5cGU9e2xpc3RJdGVtLndhbGxldHR5cGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERvbmF0ZSBORlRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAnIzBCRDZCRScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzI3M3B4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0OiAncmlnaHQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogJzAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSBldmVudGlkPXtsaXN0SXRlbS5ldmVudElkfSBvbkNsaWNrPXthY3RpdmF0ZUNyZWF0ZUNyeXB0b3B1bmtNb2RhbH0gZGF0ZT17bGlzdEl0ZW0uRGF0ZX0gZXZlbnR0aXRsZT17bGlzdEl0ZW0uVGl0bGV9IGNsYXNzTmFtZT1cImNhcmRcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGV2ZW50aWQ9e2xpc3RJdGVtLmV2ZW50SWR9IGRhdGU9e2xpc3RJdGVtLkRhdGV9IGV2ZW50dGl0bGU9e2xpc3RJdGVtLlRpdGxlfSBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIiBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdUb3A6ICczNHB4J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRG9uYXRlIENyeXB0b3B1bmtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJyMwQkQ2QkUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICcyNDRweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbG9hdDogJ3JpZ2h0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6ICcwJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gY2xhc3NOYW1lPVwiY2FyZFwiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZMaW5rIHRvPXtgL2RvbmF0aW9uL2F1Y3Rpb24/JHtsaXN0SXRlbS5ldmVudElkfWB9PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nVG9wOiAnMzRweCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR28gdG8gYXVjdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPERvbmF0ZU5GVE1vZGFsXHJcbiAgICAgICAgICAgICAgICBzaG93PXtDcmVhdGVtb2RhbFNob3d9XHJcbiAgICAgICAgICAgICAgICBvbkhpZGU9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRNb2RhbFNob3coZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFRoaXMgaXMgYSBwb29yIGltcGxlbWVudGF0aW9uLCBiZXR0ZXIgdG8gaW1wbGVtZW50IGFuIGV2ZW50IGxpc3RlbmVyXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgRXZlbnRJRD17c2VsZWN0aWR9XHJcbiAgICAgICAgICAgICAgICB0eXBlPXtzZWxlY3RlZHR5cGV9XHJcbiAgICAgICAgICAgICAgICBTZWxlY3RlZFRpdGxlPXtTZWxlY3RlZFRpdGxlfVxyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRXYWxsZXQ9e3NlbGVjdGVkV2FsbGV0fVxyXG4gICAgICAgICAgICAgICAgZW5kZGF0ZT17U2VsZWN0ZWRlbmREYXRlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSBmdW5jdGlvbigpIHsgcmV0dXJuIFwiYmEwMmYxZTFkZWY5MzgyYWViNzhcIjsgfSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiTmF2TGluayIsIkRvbmF0ZU5GVE1vZGFsIiwiRG9uYXRpb24iLCJDcmVhdGVtb2RhbFNob3ciLCJzZXRNb2RhbFNob3ciLCJsaXN0Iiwic2V0TGlzdCIsInNlbGVjdGlkIiwic2V0c2VsZWN0aWQiLCJzZWxlY3RlZHR5cGUiLCJzZXRzZWxlY3RlZHR5cGUiLCJTZWxlY3RlZFRpdGxlIiwic2V0U2VsZWN0ZWRUaXRsZSIsIlNlbGVjdGVkZW5kRGF0ZSIsInNldFNlbGVjdGVkZW5kRGF0ZSIsInNlbGVjdGVkV2FsbGV0Iiwic2V0U2VsZWN0ZWRXYWxsZXQiLCJmZXRjaENvbnRyYWN0RGF0YSIsImNhbGN1bGF0ZVRpbWVMZWZ0IiwiYWxsRGF0ZXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlOYW1lIiwiaSIsImxlbmd0aCIsImRhdGUiLCJnZXRBdHRyaWJ1dGUiLCJpbm5lckhUTUwiLCJMZWZ0RGF0ZSIsImVycm9yIiwic2V0SW50ZXJ2YWwiLCJmb3JtYXR0ZXIiLCJJbnRsIiwiTnVtYmVyRm9ybWF0IiwibWluaW11bUZyYWN0aW9uRGlnaXRzIiwibWF4aW11bUZyYWN0aW9uRGlnaXRzIiwibmVhclByaWNlIiwibmVhckN1cnJlbmN5VXJsIiwib3B0aW9ucyIsIm1ldGhvZCIsImhlYWRlcnMiLCJBY2NlcHQiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiY2F0Y2giLCJlcnIiLCJjb25zb2xlIiwiZGF0YSIsIm1hcmtldFBhaXJzIiwicHJpY2UiLCJBaXJ0YWJsZSIsInJlcXVpcmUiLCJiYXNlIiwiYXBpS2V5Iiwic2VsZWN0IiwibWF4UmVjb3JkcyIsInZpZXciLCJlYWNoUGFnZSIsInBhZ2UiLCJyZWNvcmRzIiwiZmV0Y2hOZXh0UGFnZSIsImFyciIsImZvckVhY2giLCJyZWNvcmQiLCJnb2FsUHJpY2UydXNkIiwiTnVtYmVyIiwiZ2V0IiwicHVzaCIsImV2ZW50SWQiLCJUaXRsZSIsIkRhdGUiLCJHb2FsdXNkIiwiZm9ybWF0IiwiR29hbCIsImxvZ28iLCJ3YWxsZXR0eXBlIiwiZG9uZSIsImdldEVsZW1lbnRCeUlkIiwic3R5bGUiLCJhY3RpdmF0ZUNyZWF0ZU5GVE1vZGFsIiwiZSIsInRhcmdldCIsImFjdGl2YXRlQ3JlYXRlQ3J5cHRvcHVua01vZGFsIiwiZGF0ZXRleHQiLCJjIiwiZ2V0VGltZSIsIm4iLCJkIiwiZGEiLCJNYXRoIiwiZmxvb3IiLCJoIiwibSIsInMiLCJvdXRwdXQiLCJ0b1N0cmluZyIsImxpc3RJdGVtIiwiaGVpZ2h0IiwibWFyZ2luIiwiZGlzcGxheSIsImJhY2tncm91bmQiLCJjb2xvciIsIm92ZXJmbG93IiwicGFkZGluZyIsImFsaWduSXRlbXMiLCJhbGlnbkNvbnRlbnQiLCJ3aWR0aCIsImZvbnRTaXplIiwiZmxvYXQiLCJtYXhIZWlnaHQiLCJtYXJnaW5MZWZ0IiwiZmxleERpcmVjdGlvbiIsInJvd0dhcCIsImp1c3RpZnlDb250ZW50IiwiZ2FwIiwidGV4dEFsaWduIiwiY3Vyc29yIiwicGFkZGluZ1RvcCJdLCJzb3VyY2VSb290IjoiIn0=