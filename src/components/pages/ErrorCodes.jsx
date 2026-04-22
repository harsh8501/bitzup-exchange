import { useState, useEffect, useRef } from "react";
import { IoIosArrowForward } from "react-icons/io";

export const ErrorCodes = () => {
    const contentRef = useRef(null);
    const [activeSection, setActiveSection] = useState("http-code");

    const HEADER_OFFSET = 120;

    const sections = [
        "http-code", "ws-oe-general-code", "uta", "spot-trade",
        "spot-margin-trade", "asset", "user",
    ];

    const scrollToSection = (id) => {
        const container = contentRef.current;
        const el = document.getElementById(id);
        if (!container || !el) return;
        const top = el.offsetTop - container.offsetTop - HEADER_OFFSET;
        container.scrollTo({ top, behavior: "smooth" });
    };

    useEffect(() => {
        if (!contentRef.current) return;
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setActiveSection(entry.target.id);
                });
            },
            { root: contentRef.current, rootMargin: "-30% 0px -60% 0px", threshold: 0 }
        );
        sections.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });
        return () => observer.disconnect();
    }, []);

    const ErrorTable = ({ data }) => (
        <div className="api-table-box">
            <table className="table table-striped api-table mb-0">
                <thead>
                    <tr><th style={{ width: "120px" }}>Code</th><th>Message</th></tr>
                </thead>
                <tbody>
                    {data.map((row, i) => (
                        <tr key={i}><td>{row.code}</td><td>{row.msg}</td></tr>
                    ))}
                </tbody>
            </table>
        </div>
    );

    return (
        <>
            <div className="container-fluid p-0">
                <div className="api-layout">
                    <div className="row">
                        {/* LEFT CONTENT */}
                        <div className="col-lg-9 col-md-12 api-content" ref={contentRef}>
                            <div className="breadcrumb mb-4">
                                <span className="text-mutne">Guide</span>
                                <span className="mx-2"><IoIosArrowForward className="kline-arrow" style={{ verticalAlign: "middle" }} /></span>
                                <span className="pill">Error Codes</span>
                            </div>

                            <h1 className="api-title" style={{ fontSize: "32px", marginBottom: "32px" }}>Error Codes</h1>

                            {/* HTTP Code */}
                            <h2 className="top-req-text" id="http-code">HTTP Code</h2>
                            <ErrorTable data={[
                                { code: "400", msg: "Bad request. Need to send the request with GET / POST (must be capitalized)" },
                                { code: "401", msg: "Invalid request. 1. Need to use the correct key to access; 2. Need to put authentication params in the request header" },
                                { code: "403", msg: "Forbidden request. Possible causes: 1. IP rate limit breached; 2. You send GET request with an empty json body; 3. You are using U.S IP" },
                                { code: "404", msg: "Cannot find path. Possible causes: 1. Wrong path; 2. Category value does not match account mode" },
                                { code: "429", msg: "System level frequency protection. Please retry when encounter this" },
                            ]} />

                            {/* WS OE General code */}
                            <h2 className="top-req-text" id="ws-oe-general-code">WS OE General code</h2>
                            <ErrorTable data={[
                                { code: "10404", msg: "1. op type is not found; 2. category is not correct/supported" },
                                { code: "10019", msg: "ws trade service is restarting, do not accept new request, but the request in the process is not affected. You can build new connection to be routed to normal service" },
                                { code: "20003", msg: "Too frequent requests under the same session" },
                                { code: "20006", msg: "reqId is duplicated" },
                            ]} />

                            {/* UTA */}
                            <h2 className="top-req-text" id="uta">UTA</h2>
                            <ErrorTable data={[
                                { code: "0", msg: "OK" },
                                { code: "-1", msg: "request expired" },
                                { code: "429", msg: "The trading service is experiencing a high server load. Please retry if you encounter this issue." },
                                { code: "-2015", msg: "(Spot) Your api key has expired" },
                                { code: "33004", msg: "(Derivatives) Your api key has expired" },
                                { code: "10000", msg: "Server Timeout" },
                                { code: "10001", msg: "Request parameter error" },
                                { code: "10002", msg: "The request time exceeds the time window range." },
                                { code: "10003", msg: "API key is invalid. Check whether the key and domain are matched, there are 4 env: mainnet, testnet, mainnet-demo, testnet-demo" },
                                { code: "10004", msg: "Error sign, please check your signature generation algorithm." },
                                { code: "10005", msg: "Permission denied, please check your API key permissions." },
                                { code: "10006", msg: 'Too many visits. Internal rate limit system triggered' },
                                { code: "10007", msg: "Authentication failed" },
                                { code: "10008", msg: "API key has been revoked" },
                                { code: "10009", msg: "IP address is not bound to the API key" },
                                { code: "10010", msg: "Unmatched IP, please check your API key's bound IP addresses." },
                                { code: "10011", msg: "API key is invalid" },
                                { code: "10012", msg: "API key is expired" },
                                { code: "10013", msg: "API key is not exist" },
                                { code: "10014", msg: "Invalid duplicate request." },
                                { code: "10016", msg: "Server error." },
                                { code: "10017", msg: "Route not found." },
                                { code: "10018", msg: "Exceeded the IP Rate Limit." },
                                { code: "10024", msg: "Compliance rules triggered" },
                                { code: "10027", msg: "Transactions are banned." },
                                { code: "10028", msg: "The API can only be accessed by unified account users." },
                                { code: "10029", msg: "The requested symbol is invalid, please check symbol whitelist" },
                                { code: "30133", msg: "OTC loan: The symbol you select for USDT Perpetual is not allowed by Institutional Lending" },
                                { code: "30134", msg: "OTC loan: The symbol you select for USDC Contract is not allowed by Institutional Lending" },
                                { code: "30135", msg: "The leverage you select for USDT Perpetual trading cannot exceed the maximum leverage allowed by Institutional Lending." },
                                { code: "30136", msg: "The leverage you select for USDC Perpetual or Futures trading cannot exceed the maximum leverage allowed by Institutional Lending." },
                                { code: "30208", msg: "Failed to submit order(s). The order price is higher than the maximum buying price" },
                                { code: "30209", msg: "Failed to submit order(s). The order price is lower than the minimum selling price." },
                                { code: "30228", msg: "No new positions during delisting" },
                                { code: "40004", msg: "the order is modified during the process of replacing, please check the order status again" },
                                { code: "110001", msg: "Order does not exist" },
                                { code: "110002", msg: "Holding positions and open orders has reached the upper limit." },
                                { code: "110003", msg: "Order price is out of the allowable range" },
                                { code: "110004", msg: "Wallet balance is insufficient" },
                                { code: "110005", msg: "position status" },
                                { code: "110006", msg: "Assets are not enough to cover the handling fee" },
                                { code: "110007", msg: "position status is not in line" },
                                { code: "110008", msg: "Order has been completed or cancelled" },
                                { code: "110009", msg: "The number of stop orders exceeds the maximum allowable limit" },
                                { code: "110010", msg: "Order has been cancelled" },
                                { code: "110011", msg: "Liquidation will be triggered immediately by this adjustment" },
                                { code: "110012", msg: "Available balance is not enough" },
                                { code: "110013", msg: "Cannot set lower risk limit" },
                                { code: "110014", msg: "Available balance is not enough to add margin" },
                                { code: "110015", msg: "Position is in cross margin mode" },
                                { code: "110016", msg: "Modification of margin is not allowed in the current state" },
                                { code: "110017", msg: "Adjusting leverage is not allowed in the current position state" },
                                { code: "110018", msg: "Insufficient available balance" },
                                { code: "110019", msg: "The order does not exist" },
                                { code: "110020", msg: "Order is not active" },
                                { code: "110021", msg: "Position limits exceeded the maximum allowable limit" },
                                { code: "110022", msg: "Order qty has exceeded the limit" },
                                { code: "110023", msg: "This position has already been closed" },
                                { code: "110024", msg: "Not allowed to reduce/change margin" },
                                { code: "110025", msg: "Position is not exists" },
                                { code: "110026", msg: "Requested quantity of contracts exceeds risk limit" },
                                { code: "110027", msg: "Reduce-only rule not satisfied" },
                                { code: "110028", msg: "User setting list does not have this param" },
                                { code: "110029", msg: "Position size is zero" },
                                { code: "110030", msg: "Order qty has exceeded order limit" },
                                { code: "110031", msg: "hedge mode is not available for this category" },
                                { code: "110032", msg: "Hedge mode is not supported in this risk limit" },
                                { code: "110033", msg: "The position is empty, please adjust your risk limit level" },
                                { code: "110034", msg: "Position is not closed. Cannot switch position mode" },
                                { code: "110035", msg: "Position qty is not enough to execute" },
                                { code: "110036", msg: "The expected pos result is 0 when closing a cross position" },
                                { code: "110037", msg: "Reduce-only is not allowed" },
                                { code: "110038", msg: "Order price exceeds the allowable range" },
                                { code: "110039", msg: "Order price exceeds the allowable range (price deviates more than 30% from mark price)" },
                                { code: "110040", msg: "The order will trigger a forced liquidation. Please re-submit the order" },
                                { code: "110041", msg: "Skip liquidation is not allowed when a position or maker order exists" },
                                { code: "110042", msg: "Pre-market contracts currently do not support this operation" },
                                { code: "110043", msg: "Set leverage has not been modified" },
                                { code: "110044", msg: "Insufficient available margin" },
                                { code: "110045", msg: "Insufficient wallet balance" },
                                { code: "110046", msg: "Any adjustments made will trigger immediate liquidation" },
                                { code: "110047", msg: "Risk limit cannot be adjusted due to insufficient available margin" },
                                { code: "110048", msg: "Risk limit cannot be changed at the current state" },
                                { code: "110049", msg: "Ticker hasn't been found for this coin" },
                                { code: "110050", msg: "Coin is not in the current lending list" },
                                { code: "110051", msg: "The user's Multi-collateral loan is in risk or liquidation status, and it is not possible to adjust the leverage" },
                                { code: "110052", msg: "Modification of margin is disabled or not allowed in the current state" },
                                { code: "110053", msg: "The order is not allowed since it will make the cumulative notional exposure exceed the risk limit." },
                                { code: "110054", msg: "This order cannot be set to GTC" },
                                { code: "110055", msg: "reduce-only order is currently not allowed" },
                                { code: "110056", msg: "The current side is not available to create an order" },
                                { code: "110057", msg: "Your order qty exceeds the max limit for this symbol" },
                                { code: "110058", msg: "Take profit and stop loss should not be equal" },
                                { code: "110059", msg: "Risk limit exceeds the limit" },
                                { code: "110060", msg: "The order is not supported in the current contract mode" },
                                { code: "110061", msg: "Order cannot be placed because the current margin mode does not support this action" },
                                { code: "110062", msg: "Take profit / Stop loss not modified" },
                                { code: "110063", msg: "Estimated TP/SL trigger price deviates significantly from the current mark price" },
                                { code: "110064", msg: "Cannot set take profit / stop loss, as the current position is in other mode" },
                                { code: "110065", msg: "Cannot modify the take profit / stop loss of a partially filled partially-closed position" },
                                { code: "110066", msg: "Cannot amend the order due to contract restrictions" },
                                { code: "110067", msg: "Reduce-only not allowed" },
                                { code: "110068", msg: "Limit order only can not cancel order" },
                                { code: "110069", msg: "GTC order only can not cancel order" },
                                { code: "110070", msg: "ETP can not be traded" },
                                { code: "110071", msg: "orderLinkId is duplicated" },
                            ]} />

                            {/* User */}
                            <h2 className="top-req-text" id="user" style={{ borderBottom: "1px solid var(--border-color)", paddingBottom: "12px", marginTop: "40px" }}>User</h2>
                            <ErrorTable data={[
                                { code: "10001", msg: "Request parameter error" },
                                { code: "140001", msg: "API key has expired" },
                                { code: "140002", msg: "API key does not exist" },
                                { code: "140003", msg: "Invalid API key." },
                                { code: "140004", msg: "API key is missing" },
                                { code: "140005", msg: "API key verification failed" },
                                { code: "140006", msg: "Timestamp is invalid" },
                                { code: "140007", msg: "IP is not allowed" },
                                { code: "140008", msg: "Failed to create API key" },
                                { code: "140009", msg: "UID is required" },
                                { code: "140010", msg: "UID limit exceeded" },
                                { code: "140011", msg: "API key already exists" },
                                { code: "140012", msg: "API key permission is not correct" },
                            ]} />
                        </div>

                        <div className="col-lg-3 d-none d-lg-block">
                            <div className="api-sidebar-wrapper" style={{ position: "sticky", top: "100px", borderLeft: "1px solid var(--border-color)", paddingLeft: "20px", maxHeight: "calc(100vh - 120px)", overflowY: "auto" }}>
                                <h5 style={{ fontSize: "12px", textTransform: "uppercase", color: "var(--text-secondary)", marginBottom: "16px", letterSpacing: "1px" }}>On this page</h5>
                                <ul style={{ listStyle: "none", padding: 0 }}>
                                    <li className={activeSection === "http-code" ? "active" : ""} onClick={() => scrollToSection("http-code")} style={{ padding: "6px 0", cursor: "pointer", fontSize: "13px", color: activeSection === "http-code" ? "var(--text-accent)" : "var(--text-secondary)", transition: "all 0.2s" }}>HTTP Code</li>
                                    <li className={activeSection === "ws-oe-general-code" ? "active" : ""} onClick={() => scrollToSection("ws-oe-general-code")} style={{ padding: "6px 0", cursor: "pointer", fontSize: "13px", color: activeSection === "ws-oe-general-code" ? "var(--text-accent)" : "var(--text-secondary)", transition: "all 0.2s" }}>WS OE General code</li>
                                    <li className={activeSection === "uta" ? "active" : ""} onClick={() => scrollToSection("uta")} style={{ padding: "6px 0", cursor: "pointer", fontSize: "13px", color: activeSection === "uta" ? "var(--text-accent)" : "var(--text-secondary)", transition: "all 0.2s" }}>UTA</li>
                                    <li className={activeSection === "asset" ? "active" : ""} onClick={() => scrollToSection("asset")} style={{ padding: "6px 0", cursor: "pointer", fontSize: "13px", color: activeSection === "asset" ? "var(--text-accent)" : "var(--text-secondary)", transition: "all 0.2s" }}>Asset</li>
                                    <li className={activeSection === "user" ? "active" : ""} onClick={() => scrollToSection("user")} style={{ padding: "6px 0", cursor: "pointer", fontSize: "13px", color: activeSection === "user" ? "var(--text-accent)" : "var(--text-secondary)", transition: "all 0.2s" }}>User</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
