import { useState, useEffect, useRef } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FiCopy, FiCheck } from "react-icons/fi";

export const PrivateGreekWS = () => {
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
    "id": "592324fa945a30-2603-49a5-b865-21668c29f2a6",
    "topic": "greeks",
    "creationTime": 1672364262482,
    "data": [
        {
            "baseCoin": "ETH",
            "totalDelta": "0.06999986",
            "totalGamma": "-0.00000001",
            "totalVega": "-0.00000024",
            "totalTheta": "0.00001314"
        }
    ]
}`;

    const codeMap = {
        wsJSON: `{
    "op": "subscribe",
    "args": [
        "greeks"
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

ws.greek_stream(callback=handle_message)

while True:
    sleep(1)`,
    };

    return (
        <div className="container-fluid p-0"><div className="api-layout"><div className="row">
            <div className="col-lg-9 col-md-8 api-content" ref={contentRef}>
                <div className="breadcrumb mb-4"><span className="kline-market">WebSocket Private</span><span className="mx-2"><IoIosArrowForward className="kline-arrow" /></span><span className="pill">Greek</span></div>
                <h1 className="api-title">Greek</h1>
                <p className="api-desc">Subscribe to the greeks stream to see changes to your greeks data in real-time. <span className="pill">option</span> only.</p>

                <h3 className="top-req-text" id="topic">Topic</h3>
                <p className="api-desc"><strong>Topic:</strong> <span className="pill">greeks</span></p>

                <h3 className="top-req-text" id="response-params">Response Parameters</h3>
                <div className="api-table-box"><table className="table table-striped api-table mb-0">
                    <thead><tr><th>Parameter</th><th>Type</th><th>Comments</th></tr></thead>
                    <tbody>
                        <tr><td>baseCoin</td><td>string</td><td>Base coin</td></tr>
                        <tr><td>totalDelta</td><td>string</td><td>Delta value</td></tr>
                        <tr><td>totalGamma</td><td>string</td><td>Gamma value</td></tr>
                        <tr><td>totalVega</td><td>string</td><td>Vega value</td></tr>
                        <tr><td>totalTheta</td><td>string</td><td>Theta value</td></tr>
                    </tbody>
                </table></div>

                <h3 className="top-req-text" id="subscribe-example">Subscribe Example</h3>
                <div className="lang-tabs">{["wsJSON", "Python"].map((t) => (<button key={t} className={lang === t ? "active" : ""} onClick={() => setLang(t)}>{t === "wsJSON" ? "WebSocket" : t}</button>))}</div>
                <div className="api-code-box position-relative" style={{ marginBottom: "40px" }}><button className="copy-btn" onClick={handleCopy}>{copied ? <FiCheck /> : <FiCopy />}</button><pre style={{ margin: 0 }}><code >{codeMap[lang]}</code></pre></div>

                <h3 className="top-req-text" id="stream-example">Stream Example</h3>
                <div className="api-code-box position-relative" style={{ marginBottom: "40px" }}><button className="copy-btn" onClick={handleCopyRes}>{copiedRes ? <FiCheck /> : <FiCopy />}</button><pre><span className="pill">{streamExample}</span></pre></div>
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
