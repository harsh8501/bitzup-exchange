import sys

full_code = """import "./IntegrationGuidance.css";
import { useState } from "react";
import { FiCopy, FiCheck } from "react-icons/fi";

const IntegrationGuidance = () => {

  const [langSig, setLangSig] = useState("GET");
  const [langHttp, setLangHttp] = useState("GET");
  
  const [copiedSig, setCopiedSig] = useState(false);
  const [copiedHttp, setCopiedHttp] = useState(false);
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

  const sigMap = {
    GET: `# rule:\\ntimestamp+api_key+recv_window+queryString\\n\\n# example values:\\ntimestamp = "1658384314791"\\napi_key = "XXXXXXXXXX"\\nrecv_window = "5000"\\nqueryString = "category=option&symbol=BTC-29JUL22-25000-C"\\n\\n# resulting string that needs to be signed:\\n"1658384314791XXXXXXXXXX5000category=option&symbol=BTC-29JUL22-25000-C"\\n\\n# resulting example signature for HMAC:\\n"410e0f387bafb7afd0f1722c068515e09945610124fa11774da1da857b72f30b"`,
    POST: `# rule:\\ntimestamp+api_key+recv_window+jsonBodyString\\n\\n# example values:\\ntimestamp = 1658385579423\\napi_key = XXXXXXXXXX\\nrecv_window = 5000\\njsonBodyString = {"category": "option"}\\n\\n# resulting string that needs to be signed:\\n1658385579423XXXXXXXXXX5000{"category": "option"}\\n\\n# resulting example signature for HMAC:\\n"f0da71972ce1811c882ca5e3fd1779791fb1fed499bef40e5558e50259acfd66"`
  };
  
  const codeMapHttp = {
    GET: `GET /v5/order/realtime?category=option&symbol=BTC-29JUL22-25000-C HTTP/1.1\\nHost: api-testnet.bybit.com\\n-H 'X-BAPI-SIGN: XXXXXXXXXX' \\\\\\n-H 'X-BAPI-API-KEY: XXXXXXXXXXXXXXXXXX' \\\\\\n-H 'X-BAPI-TIMESTAMP: 1658384431891' \\\\\\n-H 'X-BAPI-RECV-WINDOW: 5000'`,
    POST: `POST /v5/order/create HTTP/1.1\\nHost: api-testnet.bybit.com\\n-H 'X-Referer: XXXXXXXXXX' \\\\ [the header for broker users only]\\n-H 'X-BAPI-SIGN: XXXXXXXXXX' \\\\\\n-H 'X-BAPI-API-KEY: XXXXXXXXXXXXXXXXXX' \\\\\\n-H 'X-BAPI-TIMESTAMP: 1658385589135' \\\\\\n-H 'X-BAPI-RECV-WINDOW: 5000' \\\\\\n-H 'Content-Type: application/json' \\\\\\n\\n{\\n    "category": "option",\\n    "symbol": "BTC-29JUL22-25000-C",\\n    "side": "Buy",\\n    "positionIdx": 0,\\n    "orderType": "Limit",\\n    "qty": "0.1",\\n    "price": "1500",\\n    "timeInForce": "GoodTillCancel",\\n    "orderLinkId": "option-test-01"\\n}`
  };

  const handleCopySig = async () => {
    await navigator.clipboard.writeText(sigMap[langSig]);
    setCopiedSig(true);
    setTimeout(() => setCopiedSig(false), 1500);
  };

  const handleCopyHttp = async () => {
    await navigator.clipboard.writeText(codeMapHttp[langHttp]);
    setCopiedHttp(true);
    setTimeout(() => setCopiedHttp(false), 1500);
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

        <div className="api-caution mb-4">
          <strong>CAUTION:</strong>
          <p className="mb-2 mt-2">Please make sure that the timestamp parameter adheres to the following rule:</p>
          <code className="d-block mb-2">server_time - recv_window &lt;= timestamp &lt; server_time + 1000</code>
          <p className="mb-2">which means your timestamp should lie in range: <code>[server_time - recv_window; server_time + 1000)</code></p>
          <p className="mb-0"><code>server_time</code> stands for Bybit server time, which can be queried via the Server Time endpoint. Keep in mind it's highly recommended that you use local device time for timestamp and keep it NTP-synchronized at all times.</p>
        </div>

        
        <h3 className="top-req-text">How To Create A Request</h3>
        <p className="api-desc mb-2">Build a payload string to be signed. The exact requirements depend on whether you are using HMAC or RSA/Ed25519 signatures.</p>

        <div className="api-caution mb-4">
          <strong>NOTE:</strong>
          <ul className="mb-0 mt-2">
            <li>For GET requests, the string to sign is a concatenated string of timestamp, api_key, recvWindow, and query string.</li>
            <li>For POST requests, the string to sign is a concatenated string of timestamp, api_key, recvWindow, and JSON body string.</li>
          </ul>
        </div>

        <h5 className="top-req-text mt-3 mb-2">Signature Calculation Examples</h5>
        
        <div className="lang-tabs mt-3">
          {["GET", "POST"].map((t) => (
            <button
              key={t}
              className={langSig === t ? "active" : ""}
              onClick={() => setLangSig(t)}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="api-code-box position-relative mb-4">
          <button className="copy-btn" onClick={handleCopySig}>
            {copiedSig ? <FiCheck /> : <FiCopy />}
          </button>
          <pre>
            <code>
{sigMap[langSig]}
            </code>
          </pre>
        </div>

        <h5 className="top-req-text mt-4">2. Cryptographic signature</h5>
        <p className="api-desc mb-2"><strong>Rule of HMAC: </strong><br/><code>signature = hash_hmac('sha256', payload, api_secret)</code></p>
        <p className="api-desc mb-2"><strong>Rule of RSA: </strong><br/><code>signature = rsa_signature(payload, private_key)</code></p>
        <p className="api-desc mb-4"><strong>Rule of Ed25519: </strong><br/><code>signature = ed25519_signature(payload, private_key)</code></p>


        <h3 className="top-req-text">REST API Base Endpoint:</h3>
        <p className="api-desc mb-0">
          Mainnet:{" "}
          <span className="futures-text-api">
            https://api.bybit.com
          </span>
          {" "}or{" "}
          <span className="futures-text-api">
            https://api.bytick.com
          </span>
        </p>
        <p className="api-desc mb-3">
          Testnet:{" "}
          <span className="futures-text-api">
            https://api-testnet.bybit.com
          </span>
        </p>

        <h6 className="top-req-text mb-2 mt-4">HTTP request examples</h6>
        <div className="lang-tabs">
          {["GET", "POST"].map((t) => (
            <button
              key={t}
              className={langHttp === t ? "active" : ""}
              onClick={() => setLangHttp(t)}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="api-code-box position-relative">
          <button className="copy-btn" onClick={handleCopyHttp}>
            {copiedHttp ? <FiCheck /> : <FiCopy />}
          </button>

          <pre>
            <code>{codeMapHttp[langHttp]}</code>
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

print("IntegrationGuidance.jsx tabs structure updated.")
