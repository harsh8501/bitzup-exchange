import { useState, useEffect, useRef } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FiCopy, FiCheck } from "react-icons/fi";

export const ModifyOrder = () => {
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
        rootMargin: "-30% 0px -60% 0px", // top-biased
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
    "orderId": "c6f055d9-7f21-4079-913d-e6523a9cfffa",
    "orderLinkId": "linear-004"
  },
  "retExtInfo": {},
  "time": 1672217093461
}`;

  const codeMap = {
    HTTP: `POST /v5/order/amend HTTP/1.1
Host: api.bitzup.com
Content-Type: application/json
Authorization: Bearer <YOUR_API_KEY>

{
    "category": "linear",
    "symbol": "ETHPERP",
    "orderLinkId": "linear-004",
    "triggerPrice": "1145",
    "qty": "0.15",
    "price": "1050",
    "takeProfit": "0",
    "stopLoss": "0"
}`,

    Python: `import requests

url = "https://api.bitzup.com/v5/order/amend"
headers = {
    "Content-Type": "application/json",
    "Authorization": "Bearer <YOUR_API_KEY>"
}
data = {
    "category": "linear",
    "symbol": "ETHPERP",
    "orderLinkId": "linear-004",
    "triggerPrice": "1145",
    "qty": "0.15",
    "price": "1050",
    "takeProfit": "0",
    "stopLoss": "0"
}

try:
    response = requests.post(url, headers=headers, json=data)
    print(response.json())
except requests.exceptions.RequestException as e:
    print("Error:", str(e))`,

    Go: `package main

import (
    "bytes"
    "encoding/json"
    "fmt"
    "io"
    "net/http"
    "time"
)

func main() {
    url := "https://api.bitzup.com/v5/order/amend"
    payload := map[string]interface{}{
        "category":     "linear",
        "symbol":       "ETHPERP",
        "orderLinkId":  "linear-004",
        "triggerPrice": "1145",
        "qty":          "0.15",
        "price":        "1050",
        "takeProfit":   "0",
        "stopLoss":     "0",
    }
    body, _ := json.Marshal(payload)

    req, _ := http.NewRequest("POST", url, bytes.NewBuffer(body))
    req.Header.Add("Content-Type", "application/json")
    req.Header.Add("Authorization", "Bearer <YOUR_API_KEY>")

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

public class AmendOrderDemo {
    public static void main(String[] args) throws Exception {
        String url = "https://api.bitzup.com/v5/order/amend";
        String payload = """
            {
                "category": "linear",
                "symbol": "ETHPERP",
                "orderLinkId": "linear-004",
                "triggerPrice": "1145",
                "qty": "0.15",
                "price": "1050",
                "takeProfit": "0",
                "stopLoss": "0"
            }
            """;

        HttpClient client = HttpClient.newHttpClient();
        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create(url))
                .header("Content-Type", "application/json")
                .header("Authorization", "Bearer <YOUR_API_KEY>")
                .POST(HttpRequest.BodyPublishers.ofString(payload))
                .build();

        HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
        System.out.println(response.body());
    }
}`,

    Node: `const axios = require('axios');

async function amendOrder() {
    try {
        const response = await axios.post(
            'https://api.bitzup.com/v5/order/amend',
            {
                category: 'linear',
                symbol: 'ETHPERP',
                orderLinkId: 'linear-004',
                triggerPrice: '1145',
                qty: '0.15',
                price: '1050',
                takeProfit: '0',
                stopLoss: '0'
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer <YOUR_API_KEY>'
                }
            }
        );
        console.log(response.data);
    } catch (error) {
        console.error(error.message);
    }
}

amendOrder();`,
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
                <span className="kline-market">Trade</span>
                <span className="mx-2">
                  <IoIosArrowForward className="kline-arrow" />
                </span>
                <span className="pill">Amend Order</span>
              </div>

              {/* Title */}
              <h1 className="api-title">Amend Order</h1>
              <p className="api-desc">
                Amend an existing unfilled or partially filled order.
              </p>

              <div className="api-cover">Rate Limit: 10 req/s</div>

              {/* HTTP REQUEST */}
              <h3 className="top-req-text" id="http">
                HTTP Request
              </h3>
              <div className="http-path">
                <span className="method post">POST</span>
                <span className="path">/v5/order/amend</span>
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
                      <td>Product type. <code>spot</code>, <code>linear</code>, <code>inverse</code>, <code>option</code></td>
                    </tr>
                    <tr>
                      <td>symbol</td>
                      <td>true</td>
                      <td>string</td>
                      <td>Symbol name. e.g., <code>BTCUSDT</code></td>
                    </tr>
                    <tr>
                      <td>orderId</td>
                      <td>false</td>
                      <td>string</td>
                      <td>Order ID. Either <code>orderId</code> or <code>orderLinkId</code> is required</td>
                    </tr>
                    <tr>
                      <td>orderLinkId</td>
                      <td>false</td>
                      <td>string</td>
                      <td>User customised order ID. Either <code>orderId</code> or <code>orderLinkId</code> is required</td>
                    </tr>
                    <tr>
                      <td>triggerPrice</td>
                      <td>false</td>
                      <td>string</td>
                      <td>Conditional order trigger price. If you expect the price to rise to trigger your conditional order, make sure: triggerPrice &gt; market price Else, triggerPrice &lt; market price. For spot, it is the TP/SL and Conditional order trigger price</td>
                    </tr>
                    <tr>
                      <td>qty</td>
                      <td>false</td>
                      <td>string</td>
                      <td>Order quantity after modification. Do not pass it if not modify the qty</td>
                    </tr>
                    <tr>
                      <td>price</td>
                      <td>false</td>
                      <td>string</td>
                      <td>Order price after modification. Do not pass it if not modify the price</td>
                    </tr>
                    <tr>
                      <td>tpslMode</td>
                      <td>false</td>
                      <td>string</td>
                      <td>TP/SL mode. <code>Full</code>, <code>Partial</code></td>
                    </tr>
                    <tr>
                      <td>takeProfit</td>
                      <td>false</td>
                      <td>string</td>
                      <td>Take profit price after modification. If pass "0", it means cancel the existing take profit of the order. Do not pass it if you do not want to modify the take profit</td>
                    </tr>
                    <tr>
                      <td>stopLoss</td>
                      <td>false</td>
                      <td>string</td>
                      <td>Stop loss price after modification. If pass "0", it means cancel the existing stop loss of the order. Do not pass it if you do not want to modify the stop loss</td>
                    </tr>
                    <tr>
                      <td>tpTriggerBy</td>
                      <td>false</td>
                      <td>string</td>
                      <td>The price type to trigger take profit. <code>MarkPrice</code>, <code>IndexPrice</code>, <code>LastPrice</code></td>
                    </tr>
                    <tr>
                      <td>slTriggerBy</td>
                      <td>false</td>
                      <td>string</td>
                      <td>The price type to trigger stop loss. <code>MarkPrice</code>, <code>IndexPrice</code>, <code>LastPrice</code></td>
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
                      <td>orderId</td>
                      <td>string</td>
                      <td>Order ID</td>
                    </tr>
                    <tr>
                      <td>orderLinkId</td>
                      <td>string</td>
                      <td>User customised order ID</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="mt-3">
                The acknowledgement of an amend order request indicates that the request was sucessfully accepted. This request is asynchronous so please use the websocket to confirm the order status.
              </p>

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
