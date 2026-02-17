import { useState, useEffect, useRef } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FiCopy, FiCheck } from "react-icons/fi";
import { Link } from "react-router-dom";

export const Connect = () => {

  const contentRef = useRef(null);

  const [lang, setLang] = useState("HTTP");
  const [copied, setCopied] = useState(false);
  const [copiedRes, setCopiedRes] = useState(false);

    const [activeSection, setActiveSection] = useState("limits");

  const HEADER_OFFSET = 120; // adjust to your layout

  const handleCopy = async () => {
    await navigator.clipboard.writeText(codeMap[lang]);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const handleCopyRes = async () => {
    navigator.clipboard.writeText(responseCode);
    setCopiedRes(true);
    setTimeout(() => setCopiedRes(false), 1500);
  };

    const sections = [
      "limits",
      "heartbeat",
      "subscription-protocol",
      "push-model",
      "disconnect-handling",
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



  return (
    <>
      <div className="container-fluid p-0">
        <div className="api-layout">
        <div className="row">
          {/* LEFT CONTENT */}
          <div className="col-lg-9 col-md-8 api-content" ref={contentRef}>
            <div className="breadcrumb mb-4">
              <span className="kline-market">Websocket Stream</span>
              <span className="mx-2">
                <IoIosArrowForward className="kline-arrow" />
              </span>
              <span className="pill">Connect</span>
            </div>

         
            <h1 className="api-title"> Connect</h1>
            <p className="api-desc" id="limits">
              <Link to="/docs/websocket/public/orderbook" className="api-desc"> WebSocket public stream:</Link>
            </p>
            <ul>
              <li>Mainnet:</li>
              <p className="api-desc">wss://socket.bitzup.com/futures/public/ws/</p>
            </ul>
 
            <h3 className="top-req-text" id="heartbeat">How to Send the Heartbeat Packet</h3>
            
             <ul>
              <li className="api-desc">Every 5 seconds (frontend standard)</li>
              <li className="api-desc">Maximum recommended: 20 seconds</li>
              <li className="api-desc">F ilure to send pings may result in disconnection.</li>
             </ul>

             <p className="api-cover">Client → Server</p>
            <div className="api-code-box position-relative">
              
              <pre>
                <code>
                  {"{"}
                  {"\n"} "action": "ping"
                  {"\n"}
                  {"}"}
                </code>
              </pre>
            </div>

             <p className="api-cover">Pong message example of public channels</p>
            <div className="api-code-box position-relative">
              
              <pre>
                <code>
                  {"{"}
                  {"\n"} "type": "pong",
                  {"\n"} "ts": 1769075989192
                  {"\n"}
                  {"}"}
                </code>
              </pre>
            </div>

            {/* HTTP REQUEST */}
            <h3 className="top-req-text" id="subscription-protocol">Subscription Protocol (Bitzup)</h3>
            <p className="api-cover">Subscribe</p>
            <div className="api-code-box position-relative">
              <pre>
                <code>
                  {"{"}
                  {"\n"} "action": "subscribe",
                  {"\n"} "type": "orderbook | ticker | trades | kline",
                  {"\n"} "symbol": "BTCUSDT",
                  {"\n"} "interval": "1" // required only for kline
                  {"\n"}
                  {"}"}
                </code>
              </pre>
            </div>

            <p className="api-cover">Unsubscribe</p>
            <div className="api-code-box position-relative">
              <pre>
                <code>
                  {"{"}
                  {"\n"} "action": "unsubscribe",
                  {"\n"} "type": "orderbook",
                  {"\n"} "symbol": "BTCUSDT",
                  {"\n"}
                  {"}"}
                </code>
              </pre>
            </div>

            <p className="api-cover">Unsubscribe does not close the WebSocket connection.</p>

            <h3 className="top-req-text" id="push-model">BitZup Push Model</h3>

            <p className="api-cover">Push Frequency</p>
            <ul>
              <li className="api-desc">Internal poller runs 200ms</li>
              <li className="api-desc">Data is sent only if available</li>
            </ul>

            {/* REQUEST PARAMETERS */}
            <h5 id="request-params">Server Behavior by Channel</h5>
            <div className="api-table-box">
              <table className="table table-striped api-table mb-0">
                <thead>
                  <tr>
                    <th>Channel</th>
                    <th>Behavior</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>lp</td>
                    <td>Sends latest mark price snapshot</td>
                  </tr>
                  <tr>
                    <td>ticker</td>
                    <td>Sends partial ticker snapshot</td>
                  </tr>
                  <tr>
                    <td>orderbook</td>
                    <td>Sends full depth snapshot (20×20)</td>
                  </tr>
                  <tr>
                    <td>trades</td>
                    <td>Streams new trades only</td>
                  </tr>
                  <tr>
                    <td>kline</td>
                    <td>Sends latest candle + history on subscribe</td>
                  </tr>
                 
                </tbody>
              </table>
            </div>
            <h5>Trade Deduplication Guarantee</h5>
            <p className="api-cover">For trades:</p>
            <ul>
              <li className="api-desc">BitZup tracks lastTradeId per client</li>
              <li className="api-desc">Duplicate trades are never resent</li>
            </ul>

            <h5>Kline Semantics</h5>
            <ul>
              <li className="api-desc">kline_history → sent once on subscribe</li>
              <li className="api-desc">kline_latest → sent every second</li>
              <li className="api-desc">confirm = false → candle still forming</li>
              <li className="api-desc">confirm = true → candle closed</li>
            </ul>
              
               <p className="api-cover">Clients must update last candle in place until confirmed.</p>
              <h3 className="top-req-text" id="disconnect-handling">Disconnect Handling</h3>
            <p className="api-cover">When a connection closes:</p>
            <ul>
              <li className="api-desc">BitZup cleans up all subscriptions</li>
              <li className="api-desc">Polling timer is stopped</li>
              <li className="api-desc">Client must reconnect and re-subscribe</li>
            </ul>
            

          </div>

          {/* RIGHT SIDEBAR */}
          <div className="col-lg-3 col-md-4 d-none d-md-block">
            <div className="api-sidebar">
              <ul>
                  <li
                    className={activeSection === "limits" ? "active" : ""}
                    onClick={() => scrollToSection("limits")}
                  >
                    IP Limits
                  </li>
                  <li
                    className={
                      activeSection === "heartbeat" ? "active" : ""
                    }
                    onClick={() => scrollToSection("heartbeat")}
                  >
                    How to Send the Heartbeat Packet
                  </li>
                  <li
                    className={
                      activeSection === "subscription-protocol" ? "active" : ""
                    }
                    onClick={() => scrollToSection("subscription-protocol")}
                  >
                    Subscription Protocol (Bitzup)
                  </li>
                  <li
                    className={
                      activeSection === "push-model" ? "active" : ""
                    }
                    onClick={() => scrollToSection("push-model")}
                  >
                    BitZup Push Model
                  </li>
                  <li
                    className={
                      activeSection === "disconnect-handling" ? "active" : ""
                    }
                    onClick={() => scrollToSection("disconnect-handling")}
                  >
                    Disconnect Handling
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
