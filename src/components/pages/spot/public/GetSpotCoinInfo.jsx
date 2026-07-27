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
    HTTP: `curl "https://api.bitget.com/api/v2/spot/public/coins"`,
    Python: `import requests

url = "https://api.bitget.com/api/v2/spot/public/coins"
params = {
    "coin": "BTC"
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
    url := "https://api.bitget.com/api/v2/spot/public/coins?coin=BTC"

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
        String url = "https://api.bitget.com/api/v2/spot/public/coins?coin=BTC";

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
        const response = await axios.get('https://api.bitget.com/api/v2/spot/public/coins', {
            params: { coin: 'BTC' }
        });
        console.log(response.data);
    } catch (error) {
        console.error(error.message);
    }
}

getSpotCoinInfo();`,
  };

  const responseCode = `{
  "code": "00000",
  "msg": "success",
  "requestTime": 1695799900330,
  "data": [
    {
      "coinId": "1",
      "coin": "BTC",
      "transfer": "true",
      "chains": [
        {
          "chain": "BTC",
          "needTag": "false",
          "withdrawable": "true",
          "rechargeable": "true",
          "withdrawFee": "0.005",
          "extraWithdrawFee": "0",
          "depositConfirm": "1",
          "withdrawConfirm": "1",
          "minDepositAmount": "0.001",
          "minWithdrawAmount": "0.001",
          "browserUrl": "https://blockchain.info/tx/",
          "contractAddress": "0xdac17f958d2ee523a2206206994597c13d831ec7",
          "withdrawStep": "0",
          "withdrawMinScale": "8",
          "congestion": "normal"
        }
      ]
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
              <span className="path">/api/v2/spot/public/coins</span>
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
                    <td>coin</td>
                    <td>String</td>
                    <td>No</td>
                    <td>Coin name. If the field is left blank, all coin information will be returned by default.</td>
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
                    <td>Array</td>
                    <td>Coin info list</td>
                  </tr>
                  <tr>
                    <td>&gt; coinId</td>
                    <td>String</td>
                    <td>Currency ID</td>
                  </tr>
                  <tr>
                    <td>&gt; coin</td>
                    <td>String</td>
                    <td>Token name</td>
                  </tr>
                  <tr>
                    <td>&gt; transfer</td>
                    <td>String</td>
                    <td>Transferability (<span className="pill">true</span> / <span className="pill">false</span>)</td>
                  </tr>
                  <tr>
                    <td>&gt; chains</td>
                    <td>Array</td>
                    <td>Support chain list</td>
                  </tr>
                  <tr>
                    <td>&gt;&gt; chain</td>
                    <td>String</td>
                    <td>Chain name</td>
                  </tr>
                  <tr>
                    <td>&gt;&gt; needTag</td>
                    <td>String</td>
                    <td>Need tag (<span className="pill">true</span> / <span className="pill">false</span>)</td>
                  </tr>
                  <tr>
                    <td>&gt;&gt; withdrawable</td>
                    <td>String</td>
                    <td>Withdrawal supported (<span className="pill">true</span> / <span className="pill">false</span>)</td>
                  </tr>
                  <tr>
                    <td>&gt;&gt; rechargeable</td>
                    <td>String</td>
                    <td>Deposit supported (<span className="pill">true</span> / <span className="pill">false</span>)</td>
                  </tr>
                  <tr>
                    <td>&gt;&gt; withdrawFee</td>
                    <td>String</td>
                    <td>Withdrawal transaction fee</td>
                  </tr>
                  <tr>
                    <td>&gt;&gt; extraWithdrawFee</td>
                    <td>String</td>
                    <td>Extra charge. On chain destruction: 0.1 means 10%</td>
                  </tr>
                  <tr>
                    <td>&gt;&gt; depositConfirm</td>
                    <td>String</td>
                    <td>Deposit confirmation blocks</td>
                  </tr>
                  <tr>
                    <td>&gt;&gt; withdrawConfirm</td>
                    <td>String</td>
                    <td>Withdrawal confirmation blocks</td>
                  </tr>
                  <tr>
                    <td>&gt;&gt; minDepositAmount</td>
                    <td>String</td>
                    <td>Minimum deposit amount</td>
                  </tr>
                  <tr>
                    <td>&gt;&gt; minWithdrawAmount</td>
                    <td>String</td>
                    <td>Minimum withdrawal amount</td>
                  </tr>
                  <tr>
                    <td>&gt;&gt; browserUrl</td>
                    <td>String</td>
                    <td>Blockchain explorer address</td>
                  </tr>
                  <tr>
                    <td>&gt;&gt; contractAddress</td>
                    <td>String</td>
                    <td>Coin contract address</td>
                  </tr>
                  <tr>
                    <td>&gt;&gt; withdrawStep</td>
                    <td>String</td>
                    <td>Withdrawal count step. If the value is not 0, it indicates that the withdrawal size should be multiple of the value. If it's 0, that means there is no limit above.</td>
                  </tr>
                  <tr>
                    <td>&gt;&gt; withdrawMinScale</td>
                    <td>String</td>
                    <td>Decimal places of withdrawal amount</td>
                  </tr>
                  <tr>
                    <td>&gt;&gt; congestion</td>
                    <td>String</td>
                    <td>Chain network status (<span className="pill">normal</span>: normal, <span className="pill">congested</span>: congested)</td>
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
