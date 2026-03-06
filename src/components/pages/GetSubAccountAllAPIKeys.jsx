import { useState, useRef, useEffect } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FiCopy, FiCheck } from "react-icons/fi";

export const GetSubAccountAllAPIKeys = () => {
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
        "list": [
            {
                "id": "123456",
                "ips": ["*"],
                "apiKey": "XXXXXX",
                "note": "test api key",
                "status": 1,
                "expiredAt": "2024-12-22T07:20:25Z",
                "createdAt": "2023-10-16T02:24:40Z",
                "type": 1,
                "permissions": {
                    "ContractTrade": ["Order", "Position"],
                    "Spot": ["SpotTrade"],
                    "Wallet": ["AccountTransfer"],
                    "Options": [],
                    "Derivatives": [],
                    "CopyTrading": [],
                    "BlockTrade": [],
                    "Exchange": [],
                    "NFT": [],
                    "Affiliate": []
                },
                "secret": "",
                "readOnly": 0,
                "deadlineDay": 90,
                "flag": "hmac"
            }
        ]
    },
    "retExtInfo": {},
    "time": 1697525990798
}`;

    const codeMap = {
        HTTP: `GET /v5/user/sub-apikeys?subMemberId=53888000&limit=10 HTTP/1.1
Host: api.bybit.com
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
print(session.get_sub_account_all_api_keys(
    subMemberId="53888000",
))`,
        Node: `const { RestClientV5 } = require('bybit-api');
const client = new RestClientV5({
    testnet: true,
    key: 'xxxxxxxxxxxxxxxxxx',
    secret: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
});
client
    .getSubAccountAllApiKeys({ subMemberId: '53888000' })
    .then((response) => { console.log(response); })
    .catch((error) => { console.error(error); });`,
    };

    return (
        <div className="container-fluid p-0"><div className="api-layout"><div className="row">
            <div className="col-lg-9 col-md-12 api-content" ref={contentRef}>
                <div className="breadcrumb mb-4"><span className="kline-market">User</span><span className="mx-2"><IoIosArrowForward className="kline-arrow" /></span><span className="pill">Get Sub Account All API Keys</span></div>
                <h1 className="api-title">Get Sub Account All API Keys</h1>
                <p className="api-desc">Query all api keys information of a sub UID.</p>
                <div className="api-cover">Requires Authentication</div>
                <h3 className="top-req-text" id="http">HTTP Request</h3>
                <div className="http-path"><span className="method get">GET</span><span className="path">/v5/user/sub-apikeys</span></div>
                <h3 className="top-req-text" id="request-params">Request Parameters</h3>
                <div className="api-table-box"><table className="table table-striped api-table mb-0">
                    <thead><tr><th>Parameter</th><th>Required</th><th>Type</th><th>Comments</th></tr></thead>
                    <tbody>
                        <tr><td>subMemberId</td><td><strong>true</strong></td><td>string</td><td>Sub UID</td></tr>
                        <tr><td>limit</td><td>false</td><td>integer</td><td>Limit. Default: 20, Max: 20</td></tr>
                        <tr><td>cursor</td><td>false</td><td>string</td><td>Cursor for pagination</td></tr>
                    </tbody>
                </table></div>
                <h3 className="top-req-text" id="response-params">Response Parameters</h3>
                <div className="api-table-box"><table className="table table-striped api-table mb-0">
                    <thead><tr><th>Parameter</th><th>Type</th><th>Comments</th></tr></thead>
                    <tbody>
                        <tr><td>list</td><td>array</td><td>API key list</td></tr>
                        <tr><td style={{ paddingLeft: "28px" }}>&gt; id</td><td>string</td><td>Unique ID</td></tr>
                        <tr><td style={{ paddingLeft: "28px" }}>&gt; ips</td><td>array</td><td>Bound IP addresses</td></tr>
                        <tr><td style={{ paddingLeft: "28px" }}>&gt; apiKey</td><td>string</td><td>Api key</td></tr>
                        <tr><td style={{ paddingLeft: "28px" }}>&gt; note</td><td>string</td><td>The remark</td></tr>
                        <tr><td style={{ paddingLeft: "28px" }}>&gt; status</td><td>integer</td><td><code>1</code>: permanent, <code>2</code>: expired, <code>3</code>: within 30 days of expiration, <code>4</code>: active</td></tr>
                        <tr><td style={{ paddingLeft: "28px" }}>&gt; expiredAt</td><td>string</td><td>Expiration datetime</td></tr>
                        <tr><td style={{ paddingLeft: "28px" }}>&gt; createdAt</td><td>string</td><td>Created datetime</td></tr>
                        <tr><td style={{ paddingLeft: "28px" }}>&gt; type</td><td>integer</td><td><code>1</code>: personal, <code>2</code>: connected to 3rd party app</td></tr>
                        <tr><td style={{ paddingLeft: "28px" }}>&gt; permissions</td><td>Object</td><td>Permission categories</td></tr>
                        <tr><td style={{ paddingLeft: "28px" }}>&gt; secret</td><td>string</td><td>Always <code>""</code></td></tr>
                        <tr><td style={{ paddingLeft: "28px" }}>&gt; readOnly</td><td>integer</td><td><code>0</code>: Read and Write, <code>1</code>: Read only</td></tr>
                        <tr><td style={{ paddingLeft: "28px" }}>&gt; deadlineDay</td><td>integer</td><td>Remaining validity days</td></tr>
                        <tr><td style={{ paddingLeft: "28px" }}>&gt; flag</td><td>string</td><td><code>hmac</code>, <code>rsa</code></td></tr>
                    </tbody>
                </table></div>
                <h3 className="top-req-text" id="request-example">Request Example</h3>
                <div className="lang-tabs">{["HTTP", "Python", "Node"].map((t) => (<button key={t} className={lang === t ? "active" : ""} onClick={() => setLang(t)}>{t}</button>))}</div>
                <div className="api-code-box position-relative"><button className="copy-btn" onClick={handleCopy}>{copied ? <FiCheck /> : <FiCopy />}</button><pre><code>{codeMap[lang]}</code></pre></div>
                <h3 className="top-req-text" id="response-example">Response Example</h3>
                <div className="api-code-box position-relative"><button className="copy-btn" onClick={handleCopyRes}>{copiedRes ? <FiCheck /> : <FiCopy />}</button><pre><code>{responseCode}</code></pre></div>
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
