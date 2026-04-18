# Bitzup Futures — Private API (V5)

The Bitzup Futures Private API provides endpoints for account management, position handling, and trade execution. This API follows the Bybit V5 standard for parameter naming and response structures.

> **Base URL:** `https://api.bitzup.com/v5`  
> **Authentication:** API Key & Secret or Bearer Token (depending on integration level).

---

## Trade

### 1. Place Order
Place a new order in the futures market.

**HTTP Request**
`POST /order/create`

**Request Parameters**

| Parameter | Required | Type | Comments |
|---|---|---|---|
| `category` | ✅ | string | Product category: `linear` |
| `symbol` | ✅ | string | Symbol name, e.g., `BTCUSDT` |
| `side` | ✅ | string | `Buy`, `Sell` |
| `orderType` | ✅ | string | `Market`, `Limit` |
| `qty` | ✅ | string | Order quantity |
| `price` | ❌ | string | Order price for `Limit` orders |
| `timeInForce` | ❌ | string | `GTC`, `IOC`, `FOK`, `PostOnly` |
| `orderLinkId` | ❌ | string | User-defined order ID |
| `reduceOnly` | ❌ | boolean | Set to `true` to only reduce position |
| `takeProfit` | ❌ | string | Take profit price |
| `stopLoss` | ❌ | string | Stop loss price |

**Response Example**
```json
{
    "retCode": 0,
    "retMsg": "OK",
    "result": {
        "orderId": "fd0s9f8s-d9f8-4d9f-8s7d-f8s9d7f8s9d7",
        "orderLinkId": "test-order-001"
    },
    "retExtInfo": {},
    "time": 1713456000000
}
```

---

### 2. Cancel Order
Cancel an active open order.

**HTTP Request**
`POST /order/cancel`

**Request Parameters**

| Parameter | Required | Type | Comments |
|---|---|---|---|
| `category` | ✅ | string | `linear` |
| `symbol` | ✅ | string | Symbol name |
| `orderId` | ❌ | string | Order ID (either `orderId` or `orderLinkId` is required) |
| `orderLinkId` | ❌ | string | User-defined order ID |

---

### 3. Amend Order
Amend an existing open order or TP/SL order.

**HTTP Request**
`POST /order/amend`

**Request Parameters**

| Parameter | Required | Type | Comments |
|---|---|---|---|
| `category` | ✅ | string | `linear` |
| `symbol` | ✅ | string | Symbol name |
| `orderId` | ❌ | string | Either `orderId` or `orderLinkId` is required |
| `qty` | ❌ | string | New quantity |
| `price` | ❌ | string | New price |
| `takeProfit` | ❌ | string | New TP price |
| `stopLoss` | ❌ | string | New SL price |

---

## Position

### 4. Get Position Info
Query real-time position data.

**HTTP Request**
`GET /position/list`

**Request Parameters**

| Parameter | Required | Type | Comments |
|---|---|---|---|
| `category` | ✅ | string | `linear` |
| `symbol` | ❌ | string | Symbol name |
| `settleCoin` | ❌ | string | Settle coin, e.g., `USDT` |

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
                "side": "Buy",
                "size": "0.500",
                "avgPrice": "65000.00",
                "leverage": "10",
                "markPrice": "65100.50",
                "liqPrice": "59000.00",
                "positionValue": "32500.00",
                "unrealisedPnl": "50.25",
                "curRealisedPnl": "-10.00",
                "positionStatus": "Normal"
            }
        ]
    },
    "time": 1713456000000
}
```

---

### 5. Set Leverage
Update the leverage for a symbol.

**HTTP Request**
`POST /position/set-leverage`

**Request Parameters**

| Parameter | Required | Type | Comments |
|---|---|---|---|
| `category` | ✅ | string | `linear` |
| `symbol` | ✅ | string | Symbol name |
| `buyLeverage` | ✅ | string | Buy leverage |
| `sellLeverage` | ✅ | string | Sell leverage |

---

## Account

### 6. Get Wallet Balance
Query the wallet balance of the futures account.

**HTTP Request**
`GET /account/wallet-balance`

**Request Parameters**

| Parameter | Required | Type | Comments |
|---|---|---|---|
| `accountType` | ✅ | string | `CONTRACT` |
| `coin` | ❌ | string | Coin name, e.g., `USDT` |

---

## Error Codes

| retCode | retMsg | Description |
|---|---|---|
| 0 | OK | Success |
| 10001 | Params error | Validation failed |
| 10004 | Error sign | Authentication failed |
| 110001 | Insufficient balance | Wallet balance not enough |
| 110007 | Order not found | orderId does not exist |
