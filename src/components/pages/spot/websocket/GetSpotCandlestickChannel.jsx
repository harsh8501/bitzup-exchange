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
  "action": "subscribe",
  "type": "klines",
  "symbol": "BTCUSDT",
  "interval": "5m"
}`;

  const resExample = `{
  "event": "subscribe",
  "type": "klines",
  "symbol": "BTCUSDT",
  "status": "success"
}`;

  const pushExample = `{
  "type": "kline",
  "symbol": "BTCUSDT",
  "interval": "5m",
  "openTime": 1785305100000,
  "open": "64063.75",
  "high": "64089.96",
  "low": "64059.52",
  "close": "64079.99",
  "volume": "5.449008",
  "quoteVolume": "349160.42215021",
  "closed": false
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
                    <td>Channel type: <span className="pill">klines</span></td>
                  </tr>
                  <tr>
                    <td>symbol</td>
                    <td>String</td>
                    <td>Yes</td>
                    <td>Trading pair symbol e.g., <span className="pill">BTCUSDT</span></td>
                  </tr>
                  <tr>
                    <td>interval</td>
                    <td>String</td>
                    <td>Yes</td>
                    <td>Time interval e.g., <span className="pill">1m</span>, <span className="pill">5m</span>, <span className="pill">15m</span>, <span className="pill">30m</span>, <span className="pill">1h</span>, <span className="pill">4h</span>, <span className="pill">1d</span></td>
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
                    <td>type</td>
                    <td>String</td>
                    <td>Channel type: <span className="pill">klines</span></td>
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
                    <td>Push channel name (<span className="pill">kline</span>)</td>
                  </tr>
                  <tr>
                    <td>symbol</td>
                    <td>String</td>
                    <td>Trading pair symbol e.g., <span className="pill">BTCUSDT</span></td>
                  </tr>
                  <tr>
                    <td>interval</td>
                    <td>String</td>
                    <td>Time interval e.g., <span className="pill">5m</span></td>
                  </tr>
                  <tr>
                    <td>openTime</td>
                    <td>Number</td>
                    <td>Candle start time in Unix timestamp milliseconds</td>
                  </tr>
                  <tr>
                    <td>open</td>
                    <td>String</td>
                    <td>Opening price</td>
                  </tr>
                  <tr>
                    <td>high</td>
                    <td>String</td>
                    <td>Highest price</td>
                  </tr>
                  <tr>
                    <td>low</td>
                    <td>String</td>
                    <td>Lowest price</td>
                  </tr>
                  <tr>
                    <td>close</td>
                    <td>String</td>
                    <td>Closing price</td>
                  </tr>
                  <tr>
                    <td>volume</td>
                    <td>String</td>
                    <td>Base asset trading volume</td>
                  </tr>
                  <tr>
                    <td>quoteVolume</td>
                    <td>String</td>
                    <td>Quote asset trading volume</td>
                  </tr>
                  <tr>
                    <td>closed</td>
                    <td>Boolean</td>
                    <td>Whether the candlestick is closed/finalized (<span className="pill">true</span> / <span className="pill">false</span>)</td>
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
