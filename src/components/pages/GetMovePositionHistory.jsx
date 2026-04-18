import { useState, useRef, useEffect } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FiCopy, FiCheck } from "react-icons/fi";

export const GetMovePositionHistory = () => {
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
        "nextPageCursor": "",
        "list": [
            {
                "blockTradeId": "1234567890",
                "category": "linear",
                "orderId": "abc123",
                "userId": 100001,
                "symbol": "BTCUSDT",
                "side": "Buy",
                "price": "28000",
                "qty": "0.1",
                "execFee": "0.01",
                "status": "Filled",
                "execId": "exec123",
                "resultCode": 0,
                "resultMessage": "",
                "createdAt": 1697684980172,
                "updatedAt": 1697684980172
            }
        ]
    },
    "retExtInfo": {},
    "time": 1697684980172
}`;

  const codeMap = {
    HTTP: `GET /v5/position/move-history?category=linear&limit=1 HTTP/1.1
Host: api.bitzup.com
X-BAPI-SIGN: XXXXX
X-BAPI-API-KEY: xxxxxxxxxxxxxxxxxx
X-BAPI-TIMESTAMP: 1697684980000
X-BAPI-RECV-WINDOW: 5000`,
    Python: `import requests
url = "https://api.bitzup.com/v5/position/move-history"
headers = {"X-BAPI-API-KEY": "xxxxxxxxxxxxxxxxxx", "X-BAPI-SIGN": "XXXXX",
    "X-BAPI-TIMESTAMP": "1697684980000", "X-BAPI-RECV-WINDOW": "5000"}
params = {"category": "linear", "limit": 1}
try:
    resp = requests.get(url, params=params, headers=headers, timeout=10)
    print(resp.json())
except requests.exceptions.RequestException as e:
    print("Error:", str(e))`,
    Go: `package main
import ("fmt"; "io"; "net/http"; "time")
func main() {
    url := "https://api.bitzup.com/v5/position/move-history?category=linear&limit=1"
    req, _ := http.NewRequest("GET", url, nil)
    req.Header.Set("X-BAPI-API-KEY", "xxxxxxxxxxxxxxxxxx")
    client := &http.Client{Timeout: 10 * time.Second}
    resp, err := client.Do(req)
    if err != nil { panic(err) }
    defer resp.Body.Close()
    data, _ := io.ReadAll(resp.Body)
    fmt.Println(string(data))
}`,
    Java: `import java.net.URI; import java.net.http.*; import java.time.Duration;
public class GetMovePositionHistoryExample {
    public static void main(String[] args) throws Exception {
        HttpClient client = HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(10)).build();
        HttpRequest request = HttpRequest.newBuilder()
            .uri(URI.create("https://api.bitzup.com/v5/position/move-history?category=linear&limit=1"))
            .header("X-BAPI-API-KEY", "xxxxxxxxxxxxxxxxxx")
            .GET().build();
        HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
        System.out.println(response.body());
    }
}`,
    Node: `const axios = require("axios");
async function getMovePositionHistory() {
  try {
    const response = await axios.get("https://api.bitzup.com/v5/position/move-history",
      { params: { category: "linear", limit: 1 },
        headers: { "X-BAPI-API-KEY": "xxxxxxxxxxxxxxxxxx", "X-BAPI-SIGN": "XXXXX" } });
    console.log(response.data);
  } catch (error) { console.error("Error:", error.response?.data || error.message); }
}
getMovePositionHistory();`,
  };

  return (
    <div className="container-fluid p-0"><div className="api-layout"><div className="row">
      <div className="col-lg-9 col-md-12 api-content" ref={contentRef}>
        <div className="breadcrumb mb-4"><span className="kline-market">Position</span><span className="mx-2"><IoIosArrowForward className="kline-arrow" /></span><span className="pill">Get Move Position History</span></div>
        <h1 className="api-title">Get Move Position History</h1>
        <p className="api-desc">You can query moved position data by master UID api key.</p>
        <div className="api-cover">Requires Authentication</div>
        <h3 className="top-req-text" id="http">HTTP Request</h3>
        <div className="http-path"><span className="method get">GET</span><span className="path">/v5/position/move-history</span></div>
        <h3 className="top-req-text" id="request-params">Request Parameters</h3>
        <div className="api-table-box"><table className="table table-striped api-table mb-0">
          <thead><tr><th>Parameter</th><th>Required</th><th>Type</th><th>Comments</th></tr></thead>
          <tbody>
            <tr><td>category</td><td>false</td><td>string</td><td>Product type: <code>linear</code>, <code>spot</code>, <code>option</code>, <code>inverse</code></td></tr>
            <tr><td>symbol</td><td>false</td><td>string</td><td>Symbol name</td></tr>
            <tr><td>startTime</td><td>false</td><td>integer</td><td>Start timestamp (ms)</td></tr>
            <tr><td>endTime</td><td>false</td><td>integer</td><td>End timestamp (ms)</td></tr>
            <tr><td>status</td><td>false</td><td>string</td><td><code>Processing</code>, <code>Filled</code>, <code>Rejected</code></td></tr>
            <tr><td>blockTradeId</td><td>false</td><td>string</td><td>Block trade ID</td></tr>
            <tr><td>limit</td><td>false</td><td>integer</td><td>Limit [1, 200]. Default: 20</td></tr>
            <tr><td>cursor</td><td>false</td><td>string</td><td>Cursor for pagination</td></tr>
          </tbody>
        </table></div>
        <h3 className="top-req-text" id="response-params">Response Parameters</h3>
        <div className="api-table-box"><table className="table table-striped api-table mb-0">
          <thead><tr><th>Parameter</th><th>Type</th><th>Comments</th></tr></thead>
          <tbody>
            <tr><td>nextPageCursor</td><td>string</td><td>Cursor for next page</td></tr>
            <tr><td>list</td><td>array</td><td>Move position history list</td></tr>
            <tr><td style={{ paddingLeft: "28px" }}>&gt; blockTradeId</td><td>string</td><td>Block trade ID</td></tr>
            <tr><td style={{ paddingLeft: "28px" }}>&gt; category</td><td>string</td><td>Product type</td></tr>
            <tr><td style={{ paddingLeft: "28px" }}>&gt; orderId</td><td>string</td><td>Order ID</td></tr>
            <tr><td style={{ paddingLeft: "28px" }}>&gt; userId</td><td>integer</td><td>User ID</td></tr>
            <tr><td style={{ paddingLeft: "28px" }}>&gt; symbol</td><td>string</td><td>Symbol name</td></tr>
            <tr><td style={{ paddingLeft: "28px" }}>&gt; side</td><td>string</td><td><code>Buy</code>, <code>Sell</code></td></tr>
            <tr><td style={{ paddingLeft: "28px" }}>&gt; price</td><td>string</td><td>Trade price</td></tr>
            <tr><td style={{ paddingLeft: "28px" }}>&gt; qty</td><td>string</td><td>Trade quantity</td></tr>
            <tr><td style={{ paddingLeft: "28px" }}>&gt; execFee</td><td>string</td><td>Execution fee</td></tr>
            <tr><td style={{ paddingLeft: "28px" }}>&gt; status</td><td>string</td><td><code>Processing</code>, <code>Filled</code>, <code>Rejected</code></td></tr>
            <tr><td style={{ paddingLeft: "28px" }}>&gt; execId</td><td>string</td><td>Execution ID</td></tr>
            <tr><td style={{ paddingLeft: "28px" }}>&gt; resultCode</td><td>integer</td><td>Result code. 0 means success</td></tr>
            <tr><td style={{ paddingLeft: "28px" }}>&gt; resultMessage</td><td>string</td><td>Result message</td></tr>
            <tr><td style={{ paddingLeft: "28px" }}>&gt; createdAt</td><td>number</td><td>Created timestamp (ms)</td></tr>
            <tr><td style={{ paddingLeft: "28px" }}>&gt; updatedAt</td><td>number</td><td>Updated timestamp (ms)</td></tr>
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
