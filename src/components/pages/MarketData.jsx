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
  "status": "1",
   "message": "SUCCESS",
  "data": [
    {
      "symbol": "BTCUSDT",
      "base_coin": "BTC",
      "quote_coin": "USDT",
      "icon": "https://api.bitzup.com/futures/icons/btc.png",
      "last_price": "89545.50000000",
      "volume_24h": "51974.06100000",
      "turnover_24h": "4647757231.36940000",
      "change_24h": "-0.5000",
      "max_leverage": "100.00",
      "price_decimal": 1,
      "qty_decimal": 3,
      "qty_step": null,
      "minOrderQty": "0.001000",
      "maxOrderQty": "1190.00000000",
      "maxMktOrderQty": "500.00000000"
    }
  ]
}`;

  const codeMap = {
    HTTP: `GET /v1/market-info HTTP/1.1
Host: https://api.bitzup.com/futures/api`,

    Python: `import requests

url = "https://api.bitzup.com/futures/api/v1/market-info"



try:
    response = requests.get(url, timeout=10)
    response.raise_for_status()
    print(response.json())
except requests.exceptions.HTTPError:
    print("API Error:", response.text)
except requests.exceptions.RequestException as e:
    print("Network Error:", str(e))`,

    Go: `package main

import (
    "fmt"
    "io"
    "net/http"
    "net/url"
    "time"
)

func main() {
    baseURL := "https://api.bitzup.com/futures/api/v1/market-info"

   

    reqURL := baseURL

    client := &http.Client{
        Timeout: 10 * time.Second,
    }

    req, err := http.NewRequest("GET", reqURL, nil)
    if err != nil {
        panic(err)
    }

    resp, err := client.Do(req)
    if err != nil {
        panic(err)
    }
    defer resp.Body.Close()

    body, _ := io.ReadAll(resp.Body)

    if resp.StatusCode != http.StatusOK {
        fmt.Println("API Error:", string(body))
        return
    }

    fmt.Println(string(body))
}`,

    Java: `import java.net.URI;
import java.net.URLEncoder;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.nio.charset.StandardCharsets;
import java.time.Duration;

public class OrderBookExample {

    public static void main(String[] args) throws Exception {
        String baseUrl = "https://api.bitzup.com/futures/api/v1/market-info";

      

        HttpClient client = HttpClient.newBuilder()
            .connectTimeout(Duration.ofSeconds(10))
            .build();

        HttpRequest request = HttpRequest.newBuilder()
            .uri(URI.create(baseUrl))
            .timeout(Duration.ofSeconds(10))
            .GET()
            .build();

        HttpResponse<String> response =
            client.send(request, HttpResponse.BodyHandlers.ofString());

        if (response.statusCode() != 200) {
            System.out.println("API Error: " + response.body());
            return;
        }

        System.out.println(response.body());
    }

    private static String encode(String value) {
        return URLEncoder.encode(value, StandardCharsets.UTF_8);
    }
}`,

    Node: `const axios = require("axios");

async function marketInfo() {
  try {
    const response = await axios.get(
      "https://api.bitzup.com/futures/api/v1/market-info",
      {
       
        timeout: 10000,
      }
    );

    console.log(response.data);
  } catch (err) {
    if (err.response) {
      console.error("API Error:", err.response.data);
    } else {
      console.error("Network Error:", err.message);
    }
  }
}

marketInfo();`,
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
              <span className="pill">Get Market Info</span>
            </div>

            {/* Title */}
            <h1 className="api-title"> Get Market Info</h1>
            <p className="api-desc">
              Returns the list of available trading pairs with pricing, volume,
              leverage, and trading limits.
            </p>

            <div className="api-cover">USDT contract</div>

            {/* HTTP REQUEST */}
            <h3 className="top-req-text" id="http">
              HTTP Request
            </h3>
            <div className="http-path">
              <span className="method">GET</span>
              <span className="path">/v1/market-info</span>
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
                    <td>symbol</td>
                    <td>string</td>
                    <td>Symbol name</td>
                  </tr>
                  <tr>
                    <td>base_coin</td>
                    <td>string</td>
                    <td> Base asset</td>
                  </tr>
                  <tr>
                    <td>quote_coin</td>
                    <td>string</td>
                    <td> Quote asset</td>
                  </tr>

                  <tr>
                    <td>icon </td>
                    <td>string (URL)</td>
                    <td>Asset icon</td>
                  </tr>

                  <tr>
                    <td>last_price</td>
                    <td>string</td>
                    <td>Latest traded price</td>
                  </tr>

                  <tr>
                    <td>volume_24h</td>
                    <td>string</td>
                    <td>24-hour trading volume</td>
                  </tr>

                  <tr>
                    <td>time</td>
                    <td>string</td>
                    <td>Trade time (ms)</td>
                  </tr>

                  <tr>
                    <td>turnover_24h</td>
                    <td>string</td>
                    <td>24-hour turnover</td>
                  </tr>

                  <tr>
                    <td>change_24h </td>
                    <td>string</td>
                    <td>24-hour price change (%)</td>
                  </tr>

                  <tr>
                    <td>max_leverage</td>
                    <td>string</td>
                    <td> Maximum allowed leverage</td>
                  </tr>
                  <tr>
                    <td>price_decimal</td>
                    <td>string</td>
                    <td>Price precision </td>
                  </tr>
                  <tr>
                    <td>qty_decimal</td>
                    <td>string</td>
                    <td>Quantity precision </td>
                  </tr>
                  <tr>
                    <td>qty_step</td>
                    <td>string</td>
                    <td>Quantity step size</td>
                  </tr>
                  <tr>
                    <td>minOrderQty</td>
                    <td>string</td>
                    <td>Minimum order quantity</td>
                  </tr>
                  <tr>
                    <td>maxOrderQty</td>
                    <td>string</td>
                    <td>Maximum order quantity</td>
                  </tr>
                  <tr>
                    <td>maxMktOrderQty</td>
                    <td>string</td>
                    <td>Maximum market order quantity</td>
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
                <code>
                  {"{"}
                  {"\n"} "status": "1",
                  {"\n"} "message": "SUCCESS",
                  {"\n"} "data": [{"\n"} {"{"}
                  {"\n"} "symbol": "BTCUSDT",
                  {"\n"} "base_coin": "BTC",
                  {"\n"} "quote_coin": "USDT",
                  {"\n"} "icon": "https://api.bitzup.com/futures/icons/btc.png",
                  {"\n"} "last_price": "89545.50000000",
                  {"\n"} "volume_24h": "51974.06100000",
                  {"\n"} "turnover_24h": "4647757231.36940000",
                  {"\n"} "change_24h": "-0.5000",
                  {"\n"} "max_leverage": "100.00",
                  {"\n"} "price_decimal": 1,
                  {"\n"} "qty_decimal": 3,
                  {"\n"} "qty_step": null,
                  {"\n"} "minOrderQty": "0.001000",
                  {"\n"} "maxOrderQty": "1190.00000000",
                  {"\n"} "maxMktOrderQty": "500.00000000"
                  {"\n"} {"}"}
                  {"\n"} ]{"\n"}
                  {"}"}
                </code>
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
