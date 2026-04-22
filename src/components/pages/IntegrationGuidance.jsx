import "./IntegrationGuidance.css";
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
    "result": {
    },
    "retExtInfo": {},
    "time": 1671017382656
}`;
  };

  const sigMap = {
    GET: `# rule:
timestamp+api_key+recv_window+queryString

# example values:
timestamp = "1658384314791"
api_key = "XXXXXXXXXX"
recv_window = "5000"
queryString = "category=linear&symbol=BTCUSDT"

# resulting string that needs to be signed:
"1658384314791XXXXXXXXXX5000category=linear&symbol=BTCUSDT"

# resulting example signature for HMAC:
"410e0f387bafb7afd0f1722c068515e09945610124fa11774da1da857b72f30b"`,
    POST: `# rule:
timestamp+api_key+recv_window+jsonBodyString

# example values:
timestamp = 1658385579423
api_key = XXXXXXXXXX
recv_window = 5000
jsonBodyString = {"category": "linear", "symbol": "BTCUSDT", "side": "Buy", "orderType": "Limit", "qty": "0.01", "price": "65000"}

# resulting string that needs to be signed:
1658385579423XXXXXXXXXX5000{"category": "linear", "symbol": "BTCUSDT", "side": "Buy", "orderType": "Limit", "qty": "0.01", "price": "65000"}

# resulting example signature for HMAC:
"f0da71972ce1811c882ca5e3fd1779791fb1fed499bef40e5558e50259acfd66"`
  };

  const codeMapHttp = {
    GET: `GET /v5/order/realtime?category=linear&symbol=BTCUSDT HTTP/1.1
Host: api.bitzup.com
-H 'X-BAPI-SIGN: XXXXXXXXXX' \\
-H 'X-BAPI-API-KEY: xxxxxxxxxxxxxxxxxx' \\
-H 'X-BAPI-TIMESTAMP: 1658384431891' \\
-H 'X-BAPI-RECV-WINDOW: 5000'`,
    POST: `POST /v5/order/create HTTP/1.1
Host: api.bitzup.com
-H 'X-Referer: XXXXXXXXXX' \\ [the header for broker users only]
-H 'X-BAPI-SIGN: XXXXXXXXXX' \\
-H 'X-BAPI-API-KEY: xxxxxxxxxxxxxxxxxx' \\
-H 'X-BAPI-TIMESTAMP: 1658385589135' \\
-H 'X-BAPI-RECV-WINDOW: 5000' \\
-H 'Content-Type: application/json' \\
-d '{"category": "linear", "symbol": "BTCUSDT", "side": "Buy", "orderType": "Limit", "qty": "0.01", "price": "65000"}'`
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
        <div className="api-content" style={{ padding: "40px 0" }}>
          <h1 className="api-title" style={{ fontSize: "36px", marginBottom: "20px" }}>Integration Guidance</h1>
          <div className="api-tip mb-4" style={{ background: "var(--accent-neon-dim)", borderLeft: "4px solid var(--text-accent)", padding: "16px 20px", borderRadius: "4px", color: "var(--text-main)" }}>
            <strong style={{ color: "var(--text-accent)" }}>TIP:</strong> To learn more about the V5 API, please read the
            Introduction.
          </div>

          <p className="api-desc mb-4" style={{ fontSize: "16px", color: "var(--text-secondary)" }}>
            IP addresses located in the US or Mainland China are restricted and will return a <code style={{ color: "var(--text-accent)", background: "rgba(255,255,255,0.05)", padding: "2px 6px", borderRadius: "4px" }}>403 Forbidden</code> error for requests to Bitzup API.
          </p>

          {/* Authentication */}
          <h2 className="top-req-text mt-5" style={{ fontSize: "24px", borderBottom: "1px solid var(--border-color)", paddingBottom: "12px", marginBottom: "20px" }}>Authentication</h2>
          <p className="api-desc mb-4">
            Please visit Bitzup's testnet or mainnet to generate an API key.
          </p>

          <p className="api-desc mb-2" style={{ fontWeight: "600", color: "var(--text-primary)" }}>REST API Base Endpoint:</p>
          <ul className="mb-4 text-mutne" style={{ listStyle: "none", paddingLeft: "0" }}>
            <li style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
              <span style={{ color: "var(--text-accent)", marginTop: "4px" }}>●</span>
              <div>
                <span style={{ display: "block", marginBottom: "8px" }}>Mainnet:</span>
                <ul style={{ listStyle: "none", paddingLeft: "20px" }}>
                  <li>- <code style={{ background: "var(--bg-card)", padding: "4px 8px", borderRadius: "4px" }}>https://api.bitzup.com</code></li>
                </ul>
              </div>
            </li>
          </ul>

          {/* Select Your API Key Type */}
          <h3 className="top-req-text mt-5" style={{ fontSize: "20px", marginBottom: "16px" }}>Select Your API Key Type</h3>
          <p className="api-desc mb-3">
            <strong style={{ color: "var(--text-primary)" }}>System-generated API Keys:</strong> The API key generated by the Bitzup system operates with HMAC encryption. You will be provided with a pair of public and private keys. Please treat this pair of keys as passwords and keep them safe.
          </p>
          <p className="api-desc mb-4">
            Follow <a href="https://github.com/bitzup-exchange/api-usage-examples" target="_blank" rel="noreferrer" style={{ color: "var(--text-accent)", textDecoration: "underline" }}>HMAC sample scripts</a> to complete encryption procedures.
          </p>

          <p className="api-desc mb-3">
            <strong style={{ color: "var(--text-primary)" }}>Auto-generated API Keys:</strong> Self-generated API keys operate with RSA encryption. You must create your public and private keys through the software, and then only provide the public key to Bitzup, we will never hold your private key.
          </p>
          <ol className="mb-5 text-mutne" style={{ paddingLeft: "20px" }}>
            <li style={{ marginBottom: "10px" }}>Use <a href="https://github.com/bitzup-exchange/api-rsa-generator" target="_blank" rel="noreferrer" style={{ color: "var(--text-accent)", textDecoration: "underline" }}>api-rsa-generator</a> to create RSA private and public keys</li>
            <li>Follow the <a href="https://github.com/bitzup-exchange/api-usage-examples" target="_blank" rel="noreferrer" style={{ color: "var(--text-accent)", textDecoration: "underline" }}>RSA sample scripts</a> to complete encryption procedures.</li>
          </ol>

          {/* HTTP Headers */}
          <h3 className="top-req-text" style={{ fontSize: "20px", marginBottom: "16px" }}>HTTP Headers for Authenticated Endpoints</h3>
          <p className="api-desc mb-3">The following HTTP header keys must be used for authentication:</p>
          <ul className="mb-4 text-mutne" style={{ listStyle: "none", paddingLeft: "0" }}>
            {[
              { key: "X-BAPI-API-KEY", desc: "API key" },
              { key: "X-BAPI-TIMESTAMP", desc: "UTC timestamp in milliseconds" },
              { key: "X-BAPI-SIGN", desc: "a signature derived from the request's parameters" },
              { key: "X-Referer", desc: "the header for broker users only" }
            ].map((item, id) => (
              <li key={id} style={{ marginBottom: "10px", display: "flex", gap: "12px", alignItems: "center" }}>
                <code style={{ background: "var(--bg-card)", padding: "4px 8px", borderRadius: "4px", color: "var(--text-accent)", minWidth: "180px" }}>{item.key}</code>
                <span style={{ color: "var(--text-secondary)" }}>- {item.desc}</span>
              </li>
            ))}
          </ul>

        <p className="api-desc mb-3">
          We also provide <span className="pill">X-BAPI-RECV-WINDOW</span> (unit in millisecond and default value is 5,000) to specify how long an HTTP request is valid. It is also used to prevent replay attacks.
        </p>
        <p className="api-desc mb-3">
          A smaller <span className="pill">X-BAPI-RECV-WINDOW</span> is more secure, but your request may fail if the transmission time is greater than your <span className="pill">X-BAPI-RECV-WINDOW</span>.
        </p>

        <div className="api-caution mb-4">
          <strong>CAUTION:</strong>
          <p className="mb-2 mt-2">Please make sure that the timestamp parameter adheres to the following rule:</p>
          <code className="d-block mb-2">server_time - recv_window &lt;= timestamp &lt; server_time + 1000</code>
          <p className="mb-2">which means your timestamp should lie in range: <span className="pill">[server_time - recv_window; server_time + 1000)</span></p>
          <p className="mb-0"><span className="pill">server_time</span> stands for Bitzup server time, which can be queried via the Server Time endpoint. Keep in mind it's highly recommended that you use local device time for timestamp and keep it NTP-synchronized at all times.</p>
        </div>

        {/* Create A Request */}
        <h3 className="top-req-text">Create A Request</h3>
        <p className="api-desc mb-2">To assist in diagnosing advanced network problems, you may consider adding <span className="pill">cdn-request-id</span> to your request headers. Its value should be unique for each request.</p>

        <p className="api-desc mb-2"><strong>Basic steps:</strong></p>
        <ol className="mb-4 text-mutne">
          <li>Calculate the string you want to sign as follows:
            <ul>
              <li>For GET requests: <span className="pill">timestamp + API key + recv_window + queryString</span></li>
              <li>For POST requests: <span className="pill">timestamp + API key + recv_window + jsonBodyString</span></li>
            </ul>
          </li>
          <li>Use the HMAC_SHA256 or RSA_SHA256 algorithm to sign the string in step 1, and convert it to a lowercase HEX string for HMAC_SHA256, or base64 for RSA_SHA256 to obtain the string value of your signature.</li>
          <li>Add your signature to <span className="pill">X-BAPI-API-KEY</span> header send the HTTP request. You can refer to examples below for more info.</li>
        </ol>

        <h5 className="top-req-text mt-3 mb-2">An example for how to generate plain text to encrypt</h5>

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

          <div className="api-code-box position-relative mb-4" >
            <button className="copy-btn" onClick={handleCopySig} style={{ position: "absolute", top: "12px", right: "12px", background: "transparent", border: "none", color: "var(--text-secondary)", cursor: "pointer" }}>
              {copiedSig ? <FiCheck color="var(--text-accent)" /> : <FiCopy />}
            </button>
            <pre style={{ margin: 0 }}>
              <code >
                {sigMap[langSig]}
              </code>
            </pre>
          </div>

        <h5 className="top-req-text mt-4 mb-2">HTTP request examples</h5>
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

          <div className="api-code-box position-relative" >
            <button className="copy-btn" onClick={handleCopyHttp} style={{ position: "absolute", top: "12px", right: "12px", background: "transparent", border: "none", color: "var(--text-secondary)", cursor: "pointer" }}>
              {copiedHttp ? <FiCheck color="var(--text-accent)" /> : <FiCopy />}
            </button>

            <pre style={{ margin: 0 }}>
              <code >{codeMapHttp[langHttp]}</code>
            </pre>
          </div>


        <h2 className="top-req-text mt-4">Common response parameters</h2>

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
                  Success/Error msg. <span className="pill">OK</span>, <span className="pill">success</span>, <span className="pill">SUCCESS</span> indicate a successful response
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
                <td>Extend info. Most of the time, it is <span className="pill">{"{}"}</span></td>
              </tr>
              <tr>
                <td>time</td>
                <td>number</td>
                <td>Current timestamp (ms)</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* RESPONSE CODE BOX */}
          <div className="api-code-box position-relative" >
            <button className="copy-btn" onClick={handleCopy1} style={{ position: "absolute", top: "12px", right: "12px", background: "transparent", border: "none", color: "var(--text-secondary)", cursor: "pointer" }}>
              {copied1 ? <FiCheck color="var(--text-accent)" /> : <FiCopy />}
            </button>
            <pre style={{ margin: 0 }}>
              <code >{getCode1()}</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntegrationGuidance;
