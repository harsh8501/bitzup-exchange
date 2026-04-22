import { useState, useEffect, useRef } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FiCopy, FiCheck } from "react-icons/fi";

export const GetTransactionLog = () => {
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
  "retMsg": "OK",
  "result": {
    "nextPageCursor": "21963%3A1%2C14954%3A1",
    "list": [
      {
        "transSubType": "",
        "id": "592324_XRPUSDT_161440249321",
        "symbol": "XRPUSDT",
        "side": "Buy",
        "funding": "-0.003676",
        "orderLinkId": "",
        "orderId": "1672128000-8-592324-1-2",
        "fee": "0.00000000",
        "change": "-0.003676",
        "cashFlow": "0",
        "transactionTime": "1672128000000",
        "type": "SETTLEMENT",
        "feeRate": "0.0001",
        "bonusChange": "",
        "size": "100",
        "qty": "100",
        "cashBalance": "5086.55825002",
        "currency": "USDT",
        "category": "linear",
        "tradePrice": "0.3676",
        "tradeId": "534c0003-4bf7-486f-aa02-78cee36825e4",
        "extraFees": ""
      }
    ]
  },
  "retExtInfo": {},
  "time": 1672132481405
}`;

    const codeMap = {
        HTTP: `GET /v5/account/transaction-log?accountType=UNIFIED&category=linear&currency=USDT HTTP/1.1
Host: api.bitzup.com
Authorization: Bearer <YOUR_API_KEY>`,

    Python: `import requests

url = "https://api.bitzup.com/v5/account/transaction-log"
params = {
    "accountType": "UNIFIED",
    "category": "linear",
    "currency": "USDT"
}
headers = {
    "Authorization": "Bearer <YOUR_API_KEY>"
}

try:
    response = requests.get(url, headers=headers, params=params)
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
    url := "https://api.bitzup.com/v5/account/transaction-log?accountType=UNIFIED&category=linear&currency=USDT"

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

public class GetTransactionLogDemo {
    public static void main(String[] args) throws Exception {
        String url = "https://api.bitzup.com/v5/account/transaction-log?accountType=UNIFIED&category=linear&currency=USDT";

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

async function getTransactionLog() {
    try {
        const response = await axios.get(
            'https://api.bitzup.com/v5/account/transaction-log',
            {
                params: {
                    accountType: 'UNIFIED',
                    category: 'linear',
                    currency: 'USDT'
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

getTransactionLog();`,
  };

  return (
    <>
      <div className="container-fluid p-0">
        <div className="api-layout">
          <div className="row">
            {/* LEFT CONTENT */}
            <div className="col-lg-9 col-md-8 api-content" ref={contentRef}>
              {/* Breadcrumb */}
              <div className="breadcrumb mb-4">
                <span className="kline-market">Account</span>
                <span className="mx-2">
                  <IoIosArrowForward className="kline-arrow" />
                </span>
                <span className="pill">Get Transaction Log (UTA)</span>
              </div>

              {/* Title */}
              <h1 className="api-title">Get Transaction Log (UTA)</h1>
              <p className="api-desc">
                Query for transaction logs in your Unified account. It supports up to 2 years worth of data.
              </p>

              {/* HTTP REQUEST */}
              <h3 className="top-req-text" id="http">
                HTTP Request
              </h3>
              <div className="http-path">
                <span className="method get">GET</span>
                <span className="path">/v5/account/transaction-log</span>
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
                      <td>false</td>
                      <td>string</td>
                      <td>Account Type. <span className="pill">UNIFIED</span></td>
                    </tr>
                    <tr>
                      <td>category</td>
                      <td>false</td>
                      <td>string</td>
                      <td>Product type. <span className="pill">linear</span></td>
                    </tr>
                    <tr>
                      <td>currency</td>
                      <td>false</td>
                      <td>string</td>
                      <td>Currency</td>
                    </tr>
                    <tr>
                      <td>baseCoin</td>
                      <td>false</td>
                      <td>string</td>
                      <td>Base coin</td>
                    </tr>
                    <tr>
                      <td>type</td>
                      <td>false</td>
                      <td>string</td>
                      <td>Types of transaction log.</td>
                    </tr>
                    <tr>
                      <td>startTime</td>
                      <td>false</td>
                      <td>integer</td>
                      <td>The start timestamp (ms)</td>
                    </tr>
                    <tr>
                      <td>endTime</td>
                      <td>false</td>
                      <td>integer</td>
                      <td>The end timestamp (ms)</td>
                    </tr>
                    <tr>
                      <td>limit</td>
                      <td>false</td>
                      <td>integer</td>
                      <td>Limit for data size per page. [1, 50]. Default: 20</td>
                    </tr>
                    <tr>
                      <td>cursor</td>
                      <td>false</td>
                      <td>string</td>
                      <td>Cursor. Use the <span className="pill">nextPageCursor</span> token from the response to retrieve the next page of the result set</td>
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
                      <td>list</td>
                      <td>array</td>
                      <td>Object</td>
                    </tr>
                    <tr>
                      <td>&gt; symbol</td>
                      <td>string</td>
                      <td>Symbol name</td>
                    </tr>
                    <tr>
                      <td>&gt; category</td>
                      <td>string</td>
                      <td>Product type</td>
                    </tr>
                    <tr>
                      <td>&gt; side</td>
                      <td>string</td>
                      <td>Side. <span className="pill">Buy</span>, <span className="pill">Sell</span>, <span className="pill">None</span></td>
                    </tr>
                    <tr>
                      <td>&gt; transactionTime</td>
                      <td>string</td>
                      <td>Transaction timestamp (ms)</td>
                    </tr>
                    <tr>
                      <td>&gt; type</td>
                      <td>string</td>
                      <td>Type</td>
                    </tr>
                    <tr>
                      <td>&gt; qty</td>
                      <td>string</td>
                      <td>Quantity</td>
                    </tr>
                    <tr>
                      <td>&gt; size</td>
                      <td>string</td>
                      <td>Size</td>
                    </tr>
                    <tr>
                      <td>&gt; currency</td>
                      <td>string</td>
                      <td>Currency</td>
                    </tr>
                    <tr>
                      <td>&gt; tradePrice</td>
                      <td>string</td>
                      <td>Trade price</td>
                    </tr>
                    <tr>
                      <td>&gt; funding</td>
                      <td>string</td>
                      <td>Funding fee</td>
                    </tr>
                    <tr>
                      <td>&gt; fee</td>
                      <td>string</td>
                      <td>Trading fee</td>
                    </tr>
                    <tr>
                      <td>&gt; cashFlow</td>
                      <td>string</td>
                      <td>Cash flow</td>
                    </tr>
                    <tr>
                      <td>&gt; change</td>
                      <td>string</td>
                      <td>Change</td>
                    </tr>
                    <tr>
                      <td>&gt; cashBalance</td>
                      <td>string</td>
                      <td>Cash balance</td>
                    </tr>
                    <tr>
                      <td>&gt; feeRate</td>
                      <td>string</td>
                      <td>Fee rate</td>
                    </tr>
                    <tr>
                      <td>&gt; bonusChange</td>
                      <td>string</td>
                      <td>Bonus change</td>
                    </tr>
                    <tr>
                      <td>&gt; tradeId</td>
                      <td>string</td>
                      <td>Trade ID</td>
                    </tr>
                    <tr>
                      <td>&gt; orderId</td>
                      <td>string</td>
                      <td>Order ID</td>
                    </tr>
                    <tr>
                      <td>&gt; orderLinkId</td>
                      <td>string</td>
                      <td>User customised order ID</td>
                    </tr>
                    <tr>
                      <td>nextPageCursor</td>
                      <td>string</td>
                      <td>Cursor. Used for pagination</td>
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

              <div className="api-code-box position-relative" style={{ marginBottom: "40px" }}>
                {/* COPY ICON */}
                <button className="copy-btn" onClick={handleCopy}>
                  {copied ? <FiCheck /> : <FiCopy />}
                </button>

                <pre>
                  {codeMap[lang]}
                </pre>
              </div>

              {/* RESPONSE EXAMPLE */}
              <h3 className="top-req-text" id="response-example">
                Response Example
              </h3>
              <div className="api-code-box position-relative" style={{ marginBottom: "40px" }}>
                <button className="copy-btn" onClick={handleCopyRes}>
                  {copiedRes ? <FiCheck /> : <FiCopy />}
                </button>
                <pre>
                  {responseCode}
                </pre>
              </div>
            </div>

            {/* RIGHT SIDEBAR */}
            <div className="col-lg-3 col-md-4 d-none d-md-block">
              <div className="api-sidebar">
                <ul>
                  <li
                    className={activeSection === "http" ? "active" : ""}
                    onClick={() => scrollToSection("http")}
                  >
                    HTTP Request
                  </li>
                  <li
                    className={
                      activeSection === "request-params" ? "active" : ""
                    }
                    onClick={() => scrollToSection("request-params")}
                  >
                    Request Parameters
                  </li>
                  <li
                    className={
                      activeSection === "response-params" ? "active" : ""
                    }
                    onClick={() => scrollToSection("response-params")}
                  >
                    Response Parameters
                  </li>
                  <li
                    className={
                      activeSection === "request-example" ? "active" : ""
                    }
                    onClick={() => scrollToSection("request-example")}
                  >
                    Request Example
                  </li>
                  <li
                    className={
                      activeSection === "response-example" ? "active" : ""
                    }
                    onClick={() => scrollToSection("response-example")}
                  >
                    Response Example
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
