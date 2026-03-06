import { useState, useEffect, useRef } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FiCopy, FiCheck } from "react-icons/fi";

export const GetUSDCSessionSettlement = () => {
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
    "nextPageCursor": "116952%3A1%2C116952%3A1",
    "category": "linear",
    "list": [
      {
        "realisedPnl": "-71.28",
        "symbol": "BTCPERP",
        "side": "Buy",
        "markPrice": "16620",
        "size": "1.5",
        "createdTime": "1672214400000",
        "sessionAvgPrice": "16620"
      }
    ]
  },
  "retExtInfo": {},
  "time": 1672284884285
}`;

    const codeMap = {
        HTTP: `GET /v5/asset/settlement-record?category=linear HTTP/1.1
Host: api.bitzup.com
Authorization: Bearer <YOUR_API_KEY>`,

    Python: `import requests

url = "https://api.bitzup.com/v5/asset/settlement-record?category=linear"
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
    url := "https://api.bitzup.com/v5/asset/settlement-record?category=linear"

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

public class GetUSDCSettlementDemo {
    public static void main(String[] args) throws Exception {
        String url = "https://api.bitzup.com/v5/asset/settlement-record?category=linear";

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

async function getUsdcSettlement() {
    try {
        const response = await axios.get(
            'https://api.bitzup.com/v5/asset/settlement-record',
            {
                params: {
                    category: 'linear'
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

getUsdcSettlement();`,
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
                <span className="pill">Get USDC Session Settlement (2 years)</span>
              </div>

              {/* Title */}
              <h1 className="api-title">Get USDC Session Settlement (2 years)</h1>
              <p className="api-desc">
                Query session settlement records of USDC perpetual and futures
              </p>

              {/* HTTP REQUEST */}
              <h3 className="top-req-text" id="http">
                HTTP Request
              </h3>
              <div className="http-path">
                <span className="method get">GET</span>
                <span className="path">/v5/asset/settlement-record</span>
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
                      <td>category</td>
                      <td>true</td>
                      <td>string</td>
                      <td>Product type. <code>linear</code></td>
                    </tr>
                    <tr>
                      <td>symbol</td>
                      <td>false</td>
                      <td>string</td>
                      <td>Symbol name. e.g., <code>BTCPERP</code></td>
                    </tr>
                    <tr>
                      <td>startTime</td>
                      <td>false</td>
                      <td>integer</td>
                      <td>Start timestamp (ms).<ul><li>Not passed: return 30 days by default</li><li>Only startTime passed: return range [startTime, startTime + 30 days]</li><li>Both passed: endTime - startTime &lt;= 30 days</li></ul></td>
                    </tr>
                    <tr>
                      <td>endTime</td>
                      <td>false</td>
                      <td>integer</td>
                      <td>End timestamp (ms). Only endTime passed: return range [endTime - 30 days, endTime]</td>
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
                      <td>category</td>
                      <td>string</td>
                      <td>Product type</td>
                    </tr>
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
                      <td>&gt; side</td>
                      <td>string</td>
                      <td><code>Buy</code>, <code>Sell</code></td>
                    </tr>
                    <tr>
                      <td>&gt; size</td>
                      <td>string</td>
                      <td>Position size</td>
                    </tr>
                    <tr>
                      <td>&gt; sessionAvgPrice</td>
                      <td>string</td>
                      <td>Settlement price</td>
                    </tr>
                    <tr>
                      <td>&gt; markPrice</td>
                      <td>string</td>
                      <td>Mark price</td>
                    </tr>
                    <tr>
                      <td>&gt; realisedPnl</td>
                      <td>string</td>
                      <td>Realised Pnl</td>
                    </tr>
                    <tr>
                      <td>&gt; createdTime</td>
                      <td>string</td>
                      <td>Created time (ms)</td>
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

              <div className="api-code-box position-relative">
                {/* COPY ICON */}
                <button className="copy-btn" onClick={handleCopy}>
                  {copied ? <FiCheck /> : <FiCopy />}
                </button>

                <pre>
                  <code>{codeMap[lang]}</code>
                </pre>
              </div>

              {/* RESPONSE EXAMPLE */}
              <h3 className="top-req-text" id="response-example">
                Response Example
              </h3>
              <div className="api-code-box position-relative">
                <button className="copy-btn" onClick={handleCopyRes}>
                  {copiedRes ? <FiCheck /> : <FiCopy />}
                </button>
                <pre>
                  <code>{responseCode}</code>
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
