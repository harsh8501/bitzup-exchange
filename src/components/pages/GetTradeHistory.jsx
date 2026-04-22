import { useState, useRef, useEffect } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FiCopy, FiCheck } from "react-icons/fi";

export const GetTradeHistory = () => {
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
        "category": "linear",
        "list": [
            {
                "symbol": "ETHPERP",
                "orderType": "Market",
                "underlyingPrice": "",
                "orderLinkId": "",
                "side": "Buy",
                "indexPrice": "",
                "orderId": "8c065341-7b52-4ca9-ac2c-37e31ac55c94",
                "stopOrderType": "UNKNOWN",
                "leavesQty": "0",
                "execTime": "1672282722429",
                "feeCurrency": "",
                "isMaker": false,
                "execFee": "0.071409",
                "feeRate": "0.0006",
                "execId": "e0cbe81d-0f18-5866-9415-cf319b5dab3b",
                "tradeIv": "",
                "blockTradeId": "",
                "markPrice": "1183.54",
                "execPrice": "1190.15",
                "markIv": "",
                "orderQty": "0.1",
                "orderPrice": "1236.9",
                "execValue": "119.015",
                "execType": "Trade",
                "execQty": "0.1",
                "closedSize": "",
                "seq": 4688002127
            }
        ],
        "nextPageCursor": "page_token"
    },
    "retExtInfo": {},
    "time": 1672283754510
}`;

  const codeMap = {
    HTTP: `GET /v5/execution/list?category=linear&limit=1 HTTP/1.1
Host: api.bitzup.com
X-BAPI-SIGN: XXXXX
X-BAPI-API-KEY: xxxxxxxxxxxxxxxxxx
X-BAPI-TIMESTAMP: 1672283754132
X-BAPI-RECV-WINDOW: 5000`,
    Python: `import requests
url = "https://api.bitzup.com/v5/execution/list"
headers = {"X-BAPI-API-KEY": "xxxxxxxxxxxxxxxxxx", "X-BAPI-SIGN": "XXXXX",
    "X-BAPI-TIMESTAMP": "1672283754132", "X-BAPI-RECV-WINDOW": "5000"}
params = {"category": "linear", "limit": 1}
try:
    resp = requests.get(url, params=params, headers=headers, timeout=10)
    print(resp.json())
except requests.exceptions.RequestException as e:
    print("Error:", str(e))`,
    Go: `package main
import ("fmt"; "io"; "net/http"; "time")
func main() {
    url := "https://api.bitzup.com/v5/execution/list?category=linear&limit=1"
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
public class GetTradeHistoryExample {
    public static void main(String[] args) throws Exception {
        HttpClient client = HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(10)).build();
        HttpRequest request = HttpRequest.newBuilder()
            .uri(URI.create("https://api.bitzup.com/v5/execution/list?category=linear&limit=1"))
            .header("X-BAPI-API-KEY", "xxxxxxxxxxxxxxxxxx")
            .header("X-BAPI-SIGN", "XXXXX")
            .GET().build();
        HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
        System.out.println(response.body());
    }
}`,
    Node: `const axios = require("axios");
async function getTradeHistory() {
  try {
    const response = await axios.get("https://api.bitzup.com/v5/execution/list",
      { params: { category: "linear", limit: 1 },
        headers: { "X-BAPI-API-KEY": "xxxxxxxxxxxxxxxxxx", "X-BAPI-SIGN": "XXXXX" } });
    console.log(response.data);
  } catch (error) { console.error("Error:", error.response?.data || error.message); }
}
getTradeHistory();`,
  };

  return (
    <div className="container-fluid p-0"><div className="api-layout"><div className="row">
      <div className="col-lg-9 col-md-12 api-content" ref={contentRef}>
        <div className="breadcrumb mb-4"><span className="kline-market">Trade</span><span className="mx-2"><IoIosArrowForward className="kline-arrow" /></span><span className="pill">Get Trade History (2 years)</span></div>
        <h1 className="api-title">Get Trade History (2 years)</h1>
        <p className="api-desc">Query users' execution records, sorted by execTime in descending order.</p>
        <div className="api-info-box"><div className="api-info-header"><span className="api-info-title">Tip</span></div>
          <p>Response items may have sorting issues when <span className="pill">execTime</span> is the same. It is recommended to sort according to <span className="pill">execId</span>+<span className="pill">orderId</span>+<span className="pill">leavesQty</span>.</p>
        </div>
        <div className="api-cover">Requires Authentication</div>
        <h3 className="top-req-text" id="http">HTTP Request</h3>
        <div className="http-path"><span className="method get">GET</span><span className="path">/v5/execution/list</span></div>
        <h3 className="top-req-text" id="request-params">Request Parameters</h3>
        <div className="api-table-box"><table className="table table-striped api-table mb-0">
          <thead><tr><th>Parameter</th><th>Required</th><th>Type</th><th>Comments</th></tr></thead>
          <tbody>
            <tr><td>category</td><td><strong>true</strong></td><td>string</td><td>Product type. <span className="pill">linear</span></td></tr>
            <tr><td>symbol</td><td>false</td><td>string</td><td>Symbol name, like <span className="pill">BTCUSDT</span>, uppercase only</td></tr>
            <tr><td>orderId</td><td>false</td><td>string</td><td>Order ID</td></tr>
            <tr><td>orderLinkId</td><td>false</td><td>string</td><td>User customised order ID</td></tr>
            <tr><td>baseCoin</td><td>false</td><td>string</td><td>Base coin, uppercase only</td></tr>
            <tr><td>settleCoin</td><td>false</td><td>string</td><td>Settle coin, uppercase only</td></tr>
            <tr><td>startTime</td><td>false</td><td>integer</td><td>Start timestamp (ms)</td></tr>
            <tr><td>endTime</td><td>false</td><td>integer</td><td>End timestamp (ms)</td></tr>
            <tr><td>execType</td><td>false</td><td>string</td><td>Execution type</td></tr>
            <tr><td>limit</td><td>false</td><td>integer</td><td>Limit [1, 100]. Default: 50</td></tr>
            <tr><td>cursor</td><td>false</td><td>string</td><td>Cursor for next page</td></tr>
          </tbody>
        </table></div>
        <h3 className="top-req-text" id="response-params">Response Parameters</h3>
        <div className="api-table-box"><table className="table table-striped api-table mb-0">
          <thead><tr><th>Parameter</th><th>Type</th><th>Comments</th></tr></thead>
          <tbody>
            <tr><td>category</td><td>string</td><td>Product type</td></tr>
            <tr><td>list</td><td>array</td><td>Execution list</td></tr>
            <tr><td style={{ paddingLeft: "28px" }}>&gt; symbol</td><td>string</td><td>Symbol name</td></tr>
            <tr><td style={{ paddingLeft: "28px" }}>&gt; orderId</td><td>string</td><td>Order ID</td></tr>
            <tr><td style={{ paddingLeft: "28px" }}>&gt; orderLinkId</td><td>string</td><td>User customised order ID</td></tr>
            <tr><td style={{ paddingLeft: "28px" }}>&gt; side</td><td>string</td><td><span className="pill">Buy</span>, <span className="pill">Sell</span></td></tr>
            <tr><td style={{ paddingLeft: "28px" }}>&gt; orderPrice</td><td>string</td><td>Order price</td></tr>
            <tr><td style={{ paddingLeft: "28px" }}>&gt; orderQty</td><td>string</td><td>Order quantity</td></tr>
            <tr><td style={{ paddingLeft: "28px" }}>&gt; leavesQty</td><td>string</td><td>Remaining qty not executed</td></tr>
            <tr><td style={{ paddingLeft: "28px" }}>&gt; createType</td><td>string</td><td>Order create type</td></tr>
            <tr><td style={{ paddingLeft: "28px" }}>&gt; orderType</td><td>string</td><td><span className="pill">Market</span>, <span className="pill">Limit</span></td></tr>
            <tr><td style={{ paddingLeft: "28px" }}>&gt; stopOrderType</td><td>string</td><td>Stop order type</td></tr>
            <tr><td style={{ paddingLeft: "28px" }}>&gt; execFee</td><td>string</td><td>Executed trading fee</td></tr>
            <tr><td style={{ paddingLeft: "28px" }}>&gt; execId</td><td>string</td><td>Execution ID</td></tr>
            <tr><td style={{ paddingLeft: "28px" }}>&gt; execPrice</td><td>string</td><td>Execution price</td></tr>
            <tr><td style={{ paddingLeft: "28px" }}>&gt; execQty</td><td>string</td><td>Execution quantity</td></tr>
            <tr><td style={{ paddingLeft: "28px" }}>&gt; execType</td><td>string</td><td>Executed type</td></tr>
            <tr><td style={{ paddingLeft: "28px" }}>&gt; execValue</td><td>string</td><td>Executed order value</td></tr>
            <tr><td style={{ paddingLeft: "28px" }}>&gt; execTime</td><td>string</td><td>Executed timestamp (ms)</td></tr>
            <tr><td style={{ paddingLeft: "28px" }}>&gt; feeCurrency</td><td>string</td><td>Trading fee currency</td></tr>
            <tr><td style={{ paddingLeft: "28px" }}>&gt; isMaker</td><td>boolean</td><td>Is maker order</td></tr>
            <tr><td style={{ paddingLeft: "28px" }}>&gt; feeRate</td><td>string</td><td>Trading fee rate</td></tr>
            <tr><td style={{ paddingLeft: "28px" }}>&gt; markPrice</td><td>string</td><td>Mark price when executing</td></tr>
            <tr><td style={{ paddingLeft: "28px" }}>&gt; blockTradeId</td><td>string</td><td>Paradigm block trade ID</td></tr>
            <tr><td style={{ paddingLeft: "28px" }}>&gt; closedSize</td><td>string</td><td>Closed position size</td></tr>
            <tr><td style={{ paddingLeft: "28px" }}>&gt; seq</td><td>long</td><td>Cross sequence</td></tr>
            <tr><td>nextPageCursor</td><td>string</td><td>Cursor for next page</td></tr>
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
