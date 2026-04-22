import { useState, useRef, useEffect } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FiCopy, FiCheck } from "react-icons/fi";

export const GetPositions = () => {
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
                "positionIdx": 0,
                "riskId": 1,
                "riskLimitValue": "150",
                "symbol": "BTCUSD",
                "side": "Sell",
                "size": "300",
                "avgPrice": "27464.50441675",
                "positionValue": "0.01092319",
                "tradeMode": 0,
                "positionStatus": "Normal",
                "autoAddMargin": 1,
                "adlRankIndicator": 2,
                "leverage": "10",
                "positionBalance": "0.00139186",
                "markPrice": "28224.50",
                "liqPrice": "",
                "bustPrice": "999999.00",
                "positionMM": "0.0000015",
                "positionIM": "0.00010923",
                "tpslMode": "Full",
                "takeProfit": "0.00",
                "stopLoss": "0.00",
                "trailingStop": "0.00",
                "unrealisedPnl": "-0.00029413",
                "curRealisedPnl": "0.00013123",
                "cumRealisedPnl": "-0.00096902",
                "seq": 5723621632,
                "isReduceOnly": false,
                "mmrSysUpdateTime": "",
                "leverageSysUpdatedTime": "",
                "createdTime": "1676538056258",
                "updatedTime": "1697673600012"
            }
        ],
        "nextPageCursor": "",
        "category": "linear"
    },
    "retExtInfo": {},
    "time": 1697684980172
}`;

  const codeMap = {
    HTTP: `GET /v5/position/list?category=linear&symbol=BTCUSD HTTP/1.1
Host: api.bitzup.com
X-BAPI-SIGN: XXXXX
X-BAPI-API-KEY: xxxxxxxxxxxxxxxxxx
X-BAPI-TIMESTAMP: 1672280218882
X-BAPI-RECV-WINDOW: 5000`,
    Python: `import requests
url = "https://api.bitzup.com/v5/position/list"
headers = {"X-BAPI-API-KEY": "xxxxxxxxxxxxxxxxxx", "X-BAPI-SIGN": "XXXXX",
    "X-BAPI-TIMESTAMP": "1672280218882", "X-BAPI-RECV-WINDOW": "5000"}
params = {"category": "linear", "symbol": "BTCUSD"}
try:
    resp = requests.get(url, params=params, headers=headers, timeout=10)
    print(resp.json())
except requests.exceptions.RequestException as e:
    print("Error:", str(e))`,
    Go: `package main
import ("fmt"; "io"; "net/http"; "time")
func main() {
    url := "https://api.bitzup.com/v5/position/list?category=linear&symbol=BTCUSD"
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
public class GetPositionInfoExample {
    public static void main(String[] args) throws Exception {
        HttpClient client = HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(10)).build();
        HttpRequest request = HttpRequest.newBuilder()
            .uri(URI.create("https://api.bitzup.com/v5/position/list?category=linear&symbol=BTCUSD"))
            .header("X-BAPI-API-KEY", "xxxxxxxxxxxxxxxxxx")
            .header("X-BAPI-SIGN", "XXXXX")
            .GET().build();
        HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
        System.out.println(response.body());
    }
}`,
    Node: `const axios = require("axios");
async function getPositionInfo() {
  try {
    const response = await axios.get("https://api.bitzup.com/v5/position/list",
      { params: { category: "linear", symbol: "BTCUSD" },
        headers: { "X-BAPI-API-KEY": "xxxxxxxxxxxxxxxxxx", "X-BAPI-SIGN": "XXXXX" } });
    console.log(response.data);
  } catch (error) { console.error("Error:", error.response?.data || error.message); }
}
getPositionInfo();`,
  };

  return (
    <div className="container-fluid p-0"><div className="api-layout"><div className="row">
      <div className="col-lg-9 col-md-12 api-content" ref={contentRef}>
        <div className="breadcrumb mb-4"><span className="kline-market">Position</span><span className="mx-2"><IoIosArrowForward className="kline-arrow" /></span><span className="pill">Get Position Info</span></div>
        <h1 className="api-title">Get Position Info</h1>
        <p className="api-desc">Query real-time position data, such as position size, cumulative realized PNL, etc.</p>
        <div className="api-info-box"><div className="api-info-header"><span className="api-info-title">Info</span></div>
          <ul style={{ margin: 0, paddingLeft: "18px" }}>
            <li>If <span className="pill">symbol</span> is passed, it returns data regardless of having position or not.</li>
            <li>If <span className="pill">symbol</span>=null and <span className="pill">settleCoin</span> specified, it returns position size greater than zero.</li>
            <li><span className="pill">linear</span>: either <span className="pill">symbol</span> or <span className="pill">settleCoin</span> is required. <span className="pill">symbol</span> has a higher priority.</li>
          </ul>
        </div>
        <div className="api-cover">Requires Authentication</div>
        <h3 className="top-req-text" id="http">HTTP Request</h3>
        <div className="http-path"><span className="method get">GET</span><span className="path">/v5/position/list</span></div>
        <h3 className="top-req-text" id="request-params">Request Parameters</h3>
        <div className="api-table-box"><table className="table table-striped api-table mb-0">
          <thead><tr><th>Parameter</th><th>Required</th><th>Type</th><th>Comments</th></tr></thead>
          <tbody>
            <tr><td>category</td><td><strong>true</strong></td><td>string</td><td>Product type. <span className="pill">linear</span></td></tr>
            <tr><td>symbol</td><td>false</td><td>string</td><td>Symbol name, like <span className="pill">BTCUSDT</span>, uppercase only</td></tr>
            <tr><td>baseCoin</td><td>false</td><td>string</td><td>Base coin. <span className="pill">option</span> only</td></tr>
            <tr><td>settleCoin</td><td>false</td><td>string</td><td>Settle coin</td></tr>
            <tr><td>limit</td><td>false</td><td>integer</td><td>Limit [1, 200]. Default: 20</td></tr>
            <tr><td>cursor</td><td>false</td><td>string</td><td>Cursor for pagination</td></tr>
          </tbody>
        </table></div>
        <h3 className="top-req-text" id="response-params">Response Parameters</h3>
        <div className="api-table-box"><table className="table table-striped api-table mb-0">
          <thead><tr><th>Parameter</th><th>Type</th><th>Comments</th></tr></thead>
          <tbody>
            <tr><td>category</td><td>string</td><td>Product type</td></tr>
            <tr><td>nextPageCursor</td><td>string</td><td>Cursor for next page</td></tr>
            <tr><td>list</td><td>array</td><td>Position list</td></tr>
            <tr><td style={{ paddingLeft: "28px" }}>&gt; positionIdx</td><td>integer</td><td>Position index: 0 (one-way), 1 (buy hedge), 2 (sell hedge)</td></tr>
            <tr><td style={{ paddingLeft: "28px" }}>&gt; riskId</td><td>integer</td><td>Risk limit ID</td></tr>
            <tr><td style={{ paddingLeft: "28px" }}>&gt; riskLimitValue</td><td>string</td><td>Risk limit value</td></tr>
            <tr><td style={{ paddingLeft: "28px" }}>&gt; symbol</td><td>string</td><td>Symbol name</td></tr>
            <tr><td style={{ paddingLeft: "28px" }}>&gt; side</td><td>string</td><td><span className="pill">Buy</span>, <span className="pill">Sell</span></td></tr>
            <tr><td style={{ paddingLeft: "28px" }}>&gt; size</td><td>string</td><td>Position size</td></tr>
            <tr><td style={{ paddingLeft: "28px" }}>&gt; avgPrice</td><td>string</td><td>Average entry price</td></tr>
            <tr><td style={{ paddingLeft: "28px" }}>&gt; positionValue</td><td>string</td><td>Position value</td></tr>
            <tr><td style={{ paddingLeft: "28px" }}>&gt; tradeMode</td><td>integer</td><td>0: cross margin, 1: isolated margin</td></tr>
            <tr><td style={{ paddingLeft: "28px" }}>&gt; positionStatus</td><td>string</td><td><span className="pill">Normal</span>, <span className="pill">Liq</span>, <span className="pill">Adl</span></td></tr>
            <tr><td style={{ paddingLeft: "28px" }}>&gt; autoAddMargin</td><td>integer</td><td>0: off, 1: on</td></tr>
            <tr><td style={{ paddingLeft: "28px" }}>&gt; adlRankIndicator</td><td>integer</td><td>ADL rank indicator</td></tr>
            <tr><td style={{ paddingLeft: "28px" }}>&gt; leverage</td><td>string</td><td>Position leverage</td></tr>
            <tr><td style={{ paddingLeft: "28px" }}>&gt; positionBalance</td><td>string</td><td>Position margin</td></tr>
            <tr><td style={{ paddingLeft: "28px" }}>&gt; markPrice</td><td>string</td><td>Mark price</td></tr>
            <tr><td style={{ paddingLeft: "28px" }}>&gt; liqPrice</td><td>string</td><td>Liquidation price</td></tr>
            <tr><td style={{ paddingLeft: "28px" }}>&gt; bustPrice</td><td>string</td><td>Bankruptcy price</td></tr>
            <tr><td style={{ paddingLeft: "28px" }}>&gt; positionMM</td><td>string</td><td>Position maintenance margin</td></tr>
            <tr><td style={{ paddingLeft: "28px" }}>&gt; positionIM</td><td>string</td><td>Position initial margin</td></tr>
            <tr><td style={{ paddingLeft: "28px" }}>&gt; tpslMode</td><td>string</td><td><span className="pill">Full</span>, <span className="pill">Partial</span></td></tr>
            <tr><td style={{ paddingLeft: "28px" }}>&gt; takeProfit</td><td>string</td><td>Take profit price</td></tr>
            <tr><td style={{ paddingLeft: "28px" }}>&gt; stopLoss</td><td>string</td><td>Stop loss price</td></tr>
            <tr><td style={{ paddingLeft: "28px" }}>&gt; trailingStop</td><td>string</td><td>Trailing stop</td></tr>
            <tr><td style={{ paddingLeft: "28px" }}>&gt; unrealisedPnl</td><td>string</td><td>Unrealised PnL</td></tr>
            <tr><td style={{ paddingLeft: "28px" }}>&gt; curRealisedPnl</td><td>string</td><td>Current realised PnL</td></tr>
            <tr><td style={{ paddingLeft: "28px" }}>&gt; cumRealisedPnl</td><td>string</td><td>Cumulative realised PnL</td></tr>
            <tr><td style={{ paddingLeft: "28px" }}>&gt; seq</td><td>long</td><td>Cross sequence</td></tr>
            <tr><td style={{ paddingLeft: "28px" }}>&gt; isReduceOnly</td><td>boolean</td><td>true: only reduce position allowed</td></tr>
            <tr><td style={{ paddingLeft: "28px" }}>&gt; mmrSysUpdateTime</td><td>string</td><td>MMR system update timestamp (ms)</td></tr>
            <tr><td style={{ paddingLeft: "28px" }}>&gt; leverageSysUpdatedTime</td><td>string</td><td>Leverage system update timestamp (ms)</td></tr>
            <tr><td style={{ paddingLeft: "28px" }}>&gt; createdTime</td><td>string</td><td>Created timestamp (ms)</td></tr>
            <tr><td style={{ paddingLeft: "28px" }}>&gt; updatedTime</td><td>string</td><td>Updated timestamp (ms)</td></tr>
          </tbody>
        </table></div>
        <h3 className="top-req-text" id="request-example">Request Example</h3>
        <div className="lang-tabs">{["HTTP", "Python", "Go", "Java", "Node"].map((t) => (<button key={t} className={lang === t ? "active" : ""} onClick={() => setLang(t)}>{t}</button>))}</div>
        <div className="api-code-box position-relative" style={{ marginBottom: "40px" }}><button className="copy-btn" onClick={handleCopy}>{copied ? <FiCheck /> : <FiCopy />}</button><pre style={{ margin: 0 }}><code >{codeMap[lang]}</code></pre></div>
        <h3 className="top-req-text" id="response-example">Response Example</h3>
        <div className="api-code-box position-relative" style={{ marginBottom: "40px" }}><button className="copy-btn" onClick={handleCopyRes}>{copiedRes ? <FiCheck /> : <FiCopy />}</button><pre style={{ margin: 0 }}><code >{responseCode}</code></pre></div>
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
