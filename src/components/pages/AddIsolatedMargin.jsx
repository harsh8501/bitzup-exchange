import { useState, useRef, useEffect } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FiCopy, FiCheck } from "react-icons/fi";

export const AddIsolatedMargin = () => {
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
        "category": "inverse",
        "symbol": "ETHUSD",
        "positionIdx": 0,
        "riskId": 11,
        "riskLimitValue": "500",
        "size": "200",
        "positionValue": "0.11033265",
        "avgPrice": "1812.70004844",
        "liqPrice": "1550.80",
        "bustPrice": "1544.20",
        "markPrice": "1812.90",
        "leverage": "12",
        "autoAddMargin": 0,
        "positionStatus": "Normal",
        "positionIM": "0.01926611",
        "positionMM": "0",
        "unrealisedPnl": "0.00001217",
        "cumRealisedPnl": "-0.04618929",
        "stopLoss": "0.00",
        "takeProfit": "0.00",
        "trailingStop": "0.00",
        "createdTime": "1672737740039",
        "updatedTime": "1684234363788"
    },
    "retExtInfo": {},
    "time": 1684234363789
}`;

    const codeMap = {
        HTTP: `POST /v5/position/add-margin HTTP/1.1
Host: api.bitzup.com
X-BAPI-SIGN: XXXXX
X-BAPI-API-KEY: xxxxxxxxxxxxxxxxxx
X-BAPI-TIMESTAMP: 1684234363665
X-BAPI-RECV-WINDOW: 5000
Content-Type: application/json

{
    "category": "inverse",
    "symbol": "ETHUSD",
    "margin": "0.01",
    "positionIdx": 0
}`,
        Python: `import requests
url = "https://api.bitzup.com/v5/position/add-margin"
headers = {"Content-Type": "application/json", "X-BAPI-API-KEY": "xxxxxxxxxxxxxxxxxx",
    "X-BAPI-SIGN": "XXXXX", "X-BAPI-TIMESTAMP": "1684234363665", "X-BAPI-RECV-WINDOW": "5000"}
payload = {"category": "inverse", "symbol": "ETHUSD", "margin": "0.01", "positionIdx": 0}
try:
    resp = requests.post(url, json=payload, headers=headers, timeout=10)
    print(resp.json())
except requests.exceptions.RequestException as e:
    print("Error:", str(e))`,
        Go: `package main
import ("bytes"; "encoding/json"; "fmt"; "io"; "net/http"; "time")
func main() {
    url := "https://api.bitzup.com/v5/position/add-margin"
    body, _ := json.Marshal(map[string]interface{}{
        "category": "inverse", "symbol": "ETHUSD", "margin": "0.01", "positionIdx": 0,
    })
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
public class AddReduceMarginExample {
    public static void main(String[] args) throws Exception {
        String json = """{"category":"inverse","symbol":"ETHUSD","margin":"0.01","positionIdx":0}""";
        HttpClient client = HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(10)).build();
        HttpRequest request = HttpRequest.newBuilder()
            .uri(URI.create("https://api.bitzup.com/v5/position/add-margin"))
            .header("Content-Type", "application/json")
            .POST(HttpRequest.BodyPublishers.ofString(json)).build();
        HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
        System.out.println(response.body());
    }
}`,
        Node: `const axios = require("axios");
async function addOrReduceMargin() {
  try {
    const response = await axios.post("https://api.bitzup.com/v5/position/add-margin",
      { category: "inverse", symbol: "ETHUSD", margin: "0.01", positionIdx: 0 },
      { headers: { "Content-Type": "application/json", "X-BAPI-API-KEY": "xxxxxxxxxxxxxxxxxx", "X-BAPI-SIGN": "XXXXX" } });
    console.log(response.data);
  } catch (error) { console.error("Error:", error.response?.data || error.message); }
}
addOrReduceMargin();`,
    };

    return (
        <div className="container-fluid p-0"><div className="api-layout"><div className="row">
            <div className="col-lg-9 col-md-12 api-content" ref={contentRef}>
                <div className="breadcrumb mb-4"><span className="kline-market">Position</span><span className="mx-2"><IoIosArrowForward className="kline-arrow" /></span><span className="pill">Add Or Reduce Margin</span></div>
                <h1 className="api-title">Add Or Reduce Margin</h1>
                <p className="api-desc">Manually add or reduce margin for isolated margin position.</p>
                <div className="api-cover">Requires Authentication</div>
                <h3 className="top-req-text" id="http">HTTP Request</h3>
                <div className="http-path"><span className="method post">POST</span><span className="path">/v5/position/add-margin</span></div>
                <h3 className="top-req-text" id="request-params">Request Parameters</h3>
                <div className="api-table-box"><table className="table table-striped api-table mb-0">
                    <thead><tr><th>Parameter</th><th>Required</th><th>Type</th><th>Comments</th></tr></thead>
                    <tbody>
                        <tr><td>category</td><td><strong>true</strong></td><td>string</td><td>Product type: <code>linear</code>, <code>inverse</code></td></tr>
                        <tr><td>symbol</td><td><strong>true</strong></td><td>string</td><td>Symbol name, like <code>BTCUSDT</code>, uppercase only</td></tr>
                        <tr><td>margin</td><td><strong>true</strong></td><td>string</td><td>Add or reduce margin. Add: <code>"10"</code>. Reduce: <code>"-10"</code></td></tr>
                        <tr><td>positionIdx</td><td>false</td><td>integer</td><td><code>0</code>: one-way mode, <code>1</code>: hedge Buy side, <code>2</code>: hedge Sell side</td></tr>
                    </tbody>
                </table></div>
                <h3 className="top-req-text" id="response-params">Response Parameters</h3>
                <div className="api-table-box"><table className="table table-striped api-table mb-0">
                    <thead><tr><th>Parameter</th><th>Type</th><th>Comments</th></tr></thead>
                    <tbody>
                        <tr><td>category</td><td>string</td><td>Product type</td></tr>
                        <tr><td>symbol</td><td>string</td><td>Symbol name</td></tr>
                        <tr><td>positionIdx</td><td>integer</td><td>Position index</td></tr>
                        <tr><td>riskId</td><td>integer</td><td>Risk limit ID</td></tr>
                        <tr><td>riskLimitValue</td><td>string</td><td>Risk limit value</td></tr>
                        <tr><td>size</td><td>string</td><td>Position size</td></tr>
                        <tr><td>positionValue</td><td>string</td><td>Position value</td></tr>
                        <tr><td>avgPrice</td><td>string</td><td>Average entry price</td></tr>
                        <tr><td>liqPrice</td><td>string</td><td>Liquidation price</td></tr>
                        <tr><td>bustPrice</td><td>string</td><td>Bankruptcy price</td></tr>
                        <tr><td>markPrice</td><td>string</td><td>Mark price</td></tr>
                        <tr><td>leverage</td><td>string</td><td>Leverage</td></tr>
                        <tr><td>autoAddMargin</td><td>integer</td><td>0: off, 1: on</td></tr>
                        <tr><td>positionStatus</td><td>string</td><td><code>Normal</code>, <code>Liq</code>, <code>Adl</code></td></tr>
                        <tr><td>positionIM</td><td>string</td><td>Position initial margin</td></tr>
                        <tr><td>positionMM</td><td>string</td><td>Position maintenance margin</td></tr>
                        <tr><td>unrealisedPnl</td><td>string</td><td>Unrealised PnL</td></tr>
                        <tr><td>cumRealisedPnl</td><td>string</td><td>Cumulative realised PnL</td></tr>
                        <tr><td>stopLoss</td><td>string</td><td>Stop loss price</td></tr>
                        <tr><td>takeProfit</td><td>string</td><td>Take profit price</td></tr>
                        <tr><td>trailingStop</td><td>string</td><td>Trailing stop</td></tr>
                        <tr><td>createdTime</td><td>string</td><td>Created timestamp (ms)</td></tr>
                        <tr><td>updatedTime</td><td>string</td><td>Updated timestamp (ms)</td></tr>
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
