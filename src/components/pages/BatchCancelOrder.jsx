import { useState, useRef, useEffect } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FiCopy, FiCheck } from "react-icons/fi";

export const BatchCancelOrder = () => {
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
                "category": "linear",
                "symbol": "ETHUSDT",
                "orderId": "c6f055d9-7f21-4079-913d-e6523a9cfffa",
                "orderLinkId": "linear-004"
            },
            {
                "category": "linear",
                "symbol": "BTCUSDT",
                "orderId": "b6f055d9-7f21-4079-913d-e6523a9cfffb",
                "orderLinkId": "linear-005"
            }
        ]
    },
    "retExtInfo": {
        "list": [
            { "code": 0, "msg": "OK" },
            { "code": 0, "msg": "OK" }
        ]
    },
    "time": 1672222400519
}`;

    const codeMap = {
        HTTP: `POST /v5/order/cancel-batch HTTP/1.1
Host: api.bybit.com
X-BAPI-SIGN: XXXXX
X-BAPI-API-KEY: xxxxxxxxxxxxxxxxxx
X-BAPI-TIMESTAMP: 1672222400000
X-BAPI-RECV-WINDOW: 5000
Content-Type: application/json

{
    "category": "linear",
    "request": [
        {
            "symbol": "ETHUSDT",
            "orderId": "c6f055d9-7f21-4079-913d-e6523a9cfffa"
        },
        {
            "symbol": "BTCUSDT",
            "orderId": "b6f055d9-7f21-4079-913d-e6523a9cfffb"
        }
    ]
}`,
        Python: `import requests
url = "https://api.bybit.com/v5/order/cancel-batch"
headers = {"Content-Type": "application/json", "X-BAPI-API-KEY": "xxxxxxxxxxxxxxxxxx",
    "X-BAPI-SIGN": "XXXXX", "X-BAPI-TIMESTAMP": "1672222400000", "X-BAPI-RECV-WINDOW": "5000"}
payload = {"category": "linear", "request": [
    {"symbol": "ETHUSDT", "orderId": "c6f055d9-7f21-4079-913d-e6523a9cfffa"},
    {"symbol": "BTCUSDT", "orderId": "b6f055d9-7f21-4079-913d-e6523a9cfffb"}
]}
try:
    resp = requests.post(url, json=payload, headers=headers, timeout=10)
    print(resp.json())
except requests.exceptions.RequestException as e:
    print("Error:", str(e))`,
        Go: `package main
import ("bytes"; "encoding/json"; "fmt"; "io"; "net/http"; "time")
func main() {
    url := "https://api.bybit.com/v5/order/cancel-batch"
    payload := map[string]interface{}{
        "category": "linear",
        "request": []map[string]interface{}{
            {"symbol": "ETHUSDT", "orderId": "c6f055d9-7f21-4079-913d-e6523a9cfffa"},
            {"symbol": "BTCUSDT", "orderId": "b6f055d9-7f21-4079-913d-e6523a9cfffb"},
        },
    }
    body, _ := json.Marshal(payload)
    req, _ := http.NewRequest("POST", url, bytes.NewBuffer(body))
    req.Header.Set("Content-Type", "application/json")
    client := &http.Client{Timeout: 10 * time.Second}
    resp, err := client.Do(req)
    if err != nil { panic(err) }
    defer resp.Body.Close()
    data, _ := io.ReadAll(resp.Body)
    fmt.Println(string(data))
}`,
        Java: `import java.net.URI; import java.net.http.*; import java.time.Duration;
public class BatchCancelOrderExample {
    public static void main(String[] args) throws Exception {
        String json = """
            {"category":"linear","request":[
                {"symbol":"ETHUSDT","orderId":"c6f055d9-7f21-4079-913d-e6523a9cfffa"},
                {"symbol":"BTCUSDT","orderId":"b6f055d9-7f21-4079-913d-e6523a9cfffb"}
            ]}""";
        HttpClient client = HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(10)).build();
        HttpRequest request = HttpRequest.newBuilder()
            .uri(URI.create("https://api.bybit.com/v5/order/cancel-batch"))
            .header("Content-Type", "application/json")
            .POST(HttpRequest.BodyPublishers.ofString(json)).build();
        HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
        System.out.println(response.body());
    }
}`,
        Node: `const axios = require("axios");
async function batchCancelOrder() {
  try {
    const response = await axios.post("https://api.bybit.com/v5/order/cancel-batch",
      { category: "linear", request: [
        { symbol: "ETHUSDT", orderId: "c6f055d9-7f21-4079-913d-e6523a9cfffa" },
        { symbol: "BTCUSDT", orderId: "b6f055d9-7f21-4079-913d-e6523a9cfffb" }
      ]},
      { headers: { "Content-Type": "application/json", "X-BAPI-API-KEY": "xxxxxxxxxxxxxxxxxx", "X-BAPI-SIGN": "XXXXX" } });
    console.log(response.data);
  } catch (error) { console.error("Error:", error.response?.data || error.message); }
}
batchCancelOrder();`,
    };

    return (
        <div className="container-fluid p-0"><div className="api-layout"><div className="row">
            <div className="col-lg-9 col-md-12 api-content" ref={contentRef}>
                <div className="breadcrumb mb-4"><span className="kline-market">Trade</span><span className="mx-2"><IoIosArrowForward className="kline-arrow" /></span><span className="pill">Batch Cancel Order</span></div>
                <h1 className="api-title">Batch Cancel Order</h1>
                <p className="api-desc">This endpoint allows you to cancel more than one open order in a single request. Supports up to 10 orders per request.</p>
                <div className="api-info-box"><div className="api-info-header"><span className="api-info-title">Info</span></div>
                    <ul style={{ margin: 0, paddingLeft: "18px" }}>
                        <li>You must specify either <code>orderId</code> or <code>orderLinkId</code> for each order.</li>
                        <li>Each batch cancel order undergoes its own validation. Check <code>retExtInfo</code> for individual error codes.</li>
                    </ul>
                </div>
                <div className="api-cover">Requires Authentication</div>
                <h3 className="top-req-text" id="http">HTTP Request</h3>
                <div className="http-path"><span className="method post">POST</span><span className="path">/v5/order/cancel-batch</span></div>
                <h3 className="top-req-text" id="request-params">Request Parameters</h3>
                <div className="api-table-box"><table className="table table-striped api-table mb-0">
                    <thead><tr><th>Parameter</th><th>Required</th><th>Type</th><th>Comments</th></tr></thead>
                    <tbody>
                        <tr><td>category</td><td><strong>true</strong></td><td>string</td><td>Product type: <code>linear</code>, <code>inverse</code>, <code>spot</code>, <code>option</code></td></tr>
                        <tr><td>request</td><td><strong>true</strong></td><td>array</td><td>List of cancel order objects (max 10)</td></tr>
                        <tr><td style={{ paddingLeft: "28px" }}>&gt; symbol</td><td><strong>true</strong></td><td>string</td><td>Symbol name</td></tr>
                        <tr><td style={{ paddingLeft: "28px" }}>&gt; orderId</td><td>false</td><td>string</td><td>Order ID. Either <code>orderId</code> or <code>orderLinkId</code> is required</td></tr>
                        <tr><td style={{ paddingLeft: "28px" }}>&gt; orderLinkId</td><td>false</td><td>string</td><td>User customised order ID</td></tr>
                    </tbody>
                </table></div>
                <h3 className="top-req-text" id="response-params">Response Parameters</h3>
                <div className="api-table-box"><table className="table table-striped api-table mb-0">
                    <thead><tr><th>Parameter</th><th>Type</th><th>Comments</th></tr></thead>
                    <tbody>
                        <tr><td>retCode</td><td>number</td><td>Success/error code</td></tr>
                        <tr><td>retMsg</td><td>string</td><td>Success/error message</td></tr>
                        <tr><td>result</td><td>Object</td><td>Result object</td></tr>
                        <tr><td style={{ paddingLeft: "28px" }}>&gt; list</td><td>array</td><td>Array of cancel results</td></tr>
                        <tr><td style={{ paddingLeft: "48px" }}>&gt;&gt; category</td><td>string</td><td>Product type</td></tr>
                        <tr><td style={{ paddingLeft: "48px" }}>&gt;&gt; symbol</td><td>string</td><td>Symbol name</td></tr>
                        <tr><td style={{ paddingLeft: "48px" }}>&gt;&gt; orderId</td><td>string</td><td>Order ID</td></tr>
                        <tr><td style={{ paddingLeft: "48px" }}>&gt;&gt; orderLinkId</td><td>string</td><td>User-defined order ID</td></tr>
                        <tr><td>retExtInfo</td><td>Object</td><td>Individual order error info</td></tr>
                        <tr><td style={{ paddingLeft: "28px" }}>&gt; list</td><td>array</td><td>Error list per order</td></tr>
                        <tr><td style={{ paddingLeft: "48px" }}>&gt;&gt; code</td><td>integer</td><td>Individual error code</td></tr>
                        <tr><td style={{ paddingLeft: "48px" }}>&gt;&gt; msg</td><td>string</td><td>Individual error message</td></tr>
                        <tr><td>time</td><td>number</td><td>Current timestamp (ms)</td></tr>
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
