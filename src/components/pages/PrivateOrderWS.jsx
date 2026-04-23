import { useState, useEffect, useRef } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FiCopy, FiCheck } from "react-icons/fi";

export const PrivateOrderWS = () => {
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
    "id": "5923240c6880ab-c59f-420b-9adb-3639adc9dd90",
    "topic": "order",
    "creationTime": 1672364262474,
    "data": [
        {
            "symbol": "ETH-30DEC22-1400-C",
            "orderId": "5cf98598-39a7-459e-97bf-76ca765ee020",
            "side": "Sell",
            "orderType": "Market",
            "cancelType": "UNKNOWN",
            "price": "72.5",
            "qty": "1",
            "orderIv": "",
            "timeInForce": "IOC",
            "orderStatus": "Filled",
            "orderLinkId": "",
            "lastPriceOnCreated": "",
            "reduceOnly": false,
            "leavesQty": "",
            "leavesValue": "",
            "cumExecQty": "1",
            "cumExecValue": "75",
            "avgPrice": "75",
            "blockTradeId": "",
            "positionIdx": 0,
            "cumExecFee": "0.358635",
            "closedPnl": "0",
            "createdTime": "1672364262444",
            "updatedTime": "1672364262457",
            "rejectReason": "EC_NoError",
            "stopOrderType": "",
            "tpslMode": "",
            "triggerPrice": "",
            "takeProfit": "",
            "stopLoss": "",
            "tpTriggerBy": "",
            "slTriggerBy": "",
            "tpLimitPrice": "",
            "slLimitPrice": "",
            "triggerDirection": 0,
            "triggerBy": "",
            "closeOnTrigger": false,
            "category": "linear",
            "placeType": "price",
            "smpType": "None",
            "smpGroup": 0,
            "smpOrderId": "",
            "feeCurrency": ""
        }
    ]
}`;

    const codeMap = {
        wsJSON: `{
    "op": "subscribe",
    "args": [
        "order"
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

ws.order_stream(callback=handle_message)

while True:
    sleep(1)`,
    };

    return (
        <div className="container-fluid p-0"><div className="api-layout"><div className="row">
            <div className="col-lg-9 col-md-8 api-content" ref={contentRef}>
                <div className="breadcrumb mb-4"><span className="kline-market">WebSocket Private</span><span className="mx-2"><IoIosArrowForward className="kline-arrow" /></span><span className="pill">Order</span></div>
                <h1 className="api-title">Order</h1>
                <p className="api-desc">Subscribe to the order stream to see changes to your orders in real-time.</p>

                <h3 className="top-req-text" id="topic">Topic</h3>
                <p className="api-desc"><strong>All-In-One Topic:</strong> <span className="pill">order</span></p>
                <p className="api-desc"><strong>Categorised Topic:</strong> <span className="pill"></span>, <span className="pill">order.linear</span>, <span className="pill"></span>, <span className="pill"></span></p>
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
                        <tr><td>orderType</td><td>string</td><td>Order type. <span className="pill">Market</span>, <span className="pill">Limit</span></td></tr>
                        <tr><td>price</td><td>string</td><td>Order price</td></tr>
                        <tr><td>qty</td><td>string</td><td>Order qty</td></tr>
                        <tr><td>timeInForce</td><td>string</td><td>Time in force</td></tr>
                        <tr><td>orderStatus</td><td>string</td><td>Order status</td></tr>
                        <tr><td>cancelType</td><td>string</td><td>Cancel type</td></tr>
                        <tr><td>rejectReason</td><td>string</td><td>Reject reason</td></tr>
                        <tr><td>avgPrice</td><td>string</td><td>Average filled price</td></tr>
                        <tr><td>cumExecQty</td><td>string</td><td>Cumulative executed order qty</td></tr>
                        <tr><td>cumExecValue</td><td>string</td><td>Cumulative executed order value</td></tr>
                        <tr><td>cumExecFee</td><td>string</td><td>Cumulative executed trading fee</td></tr>
                        <tr><td>leavesQty</td><td>string</td><td>Remaining order qty</td></tr>
                        <tr><td>leavesValue</td><td>string</td><td>Remaining order value</td></tr>
                        <tr><td>stopOrderType</td><td>string</td><td>Stop order type</td></tr>
                        <tr><td>triggerPrice</td><td>string</td><td>Trigger price</td></tr>
                        <tr><td>triggerBy</td><td>string</td><td>The price type to trigger</td></tr>
                        <tr><td>triggerDirection</td><td>integer</td><td><span className="pill">1</span>: rise, <span className="pill">2</span>: fall</td></tr>
                        <tr><td>takeProfit</td><td>string</td><td>Take profit price</td></tr>
                        <tr><td>stopLoss</td><td>string</td><td>Stop loss price</td></tr>
                        <tr><td>tpTriggerBy</td><td>string</td><td>The price type to trigger take profit</td></tr>
                        <tr><td>slTriggerBy</td><td>string</td><td>The price type to trigger stop loss</td></tr>
                        <tr><td>tpLimitPrice</td><td>string</td><td>The limit order price when take profit price is triggered</td></tr>
                        <tr><td>slLimitPrice</td><td>string</td><td>The limit order price when stop loss price is triggered</td></tr>
                        <tr><td>tpslMode</td><td>string</td><td>TP/SL mode, <span className="pill">Full</span>: entire position, <span className="pill">Partial</span>: partial position</td></tr>
                        <tr><td>positionIdx</td><td>integer</td><td>Position index</td></tr>
                        <tr><td>reduceOnly</td><td>boolean</td><td>Reduce only</td></tr>
                        <tr><td>closeOnTrigger</td><td>boolean</td><td>Close on trigger</td></tr>
                        <tr><td>placeType</td><td>string</td><td>Place type. linear: <span className="pill">iv</span>, <span className="pill">price</span></td></tr>
                        <tr><td>smpType</td><td>string</td><td>SMP execution type</td></tr>
                        <tr><td>smpGroup</td><td>integer</td><td>SMP group ID</td></tr>
                        <tr><td>smpOrderId</td><td>string</td><td>The counterparty's orderID which triggers SMP</td></tr>
                        <tr><td>createdTime</td><td>string</td><td>Order created timestamp (ms)</td></tr>
                        <tr><td>updatedTime</td><td>string</td><td>Order updated timestamp (ms)</td></tr>
                        <tr><td>closedPnl</td><td>string</td><td>Closed PnL</td></tr>
                        <tr><td>blockTradeId</td><td>string</td><td>Block trade ID</td></tr>
                        <tr><td>orderIv</td><td>string</td><td>Implied volatility</td></tr>
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
