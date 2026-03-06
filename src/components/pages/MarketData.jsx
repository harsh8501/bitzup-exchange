import { useState, useEffect, useRef } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FiCopy, FiCheck } from "react-icons/fi";

export const MarketData = () => {
  const contentRef = useRef(null);

  const [lang, setLang] = useState("HTTP");
  const [copied, setCopied] = useState(false);
  const [copiedRes, setCopiedRes] = useState(false);

  const [activeSection, setActiveSection] = useState("http");

  const HEADER_OFFSET = 120; // adjust to your layout

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
        rootMargin: "-30% 0px -60% 0px", // top-biased
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
    "category": "linear",
    "list": [
      {
        "symbol": "BTCUSDT",
        "contractType": "LinearPerpetual",
        "status": "Trading",
        "baseCoin": "BTC",
        "quoteCoin": "USDT",
        "launchTime": "1585526400000",
        "deliveryTime": "0",
        "deliveryFeeRate": "",
        "priceScale": "2",
        "leverageFilter": {
          "minLeverage": "1",
          "maxLeverage": "100.00",
          "leverageStep": "0.01"
        },
        "priceFilter": {
          "minPrice": "0.10",
          "maxPrice": "1999999.80",
          "tickSize": "0.10"
        },
        "lotSizeFilter": {
          "maxOrderQty": "1190.000",
          "minOrderQty": "0.001",
          "qtyStep": "0.001",
          "postOnlyMaxOrderQty": "1190.000",
          "maxMktOrderQty": "500.000",
          "minNotionalValue": "5"
        },
        "unifiedMarginTrade": true,
        "fundingInterval": 480,
        "settleCoin": "USDT",
        "copyTrading": "both",
        "upperFundingRate": "0.00375",
        "lowerFundingRate": "-0.00375",
        "isPreListing": false,
        "preListingInfo": null,
        "riskParameters": {
          "priceLimitRatioX": "0.01",
          "priceLimitRatioY": "0.02"
        },
        "symbolType": ""
      }
    ],
    "nextPageCursor": ""
  },
  "retExtInfo": {},
  "time": 1735809771618
}`;

  const codeMap = {
    HTTP: `GET /v5/market/instruments-info?category=linear&symbol=BTCUSDT HTTP/1.1
Host: api.bitzup.com`,

    Python: `import requests
url = "https://api.bitzup.com/v5/market/instruments-info?category=linear&symbol=BTCUSDT"

try:
    response = requests.get(url, timeout=10)
    response.raise_for_status()
    print(response.json())
except requests.exceptions.RequestException as e:
    print("Network Error:", str(e))`,

    Go: `package main

import (
    "fmt"
    "io"
    "net/http"
    "time"
)

func main() {
    url := "https://api.bitzup.com/v5/market/instruments-info?category=linear&symbol=BTCUSDT"
    client := &http.Client{Timeout: 10 * time.Second}

    req, err := http.NewRequest("GET", url, nil)
    if err != nil { panic(err) }

    resp, err := client.Do(req)
    if err != nil { panic(err) }
    defer resp.Body.Close()

    body, _ := io.ReadAll(resp.Body)
    fmt.Println(string(body))
}`,

    Java: `import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.time.Duration;

public class InstrumentsInfoExample {
    public static void main(String[] args) throws Exception {
        String url = "https://api.bitzup.com/v5/market/instruments-info?category=linear&symbol=BTCUSDT";
        HttpClient client = HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(10)).build();
        HttpRequest request = HttpRequest.newBuilder()
            .uri(URI.create(url))
            .GET()
            .build();

        HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
        System.out.println(response.body());
    }
}`,

    Node: `const axios = require("axios");

async function getInstrumentsInfo() {
  try {
    const response = await axios.get("https://api.bitzup.com/v5/market/instruments-info", {
      params: { category: "linear", symbol: "BTCUSDT" },
      timeout: 10000,
    });
    console.log(response.data);
  } catch (err) {
    console.error("API Error:", err.message);
  }
}
getInstrumentsInfo();`,
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
                <span className="pill">Market Info</span>
              </div>

              {/* Title */}
              <h1 className="api-title">Get Instruments Info</h1>
              <p className="api-desc">
                Query for the instrument specification of online trading pairs.
              </p>

              <div className="api-cover">Rate Limit: 10 req/s</div>

              {/* HTTP REQUEST */}
              <h3 className="top-req-text" id="http">
                HTTP Request
              </h3>
              <div className="http-path">
                <span className="method get">GET</span>
                <span className="path">/v5/market/instruments-info</span>
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
                      <td>Product type. <code>linear</code>, <code>inverse</code></td>
                    </tr>
                    <tr>
                      <td>symbol</td>
                      <td>false</td>
                      <td>string</td>
                      <td>Symbol name. e.g., <code>BTCUSDT</code></td>
                    </tr>
                    <tr>
                      <td>status</td>
                      <td>false</td>
                      <td>string</td>
                      <td>Symbol status. e.g., <code>Trading</code></td>
                    </tr>
                    <tr>
                      <td>baseCoin</td>
                      <td>false</td>
                      <td>string</td>
                      <td>Base coin. e.g., <code>BTC</code></td>
                    </tr>
                    <tr>
                      <td>limit</td>
                      <td>false</td>
                      <td>integer</td>
                      <td>Limit for data size per page. [1, 1000]. Default: 500</td>
                    </tr>
                    <tr>
                      <td>cursor</td>
                      <td>false</td>
                      <td>string</td>
                      <td>Cursor. Use the <code>nextPageCursor</code> token from previous response to retrieve the next page</td>
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
                      <td>nextPageCursor</td>
                      <td>string</td>
                      <td>Cursor notation for next page</td>
                    </tr>
                    <tr>
                      <td>list</td>
                      <td>array</td>
                      <td>Object list representing instrument properties</td>
                    </tr>
                    <tr>
                      <td>└ symbol</td>
                      <td>string</td>
                      <td>Symbol name</td>
                    </tr>
                    <tr>
                      <td>└ contractType</td>
                      <td>string</td>
                      <td>Contract type</td>
                    </tr>
                    <tr>
                      <td>└ status</td>
                      <td>string</td>
                      <td>Instrument status (<code>PreLaunch</code>, <code>Trading</code>, <code>Settling</code>, <code>Delivering</code>, <code>Closed</code>)</td>
                    </tr>
                    <tr>
                      <td>└ baseCoin</td>
                      <td>string</td>
                      <td>Base coin</td>
                    </tr>
                    <tr>
                      <td>└ quoteCoin</td>
                      <td>string</td>
                      <td>Quote coin</td>
                    </tr>
                    <tr>
                      <td>└ settleCoin</td>
                      <td>string</td>
                      <td>Settle coin</td>
                    </tr>
                    <tr>
                      <td>└ launchTime</td>
                      <td>string</td>
                      <td>Launch time (ms)</td>
                    </tr>
                    <tr>
                      <td>└ deliveryTime</td>
                      <td>string</td>
                      <td>Delivery time (ms). <code>0</code> for perpetual</td>
                    </tr>
                    <tr>
                      <td>└ priceScale</td>
                      <td>string</td>
                      <td>Price scale</td>
                    </tr>
                    <tr>
                      <td>└ leverageFilter</td>
                      <td>Object</td>
                      <td>Leverage attributes</td>
                    </tr>
                    <tr>
                      <td>&nbsp;&nbsp;&nbsp;└ minLeverage</td>
                      <td>string</td>
                      <td>Minimum leverage</td>
                    </tr>
                    <tr>
                      <td>&nbsp;&nbsp;&nbsp;└ maxLeverage</td>
                      <td>string</td>
                      <td>Maximum leverage</td>
                    </tr>
                    <tr>
                      <td>&nbsp;&nbsp;&nbsp;└ leverageStep</td>
                      <td>string</td>
                      <td>Leverage step</td>
                    </tr>
                    <tr>
                      <td>└ priceFilter</td>
                      <td>Object</td>
                      <td>Price attributes</td>
                    </tr>
                    <tr>
                      <td>&nbsp;&nbsp;&nbsp;└ minPrice</td>
                      <td>string</td>
                      <td>Minimum order price</td>
                    </tr>
                    <tr>
                      <td>&nbsp;&nbsp;&nbsp;└ maxPrice</td>
                      <td>string</td>
                      <td>Maximum order price</td>
                    </tr>
                    <tr>
                      <td>&nbsp;&nbsp;&nbsp;└ tickSize</td>
                      <td>string</td>
                      <td>The step to increase/decrease order price</td>
                    </tr>
                    <tr>
                      <td>└ lotSizeFilter</td>
                      <td>Object</td>
                      <td>Size attributes</td>
                    </tr>
                    <tr>
                      <td>&nbsp;&nbsp;&nbsp;└ maxOrderQty</td>
                      <td>string</td>
                      <td>Maximum order quantity</td>
                    </tr>
                    <tr>
                      <td>&nbsp;&nbsp;&nbsp;└ minOrderQty</td>
                      <td>string</td>
                      <td>Minimum order quantity</td>
                    </tr>
                    <tr>
                      <td>&nbsp;&nbsp;&nbsp;└ qtyStep</td>
                      <td>string</td>
                      <td>The step to increase/decrease order quantity</td>
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

