import { useState, useEffect, useRef } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FiCopy, FiCheck } from "react-icons/fi";

export const GetSubUID = () => {
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
    "subMemberIds": [
      "554117",
      "592324",
      "592334",
      "1055262",
      "1072055",
      "1119352"
    ],
    "transferableSubMemberIds": [
      "554117",
      "592324"
    ]
  },
  "retExtInfo": {},
  "time": 1672147241320
}`;

    const codeMap = {
        HTTP: `GET /v5/asset/transfer/query-sub-member-list HTTP/1.1
Host: api.bitzup.com
Authorization: Bearer <YOUR_API_KEY>`,

    Python: `import requests

url = "https://api.bitzup.com/v5/asset/transfer/query-sub-member-list"
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
    url := "https://api.bitzup.com/v5/asset/transfer/query-sub-member-list"

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

public class GetSubUIDDemo {
    public static void main(String[] args) throws Exception {
        String url = "https://api.bitzup.com/v5/asset/transfer/query-sub-member-list";

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

async function getSubUID() {
    try {
        const response = await axios.get(
            'https://api.bitzup.com/v5/asset/transfer/query-sub-member-list',
            {
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

getSubUID();`,
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
                <span className="pill">Get Sub UID</span>
              </div>

              {/* Title */}
              <h1 className="api-title">Get Sub UID</h1>
              <p className="api-desc">
                Query the sub UIDs under a main UID. It returns up to 2000 sub accounts, if you need more, please call this endpoint.
              </p>

              {/* HTTP REQUEST */}
              <h3 className="top-req-text" id="http">
                HTTP Request
              </h3>
              <div className="http-path">
                <span className="method get">GET</span>
                <span className="path">/v5/asset/transfer/query-sub-member-list</span>
              </div>

              <h3 className="top-req-text" id="request-params">
                Request Parameters
              </h3>
              <p>None</p>

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
                      <td>subMemberIds</td>
                      <td>array</td>
                      <td>All sub UIDs</td>
                    </tr>
                    <tr>
                      <td>transferableSubMemberIds</td>
                      <td>array</td>
                      <td>All sub UIDs with universal transfer enabled</td>
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
