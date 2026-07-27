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
  "op": "subscribe",
  "args": [
    {
      "instType": "SPOT",
      "channel": "ticker",
      "instId": "ETHUSDT"
    }
  ]
}`;

  const resExample = `{
  "event": "subscribe",
  "arg": {
    "instType": "SPOT",
    "channel": "ticker",
    "instId": "ETHUSDT"
  }
}`;

  const pushExample = `{
  "action": "snapshot",
  "arg": {
    "instType": "SPOT",
    "channel": "ticker",
    "instId": "ETHUSDT"
  },
  "data": [
    {
      "instId": "ETHUSDT",
      "lastPr": "2200.10",
      "open24h": "0.00",
      "high24h": "0.00",
      "low24h": "0.00",
      "change24h": "0.00",
      "bidPr": "1792",
      "askPr": "2200.1",
      "bidSz": "0.0084",
      "askSz": "19740.8811",
      "baseVolume": "0.0000",
      "quoteVolume": "0.0000",
      "openUtc": "0.00",
      "changeUtc24h": "0",
      "ts": "1695702438018"
    }
  ],
  "ts": 1695702438029
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
                    <td>op</td>
                    <td>String</td>
                    <td>Yes</td>
                    <td>Operation: <span className="pill">subscribe</span> / <span className="pill">unsubscribe</span></td>
                  </tr>
                  <tr>
                    <td>args</td>
                    <td>Array</td>
                    <td>Yes</td>
                    <td>List&lt;Object&gt; - List of channels to request subscription</td>
                  </tr>
                  <tr>
                    <td>&gt; instType</td>
                    <td>String</td>
                    <td>Yes</td>
                    <td>Product line type (e.g. <span className="pill">SPOT</span>)</td>
                  </tr>
                  <tr>
                    <td>&gt; channel</td>
                    <td>String</td>
                    <td>Yes</td>
                    <td>Channel name (e.g. <span className="pill">ticker</span>)</td>
                  </tr>
                  <tr>
                    <td>&gt; instId</td>
                    <td>String</td>
                    <td>Yes</td>
                    <td>Product ID, e.g. <span className="pill">ETHUSDT</span></td>
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
                    <td>Event type (e.g., <span className="pill">subscribe</span>)</td>
                  </tr>
                  <tr>
                    <td>arg</td>
                    <td>Object</td>
                    <td>Subscribed channels info</td>
                  </tr>
                  <tr>
                    <td>&gt; instType</td>
                    <td>String</td>
                    <td>Product type</td>
                  </tr>
                  <tr>
                    <td>&gt; channel</td>
                    <td>String</td>
                    <td>Channel name</td>
                  </tr>
                  <tr>
                    <td>&gt; instId</td>
                    <td>String</td>
                    <td>Product ID, e.g. ETHUSDT</td>
                  </tr>
                  <tr>
                    <td>code</td>
                    <td>String</td>
                    <td>Error code, returned only on error</td>
                  </tr>
                  <tr>
                    <td>msg</td>
                    <td>String</td>
                    <td>Error message</td>
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
                    <td>arg</td>
                    <td>Object</td>
                    <td>Channels with successful subscription</td>
                  </tr>
                  <tr>
                    <td>&gt; instType</td>
                    <td>String</td>
                    <td>Product type</td>
                  </tr>
                  <tr>
                    <td>&gt; channel</td>
                    <td>String</td>
                    <td>Channel name</td>
                  </tr>
                  <tr>
                    <td>&gt; instId</td>
                    <td>String</td>
                    <td>Product ID, e.g. ETHUSDT</td>
                  </tr>
                  <tr>
                    <td>action</td>
                    <td>String</td>
                    <td>Push data action: <span className="pill">snapshot</span></td>
                  </tr>
                  <tr>
                    <td>data</td>
                    <td>Array</td>
                    <td>List&lt;Object&gt; - Subscription data</td>
                  </tr>
                  <tr>
                    <td>&gt; instId</td>
                    <td>String</td>
                    <td>Product ID, e.g. ETHUSDT</td>
                  </tr>
                  <tr>
                    <td>&gt; lastPr</td>
                    <td>String</td>
                    <td>Latest price</td>
                  </tr>
                  <tr>
                    <td>&gt; open24h</td>
                    <td>String</td>
                    <td>Entry price of the last 24 hours</td>
                  </tr>
                  <tr>
                    <td>&gt; high24h</td>
                    <td>String</td>
                    <td>24h high</td>
                  </tr>
                  <tr>
                    <td>&gt; low24h</td>
                    <td>String</td>
                    <td>24h low</td>
                  </tr>
                  <tr>
                    <td>&gt; change24h</td>
                    <td>String</td>
                    <td>24-hour change, 0.01 means 1%.</td>
                  </tr>
                  <tr>
                    <td>&gt; bidPr</td>
                    <td>String</td>
                    <td>Bid price</td>
                  </tr>
                  <tr>
                    <td>&gt; askPr</td>
                    <td>String</td>
                    <td>Ask price</td>
                  </tr>
                  <tr>
                    <td>&gt; bidSz</td>
                    <td>String</td>
                    <td>Buying amount</td>
                  </tr>
                  <tr>
                    <td>&gt; askSz</td>
                    <td>String</td>
                    <td>Selling amount</td>
                  </tr>
                  <tr>
                    <td>&gt; baseVolume</td>
                    <td>String</td>
                    <td>24h trading volume in left coin</td>
                  </tr>
                  <tr>
                    <td>&gt; quoteVolume</td>
                    <td>String</td>
                    <td>24h trading volume in right coin</td>
                  </tr>
                  <tr>
                    <td>&gt; openUtc</td>
                    <td>String</td>
                    <td>UTC±00:00 Entry price</td>
                  </tr>
                  <tr>
                    <td>&gt; changeUtc24h</td>
                    <td>String</td>
                    <td>Change at UTC+0, 0.01 means 1%.</td>
                  </tr>
                  <tr>
                    <td>&gt; ts</td>
                    <td>String</td>
                    <td>Milliseconds format of data generation time Unix timestamp, e.g. 1597026383085</td>
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
