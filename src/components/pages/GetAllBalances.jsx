import { useState, useEffect, useRef } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FiCopy, FiCheck } from "react-icons/fi";

export const GetAllBalances = () => {
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

        container.scrollTo({
            top,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        if (!contentRef.current) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                root: contentRef.current,
                rootMargin: "-30% 0px -60% 0px",
                threshold: 0,
            }
        );

        sections.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    const responseCode = `{
  "retCode": 0,
  "retMsg": "success",
  "result": {
    "memberId": "XXXX",
    "accountType": "FUND",
    "balance": [
      {
        "coin": "USDC",
        "transferBalance": "0",
        "walletBalance": "0",
        "bonus": ""
      }
    ]
  },
  "retExtInfo": {},
  "time": 1675866354913
}`;

    const codeMap = {
        HTTP: `GET /v5/asset/transfer/query-account-coins-balance?accountType=FUND&coin=USDC HTTP/1.1
Host: api.bitzup.com
Authorization: Bearer <YOUR_API_KEY>`,

    Python: `import requests

url = "https://api.bitzup.com/v5/asset/transfer/query-account-coins-balance?accountType=FUND&coin=USDC"
headers = {
    "Authorization": "Bearer <YOUR_API_KEY>"
}

try:
    response = requests.get(url, headers=headers)
    print(response.json())
except requests.exceptions.RequestException as e:
    print("Error:", str(e))`,

    Go: `package main

import (
    "fmt"
    "io"
    "net/http"
    "time"
)

func main() {
    url := "https://api.bitzup.com/v5/asset/transfer/query-account-coins-balance?accountType=FUND&coin=USDC"

    req, err := http.NewRequest("GET", url, nil)
    if err != nil {
        fmt.Println(err)
        return
    }
    req.Header.Add("Authorization", "Bearer <YOUR_API_KEY>")

    client := &http.Client{Timeout: 10 * time.Second}
    res, err := client.Do(req)
    if err != nil {
        fmt.Println(err)
        return
    }
    defer res.Body.Close()

    resBody, _ := io.ReadAll(res.Body)
    fmt.Println(string(resBody))
}`,

    Java: `import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

public class GetAllBalancesDemo {
    public static void main(String[] args) throws Exception {
        String url = "https://api.bitzup.com/v5/asset/transfer/query-account-coins-balance?accountType=FUND&coin=USDC";

        HttpClient client = HttpClient.newHttpClient();
        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create(url))
                .header("Authorization", "Bearer <YOUR_API_KEY>")
                .GET()
                .build();

        HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
        System.out.println(response.body());
    }
}`,

    Node: `const axios = require('axios');

async function getAllBalances() {
    try {
        const response = await axios.get(
            'https://api.bitzup.com/v5/asset/transfer/query-account-coins-balance',
            {
                params: {
                    accountType: 'FUND',
                    coin: 'USDC'
                },
                headers: {
                    'Authorization': 'Bearer <YOUR_API_KEY>'
                }
            }
        );
        console.log(response.data);
    } catch (error) {
        console.error(error.message);
    }
}

getAllBalances();`,
  };

  return (
    <>
      <div className="container-fluid p-0">
        <div className="api-layout">
          <div className="row">
            {/* LEFT CONTENT */}
            <div className="col-lg-9 col-md-12 api-content" ref={contentRef}>
              {/* Breadcrumb */}
              <div className="breadcrumb mb-4">
                <span className="text-muted">Asset</span>
                <span className="mx-2">
                  <IoIosArrowForward className="kline-arrow" />
                </span>
                <span className="pill">All Balances</span>
              </div>

              {/* Title */}
              <h1 className="api-title" style={{ fontSize: "32px", marginBottom: "16px" }}>Get All Coins Balance</h1>
              <p className="api-desc">
                You could get all coin balance of all account types under the master account, and sub account.
              </p>

              {/* HTTP REQUEST */}
              <h3 className="top-req-text" id="http" style={{ borderBottom: "1px solid var(--border-color)", paddingBottom: "12px", marginTop: "40px" }}>
                HTTP Request
              </h3>
              <div className="http-path" style={{ background: "var(--bg-card)", padding: "12px 16px", borderRadius: "8px", display: "flex", gap: "12px", alignItems: "center", marginBottom: "32px" }}>
                <span className="method" style={{ padding: "4px 8px", borderRadius: "4px" }}>GET</span>
                <span className="path" style={{ fontWeight: "500", letterSpacing: "0.5px" }}>/v5/asset/transfer/query-account-coins-balance</span>
              </div>

              <h3 className="top-req-text" id="request-params">
                Request Parameters
              </h3>
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
                      <td>accountType</td>
                      <td>true</td>
                      <td>string</td>
                      <td>Account type</td>
                    </tr>
                    <tr>
                      <td>coin</td>
                      <td>false</td>
                      <td>string</td>
                      <td>Coin name. Query all coins if not passed. Can query multiple coins, separated by comma.</td>
                    </tr>
                    <tr>
                      <td>withBonus</td>
                      <td>false</td>
                      <td>integer</td>
                      <td>Whether query bonus or not. <code>0</code>: no, <code>1</code>: yes. Default is 0</td>
                    </tr>
                    <tr>
                      <td>withSubId</td>
                      <td>false</td>
                      <td>integer</td>
                      <td>Whether query the balance of sub account or not. <code>0</code>: no, <code>1</code>: yes</td>
                    </tr>
                    <tr>
                      <td>memberId</td>
                      <td>false</td>
                      <td>string</td>
                      <td>Sub UID. To query the sub UID sub account balance, both <code>withSubId=1</code> and <code>accountType</code> need to be specified</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="top-req-text" id="response-params">
                Response Parameters
              </h3>
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
                    <tr>
                      <td>memberId</td>
                      <td>string</td>
                      <td>User ID</td>
                    </tr>
                    <tr>
                      <td>accountType</td>
                      <td>string</td>
                      <td>Account type</td>
                    </tr>
                    <tr>
                      <td>balance</td>
                      <td>array</td>
                      <td>Object</td>
                    </tr>
                    <tr>
                      <td>&gt; coin</td>
                      <td>string</td>
                      <td>Coin name</td>
                    </tr>
                    <tr>
                      <td>&gt; walletBalance</td>
                      <td>string</td>
                      <td>Wallet balance</td>
                    </tr>
                    <tr>
                      <td>&gt; transferBalance</td>
                      <td>string</td>
                      <td>Transferable balance</td>
                    </tr>
                    <tr>
                      <td>&gt; bonus</td>
                      <td>string</td>
                      <td>The bonus</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* REQUEST EXAMPLE */}
              <h3 className="top-req-text" id="request-example">
                Request Example
              </h3>

              <div className="lang-tabs">
                {["HTTP", "Python", "Go", "Java", "Node"].map((t) => (
                  <button
                    key={t}
                    className={lang === t ? "active" : ""}
                    onClick={() => setLang(t)}
                  >
                    {t}
                  </button>
                ))}
              </div>

              <div className="api-code-box position-relative" style={{ background: "var(--bg-code)", padding: "20px", borderRadius: "8px", border: "1px solid var(--border-color)", marginBottom: "40px" }}>
                {/* COPY ICON */}
                <button className="copy-btn" onClick={handleCopy} style={{ position: "absolute", top: "12px", right: "12px", background: "transparent", border: "none", color: "var(--text-secondary)", cursor: "pointer" }}>
                  {copied ? <FiCheck color="var(--text-accent)" /> : <FiCopy />}
                </button>

                <pre style={{ margin: 0 }}>
                  <code style={{ color: "#e6edf3", fontSize: "14px", lineHeight: "1.5" }}>{codeMap[lang]}</code>
                </pre>
              </div>

              {/* RESPONSE EXAMPLE */}
              <h3 className="top-req-text" id="response-example">
                Response Example
              </h3>
              <div className="api-code-box position-relative" style={{ background: "var(--bg-code)", padding: "20px", borderRadius: "8px", border: "1px solid var(--border-color)", marginBottom: "40px" }}>
                <button className="copy-btn" onClick={handleCopyRes} style={{ position: "absolute", top: "12px", right: "12px", background: "transparent", border: "none", color: "var(--text-secondary)", cursor: "pointer" }}>
                  {copiedRes ? <FiCheck color="var(--text-accent)" /> : <FiCopy />}
                </button>
                <pre style={{ margin: 0 }}>
                  <code style={{ color: "#e6edf3", fontSize: "14px", lineHeight: "1.5" }}>{responseCode}</code>
                </pre>
              </div>
            </div>

            {/* RIGHT SIDEBAR */}
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
