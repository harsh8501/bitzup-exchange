import { useState, useRef, useEffect } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FiCopy, FiCheck } from "react-icons/fi";
import { SiPython, SiGo, SiNodedotjs, SiRuby, SiPhp } from "react-icons/si";
import { FaLinux } from "react-icons/fa";

export const AmendOrderApi = () => {
  const contentRef = useRef(null);
  const [lang, setLang] = useState("Node");
  const [copied, setCopied] = useState(false);

  const languages = [
    { id: "cURL", icon: <FaLinux />, label: "cURL" },
    { id: "Python", icon: <SiPython />, label: "Python" },
    { id: "Go", icon: <SiGo />, label: "Go" },
    { id: "Node", icon: <SiNodedotjs />, label: "Node.js" },
    { id: "Ruby", icon: <SiRuby />, label: "Ruby" },
    { id: "PHP", icon: <SiPhp />, label: "PHP" },
  ];

  const codeMap = {
    cURL: `curl -L -X POST 'https://api-testnet.bitzup.com/v5/order/amend' \
-H 'Content-Type: application/json' \
--data-raw '{
  "category": "linear",
  "symbol": "ETHUSDT",
  "isLeverage": 0,
  "side": "Buy",
  "orderType": "Limit",
  "qty": "1",
  "price": "1000",
  "triggerPrice": null,
  "triggerDirection": null,
  "triggerBy": null,
  "orderFilter": null,
  "orderIv": null,
  "timeInForce": "GTC",
  "positionIdx": 0,
  "orderLinkId": "test-xx1",
  "qty": "2",
  "price": "1100"
}'`,
    Node: `const axios = require('axios');
let data = JSON.stringify({
  "category": "linear",
  "symbol": "ETHUSDT",
  "orderLinkId": "test-xx1",
  "qty": "2",
  "price": "1100"
});

axios({
  method: 'post',
  url: 'https://api-testnet.bitzup.com/v5/order/amend',
  headers: { 'Content-Type': 'application/json' },
  data : data
}).then(res => console.log(res.data));`,
    Ruby: `require "uri"
require "json"
require "net/http"

url = URI("https://api-testnet.bitzup.com/v5/order/amend")

https = Net::HTTP.new(url.host, url.port)
https.use_ssl = true

request = Net::HTTP::Post.new(url)
request["Content-Type"] = "application/json"
request.body = JSON.dump({
  "category": "linear",
  "symbol": "ETHUSDT",
  "orderLinkId": "test-xx1",
  "takeProfit": nil,
  "stopLoss": nil,
  "tpTriggerBy": nil,
  "slTriggerBy": nil,
  "reduceOnly": false,
  "closeOnTrigger": false,
  "smpType": nil,
  "mmp": nil,
  "tpslMode": nil,
  "tpLimitPrice": nil,
  "slLimitPrice": nil,
  "tpOrderType": nil,
  "slOrderType": nil
})

response = https.request(request)
puts response.read_body`,
    PHP: `<?php

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://api-testnet.bybit.com/v5/order/create',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'POST',
  CURLOPT_POSTFIELDS =>'{
  "category": "linear",
  "symbol": "ETHUSDT",
  "isLeverage": 0,
  "side": "Buy",
  "orderType": "Limit",
  "qty": "1",
  "price": "1000",
  "triggerPrice": null,
  "triggerDirection": null,
  "triggerBy": null,
  "orderFilter": null,
  "orderIv": null,
  "timeInForce": "GTC",
  "positionIdx": 0,
  "orderLinkId": "test-xx1",
  "takeProfit": null,
  "stopLoss": null,
  "tpTriggerBy": null,
  "slTriggerBy": null,
  "reduceOnly": false,
  "closeOnTrigger": false,
  "smpType": null,
  "mmp": null,
  "tpslMode": null,
  "tpLimitPrice": null,
  "slLimitPrice": null,
  "tpOrderType": null,
  "slOrderType": null
}',
  CURLOPT_HTTPHEADER => array(
    'Content-Type: application/json'
  ),
));

$response = curl_exec($curl);

curl_close($curl);
echo $response;`,
    Python: `import requests
import json

url = "https://api-testnet.bitzup.com/v5/order/create"
payload = {
    "category": "linear",
    "symbol": "ETHUSDT",
    "side": "Buy",
    "orderType": "Limit",
    "qty": "1",
    "price": "1000"
}
headers = { 'Content-Type': 'application/json' }
response = requests.post(url, json=payload, headers=headers)
print(response.json())`,
    cURL: `curl --location --request POST 'https://api-testnet.bitzup.com/v5/order/create' \\
--header 'Content-Type: application/json' \\
--data-raw '{
    "category": "linear",
    "symbol": "ETHUSDT",
    "side": "Buy",
    "orderType": "Limit",
    "qty": "1",
    "price": "1000"
}'`,
  };

  const handleCopy = async (text) => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="api-doc-container">
      <style>{`
          .api-doc-container {
            // background: #000;
            color: #fff;
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
            height: 100vh;
            display: flex;
            overflow: hidden;
          }
          
          .docs-panel {
            flex: 1;
            overflow-y: auto;
            padding: 40px 60px;
            border-right: 1px solid #222;
          }
          
          .explorer-panel {
            width: 480px;
            // background: #0b0e14;
            overflow-y: auto;
            padding: 24px;
            display: flex;
            flex-direction: column;
          }

          /* Responsive Styles */
          @media (max-width: 1100px) {
            .explorer-panel { width: 400px; }
          }

          @media (max-width: 1024px) {
            .api-doc-container {
              flex-direction: column;
              height: auto;
              overflow-y: auto;
            }
            .docs-panel {
              border-right: none;
              border-bottom: 1px solid #222;
              padding: 40px 20px;
              overflow-y: visible;
              height: auto;
            }
            .explorer-panel {
              width: 100%;
              padding: 40px 20px;
              height: auto;
              overflow-y: visible;
            }
          }

          .breadcrumb { font-size: 14px; color: #888; display: flex; align-items: center; gap: 8px; margin-bottom: 24px; }
          .breadcrumb .pill { color: #2edbad; font-weight: 500; }
          .api-title { font-size: 32px; font-weight: 700; margin-bottom: 12px; }
          
          .api-box { background: #171d26; border-radius: 4px; padding: 16px; margin-bottom: 16px; }
          .api-box-header { display: flex; align-items: center; gap: 8px; font-size: 16px; font-weight: 600; margin-bottom: 12px; cursor: pointer; color: #fff; }
          .api-box-header::before { content: '▼'; font-size: 10px; color: #888; }
          
          .tree-view { border-left: 1px solid #3d4653; padding-left: 20px; margin-left: 8px; position: relative; }
          .tree-item { margin-bottom: 20px; position: relative; }
          .tree-item::before { content: ''; position: absolute; left: -20px; top: 10px; width: 12px; height: 1px; background: #3d4653; }
          
          .p-name { font-weight: 700; font-size: 14px; color: #fff; }
          .p-type { color: #6a737d; font-size: 14px; margin-left: 8px; }
          .p-desc { font-size: 14px; color: #8b949e; margin: 4px 0 0 0; line-height: 1.6; }
          .req-tag { color: #ff4d4f; font-size: 12px; font-weight: 600; margin-left: 8px; text-transform: uppercase; }
          
          .val-pills { display: flex; gap: 6px; flex-wrap: wrap; margin: 8px 0; align-items: center; }
          .val-pill { background: #1e293b; color: #2edbad; padding: 2px 8px; border-radius: 4px; font-size: 12px; font-family: monospace; }
          
          .tab-row { display: flex; gap: 24px; border-bottom: 1px solid #222; margin: 40px 0 24px 0; }
          .tab-item { color: #2edbad; font-size: 14px; font-weight: 600; padding-bottom: 12px; border-bottom: 2px solid #2edbad; }

          .endpoint-header { display: flex; align-items: center; gap: 12px; background: #171d26; padding: 14px 18px; border-radius: 8px; margin-bottom: 32px; }
          .badge-post { background: #1fb184; color: #fff; padding: 4px 10px; border-radius: 4px; font-size: 11px; font-weight: 800; }
          .endpoint-path { font-size: 14px; font-weight: 600; color: #eee; font-family: 'Fira Code', monospace; }
          
          .panel-section-title { display: flex; justify-content: space-between; align-items: center; margin: 32px 0 20px 0; }
          .panel-section-title h4 { font-size: 18px; font-weight: 700; margin: 0; color: #fff; }
          .btn-primary { background: #fff; color: #000; border: none; border-radius: 6px; padding: 10px 20px; font-weight: 700; font-size: 13px; cursor: pointer; transition: opacity 0.2s; }
          .btn-primary:hover { opacity: 0.9; }
          
          .sub-label { background: rgba(46, 219, 173, 0.1); color: #2edbad; padding: 4px 10px; border-radius: 4px; font-size: 11px; font-weight: 700; display: inline-block; margin-bottom: 12px; }
          .val-text { color: #2edbad; font-family: 'Fira Code', monospace; font-size: 13px; margin-bottom: 24px; display: block; }
          
          .link-action { color: #2edbad; font-size: 13px; font-weight: 600; display: flex; align-items: center; gap: 6px; margin-bottom: 24px; cursor: pointer; }
          
          .code-container { background: #171d26; border-radius: 8px; border: 1px solid #333; position: relative; margin-bottom: 32px; }
          .code-content { padding: 24px; margin: 0; font-family: 'Fira Code', monospace; font-size: 12px; line-height: 1.7; color: #dcdcdc; overflow-x: auto; }
          .copy-btn { position: absolute; top: 12px; right: 12px; color: #888; cursor: pointer; transition: color 0.2s; z-index: 10; }
          .copy-btn:hover { color: #fff; }

          .lang-bar { display: flex; gap: 28px; margin-bottom: 24px; border-bottom: 1px solid #222; padding-bottom: 8px; }
          .lang-tab { font-size: 24px; color: #888; cursor: pointer; transition: all 0.2s; position: relative; padding-bottom: 10px; }
          .lang-tab:hover { color: #fff; }
          .lang-tab.active { color: #2edbad; }
          .lang-tab.active::after { content: ''; position: absolute; bottom: -1px; left: 0; width: 100%; height: 2px; background: #1fb184; }

          .syntax-key { color: #fff; }
          .syntax-str { color: #ce9178; }
          .syntax-num { color: #b5cea8; }
          
          .res-badge { display: flex; align-items: center; gap: 8px; background: rgba(31, 177, 132, 0.1); color: #1fb184; padding: 6px 14px; border-radius: 6px; font-size: 12px; font-weight: 700; border: 1px solid rgba(31, 177, 132, 0.4); }
          .dot { width: 6px; height: 6px; background: #1fb184; border-radius: 50%; }
          
          .data-table { width: 100%; border: 1px solid #222; border-radius: 4px; overflow: hidden; margin-top: 24px; border-collapse: collapse; }
          .data-table th { background: #111; color: #2edbad; font-size: 11px; text-transform: uppercase; padding: 14px 18px; text-align: left; border-bottom: 1px solid #222; }
          .data-table td { padding: 14px 18px; font-size: 13px; color: #8b949e; border-bottom: 1px solid #222; }
          .data-table tr:last-child td { border-bottom: none; }
          .data-table .highlight-name { color: #fff; font-weight: 600; font-family: 'Fira Code', monospace; }
          
          .default-pill { background: rgba(46, 219, 173, 0.1); color: #2edbad; padding: 2px 6px; border-radius: 4px; font-size: 12px; margin-left: 8px; }
      `}</style>

      {/* Docs Panel */}
      <div className="docs-panel" ref={contentRef}>
        <div className="breadcrumb">
          <span>Trade</span>
          <IoIosArrowForward size={12} />
          <span className="pill">Place Order</span>
        </div>

        <h1 className="api-title">Place Order</h1>
        <p style={{ color: "#888", marginBottom: "40px", fontSize: "16px" }}>
          Place an order.
        </p>

        <div className="api-box">
          <div className="api-box-header">Header Parameters</div>
          <div className="tree-view">
            <div className="tree-item">
              <span className="p-name">apiKey</span>
              <span className="p-type">string</span>
              <p className="p-desc">
                A UTA sub account API key is provided by default
              </p>
            </div>
            <div className="tree-item">
              <span className="p-name">secret</span>
              <span className="p-type">string</span>
              <p className="p-desc">
                A UTA sub account API key is provided by default
              </p>
            </div>
            </div>
        </div>

        <div className="tab-row">
          <div className="tab-item">application/json</div>
        </div>

        <div className="api-box">
          <div className="api-box-header">Request Body</div>
          <div className="tree-view">
            <div className="tree-item">
              <span className="p-name">category</span>
              <span className="p-type">string</span>
              <span className="req-tag">required</span>
              <div className="val-pills">
                <span>Possible values:</span>
                <span className="val-pill">linear</span>
                <span className="val-pill">inverse</span>
                <span className="val-pill">option</span>
                <span className="val-pill">spot</span>
              </div>
              <p className="p-desc">Product type</p>
            </div>
            

            <div className="tree-item">
              <span className="p-name">symbol</span>
              <span className="p-type">string</span>
              <span className="req-tag">required</span>
              <p className="p-desc">Symbol name</p>
            </div>

            <div className="tree-item">
              <span className="p-name">isLeverage</span>
              <span className="p-type">integer</span>
              <div className="val-pills">
                <span>Possible values:</span>
                <span className="val-pill">0</span>
                <span className="val-pill">1</span>
              </div>
              <p className="p-desc">
                Whether to loan, only for spot. 0:No; 1:Yes.
              </p>
            </div>

            <div className="tree-item">
              <span className="p-name">side</span>
              <span className="p-type">string</span>
              <span className="req-tag">required</span>
              <div className="val-pills">
                <span>Possible values:</span>
                <span className="val-pill">Buy</span>
                <span className="val-pill">Sell</span>
              </div>


            <div className="tree-item">
              <span className="p-name">orderType</span>
              <span className="p-type">string</span>
              <span className="req-tag">required</span>
              <div className="val-pills">
                <span>Possible values:</span>
                <span className="val-pill">Market</span>
                <span className="val-pill">Limit</span>
              </div>
              <p className="p-desc">Order type</p>
            </div>

            <div className="tree-item">
              <span className="p-name">qty</span>
              <span className="p-type">string</span>
              <span className="req-tag">required</span>
              <p className="p-desc">Order qty</p>
            </div>

            <div className="tree-item">
              <span className="p-name">price</span>
              <span className="p-type">string</span>
              <p className="p-desc">ignore it if Market order</p>
            </div>

            <div className="tree-item">
              <span className="p-name">triggerPrice</span>
              <span className="p-type">string</span>
              <p className="p-desc">Modify StopOrder trigger price</p>
            </div>

            <div className="tree-item">
              <span className="p-name">tpslMode</span>
              <span className="p-type">string</span>
              <div className="val-pills">
                <span>Possible values:</span>
                <span className="val-pill">Full</span>
                <span className="val-pill">Partial</span>
              </div>
              <p className="p-desc">
                Full：TPSL for full size, Partial：TPSL for partial size
              </p>
            </div>

            <div className="tree-item">
              <span className="p-name">takeProfit</span>
              <span className="p-type">string</span>
              <p className="p-desc">Modify take profit price</p>
            </div>

            <div className="tree-item">
              <span className="p-name">stopLoss</span>
              <span className="p-type">string</span>
              <p className="p-desc">Modify stop loss price</p>
            </div>

            <div className="tree-item">
              <span className="p-name">triggerBy</span>
              <span className="p-type">string</span>
              <div className="val-pills">
                <span>Possible values:</span>
                <span className="val-pill">LastPrice</span>
                <span className="val-pill">MarkPrice</span>
                <span className="val-pill">IndexPrice</span>
              </div>
              <p className="p-desc">Modify the type of trigger price</p>
            </div>

            <div className="tree-item">
              <span className="p-name">tpTriggerBy</span>
              <span className="p-type">string</span>
              <div className="val-pills">
                <span>Possible values:</span>
                <span className="val-pill">LastPrice</span>
                <span className="val-pill">MarkPrice</span>
                <span className="val-pill">IndexPrice</span>
              </div>
              <p className="p-desc">
                Modify trigger take profit price price type
              </p>
            </div>

            <div className="tree-item">
              <span className="p-name">slTriggerBy</span>
              <span className="p-type">string</span>
              <div className="val-pills">
                <span>Possible values:</span>
                <span className="val-pill">LastPrice</span>
                <span className="val-pill">MarkPrice</span>
                <span className="val-pill">IndexPrice</span>
              </div>
              <p className="p-desc">
                Modify trigger stop loss price price type
              </p>
            </div>

            <div className="tree-item">
              <span className="p-name">tpLimitPrice</span>
              <span className="p-type">string</span>
              <p className="p-desc">
                The limit order price when take profit price is triggered
              </p>
            </div>

            <div className="tree-item">
              <span className="p-name">slLimitPrice</span>
              <span className="p-type">string</span>
              <p className="p-desc">
                The limit order price when stop loss price is triggered
              </p>
            </div>
          </div>
          </div>
        </div>

                <div style={{ marginTop: "64px" }}>
          <div className="panel-section-title">
            <h3 style={{ fontSize: "22px", fontWeight: "700", margin: 0 }}>Responses</h3>
            <div className="res-badge">
              <span className="dot"></span>
              200
            </div>
          </div>
          <div
            style={{ height: "1px", background: "#222", marginBottom: "32px" }}
          ></div>
          <p
            style={{ fontSize: "14px", color: "#8b949e", marginBottom: "24px" }}
          >
            successful operation
          </p>
        </div>
      </div>

      {/* Explorer Panel */}
      <div className="explorer-panel">
        <div className="endpoint-header">
          <span className="badge-post">POST</span>
          <span className="endpoint-path">/v5/order/amend</span>
        </div>

        <div className="panel-section-title">
          <h4>Request</h4>
          <button className="btn-primary">Send API Request</button>
        </div>

        <div>
          <span className="sub-label">Base URL</span>
          <span className="val-text">https://api-testnet.bitzup.com</span>
        </div>

        <div className="link-action">
          <span>+</span> Show optional parameters
        </div>

        <div className="sub-label">Body</div>
        <div className="code-container">
          <div className="copy-btn" onClick={() => handleCopy(codeMap.Node)}>
            {copied ? (
              <FiCheck size={16} color="#1fb184" />
            ) : (
              <FiCopy size={16} />
            )}
          </div>
          <pre className="code-content">
            {`{
  "`}
            <span className="syntax-key">category</span>
            {`": "`}
            <span className="syntax-str">linear</span>
            {`",
  "`}
            <span className="syntax-key">symbol</span>
            {`": "`}
            <span className="syntax-str">ETHUSDT</span>
            {`",
  "`}
            <span className="syntax-key">orderLinkId</span>
            {`": "`}
            <span className="syntax-str">test-xx1</span>
            {`",
  "`}
            <span className="syntax-key">qty</span>
            {`": "`}
            <span className="syntax-str">2</span>
            {`",
  "`}
            <span className="syntax-key">price</span>
            {`": "`}
            <span className="syntax-str">1100</span>
            {`"
}`}
          </pre>
        </div>

        <div className="panel-section-title">
          <h4>Request Example</h4>
        </div>

        <div className="lang-bar">
          {languages.map((l) => (
            <div
              key={l.id}
              className={`lang-tab ${lang === l.id ? "active" : ""}`}
              onClick={() => setLang(l.id)}
            >
              {l.icon}
            </div>
          ))}
        </div>

        <div className="code-container">
          <div
            className="copy-btn"
            onClick={() => handleCopy(codeMap[lang] || codeMap.Node)}
          >
            {copied ? (
              <FiCheck size={16} color="#1fb184" />
            ) : (
              <FiCopy size={16} />
            )}
          </div>
          <pre className="code-content">
            <code>{codeMap[lang] || codeMap.Node}</code>
          </pre>
        </div>
      </div>
    </div>
  );
};
