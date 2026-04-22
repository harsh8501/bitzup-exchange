import { useState, useRef, useEffect } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FiCopy, FiCheck } from "react-icons/fi";

export const GetAPIKeyInfo = () => {
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
        "id": "13770661",
        "note": "readwrite api key",
        "apiKey": "XXXXXX",
        "readOnly": 0,
        "secret": "",
        "permissions": {
            "ContractTrade": ["Order", "Position"],
            "Wallet": ["AccountTransfer", "SubMemberTransfer"],
            "Derivatives": [],
            "CopyTrading": [],
            "BlockTrade": [],
            "Exchange": [],
            "NFT": [],
            "Affiliate": [],
            "Earn": []
        },
        "ips": ["*"],
        "type": 1,
        "deadlineDay": 66,
        "expiredAt": "2023-12-22T07:20:25Z",
        "createdAt": "2022-10-16T02:24:40Z",
        "unified": 0,
        "uta": 0,
        "userID": 24617703,
        "inviterID": 0,
        "vipLevel": "No VIP",
        "mktMakerLevel": "0",
        "affiliateID": 0,
        "rsaPublicKey": "",
        "isMaster": true,
        "parentUid": "0",
        "kycLevel": "LEVEL_DEFAULT",
        "kycRegion": ""
    },
    "retExtInfo": {},
    "time": 1697525990798
}`;

    const codeMap = {
        HTTP: `GET /v5/user/query-api HTTP/1.1
Host: api.bitzup.com
X-BAPI-API-KEY: xxxxxxxxxxxxxxxxxx
X-BAPI-TIMESTAMP: 1676430842094
X-BAPI-RECV-WINDOW: 5000
X-BAPI-SIGN: XXXXX`,
        Python: `from pybit.unified_trading import HTTP
session = HTTP(
    testnet=True,
    api_key="xxxxxxxxxxxxxxxxxx",
    api_secret="xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
)
print(session.get_api_key_information())`,
        Node: `const { RestClientV5 } = require('bitzup-api');
const client = new RestClientV5({
    testnet: true,
    key: 'xxxxxxxxxxxxxxxxxx',
    secret: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
});
client
    .getQueryApiKey()
    .then((response) => { console.log(response); })
    .catch((error) => { console.error(error); });`,
    };

    return (
        <div className="container-fluid p-0"><div className="api-layout"><div className="row">
            <div className="col-lg-9 col-md-12 api-content" ref={contentRef}>
                <div className="breadcrumb mb-4"><span className="kline-market">User</span><span className="mx-2"><IoIosArrowForward className="kline-arrow" /></span><span className="pill">Get API Key Information</span></div>
                <h1 className="api-title">Get API Key Information</h1>
                <p className="api-desc">Get the information of the api key. Use the api key pending to be checked to call the endpoint. Both master and sub user's api key are applicable.</p>
                <p className="api-desc">Any permission can access this endpoint.</p>
                <div className="api-cover">Requires Authentication</div>
                <h3 className="top-req-text" id="http">HTTP Request</h3>
                <div className="http-path"><span className="method get">GET</span><span className="path">/v5/user/query-api</span></div>
                <h3 className="top-req-text" id="request-params">Request Parameters</h3>
                <div className="api-table-box"><table className="table table-striped api-table mb-0">
                    <thead><tr><th>Parameter</th><th>Required</th><th>Type</th><th>Comments</th></tr></thead>
                    <tbody><tr><td colSpan={4} style={{ textAlign: "center", fontStyle: "italic", color: "#888" }}>None</td></tr></tbody>
                </table></div>
                <h3 className="top-req-text" id="response-params">Response Parameters</h3>
                <div className="api-table-box"><table className="table table-striped api-table mb-0">
                    <thead><tr><th>Parameter</th><th>Type</th><th>Comments</th></tr></thead>
                    <tbody>
                        <tr><td>id</td><td>string</td><td>Unique ID. Internal use</td></tr>
                        <tr><td>note</td><td>string</td><td>The remark</td></tr>
                        <tr><td>apiKey</td><td>string</td><td>Api key</td></tr>
                        <tr><td>readOnly</td><td>integer</td><td><span className="pill">0</span>: Read and Write, <span className="pill">1</span>: Read only</td></tr>
                        <tr><td>secret</td><td>string</td><td>Always <span className="pill">""</span></td></tr>
                        <tr><td>permissions</td><td>Object</td><td>Permission categories</td></tr>
                        <tr><td style={{ paddingLeft: "28px" }}>&gt; ContractTrade</td><td>array</td><td><span className="pill">Order</span>, <span className="pill">Position</span></td></tr>
                        <tr><td style={{ paddingLeft: "28px" }}>&gt; Spot</td><td>array</td><td><span className="pill">LinearTrade</span></td></tr>
                        <tr><td style={{ paddingLeft: "28px" }}>&gt; Wallet</td><td>array</td><td><span className="pill">AccountTransfer</span>, <span className="pill">SubMemberTransfer</span>, etc.</td></tr>
                        <tr><td style={{ paddingLeft: "28px" }}>&gt; Options</td><td>array</td><td><span className="pill">LinearTrade</span></td></tr>
                        <tr><td style={{ paddingLeft: "28px" }}>&gt; Derivatives</td><td>array</td><td><span className="pill">DerivativesTrade</span></td></tr>
                        <tr><td style={{ paddingLeft: "28px" }}>&gt; Exchange</td><td>array</td><td><span className="pill">ExchangeHistory</span></td></tr>
                        <tr><td style={{ paddingLeft: "28px" }}>&gt; Earn</td><td>array</td><td><span className="pill">Earn</span></td></tr>
                        <tr><td>ips</td><td>array</td><td>Bound IP addresses. <span className="pill">["*"]</span> means no restriction</td></tr>
                        <tr><td>type</td><td>integer</td><td><span className="pill">1</span>: personal, <span className="pill">2</span>: connected to 3rd party app</td></tr>
                        <tr><td>deadlineDay</td><td>integer</td><td>Remaining validity days. <span className="pill">0</span>: permanent</td></tr>
                        <tr><td>expiredAt</td><td>string</td><td>Expiration datetime</td></tr>
                        <tr><td>createdAt</td><td>string</td><td>Created datetime</td></tr>
                        <tr><td>unified</td><td>integer</td><td>Deprecated field</td></tr>
                        <tr><td>uta</td><td>integer</td><td><span className="pill">0</span>: Classic Account, <span className="pill">1</span>: UTA</td></tr>
                        <tr><td>userID</td><td>integer</td><td>User ID</td></tr>
                        <tr><td>inviterID</td><td>integer</td><td>Inviter ID (referral)</td></tr>
                        <tr><td>vipLevel</td><td>string</td><td>VIP level</td></tr>
                        <tr><td>mktMakerLevel</td><td>string</td><td>Market maker level. <span className="pill">"0"</span>: not market maker</td></tr>
                        <tr><td>affiliateID</td><td>integer</td><td>Affiliate ID</td></tr>
                        <tr><td>rsaPublicKey</td><td>string</td><td>RSA public key</td></tr>
                        <tr><td>isMaster</td><td>boolean</td><td>Whether is master account api key</td></tr>
                        <tr><td>parentUid</td><td>string</td><td>Parent UID. <span className="pill">"0"</span> for master account</td></tr>
                        <tr><td>kycLevel</td><td>string</td><td><span className="pill">LEVEL_DEFAULT</span>, <span className="pill">LEVEL_1</span>, <span className="pill">LEVEL_2</span></td></tr>
                        <tr><td>kycRegion</td><td>string</td><td>KYC region</td></tr>
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
