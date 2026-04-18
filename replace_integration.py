import sys

full_code = """import "./IntegrationGuidance.css";
import { useState } from "react";
import { FiCopy, FiCheck } from "react-icons/fi";

const IntegrationGuidance = () => {

  const [langGet, setLangGet] = useState("GET");
  const [langPost, setLangPost] = useState("POST");
  const [copiedGet, setCopiedGet] = useState(false);
  const [copiedPost, setCopiedPost] = useState(false);
  const [copied1, setCopied1] = useState(false);


  const getCode1 = () => {
    return `{
    "retCode": 0,
    "retMsg": "OK",
    "result": {},
    "retExtInfo": {},
    "time": 1672211918471
}`;
  };

  const codeMapGet = {
    GET: `GET /v5/order/realtime?category=option&symbol=BTC-29JUL22-25000-C HTTP/1.1\\nHost: api.bitzup.com`,
  };

  const codeMapPost = {
    POST: `POST /v5/order/create HTTP/1.1\\nHost: api.bitzup.com\\nContent-Type: application/json\\n\\n{\\n    "category": "option",\\n    "symbol": "BTC-29JUL22-25000-C",\\n    "side": "Buy",\\n    "positionIdx": 0,\\n    "orderType": "Limit",\\n    "qty": "0.1",\\n    "price": "1500",\\n    "timeInForce": "GoodTillCancel",\\n    "orderLinkId": "option-test-01"\\n}`,
  };

  const handleCopyGet = async () => {
    await navigator.clipboard.writeText(codeMapGet[langGet]);
    setCopiedGet(true);
    setTimeout(() => setCopiedGet(false), 1500);
  };

  const handleCopyPost = async () => {
    await navigator.clipboard.writeText(codeMapPost[langPost]);
    setCopiedPost(true);
    setTimeout(() => setCopiedPost(false), 1500);
  };

  const handleCopy1 = async () => {
    await navigator.clipboard.writeText(getCode1());
    setCopied1(true);
    setTimeout(() => setCopied1(false), 1500);
  };

  return (
    <div className="container-fluid p-0">
      <div className="api-layout">
        <h1 className="api-title">Integration Guidance</h1>
        <div className="alert-success api-tip mb-4">
          <strong>TIP:</strong> To learn more about the V5 API, please read the
          introduction.
        </div>

        <h3 className="top-req-text mt-4">Select Your API Key Type</h3>
        <p className="api-desc mb-3">
          Bybit provides two types of API keys: <b>System-generated API Keys</b> and <b>Auto-generated API Keys</b>.
        </p>

        <h5 className="top-req-text mt-3">System-generated API Keys</h5>
        <ul className="mb-4 text-white">
          <li><strong>HMAC API Key:</strong> Encryption is via HMAC. The secret key is visible only once upon creation. If lost, a new key must be created.</li>
          <li><strong>RSA API Key:</strong> Supports RSA file upload (a pair of keys needs to be generated locally by the user). It allows API users greater control to ensure security. <i>Click here</i> to learn how to generate an RSA Key pair.</li>
          <li><strong>Ed25519 API Key:</strong> Supports Ed25519 scheme format (a pair of keys needs to be generated locally by the user). It is a high-performance public-key signature system. <i>Click here</i> to learn how to generate an Ed25519 Key pair.</li>
        </ul>

        <h5 className="top-req-text mt-3">Auto-generated API Keys</h5>
        <p className="api-desc mb-4">
          Generated via the third-party application's authorization interface directly. The API Secret is not visible to the user at any point.
        </p>

        <h3 className="top-req-text">Authentication</h3>
        <p className="api-desc">
          Please visit Bybit website to generate an API key. 
          When building a request to an authenticated endpoint, please provide the following headers:
        </p>

        <ul className="mb-4 text-white">
          <li><code>X-BAPI-API-KEY</code> - API key</li>
          <li><code>X-BAPI-TIMESTAMP</code> - UTC timestamp in milliseconds</li>
          <li><code>X-BAPI-SIGN</code> - Signature for the request</li>
          <li><code>X-BAPI-RECV-WINDOW</code> - (optional) specify how long the request is valid in ms. Default is 5000</li>
        </ul>

        <div className="alert-warning api-tip mb-4" style={{ backgroundColor: '#ff980020', borderLeft: '4px solid #ff9800' }}>
          <strong>CAUTION:</strong>
          <ul className="mb-0 mt-2">
            <li>A timestamp should be generated when generating the signature.</li>
            <li>The <code>recvWindow</code> is closely related to the timestamp, so the same timestamp and <code>recvWindow</code> must be provided in the HTTP header parameters.</li>
            <li>A timestamp is considered valid if <code>server_time - recvWindow &lt;= timestamp &lt; server_time + 1000</code>.</li>
            <li>To prevent replay attacks, the Bybit API considers a timestamp parameter outside of this window to be invalid. Note that this means your system time must be synchronized with the internet time.</li>
          </ul>
        </div>

        <h3 className="top-req-text">How To Create A Request</h3>
        <p className="api-desc mb-2">Build a payload string to be signed. The exact requirements depend on whether you are using HMAC or RSA/Ed25519 signatures.</p>

        <h5 className="top-req-text mt-3">1. Construct the payload string</h5>
        <p className="api-desc mb-2"><code>timestamp + api_key + recv_window + (url_parameters/request_body)</code></p>
        
        <h5 className="top-req-text mt-3">2. Cryptographic signature</h5>
        <p className="api-desc mb-2"><strong>Rule of HMAC: </strong><br/><code>signature = hash_hmac('sha256', payload, api_secret)</code></p>
        <p className="api-desc mb-2"><strong>Rule of RSA: </strong><br/><code>signature = rsa_signature(payload, private_key)</code></p>
        <p className="api-desc mb-4"><strong>Rule of Ed25519: </strong><br/><code>signature = ed25519_signature(payload, private_key)</code></p>



        <h3 className="top-req-text">REST API Base Endpoint:</h3>
        <p className="api-desc mb-0">
          Mainnet:{" "}
          <span className="futures-text-api">
            https://api.bitzup.com
          </span>
          {" "}or{" "}
          <span className="futures-text-api">
            https://api.bitzup.com
          </span>
        </p>
        <p className="api-desc mb-3">
          Testnet:{" "}
          <span className="futures-text-api">
            https://api.bitzup.com
          </span>
        </p>

        <h6 className="top-req-text mb-2 mt-4">HTTP request example (GET)</h6>
        <div className="lang-tabs">
          {["GET"].map((t) => (
            <button
              key={t}
              className={langGet === t ? "active" : ""}
              onClick={() => setLangGet(t)}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="api-code-box position-relative">
          <button className="copy-btn" onClick={handleCopyGet}>
            {copiedGet ? <FiCheck /> : <FiCopy />}
          </button>

          <pre>
            <code>{codeMapGet[langGet]}</code>
          </pre>
        </div>

        <h6 className="top-req-text mb-2 mt-4">HTTP request example (POST)</h6>
        <div className="lang-tabs">
          {["POST"].map((t) => (
            <button
              key={t}
              className={langPost === t ? "active" : ""}
              onClick={() => setLangPost(t)}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="api-code-box position-relative">
          <button className="copy-btn" onClick={handleCopyPost}>
            {copiedPost ? <FiCheck /> : <FiCopy />}
          </button>

          <pre>
            <code>{codeMapPost[langPost]}</code>
          </pre>
        </div>


        <h3 className="top-req-text mt-4">Common response parameters</h3>

        {/* TABLE */}
        <div className="api-table-box mb-4">
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
                <td>Success/Error code. <span className="pill">0</span> means success</td>
              </tr>
              <tr>
                <td>retMsg</td>
                <td>string</td>
                <td>
                  Success/Error msg.
                  <span className="pill">OK</span>
                  indicates a successful response
                </td>
              </tr>
              <tr>
                <td>result</td>
                <td>Object</td>
                <td>Business data result</td>
              </tr>
              <tr>
                <td>retExtInfo</td>
                <td>Object</td>
                <td>Extra Error info</td>
              </tr>
              <tr>
                <td>time</td>
                <td>number</td>
                <td>Current timestamp (ms)</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* RESPONSE CODE BOX — SAME AS API BLOCK */}
        <div className="api-code-box position-relative">
          <button className="copy-btn" onClick={handleCopy1}>
            {copied1 ? <FiCheck /> : <FiCopy />}
          </button>
          <pre>
            <code>{getCode1()}</code>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default IntegrationGuidance;
"""

with open("src/components/pages/IntegrationGuidance.jsx", "w") as f:
    f.write(full_code)

print("Done updating IntegrationGuidance.jsx")
