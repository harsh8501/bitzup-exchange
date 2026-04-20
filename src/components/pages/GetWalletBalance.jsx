import { useState, useEffect, useRef } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FiCopy, FiCheck } from "react-icons/fi";

export const GetWalletBalance = () => {
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
  "data": {
    "totalUsdBalance": "10250.50",
    "coins": [
      {
        "coin": "USDT",
        "walletBalance": 10000,
        "availableBalance": 5500.25
      },
      {
        "coin": "USDC",
        "walletBalance": 250.50,
        "availableBalance": 250.50
      }
    ],
    "totalMarginBalance": "10250.50",
    "totalAvailableBalance": "5750.75",
    "totalWalletBalance": "10250.50"
  }
}`;

    const codeMap = {
        HTTP: `POST /futures/api/v1/get-balance HTTP/1.1
Host: api.bitzup.com
Content-Type: application/json
Authorization: Bearer <your_token>

{
  "coin": "USDT"
}`,

        Python: `import requests

url = "https://api.bitzup.com/futures/api/v1/get-balance"

headers = {
    "Content-Type": "application/json",
    "Authorization": "Bearer <your_token>"
}

payload = {
    "coin": "USDT"
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
	url := "https://api.bitzup.com/futures/api/v1/get-balance"

	body, _ := json.Marshal(map[string]string{
		"coin":    "USDT",
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

public class GetWalletBalanceExample {
    public static void main(String[] args) throws Exception {
        String url = "https://api.bitzup.com/futures/api/v1/get-balance";

        String json = """
            {
              "coin": "USDT"
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

async function getWalletBalance() {
  try {
    const response = await axios.post(
      "https://api.bitzup.com/futures/api/v1/get-balance",
      {
        coin: "USDT",
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

getWalletBalance();`,
    };

    return (
        <>
            <div className="container-fluid p-0">
                <div className="api-layout">
                    <div className="row">
                        <div className="col-lg-9 col-md-12 api-content" ref={contentRef}>
                            <div className="breadcrumb mb-4">
                                <span className="text-muted">Account</span>
                                <span className="mx-2"><IoIosArrowForward className="kline-arrow" /></span>
                                <span className="pill">Get Wallet Balance</span>
                            </div>

                            <h1 className="api-title" style={{ fontSize: "32px", marginBottom: "16px" }}>Get Wallet Balance</h1>
                            <p className="api-desc">
                                Obtain wallet balance and query asset information of each currency. Pass{" "}
                                <code>"ALL"</code> as the <code>coin</code> parameter to get all coin balances,
                                or specify a specific coin like <code>"USDT"</code>.
                            </p>

                            <div className="api-cover">Requires Authentication</div>
                            <div className="api-cover">Rate Limit: 15 req/s</div>

                            <h3 className="top-req-text" id="http" style={{ borderBottom: "1px solid var(--border-color)", paddingBottom: "12px", marginTop: "40px" }}>HTTP Request</h3>
                            <div className="http-path" style={{ background: "var(--bg-card)", padding: "12px 16px", borderRadius: "8px", display: "flex", gap: "12px", alignItems: "center", marginBottom: "32px" }}>
                                <span className="method" style={{ padding: "4px 8px", borderRadius: "4px" }}>POST</span>
                                <span className="path" style={{ fontWeight: "500", letterSpacing: "0.5px" }}>/v1/get-balance</span>
                            </div>

                            <h3 className="top-req-text" id="request-params">Request Parameters</h3>
                            <div className="api-table-box">
                                <table className="table table-striped api-table mb-0">
                                    <thead><tr><th>Parameter</th><th>Required</th><th>Type</th><th>Comments</th></tr></thead>
                                    <tbody>
                                        <tr>
                                            <td className="text-interval">coin</td><td>true</td><td>string</td>
                                            <td>
                                                Coin name, e.g. <span className="pill">USDT</span>,{" "}
                                                <span className="pill">USDC</span>, or{" "}
                                                <span className="pill">ALL</span> for all coins
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <h3 className="top-req-text" id="response-params">Response Parameters</h3>
                            <div className="api-table-box">
                                <table className="table table-striped api-table mb-0">
                                    <thead><tr><th>Parameter</th><th>Type</th><th>Comments</th></tr></thead>
                                    <tbody>
                                        <tr><td>totalUsdBalance</td><td>string</td><td>Total equity in USD</td></tr>
                                        <tr><td>totalMarginBalance</td><td>string</td><td>Total margin balance</td></tr>
                                        <tr><td>totalAvailableBalance</td><td>string</td><td>Total available balance</td></tr>
                                        <tr><td>totalWalletBalance</td><td>string</td><td>Total wallet balance</td></tr>
                                        <tr>
                                            <td>coins</td><td>array</td>
                                            <td>Array of coin balance objects</td>
                                        </tr>
                                        <tr>
                                            <td><IoIosArrowForward /> coins.coin</td><td>string</td>
                                            <td>Coin name</td>
                                        </tr>
                                        <tr>
                                            <td><IoIosArrowForward /> coins.walletBalance</td><td>number</td>
                                            <td>Wallet balance for the coin</td>
                                        </tr>
                                        <tr>
                                            <td><IoIosArrowForward /> coins.availableBalance</td><td>number</td>
                                            <td>Available balance (wallet - positionIM - orderIM)</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <h3 className="top-req-text" id="request-example">Request Example</h3>
                            <div className="lang-tabs">
                                {["HTTP", "Python", "Go", "Java", "Node"].map((t) => (
                                    <button key={t} className={lang === t ? "active" : ""} onClick={() => setLang(t)}>{t}</button>
                                ))}
                            </div>
                            <div className="api-code-box position-relative" style={{ background: "var(--bg-code)", padding: "20px", borderRadius: "8px", border: "1px solid var(--border-color)", marginBottom: "40px" }}>
                                <button className="copy-btn" onClick={handleCopy} style={{ position: "absolute", top: "12px", right: "12px", background: "transparent", border: "none", color: "var(--text-secondary)", cursor: "pointer" }}>{copied ? <FiCheck color="var(--text-accent)" /> : <FiCopy />}</button>
                                <pre style={{ margin: 0 }}><code style={{ color: "#e6edf3", fontSize: "14px", lineHeight: "1.5" }}>{codeMap[lang]}</code></pre>
                            </div>

                            <h3 className="top-req-text" id="response-example">Response Example</h3>
                            <div className="api-code-box position-relative" style={{ background: "var(--bg-code)", padding: "20px", borderRadius: "8px", border: "1px solid var(--border-color)", marginBottom: "40px" }}>
                                <button className="copy-btn" onClick={handleCopyRes} style={{ position: "absolute", top: "12px", right: "12px", background: "transparent", border: "none", color: "var(--text-secondary)", cursor: "pointer" }}>{copiedRes ? <FiCheck color="var(--text-accent)" /> : <FiCopy />}</button>
                                <pre style={{ margin: 0 }}><code style={{ color: "#e6edf3", fontSize: "14px", lineHeight: "1.5" }}>{responseCode}</code></pre>
                            </div>
                        </div>

                        <div className="col-lg-3 d-none d-lg-block">
                            <div className="api-sidebar-wrapper" style={{ position: "sticky", top: "100px", borderLeft: "1px solid var(--border-color)", paddingLeft: "20px" }}>
                                <h5 style={{ fontSize: "12px", textTransform: "uppercase", color: "var(--text-secondary)", marginBottom: "16px", letterSpacing: "1px" }}>On this page</h5>
                                <ul style={{ listStyle: "none", padding: 0 }}>
                                    <li className={activeSection === "http" ? "active" : ""} onClick={() => scrollToSection("http")} style={{ padding: "8px 0", cursor: "pointer", fontSize: "14px", color: activeSection === "http" ? "var(--text-accent)" : "var(--text-secondary)", transition: "all 0.2s" }}>HTTP Request</li>
                                    <li className={activeSection === "request-params" ? "active" : ""} onClick={() => scrollToSection("request-params")} style={{ padding: "8px 0", cursor: "pointer", fontSize: "14px", color: activeSection === "request-params" ? "var(--text-accent)" : "var(--text-secondary)", transition: "all 0.2s" }}>Request Parameters</li>
                                    <li className={activeSection === "response-params" ? "active" : ""} onClick={() => scrollToSection("response-params")} style={{ padding: "8px 0", cursor: "pointer", fontSize: "14px", color: activeSection === "response-params" ? "var(--text-accent)" : "var(--text-secondary)", transition: "all 0.2s" }}>Response Parameters</li>
                                    <li className={activeSection === "request-example" ? "active" : ""} onClick={() => scrollToSection("request-example")} style={{ padding: "8px 0", cursor: "pointer", fontSize: "14px", color: activeSection === "request-example" ? "var(--text-accent)" : "var(--text-secondary)", transition: "all 0.2s" }}>Request Example</li>
                                    <li className={activeSection === "response-example" ? "active" : ""} onClick={() => scrollToSection("response-example")} style={{ padding: "8px 0", cursor: "pointer", fontSize: "14px", color: activeSection === "response-example" ? "var(--text-accent)" : "var(--text-secondary)", transition: "all 0.2s" }}>Response Example</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
