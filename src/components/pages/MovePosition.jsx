import { useState, useRef, useEffect } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FiCopy, FiCheck } from "react-icons/fi";

export const MovePosition = () => {
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
        "blockTradeId": "1234567890",
        "status": "Processing",
        "rejectParty": ""
    },
    "retExtInfo": {},
    "time": 1697684980172
}`;

  const codeMap = {
    HTTP: `POST /v5/position/move-positions HTTP/1.1
Host: api.bitzup.com
X-BAPI-SIGN: XXXXX
X-BAPI-API-KEY: xxxxxxxxxxxxxxxxxx
X-BAPI-TIMESTAMP: 1697684980000
X-BAPI-RECV-WINDOW: 5000
Content-Type: application/json

{
    "fromUid": "100001",
    "toUid": "200001",
    "list": [
        {
            "category": "linear",
            "symbol": "BTCUSDT",
            "price": "28000",
            "side": "Buy",
            "qty": "0.1"
        }
    ]
}`,
    Python: `import requests
url = "https://api.bitzup.com/v5/position/move-positions"
headers = {"Content-Type": "application/json", "X-BAPI-API-KEY": "xxxxxxxxxxxxxxxxxx",
    "X-BAPI-SIGN": "XXXXX", "X-BAPI-TIMESTAMP": "1697684980000", "X-BAPI-RECV-WINDOW": "5000"}
payload = {"fromUid": "100001", "toUid": "200001", "list": [
    {"category": "linear", "symbol": "BTCUSDT", "price": "28000", "side": "Buy", "qty": "0.1"}
]}
try:
    resp = requests.post(url, json=payload, headers=headers, timeout=10)
    print(resp.json())
except requests.exceptions.RequestException as e:
    print("Error:", str(e))`,
    Go: `package main
import ("bytes"; "encoding/json"; "fmt"; "io"; "net/http"; "time")
func main() {
    url := "https://api.bitzup.com/v5/position/move-positions"
    payload := map[string]interface{}{
        "fromUid": "100001", "toUid": "200001",
        "list": []map[string]interface{}{
            {"category": "linear", "symbol": "BTCUSDT", "price": "28000", "side": "Buy", "qty": "0.1"},
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
public class MovePositionExample {
    public static void main(String[] args) throws Exception {
        String json = """{"fromUid":"100001","toUid":"200001","list":[
            {"category":"linear","symbol":"BTCUSDT","price":"28000","side":"Buy","qty":"0.1"}]}""";
        HttpClient client = HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(10)).build();
        HttpRequest request = HttpRequest.newBuilder()
            .uri(URI.create("https://api.bitzup.com/v5/position/move-positions"))
            .header("Content-Type", "application/json")
            .POST(HttpRequest.BodyPublishers.ofString(json)).build();
        HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
        System.out.println(response.body());
    }
}`,
    Node: `const axios = require("axios");
async function movePosition() {
  try {
    const response = await axios.post("https://api.bitzup.com/v5/position/move-positions",
      { fromUid: "100001", toUid: "200001", list: [
        { category: "linear", symbol: "BTCUSDT", price: "28000", side: "Buy", qty: "0.1" }
      ]},
      { headers: { "Content-Type": "application/json", "X-BAPI-API-KEY": "xxxxxxxxxxxxxxxxxx", "X-BAPI-SIGN": "XXXXX" } });
    console.log(response.data);
  } catch (error) { console.error("Error:", error.response?.data || error.message); }
}
movePosition();`,
  };

  return (
    <div className="container-fluid p-0"><div className="api-layout"><div className="row">
      <div className="col-lg-9 col-md-12 api-content" ref={contentRef}>
        <div className="breadcrumb mb-4"><span className="kline-market">Position</span><span className="mx-2"><IoIosArrowForward className="kline-arrow" /></span><span className="pill">Move Position</span></div>
        <h1 className="api-title">Move Position</h1>
        <p className="api-desc">You can move positions between sub-master, master-sub, or sub-sub UIDs when necessary.</p>
        <div className="api-info-box"><div className="api-info-header"><span className="api-info-title">Info</span></div>
          <ul style={{ margin: 0, paddingLeft: "18px" }}>
            <li>UIDs must be UTA (Unified Trading Account).</li>
            <li>Must be in one-way mode for Futures.</li>
            <li>linear &amp; inverse: the price needs to be between [95% of mark price, 105% of mark price].</li>
          </ul>
        </div>
        <div className="api-cover">Requires Authentication</div>
        <h3 className="top-req-text" id="http">HTTP Request</h3>
        <div className="http-path"><span className="method post">POST</span><span className="path">/v5/position/move-positions</span></div>
        <h3 className="top-req-text" id="request-params">Request Parameters</h3>
        <div className="api-table-box"><table className="table table-striped api-table mb-0">
          <thead><tr><th>Parameter</th><th>Required</th><th>Type</th><th>Comments</th></tr></thead>
          <tbody>
            <tr><td>fromUid</td><td><strong>true</strong></td><td>string</td><td>From UID. Must be UTA</td></tr>
            <tr><td>toUid</td><td><strong>true</strong></td><td>string</td><td>To UID. Must be UTA</td></tr>
            <tr><td>list</td><td><strong>true</strong></td><td>array</td><td>List of position move objects</td></tr>
            <tr><td style={{ paddingLeft: "28px" }}>&gt; category</td><td><strong>true</strong></td><td>string</td><td>Product type: <code>linear</code>, <code>spot</code>, <code>option</code>, <code>inverse</code></td></tr>
            <tr><td style={{ paddingLeft: "28px" }}>&gt; symbol</td><td><strong>true</strong></td><td>string</td><td>Symbol name, like <code>BTCUSDT</code></td></tr>
            <tr><td style={{ paddingLeft: "28px" }}>&gt; price</td><td><strong>true</strong></td><td>string</td><td>Trade price</td></tr>
            <tr><td style={{ paddingLeft: "28px" }}>&gt; side</td><td><strong>true</strong></td><td>string</td><td><code>Buy</code>, <code>Sell</code>. Side of fromUid</td></tr>
            <tr><td style={{ paddingLeft: "28px" }}>&gt; qty</td><td><strong>true</strong></td><td>string</td><td>Trade quantity</td></tr>
          </tbody>
        </table></div>
        <h3 className="top-req-text" id="response-params">Response Parameters</h3>
        <div className="api-table-box"><table className="table table-striped api-table mb-0">
          <thead><tr><th>Parameter</th><th>Type</th><th>Comments</th></tr></thead>
          <tbody>
            <tr><td>blockTradeId</td><td>string</td><td>Block trade ID</td></tr>
            <tr><td>status</td><td>string</td><td><code>Processing</code>, <code>Rejected</code></td></tr>
            <tr><td>rejectParty</td><td>string</td><td><code>""</code> means initial validation passed. <code>Taker</code>, <code>Maker</code>, <code>bybit</code> when rejected</td></tr>
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
