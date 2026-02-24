import { useState, useEffect, useRef } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FiCopy, FiCheck } from "react-icons/fi";

export const GetOpenOrders = () => {
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
      "order_id": "1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d",
      "symbol": "BTCUSDT",
      "order_type": "Limit",
      "client_order_id": "my_custom_id_001",
      "side": "Buy",
      "order_price": "90000",
      "qty": "0.05",
      "filled_qty": "0",
      "stop_order_type": "",
      "order_value": "4500",
      "order_status": "New",
      "tpsl_mode": "Full",
      "take_profit": "95000",
      "stop_loss": "88000",
      "time": "1706169600000",
      "reduce_only": false,
      "trade_type": "Open Long",
      "price_decimal": 1,
      "qty_decimal": 3,
      "leverage": 10
    }
  ]
}`;

    const codeMap = {
        HTTP: `POST /futures/api/v1/get-open-orders HTTP/1.1
Host: api.bitzup.com
Content-Type: application/json
Authorization: Bearer <your_token>

{
  "user_id": "your_user_id",
  "quote_coin": "USDT",
  "order_type": "order"
}`,

        Python: `import requests

url = "https://api.bitzup.com/futures/api/v1/get-open-orders"

headers = {
    "Content-Type": "application/json",
    "Authorization": "Bearer <your_token>"
}

payload = {
    "user_id": "your_user_id",
    "quote_coin": "USDT",
    "order_type": "order"
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
	url := "https://api.bitzup.com/futures/api/v1/get-open-orders"

	body, _ := json.Marshal(map[string]string{
		"user_id":    "your_user_id",
		"quote_coin": "USDT",
		"order_type": "order",
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

public class GetOpenOrdersExample {
    public static void main(String[] args) throws Exception {
        String url = "https://api.bitzup.com/futures/api/v1/get-open-orders";

        String json = """
            {
              "user_id": "your_user_id",
              "quote_coin": "USDT",
              "order_type": "order"
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

async function getOpenOrders() {
  try {
    const response = await axios.post(
      "https://api.bitzup.com/futures/api/v1/get-open-orders",
      {
        user_id: "your_user_id",
        quote_coin: "USDT",
        order_type: "order",
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

getOpenOrders();`,
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
                                <span className="pill">Get Open Orders</span>
                            </div>

                            <h1 className="api-title">Get Open Orders</h1>
                            <p className="api-desc">
                                Query unfilled or partially filled orders in real-time. Supports querying limit orders,
                                TP/SL orders, and trailing stop orders by specifying the <code>order_type</code> parameter.
                            </p>

                            <div className="api-cover">Requires Authentication</div>
                            <div className="api-cover">Rate Limit: 15 req/s</div>

                            <h3 className="top-req-text" id="http">HTTP Request</h3>
                            <div className="http-path">
                                <span className="method post">POST</span>
                                <span className="path">/v1/get-open-orders</span>
                            </div>

                            <h3 className="top-req-text" id="request-params">Request Parameters</h3>
                            <div className="api-table-box">
                                <table className="table table-striped api-table mb-0">
                                    <thead><tr><th>Parameter</th><th>Required</th><th>Type</th><th>Comments</th></tr></thead>
                                    <tbody>
                                        <tr>
                                            <td className="text-interval">user_id</td>
                                            <td>true</td><td>string</td><td>Your unique user ID</td>
                                        </tr>
                                        <tr>
                                            <td className="text-interval">order_type</td>
                                            <td>true</td><td>string</td>
                                            <td>
                                                <span className="pill">order</span>{" "}
                                                <span className="pill">tpslOrder</span>{" "}
                                                <span className="pill">trailingStop</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-interval">symbol</td>
                                            <td>conditional</td><td>string</td>
                                            <td>Symbol name, e.g. <span className="pill">BTCUSDT</span>. Either <code>symbol</code> or <code>quote_coin</code> is required</td>
                                        </tr>
                                        <tr>
                                            <td className="text-interval">quote_coin</td>
                                            <td>conditional</td><td>string</td>
                                            <td>Settlement coin, e.g. <span className="pill">USDT</span>. Either <code>symbol</code> or <code>quote_coin</code> is required</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <h3 className="top-req-text" id="response-params">Response Parameters</h3>
                            <p className="api-desc" style={{ fontSize: "14px", marginBottom: "8px" }}>
                                Response fields vary by <code>order_type</code>. Below shows the response for <code>order_type: "order"</code>:
                            </p>
                            <div className="api-table-box">
                                <table className="table table-striped api-table mb-0">
                                    <thead><tr><th>Parameter</th><th>Type</th><th>Comments</th></tr></thead>
                                    <tbody>
                                        <tr><td>order_id</td><td>string</td><td>Order ID</td></tr>
                                        <tr><td>symbol</td><td>string</td><td>Symbol name</td></tr>
                                        <tr><td>order_type</td><td>string</td><td><span className="pill">Limit</span> or <span className="pill">Market</span></td></tr>
                                        <tr><td>client_order_id</td><td>string</td><td>User-set order ID</td></tr>
                                        <tr><td>side</td><td>string</td><td><span className="pill">Buy</span> or <span className="pill">Sell</span></td></tr>
                                        <tr><td>order_price</td><td>string</td><td>Order price</td></tr>
                                        <tr><td>qty</td><td>string</td><td>Order quantity</td></tr>
                                        <tr><td>filled_qty</td><td>string</td><td>Cumulative filled quantity</td></tr>
                                        <tr><td>stop_order_type</td><td>string</td><td>Stop order type</td></tr>
                                        <tr><td>order_value</td><td>string</td><td>Order value in USDT</td></tr>
                                        <tr><td>order_status</td><td>string</td><td>Order status (New, PartiallyFilled, etc.)</td></tr>
                                        <tr><td>tpsl_mode</td><td>string</td><td><span className="pill">Full</span> or <span className="pill">Partial</span></td></tr>
                                        <tr><td>take_profit</td><td>string</td><td>Take profit price</td></tr>
                                        <tr><td>stop_loss</td><td>string</td><td>Stop loss price</td></tr>
                                        <tr><td>time</td><td>string</td><td>Created timestamp (ms)</td></tr>
                                        <tr><td>reduce_only</td><td>boolean</td><td>Whether reduce only</td></tr>
                                        <tr><td>trade_type</td><td>string</td><td>Open Long, Close Long, Open Short, Close Short</td></tr>
                                        <tr><td>price_decimal</td><td>integer</td><td>Price precision</td></tr>
                                        <tr><td>qty_decimal</td><td>integer</td><td>Quantity precision</td></tr>
                                        <tr><td>leverage</td><td>number</td><td>Current leverage for the symbol</td></tr>
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
