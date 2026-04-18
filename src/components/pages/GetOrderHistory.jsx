import { useState, useRef, useEffect } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FiCopy, FiCheck } from "react-icons/fi";

export const GetOrderHistory = () => {
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
                "orderId": "14bad3a1-6454-43d8-bcf2-5345896cf74d",
                "orderLinkId": "YLxaWKMiHU",
                "blockTradeId": "",
                "symbol": "BTCUSDT",
                "price": "26864.40",
                "qty": "0.003",
                "side": "Buy",
                "isLeverage": "",
                "positionIdx": 1,
                "orderStatus": "Cancelled",
                "cancelType": "UNKNOWN",
                "rejectReason": "EC_PostOnlyWillTakeLiquidity",
                "avgPrice": "0",
                "leavesQty": "0.000",
                "leavesValue": "0",
                "cumExecQty": "0.000",
                "cumExecValue": "0.00000000",
                "cumExecFee": "0.00242968",
                "timeInForce": "PostOnly",
                "orderType": "Limit",
                "stopOrderType": "UNKNOWN",
                "orderIv": "",
                "triggerPrice": "0.00",
                "takeProfit": "0.00",
                "stopLoss": "0.00",
                "tpTriggerBy": "UNKNOWN",
                "slTriggerBy": "UNKNOWN",
                "triggerDirection": 0,
                "triggerBy": "UNKNOWN",
                "lastPriceOnCreated": "0.00",
                "reduceOnly": false,
                "closeOnTrigger": false,
                "smpType": "None",
                "smpGroup": 0,
                "smpOrderId": "",
                "tpslMode": "",
                "tpLimitPrice": "",
                "slLimitPrice": "",
                "placeType": "",
                "createdTime": "1684476068369",
                "updatedTime": "1684476068372"
            }
        ],
        "nextPageCursor": "page_token%3D39380%26",
        "category": "linear"
    },
    "retExtInfo": {},
    "time": 1684766282976
}`;

  const codeMap = {
    HTTP: `GET /v5/order/history?category=linear&limit=1 HTTP/1.1
Host: api.bitzup.com
X-BAPI-SIGN: XXXXX
X-BAPI-API-KEY: xxxxxxxxxxxxxxxxxx
X-BAPI-TIMESTAMP: 1672221263407
X-BAPI-RECV-WINDOW: 5000`,
    Python: `import requests
url = "https://api.bitzup.com/v5/order/history"
headers = {"X-BAPI-API-KEY": "xxxxxxxxxxxxxxxxxx", "X-BAPI-SIGN": "XXXXX",
    "X-BAPI-TIMESTAMP": "1672221263407", "X-BAPI-RECV-WINDOW": "5000"}
params = {"category": "linear", "limit": 1}
try:
    resp = requests.get(url, params=params, headers=headers, timeout=10)
    print(resp.json())
except requests.exceptions.RequestException as e:
    print("Error:", str(e))`,
    Go: `package main
import ("fmt"; "io"; "net/http"; "time")
func main() {
    url := "https://api.bitzup.com/v5/order/history?category=linear&limit=1"
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
public class GetOrderHistoryExample {
    public static void main(String[] args) throws Exception {
        HttpClient client = HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(10)).build();
        HttpRequest request = HttpRequest.newBuilder()
            .uri(URI.create("https://api.bitzup.com/v5/order/history?category=linear&limit=1"))
            .header("X-BAPI-API-KEY", "xxxxxxxxxxxxxxxxxx")
            .header("X-BAPI-SIGN", "XXXXX")
            .GET().build();
        HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
        System.out.println(response.body());
    }
}`,
    Node: `const axios = require("axios");
async function getOrderHistory() {
  try {
    const response = await axios.get("https://api.bitzup.com/v5/order/history",
      { params: { category: "linear", limit: 1 },
        headers: { "X-BAPI-API-KEY": "xxxxxxxxxxxxxxxxxx", "X-BAPI-SIGN": "XXXXX" } });
    console.log(response.data);
  } catch (error) { console.error("Error:", error.response?.data || error.message); }
}
getOrderHistory();`,
  };

  return (
    <div className="container-fluid p-0"><div className="api-layout"><div className="row">
      <div className="col-lg-9 col-md-12 api-content" ref={contentRef}>
        <div className="breadcrumb mb-4"><span className="kline-market">Trade</span><span className="mx-2"><IoIosArrowForward className="kline-arrow" /></span><span className="pill">Get Order History (2 years)</span></div>
        <h1 className="api-title">Get Order History (2 years)</h1>
        <p className="api-desc">Query order history. As order creation/cancellation is asynchronous, the data returned from this endpoint may delay. If you want to get real-time order information, you should use the websocket stream (recommended).</p>
        <div className="api-info-box"><div className="api-info-header"><span className="api-info-title">Info</span></div>
          <ul style={{ margin: 0, paddingLeft: "18px" }}>
            <li><strong>Last 7 days:</strong> Supports querying all closed status except "Cancelled", "Rejected", "Deactivated".</li>
            <li><strong>Last 24 hours:</strong> Orders with "Cancelled" (fully cancelled), "Rejected", "Deactivated" can be queried.</li>
            <li><strong>Beyond 7 days:</strong> Supports querying orders with fills only (fully filled, or partial filled but cancelled).</li>
          </ul>
        </div>
        <div className="api-cover">Requires Authentication</div>
        <h3 className="top-req-text" id="http">HTTP Request</h3>
        <div className="http-path"><span className="method get">GET</span><span className="path">/v5/order/history</span></div>
        <h3 className="top-req-text" id="request-params">Request Parameters</h3>
        <div className="api-table-box"><table className="table table-striped api-table mb-0">
          <thead><tr><th>Parameter</th><th>Required</th><th>Type</th><th>Comments</th></tr></thead>
          <tbody>
            <tr><td>category</td><td><strong>true</strong></td><td>string</td><td>Product type: <code>linear</code>, <code>inverse</code>, <code>spot</code>, <code>option</code></td></tr>
            <tr><td>symbol</td><td>false</td><td>string</td><td>Symbol name, e.g. <code>BTCUSDT</code></td></tr>
            <tr><td>baseCoin</td><td>false</td><td>string</td><td>Base coin, uppercase only</td></tr>
            <tr><td>settleCoin</td><td>false</td><td>string</td><td>Settle coin, uppercase only</td></tr>
            <tr><td>orderId</td><td>false</td><td>string</td><td>Order ID</td></tr>
            <tr><td>orderLinkId</td><td>false</td><td>string</td><td>User customised order ID</td></tr>
            <tr><td>orderFilter</td><td>false</td><td>string</td><td><code>Order</code>, <code>StopOrder</code>, <code>tpslOrder</code>, <code>OcoOrder</code>, <code>BidirectionalTpslOrder</code></td></tr>
            <tr><td>orderStatus</td><td>false</td><td>string</td><td>Order status filter</td></tr>
            <tr><td>startTime</td><td>false</td><td>integer</td><td>Start timestamp (ms)</td></tr>
            <tr><td>endTime</td><td>false</td><td>integer</td><td>End timestamp (ms)</td></tr>
            <tr><td>limit</td><td>false</td><td>integer</td><td>Limit per page [1, 50]. Default: 20</td></tr>
            <tr><td>cursor</td><td>false</td><td>string</td><td>Cursor for next page</td></tr>
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
            <tr><td style={{ paddingLeft: "28px" }}>&gt; symbol</td><td>string</td><td>Symbol name</td></tr>
            <tr><td style={{ paddingLeft: "28px" }}>&gt; price</td><td>string</td><td>Order price</td></tr>
            <tr><td style={{ paddingLeft: "28px" }}>&gt; qty</td><td>string</td><td>Order quantity</td></tr>
            <tr><td style={{ paddingLeft: "28px" }}>&gt; side</td><td>string</td><td><code>Buy</code>, <code>Sell</code></td></tr>
            <tr><td style={{ paddingLeft: "28px" }}>&gt; isLeverage</td><td>string</td><td>Whether to borrow (Spot only): <code>0</code>, <code>1</code></td></tr>
            <tr><td style={{ paddingLeft: "28px" }}>&gt; orderStatus</td><td>string</td><td>Order status</td></tr>
            <tr><td style={{ paddingLeft: "28px" }}>&gt; avgPrice</td><td>string</td><td>Average filled price</td></tr>
            <tr><td style={{ paddingLeft: "28px" }}>&gt; leavesQty</td><td>string</td><td>Remaining quantity</td></tr>
            <tr><td style={{ paddingLeft: "28px" }}>&gt; cumExecQty</td><td>string</td><td>Cumulative executed quantity</td></tr>
            <tr><td style={{ paddingLeft: "28px" }}>&gt; cumExecValue</td><td>string</td><td>Cumulative executed value</td></tr>
            <tr><td style={{ paddingLeft: "28px" }}>&gt; cumExecFee</td><td>string</td><td>Cumulative executed fee</td></tr>
            <tr><td style={{ paddingLeft: "28px" }}>&gt; timeInForce</td><td>string</td><td>Time in force</td></tr>
            <tr><td style={{ paddingLeft: "28px" }}>&gt; orderType</td><td>string</td><td><code>Market</code>, <code>Limit</code></td></tr>
            <tr><td style={{ paddingLeft: "28px" }}>&gt; stopOrderType</td><td>string</td><td>Stop order type</td></tr>
            <tr><td style={{ paddingLeft: "28px" }}>&gt; triggerPrice</td><td>string</td><td>Trigger price</td></tr>
            <tr><td style={{ paddingLeft: "28px" }}>&gt; takeProfit</td><td>string</td><td>Take profit price</td></tr>
            <tr><td style={{ paddingLeft: "28px" }}>&gt; stopLoss</td><td>string</td><td>Stop loss price</td></tr>
            <tr><td style={{ paddingLeft: "28px" }}>&gt; tpTriggerBy</td><td>string</td><td>TP trigger price type</td></tr>
            <tr><td style={{ paddingLeft: "28px" }}>&gt; slTriggerBy</td><td>string</td><td>SL trigger price type</td></tr>
            <tr><td style={{ paddingLeft: "28px" }}>&gt; triggerBy</td><td>string</td><td>Trigger price type</td></tr>
            <tr><td style={{ paddingLeft: "28px" }}>&gt; reduceOnly</td><td>boolean</td><td>Reduce only</td></tr>
            <tr><td style={{ paddingLeft: "28px" }}>&gt; closeOnTrigger</td><td>boolean</td><td>Close on trigger</td></tr>
            <tr><td style={{ paddingLeft: "28px" }}>&gt; smpType</td><td>string</td><td>SMP execution type</td></tr>
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
