import { useState, useRef, useEffect } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FiCopy, FiCheck } from "react-icons/fi";

export const PlaceOrder = () => {
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
        "orderId": "1321003749386327552",
        "orderLinkId": "spot-test-postonly"
    },
    "retExtInfo": {},
    "time": 1672211918471
}`;

    const codeMap = {
        HTTP: `POST /v5/order/create HTTP/1.1
Host: api.bybit.com
X-BAPI-SIGN: XXXXX
X-BAPI-API-KEY: XXXXXXXXXXXXXXXXXX
X-BAPI-TIMESTAMP: 1672211928338
X-BAPI-RECV-WINDOW: 5000
Content-Type: application/json

{
    "category": "spot",
    "symbol": "BTCUSDT",
    "side": "Buy",
    "orderType": "Limit",
    "qty": "0.1",
    "price": "15600",
    "timeInForce": "GTC",
    "orderLinkId": "spot-test-postonly"
}`,
        Python: `import requests

url = "https://api.bybit.com/v5/order/create"
headers = {
    "Content-Type": "application/json",
    "X-BAPI-API-KEY": "XXXXXXXXXXXXXXXXXX",
    "X-BAPI-SIGN": "XXXXX",
    "X-BAPI-TIMESTAMP": "1672211928338",
    "X-BAPI-RECV-WINDOW": "5000"
}
payload = {
    "category": "spot",
    "symbol": "BTCUSDT",
    "side": "Buy",
    "orderType": "Limit",
    "qty": "0.1",
    "price": "15600",
    "timeInForce": "GTC",
    "orderLinkId": "spot-test-postonly"
}
try:
    resp = requests.post(url, json=payload, headers=headers, timeout=10)
    resp.raise_for_status()
    print(resp.json())
except requests.exceptions.RequestException as e:
    print("Error:", str(e))`,
        Go: `package main
import ("bytes"; "encoding/json"; "fmt"; "io"; "net/http"; "time")
func main() {
    url := "https://api.bybit.com/v5/order/create"
    body, _ := json.Marshal(map[string]interface{}{
        "category": "spot", "symbol": "BTCUSDT", "side": "Buy",
        "orderType": "Limit", "qty": "0.1", "price": "15600",
        "timeInForce": "GTC", "orderLinkId": "spot-test-postonly",
    })
    req, _ := http.NewRequest("POST", url, bytes.NewBuffer(body))
    req.Header.Set("Content-Type", "application/json")
    req.Header.Set("X-BAPI-API-KEY", "XXXXXXXXXXXXXXXXXX")
    req.Header.Set("X-BAPI-SIGN", "XXXXX")
    req.Header.Set("X-BAPI-TIMESTAMP", "1672211928338")
    req.Header.Set("X-BAPI-RECV-WINDOW", "5000")
    client := &http.Client{Timeout: 10 * time.Second}
    resp, err := client.Do(req)
    if err != nil { panic(err) }
    defer resp.Body.Close()
    data, _ := io.ReadAll(resp.Body)
    fmt.Println(string(data))
}`,
        Java: `import java.net.URI; import java.net.http.*; import java.time.Duration;
public class PlaceOrderExample {
    public static void main(String[] args) throws Exception {
        String json = """
            {"category":"spot","symbol":"BTCUSDT","side":"Buy",
             "orderType":"Limit","qty":"0.1","price":"15600",
             "timeInForce":"GTC","orderLinkId":"spot-test-postonly"}
            """;
        HttpClient client = HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(10)).build();
        HttpRequest request = HttpRequest.newBuilder()
            .uri(URI.create("https://api.bybit.com/v5/order/create"))
            .header("Content-Type", "application/json")
            .header("X-BAPI-API-KEY", "XXXXXXXXXXXXXXXXXX")
            .header("X-BAPI-SIGN", "XXXXX")
            .header("X-BAPI-TIMESTAMP", "1672211928338")
            .header("X-BAPI-RECV-WINDOW", "5000")
            .POST(HttpRequest.BodyPublishers.ofString(json)).build();
        HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
        System.out.println(response.body());
    }
}`,
        Node: `const axios = require("axios");
async function placeOrder() {
  try {
    const response = await axios.post("https://api.bybit.com/v5/order/create",
      { category: "spot", symbol: "BTCUSDT", side: "Buy", orderType: "Limit",
        qty: "0.1", price: "15600", timeInForce: "GTC", orderLinkId: "spot-test-postonly" },
      { headers: { "Content-Type": "application/json", "X-BAPI-API-KEY": "XXXXXXXXXXXXXXXXXX",
        "X-BAPI-SIGN": "XXXXX", "X-BAPI-TIMESTAMP": "1672211928338", "X-BAPI-RECV-WINDOW": "5000" } });
    console.log(response.data);
  } catch (error) { console.error("Error:", error.response?.data || error.message); }
}
placeOrder();`,
    };

    return (
        <div className="container-fluid p-0">
            <div className="api-layout">
                <div className="row">
                    <div className="col-lg-9 col-md-12 api-content" ref={contentRef}>
                        <div className="breadcrumb mb-4">
                            <span className="kline-market">Trade</span>
                            <span className="mx-2"><IoIosArrowForward className="kline-arrow" /></span>
                            <span className="pill">Place Order</span>
                        </div>

                        <h1 className="api-title">Place Order</h1>
                        <p className="api-desc">
                            This endpoint supports creating orders for Spot, Margin trading, USDT perpetual, USDT futures, USDC perpetual, USDC futures, Inverse Futures, and Options.
                        </p>

                        <div className="api-info-box">
                            <div className="api-info-header">
                                <span className="api-info-title">Info</span>
                            </div>
                            <ul style={{ margin: 0, paddingLeft: "18px" }}>
                                <li>Order quantity must be a positive number.</li>
                                <li><strong>Limit</strong> order: price is required.</li>
                                <li><strong>Market</strong> order: executes at best available price, price is optional.</li>
                                <li><strong>Conditional orders</strong>: automatically converted if <code>triggerPrice</code> is set.</li>
                                <li><strong>orderLinkId</strong>: optional, max 36 characters, must be unique.</li>
                                <li>Open orders limit: Perps/Futures — 500 active per symbol. Spot — 500 total.</li>
                            </ul>
                        </div>

                        <div className="api-cover">Requires Authentication</div>

                        <h3 className="top-req-text" id="http">HTTP Request</h3>
                        <div className="http-path">
                            <span className="method post">POST</span>
                            <span className="path">/v5/order/create</span>
                        </div>

                        <h3 className="top-req-text" id="request-params">Request Parameters</h3>
                        <div className="api-table-box">
                            <table className="table table-striped api-table mb-0">
                                <thead><tr><th>Parameter</th><th>Required</th><th>Type</th><th>Comments</th></tr></thead>
                                <tbody>
                                    <tr><td>category</td><td><strong>true</strong></td><td>string</td><td>Product type: <code>linear</code>, <code>inverse</code>, <code>spot</code>, <code>option</code></td></tr>
                                    <tr><td>symbol</td><td><strong>true</strong></td><td>string</td><td>Symbol name, e.g. <code>BTCUSDT</code>, uppercase only</td></tr>
                                    <tr><td>isLeverage</td><td>false</td><td>integer</td><td>Spot only: <code>0</code> (default: false), <code>1</code> (true: margin trading)</td></tr>
                                    <tr><td>side</td><td><strong>true</strong></td><td>string</td><td><code>Buy</code>, <code>Sell</code></td></tr>
                                    <tr><td>orderType</td><td><strong>true</strong></td><td>string</td><td><code>Market</code>, <code>Limit</code></td></tr>
                                    <tr><td>qty</td><td><strong>true</strong></td><td>string</td><td>Order quantity</td></tr>
                                    <tr><td>marketUnit</td><td>false</td><td>string</td><td>Spot Market Buy unit: <code>baseCoin</code>, <code>quoteCoin</code></td></tr>
                                    <tr><td>price</td><td>false</td><td>string</td><td>Order price. Required for Limit orders</td></tr>
                                    <tr><td>triggerDirection</td><td>false</td><td>integer</td><td>Conditional order: <code>1</code> (rises to), <code>2</code> (falls to)</td></tr>
                                    <tr><td>orderFilter</td><td>false</td><td>string</td><td>Spot only: <code>Order</code>, <code>tpslOrder</code>, <code>StopOrder</code></td></tr>
                                    <tr><td>triggerPrice</td><td>false</td><td>string</td><td>Trigger price for conditional orders</td></tr>
                                    <tr><td>triggerBy</td><td>false</td><td>string</td><td>Trigger type: <code>LastPrice</code>, <code>IndexPrice</code>, <code>MarkPrice</code></td></tr>
                                    <tr><td>orderIv</td><td>false</td><td>string</td><td>Options only: Implied volatility</td></tr>
                                    <tr><td>timeInForce</td><td>false</td><td>string</td><td><code>GTC</code>, <code>IOC</code>, <code>FOK</code>, <code>PostOnly</code></td></tr>
                                    <tr><td>positionIdx</td><td>false</td><td>integer</td><td>Hedge mode: <code>0</code> (one-way), <code>1</code> (Buy side), <code>2</code> (Sell side)</td></tr>
                                    <tr><td>orderLinkId</td><td>false</td><td>string</td><td>User customized order ID (max 36 chars)</td></tr>
                                    <tr><td>takeProfit</td><td>false</td><td>string</td><td>Take profit price</td></tr>
                                    <tr><td>stopLoss</td><td>false</td><td>string</td><td>Stop loss price</td></tr>
                                    <tr><td>tpTriggerBy</td><td>false</td><td>string</td><td>TP trigger price type: <code>LastPrice</code>, <code>IndexPrice</code>, <code>MarkPrice</code></td></tr>
                                    <tr><td>slTriggerBy</td><td>false</td><td>string</td><td>SL trigger price type: <code>LastPrice</code>, <code>IndexPrice</code>, <code>MarkPrice</code></td></tr>
                                    <tr><td>reduceOnly</td><td>false</td><td>boolean</td><td><code>true</code> means your position can only reduce in size</td></tr>
                                    <tr><td>closeOnTrigger</td><td>false</td><td>boolean</td><td>For closing orders. Checks margin/balance</td></tr>
                                    <tr><td>smpType</td><td>false</td><td>string</td><td>SMP execution type: <code>None</code>, <code>CancelMaker</code>, <code>CancelTaker</code>, <code>CancelBoth</code></td></tr>
                                    <tr><td>mmp</td><td>false</td><td>boolean</td><td>Options only: Market maker protection</td></tr>
                                    <tr><td>tpslMode</td><td>false</td><td>string</td><td>TP/SL mode: <code>Full</code>, <code>Partial</code></td></tr>
                                    <tr><td>tpLimitPrice</td><td>false</td><td>string</td><td>TP limit price (for Limit TP orders)</td></tr>
                                    <tr><td>slLimitPrice</td><td>false</td><td>string</td><td>SL limit price (for Limit SL orders)</td></tr>
                                    <tr><td>tpOrderType</td><td>false</td><td>string</td><td>TP order type: <code>Market</code>, <code>Limit</code></td></tr>
                                    <tr><td>slOrderType</td><td>false</td><td>string</td><td>SL order type: <code>Market</code>, <code>Limit</code></td></tr>
                                </tbody>
                            </table>
                        </div>

                        <h3 className="top-req-text" id="response-params">Response Parameters</h3>
                        <div className="api-table-box">
                            <table className="table table-striped api-table mb-0">
                                <thead><tr><th>Parameter</th><th>Type</th><th>Comments</th></tr></thead>
                                <tbody>
                                    <tr><td>retCode</td><td>number</td><td>Success/error code</td></tr>
                                    <tr><td>retMsg</td><td>string</td><td>Success/error message</td></tr>
                                    <tr><td>result</td><td>Object</td><td>Result object</td></tr>
                                    <tr><td style={{ paddingLeft: "28px" }}>&gt; orderId</td><td>string</td><td>Order ID</td></tr>
                                    <tr><td style={{ paddingLeft: "28px" }}>&gt; orderLinkId</td><td>string</td><td>User customised order ID</td></tr>
                                    <tr><td>retExtInfo</td><td>Object</td><td>Extra information</td></tr>
                                    <tr><td>time</td><td>number</td><td>Current timestamp (ms)</td></tr>
                                </tbody>
                            </table>
                        </div>

                        <h3 className="top-req-text" id="request-example">Request Example</h3>
                        <div className="lang-tabs">
                            {["HTTP", "Python", "Go", "Java", "Node"].map((t) => (
                                <button key={t} className={lang === t ? "active" : ""} onClick={() => setLang(t)}>{t}</button>
                            ))}
                        </div>
                        <div className="api-code-box position-relative">
                            <button className="copy-btn" onClick={handleCopy}>{copied ? <FiCheck /> : <FiCopy />}</button>
                            <pre><code>{codeMap[lang]}</code></pre>
                        </div>

                        <h3 className="top-req-text" id="response-example">Response Example</h3>
                        <div className="api-code-box position-relative">
                            <button className="copy-btn" onClick={handleCopyRes}>{copiedRes ? <FiCheck /> : <FiCopy />}</button>
                            <pre><code>{responseCode}</code></pre>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 d-none d-md-block">
                        <div className="api-sidebar">
                            <ul>
                                <li className={activeSection === "http" ? "active" : ""} onClick={() => scrollToSection("http")}>HTTP Request</li>
                                <li className={activeSection === "request-params" ? "active" : ""} onClick={() => scrollToSection("request-params")}>Request Parameters</li>
                                <li className={activeSection === "response-params" ? "active" : ""} onClick={() => scrollToSection("response-params")}>Response Parameters</li>
                                <li className={activeSection === "request-example" ? "active" : ""} onClick={() => scrollToSection("request-example")}>Request Example</li>
                                <li className={activeSection === "response-example" ? "active" : ""} onClick={() => scrollToSection("response-example")}>Response Example</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
