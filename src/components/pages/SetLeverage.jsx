import { useState, useRef, useEffect } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FiCopy, FiCheck } from "react-icons/fi";

export const SetLeverage = () => {
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
    "result": {},
    "retExtInfo": {},
    "time": 1672281607343
}`;

  const codeMap = {
    HTTP: `POST /v5/position/set-leverage HTTP/1.1
Host: api.bybit.com
X-BAPI-SIGN: XXXXX
X-BAPI-API-KEY: xxxxxxxxxxxxxxxxxx
X-BAPI-TIMESTAMP: 1672281605082
X-BAPI-RECV-WINDOW: 5000
Content-Type: application/json

{
    "category": "linear",
    "symbol": "BTCUSDT",
    "buyLeverage": "6",
    "sellLeverage": "6"
}`,
    Python: `import requests
url = "https://api.bybit.com/v5/position/set-leverage"
headers = {"Content-Type": "application/json", "X-BAPI-API-KEY": "xxxxxxxxxxxxxxxxxx",
    "X-BAPI-SIGN": "XXXXX", "X-BAPI-TIMESTAMP": "1672281605082", "X-BAPI-RECV-WINDOW": "5000"}
payload = {"category": "linear", "symbol": "BTCUSDT", "buyLeverage": "6", "sellLeverage": "6"}
try:
    resp = requests.post(url, json=payload, headers=headers, timeout=10)
    print(resp.json())
except requests.exceptions.RequestException as e:
    print("Error:", str(e))`,
    Go: `package main
import ("bytes"; "encoding/json"; "fmt"; "io"; "net/http"; "time")
func main() {
    url := "https://api.bybit.com/v5/position/set-leverage"
    body, _ := json.Marshal(map[string]interface{}{
        "category": "linear", "symbol": "BTCUSDT",
        "buyLeverage": "6", "sellLeverage": "6",
    })
    req, _ := http.NewRequest("POST", url, bytes.NewBuffer(body))
    req.Header.Set("Content-Type", "application/json")
    req.Header.Set("X-BAPI-API-KEY", "xxxxxxxxxxxxxxxxxx")
    client := &http.Client{Timeout: 10 * time.Second}
    resp, err := client.Do(req)
    if err != nil { panic(err) }
    defer resp.Body.Close()
    data, _ := io.ReadAll(resp.Body)
    fmt.Println(string(data))
}`,
    Java: `import java.net.URI; import java.net.http.*; import java.time.Duration;
public class SetLeverageExample {
    public static void main(String[] args) throws Exception {
        String json = """{"category":"linear","symbol":"BTCUSDT","buyLeverage":"6","sellLeverage":"6"}""";
        HttpClient client = HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(10)).build();
        HttpRequest request = HttpRequest.newBuilder()
            .uri(URI.create("https://api.bybit.com/v5/position/set-leverage"))
            .header("Content-Type", "application/json")
            .POST(HttpRequest.BodyPublishers.ofString(json)).build();
        HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
        System.out.println(response.body());
    }
}`,
    Node: `const axios = require("axios");
async function setLeverage() {
  try {
    const response = await axios.post("https://api.bybit.com/v5/position/set-leverage",
      { category: "linear", symbol: "BTCUSDT", buyLeverage: "6", sellLeverage: "6" },
      { headers: { "Content-Type": "application/json", "X-BAPI-API-KEY": "xxxxxxxxxxxxxxxxxx", "X-BAPI-SIGN": "XXXXX" } });
    console.log(response.data);
  } catch (error) { console.error("Error:", error.response?.data || error.message); }
}
setLeverage();`,
  };

  return (
    <div className="container-fluid p-0"><div className="api-layout"><div className="row">
      <div className="col-lg-9 col-md-12 api-content" ref={contentRef}>
        <div className="breadcrumb mb-4"><span className="kline-market">Position</span><span className="mx-2"><IoIosArrowForward className="kline-arrow" /></span><span className="pill">Set Leverage</span></div>
        <h1 className="api-title">Set Leverage</h1>
        <p className="api-desc">According to the risk limit, leverage affects the maximum position value that can be opened, that is, the greater the leverage, the smaller the maximum position value that can be opened, and vice versa.</p>
        <div className="api-info-box"><div className="api-info-header"><span className="api-info-title">Info</span></div>
          <ul style={{ margin: 0, paddingLeft: "18px" }}>
            <li>One-way mode: <code>buyLeverage</code> must be the same as <code>sellLeverage</code>.</li>
            <li>Hedge mode isolated margin: <code>buyLeverage</code> and <code>sellLeverage</code> can be different.</li>
            <li>Hedge mode cross margin: <code>buyLeverage</code> must be the same as <code>sellLeverage</code>.</li>
          </ul>
        </div>
        <div className="api-cover">Requires Authentication</div>
        <h3 className="top-req-text" id="http">HTTP Request</h3>
        <div className="http-path"><span className="method post">POST</span><span className="path">/v5/position/set-leverage</span></div>
        <h3 className="top-req-text" id="request-params">Request Parameters</h3>
        <div className="api-table-box"><table className="table table-striped api-table mb-0">
          <thead><tr><th>Parameter</th><th>Required</th><th>Type</th><th>Comments</th></tr></thead>
          <tbody>
            <tr><td>category</td><td><strong>true</strong></td><td>string</td><td>Product type: <code>linear</code>, <code>inverse</code></td></tr>
            <tr><td>symbol</td><td><strong>true</strong></td><td>string</td><td>Symbol name, like <code>BTCUSDT</code></td></tr>
            <tr><td>buyLeverage</td><td><strong>true</strong></td><td>string</td><td>Buy side leverage. Must be &gt;= <code>1</code></td></tr>
            <tr><td>sellLeverage</td><td><strong>true</strong></td><td>string</td><td>Sell side leverage. Must be &gt;= <code>1</code></td></tr>
          </tbody>
        </table></div>
        <h3 className="top-req-text" id="response-params">Response Parameters</h3>
        <div className="api-table-box"><table className="table table-striped api-table mb-0">
          <thead><tr><th>Parameter</th><th>Type</th><th>Comments</th></tr></thead>
          <tbody>
            <tr><td colSpan={3} style={{ textAlign: "center", fontStyle: "italic", color: "#888" }}>None</td></tr>
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
