import { useState, useRef, useEffect } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FiCopy, FiCheck } from "react-icons/fi";

export const GetSubUIDList = () => {
    const contentRef = useRef(null);
    const [lang, setLang] = useState("HTTP");
    const [copied, setCopied] = useState(false);
    const [copiedRes, setCopiedRes] = useState(false);
    const [activeSection, setActiveSection] = useState("http");
    const HEADER_OFFSET = 120;
    const handleCopy = async () => { await navigator.clipboard.writeText(codeMap[lang]); setCopied(true); setTimeout(() => setCopied(false), 1500); };
    const handleCopyRes = async () => { navigator.clipboard.writeText(responseCode); setCopiedRes(true); setTimeout(() => setCopiedRes(false), 1500); };
    const sections = ["http", "request-params", "response-params", "request-example", "response-example"];
    const scrollToSection = (id) => { const container = contentRef.current; const el = document.getElementById(id); if (!container || !el) return; const top = el.offsetTop - container.offsetTop - HEADER_OFFSET; container.scrollTo({ top, behavior: "smooth" }); };
    useEffect(() => { if (!contentRef.current) return; const observer = new IntersectionObserver((entries) => { entries.forEach((entry) => { if (entry.isIntersecting) setActiveSection(entry.target.id); }); }, { root: contentRef.current, rootMargin: "-30% 0px -60% 0px", threshold: 0 }); sections.forEach((id) => { const el = document.getElementById(id); if (el) observer.observe(el); }); return () => observer.disconnect(); }, []);

    const responseCode = `{
    "retCode": 0,
    "retMsg": "",
    "result": {
        "subMembers": [
            {
                "uid": "106314365",
                "username": "xxxx02",
                "memberType": 1,
                "status": 1,
                "remark": "",
                "accountMode": 5
            },
            {
                "uid": "106279879",
                "username": "xxxx01",
                "memberType": 1,
                "status": 1,
                "remark": "",
                "accountMode": 6
            }
        ]
    },
    "retExtInfo": {},
    "time": 1760388036728
}`;

    const codeMap = {
        HTTP: `GET /v5/user/query-sub-members HTTP/1.1
Host: api.bitzup.com
X-BAPI-SIGN: XXXXX
X-BAPI-API-KEY: xxxxxxxxxxxxxxxxxx
X-BAPI-TIMESTAMP: 1676430318405
X-BAPI-RECV-WINDOW: 5000`,
        Python: `from pybit.unified_trading import HTTP
session = HTTP(
    testnet=True,
    api_key="xxxxxxxxxxxxxxxxxx",
    api_secret="xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
)
print(session.get_sub_uid())`,
        Node: `const { RestClientV5 } = require('bitzup-api');
const client = new RestClientV5({
    testnet: true,
    key: 'xxxxxxxxxxxxxxxxxx',
    secret: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
});
client
    .getSubUIDList()
    .then((response) => { console.log(response); })
    .catch((error) => { console.error(error); });`,
    };

    return (
        <div className="container-fluid p-0"><div className="api-layout"><div className="row">
            <div className="col-lg-9 col-md-12 api-content" ref={contentRef}>
                <div className="breadcrumb mb-4"><span className="kline-market">User</span><span className="mx-2"><IoIosArrowForward className="kline-arrow" /></span><span className="pill">Get Sub UID List (Limited)</span></div>
                <h1 className="api-title">Get Sub UID List (Limited)</h1>
                <p className="api-desc">Get at most 10k sub UID of master account. Use master user's api key only.</p>
                <p className="api-desc">The API key must have one of the below permissions in order to call this endpoint.</p>
                <ul className="text-white mb-3"><li>master API key: "Account Transfer", "Subaccount Transfer", "Withdrawal"</li></ul>
                <div className="api-cover">Requires Authentication</div>
                <h3 className="top-req-text" id="http">HTTP Request</h3>
                <div className="http-path"><span className="method get">GET</span><span className="path">/v5/user/query-sub-members</span></div>
                <h3 className="top-req-text" id="request-params">Request Parameters</h3>
                <div className="api-table-box"><table className="table table-striped api-table mb-0">
                    <thead><tr><th>Parameter</th><th>Required</th><th>Type</th><th>Comments</th></tr></thead>
                    <tbody>
                        <tr><td colSpan={4} style={{ textAlign: "center", fontStyle: "italic", color: "#888" }}>None</td></tr>
                    </tbody>
                </table></div>
                <h3 className="top-req-text" id="response-params">Response Parameters</h3>
                <div className="api-table-box"><table className="table table-striped api-table mb-0">
                    <thead><tr><th>Parameter</th><th>Type</th><th>Comments</th></tr></thead>
                    <tbody>
                        <tr><td>subMembers</td><td>array</td><td>Object</td></tr>
                        <tr><td style={{ paddingLeft: "28px" }}>&gt; uid</td><td>string</td><td>Sub UID</td></tr>
                        <tr><td style={{ paddingLeft: "28px" }}>&gt; username</td><td>string</td><td>Username. 6-16 characters</td></tr>
                        <tr><td style={{ paddingLeft: "28px" }}>&gt; memberType</td><td>integer</td><td><span className="pill">1</span>: normal sub account, <span className="pill">6</span>: custodial sub account</td></tr>
                        <tr><td style={{ paddingLeft: "28px" }}>&gt; status</td><td>integer</td><td><span className="pill">1</span>: normal, <span className="pill">2</span>: login banned, <span className="pill">4</span>: frozen</td></tr>
                        <tr><td style={{ paddingLeft: "28px" }}>&gt; remark</td><td>string</td><td>Remark</td></tr>
                        <tr><td style={{ paddingLeft: "28px" }}>&gt; accountMode</td><td>integer</td><td><span className="pill">1</span>: Classic Account, <span className="pill">3</span>: UTA1.0, <span className="pill">4</span>: UTA1.0 Pro, <span className="pill">5</span>: UTA2.0, <span className="pill">6</span>: UTA2.0 Pro</td></tr>
                    </tbody>
                </table></div>
                <h3 className="top-req-text" id="request-example">Request Example</h3>
                <div className="lang-tabs">{["HTTP", "Python", "Node"].map((t) => (<button key={t} className={lang === t ? "active" : ""} onClick={() => setLang(t)}>{t}</button>))}</div>
                <div className="api-code-box position-relative" style={{ marginBottom: "40px" }}><button className="copy-btn" onClick={handleCopy}>{copied ? <FiCheck /> : <FiCopy />}</button><pre style={{ margin: 0 }}><code >{codeMap[lang]}</code></pre></div>
                <h3 className="top-req-text" id="response-example">Response Example</h3>
                <div className="api-code-box position-relative" style={{ marginBottom: "40px" }}><button className="copy-btn" onClick={handleCopyRes}>{copiedRes ? <FiCheck /> : <FiCopy />}</button><pre style={{ margin: 0 }}><code >{responseCode}</code></pre></div>
            </div>
            <div className="col-lg-3 col-md-4 d-none d-md-block"><div className="api-sidebar"><ul>
                <li className={activeSection === "http" ? "active" : ""} onClick={() => scrollToSection("http")}>HTTP Request</li>
                <li className={activeSection === "request-params" ? "active" : ""} onClick={() => scrollToSection("request-params")}>Request Parameters</li>
                <li className={activeSection === "response-params" ? "active" : ""} onClick={() => scrollToSection("response-params")}>Response Parameters</li>
                <li className={activeSection === "request-example" ? "active" : ""} onClick={() => scrollToSection("request-example")}>Request Example</li>
                <li className={activeSection === "response-example" ? "active" : ""} onClick={() => scrollToSection("response-example")}>Response Example</li>
            </ul></div></div>
        </div></div></div>
    );
};
