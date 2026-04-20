import { useState, useEffect, useRef } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FiCopy, FiCheck } from "react-icons/fi";


export const WsTicker = () => {

    const contentRef = useRef(null);

  const [lang, setLang] = useState("Ticker");
  const [copied, setCopied] = useState(false);
  const [copiedRes, setCopiedRes] = useState(false);

  const [tickerType, setTickerType] = useState("Ticker");

    const [activeSection, setActiveSection] = useState("http");

  const HEADER_OFFSET = 120; // adjust to your layout

  const handleCopy = async () => {
    await navigator.clipboard.writeText(codeMap[lang]);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const handleCopyRes = async () => {
    navigator.clipboard.writeText(responseCodeMap[lang]);
    setCopiedRes(true);
    setTimeout(() => setCopiedRes(false), 1500);
  };

 const sections = [
    "response-params",
    "subscribe-example",
    "response-example",
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


const responseParamsMap = {

  "Ticker": [
    { p: "symbol", t: "string", c: "Symbol name" },
    { p: "ts", t: "number", c: "Timestamp (ms)" },
    { p: "data", t: "object", c: "ticker data" },
    { p: "> lastPrice", t: "string", c: "Latest traded price" },
    { p: "> markPrice", t: "string", c: "Mark price" },
    { p: "> indexPrice", t: "string", c: "index price" },
    { p: "> price24hPcnt", t: "string", c: "Percentage change of market price in the last 24 hours" },
    { p: "> highPrice24h", t: "string", c: "The highest price in the last 24 hours" },
    { p: "> lowPrice24h", t: "string", c: "The lowest price in the last 24 hours" },
    { p: "> turnover24h", t: "string", c: "Turnover for 24h"},
    { p: "> volume24h", t: "string", c: "Volume for 24h" },
    { p: "> price24hPcnt", t: "string", c: "Percentage change of market price in the last 24 hours" },
    { p: "> openInterest", t: "string", c: "Open interest size" },
    { p: "> fundingRate", t: "string", c: "	Funding rate"},
    { p: "> nextFundingTime", t: "string", c: "Next funding timestamp (ms)"},
    { p: "> ts", t: "number", c: "The timestamp (ms) that the system generates the data" },
  ],
};


 const codeMap = {
 Ticker: `const WebSocket = require("ws");

const WS_URL = "wss://socket.bitzup.com/futures/public/ws/";
const SYMBOL = "BTCUSDT";

let tickerState = {};

const ws = new WebSocket(WS_URL);

ws.on("open", () => {
  console.log("Connected");

  ws.send(JSON.stringify({
    action: "subscribe",
    type: "ticker",
    symbol: SYMBOL
  }));

  // keepalive ping
  setInterval(() => {
    ws.send(JSON.stringify({ action: "ping" }));
  }, 5000);
});

ws.on("message", (data) => {
  const msg = JSON.parse(data.toString());

  if (msg.symbol === SYMBOL && msg.data) {
    tickerState = { ...tickerState, ...msg.data };
    console.log("Ticker:", tickerState, "ts:", msg.ts);
  }
});

ws.on("close", () => console.log("Disconnected"));
ws.on("error", console.error);`,

   
  };


 const responseCodeMap = {

    Ticker: `{
  "symbol": "BTCUSDT",
  "data": {
    "lastPrice": "88555.20",
    "markPrice": "88558.68",
    "indexPrice": "88555.20",
    "price24hPcnt": "1.61",
    "price24hPcnt": "-0.028377",
    "highPrice24h": "91339.00",
    "lowPrice24h": "87773.10",
    "openInterest": "51973.674",
    "fundingRate": "0.00003285",
    "nextFundingTime": "1769011200000",
    "turnover24h": "7526525461.7731",
    "volume24h": "84047.7230",
    "ts": 1769080333288
  }
}`,

   
  };  


    return(
        <>
             <div className="container-fluid p-0">
               <div className="api-layout">
              <div className="row">
                {/* LEFT CONTENT */}
                <div className="col-lg-9 col-md-8 api-content" ref={contentRef}>
                  {/* Breadcrumb */}
                  <div className="breadcrumb mb-4">
                    <span className="kline-market">WebSocket Stream</span>
                    <span className="mx-2">
                      <IoIosArrowForward className="kline-arrow" />
                    </span>
                    <span className="kline-market">Public</span>
                    <span className="mx-2">
                      <IoIosArrowForward className="kline-arrow" />
                    </span>
                    <span className="pill">Ticker</span>
                  </div>

                  {/* Title */}
                  <h1 className="api-title"> Ticker</h1>
                  <p className="api-desc">
                    Subscribe to the ticker stream.
                  </p>

                  <div className="api-cover">USDT contract</div>
                  <div className="api-info-box">
                    <div className="api-info-header">
                      <span className="api-info-icon">!</span>
                      <span className="api-info-title">INFO</span>
                    </div>

                    <ul className="api-info-list">
                      <li>This topic utilises the snapshot field and delta field. If a response param is not found in the message, then its value has not changed.</li>
                    </ul>
                  </div>

                  {/* HTTP REQUEST */}
                  <div className="lang-tabs">
                    {[ "Ticker"].map((t) => (
                      <button
                        key={t}
                        className={tickerType === t ? "active" : ""}
                        onClick={() => setTickerType(t)}
                      >
                        {t}
                      </button>
                    ))}
                  </div>

                  {/* REQUEST PARAMETERS */}


                  <h3 className="top-req-text" id="response-params">Response Parameters</h3>

      <div className="api-table-box">
        <table className="table table-striped api-table mb-0">
          <thead>
            <tr>
              <th>Parameter</th>
              <th>Type</th>
              <th>Comments</th>
            </tr>
          </thead>

          <tbody>
            {responseParamsMap[tickerType].map((row, i) => (
              <tr key={i}>
                <td style={row.indent ? { paddingLeft: "15px" } : {}}>
                  {row.p}
                </td>
                <td>{row.t}</td>
                <td>{row.c}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>


                  <h3 className="top-req-text" id="subscribe-example">Subscribe Example</h3>
                  <div className="lang-tabs">
                    {[ "Ticker"].map((t) => (
                      <button
                        key={t}
                        className={tickerType === t ? "active" : ""}
                        onClick={() => setTickerType(t)}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                  <div className="api-code-box position-relative">
                    {/* COPY ICON */}
                    <button className="copy-btn" onClick={handleCopy}>
                      {copied ? <FiCheck /> : <FiCopy />}
                    </button>

                    <pre>
                      <code>{codeMap[tickerType]}</code>
                    </pre>
                  </div>

                  {/* RESPONSE EXAMPLE */}
                  <h3 className="top-req-text" id="response-example">Response Example</h3>
                  <div className="lang-tabs">
                    {["Ticker"].map((t) => (
                      <button
                        key={t}
                        className={tickerType === t ? "active" : ""}
                        onClick={() => setTickerType(t)}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                  <div className="api-code-box position-relative">
                    {/* COPY ICON */}
                    <button className="copy-btn" onClick={handleCopyRes}>
                      {copiedRes ? <FiCheck /> : <FiCopy />}
                    </button>
      <pre>
        <code>
          {"{"}
          {"\n"}  "symbol": "BTCUSDT",
          {"\n"}  "data": {"{"}
          {"\n"}    "lastPrice": "88555.20",
          {"\n"}    "markPrice": "88558.68",
          {"\n"}    "indexPrice": "88555.20",
          {"\n"}    "price24hPcnt": "-0.028377",
          {"\n"}    "highPrice24h": "91339.00",
          {"\n"}    "lowPrice24h": "87773.10",
          {"\n"}    "openInterest": "51973.674",
          {"\n"}    "fundingRate": "0.00003285",
          {"\n"}    "nextFundingTime": "1769011200000",
          {"\n"}    "turnover24h": "7526525461.7731",
          {"\n"}    "volume24h": "84047.7230",
          {"\n"}    "ts": 1769080333288
          {"\n"}  {"}"}
          {"\n"}{"}"}
        </code>
      </pre>

                    
                  </div>

                  
                </div>

                {/* RIGHT SIDEBAR */}
                <div className="col-lg-3 col-md-4 d-none d-md-block">
                  <div className="api-sidebar">
                    <ul>
                  <li
                    className={
                      activeSection === "response-params" ? "active" : ""
                    }
                    onClick={() => scrollToSection("response-params")}
                  >
                    Response Parameters
                  </li>
                  <li
                    className={
                      activeSection === "subscribe-example" ? "active" : ""
                    }
                    onClick={() => scrollToSection("subscribe-example")}
                  >
                    Request Example
                  </li>
                  <li
                    className={
                      activeSection === "response-example" ? "active" : ""
                    }
                    onClick={() => scrollToSection("response-example")}
                  >
                    Response Example
                  </li>
                </ul>
                  </div>
                </div>
              </div>
              </div>
      </div>
        </>
    )
}


