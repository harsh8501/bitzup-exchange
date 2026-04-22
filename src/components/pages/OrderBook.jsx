import { useState, useEffect, useRef } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FiCopy, FiCheck } from "react-icons/fi";

export const OrderKook = () => {
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
  "data": {
   "s": "BTCUSDT",
    "a": [
      [
        "88764.1",
        "2.4"
      ],
      [
        "88764.2",
        "0.784"
      ]
    ],
    "b": [
      [
        "88764",
        "0.961"
      ],
      [
        "88763.3",
        "0.003"
      ]
    ]
  }
}`;

  const codeMap = {
    HTTP: `GET /v1/get-order-book?symbol=BTCUSDT&limit=2 HTTP/1.1
Host: https://api.bitzup.com/futures/api`,

    Python: `import requests

url = "https://api.bitzup.com/futures/api/v1/get-order-book"

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
	baseURL := "https://api.bitzup.com/futures/api/v1/get-order-book"

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
        String baseUrl = "https://api.bitzup.com/futures/api/v1/get-order-book";

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

async function getOrderBook() {
  try {
    const response = await axios.get(
      "https://api.bitzup.com/futures/api/v1/get-order-book",
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

getOrderBook();`,
  };

  return (
    <>
      <div className="container-fluid p-0">
        <div className="api-layout">
        <div className="row">
          {/* LEFT CONTENT */}
          <div className="col-lg-9 col-md-12 api-content" ref={contentRef}>
            {/* Breadcrumb */}
            <div className="breadcrumb mb-4">
              <span className="text-muted">Market</span>
              <span className="mx-2">
                <IoIosArrowForward className="kline-arrow" />
              </span>
              <span className="pill">Get OrderBook</span>
            </div>
            {/* Title */}
            <h1 className="api-title" style={{ fontSize: "32px", marginBottom: "16px" }}>Get OrderBook</h1>
            <p className="api-desc" style={{ fontSize: "16px", color: "var(--text-secondary)", marginBottom: "24px" }}>Query for orderbook depth data.</p>

            <div className="api-cover" style={{ marginBottom: "32px" }}>USDT contract</div>
            <div className="api-info-box">
              <div className="api-info-header">
                <span className="api-info-icon">!</span>
                <span className="api-info-title">INFO</span>
              </div>

              <ul className="api-info-list">
                <li>The response is in the snapshot format.</li>
               
              </ul>
            </div>

            {/* HTTP REQUEST */}
            <h3 className="top-req-text" id="http" style={{ borderBottom: "1px solid var(--border-color)", paddingBottom: "12px", marginTop: "40px" }}>HTTP Request</h3>
            <div className="http-path" style={{ background: "var(--bg-card)", padding: "12px 16px", borderRadius: "8px", display: "flex", gap: "12px", alignItems: "center", marginBottom: "32px" }}>
              <span className="method" style={{ padding: "4px 8px", borderRadius: "4px" }}>GET</span>
              <span className="path" style={{ fontWeight: "500", letterSpacing: "0.5px" }}>/v1/get-order-book</span>
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
                      <span className="pill">500</span> ]. Default:{" "}
                      <span className="pill"> 25 </span>
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
                    <td>s</td>
                    <td>string</td>
                    <td>Symbol name</td>
                  </tr>
                  <tr>
                    <td>b</td>
                    <td>array</td>
                    <td>Bid, buyer. Sorted by price in descending order</td>
                  </tr>
                  <tr>
                    <td><IoIosArrowForward /> b[0]</td>
                    <td>string</td>
                    <td>Bid price</td>
                  </tr>
                  <tr>
                    <td>
                      <IoIosArrowForward /> b[1]
                    </td>
                    <td>string</td>
                    <td>Bid size</td>
                  </tr>
                  <tr>
                    <td>
                      a
                    </td>
                    <td>array</td>
                    <td>Ask, seller. Sorted by price in ascending order</td>
                  </tr>
                  <tr>
                    <td>
                      <IoIosArrowForward /> a[0]
                    </td>
                    <td>string</td>
                    <td>Ask price</td>
                  </tr>
                  <tr>
                    <td>
                      <IoIosArrowForward /> a[1]
                    </td>
                    <td>string</td>
                    <td>Ask size</td>
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

            <div className="api-code-box position-relative" style={{ marginBottom: "40px" }}>
              {/* COPY ICON */}
              <button className="copy-btn" onClick={handleCopy} style={{ position: "absolute", top: "12px", right: "12px", background: "transparent", border: "none", color: "var(--text-secondary)", cursor: "pointer" }}>
                {copied ? <FiCheck color="var(--text-accent)" /> : <FiCopy />}
              </button>

              <pre style={{ margin: 0 }}>
                <code >{codeMap[lang]}</code>
              </pre>
            </div>

            {/* RESPONSE EXAMPLE */}
            <h3 className="top-req-text" id="response-example">Response Example</h3>
            <div className="api-code-box position-relative" style={{ marginBottom: "40px" }}>
              <button className="copy-btn" onClick={handleCopyRes} style={{ position: "absolute", top: "12px", right: "12px", background: "transparent", border: "none", color: "var(--text-secondary)", cursor: "pointer" }}>
                {copiedRes ? <FiCheck color="var(--text-accent)" /> : <FiCopy />}
              </button>
              <pre style={{ margin: 0 }}>
                <code >
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
