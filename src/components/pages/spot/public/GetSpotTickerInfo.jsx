import { useState, useEffect, useRef } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FiCopy, FiCheck } from "react-icons/fi";
import { Link } from "react-router-dom";

export const GetSpotTickerInfo = () => {
  const contentRef = useRef(null);

  const [lang, setLang] = useState("HTTP");
  const [copied, setCopied] = useState(false);
  const [copiedRes, setCopiedRes] = useState(false);

  const [activeSection, setActiveSection] = useState("http");

  const HEADER_OFFSET = 120;

  const codeMap = {
    HTTP: `curl -s 'https://api.bitzup.com/market/ticker?symbol=BTCUSDT'`,
    Python: `import requests

url = "https://api.bitzup.com/market/ticker"
params = {
    "symbol": "BTCUSDT"
}

response = requests.get(url, params=params)
print(response.json())`,
    Go: `package main

import (
    "fmt"
    "io"
    "net/http"
)

func main() {
    url := "https://api.bitzup.com/market/ticker?symbol=BTCUSDT"

    req, err := http.NewRequest("GET", url, nil)
    if err != nil {
        fmt.Println(err)
        return
    }

    client := &http.Client{}
    res, err := client.Do(req)
    if err != nil {
        fmt.Println(err)
        return
    }
    defer res.Body.Close()

    body, _ := io.ReadAll(res.Body)
    fmt.Println(string(body))
}`,
    Java: `import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

public class GetSpotTickerInfoDemo {
    public static void main(String[] args) throws Exception {
        String url = "https://api.bitzup.com/market/ticker?symbol=BTCUSDT";

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

async function getSpotTickerInfo() {
    try {
        const response = await axios.get('https://api.bitzup.com/market/ticker', {
            params: { symbol: 'BTCUSDT' }
        });
        console.log(response.data);
    } catch (error) {
        console.error(error.message);
    }
}

getSpotTickerInfo();`,
  };

  const responseCode = `{
  "code": "00000",
  "msg": "success",
  "requestTime": 1695808949356,
  "data": [
    {
      "symbol": "BTCUSDT",
      "high24h": "37775.65",
      "open": "35134.2",
      "low24h": "34413.1",
      "lastPr": "34413.1",
      "quoteVolume": "0",
      "baseVolume": "0",
      "usdtVolume": "0",
      "bidPr": "0",
      "askPr": "0",
      "bidSz": "0.0663",
      "askSz": "0.0119",
      "openUtc": "23856.72",
      "ts": "1625125755277",
      "changeUtc24h": "0.00301",
      "change24h": "0.00069"
    }
  ]
}`;

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

  return (
    <div className="container-fluid p-0">
      <div className="api-layout">
        <div className="row">
          {/* LEFT CONTENT */}
          <div className="col-lg-9 col-md-8 api-content" ref={contentRef}>
            {/* Breadcrumb */}
            <div className="breadcrumb mb-4">
              <span className="kline-market">Spot</span>
              <span className="mx-2">
                <IoIosArrowForward className="kline-arrow" />
              </span>
              <span className="kline-market">Market</span>
              <span className="mx-2">
                <IoIosArrowForward className="kline-arrow" />
              </span>
              <span className="pill">Get Ticker Information</span>
            </div>

            {/* Title */}
            <h1 className="api-title">Get Ticker Information</h1>
            <div className="mb-3">
              <span className="badge bg-secondary text-light">Frequency limit: 20 times/1s (IP)</span>
            </div>
            <p className="api-desc">
              Get Ticker Information, Supports both single and batch queries.
            </p>

            {/* HTTP REQUEST */}
            <h3 className="top-req-text" id="http">
              HTTP Request
            </h3>
            <div className="http-path mb-4">
              <span className="method get">GET</span>
              <span className="path">/market/ticker</span>
            </div>

            {/* REQUEST PARAMETERS */}
            <h3 className="top-req-text" id="request-params">
              Request Parameters
            </h3>
            <div className="api-table-box mb-4">
              <table className="table table-striped api-table mb-0">
                <thead>
                  <tr>
                    <th>Parameter</th>
                    <th>Type</th>
                    <th>Required</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>symbol</td>
                    <td>String</td>
                    <td>Yes</td>
                    <td>trading pair name, e.g. BTCUSDT.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* RESPONSE PARAMETERS */}
            <h3 className="top-req-text" id="response-params">
              Response Parameters
            </h3>
            <div className="api-table-box mb-4">
              <table className="table table-striped api-table mb-0">
                <thead>
                  <tr>
                    <th>Parameter</th>
                    <th>Type</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>code</td>
                    <td>String</td>
                    <td>Response code (e.g., <span className="pill">00000</span> for success)</td>
                  </tr>
                  <tr>
                    <td>msg</td>
                    <td>String</td>
                    <td>Response message (e.g., <span className="pill">success</span>)</td>
                  </tr>
                  <tr>
                    <td>requestTime</td>
                    <td>Number</td>
                    <td>Request timestamp in milliseconds</td>
                  </tr>
                  <tr>
                    <td>data</td>
                    <td>Array</td>
                    <td>Tickers list</td>
                  </tr>
                  <tr>
                    <td>&gt; symbol</td>
                    <td>String</td>
                    <td>Trading pair</td>
                  </tr>
                  <tr>
                    <td>&gt; high24h</td>
                    <td>String</td>
                    <td>24h highest price</td>
                  </tr>
                  <tr>
                    <td>&gt; open</td>
                    <td>String</td>
                    <td>24h open price</td>
                  </tr>
                  <tr>
                    <td>&gt; lastPr</td>
                    <td>String</td>
                    <td>Latest price</td>
                  </tr>
                  <tr>
                    <td>&gt; low24h</td>
                    <td>String</td>
                    <td>24h lowest price</td>
                  </tr>
                  <tr>
                    <td>&gt; quoteVolume</td>
                    <td>String</td>
                    <td>Trading volume in quote currency</td>
                  </tr>
                  <tr>
                    <td>&gt; baseVolume</td>
                    <td>String</td>
                    <td>Trading volume in base currency</td>
                  </tr>
                  <tr>
                    <td>&gt; usdtVolume</td>
                    <td>String</td>
                    <td>Trading volume in USDT</td>
                  </tr>
                  <tr>
                    <td>&gt; bidPr</td>
                    <td>String</td>
                    <td>Bid 1 price</td>
                  </tr>
                  <tr>
                    <td>&gt; askPr</td>
                    <td>String</td>
                    <td>Ask 1 price</td>
                  </tr>
                  <tr>
                    <td>&gt; bidSz</td>
                    <td>String</td>
                    <td>Buying 1 amount</td>
                  </tr>
                  <tr>
                    <td>&gt; askSz</td>
                    <td>String</td>
                    <td>Selling 1 amount</td>
                  </tr>
                  <tr>
                    <td>&gt; openUtc</td>
                    <td>String</td>
                    <td>UTC±00:00 Entry price</td>
                  </tr>
                  <tr>
                    <td>&gt; ts</td>
                    <td>String</td>
                    <td>Current time Unix millisecond timestamp, e.g. 1690196141868</td>
                  </tr>
                  <tr>
                    <td>&gt; changeUtc24h</td>
                    <td>String</td>
                    <td>Change at UTC+0, 0.01 means 1%.</td>
                  </tr>
                  <tr>
                    <td>&gt; change24h</td>
                    <td>String</td>
                    <td>24-hour change, 0.01 means 1%.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div>
              <Link to={"/docs/spot/market/tickers-api"} className="run-btn" style={{ marginBottom: "20px" }}>RUN &gt;&gt;</Link>
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
              <button className="copy-btn" onClick={handleCopy}>
                {copied ? <FiCheck /> : <FiCopy />}
              </button>
              <pre>{codeMap[lang]}</pre>
            </div>

            {/* RESPONSE EXAMPLE */}
            <h3 className="top-req-text" id="response-example">
              Response Example
            </h3>
            <div className="api-code-box position-relative" style={{ marginBottom: "40px" }}>
              <button className="copy-btn" onClick={handleCopyRes}>
                {copiedRes ? <FiCheck /> : <FiCopy />}
              </button>
              <pre>{responseCode}</pre>
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
                  className={activeSection === "request-params" ? "active" : ""}
                  onClick={() => scrollToSection("request-params")}
                >
                  Request Parameters
                </li>
                <li
                  className={activeSection === "response-params" ? "active" : ""}
                  onClick={() => scrollToSection("response-params")}
                >
                  Response Parameters
                </li>
                <li
                  className={activeSection === "request-example" ? "active" : ""}
                  onClick={() => scrollToSection("request-example")}
                >
                  Request Example
                </li>
                <li
                  className={activeSection === "response-example" ? "active" : ""}
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
  );
};

export default GetSpotTickerInfo;
