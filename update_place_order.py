import sys

# We need to replace codeMap and responseCode (lines 76 to 242)
code_lines = """    const responseCode = `{
    "retCode": 0,
    "retMsg": "OK",
    "result": {
        "orderId": "1321003749386327552",
        "orderLinkId": "spot-test-postonly"
    },
    "retExtInfo": {},
    "time": 1672211918471
}`;

    const codeMap = {
        HTTP: `POST /v5/order/create HTTP/1.1
Host: api.bitzup.com
Content-Type: application/json

{
    "category": "linear",
    "symbol": "BTCUSDT",
    "side": "Buy",
    "orderType": "Limit",
    "qty": "0.1",
    "price": "10000",
    "timeInForce": "GTC",
    "orderLinkId": "spot-test-postonly",
    "isLeverage": 0,
    "orderFilter": "Order"
}`,

        Python: `import requests

url = "https://api.bitzup.com/v5/order/create"
headers = {
    "Content-Type": "application/json"
}
data = {
    "category": "linear",
    "symbol": "BTCUSDT",
    "side": "Buy",
    "orderType": "Limit",
    "qty": "0.1",
    "price": "10000",
    "timeInForce": "GTC",
    "orderLinkId": "spot-test-postonly",
    "isLeverage": 0,
    "orderFilter": "Order"
}

try:
    response = requests.post(url, headers=headers, json=data)
    print(response.json())
except requests.exceptions.RequestException as e:
    print("Error:", str(e))`,

        Go: `package main

import (
    "bytes"
    "encoding/json"
    "fmt"
    "io"
    "net/http"
    "time"
)

func main() {
    url := "https://api.bitzup.com/v5/order/create"
    payload := map[string]interface{}{
        "category":    "linear",
        "symbol":      "BTCUSDT",
        "side":        "Buy",
        "orderType":   "Limit",
        "qty":         "0.1",
        "price":       "10000",
        "timeInForce": "GTC",
        "orderLinkId": "spot-test-postonly",
        "isLeverage":  0,
        "orderFilter": "Order",
    }
    body, _ := json.Marshal(payload)

    req, _ := http.NewRequest("POST", url, bytes.NewBuffer(body))
    req.Header.Add("Content-Type", "application/json")

    client := &http.Client{Timeout: 10 * time.Second}
    res, err := client.Do(req)
    if err != nil {
        fmt.Println(err)
        return
    }
    defer res.Body.Close()

    resBody, _ := io.ReadAll(res.Body)
    fmt.Println(string(resBody))
}`,

        Java: `import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

public class PlaceOrderDemo {
    public static void main(String[] args) throws Exception {
        String url = "https://api.bitzup.com/v5/order/create";
        String payload = "{\\n" +
            "    \\"category\\": \\"linear\\",\\n" +
            "    \\"symbol\\": \\"BTCUSDT\\",\\n" +
            "    \\"side\\": \\"Buy\\",\\n" +
            "    \\"orderType\\": \\"Limit\\",\\n" +
            "    \\"qty\\": \\"0.1\\",\\n" +
            "    \\"price\\": \\"10000\\",\\n" +
            "    \\"timeInForce\\": \\"GTC\\",\\n" +
            "    \\"orderLinkId\\": \\"spot-test-postonly\\",\\n" +
            "    \\"isLeverage\\": 0,\\n" +
            "    \\"orderFilter\\": \\"Order\\"\\n" +
            "}";

        HttpClient client = HttpClient.newHttpClient();
        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create(url))
                .header("Content-Type", "application/json")
                .POST(HttpRequest.BodyPublishers.ofString(payload))
                .build();

        HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
        System.out.println(response.body());
    }
}`,

        Node: `const axios = require('axios');

async function placeOrder() {
    try {
        const response = await axios.post(
            'https://api.bitzup.com/v5/order/create',
            {
                category: 'linear',
                symbol: 'BTCUSDT',
                side: 'Buy',
                orderType: 'Limit',
                qty: '0.1',
                price: '10000',
                timeInForce: 'GTC',
                orderLinkId: 'spot-test-postonly',
                isLeverage: 0,
                orderFilter: 'Order'
            },
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );
        console.log(response.data);
    } catch (error) {
        console.error(error.message);
    }
}

placeOrder();`,
    };"""


params_table = """                                    <tbody>
                                        <tr>
                                            <td>category</td>
                                            <td>true</td>
                                            <td>string</td>
                                            <td>Product type. <code>spot</code>, <code>linear</code>, <code>inverse</code>, <code>option</code></td>
                                        </tr>
                                        <tr>
                                            <td>symbol</td>
                                            <td>true</td>
                                            <td>string</td>
                                            <td>Symbol name</td>
                                        </tr>
                                        <tr>
                                            <td>isLeverage</td>
                                            <td>false</td>
                                            <td>integer</td>
                                            <td>Whether to borrow. Valid for <code>spot</code> only. <code>0</code> (default): false then spot trading, <code>1</code>: true then margin trading</td>
                                        </tr>
                                        <tr>
                                            <td>side</td>
                                            <td>true</td>
                                            <td>string</td>
                                            <td><code>Buy</code>, <code>Sell</code></td>
                                        </tr>
                                        <tr>
                                            <td>orderType</td>
                                            <td>true</td>
                                            <td>string</td>
                                            <td><code>Market</code>, <code>Limit</code></td>
                                        </tr>
                                        <tr>
                                            <td>qty</td>
                                            <td>true</td>
                                            <td>string</td>
                                            <td>Order quantity. For Spot Market Buy order, please note that qty should be quote coin amount</td>
                                        </tr>
                                        <tr>
                                            <td>marketUnit</td>
                                            <td>false</td>
                                            <td>string</td>
                                            <td>The unit for <code>qty</code> when create Spot market orders for UTA account. <code>baseCoin</code>, <code>quoteCoin</code></td>
                                        </tr>
                                        <tr>
                                            <td>price</td>
                                            <td>false</td>
                                            <td>string</td>
                                            <td>Order price. If you have active price band, the price will be slightly varied.</td>
                                        </tr>
                                        <tr>
                                            <td>triggerDirection</td>
                                            <td>false</td>
                                            <td>integer</td>
                                            <td>Conditional order parameter. <code>1</code>: rises to triggerPrice, <code>2</code>: falls to triggerPrice</td>
                                        </tr>
                                        <tr>
                                            <td>orderFilter</td>
                                            <td>false</td>
                                            <td>string</td>
                                            <td>Valid for spot only. <code>Order</code>, <code>tpslOrder</code>, <code>StopOrder</code>. If not passed, <code>Order</code> by default</td>
                                        </tr>
                                        <tr>
                                            <td>triggerPrice</td>
                                            <td>false</td>
                                            <td>string</td>
                                            <td>For futures, it is the conditional order trigger price. For spot, it is the TP/SL order trigger price</td>
                                        </tr>
                                        <tr>
                                            <td>triggerBy</td>
                                            <td>false</td>
                                            <td>string</td>
                                            <td>Conditional order param. Trigger price type. <code>LastPrice</code>, <code>IndexPrice</code>, <code>MarkPrice</code></td>
                                        </tr>
                                        <tr>
                                            <td>orderIv</td>
                                            <td>false</td>
                                            <td>string</td>
                                            <td>Implied volatility. option only. Pass the real value, e.g for 10%, 0.1 should be passed</td>
                                        </tr>
                                        <tr>
                                            <td>timeInForce</td>
                                            <td>false</td>
                                            <td>string</td>
                                            <td><code>GTC</code>, <code>IOC</code>, <code>FOK</code>, <code>PostOnly</code></td>
                                        </tr>
                                        <tr>
                                            <td>positionIdx</td>
                                            <td>false</td>
                                            <td>integer</td>
                                            <td>Used to identify positions in different position modes. <code>0</code>: one-way, <code>1</code>: Buy side of hedge-mode, <code>2</code>: Sell side of hedge-mode</td>
                                        </tr>
                                        <tr>
                                            <td>orderLinkId</td>
                                            <td>false</td>
                                            <td>string</td>
                                            <td>User customised order ID. A max of 36 characters. Combinations of numbers, letters (upper and lower cases), dashes, and underscores are supported.</td>
                                        </tr>
                                        <tr>
                                            <td>takeProfit</td>
                                            <td>false</td>
                                            <td>string</td>
                                            <td>Take profit price</td>
                                        </tr>
                                        <tr>
                                            <td>stopLoss</td>
                                            <td>false</td>
                                            <td>string</td>
                                            <td>Stop loss price</td>
                                        </tr>
                                        <tr>
                                            <td>tpTriggerBy</td>
                                            <td>false</td>
                                            <td>string</td>
                                            <td>The price type to trigger take profit. <code>MarkPrice</code>, <code>IndexPrice</code>, <code>LastPrice</code></td>
                                        </tr>
                                        <tr>
                                            <td>slTriggerBy</td>
                                            <td>false</td>
                                            <td>string</td>
                                            <td>The price type to trigger stop loss. <code>MarkPrice</code>, <code>IndexPrice</code>, <code>LastPrice</code></td>
                                        </tr>
                                        <tr>
                                            <td>reduceOnly</td>
                                            <td>false</td>
                                            <td>boolean</td>
                                            <td>What is a reduce-only order? <code>true</code> means your position can only reduce in size if this order is triggered.</td>
                                        </tr>
                                        <tr>
                                            <td>closeOnTrigger</td>
                                            <td>false</td>
                                            <td>boolean</td>
                                            <td>What is a close on trigger order? For a closing order. It can only reduce your position, not increase it.</td>
                                        </tr>
                                        <tr>
                                            <td>smpType</td>
                                            <td>false</td>
                                            <td>string</td>
                                            <td>Smp execution type. <code>None</code>, <code>CancelMaker</code>, <code>CancelTaker</code>, <code>CancelBoth</code></td>
                                        </tr>
                                        <tr>
                                            <td>mmp</td>
                                            <td>false</td>
                                            <td>boolean</td>
                                            <td>Market maker protection. option only. <code>true</code> means set the order as a market maker protection order</td>
                                        </tr>
                                        <tr>
                                            <td>tpslMode</td>
                                            <td>false</td>
                                            <td>string</td>
                                            <td>TP/SL mode. <code>Full</code>, <code>Partial</code></td>
                                        </tr>
                                        <tr>
                                            <td>tpLimitPrice</td>
                                            <td>false</td>
                                            <td>string</td>
                                            <td>The limit order price when take profit price is triggered</td>
                                        </tr>
                                        <tr>
                                            <td>slLimitPrice</td>
                                            <td>false</td>
                                            <td>string</td>
                                            <td>The limit order price when stop loss price is triggered</td>
                                        </tr>
                                        <tr>
                                            <td>tpOrderType</td>
                                            <td>false</td>
                                            <td>string</td>
                                            <td>The order type when take profit is triggered. <code>Market</code>(default), <code>Limit</code></td>
                                        </tr>
                                        <tr>
                                            <td>slOrderType</td>
                                            <td>false</td>
                                            <td>string</td>
                                            <td>The order type when stop loss is triggered. <code>Market</code>(default), <code>Limit</code></td>
                                        </tr>
                                    </tbody>"""


with open("src/components/pages/PlaceOrder.jsx", "r") as f:
    orig = f.read()

import re

# 1. Replace the codeMap chunk
orig = re.sub(
    r'    const responseCode = `{.*?\n    };',
    code_lines,
    orig,
    flags=re.DOTALL
)

# 2. Replace the table rows
orig = re.sub(
    r'                                    <tbody>.*?</tbody>',
    params_table,
    orig,
    flags=re.DOTALL
)

with open("src/components/pages/PlaceOrder.jsx", "w") as f:
    f.write(orig)

print("Done updating PlaceOrder.jsx")
