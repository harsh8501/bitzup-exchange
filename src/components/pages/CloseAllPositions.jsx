import { useState, useEffect, useRef } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FiCopy, FiCheck } from "react-icons/fi";

export const CloseAllPositions = () => {
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
  "message": "All positions closed successfully."
}`;
    const codeMap = {
        HTTP: `GET /futures/api/v1/close-all-position HTTP/1.1
Host: api.bitzup.com
Authorization: Bearer <your_token>`,
        Python: `import requests
url = "https://api.bitzup.com/futures/api/v1/close-all-position"
headers = {"Authorization": "Bearer <your_token>"}
try:
    resp = requests.get(url, headers=headers, timeout=10)
    resp.raise_for_status()
    print(resp.json())
except requests.exceptions.RequestException as e:
    print("Error:", str(e))`,
        Go: `package main
import ("fmt"; "io"; "net/http"; "time")
func main() {
	url := "https://api.bitzup.com/futures/api/v1/close-all-position"
	req, _ := http.NewRequest("GET", url, nil)
	req.Header.Set("Authorization", "Bearer <your_token>")
	client := &http.Client{Timeout: 10 * time.Second}
	resp, err := client.Do(req)
	if err != nil { panic(err) }
	defer resp.Body.Close()
	data, _ := io.ReadAll(resp.Body)
	fmt.Println(string(data))
}`,
        Java: `import java.net.URI; import java.net.http.*; import java.time.Duration;
public class CloseAllPositionsExample {
    public static void main(String[] args) throws Exception {
        HttpClient client = HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(10)).build();
        HttpRequest request = HttpRequest.newBuilder()
            .uri(URI.create("https://api.bitzup.com/futures/api/v1/close-all-position"))
            .header("Authorization", "Bearer <your_token>")
            .GET().build();
        HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
        System.out.println(response.body());
    }
}`,
        Node: `const axios = require("axios");
async function closeAllPositions() {
  try {
    const response = await axios.get("https://api.bitzup.com/futures/api/v1/close-all-position",
      { headers: { Authorization: "Bearer <your_token>" } });
    console.log(response.data);
  } catch (error) { console.error("Error:", error.response?.data || error.message); }
}
closeAllPositions();`,
    };
    return (
        <><div className="container-fluid p-0"><div className="api-layout"><div className="row">
            <div className="col-lg-9 col-md-12 api-content" ref={contentRef}>
                <div className="breadcrumb mb-4"><span className="kline-market">Private</span><span className="mx-2"><IoIosArrowForward className="kline-arrow" /></span><span className="pill">Close All Positions</span></div>
                <h1 className="api-title">Close All Positions</h1>
                <p className="api-desc">Close all open positions at market price. This endpoint will close every active position across all symbols associated with the authenticated account.</p>
                <div className="api-cover">Requires Authentication</div>
                <div className="api-cover">Rate Limit: 15 req/s</div>
                <h3 className="top-req-text" id="http">HTTP Request</h3>
                <div className="http-path"><span className="method get">GET</span><span className="path">/v1/close-all-position</span></div>
                <h3 className="top-req-text" id="request-params">Request Parameters</h3>
                <p className="api-desc" style={{ fontSize: "14px" }}>
                    No body parameters required. The user is identified via the JWT Bearer token.
                </p>
                <h3 className="top-req-text" id="response-params">Response Parameters</h3>
                <div className="api-table-box"><table className="table table-striped api-table mb-0"><thead><tr><th>Parameter</th><th>Type</th><th>Comments</th></tr></thead><tbody>
                    <tr><td>success</td><td>string</td><td><span className="pill">"1"</span> for success</td></tr>
                    <tr><td>message</td><td>string</td><td>Status message</td></tr>
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
