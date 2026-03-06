import { useState, useRef, useEffect } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FiCopy, FiCheck } from "react-icons/fi";

export const GetClosedOptionsPositions = () => {
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
        "category": "option",
        "nextPageCursor": "",
        "list": [
            {
                "symbol": "BTC-31MAR23-28000-C",
                "side": "Buy",
                "avgEntryPrice": "100",
                "avgExitPrice": "0",
                "closedPnl": "-100",
                "cumEntryValue": "100",
                "cumExitValue": "0",
                "qty": "0.01",
                "createdTime": "1672737740039",
                "updatedTime": "1680278400000"
            }
        ]
    },
    "retExtInfo": {},
    "time": 1697684980172
}`;

  const codeMap = {
    HTTP: `GET /v5/position/closed-position?category=option&limit=1 HTTP/1.1
Host: api.bybit.com
X-BAPI-SIGN: XXXXX
X-BAPI-API-KEY: xxxxxxxxxxxxxxxxxx
X-BAPI-TIMESTAMP: 1672280218882
X-BAPI-RECV-WINDOW: 5000`,
    Python: `import requests
url = "https://api.bybit.com/v5/position/closed-position"
headers = {"X-BAPI-API-KEY": "xxxxxxxxxxxxxxxxxx", "X-BAPI-SIGN": "XXXXX",
    "X-BAPI-TIMESTAMP": "1672280218882", "X-BAPI-RECV-WINDOW": "5000"}
params = {"category": "option", "limit": 1}
try:
    resp = requests.get(url, params=params, headers=headers, timeout=10)
    print(resp.json())
except requests.exceptions.RequestException as e:
    print("Error:", str(e))`,
    Go: `package main
import ("fmt"; "io"; "net/http"; "time")
func main() {
    url := "https://api.bybit.com/v5/position/closed-position?category=option&limit=1"
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
public class GetClosedOptionsExample {
    public static void main(String[] args) throws Exception {
        HttpClient client = HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(10)).build();
        HttpRequest request = HttpRequest.newBuilder()
            .uri(URI.create("https://api.bybit.com/v5/position/closed-position?category=option&limit=1"))
            .header("X-BAPI-API-KEY", "xxxxxxxxxxxxxxxxxx")
            .GET().build();
        HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
        System.out.println(response.body());
    }
}`,
    Node: `const axios = require("axios");
async function getClosedOptionsPositions() {
  try {
    const response = await axios.get("https://api.bybit.com/v5/position/closed-position",
      { params: { category: "option", limit: 1 },
        headers: { "X-BAPI-API-KEY": "xxxxxxxxxxxxxxxxxx", "X-BAPI-SIGN": "XXXXX" } });
    console.log(response.data);
  } catch (error) { console.error("Error:", error.response?.data || error.message); }
}
getClosedOptionsPositions();`,
  };

  return (
    <div className="container-fluid p-0"><div className="api-layout"><div className="row">
      <div className="col-lg-9 col-md-12 api-content" ref={contentRef}>
        <div className="breadcrumb mb-4"><span className="kline-market">Position</span><span className="mx-2"><IoIosArrowForward className="kline-arrow" /></span><span className="pill">Get Closed Options Positions</span></div>
        <h1 className="api-title">Get Closed Options Positions (6 months)</h1>
        <p className="api-desc">Query closed option positions. Only option category is supported.</p>
        <div className="api-cover">Requires Authentication</div>
        <h3 className="top-req-text" id="http">HTTP Request</h3>
        <div className="http-path"><span className="method get">GET</span><span className="path">/v5/position/closed-position</span></div>
        <h3 className="top-req-text" id="request-params">Request Parameters</h3>
        <div className="api-table-box"><table className="table table-striped api-table mb-0">
          <thead><tr><th>Parameter</th><th>Required</th><th>Type</th><th>Comments</th></tr></thead>
          <tbody>
            <tr><td>category</td><td><strong>true</strong></td><td>string</td><td>Product type: <code>option</code></td></tr>
            <tr><td>symbol</td><td>false</td><td>string</td><td>Symbol name</td></tr>
            <tr><td>startTime</td><td>false</td><td>integer</td><td>Start timestamp (ms)</td></tr>
            <tr><td>endTime</td><td>false</td><td>integer</td><td>End timestamp (ms)</td></tr>
            <tr><td>limit</td><td>false</td><td>integer</td><td>Limit [1, 50]. Default: 20</td></tr>
            <tr><td>cursor</td><td>false</td><td>string</td><td>Cursor for pagination</td></tr>
          </tbody>
        </table></div>
        <h3 className="top-req-text" id="response-params">Response Parameters</h3>
        <div className="api-table-box"><table className="table table-striped api-table mb-0">
          <thead><tr><th>Parameter</th><th>Type</th><th>Comments</th></tr></thead>
          <tbody>
            <tr><td>category</td><td>string</td><td>Product type</td></tr>
            <tr><td>nextPageCursor</td><td>string</td><td>Cursor for next page</td></tr>
            <tr><td>list</td><td>array</td><td>Closed options positions list</td></tr>
            <tr><td style={{ paddingLeft: "28px" }}>&gt; symbol</td><td>string</td><td>Symbol name</td></tr>
            <tr><td style={{ paddingLeft: "28px" }}>&gt; side</td><td>string</td><td><code>Buy</code>, <code>Sell</code></td></tr>
            <tr><td style={{ paddingLeft: "28px" }}>&gt; qty</td><td>string</td><td>Position quantity</td></tr>
            <tr><td style={{ paddingLeft: "28px" }}>&gt; avgEntryPrice</td><td>string</td><td>Average entry price</td></tr>
            <tr><td style={{ paddingLeft: "28px" }}>&gt; avgExitPrice</td><td>string</td><td>Average exit price</td></tr>
            <tr><td style={{ paddingLeft: "28px" }}>&gt; closedPnl</td><td>string</td><td>Closed PnL</td></tr>
            <tr><td style={{ paddingLeft: "28px" }}>&gt; cumEntryValue</td><td>string</td><td>Cumulative entry value</td></tr>
            <tr><td style={{ paddingLeft: "28px" }}>&gt; cumExitValue</td><td>string</td><td>Cumulative exit value</td></tr>
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
