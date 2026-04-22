import { useState, useEffect, useRef } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FiCopy, FiCheck } from "react-icons/fi";

export const PublicKlineWS = () => {
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
  "topic": "kline.5.BTCUSDT",
  "data": [
    {
      "start": 1672324800000,
      "end": 1672325099999,
      "interval": "5",
      "open": "16649.5",
      "close": "16677",
      "high": "16677",
      "low": "16608",
      "volume": "2.081",
      "turnover": "34666.4005",
      "confirm": false,
      "timestamp": 1672324988882
    }
  ],
  "ts": 1672324988882,
  "type": "snapshot"
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
            "kline.5.BTCUSDT"
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
    args: ['kline.5.BTCUSDT']
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
                <span className="pill">Kline</span>
              </div>

              {/* Title */}
              <h1 className="api-title">Kline</h1>
              <p className="api-desc">
                Subscribe to the klines stream to get live klinestick updates.
              </p>

              {/* SUBSCRIBE PARAMETERS */}
              <h3 className="top-req-text" id="subscribe-example">
                Subscribe Strategy
              </h3>
              <p>
                <strong>Topic:</strong> <span className="pill">kline.{"{"}interval{"}"}.{"{"}symbol{"}"}</span> e.g., <span className="pill">kline.5.BTCUSDT</span>
              </p>
              <div className="api-table-box">
                <table className="table table-striped api-table mb-0">
                  <thead>
                    <tr>
                      <th>Valid Intervals</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1, 3, 5, 15, 30, 60, 120, 240, 360, 720, D, M, W</td>
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
                      <td>Message type: <span className="pill">snapshot</span></td>
                    </tr>
                    <tr>
                      <td>ts</td>
                      <td>integer</td>
                      <td>Timestamp that the system generated the data (ms)</td>
                    </tr>
                    <tr>
                      <td>data</td>
                      <td>array</td>
                      <td>Array containing kline update objects</td>
                    </tr>
                    <tr>
                      <td>data.start</td>
                      <td>integer</td>
                      <td>Kline start timestamp (ms)</td>
                    </tr>
                    <tr>
                      <td>data.end</td>
                      <td>integer</td>
                      <td>Kline end timestamp (ms)</td>
                    </tr>
                    <tr>
                      <td>data.interval</td>
                      <td>string</td>
                      <td>Kline interval</td>
                    </tr>
                    <tr>
                      <td>data.open</td>
                      <td>string</td>
                      <td>Open price</td>
                    </tr>
                    <tr>
                      <td>data.close</td>
                      <td>string</td>
                      <td>Close price</td>
                    </tr>
                    <tr>
                      <td>data.high</td>
                      <td>string</td>
                      <td>High price</td>
                    </tr>
                    <tr>
                      <td>data.low</td>
                      <td>string</td>
                      <td>Low price</td>
                    </tr>
                    <tr>
                      <td>data.volume</td>
                      <td>string</td>
                      <td>Trade volume</td>
                    </tr>
                    <tr>
                      <td>data.turnover</td>
                      <td>string</td>
                      <td>Trade turnover</td>
                    </tr>
                    <tr>
                      <td>data.confirm</td>
                      <td>boolean</td>
                      <td>If true, the current kline has been finalized</td>
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

              <div className="api-code-box position-relative" style={{ marginBottom: "40px" }}>
                {/* COPY ICON */}
                <button className="copy-btn" onClick={handleCopy}>
                  {copied ? <FiCheck /> : <FiCopy />}
                </button>

                <pre>
                  {codeMap[lang]}
                </pre>
              </div>

              {/* RESPONSE EXAMPLE */}
              <h3 className="top-req-text" id="response-example">
                Response Example
              </h3>
              <div className="api-code-box position-relative" style={{ marginBottom: "40px" }}>
                <button className="copy-btn" onClick={handleCopyRes}>
                  {copiedRes ? <FiCheck /> : <FiCopy />}
                </button>
                <pre>
                  {responseCode}
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
