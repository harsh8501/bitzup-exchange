import { useState, useEffect, useRef } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FiCopy, FiCheck } from "react-icons/fi";

export const GetClosedPnl = () => {
    const contentRef = useRef(null);
    const [lang, setLang] = useState("HTTP");
    const [copied, setCopied] = useState(false);
    const [copiedRes, setCopiedRes] = useState(false);
    const [activeSection, setActiveSection] = useState("http");
    const HEADER_OFFSET = 120;

    const handleCopy = async () => {
        await navigator.clipboard.writeText(codeMap[lang]);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
    };

    const handleCopyRes = async () => {
        navigator.clipboard.writeText(responseCode);
        setCopiedRes(true);
        setTimeout(() => setCopiedRes(false), 1500);
    };

    const sections = ["http", "request-params", "response-params", "request-example", "response-example"];

    const scrollToSection = (id) => {
        const container = contentRef.current;
        const el = document.getElementById(id);
        if (!container || !el) return;
        const top = el.offsetTop - container.offsetTop - HEADER_OFFSET;
        container.scrollTo({ top, behavior: "smooth" });
    };

    useEffect(() => {
        if (!contentRef.current) return;
        const observer = new IntersectionObserver(
            (entries) => { entries.forEach((entry) => { if (entry.isIntersecting) setActiveSection(entry.target.id); }); },
            { root: contentRef.current, rootMargin: "-30% 0px -60% 0px", threshold: 0 }
        );
        sections.forEach((id) => { const el = document.getElementById(id); if (el) observer.observe(el); });
        return () => observer.disconnect();
    }, []);

    const responseCode = `{
  "success": "1",
  "data": [
    {
      "symbol": "BTCUSDT",
      "order_type": "Market",
      "side": "Sell",
      "order_id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
      "closed_pnl": "12.50",
      "open_fee": "1.85",
      "close_fee": "1.86",
      "entry_price": "92664.30",
      "qty": "0.05",
      "exit_price": "92914.30",
      "filled_type": "Trade",
      "trade_type": "Close Long",
      "time": "1706256000000"
    }
  ]
}`;

    const codeMap = {
        HTTP: `POST /futures/api/v1/get-closed-pnl HTTP/1.1
Host: api.bitzup.com
Content-Type: application/json
Authorization: Bearer <your_token>

{
  "symbol": "BTCUSDT",
  "limit": 20
}`,

        Python: `import requests

url = "https://api.bitzup.com/futures/api/v1/get-closed-pnl"

headers = {
    "Content-Type": "application/json",
    "Authorization": "Bearer <your_token>"
}

payload = {
    "symbol": "BTCUSDT",
    "limit": 20
}

try:
    resp = requests.post(url, json=payload, headers=headers, timeout=10)
    resp.raise_for_status()
    data = resp.json()
    print(data)
except requests.exceptions.HTTPError as e:
    print("API error:", resp.text)
except requests.exceptions.RequestException as e:
    print("Network error:", str(e))`,

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
	url := "https://api.bitzup.com/futures/api/v1/get-closed-pnl"

	body, _ := json.Marshal(map[string]interface{}{
		"symbol":  "BTCUSDT",
		"limit":   20,
	})

	req, _ := http.NewRequest("POST", url, bytes.NewBuffer(body))
	req.Header.Set("Content-Type", "application/json")
	req.Header.Set("Authorization", "Bearer <your_token>")

	client := &http.Client{Timeout: 10 * time.Second}
	resp, err := client.Do(req)
	if err != nil {
		panic(err)
	}
	defer resp.Body.Close()

	data, _ := io.ReadAll(resp.Body)
	fmt.Println(string(data))
}`,

        Java: `import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.time.Duration;

public class GetClosedPnlExample {
    public static void main(String[] args) throws Exception {
        String url = "https://api.bitzup.com/futures/api/v1/get-closed-pnl";

        String json = """
            {
              "symbol": "BTCUSDT",
              "limit": 20
            }
            """;

        HttpClient client = HttpClient.newBuilder()
            .connectTimeout(Duration.ofSeconds(10))
            .build();

        HttpRequest request = HttpRequest.newBuilder()
            .uri(URI.create(url))
            .header("Content-Type", "application/json")
            .header("Authorization", "Bearer <your_token>")
            .POST(HttpRequest.BodyPublishers.ofString(json))
            .build();

        HttpResponse<String> response =
            client.send(request, HttpResponse.BodyHandlers.ofString());

        System.out.println(response.body());
    }
}`,

        Node: `const axios = require("axios");

async function getClosedPnl() {
  try {
    const response = await axios.post(
      "https://api.bitzup.com/futures/api/v1/get-closed-pnl",
      {
        symbol: "BTCUSDT",
        limit: 20,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer <your_token>",
        },
      }
    );
    console.log(response.data);
  } catch (error) {
    if (error.response) {
      console.error("API Error:", error.response.data);
    } else {
      console.error("Network Error:", error.message);
    }
  }
}

getClosedPnl();`,
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
                                <span className="pill">Get Closed PnL</span>
                            </div>

                            <h1 className="api-title">Get Closed PnL</h1>
                            <p className="api-desc">
                                Query user's closed profit and loss records. Results are sorted by created time in
                                descending order. Returns data for the last 7 days by default. The maximum time
                                range between <code>start_time</code> and <code>end_time</code> is 7 days.
                            </p>

                            <div className="api-cover">Requires Authentication</div>
                            <div className="api-cover">Rate Limit: 15 req/s</div>

                            <h3 className="top-req-text" id="http">HTTP Request</h3>
                            <div className="http-path">
                                <span className="method post">POST</span>
                                <span className="path">/v1/get-closed-pnl</span>
                            </div>

                            <h3 className="top-req-text" id="request-params">Request Parameters</h3>
                            <div className="api-table-box">
                                <table className="table table-striped api-table mb-0">
                                    <thead><tr><th>Parameter</th><th>Required</th><th>Type</th><th>Comments</th></tr></thead>
                                    <tbody>
                                        <tr><td className="text-interval">limit</td><td>true</td><td>number</td><td>Number of results to return</td></tr>
                                        <tr><td>symbol</td><td>false</td><td>string</td><td>Symbol name, e.g. <span className="pill">BTCUSDT</span></td></tr>
                                        <tr><td>start_time</td><td>false</td><td>number</td><td>Start timestamp in milliseconds</td></tr>
                                        <tr><td>end_time</td><td>false</td><td>number</td><td>End timestamp in milliseconds</td></tr>
                                    </tbody>
                                </table>
                            </div>

                            <h3 className="top-req-text" id="response-params">Response Parameters</h3>
                            <div className="api-table-box">
                                <table className="table table-striped api-table mb-0">
                                    <thead><tr><th>Parameter</th><th>Type</th><th>Comments</th></tr></thead>
                                    <tbody>
                                        <tr><td>symbol</td><td>string</td><td>Symbol name</td></tr>
                                        <tr><td>order_type</td><td>string</td><td><span className="pill">Limit</span> or <span className="pill">Market</span></td></tr>
                                        <tr><td>side</td><td>string</td><td><span className="pill">Buy</span> or <span className="pill">Sell</span></td></tr>
                                        <tr><td>order_id</td><td>string</td><td>Order ID</td></tr>
                                        <tr><td>closed_pnl</td><td>string</td><td>Closed profit and loss amount</td></tr>
                                        <tr><td>open_fee</td><td>string</td><td>Opening fee</td></tr>
                                        <tr><td>close_fee</td><td>string</td><td>Closing fee</td></tr>
                                        <tr><td>entry_price</td><td>string</td><td>Average entry price</td></tr>
                                        <tr><td>qty</td><td>string</td><td>Closed quantity</td></tr>
                                        <tr><td>exit_price</td><td>string</td><td>Average exit price</td></tr>
                                        <tr><td>filled_type</td><td>string</td><td>Trade, BustTrade, SessionSettlePnL, Settle</td></tr>
                                        <tr><td>trade_type</td><td>string</td><td>Close Long or Close Short</td></tr>
                                        <tr><td>time</td><td>string</td><td>Created timestamp (ms)</td></tr>
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
