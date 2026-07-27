import { useState, useEffect, useRef } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FiCopy, FiCheck } from "react-icons/fi";
import { Link } from "react-router-dom";

export const GetSpotQuotedPrice = () => {
  const contentRef = useRef(null);

  const [lang, setLang] = useState("HTTP");
  const [copied, setCopied] = useState(false);
  const [copiedRes, setCopiedRes] = useState(false);

  const [activeSection, setActiveSection] = useState("http");

  const HEADER_OFFSET = 120;

  const codeMap = {
    HTTP: `curl "https://api.bitget.com/api/v2/convert/quoted-price?fromCoin=USDT&toCoin=ETH&fromCoinSize=10" \\
  -H "ACCESS-KEY:*******" \\
  -H "ACCESS-SIGN:*" \\
  -H "ACCESS-PASSPHRASE:*" \\
  -H "ACCESS-TIMESTAMP:1659076670000" \\
  -H "locale:en-US" \\
  -H "Content-Type: application/json"`,
    Python: `import requests

url = "https://api.bitget.com/api/v2/convert/quoted-price"
headers = {
    "ACCESS-KEY": "*******",
    "ACCESS-SIGN": "*",
    "ACCESS-PASSPHRASE": "*",
    "ACCESS-TIMESTAMP": "1659076670000",
    "locale": "en-US",
    "Content-Type": "application/json"
}
params = {
    "fromCoin": "USDT",
    "toCoin": "ETH",
    "fromCoinSize": "10"
}

response = requests.get(url, headers=headers, params=params)
print(response.json())`,
    Go: `package main

import (
    "fmt"
    "io"
    "net/http"
)

func main() {
    url := "https://api.bitget.com/api/v2/convert/quoted-price?fromCoin=USDT&toCoin=ETH&fromCoinSize=10"

    req, err := http.NewRequest("GET", url, nil)
    if err != nil {
        fmt.Println(err)
        return
    }

    req.Header.Add("ACCESS-KEY", "*******")
    req.Header.Add("ACCESS-SIGN", "*")
    req.Header.Add("ACCESS-PASSPHRASE", "*")
    req.Header.Add("ACCESS-TIMESTAMP", "1659076670000")
    req.Header.Add("locale", "en-US")
    req.Header.Add("Content-Type", "application/json")

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

public class GetSpotQuotedPriceDemo {
    public static void main(String[] args) throws Exception {
        String url = "https://api.bitget.com/api/v2/convert/quoted-price?fromCoin=USDT&toCoin=ETH&fromCoinSize=10";

        HttpClient client = HttpClient.newHttpClient();
        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create(url))
                .header("ACCESS-KEY", "*******")
                .header("ACCESS-SIGN", "*")
                .header("ACCESS-PASSPHRASE", "*")
                .header("ACCESS-TIMESTAMP", "1659076670000")
                .header("locale", "en-US")
                .header("Content-Type", "application/json")
                .GET()
                .build();

        HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
        System.out.println(response.body());
    }
}`,
    Node: `const axios = require('axios');

async function getSpotQuotedPrice() {
    try {
        const response = await axios.get('https://api.bitget.com/api/v2/convert/quoted-price', {
            headers: {
                'ACCESS-KEY': '*******',
                'ACCESS-SIGN': '*',
                'ACCESS-PASSPHRASE': '*',
                'ACCESS-TIMESTAMP': '1659076670000',
                'locale': 'en-US',
                'Content-Type': 'application/json'
            },
            params: { fromCoin: 'USDT', toCoin: 'ETH', fromCoinSize: '10' }
        });
        console.log(response.data);
    } catch (error) {
        console.error(error.message);
    }
}

getSpotQuotedPrice();`,
  };

  const responseCode = `{
  "code": "00000",
  "data": {
    "fee": "0",
    "fromCoinSize": "10",
    "fromCoin": "USDT",
    "cnvtPrice": "0.0005226794534969",
    "toCoinSize": "0.23206967",
    "toCoin": "ETH",
    "traceId": "1"
  },
  "msg": "success",
  "requestTime": 1627293612502
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
              <span className="kline-market">Convert</span>
              <span className="mx-2">
                <IoIosArrowForward className="kline-arrow" />
              </span>
              <span className="pill">Get Quoted Price</span>
            </div>

            {/* Title */}
            <h1 className="api-title">Get Quoted Price</h1>
            <div className="mb-3">
              <span className="badge bg-secondary text-light">Frequency limit: 10 times/1s (User ID)</span>
            </div>
            <p className="api-desc">
              Get Quoted Price for cryptocurrency conversion.
            </p>

            {/* HTTP REQUEST */}
            <h3 className="top-req-text" id="http">
              HTTP Request
            </h3>
            <div className="http-path mb-4">
              <span className="method get">GET</span>
              <span className="path">/api/v2/convert/quoted-price</span>
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
                    <td>fromCoin</td>
                    <td>String</td>
                    <td>Yes</td>
                    <td>Quote currency</td>
                  </tr>
                  <tr>
                    <td>fromCoinSize</td>
                    <td>String</td>
                    <td>No</td>
                    <td>Number of quote coins. Only one of <span className="pill">fromCoinSize</span> and <span className="pill">toCoinSize</span> is allowed</td>
                  </tr>
                  <tr>
                    <td>toCoin</td>
                    <td>String</td>
                    <td>Yes</td>
                    <td>Target currency</td>
                  </tr>
                  <tr>
                    <td>toCoinSize</td>
                    <td>String</td>
                    <td>No</td>
                    <td>Number of target coins. Only one of <span className="pill">fromCoinSize</span> and <span className="pill">toCoinSize</span> is allowed</td>
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
                    <td>code</td>
                    <td>String</td>
                    <td>Response code (e.g., <span className="pill">00000</span> for success)</td>
                  </tr>
                  <tr>
                    <td>msg</td>
                    <td>String</td>
                    <td>Response message (e.g., <span className="pill">success</span>)</td>
                  </tr>
                  <tr>
                    <td>requestTime</td>
                    <td>Number</td>
                    <td>Request timestamp in milliseconds</td>
                  </tr>
                  <tr>
                    <td>data</td>
                    <td>Object</td>
                    <td>Quoted price data object</td>
                  </tr>
                  <tr>
                    <td>&gt; fromCoin</td>
                    <td>String</td>
                    <td>Quote currency</td>
                  </tr>
                  <tr>
                    <td>&gt; fromCoinSize</td>
                    <td>String</td>
                    <td>Number of currencies</td>
                  </tr>
                  <tr>
                    <td>&gt; cnvtPrice</td>
                    <td>String</td>
                    <td>Swap price. Flash price = Quote currency price / Target currency price</td>
                  </tr>
                  <tr>
                    <td>&gt; toCoin</td>
                    <td>String</td>
                    <td>Target currency</td>
                  </tr>
                  <tr>
                    <td>&gt; toCoinSize</td>
                    <td>String</td>
                    <td>Number of target currencies</td>
                  </tr>
                  <tr>
                    <td>&gt; traceId</td>
                    <td>String</td>
                    <td>RFQ id</td>
                  </tr>
                  <tr>
                    <td>&gt; fee</td>
                    <td>String</td>
                    <td>Transaction fee</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div>
              <Link to={"/docs/spot/convert/quoted-price-api"} className="run-btn" style={{ marginBottom: "20px" }}>RUN &gt;&gt;</Link>
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

export default GetSpotQuotedPrice;
