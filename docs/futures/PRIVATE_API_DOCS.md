# Bitzup Futures — Private API (V5)

> **Base URL:** `https://api.bitzup.com/v5`  
> **Authentication:** API Key & Secret (HMAC) or RSA Signature.  

---

## Account APIs

### 1. Create Sub Account
Create a new sub-account for the current user.

| | |
|---|---|
| **Endpoint** | `POST /v5/account/create-sub-account` |
| **Auth** | ✅ Required |

**Request Body**
No parameters required.

**Response Example**
```json
{
    "retCode": 0,
    "retMsg": "OK",
    "result": {
        "status": "1",
        "message": "Account created successfully."
    },
    "retExtInfo": {},
    "time": 1713456000000
}
```

---

### 2. Get Margin Mode
Get the margin mode of the futures account.

| | |
|---|---|
| **Endpoint** | `GET /v5/account/margin-mode` |
| **Auth** | ✅ Required |

**Response Example**
```json
{
    "retCode": 0,
    "retMsg": "OK",
    "result": {
        "marginMode": "REGULAR_MARGIN"
    },
    "retExtInfo": {},
    "time": 1713456000000
}
```

---

### 3. Get User Rebate History
Query the rebate history for the account.

| | |
|---|---|
| **Endpoint** | `GET /v5/account/rebate-history` |
| **Auth** | ✅ Required |

**Response Example**
```json
{
    "retCode": 0,
    "retMsg": "OK",
    "result": {
        "totalRebate": "12.50",
        "list": [
            {
                "execId": "abc123",
                "vipLevel": 3,
                "fee": "0.05",
                "rebatePercent": "10",
                "rebateAmount": "0.005",
                "createdAt": "2026-02-20T10:00:00Z"
            }
        ]
    },
    "retExtInfo": {},
    "time": 1713456000000
}
```

---

## Trade APIs

### 4. Set Leverage
Update the leverage for a specific symbol.

| | |
|---|---|
| **Endpoint** | `POST /v5/position/set-leverage` |
| **Auth** | ✅ Required |

**Request Parameters**

| Parameter | Required | Type | Comments |
|---|---|---|---|
| `symbol` | ✅ | string | Symbol name, e.g., `BTCUSDT` |
| `leverage` | ✅ | string | Leverage value, e.g., `"10"` |

**Response Example**
```json
{
    "retCode": 0,
    "retMsg": "OK",
    "result": {},
    "retExtInfo": {},
    "time": 1713456000000
}
```

---

### 5. Get Leverage
Query the current leverage for a symbol.

| | |
|---|---|
| **Endpoint** | `GET /v5/position/leverage` |
| **Auth** | ✅ Required |

**Request Parameters**

| Parameter | Required | Type | Comments |
|---|---|---|---|
| `symbol` | ✅ | string | Symbol name |

---

### 6. Switch Margin Mode
Switch between `REGULAR_MARGIN` and `ISOLATED_MARGIN`.

| | |
|---|---|
| **Endpoint** | `POST /v5/account/set-margin-mode` |
| **Auth** | ✅ Required |

**Request Parameters**

| Parameter | Required | Type | Comments |
|---|---|---|---|
| `marginMode` | ✅ | string | `REGULAR_MARGIN`, `ISOLATED_MARGIN` |

---

### 7. Add Isolated Margin
Add margin to an isolated position.

| | |
|---|---|
| **Endpoint** | `POST /v5/position/add-margin` |
| **Auth** | ✅ Required |

**Request Parameters**

| Parameter | Required | Type | Comments |
|---|---|---|---|
| `symbol` | ✅ | string | Symbol name |
| `margin` | ✅ | number | Margin amount |

---

### 8. Auto Isolated Margin
Toggle auto-addition of margin for isolated positions.

| | |
|---|---|
| **Endpoint** | `POST /v5/position/set-auto-add-margin` |
| **Auth** | ✅ Required |

**Request Parameters**

| Parameter | Required | Type | Comments |
|---|---|---|---|
| `symbol` | ✅ | string | Symbol name |
| `autoMargin` | ✅ | number | `0` (off) or `1` (on) |

---

### 9. Set Trading Stop
Set Take Profit (TP) and Stop Loss (SL) for a position.

| | |
|---|---|
| **Endpoint** | `POST /v5/position/trading-stop` |
| **Auth** | ✅ Required |

**Request Parameters**

| Parameter | Required | Type | Comments |
|---|---|---|---|
| `symbol` | ✅ | string | Symbol name |
| `tpSlMode` | ❌ | string | `Full` or `Partial` |
| `takeProfit` | ❌ | number | TP price |
| `tpTriggerBy` | ❌ | string | `LastPrice`, `MarkPrice`, `IndexPrice` |
| `stopLoss` | ❌ | number | SL price |
| `slTriggerBy` | ❌ | string | `LastPrice`, `MarkPrice`, `IndexPrice` |
| `qty` | ❌ | number | Required for `Partial` mode |
| `trailingStop` | ❌ | number | Trailing stop value |

---

### 10. Get Positions
Query active position information.

| | |
|---|---|
| **Endpoint** | `GET /v5/position/list` |
| **Auth** | ✅ Required |

**Request Parameters**

| Parameter | Required | Type | Comments |
|---|---|---|---|
| `quoteCoin`| ✅ | string | Quote coin, e.g., `USDT` |

**Response Example**
```json
{
    "retCode": 0,
    "retMsg": "OK",
    "result": {
        "list": [
            {
                "symbol": "BTCUSDT",
                "side": "Buy",
                "size": "0.1",
                "avgPrice": "65000",
                "leverage": "10",
                "unrealisedPnl": "15.5"
            }
        ]
    },
    "retExtInfo": {},
    "time": 1713456000000
}
```

---

### 11. Place Order
Place a new trade order.

| | |
|---|---|
| **Endpoint** | `POST /v5/order/create` |
| **Auth** | ✅ Required |

**Request Parameters**

| Parameter | Required | Type | Comments |
|---|---|---|---|
| `symbol` | ✅ | string | Trading pair |
| `side` | ✅ | string | `Buy`, `Sell` |
| `orderType` | ✅ | string | `Limit`, `Market` |
| `qty` | ✅ | number | Quantity |
| `price` | ❌ | number | Price for limit orders |
| `orderLinkId` | ❌ | string | Custom order ID |
| `reduceOnly` | ❌ | boolean | Reduce-only flag |
| `takeProfit` | ❌ | number | TP price |
| `stopLoss` | ❌ | number | SL price |
| `timeInForce` | ❌ | string | `GTC`, `IOC`, `FOK`, `PostOnly` |

---

### 12. Cancel Order
Cancel an existing open order.

| | |
|---|---|
| **Endpoint** | `POST /v5/order/cancel` |
| **Auth** | ✅ Required |

**Request Parameters**

| Parameter | Required | Type | Comments |
|---|---|---|---|
| `symbol` | ✅ | string | Symbol name |
| `orderId` | ✅ | string | Order ID to cancel |

---

### 13. Cancel All Orders
Cancel all active orders for a quote coin.

| | |
|---|---|
| **Endpoint** | `POST /v5/order/cancel-all` |
| **Auth** | ✅ Required |

**Request Parameters**

| Parameter | Required | Type | Comments |
|---|---|---|---|
| `quoteCoin` | ✅ | string | e.g., `USDT` |

---

### 14. Modify Order
Amend an existing open order.

| | |
|---|---|
| **Endpoint** | `POST /v5/order/amend` |
| **Auth** | ✅ Required |

**Request Parameters**

| Parameter | Required | Type | Comments |
|---|---|---|---|
| `symbol` | ✅ | string | Symbol name |
| `orderId` | ✅ | string | Order ID |
| `qty` | ❌ | number | New quantity |
| `price` | ❌ | number | New price |
| `takeProfit` | ❌ | number | New TP |
| `stopLoss` | ❌ | number | New SL |

---

### 15. Close Position
Close a position via a market or limit order.

| | |
|---|---|
| **Endpoint** | `POST /v5/position/close` |
| **Auth** | ✅ Required |

---

### 16. Close All Positions
Close all active positions for the user.

| | |
|---|---|
| **Endpoint** | `POST /v5/position/close-all` |
| **Auth** | ✅ Required |

---

### 17. Get Open Orders
Query currently active orders.

| | |
|---|---|
| **Endpoint** | `GET /v5/order/realtime` |
| **Auth** | ✅ Required |

**Request Parameters**

| Parameter | Required | Type | Comments |
|---|---|---|---|
| `symbol` | ❌ | string | Symbol name |
| `quoteCoin` | ❌ | string | Quote coin |

---

### 18. Get Order History
Query historical orders.

| | |
|---|---|
| **Endpoint** | `GET /v5/order/history` |
| **Auth** | ✅ Required |

**Request Parameters**

| Parameter | Required | Type | Comments |
|---|---|---|---|
| `limit` | ✅ | number | Records per page |
| `startTime` | ✅ | string | `YYYY-MM-DD` |
| `endTime` | ✅ | string | `YYYY-MM-DD` |
| `orderType` | ✅ | string | `Order` or `StopOrder` |

---

### 19. Get Trade History
Query execution records.

| | |
|---|---|
| **Endpoint** | `GET /v5/execution/list` |
| **Auth** | ✅ Required |

---

### 20. Get Closed PnL
Query closed PnL records.

| | |
|---|---|
| **Endpoint** | `GET /v5/position/closed-pnl` |
| **Auth** | ✅ Required |

---

### 21. Export History
Export trading or PnL history.

| | |
|---|---|
| **Endpoint** | `POST /v5/asset/export-history` |
| **Auth** | ✅ Required |

---

## Wallet APIs

### 22. Get Balance
Query wallet balance.

| | |
|---|---|
| **Endpoint** | `GET /v5/account/wallet-balance` |
| **Auth** | ✅ Required |

**Request Parameters**

| Parameter | Required | Type | Comments |
|---|---|---|---|
| `coin` | ✅ | string | Coin name or `ALL` |

**Response Example**
```json
{
    "retCode": 0,
    "retMsg": "OK",
    "result": {
        "totalUsdBalance": "1250.50",
        "list": [
            {
                "coin": "USDT",
                "walletBalance": "1250.50",
                "availableBalance": "1100.00"
            }
        ]
    },
    "retExtInfo": {},
    "time": 1713456000000
}
```

---

### 23. Deposit to Sub Account
Transfer funds to a sub-account.

| | |
|---|---|
| **Endpoint** | `POST /v5/asset/transfer/sub-account-deposit` |
| **Auth** | ✅ Required |

---

### 24. Withdraw from Sub Account
Transfer funds back from a sub-account.

| | |
|---|---|
| **Endpoint** | `POST /v5/asset/transfer/sub-account-withdraw` |
| **Auth** | ✅ Required |

---

### 25. Get Transfer History
Query internal transfer records.

| | |
|---|---|
| **Endpoint** | `GET /v5/asset/transfer/query-inter-transfer-list` |
| **Auth** | ✅ Required |

---

## Market APIs (Private)

### 26. Check Favorite
Check if a symbol is in the favorites list.

| | |
|---|---|
| **Endpoint** | `GET /v5/market/favorite` |
| **Auth** | ✅ Required |

---

### 27. Add Favorite
Add or remove a symbol from favorites.

| | |
|---|---|
| **Endpoint** | `POST /v5/market/favorite/add` |
| **Auth** | ✅ Required |

---

### 28. Add Favorite Bulk
Add multiple symbols to favorites.

| | |
|---|---|
| **Endpoint** | `POST /v5/market/favorite/add-bulk` |
| **Auth** | ✅ Required |

---

### 29. Get Favorite Currencies
Query all favorite symbols.

| | |
|---|---|
| **Endpoint** | `GET /v5/market/favorite/list` |
| **Auth** | ✅ Required |

---

## Admin API

### 30. Modify IPs
Restrict API key access to specific IP addresses.

| | |
|---|---|
| **Endpoint** | `POST /v5/admin/modify-ips` |
| **Auth** | ✅ Required (Admin) |

**Request Body**
```json
{
    "userIds": ["*"],
    "ips": "192.168.1.1,192.168.1.2"
}
```

---

## Common Response Codes

| retCode | Description |
|---|---|
| 0 | Success |
| 10001 | Parameter error |
| 10004 | Error sign |
| 110001 | Insufficient balance |
| 110007 | Order not found |
