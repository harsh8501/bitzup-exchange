import { useState, useEffect, useRef } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FiCopy, FiCheck } from "react-icons/fi";

export const RecentPublicTrades = () => {

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
  "status": "1",
  "message": "SUCCESS",
  "data": [
    {
      "symbol": "BTCUSDT",
      "price": "88720.00",
      "size": "0.055",
      "side": "Buy",
      "time": "1769000270980"
    },
    {
      "symbol": "BTCUSDT",
      "price": "88720.00",
      "size": "0.004",
      "side": "Buy",
      "time": "1769000270980"
    }
  ]
}`;

  const codeMap = {
    HTTP: `GET /v1/get-trades?symbol=BTCUSDT&limit=2 HTTP/1.1
Host: https://api.bitzup.com/futures/api`,

    Python: `import requests

url = "https://api.bitzup.com/futures/api/v1/get-trades"

params = {
    "symbol": "BTCUSDT",
    "limit": 2,
}

try:
    response = requests.get(url, params=params, timeout=10)
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
	baseURL := "https://api.bitzup.com/futures/api/v1/get-trades"

	params := url.Values{}
	params.Add("symbol", "BTCUSDT")
	params.Add("limit", "2")

	reqURL := baseURL + "?" + params.Encode()

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
        String baseUrl = "https://api.bitzup.com/futures/api/v1/get-trades";

        String query = String.format(
            "symbol=%s&limit=%s",
            encode("BTCUSDT"),
            encode("2")
        );

        HttpClient client = HttpClient.newBuilder()
            .connectTimeout(Duration.ofSeconds(10))
            .build();

        HttpRequest request = HttpRequest.newBuilder()
            .uri(URI.create(baseUrl + "?" + query))
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

async function getTrades() {
  try {
    const response = await axios.get(
      "https://api.bitzup.com/futures/api/v1/get-trades",
      {
        params: {
          symbol: "BTCUSDT",
          limit: 2,
        },
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

getTrades();`,
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
              <span className="pill">
                Get Recent Public Trades
              </span>
            </div>


            {/* Title */}
            <h1 className="api-title"> Get Recent Public Trades</h1>
            <p className="api-desc">
              Query recent public trading history in BitZup.
            </p>

            <div className="api-cover">USDT contract</div>
            

            {/* HTTP REQUEST */}
            <h3 className="top-req-text" id="http">HTTP Request</h3>
            <div className="http-path">
              <span className="method">GET</span>
              <span className="path">/v1/get-trades</span>
            </div>

            {/* REQUEST PARAMETERS */}
            <h3 className="top-req-text" id="request-params">Request Parameters</h3>
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
                    <td>limit</td>
                    <td>false</td>
                    <td>integer</td>
                    <td>
                      Limit for data size per page. [
                      <span className="pill">1</span>,
                      <span className="pill">1000</span> ]. Default:{" "}
                      <span className="pill"> 500 </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="top-req-text" id="response-params">Response Parameters</h3>
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
                    <td>price</td>
                    <td>string</td>
                    <td>Trade price</td>
                  </tr>
                  <tr>
                    <td>size</td>
                    <td>string</td>
                    <td>Trade Size</td>
                  </tr>

                  <tr>
                    <td>side</td>
                    <td>string</td>
                    <td>Side of taker <span className="pill"> Buy</span>, <span className="pill"> Sell</span></td>
                  </tr>

                  <tr>
                    <td>time</td>
                    <td>string</td>
                    <td>Trade time (ms)</td>
                  </tr>

                  
                </tbody>
              </table>
            </div>

            {/* REQUEST EXAMPLE */}
            <h3 className="top-req-text" id="request-example">Request Example</h3>

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
            <h3 className="top-req-text" id="response-example">Response Example</h3>
            <div className="api-code-box position-relative">
              <button className="copy-btn" onClick={handleCopyRes}>
                {copiedRes ? <FiCheck /> : <FiCopy />}
              </button>
              <pre>
                <code>
  {"{"}
  {"\n"}  "status": "1",
  {"\n"}  "message": "SUCCESS",
  {"\n"}  "data": [
  {"\n"}    {"{"}
  {"\n"}      "symbol": "BTCUSDT",
  {"\n"}      "price": "88720.00",
  {"\n"}      "size": "0.055",
  {"\n"}      "side": "Buy",
  {"\n"}      "time": "1769000270980"
  {"\n"}    {"}"},
  {"\n"}    {"{"}
  {"\n"}      "symbol": "BTCUSDT",
  {"\n"}      "price": "88720.00",
  {"\n"}      "size": "0.004",
  {"\n"}      "side": "Buy",
  {"\n"}      "time": "1769000270980"
  {"\n"}    {"}"}
  {"\n"}  ]
  {"\n"}{"}"}
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
