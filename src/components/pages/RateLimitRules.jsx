import { useState, useEffect, useRef } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FiCopy, FiCheck } from "react-icons/fi";

export const RateLimitRules = () => {

  const contentRef = useRef(null);
  const [copiedRes, setCopiedRes] = useState(false);

  const [activeSection, setActiveSection] = useState("http");

  const HEADER_OFFSET = 120; // adjust to your layout

  const handleCopyRes = async () => {
    navigator.clipboard.writeText(responseCode);
    setCopiedRes(true);
    setTimeout(() => setCopiedRes(false), 1500);
  };

  const sections = [
    "http",
    "websocket-limit",
    "api-rate-limit",
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
        rootMargin: "-30% 0px -60% 0px", // 🔥 top-biased
        threshold: 0,
      },
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const responseCode = `{
        "status": "1",
        "message": "SUCCESS",
        "data": {
          "symbol": "BTCUSDT",
          "category": "linear",
          "list": [
            [
              "1670608800000",
              "17154",
              "17154",
              "17111",
              "17136.5",
              "2028.137",
              "34736136.8065"
            ],
            [
              "1670605200000",
              "17143.5",
              "17158",
              "17137.5",
              "17154",
              "1095.661",
              "18786245.062"
            ],
            [
              "1670601600000",
              "17168.5",
              "17177.5",
              "17135.5",
              "17143.5",
              "2038.195",
              "34970006.194"
            ]
          ]
        }
      }`;

  return (
    <>
      <div className="container-fluid p-0">
        <div className="api-layout">
          <div className="row">
            {/* LEFT CONTENT */}
            <div className="col-lg-9 col-md-8 api-content" ref={contentRef}>
              <div className="breadcrumb mb-4">
                <span className="kline-market">Market</span>
                <span className="mx-2">
                  <IoIosArrowForward className="kline-arrow" />
                </span>
                <span className="pill">Rate Limit Rules</span>
              </div>

              {/* Title */}
              <h1 className="api-title">Rate Limit Rules</h1>

              <div className="api-cover">IP Limit</div>

              {/* HTTP REQUEST */}
              <h3 className="top-req-text" id="http">
                HTTP IP Limit
              </h3>
              <p>
                You are allowed to send 500 requests within a 5-second window per
                IP by default. This limit applies to all traffic directed to{" "}

                <span className="pill"> api.bitzup.com</span>.  If
                you encounter the error "429, Too many requests", it indicates
                that your IP has exceeded the allowed request frequency. In this
                case, you should terminate all HTTP sessions and wait for at least
                10 minutes. The ban will be lifted automatically.
              </p>
              <p>
                We do not recommend running your application at the very edge of
                these limits in case abnormal network activity results in an
                unexpected violation.
              </p>

              <h3 className="top-req-text" id="websocket-limit">
                Websocket IP limit
              </h3>
              <ul>
                <li>
                  Do not establish more than 400 connections within a 5-minute
                  window. This limit applies to all connections directed to{" "}
                  <span className="pill"> socket.bitzup.com</span>
                </li>
                <li>Do not frequently connect and disconnect the connection</li>
                <li>
                  Do not establish more than 1,000 connections per IP for market
                  data.
                </li>
              </ul>

              <h3 className="top-req-text" id="api-rate-limit">
                API Rate Limit
              </h3>
              <div className="api-info-box">
                <div className="api-info-header">
                  <div class="caution-icon">⚠</div>
                  <span className="api-info-title">caution</span>
                </div>
                <p>If you receive "Too many requests" in the JSON response, you have hit the API rate limit.</p>
              </div>

              <h4 style={{ marginTop: "24px", marginBottom: "12px" }}>Public API Endpoints — 10 req/s</h4>
              <div className="api-table-box">
                <table className="table table-striped api-table mb-0">
                  <thead><tr><th>Endpoint</th><th>Method</th><th>Rate Limit</th></tr></thead>
                  <tbody>
                    <tr><td>/v1/get-kline</td><td>GET</td><td>10 req/s</td></tr>
                    <tr><td>/v1/get-order-book</td><td>GET</td><td>10 req/s</td></tr>
                    <tr><td>/v1/get-ticker</td><td>GET</td><td>10 req/s</td></tr>
                    <tr><td>/v1/get-trades</td><td>GET</td><td>10 req/s</td></tr>
                    <tr><td>/v1/get-curr-data</td><td>GET</td><td>10 req/s</td></tr>
                    <tr><td>/v1/get-futures-currencies</td><td>GET</td><td>10 req/s</td></tr>
                    <tr><td>/v1/market-settings</td><td>GET</td><td>10 req/s</td></tr>
                    <tr><td>/v1/get-fee-rate</td><td>GET</td><td>10 req/s</td></tr>
                  </tbody>
                </table>
              </div>

              <h4 style={{ marginTop: "24px", marginBottom: "12px" }}>Private API Endpoints — 15 req/s</h4>
              <div className="api-table-box">
                <table className="table table-striped api-table mb-0">
                  <thead><tr><th>Endpoint</th><th>Method</th><th>Rate Limit</th></tr></thead>
                  <tbody>
                    <tr><td>/v1/get-positions</td><td>POST</td><td>15 req/s</td></tr>
                    <tr><td>/v1/get-open-orders</td><td>POST</td><td>15 req/s</td></tr>
                    <tr><td>/v1/get-order-history</td><td>POST</td><td>15 req/s</td></tr>
                    <tr><td>/v1/get-trade-history</td><td>POST</td><td>15 req/s</td></tr>
                    <tr><td>/v1/get-closed-pnl</td><td>POST</td><td>15 req/s</td></tr>
                    <tr><td>/v1/get-balance</td><td>POST</td><td>15 req/s</td></tr>
                    <tr><td>/v1/get-leverage</td><td>POST</td><td>15 req/s</td></tr>
                    <tr><td>/v1/get-margin-mode</td><td>POST</td><td>15 req/s</td></tr>
                    <tr><td>/v1/set-leverage</td><td>POST</td><td>15 req/s</td></tr>
                    <tr><td>/v1/switch-margin-mode</td><td>POST</td><td>15 req/s</td></tr>
                    <tr><td>/v1/add-isolated-margin</td><td>POST</td><td>15 req/s</td></tr>
                    <tr><td>/v1/auto-isolated-margin</td><td>POST</td><td>15 req/s</td></tr>
                    <tr><td>/v1/set-trading-stop</td><td>POST</td><td>15 req/s</td></tr>
                    <tr><td>/v1/place-order</td><td>POST</td><td>15 req/s</td></tr>
                    <tr><td>/v1/cancel-order</td><td>POST</td><td>15 req/s</td></tr>
                    <tr><td>/v1/cancel-all-order</td><td>POST</td><td>15 req/s</td></tr>
                    <tr><td>/v1/modify-order</td><td>POST</td><td>15 req/s</td></tr>
                    <tr><td>/v1/close-position</td><td>POST</td><td>15 req/s</td></tr>
                    <tr><td>/v1/close-all-position</td><td>GET</td><td>15 req/s</td></tr>
                    <tr><td>/v1/estimate-liquidation-price</td><td>POST</td><td>15 req/s</td></tr>
                    <tr><td>/v1/deposit-to-sub-acc</td><td>POST</td><td>15 req/s</td></tr>
                    <tr><td>/v1/withdraw-from-sub-acc</td><td>POST</td><td>15 req/s</td></tr>
                  </tbody>
                </table>
              </div>


            </div>

            {/* RIGHT SIDEBAR */}
            <div className="col-lg-3 col-md-4 d-none d-md-block">
              <div className="api-sidebar">
                <ul>
                  <li
                    className={
                      activeSection === "http" ? "active" : ""
                    }
                    onClick={() => scrollToSection("http")}
                  >
                    HTTP Ip Limit
                  </li>
                  <li
                    className={
                      activeSection === "websocket-limit" ? "active" : ""
                    }
                    onClick={() => scrollToSection("websocket-limit")}
                  >
                    Websocket IP limit
                  </li>
                  <li
                    className={
                      activeSection === "api-rate-limit" ? "active" : ""
                    }
                    onClick={() => scrollToSection("api-rate-limit")}
                  >
                    API Rate Limit
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
