import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom'
import { eventgetbyid } from '../../Events/event'
import { tokengetbyeventid } from '../../Events/token'


import BidNFTModal from '../../../components/components/modals/BidNFTModal';
import ViewBidNFTModal from '../../../components/components/modals/ViewBidNFTModal';

import DonateNFTModal from '../../../components/components/modals/DonateNFTModal';

export default function Auction() {
    const regex = /\[(.*)\]/g;
    const str = window.location.search;
    let m;
    let id = "";
    while ((m = regex.exec(str)) !== null) {
        // This is necessary to avoid infinite loops with zero-width matches
        if (m.index === regex.lastIndex) {
            regex.lastIndex++;
        }
        id = m[1];
    }


    console.log("id => ", id);
    const [CreatemodalShow, setDonateModalShow] = useState(false);

    const [eventId, setEventId] = useState(id);
    const [RealEventId, setRealEventId] = useState(0);

    const [list, setList] = useState([]);

    const [title, setTitle] = useState('');
    const [goalusd, setgoalusd] = useState('');
    const [goal, setgoal] = useState('');
    const [dateleft, setdateleft] = useState('');
    const [date, setdate] = useState('');
    const [dateleftBid, setdateleftBid] = useState('');
    const [logo, setlogo] = useState('');
    const [selectid, setselectid] = useState('');
    const [selectrecid, setselectrecid] = useState('');
    const [selecttitle, setselecttitle] = useState('');
    const [selecttype, setselecttype] = useState('');
    const [selectwallet, setselectwallet] = useState('');
    const [walletType, setWalletType] = useState('');
    const [selectbid, setselectbid] = useState('');
    const boolTrue = true;
    const [modalShow, setModalShow] = useState(false);
    const [ViewmodalShow, setViewModalShow] = useState(false);



    const formatter = new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });

    function LeftDate(datetext) {
        var c = new Date(datetext).getTime();
        var n = new Date().getTime();
        var d = c - n;
        var da = Math.floor(d / (1000 * 60 * 60 * 24));
        var h = Math.floor((d % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var m = Math.floor((d % (1000 * 60 * 60)) / (1000 * 60));
        var s = Math.floor((d % (1000 * 60)) / 1000);
        return (da.toString() + " Days " + h.toString() + " hours " + m.toString() + " minutes " + s.toString() + " seconds");
    }
    function LeftDateBid(datetext) {
        var c = new Date(datetext).getTime();
        var n = new Date().getTime();
        var d = c - n;
        var da = Math.floor(d / (1000 * 60 * 60 * 24));
        var h = Math.floor((d % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var m = Math.floor((d % (1000 * 60 * 60)) / (1000 * 60));
        var s = Math.floor((d % (1000 * 60)) / 1000);
        return (da.toString() + "d " + h.toString() + "h " + m.toString() + "m " + s.toString() + "s");
    }
    async function AuctionfetchContractData() {
        if (id && window.location.pathname == "/donation/auction") {
            console.log("started chekcing");
            let nearPrice = 0;
            //NEAR currency
            try {

                var nearCurrencyUrl = "https://api.coinmarketcap.com/data-api/v3/cryptocurrency/market-pairs/latest?slug=near-protocol&start=1&limit=1&category=spot&sort=cmc_rank_advanced";
                const currency_options = {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        Accept: 'application/json, text/plain, */*'
                    },
                };
                await fetch(nearCurrencyUrl, currency_options).then(res => res.json())
                    .then(json => nearPrice = json)
                    .catch(err => console.error('error:' + err));
                nearPrice = nearPrice.data.marketPairs[0].price;

            } catch (ex) {
                console.log(ex);

                nearPrice = 0;
            }
            var Airtable = require('airtable');
            var base = new Airtable({ apiKey: 'keyR1Rrcl9O2s9bTs' }).base('appgbRCpbkzmdcucO');

            await base('events').find(id, async function (err, record) {
                if (err) { console.error(err); return; }

                setRealEventId(record.get('id'));
                setTitle(record.get("title"));
                setWalletType(record.get("wallettype"));
                setselectwallet(record.get('wallet'))
                setgoalusd(formatter.format(Number(Number(record.get("Goal")) * nearPrice)));
                setgoal(Number(record.get("Goal")));
                setdateleft(LeftDate(record.get("endDate")));
                setdate(record.get("endDate"));
                setdateleftBid(LeftDateBid(record.get("endDate")));
                setlogo(record.get("logolink"));

                console.log('Retrieved', record.getId());
                await base('nftcryptopunks').select({
                    filterByFormula: `({eventid} = '${Number(record.get('id'))}')`,
                    // Selecting the first 10 records in Grid view:
                    maxRecords: 10,
                    sort: [{ field: "price", direction: "desc" }],
                    view: "Grid view"
                }).eachPage(function page(records, fetchNextPage) {
                    // This function (`page`) will get called for each page of records.
                    var arr = [];
                    records.forEach(function (record) {
                        var goalPrice2usd = 0;
                        goalPrice2usd = Number(Number(record.get("price")) * nearPrice);
                        arr.push({
                            recId: record.id,
                            Id: record.get("id"),
                            name: record.get("name"),
                            description: record.get("description"),
                            Bidprice: goalPrice2usd,
                            price: Number(record.get("price")),
                            type: record.get("type"),
                            image: record.get("image"),
                        });
                    });

                    setList(arr);
                    if (document.getElementById("Loading"))
                    document.getElementById("Loading").style = "display:none";

                }, function done(err) {
                    if (err) { console.error(err); return; }
                });
          
            });




        }
    }
    useEffect(() => {
        AuctionfetchContractData();

    }, []);

    setInterval(function () {
        calculateTimeLeft();
    }, 1000);


    function calculateTimeLeft() {
        try {
            var allDates = document.getElementsByName("dateleft");
            for (let i = 0; i < allDates.length; i++) {
                var date = (allDates[i]).getAttribute("date");
                allDates[i].innerHTML = LeftDate(date);
            }
            var allDates = document.getElementsByName("date");
            for (let i = 0; i < allDates.length; i++) {
                var date = (allDates[i]).getAttribute("date");
                allDates[i].innerHTML = LeftDateBid(date);
            }
        } catch (error) { }
    }

    function activateViewBidModal(e) {
        setselectrecid(e.target.getAttribute("recid"));
        setselectid(e.target.getAttribute("tokenid"));
        setselecttitle(e.target.getAttribute("title"));

        setViewModalShow(true);
    }

    function activateBidNFTModal(e) {
        setselectrecid(e.target.getAttribute("recid"));
        setselectid(e.target.getAttribute("tokenid"));
        setselectbid(e.target.getAttribute("highestbid"));
        console.log(selectbid);
        setselecttype("NFT");
        setModalShow(true);
    }
    function activateBidCryptopunkTModal(e) {
        setselectrecid(e.target.getAttribute("recid"));
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

    return (
        <>
            <div className="row EventContainer" >
                <div style={{
                    display: 'flex',
                    width: '100%',
                    position: 'relative'
                }}>
                    <img src={logo} className="AuctionImage" />
                    <div className="DetialsContainer" style={{
                        rowGap: '16px',
                        paddingTop: '70px'
                    }}>
                        <h4 style={{
                            fontSize: '2vw'
                        }} >{title}</h4>

                        <div className='TextContainer'>
                            <h4 style={{
                                fontSize: '2vw'
                            }}>Goal: </h4>
                            <h4 style={{
                                fontSize: '2vw'
                            }}>$ {goalusd} ({goal} {walletType})</h4>
                        </div>
                        <div className='TextContainer'>
                            <h4 style={{
                                fontSize: '2vw'
                            }} name='dateleft' date={date}>{dateleft}</h4>
                        </div>
                    </div>

                    <div style={{ display: 'flex', gap: '14px', position: 'absolute', right: '25px' }} >
                        <div onClick={activateCreateNFTModal} className="card" style={{ color: 'white', overflow: 'hidden', background: '#0BD6BE', textAlign: 'center', width: '172px', cursor: 'pointer', height: '48px', margin: '0', padding: '0px' }}>
                            <div onClick={activateCreateNFTModal} className="card-body" style={{ height: '100%', paddingTop: '21px', fontSize: '21px' }}>Donate NFT</div>
                        </div>
                        <div className="card" onClick={activateCreateCryptopunkModal} style={{ color: 'white', overflow: 'hidden', background: '#0BD6BE', textAlign: 'center', cursor: 'pointer', float: 'right', width: '202px', height: '48px', padding: '0px' }}>
                            <div onClick={activateCreateCryptopunkModal} className="card-body" style={{ height: '100%', paddingTop: '21px', fontSize: '21px' }}>Donate Cryptopunk</div>
                        </div>
                    </div>
                </div>
            </div>
            <div id='Loading' className="LoadingArea">
                <h1>Loading...</h1>
            </div>
            {list.map((listItem) => (
                <div key={listItem.Id} className="row ElementsContainer bgWhite">
                    <div style={{
                        width: '100%',
                        display: 'flex'
                    }}>
                        {listItem.type == "Cryptopunk" ? (
                            <img src={listItem.image} className="AuctionBidImage pixel" />
                        ) : (
                            <img src={listItem.image} className="AuctionBidImage" />
                        )}

                        <div style={{ width: "100%" }}>
                            <div className="DetialsContainer" style={{ rowGap: "5px" }} >
                                <h2 style={{ fontSize: '2vw' }} >{listItem.name}</h2>

                                <h4 style={{ color: "rgb(139, 139, 139)", fontSize: '1.7vw' }}>Type: {listItem.type}</h4>

                                <div className="TextContainer">
                                    <h4 style={{ color: "#8B8B8B", fontSize: '1.7vw' }}>{listItem.description}</h4>
                                </div>
                            </div>
                            <div className='ElementBottomContainer'>
                                <div style={{ maxWidth: "216px" }}>
                                    <h3 style={{ fontSize: '1vw' }} className="smallgrey">Current bid</h3>
                                    <h4 style={{ fontSize: '1.7vw' }} className='bidprice'>$ {listItem.Bidprice.toFixed(2)} ({listItem.price} {walletType})</h4>
                                    <h7 style={{ fontSize: '1vw' }} name="date" date={date} className="smallgrey">{dateleftBid}</h7>
                                </div>
                                <div className='BidAllcontainer' >
                                    <div className='Bidsbutton'>
                                        <div tokenid={listItem.Id} recid={listItem.recId} title={listItem.name} onClick={activateViewBidModal} className="Bidcontainer col">
                                            <div tokenid={listItem.Id} recid={listItem.recId} title={listItem.name} className="card BidcontainerCard">
                                                <div tokenid={listItem.Id} recid={listItem.recId} title={listItem.name} className="card-body bidbuttonText">View</div>
                                            </div>
                                        </div>


                                        {listItem.type == "Cryptopunk" ? (
                                            <div tokenid={listItem.Id} recid={listItem.recId} wallet={listItem.wallet} highestbid={listItem.price} className="Bidcontainer col" onClick={activateBidCryptopunkTModal}>
                                                <div tokenid={listItem.Id} recid={listItem.recId} wallet={listItem.wallet} highestbid={listItem.price} className="card BidcontainerCard">
                                                    <div tokenid={listItem.Id} recid={listItem.recId} wallet={listItem.wallet} highestbid={listItem.price} className="card-body bidbuttonText">Bid</div>
                                                </div>
                                            </div>
                                        ) : (
                                            <div tokenid={listItem.Id} wallet={listItem.wallet} recid={listItem.recId} highestbid={listItem.price} goalScore={goal} className="Bidcontainer col" onClick={activateBidNFTModal}>
                                                <div tokenid={listItem.Id} wallet={listItem.wallet} recid={listItem.recId} highestbid={listItem.price} className="card BidcontainerCard">
                                                    <div tokenid={listItem.Id} wallet={listItem.wallet} recid={listItem.recId} highestbid={listItem.price} className="card-body bidbuttonText">Bid</div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            <BidNFTModal
                show={modalShow}
                onHide={() => {
                    setModalShow(false);
                    // This is a poor implementation, better to implement an event listener
                    AuctionfetchContractData();
                }}
                tokenId={selectid}
                recid={selectrecid}
                type={selecttype}
                ToAddress={selectwallet}
                eventId={eventId}
                RealEventId={RealEventId}
                Highestbid={selectbid}
                walletType={walletType}
                goal={goal}

            />

            <ViewBidNFTModal
                show={ViewmodalShow}
                onHide={() => {
                    setViewModalShow(false);
                    // This is a poor implementation, better to implement an event listener
                    AuctionfetchContractData();
                }}
                id={selectid}
                walletType={walletType}
                title={selecttitle}

            />
            <DonateNFTModal
                show={CreatemodalShow}
                onHide={() => {
                    setDonateModalShow(false);
                    // This is a poor implementation, better to implement an event listener
                }}
                EventID={eventId}
                type={selecttype}
                SelectedTitle={title}
                enddate={date}
            />


        </>
    );
}
