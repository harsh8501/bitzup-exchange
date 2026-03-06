import { useState, useEffect, useRef } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FiCopy, FiCheck } from "react-icons/fi";

export const CreateInternalTransfer = () => {
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
    "transferId": "42c0cfb0-6bca-c242-bc76-4e6df6cbab16",
    "status": "SUCCESS"
  },
  "retExtInfo": {},
  "time": 1670986962783
}`;

    const codeMap = {
        HTTP: `POST /v5/asset/transfer/inter-transfer HTTP/1.1
Host: api.bitzup.com
Authorization: Bearer <YOUR_API_KEY>
Content-Type: application/json

{
  "transferId": "42c0cfb0-6bca-c242-bc76-4e6df6cbcb16",
  "coin": "BTC",
  "amount": "0.05",
  "fromAccountType": "UNIFIED",
  "toAccountType": "CONTRACT"
}`,

    Python: `import requests

url = "https://api.bitzup.com/v5/asset/transfer/inter-transfer"
headers = {
    "Authorization": "Bearer <YOUR_API_KEY>",
    "Content-Type": "application/json"
}
payload = {
    "transferId": "42c0cfb0-6bca-c242-bc76-4e6df6cbcb16",
    "coin": "BTC",
    "amount": "0.05",
    "fromAccountType": "UNIFIED",
    "toAccountType": "CONTRACT"
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
    url := "https://api.bitzup.com/v5/asset/transfer/inter-transfer"
    payload := []byte(` + "`" + `{"transferId":"42c0cfb0 - 6bca - c242 - bc76 - 4e6df6cbcb16","coin":"BTC","amount":"0.05","fromAccountType":"UNIFIED","toAccountType":"CONTRACT"}` + "`" + `)

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

public class CreateInternalTransferDemo {
    public static void main(String[] args) throws Exception {
        String url = "https://api.bitzup.com/v5/asset/transfer/inter-transfer";
        String payload = "{\\"transferId\\":\\"42c0cfb0-6bca-c242-bc76-4e6df6cbcb16\\",\\"coin\\":\\"BTC\\",\\"amount\\":\\"0.05\\",\\"fromAccountType\\":\\"UNIFIED\\",\\"toAccountType\\":\\"CONTRACT\\"}";

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

async function createInternalTransfer() {
    try {
        const response = await axios.post(
            'https://api.bitzup.com/v5/asset/transfer/inter-transfer',
            {
                transferId: '42c0cfb0-6bca-c242-bc76-4e6df6cbcb16',
                coin: 'BTC',
                amount: '0.05',
                fromAccountType: 'UNIFIED',
                toAccountType: 'CONTRACT'
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

createInternalTransfer();`,
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
                <span className="pill">Internal Transfer</span>
              </div>

              {/* Title */}
              <h1 className="api-title">Create Internal Transfer</h1>
              <p className="api-desc">
                Create the internal transfer between different account types under the same UID.
              </p>

              {/* HTTP REQUEST */}
              <h3 className="top-req-text" id="http">
                HTTP Request
              </h3>
              <div className="http-path">
                <span className="method post">POST</span>
                <span className="path">/v5/asset/transfer/inter-transfer</span>
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
                      <td>transferId</td>
                      <td>true</td>
                      <td>string</td>
                      <td>UUID. Please manually generate a UUID</td>
                    </tr>
                    <tr>
                      <td>coin</td>
                      <td>true</td>
                      <td>string</td>
                      <td>Coin name</td>
                    </tr>
                    <tr>
                      <td>amount</td>
                      <td>true</td>
                      <td>string</td>
                      <td>Amount to transfer</td>
                    </tr>
                    <tr>
                      <td>fromAccountType</td>
                      <td>true</td>
                      <td>string</td>
                      <td>From account type</td>
                    </tr>
                    <tr>
                      <td>toAccountType</td>
                      <td>true</td>
                      <td>string</td>
                      <td>To account type</td>
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
                      <td>transferId</td>
                      <td>string</td>
                      <td>UUID</td>
                    </tr>
                    <tr>
                      <td>status</td>
                      <td>string</td>
                      <td>Transfer status: <code>STATUS_UNKNOWN</code>, <code>SUCCESS</code>, <code>PENDING</code>, <code>FAILED</code></td>
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
