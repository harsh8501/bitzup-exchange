import { useState, useEffect, useRef } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FiCopy, FiCheck } from "react-icons/fi";

export const GetSpotCandlestickChannel = () => {
  const contentRef = useRef(null);

  const [copiedReq, setCopiedReq] = useState(false);
  const [copiedRes, setCopiedRes] = useState(false);
  const [copiedPush, setCopiedPush] = useState(false);

  const [activeSection, setActiveSection] = useState("request-params");

  const HEADER_OFFSET = 120;

  const reqExample = `{
  "op": "subscribe",
  "args": [
    {
      "instType": "SPOT",
      "channel": "candle1m",
      "instId": "ETHUSDT"
    }
  ]
}`;

  const resExample = `{
  "event": "subscribe",
  "arg": {
    "instType": "SPOT",
    "channel": "candle1m",
    "instId": "ETHUSDT"
  }
}`;

  const pushExample = `{
  "action": "snapshot",
  "arg": {
    "instType": "SPOT",
    "channel": "candle1m",
    "instId": "ETHUSDT"
  },
  "data": [
    [
      "1695672780000",
      "2200.1",
      "2200.1",
      "2200.1",
      "2200.1",
      "0",
      "0",
      "0"
    ]
  ],
  "ts": 1695702747821
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
              <span className="pill">Candlestick Channel</span>
            </div>

            {/* Title */}
            <h1 className="api-title">Candlestick Channel</h1>
            <p className="api-desc">
              Get the candlestick data of the product via WebSocket.<br/>
              After first subscription, it will push the recent snapshot data and then push the update data.<br/>
              When there are transactions in the K-line channel, data is pushed once per second.<br/>
              When there are no transactions, data is pushed once at the specified time granularity.
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
                    <td>Operation, <span className="pill">subscribe</span> / <span className="pill">unsubscribe</span></td>
                  </tr>
                  <tr>
                    <td>args</td>
                    <td>List&lt;Object&gt;</td>
                    <td>Yes</td>
                    <td>List of channels to request subscription</td>
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
                    <td>
                      Channel name:<br/>
                      <span className="pill">candle1m</span> 1 minute, <span className="pill">candle5m</span> 5 minutes, <span className="pill">candle15m</span> 15 minutes, <span className="pill">candle30m</span> 30 minutes, <span className="pill">candle1H</span> 1 hour, <span className="pill">candle4H</span> 4 hours, <span className="pill">candle6H</span> 6 hours, <span className="pill">candle12H</span> 12 hours, <span className="pill">candle1D</span> 1 day, <span className="pill">candle3D</span> 3 days, <span className="pill">candle1W</span> 1 week, <span className="pill">candle1M</span> 1 month<br/>
                      UTC granularity: <span className="pill">candle6Hutc</span>, <span className="pill">candle12Hutc</span>, <span className="pill">candle1Dutc</span>, <span className="pill">candle3Dutc</span>, <span className="pill">candle1Wutc</span>, <span className="pill">candle1Mutc</span>
                    </td>
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
                    <td>Event type (e.g., <span className="pill">subscribe</span> / <span className="pill">unsubscribe</span> / <span className="pill">error</span>)</td>
                  </tr>
                  <tr>
                    <td>arg</td>
                    <td>Object</td>
                    <td>Subscribed channels</td>
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
                    <td>action</td>
                    <td>String</td>
                    <td>Push data action, <span className="pill">snapshot</span> or <span className="pill">update</span></td>
                  </tr>
                  <tr>
                    <td>arg</td>
                    <td>Object</td>
                    <td>Subscribed channels</td>
                  </tr>
                  <tr>
                    <td>&gt; channel</td>
                    <td>String</td>
                    <td>Channel name</td>
                  </tr>
                  <tr>
                    <td>&gt; instType</td>
                    <td>String</td>
                    <td>Product type</td>
                  </tr>
                  <tr>
                    <td>&gt; instId</td>
                    <td>String</td>
                    <td>Product ID, e.g. ETHUSDT</td>
                  </tr>
                  <tr>
                    <td>data</td>
                    <td>List&lt;String&gt;</td>
                    <td>Subscription candlestick data array</td>
                  </tr>
                  <tr>
                    <td>&gt; index[0]</td>
                    <td>String</td>
                    <td>Start time, milliseconds format of Unix timestamp, e.g. 1597026383085</td>
                  </tr>
                  <tr>
                    <td>&gt; index[1]</td>
                    <td>String</td>
                    <td>Opening price</td>
                  </tr>
                  <tr>
                    <td>&gt; index[2]</td>
                    <td>String</td>
                    <td>Highest price</td>
                  </tr>
                  <tr>
                    <td>&gt; index[3]</td>
                    <td>String</td>
                    <td>Lowest price</td>
                  </tr>
                  <tr>
                    <td>&gt; index[4]</td>
                    <td>String</td>
                    <td>Closing price</td>
                  </tr>
                  <tr>
                    <td>&gt; index[5]</td>
                    <td>String</td>
                    <td>Trading volume of the coin</td>
                  </tr>
                  <tr>
                    <td>&gt; index[6]</td>
                    <td>String</td>
                    <td>Trading volume of quote currency</td>
                  </tr>
                  <tr>
                    <td>&gt; index[7]</td>
                    <td>String</td>
                    <td>Trading volume (USDT)</td>
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

export default GetSpotCandlestickChannel;
