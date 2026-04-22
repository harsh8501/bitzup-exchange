import { useState, useEffect, useRef } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FiCopy, FiCheck } from "react-icons/fi";

export const GetDepositRecords = () => {
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
    "rows": [
      {
        "coin": "USDT",
        "chain": "TRX",
        "amount": "999.0496",
        "txID": "04bf3fbad2fc85b107a42cfdc5ff83110092b606ca754efa0f032f8b94b3262e",
        "status": 3,
        "toAddress": "TDGYpm5zPacnEqKV34TJPuhJhHom9hcXAy",
        "tag": "",
        "depositFee": "",
        "successAt": "1742728163000",
        "confirmations": "50",
        "txIndex": "0",
        "blockHash": "000000000436ab4dabc8a4a87beb2262d2d87f6761a825494c4f1d5ae11b27e8",
        "batchReleaseLimit": "-1",
        "depositType": "0",
        "fromAddress": "TJ7hhYhVhaxNx6BPyq7yFpqZrQULL3JSdb",
        "taxDepositRecordsId": "0",
        "taxStatus": 0,
        "id": "160237231"
      }
    ],
    "nextPageCursor": "eyJtaW5JRCI6MTYwMjM3MjMxLCJtYXhJRCI6MTYwMjM3MjMxfQ=="
  },
  "retExtInfo": {},
  "time": 1750798211884
}`;

    const codeMap = {
        HTTP: `GET /v5/asset/deposit/query-record?coin=USDT&limit=1 HTTP/1.1
Host: api.bitzup.com
Authorization: Bearer <YOUR_API_KEY>`,

    Python: `import requests

url = "https://api.bitzup.com/v5/asset/deposit/query-record?coin=USDT&limit=1"
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
    url := "https://api.bitzup.com/v5/asset/deposit/query-record?coin=USDT&limit=1"

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

public class GetDepositRecordsDemo {
    public static void main(String[] args) throws Exception {
        String url = "https://api.bitzup.com/v5/asset/deposit/query-record?coin=USDT&limit=1";

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

async function getDepositRecords() {
    try {
        const response = await axios.get(
            'https://api.bitzup.com/v5/asset/deposit/query-record',
            {
                params: {
                    coin: 'USDT',
                    limit: 1
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

getDepositRecords();`,
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
                <span className="kline-market">Asset</span>
                <span className="mx-2">
                  <IoIosArrowForward className="kline-arrow" />
                </span>
                <span className="pill">Deposit Records</span>
              </div>

              {/* Title */}
              <h1 className="api-title">Get Deposit Records (on-chain)</h1>
              <p className="api-desc">
                Query deposit records
              </p>

              {/* HTTP REQUEST */}
              <h3 className="top-req-text" id="http">
                HTTP Request
              </h3>
              <div className="http-path">
                <span className="method get">GET</span>
                <span className="path">/v5/asset/deposit/query-record</span>
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
                      <td>coin</td>
                      <td>false</td>
                      <td>string</td>
                      <td>Coin name</td>
                    </tr>
                    <tr>
                      <td>startTime</td>
                      <td>false</td>
                      <td>integer</td>
                      <td>Start timestamp (ms)</td>
                    </tr>
                    <tr>
                      <td>endTime</td>
                      <td>false</td>
                      <td>integer</td>
                      <td>End timestamp (ms)</td>
                    </tr>
                    <tr>
                      <td>limit</td>
                      <td>false</td>
                      <td>integer</td>
                      <td>Limit for data size per page. [1, 50]. Default: 50</td>
                    </tr>
                    <tr>
                      <td>cursor</td>
                      <td>false</td>
                      <td>string</td>
                      <td>Cursor. Used for pagination</td>
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
                      <td>rows</td>
                      <td>array</td>
                      <td>Object</td>
                    </tr>
                    <tr>
                      <td>&gt; coin</td>
                      <td>string</td>
                      <td>Coin name</td>
                    </tr>
                    <tr>
                      <td>&gt; chain</td>
                      <td>string</td>
                      <td>Chain name</td>
                    </tr>
                    <tr>
                      <td>&gt; amount</td>
                      <td>string</td>
                      <td>Amount</td>
                    </tr>
                    <tr>
                      <td>&gt; txID</td>
                      <td>string</td>
                      <td>Transaction ID</td>
                    </tr>
                    <tr>
                      <td>&gt; status</td>
                      <td>integer</td>
                      <td>Deposit status</td>
                    </tr>
                    <tr>
                      <td>&gt; toAddress</td>
                      <td>string</td>
                      <td>Target deposit address</td>
                    </tr>
                    <tr>
                      <td>&gt; tag</td>
                      <td>string</td>
                      <td>Tag of deposit target address</td>
                    </tr>
                    <tr>
                      <td>&gt; depositFee</td>
                      <td>string</td>
                      <td>Deposit fee</td>
                    </tr>
                    <tr>
                      <td>&gt; successAt</td>
                      <td>string</td>
                      <td>Last updated time</td>
                    </tr>
                    <tr>
                      <td>&gt; confirmations</td>
                      <td>string</td>
                      <td>Number of confirmation blocks</td>
                    </tr>
                    <tr>
                      <td>&gt; txIndex</td>
                      <td>string</td>
                      <td>Transaction sequence number</td>
                    </tr>
                    <tr>
                      <td>&gt; blockHash</td>
                      <td>string</td>
                      <td>Hash number on the chain</td>
                    </tr>
                    <tr>
                      <td>&gt; batchReleaseLimit</td>
                      <td>string</td>
                      <td>The maximum amount for a single release</td>
                    </tr>
                    <tr>
                      <td>&gt; depositType</td>
                      <td>string</td>
                      <td>The deposit type. <span className="pill">0</span>: normal deposit, <span className="pill">10</span>: deposit transferred from a Bitzup address, <span className="pill">20</span>: structural product deposit</td>
                    </tr>
                    <tr>
                      <td>&gt; fromAddress</td>
                      <td>string</td>
                      <td>The sender address. If not applicable, returns an empty string</td>
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
