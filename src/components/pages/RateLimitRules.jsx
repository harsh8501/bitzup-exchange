import { useState, useEffect, useRef } from "react";
import { IoIosArrowForward } from "react-icons/io";

export const RateLimitRules = () => {
  const contentRef = useRef(null);
  const [activeSection, setActiveSection] = useState("ip-limit");

  const HEADER_OFFSET = 120;

  const sections = [
    "ip-limit",
    "http-ip-limit",
    "websocket-ip-limit",
    "api-rate-limit",
    "api-rate-limit-table",
    "trade",
    "position",
    "account",
    "asset",
    "user",
    "spot-margin-trade",
    "spread-trading",
    "batch-endpoints",
  ];

  const scrollToSection = (id) => {
    const container = contentRef.current;
    const el = document.getElementById(id);
    if (!container || !el) return;
    const top = el.offsetTop - container.offsetTop - HEADER_OFFSET;
    container.scrollTo({ top, behavior: "smooth" });
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

  const responseHeaderExample = `▶Response Headers
Content-Type: application/json; charset=utf-8
Content-Length: 141
X-Bapi-Limit: 10
X-Bapi-Limit-Status: 9
X-Bapi-Limit-Reset-Timestamp: 1672738134824`;

  return (
    <>
      <div className="container-fluid p-0">
        <div className="api-layout">
          <div className="row">
            {/* LEFT CONTENT */}
            <div className="col-lg-9 col-md-8 api-content" ref={contentRef}>
              <div className="breadcrumb mb-4">
                <span className="pill">Rate Limit Rules</span>
              </div>

              <h1 className="api-title">Rate Limit Rules</h1>

              {/* ── IP Limit ── */}
              <div className="api-cover" id="ip-limit">IP Limit</div>

              {/* HTTP IP limit */}
              <h3 className="top-req-text" id="http-ip-limit">HTTP IP limit</h3>
              <p>
                You are allowed to send 600 requests within a 5-second window per IP by default. This limit applies to all traffic directed to <span className="pill">api.bybit.com</span>, <span className="pill">api.bybick.com</span>, and local site hostnames such as <span className="pill">api.bybit.kz</span>. If you encounter the error "403, access too frequent", it indicates that your IP has exceeded the allowed request frequency. In this case, you should terminate all HTTP sessions and wait for at least 10 minutes. The ban will be lifted automatically.
              </p>
              <p>
                We do not recommend running your application at the very edge of these limits in case abnormal network activity results in an unexpected violation.
              </p>

              {/* Websocket IP limit */}
              <h3 className="top-req-text" id="websocket-ip-limit">Websocket IP limit</h3>
              <ul>
                <li>
                  Do not establish more than 500 connections within a 5-minute window. This limit applies to all connections directed to <span className="pill">stream.bybit.com</span> as well as local site hostnames such as <span className="pill">stream.bybit.kz</span>.
                </li>
                <li>Do not frequently connect and disconnect the connection</li>
                <li>
                  Do not establish more than 1,000 connections per IP for market data. The connection limits are counted separately for Spot, Linear, Inverse, and Options markets
                </li>
              </ul>

              {/* ── API Rate Limit ── */}
              <div className="api-cover" id="api-rate-limit">API Rate Limit</div>
              <p>
                If you receive <span className="pill">"retCode": 10006, "retMsg": "Too many visits!"</span> in the JSON response, you have hit the API rate limit.
              </p>
              <p>
                The API rate limit is based on the rolling time window per second and UID. In other words, it is per second per UID. Every request to the API returns response header shown in the code panel:
              </p>
              <ul>
                <li><span className="pill">X-Bapi-Limit-Status</span> - your remaining requests for current endpoint</li>
                <li><span className="pill">X-Bapi-Limit</span> - your current limit for current endpoint</li>
                <li><span className="pill">X-Bapi-Limit-Reset-Timestamp</span> - the timestamp indicating when your request limit resets if you have exceeded your rate_limit. Otherwise, this is just the current timestamp (it may not exactly match <span className="pill">timeNow</span>).</li>
              </ul>

              <h4 style={{ marginTop: "20px", marginBottom: "12px" }}>Http Response Header Example</h4>
              <div className="code-block-wrapper" style={{ marginBottom: "24px" }}>
                <pre className="code-block">{responseHeaderExample}</pre>
              </div>

              {/* ── API Rate Limit Table ── */}
              <h3 className="top-req-text" id="api-rate-limit-table">API Rate Limit Table</h3>

              {/* Trade */}
              <h4 className="top-req-text" id="trade" style={{ fontSize: "16px" }}>Trade</h4>
              <div className="api-table-box">
                <table className="table table-striped api-table mb-0">
                  <thead>
                    <tr>
                      <th>Method</th>
                      <th>Path</th>
                      <th colSpan={4} style={{ textAlign: "center" }}>UTA2.0 Pro</th>
                      <th>upgradable</th>
                    </tr>
                    <tr>
                      <th></th>
                      <th></th>
                      <th>inverse</th>
                      <th>linear</th>
                      <th>option</th>
                      <th>spot</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td>POST</td><td>/v5/order/create</td><td>10/s</td><td>10/s</td><td>10/s</td><td>20/s</td><td>Y</td></tr>
                    <tr><td></td><td>/v5/order/amend</td><td>10/s</td><td>10/s</td><td>10/s</td><td>10/s</td><td>Y</td></tr>
                    <tr><td></td><td>/v5/order/cancel</td><td>10/s</td><td>10/s</td><td>10/s</td><td>20/s</td><td>Y</td></tr>
                    <tr><td></td><td>/v5/order/cancel-all</td><td>10/s</td><td>10/s</td><td>1/s</td><td>20/s</td><td>Y</td></tr>
                    <tr><td></td><td>/v5/order/create-batch</td><td>10/s</td><td>10/s</td><td>10/s</td><td>20/s</td><td>Y</td></tr>
                    <tr><td></td><td>/v5/order/amend-batch</td><td>10/s</td><td>10/s</td><td>10/s</td><td>20/s</td><td>Y</td></tr>
                    <tr><td></td><td>/v5/order/cancel-batch</td><td>10/s</td><td>10/s</td><td>10/s</td><td>20/s</td><td>Y</td></tr>
                    <tr><td></td><td>/v5/order/disconnected-cancel-all</td><td colSpan={4}>5/s</td><td>N</td></tr>
                    <tr><td></td><td>/v5/order/realtime</td><td colSpan={4}>50/s</td><td>N</td></tr>
                    <tr><td></td><td>/v5/order/history</td><td colSpan={4}>50/s</td><td>N</td></tr>
                    <tr><td>GET</td><td>/v5/execution/list</td><td colSpan={4}>50/s</td><td>N</td></tr>
                    <tr><td></td><td>/v5/order/spot-borrow-check</td><td>-</td><td colSpan={2}></td><td>50/s</td><td>N</td></tr>
                  </tbody>
                </table>
              </div>

              {/* Position */}
              <h4 className="top-req-text" id="position" style={{ fontSize: "16px", marginTop: "24px" }}>Position</h4>
              <div className="api-table-box">
                <table className="table table-striped api-table mb-0">
                  <thead>
                    <tr>
                      <th>Method</th>
                      <th>Path</th>
                      <th colSpan={4} style={{ textAlign: "center" }}>UTA2.0 Pro</th>
                      <th>upgradable</th>
                    </tr>
                    <tr>
                      <th></th>
                      <th></th>
                      <th>inverse</th>
                      <th>linear</th>
                      <th>option</th>
                      <th>spot</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td>GET</td><td>/v5/position/list</td><td colSpan={4}>50/s</td><td>N</td></tr>
                    <tr><td></td><td>/v5/position/closed-pnl</td><td colSpan={2}>50/s</td><td>-</td><td>-</td><td>N</td></tr>
                    <tr><td>POST</td><td>/v5/position/set-leverage</td><td colSpan={2}>10/s</td><td>10/s</td><td>-</td><td>N</td></tr>
                  </tbody>
                </table>
              </div>

              {/* Account */}
              <h4 className="top-req-text" id="account" style={{ fontSize: "16px", marginTop: "24px" }}>Account</h4>
              <div className="api-table-box">
                <table className="table table-striped api-table mb-0">
                  <thead>
                    <tr><th>Method</th><th>Path</th><th></th><th>Limit</th><th>upgradable</th></tr>
                  </thead>
                  <tbody>
                    <tr><td rowSpan={7}>GET</td><td>/v5/account/wallet-balance</td><td>accountType=UNIFIED</td><td>50/s</td><td>N</td></tr>
                    <tr><td>/v5/account/withdrawal</td><td></td><td>50/s</td><td>N</td></tr>
                    <tr><td>/v5/account/borrow-history</td><td></td><td>50/s</td><td>N</td></tr>
                    <tr><td>/v5/account/borrow</td><td></td><td>1/s</td><td>N</td></tr>
                    <tr><td>/v5/account/repay</td><td></td><td>1/s</td><td>N</td></tr>
                    <tr><td>/v5/account/no-convert-repay</td><td></td><td>1/s</td><td>N</td></tr>
                    <tr><td>/v5/account/collateral-info</td><td></td><td>50/s</td><td>N</td></tr>
                    <tr><td>GET</td><td>/v5/asset/coin-greeks</td><td></td><td>50/s</td><td>N</td></tr>
                    <tr><td>GET</td><td>/v5/account/transaction-log</td><td>accountType=UNIFIED</td><td>30/s</td><td>N</td></tr>
                    <tr><td rowSpan={4}>GET</td><td rowSpan={4}>/v5/account/fee-rate</td><td>category=linear</td><td>10/s</td><td>N</td></tr>
                    <tr><td>category=spot</td><td>5/s</td><td>N</td></tr>
                    <tr><td>category=option</td><td>5/s</td><td>N</td></tr>
                    <tr><td>category=inverse</td><td>10/s</td><td>N</td></tr>
                  </tbody>
                </table>
              </div>

              {/* Asset */}
              <h4 className="top-req-text" id="asset" style={{ fontSize: "16px", marginTop: "24px" }}>Asset</h4>
              <div className="api-table-box">
                <table className="table table-striped api-table mb-0">
                  <thead>
                    <tr><th>Method</th><th>Path</th><th>Limit</th><th>upgradable</th></tr>
                  </thead>
                  <tbody>
                    <tr><td rowSpan={6}>GET</td><td>/v5/asset/transfer/query-asset-info</td><td>60 req/min</td><td>N</td></tr>
                    <tr><td>/v5/asset/transfer/query-transfer-coin-list</td><td>60 req/min</td><td>N</td></tr>
                    <tr><td>/v5/asset/transfer/query-inter-transfer-list</td><td>60 req/min</td><td>N</td></tr>
                    <tr><td>/v5/asset/transfer/query-sub-member-list</td><td>60 req/min</td><td>N</td></tr>
                    <tr><td>/v5/asset/transfer/query-universal-transfer-list</td><td>5 req/s</td><td>N</td></tr>
                    <tr><td>/v5/asset/transfer/query-account-coins-balance</td><td>5 req/s</td><td>N</td></tr>
                    <tr><td rowSpan={7}>GET</td><td>/v5/asset/deposit/query-record</td><td>100 req/min</td><td>N</td></tr>
                    <tr><td>/v5/asset/deposit/query-sub-member-record</td><td>300 req/min</td><td>N</td></tr>
                    <tr><td>/v5/asset/deposit/query-address</td><td>300 req/min</td><td>N</td></tr>
                    <tr><td>/v5/asset/deposit/query-sub-member-address</td><td>300 req/min</td><td>N</td></tr>
                    <tr><td>/v5/asset/withdraw/query-record</td><td>300 req/min</td><td>N</td></tr>
                    <tr><td>/v5/asset/coin/query-info</td><td>5 req/s</td><td>N</td></tr>
                    <tr><td>/v5/asset/exchange/order-record</td><td>600 req/min</td><td>N</td></tr>
                    <tr><td rowSpan={5}>POST</td><td>/v5/asset/transfer/inter-transfer</td><td>60 req/min</td><td>N</td></tr>
                    <tr><td>/v5/asset/transfer/save-transfer-sub-member</td><td>20 req/s</td><td>N</td></tr>
                    <tr><td>/v5/asset/transfer/universal-transfer</td><td>5 req/s</td><td>N</td></tr>
                    <tr><td>/v5/asset/withdraw/create</td><td>5 req/s</td><td>N</td></tr>
                    <tr><td>/v5/asset/withdraw/cancel</td><td>60 req/min</td><td>N</td></tr>
                  </tbody>
                </table>
              </div>

              {/* User */}
              <h4 className="top-req-text" id="user" style={{ fontSize: "16px", marginTop: "24px" }}>User</h4>
              <div className="api-table-box">
                <table className="table table-striped api-table mb-0">
                  <thead>
                    <tr><th>Method</th><th>Path</th><th>Limit</th><th>upgradable</th></tr>
                  </thead>
                  <tbody>
                    <tr><td rowSpan={8}>POST</td><td>v5/user/create-sub-member</td><td>1 req/s</td><td>N</td></tr>
                    <tr><td>/v5/user/create-sub-api</td><td>1 req/s</td><td>N</td></tr>
                    <tr><td>/v5/user/frozen-sub-member</td><td>5 req/s</td><td>N</td></tr>
                    <tr><td>/v5/user/update-api</td><td>5 req/s</td><td>N</td></tr>
                    <tr><td>/v5/user/update-sub-api</td><td>5 req/s</td><td>N</td></tr>
                    <tr><td>/v5/user/delete-api</td><td>5 req/s</td><td>N</td></tr>
                    <tr><td>/v5/user/delete-sub-api</td><td>5 req/s</td><td>N</td></tr>
                    <tr><td>/v5/user/query-sub-members</td><td>10 req/s</td><td>N</td></tr>
                    <tr><td rowSpan={2}>GET</td><td>/v5/user/query-api</td><td>10 req/s</td><td>N</td></tr>
                    <tr><td>/v5/user/aff-customer-info</td><td>10 req/s</td><td>N</td></tr>
                  </tbody>
                </table>
              </div>

              {/* Spot Margin Trade (UTA) */}
              <h4 className="top-req-text" id="spot-margin-trade" style={{ fontSize: "16px", marginTop: "24px" }}>Spot Margin Trade (UTA)</h4>
              <p>For now, there is no limit for endpoints under this category</p>

              {/* Spread Trading */}
              <h4 className="top-req-text" id="spread-trading" style={{ fontSize: "16px", marginTop: "24px" }}>Spread Trading</h4>
              <div className="api-table-box">
                <table className="table table-striped api-table mb-0">
                  <thead>
                    <tr><th>Method</th><th>Path</th><th>Limit</th><th>Upgradable</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>POST</td><td>Create Spread Order</td><td>20 req/s</td><td>N</td></tr>
                    <tr><td>POST</td><td>Amend Spread Order</td><td>20 req/s</td><td>N</td></tr>
                    <tr><td>POST</td><td>Cancel Spread Order</td><td>20 req/s</td><td>N</td></tr>
                    <tr><td>POST</td><td>Cancel All Spread Orders</td><td>5 req/s</td><td>N</td></tr>
                    <tr><td>GET</td><td>Get Spread Open Orders</td><td>50 req/s</td><td>N</td></tr>
                    <tr><td>GET</td><td>Get Spread Order History</td><td>50 req/s</td><td>N</td></tr>
                    <tr><td>GET</td><td>Get Spread Trade History</td><td>50 req/s</td><td>N</td></tr>
                  </tbody>
                </table>
              </div>

              {/* ── Instructions for batch endpoints ── */}
              <div className="api-cover" id="batch-endpoints" style={{ marginTop: "32px" }}>Instructions for batch endpoints</div>
              <div className="api-info-box" style={{ marginTop: "16px" }}>
                <div className="api-info-header">
                  <div className="caution-icon">💡</div>
                  <span className="api-info-title">TIP</span>
                </div>
                <p>
                  The batch order endpoint, which includes operations for creating, amending, and canceling, has its own rate limit and does not share it with single requests, <em>e.g., let's say the rate limit of single create order endpoint is 100/s, and batch create order endpoint is 100/s, so in this case, I can place 200 linear orders in one second if I use both endpoints to place orders</em>
                </p>
              </div>

              <h4 style={{ marginTop: "24px", marginBottom: "12px" }}>When category = linear spot or inverse</h4>
              <ul>
                <li style={{ marginBottom: "10px" }}>
                  API for batch create/amend/cancel order, the frequency of the API will be consistent with the current configuration, but the counting consumption will be consumed according to the actual number of orders. (Number of consumption = number of requests * number of orders included in a single request), and the configuration of business lines is independent of each other.
                </li>
                <li style={{ marginBottom: "10px" }}>
                  The batch APIs allows 1-10 orders/request. For example, if a batch order request is made once and contains 5 orders, then the request limit will consume 5.
                </li>
                <li style={{ marginBottom: "10px" }}>
                  If part of the last batch of orders requested within 1s exceeds the limit, the part that exceeds the limit will fail, and the part that does not exceed the limit will succeed. For example, in the 1 second, the remaining limit is 5, but a batch request containing 8 orders is placed at this time, then the first 5 orders will be successfully placed, and the 6-8th orders will report an error exceeding the limit, and these orders will fail.
                </li>
              </ul>

            </div>

            {/* RIGHT SIDEBAR */}
            <div className="col-lg-3 col-md-4 d-none d-md-block">
              <div className="api-sidebar">
                <ul>
                  <li className={activeSection === "ip-limit" ? "active" : ""} onClick={() => scrollToSection("ip-limit")}>IP Limit</li>
                  <li className={activeSection === "http-ip-limit" ? "active" : ""} onClick={() => scrollToSection("http-ip-limit")} style={{ paddingLeft: "20px" }}>HTTP IP limit</li>
                  <li className={activeSection === "websocket-ip-limit" ? "active" : ""} onClick={() => scrollToSection("websocket-ip-limit")} style={{ paddingLeft: "20px" }}>Websocket IP limit</li>
                  <li className={activeSection === "api-rate-limit" ? "active" : ""} onClick={() => scrollToSection("api-rate-limit")}>API Rate Limit</li>
                  <li className={activeSection === "api-rate-limit-table" ? "active" : ""} onClick={() => scrollToSection("api-rate-limit-table")} style={{ paddingLeft: "20px" }}>API Rate Limit Table</li>
                  <li className={activeSection === "trade" ? "active" : ""} onClick={() => scrollToSection("trade")} style={{ paddingLeft: "32px" }}>Trade</li>
                  <li className={activeSection === "position" ? "active" : ""} onClick={() => scrollToSection("position")} style={{ paddingLeft: "32px" }}>Position</li>
                  <li className={activeSection === "account" ? "active" : ""} onClick={() => scrollToSection("account")} style={{ paddingLeft: "32px" }}>Account</li>
                  <li className={activeSection === "asset" ? "active" : ""} onClick={() => scrollToSection("asset")} style={{ paddingLeft: "32px" }}>Asset</li>
                  <li className={activeSection === "user" ? "active" : ""} onClick={() => scrollToSection("user")} style={{ paddingLeft: "32px" }}>User</li>
                  <li className={activeSection === "spot-margin-trade" ? "active" : ""} onClick={() => scrollToSection("spot-margin-trade")} style={{ paddingLeft: "32px" }}>Spot Margin Trade (UTA)</li>
                  <li className={activeSection === "spread-trading" ? "active" : ""} onClick={() => scrollToSection("spread-trading")} style={{ paddingLeft: "32px" }}>Spread Trading</li>
                  <li className={activeSection === "batch-endpoints" ? "active" : ""} onClick={() => scrollToSection("batch-endpoints")}>Instructions for batch endpoints</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
