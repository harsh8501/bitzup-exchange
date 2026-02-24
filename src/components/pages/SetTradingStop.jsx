import { useState, useEffect, useRef } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FiCopy, FiCheck } from "react-icons/fi";

export const SetTradingStop = () => {
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

    useEffect(() => {
        if (!contentRef.current) return;
        const observer = new IntersectionObserver((entries) => { entries.forEach((entry) => { if (entry.isIntersecting) setActiveSection(entry.target.id); }); }, { root: contentRef.current, rootMargin: "-30% 0px -60% 0px", threshold: 0 });
        sections.forEach((id) => { const el = document.getElementById(id); if (el) observer.observe(el); });
        return () => observer.disconnect();
    }, []);

    const responseCode = `{
  "success": "1",
  "data": {}
}`;

    const codeMap = {
        HTTP: `POST /futures/api/v1/set-trading-stop HTTP/1.1
Host: api.bitzup.com
Content-Type: application/json
Authorization: Bearer <your_token>

{
  "user_id": "your_user_id",
  "symbol": "BTCUSDT",
  "tp_sl_mode": "Full",
  "take_profit": 95000,
  "tp_trigger_by": "LastPrice",
  "stop_loss": 88000,
  "sl_trigger_by": "LastPrice"
}`,
        Python: `import requests

url = "https://api.bitzup.com/futures/api/v1/set-trading-stop"
headers = {"Content-Type": "application/json", "Authorization": "Bearer <your_token>"}
payload = {
    "user_id": "your_user_id",
    "symbol": "BTCUSDT",
    "tp_sl_mode": "Full",
    "take_profit": 95000,
    "tp_trigger_by": "LastPrice",
    "stop_loss": 88000,
    "sl_trigger_by": "LastPrice"
}

try:
    resp = requests.post(url, json=payload, headers=headers, timeout=10)
    resp.raise_for_status()
    print(resp.json())
except requests.exceptions.RequestException as e:
    print("Error:", str(e))`,
        Go: `package main

import (
	"bytes"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"time"
)

func main() {
	url := "https://api.bitzup.com/futures/api/v1/set-trading-stop"
	body, _ := json.Marshal(map[string]interface{}{
		"user_id":       "your_user_id",
		"symbol":        "BTCUSDT",
		"tp_sl_mode":    "Full",
		"take_profit":   95000,
		"tp_trigger_by": "LastPrice",
		"stop_loss":     88000,
		"sl_trigger_by": "LastPrice",
	})
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
        Java: `import java.net.URI;
import java.net.http.*;
import java.time.Duration;

public class SetTradingStopExample {
    public static void main(String[] args) throws Exception {
        String json = """
            {
              "user_id": "your_user_id",
              "symbol": "BTCUSDT",
              "tp_sl_mode": "Full",
              "take_profit": 95000,
              "tp_trigger_by": "LastPrice",
              "stop_loss": 88000,
              "sl_trigger_by": "LastPrice"
            }
            """;
        HttpClient client = HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(10)).build();
        HttpRequest request = HttpRequest.newBuilder()
            .uri(URI.create("https://api.bitzup.com/futures/api/v1/set-trading-stop"))
            .header("Content-Type", "application/json")
            .header("Authorization", "Bearer <your_token>")
            .POST(HttpRequest.BodyPublishers.ofString(json)).build();
        HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
        System.out.println(response.body());
    }
}`,
        Node: `const axios = require("axios");

async function setTradingStop() {
  try {
    const response = await axios.post(
      "https://api.bitzup.com/futures/api/v1/set-trading-stop",
      {
        user_id: "your_user_id",
        symbol: "BTCUSDT",
        tp_sl_mode: "Full",
        take_profit: 95000,
        tp_trigger_by: "LastPrice",
        stop_loss: 88000,
        sl_trigger_by: "LastPrice",
      },
      { headers: { "Content-Type": "application/json", Authorization: "Bearer <your_token>" } }
    );
    console.log(response.data);
  } catch (error) {
    console.error("Error:", error.response?.data || error.message);
  }
}
setTradingStop();`,
    };

    return (
        <>
            <div className="container-fluid p-0">
                <div className="api-layout">
                    <div className="row">
                        <div className="col-lg-9 col-md-12 api-content" ref={contentRef}>
                            <div className="breadcrumb mb-4">
                                <span className="kline-market">Private</span>
                                <span className="mx-2"><IoIosArrowForward className="kline-arrow" /></span>
                                <span className="pill">Set Trading Stop</span>
                            </div>

                            <h1 className="api-title">Set Trading Stop</h1>
                            <p className="api-desc">
                                Set take profit, stop loss, or trailing stop for an existing position. Supports
                                both <code>Full</code> (entire position) and <code>Partial</code> (partial quantity) TP/SL modes.
                                You can also configure trailing stop with activation price.
                            </p>

                            <div className="api-cover">Requires Authentication</div>
                            <div className="api-cover">Rate Limit: 15 req/s</div>

                            <h3 className="top-req-text" id="http">HTTP Request</h3>
                            <div className="http-path">
                                <span className="method post">POST</span>
                                <span className="path">/v1/set-trading-stop</span>
                            </div>

                            <h3 className="top-req-text" id="request-params">Request Parameters</h3>
                            <div className="api-table-box">
                                <table className="table table-striped api-table mb-0">
                                    <thead><tr><th>Parameter</th><th>Required</th><th>Type</th><th>Comments</th></tr></thead>
                                    <tbody>
                                        <tr><td className="text-interval">user_id</td><td>true</td><td>string</td><td>Your unique user ID</td></tr>
                                        <tr><td className="text-interval">symbol</td><td>true</td><td>string</td><td>Symbol name, e.g. <span className="pill">BTCUSDT</span></td></tr>
                                        <tr>
                                            <td>tp_sl_mode</td><td>false</td><td>string</td>
                                            <td><span className="pill">Full</span> or <span className="pill">Partial</span>. Used for TP/SL. Omit when setting trailing stop only.</td>
                                        </tr>
                                        <tr><td>take_profit</td><td>false</td><td>number</td><td>Take profit price. Set to <span className="pill">0</span> to cancel.</td></tr>
                                        <tr>
                                            <td>tp_trigger_by</td><td>false</td><td>string</td>
                                            <td><span className="pill">LastPrice</span>, <span className="pill">MarkPrice</span>, or <span className="pill">IndexPrice</span></td>
                                        </tr>
                                        <tr><td>stop_loss</td><td>false</td><td>number</td><td>Stop loss price. Set to <span className="pill">0</span> to cancel.</td></tr>
                                        <tr>
                                            <td>sl_trigger_by</td><td>false</td><td>string</td>
                                            <td><span className="pill">LastPrice</span>, <span className="pill">MarkPrice</span>, or <span className="pill">IndexPrice</span></td>
                                        </tr>
                                        <tr><td>qty</td><td>conditional</td><td>number</td><td>Required when <code>tp_sl_mode</code> is <span className="pill">Partial</span></td></tr>
                                        <tr>
                                            <td>tp_order_type</td><td>false</td><td>string</td>
                                            <td><span className="pill">Limit</span>. Only for Partial mode.</td>
                                        </tr>
                                        <tr>
                                            <td>sl_order_type</td><td>false</td><td>string</td>
                                            <td><span className="pill">Limit</span>. Only for Partial mode.</td>
                                        </tr>
                                        <tr><td>tp_limit_price</td><td>false</td><td>number</td><td>TP limit price. Only for Partial mode with Limit order type.</td></tr>
                                        <tr><td>sl_limit_price</td><td>false</td><td>number</td><td>SL limit price. Only for Partial mode with Limit order type.</td></tr>
                                        <tr><td>trailing_stop</td><td>false</td><td>number</td><td>Trailing stop distance. Set to <span className="pill">0</span> to cancel.</td></tr>
                                        <tr><td>active_price</td><td>false</td><td>number</td><td>Activation price for trailing stop.</td></tr>
                                    </tbody>
                                </table>
                            </div>

                            <h3 className="top-req-text" id="response-params">Response Parameters</h3>
                            <div className="api-table-box">
                                <table className="table table-striped api-table mb-0">
                                    <thead><tr><th>Parameter</th><th>Type</th><th>Comments</th></tr></thead>
                                    <tbody>
                                        <tr><td>success</td><td>string</td><td><span className="pill">"1"</span> for success, <span className="pill">"0"</span> for failure</td></tr>
                                        <tr><td>data</td><td>object</td><td>Result data (empty object on success)</td></tr>
                                    </tbody>
                                </table>
                            </div>

                            <h3 className="top-req-text" id="request-example">Request Example</h3>
                            <div className="lang-tabs">
                                {["HTTP", "Python", "Go", "Java", "Node"].map((t) => (
                                    <button key={t} className={lang === t ? "active" : ""} onClick={() => setLang(t)}>{t}</button>
                                ))}
                            </div>
                            <div className="api-code-box position-relative">
                                <button className="copy-btn" onClick={handleCopy}>{copied ? <FiCheck /> : <FiCopy />}</button>
                                <pre><code>{codeMap[lang]}</code></pre>
                            </div>

                            <h3 className="top-req-text" id="response-example">Response Example</h3>
                            <div className="api-code-box position-relative">
                                <button className="copy-btn" onClick={handleCopyRes}>{copiedRes ? <FiCheck /> : <FiCopy />}</button>
                                <pre><code>{responseCode}</code></pre>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4 d-none d-md-block">
                            <div className="api-sidebar">
                                <ul>
                                    <li className={activeSection === "http" ? "active" : ""} onClick={() => scrollToSection("http")}>HTTP Request</li>
                                    <li className={activeSection === "request-params" ? "active" : ""} onClick={() => scrollToSection("request-params")}>Request Parameters</li>
                                    <li className={activeSection === "response-params" ? "active" : ""} onClick={() => scrollToSection("response-params")}>Response Parameters</li>
                                    <li className={activeSection === "request-example" ? "active" : ""} onClick={() => scrollToSection("request-example")}>Request Example</li>
                                    <li className={activeSection === "response-example" ? "active" : ""} onClick={() => scrollToSection("response-example")}>Response Example</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
