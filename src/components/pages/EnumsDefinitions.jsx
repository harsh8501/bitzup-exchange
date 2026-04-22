import { useState, useEffect, useRef } from "react";
import { IoIosArrowForward } from "react-icons/io";

export const EnumsDefinitions = () => {
    const contentRef = useRef(null);
    const [activeSection, setActiveSection] = useState("locale");

    const HEADER_OFFSET = 120;

    const sections = [
        "locale", "announcementType", "announcementTag", "category", "orderStatus",
        "timeInForce", "createType", "execType", "orderType", "stopOrderType",
        "tickDirection", "interval", "intervalTime", "positionIdx", "positionStatus",
        "rejectReason", "accountType", "transferStatus", "depositStatus",
        "withdrawStatus", "triggerBy", "cancelType",
        "dataRecordingPeriod", "contractType", "status", "symbolType",
        "curAuctionPhase", "marginTrading", "copyTrading",
        "type-uta-translog", "type-contract-translog",
        "unifiedMarginStatus", "convertAccountType", "symbol", "vipLevel",
        "adlRankIndicator", "smpType", "product", "state", "serviceTypes",
        "sbe-orderStatus",
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

    const EnumSection = ({ id, title, children }) => (
        <>
            <h3 className="top-req-text" id={id}>{title}</h3>
            {children}
        </>
    );

    const EnumList = ({ items }) => (
        <ul style={{ listStyle: "none", padding: 0 }}>
            {items.map((item, i) => (
                <li key={i} style={{ marginBottom: "12px", display: "flex", alignItems: "flex-start", gap: "12px" }}>
                    <span className="pill" style={{ background: "var(--accent-neon-dim)", color: "var(--text-accent)", border: "1px solid var(--text-accent-dim)", padding: "2px 8px", borderRadius: "4px", fontSize: "12px", whiteSpace: "nowrap" }}>{item.value}</span> 
                    {item.desc && <span style={{ color: "var(--text-secondary)", fontSize: "14px", lineHeight: "1.6" }}>{item.desc}</span>}
                </li>
            ))}
        </ul>
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
                                <span className="pill">Enums Definitions</span>
                            </div>
                            <h1 className="api-title" style={{ fontSize: "32px", marginBottom: "32px" }}>Enums Definitions</h1>

                            {/* locale */}
                            <EnumSection id="locale" title="locale">
                                <EnumList items={[
                                    { value: "de-DE" }, { value: "en-US" }, { value: "es-AR" }, { value: "es-ES" }, { value: "es-MX" },
                                    { value: "fr-FR" }, { value: "kk-KZ" }, { value: "id-ID" }, { value: "uk-UA" }, { value: "ja-JP" },
                                    { value: "ru-RU" }, { value: "th-TH" }, { value: "pt-BR" }, { value: "tr-TR" }, { value: "vi-VN" },
                                    { value: "zh-TW" }, { value: "ar-SA" }, { value: "hi-IN" }, { value: "fil-PH" },
                                ]} />
                            </EnumSection>

                            {/* announcementType */}
                            <EnumSection id="announcementType" title="announcementType">
                                <EnumList items={[
                                    { value: "new_crypto" }, { value: "latest_bitzup_news" }, { value: "delistings" },
                                    { value: "latest_activities" }, { value: "product_updates" }, { value: "maintenance_updates" },
                                    { value: "new_fiat_listings" }, { value: "other" },
                                ]} />
                            </EnumSection>

                            {/* announcementTag */}
                            <EnumSection id="announcementTag" title="announcementTag">
                                <EnumList items={[
                                    { value: "Derivatives" }, { value: "BTC" }, { value: "ETH" },
                                    { value: "USDC" }, { value: "USDT" },
                                    { value: "Upgrades" }, { value: "Futures" },
                                    { value: "Institutions" }, { value: "Copy Trading" },
                                    { value: "Unified Trading Account" },
                                ]} />
                            </EnumSection>

                            {/* category */}
                            <EnumSection id="category" title="category">
                                <EnumList items={[
                                    { value: "linear", desc: "USDT perpetual, USDT Futures and USDC contract, including USDC perp, USDC futures" },
                                ]} />
                            </EnumSection>

                            {/* orderStatus */}
                            <EnumSection id="orderStatus" title="orderStatus">
                                <p><strong>open status</strong></p>
                                <EnumList items={[
                                    { value: "New", desc: "order has been placed successfully" },
                                    { value: "PartiallyFilled" },
                                    { value: "Untriggered", desc: "Conditional orders are created" },
                                ]} />
                                <p><strong>closed status</strong></p>
                                <EnumList items={[
                                    { value: "Rejected" },

                                    { value: "Filled" },
                                    { value: "Cancelled", desc: "In derivatives, orders with this status may have an executed qty" },
                                    { value: "Triggered", desc: "instantaneous state for conditional orders from Untriggered to New" },
                                    { value: "Deactivated", desc: "UTA: Spot tp/sl order, conditional order, OCO order are cancelled before they are triggered" },
                                ]} />
                            </EnumSection>

                            {/* timeInForce */}
                            <EnumSection id="timeInForce" title="timeInForce">
                                <EnumList items={[
                                    { value: "GTC", desc: "GoodTillCancel" },
                                    { value: "IOC", desc: "ImmediateOrCancel" },
                                    { value: "FOK", desc: "FillOrKill" },
                                    { value: "PostOnly" },
                                ]} />

                            </EnumSection>

                            {/* createType */}
                            <EnumSection id="createType" title="createType">
                                <EnumList items={[
                                    { value: "CreateByUser" },
                                    { value: "CreateByFutureSpread", desc: "Spread order" },
                                    { value: "CreateByAdminClosing" },
                                    { value: "CreateBySettle", desc: "USDC Futures delivery; position closed as a result of the delisting of a contract" },
                                    { value: "CreateByStopOrder", desc: "Futures conditional order" },
                                    { value: "CreateByTakeProfit", desc: "Futures take profit order" },
                                    { value: "CreateByPartialTakeProfit", desc: "Futures partial take profit order" },
                                    { value: "CreateByStopLoss", desc: "Futures stop loss order" },
                                    { value: "CreateByPartialStopLoss", desc: "Futures partial stop loss order" },
                                    { value: "CreateByTrailingStop", desc: "Futures trailing stop order" },
                                    { value: "CreateByTrailingProfit", desc: "Futures trailing take profit order" },
                                    { value: "CreateByLiq", desc: "Laddered liquidation to reduce the required maintenance margin" },
                                    { value: "CreateByTakeOver_PassThrough", desc: "If the position is still subject to liquidation, the position shall be taken over by the liquidation engine and closed at the bankruptcy price." },
                                    { value: "CreateByAdl_PassThrough", desc: "Auto-Deleveraging(ADL)" },
                                    { value: "CreateByBlock_PassThrough", desc: "Order placed via Paradigm" },
                                    { value: "CreateByBlockTradeMovePosition_PassThrough", desc: "Order created by move position" },
                                    { value: "CreateByClosing", desc: "The close order placed via web or app position area" },
                                    { value: "CreateByFGridBot", desc: "Order created via grid bot" },
                                    { value: "CloseByFGridBot", desc: "Order closed via grid bot" },
                                    { value: "CreateByTWAP", desc: "Order created by TWAP" },
                                    { value: "CreateByTVSignal", desc: "Order created by TV webhook" },
                                    { value: "CreateByMmRateClose", desc: "Order created by Mm rate close function" },
                                    { value: "CreateByMartingaleBot", desc: "Order created by Martingale bot" },
                                    { value: "CloseByMartingaleBot", desc: "Order closed by Martingale bot" },
                                    { value: "CreateByIceBerg", desc: "Order created by Ice berg strategy" },
                                    { value: "CreateByArbitrage", desc: "Order created by arbitrage" },

                                    { value: "CreateByBboOrder", desc: "BBO order" },
                                ]} />
                            </EnumSection>

                            {/* execType */}
                            <EnumSection id="execType" title="execType">
                                <EnumList items={[
                                    { value: "Trade" },
                                    { value: "AdlTrade", desc: "Auto-Deleveraging" },
                                    { value: "Funding", desc: "Funding fee" },
                                    { value: "BustTrade", desc: "Takeover liquidation" },
                                    { value: "Delivery", desc: "USDC futures delivery; Position closed by contract delisted" },
                                    { value: "Settle", desc: "linear futures settlement; Position closed due to delisting" },
                                    { value: "BlockTrade" },
                                    { value: "MovePosition" },
                                    { value: "FutureSpread", desc: "Spread leg execution" },
                                    { value: "UNKNOWN", desc: "May be returned by a classic account. Cannot query by this type" },
                                ]} />
                            </EnumSection>

                            {/* orderType */}
                            <EnumSection id="orderType" title="orderType">
                                <EnumList items={[
                                    { value: "Market" },
                                    { value: "Limit" },
                                    { value: "UNKNOWN", desc: "is not a valid request parameter value. Is only used in some responses. Mainly, it is used when execType is Funding." },
                                ]} />
                            </EnumSection>

                            {/* stopOrderType */}
                            <EnumSection id="stopOrderType" title="stopOrderType">
                                <EnumList items={[
                                    { value: "TakeProfit" },
                                    { value: "StopLoss" },
                                    { value: "TrailingStop" },
                                    { value: "Stop" },
                                    { value: "PartialTakeProfit" },
                                    { value: "PartialStopLoss" },
                                    { value: "MmRateClose", desc: "On web or app can set MMR to close position" },
                                ]} />
                            </EnumSection>

                            {/* tickDirection */}
                            <EnumSection id="tickDirection" title="tickDirection">
                                <EnumList items={[
                                    { value: "PlusTick", desc: "price rise" },
                                    { value: "ZeroPlusTick", desc: "trade occurs at the same price as the previous trade, which occurred at a price higher than that for the trade preceding it" },
                                    { value: "MinusTick", desc: "price drop" },
                                    { value: "ZeroMinusTick", desc: "trade occurs at the same price as the previous trade, which occurred at a price lower than that for the trade preceding it" },
                                ]} />
                            </EnumSection>

                            {/* interval */}
                            <EnumSection id="interval" title="interval">
                                <ul>
                                    <li style={{ marginBottom: "8px" }}>
                                        <span className="pill">1</span> <span className="pill">3</span> <span className="pill">5</span> <span className="pill">15</span> <span className="pill">30</span> <span className="pill">60</span> <span className="pill">120</span> <span className="pill">240</span> <span className="pill">360</span> <span className="pill">720</span> minute
                                    </li>
                                    <li style={{ marginBottom: "8px" }}><span className="pill">D</span> day</li>
                                    <li style={{ marginBottom: "8px" }}><span className="pill">W</span> week</li>
                                    <li style={{ marginBottom: "8px" }}><span className="pill">M</span> month</li>
                                </ul>
                            </EnumSection>

                            {/* intervalTime */}
                            <EnumSection id="intervalTime" title="intervalTime">
                                <ul>
                                    <li style={{ marginBottom: "8px" }}><span className="pill">5min</span> <span className="pill">15min</span> <span className="pill">30min</span> minute</li>
                                    <li style={{ marginBottom: "8px" }}><span className="pill">1h</span> <span className="pill">4h</span> hour</li>
                                    <li style={{ marginBottom: "8px" }}><span className="pill">1d</span> day</li>
                                </ul>
                            </EnumSection>

                            {/* positionIdx */}
                            <EnumSection id="positionIdx" title="positionIdx">
                                <EnumList items={[
                                    { value: "0", desc: "one-way mode position" },
                                    { value: "1", desc: "Buy side of hedge-mode position" },
                                    { value: "2", desc: "Sell side of hedge-mode position" },
                                ]} />
                            </EnumSection>

                            {/* positionStatus */}
                            <EnumSection id="positionStatus" title="positionStatus">
                                <EnumList items={[
                                    { value: "Normal" },
                                    { value: "Liq", desc: "in the liquidation progress" },
                                    { value: "Adl", desc: "in the auto-deleverage progress" },
                                ]} />
                            </EnumSection>

                            {/* rejectReason */}
                            <EnumSection id="rejectReason" title="rejectReason">
                                <EnumList items={[
                                    { value: "EC_NoError" }, { value: "EC_Others" }, { value: "EC_UnknownMessageType" },
                                    { value: "EC_MissingClOrdID" }, { value: "EC_MissingOrigClOrdID" },
                                    { value: "EC_ClOrdIDOrigClOrdIDAreTheSame" }, { value: "EC_DuplicatedClOrdID" },
                                    { value: "EC_OrigClOrdIDDoesNotExist" }, { value: "EC_TooLateToCancel" },
                                    { value: "EC_UnknownOrderType" }, { value: "EC_UnknownSide" }, { value: "EC_UnknownTimeInForce" },
                                    { value: "EC_WronglyRouted" }, { value: "EC_MarketOrderPriceIsNotZero" },
                                    { value: "EC_LimitOrderInvalidPrice" }, { value: "EC_NoEnoughQtyToFill" },
                                    { value: "EC_NoImmediateQtyToFill", desc: "a maker could not be found to fill your order" },
                                    { value: "EC_PerCancelRequest" }, { value: "EC_MarketOrderCannotBePostOnly" },
                                    { value: "EC_PostOnlyWillTakeLiquidity", desc: "your post only order would have executed as a taker, and so was rejected" },
                                    { value: "EC_CancelReplaceOrder" }, { value: "EC_InvalidSymbolStatus" },
                                    { value: "EC_CancelForNoFullFill" }, { value: "EC_BySelfMatch" },
                                    { value: "EC_InCallAuctionStatus", desc: "used for pre-market order operation" },
                                    { value: "EC_QtyCannotBeZero" }, { value: "EC_MarketOrderNoSupportTIF" },
                                    { value: "EC_ReachMaxTradeNum" }, { value: "EC_InvalidPriceScale" },
                                    { value: "EC_BitIndexInvalid" }, { value: "EC_StopBySelfMatch" },
                                    { value: "EC_InvalidSmpType" }, { value: "EC_CancelByMMP" },
                                    { value: "EC_InvalidUserType" }, { value: "EC_InvalidMirrorOid" },
                                    { value: "EC_InvalidMirrorUid" }, { value: "EC_EcInvalidQty" },
                                    { value: "EC_InvalidAmount" }, { value: "EC_LoadOrderCancel" },
                                    { value: "EC_MarketQuoteNoSuppSell" }, { value: "EC_DisorderOrderID" },
                                    { value: "EC_InvalidBaseValue" }, { value: "EC_LoadOrderCanMatch" },
                                    { value: "EC_SecurityStatusFail" }, { value: "EC_ReachRiskPriceLimit" },
                                    { value: "EC_OrderNotExist" },
                                    { value: "EC_CancelByOrderValueZero", desc: "order cancelled as its remaining value is zero" },
                                    { value: "EC_CancelByMatchValueZero", desc: "order cancelled as the order it matched with has a remaining value of zero" },
                                    { value: "EC_ReachMarketPriceLimit" },
                                ]} />
                            </EnumSection>

                            {/* accountType */}
                            <EnumSection id="accountType" title="accountType">
                                <EnumList items={[
                                    { value: "UNIFIED", desc: "Unified Trading Account" },
                                    { value: "FUND", desc: "Funding Account" },
                                ]} />
                            </EnumSection>

                            {/* transferStatus */}
                            <EnumSection id="transferStatus" title="transferStatus">
                                <EnumList items={[
                                    { value: "SUCCESS" }, { value: "PENDING" }, { value: "FAILED" },
                                ]} />
                            </EnumSection>

                            {/* depositStatus */}
                            <EnumSection id="depositStatus" title="depositStatus">
                                <EnumList items={[
                                    { value: "0", desc: "unknown" },
                                    { value: "1", desc: "toBeConfirmed" },
                                    { value: "2", desc: "processing" },
                                    { value: "3", desc: "success (finalised status of a success deposit)" },
                                    { value: "4", desc: "deposit failed" },
                                    { value: "10011", desc: "pending to be credited to funding pool" },
                                    { value: "10012", desc: "Credited to funding pool successfully" },
                                ]} />
                            </EnumSection>

                            {/* withdrawStatus */}
                            <EnumSection id="withdrawStatus" title="withdrawStatus">
                                <EnumList items={[
                                    { value: "SecurityCheck" }, { value: "Pending" }, { value: "success" },
                                    { value: "CancelByUser" }, { value: "Reject" }, { value: "Fail" },
                                    { value: "BlockchainConfirmed" }, { value: "MoreInformationRequired" },
                                    { value: "Unknown", desc: "a rare status" },
                                ]} />
                            </EnumSection>

                            {/* triggerBy */}
                            <EnumSection id="triggerBy" title="triggerBy">
                                <EnumList items={[
                                    { value: "LastPrice" }, { value: "IndexPrice" }, { value: "MarkPrice" },
                                ]} />
                            </EnumSection>

                            {/* cancelType */}
                            <EnumSection id="cancelType" title="cancelType">
                                <EnumList items={[
                                    { value: "CancelByUser" },
                                    { value: "CancelByReduceOnly" },
                                    { value: "CancelByPrepareLiq", desc: "CancelAllBeforeLiq - cancelled in order to attempt liquidation prevention by freeing up margin" },
                                    { value: "CancelByPrepareAdl", desc: "CancelAllBeforeAdl - cancelled due to ADL" },
                                    { value: "CancelByAdmin" },
                                    { value: "CancelBySettle", desc: "cancelled due to delisting contract" },
                                    { value: "CancelByTpSlTsClear", desc: "TP/SL order cancelled when the position is cleared" },
                                    { value: "CancelBySmp", desc: "cancelled by SMP" },
                                    { value: "CancelByDCP", desc: "cancelled by DCP triggering" },
                                    { value: "CancelByRebalance", desc: "Spread trading: the order price of a single leg order is outside the limit price range" },
                                    { value: "CancelByOCOTpCanceledBySlTriggered", desc: "The take profit order was canceled due to the triggering of the stop loss" },
                                    { value: "CancelByOCOSlCanceledByTpTriggered", desc: "The stop loss order was canceled due to the triggering of the take profit" },
                                ]} />

                            </EnumSection>



                            {/* dataRecordingPeriod */}
                            <EnumSection id="dataRecordingPeriod" title="dataRecordingPeriod">
                                <ul>
                                    <li style={{ marginBottom: "8px" }}><span className="pill">5min</span> <span className="pill">15min</span> <span className="pill">30min</span> minute</li>
                                    <li style={{ marginBottom: "8px" }}><span className="pill">1h</span> <span className="pill">4h</span> hour</li>
                                    <li style={{ marginBottom: "8px" }}><span className="pill">4d</span> day</li>
                                </ul>
                            </EnumSection>

                            {/* contractType */}
                            <EnumSection id="contractType" title="contractType">
                                <EnumList items={[
                                    { value: "LinearPerpetual" },
                                    { value: "LinearFutures", desc: "USDT/USDC Futures" },
                                ]} />
                            </EnumSection>

                            {/* status */}
                            <EnumSection id="status" title="status">
                                <EnumList items={[
                                    { value: "PreLaunch" }, { value: "Trading" }, { value: "Delivering" }, { value: "Closed" },
                                ]} />
                            </EnumSection>

                            {/* symbolType */}
                            <EnumSection id="symbolType" title="symbolType">
                                <EnumList items={[
                                    { value: "innovation" }, { value: "adventure" }, { value: "xstocks" },
                                ]} />
                            </EnumSection>

                            {/* curAuctionPhase */}
                            <EnumSection id="curAuctionPhase" title="curAuctionPhase">
                                <EnumList items={[
                                    { value: "NotStarted", desc: "Pre-market trading is not started" },
                                    { value: "Finished", desc: "Pre-market trading is finished" },
                                    { value: "CallAuction", desc: "Auction phase of pre-market trading" },
                                    { value: "CallAuctionNoCancel", desc: "Auction no cancel phase of pre-market trading" },
                                    { value: "CrossMatching", desc: "cross matching phase" },
                                    { value: "ContinuousTrading", desc: "Continuous trading phase" },
                                ]} />
                            </EnumSection>

                            {/* marginTrading */}
                            <EnumSection id="marginTrading" title="marginTrading">
                                <EnumList items={[
                                    { value: "none", desc: "Regardless of normal account or UTA account, this trading pair does not support margin trading" },
                                    { value: "both", desc: "For both normal account and UTA account, this trading pair supports margin trading" },
                                    { value: "utaOnly", desc: "Only for UTA account, this trading pair supports margin trading" },
                                    { value: "normalSpotOnly", desc: "Only for normal account, this trading pair supports margin trading" },
                                ]} />
                            </EnumSection>

                            {/* copyTrading */}
                            <EnumSection id="copyTrading" title="copyTrading">
                                <EnumList items={[
                                    { value: "none", desc: "Regardless of normal account or UTA account, this trading pair does not support copy trading" },
                                    { value: "both", desc: "For both normal account and UTA account, this trading pair supports copy trading" },
                                    { value: "utaOnly", desc: "Only for UTA account, this trading pair supports copy trading" },
                                    { value: "normalOnly", desc: "Only for normal account, this trading pair supports copy trading" },
                                ]} />
                            </EnumSection>

                            {/* type(uta-translog) */}
                            <EnumSection id="type-uta-translog" title="type (uta-translog)">
                                <EnumList items={[
                                    { value: "TRANSFER_IN", desc: "Assets that transferred into Unified wallet" },
                                    { value: "TRANSFER_OUT", desc: "Assets that transferred out from Unified wallet" },
                                    { value: "TRADE" }, { value: "SETTLEMENT", desc: "USDT Perp funding settlement, and USDC Perp funding settlement + USDC 8-hour session settlement" },
                                    { value: "DELIVERY", desc: "USDC Futures delivery" },
                                    { value: "LIQUIDATION" }, { value: "ADL", desc: "Auto-Deleveraging" },
                                    { value: "AIRDROP" }, { value: "BONUS", desc: "Bonus claimed" },
                                    { value: "BONUS_RECOLLECT", desc: "Bonus expired" },
                                    { value: "FEE_REFUND", desc: "Trading fee refunded" },
                                    { value: "INTEREST", desc: "Interest occurred due to borrowing" },
                                    { value: "CURRENCY_BUY", desc: "Currency convert, and the liquidation for borrowing asset(UTA loan)" },
                                    { value: "CURRENCY_SELL", desc: "Currency convert, and the liquidation for borrowing asset(UTA loan)" },
                                    { value: "BORROWED_AMOUNT_INS_LOAN" }, { value: "PRINCIPLE_REPAYMENT_INS_LOAN" },
                                    { value: "INTEREST_REPAYMENT_INS_LOAN" },
                                    { value: "AUTO_SOLD_COLLATERAL_INS_LOAN", desc: "the liquidation for borrowing asset(INS loan)" },
                                    { value: "AUTO_BUY_LIABILITY_INS_LOAN", desc: "the liquidation for borrowing asset(INS loan)" },
                                    { value: "AUTO_PRINCIPLE_REPAYMENT_INS_LOAN" }, { value: "AUTO_INTEREST_REPAYMENT_INS_LOAN" },
                                    { value: "TRANSFER_IN_INS_LOAN", desc: "Transfer In when in the liquidation of OTC loan" },
                                    { value: "TRANSFER_OUT_INS_LOAN", desc: "Transfer Out when in the liquidation of OTC loan" },

                                    { value: "PREMARKET_TRANSFER_OUT" }, { value: "PREMARKET_DELIVERY_SELL_NEW_COIN" },
                                    { value: "PREMARKET_DELIVERY_BUY_NEW_COIN" }, { value: "PREMARKET_DELIVERY_PLEDGE_PAY_SELLER" },
                                    { value: "PREMARKET_DELIVERY_PLEDGE_BACK" }, { value: "PREMARKET_ROLLBACK_PLEDGE_BACK" },
                                    { value: "PREMARKET_ROLLBACK_PLEDGE_PENALTY_TO_BUYER" },
                                    { value: "CUSTODY_NETWORK_FEE", desc: "fireblocks business" },
                                    { value: "CUSTODY_SETTLE_FEE", desc: "fireblocks business" },
                                    { value: "CUSTODY_LOCK", desc: "fireblocks / copper business" },
                                    { value: "CUSTODY_UNLOCK", desc: "fireblocks business" },
                                    { value: "CUSTODY_UNLOCK_REFUND", desc: "fireblocks business" },
                                    { value: "LOANS_BORROW_FUNDS", desc: "crypto loan" },
                                    { value: "LOANS_PLEDGE_ASSET", desc: "crypto loan repayment" },
                                    { value: "BONUS_TRANSFER_IN" }, { value: "BONUS_TRANSFER_OUT" },
                                    { value: "PEF_TRANSFER_IN" }, { value: "PEF_TRANSFER_OUT" }, { value: "PEF_PROFIT_SHARE" },
                                    { value: "BORROW", desc: "Manual loan borrow and auto loan borrow" },
                                    { value: "REPAY", desc: "Manual loan repay and auto loan repay" },
                                    { value: "CONVERT", desc: "Currency convert repayment" },
                                ]} />
                            </EnumSection>

                            {/* type(contract-translog) */}
                            <EnumSection id="type-contract-translog" title="type (contract-translog)">
                                <EnumList items={[
                                    { value: "TRANSFER_IN", desc: "Assets that transferred into (inverse) derivatives wallet" },
                                    { value: "TRANSFER_OUT", desc: "Assets that transferred out from (inverse) derivatives wallet" },
                                    { value: "TRADE" }, { value: "SETTLEMENT", desc: "USDT / linear futures funding settlement" },
                                    { value: "DELIVERY", desc: "linear futures delivery" },
                                    { value: "LIQUIDATION" }, { value: "ADL", desc: "Auto-Deleveraging" },
                                    { value: "AIRDROP" }, { value: "BONUS", desc: "Bonus claimed" },
                                    { value: "BONUS_RECOLLECT", desc: "Bonus expired" },
                                    { value: "FEE_REFUND", desc: "Trading fee refunded" },
                                    { value: "CURRENCY_BUY", desc: "Currency convert" },
                                    { value: "CURRENCY_SELL", desc: "Currency convert" },
                                    { value: "AUTO_DEDUCTION", desc: "Asset auto deducted by system (roll back)" },
                                    { value: "Others" },
                                ]} />
                            </EnumSection>

                            {/* unifiedMarginStatus */}
                            <EnumSection id="unifiedMarginStatus" title="unifiedMarginStatus">
                                <EnumList items={[
                                    { value: "1", desc: "Classic account" },
                                    { value: "3", desc: "Unified trading account 1.0" },
                                    { value: "4", desc: "Unified trading account 1.0 (pro version)" },
                                    { value: "5", desc: "Unified trading account 2.0" },
                                    { value: "6", desc: "Unified trading account 2.0 (pro version)" },
                                ]} />
                            </EnumSection>

                            {/* convertAccountType */}
                            <EnumSection id="convertAccountType" title="convertAccountType">
                                <EnumList items={[
                                    { value: "eb_convert_uta", desc: "Unified Trading Account" },
                                    { value: "eb_convert_funding", desc: "Funding Account" },
                                ]} />
                            </EnumSection>

                            {/* symbol */}
                            <EnumSection id="symbol" title="symbol">
                                <p><strong>USDT Perpetual:</strong></p>
                                <EnumList items={[{ value: "BTCUSDT" }, { value: "ETHUSDT" }]} />
                                <p><strong>USDT Futures:</strong></p>
                                <EnumList items={[{ value: "BTCUSDT-21FEB25" }, { value: "ETHUSDT-14FEB25" }]} />
                                <p style={{ fontSize: "13px", color: "#999" }}>The types of USDT Futures contracts offered by Bitzup include: Weekly, Bi-Weekly, Tri-Weekly, Monthly, Bi-Monthly, Quarterly, Bi-Quarterly, Tri-Quarterly</p>
                                <p><strong>USDC Perpetual:</strong></p>
                                <EnumList items={[{ value: "BTCPERP" }, { value: "ETHPERP" }]} />
                                <p><strong>USDC Futures:</strong></p>
                                <EnumList items={[{ value: "BTC-24MAR23" }]} />
                            </EnumSection>

                            {/* vipLevel */}
                            <EnumSection id="vipLevel" title="vipLevel">
                                <EnumList items={[
                                    { value: "No VIP" }, { value: "VIP-1" }, { value: "VIP-2" }, { value: "VIP-3" },
                                    { value: "VIP-4" }, { value: "VIP-5" }, { value: "VIP-Supreme" },
                                    { value: "PRO-1" }, { value: "PRO-2" }, { value: "PRO-3" },
                                    { value: "PRO-4" }, { value: "PRO-5" }, { value: "PRO-6" },
                                ]} />
                            </EnumSection>

                            {/* adlRankIndicator */}
                            <EnumSection id="adlRankIndicator" title="adlRankIndicator">
                                <EnumList items={[
                                    { value: "0", desc: "default value of empty position" },
                                    { value: "1" }, { value: "2" }, { value: "3" }, { value: "4" }, { value: "5" },
                                ]} />
                            </EnumSection>

                            {/* smpType */}
                            <EnumSection id="smpType" title="smpType">
                                <EnumList items={[
                                    { value: "None", desc: "default" },
                                    { value: "CancelMaker" }, { value: "CancelTaker" }, { value: "CancelBoth" },
                                ]} />
                            </EnumSection>

                            {/* product */}
                            <EnumSection id="product" title="product">
                                <EnumList items={[
                                    { value: "1", desc: "Futures" },
                                ]} />
                            </EnumSection>

                            {/* state */}
                            <EnumSection id="state" title="state">
                                <EnumList items={[
                                    { value: "scheduled" }, { value: "ongoing" }, { value: "completed" }, { value: "canceled" },
                                ]} />
                            </EnumSection>

                            {/* serviceTypes */}
                            <EnumSection id="serviceTypes" title="serviceTypes">
                                <EnumList items={[
                                    { value: "1", desc: "Trading service" },
                                    { value: "2", desc: "Trading service via http request" },
                                    { value: "3", desc: "Trading service via websocket" },
                                    { value: "4", desc: "Private websocket stream" },
                                    { value: "5", desc: "Market data service" },
                                ]} />
                            </EnumSection>

                            {/* sbe-orderStatus */}
                            <EnumSection id="sbe-orderStatus" title="sbe-orderStatus">
                                <EnumList items={[
                                    { value: "5", desc: "Rejected" }, { value: "6", desc: "New" },
                                    { value: "7", desc: "Cancelled" }, { value: "8", desc: "PartiallyFilled" },
                                    { value: "9", desc: "Filled" }, { value: "0", desc: "Others" },
                                ]} />
                            </EnumSection>

                        </div>

                        {/* RIGHT SIDEBAR */}
                    <div className="col-lg-3 d-none d-lg-block">
                        <div className="api-sidebar-wrapper" style={{ position: "sticky", top: "100px", borderLeft: "1px solid var(--border-color)", paddingLeft: "20px", maxHeight: "calc(100vh - 120px)", overflowY: "auto" }}>
                            <h5 style={{ fontSize: "12px", textTransform: "uppercase", color: "var(--text-secondary)", marginBottom: "16px", letterSpacing: "1px" }}>On this page</h5>
                            <ul style={{ listStyle: "none", padding: 0 }}>
                                {sections.map((id) => {
                                    const labels = {
                                        "type-uta-translog": "type (uta-translog)",
                                        "type-contract-translog": "type (contract-translog)",
                                        "sbe-orderStatus": "sbe-orderStatus",
                                    };
                                    return (
                                        <li
                                            key={id}
                                            className={activeSection === id ? "active" : ""}
                                            onClick={() => scrollToSection(id)}
                                            style={{ padding: "6px 0", cursor: "pointer", fontSize: "13px", color: activeSection === id ? "var(--text-accent)" : "var(--text-secondary)", transition: "all 0.2s" }}
                                        >
                                            {labels[id] || id}
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </>
    );
};