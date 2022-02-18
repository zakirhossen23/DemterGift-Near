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
      var _context, nearPrice, nearCurrencyUrl, currency_options, Airtable, base, arr;

      return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (!(id && window.location.pathname == "/donation/auction")) {
                _context2.next = 23;
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
              arr = [];
              _context2.next = 22;
              return base('nftcryptopunks').select({
                // Selecting the first 10 records in Grid view:
                maxRecords: 10,
                sort: [{
                  field: "Bidprice",
                  direction: "desc"
                }],
                view: "Grid view"
              }).eachPage(function page(records, fetchNextPage) {
                // This function (`page`) will get called for each page of records.
                var arr = [];
                records.forEach(function (record) {
                  var goalPrice2usd = 0;
                  goalPrice2usd = Number(Number(record.get("price")) * nearPrice);
                  arr.push({
                    Id: record.getId(),
                    name: record.get("name"),
                    description: record.get("description"),
                    Bidprice: goalPrice2usd,
                    price: Number(record.get("price")),
                    type: record.get("type"),
                    image: record.get("image")
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

            case 22:
              if (document.getElementById("Loading")) document.getElementById("Loading").style = "display:none"; // while (boolTrue) {
              //     try {
              //         setEventId(id);
              //         const value = await eventgetbyid(id);
              //         const arr = [];
              //         console.log(value);
              //         const totalTokens = await tokengetbyeventid(id);
              //         for (let i = 0; i < totalTokens.length; i++) {
              //             const object = await totalTokens[i];
              //             if (object.name) {
              //                 var pricedes1 = 0;
              //                 let price2Usd = 0
              //                 try {
              //                     price2Usd = Number(object.price * nearPrice);
              //                 } catch (ex) { }
              //                 arr.push({
              //                     Id: object.id,
              //                     name: object.name,
              //                     description: object.description,
              //                     Bidprice: price2Usd,
              //                     price: Number(object.price),
              //                     type: object.type,
              //                     image: object.image,
              //                 });
              //             }
              //         }
              //         setList(arr);
              //         if (document.getElementById("Loading"))
              //             document.getElementById("Loading").style = "display:none";
              //         setselectwallet(value.wallet);
              //         console.log(value.wallet);
              //         setTitle(value.title);
              //         setWalletType(value.wallettype);
              //         setgoalusd(formatter.format(Number(value.Goal * nearPrice)));
              //         setgoal(Number(value.Goal));
              //         setdateleft(LeftDate(value.endDate));
              //         setdate(value.endDate);
              //         setdateleftBid(LeftDateBid(value.endDate));
              //         setlogo(value.logolink);
              //         break;
              //     } catch (error) {
              //         continue;
              //     }
              // }

            case 23:
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
/******/ 	__webpack_require__.h = function() { return "f39d478942b6d1e8a8ff"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2luZGV4LjU5ZTcyYmI4NDUxZmRiNzk2ZTQwLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFFQTtBQUVlLFNBQVNTLE9BQVQsR0FBbUI7QUFDOUIsTUFBTUMsS0FBSyxHQUFHLFdBQWQ7QUFDQSxNQUFNQyxHQUFHLEdBQUdDLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsTUFBNUI7QUFDQSxNQUFJQyxDQUFKO0FBQ0EsTUFBSUMsRUFBRSxHQUFJLEVBQVY7O0FBQ0EsU0FBTyxDQUFDRCxDQUFDLEdBQUdMLEtBQUssQ0FBQ08sSUFBTixDQUFXTixHQUFYLENBQUwsTUFBMEIsSUFBakMsRUFBdUM7QUFDbkM7QUFDQSxRQUFJSSxDQUFDLENBQUNHLEtBQUYsS0FBWVIsS0FBSyxDQUFDUyxTQUF0QixFQUFpQztBQUM3QlQsTUFBQUEsS0FBSyxDQUFDUyxTQUFOO0FBQ0g7O0FBQ0RILElBQUFBLEVBQUUsR0FBR0QsQ0FBQyxDQUFDLENBQUQsQ0FBTjtBQUNIOztBQUdESyxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxRQUFaLEVBQXNCTCxFQUF0Qjs7QUFDQSxrQkFBOENmLCtDQUFRLENBQUMsS0FBRCxDQUF0RDtBQUFBO0FBQUEsTUFBT3FCLGVBQVA7QUFBQSxNQUF3QkMsa0JBQXhCOztBQUVBLG1CQUE4QnRCLCtDQUFRLENBQUNlLEVBQUQsQ0FBdEM7QUFBQTtBQUFBLE1BQU9RLE9BQVA7QUFBQSxNQUFnQkMsVUFBaEI7O0FBQ0EsbUJBQXdCeEIsK0NBQVEsQ0FBQyxFQUFELENBQWhDO0FBQUE7QUFBQSxNQUFPeUIsSUFBUDtBQUFBLE1BQWFDLE9BQWI7O0FBRUEsbUJBQTBCMUIsK0NBQVEsQ0FBQyxFQUFELENBQWxDO0FBQUE7QUFBQSxNQUFPMkIsS0FBUDtBQUFBLE1BQWNDLFFBQWQ7O0FBQ0EsbUJBQThCNUIsK0NBQVEsQ0FBQyxFQUFELENBQXRD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RVE7QUFUYixJQWpJSixDQURKO0FBaUpIOzs7Ozs7OztVQ2xhRCxxQ0FBcUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZW1ldGVyZ2lmdC8uL3NyYy9wYWdlcy9kb25hdGlvbi9hdWN0aW9uL2luZGV4LmpzeCIsIndlYnBhY2s6Ly9kZW1ldGVyZ2lmdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgeyB1c2VQYXJhbXMgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xyXG5pbXBvcnQgeyBldmVudGdldGJ5aWQgfSBmcm9tICcuLi8uLi9FdmVudHMvZXZlbnQnXHJcbmltcG9ydCB7IHRva2VuZ2V0YnlldmVudGlkIH0gZnJvbSAnLi4vLi4vRXZlbnRzL3Rva2VuJ1xyXG5cclxuXHJcbmltcG9ydCBCaWRORlRNb2RhbCBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2NvbXBvbmVudHMvbW9kYWxzL0JpZE5GVE1vZGFsJztcclxuaW1wb3J0IFZpZXdCaWRORlRNb2RhbCBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2NvbXBvbmVudHMvbW9kYWxzL1ZpZXdCaWRORlRNb2RhbCc7XHJcblxyXG5pbXBvcnQgRG9uYXRlTkZUTW9kYWwgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9jb21wb25lbnRzL21vZGFscy9Eb25hdGVORlRNb2RhbCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBdWN0aW9uKCkge1xyXG4gICAgY29uc3QgcmVnZXggPSAvXFxbKC4qKVxcXS9nO1xyXG4gICAgY29uc3Qgc3RyID0gd2luZG93LmxvY2F0aW9uLnNlYXJjaDtcclxuICAgIGxldCBtO1xyXG4gICAgbGV0IGlkID0gIFwiXCI7XHJcbiAgICB3aGlsZSAoKG0gPSByZWdleC5leGVjKHN0cikpICE9PSBudWxsKSB7XHJcbiAgICAgICAgLy8gVGhpcyBpcyBuZWNlc3NhcnkgdG8gYXZvaWQgaW5maW5pdGUgbG9vcHMgd2l0aCB6ZXJvLXdpZHRoIG1hdGNoZXNcclxuICAgICAgICBpZiAobS5pbmRleCA9PT0gcmVnZXgubGFzdEluZGV4KSB7XHJcbiAgICAgICAgICAgIHJlZ2V4Lmxhc3RJbmRleCsrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZCA9IG1bMV07XHJcbiAgICB9XHJcblxyXG4gICAgXHJcbiAgICBjb25zb2xlLmxvZyhcImlkID0+IFwiLCBpZCk7XHJcbiAgICBjb25zdCBbQ3JlYXRlbW9kYWxTaG93LCBzZXREb25hdGVNb2RhbFNob3ddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIGNvbnN0IFtldmVudElkLCBzZXRFdmVudElkXSA9IHVzZVN0YXRlKGlkKTtcclxuICAgIGNvbnN0IFtsaXN0LCBzZXRMaXN0XSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgICBjb25zdCBbdGl0bGUsIHNldFRpdGxlXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtnb2FsdXNkLCBzZXRnb2FsdXNkXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtnb2FsLCBzZXRnb2FsXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtkYXRlbGVmdCwgc2V0ZGF0ZWxlZnRdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW2RhdGUsIHNldGRhdGVdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW2RhdGVsZWZ0QmlkLCBzZXRkYXRlbGVmdEJpZF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbbG9nbywgc2V0bG9nb10gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbc2VsZWN0aWQsIHNldHNlbGVjdGlkXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtzZWxlY3R0aXRsZSwgc2V0c2VsZWN0dGl0bGVdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3NlbGVjdHR5cGUsIHNldHNlbGVjdHR5cGVdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3NlbGVjdHdhbGxldCwgc2V0c2VsZWN0d2FsbGV0XSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFt3YWxsZXRUeXBlLCBzZXRXYWxsZXRUeXBlXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtzZWxlY3RiaWQsIHNldHNlbGVjdGJpZF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBib29sVHJ1ZSA9IHRydWU7XHJcbiAgICBjb25zdCBbbW9kYWxTaG93LCBzZXRNb2RhbFNob3ddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW1ZpZXdtb2RhbFNob3csIHNldFZpZXdNb2RhbFNob3ddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuXHJcblxyXG4gICAgY29uc3QgZm9ybWF0dGVyID0gbmV3IEludGwuTnVtYmVyRm9ybWF0KCdlbi1VUycsIHtcclxuICAgICAgICBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDIsXHJcbiAgICAgICAgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAyLFxyXG4gICAgfSk7XHJcblxyXG4gICAgZnVuY3Rpb24gTGVmdERhdGUoZGF0ZXRleHQpIHtcclxuICAgICAgICB2YXIgYyA9IG5ldyBEYXRlKGRhdGV0ZXh0KS5nZXRUaW1lKCk7XHJcbiAgICAgICAgdmFyIG4gPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgICAgICB2YXIgZCA9IGMgLSBuO1xyXG4gICAgICAgIHZhciBkYSA9IE1hdGguZmxvb3IoZCAvICgxMDAwICogNjAgKiA2MCAqIDI0KSk7XHJcbiAgICAgICAgdmFyIGggPSBNYXRoLmZsb29yKChkICUgKDEwMDAgKiA2MCAqIDYwICogMjQpKSAvICgxMDAwICogNjAgKiA2MCkpO1xyXG4gICAgICAgIHZhciBtID0gTWF0aC5mbG9vcigoZCAlICgxMDAwICogNjAgKiA2MCkpIC8gKDEwMDAgKiA2MCkpO1xyXG4gICAgICAgIHZhciBzID0gTWF0aC5mbG9vcigoZCAlICgxMDAwICogNjApKSAvIDEwMDApO1xyXG4gICAgICAgIHJldHVybiAoZGEudG9TdHJpbmcoKSArIFwiIERheXMgXCIgKyBoLnRvU3RyaW5nKCkgKyBcIiBob3VycyBcIiArIG0udG9TdHJpbmcoKSArIFwiIG1pbnV0ZXMgXCIgKyBzLnRvU3RyaW5nKCkgKyBcIiBzZWNvbmRzXCIpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gTGVmdERhdGVCaWQoZGF0ZXRleHQpIHtcclxuICAgICAgICB2YXIgYyA9IG5ldyBEYXRlKGRhdGV0ZXh0KS5nZXRUaW1lKCk7XHJcbiAgICAgICAgdmFyIG4gPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgICAgICB2YXIgZCA9IGMgLSBuO1xyXG4gICAgICAgIHZhciBkYSA9IE1hdGguZmxvb3IoZCAvICgxMDAwICogNjAgKiA2MCAqIDI0KSk7XHJcbiAgICAgICAgdmFyIGggPSBNYXRoLmZsb29yKChkICUgKDEwMDAgKiA2MCAqIDYwICogMjQpKSAvICgxMDAwICogNjAgKiA2MCkpO1xyXG4gICAgICAgIHZhciBtID0gTWF0aC5mbG9vcigoZCAlICgxMDAwICogNjAgKiA2MCkpIC8gKDEwMDAgKiA2MCkpO1xyXG4gICAgICAgIHZhciBzID0gTWF0aC5mbG9vcigoZCAlICgxMDAwICogNjApKSAvIDEwMDApO1xyXG4gICAgICAgIHJldHVybiAoZGEudG9TdHJpbmcoKSArIFwiZCBcIiArIGgudG9TdHJpbmcoKSArIFwiaCBcIiArIG0udG9TdHJpbmcoKSArIFwibSBcIiArIHMudG9TdHJpbmcoKSArIFwic1wiKTtcclxuICAgIH1cclxuICAgIGFzeW5jIGZ1bmN0aW9uIEF1Y3Rpb25mZXRjaENvbnRyYWN0RGF0YSgpIHtcclxuICAgICAgICBpZiAoaWQgJiYgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lID09IFwiL2RvbmF0aW9uL2F1Y3Rpb25cIikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInN0YXJ0ZWQgY2hla2NpbmdcIik7XHJcbiAgICAgICAgICAgICAgICBsZXQgbmVhclByaWNlID0gMDtcclxuICAgICAgICAgICAgLy9ORUFSIGN1cnJlbmN5XHJcbiAgICAgICAgICAgIHRyeSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIG5lYXJDdXJyZW5jeVVybCA9IFwiaHR0cHM6Ly9hcGkuY29pbm1hcmtldGNhcC5jb20vZGF0YS1hcGkvdjMvY3J5cHRvY3VycmVuY3kvbWFya2V0LXBhaXJzL2xhdGVzdD9zbHVnPW5lYXItcHJvdG9jb2wmc3RhcnQ9MSZsaW1pdD0xJmNhdGVnb3J5PXNwb3Qmc29ydD1jbWNfcmFua19hZHZhbmNlZFwiO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY3VycmVuY3lfb3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbiwgdGV4dC9wbGFpbiwgKi8qJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgZmV0Y2gobmVhckN1cnJlbmN5VXJsLCBjdXJyZW5jeV9vcHRpb25zKS50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGpzb24gPT4gbmVhclByaWNlID0ganNvbilcclxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoJ2Vycm9yOicgKyBlcnIpKTtcclxuICAgICAgICAgICAgICAgIG5lYXJQcmljZSA9IG5lYXJQcmljZS5kYXRhLm1hcmtldFBhaXJzWzBdLnByaWNlO1xyXG5cclxuICAgICAgICAgICAgfSBjYXRjaCAoZXgpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGV4KTtcclxuXHJcbiAgICAgICAgICAgICAgICBuZWFyUHJpY2UgPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBBaXJ0YWJsZSA9IHJlcXVpcmUoJ2FpcnRhYmxlJyk7XHJcbiAgICAgICAgICAgIHZhciBiYXNlID0gbmV3IEFpcnRhYmxlKHthcGlLZXk6ICdrZXlSMVJyY2w5TzJzOWJUcyd9KS5iYXNlKCdhcHBnYlJDcGJrem1kY3VjTycpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICBhd2FpdCBiYXNlKCdldmVudHMnKS5maW5kKGlkLCBmdW5jdGlvbihlcnIsIHJlY29yZCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVycikgeyBjb25zb2xlLmVycm9yKGVycik7IHJldHVybjsgfVxyXG5cclxuICAgICAgICAgICAgICAgIHNldEV2ZW50SWQocmVjb3JkLmdldElkKCkpO1xyXG4gICAgICAgICAgICAgICAgc2V0VGl0bGUocmVjb3JkLmdldChcInRpdGxlXCIpKTtcclxuICAgICAgICAgICAgICAgIHNldFdhbGxldFR5cGUocmVjb3JkLmdldChcIndhbGxldHR5cGVcIikpO1xyXG4gICAgICAgICAgICAgICAgc2V0Z29hbHVzZChmb3JtYXR0ZXIuZm9ybWF0KE51bWJlcihOdW1iZXIocmVjb3JkLmdldChcIkdvYWxcIikpICogbmVhclByaWNlKSkpO1xyXG4gICAgICAgICAgICAgICAgc2V0Z29hbChOdW1iZXIocmVjb3JkLmdldChcIkdvYWxcIikpKTtcclxuICAgICAgICAgICAgICAgIHNldGRhdGVsZWZ0KExlZnREYXRlKHJlY29yZC5nZXQoXCJlbmREYXRlXCIpKSk7XHJcbiAgICAgICAgICAgICAgICBzZXRkYXRlKHJlY29yZC5nZXQoXCJlbmREYXRlXCIpKTtcclxuICAgICAgICAgICAgICAgIHNldGRhdGVsZWZ0QmlkKExlZnREYXRlQmlkKHJlY29yZC5nZXQoXCJlbmREYXRlXCIpKSk7XHJcbiAgICAgICAgICAgICAgICBzZXRsb2dvKHJlY29yZC5nZXQoXCJsb2dvbGlua1wiKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1JldHJpZXZlZCcsIHJlY29yZC5nZXRJZCgpKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zdCBhcnIgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgIGF3YWl0ICBiYXNlKCduZnRjcnlwdG9wdW5rcycpLnNlbGVjdCh7XHJcbiAgICAgICAgICAgICAgICAvLyBTZWxlY3RpbmcgdGhlIGZpcnN0IDEwIHJlY29yZHMgaW4gR3JpZCB2aWV3OlxyXG4gICAgICAgICAgICAgICAgbWF4UmVjb3JkczogMTAsXHJcbiAgICAgICAgICAgICAgICBzb3J0OiBbe2ZpZWxkOiBcIkJpZHByaWNlXCIsIGRpcmVjdGlvbjogXCJkZXNjXCJ9XSxcclxuICAgICAgICAgICAgICAgIHZpZXc6IFwiR3JpZCB2aWV3XCJcclxuICAgICAgICAgICAgfSkuZWFjaFBhZ2UoZnVuY3Rpb24gcGFnZShyZWNvcmRzLCBmZXRjaE5leHRQYWdlKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBUaGlzIGZ1bmN0aW9uIChgcGFnZWApIHdpbGwgZ2V0IGNhbGxlZCBmb3IgZWFjaCBwYWdlIG9mIHJlY29yZHMuXHJcbiAgICAgICAgICAgICAgICB2YXIgYXJyID0gW107XHJcbiAgICAgICAgICAgICAgICByZWNvcmRzLmZvckVhY2goZnVuY3Rpb24gKHJlY29yZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBnb2FsUHJpY2UydXNkID0gMDtcclxuICAgICAgICAgICAgICAgICAgICBnb2FsUHJpY2UydXNkID0gTnVtYmVyKE51bWJlcihyZWNvcmQuZ2V0KFwicHJpY2VcIikpICogbmVhclByaWNlKTtcclxuICAgICAgICAgICAgICAgICAgICBhcnIucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIElkOiByZWNvcmQuZ2V0SWQoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogcmVjb3JkLmdldChcIm5hbWVcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiByZWNvcmQuZ2V0KFwiZGVzY3JpcHRpb25cIiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEJpZHByaWNlOiBnb2FsUHJpY2UydXNkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmljZTogTnVtYmVyKHJlY29yZC5nZXQoXCJwcmljZVwiKSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IHJlY29yZC5nZXQoXCJ0eXBlXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZTogcmVjb3JkLmdldChcImltYWdlXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgc2V0TGlzdChhcnIpO1xyXG4gICAgICAgICAgICAgICAgLy8gVG8gZmV0Y2ggdGhlIG5leHQgcGFnZSBvZiByZWNvcmRzLCBjYWxsIGBmZXRjaE5leHRQYWdlYC5cclxuICAgICAgICAgICAgICAgIC8vIElmIHRoZXJlIGFyZSBtb3JlIHJlY29yZHMsIGBwYWdlYCB3aWxsIGdldCBjYWxsZWQgYWdhaW4uXHJcbiAgICAgICAgICAgICAgICAvLyBJZiB0aGVyZSBhcmUgbm8gbW9yZSByZWNvcmRzLCBgZG9uZWAgd2lsbCBnZXQgY2FsbGVkLlxyXG4gICAgICAgICAgICAgICAvLyBmZXRjaE5leHRQYWdlKCk7XHJcblxyXG4gICAgICAgICAgICB9LCBmdW5jdGlvbiBkb25lKGVycikge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVycikgeyBjb25zb2xlLmVycm9yKGVycik7IHJldHVybjsgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIkxvYWRpbmdcIikpXHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiTG9hZGluZ1wiKS5zdHlsZSA9IFwiZGlzcGxheTpub25lXCI7XHJcbiAgICAgICAgICAgIC8vIHdoaWxlIChib29sVHJ1ZSkge1xyXG4gICAgICAgICAgICAvLyAgICAgdHJ5IHtcclxuICAgICAgICAgICAgLy8gICAgICAgICBzZXRFdmVudElkKGlkKTtcclxuICAgICAgICAgICAgLy8gICAgICAgICBjb25zdCB2YWx1ZSA9IGF3YWl0IGV2ZW50Z2V0YnlpZChpZCk7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgY29uc3QgYXJyID0gW107XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgY29uc29sZS5sb2codmFsdWUpO1xyXG5cclxuICAgICAgICAgICAgLy8gICAgICAgICBjb25zdCB0b3RhbFRva2VucyA9IGF3YWl0IHRva2VuZ2V0YnlldmVudGlkKGlkKTtcclxuXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b3RhbFRva2Vucy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICBjb25zdCBvYmplY3QgPSBhd2FpdCB0b3RhbFRva2Vuc1tpXTtcclxuXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIGlmIChvYmplY3QubmFtZSkge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgdmFyIHByaWNlZGVzMSA9IDA7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICBsZXQgcHJpY2UyVXNkID0gMFxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgdHJ5IHtcclxuXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgcHJpY2UyVXNkID0gTnVtYmVyKG9iamVjdC5wcmljZSAqIG5lYXJQcmljZSk7XHJcblxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZXgpIHsgfVxyXG5cclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIGFyci5wdXNoKHtcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBJZDogb2JqZWN0LmlkLFxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIG5hbWU6IG9iamVjdC5uYW1lLFxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBvYmplY3QuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgQmlkcHJpY2U6IHByaWNlMlVzZCxcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBwcmljZTogTnVtYmVyKG9iamVjdC5wcmljZSksXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgdHlwZTogb2JqZWN0LnR5cGUsXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgaW1hZ2U6IG9iamVjdC5pbWFnZSxcclxuXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyAgICAgICAgIHNldExpc3QoYXJyKTtcclxuICAgICAgICAgICAgLy8gICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJMb2FkaW5nXCIpKVxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIkxvYWRpbmdcIikuc3R5bGUgPSBcImRpc3BsYXk6bm9uZVwiO1xyXG5cclxuICAgICAgICAgICAgLy8gICAgICAgICBzZXRzZWxlY3R3YWxsZXQodmFsdWUud2FsbGV0KTtcclxuICAgICAgICAgICAgLy8gICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZS53YWxsZXQpO1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIHNldFRpdGxlKHZhbHVlLnRpdGxlKTtcclxuICAgICAgICAgICAgLy8gICAgICAgICBzZXRXYWxsZXRUeXBlKHZhbHVlLndhbGxldHR5cGUpO1xyXG5cclxuICAgICAgICAgICAgLy8gICAgICAgICBzZXRnb2FsdXNkKGZvcm1hdHRlci5mb3JtYXQoTnVtYmVyKHZhbHVlLkdvYWwgKiBuZWFyUHJpY2UpKSk7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgc2V0Z29hbChOdW1iZXIodmFsdWUuR29hbCkpO1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIHNldGRhdGVsZWZ0KExlZnREYXRlKHZhbHVlLmVuZERhdGUpKTtcclxuICAgICAgICAgICAgLy8gICAgICAgICBzZXRkYXRlKHZhbHVlLmVuZERhdGUpO1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIHNldGRhdGVsZWZ0QmlkKExlZnREYXRlQmlkKHZhbHVlLmVuZERhdGUpKTtcclxuICAgICAgICAgICAgLy8gICAgICAgICBzZXRsb2dvKHZhbHVlLmxvZ29saW5rKTtcclxuICAgICAgICAgICAgLy8gICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgLy8gICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgICAgIC8vIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIEF1Y3Rpb25mZXRjaENvbnRyYWN0RGF0YSgpO1xyXG5cclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY2FsY3VsYXRlVGltZUxlZnQoKTtcclxuICAgIH0sIDEwMDApO1xyXG5cclxuXHJcbiAgICBmdW5jdGlvbiBjYWxjdWxhdGVUaW1lTGVmdCgpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICB2YXIgYWxsRGF0ZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShcImRhdGVsZWZ0XCIpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbERhdGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZGF0ZSA9IChhbGxEYXRlc1tpXSkuZ2V0QXR0cmlidXRlKFwiZGF0ZVwiKTtcclxuICAgICAgICAgICAgICAgIGFsbERhdGVzW2ldLmlubmVySFRNTCA9IExlZnREYXRlKGRhdGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBhbGxEYXRlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKFwiZGF0ZVwiKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxEYXRlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdmFyIGRhdGUgPSAoYWxsRGF0ZXNbaV0pLmdldEF0dHJpYnV0ZShcImRhdGVcIik7XHJcbiAgICAgICAgICAgICAgICBhbGxEYXRlc1tpXS5pbm5lckhUTUwgPSBMZWZ0RGF0ZUJpZChkYXRlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7fVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGFjdGl2YXRlVmlld0JpZE1vZGFsKGUpIHtcclxuICAgICAgICBzZXRzZWxlY3RpZChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJ0b2tlbmlkXCIpKTtcclxuICAgICAgICBzZXRzZWxlY3R0aXRsZShlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJ0aXRsZVwiKSk7XHJcblxyXG4gICAgICAgIHNldFZpZXdNb2RhbFNob3codHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gYWN0aXZhdGVCaWRORlRNb2RhbChlKSB7XHJcbiAgICAgICAgc2V0c2VsZWN0aWQoZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwidG9rZW5pZFwiKSk7XHJcbiAgICAgICAgc2V0c2VsZWN0YmlkKGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImhpZ2hlc3RiaWRcIikpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHNlbGVjdGJpZCk7XHJcbiAgICAgICAgc2V0c2VsZWN0dHlwZShcIk5GVFwiKTtcclxuICAgICAgICBzZXRNb2RhbFNob3codHJ1ZSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBhY3RpdmF0ZUJpZENyeXB0b3B1bmtUTW9kYWwoZSkge1xyXG4gICAgICAgIHNldHNlbGVjdGlkKGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcInRva2VuaWRcIikpO1xyXG4gICAgICAgIHNldHNlbGVjdHR5cGUoXCJDcnlwdG9wdW5rXCIpO1xyXG4gICAgICAgIHNldHNlbGVjdGJpZChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJoaWdoZXN0YmlkXCIpKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhzZWxlY3RiaWQpO1xyXG5cclxuICAgICAgICBzZXRNb2RhbFNob3codHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gYWN0aXZhdGVDcmVhdGVORlRNb2RhbChlKSB7XHJcbiAgICAgICAgc2V0c2VsZWN0dHlwZShcIk5GVFwiKTtcclxuXHJcbiAgICAgICAgc2V0RG9uYXRlTW9kYWxTaG93KHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGFjdGl2YXRlQ3JlYXRlQ3J5cHRvcHVua01vZGFsKGUpIHtcclxuICAgICAgICBzZXRzZWxlY3R0eXBlKFwiQ3J5cHRvcHVua1wiKTtcclxuXHJcbiAgICAgICAgc2V0RG9uYXRlTW9kYWxTaG93KHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuIDxkaXYgY2xhc3NOYW1lPVwicm93IEV2ZW50Q29udGFpbmVyXCIgPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnXHJcbiAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17bG9nb30gY2xhc3NOYW1lPVwiQXVjdGlvbkltYWdlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkRldGlhbHNDb250YWluZXJcIiBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByb3dHYXA6ICcxNnB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1RvcDogJzcwcHgnXHJcbiAgICAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcydncnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19ID57dGl0bGV9PC9oND5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdUZXh0Q29udGFpbmVyJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMnZ3J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+R29hbDogPC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMnZ3J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+JCB7Z29hbHVzZH0gKHtnb2FsfSB7d2FsbGV0VHlwZX0pPC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdUZXh0Q29udGFpbmVyJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMnZ3J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gbmFtZT0nZGF0ZWxlZnQnIGRhdGU9e2RhdGV9PntkYXRlbGVmdH08L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGdhcDogJzE0cHgnLCBwb3NpdGlvbjogJ2Fic29sdXRlJywgcmlnaHQ6ICcyNXB4JyB9fSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17YWN0aXZhdGVDcmVhdGVORlRNb2RhbH0gY2xhc3NOYW1lPVwiY2FyZFwiIHN0eWxlPXt7IGNvbG9yOiAnd2hpdGUnLCBvdmVyZmxvdzogJ2hpZGRlbicsIGJhY2tncm91bmQ6ICcjMEJENkJFJywgdGV4dEFsaWduOiAnY2VudGVyJywgd2lkdGg6ICcxNzJweCcsIGN1cnNvcjogJ3BvaW50ZXInLCBoZWlnaHQ6ICc0OHB4JywgbWFyZ2luOiAnMCcsIHBhZGRpbmc6ICcwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXthY3RpdmF0ZUNyZWF0ZU5GVE1vZGFsfSBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIiBzdHlsZT17eyBoZWlnaHQ6ICcxMDAlJywgcGFkZGluZ1RvcDogJzIxcHgnLCBmb250U2l6ZTogJzIxcHgnIH19PkRvbmF0ZSBORlQ8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiIG9uQ2xpY2s9e2FjdGl2YXRlQ3JlYXRlQ3J5cHRvcHVua01vZGFsfSBzdHlsZT17eyBjb2xvcjogJ3doaXRlJywgb3ZlcmZsb3c6ICdoaWRkZW4nLCBiYWNrZ3JvdW5kOiAnIzBCRDZCRScsIHRleHRBbGlnbjogJ2NlbnRlcicsIGN1cnNvcjogJ3BvaW50ZXInLCBmbG9hdDogJ3JpZ2h0Jywgd2lkdGg6ICcyMDJweCcsIGhlaWdodDogJzQ4cHgnLCBwYWRkaW5nOiAnMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17YWN0aXZhdGVDcmVhdGVDcnlwdG9wdW5rTW9kYWx9IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiIHN0eWxlPXt7IGhlaWdodDogJzEwMCUnLCBwYWRkaW5nVG9wOiAnMjFweCcsIGZvbnRTaXplOiAnMjFweCcgfX0+RG9uYXRlIENyeXB0b3B1bms8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgaWQ9J0xvYWRpbmcnIGNsYXNzTmFtZT1cIkxvYWRpbmdBcmVhXCI+XHJcbiAgICAgICAgICAgICAgICA8aDE+TG9hZGluZy4uLjwvaDE+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7bGlzdC5tYXAoKGxpc3RJdGVtKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17bGlzdEl0ZW0uSWR9IGNsYXNzTmFtZT1cInJvdyBFbGVtZW50c0NvbnRhaW5lciBiZ1doaXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCdcclxuICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2xpc3RJdGVtLnR5cGUgPT0gXCJDcnlwdG9wdW5rXCIgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17bGlzdEl0ZW0uaW1hZ2V9IGNsYXNzTmFtZT1cIkF1Y3Rpb25CaWRJbWFnZSBwaXhlbFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17bGlzdEl0ZW0uaW1hZ2V9IGNsYXNzTmFtZT1cIkF1Y3Rpb25CaWRJbWFnZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiRGV0aWFsc0NvbnRhaW5lclwiIHN0eWxlPXt7IHJvd0dhcDogXCI1cHhcIiB9fSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIHN0eWxlPXt7IGZvbnRTaXplOiAnMnZ3JyB9fSA+e2xpc3RJdGVtLm5hbWV9PC9oMj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IHN0eWxlPXt7IGNvbG9yOiBcInJnYigxMzksIDEzOSwgMTM5KVwiLCBmb250U2l6ZTogJzEuN3Z3JyB9fT5UeXBlOiB7bGlzdEl0ZW0udHlwZX08L2g0PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlRleHRDb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IHN0eWxlPXt7IGNvbG9yOiBcIiM4QjhCOEJcIiwgZm9udFNpemU6ICcxLjd2dycgfX0+e2xpc3RJdGVtLmRlc2NyaXB0aW9ufTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdFbGVtZW50Qm90dG9tQ29udGFpbmVyJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1heFdpZHRoOiBcIjIxNnB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBzdHlsZT17eyBmb250U2l6ZTogJzF2dycgfX0gY2xhc3NOYW1lPVwic21hbGxncmV5XCI+Q3VycmVudCBiaWQ8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgc3R5bGU9e3sgZm9udFNpemU6ICcxLjd2dycgfX0gY2xhc3NOYW1lPSdiaWRwcmljZSc+JCB7bGlzdEl0ZW0uQmlkcHJpY2UudG9GaXhlZCgyKX0gKHtsaXN0SXRlbS5wcmljZX0ge3dhbGxldFR5cGV9KTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNyBzdHlsZT17eyBmb250U2l6ZTogJzF2dycgfX0gbmFtZT1cImRhdGVcIiBkYXRlPXtkYXRlfSBjbGFzc05hbWU9XCJzbWFsbGdyZXlcIj57ZGF0ZWxlZnRCaWR9PC9oNz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nQmlkQWxsY29udGFpbmVyJyA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdCaWRzYnV0dG9uJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdG9rZW5pZD17bGlzdEl0ZW0uSWR9IHRpdGxlPXtsaXN0SXRlbS5uYW1lfSBvbkNsaWNrPXthY3RpdmF0ZVZpZXdCaWRNb2RhbH0gY2xhc3NOYW1lPVwiQmlkY29udGFpbmVyIGNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdG9rZW5pZD17bGlzdEl0ZW0uSWR9IHRpdGxlPXtsaXN0SXRlbS5uYW1lfSBjbGFzc05hbWU9XCJjYXJkIEJpZGNvbnRhaW5lckNhcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB0b2tlbmlkPXtsaXN0SXRlbS5JZH0gdGl0bGU9e2xpc3RJdGVtLm5hbWV9IGNsYXNzTmFtZT1cImNhcmQtYm9keSBiaWRidXR0b25UZXh0XCI+VmlldzwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsaXN0SXRlbS50eXBlID09IFwiQ3J5cHRvcHVua1wiID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdG9rZW5pZD17bGlzdEl0ZW0uSWR9IHdhbGxldD17bGlzdEl0ZW0ud2FsbGV0fSBoaWdoZXN0YmlkPXtsaXN0SXRlbS5wcmljZX0gY2xhc3NOYW1lPVwiQmlkY29udGFpbmVyIGNvbFwiIG9uQ2xpY2s9e2FjdGl2YXRlQmlkQ3J5cHRvcHVua1RNb2RhbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdG9rZW5pZD17bGlzdEl0ZW0uSWR9IHdhbGxldD17bGlzdEl0ZW0ud2FsbGV0fSBoaWdoZXN0YmlkPXtsaXN0SXRlbS5wcmljZX0gY2xhc3NOYW1lPVwiY2FyZCBCaWRjb250YWluZXJDYXJkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHRva2VuaWQ9e2xpc3RJdGVtLklkfSB3YWxsZXQ9e2xpc3RJdGVtLndhbGxldH0gaGlnaGVzdGJpZD17bGlzdEl0ZW0ucHJpY2V9IGNsYXNzTmFtZT1cImNhcmQtYm9keSBiaWRidXR0b25UZXh0XCI+QmlkPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHRva2VuaWQ9e2xpc3RJdGVtLklkfSB3YWxsZXQ9e2xpc3RJdGVtLndhbGxldH0gaGlnaGVzdGJpZD17bGlzdEl0ZW0ucHJpY2V9IGdvYWxTY29yZT17Z29hbH0gY2xhc3NOYW1lPVwiQmlkY29udGFpbmVyIGNvbFwiIG9uQ2xpY2s9e2FjdGl2YXRlQmlkTkZUTW9kYWx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHRva2VuaWQ9e2xpc3RJdGVtLklkfSB3YWxsZXQ9e2xpc3RJdGVtLndhbGxldH0gaGlnaGVzdGJpZD17bGlzdEl0ZW0ucHJpY2V9IGNsYXNzTmFtZT1cImNhcmQgQmlkY29udGFpbmVyQ2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB0b2tlbmlkPXtsaXN0SXRlbS5JZH0gd2FsbGV0PXtsaXN0SXRlbS53YWxsZXR9IGhpZ2hlc3RiaWQ9e2xpc3RJdGVtLnByaWNlfSBjbGFzc05hbWU9XCJjYXJkLWJvZHkgYmlkYnV0dG9uVGV4dFwiPkJpZDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8QmlkTkZUTW9kYWxcclxuICAgICAgICAgICAgICAgIHNob3c9e21vZGFsU2hvd31cclxuICAgICAgICAgICAgICAgIG9uSGlkZT17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldE1vZGFsU2hvdyhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gVGhpcyBpcyBhIHBvb3IgaW1wbGVtZW50YXRpb24sIGJldHRlciB0byBpbXBsZW1lbnQgYW4gZXZlbnQgbGlzdGVuZXJcclxuICAgICAgICAgICAgICAgICAgICBBdWN0aW9uZmV0Y2hDb250cmFjdERhdGEoKTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICB0b2tlbklkPXtzZWxlY3RpZH1cclxuICAgICAgICAgICAgICAgIHR5cGU9e3NlbGVjdHR5cGV9XHJcbiAgICAgICAgICAgICAgICBUb0FkZHJlc3M9e3NlbGVjdHdhbGxldH1cclxuICAgICAgICAgICAgICAgIGV2ZW50SWQ9e2V2ZW50SWR9XHJcbiAgICAgICAgICAgICAgICBIaWdoZXN0YmlkPXtzZWxlY3RiaWR9XHJcbiAgICAgICAgICAgICAgICB3YWxsZXRUeXBlPXt3YWxsZXRUeXBlfVxyXG4gICAgICAgICAgICAgICAgZ29hbD17Z29hbH1cclxuICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgIDxWaWV3QmlkTkZUTW9kYWxcclxuICAgICAgICAgICAgICAgIHNob3c9e1ZpZXdtb2RhbFNob3d9XHJcbiAgICAgICAgICAgICAgICBvbkhpZGU9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRWaWV3TW9kYWxTaG93KGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBUaGlzIGlzIGEgcG9vciBpbXBsZW1lbnRhdGlvbiwgYmV0dGVyIHRvIGltcGxlbWVudCBhbiBldmVudCBsaXN0ZW5lclxyXG4gICAgICAgICAgICAgICAgICAgIEF1Y3Rpb25mZXRjaENvbnRyYWN0RGF0YSgpO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIGlkPXtzZWxlY3RpZH1cclxuICAgICAgICAgICAgICAgIHdhbGxldFR5cGU9e3dhbGxldFR5cGV9XHJcbiAgICAgICAgICAgICAgICB0aXRsZT17c2VsZWN0dGl0bGV9XHJcblxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8RG9uYXRlTkZUTW9kYWxcclxuICAgICAgICAgICAgICAgIHNob3c9e0NyZWF0ZW1vZGFsU2hvd31cclxuICAgICAgICAgICAgICAgIG9uSGlkZT17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldERvbmF0ZU1vZGFsU2hvdyhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gVGhpcyBpcyBhIHBvb3IgaW1wbGVtZW50YXRpb24sIGJldHRlciB0byBpbXBsZW1lbnQgYW4gZXZlbnQgbGlzdGVuZXJcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBFdmVudElEPXtldmVudElkfVxyXG4gICAgICAgICAgICAgICAgdHlwZT17c2VsZWN0dHlwZX1cclxuICAgICAgICAgICAgICAgIFNlbGVjdGVkVGl0bGU9e3RpdGxlfVxyXG4gICAgICAgICAgICAgICAgZW5kZGF0ZT17ZGF0ZX1cclxuICAgICAgICAgICAgLz5cclxuXHJcblxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSBmdW5jdGlvbigpIHsgcmV0dXJuIFwiZjM5ZDQ3ODk0MmI2ZDFlOGE4ZmZcIjsgfSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUGFyYW1zIiwiZXZlbnRnZXRieWlkIiwidG9rZW5nZXRieWV2ZW50aWQiLCJCaWRORlRNb2RhbCIsIlZpZXdCaWRORlRNb2RhbCIsIkRvbmF0ZU5GVE1vZGFsIiwiQXVjdGlvbiIsInJlZ2V4Iiwic3RyIiwid2luZG93IiwibG9jYXRpb24iLCJzZWFyY2giLCJtIiwiaWQiLCJleGVjIiwiaW5kZXgiLCJsYXN0SW5kZXgiLCJjb25zb2xlIiwibG9nIiwiQ3JlYXRlbW9kYWxTaG93Iiwic2V0RG9uYXRlTW9kYWxTaG93IiwiZXZlbnRJZCIsInNldEV2ZW50SWQiLCJsaXN0Iiwic2V0TGlzdCIsInRpdGxlIiwic2V0VGl0bGUiLCJnb2FsdXNkIiwic2V0Z29hbHVzZCIsImdvYWwiLCJzZXRnb2FsIiwiZGF0ZWxlZnQiLCJzZXRkYXRlbGVmdCIsImRhdGUiLCJzZXRkYXRlIiwiZGF0ZWxlZnRCaWQiLCJzZXRkYXRlbGVmdEJpZCIsImxvZ28iLCJzZXRsb2dvIiwic2VsZWN0aWQiLCJzZXRzZWxlY3RpZCIsInNlbGVjdHRpdGxlIiwic2V0c2VsZWN0dGl0bGUiLCJzZWxlY3R0eXBlIiwic2V0c2VsZWN0dHlwZSIsInNlbGVjdHdhbGxldCIsInNldHNlbGVjdHdhbGxldCIsIndhbGxldFR5cGUiLCJzZXRXYWxsZXRUeXBlIiwic2VsZWN0YmlkIiwic2V0c2VsZWN0YmlkIiwiYm9vbFRydWUiLCJtb2RhbFNob3ciLCJzZXRNb2RhbFNob3ciLCJWaWV3bW9kYWxTaG93Iiwic2V0Vmlld01vZGFsU2hvdyIsImZvcm1hdHRlciIsIkludGwiLCJOdW1iZXJGb3JtYXQiLCJtaW5pbXVtRnJhY3Rpb25EaWdpdHMiLCJtYXhpbXVtRnJhY3Rpb25EaWdpdHMiLCJMZWZ0RGF0ZSIsImRhdGV0ZXh0IiwiYyIsIkRhdGUiLCJnZXRUaW1lIiwibiIsImQiLCJkYSIsIk1hdGgiLCJmbG9vciIsImgiLCJzIiwidG9TdHJpbmciLCJMZWZ0RGF0ZUJpZCIsIkF1Y3Rpb25mZXRjaENvbnRyYWN0RGF0YSIsInBhdGhuYW1lIiwibmVhclByaWNlIiwibmVhckN1cnJlbmN5VXJsIiwiY3VycmVuY3lfb3B0aW9ucyIsIm1ldGhvZCIsImhlYWRlcnMiLCJBY2NlcHQiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiY2F0Y2giLCJlcnIiLCJlcnJvciIsImRhdGEiLCJtYXJrZXRQYWlycyIsInByaWNlIiwiQWlydGFibGUiLCJyZXF1aXJlIiwiYmFzZSIsImFwaUtleSIsInJlY29yZCIsImdldElkIiwiZ2V0IiwiZm9ybWF0IiwiTnVtYmVyIiwiYXJyIiwic2VsZWN0IiwibWF4UmVjb3JkcyIsInNvcnQiLCJmaWVsZCIsImRpcmVjdGlvbiIsInZpZXciLCJlYWNoUGFnZSIsInBhZ2UiLCJyZWNvcmRzIiwiZmV0Y2hOZXh0UGFnZSIsImZvckVhY2giLCJnb2FsUHJpY2UydXNkIiwicHVzaCIsIklkIiwibmFtZSIsImRlc2NyaXB0aW9uIiwiQmlkcHJpY2UiLCJ0eXBlIiwiaW1hZ2UiLCJkb25lIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInN0eWxlIiwic2V0SW50ZXJ2YWwiLCJjYWxjdWxhdGVUaW1lTGVmdCIsImFsbERhdGVzIiwiZ2V0RWxlbWVudHNCeU5hbWUiLCJpIiwibGVuZ3RoIiwiZ2V0QXR0cmlidXRlIiwiaW5uZXJIVE1MIiwiYWN0aXZhdGVWaWV3QmlkTW9kYWwiLCJlIiwidGFyZ2V0IiwiYWN0aXZhdGVCaWRORlRNb2RhbCIsImFjdGl2YXRlQmlkQ3J5cHRvcHVua1RNb2RhbCIsImFjdGl2YXRlQ3JlYXRlTkZUTW9kYWwiLCJhY3RpdmF0ZUNyZWF0ZUNyeXB0b3B1bmtNb2RhbCIsImRpc3BsYXkiLCJ3aWR0aCIsInBvc2l0aW9uIiwicm93R2FwIiwicGFkZGluZ1RvcCIsImZvbnRTaXplIiwiZ2FwIiwicmlnaHQiLCJjb2xvciIsIm92ZXJmbG93IiwiYmFja2dyb3VuZCIsInRleHRBbGlnbiIsImN1cnNvciIsImhlaWdodCIsIm1hcmdpbiIsInBhZGRpbmciLCJmbG9hdCIsImxpc3RJdGVtIiwibWF4V2lkdGgiLCJ0b0ZpeGVkIiwid2FsbGV0Il0sInNvdXJjZVJvb3QiOiIifQ==