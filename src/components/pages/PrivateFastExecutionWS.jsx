import { useState, useEffect, useRef } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FiCopy, FiCheck, FiInfo } from "react-icons/fi";

export const PrivateFastExecutionWS = () => {
    const contentRef = useRef(null);
    const [lang, setLang] = useState("wsJSON");
    const [copied, setCopied] = useState(false);
    const [copiedRes, setCopiedRes] = useState(false);
    const [activeSection, setActiveSection] = useState("info");
    const HEADER_OFFSET = 120;

    const handleCopy = async () => { 
        await navigator.clipboard.writeText(codeMap[lang]); 
        setCopied(true); 
        setTimeout(() => setCopied(false), 1500); 
    };

    const handleCopyRes = async () => { 
        navigator.clipboard.writeText(streamExample); 
        setCopiedRes(true); 
        setTimeout(() => setCopiedRes(false), 1500); 
    };

    const sections = ["info", "response-params", "subscribe-example", "stream-example"];

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

    const streamExample = `{
    "topic": "execution.fast",
    "creationTime": 1716800399338,
    "data": [
        {
            "category": "linear",
            "symbol": "ICPUSDT",
            "execId": "3510f361-0add-5c7b-a2e7-9679810944fc",
            "execPrice": "12.015",
            "execQty": "3000",
            "orderId": "443d63fa-b4c3-4297-b7b1-23bca88b04dc",
            "isMaker": false,
            "orderLinkId": "test-00001",
            "side": "Sell",
            "execTime": "1716800399334",
            "seq": 34771365464
        }
    ]
}`;

    const codeMap = {
        wsJSON: `{
    "op": "subscribe",
    "args": [
        "execution.fast"
    ]
}`,
    };

    return (
        <div className="container-fluid p-0">
            <div className="api-layout">
                <div className="row">
                    <div className="col-lg-9 col-md-8 api-content" ref={contentRef}>
                        <div className="breadcrumb mb-4">
                            <span className="kline-market">WebSocket Private</span>
                            <span className="mx-2"><IoIosArrowForward className="kline-arrow" /></span>
                            <span className="pill">Fast Execution</span>
                        </div>
                        <h1 className="api-title">Fast Execution</h1>
                        <p className="api-desc">
                            Fast execution stream significantly reduces data latency compared original "execution" stream. 
                            However, it pushes limited execution type of trades, and fewer data fields.
                        </p>

                        <div id="info">
                            <p className="api-desc"><strong>All-In-One Topic:</strong> <span className="pill">execution.fast</span></p>
                            <p className="api-desc"><strong>Categorised Topic:</strong> 
                                <span className="pill">execution.fast.linear</span>
                            </p>

                            <div className="api-caution mb-5 api-info-box">
                                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
                                    <FiInfo size={20} color="var(--text-accent)" />
                                    <strong style={{ textTransform: "uppercase", fontSize: "14px" }} className="api-info-title">INFO</strong>
                                </div>
                                <ul className="mb-0" style={{ color: "var(--text-secondary)", listStyleType: "disc", paddingLeft: "20px" }}>
                                    <li>Supports all Perps, Futures, Spot and Options exceution</li>
                                    <li>You can only receive <span className="pill">execType=Trade</span> update</li>
                                </ul>
                            </div>
                        </div>

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
                                    <tr><td>creationTime</td><td>number</td><td>Data created timestamp (ms)</td></tr>
                                    <tr><td>data</td><td>array</td><td>Object</td></tr>
                                    <tr><td>&gt; category</td><td>string</td><td>Product type <span className="pill">linear</span></td></tr>
                                    <tr><td>&gt; symbol</td><td>string</td><td>Symbol name</td></tr>
                                    <tr><td>&gt; orderId</td><td>string</td><td>Order ID</td></tr>
                                    <tr><td>&gt; isMaker</td><td>boolean</td><td><span className="pill">true</span>: Maker, <span className="pill">false</span>: Taker</td></tr>
                                    <tr><td>&gt; orderLinkId</td><td>string</td><td>
                                        User customized order ID
                                        <ul style={{ marginTop: "8px", paddingLeft: "20px", listStyleType: "disc" }}>
                                            <li>maker trade is always ""</li>
                                            <li>If a maker order in the orderbook is converted to taker (by price amend), orderLinkId is also ""</li>
                                            <li>For option: maker trade is always "", taker trade is always orderLinkId</li>
                                        </ul>
                                    </td></tr>
                                    <tr><td>&gt; execId</td><td>string</td><td>Execution ID</td></tr>
                                    <tr><td>&gt; execPrice</td><td>string</td><td>Execution price</td></tr>
                                    <tr><td>&gt; execQty</td><td>string</td><td>Execution qty</td></tr>
                                    <tr><td>&gt; side</td><td>string</td><td>Side. <span className="pill">Buy</span>, <span className="pill">Sell</span></td></tr>
                                    <tr><td>&gt; execTime</td><td>string</td><td>Executed timestamp (ms)</td></tr>
                                    <tr><td>&gt; seq</td><td>long</td><td>
                                        Cross sequence, used to associate each fill and each position update
                                        <ul style={{ marginTop: "8px", paddingLeft: "20px", listStyleType: "disc" }}>
                                            <li>The seq will be the same when conclude multiple transactions at the same time</li>
                                            <li>Different symbols may have the same seq, please use seq + symbol to check unique</li>
                                        </ul>
                                    </td></tr>
                                </tbody>
                            </table>
                        </div>

                        <h3 className="top-req-text" id="subscribe-example">Subscribe Example</h3>
                        <div className="lang-tabs">
                            {["wsJSON"].map((t) => (
                                <button key={t} className="active">{t === "wsJSON" ? "WebSocket" : t}</button>
                            ))}
                        </div>
                        <div className="api-code-box position-relative" style={{ marginBottom: "40px" }}>
                            <button className="copy-btn" onClick={handleCopy}>
                                {copied ? <FiCheck /> : <FiCopy />}
                            </button>
                            <pre style={{ margin: 0 }}><code>{codeMap[lang]}</code></pre>
                        </div>

                        <h3 className="top-req-text" id="stream-example">Stream Example</h3>
                        <div className="api-code-box position-relative" style={{ marginBottom: "40px" }}>
                            <button className="copy-btn" onClick={handleCopyRes}>
                                {copiedRes ? <FiCheck /> : <FiCopy />}
                            </button>
                            <pre style={{ margin: 0 }}><code>{streamExample}</code></pre>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 d-none d-md-block">
                        <div className="api-sidebar">
                            <ul>
                                <li className={activeSection === "info" ? "active" : ""} onClick={() => scrollToSection("info")}>Info</li>
                                <li className={activeSection === "response-params" ? "active" : ""} onClick={() => scrollToSection("response-params")}>Response Parameters</li>
                                <li className={activeSection === "subscribe-example" ? "active" : ""} onClick={() => scrollToSection("subscribe-example")}>Subscribe Example</li>
                                <li className={activeSection === "stream-example" ? "active" : ""} onClick={() => scrollToSection("stream-example")}>Stream Example</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
