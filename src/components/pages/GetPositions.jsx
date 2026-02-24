import { useState, useEffect, useRef } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FiCopy, FiCheck } from "react-icons/fi";

export const GetPositions = () => {
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

    const sections = [
        "http",
        "request-params",
        "response-params",
        "request-example",
        "response-example",
    ];

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
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setActiveSection(entry.target.id);
                });
            },
            { root: contentRef.current, rootMargin: "-30% 0px -60% 0px", threshold: 0 }
        );
        sections.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });
        return () => observer.disconnect();
    }, []);

    const responseCode = `{
  "success": "1",
  "data": [
    {
      "symbol": "BTCUSDT",
      "price_decimal": 1,
      "qty_decimal": 3,
      "leverage": "10",
      "side": "Buy",
      "qty": "0.05",
      "position_value": "4633.215",
      "entry_price": "92664.30",
      "mark_price": "92750.10",
      "liquidation_price": "85120.50",
      "initial_margin": "463.3215",
      "position_margin": "467.50",
      "unrealised_Pnl": "4.29",
      "unrealised_Pnl_pc": "0.926",
      "take_profit": "95000",
      "stop_loss": "90000",
      "trailing_stop": "0",
      "activation_price": "92664.30",
      "auto_margin": 0
    }
  ]
}`;

    const codeMap = {
        HTTP: `POST /futures/api/v1/get-positions HTTP/1.1
Host: api.bitzup.com
Content-Type: application/json
Authorization: Bearer <your_token>

{
  "user_id": "your_user_id",
  "quote_coin": "USDT"
}`,

        Python: `import requests

url = "https://api.bitzup.com/futures/api/v1/get-positions"

headers = {
    "Content-Type": "application/json",
    "Authorization": "Bearer <your_token>"
}

payload = {
    "user_id": "your_user_id",
    "quote_coin": "USDT"
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
	url := "https://api.bitzup.com/futures/api/v1/get-positions"

	body, _ := json.Marshal(map[string]string{
		"user_id":    "your_user_id",
		"quote_coin": "USDT",
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

public class GetPositionsExample {
    public static void main(String[] args) throws Exception {
        String url = "https://api.bitzup.com/futures/api/v1/get-positions";

        String json = """
            {
              "user_id": "your_user_id",
              "quote_coin": "USDT"
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

async function getPositions() {
  try {
    const response = await axios.post(
      "https://api.bitzup.com/futures/api/v1/get-positions",
      {
        user_id: "your_user_id",
        quote_coin: "USDT",
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

getPositions();`,
    };

    return (
        <>
            <div className="container-fluid p-0">
                <div className="api-layout">
                    <div className="row">
                        {/* LEFT CONTENT */}
                        <div className="col-lg-9 col-md-12 api-content" ref={contentRef}>
                            <div className="breadcrumb mb-4">
                                <span className="kline-market">Private</span>
                                <span className="mx-2">
                                    <IoIosArrowForward className="kline-arrow" />
                                </span>
                                <span className="pill">Get Positions</span>
                            </div>

                            <h1 className="api-title">Get Positions</h1>
                            <p className="api-desc">
                                Query real-time position data, such as position size, leverage,
                                entry price, mark price, liquidation price, unrealised PnL, and more.
                            </p>

                            <div className="api-cover">Requires Authentication</div>
                            <div className="api-cover">Rate Limit: 15 req/s</div>

                            {/* HTTP REQUEST */}
                            <h3 className="top-req-text" id="http">HTTP Request</h3>
                            <div className="http-path">
                                <span className="method post">POST</span>
                                <span className="path">/v1/get-positions</span>
                            </div>

                            {/* REQUEST PARAMETERS */}
                            <h3 className="top-req-text" id="request-params">Request Parameters</h3>
                            <div className="api-table-box">
                                <table className="table table-striped api-table mb-0">
                                    <thead>
                                        <tr>
                                            <th>Parameter</th>
                                            <th>Required</th>
                                            <th>Type</th>
                                            <th>Comments</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="text-interval">user_id</td>
                                            <td>true</td>
                                            <td>string</td>
                                            <td>Your unique user ID</td>
                                        </tr>
                                        <tr>
                                            <td className="text-interval">quote_coin</td>
                                            <td>true</td>
                                            <td>string</td>
                                            <td>
                                                Settlement coin, e.g. <span className="pill">USDT</span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            {/* RESPONSE PARAMETERS */}
                            <h3 className="top-req-text" id="response-params">Response Parameters</h3>
                            <div className="api-table-box">
                                <table className="table table-striped api-table mb-0">
                                    <thead>
                                        <tr>
                                            <th>Parameter</th>
                                            <th>Type</th>
                                            <th>Comments</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr><td>symbol</td><td>string</td><td>Symbol name</td></tr>
                                        <tr><td>price_decimal</td><td>integer</td><td>Price precision</td></tr>
                                        <tr><td>qty_decimal</td><td>integer</td><td>Quantity precision</td></tr>
                                        <tr><td>leverage</td><td>string</td><td>Current leverage</td></tr>
                                        <tr><td>side</td><td>string</td><td><span className="pill">Buy</span> or <span className="pill">Sell</span></td></tr>
                                        <tr><td>qty</td><td>string</td><td>Position size</td></tr>
                                        <tr><td>position_value</td><td>string</td><td>Position value in USDT</td></tr>
                                        <tr><td>entry_price</td><td>string</td><td>Average entry price</td></tr>
                                        <tr><td>mark_price</td><td>string</td><td>Current mark price</td></tr>
                                        <tr><td>liquidation_price</td><td>string</td><td>Estimated liquidation price</td></tr>
                                        <tr><td>initial_margin</td><td>string</td><td>Initial margin</td></tr>
                                        <tr><td>position_margin</td><td>string</td><td>Position margin balance</td></tr>
                                        <tr><td>unrealised_Pnl</td><td>string</td><td>Unrealised profit and loss</td></tr>
                                        <tr><td>unrealised_Pnl_pc</td><td>number</td><td>Unrealised PnL percentage</td></tr>
                                        <tr><td>take_profit</td><td>string</td><td>Take profit price</td></tr>
                                        <tr><td>stop_loss</td><td>string</td><td>Stop loss price</td></tr>
                                        <tr><td>trailing_stop</td><td>string</td><td>Trailing stop value</td></tr>
                                        <tr><td>activation_price</td><td>string</td><td>Trailing stop activation price</td></tr>
                                        <tr><td>auto_margin</td><td>integer</td><td>Auto add margin: <span className="pill">0</span> off, <span className="pill">1</span> on</td></tr>
                                    </tbody>
                                </table>
                            </div>

                            {/* REQUEST EXAMPLE */}
                            <h3 className="top-req-text" id="request-example">Request Example</h3>
                            <div className="lang-tabs">
                                {["HTTP", "Python", "Go", "Java", "Node"].map((t) => (
                                    <button key={t} className={lang === t ? "active" : ""} onClick={() => setLang(t)}>{t}</button>
                                ))}
                            </div>
                            <div className="api-code-box position-relative">
                                <button className="copy-btn" onClick={handleCopy}>
                                    {copied ? <FiCheck /> : <FiCopy />}
                                </button>
                                <pre><code>{codeMap[lang]}</code></pre>
                            </div>

                            {/* RESPONSE EXAMPLE */}
                            <h3 className="top-req-text" id="response-example">Response Example</h3>
                            <div className="api-code-box position-relative">
                                <button className="copy-btn" onClick={handleCopyRes}>
                                    {copiedRes ? <FiCheck /> : <FiCopy />}
                                </button>
                                <pre><code>{responseCode}</code></pre>
                            </div>
                        </div>

                        {/* RIGHT SIDEBAR */}
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
