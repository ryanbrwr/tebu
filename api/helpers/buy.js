const axios = require('axios')
var { CoinbasePro } = require('coinbase-pro-node');

/**
 * Place an order and transfer the Tebu fee to the company account
 *
 * @param cronID - cron manager id of the specified job
 * @param api_key - coinbase api key
 * @param secret_key - coinbase secret key
 * @param passphrase - coinbase passphrase
 * @param currency - the currency that the transaction will be purchasing, e.g - 'BTC'
 * @param amount - the amount in the quote currency that will be purchased, e.g - 10.00
 * 
 * @see https://github.com/bennycode/coinbase-pro-node
 * @see https://docs.pro.coinbase.com/#place-a-new-order
 * @see https://docs.pro.coinbase.com/#coinbase56
 */

const coinbase = (cronID, api_key, secret_key, passphrase, currency, amount) => {
    const app = require('../app')
    const manager = app.manager

    var auth = {
        apiKey: api_key,
        apiSecret: secret_key,
        passphrase: passphrase,
        useSandbox: false
    };

    var client = new CoinbasePro(auth)


    const ids = {
        'BTC': 'bitcoin',
        'ETH': 'ethereum',
        'LTC': 'litecoin'
    }

    const account = {
        'BTC': '34qRhW2Hs4poJvSdRVvs78UgU8WDkjije2',
        'ETH': 'ETH',
        'LTC': 'LTC'
    }

    let order = {
        type: 'market', 
        product_id: `${currency}-USD`, 
        side: 'buy', 
        funds: amount
    }

    console.log(order)
    // Placing the order 
    client.rest.order.placeOrder(order).then((data) => {
        console.log('===============')
        console.log('BUYING DATA')
        console.log(data)

        // Pulling the current price from coingecko
        axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=${ids[currency]}&vs_currencies=usd`).then((data) => {
            let price = amount / data.data[ids[currency]].usd
            price = price * 0.0025
            price = Math.ceil(price * 10000000) / 10000000
            price = 0.001
            price = price.toString()

            // Withdrawing the Tebu fee and placing it in the company Coinbase account
            client.rest.withdraw.withdrawToCryptoAddress(price, currency, account[currency], undefined, true).then((data) => {
                console.log('===============')
                console.log('Transfering DATA')
                console.log(data)
            }).catch((error) => {
                console.log('===============')
                console.log('Transfering DATA')
                console.log(error)
                manager.stop(cronID)
            })
        }).catch((error) => {
            console.log('===============')
            console.log('Fetching DATA')
            console.log(error)
            manager.stop(cronID)
        })
    }).catch((error) => {
        console.log('===============')
        console.log('Buying DATA')
        console.log(error)
        manager.stop(cronID)
    })
}

module.exports = {
    coinbase
}