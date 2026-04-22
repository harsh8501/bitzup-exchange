import { useState, useEffect, useRef } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FiCopy, FiCheck } from "react-icons/fi";

export const GetCoinInfo = () => {
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
  "retMsg": "success",
  "result": {
    "rows": [
      {
        "name": "MNT",
        "coin": "MNT",
        "remainAmount": "10000000",
        "chains": [
          {
            "chainType": "Ethereum",
            "confirmation": "6",
            "withdrawFee": "3",
            "depositMin": "0",
            "withdrawMin": "3",
            "chain": "ETH",
            "chainDeposit": "1",
            "chainWithdraw": "1",
            "minAccuracy": "8",
            "withdrawPercentageFee": "0",
            "contractAddress": "0x3c3a81e81dc49a522a592e7622a7e711c06bf354",
            "safeConfirmNumber": "65"
          },
          {
            "chainType": "Mantle Network",
            "confirmation": "100",
            "withdrawFee": "0",
            "depositMin": "0",
            "withdrawMin": "10",
            "chain": "MANTLE",
            "chainDeposit": "1",
            "chainWithdraw": "1",
            "minAccuracy": "8",
            "withdrawPercentageFee": "0",
            "contractAddress": "",
            "safeConfirmNumber": "100"
          }
        ]
      }
    ]
  },
  "retExtInfo": {},
  "time": 1736395486989
}`;

    const codeMap = {
        HTTP: `GET /v5/asset/coin/query-info?coin=MNT HTTP/1.1
Host: api.bitzup.com
Authorization: Bearer <YOUR_API_KEY>`,

    Python: `import requests

url = "https://api.bitzup.com/v5/asset/coin/query-info?coin=MNT"
headers = {
    "Authorization": "Bearer <YOUR_API_KEY>"
}

try:
    response = requests.get(url, headers=headers)
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
    url := "https://api.bitzup.com/v5/asset/coin/query-info?coin=MNT"

    req, err := http.NewRequest("GET", url, nil)
    if err != nil {
        fmt.Println(err)
        return
    }
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

public class GetCoinInfoDemo {
    public static void main(String[] args) throws Exception {
        String url = "https://api.bitzup.com/v5/asset/coin/query-info?coin=MNT";

        HttpClient client = HttpClient.newHttpClient();
        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create(url))
                .header("Authorization", "Bearer <YOUR_API_KEY>")
                .GET()
                .build();

        HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
        System.out.println(response.body());
    }
}`,

    Node: `const axios = require('axios');

async function getCoinInfo() {
    try {
        const response = await axios.get(
            'https://api.bitzup.com/v5/asset/coin/query-info',
            {
                params: {
                    coin: 'MNT'
                },
                headers: {
                    'Authorization': 'Bearer <YOUR_API_KEY>'
                }
            }
        );
        console.log(response.data);
    } catch (error) {
        console.error(error.message);
    }
}

getCoinInfo();`,
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
                <span className="kline-market">Asset</span>
                <span className="mx-2">
                  <IoIosArrowForward className="kline-arrow" />
                </span>
                <span className="pill">Get Coin Info</span>
              </div>

              {/* Title */}
              <h1 className="api-title">Get Coin Info</h1>
              <p className="api-desc">
                Query coin information, including chain information, withdraw and deposit status.
              </p>

              {/* HTTP REQUEST */}
              <h3 className="top-req-text" id="http">
                HTTP Request
              </h3>
              <div className="http-path">
                <span className="method get">GET</span>
                <span className="path">/v5/asset/coin/query-info</span>
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
                      <td>coin</td>
                      <td>false</td>
                      <td>string</td>
                      <td>Coin name. e.g., <span className="pill">MNT</span></td>
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
                      <td>rows</td>
                      <td>array</td>
                      <td>Object</td>
                    </tr>
                    <tr>
                      <td>&gt; name</td>
                      <td>string</td>
                      <td>Coin name</td>
                    </tr>
                    <tr>
                      <td>&gt; coin</td>
                      <td>string</td>
                      <td>Coin</td>
                    </tr>
                    <tr>
                      <td>&gt; remainAmount</td>
                      <td>string</td>
                      <td>Current remaining amount of full withdrawal</td>
                    </tr>
                    <tr>
                      <td>&gt; chains</td>
                      <td>array</td>
                      <td>Object</td>
                    </tr>
                    <tr>
                      <td>&gt;&gt; chainType</td>
                      <td>string</td>
                      <td>Chain type</td>
                    </tr>
                    <tr>
                      <td>&gt;&gt; confirmation</td>
                      <td>string</td>
                      <td>Number of confirmations required for deposit</td>
                    </tr>
                    <tr>
                      <td>&gt;&gt; withdrawFee</td>
                      <td>string</td>
                      <td>Withdrawal fee amount</td>
                    </tr>
                    <tr>
                      <td>&gt;&gt; depositMin</td>
                      <td>string</td>
                      <td>Minimum deposit amount</td>
                    </tr>
                    <tr>
                      <td>&gt;&gt; withdrawMin</td>
                      <td>string</td>
                      <td>Minimum withdrawal amount</td>
                    </tr>
                    <tr>
                      <td>&gt;&gt; chain</td>
                      <td>string</td>
                      <td>Chain name</td>
                    </tr>
                    <tr>
                      <td>&gt;&gt; chainDeposit</td>
                      <td>string</td>
                      <td>Deposit status. <span className="pill">0</span>:suspend, <span className="pill">1</span>:normal</td>
                    </tr>
                    <tr>
                      <td>&gt;&gt; chainWithdraw</td>
                      <td>string</td>
                      <td>Withdraw status. <span className="pill">0</span>:suspend, <span className="pill">1</span>:normal</td>
                    </tr>
                    <tr>
                      <td>&gt;&gt; minAccuracy</td>
                      <td>string</td>
                      <td>Deposit/Withdrawal accuracy</td>
                    </tr>
                    <tr>
                      <td>&gt;&gt; withdrawPercentageFee</td>
                      <td>string</td>
                      <td>Withdrawal percentage fee</td>
                    </tr>
                    <tr>
                      <td>&gt;&gt; contractAddress</td>
                      <td>string</td>
                      <td>Contract address</td>
                    </tr>
                    <tr>
                      <td>&gt;&gt; safeConfirmNumber</td>
                      <td>string</td>
                      <td>Number of safe confirmations for withdrawal</td>
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

              <div className="api-code-box position-relative" style={{ marginBottom: "40px" }}>
                {/* COPY ICON */}
                <button className="copy-btn" onClick={handleCopy}>
                  {copied ? <FiCheck /> : <FiCopy />}
                </button>

                <pre>
                  {codeMap[lang]}
                </pre>
              </div>

              {/* RESPONSE EXAMPLE */}
              <h3 className="top-req-text" id="response-example">
                Response Example
              </h3>
              <div className="api-code-box position-relative" style={{ marginBottom: "40px" }}>
                <button className="copy-btn" onClick={handleCopyRes}>
                  {copiedRes ? <FiCheck /> : <FiCopy />}
                </button>
                <pre>
                  {responseCode}
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
