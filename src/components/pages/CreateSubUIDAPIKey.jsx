import { useState, useEffect, useRef } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FiCopy, FiCheck } from "react-icons/fi";

export const CreateSubUIDAPIKey = () => {
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
  "retMsg": "",
  "result": {
    "id": "16651283",
    "note": "testxxx",
    "apiKey": "xxxxx",
    "readOnly": 0,
    "secret": "xxxxxxxx",
    "permissions": {
      "ContractTrade": [],
      "Spot": [],
      "Wallet": [
        "AccountTransfer"
      ],
      "Options": [],
      "CopyTrading": [],
      "BlockTrade": [],
      "Exchange": [],
      "NFT": [],
      "Earn": [
        "Earn"
      ]
    }
  },
  "retExtInfo": {},
  "time": 1676430007643
}`;

    const codeMap = {
        HTTP: `POST /v5/user/create-sub-api HTTP/1.1
Host: api.bitzup.com
Authorization: Bearer <YOUR_API_KEY>
Content-Type: application/json

{
  "subuid": 53888000,
  "note": "testxxx",
  "readOnly": 0,
  "permissions": {
    "Wallet": [
      "AccountTransfer"
    ]
  }
}`,

    Python: `import requests

url = "https://api.bitzup.com/v5/user/create-sub-api"
headers = {
    "Authorization": "Bearer <YOUR_API_KEY>",
    "Content-Type": "application/json"
}
payload = {
    "subuid": 53888000,
    "note": "testxxx",
    "readOnly": 0,
    "permissions": {
        "Wallet": [
            "AccountTransfer"
        ]
    }
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
    url := "https://api.bitzup.com/v5/user/create-sub-api"
    payload := []byte(` + "`" + `{"subuid":53888000,"note":"testxxx","readOnly":0,"permissions":{"Wallet":["AccountTransfer"]}}` + "`" + `)

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

public class CreateSubUIDAPIKeyDemo {
    public static void main(String[] args) throws Exception {
        String url = "https://api.bitzup.com/v5/user/create-sub-api";
        String payload = "{\\"subuid\\":53888000,\\"note\\":\\"testxxx\\",\\"readOnly\\":0,\\"permissions\\":{\\"Wallet\\":[\\"AccountTransfer\\"]}}";

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

async function createSubUIDAPIKey() {
    try {
        const response = await axios.post(
            'https://api.bitzup.com/v5/user/create-sub-api',
            {
                subuid: 53888000,
                note: 'testxxx',
                readOnly: 0,
                permissions: {
                    Wallet: ['AccountTransfer']
                }
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

createSubUIDAPIKey();`,
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
                <span className="kline-market">User</span>
                <span className="mx-2">
                  <IoIosArrowForward className="kline-arrow" />
                </span>
                <span className="pill">Create Sub UID API Key</span>
              </div>

              {/* Title */}
              <h1 className="api-title">Create Sub UID API Key</h1>
              <p className="api-desc">
                Create a new API key for the newly created sub UID. Use master user's api key only.
              </p>

              {/* HTTP REQUEST */}
              <h3 className="top-req-text" id="http">
                HTTP Request
              </h3>
              <div className="http-path">
                <span className="method post">POST</span>
                <span className="path">/v5/user/create-sub-api</span>
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
                      <td>subuid</td>
                      <td>true</td>
                      <td>integer</td>
                      <td>Sub user ID</td>
                    </tr>
                    <tr>
                      <td>note</td>
                      <td>false</td>
                      <td>string</td>
                      <td>Note or remark, up to 100 characters</td>
                    </tr>
                    <tr>
                      <td>readOnly</td>
                      <td>true</td>
                      <td>integer</td>
                      <td><code>0</code>: Read-Write, <code>1</code>: Read-Only</td>
                    </tr>
                    <tr>
                      <td>ips</td>
                      <td>false</td>
                      <td>string</td>
                      <td>IP bindings safely separated by commas. e.g. <code>"192.168.0.1,192.168.0.2"</code>. Pass <code>"*"</code> if no bind.</td>
                    </tr>
                    <tr>
                      <td>permissions</td>
                      <td>true</td>
                      <td>object</td>
                      <td>
                        Permission configurations. The supported features depend on the subaccount type. 
                        Common keys include <code>ContractTrade</code>, <code>Spot</code>, <code>Wallet</code>, <code>Options</code>, <code>Exchange</code>, etc.
                      </td>
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
                      <td>Unique ID associated with the API key</td>
                    </tr>
                    <tr>
                      <td>note</td>
                      <td>string</td>
                      <td>Remark associated with the API key</td>
                    </tr>
                    <tr>
                      <td>apiKey</td>
                      <td>string</td>
                      <td>The created API key</td>
                    </tr>
                    <tr>
                      <td>readOnly</td>
                      <td>integer</td>
                      <td><code>0</code>: Read/Write, <code>1</code>: Read only</td>
                    </tr>
                    <tr>
                      <td>secret</td>
                      <td>string</td>
                      <td>The created secret. Can only be retrieved upon creation. Keep it safe.</td>
                    </tr>
                    <tr>
                      <td>permissions</td>
                      <td>object</td>
                      <td>List of permissions granted to the API Key</td>
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
