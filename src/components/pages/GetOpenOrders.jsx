import { useState, useEffect, useRef } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FiCopy, FiCheck } from "react-icons/fi";

export const GetOpenOrders = () => {
    const contentRef = useRef(null);

    const [lang, setLang] = useState("HTTP");
    const [copied, setCopied] = useState(false);
    const [copiedRes, setCopiedRes] = useState(false);

    const [activeSection, setActiveSection] = useState("http");

    const HEADER_OFFSET = 120; // adjust to your layout

    const handleCopy = async () => {
        await navigator.clipboard.writeText(codeMap[lang]);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
    };

    const handleCopyRes = async () => {
        navigator.clipboard.writeText(responseCode);
        setCopiedRes(true);
        setTimeout(() => setCopiedRes(false), 1500);
    };

    const sections = [
        "http",
        "request-params",
        "response-params",
        "request-example",
        "response-example",
    ];

    const scrollToSection = (id) => {
        const container = contentRef.current;
        const el = document.getElementById(id);

        if (!container || !el) return;

        const top = el.offsetTop - container.offsetTop - HEADER_OFFSET;

        container.scrollTo({
            top,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        if (!contentRef.current) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                root: contentRef.current,
                rootMargin: "-30% 0px -60% 0px", // top-biased
                threshold: 0,
            }
        );

        sections.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    const responseCode = `{
  "retCode": 0,
  "retMsg": "OK",
  "result": {
    "list": [
      {
        "orderId": "fd4300ae-7847-404e-b947-b46980a4d140",
        "orderLinkId": "test-000005",
        "blockTradeId": "",
        "symbol": "ETHUSDT",
        "price": "1600.00",
        "qty": "0.10",
        "side": "Buy",
        "isLeverage": "",
        "positionIdx": 1,
        "orderStatus": "New",
        "cancelType": "UNKNOWN",
        "rejectReason": "EC_NoError",
        "avgPrice": "0",
        "leavesQty": "0.10",
        "leavesValue": "160",
        "cumExecQty": "0.00",
        "cumExecValue": "0",
        "cumExecFee": "0",
        "timeInForce": "GTC",
        "orderType": "Limit",
        "stopOrderType": "UNKNOWN",
        "orderIv": "",
        "triggerPrice": "0.00",
        "takeProfit": "2500.00",
        "stopLoss": "1500.00",
        "tpTriggerBy": "LastPrice",
        "slTriggerBy": "LastPrice",
        "triggerDirection": 0,
        "triggerBy": "UNKNOWN",
        "lastPriceOnCreated": "",
        "reduceOnly": false,
        "closeOnTrigger": false,
        "smpType": "None",
        "smpGroup": 0,
        "smpOrderId": "",
        "tpslMode": "Full",
        "tpLimitPrice": "",
        "slLimitPrice": "",
        "placeType": "",
        "createdTime": "1684738540559",
        "updatedTime": "1684738540561",
        "cumFeeDetail": {
          "MNT": "0.00242968"
        }
      }
    ],
    "nextPageCursor": "page_args%3Dfd4300ae-7847-404e-b947-b46980a4d140%26symbol%3D6%26",
    "category": "linear"
  },
  "retExtInfo": {},
  "time": 1684765770483
}`;

    const codeMap = {
        HTTP: `GET /v5/order/realtime?symbol=ETHUSDT&category=linear&openOnly=0&limit=1 HTTP/1.1
Host: api.bitzup.com
Authorization: Bearer <YOUR_API_KEY>`,

        Python: `import requests

url = "https://api.bitzup.com/v5/order/realtime?symbol=ETHUSDT&category=linear&openOnly=0&limit=1"
headers = {
    "Authorization": "Bearer <YOUR_API_KEY>"
}

try:
    response = requests.get(url, headers=headers)
    print(response.json())
except requests.exceptions.RequestException as e:
    print("Error:", str(e))`,

        Go: `package main

import (
    "fmt"
    "io"
    "net/http"
    "time"
)

func main() {
    url := "https://api.bitzup.com/v5/order/realtime?symbol=ETHUSDT&category=linear&openOnly=0&limit=1"

    req, err := http.NewRequest("GET", url, nil)
    if err != nil {
        fmt.Println(err)
        return
    }
    req.Header.Add("Authorization", "Bearer <YOUR_API_KEY>")

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

public class GetOpenOrdersDemo {
    public static void main(String[] args) throws Exception {
        String url = "https://api.bitzup.com/v5/order/realtime?symbol=ETHUSDT&category=linear&openOnly=0&limit=1";

        HttpClient client = HttpClient.newHttpClient();
        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create(url))
                .header("Authorization", "Bearer <YOUR_API_KEY>")
                .GET()
                .build();

        HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
        System.out.println(response.body());
    }
}`,

        Node: `const axios = require('axios');

async function getOpenOrders() {
    try {
        const response = await axios.get(
            'https://api.bitzup.com/v5/order/realtime',
            {
                params: {
                    symbol: 'ETHUSDT',
                    category: 'linear',
                    openOnly: 0,
                    limit: 1
                },
                headers: {
                    'Authorization': 'Bearer <YOUR_API_KEY>'
                }
            }
        );
        console.log(response.data);
    } catch (error) {
        console.error(error.message);
    }
}

getOpenOrders();`,
    };

    return (
        <>
            <div className="container-fluid p-0">
                <div className="api-layout">
                    <div className="row">
                        {/* LEFT CONTENT */}
                        <div className="col-lg-9 col-md-8 api-content" ref={contentRef}>
                            {/* Breadcrumb */}
                            <div className="breadcrumb mb-4">
                                <span className="kline-market">Trade</span>
                                <span className="mx-2">
                                    <IoIosArrowForward className="kline-arrow" />
                                </span>
                                <span className="pill">Get Open & Closed Orders</span>
                            </div>

                            {/* Title */}
                            <h1 className="api-title">Get Open & Closed Orders</h1>
                            <p className="api-desc">
                                Primarily query unfilled or partially filled orders in real-time, but also supports querying recent 500 closed status (Cancelled, Filled) orders.
                            </p>

                            <div className="api-cover">Rate Limit: 10 req/s</div>

                            {/* HTTP REQUEST */}
                            <h3 className="top-req-text" id="http">
                                HTTP Request
                            </h3>
                            <div className="http-path">
                                <span className="method get">GET</span>
                                <span className="path">/v5/order/realtime</span>
                            </div>

                            <h3 className="top-req-text" id="request-params">
                                Request Parameters
                            </h3>
                            <div className="api-table-box">
                                <table className="table table-striped api-table mb-0">
                                    <thead>
                                        <tr>
                                            <th>Parameter</th>
                                            <th>Required</th>
                                            <th>Type</th>
                                            <th>Comments</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>category</td>
                                            <td>true</td>
                                            <td>string</td>
                                            <td>Product type. <span className="pill">linear</span></td>
                                        </tr>
                                        <tr>
                                            <td>symbol</td>
                                            <td>false</td>
                                            <td>string</td>
                                            <td>Symbol name. For linear, either <span className="pill">symbol</span>, <span className="pill">baseCoin</span>, or <span className="pill">settleCoin</span> is required</td>
                                        </tr>
                                        <tr>
                                            <td>baseCoin</td>
                                            <td>false</td>
                                            <td>string</td>
                                            <td>Base coin. For linear, either <span className="pill">symbol</span>, <span className="pill">baseCoin</span>, or <span className="pill">settleCoin</span> is required</td>
                                        </tr>
                                        <tr>
                                            <td>settleCoin</td>
                                            <td>false</td>
                                            <td>string</td>
                                            <td>Settle coin. For linear, either <span className="pill">symbol</span>, <span className="pill">baseCoin</span>, or <span className="pill">settleCoin</span> is required</td>
                                        </tr>
                                        <tr>
                                            <td>orderId</td>
                                            <td>false</td>
                                            <td>string</td>
                                            <td>Order ID</td>
                                        </tr>
                                        <tr>
                                            <td>orderLinkId</td>
                                            <td>false</td>
                                            <td>string</td>
                                            <td>User customised order ID</td>
                                        </tr>
                                        <tr>
                                            <td>openOnly</td>
                                            <td>false</td>
                                            <td>integer</td>
                                            <td><span className="pill">0</span>(default): query open status orders. <span className="pill">1</span>: query max 500 recent closed orders</td>
                                        </tr>
                                        <tr>
                                            <td>orderFilter</td>
                                            <td>false</td>
                                            <td>string</td>
                                            <td><span className="pill">Order</span>, <span className="pill">StopOrder</span>, <span className="pill">tpslOrder</span>, <span className="pill">OcoOrder</span>. Default: all kinds of orders</td>
                                        </tr>
                                        <tr>
                                            <td>limit</td>
                                            <td>false</td>
                                            <td>integer</td>
                                            <td>Limit for data size per page. [1, 50]. Default: 20</td>
                                        </tr>
                                        <tr>
                                            <td>cursor</td>
                                            <td>false</td>
                                            <td>string</td>
                                            <td>Cursor. Used for pagination</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <h3 className="top-req-text" id="response-params">
                                Response Parameters
                            </h3>
                            <div className="api-table-box">
                                <table className="table table-striped api-table mb-0">
                                    <thead>
                                        <tr>
                                            <th>Parameter</th>
                                            <th>Type</th>
                                            <th>Comments</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>list</td>
                                            <td>array</td>
                                            <td>Object</td>
                                        </tr>
                                        <tr>
                                            <td>&gt; orderId</td>
                                            <td>string</td>
                                            <td>Order ID</td>
                                        </tr>
                                        <tr>
                                            <td>&gt; orderLinkId</td>
                                            <td>string</td>
                                            <td>User customised order ID</td>
                                        </tr>
                                        <tr>
                                            <td>&gt; symbol</td>
                                            <td>string</td>
                                            <td>Symbol name</td>
                                        </tr>
                                        <tr>
                                            <td>&gt; price</td>
                                            <td>string</td>
                                            <td>Order price</td>
                                        </tr>
                                        <tr>
                                            <td>&gt; qty</td>
                                            <td>string</td>
                                            <td>Order qty</td>
                                        </tr>
                                        <tr>
                                            <td>&gt; side</td>
                                            <td>string</td>
                                            <td>Side. <span className="pill">Buy</span>, <span className="pill">Sell</span></td>
                                        </tr>
                                        <tr>
                                            <td>&gt; orderStatus</td>
                                            <td>string</td>
                                            <td>Order status</td>
                                        </tr>
                                        <tr>
                                            <td>&gt; createdTime</td>
                                            <td>string</td>
                                            <td>Order created time (ms)</td>
                                        </tr>
                                        <tr>
                                            <td>nextPageCursor</td>
                                            <td>string</td>
                                            <td>Cursor. Used for pagination</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            {/* REQUEST EXAMPLE */}
                            <h3 className="top-req-text" id="request-example">
                                Request Example
                            </h3>

                            <div className="lang-tabs">
                                {["HTTP", "Python", "Go", "Java", "Node"].map((t) => (
                                    <button
                                        key={t}
                                        className={lang === t ? "active" : ""}
                                        onClick={() => setLang(t)}
                                    >
                                        {t}
                                    </button>
                                ))}
                            </div>

                            <div className="api-code-box position-relative" style={{ marginBottom: "40px" }}>
                                {/* COPY ICON */}
                                <button className="copy-btn" onClick={handleCopy}>
                                    {copied ? <FiCheck /> : <FiCopy />}
                                </button>

                                <pre>
                                    {codeMap[lang]}
                                </pre>
                            </div>

                            {/* RESPONSE EXAMPLE */}
                            <h3 className="top-req-text" id="response-example">
                                Response Example
                            </h3>
                            <div className="api-code-box position-relative" style={{ marginBottom: "40px" }}>
                                <button className="copy-btn" onClick={handleCopyRes}>
                                    {copiedRes ? <FiCheck /> : <FiCopy />}
                                </button>
                                <pre>
                                    {responseCode}
                                </pre>
                            </div>
                        </div>

                        {/* RIGHT SIDEBAR */}
                        <div className="col-lg-3 col-md-4 d-none d-md-block">
                            <div className="api-sidebar">
                                <ul>
                                    <li
                                        className={activeSection === "http" ? "active" : ""}
                                        onClick={() => scrollToSection("http")}
                                    >
                                        HTTP Request
                                    </li>
                                    <li
                                        className={
                                            activeSection === "request-params" ? "active" : ""
                                        }
                                        onClick={() => scrollToSection("request-params")}
                                    >
                                        Request Parameters
                                    </li>
                                    <li
                                        className={
                                            activeSection === "response-params" ? "active" : ""
                                        }
                                        onClick={() => scrollToSection("response-params")}
                                    >
                                        Response Parameters
                                    </li>
                                    <li
                                        className={
                                            activeSection === "request-example" ? "active" : ""
                                        }
                                        onClick={() => scrollToSection("request-example")}
                                    >
                                        Request Example
                                    </li>
                                    <li
                                        className={
                                            activeSection === "response-example" ? "active" : ""
                                        }
                                        onClick={() => scrollToSection("response-example")}
                                    >
                                        Response Example
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
