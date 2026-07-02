import React, { useState, useEffect } from "react";
import { FiCopy, FiCheck, FiLock, FiKey } from "react-icons/fi";
import { SiPython, SiGo, SiNodedotjs, SiRuby, SiPhp } from "react-icons/si";
import { FaLinux } from "react-icons/fa";

const ApiExplorer = ({ 
  method = "POST", 
  endpoint, 
  initialBody, 
  baseUrl = "https://api.bitzup.com/futures-api",
  editable = true,
  externalBody,
  setExternalBody,
  requiredFields = []
}) => {
  const [internalBody, setInternalBody] = useState(initialBody);

  const requestBody = externalBody !== undefined ? externalBody : internalBody;
  const setRequestBody = setExternalBody !== undefined ? setExternalBody : setInternalBody;
  const [lang, setLang] = useState("Node");
  const [copied, setCopied] = useState(false);
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  
  // API Credentials State
  const [apiKey, setApiKey] = useState("");
  const [apiSecret, setApiSecret] = useState("");

  // Clear legacy localStorage/sessionStorage keys on mount to ensure credentials do not persist on reload
  useEffect(() => {
    try {
      localStorage.removeItem("bitzup_api_key");
      localStorage.removeItem("bitzup_api_secret");
      sessionStorage.removeItem("bitzup_api_key");
      sessionStorage.removeItem("bitzup_api_secret");
    } catch (e) {
      console.error("Error clearing legacy keys:", e);
    }
  }, []);

  // Helper to deep clean body (completely pruning optional empty fields)
  const getCleanedBody = (body) => {
    if (!body) return {};
    const cleaned = {};
    Object.entries(body).forEach(([key, val]) => {
      const isRequired = requiredFields && requiredFields.some(rf => rf.toLowerCase() === key.toLowerCase());
      if (isRequired) {
        cleaned[key] = val;
      } else {
        if (val !== "" && val !== null && val !== undefined) {
          cleaned[key] = val;
        }
      }
    });
    return cleaned;
  };

  const cleanedBody = getCleanedBody(requestBody);

  const [signature, setSignature] = useState("008416ddff72ac7b6fb75cf4d9dde211e14afb347b");
  const [timestamp, setTimestamp] = useState(Date.now().toString());
  const [recvWindow, setRecvWindow] = useState("20000");

  const generateSignature = async (secret, message) => {
    try {
      const encoder = new TextEncoder();
      const keyData = encoder.encode(secret);
      const messageData = encoder.encode(message);
      const cryptoKey = await window.crypto.subtle.importKey(
        "raw",
        keyData,
        { name: "HMAC", hash: "SHA-256" },
        false,
        ["sign"]
      );
      const signatureBuffer = await window.crypto.subtle.sign(
        "HMAC",
        cryptoKey,
        messageData
      );
      const hashArray = Array.from(new Uint8Array(signatureBuffer));
      return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    } catch (err) {
      console.error(err);
      return "008416ddff72ac7b6fb75cf4d9dde211e14afb347b";
    }
  };

  useEffect(() => {
    const updateAuthHeaders = async () => {
      const ts = Date.now().toString();
      const rw = "20000";
      setTimestamp(ts);
      setRecvWindow(rw);

      if (!apiKey || !apiSecret) {
        setSignature("008416ddff72ac7b6fb75cf4d9dde211e14afb347b");
        return;
      }

      try {
        let payload = "";
        if (method === "GET") {
          const sortedKeys = Object.keys(cleanedBody).sort();
          payload = sortedKeys
            .map(k => `${k}=${cleanedBody[k]}`)
            .join("&");
        } else {
          payload = JSON.stringify(cleanedBody);
        }
        const message = ts + apiKey + rw + payload;
        const sign = await generateSignature(apiSecret, message);
        setSignature(sign);
      } catch (err) {
        console.error("Signature calculation error:", err);
      }
    };

    updateAuthHeaders();
  }, [apiKey, apiSecret, requestBody, method, JSON.stringify(cleanedBody)]);

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

  const renderStaticJson = (obj) => {
    const jsonString = JSON.stringify(obj, null, 2);
    return (
      <span dangerouslySetInnerHTML={{
        __html: jsonString
          .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
          .replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+-]?\d+)?)/g, function (match) {
            let style = 'color: var(--json-number, #d19a66);'; // orange for numbers
            if (/^"/.test(match)) {
              if (/:$/.test(match)) {
                style = 'color: var(--json-key, #e06c75); font-weight: 600;'; // rose/red for keys
              } else {
                style = 'color: var(--json-string, #98c379);'; // green for string values
              }
            } else if (/true|false/.test(match)) {
              style = 'color: var(--json-boolean, #56b6c2);'; // cyan for booleans
            } else if (/null/.test(match)) {
              style = 'color: var(--json-boolean, #56b6c2);';
            }
            return '<span style="' + style + '">' + match + '</span>';
          })
      }} />
    );
  };

  const handleCopy = async (text) => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const handleSendRequest = async () => {
    setResponse(null);

    const validationErrors = [];

    // 1. Validate API Key & Secret (unless it is a public /market/ endpoint)
    const isMarketEndpoint = endpoint && endpoint.includes('/market/');
    if (!isMarketEndpoint) {
      if (!apiKey) {
        validationErrors.push("API Key is required for private endpoints.");
      }
      if (!apiSecret) {
        validationErrors.push("API Secret is required for private endpoints.");
      }
    }

    // 2. Validate Required Fields (presence check)
    if (requiredFields && Array.isArray(requiredFields)) {
      requiredFields.forEach(field => {
        const val = requestBody[field];
        if (val === undefined || val === null || (typeof val === "string" && val.trim() === "")) {
          validationErrors.push(`Required field "${field}" is missing or empty.`);
        }
      });
    }

    // 3. Type/Value specific validations across all standard Bybit V5 API fields
    Object.entries(requestBody).forEach(([key, val]) => {
      // Only validate non-empty fields
      if (val === "" || val === null || val === undefined) return;

      const keyLower = key.toLowerCase();

      // Standard Bybit Numeric Decimal Strings
      const numericStringKeys = [
        "qty", "price", "triggerprice", "takeprofit", "stoploss", 
        "tplimitprice", "sllimitprice", "amount", "buyval", "sellval", 
        "baseprice", "risklimitvalue", "margin", "trailingstop", "activeprice"
      ];
      if (numericStringKeys.some(nk => keyLower === nk)) {
        const numVal = parseFloat(val);
        if (isNaN(numVal) || numVal <= 0) {
          validationErrors.push(`"${key}" must be a valid positive numeric string (e.g. "0.01", "2000"). Got: "${val}"`);
        }
      }

      // Standard Bybit Integers
      const integerKeys = [
        "positionidx", "triggerdirection", "isleverage", "leverage", 
        "riskid", "buyleverage", "sellleverage", "mode", "trademode", 
        "autoaddmargin", "limit"
      ];
      if (integerKeys.some(ik => keyLower === ik)) {
        const intVal = parseInt(val, 10);
        if (isNaN(intVal) || intVal.toString() !== val.toString()) {
          validationErrors.push(`"${key}" must be a valid integer. Got: "${val}"`);
        } else {
          if (keyLower === "positionidx" && ![0, 1, 2].includes(intVal)) {
            validationErrors.push(`"positionIdx" must be 0 (One-way), 1 (Buy Hedged), or 2 (Sell Hedged).`);
          }
          if (keyLower === "triggerdirection" && ![1, 2].includes(intVal)) {
            validationErrors.push(`"triggerDirection" must be 1 (Rise) or 2 (Fall).`);
          }
          if (keyLower === "isleverage" && ![0, 1].includes(intVal)) {
            validationErrors.push(`"isLeverage" must be 0 (No) or 1 (Yes).`);
          }
          if ((keyLower === "leverage" || keyLower === "buyleverage" || keyLower === "sellleverage") && (intVal < 1 || intVal > 125)) {
            validationErrors.push(`"${key}" must be an integer between 1 and 125.`);
          }
          if (keyLower === "mode" && ![0, 3].includes(intVal)) {
            validationErrors.push(`"mode" must be 0 (One-way) or 3 (Hedge Mode).`);
          }
          if (keyLower === "trademode" && ![0, 1].includes(intVal)) {
            validationErrors.push(`"tradeMode" must be 0 (Cross Margin) or 1 (Isolated Margin).`);
          }
          if (keyLower === "autoaddmargin" && ![0, 1].includes(intVal)) {
            validationErrors.push(`"autoAddMargin" must be 0 (No) or 1 (Yes).`);
          }
          if (keyLower === "limit" && intVal < 1) {
            validationErrors.push(`"limit" must be a positive integer.`);
          }
        }
      }

      // Standard Bybit Booleans
      const booleanKeys = ["reduceonly", "closeontrigger", "mmp"];
      if (booleanKeys.some(bk => keyLower === bk)) {
        if (val !== true && val !== false && val !== "true" && val !== "false") {
          validationErrors.push(`"${key}" must be a boolean (true/false). Got: "${val}"`);
        }
      }

      // Standard Bybit Uppercase Currency/Symbol checks
      if (keyLower === "symbol") {
        if (typeof val === "string" && !/^[A-Z0-9]+$/.test(val)) {
          validationErrors.push(`"symbol" must be an uppercase alphanumeric string (e.g. "ETHUSDT"). Got: "${val}"`);
        }
      }
      if (keyLower === "coin" || keyLower === "settlecoin") {
        if (typeof val === "string" && !/^[A-Z0-9]+$/.test(val)) {
          validationErrors.push(`"${key}" must be an uppercase currency string (e.g. "USDT"). Got: "${val}"`);
        }
      }

      // UUID format validation for transfers
      if (keyLower === "transferid") {
        const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
        if (typeof val === "string" && !uuidRegex.test(val)) {
          validationErrors.push(`"transferId" must be a valid UUID v4 string. Got: "${val}"`);
        }
      }

      // Enum checks
      if (keyLower === "side") {
        if (val !== "Buy" && val !== "Sell") {
          validationErrors.push(`"side" must be either "Buy" or "Sell". Got: "${val}"`);
        }
      }
      if (keyLower === "ordertype") {
        if (val !== "Limit" && val !== "Market") {
          validationErrors.push(`"orderType" must be either "Limit" or "Market". Got: "${val}"`);
        }
      }
      if (keyLower === "accounttype" || keyLower === "fromaccounttype" || keyLower === "toaccounttype") {
        const accTypes = ["CONTRACT", "UNIFIED", "SPOT", "INVESTMENT"];
        if (typeof val === "string" && !accTypes.includes(val.toUpperCase())) {
          validationErrors.push(`"${key}" must be one of CONTRACT, UNIFIED, SPOT, INVESTMENT. Got: "${val}"`);
        }
      }
      if (keyLower === "interval") {
        const tifs = ["1", "3", "5", "15", "30", "60", "120", "240", "360", "720", "D", "M", "W"];
        if (!tifs.includes(val.toString())) {
          validationErrors.push(`"interval" must be one of: 1, 3, 5, 15, 30, 60, 120, 240, 360, 720, D, M, W. Got: "${val}"`);
        }
      }
      if (keyLower === "timeinforce") {
        const tifs = ["GTC", "IOC", "FOK", "PostOnly"];
        if (!tifs.includes(val)) {
          validationErrors.push(`"timeInForce" must be one of GTC, IOC, FOK, PostOnly. Got: "${val}"`);
        }
      }
      if (keyLower === "marginmode") {
        const modes = ["ISOLATED", "CROSS"];
        if (!modes.includes(val.toString().toUpperCase())) {
          validationErrors.push(`"marginMode" must be either "ISOLATED" or "CROSS". Got: "${val}"`);
        }
      }
    });

    if (validationErrors.length > 0) {
      setResponse({
        error: "Client-side Validation Failed",
        message: "Please fix the following validation errors before sending the request:",
        errors: validationErrors
      });
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(`${baseUrl}/v1/execute`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-BAPI-API-KEY": apiKey,
          "X-BAPI-API-SECRET": apiSecret,
          "X-BAPI-TIMESTAMP": timestamp,
          "X-BAPI-RECV-WINDOW": recvWindow,
          "X-BAPI-SIGN": signature,
        },
        body: JSON.stringify({
          method,
          endpoint,
          params: method === "GET" ? cleanedBody : {},
          body: method === "POST" ? cleanedBody : {}
        })
      });
      const data = await res.json();
      setResponse(data);
    } catch (error) {
      setResponse({ error: error.message });
    } finally {
      setLoading(false);
    }
  };

  const bodyStr = JSON.stringify(cleanedBody, null, 2);

  const codeMap = {
    cURL: `curl -L -X ${method} '${baseUrl}${endpoint}' \\
-H 'Content-Type: application/json' \\
-H 'X-BAPI-API-KEY: ${apiKey || 'YOUR_API_KEY'}' \\
-H 'X-BAPI-TIMESTAMP: ${timestamp}' \\
-H 'X-BAPI-RECV-WINDOW: ${recvWindow}' \\
-H 'X-BAPI-SIGN: ${signature}' \\
--data-raw '${bodyStr}'`,
    Node: `const axios = require('axios');
let data = JSON.stringify(${bodyStr});

axios({
  method: '${method.toLowerCase()}',
  url: '${baseUrl}${endpoint}',
  headers: { 
    'Content-Type': 'application/json',
    'X-BAPI-API-KEY': '${apiKey || 'YOUR_API_KEY'}',
    'X-BAPI-TIMESTAMP': '${timestamp}',
    'X-BAPI-RECV-WINDOW': '${recvWindow}',
    'X-BAPI-SIGN': '${signature}'
  },
  data : data
}).then(res => console.log(res.data));`,
    Python: `import requests
import json

url = "${baseUrl}${endpoint}"
payload = ${bodyStr}
headers = { 
  'Content-Type': 'application/json',
  'X-BAPI-API-KEY': '${apiKey || 'YOUR_API_KEY'}',
  'X-BAPI-TIMESTAMP': '${timestamp}',
  'X-BAPI-RECV-WINDOW': '${recvWindow}',
  'X-BAPI-SIGN': '${signature}'
}
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
  req.Header.Add("X-BAPI-API-KEY", "${apiKey || 'YOUR_API_KEY'}")
  req.Header.Add("X-BAPI-TIMESTAMP", "${timestamp}")
  req.Header.Add("X-BAPI-RECV-WINDOW", "${recvWindow}")
  req.Header.Add("X-BAPI-SIGN", "${signature}")
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
request["X-BAPI-API-KEY"] = "${apiKey || 'YOUR_API_KEY'}"
request["X-BAPI-TIMESTAMP"] = "${timestamp}"
request["X-BAPI-RECV-WINDOW"] = "${recvWindow}"
request["X-BAPI-SIGN"] = "${signature}"
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
  CURLOPT_HTTPHEADER => array(
    'Content-Type: application/json',
    'X-BAPI-API-KEY: ${apiKey || 'YOUR_API_KEY'}',
    'X-BAPI-TIMESTAMP: ${timestamp}',
    'X-BAPI-RECV-WINDOW: ${recvWindow}',
    'X-BAPI-SIGN: ${signature}'
  ),
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
        .explorer-panel {
          width: 480px;
          background: #0b0e14;
          overflow-y: auto;
          padding: 24px;
          display: flex;
          flex-direction: column;
          border-left: 1px solid #222;
          color: var(--text-primary);
          
          /* Syntax highlighting variables for static JSON renderer */
          --json-number: #d19a66;
          --json-key: #e06c75;
          --json-string: #98c379;
          --json-boolean: #56b6c2;
        }
        @media (max-width: 1024px) { .explorer-panel { width: 100%; padding: 40px 20px; height: auto; border-left: none; border-top: 1px solid #222; } }
        
        .credentials-section { background: #171d26; border-radius: 8px; padding: 16px; margin-bottom: 24px; border: 1px solid #333; }
        .credential-input-group { margin-bottom: 12px; }
        .credential-label { font-size: 11px; font-weight: 700; color: #888; text-transform: uppercase; margin-bottom: 6px; display: block; }
        .credential-input-wrapper { position: relative; display: flex; align-items: center; }
        .credential-icon { position: absolute; left: 10px; color: #555; font-size: 14px; }
        .credential-input { background: #0b0e14; border: 1px solid #333; border-radius: 4px; padding: 8px 12px 8px 32px; color: #fff; font-family: monospace; font-size: 13px; width: 100%; outline: none; }
        .credential-input:focus { border-color: #2edbad; }
        
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

        /* Premium Light Mode Colors Overrides (data-theme="light") */
        [data-theme="light"] .explorer-panel {
          background: #ffffff !important;
          border-left-color: var(--border-color);
          --json-number: #d97706;
          --json-key: #7c3aed;
          --json-string: #059669;
          --json-boolean: #2563eb;
        }
        @media (max-width: 1024px) {
          [data-theme="light"] .explorer-panel {
            border-top: 1px solid var(--border-color);
          }
        }
        
        [data-theme="light"] .credentials-section {
          background: var(--bg-card);
          border-color: var(--border-color);
        }
        [data-theme="light"] .credential-label {
          color: var(--text-secondary);
        }
        [data-theme="light"] .credential-icon {
          color: #94a3b8;
        }
        [data-theme="light"] .credential-input {
          background: var(--bg-secondary);
          border-color: var(--border-color);
          color: var(--text-primary);
        }
        [data-theme="light"] .credential-input:focus {
          border-color: var(--accent-neon);
        }
        
        [data-theme="light"] .endpoint-header {
          background: var(--bg-card);
          border: 1px solid var(--border-color);
        }
        [data-theme="light"] .endpoint-path {
          color: var(--text-primary);
        }
        
        [data-theme="light"] .btn-primary {
          background: #000;
          color: #fff;
        }
        
        [data-theme="light"] .sub-label {
          background: var(--accent-neon-dim);
          color: var(--accent-neon);
        }
        [data-theme="light"] .val-text {
          color: var(--accent-neon);
        }
        
        [data-theme="light"] .code-container {
          background: var(--bg-code);
          border-color: var(--border-color);
        }
        [data-theme="light"] .code-content {
          color: var(--text-primary);
        }
        [data-theme="light"] .syntax-key {
          color: var(--json-key);
          font-weight: 600;
        }
        [data-theme="light"] .syntax-input {
          color: var(--json-string);
          border-bottom-color: var(--border-color);
        }
        [data-theme="light"] .syntax-input:focus {
          border-bottom-color: var(--accent-neon);
          color: var(--text-primary);
        }
        
        [data-theme="light"] .btn-clear {
          background: var(--bg-card);
          color: var(--text-primary);
          border: 1px solid var(--border-color);
        }
        [data-theme="light"] .btn-clear:hover {
          background: var(--bg-secondary);
        }
        
        [data-theme="light"] .lang-bar {
          border-bottom-color: var(--border-color);
        }
        [data-theme="light"] .lang-tab {
          color: var(--text-muted);
        }
        [data-theme="light"] .lang-tab:hover {
          color: var(--text-primary);
        }
        [data-theme="light"] .lang-tab.active {
          color: var(--accent-neon);
        }
        [data-theme="light"] .lang-tab.active::after {
          background: var(--accent-neon);
        }
        
        [data-theme="light"] .copy-btn {
          color: var(--text-muted);
        }
        [data-theme="light"] .copy-btn:hover {
          color: var(--text-primary);
        }
      `}</style>

      <div className="credentials-section">
        <div className="credential-input-group">
          <label className="credential-label">API Key</label>
          <div className="credential-input-wrapper">
            <FiKey className="credential-icon" />
            <input 
              className="credential-input" 
              type="text" 
              name="bitzup_api_key_input"
              placeholder="Enter your API Key" 
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              autoComplete="off"
            />
          </div>
        </div>
        <div className="credential-input-group">
          <label className="credential-label">API Secret</label>
          <div className="credential-input-wrapper">
            <FiLock className="credential-icon" />
            <input 
              className="credential-input" 
              type="text" 
              name="bitzup_api_secret_input"
              placeholder="Enter your API Secret" 
              value={apiSecret}
              onChange={(e) => setApiSecret(e.target.value)}
              autoComplete="new-password"
            />
          </div>
        </div>

      </div>

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
          {editable ? renderEditableJson(requestBody) : renderStaticJson(requestBody)}
        </pre>
      </div>

      {response && (
        <div className="response-container">
          <div className="res-header">
            <h4 style={{margin: 0}}>Response</h4>
            <button className="btn-clear" onClick={() => setResponse(null)}>Clear</button>
          </div>
          <div className="code-container" style={{ borderColor: response.error ? '#ff4d4f' : '#1fb184' }}>
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

