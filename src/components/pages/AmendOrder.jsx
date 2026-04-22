import { useState, useRef, useEffect } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FiCopy, FiCheck } from "react-icons/fi";

export const AmendOrder = () => {
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
        "orderId": "c6f055d9-7f21-4079-913d-e6523a9cfffa",
        "orderLinkId": "linear-004"
    },
    "retExtInfo": {},
    "time": 1672217093461
}`;

    const codeMap = {
        HTTP: `POST /v5/order/amend HTTP/1.1
Host: api.bitzup.com
X-BAPI-SIGN: XXXXX
X-BAPI-API-KEY: xxxxxxxxxxxxxxxxxx
X-BAPI-TIMESTAMP: 1672217108106
X-BAPI-RECV-WINDOW: 5000
Content-Type: application/json

{
    "category": "linear",
    "symbol": "ETHPERP",
    "orderLinkId": "linear-004",
    "triggerPrice": "1145",
    "qty": "0.15",
    "price": "1050",
    "takeProfit": "0",
    "stopLoss": "0"
}`,
        Python: `import requests

url = "https://api.bitzup.com/v5/order/amend"
headers = {
    "Content-Type": "application/json",
    "X-BAPI-API-KEY": "xxxxxxxxxxxxxxxxxx",
    "X-BAPI-SIGN": "XXXXX",
    "X-BAPI-TIMESTAMP": "1672217108106",
    "X-BAPI-RECV-WINDOW": "5000"
}
payload = {
    "category": "linear",
    "symbol": "ETHPERP",
    "orderLinkId": "linear-004",
    "triggerPrice": "1145",
    "qty": "0.15",
    "price": "1050",
    "takeProfit": "0",
    "stopLoss": "0"
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
    url := "https://api.bitzup.com/v5/order/amend"
    body, _ := json.Marshal(map[string]interface{}{
        "category": "linear", "symbol": "ETHPERP",
        "orderLinkId": "linear-004", "triggerPrice": "1145",
        "qty": "0.15", "price": "1050",
        "takeProfit": "0", "stopLoss": "0",
    })
    req, _ := http.NewRequest("POST", url, bytes.NewBuffer(body))
    req.Header.Set("Content-Type", "application/json")
    req.Header.Set("X-BAPI-API-KEY", "xxxxxxxxxxxxxxxxxx")
    req.Header.Set("X-BAPI-SIGN", "XXXXX")
    req.Header.Set("X-BAPI-TIMESTAMP", "1672217108106")
    req.Header.Set("X-BAPI-RECV-WINDOW", "5000")
    client := &http.Client{Timeout: 10 * time.Second}
    resp, err := client.Do(req)
    if err != nil { panic(err) }
    defer resp.Body.Close()
    data, _ := io.ReadAll(resp.Body)
    fmt.Println(string(data))
}`,
        Java: `import java.net.URI; import java.net.http.*; import java.time.Duration;
public class AmendOrderExample {
    public static void main(String[] args) throws Exception {
        String json = """
            {"category":"linear","symbol":"ETHPERP","orderLinkId":"linear-004",
             "triggerPrice":"1145","qty":"0.15","price":"1050",
             "takeProfit":"0","stopLoss":"0"}
            """;
        HttpClient client = HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(10)).build();
        HttpRequest request = HttpRequest.newBuilder()
            .uri(URI.create("https://api.bitzup.com/v5/order/amend"))
            .header("Content-Type", "application/json")
            .header("X-BAPI-API-KEY", "xxxxxxxxxxxxxxxxxx")
            .header("X-BAPI-SIGN", "XXXXX")
            .header("X-BAPI-TIMESTAMP", "1672217108106")
            .header("X-BAPI-RECV-WINDOW", "5000")
            .POST(HttpRequest.BodyPublishers.ofString(json)).build();
        HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
        System.out.println(response.body());
    }
}`,
        Node: `const axios = require("axios");
async function amendOrder() {
  try {
    const response = await axios.post("https://api.bitzup.com/v5/order/amend",
      { category: "linear", symbol: "ETHPERP", orderLinkId: "linear-004",
        triggerPrice: "1145", qty: "0.15", price: "1050",
        takeProfit: "0", stopLoss: "0" },
      { headers: { "Content-Type": "application/json", "X-BAPI-API-KEY": "xxxxxxxxxxxxxxxxxx",
        "X-BAPI-SIGN": "XXXXX", "X-BAPI-TIMESTAMP": "1672217108106", "X-BAPI-RECV-WINDOW": "5000" } });
    console.log(response.data);
  } catch (error) { console.error("Error:", error.response?.data || error.message); }
}
amendOrder();`,
    };

    return (
        <div className="container-fluid p-0">
            <div className="api-layout">
                <div className="row">
                    <div className="col-lg-9 col-md-12 api-content" ref={contentRef}>
                        <div className="breadcrumb mb-4">
                            <span className="kline-market">Trade</span>
                            <span className="mx-2"><IoIosArrowForward className="kline-arrow" /></span>
                            <span className="pill">Amend Order</span>
                        </div>

                        <h1 className="api-title">Amend Order</h1>
                        <p className="api-desc">
                            You can only modify unfilled or partially filled orders.
                        </p>

                        <div className="api-info-box">
                            <div className="api-info-header">
                                <span className="api-info-title">Info</span>
                            </div>
                            <p>The acknowledgement of an amend order request indicates that the request was successfully accepted. This request is asynchronous, so please use the websocket to confirm the order status.</p>
                        </div>

                        <div className="api-cover">Requires Authentication</div>

                        <h3 className="top-req-text" id="http">HTTP Request</h3>
                        <div className="http-path">
                            <span className="method post">POST</span>
                            <span className="path">/v5/order/amend</span>
                        </div>

                        <h3 className="top-req-text" id="request-params">Request Parameters</h3>
                        <div className="api-table-box">
                            <table className="table table-striped api-table mb-0">
                                <thead><tr><th>Parameter</th><th>Required</th><th>Type</th><th>Comments</th></tr></thead>
                                <tbody>
                                    <tr><td>category</td><td><strong>true</strong></td><td>string</td><td>Product type. <span className="pill">linear</span></td></tr>
                                    <tr><td>symbol</td><td><strong>true</strong></td><td>string</td><td>Symbol name, like <span className="pill">BTCUSDT</span>, uppercase only</td></tr>
                                    <tr><td>orderId</td><td>false</td><td>string</td><td>Order ID. Either <span className="pill">orderId</span> or <span className="pill">orderLinkId</span> is required</td></tr>
                                    <tr><td>orderLinkId</td><td>false</td><td>string</td><td>User customised order ID. Either <span className="pill">orderId</span> or <span className="pill">orderLinkId</span> is required</td></tr>
                                    <tr><td>orderIv</td><td>false</td><td>string</td><td>Implied volatility. <span className="pill">option</span> only. Pass the real value, e.g. for 10%, 0.1 should be passed</td></tr>
                                    <tr><td>triggerPrice</td><td>false</td><td>string</td><td>Conditional order trigger price. If you expect the price to rise to trigger, ensure <span className="pill">triggerPrice</span> &gt; current market price</td></tr>
                                    <tr><td>qty</td><td>false</td><td>string</td><td>Order quantity after modification. Do not pass it if not modified</td></tr>
                                    <tr><td>price</td><td>false</td><td>string</td><td>Order price after modification. Do not pass it if not modified</td></tr>
                                    <tr><td>tpslMode</td><td>false</td><td>string</td><td>TP/SL mode: <span className="pill">Full</span> (entire position), <span className="pill">Partial</span> (partial position). <span className="pill">linear</span> only</td></tr>
                                    <tr><td>takeProfit</td><td>false</td><td>string</td><td>Take profit price after modification. Pass <span className="pill">"0"</span> to cancel existing TP. Valid for <span className="pill">linear</span></td></tr>
                                    <tr><td>stopLoss</td><td>false</td><td>string</td><td>Stop loss price after modification. Pass <span className="pill">"0"</span> to cancel existing SL. Valid for <span className="pill">linear</span></td></tr>
                                    <tr><td>tpTriggerBy</td><td>false</td><td>string</td><td>TP trigger price type: <span className="pill">LastPrice</span>, <span className="pill">IndexPrice</span>, <span className="pill">MarkPrice</span></td></tr>
                                    <tr><td>slTriggerBy</td><td>false</td><td>string</td><td>SL trigger price type: <span className="pill">LastPrice</span>, <span className="pill">IndexPrice</span>, <span className="pill">MarkPrice</span></td></tr>
                                    <tr><td>triggerBy</td><td>false</td><td>string</td><td>Conditional order trigger type: <span className="pill">LastPrice</span>, <span className="pill">IndexPrice</span>, <span className="pill">MarkPrice</span></td></tr>
                                    <tr><td>tpLimitPrice</td><td>false</td><td>string</td><td>TP limit price for partial limit TP/SL orders.</td></tr>
                                    <tr><td>slLimitPrice</td><td>false</td><td>string</td><td>SL limit price for partial limit TP/SL orders.</td></tr>
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
                        <div className="api-code-box position-relative" style={{ marginBottom: "40px" }}>
                            <button className="copy-btn" onClick={handleCopy}>{copied ? <FiCheck /> : <FiCopy />}</button>
                            <pre style={{ margin: 0 }}><code >{codeMap[lang]}</code></pre>
                        </div>

                        <h3 className="top-req-text" id="response-example">Response Example</h3>
                        <div className="api-code-box position-relative" style={{ marginBottom: "40px" }}>
                            <button className="copy-btn" onClick={handleCopyRes}>{copiedRes ? <FiCheck /> : <FiCopy />}</button>
                            <pre style={{ margin: 0 }}><code >{responseCode}</code></pre>
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
