import { useState, useRef, useEffect } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FiCopy, FiCheck } from "react-icons/fi";

export const CancelAllOrders = () => {
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
                "orderId": "1616024329462743808",
                "orderLinkId": "1616024329462743809"
            },
            {
                "orderId": "1616024287544869632",
                "orderLinkId": "1616024287544869633"
            }
        ],
        "success": "1"
    },
    "retExtInfo": {},
    "time": 1707381118116
}`;

    const codeMap = {
        HTTP: `POST /v5/order/cancel-all HTTP/1.1
Host: api.bybit.com
X-BAPI-SIGN: XXXXX
X-BAPI-API-KEY: xxxxxxxxxxxxxxxxxxxxxxxx
X-BAPI-TIMESTAMP: 1672219779140
X-BAPI-RECV-WINDOW: 5000
Content-Type: application/json

{
    "category": "linear",
    "symbol": null,
    "settleCoin": "USDT"
}`,
        Python: `import requests
url = "https://api.bybit.com/v5/order/cancel-all"
headers = {"Content-Type": "application/json", "X-BAPI-API-KEY": "xxxxxxxxxxxxxxxxxxxxxxxx",
    "X-BAPI-SIGN": "XXXXX", "X-BAPI-TIMESTAMP": "1672219779140", "X-BAPI-RECV-WINDOW": "5000"}
payload = {"category": "linear", "settleCoin": "USDT"}
try:
    resp = requests.post(url, json=payload, headers=headers, timeout=10)
    print(resp.json())
except requests.exceptions.RequestException as e:
    print("Error:", str(e))`,
        Go: `package main
import ("bytes"; "encoding/json"; "fmt"; "io"; "net/http"; "time")
func main() {
    url := "https://api.bybit.com/v5/order/cancel-all"
    body, _ := json.Marshal(map[string]interface{}{"category": "linear", "settleCoin": "USDT"})
    req, _ := http.NewRequest("POST", url, bytes.NewBuffer(body))
    req.Header.Set("Content-Type", "application/json")
    req.Header.Set("X-BAPI-API-KEY", "xxxxxxxxxxxxxxxxxxxxxxxx")
    req.Header.Set("X-BAPI-SIGN", "XXXXX")
    client := &http.Client{Timeout: 10 * time.Second}
    resp, err := client.Do(req)
    if err != nil { panic(err) }
    defer resp.Body.Close()
    data, _ := io.ReadAll(resp.Body)
    fmt.Println(string(data))
}`,
        Java: `import java.net.URI; import java.net.http.*; import java.time.Duration;
public class CancelAllOrdersExample {
    public static void main(String[] args) throws Exception {
        String json = """{"category":"linear","settleCoin":"USDT"}""";
        HttpClient client = HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(10)).build();
        HttpRequest request = HttpRequest.newBuilder()
            .uri(URI.create("https://api.bybit.com/v5/order/cancel-all"))
            .header("Content-Type", "application/json")
            .header("X-BAPI-API-KEY", "xxxxxxxxxxxxxxxxxxxxxxxx")
            .header("X-BAPI-SIGN", "XXXXX")
            .POST(HttpRequest.BodyPublishers.ofString(json)).build();
        HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
        System.out.println(response.body());
    }
}`,
        Node: `const axios = require("axios");
async function cancelAllOrders() {
  try {
    const response = await axios.post("https://api.bybit.com/v5/order/cancel-all",
      { category: "linear", settleCoin: "USDT" },
      { headers: { "Content-Type": "application/json", "X-BAPI-API-KEY": "xxxxxxxxxxxxxxxxxxxxxxxx", "X-BAPI-SIGN": "XXXXX" } });
    console.log(response.data);
  } catch (error) { console.error("Error:", error.response?.data || error.message); }
}
cancelAllOrders();`,
    };

    return (
        <div className="container-fluid p-0"><div className="api-layout"><div className="row">
            <div className="col-lg-9 col-md-12 api-content" ref={contentRef}>
                <div className="breadcrumb mb-4"><span className="kline-market">Trade</span><span className="mx-2"><IoIosArrowForward className="kline-arrow" /></span><span className="pill">Cancel All Orders</span></div>
                <h1 className="api-title">Cancel All Orders</h1>
                <p className="api-desc">Cancel all open orders.</p>
                <div className="api-info-box"><div className="api-info-header"><span className="api-info-title">Info</span></div>
                    <ul style={{ margin: 0, paddingLeft: "18px" }}>
                        <li>Supports cancelling by <code>symbol</code>, <code>baseCoin</code>, or <code>settleCoin</code>. Priority: <code>symbol</code> &gt; <code>baseCoin</code> &gt; <code>settleCoin</code>.</li>
                        <li><code>category=linear</code> or <code>inverse</code>: Must specify one of <code>symbol</code>, <code>baseCoin</code>, or <code>settleCoin</code>.</li>
                        <li><code>category=spot</code>: Can cancel all normal orders without passing any filters.</li>
                        <li>Futures can cancel up to 500 orders at once.</li>
                    </ul>
                </div>
                <div className="api-cover">Requires Authentication</div>
                <h3 className="top-req-text" id="http">HTTP Request</h3>
                <div className="http-path"><span className="method post">POST</span><span className="path">/v5/order/cancel-all</span></div>
                <h3 className="top-req-text" id="request-params">Request Parameters</h3>
                <div className="api-table-box"><table className="table table-striped api-table mb-0">
                    <thead><tr><th>Parameter</th><th>Required</th><th>Type</th><th>Comments</th></tr></thead>
                    <tbody>
                        <tr><td>category</td><td><strong>true</strong></td><td>string</td><td>Product type: <code>linear</code>, <code>inverse</code>, <code>spot</code>, <code>option</code></td></tr>
                        <tr><td>symbol</td><td>false</td><td>string</td><td>Symbol name, e.g. <code>BTCUSDT</code></td></tr>
                        <tr><td>baseCoin</td><td>false</td><td>string</td><td>Base coin, e.g. <code>BTC</code></td></tr>
                        <tr><td>settleCoin</td><td>false</td><td>string</td><td>Settle coin, e.g. <code>USDT</code>. Not supported for spot</td></tr>
                        <tr><td>orderFilter</td><td>false</td><td>string</td><td><code>Order</code>, <code>StopOrder</code>, <code>tpslOrder</code></td></tr>
                        <tr><td>stopOrderType</td><td>false</td><td>string</td><td><code>Stop</code>. Valid for linear/inverse when <code>orderFilter</code> is <code>StopOrder</code></td></tr>
                    </tbody>
                </table></div>
                <h3 className="top-req-text" id="response-params">Response Parameters</h3>
                <div className="api-table-box"><table className="table table-striped api-table mb-0">
                    <thead><tr><th>Parameter</th><th>Type</th><th>Comments</th></tr></thead>
                    <tbody>
                        <tr><td>retCode</td><td>number</td><td>Success/error code</td></tr>
                        <tr><td>retMsg</td><td>string</td><td>Success/error message</td></tr>
                        <tr><td>result</td><td>Object</td><td>Result object</td></tr>
                        <tr><td style={{ paddingLeft: "28px" }}>&gt; list</td><td>array</td><td>Array of cancelled orders</td></tr>
                        <tr><td style={{ paddingLeft: "48px" }}>&gt;&gt; orderId</td><td>string</td><td>Order ID</td></tr>
                        <tr><td style={{ paddingLeft: "48px" }}>&gt;&gt; orderLinkId</td><td>string</td><td>User customised order ID</td></tr>
                        <tr><td style={{ paddingLeft: "28px" }}>&gt; success</td><td>string</td><td><code>"1"</code> for success, <code>"0"</code> for failure</td></tr>
                        <tr><td>retExtInfo</td><td>Object</td><td>Extra information</td></tr>
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
