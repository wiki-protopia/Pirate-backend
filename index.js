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

app.get('/api/protocol-deposit/benchmark', (req, res) => {

    res.status(200).json(
        [
            {
                "id": 9352,
                "chain_id": 1,
                "clipper_lp_balance": "3968010480261133707844111",
                "clipper_lp_price": "1.8183684467435675",
                "total_liquidity": "7215305.053654634",
                "rebalanced_portfolio": "1.009326889723413",
                "asset_prices": {
                    "WETH": 4001.8818439132256,
                    "WBTC": 72806.20329357717,
                    "DAI": 0.9999775760616915,
                    "USDC": 1.000668645522981,
                    "USDT": 1.0004666013139432
                },
                "created_at": "2024-03-14T00:00:00.000Z"
            },
            {
                "id": 9355,
                "chain_id": 1,
                "clipper_lp_balance": "3967815934125134127714769",
                "clipper_lp_price": "1.787517225841479",
                "total_liquidity": "7092539.331216977",
                "rebalanced_portfolio": "0.9829856929584702",
                "asset_prices": {
                    "WETH": 3877.548894450626,
                    "WBTC": 71144.59491717238,
                    "DAI": 0.999165693995468,
                    "USDC": 0.999156475073843,
                    "USDT": 0.9991294912124173
                },
                "created_at": "2024-03-15T00:00:00.000Z"
            },
            {
                "id": 9360,
                "chain_id": 1,
                "clipper_lp_balance": "3967815934125134127714769",
                "clipper_lp_price": "1.7537765220754875",
                "total_liquidity": "6958662.429185679",
                "rebalanced_portfolio": "0.9795533818522467",
                "asset_prices": {
                    "WETH": 3733.4062831535757,
                    "WBTC": 69077.18215995295,
                    "DAI": 0.9982599412897979,
                    "USDC": 0.9990936664098659,
                    "USDT": 0.9990811612809617
                },
                "created_at": "2024-03-16T00:00:00.000Z"
            },
            {
                "id": 9371,
                "chain_id": 1,
                "clipper_lp_balance": "3967815934125134127714769",
                "clipper_lp_price": "1.6896134955231574",
                "total_liquidity": "6704075.35004965",
                "rebalanced_portfolio": "0.9641149354980387",
                "asset_prices": {
                    "WETH": 3516.9326254005978,
                    "WBTC": 65094.08062574542,
                    "DAI": 0.9972760280622457,
                    "USDC": 0.9984746007933034,
                    "USDT": 0.9972592102773153
                },
                "created_at": "2024-03-17T00:00:00.000Z"
            },
            {
                "id": 9369,
                "chain_id": 1,
                "clipper_lp_balance": "3855789772792939218174885",
                "clipper_lp_price": "1.7364859972125932",
                "total_liquidity": "6695524.948650465",
                "rebalanced_portfolio": "1.0278236142205932",
                "asset_prices": {
                    "WETH": 3654.1484077798614,
                    "WBTC": 68262.96286331012,
                    "DAI": 0.9998180382853976,
                    "USDC": 1.0005927166205375,
                    "USDT": 0.9998303800071009
                },
                "created_at": "2024-03-18T00:00:00.000Z"
            },
            {
                "id": 9358,
                "chain_id": 1,
                "clipper_lp_balance": "3855784614336478983054962",
                "clipper_lp_price": "1.7108494766526554",
                "total_liquidity": "6596667.089522926",
                "rebalanced_portfolio": "0.9850404147802434",
                "asset_prices": {
                    "WETH": 3524.496359325053,
                    "WBTC": 67448.04526085824,
                    "DAI": 0.9990494943036641,
                    "USDC": 0.9991002742522294,
                    "USDT": 0.9990962954791072
                },
                "created_at": "2024-03-19T00:00:00.000Z"
            },
            {
                "id": 9346,
                "chain_id": 1,
                "clipper_lp_balance": "3855784614336478983054962",
                "clipper_lp_price": "1.6103943143117598",
                "total_liquidity": "6209333.620138227",
                "rebalanced_portfolio": "0.942800612241308",
                "asset_prices": {
                    "WETH": 3164.7175751962964,
                    "WBTC": 61784.00065145008,
                    "DAI": 0.999145452806631,
                    "USDC": 0.9977078291091114,
                    "USDT": 1.0000728025791887
                },
                "created_at": "2024-03-20T00:00:00.000Z"
            },
            {
                "id": 9349,
                "chain_id": 1,
                "clipper_lp_balance": "3855784614336478983054962",
                "clipper_lp_price": "1.7124221742897636",
                "total_liquidity": "6602731.072875091",
                "rebalanced_portfolio": "1.0634620712787748",
                "asset_prices": {
                    "WETH": 3514.7275770368487,
                    "WBTC": 67655.68281157357,
                    "DAI": 0.9990529913362443,
                    "USDC": 1.0003526185461837,
                    "USDT": 0.9996005520028796
                },
                "created_at": "2024-03-21T00:00:00.000Z"
            },
            {
                "id": 9348,
                "chain_id": 1,
                "clipper_lp_balance": "3854438976775486033579146",
                "clipper_lp_price": "1.6922348750021727",
                "total_liquidity": "6522616.0600671675",
                "rebalanced_portfolio": "0.9880530584344868",
                "asset_prices": {
                    "WETH": 3488.720252194218,
                    "WBTC": 65444.837106750085,
                    "DAI": 1.000230802521699,
                    "USDC": 1.0011099427529855,
                    "USDT": 1.000402295912586
                },
                "created_at": "2024-03-22T00:00:00.000Z"
            },
            {
                "id": 9350,
                "chain_id": 1,
                "clipper_lp_balance": "3854438976775486033579146",
                "clipper_lp_price": "1.6511938534621355",
                "total_liquidity": "6364425.946996566",
                "rebalanced_portfolio": "0.9757787155085009",
                "asset_prices": {
                    "WETH": 3324.131106752756,
                    "WBTC": 63413.35387431135,
                    "DAI": 0.9991965433467933,
                    "USDC": 1.0004411742832555,
                    "USDT": 1.000522729812649
                },
                "created_at": "2024-03-23T00:00:00.000Z"
            },
            {
                "id": 9356,
                "chain_id": 1,
                "clipper_lp_balance": "3855685294586158766820810",
                "clipper_lp_price": "1.6629520628602366",
                "total_liquidity": "6411819.814371931",
                "rebalanced_portfolio": "1.0070218056444835",
                "asset_prices": {
                    "WETH": 3354.2716913360564,
                    "WBTC": 64404.11690562285,
                    "DAI": 0.9976979947100171,
                    "USDC": 0.9990664661115882,
                    "USDT": 0.9990777106719863
                },
                "created_at": "2024-03-24T00:00:00.000Z"
            },
            {
                "id": 9359,
                "chain_id": 1,
                "clipper_lp_balance": "3855685294586158766820810",
                "clipper_lp_price": "1.7003575951830059",
                "total_liquidity": "6556043.775285001",
                "rebalanced_portfolio": "1.0224312740205086",
                "asset_prices": {
                    "WETH": 3452.145218650314,
                    "WBTC": 67144.64679189665,
                    "DAI": 0.9989563133099485,
                    "USDC": 0.9999453523411093,
                    "USDT": 1.000329540160283
                },
                "created_at": "2024-03-25T00:00:00.000Z"
            },
            {
                "id": 9374,
                "chain_id": 1,
                "clipper_lp_balance": "3855667585462123276144228",
                "clipper_lp_price": "1.7433769557628127",
                "total_liquidity": "6721882.017576311",
                "rebalanced_portfolio": "1.025369778276855",
                "asset_prices": {
                    "WETH": 3590.614102864207,
                    "WBTC": 69965.05733345605,
                    "DAI": 0.9998552605741614,
                    "USDC": 1.0005787909745587,
                    "USDT": 0.9999592905262291
                },
                "created_at": "2024-03-26T00:00:00.000Z"
            },
            {
                "id": 9370,
                "chain_id": 1,
                "clipper_lp_balance": "3854933361903324896845042",
                "clipper_lp_price": "1.742999592441323",
                "total_liquidity": "6719147.278685954",
                "rebalanced_portfolio": "0.9995461213027705",
                "asset_prices": {
                    "WETH": 3584.6287751529676,
                    "WBTC": 69950.90350339952,
                    "DAI": 1.0005756668313857,
                    "USDC": 0.9999675459066995,
                    "USDT": 1.001435217557169
                },
                "created_at": "2024-03-27T00:00:00.000Z"
            },
            {
                "id": 9367,
                "chain_id": 1,
                "clipper_lp_balance": "3854933361903324896845042",
                "clipper_lp_price": "1.7264785284595654",
                "total_liquidity": "6655459.677968537",
                "rebalanced_portfolio": "0.990584517787361",
                "asset_prices": {
                    "WETH": 3504.963350910906,
                    "WBTC": 69379.05322294017,
                    "DAI": 0.9974907876534437,
                    "USDC": 1.002630142657458,
                    "USDT": 1.001539464645927
                },
                "created_at": "2024-03-28T00:00:00.000Z"
            },
            {
                "id": 9351,
                "chain_id": 1,
                "clipper_lp_balance": "3854933361903324896845042",
                "clipper_lp_price": "1.7422674824231066",
                "total_liquidity": "6716325.043352148",
                "rebalanced_portfolio": "1.0087849472532902",
                "asset_prices": {
                    "WETH": 3559.0240884114764,
                    "WBTC": 70825.70305974729,
                    "DAI": 0.9977414009074382,
                    "USDC": 0.9990718248770112,
                    "USDT": 0.9994312343439737
                },
                "created_at": "2024-03-29T00:00:00.000Z"
            },
            {
                "id": 9364,
                "chain_id": 1,
                "clipper_lp_balance": "3854933361903324896845042",
                "clipper_lp_price": "1.7302329097633515",
                "total_liquidity": "6669932.567709808",
                "rebalanced_portfolio": "0.9931836069960419",
                "asset_prices": {
                    "WETH": 3512.293802879026,
                    "WBTC": 69862.62687122382,
                    "DAI": 0.9990071473773184,
                    "USDC": 0.9998857912900128,
                    "USDT": 1.000176718923915
                },
                "created_at": "2024-03-30T00:00:00.000Z"
            },
            {
                "id": 9345,
                "chain_id": 1,
                "clipper_lp_balance": "3854733468234801001520150",
                "clipper_lp_price": "1.7293667006145315",
                "total_liquidity": "6666247.699709628",
                "rebalanced_portfolio": "0.9993952218102428",
                "asset_prices": {
                    "WETH": 3507.6656427271146,
                    "WBTC": 69714.67203597908,
                    "DAI": 0.998910665313939,
                    "USDC": 1.0002608623311338,
                    "USDT": 1.0005795148966314
                },
                "created_at": "2024-03-31T00:00:00.000Z"
            },
            {
                "id": 9373,
                "chain_id": 1,
                "clipper_lp_balance": "3854733468234801001520150",
                "clipper_lp_price": "1.7605043562778278",
                "total_liquidity": "6786275.063117307",
                "rebalanced_portfolio": "1.0181521730666176",
                "asset_prices": {
                    "WETH": 3642.6637777650667,
                    "WBTC": 71251.47527536144,
                    "DAI": 0.998891165259298,
                    "USDC": 0.9998785322687238,
                    "USDT": 1.0000478169420595
                },
                "created_at": "2024-04-01T00:00:00.000Z"
            },
            {
                "id": 9372,
                "chain_id": 1,
                "clipper_lp_balance": "3854768002045381247341400",
                "clipper_lp_price": "1.7295014578667105",
                "total_liquidity": "6666826.879275434",
                "rebalanced_portfolio": "0.9820879190422833",
                "asset_prices": {
                    "WETH": 3506.8381903138365,
                    "WBTC": 69713.35329452273,
                    "DAI": 0.9994273245287395,
                    "USDC": 0.9996058887659534,
                    "USDT": 1.0002217381162306
                },
                "created_at": "2024-04-02T00:00:00.000Z"
            },
            {
                "id": 9362,
                "chain_id": 1,
                "clipper_lp_balance": "3854768002045381247341400",
                "clipper_lp_price": "1.6695562739370176",
                "total_liquidity": "6435752.102386529",
                "rebalanced_portfolio": "0.9663047545474824",
                "asset_prices": {
                    "WETH": 3274.3152376634725,
                    "WBTC": 65434.79756534601,
                    "DAI": 0.9989880349709727,
                    "USDC": 0.9993357133367974,
                    "USDT": 1.0005662413430654
                },
                "created_at": "2024-04-03T00:00:00.000Z"
            },
            {
                "id": 9375,
                "chain_id": 1,
                "clipper_lp_balance": "3854807419594725593621908",
                "clipper_lp_price": "1.6803544706421487",
                "total_liquidity": "6477442.880980522",
                "rebalanced_portfolio": "1.0064150039620314",
                "asset_prices": {
                    "WETH": 3315.0675994113067,
                    "WBTC": 66152.96652315544,
                    "DAI": 0.9998145868358759,
                    "USDC": 0.9997542196599714,
                    "USDT": 1.0000730439028167
                },
                "created_at": "2024-04-04T00:00:00.000Z"
            },
            {
                "id": 9366,
                "chain_id": 1,
                "clipper_lp_balance": "3854807419594725593621908",
                "clipper_lp_price": "1.687784934907266",
                "total_liquidity": "6506085.88976073",
                "rebalanced_portfolio": "1.0037338403755804",
                "asset_prices": {
                    "WETH": 3327.8923491228234,
                    "WBTC": 68471.71806628745,
                    "DAI": 0.9985452122709185,
                    "USDC": 1.0010059875486195,
                    "USDT": 1.0005105886169572
                },
                "created_at": "2024-04-05T00:00:00.000Z"
            },
            {
                "id": 9354,
                "chain_id": 1,
                "clipper_lp_balance": "3854807419594725593621909",
                "clipper_lp_price": "1.6854440151036079",
                "total_liquidity": "6497062.094732912",
                "rebalanced_portfolio": "0.9986114887596828",
                "asset_prices": {
                    "WETH": 3323.8552975727343,
                    "WBTC": 67942.57209975034,
                    "DAI": 0.9989391677428754,
                    "USDC": 0.998893992078239,
                    "USDT": 1.0004113557710408
                },
                "created_at": "2024-04-06T00:00:00.000Z"
            },
            {
                "id": 9353,
                "chain_id": 1,
                "clipper_lp_balance": "3854807419594725593621909",
                "clipper_lp_price": "1.69466995028494",
                "total_liquidity": "6532626.298122612",
                "rebalanced_portfolio": "1.0053511344335806",
                "asset_prices": {
                    "WETH": 3359.401905103415,
                    "WBTC": 68967.84303107912,
                    "DAI": 1.0001892990823578,
                    "USDC": 0.9979720313922731,
                    "USDT": 0.9988353705834258
                },
                "created_at": "2024-04-07T00:00:00.000Z"
            },
            {
                "id": 9368,
                "chain_id": 1,
                "clipper_lp_balance": "3854739625451010942253816",
                "clipper_lp_price": "1.7181932277212009",
                "total_liquidity": "6623187.519078486",
                "rebalanced_portfolio": "1.0140004351888963",
                "asset_prices": {
                    "WETH": 3451.891671255899,
                    "WBTC": 69489.86991422613,
                    "DAI": 1.000820041552792,
                    "USDC": 0.9998282683645405,
                    "USDT": 0.9999779165247975
                },
                "created_at": "2024-04-08T00:00:00.000Z"
            },
            {
                "id": 9361,
                "chain_id": 1,
                "clipper_lp_balance": "3854739625451010942253816",
                "clipper_lp_price": "1.77517399888218",
                "total_liquidity": "6842833.555561468",
                "rebalanced_portfolio": "1.0340606751888932",
                "asset_prices": {
                    "WETH": 3691.2344193843983,
                    "WBTC": 71671.7457087507,
                    "DAI": 0.9986153324860738,
                    "USDC": 0.9994821029854005,
                    "USDT": 1.000036913451832
                },
                "created_at": "2024-04-09T00:00:00.000Z"
            },
            {
                "id": 9357,
                "chain_id": 1,
                "clipper_lp_balance": "3854739625451010942253816",
                "clipper_lp_price": "1.7310675371760789",
                "total_liquidity": "6672814.629884522",
                "rebalanced_portfolio": "0.9749930441562864",
                "asset_prices": {
                    "WETH": 3503.7626734442993,
                    "WBTC": 69154.17564204478,
                    "DAI": 1.0001172381850658,
                    "USDC": 1.0008344967684975,
                    "USDT": 0.9997380663208548
                },
                "created_at": "2024-04-10T00:00:00.000Z"
            },
            {
                "id": 9363,
                "chain_id": 1,
                "clipper_lp_balance": "3854739625451010942253816",
                "clipper_lp_price": "1.7399427446614313",
                "total_liquidity": "6707026.24386241",
                "rebalanced_portfolio": "1.0050574086076784",
                "asset_prices": {
                    "WETH": 3538.894688833711,
                    "WBTC": 70507.63057872467,
                    "DAI": 1.0001283114040087,
                    "USDC": 0.9995698086418454,
                    "USDT": 1.0000538410091768
                },
                "created_at": "2024-04-11T00:00:00.000Z"
            },
            {
                "id": 9347,
                "chain_id": 1,
                "clipper_lp_balance": "2671416485237275019542142",
                "clipper_lp_price": "1.7326612983196181",
                "total_liquidity": "4628659.955663648",
                "rebalanced_portfolio": "0.9957008606225646",
                "asset_prices": {
                    "WETH": 3506.512512435996,
                    "WBTC": 70133.81434949784,
                    "DAI": 0.9999127256894282,
                    "USDC": 1.0009584216769183,
                    "USDT": 1.0001895403867294
                },
                "created_at": "2024-04-12T00:00:00.000Z"
            },
            {
                "id": 9365,
                "chain_id": 1,
                "clipper_lp_balance": "2671416485237275019542142",
                "clipper_lp_price": "1.668204931021113",
                "total_liquidity": "4456470.153483912",
                "rebalanced_portfolio": "0.9630496357869638",
                "asset_prices": {
                    "WETH": 3245.6746506309046,
                    "WBTC": 67236.38624313695,
                    "DAI": 1.0003469500389368,
                    "USDC": 1.001301537692703,
                    "USDT": 1.0004952276369117
                },
                "created_at": "2024-04-13T00:00:00.000Z"
            }
        ]
    );
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

// Export the Express API
module.exports = app