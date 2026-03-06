import { useState, useEffect, useRef } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FiCopy, FiCheck } from "react-icons/fi";

export const GetRpiOrderbook = () => {
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
    "s": "BTCUSDT",
    "a": [
      [
        "116600.00",
        "4.428",
        "0.000"
      ]
    ],
    "b": [
      [
        "116599.90",
        "3.721",
        "0.000"
      ]
    ],
    "ts": 1758078286128,
    "u": 28419362,
    "seq": 454803359210,
    "cts": 1758078286118
  },
  "retExtInfo": {},
  "time": 1758078286162
}`;

    const codeMap = {
        HTTP: `GET /v5/market/rpi_orderbook?category=spot&symbol=BTCUSDT HTTP/1.1
Host: api.bitzup.com`,

    Python: `import requests

url = "https://api.bitzup.com/v5/market/rpi_orderbook"
params = {
    "category": "spot",
    "symbol": "BTCUSDT"
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
    url := "https://api.bitzup.com/v5/market/rpi_orderbook?category=spot&symbol=BTCUSDT"

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

public class GetRpiOrderbookDemo {
    public static void main(String[] args) throws Exception {
        String url = "https://api.bitzup.com/v5/market/rpi_orderbook?category=spot&symbol=BTCUSDT";

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

async function getRpiOrderbook() {
    try {
        const response = await axios.get(
            'https://api.bitzup.com/v5/market/rpi_orderbook',
            {
                params: {
                    category: 'spot',
                    symbol: 'BTCUSDT'
                }
            }
        );
        console.log(response.data);
    } catch (error) {
        console.error(error.message);
    }
}

getRpiOrderbook();`,
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
                <span className="pill">Get RPI Orderbook</span>
              </div>

              {/* Title */}
              <h1 className="api-title">Get RPI Orderbook</h1>
              <p className="api-desc">
                Query for orderbook depth data.
              </p>

              {/* HTTP REQUEST */}
              <h3 className="top-req-text" id="http">
                HTTP Request
              </h3>
              <div className="http-path">
                <span className="method get">GET</span>
                <span className="path">/v5/market/rpi_orderbook</span>
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
                      <td>Product type. <code>spot</code>, <code>linear</code>, <code>inverse</code></td>
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
                      <td>s</td>
                      <td>string</td>
                      <td>Symbol name</td>
                    </tr>
                    <tr>
                      <td>b</td>
                      <td>array</td>
                      <td>Bids. Sort by price desc.</td>
                    </tr>
                    <tr>
                      <td>&gt; b[0]</td>
                      <td>string</td>
                      <td>Bid price</td>
                    </tr>
                    <tr>
                      <td>&gt; b[1]</td>
                      <td>string</td>
                      <td>Bid size</td>
                    </tr>
                    <tr>
                      <td>&gt; b[2]</td>
                      <td>string</td>
                      <td>The RPI order quantity at this price. When a bid RPI order crosses with a non-RPI ask price, the quantity of the bid RPI becomes invalid and is hidden.</td>
                    </tr>
                    <tr>
                      <td>a</td>
                      <td>array</td>
                      <td>Asks. Sort by price asc.</td>
                    </tr>
                    <tr>
                      <td>&gt; a[0]</td>
                      <td>string</td>
                      <td>Ask price</td>
                    </tr>
                    <tr>
                      <td>&gt; a[1]</td>
                      <td>string</td>
                      <td>Ask size</td>
                    </tr>
                    <tr>
                      <td>&gt; a[2]</td>
                      <td>string</td>
                      <td>The RPI order quantity at this price. When an ask RPI order crosses with a non-RPI bid price, the quantity of the ask RPI becomes invalid and is hidden.</td>
                    </tr>
                    <tr>
                      <td>ts</td>
                      <td>integer</td>
                      <td>The timestamp (ms) that the system generates the data</td>
                    </tr>
                    <tr>
                      <td>u</td>
                      <td>integer</td>
                      <td>Update ID. Is a sequence.</td>
                    </tr>
                    <tr>
                      <td>seq</td>
                      <td>integer</td>
                      <td>Cross sequence. You can use this field to compare different levels orderbook data.</td>
                    </tr>
                    <tr>
                      <td>cts</td>
                      <td>integer</td>
                      <td>Order matching engine timestamp (ms).</td>
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
