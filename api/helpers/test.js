var { CoinbasePro } = require('coinbase-pro-node');

const auth = {
    apiKey: '6695b7e73f7d5eae24db8d4d053da6db',
    apiSecret : 'ArNIONfuvOelvuE28N3CS/bxz757a1jLNntS+nGaOdtWWd76UFp16cEfu3Q6rdciZj/Xa1d74O3XzMJ9WHIDMw==',
    passphrase: 'yn7qomk8yvj',
    useSandbox: false
}

const client = new CoinbasePro(auth)

client.rest.transfer.getTransfers().then((data) => {
    console.log(data)
})