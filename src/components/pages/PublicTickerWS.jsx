import { useState, useEffect, useRef } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FiCopy, FiCheck } from "react-icons/fi";

export const PublicTickerWS = () => {
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
  "topic": "tickers.BTCUSDT",
  "type": "snapshot",
  "data": {
    "symbol": "BTCUSDT",
    "tickDirection": "MinusTick",
    "price24hPcnt": "-0.158315",
    "lastPrice": "66666.60",
    "prevPrice24h": "79206.20",
    "highPrice24h": "79266.30",
    "lowPrice24h": "65076.90",
    "prevPrice1h": "66666.60",
    "markPrice": "66666.60",
    "indexPrice": "115418.19",
    "openInterest": "492373.72",
    "openInterestValue": "32824881841.75",
    "turnover24h": "4936790807.6521",
    "volume24h": "73191.3870",
    "fundingIntervalHour": "8",
    "fundingCap": "0.005",
    "nextFundingTime": "1760342400000",
    "fundingRate": "-0.005",
    "bid1Price": "66666.60",
    "bid1Size": "23789.165",
    "ask1Price": "66666.70",
    "ask1Size": "23775.469",
    "preOpenPrice": "",
    "preQty": "",
    "curPreListingPhase": ""
  },
  "cs": 9532239429,
  "ts": 1760325052630
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
            "tickers.BTCUSDT"
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
    args: ['tickers.BTCUSDT']
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
                <span className="pill">Ticker</span>
              </div>

              {/* Title */}
              <h1 className="api-title">Ticker</h1>
              <p className="api-desc">
                Subscribe to the ticker stream to get 24-hour market ticker stats.
              </p>

              {/* SUBSCRIBE PARAMETERS */}
              <h3 className="top-req-text" id="subscribe-example">
                Subscribe Strategy
              </h3>
              <p>
                <strong>Topic:</strong> <span className="pill">tickers.{"{"}symbol{"}"}</span> e.g., <span className="pill">tickers.BTCUSDT</span>
              </p>

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
                      <td>Message type: <span className="pill">snapshot</span> or <span className="pill">delta</span></td>
                    </tr>
                    <tr>
                      <td>ts</td>
                      <td>integer</td>
                      <td>Timestamp that the system generated the data (ms)</td>
                    </tr>
                    <tr>
                      <td>data</td>
                      <td>object</td>
                      <td>Array containing the ticker summary data</td>
                    </tr>
                    <tr>
                      <td>data.symbol</td>
                      <td>string</td>
                      <td>Symbol name</td>
                    </tr>
                    <tr>
                      <td>data.lastPrice</td>
                      <td>string</td>
                      <td>Last traded price</td>
                    </tr>
                    <tr>
                      <td>data.volume24h</td>
                      <td>string</td>
                      <td>Volume of trades in past 24 hours</td>
                    </tr>
                    <tr>
                      <td>data.turnover24h</td>
                      <td>string</td>
                      <td>Turnover value in past 24 hours</td>
                    </tr>
                    <tr>
                      <td>data.highPrice24h</td>
                      <td>string</td>
                      <td>Highest price in past 24 hours</td>
                    </tr>
                    <tr>
                      <td>data.lowPrice24h</td>
                      <td>string</td>
                      <td>Lowest price in past 24 hours</td>
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
