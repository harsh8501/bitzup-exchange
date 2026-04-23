import { useState, useEffect, useRef } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FiCopy, FiCheck } from "react-icons/fi";

export const PublicAllLiquidationWS = () => {
    const contentRef = useRef(null);
    const [lang, setLang] = useState("Python");
    const [copied, setCopied] = useState(false);
    const [copiedRes, setCopiedRes] = useState(false);
    const [activeSection, setActiveSection] = useState("topic");
    const HEADER_OFFSET = 120;

    const handleCopy = async () => { 
        await navigator.clipboard.writeText(codeMap[lang]); 
        setCopied(true); 
        setTimeout(() => setCopied(false), 1500); 
    };

    const handleCopyRes = async () => { 
        navigator.clipboard.writeText(responseExample); 
        setCopiedRes(true); 
        setTimeout(() => setCopiedRes(false), 1500); 
    };

    const sections = ["topic", "response-params", "subscribe-example", "response-example"];

    const scrollToSection = (id) => { 
        const container = contentRef.current; 
        const el = document.getElementById(id); 
        if (!container || !el) return; 
        const top = el.offsetTop - container.offsetTop - HEADER_OFFSET; 
        container.scrollTo({ top, behavior: "smooth" }); 
    };

    useEffect(() => { 
        if (!contentRef.current) return; 
        const observer = new IntersectionObserver((entries) => { 
            entries.forEach((entry) => { 
                if (entry.isIntersecting) setActiveSection(entry.target.id); 
            }); 
        }, { root: contentRef.current, rootMargin: "-30% 0px -60% 0px", threshold: 0 }); 
        sections.forEach((id) => { 
            const el = document.getElementById(id); 
            if (el) observer.observe(el); 
        }); 
        return () => observer.disconnect(); 
    }, []);

    const responseExample = `{
    "topic": "allLiquidation.ROSEUSDT",
    "type": "snapshot",
    "ts": 1739502303204,
    "data": [
        {
            "T": 1739502302929,
            "s": "ROSEUSDT",
            "S": "Sell",
            "v": "20000",
            "p": "0.04499"
        }
    ]
}`;

    const codeMap = {
        Python: `from pybit.unified_trading import WebSocket
from time import sleep

ws = WebSocket(
    testnet=True,
    channel_type="linear",
)

def handle_message(message):
    print(message)

ws.all_liquidation_stream("ROSEUSDT", handle_message)

while True:
    sleep(1)`,
    };

    return (
        <div className="container-fluid p-0">
            <div className="api-layout">
                <div className="row">
                    <div className="col-lg-9 col-md-8 api-content" ref={contentRef}>
                        <div className="breadcrumb mb-4">
                            <span className="kline-market">WebSocket Stream</span>
                            <span className="mx-2"><IoIosArrowForward className="kline-arrow" /></span>
                            <span className="pill">Public</span>
                            <span className="mx-2"><IoIosArrowForward className="kline-arrow" /></span>
                            <span className="pill">All Liquidation</span>
                        </div>
                        <h1 className="api-title">All Liquidation</h1>
                        <p className="api-desc">
                            Subscribe to the liquidation stream, push all liquidations that occur on Bybit.
                        </p>

                        <div 
                            style={{ 
                                borderLeft: "4px solid var(--border-color)", 
                                padding: "12px 20px", 
                                background: "rgba(255,255,255,0.03)",
                                borderRadius: "4px",
                                margin: "20px 0"
                            }}
                        >
                            <p className="mb-0" style={{ color: "var(--text-primary)", fontWeight: "500" }}>
                                Covers: USDT contract / USDC contract / Inverse contract
                            </p>
                        </div>

                        <p className="api-desc">Push frequency: <strong>500ms</strong></p>

                        <h3 className="top-req-text" id="topic">Topic</h3>
                        <p className="api-desc">
                            <span className="pill">allLiquidation.{"{symbol}"}</span> e.g., <span className="pill">allLiquidation.BTCUSDT</span>
                        </p>

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
                                    <tr><td>topic</td><td>string</td><td>Topic name</td></tr>
                                    <tr><td>type</td><td>string</td><td>Data type. <span className="pill">snapshot</span></td></tr>
                                    <tr><td>ts</td><td>number</td><td>The timestamp (ms) that the system generates the data</td></tr>
                                    <tr><td>data</td><td>Object</td><td></td></tr>
                                    <tr><td>&gt; T</td><td>number</td><td>The updated timestamp (ms)</td></tr>
                                    <tr><td>&gt; s</td><td>string</td><td>Symbol name</td></tr>
                                    <tr><td>&gt; S</td><td>string</td><td>Position side. <span className="pill">Buy</span>, <span className="pill">Sell</span>. When you receive a <span className="pill">Buy</span> update, this means that a long position has been liquidated</td></tr>
                                    <tr><td>&gt; v</td><td>string</td><td>Executed size</td></tr>
                                    <tr><td>&gt; p</td><td>string</td><td>Bankruptcy price</td></tr>
                                </tbody>
                            </table>
                        </div>

                        <h3 className="top-req-text" id="subscribe-example">Subscribe Example</h3>
                        <div className="lang-tabs">
                            {["Python"].map((t) => (
                                <button key={t} className="active">{t}</button>
                            ))}
                        </div>
                        <div className="api-code-box position-relative" style={{ marginBottom: "40px" }}>
                            <button className="copy-btn" onClick={handleCopy}>
                                {copied ? <FiCheck /> : <FiCopy />}
                            </button>
                            <pre style={{ margin: 0 }}><code>{codeMap[lang]}</code></pre>
                        </div>

                        <h3 className="top-req-text" id="response-example">Response Example</h3>
                        <div className="api-code-box position-relative" style={{ marginBottom: "40px" }}>
                            <button className="copy-btn" onClick={handleCopyRes}>
                                {copiedRes ? <FiCheck /> : <FiCopy />}
                            </button>
                            <pre style={{ margin: 0 }}><code>{responseExample}</code></pre>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 d-none d-md-block">
                        <div className="api-sidebar">
                            <ul>
                                <li className={activeSection === "topic" ? "active" : ""} onClick={() => scrollToSection("topic")}>Topic</li>
                                <li className={activeSection === "response-params" ? "active" : ""} onClick={() => scrollToSection("response-params")}>Response Parameters</li>
                                <li className={activeSection === "subscribe-example" ? "active" : ""} onClick={() => scrollToSection("subscribe-example")}>Subscribe Example</li>
                                <li className={activeSection === "response-example" ? "active" : ""} onClick={() => scrollToSection("response-example")}>Response Example</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
