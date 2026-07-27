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
  "op": "subscribe",
  "args": [
    {
      "instType": "SPOT",
      "channel": "trade",
      "instId": "BTCUSDT"
    }
  ]
}`;

  const resExample = `{
  "event": "subscribe",
  "arg": {
    "instType": "SPOT",
    "channel": "trade",
    "instId": "BTCUSDT"
  }
}`;

  const pushExample = `{
  "action": "snapshot",
  "arg": {
    "instType": "SPOT",
    "channel": "trade",
    "instId": "BTCUSDT"
  },
  "data": [
    {
      "ts": "1695709835822",
      "price": "26293.4",
      "size": "0.0013",
      "side": "buy",
      "tradeId": "1000000000"
    }
  ],
  "ts": 1695711090682
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
                    <td>List of channels to subscribe to</td>
                  </tr>
                  <tr>
                    <td>&gt; instType</td>
                    <td>String</td>
                    <td>Yes</td>
                    <td>Product Line Type, <span className="pill">SPOT</span></td>
                  </tr>
                  <tr>
                    <td>&gt; channel</td>
                    <td>String</td>
                    <td>Yes</td>
                    <td>Channel name, <span className="pill">trade</span></td>
                  </tr>
                  <tr>
                    <td>&gt; instId</td>
                    <td>String</td>
                    <td>Yes</td>
                    <td>Product id For example: <span className="pill">BTCUSDT</span></td>
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
                    <td>Event, <span className="pill">subscribe</span> / <span className="pill">unsubscribe</span> / <span className="pill">error</span></td>
                  </tr>
                  <tr>
                    <td>arg</td>
                    <td>Object</td>
                    <td>The channel subscribe to</td>
                  </tr>
                  <tr>
                    <td>&gt; instType</td>
                    <td>String</td>
                    <td>product type, <span className="pill">SPOT</span></td>
                  </tr>
                  <tr>
                    <td>&gt; channel</td>
                    <td>String</td>
                    <td>Channel name, <span className="pill">trade</span></td>
                  </tr>
                  <tr>
                    <td>&gt; instId</td>
                    <td>String</td>
                    <td>Product id. For example: BTCUSDT</td>
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
                    <td>Successfully subscribed channel</td>
                  </tr>
                  <tr>
                    <td>&gt; instType</td>
                    <td>String</td>
                    <td>Product Type, <span className="pill">SPOT</span></td>
                  </tr>
                  <tr>
                    <td>&gt; channel</td>
                    <td>String</td>
                    <td>Channel name, <span className="pill">trade</span></td>
                  </tr>
                  <tr>
                    <td>&gt; instId</td>
                    <td>String</td>
                    <td>Product id For example: BTCUSDT</td>
                  </tr>
                  <tr>
                    <td>action</td>
                    <td>String</td>
                    <td>Push data action, <span className="pill">snapshot</span> or <span className="pill">update</span></td>
                  </tr>
                  <tr>
                    <td>data</td>
                    <td>List&lt;Object&gt;</td>
                    <td>Subscribed data list</td>
                  </tr>
                  <tr>
                    <td>&gt; tradeId</td>
                    <td>String</td>
                    <td>Transaction ID</td>
                  </tr>
                  <tr>
                    <td>&gt; ts</td>
                    <td>String</td>
                    <td>Transaction time, millisecond format of Unix timestamp, such as 1597026383085</td>
                  </tr>
                  <tr>
                    <td>&gt; price</td>
                    <td>String</td>
                    <td>Transaction price</td>
                  </tr>
                  <tr>
                    <td>&gt; size</td>
                    <td>String</td>
                    <td>Transaction quantity</td>
                  </tr>
                  <tr>
                    <td>&gt; side</td>
                    <td>String</td>
                    <td>Transaction direction (<span className="pill">buy</span> / <span className="pill">sell</span>)</td>
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
