import { useState, useEffect, useRef } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FiCopy, FiCheck, FiAlertTriangle } from "react-icons/fi";

export const Connect = () => {
  const contentRef = useRef(null);

  const [lang, setLang] = useState("Python");
  const [copied, setCopied] = useState(false);
  const [copiedRes, setCopiedRes] = useState(false);

  // Local tabs for examples
  const [pongTab, setPongTab] = useState("Spot");
  const [subscribeTab, setSubscribeTab] = useState("Linear/Inverse");

  const [activeSection, setActiveSection] = useState("endpoints");

  const HEADER_OFFSET = 120;

  const handleCopy = async (text) => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const sections = [
    "endpoints",
    "authentication",
    "heartbeat",
    "subscribe",
    "filters",
    "response",
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

  const authResponse = `{
    "success": true,
    "ret_msg": "",
    "op": "auth",
    "conn_id": "cejreaspqfh3sjdnldmg-p"
}`;

  const publicPongResponse = `{
    "success": true,
    "ret_msg": "pong",
    "conn_id": "0970e817-426e-429a-a679-ff7f55e0b16a",
    "op": "ping"
}`;

  const privatePongResponse = `{
    "req_id": "test",
    "op": "pong",
    "args": [
        "1675418560633"
    ],
    "conn_id": "cfcb4ocsvfriu23r3er0-1b"
}`;

  const subscribeResponse = `{
    "success": true,
    "ret_msg": "",
    "op": "subscribe",
    "conn_id": "cejreassvfrsfvb9v1a0-2m"
}`;

  const codeMap = {
    Python: `import hmac
import json
import time
import websocket

api_key = "XXXXX"
api_secret = "XXXXX"

# Generate expires.
expires = int((time.time() + 1) * 1000)

# Generate signature.
signature = str(hmac.new(
    bytes(api_secret, "utf-8"),
    bytes(f"GET/realtime{expires}", "utf-8"), digestmod="sha256"
).hexdigest())

def on_message(ws, message):
    print("Received:", message)

def on_error(ws, error):
    print("Error:", error)

def on_close(ws, close_status_code, close_msg):
    print("### closed ###")

def on_open(ws):
    print("### opened ###")
    # Authenticate with API.
    ws.send(
        json.dumps({
            "op": "auth",
            "args": [api_key, expires, signature]
        })
    )

if __name__ == "__main__":
    websocket.enableTrace(False)
    url = "wss://stream.bitzup.com/v5/private"
    ws = websocket.WebSocketApp(url,
                              on_open=on_open,
                              on_message=on_message,
                              on_error=on_error,
                              on_close=on_close)
    ws.run_forever()`,
    Node: `const crypto = require("crypto");
const WebSocket = require('ws');

const apiKey = "XXXXX";
const apiSecret = "XXXXX";

const expires = new Date().getTime() + 10000;
const signature = crypto.createHmac("sha256", apiSecret)
    .update("GET/realtime" + expires)
    .digest("hex");

const url = 'wss://stream.bitzup.com/v5/private';
const ws = new WebSocket(url);

ws.on('open', function open() {
  console.log('connected');
  const authMsg = {
    op: 'auth',
    args: [apiKey, expires, signature]
  };
  ws.send(JSON.stringify(authMsg));
});

ws.on('message', function incoming(data) {
  console.log('received:', data.toString());
});

ws.on('error', function error(err) {
  console.error('error:', err);
});

ws.on('close', function close() {
  console.log('disconnected');
});`,
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
                <span className="kline-market">WebSocket Stream</span>
                <span className="mx-2">
                  <IoIosArrowForward className="kline-arrow" />
                </span>
                <span className="pill">Connect</span>
              </div>

              {/* Title */}
              <h1 className="api-title">Connect</h1>
              <p className="api-desc">
                Establish WebSocket connections for streaming real-time public
                and private market data.
              </p>

              {/* ENDPOINTS */}
              <h3 className="top-req-text" id="endpoints">
                WSS Endpoints
              </h3>

              <div
                className="api-table-box premium-card"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  padding: "24px",
                  borderRadius: "12px",
                  border: "1px solid var(--border-color)",
                }}
              >
                <h5
                  style={{ color: "var(--text-accent)", marginBottom: "16px" }}
                >
                  WebSocket Public Channel
                </h5>
                <p style={{ color: "var(--text-secondary)" }}>
                  Public topics do not require authentication and provide
                  high-frequency market data.
                </p>
                <div
                  style={{
                    background: "var(--bg-card)",
                    padding: "16px",
                    borderRadius: "8px",
                    border: "1px solid var(--border-color)",
                  }}
                >
                  <div style={{ marginBottom: "8px" }} className="text-mutne">
                    <strong>Linear (Futures):</strong>
                  </div>
                  <code
                    style={{ color: "var(--text-accent)", wordBreak: "break-all" }}
                  >
                    wss://stream.bitzup.com/v5/public/linear
                  </code>
                </div>
              </div>

              <div
                className="api-table-box mt-4 premium-card"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  padding: "24px",
                  borderRadius: "12px",
                  border: "1px solid var(--border-color)",
                }}
              >
                <h5
                  style={{ color: "var(--text-accent)", marginBottom: "16px" }}
                >
                  WebSocket Private Channel
                </h5>
                <p style={{ color: "var(--text-secondary)" }}>
                  Private topics require authentication via API key to receive
                  account events.
                </p>
                <div
                  style={{
                    background: "var(--bg-card)",
                    padding: "16px",
                    borderRadius: "8px",
                    border: "1px solid var(--border-color)",
                  }}
                >
                  <div style={{ marginBottom: "8px" }} className="text-mutne">
                    <strong>Main URL:</strong>
                  </div>
                  <code
                    style={{ color: "var(--text-accent)", wordBreak: "break-all" }}
                  >
                    wss://stream.bitzup.com/v5/private
                  </code>
                </div>
                <div
                  className="mt-4 text-mutne"
                  style={{
                    background: "var(--accent-neon-dim)",
                    padding: "16px",
                    borderRadius: "8px",
                    borderLeft: "4px solid var(--text-accent)",
                  }}
                >
                  <strong style={{ color: "var(--text-accent)" }}>TIP:</strong>{" "}
                  You can customise alive duration by adding{" "}
                  <span className="pill">max_active_time</span> (e.g. 30s to
                  600s).
                </div>
              </div>

              {/* AUTHENTICATION */}
              <h3 className="top-req-text mt-5" id="authentication">
                Authentication
              </h3>
              <p>
                Apply for authentication when establishing a connection to
                private topics. The signature should be generated using HMAC
                SHA256 against <span className="pill">GET/realtime{"{"}expires{"}"}</span>.
              </p>

              <div className="lang-tabs">
                {["Python", "Node"].map((t) => (
                  <button
                    key={t}
                    className={lang === t ? "active" : ""}
                    onClick={() => setLang(t)}
                  >
                    {t}
                  </button>
                ))}
              </div>

              <div
                className="api-code-box position-relative"
                style={{ marginBottom: "40px" }}
              >
                <button
                  className="copy-btn"
                  onClick={() => handleCopy(codeMap[lang])}
                >
                  {copied ? <FiCheck /> : <FiCopy />}
                </button>
                <pre>{codeMap[lang]}</pre>
              </div>

              <p className="mt-4 text-mutne">
                Successful authentication sample response:
              </p>
              <div
                className="api-code-box position-relative"
                style={{ marginBottom: "40px" }}
              >
                <button
                  className="copy-btn"
                  onClick={() => handleCopy(authResponse)}
                >
                  {copied ? <FiCheck /> : <FiCopy />}
                </button>
                <pre>{authResponse}</pre>
              </div>

              {/* HEARTBEAT */}
              <h1 className="api-title mt-5" id="heartbeat">
                How to Send the Heartbeat Packet
              </h1>
              <h5 className="mt-4 text-mutne mb-3">How to Send</h5>
              <div
                className="api-code-box position-relative"
                style={{ marginBottom: "30px" }}
              >
                <pre>
                  <code>{`// req_id is a customised ID, which is optional
ws.send(JSON.stringify({"req_id": "100001", "op": "ping"}));`}</code>
                </pre>
              </div>

              <h5 className="mt-4 text-mutne mb-3">Pong message example of public channels</h5>
              <div className="lang-tabs">
                {["Spot", "Linear/Inverse"].map((t) => (
                  <button
                    key={t}
                    className={pongTab === t ? "active" : ""}
                    onClick={() => setPongTab(t)}
                  >
                    {t}
                  </button>
                ))}
              </div>
              <div
                className="api-code-box position-relative"
                style={{ marginBottom: "40px" }}
              >
                <button
                  className="copy-btn"
                  onClick={() => handleCopy(publicPongResponse)}
                >
                  {copied ? <FiCheck /> : <FiCopy />}
                </button>
                <pre>{publicPongResponse}</pre>
              </div>

              <h5 className="mt-4 text-mutne mb-3">Pong message example of private channels</h5>
              <div
                className="api-code-box position-relative"
                style={{ marginBottom: "40px" }}
              >
                <button
                  className="copy-btn"
                  onClick={() => handleCopy(privatePongResponse)}
                >
                  {copied ? <FiCheck /> : <FiCopy />}
                </button>
                <pre>{privatePongResponse}</pre>
              </div>

              <div className="api-caution mb-5 api-info-box">
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
                  <FiAlertTriangle size={20} />
                  <strong style={{ textTransform: "uppercase", fontSize: "14px" }} className="api-info-title">caution</strong>
                </div>
                <p className="mb-0" style={{ color: "var(--text-secondary)" }}>
                  To avoid network or program issues, we recommend that you send the <span className="pill">ping</span> heartbeat packet every 20 seconds to maintain the WebSocket connection.
                </p>
              </div>

              {/* SUBSCRIBE */}
              <h1 className="api-title mt-5" id="subscribe">
                How to Subscribe to Topics
              </h1>
              <h3 className="top-req-text mt-4" id="filters">Understanding WebSocket Filters</h3>
              <h5 className="mt-4 text-mutne mb-3">How to subscribe with a filter</h5>
              <div
                className="api-code-box position-relative"
                style={{ marginBottom: "30px" }}
              >
                <pre>
                  <code>{`// Subscribing level 1 orderbook
{
    "req_id": "test", // optional
    "op": "subscribe",
    "args": [
        "orderbook.1.BTCUSDT"
    ]
}`}</code>
                </pre>
              </div>

              <p className="mt-4">Subscribing with multiple symbols and topics is supported.</p>
              <div
                className="api-code-box position-relative"
                style={{ marginBottom: "40px" }}
              >
                <pre>
                  <code>{`{
    "req_id": "test", // optional
    "op": "subscribe",
    "args": [
        "orderbook.1.BTCUSDT",
        "publicTrade.BTCUSDT",
        "orderbook.1.ETHUSDT"
    ]
}`}</code>
                </pre>
              </div>

              <h5 className="mt-4 text-mutne mb-3">Understanding WebSocket Filters: Unsubscription</h5>
              <p>You can dynamically subscribe and unsubscribe from topics without unsubscribing from the WebSocket like so:</p>
              <div
                className="api-code-box position-relative"
                style={{ marginBottom: "40px" }}
              >
                <pre>
                  <code>{`{
    "op": "unsubscribe",
    "args": [
        "publicTrade.ETHUSD"
    ],
    "req_id": "customised_id"
}`}</code>
                </pre>
              </div>

              {/* RESPONSE */}
              <h1 className="api-title mt-5" id="response">
                Understanding the Subscription Response
              </h1>
              <p className="mt-4 mb-3">Topic subscription response message example</p>
              <div className="lang-tabs">
                {["Linear/Inverse"].map((t) => (
                  <button
                    key={t}
                    className={subscribeTab === t ? "active" : ""}
                    onClick={() => setSubscribeTab(t)}
                  >
                    {t}
                  </button>
                ))}
              </div>
              <div
                className="api-code-box position-relative"
                style={{ marginBottom: "40px" }}
              >
                <button
                  className="copy-btn"
                  onClick={() => handleCopy(subscribeResponse)}
                >
                  {copied ? <FiCheck /> : <FiCopy />}
                </button>
                <pre>{subscribeResponse}</pre>
              </div>
            </div>

            {/* RIGHT SIDEBAR */}
            <div className="col-lg-3 col-md-4 d-none d-md-block">
              <div className="api-sidebar">
                <ul>
                  <li
                    className={activeSection === "endpoints" ? "active" : ""}
                    onClick={() => scrollToSection("endpoints")}
                  >
                    Endpoints
                  </li>
                  <li
                    className={
                      activeSection === "authentication" ? "active" : ""
                    }
                    onClick={() => scrollToSection("authentication")}
                  >
                    Authentication
                  </li>
                  <li
                    className={activeSection === "heartbeat" ? "active" : ""}
                    onClick={() => scrollToSection("heartbeat")}
                  >
                    Heartbeat Packet
                  </li>
                  <li
                    className={activeSection === "subscribe" ? "active" : ""}
                    onClick={() => scrollToSection("subscribe")}
                  >
                    Subscribe to Topics
                  </li>
                  <li
                    className={activeSection === "filters" ? "active" : ""}
                    onClick={() => scrollToSection("filters")}
                  >
                    WebSocket Filters
                  </li>
                  <li
                    className={activeSection === "response" ? "active" : ""}
                    onClick={() => scrollToSection("response")}
                  >
                    Subscription Response
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

