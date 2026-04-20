# Bitzup Futures — WebSocket API (V5)

The Bitzup Futures WebSocket API provides real-time market data and account updates, modeled after the Bitzup V5 WebSocket interface.

---

## 1. Connection

### Public Channels
> **Endpoint:** `wss://socket.bitzup.com/v5/public/linear`

### Private Channels
> **Endpoint:** `wss://socket.bitzup.com/v5/private`  
> **Note:** Private channels require authentication.

---

## 2. Public Topics

### Tickers
**Topic:** `tickers.{symbol}`  
**Example Topic:** `tickers.BTCUSDT`

**Response Example:**
```json
{
    "topic": "tickers.BTCUSDT",
    "type": "snapshot",
    "data": {
        "symbol": "BTCUSDT",
        "lastPrice": "65000.50",
        "markPrice": "65000.80",
        "highPrice24h": "66000.00",
        "lowPrice24h": "64000.00",
        "price24hPcnt": "0.0125",
        "fundingRate": "0.0001"
    },
    "ts": 1713456000000
}
```

### Order Book
**Topic:** `orderbook.{depth}.{symbol}`  
**Example Topic:** `orderbook.50.BTCUSDT`

**Response Example:**
```json
{
    "topic": "orderbook.50.BTCUSDT",
    "type": "snapshot",
    "data": {
        "s": "BTCUSDT",
        "b": [["65000.00", "0.5"], ["64999.50", "1.2"]],
        "a": [["65000.50", "0.8"], ["65001.00", "2.0"]],
        "u": 1234567,
        "seq": 1000
    },
    "ts": 1713456000000
}
```

---

## 3. Private Topics (Authentication Required)

To connect to private channels, you must send an `auth` message or use the Socket.io `auth` object.

### Position Update
**Topic:** `position`

**Response Example:**
```json
{
    "topic": "position",
    "id": "123456",
    "data": [
        {
            "symbol": "BTCUSDT",
            "side": "Buy",
            "size": "0.5",
            "entryPrice": "65000.00",
            "markPrice": "65100.50",
            "leverage": "10",
            "positionIdx": 0
        }
    ],
    "ts": 1713456000000
}
```

### Order Update
**Topic:** `order`

**Response Example:**
```json
{
    "topic": "order",
    "id": "123456",
    "data": [
        {
            "orderId": "fd0s9f8s-...",
            "symbol": "BTCUSDT",
            "side": "Buy",
            "orderType": "Limit",
            "price": "65000.00",
            "qty": "1.0",
            "orderStatus": "New",
            "createdTime": "1713456000000"
        }
    ],
    "ts": 1713456000000
}
```
