import { useState, useEffect, useRef } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FiCopy, FiCheck } from "react-icons/fi";

export const PrivateExecutionWS = () => {
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
    "topic": "execution",
    "id": "386825804_BTCUSDT_140612148849382",
    "creationTime": 1746270400355,
    "data": [
        {
            "category": "linear",
            "symbol": "BTCUSDT",
            "closedSize": "0.5",
            "execFee": "26.3725275",
            "execId": "0ab1bdf7-4219-438b-b30a-32ec863018f7",
            "execPrice": "95900.1",
            "execQty": "0.5",
            "execType": "Trade",
            "execValue": "47950.05",
            "feeRate": "0.00055",
            "tradeIv": "",
            "markIv": "",
            "blockTradeId": "",
            "markPrice": "95901.48",
            "indexPrice": "",
            "underlyingPrice": "",
            "leavesQty": "0",
            "orderId": "9aac161b-8ed6-450d-9cab-c5cc67c21784",
            "orderLinkId": "",
            "orderPrice": "94942.5",
            "orderQty": "0.5",
            "orderType": "Market",
            "stopOrderType": "UNKNOWN",
            "side": "Sell",
            "execTime": "1746270400353",
            "isLeverage": "0",
            "isMaker": false,
            "seq": 140612148849382,
            "marketUnit": "",
            "execPnl": "0.05",
            "createType": "CreateByUser",
            "feeCurrency": "USDT"
        }
    ]
}`;

    const codeMap = {
        wsJSON: `{
    "op": "subscribe",
    "args": [
        "execution"
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

ws.execution_stream(callback=handle_message)

while True:
    sleep(1)`,
    };

    return (
        <div className="container-fluid p-0"><div className="api-layout"><div className="row">
            <div className="col-lg-9 col-md-8 api-content" ref={contentRef}>
                <div className="breadcrumb mb-4"><span className="kline-market">WebSocket Private</span><span className="mx-2"><IoIosArrowForward className="kline-arrow" /></span><span className="pill">Execution</span></div>
                <h1 className="api-title">Execution</h1>
                <p className="api-desc">Subscribe to the execution stream to see your executions in real-time.</p>
                <p className="api-desc">You may have multiple executions for one order in a single message.</p>

                <h3 className="top-req-text" id="topic">Topic</h3>
                <p className="api-desc"><strong>All-In-One Topic:</strong> <span className="pill">execution</span></p>
                <p className="api-desc"><strong>Categorised Topic:</strong> <span className="pill">execution.linear</span></p>
                <ul className="text-white mb-3">
                    <li>All-In-One topic and Categorised topic cannot be in the same subscription request</li>
                    <li>All-In-One topic: Allow you to listen to all categories (linear) websocket updates</li>
                    <li>Categorised Topic: Allow you to listen only to specific category websocket updates</li>
                </ul>

                <h3 className="top-req-text" id="response-params">Response Parameters</h3>
                <div className="api-table-box"><table className="table table-striped api-table mb-0">
                    <thead><tr><th>Parameter</th><th>Type</th><th>Comments</th></tr></thead>
                    <tbody>
                        <tr><td>category</td><td>string</td><td>Product type. <span className="pill">linear</span></td></tr>
                        <tr><td>symbol</td><td>string</td><td>Symbol name</td></tr>
                        <tr><td>orderId</td><td>string</td><td>Order ID</td></tr>
                        <tr><td>orderLinkId</td><td>string</td><td>User customised order ID</td></tr>
                        <tr><td>side</td><td>string</td><td><span className="pill">Buy</span>, <span className="pill">Sell</span></td></tr>
                        <tr><td>orderPrice</td><td>string</td><td>Order price</td></tr>
                        <tr><td>orderQty</td><td>string</td><td>Order qty</td></tr>
                        <tr><td>orderType</td><td>string</td><td>Order type. <span className="pill">Market</span>, <span className="pill">Limit</span></td></tr>
                        <tr><td>stopOrderType</td><td>string</td><td>Stop order type</td></tr>
                        <tr><td>execId</td><td>string</td><td>Execution ID</td></tr>
                        <tr><td>execPrice</td><td>string</td><td>Execution price</td></tr>
                        <tr><td>execQty</td><td>string</td><td>Execution qty</td></tr>
                        <tr><td>execType</td><td>string</td><td>Execution type</td></tr>
                        <tr><td>execValue</td><td>string</td><td>Executed order value</td></tr>
                        <tr><td>execFee</td><td>string</td><td>Executed trading fee</td></tr>
                        <tr><td>feeRate</td><td>string</td><td>Trading fee rate</td></tr>
                        <tr><td>execTime</td><td>string</td><td>Executed timestamp (ms)</td></tr>
                        <tr><td>isMaker</td><td>boolean</td><td>Is maker order. <span className="pill">true</span>: maker, <span className="pill">false</span>: taker</td></tr>
                        <tr><td>leavesQty</td><td>string</td><td>Remaining order qty</td></tr>
                        <tr><td>closedSize</td><td>string</td><td>Closed size</td></tr>
                        <tr><td>markPrice</td><td>string</td><td>Mark price</td></tr>
                        <tr><td>indexPrice</td><td>string</td><td>Index price</td></tr>
                        <tr><td>blockTradeId</td><td>string</td><td>Block trade ID</td></tr>
                        <tr><td>createType</td><td>string</td><td>Create type</td></tr>
                        <tr><td>seq</td><td>long</td><td>Cross sequence</td></tr>
                        <tr><td>feeCurrency</td><td>string</td><td>Fee currency</td></tr>
                        <tr><td>execPnl</td><td>string</td><td>Execution PnL</td></tr>
                    </tbody>
                </table></div>

                <h3 className="top-req-text" id="subscribe-example">Subscribe Example</h3>
                <div className="lang-tabs">{["wsJSON", "Python"].map((t) => (<button key={t} className={lang === t ? "active" : ""} onClick={() => setLang(t)}>{t === "wsJSON" ? "WebSocket" : t}</button>))}</div>
                <div className="api-code-box position-relative" style={{ marginBottom: "40px" }}><button className="copy-btn" onClick={handleCopy}>{copied ? <FiCheck /> : <FiCopy />}</button><pre style={{ margin: 0 }}><code >{codeMap[lang]}</code></pre></div>

                <h3 className="top-req-text" id="stream-example">Stream Example</h3>
                <div className="api-code-box position-relative" style={{ marginBottom: "40px" }}><button className="copy-btn" onClick={handleCopyRes}>{copiedRes ? <FiCheck /> : <FiCopy />}</button><pre><code >{streamExample}</code></pre></div>
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
