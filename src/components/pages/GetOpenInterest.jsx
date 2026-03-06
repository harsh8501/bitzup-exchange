import { useState, useEffect, useRef } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FiCopy, FiCheck } from "react-icons/fi";

export const GetOpenInterest = () => {
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
    "symbol": "BTCUSD",
    "category": "inverse",
    "list": [
      {
        "openInterest": "461134384.00000000",
        "timestamp": "1669571400000"
      },
      {
        "openInterest": "461134292.00000000",
        "timestamp": "1669571100000"
      }
    ],
    "nextPageCursor": ""
  },
  "retExtInfo": {},
  "time": 1672053548579
}`;

    const codeMap = {
        HTTP: `GET /v5/market/open-interest?category=inverse&symbol=BTCUSD&intervalTime=5min&startTime=1669571100000&endTime=1669571400000 HTTP/1.1
Host: api.bitzup.com`,

    Python: `import requests

url = "https://api.bitzup.com/v5/market/open-interest"
params = {
    "category": "inverse",
    "symbol": "BTCUSD",
    "intervalTime": "5min",
    "startTime": "1669571100000",
    "endTime": "1669571400000"
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
    url := "https://api.bitzup.com/v5/market/open-interest?category=inverse&symbol=BTCUSD&intervalTime=5min&startTime=1669571100000&endTime=1669571400000"

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

public class GetOpenInterestDemo {
    public static void main(String[] args) throws Exception {
        String url = "https://api.bitzup.com/v5/market/open-interest?category=inverse&symbol=BTCUSD&intervalTime=5min&startTime=1669571100000&endTime=1669571400000";

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

async function getOpenInterest() {
    try {
        const response = await axios.get(
            'https://api.bitzup.com/v5/market/open-interest',
            {
                params: {
                    category: 'inverse',
                    symbol: 'BTCUSD',
                    intervalTime: '5min',
                    startTime: 1669571100000,
                    endTime: 1669571400000
                }
            }
        );
        console.log(response.data);
    } catch (error) {
        console.error(error.message);
    }
}

getOpenInterest();`,
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
                <span className="pill">Get Open Interest</span>
              </div>

              {/* Title */}
              <h1 className="api-title">Get Open Interest</h1>
              <p className="api-desc">
                Get the open interest of each symbol.
              </p>

              {/* HTTP REQUEST */}
              <h3 className="top-req-text" id="http">
                HTTP Request
              </h3>
              <div className="http-path">
                <span className="method get">GET</span>
                <span className="path">/v5/market/open-interest</span>
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
                      <td>true</td>
                      <td>string</td>
                      <td>Symbol name.</td>
                    </tr>
                    <tr>
                      <td>intervalTime</td>
                      <td>true</td>
                      <td>string</td>
                      <td>Interval. <code>5min</code>, <code>15min</code>, <code>30min</code>, <code>1h</code>, <code>4h</code>, <code>1d</code></td>
                    </tr>
                    <tr>
                      <td>startTime</td>
                      <td>false</td>
                      <td>integer</td>
                      <td>The start timestamp (ms)</td>
                    </tr>
                    <tr>
                      <td>endTime</td>
                      <td>false</td>
                      <td>integer</td>
                      <td>The end timestamp (ms)</td>
                    </tr>
                    <tr>
                      <td>limit</td>
                      <td>false</td>
                      <td>integer</td>
                      <td>Limit for data size per page. [1, 200]. Default: 50</td>
                    </tr>
                    <tr>
                      <td>cursor</td>
                      <td>false</td>
                      <td>string</td>
                      <td>Cursor. Use the <code>nextPageCursor</code> token from the response to retrieve the next page of the result set</td>
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
                      <td>An array of objects</td>
                    </tr>
                    <tr>
                      <td>&gt; openInterest</td>
                      <td>string</td>
                      <td>Open interest</td>
                    </tr>
                    <tr>
                      <td>&gt; timestamp</td>
                      <td>string</td>
                      <td>The timestamp (ms)</td>
                    </tr>
                    <tr>
                      <td>nextPageCursor</td>
                      <td>string</td>
                      <td>Cursor. Used to pagination</td>
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
