import { useState, useRef, useEffect } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FiCopy, FiCheck } from "react-icons/fi";

export const GetSystemStatus = () => {
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
            },
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
        "list": [
            {
                "id": "2da2d174-5eb3-11f0-bcc9-56f28c94d6ea",
                "title": "System Maintenance",
                "state": "completed",
                "begin": "1751596902000",
                "end": "1751597011000",
                "href": "",
                "serviceTypes": [2, 3, 4, 5],
                "product": [1, 2],
                "uidSuffix": [],
                "maintainType": 1,
                "env": 1
            },
            {
                "id": "19bb6f82-587f-11f0-bcc9-56f28c94d6ea",
                "title": "Scheduled Maintenance",
                "state": "completed",
                "begin": "1751254200000",
                "end": "1751254500000",
                "href": "",
                "serviceTypes": [1, 4],
                "product": [1],
                "uidSuffix": [],
                "maintainType": 3,
                "env": 1
            }
        ]
    }
}`;

    const codeMap = {
        HTTP: `GET /v5/system/status HTTP/1.1
Host: api.bitzup.com`,

        Python: `import requests

url = "https://api.bitzup.com/v5/system/status"

try:
    response = requests.get(url, timeout=10)
    response.raise_for_status()
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
    url := "https://api.bitzup.com/v5/system/status"

    client := &http.Client{Timeout: 10 * time.Second}
    resp, err := client.Get(url)
    if err != nil {
        fmt.Println(err)
        return
    }
    defer resp.Body.Close()

    body, _ := io.ReadAll(resp.Body)
    fmt.Println(string(body))
}`,

        Java: `import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.time.Duration;

public class GetSystemStatus {
    public static void main(String[] args) throws Exception {
        HttpClient client = HttpClient.newBuilder()
                .connectTimeout(Duration.ofSeconds(10))
                .build();
        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create("https://api.bitzup.com/v5/system/status"))
                .GET()
                .build();

        HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
        System.out.println(response.body());
    }
}`,

        Node: `const axios = require('axios');

async function getSystemStatus() {
    try {
        const response = await axios.get('https://api.bitzup.com/v5/system/status');
        console.log(response.data);
    } catch (error) {
        console.error("Error:", error.response?.data || error.message);
    }
}
getSystemStatus();`,
    };

    return (
        <div className="container-fluid p-0">
            <div className="api-layout">
                <div className="row">
                    <div className="col-lg-9 col-md-12 api-content" ref={contentRef}>
                        <div className="breadcrumb mb-4">
                            <span className="pill">Get System Status</span>
                        </div>

                        <h1 className="api-title">Get System Status</h1>
                        <p className="api-desc">
                            Get the system status when there is a platform maintenance or service incident.
                        </p>

                        <div className="api-info-box">
                            <div className="api-info-header">
                                <span className="api-info-title">Info</span>
                            </div>
                            <p>Please note currently system maintenance that may result in short interruption (lasting less than 10 seconds) or websocket disconnection (users can immediately reconnect) will not be announced.</p>
                        </div>

                        <h3 className="top-req-text" id="http">HTTP Request</h3>
                        <div className="http-path">
                            <span className="method get">GET</span>
                            <span className="path">/v5/system/status</span>
                        </div>

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
                                        <td>id</td>
                                        <td>false</td>
                                        <td>string</td>
                                        <td>Unique identifier</td>
                                    </tr>
                                    <tr>
                                        <td>state</td>
                                        <td>false</td>
                                        <td>string</td>
                                        <td>System state</td>
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
                                        <td>retCode</td>
                                        <td>number</td>
                                        <td>Success/error code</td>
                                    </tr>
                                    <tr>
                                        <td>retMsg</td>
                                        <td>string</td>
                                        <td>Success/error message</td>
                                    </tr>
                                    <tr>
                                        <td>result</td>
                                        <td>Object</td>
                                        <td>Result object</td>
                                    </tr>
                                    <tr>
                                        <td style={{ paddingLeft: "28px" }}>&gt; list</td>
                                        <td>array</td>
                                        <td>List of system status items</td>
                                    </tr>
                                    <tr>
                                        <td style={{ paddingLeft: "48px" }}>&gt;&gt; id</td>
                                        <td>string</td>
                                        <td>Unique identifier</td>
                                    </tr>
                                    <tr>
                                        <td style={{ paddingLeft: "48px" }}>&gt;&gt; title</td>
                                        <td>string</td>
                                        <td>Title of system maintenance</td>
                                    </tr>
                                    <tr>
                                        <td style={{ paddingLeft: "48px" }}>&gt;&gt; state</td>
                                        <td>string</td>
                                        <td>System state</td>
                                    </tr>
                                    <tr>
                                        <td style={{ paddingLeft: "48px" }}>&gt;&gt; begin</td>
                                        <td>string</td>
                                        <td>Start time of system maintenance, timestamp in milliseconds</td>
                                    </tr>
                                    <tr>
                                        <td style={{ paddingLeft: "48px" }}>&gt;&gt; end</td>
                                        <td>string</td>
                                        <td>End time of system maintenance, timestamp in milliseconds. Before maintenance is completed, it is the expected end time. After maintenance is completed, it will be changed to the actual end time.</td>
                                    </tr>
                                    <tr>
                                        <td style={{ paddingLeft: "48px" }}>&gt;&gt; href</td>
                                        <td>string</td>
                                        <td>Hyperlink to system maintenance details. Default value is empty string</td>
                                    </tr>
                                    <tr>
                                        <td style={{ paddingLeft: "48px" }}>&gt;&gt; serviceTypes</td>
                                        <td>{"array<int>"}</td>
                                        <td>Service Type</td>
                                    </tr>
                                    <tr>
                                        <td style={{ paddingLeft: "48px" }}>&gt;&gt; product</td>
                                        <td>{"array<int>"}</td>
                                        <td>Product</td>
                                    </tr>
                                    <tr>
                                        <td style={{ paddingLeft: "48px" }}>&gt;&gt; uidSuffix</td>
                                        <td>{"array<int>"}</td>
                                        <td>Affected UID tail number</td>
                                    </tr>
                                    <tr>
                                        <td style={{ paddingLeft: "48px" }}>&gt;&gt; maintainType</td>
                                        <td>string</td>
                                        <td>Maintenance type</td>
                                    </tr>
                                    <tr>
                                        <td style={{ paddingLeft: "48px" }}>&gt;&gt; env</td>
                                        <td>string</td>
                                        <td>Environment</td>
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
                                <li className={activeSection === "http" ? "active" : ""} onClick={() => scrollToSection("http")}>HTTP Request</li>
                                <li className={activeSection === "request-params" ? "active" : ""} onClick={() => scrollToSection("request-params")}>Request Parameters</li>
                                <li className={activeSection === "response-params" ? "active" : ""} onClick={() => scrollToSection("response-params")}>Response Parameters</li>
                                <li className={activeSection === "request-example" ? "active" : ""} onClick={() => scrollToSection("request-example")}>Request Example</li>
                                <li className={activeSection === "response-example" ? "active" : ""} onClick={() => scrollToSection("response-example")}>Response Example</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
