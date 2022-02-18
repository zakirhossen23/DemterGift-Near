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

                setEventId(record.getId());
                setTitle(record.get("title"));
                setWalletType(record.get("wallettype"));
                setgoalusd(formatter.format(Number(Number(record.get("Goal")) * nearPrice)));
                setgoal(Number(record.get("Goal")));
                setdateleft(LeftDate(record.get("endDate")));
                setdate(record.get("endDate"));
                setdateleftBid(LeftDateBid(record.get("endDate")));
                setlogo(record.get("logolink"));
                console.log('Retrieved', record.getId());
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
/******/ 	__webpack_require__.h = function() { return "459e4c99c4b435c287f6"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2luZGV4LjMyMDkzZjdiMmMwMGQyMDgyMDk0LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFFQTtBQUVlLFNBQVNTLE9BQVQsR0FBbUI7QUFDOUIsTUFBTUMsS0FBSyxHQUFHLFdBQWQ7QUFDQSxNQUFNQyxHQUFHLEdBQUdDLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsTUFBNUI7QUFDQSxNQUFJQyxDQUFKO0FBQ0EsTUFBSUMsRUFBRSxHQUFJLEVBQVY7O0FBQ0EsU0FBTyxDQUFDRCxDQUFDLEdBQUdMLEtBQUssQ0FBQ08sSUFBTixDQUFXTixHQUFYLENBQUwsTUFBMEIsSUFBakMsRUFBdUM7QUFDbkM7QUFDQSxRQUFJSSxDQUFDLENBQUNHLEtBQUYsS0FBWVIsS0FBSyxDQUFDUyxTQUF0QixFQUFpQztBQUM3QlQsTUFBQUEsS0FBSyxDQUFDUyxTQUFOO0FBQ0g7O0FBQ0RILElBQUFBLEVBQUUsR0FBR0QsQ0FBQyxDQUFDLENBQUQsQ0FBTjtBQUNIOztBQUdESyxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxRQUFaLEVBQXNCTCxFQUF0Qjs7QUFDQSxrQkFBOENmLCtDQUFRLENBQUMsS0FBRCxDQUF0RDtBQUFBO0FBQUEsTUFBT3FCLGVBQVA7QUFBQSxNQUF3QkMsa0JBQXhCOztBQUVBLG1CQUE4QnRCLCtDQUFRLENBQUNlLEVBQUQsQ0FBdEM7QUFBQTtBQUFBLE1BQU9RLE9BQVA7QUFBQSxNQUFnQkMsVUFBaEI7O0FBQ0EsbUJBQXdCeEIsK0NBQVEsQ0FBQyxFQUFELENBQWhDO0FBQUE7QUFBQSxNQUFPeUIsSUFBUDtBQUFBLE1BQWFDLE9BQWI7O0FBRUEsbUJBQTBCMUIsK0NBQVEsQ0FBQyxFQUFELENBQWxDO0FBQUE7QUFBQSxNQUFPMkIsS0FBUDtBQUFBLE1BQWNDLFFBQWQ7O0FBQ0EsbUJBQThCNUIsK0NBQVEsQ0FBQyxFQUFELENBQXRD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O0FBUUksY0FBVSxFQUFFUSxVQVJoQjtBQVNJLFNBQUssRUFBRU47QUFUWCxJQXJISixlQWlJSSxpREFBQyxxRkFBRDtBQUNJLFFBQUksRUFBRXRCLGVBRFY7QUFFSSxVQUFNLEVBQUUsa0JBQU07QUFDVkMsTUFBQUEsa0JBQWtCLENBQUMsS0FBRCxDQUFsQixDQURVLENBRVY7QUFDSCxLQUxMO0FBTUksV0FBTyxFQUFFQyxPQU5iO0FBT0ksUUFBSSxFQUFFc0IsVUFQVjtBQVFJLGlCQUFhLEVBQUVsQixLQVJuQjtBQVNJLFdBQU8sRUFBRVE7QUFUYixJQWpJSixDQURKO0FBaUpIOzs7Ozs7OztVQy9YRCxxQ0FBcUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZW1ldGVyZ2lmdC8uL3NyYy9wYWdlcy9kb25hdGlvbi9hdWN0aW9uL2luZGV4LmpzeCIsIndlYnBhY2s6Ly9kZW1ldGVyZ2lmdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgeyB1c2VQYXJhbXMgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xyXG5pbXBvcnQgeyBldmVudGdldGJ5aWQgfSBmcm9tICcuLi8uLi9FdmVudHMvZXZlbnQnXHJcbmltcG9ydCB7IHRva2VuZ2V0YnlldmVudGlkIH0gZnJvbSAnLi4vLi4vRXZlbnRzL3Rva2VuJ1xyXG5cclxuXHJcbmltcG9ydCBCaWRORlRNb2RhbCBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2NvbXBvbmVudHMvbW9kYWxzL0JpZE5GVE1vZGFsJztcclxuaW1wb3J0IFZpZXdCaWRORlRNb2RhbCBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2NvbXBvbmVudHMvbW9kYWxzL1ZpZXdCaWRORlRNb2RhbCc7XHJcblxyXG5pbXBvcnQgRG9uYXRlTkZUTW9kYWwgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9jb21wb25lbnRzL21vZGFscy9Eb25hdGVORlRNb2RhbCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBdWN0aW9uKCkge1xyXG4gICAgY29uc3QgcmVnZXggPSAvXFxbKC4qKVxcXS9nO1xyXG4gICAgY29uc3Qgc3RyID0gd2luZG93LmxvY2F0aW9uLnNlYXJjaDtcclxuICAgIGxldCBtO1xyXG4gICAgbGV0IGlkID0gIFwiXCI7XHJcbiAgICB3aGlsZSAoKG0gPSByZWdleC5leGVjKHN0cikpICE9PSBudWxsKSB7XHJcbiAgICAgICAgLy8gVGhpcyBpcyBuZWNlc3NhcnkgdG8gYXZvaWQgaW5maW5pdGUgbG9vcHMgd2l0aCB6ZXJvLXdpZHRoIG1hdGNoZXNcclxuICAgICAgICBpZiAobS5pbmRleCA9PT0gcmVnZXgubGFzdEluZGV4KSB7XHJcbiAgICAgICAgICAgIHJlZ2V4Lmxhc3RJbmRleCsrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZCA9IG1bMV07XHJcbiAgICB9XHJcblxyXG4gICAgXHJcbiAgICBjb25zb2xlLmxvZyhcImlkID0+IFwiLCBpZCk7XHJcbiAgICBjb25zdCBbQ3JlYXRlbW9kYWxTaG93LCBzZXREb25hdGVNb2RhbFNob3ddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIGNvbnN0IFtldmVudElkLCBzZXRFdmVudElkXSA9IHVzZVN0YXRlKGlkKTtcclxuICAgIGNvbnN0IFtsaXN0LCBzZXRMaXN0XSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgICBjb25zdCBbdGl0bGUsIHNldFRpdGxlXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtnb2FsdXNkLCBzZXRnb2FsdXNkXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtnb2FsLCBzZXRnb2FsXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtkYXRlbGVmdCwgc2V0ZGF0ZWxlZnRdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW2RhdGUsIHNldGRhdGVdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW2RhdGVsZWZ0QmlkLCBzZXRkYXRlbGVmdEJpZF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbbG9nbywgc2V0bG9nb10gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbc2VsZWN0aWQsIHNldHNlbGVjdGlkXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtzZWxlY3R0aXRsZSwgc2V0c2VsZWN0dGl0bGVdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3NlbGVjdHR5cGUsIHNldHNlbGVjdHR5cGVdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3NlbGVjdHdhbGxldCwgc2V0c2VsZWN0d2FsbGV0XSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFt3YWxsZXRUeXBlLCBzZXRXYWxsZXRUeXBlXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtzZWxlY3RiaWQsIHNldHNlbGVjdGJpZF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBib29sVHJ1ZSA9IHRydWU7XHJcbiAgICBjb25zdCBbbW9kYWxTaG93LCBzZXRNb2RhbFNob3ddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW1ZpZXdtb2RhbFNob3csIHNldFZpZXdNb2RhbFNob3ddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuXHJcblxyXG4gICAgY29uc3QgZm9ybWF0dGVyID0gbmV3IEludGwuTnVtYmVyRm9ybWF0KCdlbi1VUycsIHtcclxuICAgICAgICBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDIsXHJcbiAgICAgICAgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAyLFxyXG4gICAgfSk7XHJcblxyXG4gICAgZnVuY3Rpb24gTGVmdERhdGUoZGF0ZXRleHQpIHtcclxuICAgICAgICB2YXIgYyA9IG5ldyBEYXRlKGRhdGV0ZXh0KS5nZXRUaW1lKCk7XHJcbiAgICAgICAgdmFyIG4gPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgICAgICB2YXIgZCA9IGMgLSBuO1xyXG4gICAgICAgIHZhciBkYSA9IE1hdGguZmxvb3IoZCAvICgxMDAwICogNjAgKiA2MCAqIDI0KSk7XHJcbiAgICAgICAgdmFyIGggPSBNYXRoLmZsb29yKChkICUgKDEwMDAgKiA2MCAqIDYwICogMjQpKSAvICgxMDAwICogNjAgKiA2MCkpO1xyXG4gICAgICAgIHZhciBtID0gTWF0aC5mbG9vcigoZCAlICgxMDAwICogNjAgKiA2MCkpIC8gKDEwMDAgKiA2MCkpO1xyXG4gICAgICAgIHZhciBzID0gTWF0aC5mbG9vcigoZCAlICgxMDAwICogNjApKSAvIDEwMDApO1xyXG4gICAgICAgIHJldHVybiAoZGEudG9TdHJpbmcoKSArIFwiIERheXMgXCIgKyBoLnRvU3RyaW5nKCkgKyBcIiBob3VycyBcIiArIG0udG9TdHJpbmcoKSArIFwiIG1pbnV0ZXMgXCIgKyBzLnRvU3RyaW5nKCkgKyBcIiBzZWNvbmRzXCIpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gTGVmdERhdGVCaWQoZGF0ZXRleHQpIHtcclxuICAgICAgICB2YXIgYyA9IG5ldyBEYXRlKGRhdGV0ZXh0KS5nZXRUaW1lKCk7XHJcbiAgICAgICAgdmFyIG4gPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgICAgICB2YXIgZCA9IGMgLSBuO1xyXG4gICAgICAgIHZhciBkYSA9IE1hdGguZmxvb3IoZCAvICgxMDAwICogNjAgKiA2MCAqIDI0KSk7XHJcbiAgICAgICAgdmFyIGggPSBNYXRoLmZsb29yKChkICUgKDEwMDAgKiA2MCAqIDYwICogMjQpKSAvICgxMDAwICogNjAgKiA2MCkpO1xyXG4gICAgICAgIHZhciBtID0gTWF0aC5mbG9vcigoZCAlICgxMDAwICogNjAgKiA2MCkpIC8gKDEwMDAgKiA2MCkpO1xyXG4gICAgICAgIHZhciBzID0gTWF0aC5mbG9vcigoZCAlICgxMDAwICogNjApKSAvIDEwMDApO1xyXG4gICAgICAgIHJldHVybiAoZGEudG9TdHJpbmcoKSArIFwiZCBcIiArIGgudG9TdHJpbmcoKSArIFwiaCBcIiArIG0udG9TdHJpbmcoKSArIFwibSBcIiArIHMudG9TdHJpbmcoKSArIFwic1wiKTtcclxuICAgIH1cclxuICAgIGFzeW5jIGZ1bmN0aW9uIEF1Y3Rpb25mZXRjaENvbnRyYWN0RGF0YSgpIHtcclxuICAgICAgICBpZiAoaWQgJiYgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lID09IFwiL2RvbmF0aW9uL2F1Y3Rpb25cIikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInN0YXJ0ZWQgY2hla2NpbmdcIik7XHJcbiAgICAgICAgICAgICAgICBsZXQgbmVhclByaWNlID0gMDtcclxuICAgICAgICAgICAgLy9ORUFSIGN1cnJlbmN5XHJcbiAgICAgICAgICAgIHRyeSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIG5lYXJDdXJyZW5jeVVybCA9IFwiaHR0cHM6Ly9hcGkuY29pbm1hcmtldGNhcC5jb20vZGF0YS1hcGkvdjMvY3J5cHRvY3VycmVuY3kvbWFya2V0LXBhaXJzL2xhdGVzdD9zbHVnPW5lYXItcHJvdG9jb2wmc3RhcnQ9MSZsaW1pdD0xJmNhdGVnb3J5PXNwb3Qmc29ydD1jbWNfcmFua19hZHZhbmNlZFwiO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY3VycmVuY3lfb3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbiwgdGV4dC9wbGFpbiwgKi8qJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgZmV0Y2gobmVhckN1cnJlbmN5VXJsLCBjdXJyZW5jeV9vcHRpb25zKS50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGpzb24gPT4gbmVhclByaWNlID0ganNvbilcclxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoJ2Vycm9yOicgKyBlcnIpKTtcclxuICAgICAgICAgICAgICAgIG5lYXJQcmljZSA9IG5lYXJQcmljZS5kYXRhLm1hcmtldFBhaXJzWzBdLnByaWNlO1xyXG5cclxuICAgICAgICAgICAgfSBjYXRjaCAoZXgpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGV4KTtcclxuXHJcbiAgICAgICAgICAgICAgICBuZWFyUHJpY2UgPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBBaXJ0YWJsZSA9IHJlcXVpcmUoJ2FpcnRhYmxlJyk7XHJcbiAgICAgICAgICAgIHZhciBiYXNlID0gbmV3IEFpcnRhYmxlKHthcGlLZXk6ICdrZXlSMVJyY2w5TzJzOWJUcyd9KS5iYXNlKCdhcHBnYlJDcGJrem1kY3VjTycpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICBhd2FpdCBiYXNlKCdldmVudHMnKS5maW5kKGlkLCBmdW5jdGlvbihlcnIsIHJlY29yZCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVycikgeyBjb25zb2xlLmVycm9yKGVycik7IHJldHVybjsgfVxyXG5cclxuICAgICAgICAgICAgICAgIHNldEV2ZW50SWQocmVjb3JkLmdldElkKCkpO1xyXG5cclxuICAgICAgICAgICAgICAgIHNldFRpdGxlKHJlY29yZC5nZXQoXCJ0aXRsZVwiKSk7XHJcbiAgICAgICAgICAgICAgICBzZXRXYWxsZXRUeXBlKHJlY29yZC5nZXQoXCJ3YWxsZXR0eXBlXCIpKTtcclxuICAgICAgICAgICAgICAgIHNldGdvYWx1c2QoZm9ybWF0dGVyLmZvcm1hdChOdW1iZXIoTnVtYmVyKHJlY29yZC5nZXQoXCJHb2FsXCIpKSAqIG5lYXJQcmljZSkpKTtcclxuICAgICAgICAgICAgICAgIHNldGdvYWwoTnVtYmVyKHJlY29yZC5nZXQoXCJHb2FsXCIpKSk7XHJcbiAgICAgICAgICAgICAgICBzZXRkYXRlbGVmdChMZWZ0RGF0ZShyZWNvcmQuZ2V0KFwiZW5kRGF0ZVwiKSkpO1xyXG4gICAgICAgICAgICAgICAgc2V0ZGF0ZShyZWNvcmQuZ2V0KFwiZW5kRGF0ZVwiKSk7XHJcbiAgICAgICAgICAgICAgICBzZXRkYXRlbGVmdEJpZChMZWZ0RGF0ZUJpZChyZWNvcmQuZ2V0KFwiZW5kRGF0ZVwiKSkpO1xyXG4gICAgICAgICAgICAgICAgc2V0bG9nbyhyZWNvcmQuZ2V0KFwibG9nb2xpbmtcIikpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdSZXRyaWV2ZWQnLCByZWNvcmQuZ2V0SWQoKSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gd2hpbGUgKGJvb2xUcnVlKSB7XHJcbiAgICAgICAgICAgIC8vICAgICB0cnkge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIHNldEV2ZW50SWQoaWQpO1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIGNvbnN0IHZhbHVlID0gYXdhaXQgZXZlbnRnZXRieWlkKGlkKTtcclxuICAgICAgICAgICAgLy8gICAgICAgICBjb25zdCBhcnIgPSBbXTtcclxuICAgICAgICAgICAgLy8gICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZSk7XHJcblxyXG4gICAgICAgICAgICAvLyAgICAgICAgIGNvbnN0IHRvdGFsVG9rZW5zID0gYXdhaXQgdG9rZW5nZXRieWV2ZW50aWQoaWQpO1xyXG5cclxuICAgICAgICAgICAgLy8gICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvdGFsVG9rZW5zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIGNvbnN0IG9iamVjdCA9IGF3YWl0IHRvdGFsVG9rZW5zW2ldO1xyXG5cclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgaWYgKG9iamVjdC5uYW1lKSB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICB2YXIgcHJpY2VkZXMxID0gMDtcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIGxldCBwcmljZTJVc2QgPSAwXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICB0cnkge1xyXG5cclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBwcmljZTJVc2QgPSBOdW1iZXIob2JqZWN0LnByaWNlICogbmVhclByaWNlKTtcclxuXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICB9IGNhdGNoIChleCkgeyB9XHJcblxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgYXJyLnB1c2goe1xyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIElkOiBvYmplY3QuaWQsXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgbmFtZTogb2JqZWN0Lm5hbWUsXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IG9iamVjdC5kZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBCaWRwcmljZTogcHJpY2UyVXNkLFxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIHByaWNlOiBOdW1iZXIob2JqZWN0LnByaWNlKSxcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICB0eXBlOiBvYmplY3QudHlwZSxcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBpbWFnZTogb2JqZWN0LmltYWdlLFxyXG5cclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgc2V0TGlzdChhcnIpO1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIkxvYWRpbmdcIikpXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiTG9hZGluZ1wiKS5zdHlsZSA9IFwiZGlzcGxheTpub25lXCI7XHJcblxyXG4gICAgICAgICAgICAvLyAgICAgICAgIHNldHNlbGVjdHdhbGxldCh2YWx1ZS53YWxsZXQpO1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKHZhbHVlLndhbGxldCk7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgc2V0VGl0bGUodmFsdWUudGl0bGUpO1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIHNldFdhbGxldFR5cGUodmFsdWUud2FsbGV0dHlwZSk7XHJcblxyXG4gICAgICAgICAgICAvLyAgICAgICAgIHNldGdvYWx1c2QoZm9ybWF0dGVyLmZvcm1hdChOdW1iZXIodmFsdWUuR29hbCAqIG5lYXJQcmljZSkpKTtcclxuICAgICAgICAgICAgLy8gICAgICAgICBzZXRnb2FsKE51bWJlcih2YWx1ZS5Hb2FsKSk7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgc2V0ZGF0ZWxlZnQoTGVmdERhdGUodmFsdWUuZW5kRGF0ZSkpO1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIHNldGRhdGUodmFsdWUuZW5kRGF0ZSk7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgc2V0ZGF0ZWxlZnRCaWQoTGVmdERhdGVCaWQodmFsdWUuZW5kRGF0ZSkpO1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIHNldGxvZ28odmFsdWUubG9nb2xpbmspO1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAvLyAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgLy8gICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgQXVjdGlvbmZldGNoQ29udHJhY3REYXRhKCk7XHJcblxyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjYWxjdWxhdGVUaW1lTGVmdCgpO1xyXG4gICAgfSwgMTAwMCk7XHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIGNhbGN1bGF0ZVRpbWVMZWZ0KCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHZhciBhbGxEYXRlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKFwiZGF0ZWxlZnRcIik7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsRGF0ZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHZhciBkYXRlID0gKGFsbERhdGVzW2ldKS5nZXRBdHRyaWJ1dGUoXCJkYXRlXCIpO1xyXG4gICAgICAgICAgICAgICAgYWxsRGF0ZXNbaV0uaW5uZXJIVE1MID0gTGVmdERhdGUoZGF0ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIGFsbERhdGVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoXCJkYXRlXCIpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbERhdGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZGF0ZSA9IChhbGxEYXRlc1tpXSkuZ2V0QXR0cmlidXRlKFwiZGF0ZVwiKTtcclxuICAgICAgICAgICAgICAgIGFsbERhdGVzW2ldLmlubmVySFRNTCA9IExlZnREYXRlQmlkKGRhdGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHt9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gYWN0aXZhdGVWaWV3QmlkTW9kYWwoZSkge1xyXG4gICAgICAgIHNldHNlbGVjdGlkKGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcInRva2VuaWRcIikpO1xyXG4gICAgICAgIHNldHNlbGVjdHRpdGxlKGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcInRpdGxlXCIpKTtcclxuXHJcbiAgICAgICAgc2V0Vmlld01vZGFsU2hvdyh0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBhY3RpdmF0ZUJpZE5GVE1vZGFsKGUpIHtcclxuICAgICAgICBzZXRzZWxlY3RpZChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJ0b2tlbmlkXCIpKTtcclxuICAgICAgICBzZXRzZWxlY3RiaWQoZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiaGlnaGVzdGJpZFwiKSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coc2VsZWN0YmlkKTtcclxuICAgICAgICBzZXRzZWxlY3R0eXBlKFwiTkZUXCIpO1xyXG4gICAgICAgIHNldE1vZGFsU2hvdyh0cnVlKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGFjdGl2YXRlQmlkQ3J5cHRvcHVua1RNb2RhbChlKSB7XHJcbiAgICAgICAgc2V0c2VsZWN0aWQoZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwidG9rZW5pZFwiKSk7XHJcbiAgICAgICAgc2V0c2VsZWN0dHlwZShcIkNyeXB0b3B1bmtcIik7XHJcbiAgICAgICAgc2V0c2VsZWN0YmlkKGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImhpZ2hlc3RiaWRcIikpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHNlbGVjdGJpZCk7XHJcblxyXG4gICAgICAgIHNldE1vZGFsU2hvdyh0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBhY3RpdmF0ZUNyZWF0ZU5GVE1vZGFsKGUpIHtcclxuICAgICAgICBzZXRzZWxlY3R0eXBlKFwiTkZUXCIpO1xyXG5cclxuICAgICAgICBzZXREb25hdGVNb2RhbFNob3codHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gYWN0aXZhdGVDcmVhdGVDcnlwdG9wdW5rTW9kYWwoZSkge1xyXG4gICAgICAgIHNldHNlbGVjdHR5cGUoXCJDcnlwdG9wdW5rXCIpO1xyXG5cclxuICAgICAgICBzZXREb25hdGVNb2RhbFNob3codHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gPGRpdiBjbGFzc05hbWU9XCJyb3cgRXZlbnRDb250YWluZXJcIiA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZSdcclxuICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtsb2dvfSBjbGFzc05hbWU9XCJBdWN0aW9uSW1hZ2VcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiRGV0aWFsc0NvbnRhaW5lclwiIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvd0dhcDogJzE2cHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nVG9wOiAnNzBweCdcclxuICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0IHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzJ2dydcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX0gPnt0aXRsZX08L2g0PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J1RleHRDb250YWluZXInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcydncnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5Hb2FsOiA8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcydncnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT4kIHtnb2FsdXNkfSAoe2dvYWx9IHt3YWxsZXRUeXBlfSk8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J1RleHRDb250YWluZXInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcydncnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSBuYW1lPSdkYXRlbGVmdCcgZGF0ZT17ZGF0ZX0+e2RhdGVsZWZ0fTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZ2FwOiAnMTRweCcsIHBvc2l0aW9uOiAnYWJzb2x1dGUnLCByaWdodDogJzI1cHgnIH19ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXthY3RpdmF0ZUNyZWF0ZU5GVE1vZGFsfSBjbGFzc05hbWU9XCJjYXJkXCIgc3R5bGU9e3sgY29sb3I6ICd3aGl0ZScsIG92ZXJmbG93OiAnaGlkZGVuJywgYmFja2dyb3VuZDogJyMwQkQ2QkUnLCB0ZXh0QWxpZ246ICdjZW50ZXInLCB3aWR0aDogJzE3MnB4JywgY3Vyc29yOiAncG9pbnRlcicsIGhlaWdodDogJzQ4cHgnLCBtYXJnaW46ICcwJywgcGFkZGluZzogJzBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9e2FjdGl2YXRlQ3JlYXRlTkZUTW9kYWx9IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiIHN0eWxlPXt7IGhlaWdodDogJzEwMCUnLCBwYWRkaW5nVG9wOiAnMjFweCcsIGZvbnRTaXplOiAnMjFweCcgfX0+RG9uYXRlIE5GVDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCIgb25DbGljaz17YWN0aXZhdGVDcmVhdGVDcnlwdG9wdW5rTW9kYWx9IHN0eWxlPXt7IGNvbG9yOiAnd2hpdGUnLCBvdmVyZmxvdzogJ2hpZGRlbicsIGJhY2tncm91bmQ6ICcjMEJENkJFJywgdGV4dEFsaWduOiAnY2VudGVyJywgY3Vyc29yOiAncG9pbnRlcicsIGZsb2F0OiAncmlnaHQnLCB3aWR0aDogJzIwMnB4JywgaGVpZ2h0OiAnNDhweCcsIHBhZGRpbmc6ICcwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXthY3RpdmF0ZUNyZWF0ZUNyeXB0b3B1bmtNb2RhbH0gY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCIgc3R5bGU9e3sgaGVpZ2h0OiAnMTAwJScsIHBhZGRpbmdUb3A6ICcyMXB4JywgZm9udFNpemU6ICcyMXB4JyB9fT5Eb25hdGUgQ3J5cHRvcHVuazwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBpZD0nTG9hZGluZycgY2xhc3NOYW1lPVwiTG9hZGluZ0FyZWFcIj5cclxuICAgICAgICAgICAgICAgIDxoMT5Mb2FkaW5nLi4uPC9oMT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHtsaXN0Lm1hcCgobGlzdEl0ZW0pID0+IChcclxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtsaXN0SXRlbS5JZH0gY2xhc3NOYW1lPVwicm93IEVsZW1lbnRzQ29udGFpbmVyIGJnV2hpdGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4J1xyXG4gICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7bGlzdEl0ZW0udHlwZSA9PSBcIkNyeXB0b3B1bmtcIiA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtsaXN0SXRlbS5pbWFnZX0gY2xhc3NOYW1lPVwiQXVjdGlvbkJpZEltYWdlIHBpeGVsXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtsaXN0SXRlbS5pbWFnZX0gY2xhc3NOYW1lPVwiQXVjdGlvbkJpZEltYWdlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJEZXRpYWxzQ29udGFpbmVyXCIgc3R5bGU9e3sgcm93R2FwOiBcIjVweFwiIH19ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgc3R5bGU9e3sgZm9udFNpemU6ICcydncnIH19ID57bGlzdEl0ZW0ubmFtZX08L2gyPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgc3R5bGU9e3sgY29sb3I6IFwicmdiKDEzOSwgMTM5LCAxMzkpXCIsIGZvbnRTaXplOiAnMS43dncnIH19PlR5cGU6IHtsaXN0SXRlbS50eXBlfTwvaDQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiVGV4dENvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgc3R5bGU9e3sgY29sb3I6IFwiIzhCOEI4QlwiLCBmb250U2l6ZTogJzEuN3Z3JyB9fT57bGlzdEl0ZW0uZGVzY3JpcHRpb259PC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J0VsZW1lbnRCb3R0b21Db250YWluZXInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWF4V2lkdGg6IFwiMjE2cHhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIHN0eWxlPXt7IGZvbnRTaXplOiAnMXZ3JyB9fSBjbGFzc05hbWU9XCJzbWFsbGdyZXlcIj5DdXJyZW50IGJpZDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBzdHlsZT17eyBmb250U2l6ZTogJzEuN3Z3JyB9fSBjbGFzc05hbWU9J2JpZHByaWNlJz4kIHtsaXN0SXRlbS5CaWRwcmljZS50b0ZpeGVkKDIpfSAoe2xpc3RJdGVtLnByaWNlfSB7d2FsbGV0VHlwZX0pPC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg3IHN0eWxlPXt7IGZvbnRTaXplOiAnMXZ3JyB9fSBuYW1lPVwiZGF0ZVwiIGRhdGU9e2RhdGV9IGNsYXNzTmFtZT1cInNtYWxsZ3JleVwiPntkYXRlbGVmdEJpZH08L2g3PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdCaWRBbGxjb250YWluZXInID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J0JpZHNidXR0b24nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB0b2tlbmlkPXtsaXN0SXRlbS5JZH0gdGl0bGU9e2xpc3RJdGVtLm5hbWV9IG9uQ2xpY2s9e2FjdGl2YXRlVmlld0JpZE1vZGFsfSBjbGFzc05hbWU9XCJCaWRjb250YWluZXIgY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB0b2tlbmlkPXtsaXN0SXRlbS5JZH0gdGl0bGU9e2xpc3RJdGVtLm5hbWV9IGNsYXNzTmFtZT1cImNhcmQgQmlkY29udGFpbmVyQ2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHRva2VuaWQ9e2xpc3RJdGVtLklkfSB0aXRsZT17bGlzdEl0ZW0ubmFtZX0gY2xhc3NOYW1lPVwiY2FyZC1ib2R5IGJpZGJ1dHRvblRleHRcIj5WaWV3PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xpc3RJdGVtLnR5cGUgPT0gXCJDcnlwdG9wdW5rXCIgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB0b2tlbmlkPXtsaXN0SXRlbS5JZH0gd2FsbGV0PXtsaXN0SXRlbS53YWxsZXR9IGhpZ2hlc3RiaWQ9e2xpc3RJdGVtLnByaWNlfSBjbGFzc05hbWU9XCJCaWRjb250YWluZXIgY29sXCIgb25DbGljaz17YWN0aXZhdGVCaWRDcnlwdG9wdW5rVE1vZGFsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB0b2tlbmlkPXtsaXN0SXRlbS5JZH0gd2FsbGV0PXtsaXN0SXRlbS53YWxsZXR9IGhpZ2hlc3RiaWQ9e2xpc3RJdGVtLnByaWNlfSBjbGFzc05hbWU9XCJjYXJkIEJpZGNvbnRhaW5lckNhcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdG9rZW5pZD17bGlzdEl0ZW0uSWR9IHdhbGxldD17bGlzdEl0ZW0ud2FsbGV0fSBoaWdoZXN0YmlkPXtsaXN0SXRlbS5wcmljZX0gY2xhc3NOYW1lPVwiY2FyZC1ib2R5IGJpZGJ1dHRvblRleHRcIj5CaWQ8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdG9rZW5pZD17bGlzdEl0ZW0uSWR9IHdhbGxldD17bGlzdEl0ZW0ud2FsbGV0fSBoaWdoZXN0YmlkPXtsaXN0SXRlbS5wcmljZX0gZ29hbFNjb3JlPXtnb2FsfSBjbGFzc05hbWU9XCJCaWRjb250YWluZXIgY29sXCIgb25DbGljaz17YWN0aXZhdGVCaWRORlRNb2RhbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdG9rZW5pZD17bGlzdEl0ZW0uSWR9IHdhbGxldD17bGlzdEl0ZW0ud2FsbGV0fSBoaWdoZXN0YmlkPXtsaXN0SXRlbS5wcmljZX0gY2xhc3NOYW1lPVwiY2FyZCBCaWRjb250YWluZXJDYXJkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHRva2VuaWQ9e2xpc3RJdGVtLklkfSB3YWxsZXQ9e2xpc3RJdGVtLndhbGxldH0gaGlnaGVzdGJpZD17bGlzdEl0ZW0ucHJpY2V9IGNsYXNzTmFtZT1cImNhcmQtYm9keSBiaWRidXR0b25UZXh0XCI+QmlkPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDxCaWRORlRNb2RhbFxyXG4gICAgICAgICAgICAgICAgc2hvdz17bW9kYWxTaG93fVxyXG4gICAgICAgICAgICAgICAgb25IaWRlPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0TW9kYWxTaG93KGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBUaGlzIGlzIGEgcG9vciBpbXBsZW1lbnRhdGlvbiwgYmV0dGVyIHRvIGltcGxlbWVudCBhbiBldmVudCBsaXN0ZW5lclxyXG4gICAgICAgICAgICAgICAgICAgIEF1Y3Rpb25mZXRjaENvbnRyYWN0RGF0YSgpO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIHRva2VuSWQ9e3NlbGVjdGlkfVxyXG4gICAgICAgICAgICAgICAgdHlwZT17c2VsZWN0dHlwZX1cclxuICAgICAgICAgICAgICAgIFRvQWRkcmVzcz17c2VsZWN0d2FsbGV0fVxyXG4gICAgICAgICAgICAgICAgZXZlbnRJZD17ZXZlbnRJZH1cclxuICAgICAgICAgICAgICAgIEhpZ2hlc3RiaWQ9e3NlbGVjdGJpZH1cclxuICAgICAgICAgICAgICAgIHdhbGxldFR5cGU9e3dhbGxldFR5cGV9XHJcbiAgICAgICAgICAgICAgICBnb2FsPXtnb2FsfVxyXG4gICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgPFZpZXdCaWRORlRNb2RhbFxyXG4gICAgICAgICAgICAgICAgc2hvdz17Vmlld21vZGFsU2hvd31cclxuICAgICAgICAgICAgICAgIG9uSGlkZT17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFZpZXdNb2RhbFNob3coZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFRoaXMgaXMgYSBwb29yIGltcGxlbWVudGF0aW9uLCBiZXR0ZXIgdG8gaW1wbGVtZW50IGFuIGV2ZW50IGxpc3RlbmVyXHJcbiAgICAgICAgICAgICAgICAgICAgQXVjdGlvbmZldGNoQ29udHJhY3REYXRhKCk7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgaWQ9e3NlbGVjdGlkfVxyXG4gICAgICAgICAgICAgICAgd2FsbGV0VHlwZT17d2FsbGV0VHlwZX1cclxuICAgICAgICAgICAgICAgIHRpdGxlPXtzZWxlY3R0aXRsZX1cclxuXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxEb25hdGVORlRNb2RhbFxyXG4gICAgICAgICAgICAgICAgc2hvdz17Q3JlYXRlbW9kYWxTaG93fVxyXG4gICAgICAgICAgICAgICAgb25IaWRlPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0RG9uYXRlTW9kYWxTaG93KGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBUaGlzIGlzIGEgcG9vciBpbXBsZW1lbnRhdGlvbiwgYmV0dGVyIHRvIGltcGxlbWVudCBhbiBldmVudCBsaXN0ZW5lclxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIEV2ZW50SUQ9e2V2ZW50SWR9XHJcbiAgICAgICAgICAgICAgICB0eXBlPXtzZWxlY3R0eXBlfVxyXG4gICAgICAgICAgICAgICAgU2VsZWN0ZWRUaXRsZT17dGl0bGV9XHJcbiAgICAgICAgICAgICAgICBlbmRkYXRlPXtkYXRlfVxyXG4gICAgICAgICAgICAvPlxyXG5cclxuXHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59XHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gXCI0NTllNGM5OWM0YjQzNWMyODdmNlwiOyB9Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VQYXJhbXMiLCJldmVudGdldGJ5aWQiLCJ0b2tlbmdldGJ5ZXZlbnRpZCIsIkJpZE5GVE1vZGFsIiwiVmlld0JpZE5GVE1vZGFsIiwiRG9uYXRlTkZUTW9kYWwiLCJBdWN0aW9uIiwicmVnZXgiLCJzdHIiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInNlYXJjaCIsIm0iLCJpZCIsImV4ZWMiLCJpbmRleCIsImxhc3RJbmRleCIsImNvbnNvbGUiLCJsb2ciLCJDcmVhdGVtb2RhbFNob3ciLCJzZXREb25hdGVNb2RhbFNob3ciLCJldmVudElkIiwic2V0RXZlbnRJZCIsImxpc3QiLCJzZXRMaXN0IiwidGl0bGUiLCJzZXRUaXRsZSIsImdvYWx1c2QiLCJzZXRnb2FsdXNkIiwiZ29hbCIsInNldGdvYWwiLCJkYXRlbGVmdCIsInNldGRhdGVsZWZ0IiwiZGF0ZSIsInNldGRhdGUiLCJkYXRlbGVmdEJpZCIsInNldGRhdGVsZWZ0QmlkIiwibG9nbyIsInNldGxvZ28iLCJzZWxlY3RpZCIsInNldHNlbGVjdGlkIiwic2VsZWN0dGl0bGUiLCJzZXRzZWxlY3R0aXRsZSIsInNlbGVjdHR5cGUiLCJzZXRzZWxlY3R0eXBlIiwic2VsZWN0d2FsbGV0Iiwic2V0c2VsZWN0d2FsbGV0Iiwid2FsbGV0VHlwZSIsInNldFdhbGxldFR5cGUiLCJzZWxlY3RiaWQiLCJzZXRzZWxlY3RiaWQiLCJib29sVHJ1ZSIsIm1vZGFsU2hvdyIsInNldE1vZGFsU2hvdyIsIlZpZXdtb2RhbFNob3ciLCJzZXRWaWV3TW9kYWxTaG93IiwiZm9ybWF0dGVyIiwiSW50bCIsIk51bWJlckZvcm1hdCIsIm1pbmltdW1GcmFjdGlvbkRpZ2l0cyIsIm1heGltdW1GcmFjdGlvbkRpZ2l0cyIsIkxlZnREYXRlIiwiZGF0ZXRleHQiLCJjIiwiRGF0ZSIsImdldFRpbWUiLCJuIiwiZCIsImRhIiwiTWF0aCIsImZsb29yIiwiaCIsInMiLCJ0b1N0cmluZyIsIkxlZnREYXRlQmlkIiwiQXVjdGlvbmZldGNoQ29udHJhY3REYXRhIiwicGF0aG5hbWUiLCJuZWFyUHJpY2UiLCJuZWFyQ3VycmVuY3lVcmwiLCJjdXJyZW5jeV9vcHRpb25zIiwibWV0aG9kIiwiaGVhZGVycyIsIkFjY2VwdCIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJjYXRjaCIsImVyciIsImVycm9yIiwiZGF0YSIsIm1hcmtldFBhaXJzIiwicHJpY2UiLCJBaXJ0YWJsZSIsInJlcXVpcmUiLCJiYXNlIiwiYXBpS2V5IiwicmVjb3JkIiwiZ2V0SWQiLCJnZXQiLCJmb3JtYXQiLCJOdW1iZXIiLCJzZXRJbnRlcnZhbCIsImNhbGN1bGF0ZVRpbWVMZWZ0IiwiYWxsRGF0ZXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlOYW1lIiwiaSIsImxlbmd0aCIsImdldEF0dHJpYnV0ZSIsImlubmVySFRNTCIsImFjdGl2YXRlVmlld0JpZE1vZGFsIiwiZSIsInRhcmdldCIsImFjdGl2YXRlQmlkTkZUTW9kYWwiLCJhY3RpdmF0ZUJpZENyeXB0b3B1bmtUTW9kYWwiLCJhY3RpdmF0ZUNyZWF0ZU5GVE1vZGFsIiwiYWN0aXZhdGVDcmVhdGVDcnlwdG9wdW5rTW9kYWwiLCJkaXNwbGF5Iiwid2lkdGgiLCJwb3NpdGlvbiIsInJvd0dhcCIsInBhZGRpbmdUb3AiLCJmb250U2l6ZSIsImdhcCIsInJpZ2h0IiwiY29sb3IiLCJvdmVyZmxvdyIsImJhY2tncm91bmQiLCJ0ZXh0QWxpZ24iLCJjdXJzb3IiLCJoZWlnaHQiLCJtYXJnaW4iLCJwYWRkaW5nIiwiZmxvYXQiLCJsaXN0SXRlbSIsIklkIiwidHlwZSIsImltYWdlIiwibmFtZSIsImRlc2NyaXB0aW9uIiwibWF4V2lkdGgiLCJCaWRwcmljZSIsInRvRml4ZWQiLCJ3YWxsZXQiXSwic291cmNlUm9vdCI6IiJ9