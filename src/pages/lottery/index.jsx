import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { toast } from 'react-toastify';
import * as nearAPI from "near-api-js"
import Button from 'react-bootstrap/Button';
import useContract from '../../../services/useContract';

export default function Lottery() {
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
    let lotteryNFTDatelist = [];
    // let currentNFTname = "";
    const { contract, signerAddress } = useContract('ERC721');
    const [currentNFTname, setcurrentNFTname] = useState('');
    const [totalParticipated, settotalParticipated] = useState(0);
    const [currentNFTstartDate, setcurrentNFTstartDate] = useState('');
    const [currentNFTendDate, setcurrentNFTendDate] = useState('');
    const [senderAddress, setsenderAddress] = useState('');
    let lotteryBought = [];


    var Airtable = require('airtable');
    Airtable.configure({
        endpointUrl: 'https://api.airtable.com',
        apiKey: 'keyR1Rrcl9O2s9bTs'
    });
    const base = require('airtable').base('appgbRCpbkzmdcucO');

    const [currentNFTid, setcurrentNFTid] = useState(0);
    const [currentTokenid, setcurrentTokenid] = useState(0);
    const [RecEventID, setRecEventID] = useState('');

    var [NFTslist, setNFTslist] = useState([]);

    function checkTime() {
        var current = new Date();
        var NFTEndDate = new Date(currentNFTendDate);
        var differcne = NFTEndDate - current;
        if (differcne > 0) {
            return true;
        } else {
            return false;
        }
    }

    async function LotteryfetchContractData() {
        if (id && window.location.pathname == "/lottery") {

            var Airtable = require('airtable');
            var base = new Airtable({ apiKey: 'keyR1Rrcl9O2s9bTs' }).base('appgbRCpbkzmdcucO');

            base('events').select({
                filterByFormula: `({id} = '${id}')`,
                view: "Grid view"
            }).eachPage(async function page(records, fetchNextPage) {
                // This function (`page`) will get called for each page of records.
                setRecEventID(records[0].getId());

            });

            await base('lottery').select({
                filterByFormula: `({eventid} = '${id}')`,
                sort: [{ field: "startDate", direction: "asc" }],
                view: "Grid view"
            }).eachPage(async function page(records, fetchNextPage) {
                // This function (`page`) will get called for each page of records.
                var arr = [];
                await records.forEach(function (record) {
                    arr.push({
                        recid: record.getId(),
                        nftid: record.get("nftid"),
                        startDate: record.get("startDate"),
                        endDate: record.get("endDate")
                    });
                });

                lotteryNFTDatelist = (arr);
                await NFTsfetchContractData();
            });
        }
    }
    async function NFTsfetchContractData() {
        if (id && window.location.pathname == "/lottery") {
            var arr = [];
            var Airtable = require('airtable');
            var base = new Airtable({ apiKey: 'keyR1Rrcl9O2s9bTs' }).base('appgbRCpbkzmdcucO');
            var currentList;
            for (let i = lotteryNFTDatelist.length; i > 0; i--) {
                let eList = lotteryNFTDatelist[i - 1];
                currentList = eList;
                var arr = [];
                var test = await base('nfts').select({
                    filterByFormula: `({id} = '${eList.nftid}')`,
                    view: "Grid view"
                })
                var done = new Promise((resolve, reject) => {
                    test.firstPage((err, records) => {
                        if (err) {
                            console.log(err);
                            return reject({});
                        }

                        records.forEach(function (record) {
                            arr.push({
                                recid: record.getId(),
                                id: record.get('id'),
                                name: record.get('name'),
                                description: record.get('description'),
                                price: record.get('price'),
                                image: record.get('image'),
                                startDate: currentList.startDate,
                                endDate: currentList.endDate,
                                participated: record.get('participated'),
                                ownerWallet: record.get('ownerWallet'),
                                TokeniD:record.get('TokenID'),
                            });
                        });
                        resolve(arr);
                    });
                }).then(e => { return e });
                var value = await done;
                NFTslist.push(value[0]);
                console.log(NFTslist);
                setcurrentNFTname(arr[0].name);
                settotalParticipated(arr[0].participated);
                setcurrentNFTendDate(arr[0].endDate);
                setcurrentNFTid(arr[0].id);
                setcurrentNFTstartDate(arr[0].startDate);
                setsenderAddress(arr[0].ownerWallet);
                setcurrentTokenid(arr[0].TokeniD);
                document.getElementById('Loading').style.display = "none";
                document.getElementById('LoadingDate').style.display = "none";
                document.getElementById('LotteryInformation').style.display = "";
            }
            // await lotteryNFTDatelist.forEach(async (eList) => {

            // });


        }
    }

    useEffect(() => {
        LotteryfetchContractData();

    }, []);


    let winnerInfo;
    async function distributeLottery() {
        var arr = [];
        var test = await base('lotteryBought').select({
            filterByFormula: `({nftid} = '${currentNFTid}')`,
            view: "Grid view"
        })
        var done = new Promise((resolve, reject) => {
            test.firstPage((err, records) => {
                if (err) {
                    console.log(err);
                    return reject({});
                }
                records.forEach(function (record) {
                    arr.push({
                        recid: record.getId(),
                        id: record.get('id'),
                        user: record.get('user'),
                        userWallet: record.get('userWallet')
                    });
                });
                resolve(arr);
            });
        }).then(e => { return e });
        var value = await done;
        lotteryBought = value;
        console.log(value);
        var winnerNo = Math.floor(Math.random() * value.length);
        console.log(winnerNo);
        toast.success(`Winner ${value[winnerNo].user}/${value[winnerNo].userWallet}!`);
        let receiverAddress = value[winnerNo].userWallet;
        winnerInfo = value[winnerNo];
    }

    async function TransferringNFTtoWinner() {

        let receiverAddress = winnerInfo.userWallet;
        const result = await contract[
            'safeTransferFrom(address,address,uint256)'
        ](senderAddress, receiverAddress, currentTokenid-1);
        window.open(`https://explorer.testnet.aurora.dev/tx/${result.hash}`, "_blank");

        console.log(result);
    }

    async function UpdatingOnAirtable() {

        var Airtable = require('airtable');
        Airtable.configure({
            endpointUrl: 'https://api.airtable.com',
            apiKey: 'keyR1Rrcl9O2s9bTs'
        });
        const base = require('airtable').base('appgbRCpbkzmdcucO');


        await NFTslist.forEach(async (NFT) => {
            if (NFT.id =currentNFTid){
                 await base('nfts').destroy([NFT.recid], function (err, deletedRecords) {
                if (err) {
                    console.error(err);
                    return;
                }
                console.log('Deleted', deletedRecords.length, 'records');
                window.location.href('/donation')
            });
            }
           
        })


        await lotteryNFTDatelist.forEach(async (Lottery) => {
            if (Lottery.nftid == currentNFTid) {
                await base('lottery').destroy([Lottery.recid], function (err, deletedRecords) {
                    if (err) {
                        console.error(err);
                        return;
                    }
                    console.log('Deleted', deletedRecords.length, 'records');
                });
            }
        })

        await lotteryBought.forEach(async (Person) => {
            if (Person.nftid == currentNFTid) {
                await base('lotteryBought').destroy([Person.recid], function (err, deletedRecords) {
                    if (err) {
                        console.error(err);
                        return;
                    }
                    console.log('Deleted', deletedRecords.length, 'records');
                });
            }
        });



    }
    async function distribute() {
        await toast.promise(distributeLottery, {
            pending: "Distributing...",
            error: "Please try again later",
            success: "Distributed successfully!"
        })
        await toast.promise(TransferringNFTtoWinner, {
            pending: "Transferring NFT to winner",
            error: "Please try again later",
            success: "Transferred successfully!"
        })
        await toast.promise(UpdatingOnAirtable, {
            pending: "Updating on Airtable",
            error: "Please try again later",
            success: "Updated successfully!"
        })
        
    }


    function calculateTimeLeft() {
        try {
            var allDates = document.getElementsByName("dateleftInformation");
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
    setInterval(function () {
        if (window.location.pathname == "/lottery") {
            if (checkTime == false) {
                calculateTimeLeft();
            } else {
                document.getElementsByName("dateleftInformation")[0].style.display = "none";
            }

        }

    }, 1000);
    function LeftDate(datetext) {
        var c = new Date(datetext).getTime();
        var n = new Date().getTime();
        var d = c - n;
        var da = Math.floor(d / (1000 * 60 * 60 * 24));
        var h = Math.floor((d % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var m = Math.floor((d % (1000 * 60 * 60)) / (1000 * 60));
        var s = Math.floor((d % (1000 * 60)) / 1000);
        return (da.toString() + "d " + h.toString() + "h " + m.toString() + "m " + s.toString() + "s");
    }
    function getDateTime(hText, mText, sText) {
        let convertedH = "";
        let convertedM = "";
        let AmPM = "";
        if (hText < 12) {
            AmPM = "AM";
            if (hText < 10) {
                convertedH = `0${hText}`;
            } else {
                convertedH = `${hText}`;
            }
        } else {
            let dividedH = hText / 2;
            AmPM = "PM";
            if (dividedH < 10) {
                convertedH = `0${dividedH}`;
            } else {
                convertedH = `${dividedH}`;
            }
        }
        if (mText < 10) {
            convertedM = `0${mText}`;
        } else {
            convertedM = `${mText}`;
        }

        return `${convertedH}:${convertedM} ${AmPM}`;
    }
    function CheckDate(datetext) {
        var d = new Date(datetext).getDate();
        var m = new Date(datetext).getMonth();
        var y = new Date(datetext).getFullYear();
        var h = new Date(datetext).getHours();
        var mn = new Date(datetext).getMinutes();
        var s = new Date(datetext).getSeconds();

        return (`${d.toString()}/${m.toString()}/${y.toString()} ${getDateTime(h, mn, s)}`);
    }
    return (
        <>
            <NavLink to={`/donation/auction?[${RecEventID}]`}>
                <div style={{ display: 'flex', gap: '14px', position: 'absolute', right: '208px' }} >
                    <div className="card" style={{ color: 'white', overflow: 'hidden', background: '#0BD6BE', textAlign: 'center', width: '172px', cursor: 'pointer', height: '48px', margin: '0', padding: '0px' }}>
                        <div className="card-body" style={{ height: '100%', paddingTop: '21px', fontSize: '21px' }}>Go to Auction</div>
                    </div>
                </div>
            </NavLink>
            <div
                style={{
                    width: "20rem",
                    height: "20rem",
                    alignSelf: 'center',
                    backgroundImage: "linear-gradient(rgb(11 214 190) 0%, rgb(255 141 0) 77%)",
                    borderRadius: "50%",
                    overflow: "hidden",
                    margin: 67,
                    flexFlow: "row nowrap",
                    placeContent: "center",
                    alignItems: "center"
                }}
            >
                <div style={{ width: "100%", height: "10rem", padding: "3rem" }}>
                    <div id="LoadingDate" style={{ width: 280, height: 279, display: "flex", position: "absolute", alignContent: "center", justifyContent: "center", alignItems: "center" }}>
                        <h1 style={{ position: "absolute" }}>
                            Loading...
                        </h1>
                    </div>
                    <div id='LotteryInformation' style={{ display: "none" }}>
                        <h1 style={{ textAlign: "center", color: "darkblue", marginTop: 34 }}>
                            {currentNFTname}
                        </h1>
                        <h3
                            style={{
                                textAlign: "center",
                                color: "black",
                                marginTop: 23,
                                fontSize: 23
                            }}
                        >
                            Total participated
                        </h3>
                        <div
                            style={{
                                display: "flex",
                                alignContent: "center",
                                justifyContent: "center"
                            }}
                        >
                            <h1
                                style={{
                                    textAlign: "center",
                                    backgroundImage: "linear-gradient(45deg, #ff00b1, #00ff89)",
                                    color: "white",
                                    marginTop: 13,
                                    width: "18%",
                                    fontSize: 38,
                                    height: "20%",
                                    borderRadius: "50%",
                                    border: "#5d1fff solid 1px"
                                }}
                            >
                                {totalParticipated}
                            </h1>
                        </div>
                        <h1 name='dateleftInformation' style={{ textAlign: 'center', marginTop: '27px' }} date={currentNFTendDate}>{LeftDate(currentNFTendDate)}</h1>
                        <div onClick={distribute} id="distribute" style={{ width: "100%", display: "flex", alignItems: "center", alignContent: "center", justifyContent: "center", marginTop: 41 }}>
                            <button type="button" className="btn btn-primary" style={{ width: 184, borderRadius: 50 }}>
                                Distribute
                            </button>
                        </div>

                    </div>

                </div>

            </div>


            <div id='Loading' className="LoadingArea">
                <h1>Loading...</h1>
            </div>
            {NFTslist.flatMap((listItem) => (
                <div key={listItem.id} className="row ElementsContainer bgWhite" style={{ backgroundImage: "linear-gradient(295deg, #0bd6be, #a241df)", marginTop: 0 }}>
                    <div key={listItem.id} style={{ width: "100%", display: "flex" }}>
                        <img
                            src={listItem.image}
                            className="AuctionBidImage"
                            style={{ background: "transparent" }}
                        />
                        <div style={{ width: "100%", position: "relative" }}>
                            <div className="DetialsContainer" style={{ rowGap: 5 }}>
                                <h2 style={{ fontSize: "2vw", color: "white" }}>{listItem.name}</h2>
                                <div className="TextContainer">
                                    <h4 style={{ color: "rgb(199 194 194)", fontSize: "1.7vw" }}>
                                        {listItem.description}
                                    </h4>
                                </div>
                                <h4 style={{ color: "rgb(199 194 194)", fontSize: "1.7vw" }}>
                                    Start Date: {CheckDate(listItem.startDate)}
                                </h4>
                                <h4 style={{ color: "rgb(199 194 194)", fontSize: "1.7vw" }}>
                                    End Date:   {CheckDate(listItem.endDate)}
                                </h4>
                            </div>
                            <div
                                className="ElementBottomContainer"
                                style={{ margin: 0, bottom: 25, right: 37, position: "absolute" }}
                            >
                                <div style={{ right: 0, width: "100%", textAlign: "right" }}>
                                    <div
                                        style={{
                                            height: 40,
                                            display: "flex",
                                            alignContent: "center",
                                            flexDirection: "row-reverse",
                                            alignItems: "center"
                                        }}
                                    >
                                        <div style={{ background: "greenyellow", width: 167 }}>
                                            <h4
                                                className="bidprice"
                                                style={{
                                                    fontSize: "1.7vw",
                                                    height: "100%",
                                                    textAlign: "center",
                                                    lineHeight: "1.6"
                                                }}
                                            >
                                                Status
                                            </h4>
                                        </div>
                                    </div>
                                    <div
                                        style={{
                                            height: 40,
                                            display: "flex",
                                            alignContent: "center",
                                            flexDirection: "row-reverse",
                                            alignItems: "center"
                                        }}
                                    >

                                        {(currentNFTid != listItem.id) ? (<>
                                            <div style={{ background: "rgb(15 28 179)", width: 167, color: "white" }}>
                                                <h4 className="bidprice" style={{ fontSize: 14, height: 32, verticalAlign: "middle", textAlign: "center", lineHeight: "2.3" }}>
                                                    At {CheckDate(listItem.startDate)}
                                                </h4>
                                            </div>
                                        </>) : (<>
                                            <div style={{ background: "#ff2f2f", width: 167, color: "white" }}>
                                                <h4 className="bidprice" style={{ fontSize: "1.7vw", height: "100%", textAlign: "center", lineHeight: "1.6" }} >
                                                    In Progress
                                                </h4>
                                            </div>

                                        </>)}

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}