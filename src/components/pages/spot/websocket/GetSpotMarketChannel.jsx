import { useState, useEffect, useRef } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FiCopy, FiCheck } from "react-icons/fi";

export const GetSpotMarketChannel = () => {
  const contentRef = useRef(null);

  const [copiedReq, setCopiedReq] = useState(false);
  const [copiedRes, setCopiedRes] = useState(false);
  const [copiedPush, setCopiedPush] = useState(false);

  const [activeSection, setActiveSection] = useState("req-params");

  const HEADER_OFFSET = 120;

  const reqExample = `{
  "action": "subscribe",
  "type": "ticker",
  "symbol": "BTCUSDT"
}`;

  const resExample = `{
  "event": "subscribe",
  "type": "ticker",
  "symbol": "BTCUSDT",
  "status": "success"
}`;

  const pushExample = `{
    "type": "ticker",
    "symbol": "BTCUSDT",
    "lastPrice": "64073.21",
    "volume24h": "5273.789076",
    "high24h": "64198.77",
    "low24h": "62726.67",
    "priceChangePercent": "0.01042",
    "bidPrice": "64077.26",
    "bidQty": "0.441931",
    "askPrice": "64077.27",
    "askQty": "0.63577",
    "askPr": "64077.27",
    "askSz": "0.63577",
    "bidPr": "64077.26",
    "bidSz": "0.441931",
    "baseVolume": "5273.789076",
    "quoteVolume": "335673974.655112",
    "change24h": "0.01042",
    "ts": 1785305528468
}`;

  const handleCopyReq = async () => {
    await navigator.clipboard.writeText(reqExample);
    setCopiedReq(true);
    setTimeout(() => setCopiedReq(false), 1500);
  };

  const handleCopyRes = async () => {
    await navigator.clipboard.writeText(resExample);
    setCopiedRes(true);
    setTimeout(() => setCopiedRes(false), 1500);
  };

  const handleCopyPush = async () => {
    await navigator.clipboard.writeText(pushExample);
    setCopiedPush(true);
    setTimeout(() => setCopiedPush(false), 1500);
  };

  const sections = [
    "request-params",
    "response-params",
    "push-params",
    "request-example",
    "response-example",
    "push-data",
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

  return (
    <div className="container-fluid p-0">
      <div className="api-layout">
        <div className="row">
          {/* LEFT CONTENT */}
          <div className="col-lg-9 col-md-8 api-content" ref={contentRef}>
            {/* Breadcrumb */}
            <div className="breadcrumb mb-4">
              <span className="kline-market">Spot</span>
              <span className="mx-2">
                <IoIosArrowForward className="kline-arrow" />
              </span>
              <span className="kline-market">Websocket</span>
              <span className="mx-2">
                <IoIosArrowForward className="kline-arrow" />
              </span>
              <span className="kline-market">Public</span>
              <span className="mx-2">
                <IoIosArrowForward className="kline-arrow" />
              </span>
              <span className="pill">Ticker Channel</span>
            </div>

            {/* Title */}
            <h1 className="api-title">Ticker Channel</h1>
            <div className="mb-3">
              <span className="badge bg-secondary text-light">Frequency of data push: 200ms ~ 300ms</span>
            </div>
            <p className="api-desc">
              Get the product's latest price, bid price, ask price and 24h trading volume information via WebSocket.
            </p>

            {/* WEBSOCKET ENDPOINT */}
            <div className="mb-4">
              <h4 style={{ fontSize: "16px", fontWeight: "600", color: "#fff", marginBottom: "8px" }}>WebSocket Endpoint</h4>
              <div className="http-path">
                <span className="method post">WSS</span>
                <span className="path">wss://socket.bitzup.com/spot/public/ws</span>
              </div>
            </div>

            {/* REQUEST PARAMETERS */}
            <h3 className="top-req-text" id="request-params">
              Request Parameters
            </h3>
            <div className="api-table-box mb-4">
              <table className="table table-striped api-table mb-0">
                <thead>
                  <tr>
                    <th>Parameter</th>
                    <th>Type</th>
                    <th>Required</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>action</td>
                    <td>String</td>
                    <td>Yes</td>
                    <td>Operation action: <span className="pill">subscribe</span> / <span className="pill">unsubscribe</span></td>
                  </tr>
                  <tr>
                    <td>type</td>
                    <td>String</td>
                    <td>Yes</td>
                    <td>Channel type: <span className="pill">ticker</span></td>
                  </tr>
                  <tr>
                    <td>symbol</td>
                    <td>String</td>
                    <td>Yes</td>
                    <td>Trading pair symbol e.g., <span className="pill">BTCUSDT</span></td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* RESPONSE PARAMETERS */}
            <h3 className="top-req-text" id="response-params">
              Response Parameters
            </h3>
            <div className="api-table-box mb-4">
              <table className="table table-striped api-table mb-0">
                <thead>
                  <tr>
                    <th>Parameter</th>
                    <th>Type</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>event</td>
                    <td>String</td>
                    <td>Event type (e.g., <span className="pill">subscribe</span> / <span className="pill">unsubscribe</span>)</td>
                  </tr>
                  <tr>
                    <td>type</td>
                    <td>String</td>
                    <td>Channel type: <span className="pill">ticker</span></td>
                  </tr>
                  <tr>
                    <td>symbol</td>
                    <td>String</td>
                    <td>Trading pair symbol e.g., <span className="pill">BTCUSDT</span></td>
                  </tr>
                  <tr>
                    <td>status</td>
                    <td>String</td>
                    <td>Subscription status (<span className="pill">success</span>)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* PUSH PARAMETERS */}
            <h3 className="top-req-text" id="push-params">
              Push Parameters
            </h3>
            <div className="api-table-box mb-4">
              <table className="table table-striped api-table mb-0">
                <thead>
                  <tr>
                    <th>Parameter</th>
                    <th>Type</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>type</td>
                    <td>String</td>
                    <td>Push channel name (<span className="pill">ticker</span>)</td>
                  </tr>
                  <tr>
                    <td>symbol</td>
                    <td>String</td>
                    <td>Trading pair symbol e.g., <span className="pill">BTCUSDT</span></td>
                  </tr>
                  <tr>
                    <td>lastPrice</td>
                    <td>String</td>
                    <td>Latest traded price</td>
                  </tr>
                  <tr>
                    <td>volume24h</td>
                    <td>String</td>
                    <td>24-hour trading volume</td>
                  </tr>
                  <tr>
                    <td>high24h</td>
                    <td>String</td>
                    <td>Highest price in the last 24 hours</td>
                  </tr>
                  <tr>
                    <td>low24h</td>
                    <td>String</td>
                    <td>Lowest price in the last 24 hours</td>
                  </tr>
                  <tr>
                    <td>priceChangePercent</td>
                    <td>String</td>
                    <td>24-hour price change percentage (e.g., <span className="pill">0.01042</span>)</td>
                  </tr>
                  <tr>
                    <td>bidPrice</td>
                    <td>String</td>
                    <td>Best bid price</td>
                  </tr>
                  <tr>
                    <td>bidQty</td>
                    <td>String</td>
                    <td>Best bid quantity</td>
                  </tr>
                  <tr>
                    <td>askPrice</td>
                    <td>String</td>
                    <td>Best ask price</td>
                  </tr>
                  <tr>
                    <td>askQty</td>
                    <td>String</td>
                    <td>Best ask quantity</td>
                  </tr>
                  <tr>
                    <td>askPr</td>
                    <td>String</td>
                    <td>Ask price alias</td>
                  </tr>
                  <tr>
                    <td>askSz</td>
                    <td>String</td>
                    <td>Ask quantity alias</td>
                  </tr>
                  <tr>
                    <td>bidPr</td>
                    <td>String</td>
                    <td>Bid price alias</td>
                  </tr>
                  <tr>
                    <td>bidSz</td>
                    <td>String</td>
                    <td>Bid quantity alias</td>
                  </tr>
                  <tr>
                    <td>baseVolume</td>
                    <td>String</td>
                    <td>24h base asset trading volume</td>
                  </tr>
                  <tr>
                    <td>quoteVolume</td>
                    <td>String</td>
                    <td>24h quote asset trading volume</td>
                  </tr>
                  <tr>
                    <td>change24h</td>
                    <td>String</td>
                    <td>24-hour price change value</td>
                  </tr>
                  <tr>
                    <td>ts</td>
                    <td>Number</td>
                    <td>Push data timestamp in Unix milliseconds</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* REQUEST EXAMPLE */}
            <h3 className="top-req-text" id="request-example">
              Request Example
            </h3>
            <div className="api-code-box position-relative" style={{ marginBottom: "40px" }}>
              <button className="copy-btn" onClick={handleCopyReq}>
                {copiedReq ? <FiCheck /> : <FiCopy />}
              </button>
              <pre>{reqExample}</pre>
            </div>

            {/* RESPONSE EXAMPLE */}
            <h3 className="top-req-text" id="response-example">
              Response Example
            </h3>
            <div className="api-code-box position-relative" style={{ marginBottom: "40px" }}>
              <button className="copy-btn" onClick={handleCopyRes}>
                {copiedRes ? <FiCheck /> : <FiCopy />}
              </button>
              <pre>{resExample}</pre>
            </div>

            {/* PUSH DATA EXAMPLE */}
            <h3 className="top-req-text" id="push-data">
              Push Data
            </h3>
            <div className="api-code-box position-relative" style={{ marginBottom: "40px" }}>
              <button className="copy-btn" onClick={handleCopyPush}>
                {copiedPush ? <FiCheck /> : <FiCopy />}
              </button>
              <pre>{pushExample}</pre>
            </div>
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="col-lg-3 col-md-4 d-none d-md-block">
            <div className="api-sidebar">
              <ul>
                <li
                  className={activeSection === "request-params" ? "active" : ""}
                  onClick={() => scrollToSection("request-params")}
                >
                  Request Parameters
                </li>
                <li
                  className={activeSection === "response-params" ? "active" : ""}
                  onClick={() => scrollToSection("response-params")}
                >
                  Response Parameters
                </li>
                <li
                  className={activeSection === "push-params" ? "active" : ""}
                  onClick={() => scrollToSection("push-params")}
                >
                  Push Parameters
                </li>
                <li
                  className={activeSection === "request-example" ? "active" : ""}
                  onClick={() => scrollToSection("request-example")}
                >
                  Request Example
                </li>
                <li
                  className={activeSection === "response-example" ? "active" : ""}
                  onClick={() => scrollToSection("response-example")}
                >
                  Response Example
                </li>
                <li
                  className={activeSection === "push-data" ? "active" : ""}
                  onClick={() => scrollToSection("push-data")}
                >
                  Push Data
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetSpotMarketChannel;
