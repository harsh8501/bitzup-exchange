import React, { useState } from "react";
import { FiCopy, FiCheck } from "react-icons/fi";
import { SiPython, SiGo, SiNodedotjs, SiRuby, SiPhp } from "react-icons/si";
import { FaLinux } from "react-icons/fa";

const ApiExplorer = ({ method = "POST", endpoint, initialBody, baseUrl = "https://api-testnet.bitzup.com" }) => {
  const [requestBody, setRequestBody] = useState(initialBody);
  const [lang, setLang] = useState("Node");
  const [copied, setCopied] = useState(false);
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (path, value) => {
    setRequestBody(prev => {
      const newBody = JSON.parse(JSON.stringify(prev)); // Deep copy
      const keys = path.split('.');
      let current = newBody;
      for (let i = 0; i < keys.length - 1; i++) {
        current = current[keys[i]];
      }
      current[keys[keys.length - 1]] = value;
      return newBody;
    });
  };

  const renderEditableJson = (obj, path = "") => {
    if (Array.isArray(obj)) {
      return (
        <div style={{ paddingLeft: '16px' }}>
          [
          {obj.map((item, i) => (
            <div key={i} style={{ paddingLeft: '16px' }}>
              {renderEditableJson(item, path ? `${path}.${i}` : `${i}`)}
              {i < obj.length - 1 ? ',' : ''}
            </div>
          ))}
          ]
        </div>
      );
    } else if (typeof obj === 'object' && obj !== null) {
      return (
        <div style={{ paddingLeft: '16px' }}>
          {`{`}
          {Object.entries(obj).map(([key, val], idx, arr) => (
            <div key={key} style={{ paddingLeft: '16px' }}>
              <span className="syntax-key">"{key}"</span>: {
                typeof val === 'object' && val !== null 
                  ? renderEditableJson(val, path ? `${path}.${key}` : `${key}`)
                  : (
                    <>
                      "
                      <input 
                        className="syntax-input"
                        value={val}
                        onChange={(e) => handleInputChange(path ? `${path}.${key}` : `${key}`, e.target.value)}
                        size={String(val).length || 1}
                      />
                      "
                    </>
                  )
              }
              {idx < arr.length - 1 ? ',' : ''}
            </div>
          ))}
          {`}`}
        </div>
      );
    }
    return String(obj);
  };

  const handleCopy = async (text) => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const handleSendRequest = () => {
    setLoading(true);
    setTimeout(() => {
      const isError = Math.random() > 0.5;
      if (isError) {
        setResponse({
          retCode: 33004,
          retMsg: "Your api key has expired.",
          result: {},
          retExtInfo: {},
          time: Date.now()
        });
      } else {
        setResponse({
          retCode: 0,
          retMsg: "OK",
          result: { 
            list: Array.isArray(requestBody.request) 
              ? requestBody.request.map(r => ({ ...r, orderId: "res-" + Math.random().toString(36).substr(2, 9) }))
              : [ { ...requestBody, id: "res-" + Math.random().toString(36).substr(2, 9) } ]
          },
          time: Date.now()
        });
      }
      setLoading(false);
    }, 800);
  };

  const bodyStr = JSON.stringify(requestBody, null, 2);

  const codeMap = {
    cURL: `curl -L -X ${method} '${baseUrl}${endpoint}' \\
-H 'Content-Type: application/json' \\
--data-raw '${bodyStr}'`,
    Node: `const axios = require('axios');
let data = JSON.stringify(${bodyStr});

axios({
  method: '${method.toLowerCase()}',
  url: '${baseUrl}${endpoint}',
  headers: { 'Content-Type': 'application/json' },
  data : data
}).then(res => console.log(res.data));`,
    Python: `import requests
import json

url = "${baseUrl}${endpoint}"
payload = ${bodyStr}
headers = { 'Content-Type': 'application/json' }
response = requests.post(url, json=payload, headers=headers)
print(response.json())`,
    Go: `package main
import (
  "fmt"
  "strings"
  "net/http"
  "io/ioutil"
)

func main() {
  url := "${baseUrl}${endpoint}"
  method := "${method}"
  payload := strings.NewReader(\`${bodyStr}\`)
  client := &http.Client {}
  req, _ := http.NewRequest(method, url, payload)
  req.Header.Add("Content-Type", "application/json")
  res, _ := client.Do(req)
  defer res.Body.Close()
  body, _ := ioutil.ReadAll(res.Body)
  fmt.Println(string(body))
}`,
    Ruby: `require "uri"
require "json"
require "net/http"

url = URI("${baseUrl}${endpoint}")
https = Net::HTTP.new(url.host, url.port)
https.use_ssl = true

request = Net::HTTP::${method === 'POST' ? 'Post' : 'Get'}.new(url)
request["Content-Type"] = "application/json"
request.body = JSON.dump(${bodyStr})

response = https.request(request)
puts response.read_body`,
    PHP: `<?php
$curl = curl_init();
curl_setopt_array($curl, array(
  CURLOPT_URL => '${baseUrl}${endpoint}',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_CUSTOMREQUEST => '${method}',
  CURLOPT_POSTFIELDS =>'${bodyStr}',
  CURLOPT_HTTPHEADER => array('Content-Type: application/json'),
));
$response = curl_exec($curl);
curl_close($curl);
echo $response;`
  };

  const languages = [
    { id: "cURL", icon: <FaLinux />, label: "cURL" },
    { id: "Python", icon: <SiPython />, label: "Python" },
    { id: "Go", icon: <SiGo />, label: "Go" },
    { id: "Node", icon: <SiNodedotjs />, label: "Node.js" },
    { id: "Ruby", icon: <SiRuby />, label: "Ruby" },
    { id: "PHP", icon: <SiPhp />, label: "PHP" },
  ];

  return (
    <div className="explorer-panel">
      <style>{`
        .explorer-panel { width: 480px; background: #0b0e14; overflow-y: auto; padding: 24px; display: flex; flex-direction: column; border-left: 1px solid #222; }
        @media (max-width: 1024px) { .explorer-panel { width: 100%; padding: 40px 20px; height: auto; border-left: none; border-top: 1px solid #222; } }
        .endpoint-header { display: flex; align-items: center; gap: 12px; background: #171d26; padding: 14px 18px; border-radius: 8px; margin-bottom: 32px; }
        .badge-post { background: #1fb184; color: #fff; padding: 4px 10px; border-radius: 4px; font-size: 11px; font-weight: 800; }
        .endpoint-path { font-size: 14px; font-weight: 600; color: #eee; font-family: monospace; }
        .panel-section-title { display: flex; justify-content: space-between; align-items: center; margin: 32px 0 20px 0; }
        .btn-primary { background: #fff; color: #000; border: none; border-radius: 6px; padding: 10px 20px; font-weight: 700; cursor: pointer; transition: opacity 0.2s; }
        .btn-primary:hover { opacity: 0.9; }
        .btn-primary:disabled { opacity: 0.5; }
        .sub-label { background: rgba(46, 219, 173, 0.1); color: #2edbad; padding: 4px 10px; border-radius: 4px; font-size: 11px; font-weight: 700; margin-bottom: 12px; display: inline-block; }
        .val-text { color: #2edbad; font-family: monospace; font-size: 13px; margin-bottom: 24px; display: block; }
        .code-container { background: #171d26; border-radius: 8px; border: 1px solid #333; position: relative; margin-bottom: 32px; }
        .code-content { padding: 24px; font-family: monospace; font-size: 12px; line-height: 1.7; color: #dcdcdc; overflow-x: auto; margin: 0; }
        .syntax-key { color: #fff; }
        .syntax-input { background: transparent; border: none; color: #ce9178; font-family: inherit; font-size: inherit; outline: none; border-bottom: 1px dashed #444; width: auto; }
        .syntax-input:focus { border-bottom-color: #2edbad; color: #fff; }
        .response-container { margin-top: 24px; animation: fadeIn 0.3s ease; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        .res-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; }
        .btn-clear { background: #333; color: #fff; border: none; border-radius: 4px; padding: 4px 12px; font-size: 12px; cursor: pointer; }
        .lang-bar { display: flex; gap: 28px; margin-bottom: 24px; border-bottom: 1px solid #222; }
        .lang-tab { font-size: 24px; color: #888; cursor: pointer; padding-bottom: 10px; position: relative; transition: color 0.2s; }
        .lang-tab:hover { color: #fff; }
        .lang-tab.active { color: #2edbad; }
        .lang-tab.active::after { content: ''; position: absolute; bottom: -1px; left: 0; width: 100%; height: 2px; background: #1fb184; }
        .copy-btn { position: absolute; top: 12px; right: 12px; color: #888; cursor: pointer; transition: color 0.2s; z-index: 10; }
        .copy-btn:hover { color: #fff; }
      `}</style>

      <div className="endpoint-header">
        <span className="badge-post">{method}</span>
        <span className="endpoint-path">{endpoint}</span>
      </div>

      <div className="panel-section-title">
        <h4>Request</h4>
        <button className="btn-primary" onClick={handleSendRequest} disabled={loading}>
          {loading ? "Sending..." : "Send API Request"}
        </button>
      </div>

      <span className="sub-label">Base URL</span>
      <span className="val-text">{baseUrl}</span>

      <div className="sub-label">{method === "GET" ? "Query" : "Body"}</div>
      <div className="code-container">
        <div className="copy-btn" onClick={() => handleCopy(JSON.stringify(requestBody, null, 2))}>
          {copied ? <FiCheck color="#1fb184" /> : <FiCopy />}
        </div>
        <pre className="code-content">
          {renderEditableJson(requestBody)}
        </pre>
      </div>

      {response && (
        <div className="response-container">
          <div className="res-header">
            <h4 style={{margin: 0}}>Response</h4>
            <button className="btn-clear" onClick={() => setResponse(null)}>Clear</button>
          </div>
          <div className="code-container" style={{ borderColor: '#1fb184' }}>
            <pre className="code-content">{JSON.stringify(response, null, 2)}</pre>
          </div>
        </div>
      )}

      <div className="panel-section-title"><h4>Request Example</h4></div>
      <div className="lang-bar">
        {languages.map((l) => (
          <div key={l.id} className={`lang-tab ${lang === l.id ? "active" : ""}`} onClick={() => setLang(l.id)}>
            {l.icon}
          </div>
        ))}
      </div>
      <div className="code-container">
        <div className="copy-btn" onClick={() => handleCopy(codeMap[lang])}>
          {copied ? <FiCheck color="#1fb184" /> : <FiCopy />}
        </div>
        <pre className="code-content">{codeMap[lang]}</pre>
      </div>
    </div>
  );
};

export default ApiExplorer;
