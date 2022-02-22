import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import UseFormInput from '../../components/components/UseFormInput';
import { createTokenAPI } from '@/pages/Events/token';
import * as nearAPI from "near-api-js"

import { toast } from 'react-toastify';

import useContract from '../../../services/useContract';
import { WalletAccount } from 'near-api-js';

export default function BuyLotteryModal({
    show,
    onHide,
    nftid,
    nftrecid,
    ToAddress,
    price,
    ticketnumber
}) {
    const { contract, signerAddress } = useContract('ERC721');

    const [Quantity, amountTicketInput] = UseFormInput({
        type: 'text',
        placeholder: ''
    });
    const [Totalamount, setTotalamount] = useState(0)

    useEffect(() => {
        setTotalamount(Quantity * price);
    }, [Quantity]);

    async function buyLottery() {
        try {
            await toast.promise(BuyingLottery(Totalamount, ToAddress), {
                pending: "Buying Lottery Ticket...",
                error: "Please try again later",
                success: "success!"
            })
            await toast.promise(CreatingOnAirtable(Totalamount, ToAddress), {
                pending: "Updating Lottery Ticket on Airtable...",
                error: "Please try again later",
                success: "Success!"
            })

        } catch (e) {
        }

    }
    async function BuyingLottery(Amount, ToAddress) {
        try {
            var buttonProps = document.getElementsByClassName("btn btn-primary")[0];
            if (window.walletAccount.isSignedIn() == false) {
                buttonProps.innerText = "Connect to NEAR wallet"
                await toast.warn("Not connected with NEAR wallet! Connecting...");
                await window.walletAccount.requestSignIn(
                    window.nearConfig.contractName,
                    'Demeter');
                return;
            }
            const config = {
                networkId: "testnet",
                keyStore: new nearAPI.keyStores.BrowserLocalStorageKeyStore(),
                nodeUrl: "https://rpc.testnet.near.org",
                walletUrl: "https://wallet.testnet.near.org",
                helperUrl: "https://helper.testnet.near.org",
                explorerUrl: "https://explorer.testnet.near.org",
            };
            // sends NEAR tokens
            const near = await nearAPI.connect(config);
            const account = await near.account(walletAccount.getAccountId());
            //const amountInYocto = nearAPI.utils.format.formatNearAmount(Amount);

            const amountInYocto = (Number(Amount) * 1000000000000000000000000).toLocaleString('fullwide', { useGrouping: false });

            await account.sendMoney(
                ToAddress, // receiver account
                amountInYocto // amount in yoctoNEAR
            ).catch((error) => {
                console.error("error:", error);
                console.log(error);

            })

        } catch (e) {

        }

    }
    async function CreatingOnAirtable() {

        var Airtable = require('airtable');
        Airtable.configure({
            endpointUrl: 'https://api.airtable.com',
            apiKey: 'keyR1Rrcl9O2s9bTs'
        });
        const base = require('airtable').base('appgbRCpbkzmdcucO');

        if (ticketnumber == null) {
            ticketnumber = 0;
        }
        let currentWallet = window.walletAccount._authData.accountId;
        var endnumber = Number(ticketnumber) + Number(Quantity);
        for (let i = Number(ticketnumber); i < endnumber; i++) {
            await base('lotteryBought').create([
                {
                    "fields": {
                        "nftid": Number(nftid),
                        "user": currentWallet,
                        "userWallet": signerAddress,
                        "number": i
                    }
                }
            ]);
        }

        let users = '';
        let participated = 0;
        var done = new Promise(async (resolve, reject) => {
            await base('nfts').find(nftrecid, async function (err, record) {
                users = record.get('isbought');
                if (record.get('participated') != "" && record.get('participated') != null) {
                    participated = record.get('participated');
                }
                resolve(participated);
            });

        }).then(e => { return e });
        console.log(done);

        users = users + ", " + window.walletAccount._authData.accountId;
        await base('nfts').update([
            {
                "id": nftrecid,
                "fields": {
                    "isbought": users,
                    "participated": participated + 1,
                    "ticketnumber": endnumber
                }
            }
        ]);
        window.location.reload();
    }


    return (<>
        <Modal
            show={show}
            onHide={onHide}
            aria-labelledby="contained-modal-title-vcenter"
            size="gg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Buy Lottery Ticket
                </Modal.Title>

            </Modal.Header>
            <Modal.Body className="show-grid">
                <Form>
                    <Form.Group className="mb-3" controlId="formGroupName">
                        <Form.Label>Total tickets</Form.Label>
                        {amountTicketInput}
                        <span>Total price {Totalamount} NEAR</span>
                    </Form.Group>

                    <div className="d-grid" style={{ marginTop: "20px" }}>
                        <Button variant="primary" onClick={buyLottery}>
                            Buy Ticket
                        </Button>
                    </div>
                </Form>
            </Modal.Body>
        </Modal>

    </>


    );
}
