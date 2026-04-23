import { useState, useEffect, useRef } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FiCopy, FiCheck } from "react-icons/fi";

export const PrivatePositionWS = () => {
    const contentRef = useRef(null);
    const [lang, setLang] = useState("Python");
    const [copied, setCopied] = useState(false);
    const [copiedRes, setCopiedRes] = useState(false);
    const [activeSection, setActiveSection] = useState("topic");
    const HEADER_OFFSET = 120;
    const handleCopy = async () => { await navigator.clipboard.writeText(codeMap[lang]); setCopied(true); setTimeout(() => setCopied(false), 1500); };
    const handleCopyRes = async () => { navigator.clipboard.writeText(streamExample); setCopiedRes(true); setTimeout(() => setCopiedRes(false), 1500); };
    const sections = ["topic", "response-params", "subscribe-example", "stream-example"];
    const scrollToSection = (id) => { const container = contentRef.current; const el = document.getElementById(id); if (!container || !el) return; const top = el.offsetTop - container.offsetTop - HEADER_OFFSET; container.scrollTo({ top, behavior: "smooth" }); };
    useEffect(() => { if (!contentRef.current) return; const observer = new IntersectionObserver((entries) => { entries.forEach((entry) => { if (entry.isIntersecting) setActiveSection(entry.target.id); }); }, { root: contentRef.current, rootMargin: "-30% 0px -60% 0px", threshold: 0 }); sections.forEach((id) => { const el = document.getElementById(id); if (el) observer.observe(el); }); return () => observer.disconnect(); }, []);

    const streamExample = `{
    "id": "1003076014fb7eedb-c7e6-45d6-a8c1-270f0169171a",
    "topic": "position",
    "creationTime": 1697682317044,
    "data": [
        {
            "positionIdx": 2,
            "tradeMode": 0,
            "riskId": 1,
            "riskLimitValue": "2000000",
            "symbol": "BTCUSDT",
            "side": "",
            "size": "0",
            "entryPrice": "0",
            "leverage": "10",
            "breakEvenPrice": "93556.73034991",
            "positionValue": "0",
            "positionBalance": "0",
            "markPrice": "28184.5",
            "positionIM": "0",
            "positionIMByMp": "0",
            "positionMM": "0",
            "positionMMByMp": "0",
            "takeProfit": "0",
            "stopLoss": "0",
            "trailingStop": "0",
            "unrealisedPnl": "0",
            "curRealisedPnl": "1.26",
            "cumRealisedPnl": "-25.06579337",
            "sessionAvgPrice": "0",
            "createdTime": "1694402496913",
            "updatedTime": "1697682317038",
            "tpslMode": "Full",
            "liqPrice": "0",
            "bustPrice": "",
            "category": "linear",
            "positionStatus": "Normal",
            "adlRankIndicator": 0,
            "autoAddMargin": 0,
            "leverageSysUpdatedTime": "",
            "mmrSysUpdatedTime": "",
            "seq": 8327597863,
            "isReduceOnly": false
        }
    ]
}`;

    const codeMap = {
        wsJSON: `{
    "op": "subscribe",
    "args": [
        "position"
    ]
}`,
        Python: `from pybit.unified_trading import WebSocket
from time import sleep

ws = WebSocket(
    testnet=True,
    channel_type="private",
    api_key="xxxxxxxxxxxxxxxxxx",
    api_secret="xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
)

def handle_message(message):
    print(message)

ws.position_stream(callback=handle_message)

while True:
    sleep(1)`,
    };

    return (
        <div className="container-fluid p-0"><div className="api-layout"><div className="row">
            <div className="col-lg-9 col-md-8 api-content" ref={contentRef}>
                <div className="breadcrumb mb-4"><span className="kline-market">WebSocket Private</span><span className="mx-2"><IoIosArrowForward className="kline-arrow" /></span><span className="pill">Position</span></div>
                <h1 className="api-title">Position</h1>
                <p className="api-desc">Subscribe to the position stream to see changes to your position data in real-time.</p>

                <h3 className="top-req-text" id="topic">Topic</h3>
                <p className="api-desc"><strong>All-In-One Topic:</strong> <span className="pill">position</span></p>
                <p className="api-desc"><strong>Categorised Topic:</strong> <span className="pill">position.linear</span></p>
                <ul className="text-mutne mb-3">
                    <li>All-In-One topic and Categorised topic cannot be in the same subscription request</li>
                    <li>All-In-One topic: Allow you to listen to all categories (linear) websocket updates</li>
                    <li>Categorised Topic: Allow you to listen only to specific category websocket updates</li>
                    <li>Every time when you create/amend/cancel an order, the position topic will generate a new message (regardless if there's any actual change)</li>
                </ul>

                <h3 className="top-req-text" id="response-params">Response Parameters</h3>
                <div className="api-table-box"><table className="table table-striped api-table mb-0">
                    <thead><tr><th>Parameter</th><th>Type</th><th>Comments</th></tr></thead>
                    <tbody>
                     <tr><td>Product type. <span className="pill">linear</span></td><td></td><td></td></tr>
                        <tr><td>symbol</td><td>string</td><td>Symbol name</td></tr>
                        <tr><td>side</td><td>string</td><td><span className="pill">Buy</span>, <span className="pill">Sell</span>, <span className="pill">""</span> (empty when zero qty)</td></tr>
                        <tr><td>size</td><td>string</td><td>Position size</td></tr>
                        <tr><td>entryPrice</td><td>string</td><td>Entry price</td></tr>
                        <tr><td>leverage</td><td>string</td><td>Position leverage</td></tr>
                        <tr><td>positionValue</td><td>string</td><td>Position value</td></tr>
                        <tr><td>positionIdx</td><td>integer</td><td>Position index</td></tr>
                        <tr><td>riskId</td><td>integer</td><td>Risk limit ID</td></tr>
                        <tr><td>riskLimitValue</td><td>string</td><td>Risk limit value</td></tr>
                        <tr><td>tradeMode</td><td>integer</td><td><span className="pill">0</span>: cross margin, <span className="pill">1</span>: isolated margin</td></tr>
                        <tr><td>autoAddMargin</td><td>integer</td><td><span className="pill">0</span>: false, <span className="pill">1</span>: true</td></tr>
                        <tr><td>positionBalance</td><td>string</td><td>Position margin</td></tr>
                        <tr><td>markPrice</td><td>string</td><td>Mark price</td></tr>
                        <tr><td>liqPrice</td><td>string</td><td>Liquidation price</td></tr>
                        <tr><td>bustPrice</td><td>string</td><td>Bankruptcy price</td></tr>
                        <tr><td>positionIM</td><td>string</td><td>Position initial margin</td></tr>
                        <tr><td>positionMM</td><td>string</td><td>Position maintenance margin</td></tr>
                        <tr><td>positionIMByMp</td><td>string</td><td>Initial margin by mark price</td></tr>
                        <tr><td>positionMMByMp</td><td>string</td><td>Maintenance margin by mark price</td></tr>
                        <tr><td>takeProfit</td><td>string</td><td>Take profit price</td></tr>
                        <tr><td>stopLoss</td><td>string</td><td>Stop loss price</td></tr>
                        <tr><td>trailingStop</td><td>string</td><td>Trailing stop</td></tr>
                        <tr><td>tpslMode</td><td>string</td><td>TP/SL mode. <span className="pill">Full</span>, <span className="pill">Partial</span></td></tr>
                        <tr><td>unrealisedPnl</td><td>string</td><td>Unrealised PnL</td></tr>
                        <tr><td>curRealisedPnl</td><td>string</td><td>Current realised PnL</td></tr>
                        <tr><td>cumRealisedPnl</td><td>string</td><td>Cumulative realised PnL</td></tr>
                        <tr><td>breakEvenPrice</td><td>string</td><td>Breakeven price</td></tr>
                        <tr><td>sessionAvgPrice</td><td>string</td><td>USDC session avg price</td></tr>
                        <tr><td>positionStatus</td><td>string</td><td><span className="pill">Normal</span>, <span className="pill">Liq</span>, <span className="pill">Adl</span></td></tr>
                        <tr><td>adlRankIndicator</td><td>integer</td><td>ADL rank indicator</td></tr>
                        <tr><td>isReduceOnly</td><td>boolean</td><td>Reduce only mark for risk control</td></tr>
                        <tr><td>seq</td><td>long</td><td>Cross sequence</td></tr>
                        <tr><td>leverageSysUpdatedTime</td><td>string</td><td>Leverage system updated timestamp</td></tr>
                        <tr><td>mmrSysUpdatedTime</td><td>string</td><td>MMR system updated timestamp</td></tr>
                        <tr><td>createdTime</td><td>string</td><td>Position created timestamp (ms)</td></tr>
                        <tr><td>updatedTime</td><td>string</td><td>Position updated timestamp (ms)</td></tr>
                    </tbody>
                </table></div>

                <h3 className="top-req-text" id="subscribe-example">Subscribe Example</h3>
                <div className="lang-tabs">{["wsJSON", "Python"].map((t) => (<button key={t} className={lang === t ? "active" : ""} onClick={() => setLang(t)}>{t === "wsJSON" ? "WebSocket" : t}</button>))}</div>
                <div className="api-code-box position-relative" style={{ marginBottom: "40px" }}><button className="copy-btn" onClick={handleCopy}>{copied ? <FiCheck /> : <FiCopy />}</button><pre style={{ margin: 0 }}><code >{codeMap[lang]}</code></pre></div>

                <h3 className="top-req-text" id="stream-example">Stream Example</h3>
                <div className="api-code-box position-relative" style={{ marginBottom: "40px" }}><button className="copy-btn" onClick={handleCopyRes}>{copiedRes ? <FiCheck /> : <FiCopy />}</button><pre><code>{streamExample}</code></pre></div>
            </div>
            <div className="col-lg-3 col-md-4 d-none d-md-block"><div className="api-sidebar"><ul>
                <li className={activeSection === "topic" ? "active" : ""} onClick={() => scrollToSection("topic")}>Topic</li>
                <li className={activeSection === "response-params" ? "active" : ""} onClick={() => scrollToSection("response-params")}>Response Parameters</li>
                <li className={activeSection === "subscribe-example" ? "active" : ""} onClick={() => scrollToSection("subscribe-example")}>Subscribe Example</li>
                <li className={activeSection === "stream-example" ? "active" : ""} onClick={() => scrollToSection("stream-example")}>Stream Example</li>
            </ul></div></div>
        </div></div></div>
    );
};
