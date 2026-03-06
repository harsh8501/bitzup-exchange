import { useState, useEffect, useRef } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FiCopy, FiCheck } from "react-icons/fi";

export const GetAccountInstrumentsInfo = () => {
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
        "symbol": "1000000BABYDOGEUSDT",
        "contractType": "LinearPerpetual",
        "status": "Trading",
        "baseCoin": "1000000BABYDOGE",
        "quoteCoin": "USDT",
        "launchTime": "1718098044000",
        "deliveryTime": "0",
        "deliveryFeeRate": "",
        "priceScale": "7",
        "leverageFilter": {
          "minLeverage": "1",
          "maxLeverage": "25.00",
          "leverageStep": "0.01"
        },
        "priceFilter": {
          "minPrice": "0.0000001",
          "maxPrice": "1.9999998",
          "tickSize": "0.0000001"
        },
        "lotSizeFilter": {
          "maxOrderQty": "60000000",
          "minOrderQty": "100",
          "qtyStep": "100",
          "postOnlyMaxOrderQty": "60000000",
          "maxMktOrderQty": "12000000",
          "minNotionalValue": "5"
        },
        "unifiedMarginTrade": true,
        "fundingInterval": 240,
        "settleCoin": "USDT",
        "copyTrading": "none",
        "upperFundingRate": "0.02",
        "lowerFundingRate": "-0.02",
        "isPreListing": false,
        "preListingInfo": null,
        "riskParameters": {
          "priceLimitRatioX": "0.15",
          "priceLimitRatioY": "0.3"
        },
        "displayName": "",
        "symbolType": "innovation",
        "myRpiPermission": true,
        "isPublicRpi": true
      }
    ],
    "nextPageCursor": ""
  },
  "retExtInfo": {},
  "time": 1760510800094
}`;

    const codeMap = {
        HTTP: `GET /v5/account/instruments-info?category=linear&symbol=1000000BABYDOGEUSDT HTTP/1.1
Host: api.bitzup.com`,

    Python: `import requests

url = "https://api.bitzup.com/v5/account/instruments-info"
params = {
    "category": "linear",
    "symbol": "1000000BABYDOGEUSDT"
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
    url := "https://api.bitzup.com/v5/account/instruments-info?category=linear&symbol=1000000BABYDOGEUSDT"

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

public class GetAccountInstrumentsInfoDemo {
    public static void main(String[] args) throws Exception {
        String url = "https://api.bitzup.com/v5/account/instruments-info?category=linear&symbol=1000000BABYDOGEUSDT";

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

async function getAccountInstrumentsInfo() {
    try {
        const response = await axios.get(
            'https://api.bitzup.com/v5/account/instruments-info',
            {
                params: {
                    category: 'linear',
                    symbol: '1000000BABYDOGEUSDT'
                }
            }
        );
        console.log(response.data);
    } catch (error) {
        console.error(error.message);
    }
}

getAccountInstrumentsInfo();`,
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
                <span className="kline-market">Account</span>
                <span className="mx-2">
                  <IoIosArrowForward className="kline-arrow" />
                </span>
                <span className="pill">Get Account Instruments Info</span>
              </div>

              {/* Title */}
              <h1 className="api-title">Get Account Instruments Info</h1>
              <p className="api-desc">
                Query for the instrument specification of online trading pairs that available to users.
              </p>

              {/* HTTP REQUEST */}
              <h3 className="top-req-text" id="http">
                HTTP Request
              </h3>
              <div className="http-path">
                <span className="method get">GET</span>
                <span className="path">/v5/account/instruments-info</span>
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
                      <td>false</td>
                      <td>string</td>
                      <td>Symbol name.</td>
                    </tr>
                    <tr>
                      <td>status</td>
                      <td>false</td>
                      <td>string</td>
                      <td>Instrument status.</td>
                    </tr>
                    <tr>
                      <td>baseCoin</td>
                      <td>false</td>
                      <td>string</td>
                      <td>Base coin.</td>
                    </tr>
                    <tr>
                      <td>limit</td>
                      <td>false</td>
                      <td>integer</td>
                      <td>Limit for data size per page.</td>
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
                      <td>nextPageCursor</td>
                      <td>string</td>
                      <td>Cursor. Used for pagination</td>
                    </tr>
                    <tr>
                      <td>list</td>
                      <td>array</td>
                      <td>Object</td>
                    </tr>
                    <tr>
                      <td>&gt; symbol</td>
                      <td>string</td>
                      <td>Symbol name</td>
                    </tr>
                    <tr>
                      <td>&gt; contractType</td>
                      <td>string</td>
                      <td>Contract type</td>
                    </tr>
                    <tr>
                      <td>&gt; status</td>
                      <td>string</td>
                      <td>Instrument status</td>
                    </tr>
                    <tr>
                      <td>&gt; baseCoin</td>
                      <td>string</td>
                      <td>Base coin</td>
                    </tr>
                    <tr>
                      <td>&gt; quoteCoin</td>
                      <td>string</td>
                      <td>Quote coin</td>
                    </tr>
                    <tr>
                      <td>&gt; launchTime</td>
                      <td>string</td>
                      <td>Launch time (ms)</td>
                    </tr>
                    <tr>
                      <td>&gt; deliveryTime</td>
                      <td>string</td>
                      <td>Delivery time (ms)</td>
                    </tr>
                    <tr>
                      <td>&gt; deliveryFeeRate</td>
                      <td>string</td>
                      <td>Delivery fee rate</td>
                    </tr>
                    <tr>
                      <td>&gt; priceScale</td>
                      <td>string</td>
                      <td>Price scale</td>
                    </tr>
                    <tr>
                      <td>&gt; leverageFilter</td>
                      <td>object</td>
                      <td>Leverage filter parameters</td>
                    </tr>
                    <tr>
                      <td>&gt; priceFilter</td>
                      <td>object</td>
                      <td>Price filter parameters</td>
                    </tr>
                    <tr>
                      <td>&gt; lotSizeFilter</td>
                      <td>object</td>
                      <td>Lot size filter parameters</td>
                    </tr>
                    <tr>
                      <td>&gt; unifiedMarginTrade</td>
                      <td>boolean</td>
                      <td>Whether to support unified margin trade</td>
                    </tr>
                    <tr>
                      <td>&gt; fundingInterval</td>
                      <td>integer</td>
                      <td>Funding interval (in minutes)</td>
                    </tr>
                    <tr>
                      <td>&gt; settleCoin</td>
                      <td>string</td>
                      <td>Settle coin</td>
                    </tr>
                    <tr>
                      <td>&gt; copyTrading</td>
                      <td>string</td>
                      <td>Copy trading status</td>
                    </tr>
                    <tr>
                      <td>&gt; upperFundingRate</td>
                      <td>string</td>
                      <td>Upper funding rate limit</td>
                    </tr>
                    <tr>
                      <td>&gt; lowerFundingRate</td>
                      <td>string</td>
                      <td>Lower funding rate limit</td>
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
