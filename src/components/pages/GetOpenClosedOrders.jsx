import { useState, useRef, useEffect } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FiCopy, FiCheck } from "react-icons/fi";

export const GetOpenClosedOrders = () => {
    const contentRef = useRef(null);
    const [lang, setLang] = useState("HTTP");
    const [copied, setCopied] = useState(false);
    const [copiedRes, setCopiedRes] = useState(false);
    const [activeSection, setActiveSection] = useState("http");
    const HEADER_OFFSET = 120;
    const handleCopy = async () => { await navigator.clipboard.writeText(codeMap[lang]); setCopied(true); setTimeout(() => setCopied(false), 1500); };
    const handleCopyRes = async () => { navigator.clipboard.writeText(responseCode); setCopiedRes(true); setTimeout(() => setCopiedRes(false), 1500); };
    const sections = ["http", "request-params", "response-params", "request-example", "response-example"];
    const scrollToSection = (id) => { const container = contentRef.current; const el = document.getElementById(id); if (!container || !el) return; const top = el.offsetTop - container.offsetTop - HEADER_OFFSET; container.scrollTo({ top, behavior: "smooth" }); };
    useEffect(() => { if (!contentRef.current) return; const observer = new IntersectionObserver((entries) => { entries.forEach((entry) => { if (entry.isIntersecting) setActiveSection(entry.target.id); }); }, { root: contentRef.current, rootMargin: "-30% 0px -60% 0px", threshold: 0 }); sections.forEach((id) => { const el = document.getElementById(id); if (el) observer.observe(el); }); return () => observer.disconnect(); }, []);

    const responseCode = `{
    "retCode": 0,
    "retMsg": "OK",
    "result": {
        "list": [
            {
                "orderId": "fd4300ae-7847-404e-b947-b46980a4d140",
                "orderLinkId": "test-001",
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
                "cumExecQty": "0",
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
                "lastPriceOnCreated": "1615.77",
                "reduceOnly": false,
                "closeOnTrigger": false,
                "smpType": "None",
                "smpGroup": 0,
                "smpOrderId": "",
                "tpslMode": "Full",
                "tpLimitPrice": "",
                "slLimitPrice": "",
                "placeType": "",
                "createdTime": "1672219525822",
                "updatedTime": "1672219525824"
            }
        ],
        "nextPageCursor": "page_args%3Dfd4300ae-7847-404e-b947-b46980a4d140%26symbol%3DETHUSDT%26",
        "category": "linear"
    },
    "retExtInfo": {},
    "time": 1672219525826
}`;

    const codeMap = {
        HTTP: `GET /v5/order/realtime?symbol=ETHUSDT&category=linear&openOnly=0&limit=1 HTTP/1.1
Host: api.bybit.com
X-BAPI-SIGN: XXXXX
X-BAPI-API-KEY: xxxxxxxxxxxxxxxxxx
X-BAPI-TIMESTAMP: 1672219525810
X-BAPI-RECV-WINDOW: 5000
Content-Type: application/json`,
        Python: `import requests
url = "https://api.bybit.com/v5/order/realtime"
headers = {"X-BAPI-API-KEY": "xxxxxxxxxxxxxxxxxx", "X-BAPI-SIGN": "XXXXX",
    "X-BAPI-TIMESTAMP": "1672219525810", "X-BAPI-RECV-WINDOW": "5000"}
params = {"symbol": "ETHUSDT", "category": "linear", "openOnly": 0, "limit": 1}
try:
    resp = requests.get(url, params=params, headers=headers, timeout=10)
    print(resp.json())
except requests.exceptions.RequestException as e:
    print("Error:", str(e))`,
        Go: `package main
import ("fmt"; "io"; "net/http"; "time")
func main() {
    url := "https://api.bybit.com/v5/order/realtime?symbol=ETHUSDT&category=linear&openOnly=0&limit=1"
    req, _ := http.NewRequest("GET", url, nil)
    req.Header.Set("X-BAPI-API-KEY", "xxxxxxxxxxxxxxxxxx")
    req.Header.Set("X-BAPI-SIGN", "XXXXX")
    client := &http.Client{Timeout: 10 * time.Second}
    resp, err := client.Do(req)
    if err != nil { panic(err) }
    defer resp.Body.Close()
    data, _ := io.ReadAll(resp.Body)
    fmt.Println(string(data))
}`,
        Java: `import java.net.URI; import java.net.http.*; import java.time.Duration;
public class GetOpenClosedOrdersExample {
    public static void main(String[] args) throws Exception {
        HttpClient client = HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(10)).build();
        HttpRequest request = HttpRequest.newBuilder()
            .uri(URI.create("https://api.bybit.com/v5/order/realtime?symbol=ETHUSDT&category=linear&openOnly=0&limit=1"))
            .header("X-BAPI-API-KEY", "xxxxxxxxxxxxxxxxxx")
            .header("X-BAPI-SIGN", "XXXXX")
            .GET().build();
        HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
        System.out.println(response.body());
    }
}`,
        Node: `const axios = require("axios");
async function getOpenClosedOrders() {
  try {
    const response = await axios.get("https://api.bybit.com/v5/order/realtime",
      { params: { symbol: "ETHUSDT", category: "linear", openOnly: 0, limit: 1 },
        headers: { "X-BAPI-API-KEY": "xxxxxxxxxxxxxxxxxx", "X-BAPI-SIGN": "XXXXX" } });
    console.log(response.data);
  } catch (error) { console.error("Error:", error.response?.data || error.message); }
}
getOpenClosedOrders();`,
    };

    return (
        <div className="container-fluid p-0"><div className="api-layout"><div className="row">
            <div className="col-lg-9 col-md-12 api-content" ref={contentRef}>
                <div className="breadcrumb mb-4"><span className="kline-market">Trade</span><span className="mx-2"><IoIosArrowForward className="kline-arrow" /></span><span className="pill">Get Open & Closed Orders</span></div>
                <h1 className="api-title">Get Open & Closed Orders</h1>
                <p className="api-desc">Primarily query unfilled or partially filled orders in real-time, but also supports querying recent 500 closed status (Cancelled, Filled, Rejected) orders.</p>
                <div className="api-info-box"><div className="api-info-header"><span className="api-info-title">Tip</span></div>
                    <p>If you want to query all history orders, please use "Get Order History".</p>
                </div>
                <div className="api-info-box"><div className="api-info-header"><span className="api-info-title">Info</span></div>
                    <p>The service only supports querying a maximum of 500 orders that are closed. If an account has more than 500 closed orders, it will only return the latest 500.</p>
                </div>
                <div className="api-cover">Requires Authentication</div>
                <h3 className="top-req-text" id="http">HTTP Request</h3>
                <div className="http-path"><span className="method get">GET</span><span className="path">/v5/order/realtime</span></div>
                <h3 className="top-req-text" id="request-params">Request Parameters</h3>
                <div className="api-table-box"><table className="table table-striped api-table mb-0">
                    <thead><tr><th>Parameter</th><th>Required</th><th>Type</th><th>Comments</th></tr></thead>
                    <tbody>
                        <tr><td>category</td><td><strong>true</strong></td><td>string</td><td>Product type: <code>linear</code>, <code>inverse</code>, <code>spot</code>, <code>option</code></td></tr>
                        <tr><td>symbol</td><td>false</td><td>string</td><td>Symbol name. For Spot, required when <code>openOnly</code> is 1 or 2</td></tr>
                        <tr><td>baseCoin</td><td>false</td><td>string</td><td>Base coin. Spot only</td></tr>
                        <tr><td>settleCoin</td><td>false</td><td>string</td><td>Settle coin. Linear & Inverse only</td></tr>
                        <tr><td>orderId</td><td>false</td><td>string</td><td>Order ID</td></tr>
                        <tr><td>orderLinkId</td><td>false</td><td>string</td><td>User customised order ID</td></tr>
                        <tr><td>openOnly</td><td>false</td><td>integer</td><td><code>0</code> (default): query open orders. <code>1</code>: query recent 500 closed orders. Ignored when querying by <code>orderId</code>/<code>orderLinkId</code></td></tr>
                        <tr><td>orderFilter</td><td>false</td><td>string</td><td><code>Order</code>, <code>StopOrder</code>, <code>tpslOrder</code>, <code>OcoOrder</code>, <code>BidirectionalTpslOrder</code></td></tr>
                        <tr><td>limit</td><td>false</td><td>integer</td><td>Limit per page. [1, 50]. Default: 20</td></tr>
                        <tr><td>cursor</td><td>false</td><td>string</td><td>Cursor for pagination</td></tr>
                    </tbody>
                </table></div>
                <h3 className="top-req-text" id="response-params">Response Parameters</h3>
                <div className="api-table-box"><table className="table table-striped api-table mb-0">
                    <thead><tr><th>Parameter</th><th>Type</th><th>Comments</th></tr></thead>
                    <tbody>
                        <tr><td>category</td><td>string</td><td>Product type</td></tr>
                        <tr><td>nextPageCursor</td><td>string</td><td>Cursor for next page</td></tr>
                        <tr><td>list</td><td>array</td><td>Order list</td></tr>
                        <tr><td style={{ paddingLeft: "28px" }}>&gt; orderId</td><td>string</td><td>Order ID</td></tr>
                        <tr><td style={{ paddingLeft: "28px" }}>&gt; orderLinkId</td><td>string</td><td>User customised order ID</td></tr>
                        <tr><td style={{ paddingLeft: "28px" }}>&gt; blockTradeId</td><td>string</td><td>Paradigm block trade ID</td></tr>
                        <tr><td style={{ paddingLeft: "28px" }}>&gt; symbol</td><td>string</td><td>Symbol name</td></tr>
                        <tr><td style={{ paddingLeft: "28px" }}>&gt; price</td><td>string</td><td>Order price</td></tr>
                        <tr><td style={{ paddingLeft: "28px" }}>&gt; qty</td><td>string</td><td>Order quantity</td></tr>
                        <tr><td style={{ paddingLeft: "28px" }}>&gt; side</td><td>string</td><td><code>Buy</code>, <code>Sell</code></td></tr>
                        <tr><td style={{ paddingLeft: "28px" }}>&gt; isLeverage</td><td>string</td><td>0: no leverage, 1: use leverage (Spot only)</td></tr>
                        <tr><td style={{ paddingLeft: "28px" }}>&gt; positionIdx</td><td>integer</td><td>Position index (0, 1, 2)</td></tr>
                        <tr><td style={{ paddingLeft: "28px" }}>&gt; orderStatus</td><td>string</td><td>Order status</td></tr>
                        <tr><td style={{ paddingLeft: "28px" }}>&gt; createType</td><td>string</td><td>Order create type</td></tr>
                        <tr><td style={{ paddingLeft: "28px" }}>&gt; cancelType</td><td>string</td><td>Cancel type</td></tr>
                        <tr><td style={{ paddingLeft: "28px" }}>&gt; rejectReason</td><td>string</td><td>Reject reason</td></tr>
                        <tr><td style={{ paddingLeft: "28px" }}>&gt; avgPrice</td><td>string</td><td>Average filled price</td></tr>
                        <tr><td style={{ paddingLeft: "28px" }}>&gt; leavesQty</td><td>string</td><td>Remaining quantity</td></tr>
                        <tr><td style={{ paddingLeft: "28px" }}>&gt; leavesValue</td><td>string</td><td>Estimated value of leavesQty</td></tr>
                        <tr><td style={{ paddingLeft: "28px" }}>&gt; cumExecQty</td><td>string</td><td>Cumulative executed quantity</td></tr>
                        <tr><td style={{ paddingLeft: "28px" }}>&gt; cumExecValue</td><td>string</td><td>Cumulative executed value</td></tr>
                        <tr><td style={{ paddingLeft: "28px" }}>&gt; cumExecFee</td><td>string</td><td>Cumulative executed fee</td></tr>
                        <tr><td style={{ paddingLeft: "28px" }}>&gt; timeInForce</td><td>string</td><td><code>GTC</code>, <code>IOC</code>, <code>FOK</code>, <code>PostOnly</code></td></tr>
                        <tr><td style={{ paddingLeft: "28px" }}>&gt; orderType</td><td>string</td><td><code>Market</code>, <code>Limit</code></td></tr>
                        <tr><td style={{ paddingLeft: "28px" }}>&gt; stopOrderType</td><td>string</td><td>Stop order type</td></tr>
                        <tr><td style={{ paddingLeft: "28px" }}>&gt; orderIv</td><td>string</td><td>Implied volatility</td></tr>
                        <tr><td style={{ paddingLeft: "28px" }}>&gt; marketUnit</td><td>string</td><td>Qty unit for Spot market orders</td></tr>
                        <tr><td style={{ paddingLeft: "28px" }}>&gt; triggerPrice</td><td>string</td><td>Trigger price</td></tr>
                        <tr><td style={{ paddingLeft: "28px" }}>&gt; takeProfit</td><td>string</td><td>Take profit price</td></tr>
                        <tr><td style={{ paddingLeft: "28px" }}>&gt; stopLoss</td><td>string</td><td>Stop loss price</td></tr>
                        <tr><td style={{ paddingLeft: "28px" }}>&gt; tpslMode</td><td>string</td><td><code>Full</code>, <code>Partial</code></td></tr>
                        <tr><td style={{ paddingLeft: "28px" }}>&gt; tpLimitPrice</td><td>string</td><td>Limit price for TP</td></tr>
                        <tr><td style={{ paddingLeft: "28px" }}>&gt; slLimitPrice</td><td>string</td><td>Limit price for SL</td></tr>
                        <tr><td style={{ paddingLeft: "28px" }}>&gt; tpTriggerBy</td><td>string</td><td>Price type to trigger TP</td></tr>
                        <tr><td style={{ paddingLeft: "28px" }}>&gt; slTriggerBy</td><td>string</td><td>Price type to trigger SL</td></tr>
                        <tr><td style={{ paddingLeft: "28px" }}>&gt; triggerDirection</td><td>integer</td><td>1: rise, 2: fall</td></tr>
                        <tr><td style={{ paddingLeft: "28px" }}>&gt; triggerBy</td><td>string</td><td>Price type for trigger</td></tr>
                        <tr><td style={{ paddingLeft: "28px" }}>&gt; lastPriceOnCreated</td><td>string</td><td>Last price at creation</td></tr>
                        <tr><td style={{ paddingLeft: "28px" }}>&gt; reduceOnly</td><td>boolean</td><td>Reduce only status</td></tr>
                        <tr><td style={{ paddingLeft: "28px" }}>&gt; closeOnTrigger</td><td>boolean</td><td>Close on trigger status</td></tr>
                        <tr><td style={{ paddingLeft: "28px" }}>&gt; placeType</td><td>string</td><td><code>iv</code>, <code>price</code> (Options only)</td></tr>
                        <tr><td style={{ paddingLeft: "28px" }}>&gt; smpType</td><td>string</td><td>SMP execution type</td></tr>
                        <tr><td style={{ paddingLeft: "28px" }}>&gt; smpGroup</td><td>integer</td><td>SMP group ID</td></tr>
                        <tr><td style={{ paddingLeft: "28px" }}>&gt; smpOrderId</td><td>string</td><td>Counterparty order ID for SMP</td></tr>
                        <tr><td style={{ paddingLeft: "28px" }}>&gt; createdTime</td><td>string</td><td>Created timestamp (ms)</td></tr>
                        <tr><td style={{ paddingLeft: "28px" }}>&gt; updatedTime</td><td>string</td><td>Updated timestamp (ms)</td></tr>
                    </tbody>
                </table></div>
                <h3 className="top-req-text" id="request-example">Request Example</h3>
                <div className="lang-tabs">{["HTTP", "Python", "Go", "Java", "Node"].map((t) => (<button key={t} className={lang === t ? "active" : ""} onClick={() => setLang(t)}>{t}</button>))}</div>
                <div className="api-code-box position-relative"><button className="copy-btn" onClick={handleCopy}>{copied ? <FiCheck /> : <FiCopy />}</button><pre><code>{codeMap[lang]}</code></pre></div>
                <h3 className="top-req-text" id="response-example">Response Example</h3>
                <div className="api-code-box position-relative"><button className="copy-btn" onClick={handleCopyRes}>{copiedRes ? <FiCheck /> : <FiCopy />}</button><pre><code>{responseCode}</code></pre></div>
            </div>
            <div className="col-lg-3 col-md-4 d-none d-md-block"><div className="api-sidebar"><ul>
                <li className={activeSection === "http" ? "active" : ""} onClick={() => scrollToSection("http")}>HTTP Request</li>
                <li className={activeSection === "request-params" ? "active" : ""} onClick={() => scrollToSection("request-params")}>Request Parameters</li>
                <li className={activeSection === "response-params" ? "active" : ""} onClick={() => scrollToSection("response-params")}>Response Parameters</li>
                <li className={activeSection === "request-example" ? "active" : ""} onClick={() => scrollToSection("request-example")}>Request Example</li>
                <li className={activeSection === "response-example" ? "active" : ""} onClick={() => scrollToSection("response-example")}>Response Example</li>
            </ul></div></div>
        </div></div></div>
    );
};
