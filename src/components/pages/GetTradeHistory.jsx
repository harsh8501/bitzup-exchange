import { useState, useEffect, useRef } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FiCopy, FiCheck } from "react-icons/fi";

export const GetTradeHistory = () => {
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
      "order_type": "Limit",
      "client_order_id": "",
      "side": "Buy",
      "trade_type": "Open Long",
      "order_id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
      "tx_id": "exec-001-xyz",
      "filled_value": "4637.515",
      "filled_price": "92750.30",
      "filled_qty": "0.05",
      "filled_type": "Trade",
      "fee": "1.85",
      "fee_rate": 0.04,
      "order_price": "92664.30",
      "order_qty": "0.05",
      "time": "1706169600000"
    }
  ]
}`;

    const codeMap = {
        HTTP: `POST /futures/api/v1/get-trade-history HTTP/1.1
Host: api.bitzup.com
Content-Type: application/json
Authorization: Bearer <your_token>

{
  "user_id": "your_user_id",
  "symbol": "BTCUSDT",
  "limit": 20
}`,

        Python: `import requests

url = "https://api.bitzup.com/futures/api/v1/get-trade-history"

headers = {
    "Content-Type": "application/json",
    "Authorization": "Bearer <your_token>"
}

payload = {
    "user_id": "your_user_id",
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
	url := "https://api.bitzup.com/futures/api/v1/get-trade-history"

	body, _ := json.Marshal(map[string]interface{}{
		"user_id": "your_user_id",
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

public class GetTradeHistoryExample {
    public static void main(String[] args) throws Exception {
        String url = "https://api.bitzup.com/futures/api/v1/get-trade-history";

        String json = """
            {
              "user_id": "your_user_id",
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

async function getTradeHistory() {
  try {
    const response = await axios.post(
      "https://api.bitzup.com/futures/api/v1/get-trade-history",
      {
        user_id: "your_user_id",
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

getTradeHistory();`,
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
                                <span className="pill">Get Trade History</span>
                            </div>

                            <h1 className="api-title">Get Trade History</h1>
                            <p className="api-desc">
                                Query users' execution records sorted by execution time in descending order.
                                Returns data for the last 7 days by default. The maximum time range between{" "}
                                <code>start_time</code> and <code>end_time</code> is 7 days.
                            </p>

                            <div className="api-cover">Requires Authentication</div>
                            <div className="api-cover">Rate Limit: 15 req/s</div>

                            <h3 className="top-req-text" id="http">HTTP Request</h3>
                            <div className="http-path">
                                <span className="method post">POST</span>
                                <span className="path">/v1/get-trade-history</span>
                            </div>

                            <h3 className="top-req-text" id="request-params">Request Parameters</h3>
                            <div className="api-table-box">
                                <table className="table table-striped api-table mb-0">
                                    <thead><tr><th>Parameter</th><th>Required</th><th>Type</th><th>Comments</th></tr></thead>
                                    <tbody>
                                        <tr><td className="text-interval">user_id</td><td>true</td><td>string</td><td>Your unique user ID</td></tr>
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
                                        <tr><td>client_order_id</td><td>string</td><td>User-set order ID</td></tr>
                                        <tr><td>side</td><td>string</td><td><span className="pill">Buy</span> or <span className="pill">Sell</span></td></tr>
                                        <tr><td>trade_type</td><td>string</td><td>Open Long, Close Long, Open Short, Close Short</td></tr>
                                        <tr><td>order_id</td><td>string</td><td>Order ID</td></tr>
                                        <tr><td>tx_id</td><td>string</td><td>Execution ID (unique per fill)</td></tr>
                                        <tr><td>filled_value</td><td>string</td><td>Execution value</td></tr>
                                        <tr><td>filled_price</td><td>string</td><td>Execution price</td></tr>
                                        <tr><td>filled_qty</td><td>string</td><td>Execution quantity</td></tr>
                                        <tr><td>filled_type</td><td>string</td><td>Execution type (Trade, Funding, etc.)</td></tr>
                                        <tr><td>fee</td><td>string</td><td>Trading fee for this execution</td></tr>
                                        <tr><td>fee_rate</td><td>number</td><td>Fee rate in percentage</td></tr>
                                        <tr><td>order_price</td><td>string</td><td>Original order price</td></tr>
                                        <tr><td>order_qty</td><td>string</td><td>Original order quantity</td></tr>
                                        <tr><td>time</td><td>string</td><td>Execution timestamp (ms)</td></tr>
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
