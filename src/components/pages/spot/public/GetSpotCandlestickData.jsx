import { useState, useEffect, useRef } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FiCopy, FiCheck } from "react-icons/fi";
import { Link } from "react-router-dom";

export const GetSpotCandlestickData = () => {
  const contentRef = useRef(null);

  const [lang, setLang] = useState("HTTP");
  const [copied, setCopied] = useState(false);
  const [copiedRes, setCopiedRes] = useState(false);

  const [activeSection, setActiveSection] = useState("http");

  const HEADER_OFFSET = 120;

  const codeMap = {
    HTTP: `curl -s 'https://api.bitzup.com/chart/klines?symbol=BTCUSDT&granularity=15min&limit=500&startTime=1785035013000&endTime=1785305013000'`,
    Python: `import requests

url = "https://api.bitzup.com/chart/klines"
params = {
    "symbol": "BTCUSDT",
    "granularity": "15min",
    "limit": "500",
    "startTime": "1785035013000",
    "endTime": "1785305013000"
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
    url := "https://api.bitzup.com/chart/klines?symbol=BTCUSDT&granularity=15min&limit=500&startTime=1785035013000&endTime=1785305013000"

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

public class GetSpotCandlestickDataDemo {
    public static void main(String[] args) throws Exception {
        String url = "https://api.bitzup.com/chart/klines?symbol=BTCUSDT&granularity=15min&limit=500&startTime=1785035013000&endTime=1785305013000";

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

async function getSpotCandlestickData() {
    try {
        const response = await axios.get('https://api.bitzup.com/chart/klines', {
            params: { symbol: 'BTCUSDT', granularity: '15min', limit: '500', startTime: '1785035013000', endTime: '1785305013000' }
        });
        console.log(response.data);
    } catch (error) {
        console.error(error.message);
    }
}

getSpotCandlestickData();`,
  };

  const responseCode = `{
  "code": "00000",
  "msg": "success",
  "requestTime": 1695800278693,
  "data": [
    [
      "1656604800000",
      "37834.5",
      "37849.5",
      "37773.5",
      "37773.5",
      "428.3462",
      "16198849.1079",
      "16198849.1079"
    ],
    [
      "1656604800000",
      "37834.5",
      "37849.5",
      "37773.5",
      "37773.5",
      "428.3462",
      "16198849.1079",
      "16198849.1079"
    ]
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
              <span className="pill">Get Candlestick Data</span>
            </div>

            {/* Title */}
            <h1 className="api-title">Get Candlestick Data</h1>
            <div className="mb-3">
              <span className="badge bg-secondary text-light">Frequency limit: 20 times/1s (IP)</span>
            </div>
            <p className="api-desc">
              Get Candlestick Data (Kline) for a specified trading pair and time granularity.
            </p>

            {/* HTTP REQUEST */}
            <h3 className="top-req-text" id="http">
              HTTP Request
            </h3>
            <div className="http-path mb-4">
              <span className="method get">GET</span>
              <span className="path">/chart/klines</span>
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
                    <td>Trading pair e.g. BTCUSDT</td>
                  </tr>
                  <tr>
                    <td>granularity</td>
                    <td>String</td>
                    <td>Yes</td>
                    <td>
                      Time interval of charts.<br/>
                      minute: <span className="pill">1min</span>, <span className="pill">3min</span>, <span className="pill">5min</span>, <span className="pill">15min</span>, <span className="pill">30min</span><br/>
                      hour: <span className="pill">1h</span>, <span className="pill">4h</span>, <span className="pill">6h</span>, <span className="pill">12h</span><br/>
                      day: <span className="pill">1day</span>, <span className="pill">3day</span><br/>
                      week: <span className="pill">1week</span><br/>
                      month: <span className="pill">1M</span><br/>
                      hour in UTC: <span className="pill">6Hutc</span>, <span className="pill">12Hutc</span><br/>
                      day in UTC: <span className="pill">1Dutc</span>, <span className="pill">3Dutc</span><br/>
                      week in UTC: <span className="pill">1Wutc</span><br/>
                      month in UTC: <span className="pill">1Mutc</span><br/>
                      <small style={{ color: "#8b949e" }}>1m, 3m, 5m can query for one month, 15m can query for 52 days, 30m can query for 62 days, 1H can query for 83 days, 2H can query for 120 days, 4H can query for 240 days, 6H can query for 360 days.</small>
                    </td>
                  </tr>
                  <tr>
                    <td>startTime</td>
                    <td>String</td>
                    <td>No</td>
                    <td>The time start point of the chart data, i.e., get the chart data after this timestamp (Unix millisecond timestamp, e.g. 1690196141868)</td>
                  </tr>
                  <tr>
                    <td>endTime</td>
                    <td>String</td>
                    <td>No</td>
                    <td>The time end point of the chart data, i.e., get the chart data before this timestamp (Unix millisecond timestamp, e.g. 1690196141868)</td>
                  </tr>
                  <tr>
                    <td>limit</td>
                    <td>String</td>
                    <td>No</td>
                    <td>Number of queries: Default: 100, maximum: 1000.</td>
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
                    <td>Candlestick data array list</td>
                  </tr>
                  <tr>
                    <td>&gt; index[0]</td>
                    <td>String</td>
                    <td>System timestamp, Unix millisecond timestamp, e.g. 1690196141868</td>
                  </tr>
                  <tr>
                    <td>&gt; index[1]</td>
                    <td>String</td>
                    <td>Opening price</td>
                  </tr>
                  <tr>
                    <td>&gt; index[2]</td>
                    <td>String</td>
                    <td>Highest price</td>
                  </tr>
                  <tr>
                    <td>&gt; index[3]</td>
                    <td>String</td>
                    <td>Lowest price</td>
                  </tr>
                  <tr>
                    <td>&gt; index[4]</td>
                    <td>String</td>
                    <td>Closing price</td>
                  </tr>
                  <tr>
                    <td>&gt; index[5]</td>
                    <td>String</td>
                    <td>Trading volume in base currency, e.g. "BTC" in the "BTCUSDT" pair.</td>
                  </tr>
                  <tr>
                    <td>&gt; index[6]</td>
                    <td>String</td>
                    <td>Trading volume in USDT</td>
                  </tr>
                  <tr>
                    <td>&gt; index[7]</td>
                    <td>String</td>
                    <td>Trading volume in quote currency, e.g. "USDT" in the "BTCUSDT" pair.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div>
              <Link to={"/docs/spot/market/candles-api"} className="run-btn" style={{ marginBottom: "20px" }}>RUN &gt;&gt;</Link>
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

export default GetSpotCandlestickData;
