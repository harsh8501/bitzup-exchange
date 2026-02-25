import { useState, useEffect, useRef } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FiCopy, FiCheck } from "react-icons/fi";

export const GetOrderHistory = () => {
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
      "order_id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
      "symbol": "BTCUSDT",
      "order_type": "Limit",
      "client_order_id": "",
      "avg_price": "92750.30",
      "stop_order_type": "",
      "order_status": "Filled",
      "filled_qty": "0.05",
      "qty": "0.05",
      "filled_value": "4637.515",
      "order_value": 4633.215,
      "side": "Buy",
      "fee": "1.85",
      "time": "1706169600000",
      "reduce_only": false,
      "order_price": "92664.30",
      "trigger_price": "",
      "trade_type": "Open Long"
    }
  ]
}`;

    const codeMap = {
        HTTP: `POST /futures/api/v1/get-order-history HTTP/1.1
Host: api.bitzup.com
Content-Type: application/json
Authorization: Bearer <your_token>

{
  "quote_coin": "USDT",
  "order_type": "Order",
  "limit": 20
}`,

        Python: `import requests

url = "https://api.bitzup.com/futures/api/v1/get-order-history"

headers = {
    "Content-Type": "application/json",
    "Authorization": "Bearer <your_token>"
}

payload = {
    "quote_coin": "USDT",
    "order_type": "Order",
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
	url := "https://api.bitzup.com/futures/api/v1/get-order-history"

	body, _ := json.Marshal(map[string]interface{}{
		"quote_coin": "USDT",
		"order_type": "Order",
		"limit":      20,
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

public class GetOrderHistoryExample {
    public static void main(String[] args) throws Exception {
        String url = "https://api.bitzup.com/futures/api/v1/get-order-history";

        String json = """
            {
              "quote_coin": "USDT",
              "order_type": "Order",
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

async function getOrderHistory() {
  try {
    const response = await axios.post(
      "https://api.bitzup.com/futures/api/v1/get-order-history",
      {
        quote_coin: "USDT",
        order_type: "Order",
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

getOrderHistory();`,
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
                                <span className="pill">Get Order History</span>
                            </div>

                            <h1 className="api-title">Get Order History</h1>
                            <p className="api-desc">
                                Query order history. Returns data for the last 7 days by default. You can filter
                                by <code>order_type</code> to separate regular orders and stop orders. The maximum
                                time range between <code>start_time</code> and <code>end_time</code> is 7 days.
                            </p>

                            <div className="api-cover">Requires Authentication</div>
                            <div className="api-cover">Rate Limit: 15 req/s</div>

                            <h3 className="top-req-text" id="http">HTTP Request</h3>
                            <div className="http-path">
                                <span className="method post">POST</span>
                                <span className="path">/v1/get-order-history</span>
                            </div>

                            <h3 className="top-req-text" id="request-params">Request Parameters</h3>
                            <div className="api-table-box">
                                <table className="table table-striped api-table mb-0">
                                    <thead><tr><th>Parameter</th><th>Required</th><th>Type</th><th>Comments</th></tr></thead>
                                    <tbody>
                                        <tr>
                                            <td className="text-interval">order_type</td><td>true</td><td>string</td>
                                            <td><span className="pill">Order</span> or <span className="pill">StopOrder</span></td>
                                        </tr>
                                        <tr>
                                            <td className="text-interval">symbol</td><td>conditional</td><td>string</td>
                                            <td>Symbol name, e.g. <span className="pill">BTCUSDT</span>. Either <code>symbol</code> or <code>quote_coin</code> is required</td>
                                        </tr>
                                        <tr>
                                            <td className="text-interval">quote_coin</td><td>conditional</td><td>string</td>
                                            <td>Settlement coin, e.g. <span className="pill">USDT</span>. Either <code>symbol</code> or <code>quote_coin</code> is required</td>
                                        </tr>
                                        <tr><td className="text-interval">limit</td><td>true</td><td>number</td><td>Number of results to return</td></tr>
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
                                        <tr><td>order_id</td><td>string</td><td>Order ID</td></tr>
                                        <tr><td>symbol</td><td>string</td><td>Symbol name</td></tr>
                                        <tr><td>order_type</td><td>string</td><td><span className="pill">Limit</span> or <span className="pill">Market</span></td></tr>
                                        <tr><td>client_order_id</td><td>string</td><td>User-set order ID</td></tr>
                                        <tr><td>avg_price</td><td>string</td><td>Average filled price</td></tr>
                                        <tr><td>stop_order_type</td><td>string</td><td>Stop order type</td></tr>
                                        <tr><td>order_status</td><td>string</td><td>Order status (Filled, Cancelled, etc.)</td></tr>
                                        <tr><td>filled_qty</td><td>string</td><td>Cumulative filled quantity</td></tr>
                                        <tr><td>qty</td><td>string</td><td>Order quantity</td></tr>
                                        <tr><td>filled_value</td><td>string</td><td>Cumulative filled value</td></tr>
                                        <tr><td>order_value</td><td>number</td><td>Order value (price × qty)</td></tr>
                                        <tr><td>side</td><td>string</td><td><span className="pill">Buy</span> or <span className="pill">Sell</span></td></tr>
                                        <tr><td>fee</td><td>string</td><td>Cumulative trading fee</td></tr>
                                        <tr><td>time</td><td>string</td><td>Created timestamp (ms)</td></tr>
                                        <tr><td>reduce_only</td><td>boolean</td><td>Whether reduce only</td></tr>
                                        <tr><td>order_price</td><td>string</td><td>Order price</td></tr>
                                        <tr><td>trigger_price</td><td>string</td><td>Trigger price (for stop orders)</td></tr>
                                        <tr><td>trade_type</td><td>string</td><td>Open Long, Close Long, Open Short, Close Short</td></tr>
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
