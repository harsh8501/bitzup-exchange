import { useState, useEffect, useRef } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FiCopy, FiCheck } from "react-icons/fi";
import { Link } from "react-router-dom";

export const GetSpotCoinInfo = () => {
  const contentRef = useRef(null);

  const [lang, setLang] = useState("HTTP");
  const [copied, setCopied] = useState(false);
  const [copiedRes, setCopiedRes] = useState(false);

  const [activeSection, setActiveSection] = useState("http");

  const HEADER_OFFSET = 120;

  const codeMap = {
    HTTP: `curl -s 'https://api.bitzup.com/market/exchangeinfoall?symbol=BTCUSDT&limit=1'`,
    Python: `import requests

url = "https://api.bitzup.com/market/exchangeinfoall"
params = {
    "symbol": "BTCUSDT",
    "limit": "1"
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
    url := "https://api.bitzup.com/market/exchangeinfoall?symbol=BTCUSDT&limit=1"

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

public class GetCoinInfoDemo {
    public static void main(String[] args) throws Exception {
        String url = "https://api.bitzup.com/market/exchangeinfoall?symbol=BTCUSDT&limit=1";

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

async function getSpotCoinInfo() {
    try {
        const response = await axios.get('https://api.bitzup.com/market/exchangeinfoall', {
            params: { symbol: 'BTCUSDT', limit: '1' }
        });
        console.log(response.data);
    } catch (error) {
        console.error(error.message);
    }
}

getSpotCoinInfo();`,
  };

  const responseCode = `{
  "offset": 0,
  "limit": 10,
  "total": 2259,
  "hasMore": true,
  "data": [
    {
      "pair_id": 5,
      "base_asset_id": "BTC7B97123",
      "quantity_decimal": 5,
      "price_decimal": 2,
      "quote_asset_id": "USDT7B6D0D",
      "pair_symbol": "BTCUSDT",
      "current_price": 64022.13,
      "popular": 1,
      "change_in_price": "0.9",
      "volume": "866136237.2",
      "turnover": 866136237.2,
      "api_id": "binance",
      "tag": "Public Chain,PoW",
      "quote_tag": "USDT",
      "base_asset_symbol": "BTC",
      "coin_icon": "https://bitzupicons.blr1.cdn.digitaloceanspaces.com/btc.png",
      "coin_name": "BTC",
      "quote_asset_symbol": "USDT",
      "icon_url": null,
      "coin_id": null
    },
    {
      "pair_id": 2,
      "base_asset_id": "ETH4AC702F",
      "quantity_decimal": 4,
      "price_decimal": 2,
      "quote_asset_id": "USDT7B6D0D",
      "pair_symbol": "ETHUSDT",
      "current_price": 1912.5,
      "popular": 0,
      "change_in_price": "0.02",
      "volume": "93628984.87",
      "turnover": 93628984.87,
      "api_id": "bitget",
      "tag": "Public Chain,PoS",
      "quote_tag": "USDT",
      "base_asset_symbol": "ETH",
      "coin_icon": "https://bitzupicons.blr1.cdn.digitaloceanspaces.com/eth.png",
      "coin_name": "ETH",
      "quote_asset_symbol": "USDT",
      "icon_url": null,
      "coin_id": null
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
              <span className="pill">Get Coin Info</span>
            </div>

            {/* Title */}
            <h1 className="api-title">Get Coin Info</h1>
            <div className="mb-3">
              <span className="badge bg-secondary text-light">Frequency limit: 3 times/1s (IP)</span>
            </div>
            <p className="api-desc">
              Get spot coin information, supporting both individual and full queries.
            </p>

            {/* HTTP REQUEST */}
            <h3 className="top-req-text" id="http">
              HTTP Request
            </h3>
            <div className="http-path mb-4">
              <span className="method get">GET</span>
              <span className="path">/market/exchangeinfoall</span>
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
                    <td>No</td>
                    <td>Trading pair symbol e.g., <span className="pill">BTCUSDT</span>. If left blank, it will not be sent in the URL and all coins will be returned.</td>
                  </tr>
                  <tr>
                    <td>limit</td>
                    <td>String / Number</td>
                    <td>No</td>
                    <td>Number of results to return. Default: <span className="pill">50</span> (or <span className="pill">1</span> when symbol is specified)</td>
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
                    <td>offset</td>
                    <td>Number</td>
                    <td>Offset pagination index</td>
                  </tr>
                  <tr>
                    <td>limit</td>
                    <td>Number</td>
                    <td>Number of records per page</td>
                  </tr>
                  <tr>
                    <td>total</td>
                    <td>Number</td>
                    <td>Total number of records</td>
                  </tr>
                  <tr>
                    <td>hasMore</td>
                    <td>Boolean</td>
                    <td>Whether more records exist (<span className="pill">true</span> / <span className="pill">false</span>)</td>
                  </tr>
                  <tr>
                    <td>data</td>
                    <td>Array</td>
                    <td>Coin & Exchange trading pairs list</td>
                  </tr>
                  <tr>
                    <td>&gt; pair_id</td>
                    <td>Number</td>
                    <td>Trading pair ID</td>
                  </tr>
                  <tr>
                    <td>&gt; pair_symbol</td>
                    <td>String</td>
                    <td>Trading pair symbol e.g., <span className="pill">BTCUSDT</span></td>
                  </tr>
                  <tr>
                    <td>&gt; base_asset_symbol</td>
                    <td>String</td>
                    <td>Base asset symbol e.g., <span className="pill">BTC</span></td>
                  </tr>
                  <tr>
                    <td>&gt; quote_asset_symbol</td>
                    <td>String</td>
                    <td>Quote asset symbol e.g., <span className="pill">USDT</span></td>
                  </tr>
                  <tr>
                    <td>&gt; current_price</td>
                    <td>Number</td>
                    <td>Current market price</td>
                  </tr>
                  <tr>
                    <td>&gt; change_in_price</td>
                    <td>String</td>
                    <td>24h price change percentage</td>
                  </tr>
                  <tr>
                    <td>&gt; volume</td>
                    <td>String</td>
                    <td>24h trading volume</td>
                  </tr>
                  <tr>
                    <td>&gt; turnover</td>
                    <td>Number</td>
                    <td>24h trading turnover</td>
                  </tr>
                  <tr>
                    <td>&gt; tag</td>
                    <td>String</td>
                    <td>Tags associated with asset (e.g. Public Chain, PoW)</td>
                  </tr>
                  <tr>
                    <td>&gt; coin_icon</td>
                    <td>String</td>
                    <td>Asset icon URL</td>
                  </tr>
                  <tr>
                    <td>&gt; coin_name</td>
                    <td>String</td>
                    <td>Full coin name</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div>
              <Link to={"/docs/spot/market/coin-info-api"} className="run-btn" style={{ marginBottom: "20px" }}>RUN &gt;&gt;</Link>
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

export default GetSpotCoinInfo;
