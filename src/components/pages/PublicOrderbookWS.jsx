import { useState, useEffect, useRef } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FiCopy, FiCheck } from "react-icons/fi";

export const PublicOrderbookWS = () => {
    const contentRef = useRef(null);

    const [lang, setLang] = useState("Python");
    const [copied, setCopied] = useState(false);
    const [copiedRes, setCopiedRes] = useState(false);

    const [activeSection, setActiveSection] = useState("subscribe-example");

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
        "subscribe-example",
        "response-params",
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
  "topic": "orderbook.50.BTCUSDT",
  "type": "snapshot",
  "ts": 1672304484978,
  "data": {
    "s": "BTCUSDT",
    "b": [
      [
        "16493.50",
        "0.006"
      ],
      [
        "16493.00",
        "0.100"
      ]
    ],
    "a": [
      [
        "16611.00",
        "0.029"
      ],
      [
        "16612.00",
        "0.213"
      ]
    ],
    "u": 18521288,
    "seq": 7961638724
  },
  "cts": 1672304484976
}`;

    const codeMap = {
        Python: `import websocket
import json

def on_message(ws, message):
    print("Received:", message)

def on_error(ws, error):
    print("Error:", error)

def on_close(ws, close_status_code, close_msg):
    print("### closed ###")

def on_open(ws):
    print("### opened ###")
    subscribe_msg = {
        "op": "subscribe",
        "args": [
            "orderbook.50.BTCUSDT"
        ]
    }
    ws.send(json.dumps(subscribe_msg))

if __name__ == "__main__":
    websocket.enableTrace(False)
    url = "wss://stream.bitzup.com/v5/public/linear"
    ws = websocket.WebSocketApp(url,
                              on_open=on_open,
                              on_message=on_message,
                              on_error=on_error,
                              on_close=on_close)
    ws.run_forever()
`,
    Node: `const WebSocket = require('ws');

const url = 'wss://stream.bitzup.com/v5/public/linear';
const ws = new WebSocket(url);

ws.on('open', function open() {
  console.log('connected');
  const subscribeMsg = {
    op: 'subscribe',
    args: ['orderbook.50.BTCUSDT']
  };
  ws.send(JSON.stringify(subscribeMsg));
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
                <span className="kline-market">WebSocket Public</span>
                <span className="mx-2">
                  <IoIosArrowForward className="kline-arrow" />
                </span>
                <span className="pill">Orderbook</span>
              </div>

              {/* Title */}
              <h1 className="api-title">Orderbook</h1>
              <p className="api-desc">
                Subscribe to the orderbook stream. Supports different depths.
              </p>

              {/* SUBSCRIBE PARAMETERS */}
              <h3 className="top-req-text" id="subscribe-example">
                Subscribe Strategy
              </h3>
              <p>
                <strong>Topic:</strong> <code>orderbook.{"{"}depth{"}"}.{"{"}symbol{"}"}</code> e.g., <code>orderbook.1.BTCUSDT</code>
              </p>
              <div className="api-table-box">
                <table className="table table-striped api-table mb-0">
                  <thead>
                    <tr>
                      <th>Depth Options</th>
                      <th>Push Frequency</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Linear & Inverse: Level 1, 50, 200, 1000</td>
                      <td>10ms, 20ms, 100ms, 200ms respectively</td>
                    </tr>
                    <tr>
                      <td>Spot: Level 1, 50, 200, 1000</td>
                      <td>10ms, 20ms, 200ms, 200ms respectively</td>
                    </tr>
                    <tr>
                      <td>Option: Level 25, 100</td>
                      <td>20ms, 100ms respectively</td>
                    </tr>
                  </tbody>
                </table>
              </div>

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
                      <td>topic</td>
                      <td>string</td>
                      <td>Topic name</td>
                    </tr>
                    <tr>
                      <td>type</td>
                      <td>string</td>
                      <td>Message type: <code>snapshot</code> or <code>delta</code></td>
                    </tr>
                    <tr>
                      <td>ts</td>
                      <td>integer</td>
                      <td>Timestamp that the system generated the data</td>
                    </tr>
                    <tr>
                      <td>data</td>
                      <td>object</td>
                      <td>Object containing the orderbook data</td>
                    </tr>
                    <tr>
                      <td>data.s</td>
                      <td>string</td>
                      <td>Symbol name</td>
                    </tr>
                    <tr>
                      <td>data.b</td>
                      <td>array</td>
                      <td>Bids. An array of <code>[price, size]</code></td>
                    </tr>
                    <tr>
                      <td>data.a</td>
                      <td>array</td>
                      <td>Asks. An array of <code>[price, size]</code></td>
                    </tr>
                    <tr>
                      <td>data.u</td>
                      <td>integer</td>
                      <td>Update ID. Is <code>1</code> if caused by a service restart</td>
                    </tr>
                    <tr>
                      <td>data.seq</td>
                      <td>integer</td>
                      <td>Cross sequence number. Smaller seq means earlier generated data.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* REQUEST EXAMPLE */}
              <h3 className="top-req-text" id="request-example">
                Subscribe Example
              </h3>

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
                    className={activeSection === "subscribe-example" ? "active" : ""}
                    onClick={() => scrollToSection("subscribe-example")}
                  >
                    Subscribe Example
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
