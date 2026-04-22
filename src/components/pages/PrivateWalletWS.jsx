import { useState, useEffect, useRef } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FiCopy, FiCheck } from "react-icons/fi";

export const PrivateWalletWS = () => {
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
    "id": "592324d2bce751-ad38-48eb-8f42-4671d1fb4d4e",
    "topic": "wallet",
    "creationTime": 1700034722104,
    "data": [
        {
            "accountIMRate": "0",
            "accountIMRateByMp": "0",
            "accountMMRate": "0",
            "accountMMRateByMp": "0",
            "totalEquity": "10262.91335023",
            "totalWalletBalance": "9684.46297164",
            "totalMarginBalance": "9684.46297164",
            "totalAvailableBalance": "9556.6056555",
            "totalPerpUPL": "0",
            "totalInitialMargin": "0",
            "totalInitialMarginByMp": "0",
            "totalMaintenanceMargin": "0",
            "totalMaintenanceMarginByMp": "0",
            "coin": [
                {
                    "coin": "BTC",
                    "equity": "0.00102964",
                    "usdValue": "36.70759517",
                    "walletBalance": "0.00102964",
                    "availableToWithdraw": "0.00102964",
                    "availableToBorrow": "",
                    "borrowAmount": "0",
                    "accruedInterest": "0",
                    "totalOrderIM": "",
                    "totalPositionIM": "",
                    "totalPositionMM": "",
                    "unrealisedPnl": "0",
                    "cumRealisedPnl": "-0.00000973",
                    "bonus": "0",
                    "collateralSwitch": true,
                    "marginCollateral": true,
                    "locked": "0",
                    "hedgingQty": "0.01592413",
                    "borrow": "0"
                }
            ],
            "accountLTV": "0",
            "accountType": "UNIFIED"
        }
    ]
}`;

    const codeMap = {
        wsJSON: `{
    "op": "subscribe",
    "args": [
        "wallet"
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

ws.wallet_stream(callback=handle_message)

while True:
    sleep(1)`,
    };

    return (
        <div className="container-fluid p-0"><div className="api-layout"><div className="row">
            <div className="col-lg-9 col-md-8 api-content" ref={contentRef}>
                <div className="breadcrumb mb-4"><span className="kline-market">WebSocket Private</span><span className="mx-2"><IoIosArrowForward className="kline-arrow" /></span><span className="pill">Wallet</span></div>
                <h1 className="api-title">Wallet</h1>
                <p className="api-desc">Subscribe to the wallet stream to see changes to your wallet in real-time.</p>
                <ul className="text-white mb-3">
                    <li>There is no snapshot event given at the time when the subscription is successful</li>
                    <li>The unrealised PnL change does not trigger an event</li>
                </ul>

                <h3 className="top-req-text" id="topic">Topic</h3>
                <p className="api-desc"><strong>Topic:</strong> <span className="pill">wallet</span></p>

                <h3 className="top-req-text" id="response-params">Response Parameters</h3>
                <div className="api-table-box"><table className="table table-striped api-table mb-0">
                    <thead><tr><th>Parameter</th><th>Type</th><th>Comments</th></tr></thead>
                    <tbody>
                        <tr><td>accountType</td><td>string</td><td>Account type. <span className="pill">UNIFIED</span></td></tr>
                        <tr><td>accountIMRate</td><td>string</td><td>Account initial margin rate</td></tr>
                        <tr><td>accountMMRate</td><td>string</td><td>Account maintenance margin rate</td></tr>
                        <tr><td>totalEquity</td><td>string</td><td>Equity of account converted to usd</td></tr>
                        <tr><td>totalWalletBalance</td><td>string</td><td>Wallet balance of account converted to usd</td></tr>
                        <tr><td>totalMarginBalance</td><td>string</td><td>Margin balance of account converted to usd</td></tr>
                        <tr><td>totalAvailableBalance</td><td>string</td><td>Available balance of account converted to usd</td></tr>
                        <tr><td>totalPerpUPL</td><td>string</td><td>Perp UPL of account converted to usd</td></tr>
                        <tr><td>totalInitialMargin</td><td>string</td><td>Initial margin of account converted to usd</td></tr>
                        <tr><td>totalMaintenanceMargin</td><td>string</td><td>Maintenance margin of account converted to usd</td></tr>
                        <tr><td>accountLTV</td><td>string</td><td>Account LTV</td></tr>
                        <tr><td>accountIMRateByMp</td><td>string</td><td>Account initial margin rate by mark price</td></tr>
                        <tr><td>accountMMRateByMp</td><td>string</td><td>Account maintenance margin rate by mark price</td></tr>
                        <tr><td>totalInitialMarginByMp</td><td>string</td><td>Total initial margin by mark price</td></tr>
                        <tr><td>totalMaintenanceMarginByMp</td><td>string</td><td>Total maintenance margin by mark price</td></tr>
                        <tr><td colSpan={3} style={{ fontWeight: "bold", backgroundColor: "rgba(255,255,255,0.05)" }}>coin (array)</td></tr>
                        <tr><td>coin</td><td>string</td><td>Coin name</td></tr>
                        <tr><td>equity</td><td>string</td><td>Equity of current coin</td></tr>
                        <tr><td>usdValue</td><td>string</td><td>USD value of current coin</td></tr>
                        <tr><td>walletBalance</td><td>string</td><td>Wallet balance of current coin</td></tr>
                        <tr><td>availableToWithdraw</td><td>string</td><td>Available amount to withdraw</td></tr>
                        <tr><td>availableToBorrow</td><td>string</td><td>Available amount to borrow</td></tr>
                        <tr><td>borrowAmount</td><td>string</td><td>Borrow amount of current coin</td></tr>
                        <tr><td>accruedInterest</td><td>string</td><td>Accrued interest</td></tr>
                        <tr><td>totalOrderIM</td><td>string</td><td>Pre-occupied margin for order</td></tr>
                        <tr><td>totalPositionIM</td><td>string</td><td>Sum of initial margin of all positions</td></tr>
                        <tr><td>totalPositionMM</td><td>string</td><td>Sum of maintenance margin of all positions</td></tr>
                        <tr><td>unrealisedPnl</td><td>string</td><td>Unrealised PnL</td></tr>
                        <tr><td>cumRealisedPnl</td><td>string</td><td>Cumulative realised PnL</td></tr>
                        <tr><td>bonus</td><td>string</td><td>Bonus</td></tr>
                        <tr><td>collateralSwitch</td><td>boolean</td><td>Whether it can be used as a margin collateral currency</td></tr>
                        <tr><td>marginCollateral</td><td>boolean</td><td>Whether the collateral is turned on by user</td></tr>
                        <tr><td>locked</td><td>string</td><td>Locked balance due to the Open order</td></tr>
                        <tr><td>hedgingQty</td><td>string</td><td>Hedging qty</td></tr>
                        <tr><td>borrow</td><td>string</td><td>Borrow amount</td></tr>
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
