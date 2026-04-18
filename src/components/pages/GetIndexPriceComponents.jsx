import { useState, useEffect, useRef } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FiCopy, FiCheck } from "react-icons/fi";

export const GetIndexPriceComponents = () => {
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
  "retMsg": "",
  "result": {
    "indexName": "1000BTTUSDT",
    "lastPrice": "0.0006496",
    "updateTime": "1758182745072",
    "components": [
      {
        "exchange": "GateIO",
        "spotPair": "BTT_USDT",
        "equivalentPrice": "0.0006485",
        "multiplier": "1000",
        "price": "0.0006485",
        "weight": "0.1383220862762299"
      },
      {
        "exchange": "Bitzup",
        "spotPair": "BTTUSDT",
        "equivalentPrice": "0.0006502",
        "multiplier": "1000",
        "price": "0.0006502",
        "weight": "0.0407528429737999"
      },
      {
        "exchange": "Bitget",
        "spotPair": "BTTUSDT",
        "equivalentPrice": "0.000648",
        "multiplier": "1000",
        "price": "0.000648",
        "weight": "0.1629044859431618"
      },
      {
        "exchange": "BitMart",
        "spotPair": "BTT_USDT",
        "equivalentPrice": "0.000649",
        "multiplier": "1000",
        "price": "0.000649",
        "weight": "0.0432327388538453"
      },
      {
        "exchange": "Binance",
        "spotPair": "BTTCUSDT",
        "equivalentPrice": "0.00065",
        "multiplier": "1000",
        "price": "0.00065",
        "weight": "0.5322401401714303"
      },
      {
        "exchange": "Mexc",
        "spotPair": "BTTUSDT",
        "equivalentPrice": "0.0006517",
        "multiplier": "1000",
        "price": "0.0006517",
        "weight": "0.0825477057815328"
      }
    ]
  },
  "retExtInfo": {},
  "time": 1758182745621
}`;

    const codeMap = {
        HTTP: `GET /v5/market/index-price-components?indexName=1000BTTUSDT HTTP/1.1
Host: api.bitzup.com`,

    Python: `import requests

url = "https://api.bitzup.com/v5/market/index-price-components"
params = {
    "indexName": "1000BTTUSDT"
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
    url := "https://api.bitzup.com/v5/market/index-price-components?indexName=1000BTTUSDT"

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

public class GetIndexPriceComponentsDemo {
    public static void main(String[] args) throws Exception {
        String url = "https://api.bitzup.com/v5/market/index-price-components?indexName=1000BTTUSDT";

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

async function getIndexPriceComponents() {
    try {
        const response = await axios.get(
            'https://api.bitzup.com/v5/market/index-price-components',
            {
                params: {
                    indexName: '1000BTTUSDT'
                }
            }
        );
        console.log(response.data);
    } catch (error) {
        console.error(error.message);
    }
}

getIndexPriceComponents();`,
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
                <span className="pill">Get Index Price Components</span>
              </div>

              {/* Title */}
              <h1 className="api-title">Get Index Price Components</h1>
              <p className="api-desc">
                Get index price components.
              </p>

              {/* HTTP REQUEST */}
              <h3 className="top-req-text" id="http">
                HTTP Request
              </h3>
              <div className="http-path">
                <span className="method get">GET</span>
                <span className="path">/v5/market/index-price-components</span>
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
                      <td>indexName</td>
                      <td>true</td>
                      <td>string</td>
                      <td>Index name, e.g., <code>BTCUSDT</code></td>
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
                      <td>indexName</td>
                      <td>string</td>
                      <td>Index name</td>
                    </tr>
                    <tr>
                      <td>lastPrice</td>
                      <td>string</td>
                      <td>Index price</td>
                    </tr>
                    <tr>
                      <td>updateTime</td>
                      <td>string</td>
                      <td>Timestamp of index price update (ms)</td>
                    </tr>
                    <tr>
                      <td>components</td>
                      <td>array</td>
                      <td>An array of objects</td>
                    </tr>
                    <tr>
                      <td>&gt; exchange</td>
                      <td>string</td>
                      <td>Exchange name</td>
                    </tr>
                    <tr>
                      <td>&gt; spotPair</td>
                      <td>string</td>
                      <td>Spot pair name</td>
                    </tr>
                    <tr>
                      <td>&gt; equivalentPrice</td>
                      <td>string</td>
                      <td>Converted price based on <code>multiplier</code> and <code>price</code></td>
                    </tr>
                    <tr>
                      <td>&gt; multiplier</td>
                      <td>string</td>
                      <td>The multiplier</td>
                    </tr>
                    <tr>
                      <td>&gt; price</td>
                      <td>string</td>
                      <td>Original spot price</td>
                    </tr>
                    <tr>
                      <td>&gt; weight</td>
                      <td>string</td>
                      <td>The weight of the exchange</td>
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
