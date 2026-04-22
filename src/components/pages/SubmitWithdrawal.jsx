import { useState, useEffect, useRef } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FiCopy, FiCheck } from "react-icons/fi";

export const SubmitWithdrawal = () => {
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
    "id": "10195"
  },
  "retExtInfo": {},
  "time": 1672196571239
}`;

    const codeMap = {
        HTTP: `POST /v5/asset/withdraw/create HTTP/1.1
Host: api.bitzup.com
Authorization: Bearer <YOUR_API_KEY>
Content-Type: application/json

{
  "coin": "USDT",
  "chain": "ETH",
  "address": "0x99ced129603abc771c0dabe935c326ff6c86645d",
  "amount": "24",
  "timestamp": 1672196561407,
  "forceChain": 0,
  "accountType": "FUND"
}`,

    Python: `import requests

url = "https://api.bitzup.com/v5/asset/withdraw/create"
headers = {
    "Authorization": "Bearer <YOUR_API_KEY>",
    "Content-Type": "application/json"
}
payload = {
    "coin": "USDT",
    "chain": "ETH",
    "address": "0x99ced129603abc771c0dabe935c326ff6c86645d",
    "amount": "24",
    "timestamp": 1672196561407,
    "forceChain": 0,
    "accountType": "FUND"
}

try:
    response = requests.post(url, headers=headers, json=payload)
    print(response.json())
except requests.exceptions.RequestException as e:
    print("Error:", str(e))`,

    Go: `package main

import (
    "bytes"
    "fmt"
    "io"
    "net/http"
    "time"
)

func main() {
    url := "https://api.bitzup.com/v5/asset/withdraw/create"
    payload := []byte(` + "`" + `{"coin":"USDT","chain":"ETH","address":"0x99ced129603abc771c0dabe935c326ff6c86645d","amount":"24","timestamp":1672196561407,"forceChain":0,"accountType":"FUND"}` + "`" + `)

    req, err := http.NewRequest("POST", url, bytes.NewBuffer(payload))
    if err != nil {
        fmt.Println(err)
        return
    }
    req.Header.Add("Authorization", "Bearer <YOUR_API_KEY>")
    req.Header.Add("Content-Type", "application/json")

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

public class SubmitWithdrawalDemo {
    public static void main(String[] args) throws Exception {
        String url = "https://api.bitzup.com/v5/asset/withdraw/create";
        String payload = "{\\"coin\\":\\"USDT\\",\\"chain\\":\\"ETH\\",\\"address\\":\\"0x99ced129603abc771c0dabe935c326ff6c86645d\\",\\"amount\\":\\"24\\",\\"timestamp\\":1672196561407,\\"forceChain\\":0,\\"accountType\\":\\"FUND\\"}";

        HttpClient client = HttpClient.newHttpClient();
        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create(url))
                .header("Authorization", "Bearer <YOUR_API_KEY>")
                .header("Content-Type", "application/json")
                .POST(HttpRequest.BodyPublishers.ofString(payload))
                .build();

        HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
        System.out.println(response.body());
    }
}`,

    Node: `const axios = require('axios');

async function submitWithdrawal() {
    try {
        const response = await axios.post(
            'https://api.bitzup.com/v5/asset/withdraw/create',
            {
                coin: 'USDT',
                chain: 'ETH',
                address: '0x99ced129603abc771c0dabe935c326ff6c86645d',
                amount: '24',
                timestamp: 1672196561407,
                forceChain: 0,
                accountType: 'FUND'
            },
            {
                headers: {
                    'Authorization': 'Bearer <YOUR_API_KEY>',
                    'Content-Type': 'application/json'
                }
            }
        );
        console.log(response.data);
    } catch (error) {
        console.error(error.message);
    }
}

submitWithdrawal();`,
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
                <span className="pill">Submit Withdrawal</span>
              </div>

              {/* Title */}
              <h1 className="api-title">Withdraw</h1>
              <p className="api-desc">
                Withdraw assets from your account. You can make an off-chain transfer if the target wallet address is from Bitzup. This means that no blockchain fee will be charged.
              </p>

              {/* HTTP REQUEST */}
              <h3 className="top-req-text" id="http">
                HTTP Request
              </h3>
              <div className="http-path">
                <span className="method post">POST</span>
                <span className="path">/v5/asset/withdraw/create</span>
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
                      <td>true</td>
                      <td>string</td>
                      <td>Coin name</td>
                    </tr>
                    <tr>
                      <td>chain</td>
                      <td>false</td>
                      <td>string</td>
                      <td>Chain name. Optional depending on <span className="pill">forceChain</span> setting</td>
                    </tr>
                    <tr>
                      <td>address</td>
                      <td>true</td>
                      <td>string</td>
                      <td>Withdrawal address. Depending on <span className="pill">forceChain</span>, might be Bitzup UID or wallet address</td>
                    </tr>
                    <tr>
                      <td>tag</td>
                      <td>false</td>
                      <td>string</td>
                      <td>Tag for withdrawal address</td>
                    </tr>
                    <tr>
                      <td>amount</td>
                      <td>true</td>
                      <td>string</td>
                      <td>Withdrawal amount</td>
                    </tr>
                    <tr>
                      <td>timestamp</td>
                      <td>true</td>
                      <td>integer</td>
                      <td>Current timestamp (ms)</td>
                    </tr>
                    <tr>
                      <td>forceChain</td>
                      <td>false</td>
                      <td>integer</td>
                      <td><span className="pill">0</span>(default): If the address is parsed out to be an internal address, then internal transfer. <span className="pill">1</span>: Force on-chain. <span className="pill">2</span>: Use UID to withdraw</td>
                    </tr>
                    <tr>
                      <td>accountType</td>
                      <td>false</td>
                      <td>string</td>
                      <td><span className="pill">FUND</span>: Funding wallet. <span className="pill">UTA</span>: Unified Trading Account. <span className="pill">FUND,UTA</span>: Combo deduction</td>
                    </tr>
                    <tr>
                      <td>feeType</td>
                      <td>false</td>
                      <td>integer</td>
                      <td><span className="pill">0</span>(default): input amount is actual received. <span className="pill">1</span>: system handles fee</td>
                    </tr>
                    <tr>
                      <td>requestId</td>
                      <td>false</td>
                      <td>string</td>
                      <td>Customized request ID</td>
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
                      <td>id</td>
                      <td>string</td>
                      <td>Withdrawal ID</td>
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
