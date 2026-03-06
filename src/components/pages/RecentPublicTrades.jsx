import { useState, useEffect, useRef } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FiCopy, FiCheck } from "react-icons/fi";

export const RecentPublicTrades = () => {
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
    "category": "spot",
    "list": [
      {
        "execId": "2100000000007764263",
        "symbol": "BTCUSDT",
        "price": "16618.49",
        "size": "0.00012",
        "side": "Buy",
        "time": "1672052955758",
        "isBlockTrade": false,
        "isRPITrade": true,
        "seq":"123456"
      }
    ]
  },
  "retExtInfo": {},
  "time": 1672053054358
}`;

  const codeMap = {
    HTTP: `GET /v5/market/recent-trade?category=spot&symbol=BTCUSDT&limit=1 HTTP/1.1
Host: api.bitzup.com`,

    Python: `import requests

url = "https://api.bitzup.com/v5/market/recent-trade"
params = {
    "category": "spot",
    "symbol": "BTCUSDT",
    "limit": "1"
}

try:
    response = requests.get(url, params=params)
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
    url := "https://api.bitzup.com/v5/market/recent-trade?category=spot&symbol=BTCUSDT&limit=1"

    req, err := http.NewRequest("GET", url, nil)
    if err != nil {
        fmt.Println(err)
        return
    }

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

public class GetRecentTradesDemo {
    public static void main(String[] args) throws Exception {
        String url = "https://api.bitzup.com/v5/market/recent-trade?category=spot&symbol=BTCUSDT&limit=1";

        HttpClient client = HttpClient.newHttpClient();
        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create(url))
                .GET()
                .build();

        HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
        System.out.println(response.body());
    }
}`,

    Node: `const axios = require('axios');

async function getRecentTrades() {
    try {
        const response = await axios.get(
            'https://api.bitzup.com/v5/market/recent-trade',
            {
                params: {
                    category: 'spot',
                    symbol: 'BTCUSDT',
                    limit: 1
                }
            }
        );
        console.log(response.data);
    } catch (error) {
        console.error(error.message);
    }
}

getRecentTrades();`,
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
                <span className="kline-market">Market</span>
                <span className="mx-2">
                  <IoIosArrowForward className="kline-arrow" />
                </span>
                <span className="pill">Get Recent Public Trades</span>
              </div>

              {/* Title */}
              <h1 className="api-title">Get Recent Public Trades</h1>
              <p className="api-desc">
                Query recent public trading history in the exchange.
              </p>

              {/* HTTP REQUEST */}
              <h3 className="top-req-text" id="http">
                HTTP Request
              </h3>
              <div className="http-path">
                <span className="method get">GET</span>
                <span className="path">/v5/market/recent-trade</span>
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
                      <td>Product type. <code>spot</code>, <code>linear</code>, <code>inverse</code>, <code>option</code></td>
                    </tr>
                    <tr>
                      <td>symbol</td>
                      <td>false</td>
                      <td>string</td>
                      <td>Symbol name. required for spot/linear/inverse. optional for option. If optional field is not passed, return BTC data by default.</td>
                    </tr>
                    <tr>
                      <td>baseCoin</td>
                      <td>false</td>
                      <td>string</td>
                      <td>Base coin. Apply to <code>option</code> only.</td>
                    </tr>
                    <tr>
                      <td>optionType</td>
                      <td>false</td>
                      <td>string</td>
                      <td>Option type. <code>Call</code>, <code>Put</code></td>
                    </tr>
                    <tr>
                      <td>limit</td>
                      <td>false</td>
                      <td>integer</td>
                      <td>Limit for data size per page.<br/>
                      spot: [1,60], default: 60<br/>
                      others: [1,1000], default: 500
                      </td>
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
                      <td>An array of objects</td>
                    </tr>
                    <tr>
                      <td>&gt; execId</td>
                      <td>string</td>
                      <td>Execution ID</td>
                    </tr>
                    <tr>
                      <td>&gt; symbol</td>
                      <td>string</td>
                      <td>Symbol name</td>
                    </tr>
                    <tr>
                      <td>&gt; price</td>
                      <td>string</td>
                      <td>Trade price</td>
                    </tr>
                    <tr>
                      <td>&gt; size</td>
                      <td>string</td>
                      <td>Trade size</td>
                    </tr>
                    <tr>
                      <td>&gt; side</td>
                      <td>string</td>
                      <td>Side of taker. <code>Buy</code>, <code>Sell</code></td>
                    </tr>
                    <tr>
                      <td>&gt; time</td>
                      <td>string</td>
                      <td>Trade time (ms)</td>
                    </tr>
                    <tr>
                      <td>&gt; isBlockTrade</td>
                      <td>boolean</td>
                      <td>Whether the trade is block trade</td>
                    </tr>
                    <tr>
                      <td>&gt; isRPITrade</td>
                      <td>boolean</td>
                      <td>Whether the trade is RPI trade. Invalid for <code>option</code>.</td>
                    </tr>
                    <tr>
                      <td>&gt; seq</td>
                      <td>string</td>
                      <td>Cross sequence. Invalid for <code>option</code>.</td>
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
