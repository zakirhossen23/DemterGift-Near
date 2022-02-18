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

                setEventId(record.getId);
                setTitle(record.get("title"));
                setWalletType(record.get("wallettype"));
                setgoalusd(formatter.format(Number(Number(record.get("Goal")) * nearPrice)));
                setgoal(Number(record.get("Goal")));
                setdateleft(LeftDate(record.get("endDate")));
                setdate(record.get("endDate"));
                setdateleftBid(LeftDateBid(record.get("endDate")));
                setlogo(record.get("logolink"));
                console.log('Retrieved', record.getId);
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
/******/ 	__webpack_require__.h = function() { return "32093f7b2c00d2082094"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2luZGV4LjRiYmE3YWFjNmI2ZTIwYjM0MjA4LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFFQTtBQUVlLFNBQVNTLE9BQVQsR0FBbUI7QUFDOUIsTUFBTUMsS0FBSyxHQUFHLFdBQWQ7QUFDQSxNQUFNQyxHQUFHLEdBQUdDLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsTUFBNUI7QUFDQSxNQUFJQyxDQUFKO0FBQ0EsTUFBSUMsRUFBRSxHQUFJLEVBQVY7O0FBQ0EsU0FBTyxDQUFDRCxDQUFDLEdBQUdMLEtBQUssQ0FBQ08sSUFBTixDQUFXTixHQUFYLENBQUwsTUFBMEIsSUFBakMsRUFBdUM7QUFDbkM7QUFDQSxRQUFJSSxDQUFDLENBQUNHLEtBQUYsS0FBWVIsS0FBSyxDQUFDUyxTQUF0QixFQUFpQztBQUM3QlQsTUFBQUEsS0FBSyxDQUFDUyxTQUFOO0FBQ0g7O0FBQ0RILElBQUFBLEVBQUUsR0FBR0QsQ0FBQyxDQUFDLENBQUQsQ0FBTjtBQUNIOztBQUdESyxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxRQUFaLEVBQXNCTCxFQUF0Qjs7QUFDQSxrQkFBOENmLCtDQUFRLENBQUMsS0FBRCxDQUF0RDtBQUFBO0FBQUEsTUFBT3FCLGVBQVA7QUFBQSxNQUF3QkMsa0JBQXhCOztBQUVBLG1CQUE4QnRCLCtDQUFRLENBQUNlLEVBQUQsQ0FBdEM7QUFBQTtBQUFBLE1BQU9RLE9BQVA7QUFBQSxNQUFnQkMsVUFBaEI7O0FBQ0EsbUJBQXdCeEIsK0NBQVEsQ0FBQyxFQUFELENBQWhDO0FBQUE7QUFBQSxNQUFPeUIsSUFBUDtBQUFBLE1BQWFDLE9BQWI7O0FBRUEsbUJBQTBCMUIsK0NBQVEsQ0FBQyxFQUFELENBQWxDO0FBQUE7QUFBQSxNQUFPMkIsS0FBUDtBQUFBLE1BQWNDLFFBQWQ7O0FBQ0EsbUJBQThCNUIsK0NBQVEsQ0FBQyxFQUFELENBQXRD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LEVBQUVRLFVBUmhCO0FBU0ksU0FBSyxFQUFFTjtBQVRYLElBckhKLGVBaUlJLGlEQUFDLHFGQUFEO0FBQ0ksUUFBSSxFQUFFdEIsZUFEVjtBQUVJLFVBQU0sRUFBRSxrQkFBTTtBQUNWQyxNQUFBQSxrQkFBa0IsQ0FBQyxLQUFELENBQWxCLENBRFUsQ0FFVjtBQUNILEtBTEw7QUFNSSxXQUFPLEVBQUVDLE9BTmI7QUFPSSxRQUFJLEVBQUVzQixVQVBWO0FBUUksaUJBQWEsRUFBRWxCLEtBUm5CO0FBU0ksV0FBTyxFQUFFUTtBQVRiLElBaklKLENBREo7QUFpSkg7Ozs7Ozs7O1VDL1hELHFDQUFxQyIsInNvdXJjZXMiOlsid2VicGFjazovL2RlbWV0ZXJnaWZ0Ly4vc3JjL3BhZ2VzL2RvbmF0aW9uL2F1Y3Rpb24vaW5kZXguanN4Iiwid2VicGFjazovL2RlbWV0ZXJnaWZ0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCB7IHVzZVBhcmFtcyB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXHJcbmltcG9ydCB7IGV2ZW50Z2V0YnlpZCB9IGZyb20gJy4uLy4uL0V2ZW50cy9ldmVudCdcclxuaW1wb3J0IHsgdG9rZW5nZXRieWV2ZW50aWQgfSBmcm9tICcuLi8uLi9FdmVudHMvdG9rZW4nXHJcblxyXG5cclxuaW1wb3J0IEJpZE5GVE1vZGFsIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvY29tcG9uZW50cy9tb2RhbHMvQmlkTkZUTW9kYWwnO1xyXG5pbXBvcnQgVmlld0JpZE5GVE1vZGFsIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvY29tcG9uZW50cy9tb2RhbHMvVmlld0JpZE5GVE1vZGFsJztcclxuXHJcbmltcG9ydCBEb25hdGVORlRNb2RhbCBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2NvbXBvbmVudHMvbW9kYWxzL0RvbmF0ZU5GVE1vZGFsJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEF1Y3Rpb24oKSB7XHJcbiAgICBjb25zdCByZWdleCA9IC9cXFsoLiopXFxdL2c7XHJcbiAgICBjb25zdCBzdHIgPSB3aW5kb3cubG9jYXRpb24uc2VhcmNoO1xyXG4gICAgbGV0IG07XHJcbiAgICBsZXQgaWQgPSAgXCJcIjtcclxuICAgIHdoaWxlICgobSA9IHJlZ2V4LmV4ZWMoc3RyKSkgIT09IG51bGwpIHtcclxuICAgICAgICAvLyBUaGlzIGlzIG5lY2Vzc2FyeSB0byBhdm9pZCBpbmZpbml0ZSBsb29wcyB3aXRoIHplcm8td2lkdGggbWF0Y2hlc1xyXG4gICAgICAgIGlmIChtLmluZGV4ID09PSByZWdleC5sYXN0SW5kZXgpIHtcclxuICAgICAgICAgICAgcmVnZXgubGFzdEluZGV4Kys7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlkID0gbVsxXTtcclxuICAgIH1cclxuXHJcbiAgICBcclxuICAgIGNvbnNvbGUubG9nKFwiaWQgPT4gXCIsIGlkKTtcclxuICAgIGNvbnN0IFtDcmVhdGVtb2RhbFNob3csIHNldERvbmF0ZU1vZGFsU2hvd10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgY29uc3QgW2V2ZW50SWQsIHNldEV2ZW50SWRdID0gdXNlU3RhdGUoaWQpO1xyXG4gICAgY29uc3QgW2xpc3QsIHNldExpc3RdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICAgIGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW2dvYWx1c2QsIHNldGdvYWx1c2RdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW2dvYWwsIHNldGdvYWxdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW2RhdGVsZWZ0LCBzZXRkYXRlbGVmdF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbZGF0ZSwgc2V0ZGF0ZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbZGF0ZWxlZnRCaWQsIHNldGRhdGVsZWZ0QmlkXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtsb2dvLCBzZXRsb2dvXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtzZWxlY3RpZCwgc2V0c2VsZWN0aWRdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3NlbGVjdHRpdGxlLCBzZXRzZWxlY3R0aXRsZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbc2VsZWN0dHlwZSwgc2V0c2VsZWN0dHlwZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbc2VsZWN0d2FsbGV0LCBzZXRzZWxlY3R3YWxsZXRdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3dhbGxldFR5cGUsIHNldFdhbGxldFR5cGVdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3NlbGVjdGJpZCwgc2V0c2VsZWN0YmlkXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IGJvb2xUcnVlID0gdHJ1ZTtcclxuICAgIGNvbnN0IFttb2RhbFNob3csIHNldE1vZGFsU2hvd10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbVmlld21vZGFsU2hvdywgc2V0Vmlld01vZGFsU2hvd10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG5cclxuXHJcbiAgICBjb25zdCBmb3JtYXR0ZXIgPSBuZXcgSW50bC5OdW1iZXJGb3JtYXQoJ2VuLVVTJywge1xyXG4gICAgICAgIG1pbmltdW1GcmFjdGlvbkRpZ2l0czogMixcclxuICAgICAgICBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDIsXHJcbiAgICB9KTtcclxuXHJcbiAgICBmdW5jdGlvbiBMZWZ0RGF0ZShkYXRldGV4dCkge1xyXG4gICAgICAgIHZhciBjID0gbmV3IERhdGUoZGF0ZXRleHQpLmdldFRpbWUoKTtcclxuICAgICAgICB2YXIgbiA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgICAgIHZhciBkID0gYyAtIG47XHJcbiAgICAgICAgdmFyIGRhID0gTWF0aC5mbG9vcihkIC8gKDEwMDAgKiA2MCAqIDYwICogMjQpKTtcclxuICAgICAgICB2YXIgaCA9IE1hdGguZmxvb3IoKGQgJSAoMTAwMCAqIDYwICogNjAgKiAyNCkpIC8gKDEwMDAgKiA2MCAqIDYwKSk7XHJcbiAgICAgICAgdmFyIG0gPSBNYXRoLmZsb29yKChkICUgKDEwMDAgKiA2MCAqIDYwKSkgLyAoMTAwMCAqIDYwKSk7XHJcbiAgICAgICAgdmFyIHMgPSBNYXRoLmZsb29yKChkICUgKDEwMDAgKiA2MCkpIC8gMTAwMCk7XHJcbiAgICAgICAgcmV0dXJuIChkYS50b1N0cmluZygpICsgXCIgRGF5cyBcIiArIGgudG9TdHJpbmcoKSArIFwiIGhvdXJzIFwiICsgbS50b1N0cmluZygpICsgXCIgbWludXRlcyBcIiArIHMudG9TdHJpbmcoKSArIFwiIHNlY29uZHNcIik7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBMZWZ0RGF0ZUJpZChkYXRldGV4dCkge1xyXG4gICAgICAgIHZhciBjID0gbmV3IERhdGUoZGF0ZXRleHQpLmdldFRpbWUoKTtcclxuICAgICAgICB2YXIgbiA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgICAgIHZhciBkID0gYyAtIG47XHJcbiAgICAgICAgdmFyIGRhID0gTWF0aC5mbG9vcihkIC8gKDEwMDAgKiA2MCAqIDYwICogMjQpKTtcclxuICAgICAgICB2YXIgaCA9IE1hdGguZmxvb3IoKGQgJSAoMTAwMCAqIDYwICogNjAgKiAyNCkpIC8gKDEwMDAgKiA2MCAqIDYwKSk7XHJcbiAgICAgICAgdmFyIG0gPSBNYXRoLmZsb29yKChkICUgKDEwMDAgKiA2MCAqIDYwKSkgLyAoMTAwMCAqIDYwKSk7XHJcbiAgICAgICAgdmFyIHMgPSBNYXRoLmZsb29yKChkICUgKDEwMDAgKiA2MCkpIC8gMTAwMCk7XHJcbiAgICAgICAgcmV0dXJuIChkYS50b1N0cmluZygpICsgXCJkIFwiICsgaC50b1N0cmluZygpICsgXCJoIFwiICsgbS50b1N0cmluZygpICsgXCJtIFwiICsgcy50b1N0cmluZygpICsgXCJzXCIpO1xyXG4gICAgfVxyXG4gICAgYXN5bmMgZnVuY3Rpb24gQXVjdGlvbmZldGNoQ29udHJhY3REYXRhKCkge1xyXG4gICAgICAgIGlmIChpZCAmJiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgPT0gXCIvZG9uYXRpb24vYXVjdGlvblwiKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic3RhcnRlZCBjaGVrY2luZ1wiKTtcclxuICAgICAgICAgICAgICAgIGxldCBuZWFyUHJpY2UgPSAwO1xyXG4gICAgICAgICAgICAvL05FQVIgY3VycmVuY3lcclxuICAgICAgICAgICAgdHJ5IHtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgbmVhckN1cnJlbmN5VXJsID0gXCJodHRwczovL2FwaS5jb2lubWFya2V0Y2FwLmNvbS9kYXRhLWFwaS92My9jcnlwdG9jdXJyZW5jeS9tYXJrZXQtcGFpcnMvbGF0ZXN0P3NsdWc9bmVhci1wcm90b2NvbCZzdGFydD0xJmxpbWl0PTEmY2F0ZWdvcnk9c3BvdCZzb3J0PWNtY19yYW5rX2FkdmFuY2VkXCI7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW5jeV9vcHRpb25zID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uLCB0ZXh0L3BsYWluLCAqLyonXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBhd2FpdCBmZXRjaChuZWFyQ3VycmVuY3lVcmwsIGN1cnJlbmN5X29wdGlvbnMpLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oanNvbiA9PiBuZWFyUHJpY2UgPSBqc29uKVxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcignZXJyb3I6JyArIGVycikpO1xyXG4gICAgICAgICAgICAgICAgbmVhclByaWNlID0gbmVhclByaWNlLmRhdGEubWFya2V0UGFpcnNbMF0ucHJpY2U7XHJcblxyXG4gICAgICAgICAgICB9IGNhdGNoIChleCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXgpO1xyXG5cclxuICAgICAgICAgICAgICAgIG5lYXJQcmljZSA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIEFpcnRhYmxlID0gcmVxdWlyZSgnYWlydGFibGUnKTtcclxuICAgICAgICAgICAgdmFyIGJhc2UgPSBuZXcgQWlydGFibGUoe2FwaUtleTogJ2tleVIxUnJjbDlPMnM5YlRzJ30pLmJhc2UoJ2FwcGdiUkNwYmt6bWRjdWNPJyk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgIGF3YWl0IGJhc2UoJ2V2ZW50cycpLmZpbmQoaWQsIGZ1bmN0aW9uKGVyciwgcmVjb3JkKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7IGNvbnNvbGUuZXJyb3IoZXJyKTsgcmV0dXJuOyB9XHJcblxyXG4gICAgICAgICAgICAgICAgc2V0RXZlbnRJZChyZWNvcmQuZ2V0SWQpO1xyXG5cclxuICAgICAgICAgICAgICAgIHNldFRpdGxlKHJlY29yZC5nZXQoXCJ0aXRsZVwiKSk7XHJcbiAgICAgICAgICAgICAgICBzZXRXYWxsZXRUeXBlKHJlY29yZC5nZXQoXCJ3YWxsZXR0eXBlXCIpKTtcclxuICAgICAgICAgICAgICAgIHNldGdvYWx1c2QoZm9ybWF0dGVyLmZvcm1hdChOdW1iZXIoTnVtYmVyKHJlY29yZC5nZXQoXCJHb2FsXCIpKSAqIG5lYXJQcmljZSkpKTtcclxuICAgICAgICAgICAgICAgIHNldGdvYWwoTnVtYmVyKHJlY29yZC5nZXQoXCJHb2FsXCIpKSk7XHJcbiAgICAgICAgICAgICAgICBzZXRkYXRlbGVmdChMZWZ0RGF0ZShyZWNvcmQuZ2V0KFwiZW5kRGF0ZVwiKSkpO1xyXG4gICAgICAgICAgICAgICAgc2V0ZGF0ZShyZWNvcmQuZ2V0KFwiZW5kRGF0ZVwiKSk7XHJcbiAgICAgICAgICAgICAgICBzZXRkYXRlbGVmdEJpZChMZWZ0RGF0ZUJpZChyZWNvcmQuZ2V0KFwiZW5kRGF0ZVwiKSkpO1xyXG4gICAgICAgICAgICAgICAgc2V0bG9nbyhyZWNvcmQuZ2V0KFwibG9nb2xpbmtcIikpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdSZXRyaWV2ZWQnLCByZWNvcmQuZ2V0SWQpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIHdoaWxlIChib29sVHJ1ZSkge1xyXG4gICAgICAgICAgICAvLyAgICAgdHJ5IHtcclxuICAgICAgICAgICAgLy8gICAgICAgICBzZXRFdmVudElkKGlkKTtcclxuICAgICAgICAgICAgLy8gICAgICAgICBjb25zdCB2YWx1ZSA9IGF3YWl0IGV2ZW50Z2V0YnlpZChpZCk7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgY29uc3QgYXJyID0gW107XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgY29uc29sZS5sb2codmFsdWUpO1xyXG5cclxuICAgICAgICAgICAgLy8gICAgICAgICBjb25zdCB0b3RhbFRva2VucyA9IGF3YWl0IHRva2VuZ2V0YnlldmVudGlkKGlkKTtcclxuXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b3RhbFRva2Vucy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICBjb25zdCBvYmplY3QgPSBhd2FpdCB0b3RhbFRva2Vuc1tpXTtcclxuXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIGlmIChvYmplY3QubmFtZSkge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgdmFyIHByaWNlZGVzMSA9IDA7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICBsZXQgcHJpY2UyVXNkID0gMFxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgdHJ5IHtcclxuXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgcHJpY2UyVXNkID0gTnVtYmVyKG9iamVjdC5wcmljZSAqIG5lYXJQcmljZSk7XHJcblxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZXgpIHsgfVxyXG5cclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIGFyci5wdXNoKHtcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBJZDogb2JqZWN0LmlkLFxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIG5hbWU6IG9iamVjdC5uYW1lLFxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBvYmplY3QuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgQmlkcHJpY2U6IHByaWNlMlVzZCxcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBwcmljZTogTnVtYmVyKG9iamVjdC5wcmljZSksXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgdHlwZTogb2JqZWN0LnR5cGUsXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgaW1hZ2U6IG9iamVjdC5pbWFnZSxcclxuXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyAgICAgICAgIHNldExpc3QoYXJyKTtcclxuICAgICAgICAgICAgLy8gICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJMb2FkaW5nXCIpKVxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIkxvYWRpbmdcIikuc3R5bGUgPSBcImRpc3BsYXk6bm9uZVwiO1xyXG5cclxuICAgICAgICAgICAgLy8gICAgICAgICBzZXRzZWxlY3R3YWxsZXQodmFsdWUud2FsbGV0KTtcclxuICAgICAgICAgICAgLy8gICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZS53YWxsZXQpO1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIHNldFRpdGxlKHZhbHVlLnRpdGxlKTtcclxuICAgICAgICAgICAgLy8gICAgICAgICBzZXRXYWxsZXRUeXBlKHZhbHVlLndhbGxldHR5cGUpO1xyXG5cclxuICAgICAgICAgICAgLy8gICAgICAgICBzZXRnb2FsdXNkKGZvcm1hdHRlci5mb3JtYXQoTnVtYmVyKHZhbHVlLkdvYWwgKiBuZWFyUHJpY2UpKSk7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgc2V0Z29hbChOdW1iZXIodmFsdWUuR29hbCkpO1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIHNldGRhdGVsZWZ0KExlZnREYXRlKHZhbHVlLmVuZERhdGUpKTtcclxuICAgICAgICAgICAgLy8gICAgICAgICBzZXRkYXRlKHZhbHVlLmVuZERhdGUpO1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIHNldGRhdGVsZWZ0QmlkKExlZnREYXRlQmlkKHZhbHVlLmVuZERhdGUpKTtcclxuICAgICAgICAgICAgLy8gICAgICAgICBzZXRsb2dvKHZhbHVlLmxvZ29saW5rKTtcclxuICAgICAgICAgICAgLy8gICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgLy8gICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgICAgIC8vIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIEF1Y3Rpb25mZXRjaENvbnRyYWN0RGF0YSgpO1xyXG5cclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY2FsY3VsYXRlVGltZUxlZnQoKTtcclxuICAgIH0sIDEwMDApO1xyXG5cclxuXHJcbiAgICBmdW5jdGlvbiBjYWxjdWxhdGVUaW1lTGVmdCgpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICB2YXIgYWxsRGF0ZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShcImRhdGVsZWZ0XCIpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbERhdGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZGF0ZSA9IChhbGxEYXRlc1tpXSkuZ2V0QXR0cmlidXRlKFwiZGF0ZVwiKTtcclxuICAgICAgICAgICAgICAgIGFsbERhdGVzW2ldLmlubmVySFRNTCA9IExlZnREYXRlKGRhdGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBhbGxEYXRlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKFwiZGF0ZVwiKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxEYXRlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdmFyIGRhdGUgPSAoYWxsRGF0ZXNbaV0pLmdldEF0dHJpYnV0ZShcImRhdGVcIik7XHJcbiAgICAgICAgICAgICAgICBhbGxEYXRlc1tpXS5pbm5lckhUTUwgPSBMZWZ0RGF0ZUJpZChkYXRlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7fVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGFjdGl2YXRlVmlld0JpZE1vZGFsKGUpIHtcclxuICAgICAgICBzZXRzZWxlY3RpZChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJ0b2tlbmlkXCIpKTtcclxuICAgICAgICBzZXRzZWxlY3R0aXRsZShlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJ0aXRsZVwiKSk7XHJcblxyXG4gICAgICAgIHNldFZpZXdNb2RhbFNob3codHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gYWN0aXZhdGVCaWRORlRNb2RhbChlKSB7XHJcbiAgICAgICAgc2V0c2VsZWN0aWQoZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwidG9rZW5pZFwiKSk7XHJcbiAgICAgICAgc2V0c2VsZWN0YmlkKGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImhpZ2hlc3RiaWRcIikpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHNlbGVjdGJpZCk7XHJcbiAgICAgICAgc2V0c2VsZWN0dHlwZShcIk5GVFwiKTtcclxuICAgICAgICBzZXRNb2RhbFNob3codHJ1ZSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBhY3RpdmF0ZUJpZENyeXB0b3B1bmtUTW9kYWwoZSkge1xyXG4gICAgICAgIHNldHNlbGVjdGlkKGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcInRva2VuaWRcIikpO1xyXG4gICAgICAgIHNldHNlbGVjdHR5cGUoXCJDcnlwdG9wdW5rXCIpO1xyXG4gICAgICAgIHNldHNlbGVjdGJpZChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJoaWdoZXN0YmlkXCIpKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhzZWxlY3RiaWQpO1xyXG5cclxuICAgICAgICBzZXRNb2RhbFNob3codHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gYWN0aXZhdGVDcmVhdGVORlRNb2RhbChlKSB7XHJcbiAgICAgICAgc2V0c2VsZWN0dHlwZShcIk5GVFwiKTtcclxuXHJcbiAgICAgICAgc2V0RG9uYXRlTW9kYWxTaG93KHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGFjdGl2YXRlQ3JlYXRlQ3J5cHRvcHVua01vZGFsKGUpIHtcclxuICAgICAgICBzZXRzZWxlY3R0eXBlKFwiQ3J5cHRvcHVua1wiKTtcclxuXHJcbiAgICAgICAgc2V0RG9uYXRlTW9kYWxTaG93KHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuIDxkaXYgY2xhc3NOYW1lPVwicm93IEV2ZW50Q29udGFpbmVyXCIgPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnXHJcbiAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17bG9nb30gY2xhc3NOYW1lPVwiQXVjdGlvbkltYWdlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkRldGlhbHNDb250YWluZXJcIiBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByb3dHYXA6ICcxNnB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1RvcDogJzcwcHgnXHJcbiAgICAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcydncnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19ID57dGl0bGV9PC9oND5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdUZXh0Q29udGFpbmVyJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMnZ3J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+R29hbDogPC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMnZ3J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+JCB7Z29hbHVzZH0gKHtnb2FsfSB7d2FsbGV0VHlwZX0pPC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdUZXh0Q29udGFpbmVyJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMnZ3J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gbmFtZT0nZGF0ZWxlZnQnIGRhdGU9e2RhdGV9PntkYXRlbGVmdH08L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGdhcDogJzE0cHgnLCBwb3NpdGlvbjogJ2Fic29sdXRlJywgcmlnaHQ6ICcyNXB4JyB9fSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17YWN0aXZhdGVDcmVhdGVORlRNb2RhbH0gY2xhc3NOYW1lPVwiY2FyZFwiIHN0eWxlPXt7IGNvbG9yOiAnd2hpdGUnLCBvdmVyZmxvdzogJ2hpZGRlbicsIGJhY2tncm91bmQ6ICcjMEJENkJFJywgdGV4dEFsaWduOiAnY2VudGVyJywgd2lkdGg6ICcxNzJweCcsIGN1cnNvcjogJ3BvaW50ZXInLCBoZWlnaHQ6ICc0OHB4JywgbWFyZ2luOiAnMCcsIHBhZGRpbmc6ICcwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXthY3RpdmF0ZUNyZWF0ZU5GVE1vZGFsfSBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIiBzdHlsZT17eyBoZWlnaHQ6ICcxMDAlJywgcGFkZGluZ1RvcDogJzIxcHgnLCBmb250U2l6ZTogJzIxcHgnIH19PkRvbmF0ZSBORlQ8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiIG9uQ2xpY2s9e2FjdGl2YXRlQ3JlYXRlQ3J5cHRvcHVua01vZGFsfSBzdHlsZT17eyBjb2xvcjogJ3doaXRlJywgb3ZlcmZsb3c6ICdoaWRkZW4nLCBiYWNrZ3JvdW5kOiAnIzBCRDZCRScsIHRleHRBbGlnbjogJ2NlbnRlcicsIGN1cnNvcjogJ3BvaW50ZXInLCBmbG9hdDogJ3JpZ2h0Jywgd2lkdGg6ICcyMDJweCcsIGhlaWdodDogJzQ4cHgnLCBwYWRkaW5nOiAnMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17YWN0aXZhdGVDcmVhdGVDcnlwdG9wdW5rTW9kYWx9IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiIHN0eWxlPXt7IGhlaWdodDogJzEwMCUnLCBwYWRkaW5nVG9wOiAnMjFweCcsIGZvbnRTaXplOiAnMjFweCcgfX0+RG9uYXRlIENyeXB0b3B1bms8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgaWQ9J0xvYWRpbmcnIGNsYXNzTmFtZT1cIkxvYWRpbmdBcmVhXCI+XHJcbiAgICAgICAgICAgICAgICA8aDE+TG9hZGluZy4uLjwvaDE+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7bGlzdC5tYXAoKGxpc3RJdGVtKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17bGlzdEl0ZW0uSWR9IGNsYXNzTmFtZT1cInJvdyBFbGVtZW50c0NvbnRhaW5lciBiZ1doaXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCdcclxuICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2xpc3RJdGVtLnR5cGUgPT0gXCJDcnlwdG9wdW5rXCIgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17bGlzdEl0ZW0uaW1hZ2V9IGNsYXNzTmFtZT1cIkF1Y3Rpb25CaWRJbWFnZSBwaXhlbFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17bGlzdEl0ZW0uaW1hZ2V9IGNsYXNzTmFtZT1cIkF1Y3Rpb25CaWRJbWFnZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiRGV0aWFsc0NvbnRhaW5lclwiIHN0eWxlPXt7IHJvd0dhcDogXCI1cHhcIiB9fSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIHN0eWxlPXt7IGZvbnRTaXplOiAnMnZ3JyB9fSA+e2xpc3RJdGVtLm5hbWV9PC9oMj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IHN0eWxlPXt7IGNvbG9yOiBcInJnYigxMzksIDEzOSwgMTM5KVwiLCBmb250U2l6ZTogJzEuN3Z3JyB9fT5UeXBlOiB7bGlzdEl0ZW0udHlwZX08L2g0PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlRleHRDb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IHN0eWxlPXt7IGNvbG9yOiBcIiM4QjhCOEJcIiwgZm9udFNpemU6ICcxLjd2dycgfX0+e2xpc3RJdGVtLmRlc2NyaXB0aW9ufTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdFbGVtZW50Qm90dG9tQ29udGFpbmVyJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1heFdpZHRoOiBcIjIxNnB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBzdHlsZT17eyBmb250U2l6ZTogJzF2dycgfX0gY2xhc3NOYW1lPVwic21hbGxncmV5XCI+Q3VycmVudCBiaWQ8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgc3R5bGU9e3sgZm9udFNpemU6ICcxLjd2dycgfX0gY2xhc3NOYW1lPSdiaWRwcmljZSc+JCB7bGlzdEl0ZW0uQmlkcHJpY2UudG9GaXhlZCgyKX0gKHtsaXN0SXRlbS5wcmljZX0ge3dhbGxldFR5cGV9KTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNyBzdHlsZT17eyBmb250U2l6ZTogJzF2dycgfX0gbmFtZT1cImRhdGVcIiBkYXRlPXtkYXRlfSBjbGFzc05hbWU9XCJzbWFsbGdyZXlcIj57ZGF0ZWxlZnRCaWR9PC9oNz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nQmlkQWxsY29udGFpbmVyJyA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdCaWRzYnV0dG9uJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdG9rZW5pZD17bGlzdEl0ZW0uSWR9IHRpdGxlPXtsaXN0SXRlbS5uYW1lfSBvbkNsaWNrPXthY3RpdmF0ZVZpZXdCaWRNb2RhbH0gY2xhc3NOYW1lPVwiQmlkY29udGFpbmVyIGNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdG9rZW5pZD17bGlzdEl0ZW0uSWR9IHRpdGxlPXtsaXN0SXRlbS5uYW1lfSBjbGFzc05hbWU9XCJjYXJkIEJpZGNvbnRhaW5lckNhcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB0b2tlbmlkPXtsaXN0SXRlbS5JZH0gdGl0bGU9e2xpc3RJdGVtLm5hbWV9IGNsYXNzTmFtZT1cImNhcmQtYm9keSBiaWRidXR0b25UZXh0XCI+VmlldzwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsaXN0SXRlbS50eXBlID09IFwiQ3J5cHRvcHVua1wiID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdG9rZW5pZD17bGlzdEl0ZW0uSWR9IHdhbGxldD17bGlzdEl0ZW0ud2FsbGV0fSBoaWdoZXN0YmlkPXtsaXN0SXRlbS5wcmljZX0gY2xhc3NOYW1lPVwiQmlkY29udGFpbmVyIGNvbFwiIG9uQ2xpY2s9e2FjdGl2YXRlQmlkQ3J5cHRvcHVua1RNb2RhbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdG9rZW5pZD17bGlzdEl0ZW0uSWR9IHdhbGxldD17bGlzdEl0ZW0ud2FsbGV0fSBoaWdoZXN0YmlkPXtsaXN0SXRlbS5wcmljZX0gY2xhc3NOYW1lPVwiY2FyZCBCaWRjb250YWluZXJDYXJkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHRva2VuaWQ9e2xpc3RJdGVtLklkfSB3YWxsZXQ9e2xpc3RJdGVtLndhbGxldH0gaGlnaGVzdGJpZD17bGlzdEl0ZW0ucHJpY2V9IGNsYXNzTmFtZT1cImNhcmQtYm9keSBiaWRidXR0b25UZXh0XCI+QmlkPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHRva2VuaWQ9e2xpc3RJdGVtLklkfSB3YWxsZXQ9e2xpc3RJdGVtLndhbGxldH0gaGlnaGVzdGJpZD17bGlzdEl0ZW0ucHJpY2V9IGdvYWxTY29yZT17Z29hbH0gY2xhc3NOYW1lPVwiQmlkY29udGFpbmVyIGNvbFwiIG9uQ2xpY2s9e2FjdGl2YXRlQmlkTkZUTW9kYWx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHRva2VuaWQ9e2xpc3RJdGVtLklkfSB3YWxsZXQ9e2xpc3RJdGVtLndhbGxldH0gaGlnaGVzdGJpZD17bGlzdEl0ZW0ucHJpY2V9IGNsYXNzTmFtZT1cImNhcmQgQmlkY29udGFpbmVyQ2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB0b2tlbmlkPXtsaXN0SXRlbS5JZH0gd2FsbGV0PXtsaXN0SXRlbS53YWxsZXR9IGhpZ2hlc3RiaWQ9e2xpc3RJdGVtLnByaWNlfSBjbGFzc05hbWU9XCJjYXJkLWJvZHkgYmlkYnV0dG9uVGV4dFwiPkJpZDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8QmlkTkZUTW9kYWxcclxuICAgICAgICAgICAgICAgIHNob3c9e21vZGFsU2hvd31cclxuICAgICAgICAgICAgICAgIG9uSGlkZT17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldE1vZGFsU2hvdyhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gVGhpcyBpcyBhIHBvb3IgaW1wbGVtZW50YXRpb24sIGJldHRlciB0byBpbXBsZW1lbnQgYW4gZXZlbnQgbGlzdGVuZXJcclxuICAgICAgICAgICAgICAgICAgICBBdWN0aW9uZmV0Y2hDb250cmFjdERhdGEoKTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICB0b2tlbklkPXtzZWxlY3RpZH1cclxuICAgICAgICAgICAgICAgIHR5cGU9e3NlbGVjdHR5cGV9XHJcbiAgICAgICAgICAgICAgICBUb0FkZHJlc3M9e3NlbGVjdHdhbGxldH1cclxuICAgICAgICAgICAgICAgIGV2ZW50SWQ9e2V2ZW50SWR9XHJcbiAgICAgICAgICAgICAgICBIaWdoZXN0YmlkPXtzZWxlY3RiaWR9XHJcbiAgICAgICAgICAgICAgICB3YWxsZXRUeXBlPXt3YWxsZXRUeXBlfVxyXG4gICAgICAgICAgICAgICAgZ29hbD17Z29hbH1cclxuICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgIDxWaWV3QmlkTkZUTW9kYWxcclxuICAgICAgICAgICAgICAgIHNob3c9e1ZpZXdtb2RhbFNob3d9XHJcbiAgICAgICAgICAgICAgICBvbkhpZGU9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRWaWV3TW9kYWxTaG93KGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBUaGlzIGlzIGEgcG9vciBpbXBsZW1lbnRhdGlvbiwgYmV0dGVyIHRvIGltcGxlbWVudCBhbiBldmVudCBsaXN0ZW5lclxyXG4gICAgICAgICAgICAgICAgICAgIEF1Y3Rpb25mZXRjaENvbnRyYWN0RGF0YSgpO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIGlkPXtzZWxlY3RpZH1cclxuICAgICAgICAgICAgICAgIHdhbGxldFR5cGU9e3dhbGxldFR5cGV9XHJcbiAgICAgICAgICAgICAgICB0aXRsZT17c2VsZWN0dGl0bGV9XHJcblxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8RG9uYXRlTkZUTW9kYWxcclxuICAgICAgICAgICAgICAgIHNob3c9e0NyZWF0ZW1vZGFsU2hvd31cclxuICAgICAgICAgICAgICAgIG9uSGlkZT17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldERvbmF0ZU1vZGFsU2hvdyhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gVGhpcyBpcyBhIHBvb3IgaW1wbGVtZW50YXRpb24sIGJldHRlciB0byBpbXBsZW1lbnQgYW4gZXZlbnQgbGlzdGVuZXJcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBFdmVudElEPXtldmVudElkfVxyXG4gICAgICAgICAgICAgICAgdHlwZT17c2VsZWN0dHlwZX1cclxuICAgICAgICAgICAgICAgIFNlbGVjdGVkVGl0bGU9e3RpdGxlfVxyXG4gICAgICAgICAgICAgICAgZW5kZGF0ZT17ZGF0ZX1cclxuICAgICAgICAgICAgLz5cclxuXHJcblxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSBmdW5jdGlvbigpIHsgcmV0dXJuIFwiMzIwOTNmN2IyYzAwZDIwODIwOTRcIjsgfSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUGFyYW1zIiwiZXZlbnRnZXRieWlkIiwidG9rZW5nZXRieWV2ZW50aWQiLCJCaWRORlRNb2RhbCIsIlZpZXdCaWRORlRNb2RhbCIsIkRvbmF0ZU5GVE1vZGFsIiwiQXVjdGlvbiIsInJlZ2V4Iiwic3RyIiwid2luZG93IiwibG9jYXRpb24iLCJzZWFyY2giLCJtIiwiaWQiLCJleGVjIiwiaW5kZXgiLCJsYXN0SW5kZXgiLCJjb25zb2xlIiwibG9nIiwiQ3JlYXRlbW9kYWxTaG93Iiwic2V0RG9uYXRlTW9kYWxTaG93IiwiZXZlbnRJZCIsInNldEV2ZW50SWQiLCJsaXN0Iiwic2V0TGlzdCIsInRpdGxlIiwic2V0VGl0bGUiLCJnb2FsdXNkIiwic2V0Z29hbHVzZCIsImdvYWwiLCJzZXRnb2FsIiwiZGF0ZWxlZnQiLCJzZXRkYXRlbGVmdCIsImRhdGUiLCJzZXRkYXRlIiwiZGF0ZWxlZnRCaWQiLCJzZXRkYXRlbGVmdEJpZCIsImxvZ28iLCJzZXRsb2dvIiwic2VsZWN0aWQiLCJzZXRzZWxlY3RpZCIsInNlbGVjdHRpdGxlIiwic2V0c2VsZWN0dGl0bGUiLCJzZWxlY3R0eXBlIiwic2V0c2VsZWN0dHlwZSIsInNlbGVjdHdhbGxldCIsInNldHNlbGVjdHdhbGxldCIsIndhbGxldFR5cGUiLCJzZXRXYWxsZXRUeXBlIiwic2VsZWN0YmlkIiwic2V0c2VsZWN0YmlkIiwiYm9vbFRydWUiLCJtb2RhbFNob3ciLCJzZXRNb2RhbFNob3ciLCJWaWV3bW9kYWxTaG93Iiwic2V0Vmlld01vZGFsU2hvdyIsImZvcm1hdHRlciIsIkludGwiLCJOdW1iZXJGb3JtYXQiLCJtaW5pbXVtRnJhY3Rpb25EaWdpdHMiLCJtYXhpbXVtRnJhY3Rpb25EaWdpdHMiLCJMZWZ0RGF0ZSIsImRhdGV0ZXh0IiwiYyIsIkRhdGUiLCJnZXRUaW1lIiwibiIsImQiLCJkYSIsIk1hdGgiLCJmbG9vciIsImgiLCJzIiwidG9TdHJpbmciLCJMZWZ0RGF0ZUJpZCIsIkF1Y3Rpb25mZXRjaENvbnRyYWN0RGF0YSIsInBhdGhuYW1lIiwibmVhclByaWNlIiwibmVhckN1cnJlbmN5VXJsIiwiY3VycmVuY3lfb3B0aW9ucyIsIm1ldGhvZCIsImhlYWRlcnMiLCJBY2NlcHQiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiY2F0Y2giLCJlcnIiLCJlcnJvciIsImRhdGEiLCJtYXJrZXRQYWlycyIsInByaWNlIiwiQWlydGFibGUiLCJyZXF1aXJlIiwiYmFzZSIsImFwaUtleSIsInJlY29yZCIsImdldElkIiwiZ2V0IiwiZm9ybWF0IiwiTnVtYmVyIiwic2V0SW50ZXJ2YWwiLCJjYWxjdWxhdGVUaW1lTGVmdCIsImFsbERhdGVzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5TmFtZSIsImkiLCJsZW5ndGgiLCJnZXRBdHRyaWJ1dGUiLCJpbm5lckhUTUwiLCJhY3RpdmF0ZVZpZXdCaWRNb2RhbCIsImUiLCJ0YXJnZXQiLCJhY3RpdmF0ZUJpZE5GVE1vZGFsIiwiYWN0aXZhdGVCaWRDcnlwdG9wdW5rVE1vZGFsIiwiYWN0aXZhdGVDcmVhdGVORlRNb2RhbCIsImFjdGl2YXRlQ3JlYXRlQ3J5cHRvcHVua01vZGFsIiwiZGlzcGxheSIsIndpZHRoIiwicG9zaXRpb24iLCJyb3dHYXAiLCJwYWRkaW5nVG9wIiwiZm9udFNpemUiLCJnYXAiLCJyaWdodCIsImNvbG9yIiwib3ZlcmZsb3ciLCJiYWNrZ3JvdW5kIiwidGV4dEFsaWduIiwiY3Vyc29yIiwiaGVpZ2h0IiwibWFyZ2luIiwicGFkZGluZyIsImZsb2F0IiwibGlzdEl0ZW0iLCJJZCIsInR5cGUiLCJpbWFnZSIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsIm1heFdpZHRoIiwiQmlkcHJpY2UiLCJ0b0ZpeGVkIiwid2FsbGV0Il0sInNvdXJjZVJvb3QiOiIifQ==