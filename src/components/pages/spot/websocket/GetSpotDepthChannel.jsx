import { useState, useEffect, useRef } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FiCopy, FiCheck } from "react-icons/fi";

export const GetSpotDepthChannel = () => {
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
      "channel": "books5",
      "instId": "BTCUSDT"
    }
  ]
}`;

  const resExample = `{
  "event": "subscribe",
  "arg": {
    "instType": "SPOT",
    "channel": "books5",
    "instId": "BTCUSDT"
  }
}`;

  const pushExample = `{
  "action": "snapshot",
  "arg": {
    "instType": "SPOT",
    "channel": "books5",
    "instId": "BTCUSDT"
  },
  "data": [
    {
      "asks": [
        [
          "26274.9",
          "0.0009"
        ],
        [
          "26275.0",
          "0.0500"
        ]
      ],
      "bids": [
        [
          "26274.8",
          "0.0009"
        ],
        [
          "26274.7",
          "0.0027"
        ]
      ],
      "seq": 123,
      "ts": "1695710946294"
    }
  ],
  "ts": 1695710946294
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
              <span className="pill">Depth Channel</span>
            </div>

            {/* Title */}
            <h1 className="api-title">Depth Channel</h1>
            <p className="api-desc">
              This is the channel to get the orderbook depth data via WebSocket.<br/>
              Default data push frequency for <span className="pill">books</span>, <span className="pill">books5</span>, <span className="pill">books15</span> is <strong>200ms</strong>.<br/>
              Default data push frequency for <span className="pill">books1</span> is <strong>10ms</strong>.
            </p>

            <ul style={{ color: "#8b949e", fontSize: "14px", marginBottom: "24px", lineHeight: "1.8" }}>
              <li><span className="pill">books</span> : All levels of depth. First update pushed is full data: <span className="pill">snapshot</span>, and then push the update data: <span className="pill">update</span>.</li>
              <li><span className="pill">books1</span> : 1st level of depth. Push <span className="pill">snapshot</span> each time.</li>
              <li><span className="pill">books5</span> : 5 depth levels. Push <span className="pill">snapshot</span> each time.</li>
              <li><span className="pill">books15</span> : 15 depth levels. Push <span className="pill">snapshot</span> each time.</li>
            </ul>

            <h4 style={{ fontSize: "16px", fontWeight: "600", color: "#fff", marginBottom: "8px" }}>Explanation of seq</h4>
            <p style={{ color: "#8b949e", fontSize: "14px", marginBottom: "32px" }}>
              The <span className="pill">seq</span> of update incremental messages is incrementing except during symbol maintenance.
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
                    <td>Product line type (<span className="pill">SPOT</span>)</td>
                  </tr>
                  <tr>
                    <td>&gt; channel</td>
                    <td>String</td>
                    <td>Yes</td>
                    <td>Channel name: <span className="pill">books</span> / <span className="pill">books1</span> / <span className="pill">books5</span> / <span className="pill">books15</span></td>
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
                    <td>Event type (<span className="pill">subscribe</span> / <span className="pill">unsubscribe</span> / <span className="pill">error</span>)</td>
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
                    <td>Channel name: <span className="pill">books</span> / <span className="pill">books1</span> / <span className="pill">books5</span> / <span className="pill">books15</span></td>
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
                    <td>Channel name: <span className="pill">books</span> / <span className="pill">books1</span> / <span className="pill">books5</span> / <span className="pill">books15</span></td>
                  </tr>
                  <tr>
                    <td>&gt; instId</td>
                    <td>String</td>
                    <td>Product ID, e.g. ETHUSDT</td>
                  </tr>
                  <tr>
                    <td>action</td>
                    <td>String</td>
                    <td>Push data action, <span className="pill">snapshot</span> or <span className="pill">update</span></td>
                  </tr>
                  <tr>
                    <td>data</td>
                    <td>List&lt;Object&gt;</td>
                    <td>Subscription data</td>
                  </tr>
                  <tr>
                    <td>&gt; instId</td>
                    <td>String</td>
                    <td>Product ID, e.g. ETHUSDT</td>
                  </tr>
                  <tr>
                    <td>&gt; asks</td>
                    <td>List&lt;String&gt;</td>
                    <td>Seller depth array [<span className="pill">price</span>, <span className="pill">size</span>]</td>
                  </tr>
                  <tr>
                    <td>&gt; bids</td>
                    <td>List&lt;String&gt;</td>
                    <td>Buyer depth array [<span className="pill">price</span>, <span className="pill">size</span>]</td>
                  </tr>
                  <tr>
                    <td>&gt; ts</td>
                    <td>String</td>
                    <td>Matching engine timestamp(ms), e.g. 1597026383085</td>
                  </tr>
                  <tr>
                    <td>&gt; seq</td>
                    <td>Long</td>
                    <td>Serial number. Increases when order book updates to determine out-of-order packets.</td>
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

export default GetSpotDepthChannel;
