import "./IntegrationGuidance.css";
import { useState } from "react";
import { FiCopy, FiCheck } from "react-icons/fi";

const IntegrationGuidance = () => {

  const [lang, setLang] = useState("GET");
  const [copied, setCopied] = useState(false);
  const [copied1, setCopied1] = useState(false);


  const getCode1 = () => {
    return `{
  "status": 0,
  "message": "error message",
  "data": {},
}`;
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(codeMap[lang]);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const handleCopy1 = async () => {
    await navigator.clipboard.writeText(getCode1());
    setCopied1(true);
    setTimeout(() => setCopied1(false), 1500);
  };

  const codeMap = {
    GET: `GET /v5/order/realtime?category=option&symbol=BTC-29JUL22-25000-C HTTP/1.1
Host: api-testnet.bybit.com`,
  };

  return (
    <div className="container-fluid p-0">
      <div className="api-layout">
        <h1 className="api-title">Integration Guidance</h1>
        <div className="alert-success api-tip mb-4">
          <strong>TIP:</strong> To learn more about the V5 API, please read the
          introduction.
        </div>

        <h3 className="top-req-text">Authentication</h3>
        <p className="api-desc">
          Please visit BitZup website to generate an API key.
        </p>

        <h3 className="top-req-text">REST API Base Endpoint:</h3>
        <p className="api-desc mb-3">
          Mainnet:{" "}
          <span className="futures-text-api">
            https://api.bitzup.com/futures/api
          </span>
        </p>

        <h6 className="top-req-text mb-2">HTTP request example</h6>
        <div className="lang-tabs">
          {["GET"].map((t) => (
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

        <h3 className="top-req-text">Common response parameters</h3>

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
                <td>status</td>
                <td>number</td>
                <td>Success/Error code. 1: success, 0/3: error</td>
              </tr>
              <tr>
                <td>message</td>
                <td>string</td>
                <td>
                  Success/Error msg.
                  <span className="pill">SUCCESS</span>
                  indicates a successful response
                </td>
              </tr>
              <tr>
                <td>data</td>
                <td>Object</td>
                <td>Business data result</td>
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
            <code>
              {"{"}
              {"\n"} "status": 0,
              {"\n"} "message":{" "}
              <span className="json-string">"error message"</span>,{"\n"}{" "}
              "data": {"{"}
              {"}"},{"\n"}
              {"}"}
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default IntegrationGuidance;
