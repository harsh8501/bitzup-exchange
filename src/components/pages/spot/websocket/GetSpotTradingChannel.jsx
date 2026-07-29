import { useState, useEffect, useRef } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FiCopy, FiCheck } from "react-icons/fi";

export const GetSpotTradingChannel = () => {
  const contentRef = useRef(null);

  const [copiedReq, setCopiedReq] = useState(false);
  const [copiedRes, setCopiedRes] = useState(false);
  const [copiedPush, setCopiedPush] = useState(false);

  const [activeSection, setActiveSection] = useState("request-params");

  const HEADER_OFFSET = 120;

  const reqExample = `{
  "action": "subscribe",
  "type": "trades",
  "symbol": "BTCUSDT"
}`;

  const resExample = `{
  "event": "subscribe",
  "type": "trades",
  "symbol": "BTCUSDT",
  "status": "success"
}`;

  const pushExample = `{
    "type": "trade",
    "symbol": "BTCUSDT",
    "tradeId": "1466244470502309894",
    "price": "64103.59",
    "qty": "0.14215",
    "side": "buy",
    "timestamp": 1785305843949
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
              <span className="pill">Public Recent Channel</span>
            </div>

            {/* Title */}
            <h1 className="api-title">Public Recent Channel</h1>
            <p className="api-desc">
              Push once if any trade is matched (taker orders) via WebSocket.<br/>
              After first subscription, it will push the recent snapshot data and then push the update data in real-time.
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
                    <td>Channel type: <span className="pill">trades</span></td>
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
                    <td>Event type (<span className="pill">subscribe</span> / <span className="pill">unsubscribe</span>)</td>
                  </tr>
                  <tr>
                    <td>type</td>
                    <td>String</td>
                    <td>Channel type: <span className="pill">trades</span></td>
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
                    <td>Push channel name (<span className="pill">trade</span>)</td>
                  </tr>
                  <tr>
                    <td>symbol</td>
                    <td>String</td>
                    <td>Trading pair symbol e.g., <span className="pill">BTCUSDT</span></td>
                  </tr>
                  <tr>
                    <td>tradeId</td>
                    <td>String</td>
                    <td>Unique transaction / trade ID</td>
                  </tr>
                  <tr>
                    <td>price</td>
                    <td>String</td>
                    <td>Executed trade price</td>
                  </tr>
                  <tr>
                    <td>qty</td>
                    <td>String</td>
                    <td>Executed trade quantity</td>
                  </tr>
                  <tr>
                    <td>side</td>
                    <td>String</td>
                    <td>Transaction direction (<span className="pill">buy</span> / <span className="pill">sell</span>)</td>
                  </tr>
                  <tr>
                    <td>timestamp</td>
                    <td>Number</td>
                    <td>Transaction timestamp in Unix milliseconds</td>
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

export default GetSpotTradingChannel;
