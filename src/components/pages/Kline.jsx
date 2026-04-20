import { useState, useEffect, useRef } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FiCopy, FiCheck } from "react-icons/fi";

export const Kline = () => {
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
        rootMargin: "-30% 0px -60% 0px", // 🔥 top-biased
        threshold: 0,
      },
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
                "17154",
                "17154",
                "17111",
                "17136.5",
                "2028.137",
                "34736136.8065"
            ],
            [
                "1670605200000",
                "17143.5",
                "17158",
                "17137.5",
                "17154",
                "1095.661",
                "18786245.062"
            ],
            [
                "1670601600000",
                "17168.5",
                "17177.5",
                "17135.5",
                "17143.5",
                "2038.195",
                "34970006.194"
            ]
        ]
    },
    "retExtInfo": {},
    "time": 1672025956592
}`;

  const codeMap = {
    HTTP: `GET /v5/market/kline?category=linear&symbol=BTCUSDT&interval=60&start=1670601600000&end=1670608800000&limit=3 HTTP/1.1
Host: api.bitzup.com`,

    Python: `import requests

url = "https://api.bitzup.com/v5/market/kline"
params = {
    "category": "linear",
    "symbol": "BTCUSDT",
    "interval": "60",
    "start": 1670601600000,
    "end": 1670608800000,
    "limit": 3
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
    url := "https://api.bitzup.com/v5/market/kline?category=linear&symbol=BTCUSDT&interval=60&start=1670601600000&end=1670608800000&limit=3"

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

public class GetKlineDemo {
    public static void main(String[] args) throws Exception {
        String url = "https://api.bitzup.com/v5/market/kline?category=linear&symbol=BTCUSDT&interval=60&start=1670601600000&end=1670608800000&limit=3";

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

async function getKline() {
    try {
        const response = await axios.get(
            'https://api.bitzup.com/v5/market/kline',
            {
                params: {
                    category: 'linear',
                    symbol: 'BTCUSDT',
                    interval: '60',
                    start: 1670601600000,
                    end: 1670608800000,
                    limit: 3
                }
            }
        );
        console.log(response.data);
    } catch (error) {
        console.error(error.message);
    }
}

getKline();`,
  };

  return (
    <>
      <div className="container-fluid p-0">
        <div className="api-layout">
          <div className="row">
            {/* LEFT CONTENT */}
            <div className="col-lg-9 col-md-12 api-content" ref={contentRef}>
              <div className="breadcrumb mb-4">
                <span className="text-muted">Market</span>
                <span className="mx-2">
                  <IoIosArrowForward className="kline-arrow" />
                </span>
                <span className="pill">Get Kline</span>
              </div>

              {/* Title */}
              <h1 className="api-title" style={{ fontSize: "32px", marginBottom: "16px" }}>Get Kline</h1>
              <p className="api-desc" style={{ fontSize: "16px", color: "var(--text-secondary)", marginBottom: "24px" }}>
                Query for historical klines (also known as
                candles/candlesticks). Charts are returned in groups based on
                the requested interval.
              </p>

              <div className="api-cover" style={{ marginBottom: "32px" }}>USDT contract</div>

              {/* HTTP REQUEST */}
              <h3 className="top-req-text" id="http" style={{ borderBottom: "1px solid var(--border-color)", paddingBottom: "12px", marginTop: "40px" }}>
                HTTP Request
              </h3>
              <div className="http-path" style={{ background: "var(--bg-card)", padding: "12px 16px", borderRadius: "8px", display: "flex", gap: "12px", alignItems: "center", marginBottom: "32px" }}>
                <span className="method" style={{ padding: "4px 8px", borderRadius: "4px" }}>GET</span>
                <span className="path" style={{ fontWait: "500", letterSpacing: "0.5px" }}>/v5/market/kline</span>
              </div>

              {/* REQUEST PARAMETERS */}
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
                      <td className="text-interval">symbol</td>
                      <td>true</td>
                      <td>string</td>
                      <td>
                        Symbol name, like
                        <span className="pill">BTCUSDT</span>, uppercase only
                      </td>
                    </tr>
                    <tr>
                      <td className="text-interval">interval</td>
                      <td>true</td>
                      <td>string</td>
                      <td>
                        Kline interval:
                        <ul
                          style={{
                            display: "flex",
                            flexWrap: "wrap",
                            gap: "6px",
                            listStyle: "none",
                            padding: 0,
                          }}
                        >
                          <li>
                            <span className="pill-magenta">1</span>
                          </li>
                          <li>
                            <span className="pill-magenta">3</span>
                          </li>
                          <li>
                            <span className="pill-magenta">5</span>
                          </li>
                          <li>
                            <span className="pill-magenta">15</span>
                          </li>
                          <li>
                            <span className="pill-magenta">60</span>
                          </li>
                          <li>
                            <span className="pill-magenta">120</span>
                          </li>
                          <li>
                            <span className="pill-magenta">240</span>
                          </li>
                          <li>
                            <span className="pill-magenta">360</span>
                          </li>
                          <li>
                            <span className="pill-magenta">720</span>
                          </li>
                          <li>
                            <span className="pill-magenta">D</span>
                          </li>
                          <li>
                            <span className="pill-magenta">W</span>
                          </li>
                          <li>
                            <span className="pill-magenta">M</span>
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td>start</td>
                      <td>false</td>
                      <td>integer</td>
                      <td>The start timestamp (ms) </td>
                    </tr>
                    <tr>
                      <td>end</td>
                      <td>false</td>
                      <td>integer</td>
                      <td>The end timestamp (ms) </td>
                    </tr>
                    <tr>
                      <td>limit</td>
                      <td>false</td>
                      <td>integer</td>
                      <td>
                        Limit for data size per page. [
                        <span className="pill">1</span>,
                        <span className="pill">1000</span> ]. Default:{" "}
                        <span className="pill"> 200 </span>
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
                      <td>
                        Close price. Is the last traded price when the candle is
                        not closed
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <IoIosArrowForward /> list[5]: volume
                      </td>
                      <td>string</td>
                      <td>
                        Trade volume
                        <ul>
                          <li>USDT contract: unit is base coin (e.g., BTC)</li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <IoIosArrowForward /> list[6]: turnover
                      </td>
                      <td>string</td>
                      <td>
                        Turnover
                        <ul>
                          <li>
                            USDT contract: unit is quote coin (e.g., USDT)
                          </li>
                        </ul>
                      </td>
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

              <div className="api-code-box position-relative" style={{ background: "var(--bg-code)", padding: "20px", borderRadius: "8px", border: "1px solid var(--border-color)", marginBottom: "40px" }}>
                <button className="copy-btn" onClick={handleCopy} style={{ position: "absolute", top: "12px", right: "12px", background: "transparent", border: "none", color: "var(--text-secondary)", cursor: "pointer" }}>
                  {copied ? <FiCheck color="var(--text-accent)" /> : <FiCopy />}
                </button>

                <pre style={{ margin: 0 }}>
                  <code style={{ color: "#e6edf3", fontSize: "14px", lineHeight: "1.5" }}>{codeMap[lang]}</code>
                </pre>
              </div>

              {/* RESPONSE EXAMPLE */}
              <h3 className="top-req-text" id="response-example">
                Response Example
              </h3>
              <div className="api-code-box position-relative" style={{ background: "var(--bg-code)", padding: "20px", borderRadius: "8px", border: "1px solid var(--border-color)", marginBottom: "40px" }}>
                <button className="copy-btn" onClick={handleCopyRes} style={{ position: "absolute", top: "12px", right: "12px", background: "transparent", border: "none", color: "var(--text-secondary)", cursor: "pointer" }}>
                  {copiedRes ? <FiCheck color="var(--text-accent)" /> : <FiCopy />}
                </button>
                <pre style={{ margin: 0 }}>
                  <code style={{ color: "#e6edf3", fontSize: "14px", lineHeight: "1.5" }}>
                    {responseCode}
                  </code>
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
