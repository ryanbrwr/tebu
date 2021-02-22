const axios = require("axios").default

export const coinGeckoData = () => {
  axios
    .get(
      "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Clitecoin%2Cethereum&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true"
    )
    .then(
      (response) =>
        // handle success
        response.data
    )
    .catch(
      (error) =>
        // handle error
        error
    )
}
