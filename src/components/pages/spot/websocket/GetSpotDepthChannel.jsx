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
  "action": "subscribe",
  "type": "orderbook",
  "symbol": "BTCUSDT",
  "depthSize": 5
}`;

  const resExample = `{
  "event": "subscribe",
  "type": "orderbook",
  "symbol": "BTCUSDT",
  "status": "success"
}`;

  const pushExample = `{
    "type": "orderbook",
    "symbol": "BTCUSDT",
    "u": 1785305742201,
    "bids": [
        [
            64097.83,
            0.151743
        ],
        [
            64097.36,
            0.00156
        ],
        [
            64097,
            0.000036
        ],
        [
            64096.49,
            0.011891
        ],
        [
            64096.48,
            0.031236
        ]
    ],
    "asks": [
        [
            64097.84,
            1.836904
        ],
        [
            64098.02,
            0.015793
        ],
        [
            64098.35,
            0.001284
        ],
        [
            64100.27,
            0.2
        ],
        [
            64100.28,
            0.004871
        ]
    ],
    "ts": 1785305742201
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

            {/* WEBSOCKET ENDPOINT */}
            <div className="mb-4">
              <h4 style={{ fontSize: "16px", fontWeight: "600", color: "#fff", marginBottom: "8px" }}>WebSocket Endpoint</h4>
              <div className="http-path">
                <span className="method post">WSS</span>
                <span className="path">wss://socket.bitzup.com/spot/public/ws</span>
              </div>
            </div>

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
                    <td>action</td>
                    <td>String</td>
                    <td>Yes</td>
                    <td>Operation action: <span className="pill">subscribe</span> / <span className="pill">unsubscribe</span></td>
                  </tr>
                  <tr>
                    <td>type</td>
                    <td>String</td>
                    <td>Yes</td>
                    <td>Channel type: <span className="pill">orderbook</span></td>
                  </tr>
                  <tr>
                    <td>symbol</td>
                    <td>String</td>
                    <td>Yes</td>
                    <td>Trading pair symbol e.g., <span className="pill">BTCUSDT</span></td>
                  </tr>
                  <tr>
                    <td>depthSize</td>
                    <td>Number</td>
                    <td>No</td>
                    <td>Depth level size e.g. <span className="pill">5</span>, <span className="pill">15</span>, <span className="pill">50</span></td>
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
                    <td>Event type (<span className="pill">subscribe</span> / <span className="pill">unsubscribe</span>)</td>
                  </tr>
                  <tr>
                    <td>type</td>
                    <td>String</td>
                    <td>Channel type: <span className="pill">orderbook</span></td>
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
                    <td>Push channel name (<span className="pill">orderbook</span>)</td>
                  </tr>
                  <tr>
                    <td>symbol</td>
                    <td>String</td>
                    <td>Trading pair symbol e.g., <span className="pill">BTCUSDT</span></td>
                  </tr>
                  <tr>
                    <td>u</td>
                    <td>Number</td>
                    <td>OrderBook sequence / update ID</td>
                  </tr>
                  <tr>
                    <td>bids</td>
                    <td>Array</td>
                    <td>Buyer depth array <span className="pill">[price, quantity]</span></td>
                  </tr>
                  <tr>
                    <td>asks</td>
                    <td>Array</td>
                    <td>Seller depth array <span className="pill">[price, quantity]</span></td>
                  </tr>
                  <tr>
                    <td>ts</td>
                    <td>Number</td>
                    <td>Matching engine timestamp in Unix milliseconds</td>
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
