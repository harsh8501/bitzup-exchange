import { useState, useEffect, useRef } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FiCopy, FiCheck } from "react-icons/fi";

export const WithdrawFromSubAcc = () => {
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
  "success": "1",
  "message": "Deposit to account successful.",
  "data": {
    "transferId": "b2c3d4e5-f6a7-8901-bcde-f23456789012",
    "status": "SUCCESS"
  }
}`;
    const codeMap = {
        HTTP: `POST /futures/api/v1/withdraw-from-sub-acc HTTP/1.1
Host: api.bitzup.com
Content-Type: application/json
Authorization: Bearer <your_token>

{
  "coin": "USDT",
  "amount": "50"
}`,
        Python: `import requests
url = "https://api.bitzup.com/futures/api/v1/withdraw-from-sub-acc"
headers = {"Content-Type": "application/json", "Authorization": "Bearer <your_token>"}
payload = {"coin": "USDT", "amount": "50"}
try:
    resp = requests.post(url, json=payload, headers=headers, timeout=10)
    resp.raise_for_status()
    print(resp.json())
except requests.exceptions.RequestException as e:
    print("Error:", str(e))`,
        Go: `package main
import ("bytes"; "encoding/json"; "fmt"; "io"; "net/http"; "time")
func main() {
	url := "https://api.bitzup.com/futures/api/v1/withdraw-from-sub-acc"
	body, _ := json.Marshal(map[string]string{"coin": "USDT", "amount": "50"})
	req, _ := http.NewRequest("POST", url, bytes.NewBuffer(body))
	req.Header.Set("Content-Type", "application/json")
	req.Header.Set("Authorization", "Bearer <your_token>")
	client := &http.Client{Timeout: 10 * time.Second}
	resp, err := client.Do(req)
	if err != nil { panic(err) }
	defer resp.Body.Close()
	data, _ := io.ReadAll(resp.Body)
	fmt.Println(string(data))
}`,
        Java: `import java.net.URI; import java.net.http.*; import java.time.Duration;
public class WithdrawFromSubAccExample {
    public static void main(String[] args) throws Exception {
        String json = """
            {"coin": "USDT", "amount": "50"}
            """;
        HttpClient client = HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(10)).build();
        HttpRequest request = HttpRequest.newBuilder()
            .uri(URI.create("https://api.bitzup.com/futures/api/v1/withdraw-from-sub-acc"))
            .header("Content-Type", "application/json").header("Authorization", "Bearer <your_token>")
            .POST(HttpRequest.BodyPublishers.ofString(json)).build();
        HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
        System.out.println(response.body());
    }
}`,
        Node: `const axios = require("axios");
async function withdrawFromSubAcc() {
  try {
    const response = await axios.post("https://api.bitzup.com/futures/api/v1/withdraw-from-sub-acc",
      { coin: "USDT", amount: "50" },
      { headers: { "Content-Type": "application/json", Authorization: "Bearer <your_token>" } });
    console.log(response.data);
  } catch (error) { console.error("Error:", error.response?.data || error.message); }
}
withdrawFromSubAcc();`,
    };
    return (
        <><div className="container-fluid p-0"><div className="api-layout"><div className="row">
            <div className="col-lg-9 col-md-12 api-content" ref={contentRef}>
                <div className="breadcrumb mb-4"><span className="kline-market">Private</span><span className="mx-2"><IoIosArrowForward className="kline-arrow" /></span><span className="pill">Withdraw from Sub Account</span></div>
                <h1 className="api-title">Withdraw from Sub Account</h1>
                <p className="api-desc">Transfer funds from a sub-account back to the master account. The transfer is executed as a universal transfer on the UNIFIED account type.</p>
                <div className="api-cover">Requires Authentication</div>
                <div className="api-cover">Rate Limit: 15 req/s</div>
                <h3 className="top-req-text" id="http">HTTP Request</h3>
                <div className="http-path"><span className="method post">POST</span><span className="path">/v1/withdraw-from-sub-acc</span></div>
                <h3 className="top-req-text" id="request-params">Request Parameters</h3>
                <div className="api-table-box"><table className="table table-striped api-table mb-0"><thead><tr><th>Parameter</th><th>Required</th><th>Type</th><th>Comments</th></tr></thead><tbody>
                    <tr><td className="text-interval">coin</td><td>true</td><td>string</td><td>Coin name, e.g. <span className="pill">USDT</span></td></tr>
                    <tr><td className="text-interval">amount</td><td>true</td><td>string</td><td>Amount to withdraw</td></tr>
                </tbody></table></div>
                <h3 className="top-req-text" id="response-params">Response Parameters</h3>
                <div className="api-table-box"><table className="table table-striped api-table mb-0"><thead><tr><th>Parameter</th><th>Type</th><th>Comments</th></tr></thead><tbody>
                    <tr><td>transferId</td><td>string</td><td>Unique transfer ID</td></tr>
                    <tr><td>status</td><td>string</td><td>Transfer status, e.g. <span className="pill">SUCCESS</span></td></tr>
                </tbody></table></div>
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
        </div></div></div></>
    );
};
