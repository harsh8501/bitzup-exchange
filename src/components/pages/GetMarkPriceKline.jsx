import { useState, useEffect, useRef } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FiCopy, FiCheck } from "react-icons/fi";

export const GetMarkPriceKline = () => {
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
    "symbol": "BTCUSDT",
    "category": "linear",
    "list": [
      [
        "1670608800000",
        "17164.16",
        "17164.16",
        "17121.5",
        "17131.64"
      ]
    ]
  },
  "retExtInfo": {},
  "time": 1672026361839
}`;

  const codeMap = {
    HTTP: `GET /v5/market/mark-price-kline?category=linear&symbol=BTCUSDT&interval=15&start=1670601600000&end=1670608800000&limit=1 HTTP/1.1
Host: api.bitzup.com`,

    Python: `import requests

url = "https://api.bitzup.com/v5/market/mark-price-kline"
params = {
    "category": "linear",
    "symbol": "BTCUSDT",
    "interval": "15",
    "start": 1670601600000,
    "end": 1670608800000,
    "limit": 1
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
    url := "https://api.bitzup.com/v5/market/mark-price-kline?category=linear&symbol=BTCUSDT&interval=15&start=1670601600000&end=1670608800000&limit=1"

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

public class GetMarkPriceKlineDemo {
    public static void main(String[] args) throws Exception {
        String url = "https://api.bitzup.com/v5/market/mark-price-kline?category=linear&symbol=BTCUSDT&interval=15&start=1670601600000&end=1670608800000&limit=1";

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

async function getMarkPriceKline() {
    try {
        const response = await axios.get(
            'https://api.bitzup.com/v5/market/mark-price-kline',
            {
                params: {
                    category: 'linear',
                    symbol: 'BTCUSDT',
                    interval: '15',
                    start: 1670601600000,
                    end: 1670608800000,
                    limit: 1
                }
            }
        );
        console.log(response.data);
    } catch (error) {
        console.error(error.message);
    }
}

getMarkPriceKline();`,
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
                <span className="pill">Get Mark Price Kline</span>
              </div>

              {/* Title */}
              <h1 className="api-title">Get Mark Price Kline</h1>
              <p className="api-desc">
                Query for historical mark price klines. Charts are returned in groups based on the requested interval.
              </p>

              {/* HTTP REQUEST */}
              <h3 className="top-req-text" id="http">
                HTTP Request
              </h3>
              <div className="http-path">
                <span className="method get">GET</span>
                <span className="path">/v5/market/mark-price-kline</span>
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
                      <td>Product type. <code>linear</code>, <code>inverse</code>. When category is not passed, use linear by default</td>
                    </tr>
                    <tr>
                      <td>symbol</td>
                      <td>true</td>
                      <td>string</td>
                      <td>Symbol name.</td>
                    </tr>
                    <tr>
                      <td>interval</td>
                      <td>true</td>
                      <td>string</td>
                      <td>Kline interval. <code>1</code>,<code>3</code>,<code>5</code>,<code>15</code>,<code>30</code>,<code>60</code>,<code>120</code>,<code>240</code>,<code>360</code>,<code>720</code>,<code>D</code>,<code>M</code>,<code>W</code></td>
                    </tr>
                    <tr>
                      <td>start</td>
                      <td>false</td>
                      <td>integer</td>
                      <td>The start timestamp (ms)</td>
                    </tr>
                    <tr>
                      <td>end</td>
                      <td>false</td>
                      <td>integer</td>
                      <td>The end timestamp (ms)</td>
                    </tr>
                    <tr>
                      <td>limit</td>
                      <td>false</td>
                      <td>integer</td>
                      <td>Limit for data size per page. [1, 1000]. Default: 200</td>
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
                      <td>symbol</td>
                      <td>string</td>
                      <td>Symbol name</td>
                    </tr>
                    <tr>
                      <td>list</td>
                      <td>array</td>
                      <td>
                        <ul>
                          <li>An string array of individual candle</li>
                          <li>
                            Sort in reverse by{" "}
                            <span className="pill">startTime</span>
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <IoIosArrowForward /> list[0]: startTime
                      </td>
                      <td>string</td>
                      <td>Start time of the candle (ms)</td>
                    </tr>
                    <tr>
                      <td>
                        <IoIosArrowForward /> list[1]: openPrice
                      </td>
                      <td>string</td>
                      <td>Open price</td>
                    </tr>
                    <tr>
                      <td>
                        <IoIosArrowForward /> list[2]: highPrice
                      </td>
                      <td>string</td>
                      <td>Highest price</td>
                    </tr>
                    <tr>
                      <td>
                        <IoIosArrowForward /> list[3]: lowPrice
                      </td>
                      <td>string</td>
                      <td>Lowest price</td>
                    </tr>
                    <tr>
                      <td>
                        <IoIosArrowForward /> list[4]: closePrice
                      </td>
                      <td>string</td>
                      <td>Close price</td>
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
