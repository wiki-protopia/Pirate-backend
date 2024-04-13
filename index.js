// index.js
const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 4000

app.use('*', cors());

app.get('/', (req, res) => {
  res.status(200).json('Welcome, your app is working well');
})

app.get('/api/apy', (req, res) => {
    // Dummy data for demonstration
    res.status(200).json(
        {
            "tvlUsd": 4460932.1899905745,
            "apy": 113.81447883168182,
            "profitYield": 5.558654422635571,
            "adjustedApy": 105.44185165268182,
            "totalFeeInRange": 679.3638478621504,
            "dataFrom": 1712909102,
            "avoidedImpermanentLoss": -99.88319723004624,
            "avoidedImpermanentLossInUsd": -81767.81858804954,
            "txCount": 81,
            "volume": 633505.8765221834,
            "rewardApy": 8.372627179,
            "k": 0.04,
            "pool": {
                "chain_id": 1,
                "address": "0x655eDCE464CC797526600a462A8154650EEe4B77",
                "num_assets": 5,
                "pool_tokens": 2.671416485237275e+24,
                "value_in_usd": 4460932.1899905745,
                "swaps_enabled": true
            },
            "assets": [
                {
                    "name": "WBTC",
                    "address": "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
                    "balance": "52432734",
                    "price_in_usd": 67329.036,
                    "value_in_usd": 35302.454350644235,
                    "target_value_in_usd": 35267.30058970417
                },
                {
                    "name": "USDC",
                    "address": "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
                    "balance": "946800867766",
                    "price_in_usd": 1,
                    "value_in_usd": 946800.867766,
                    "target_value_in_usd": 937960.1220666005
                },
                {
                    "name": "USDT",
                    "address": "0xdAC17F958D2ee523a2206206994597C13D831ec7",
                    "balance": "575480524555",
                    "price_in_usd": 1,
                    "value_in_usd": 575480.524555,
                    "target_value_in_usd": 578152.4686836749
                },
                {
                    "name": "DAI",
                    "address": "0x6B175474E89094C44Da98b954EedeAC495271d0F",
                    "balance": "701568165847524629784791",
                    "price_in_usd": 1,
                    "value_in_usd": 701568.1658475247,
                    "target_value_in_usd": 705346.0117940836
                },
                {
                    "name": "ETH",
                    "address": "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
                    "balance": "676496668634522054729",
                    "price_in_usd": 3254.6800000000003,
                    "value_in_usd": 2201780.1774714063,
                    "target_value_in_usd": 2204206.286856511
                }
            ],
            "pool_type": "onchain"
        }
    );
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

// Export the Express API
module.exports = app