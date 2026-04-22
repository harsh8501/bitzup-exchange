import { useState, useEffect, useRef } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FiCopy, FiCheck } from "react-icons/fi";

export const Tickers = () => {
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
    "category": "linear",
    "list": [
      {
        "symbol": "BTCUSD",
        "lastPrice": "120635.50",
        "indexPrice": "114890.92",
        "markPrice": "114898.43",
        "prevPrice24h": "105595.90",
        "price24hPcnt": "0.142425",
        "highPrice24h": "131309.30",
        "lowPrice24h": "102007.60",
        "prevPrice1h": "119806.10",
        "openInterest": "240113967",
        "openInterestValue": "2089.79",
        "turnover24h": "115.6907",
        "volume24h": "13713832.0000",
        "fundingRate": "0.0001",
        "nextFundingTime": "1760371200000",
        "predictedDeliveryPrice": "",
        "basisRate": "",
        "deliveryFeeRate": "",
        "deliveryTime": "0",
        "ask1Size": "9854",
        "bid1Price": "103401.00",
        "ask1Price": "109152.80",
        "bid1Size": "1063",
        "basis": "",
        "preOpenPrice": "",
        "preQty": "",
        "curPreListingPhase": "",
        "fundingIntervalHour": "8",
        "basisRateYear": "",
        "fundingCap": "0.005"
      }
    ]
  },
  "retExtInfo": {},
  "time": 1760352369814
}`;

  const codeMap = {
    HTTP: `GET /v5/market/tickers?category=linear&symbol=BTCUSD HTTP/1.1
Host: api.bitzup.com`,

    Python: `import requests

url = "https://api.bitzup.com/v5/market/tickers"
params = {
    "category": "linear",
    "symbol": "BTCUSD"
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
    url := "https://api.bitzup.com/v5/market/tickers?category=linear&symbol=BTCUSD"

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

public class GetTickersDemo {
    public static void main(String[] args) throws Exception {
        String url = "https://api.bitzup.com/v5/market/tickers?category=linear&symbol=BTCUSD";

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

async function getTickers() {
    try {
        const response = await axios.get(
            'https://api.bitzup.com/v5/market/tickers',
            {
                params: {
                    category: "linear",
                    symbol: 'BTCUSD'
                }
            }
        );
        console.log(response.data);
    } catch (error) {
        console.error(error.message);
    }
}

getTickers();`,
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
                <span className="pill">Get Tickers</span>
              </div>

              {/* Title */}
              <h1 className="api-title" style={{ fontSize: "32px", marginBottom: "16px" }}>Get Tickers</h1>
              <p className="api-desc" style={{ fontSize: "16px", color: "var(--text-secondary)", marginBottom: "24px" }}>
                Query for the latest price snapshot, best bid/ask price, and trading volume in the last 24 hours.
              </p>

              {/* HTTP REQUEST */}
              <h3 className="top-req-text" id="http" style={{ borderBottom: "1px solid var(--border-color)", paddingBottom: "12px", marginTop: "40px" }}>
                HTTP Request
              </h3>
              <div className="http-path" style={{ background: "var(--bg-card)", padding: "12px 16px", borderRadius: "8px", display: "flex", gap: "12px", alignItems: "center", marginBottom: "32px" }}>
                <span className="method" style={{ padding: "4px 8px", borderRadius: "4px" }}>GET</span>
                <span className="path" style={{ fontWeight: "500", letterSpacing: "0.5px" }}>/v5/market/tickers</span>
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
                      <td>Product type. <span className="pill">linear</span></td>
                    </tr>
                    <tr>
                      <td>symbol</td>
                      <td>true</td>
                      <td>string</td>
                      <td>Symbol name.</td>
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
                      <td>An array of ticker objects</td>
                    </tr>
                    <tr>
                      <td>&gt; symbol</td>
                      <td>string</td>
                      <td>Symbol name</td>
                    </tr>
                    <tr>
                      <td>&gt; lastPrice</td>
                      <td>string</td>
                      <td>Latest price</td>
                    </tr>
                    <tr>
                      <td>&gt; indexPrice</td>
                      <td>string</td>
                      <td>Index price</td>
                    </tr>
                    <tr>
                      <td>&gt; markPrice</td>
                      <td>string</td>
                      <td>Mark price</td>
                    </tr>
                    <tr>
                      <td>&gt; prevPrice24h</td>
                      <td>string</td>
                      <td>Market price 24 hours ago</td>
                    </tr>
                    <tr>
                      <td>&gt; price24hPcnt</td>
                      <td>string</td>
                      <td>Percentage change of market price relative to 24h</td>
                    </tr>
                    <tr>
                      <td>&gt; highPrice24h</td>
                      <td>string</td>
                      <td>The highest price in the last 24 hours</td>
                    </tr>
                    <tr>
                      <td>&gt; lowPrice24h</td>
                      <td>string</td>
                      <td>The lowest price in the last 24 hours</td>
                    </tr>
                    <tr>
                      <td>&gt; prevPrice1h</td>
                      <td>string</td>
                      <td>Market price 1 hour ago</td>
                    </tr>
                    <tr>
                      <td>&gt; openInterest</td>
                      <td>string</td>
                      <td>Open interest</td>
                    </tr>
                    <tr>
                      <td>&gt; openInterestValue</td>
                      <td>string</td>
                      <td>Open interest value</td>
                    </tr>
                    <tr>
                      <td>&gt; turnover24h</td>
                      <td>string</td>
                      <td>Turnover for 24h</td>
                    </tr>
                    <tr>
                      <td>&gt; volume24h</td>
                      <td>string</td>
                      <td>Volume for 24h</td>
                    </tr>
                    <tr>
                      <td>&gt; fundingRate</td>
                      <td>string</td>
                      <td>Funding rate</td>
                    </tr>
                    <tr>
                      <td>&gt; nextFundingTime</td>
                      <td>string</td>
                      <td>Next funding timestamp (ms)</td>
                    </tr>
                    <tr>
                      <td>&gt; predictedDeliveryPrice</td>
                      <td>string</td>
                      <td>Predicted delivery price</td>
                    </tr>
                    <tr>
                      <td>&gt; basisRate</td>
                      <td>string</td>
                      <td>Basis rate</td>
                    </tr>
                    <tr>
                      <td>&gt; deliveryFeeRate</td>
                      <td>string</td>
                      <td>Delivery fee rate</td>
                    </tr>
                    <tr>
                      <td>&gt; deliveryTime</td>
                      <td>string</td>
                      <td>Delivery timestamp (ms)</td>
                    </tr>
                    <tr>
                      <td>&gt; ask1Size</td>
                      <td>string</td>
                      <td>Best ask size</td>
                    </tr>
                    <tr>
                      <td>&gt; bid1Price</td>
                      <td>string</td>
                      <td>Best bid price</td>
                    </tr>
                    <tr>
                      <td>&gt; ask1Price</td>
                      <td>string</td>
                      <td>Best ask price</td>
                    </tr>
                    <tr>
                      <td>&gt; bid1Size</td>
                      <td>string</td>
                      <td>Best bid size</td>
                    </tr>
                    <tr>
                      <td>&gt; basis</td>
                      <td>string</td>
                      <td>Basis</td>
                    </tr>
                    <tr>
                      <td>&gt; preOpenPrice</td>
                      <td>string</td>
                      <td>Pre open price</td>
                    </tr>
                    <tr>
                      <td>&gt; preQty</td>
                      <td>string</td>
                      <td>Pre qty</td>
                    </tr>
                    <tr>
                      <td>&gt; curPreListingPhase</td>
                      <td>string</td>
                      <td>Current pre-listing phase</td>
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
                <button className="copy-btn" onClick={handleCopy} style={{ position: "absolute", top: "12px", right: "12px", background: "transparent", border: "none", color: "var(--text-secondary)", cursor: "pointer" }}>
                  {copied ? <FiCheck color="var(--text-accent)" /> : <FiCopy />}
                </button>

                <pre style={{ margin: 0 }}>
                  <code >{codeMap[lang]}</code>
                </pre>
              </div>

              {/* RESPONSE EXAMPLE */}
              <h3 className="top-req-text" id="response-example">
                Response Example
              </h3>
              <div className="api-code-box position-relative" style={{ marginBottom: "40px" }}>
                <button className="copy-btn" onClick={handleCopyRes} style={{ position: "absolute", top: "12px", right: "12px", background: "transparent", border: "none", color: "var(--text-secondary)", cursor: "pointer" }}>
                  {copiedRes ? <FiCheck color="var(--text-accent)" /> : <FiCopy />}
                </button>
                <pre style={{ margin: 0 }}>
                  <code >{responseCode}</code>
                </pre>
              </div>
            </div>

            <div className="col-lg-3 d-none d-lg-block">
              <div className="api-sidebar-wrapper" style={{ position: "sticky", top: "100px", borderLeft: "1px solid var(--border-color)", paddingLeft: "20px" }}>
                <h5 style={{ fontSize: "12px", textTransform: "uppercase", color: "var(--text-secondary)", marginBottom: "16px", letterSpacing: "1px" }}>On this page</h5>
                <ul style={{ listStyle: "none", padding: 0 }}>
                  <li
                    className={activeSection === "http" ? "active" : ""}
                    onClick={() => scrollToSection("http")}
                    style={{ padding: "8px 0", cursor: "pointer", fontSize: "14px", color: activeSection === "http" ? "var(--text-accent)" : "var(--text-secondary)", transition: "all 0.2s" }}
                  >
                    HTTP Request
                  </li>
                  <li
                    className={
                      activeSection === "request-params" ? "active" : ""
                    }
                    onClick={() => scrollToSection("request-params")}
                    style={{ padding: "8px 0", cursor: "pointer", fontSize: "14px", color: activeSection === "request-params" ? "var(--text-accent)" : "var(--text-secondary)", transition: "all 0.2s" }}
                  >
                    Request Parameters
                  </li>
                  <li
                    className={
                      activeSection === "response-params" ? "active" : ""
                    }
                    onClick={() => scrollToSection("response-params")}
                    style={{ padding: "8px 0", cursor: "pointer", fontSize: "14px", color: activeSection === "response-params" ? "var(--text-accent)" : "var(--text-secondary)", transition: "all 0.2s" }}
                  >
                    Response Parameters
                  </li>
                  <li
                    className={
                      activeSection === "request-example" ? "active" : ""
                    }
                    onClick={() => scrollToSection("request-example")}
                    style={{ padding: "8px 0", cursor: "pointer", fontSize: "14px", color: activeSection === "request-example" ? "var(--text-accent)" : "var(--text-secondary)", transition: "all 0.2s" }}
                  >
                    Request Example
                  </li>
                  <li
                    className={
                      activeSection === "response-example" ? "active" : ""
                    }
                    onClick={() => scrollToSection("response-example")}
                    style={{ padding: "8px 0", cursor: "pointer", fontSize: "14px", color: activeSection === "response-example" ? "var(--text-accent)" : "var(--text-secondary)", transition: "all 0.2s" }}
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