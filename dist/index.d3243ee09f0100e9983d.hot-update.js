"use strict";
self["webpackHotUpdatedemetergift"]("/index",{

/***/ "./src/pages/donation/auction/index.jsx":
/*!**********************************************!*\
  !*** ./src/pages/donation/auction/index.jsx ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Auction; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/asyncToGenerator */ "./node_modules/@babel/runtime-corejs3/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/slicedToArray */ "./node_modules/@babel/runtime-corejs3/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/regenerator */ "./node_modules/@babel/runtime-corejs3/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/find */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/find.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _Events_event__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Events/event */ "./src/pages/Events/event.jsx");
/* harmony import */ var _Events_token__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Events/token */ "./src/pages/Events/token.jsx");
/* harmony import */ var _components_components_modals_BidNFTModal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/components/modals/BidNFTModal */ "./src/components/components/modals/BidNFTModal.jsx");
/* harmony import */ var _components_components_modals_ViewBidNFTModal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/components/modals/ViewBidNFTModal */ "./src/components/components/modals/ViewBidNFTModal.jsx");
/* harmony import */ var _components_components_modals_DonateNFTModal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../components/components/modals/DonateNFTModal */ "./src/components/components/modals/DonateNFTModal.jsx");












function Auction() {
  var regex = /\[(.*)\]/g;
  var str = window.location.search;
  var m;
  var id = "";

  while ((m = regex.exec(str)) !== null) {
    // This is necessary to avoid infinite loops with zero-width matches
    if (m.index === regex.lastIndex) {
      regex.lastIndex++;
    }

    id = m[1];
  }

  console.log("id => ", id);

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false),
      _useState2 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      CreatemodalShow = _useState2[0],
      setDonateModalShow = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(id),
      _useState4 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState3, 2),
      eventId = _useState4[0],
      setEventId = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]),
      _useState6 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState5, 2),
      list = _useState6[0],
      setList = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(''),
      _useState8 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState7, 2),
      title = _useState8[0],
      setTitle = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(''),
      _useState10 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState9, 2),
      goalusd = _useState10[0],
      setgoalusd = _useState10[1];

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(''),
      _useState12 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState11, 2),
      goal = _useState12[0],
      setgoal = _useState12[1];

  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(''),
      _useState14 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState13, 2),
      dateleft = _useState14[0],
      setdateleft = _useState14[1];

  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(''),
      _useState16 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState15, 2),
      date = _useState16[0],
      setdate = _useState16[1];

  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(''),
      _useState18 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState17, 2),
      dateleftBid = _useState18[0],
      setdateleftBid = _useState18[1];

  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(''),
      _useState20 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState19, 2),
      logo = _useState20[0],
      setlogo = _useState20[1];

  var _useState21 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(''),
      _useState22 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState21, 2),
      selectid = _useState22[0],
      setselectid = _useState22[1];

  var _useState23 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(''),
      _useState24 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState23, 2),
      selecttitle = _useState24[0],
      setselecttitle = _useState24[1];

  var _useState25 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(''),
      _useState26 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState25, 2),
      selecttype = _useState26[0],
      setselecttype = _useState26[1];

  var _useState27 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(''),
      _useState28 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState27, 2),
      selectwallet = _useState28[0],
      setselectwallet = _useState28[1];

  var _useState29 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(''),
      _useState30 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState29, 2),
      walletType = _useState30[0],
      setWalletType = _useState30[1];

  var _useState31 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(''),
      _useState32 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState31, 2),
      selectbid = _useState32[0],
      setselectbid = _useState32[1];

  var boolTrue = true;

  var _useState33 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false),
      _useState34 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState33, 2),
      modalShow = _useState34[0],
      setModalShow = _useState34[1];

  var _useState35 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false),
      _useState36 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState35, 2),
      ViewmodalShow = _useState36[0],
      setViewModalShow = _useState36[1];

  var formatter = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });

  function LeftDate(datetext) {
    var c = new Date(datetext).getTime();
    var n = new Date().getTime();
    var d = c - n;
    var da = Math.floor(d / (1000 * 60 * 60 * 24));
    var h = Math.floor(d % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    var m = Math.floor(d % (1000 * 60 * 60) / (1000 * 60));
    var s = Math.floor(d % (1000 * 60) / 1000);
    return da.toString() + " Days " + h.toString() + " hours " + m.toString() + " minutes " + s.toString() + " seconds";
  }

  function LeftDateBid(datetext) {
    var c = new Date(datetext).getTime();
    var n = new Date().getTime();
    var d = c - n;
    var da = Math.floor(d / (1000 * 60 * 60 * 24));
    var h = Math.floor(d % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    var m = Math.floor(d % (1000 * 60 * 60) / (1000 * 60));
    var s = Math.floor(d % (1000 * 60) / 1000);
    return da.toString() + "d " + h.toString() + "h " + m.toString() + "m " + s.toString() + "s";
  }

  function AuctionfetchContractData() {
    return _AuctionfetchContractData.apply(this, arguments);
  }

  function _AuctionfetchContractData() {
    _AuctionfetchContractData = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
      var _context, nearPrice, nearCurrencyUrl, currency_options, Airtable, base;

      return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (!(id && window.location.pathname == "/donation/auction")) {
                _context2.next = 19;
                break;
              }

              console.log("started chekcing");
              nearPrice = 0; //NEAR currency

              _context2.prev = 3;
              nearCurrencyUrl = "https://api.coinmarketcap.com/data-api/v3/cryptocurrency/market-pairs/latest?slug=near-protocol&start=1&limit=1&category=spot&sort=cmc_rank_advanced";
              currency_options = {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                  Accept: 'application/json, text/plain, */*'
                }
              };
              _context2.next = 8;
              return fetch(nearCurrencyUrl, currency_options).then(function (res) {
                return res.json();
              }).then(function (json) {
                return nearPrice = json;
              }).catch(function (err) {
                return console.error('error:' + err);
              });

            case 8:
              nearPrice = nearPrice.data.marketPairs[0].price;
              _context2.next = 15;
              break;

            case 11:
              _context2.prev = 11;
              _context2.t0 = _context2["catch"](3);
              console.log(_context2.t0);
              nearPrice = 0;

            case 15:
              Airtable = __webpack_require__(/*! airtable */ "./node_modules/airtable/lib/airtable.js");
              base = new Airtable({
                apiKey: 'keyR1Rrcl9O2s9bTs'
              }).base('appgbRCpbkzmdcucO');
              _context2.next = 19;
              return _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_4___default()(_context = base('events')).call(_context, id, function (err, record) {
                if (err) {
                  console.error(err);
                  return;
                }

                console.log('Retrieved', record.id);
              });

            case 19:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee, null, [[3, 11]]);
    }));
    return _AuctionfetchContractData.apply(this, arguments);
  }

  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function () {
    AuctionfetchContractData();
  }, []);
  setInterval(function () {
    calculateTimeLeft();
  }, 1000);

  function calculateTimeLeft() {
    try {
      var allDates = document.getElementsByName("dateleft");

      for (var i = 0; i < allDates.length; i++) {
        var date = allDates[i].getAttribute("date");
        allDates[i].innerHTML = LeftDate(date);
      }

      var allDates = document.getElementsByName("date");

      for (var _i = 0; _i < allDates.length; _i++) {
        var date = allDates[_i].getAttribute("date");

        allDates[_i].innerHTML = LeftDateBid(date);
      }
    } catch (error) {}
  }

  function activateViewBidModal(e) {
    setselectid(e.target.getAttribute("tokenid"));
    setselecttitle(e.target.getAttribute("title"));
    setViewModalShow(true);
  }

  function activateBidNFTModal(e) {
    setselectid(e.target.getAttribute("tokenid"));
    setselectbid(e.target.getAttribute("highestbid"));
    console.log(selectbid);
    setselecttype("NFT");
    setModalShow(true);
  }

  function activateBidCryptopunkTModal(e) {
    setselectid(e.target.getAttribute("tokenid"));
    setselecttype("Cryptopunk");
    setselectbid(e.target.getAttribute("highestbid"));
    console.log(selectbid);
    setModalShow(true);
  }

  function activateCreateNFTModal(e) {
    setselecttype("NFT");
    setDonateModalShow(true);
  }

  function activateCreateCryptopunkModal(e) {
    setselecttype("Cryptopunk");
    setDonateModalShow(true);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(react__WEBPACK_IMPORTED_MODULE_5__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
    className: "row EventContainer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
    style: {
      display: 'flex',
      width: '100%',
      position: 'relative'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("img", {
    src: logo,
    className: "AuctionImage"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
    className: "DetialsContainer",
    style: {
      rowGap: '16px',
      paddingTop: '70px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("h4", {
    style: {
      fontSize: '2vw'
    }
  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
    className: "TextContainer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("h4", {
    style: {
      fontSize: '2vw'
    }
  }, "Goal: "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("h4", {
    style: {
      fontSize: '2vw'
    }
  }, "$ ", goalusd, " (", goal, " ", walletType, ")")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
    className: "TextContainer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("h4", {
    style: {
      fontSize: '2vw'
    },
    name: "dateleft",
    date: date
  }, dateleft))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
    style: {
      display: 'flex',
      gap: '14px',
      position: 'absolute',
      right: '25px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
    onClick: activateCreateNFTModal,
    className: "card",
    style: {
      color: 'white',
      overflow: 'hidden',
      background: '#0BD6BE',
      textAlign: 'center',
      width: '172px',
      cursor: 'pointer',
      height: '48px',
      margin: '0',
      padding: '0px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
    onClick: activateCreateNFTModal,
    className: "card-body",
    style: {
      height: '100%',
      paddingTop: '21px',
      fontSize: '21px'
    }
  }, "Donate NFT")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
    className: "card",
    onClick: activateCreateCryptopunkModal,
    style: {
      color: 'white',
      overflow: 'hidden',
      background: '#0BD6BE',
      textAlign: 'center',
      cursor: 'pointer',
      float: 'right',
      width: '202px',
      height: '48px',
      padding: '0px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
    onClick: activateCreateCryptopunkModal,
    className: "card-body",
    style: {
      height: '100%',
      paddingTop: '21px',
      fontSize: '21px'
    }
  }, "Donate Cryptopunk"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
    id: "Loading",
    className: "LoadingArea"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("h1", null, "Loading...")), _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_3___default()(list).call(list, function (listItem) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
      key: listItem.Id,
      className: "row ElementsContainer bgWhite"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
      style: {
        width: '100%',
        display: 'flex'
      }
    }, listItem.type == "Cryptopunk" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("img", {
      src: listItem.image,
      className: "AuctionBidImage pixel"
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("img", {
      src: listItem.image,
      className: "AuctionBidImage"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
      style: {
        width: "100%"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
      className: "DetialsContainer",
      style: {
        rowGap: "5px"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("h2", {
      style: {
        fontSize: '2vw'
      }
    }, listItem.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("h4", {
      style: {
        color: "rgb(139, 139, 139)",
        fontSize: '1.7vw'
      }
    }, "Type: ", listItem.type), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
      className: "TextContainer"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("h4", {
      style: {
        color: "#8B8B8B",
        fontSize: '1.7vw'
      }
    }, listItem.description))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
      className: "ElementBottomContainer"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
      style: {
        maxWidth: "216px"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("h3", {
      style: {
        fontSize: '1vw'
      },
      className: "smallgrey"
    }, "Current bid"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("h4", {
      style: {
        fontSize: '1.7vw'
      },
      className: "bidprice"
    }, "$ ", listItem.Bidprice.toFixed(2), " (", listItem.price, " ", walletType, ")"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("h7", {
      style: {
        fontSize: '1vw'
      },
      name: "date",
      date: date,
      className: "smallgrey"
    }, dateleftBid)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
      className: "BidAllcontainer"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
      className: "Bidsbutton"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
      tokenid: listItem.Id,
      title: listItem.name,
      onClick: activateViewBidModal,
      className: "Bidcontainer col"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
      tokenid: listItem.Id,
      title: listItem.name,
      className: "card BidcontainerCard"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
      tokenid: listItem.Id,
      title: listItem.name,
      className: "card-body bidbuttonText"
    }, "View"))), listItem.type == "Cryptopunk" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
      tokenid: listItem.Id,
      wallet: listItem.wallet,
      highestbid: listItem.price,
      className: "Bidcontainer col",
      onClick: activateBidCryptopunkTModal
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
      tokenid: listItem.Id,
      wallet: listItem.wallet,
      highestbid: listItem.price,
      className: "card BidcontainerCard"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
      tokenid: listItem.Id,
      wallet: listItem.wallet,
      highestbid: listItem.price,
      className: "card-body bidbuttonText"
    }, "Bid"))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
      tokenid: listItem.Id,
      wallet: listItem.wallet,
      highestbid: listItem.price,
      goalScore: goal,
      className: "Bidcontainer col",
      onClick: activateBidNFTModal
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
      tokenid: listItem.Id,
      wallet: listItem.wallet,
      highestbid: listItem.price,
      className: "card BidcontainerCard"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
      tokenid: listItem.Id,
      wallet: listItem.wallet,
      highestbid: listItem.price,
      className: "card-body bidbuttonText"
    }, "Bid")))))))));
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(_components_components_modals_BidNFTModal__WEBPACK_IMPORTED_MODULE_8__["default"], {
    show: modalShow,
    onHide: function onHide() {
      setModalShow(false); // This is a poor implementation, better to implement an event listener

      AuctionfetchContractData();
    },
    tokenId: selectid,
    type: selecttype,
    ToAddress: selectwallet,
    eventId: eventId,
    Highestbid: selectbid,
    walletType: walletType,
    goal: goal
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(_components_components_modals_ViewBidNFTModal__WEBPACK_IMPORTED_MODULE_9__["default"], {
    show: ViewmodalShow,
    onHide: function onHide() {
      setViewModalShow(false); // This is a poor implementation, better to implement an event listener

      AuctionfetchContractData();
    },
    id: selectid,
    walletType: walletType,
    title: selecttitle
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(_components_components_modals_DonateNFTModal__WEBPACK_IMPORTED_MODULE_10__["default"], {
    show: CreatemodalShow,
    onHide: function onHide() {
      setDonateModalShow(false); // This is a poor implementation, better to implement an event listener
    },
    EventID: eventId,
    type: selecttype,
    SelectedTitle: title,
    enddate: date
  }));
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "4bba7aac6b6e20b34208"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2luZGV4LmQzMjQzZWUwOWYwMTAwZTk5ODNkLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFFQTtBQUVlLFNBQVNTLE9BQVQsR0FBbUI7QUFDOUIsTUFBTUMsS0FBSyxHQUFHLFdBQWQ7QUFDQSxNQUFNQyxHQUFHLEdBQUdDLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsTUFBNUI7QUFDQSxNQUFJQyxDQUFKO0FBQ0EsTUFBSUMsRUFBRSxHQUFJLEVBQVY7O0FBQ0EsU0FBTyxDQUFDRCxDQUFDLEdBQUdMLEtBQUssQ0FBQ08sSUFBTixDQUFXTixHQUFYLENBQUwsTUFBMEIsSUFBakMsRUFBdUM7QUFDbkM7QUFDQSxRQUFJSSxDQUFDLENBQUNHLEtBQUYsS0FBWVIsS0FBSyxDQUFDUyxTQUF0QixFQUFpQztBQUM3QlQsTUFBQUEsS0FBSyxDQUFDUyxTQUFOO0FBQ0g7O0FBQ0RILElBQUFBLEVBQUUsR0FBR0QsQ0FBQyxDQUFDLENBQUQsQ0FBTjtBQUNIOztBQUdESyxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxRQUFaLEVBQXNCTCxFQUF0Qjs7QUFDQSxrQkFBOENmLCtDQUFRLENBQUMsS0FBRCxDQUF0RDtBQUFBO0FBQUEsTUFBT3FCLGVBQVA7QUFBQSxNQUF3QkMsa0JBQXhCOztBQUVBLG1CQUE4QnRCLCtDQUFRLENBQUNlLEVBQUQsQ0FBdEM7QUFBQTtBQUFBLE1BQU9RLE9BQVA7QUFBQSxNQUFnQkMsVUFBaEI7O0FBQ0EsbUJBQXdCeEIsK0NBQVEsQ0FBQyxFQUFELENBQWhDO0FBQUE7QUFBQSxNQUFPeUIsSUFBUDtBQUFBLE1BQWFDLE9BQWI7O0FBRUEsbUJBQTBCMUIsK0NBQVEsQ0FBQyxFQUFELENBQWxDO0FBQUE7QUFBQSxNQUFPMkIsS0FBUDtBQUFBLE1BQWNDLFFBQWQ7O0FBQ0EsbUJBQThCNUIsK0NBQVEsQ0FBQyxFQUFELENBQXRD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QUFFNEIsU0FYaEI7QUFZSSxjQUFVLEVBQUVGLFVBWmhCO0FBYUksUUFBSSxFQUFFbEI7QUFiVixJQXJHSixlQXFISSxpREFBQyxxRkFBRDtBQUNJLFFBQUksRUFBRXlCLGFBRFY7QUFFSSxVQUFNLEVBQUUsa0JBQU07QUFDVkMsTUFBQUEsZ0JBQWdCLENBQUMsS0FBRCxDQUFoQixDQURVLENBRVY7O0FBQ0FvQixNQUFBQSx3QkFBd0I7QUFDM0IsS0FOTDtBQU9JLE1BQUUsRUFBRXBDLFFBUFI7QUFRSSxjQUFVLEVBQUVRLFVBUmhCO0FBU0ksU0FBSyxFQUFFTjtBQVRYLElBckhKLGVBaUlJLGlEQUFDLHFGQUFEO0FBQ0ksUUFBSSxFQUFFdEIsZUFEVjtBQUVJLFVBQU0sRUFBRSxrQkFBTTtBQUNWQyxNQUFBQSxrQkFBa0IsQ0FBQyxLQUFELENBQWxCLENBRFUsQ0FFVjtBQUNILEtBTEw7QUFNSSxXQUFPLEVBQUVDLE9BTmI7QUFPSSxRQUFJLEVBQUVzQixVQVBWO0FBUUksaUJBQWEsRUFBRWxCLEtBUm5CO0FBU0ksV0FBTyxFQUFFUTtBQVRiLElBaklKLENBREo7QUFpSkg7Ozs7Ozs7O1VDblhELHFDQUFxQyIsInNvdXJjZXMiOlsid2VicGFjazovL2RlbWV0ZXJnaWZ0Ly4vc3JjL3BhZ2VzL2RvbmF0aW9uL2F1Y3Rpb24vaW5kZXguanN4Iiwid2VicGFjazovL2RlbWV0ZXJnaWZ0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCB7IHVzZVBhcmFtcyB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXHJcbmltcG9ydCB7IGV2ZW50Z2V0YnlpZCB9IGZyb20gJy4uLy4uL0V2ZW50cy9ldmVudCdcclxuaW1wb3J0IHsgdG9rZW5nZXRieWV2ZW50aWQgfSBmcm9tICcuLi8uLi9FdmVudHMvdG9rZW4nXHJcblxyXG5cclxuaW1wb3J0IEJpZE5GVE1vZGFsIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvY29tcG9uZW50cy9tb2RhbHMvQmlkTkZUTW9kYWwnO1xyXG5pbXBvcnQgVmlld0JpZE5GVE1vZGFsIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvY29tcG9uZW50cy9tb2RhbHMvVmlld0JpZE5GVE1vZGFsJztcclxuXHJcbmltcG9ydCBEb25hdGVORlRNb2RhbCBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2NvbXBvbmVudHMvbW9kYWxzL0RvbmF0ZU5GVE1vZGFsJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEF1Y3Rpb24oKSB7XHJcbiAgICBjb25zdCByZWdleCA9IC9cXFsoLiopXFxdL2c7XHJcbiAgICBjb25zdCBzdHIgPSB3aW5kb3cubG9jYXRpb24uc2VhcmNoO1xyXG4gICAgbGV0IG07XHJcbiAgICBsZXQgaWQgPSAgXCJcIjtcclxuICAgIHdoaWxlICgobSA9IHJlZ2V4LmV4ZWMoc3RyKSkgIT09IG51bGwpIHtcclxuICAgICAgICAvLyBUaGlzIGlzIG5lY2Vzc2FyeSB0byBhdm9pZCBpbmZpbml0ZSBsb29wcyB3aXRoIHplcm8td2lkdGggbWF0Y2hlc1xyXG4gICAgICAgIGlmIChtLmluZGV4ID09PSByZWdleC5sYXN0SW5kZXgpIHtcclxuICAgICAgICAgICAgcmVnZXgubGFzdEluZGV4Kys7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlkID0gbVsxXTtcclxuICAgIH1cclxuXHJcbiAgICBcclxuICAgIGNvbnNvbGUubG9nKFwiaWQgPT4gXCIsIGlkKTtcclxuICAgIGNvbnN0IFtDcmVhdGVtb2RhbFNob3csIHNldERvbmF0ZU1vZGFsU2hvd10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgY29uc3QgW2V2ZW50SWQsIHNldEV2ZW50SWRdID0gdXNlU3RhdGUoaWQpO1xyXG4gICAgY29uc3QgW2xpc3QsIHNldExpc3RdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICAgIGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW2dvYWx1c2QsIHNldGdvYWx1c2RdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW2dvYWwsIHNldGdvYWxdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW2RhdGVsZWZ0LCBzZXRkYXRlbGVmdF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbZGF0ZSwgc2V0ZGF0ZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbZGF0ZWxlZnRCaWQsIHNldGRhdGVsZWZ0QmlkXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtsb2dvLCBzZXRsb2dvXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtzZWxlY3RpZCwgc2V0c2VsZWN0aWRdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3NlbGVjdHRpdGxlLCBzZXRzZWxlY3R0aXRsZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbc2VsZWN0dHlwZSwgc2V0c2VsZWN0dHlwZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbc2VsZWN0d2FsbGV0LCBzZXRzZWxlY3R3YWxsZXRdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3dhbGxldFR5cGUsIHNldFdhbGxldFR5cGVdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3NlbGVjdGJpZCwgc2V0c2VsZWN0YmlkXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IGJvb2xUcnVlID0gdHJ1ZTtcclxuICAgIGNvbnN0IFttb2RhbFNob3csIHNldE1vZGFsU2hvd10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbVmlld21vZGFsU2hvdywgc2V0Vmlld01vZGFsU2hvd10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG5cclxuXHJcbiAgICBjb25zdCBmb3JtYXR0ZXIgPSBuZXcgSW50bC5OdW1iZXJGb3JtYXQoJ2VuLVVTJywge1xyXG4gICAgICAgIG1pbmltdW1GcmFjdGlvbkRpZ2l0czogMixcclxuICAgICAgICBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDIsXHJcbiAgICB9KTtcclxuXHJcbiAgICBmdW5jdGlvbiBMZWZ0RGF0ZShkYXRldGV4dCkge1xyXG4gICAgICAgIHZhciBjID0gbmV3IERhdGUoZGF0ZXRleHQpLmdldFRpbWUoKTtcclxuICAgICAgICB2YXIgbiA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgICAgIHZhciBkID0gYyAtIG47XHJcbiAgICAgICAgdmFyIGRhID0gTWF0aC5mbG9vcihkIC8gKDEwMDAgKiA2MCAqIDYwICogMjQpKTtcclxuICAgICAgICB2YXIgaCA9IE1hdGguZmxvb3IoKGQgJSAoMTAwMCAqIDYwICogNjAgKiAyNCkpIC8gKDEwMDAgKiA2MCAqIDYwKSk7XHJcbiAgICAgICAgdmFyIG0gPSBNYXRoLmZsb29yKChkICUgKDEwMDAgKiA2MCAqIDYwKSkgLyAoMTAwMCAqIDYwKSk7XHJcbiAgICAgICAgdmFyIHMgPSBNYXRoLmZsb29yKChkICUgKDEwMDAgKiA2MCkpIC8gMTAwMCk7XHJcbiAgICAgICAgcmV0dXJuIChkYS50b1N0cmluZygpICsgXCIgRGF5cyBcIiArIGgudG9TdHJpbmcoKSArIFwiIGhvdXJzIFwiICsgbS50b1N0cmluZygpICsgXCIgbWludXRlcyBcIiArIHMudG9TdHJpbmcoKSArIFwiIHNlY29uZHNcIik7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBMZWZ0RGF0ZUJpZChkYXRldGV4dCkge1xyXG4gICAgICAgIHZhciBjID0gbmV3IERhdGUoZGF0ZXRleHQpLmdldFRpbWUoKTtcclxuICAgICAgICB2YXIgbiA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgICAgIHZhciBkID0gYyAtIG47XHJcbiAgICAgICAgdmFyIGRhID0gTWF0aC5mbG9vcihkIC8gKDEwMDAgKiA2MCAqIDYwICogMjQpKTtcclxuICAgICAgICB2YXIgaCA9IE1hdGguZmxvb3IoKGQgJSAoMTAwMCAqIDYwICogNjAgKiAyNCkpIC8gKDEwMDAgKiA2MCAqIDYwKSk7XHJcbiAgICAgICAgdmFyIG0gPSBNYXRoLmZsb29yKChkICUgKDEwMDAgKiA2MCAqIDYwKSkgLyAoMTAwMCAqIDYwKSk7XHJcbiAgICAgICAgdmFyIHMgPSBNYXRoLmZsb29yKChkICUgKDEwMDAgKiA2MCkpIC8gMTAwMCk7XHJcbiAgICAgICAgcmV0dXJuIChkYS50b1N0cmluZygpICsgXCJkIFwiICsgaC50b1N0cmluZygpICsgXCJoIFwiICsgbS50b1N0cmluZygpICsgXCJtIFwiICsgcy50b1N0cmluZygpICsgXCJzXCIpO1xyXG4gICAgfVxyXG4gICAgYXN5bmMgZnVuY3Rpb24gQXVjdGlvbmZldGNoQ29udHJhY3REYXRhKCkge1xyXG4gICAgICAgIGlmIChpZCAmJiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgPT0gXCIvZG9uYXRpb24vYXVjdGlvblwiKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic3RhcnRlZCBjaGVrY2luZ1wiKTtcclxuICAgICAgICAgICAgICAgIGxldCBuZWFyUHJpY2UgPSAwO1xyXG4gICAgICAgICAgICAvL05FQVIgY3VycmVuY3lcclxuICAgICAgICAgICAgdHJ5IHtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgbmVhckN1cnJlbmN5VXJsID0gXCJodHRwczovL2FwaS5jb2lubWFya2V0Y2FwLmNvbS9kYXRhLWFwaS92My9jcnlwdG9jdXJyZW5jeS9tYXJrZXQtcGFpcnMvbGF0ZXN0P3NsdWc9bmVhci1wcm90b2NvbCZzdGFydD0xJmxpbWl0PTEmY2F0ZWdvcnk9c3BvdCZzb3J0PWNtY19yYW5rX2FkdmFuY2VkXCI7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW5jeV9vcHRpb25zID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uLCB0ZXh0L3BsYWluLCAqLyonXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBhd2FpdCBmZXRjaChuZWFyQ3VycmVuY3lVcmwsIGN1cnJlbmN5X29wdGlvbnMpLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oanNvbiA9PiBuZWFyUHJpY2UgPSBqc29uKVxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcignZXJyb3I6JyArIGVycikpO1xyXG4gICAgICAgICAgICAgICAgbmVhclByaWNlID0gbmVhclByaWNlLmRhdGEubWFya2V0UGFpcnNbMF0ucHJpY2U7XHJcblxyXG4gICAgICAgICAgICB9IGNhdGNoIChleCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXgpO1xyXG5cclxuICAgICAgICAgICAgICAgIG5lYXJQcmljZSA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIEFpcnRhYmxlID0gcmVxdWlyZSgnYWlydGFibGUnKTtcclxuICAgICAgICAgICAgdmFyIGJhc2UgPSBuZXcgQWlydGFibGUoe2FwaUtleTogJ2tleVIxUnJjbDlPMnM5YlRzJ30pLmJhc2UoJ2FwcGdiUkNwYmt6bWRjdWNPJyk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgIGF3YWl0IGJhc2UoJ2V2ZW50cycpLmZpbmQoaWQsIGZ1bmN0aW9uKGVyciwgcmVjb3JkKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7IGNvbnNvbGUuZXJyb3IoZXJyKTsgcmV0dXJuOyB9XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnUmV0cmlldmVkJywgcmVjb3JkLmlkKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyB3aGlsZSAoYm9vbFRydWUpIHtcclxuICAgICAgICAgICAgLy8gICAgIHRyeSB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgc2V0RXZlbnRJZChpZCk7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgY29uc3QgdmFsdWUgPSBhd2FpdCBldmVudGdldGJ5aWQoaWQpO1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIGNvbnN0IGFyciA9IFtdO1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKHZhbHVlKTtcclxuXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgY29uc3QgdG90YWxUb2tlbnMgPSBhd2FpdCB0b2tlbmdldGJ5ZXZlbnRpZChpZCk7XHJcblxyXG4gICAgICAgICAgICAvLyAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG90YWxUb2tlbnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgY29uc3Qgb2JqZWN0ID0gYXdhaXQgdG90YWxUb2tlbnNbaV07XHJcblxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICBpZiAob2JqZWN0Lm5hbWUpIHtcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIHZhciBwcmljZWRlczEgPSAwO1xyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgbGV0IHByaWNlMlVzZCA9IDBcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIHRyeSB7XHJcblxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIHByaWNlMlVzZCA9IE51bWJlcihvYmplY3QucHJpY2UgKiBuZWFyUHJpY2UpO1xyXG5cclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGV4KSB7IH1cclxuXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICBhcnIucHVzaCh7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgSWQ6IG9iamVjdC5pZCxcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBuYW1lOiBvYmplY3QubmFtZSxcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogb2JqZWN0LmRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIEJpZHByaWNlOiBwcmljZTJVc2QsXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgcHJpY2U6IE51bWJlcihvYmplY3QucHJpY2UpLFxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIHR5cGU6IG9iamVjdC50eXBlLFxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIGltYWdlOiBvYmplY3QuaW1hZ2UsXHJcblxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gICAgICAgICBzZXRMaXN0KGFycik7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiTG9hZGluZ1wiKSlcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJMb2FkaW5nXCIpLnN0eWxlID0gXCJkaXNwbGF5Om5vbmVcIjtcclxuXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgc2V0c2VsZWN0d2FsbGV0KHZhbHVlLndhbGxldCk7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgY29uc29sZS5sb2codmFsdWUud2FsbGV0KTtcclxuICAgICAgICAgICAgLy8gICAgICAgICBzZXRUaXRsZSh2YWx1ZS50aXRsZSk7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgc2V0V2FsbGV0VHlwZSh2YWx1ZS53YWxsZXR0eXBlKTtcclxuXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgc2V0Z29hbHVzZChmb3JtYXR0ZXIuZm9ybWF0KE51bWJlcih2YWx1ZS5Hb2FsICogbmVhclByaWNlKSkpO1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIHNldGdvYWwoTnVtYmVyKHZhbHVlLkdvYWwpKTtcclxuICAgICAgICAgICAgLy8gICAgICAgICBzZXRkYXRlbGVmdChMZWZ0RGF0ZSh2YWx1ZS5lbmREYXRlKSk7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgc2V0ZGF0ZSh2YWx1ZS5lbmREYXRlKTtcclxuICAgICAgICAgICAgLy8gICAgICAgICBzZXRkYXRlbGVmdEJpZChMZWZ0RGF0ZUJpZCh2YWx1ZS5lbmREYXRlKSk7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgc2V0bG9nbyh2YWx1ZS5sb2dvbGluayk7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIC8vICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBBdWN0aW9uZmV0Y2hDb250cmFjdERhdGEoKTtcclxuXHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNhbGN1bGF0ZVRpbWVMZWZ0KCk7XHJcbiAgICB9LCAxMDAwKTtcclxuXHJcblxyXG4gICAgZnVuY3Rpb24gY2FsY3VsYXRlVGltZUxlZnQoKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgdmFyIGFsbERhdGVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoXCJkYXRlbGVmdFwiKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxEYXRlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdmFyIGRhdGUgPSAoYWxsRGF0ZXNbaV0pLmdldEF0dHJpYnV0ZShcImRhdGVcIik7XHJcbiAgICAgICAgICAgICAgICBhbGxEYXRlc1tpXS5pbm5lckhUTUwgPSBMZWZ0RGF0ZShkYXRlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgYWxsRGF0ZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShcImRhdGVcIik7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsRGF0ZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHZhciBkYXRlID0gKGFsbERhdGVzW2ldKS5nZXRBdHRyaWJ1dGUoXCJkYXRlXCIpO1xyXG4gICAgICAgICAgICAgICAgYWxsRGF0ZXNbaV0uaW5uZXJIVE1MID0gTGVmdERhdGVCaWQoZGF0ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge31cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBhY3RpdmF0ZVZpZXdCaWRNb2RhbChlKSB7XHJcbiAgICAgICAgc2V0c2VsZWN0aWQoZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwidG9rZW5pZFwiKSk7XHJcbiAgICAgICAgc2V0c2VsZWN0dGl0bGUoZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwidGl0bGVcIikpO1xyXG5cclxuICAgICAgICBzZXRWaWV3TW9kYWxTaG93KHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGFjdGl2YXRlQmlkTkZUTW9kYWwoZSkge1xyXG4gICAgICAgIHNldHNlbGVjdGlkKGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcInRva2VuaWRcIikpO1xyXG4gICAgICAgIHNldHNlbGVjdGJpZChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJoaWdoZXN0YmlkXCIpKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhzZWxlY3RiaWQpO1xyXG4gICAgICAgIHNldHNlbGVjdHR5cGUoXCJORlRcIik7XHJcbiAgICAgICAgc2V0TW9kYWxTaG93KHRydWUpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gYWN0aXZhdGVCaWRDcnlwdG9wdW5rVE1vZGFsKGUpIHtcclxuICAgICAgICBzZXRzZWxlY3RpZChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJ0b2tlbmlkXCIpKTtcclxuICAgICAgICBzZXRzZWxlY3R0eXBlKFwiQ3J5cHRvcHVua1wiKTtcclxuICAgICAgICBzZXRzZWxlY3RiaWQoZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiaGlnaGVzdGJpZFwiKSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coc2VsZWN0YmlkKTtcclxuXHJcbiAgICAgICAgc2V0TW9kYWxTaG93KHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGFjdGl2YXRlQ3JlYXRlTkZUTW9kYWwoZSkge1xyXG4gICAgICAgIHNldHNlbGVjdHR5cGUoXCJORlRcIik7XHJcblxyXG4gICAgICAgIHNldERvbmF0ZU1vZGFsU2hvdyh0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBhY3RpdmF0ZUNyZWF0ZUNyeXB0b3B1bmtNb2RhbChlKSB7XHJcbiAgICAgICAgc2V0c2VsZWN0dHlwZShcIkNyeXB0b3B1bmtcIik7XHJcblxyXG4gICAgICAgIHNldERvbmF0ZU1vZGFsU2hvdyh0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiA8ZGl2IGNsYXNzTmFtZT1cInJvdyBFdmVudENvbnRhaW5lclwiID5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJ1xyXG4gICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2xvZ299IGNsYXNzTmFtZT1cIkF1Y3Rpb25JbWFnZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJEZXRpYWxzQ29udGFpbmVyXCIgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgcm93R2FwOiAnMTZweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdUb3A6ICc3MHB4J1xyXG4gICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMnZ3J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fSA+e3RpdGxlfTwvaDQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nVGV4dENvbnRhaW5lcic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzJ2dydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PkdvYWw6IDwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzJ2dydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PiQge2dvYWx1c2R9ICh7Z29hbH0ge3dhbGxldFR5cGV9KTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nVGV4dENvbnRhaW5lcic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzJ2dydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19IG5hbWU9J2RhdGVsZWZ0JyBkYXRlPXtkYXRlfT57ZGF0ZWxlZnR9PC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBnYXA6ICcxNHB4JywgcG9zaXRpb246ICdhYnNvbHV0ZScsIHJpZ2h0OiAnMjVweCcgfX0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9e2FjdGl2YXRlQ3JlYXRlTkZUTW9kYWx9IGNsYXNzTmFtZT1cImNhcmRcIiBzdHlsZT17eyBjb2xvcjogJ3doaXRlJywgb3ZlcmZsb3c6ICdoaWRkZW4nLCBiYWNrZ3JvdW5kOiAnIzBCRDZCRScsIHRleHRBbGlnbjogJ2NlbnRlcicsIHdpZHRoOiAnMTcycHgnLCBjdXJzb3I6ICdwb2ludGVyJywgaGVpZ2h0OiAnNDhweCcsIG1hcmdpbjogJzAnLCBwYWRkaW5nOiAnMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17YWN0aXZhdGVDcmVhdGVORlRNb2RhbH0gY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCIgc3R5bGU9e3sgaGVpZ2h0OiAnMTAwJScsIHBhZGRpbmdUb3A6ICcyMXB4JywgZm9udFNpemU6ICcyMXB4JyB9fT5Eb25hdGUgTkZUPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIiBvbkNsaWNrPXthY3RpdmF0ZUNyZWF0ZUNyeXB0b3B1bmtNb2RhbH0gc3R5bGU9e3sgY29sb3I6ICd3aGl0ZScsIG92ZXJmbG93OiAnaGlkZGVuJywgYmFja2dyb3VuZDogJyMwQkQ2QkUnLCB0ZXh0QWxpZ246ICdjZW50ZXInLCBjdXJzb3I6ICdwb2ludGVyJywgZmxvYXQ6ICdyaWdodCcsIHdpZHRoOiAnMjAycHgnLCBoZWlnaHQ6ICc0OHB4JywgcGFkZGluZzogJzBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9e2FjdGl2YXRlQ3JlYXRlQ3J5cHRvcHVua01vZGFsfSBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIiBzdHlsZT17eyBoZWlnaHQ6ICcxMDAlJywgcGFkZGluZ1RvcDogJzIxcHgnLCBmb250U2l6ZTogJzIxcHgnIH19PkRvbmF0ZSBDcnlwdG9wdW5rPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGlkPSdMb2FkaW5nJyBjbGFzc05hbWU9XCJMb2FkaW5nQXJlYVwiPlxyXG4gICAgICAgICAgICAgICAgPGgxPkxvYWRpbmcuLi48L2gxPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAge2xpc3QubWFwKChsaXN0SXRlbSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e2xpc3RJdGVtLklkfSBjbGFzc05hbWU9XCJyb3cgRWxlbWVudHNDb250YWluZXIgYmdXaGl0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnXHJcbiAgICAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtsaXN0SXRlbS50eXBlID09IFwiQ3J5cHRvcHVua1wiID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2xpc3RJdGVtLmltYWdlfSBjbGFzc05hbWU9XCJBdWN0aW9uQmlkSW1hZ2UgcGl4ZWxcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2xpc3RJdGVtLmltYWdlfSBjbGFzc05hbWU9XCJBdWN0aW9uQmlkSW1hZ2VcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkRldGlhbHNDb250YWluZXJcIiBzdHlsZT17eyByb3dHYXA6IFwiNXB4XCIgfX0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBzdHlsZT17eyBmb250U2l6ZTogJzJ2dycgfX0gPntsaXN0SXRlbS5uYW1lfTwvaDI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBzdHlsZT17eyBjb2xvcjogXCJyZ2IoMTM5LCAxMzksIDEzOSlcIiwgZm9udFNpemU6ICcxLjd2dycgfX0+VHlwZToge2xpc3RJdGVtLnR5cGV9PC9oND5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJUZXh0Q29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBzdHlsZT17eyBjb2xvcjogXCIjOEI4QjhCXCIsIGZvbnRTaXplOiAnMS43dncnIH19PntsaXN0SXRlbS5kZXNjcmlwdGlvbn08L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nRWxlbWVudEJvdHRvbUNvbnRhaW5lcic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXhXaWR0aDogXCIyMTZweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgc3R5bGU9e3sgZm9udFNpemU6ICcxdncnIH19IGNsYXNzTmFtZT1cInNtYWxsZ3JleVwiPkN1cnJlbnQgYmlkPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IHN0eWxlPXt7IGZvbnRTaXplOiAnMS43dncnIH19IGNsYXNzTmFtZT0nYmlkcHJpY2UnPiQge2xpc3RJdGVtLkJpZHByaWNlLnRvRml4ZWQoMil9ICh7bGlzdEl0ZW0ucHJpY2V9IHt3YWxsZXRUeXBlfSk8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDcgc3R5bGU9e3sgZm9udFNpemU6ICcxdncnIH19IG5hbWU9XCJkYXRlXCIgZGF0ZT17ZGF0ZX0gY2xhc3NOYW1lPVwic21hbGxncmV5XCI+e2RhdGVsZWZ0QmlkfTwvaDc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J0JpZEFsbGNvbnRhaW5lcicgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nQmlkc2J1dHRvbic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHRva2VuaWQ9e2xpc3RJdGVtLklkfSB0aXRsZT17bGlzdEl0ZW0ubmFtZX0gb25DbGljaz17YWN0aXZhdGVWaWV3QmlkTW9kYWx9IGNsYXNzTmFtZT1cIkJpZGNvbnRhaW5lciBjb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHRva2VuaWQ9e2xpc3RJdGVtLklkfSB0aXRsZT17bGlzdEl0ZW0ubmFtZX0gY2xhc3NOYW1lPVwiY2FyZCBCaWRjb250YWluZXJDYXJkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdG9rZW5pZD17bGlzdEl0ZW0uSWR9IHRpdGxlPXtsaXN0SXRlbS5uYW1lfSBjbGFzc05hbWU9XCJjYXJkLWJvZHkgYmlkYnV0dG9uVGV4dFwiPlZpZXc8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGlzdEl0ZW0udHlwZSA9PSBcIkNyeXB0b3B1bmtcIiA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHRva2VuaWQ9e2xpc3RJdGVtLklkfSB3YWxsZXQ9e2xpc3RJdGVtLndhbGxldH0gaGlnaGVzdGJpZD17bGlzdEl0ZW0ucHJpY2V9IGNsYXNzTmFtZT1cIkJpZGNvbnRhaW5lciBjb2xcIiBvbkNsaWNrPXthY3RpdmF0ZUJpZENyeXB0b3B1bmtUTW9kYWx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHRva2VuaWQ9e2xpc3RJdGVtLklkfSB3YWxsZXQ9e2xpc3RJdGVtLndhbGxldH0gaGlnaGVzdGJpZD17bGlzdEl0ZW0ucHJpY2V9IGNsYXNzTmFtZT1cImNhcmQgQmlkY29udGFpbmVyQ2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB0b2tlbmlkPXtsaXN0SXRlbS5JZH0gd2FsbGV0PXtsaXN0SXRlbS53YWxsZXR9IGhpZ2hlc3RiaWQ9e2xpc3RJdGVtLnByaWNlfSBjbGFzc05hbWU9XCJjYXJkLWJvZHkgYmlkYnV0dG9uVGV4dFwiPkJpZDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB0b2tlbmlkPXtsaXN0SXRlbS5JZH0gd2FsbGV0PXtsaXN0SXRlbS53YWxsZXR9IGhpZ2hlc3RiaWQ9e2xpc3RJdGVtLnByaWNlfSBnb2FsU2NvcmU9e2dvYWx9IGNsYXNzTmFtZT1cIkJpZGNvbnRhaW5lciBjb2xcIiBvbkNsaWNrPXthY3RpdmF0ZUJpZE5GVE1vZGFsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB0b2tlbmlkPXtsaXN0SXRlbS5JZH0gd2FsbGV0PXtsaXN0SXRlbS53YWxsZXR9IGhpZ2hlc3RiaWQ9e2xpc3RJdGVtLnByaWNlfSBjbGFzc05hbWU9XCJjYXJkIEJpZGNvbnRhaW5lckNhcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdG9rZW5pZD17bGlzdEl0ZW0uSWR9IHdhbGxldD17bGlzdEl0ZW0ud2FsbGV0fSBoaWdoZXN0YmlkPXtsaXN0SXRlbS5wcmljZX0gY2xhc3NOYW1lPVwiY2FyZC1ib2R5IGJpZGJ1dHRvblRleHRcIj5CaWQ8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPEJpZE5GVE1vZGFsXHJcbiAgICAgICAgICAgICAgICBzaG93PXttb2RhbFNob3d9XHJcbiAgICAgICAgICAgICAgICBvbkhpZGU9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRNb2RhbFNob3coZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFRoaXMgaXMgYSBwb29yIGltcGxlbWVudGF0aW9uLCBiZXR0ZXIgdG8gaW1wbGVtZW50IGFuIGV2ZW50IGxpc3RlbmVyXHJcbiAgICAgICAgICAgICAgICAgICAgQXVjdGlvbmZldGNoQ29udHJhY3REYXRhKCk7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgdG9rZW5JZD17c2VsZWN0aWR9XHJcbiAgICAgICAgICAgICAgICB0eXBlPXtzZWxlY3R0eXBlfVxyXG4gICAgICAgICAgICAgICAgVG9BZGRyZXNzPXtzZWxlY3R3YWxsZXR9XHJcbiAgICAgICAgICAgICAgICBldmVudElkPXtldmVudElkfVxyXG4gICAgICAgICAgICAgICAgSGlnaGVzdGJpZD17c2VsZWN0YmlkfVxyXG4gICAgICAgICAgICAgICAgd2FsbGV0VHlwZT17d2FsbGV0VHlwZX1cclxuICAgICAgICAgICAgICAgIGdvYWw9e2dvYWx9XHJcbiAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICA8Vmlld0JpZE5GVE1vZGFsXHJcbiAgICAgICAgICAgICAgICBzaG93PXtWaWV3bW9kYWxTaG93fVxyXG4gICAgICAgICAgICAgICAgb25IaWRlPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0Vmlld01vZGFsU2hvdyhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gVGhpcyBpcyBhIHBvb3IgaW1wbGVtZW50YXRpb24sIGJldHRlciB0byBpbXBsZW1lbnQgYW4gZXZlbnQgbGlzdGVuZXJcclxuICAgICAgICAgICAgICAgICAgICBBdWN0aW9uZmV0Y2hDb250cmFjdERhdGEoKTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBpZD17c2VsZWN0aWR9XHJcbiAgICAgICAgICAgICAgICB3YWxsZXRUeXBlPXt3YWxsZXRUeXBlfVxyXG4gICAgICAgICAgICAgICAgdGl0bGU9e3NlbGVjdHRpdGxlfVxyXG5cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPERvbmF0ZU5GVE1vZGFsXHJcbiAgICAgICAgICAgICAgICBzaG93PXtDcmVhdGVtb2RhbFNob3d9XHJcbiAgICAgICAgICAgICAgICBvbkhpZGU9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZXREb25hdGVNb2RhbFNob3coZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFRoaXMgaXMgYSBwb29yIGltcGxlbWVudGF0aW9uLCBiZXR0ZXIgdG8gaW1wbGVtZW50IGFuIGV2ZW50IGxpc3RlbmVyXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgRXZlbnRJRD17ZXZlbnRJZH1cclxuICAgICAgICAgICAgICAgIHR5cGU9e3NlbGVjdHR5cGV9XHJcbiAgICAgICAgICAgICAgICBTZWxlY3RlZFRpdGxlPXt0aXRsZX1cclxuICAgICAgICAgICAgICAgIGVuZGRhdGU9e2RhdGV9XHJcbiAgICAgICAgICAgIC8+XHJcblxyXG5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn1cclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gZnVuY3Rpb24oKSB7IHJldHVybiBcIjRiYmE3YWFjNmI2ZTIwYjM0MjA4XCI7IH0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVBhcmFtcyIsImV2ZW50Z2V0YnlpZCIsInRva2VuZ2V0YnlldmVudGlkIiwiQmlkTkZUTW9kYWwiLCJWaWV3QmlkTkZUTW9kYWwiLCJEb25hdGVORlRNb2RhbCIsIkF1Y3Rpb24iLCJyZWdleCIsInN0ciIsIndpbmRvdyIsImxvY2F0aW9uIiwic2VhcmNoIiwibSIsImlkIiwiZXhlYyIsImluZGV4IiwibGFzdEluZGV4IiwiY29uc29sZSIsImxvZyIsIkNyZWF0ZW1vZGFsU2hvdyIsInNldERvbmF0ZU1vZGFsU2hvdyIsImV2ZW50SWQiLCJzZXRFdmVudElkIiwibGlzdCIsInNldExpc3QiLCJ0aXRsZSIsInNldFRpdGxlIiwiZ29hbHVzZCIsInNldGdvYWx1c2QiLCJnb2FsIiwic2V0Z29hbCIsImRhdGVsZWZ0Iiwic2V0ZGF0ZWxlZnQiLCJkYXRlIiwic2V0ZGF0ZSIsImRhdGVsZWZ0QmlkIiwic2V0ZGF0ZWxlZnRCaWQiLCJsb2dvIiwic2V0bG9nbyIsInNlbGVjdGlkIiwic2V0c2VsZWN0aWQiLCJzZWxlY3R0aXRsZSIsInNldHNlbGVjdHRpdGxlIiwic2VsZWN0dHlwZSIsInNldHNlbGVjdHR5cGUiLCJzZWxlY3R3YWxsZXQiLCJzZXRzZWxlY3R3YWxsZXQiLCJ3YWxsZXRUeXBlIiwic2V0V2FsbGV0VHlwZSIsInNlbGVjdGJpZCIsInNldHNlbGVjdGJpZCIsImJvb2xUcnVlIiwibW9kYWxTaG93Iiwic2V0TW9kYWxTaG93IiwiVmlld21vZGFsU2hvdyIsInNldFZpZXdNb2RhbFNob3ciLCJmb3JtYXR0ZXIiLCJJbnRsIiwiTnVtYmVyRm9ybWF0IiwibWluaW11bUZyYWN0aW9uRGlnaXRzIiwibWF4aW11bUZyYWN0aW9uRGlnaXRzIiwiTGVmdERhdGUiLCJkYXRldGV4dCIsImMiLCJEYXRlIiwiZ2V0VGltZSIsIm4iLCJkIiwiZGEiLCJNYXRoIiwiZmxvb3IiLCJoIiwicyIsInRvU3RyaW5nIiwiTGVmdERhdGVCaWQiLCJBdWN0aW9uZmV0Y2hDb250cmFjdERhdGEiLCJwYXRobmFtZSIsIm5lYXJQcmljZSIsIm5lYXJDdXJyZW5jeVVybCIsImN1cnJlbmN5X29wdGlvbnMiLCJtZXRob2QiLCJoZWFkZXJzIiwiQWNjZXB0IiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsImNhdGNoIiwiZXJyIiwiZXJyb3IiLCJkYXRhIiwibWFya2V0UGFpcnMiLCJwcmljZSIsIkFpcnRhYmxlIiwicmVxdWlyZSIsImJhc2UiLCJhcGlLZXkiLCJyZWNvcmQiLCJzZXRJbnRlcnZhbCIsImNhbGN1bGF0ZVRpbWVMZWZ0IiwiYWxsRGF0ZXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlOYW1lIiwiaSIsImxlbmd0aCIsImdldEF0dHJpYnV0ZSIsImlubmVySFRNTCIsImFjdGl2YXRlVmlld0JpZE1vZGFsIiwiZSIsInRhcmdldCIsImFjdGl2YXRlQmlkTkZUTW9kYWwiLCJhY3RpdmF0ZUJpZENyeXB0b3B1bmtUTW9kYWwiLCJhY3RpdmF0ZUNyZWF0ZU5GVE1vZGFsIiwiYWN0aXZhdGVDcmVhdGVDcnlwdG9wdW5rTW9kYWwiLCJkaXNwbGF5Iiwid2lkdGgiLCJwb3NpdGlvbiIsInJvd0dhcCIsInBhZGRpbmdUb3AiLCJmb250U2l6ZSIsImdhcCIsInJpZ2h0IiwiY29sb3IiLCJvdmVyZmxvdyIsImJhY2tncm91bmQiLCJ0ZXh0QWxpZ24iLCJjdXJzb3IiLCJoZWlnaHQiLCJtYXJnaW4iLCJwYWRkaW5nIiwiZmxvYXQiLCJsaXN0SXRlbSIsIklkIiwidHlwZSIsImltYWdlIiwibmFtZSIsImRlc2NyaXB0aW9uIiwibWF4V2lkdGgiLCJCaWRwcmljZSIsInRvRml4ZWQiLCJ3YWxsZXQiXSwic291cmNlUm9vdCI6IiJ9