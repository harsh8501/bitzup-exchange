# Bitzup Futures — Market API (V5)

The Bitzup Futures Market API provides public market data, including tickers, order books, trades, and klines. This API is modeled after the Bybit V5 structure.

> **Base URL:** `https://api.bitzup.com/v5`  
> **Type:** Public API (No authentication required)

---

## Market Data

### 1. Get Tickers
Query the latest ticker information for one or more symbols.

**HTTP Request**
`GET /market/tickers`

**Request Parameters**

| Parameter | Required | Type | Comments |
|---|---|---|---|
| `category` | ✅ | string | Product category: `linear` |
| `symbol` | ❌ | string | Symbol name, e.g., `BTCUSDT` |

**Response Example**
```json
{
    "retCode": 0,
    "retMsg": "OK",
    "result": {
        "category": "linear",
        "list": [
            {
                "symbol": "BTCUSDT",
                "lastPrice": "65000.50",
                "indexPrice": "65001.20",
                "markPrice": "65000.80",
                "prevPrice24h": "64200.00",
                "price24hPcnt": "0.0125",
                "highPrice24h": "66000.00",
                "lowPrice24h": "64000.00",
                "turnover24h": "125000000.00",
                "volume24h": "1923.50",
                "fundingRate": "0.0001",
                "nextFundingTime": "1713456000000"
            }
        ]
    },
    "retExtInfo": {},
    "time": 1713456000000
}
```

---

### 2. Get Order Book
Query the order book (depth) for a symbol.

**HTTP Request**
`GET /market/orderbook`

**Request Parameters**

| Parameter | Required | Type | Comments |
|---|---|---|---|
| `category` | ✅ | string | Product category: `linear` |
| `symbol` | ✅ | string | Symbol name, e.g., `BTCUSDT` |
| `limit` | ❌ | integer | Limit for entries. Default: `25`. Max: `50`. |

**Response Example**
```json
{
    "retCode": 0,
    "retMsg": "OK",
    "result": {
        "s": "BTCUSDT",
        "b": [
            ["65000.00", "1.5"],
            ["64999.50", "2.1"]
        ],
        "a": [
            ["65001.00", "0.8"],
            ["65001.50", "3.2"]
        ],
        "ts": 1713456000000,
        "u": 1234567
    },
    "retExtInfo": {},
    "time": 1713456000000
}
```

---

### 3. Get Public Trading History
Query the most recent public trades.

**HTTP Request**
`GET /market/recent-trade`

**Request Parameters**

| Parameter | Required | Type | Comments |
|---|---|---|---|
| `category` | ✅ | string | Product category: `linear` |
| `symbol` | ✅ | string | Symbol name, e.g., `BTCUSDT` |
| `limit` | ❌ | integer | Limit for records. Max: `100`. |

**Response Example**
```json
{
    "retCode": 0,
    "retMsg": "OK",
    "result": {
        "category": "linear",
        "list": [
            {
                "execId": "5e1a2b3c",
                "symbol": "BTCUSDT",
                "price": "65000.00",
                "size": "0.1",
                "side": "Buy",
                "time": "1713456000000",
                "isBlockTrade": false
            }
        ]
    },
    "retExtInfo": {},
    "time": 1713456000000
}
```

---

### 4. Get Kline
Query historical klines.

**HTTP Request**
`GET /market/kline`

**Request Parameters**

| Parameter | Required | Type | Comments |
|---|---|---|---|
| `category` | ✅ | string | Product category: `linear` |
| `symbol` | ✅ | string | Symbol name, e.g., `BTCUSDT` |
| `interval` | ✅ | string | Interval: `1`,`3`,`5`,`15`,`30`,`60`,`120`,`240`,`360`,`720`,`D`,`W`,`M` |
| `start` | ❌ | integer | Start time (ms) |
| `end` | ❌ | integer | End time (ms) |
| `limit` | ❌ | integer | Limit. Max: `200`. |
