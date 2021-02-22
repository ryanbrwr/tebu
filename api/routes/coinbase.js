var express = require("express");
var router = express.Router();
const Plan = require('../models/plan');
var { CoinbasePro } = require('coinbase-pro-node');
const { v4: uuidv4 } = require('uuid');
const scheduler = require('../helpers/scheduler')
const buy = require('../helpers/buy')

router.get("/user", function (req, res, next) {
    let query = req.query

    var auth = {
        apiKey: query.api_key,
        apiSecret: query.secret_key,
        passphrase: query.passphrase,
        useSandbox: false
    };

    var client = new CoinbasePro(auth)

    // Making sure the user has adequate API permissions
    client.rest.withdraw.getFeeEstimate('BTC', '3PCsKHYUnhssu47DTgti8q1w7P97REHYyn').then(data => {
        res.json({ status: 200, valid: true, message: 'user is able to transfer' })

    }).catch((error) => {
        res.json({ status: 401, valid: false, message: 'cannot find user, or user does not have tranfer ability' })
    })
});

router.post("/plan", function (req, res, next) {

    let query = req.body.params
    console.log(query)

    let cronID = uuidv4()

    var document = new Plan({
        userUID: query.userUID,
        market: query.market,
        frequency: query.frequency,
        currency: query.currency,
        amount: query.amount,
        keys: {
            api: query.api_key,
            secret: query.secret_key,
            passphrase: query.passphrase
        },
        cronID: cronID
    })

    let jobAdded = scheduler.add(cronID, buy.coinbase(cronID, query.api_key, query.secret_key, query.passphrase, query.currency, query.amount), query.frequency)

    if (jobAdded) {
        document.save().then((data) => {
            res.send({ status: 200, message: 'successfully started job' })
        }).catch((error) => {
            console.log(error)
            res.send({ status: 400, message: 'job not added to databse' })
        })
    } else {
        res.send({ status: 400, message: 'job not started' })
    }
});

module.exports = router;