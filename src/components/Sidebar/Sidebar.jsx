import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { RiArrowLeftDoubleFill, RiArrowRightDoubleFill } from "react-icons/ri";

const Sidebar = () => {
  const [openSection, setOpenSection] = useState(null);
  const [openSubSection, setOpenSubSection] = useState(null);

  const toggleSection = (sectionName) => {
    setOpenSection(openSection === sectionName ? null : sectionName);
  };

  const toggleSubSection = (e, sectionName) => {
    e.stopPropagation();
    setOpenSubSection(openSubSection === sectionName ? null : sectionName);
  };

  const [collapsed, setCollapsed] = useState(
    localStorage.getItem("sidebar") === "collapsed"
  );

  useEffect(() => {
    localStorage.setItem("sidebar", collapsed ? "collapsed" : "open");
  }, [collapsed]);

  return (
    <aside className={`sidebar \${collapsed ? "collapsed" : ""}`}>
      <div className="sidebar-scroll">

        {/* Guide & Status */}
        <NavLink to="/" className="sidebar-link">Integration Guidance</NavLink>
        <NavLink to="/docs/v5/system-status" className="sidebar-link">Get System Status</NavLink>
        <NavLink to="/docs/v5/rate-limit" className="sidebar-link">Rate Limit Rules</NavLink>
        <NavLink to="/docs/v5/enum" className="sidebar-link">Enums Definitions</NavLink>
        <NavLink to="/docs/v5/error" className="sidebar-link">Error Codes</NavLink>

        {/* Market */}
        <div className="sidebar-section collapsible sidebar-link" onClick={() => toggleSection("market")}>
          <span>Market</span><IoIosArrowForward className={openSection === "market" ? "rotate" : ""} />
        </div>
        {openSection === "market" && (
          <div className="sidebar-sub">
            <NavLink to="/docs/v5/market/time" className="sidebar-link">Get Bitzup Server Time</NavLink>
            <NavLink to="/docs/v5/market/kline" className="sidebar-link">Get Kline</NavLink>
            <NavLink to="/docs/v5/market/mark-price-kline" className="sidebar-link">Get Mark Price Kline</NavLink>
            <NavLink to="/docs/v5/market/index-price-kline" className="sidebar-link">Get Index Price Kline</NavLink>
            <NavLink to="/docs/v5/market/premium-index-price-kline" className="sidebar-link">Get Premium Index Price Kline</NavLink>
            <NavLink to="/docs/v5/market/instruments-info" className="sidebar-link">Get Instruments Info</NavLink>
            <NavLink to="/docs/v5/market/orderbook" className="sidebar-link">Get Orderbook</NavLink>
            <NavLink to="/docs/v5/market/rpi-orderbook" className="sidebar-link">Get RPI Orderbook</NavLink>
            <NavLink to="/docs/v5/market/tickers" className="sidebar-link">Get Tickers</NavLink>
            <NavLink to="/docs/v5/market/funding-rate-history" className="sidebar-link">Get Funding Rate History</NavLink>
            <NavLink to="/docs/v5/market/recent-public-trades" className="sidebar-link">Get Recent Public Trades</NavLink>
            <NavLink to="/docs/v5/market/open-interest" className="sidebar-link">Get Open Interest</NavLink>
            <NavLink to="/docs/v5/market/historical-volatility" className="sidebar-link">Get Historical Volatility</NavLink>
            <NavLink to="/docs/v5/market/insurance-pool" className="sidebar-link">Get Insurance Pool</NavLink>
            <NavLink to="/docs/v5/market/risk-limit" className="sidebar-link">Get Risk Limit</NavLink>
            <NavLink to="/docs/v5/market/delivery-price" className="sidebar-link">Get Delivery Price</NavLink>
            <NavLink to="/docs/v5/market/new-delivery-price" className="sidebar-link">Get New Delivery Price</NavLink>
            <NavLink to="/docs/v5/market/long-short-ratio" className="sidebar-link">Get Long Short Ratio</NavLink>
          </div>
        )}

        {/* Trade */}
        <div className="sidebar-section collapsible sidebar-link" onClick={() => toggleSection("trade")}>
          <span>Trade</span><IoIosArrowForward className={openSection === "trade" ? "rotate" : ""} />
        </div>
        {openSection === "trade" && (
          <div className="sidebar-sub">
            <NavLink to="/docs/v5/order/create-order" className="sidebar-link">Place Order</NavLink>
            <NavLink to="/docs/v5/order/amend-order" className="sidebar-link">Amend Order</NavLink>
            <NavLink to="/docs/v5/order/cancel-order" className="sidebar-link">Cancel Order</NavLink>
            <NavLink to="/docs/v5/order/open-order" className="sidebar-link">Get Open & Closed Orders</NavLink>
            <NavLink to="/docs/v5/order/cancel-all" className="sidebar-link">Cancel All Orders</NavLink>
            <NavLink to="/docs/v5/order/history" className="sidebar-link">Get Order History (2 years)</NavLink>
            <NavLink to="/docs/v5/execution/list" className="sidebar-link">Get Trade History (2 years)</NavLink>
            <NavLink to="/docs/v5/order/batch-place" className="sidebar-link">Batch Place Order</NavLink>
            <NavLink to="/docs/v5/order/batch-amend" className="sidebar-link">Batch Amend Order</NavLink>
            <NavLink to="/docs/v5/order/batch-cancel" className="sidebar-link">Batch Cancel Order</NavLink>
          </div>
        )}

        {/* Position */}
        <div className="sidebar-section collapsible sidebar-link" onClick={() => toggleSection("position")}>
          <span>Position</span><IoIosArrowForward className={openSection === "position" ? "rotate" : ""} />
        </div>
        {openSection === "position" && (
          <div className="sidebar-sub">
            <NavLink to="/docs/v5/position/info" className="sidebar-link">Get Position Info</NavLink>
            <NavLink to="/docs/v5/position/leverage" className="sidebar-link">Set Leverage</NavLink>
            <NavLink to="/docs/v5/position/switch-mode" className="sidebar-link">Switch Position Mode</NavLink>
            <NavLink to="/docs/v5/position/trading-stop" className="sidebar-link">Set Trading Stop</NavLink>
            <NavLink to="/docs/v5/position/set-auto-add-margin" className="sidebar-link">Set Auto Add Margin</NavLink>
            <NavLink to="/docs/v5/position/add-margin" className="sidebar-link">Add Or Reduce Margin</NavLink>
            <NavLink to="/docs/v5/position/closed-pnl" className="sidebar-link">Get Closed PnL (2 years)</NavLink>
            <NavLink to="/docs/v5/position/closed-options-positions" className="sidebar-link">Get Closed Options Positions (6 months)</NavLink>
            <NavLink to="/docs/v5/position/move-position" className="sidebar-link">Move Position</NavLink>
            <NavLink to="/docs/v5/position/move-position-history" className="sidebar-link">Get Move Position History</NavLink>
            <NavLink to="/docs/v5/position/confirm-new-risk-limit" className="sidebar-link">Confirm New Risk Limit</NavLink>
          </div>
        )}

        {/* Account */}
        <div className="sidebar-section collapsible sidebar-link" onClick={() => toggleSection("account")}>
          <span>Account</span><IoIosArrowForward className={openSection === "account" ? "rotate" : ""} />
        </div>
        {openSection === "account" && (
          <div className="sidebar-sub">
            <NavLink to="/docs/v5/account/wallet-balance" className="sidebar-link">Get Wallet Balance</NavLink>
            <NavLink to="/docs/v5/account/transferable-amount" className="sidebar-link">Get Transferable Amount (Unified)</NavLink>
            <NavLink to="/docs/v5/account/transaction-log" className="sidebar-link">Get Transaction Log (UTA)</NavLink>
            <NavLink to="/docs/v5/account/info" className="sidebar-link">Get Account Info</NavLink>
            <NavLink to="/docs/v5/account/instruments-info" className="sidebar-link">Get Account Instruments Info</NavLink>
            <NavLink to="/docs/v5/account/manual-borrow" className="sidebar-link">Manual Borrow</NavLink>
            <NavLink to="/docs/v5/account/manual-repay-without-conversion" className="sidebar-link">Manual Repay Without Asset Conversion</NavLink>
            <NavLink to="/docs/v5/account/manual-repay" className="sidebar-link">Manual Repay</NavLink>
            <NavLink to="/docs/v5/account/fee-rate" className="sidebar-link">Get Fee Rate</NavLink>
            <NavLink to="/docs/v5/account/collateral-info" className="sidebar-link">Get Collateral Info</NavLink>
            <NavLink to="/docs/v5/account/dcp-info" className="sidebar-link">Get DCP Info</NavLink>
            <NavLink to="/docs/v5/account/set-collateral-coin" className="sidebar-link">Set Collateral Coin</NavLink>
            <NavLink to="/docs/v5/account/set-margin-mode" className="sidebar-link">Set Margin Mode</NavLink>
            <NavLink to="/docs/v5/account/set-spot-hedging" className="sidebar-link">Set Spot Hedging</NavLink>
            <NavLink to="/docs/v5/account/borrow-history" className="sidebar-link">Get Borrow History (2 years)</NavLink>
            <NavLink to="/docs/v5/account/batch-set-collateral-coin" className="sidebar-link">Batch Set Collateral Coin</NavLink>
            <NavLink to="/docs/v5/account/coin-greeks" className="sidebar-link">Get Coin Greeks</NavLink>
            <NavLink to="/docs/v5/account/mmp-state" className="sidebar-link">Get MMP State</NavLink>
            <NavLink to="/docs/v5/account/reset-mmp" className="sidebar-link">Reset MMP</NavLink>
            <NavLink to="/docs/v5/account/set-mmp" className="sidebar-link">Set MMP</NavLink>
            <NavLink to="/docs/v5/account/user-setting-config" className="sidebar-link">Get Trade Behaviour Config</NavLink>
            <NavLink to="/docs/v5/account/set-price-limit" className="sidebar-link">Set Price Limit Behaviour</NavLink>
          </div>
        )}

        {/* Asset */}
        <div className="sidebar-section collapsible sidebar-link" onClick={() => toggleSection("asset")}>
          <span>Asset</span><IoIosArrowForward className={openSection === "asset" ? "rotate" : ""} />
        </div>
        {openSection === "asset" && (
          <div className="sidebar-sub">
            <NavLink to="/docs/v5/asset/delivery-record" className="sidebar-link">Get Delivery Record (2 years)</NavLink>
            <NavLink to="/docs/v5/asset/usdc-session-settlement" className="sidebar-link">Get USDC Session Settlement (2 years)</NavLink>
            <NavLink to="/docs/v5/asset/coin-exchange-records" className="sidebar-link">Get Coin Exchange Records</NavLink>
            <NavLink to="/docs/v5/asset/coin-info" className="sidebar-link">Get Coin Info</NavLink>
            <NavLink to="/docs/v5/asset/sub-uid" className="sidebar-link">Get Sub UID</NavLink>

            <div className="sidebar-section collapsible sidebar-link sub-header" onClick={(e) => toggleSubSection(e, "asset_balances")}>
              <span>Balances</span><IoIosArrowForward className={openSubSection === "asset_balances" ? "rotate" : ""} />
            </div>
            {openSubSection === "asset_balances" && (
              <div className="sidebar-sub deep">
                <NavLink to="/docs/v5/asset/balances/all" className="sidebar-link">All Balances</NavLink>
              </div>
            )}

            <div className="sidebar-section collapsible sidebar-link sub-header" onClick={(e) => toggleSubSection(e, "asset_transfer")}>
              <span>Transfer</span><IoIosArrowForward className={openSubSection === "asset_transfer" ? "rotate" : ""} />
            </div>
            {openSubSection === "asset_transfer" && (
              <div className="sidebar-sub deep">
                <NavLink to="/docs/v5/asset/transfer/internal" className="sidebar-link">Internal Transfer</NavLink>
              </div>
            )}

            <div className="sidebar-section collapsible sidebar-link sub-header" onClick={(e) => toggleSubSection(e, "asset_deposit")}>
              <span>Deposit</span><IoIosArrowForward className={openSubSection === "asset_deposit" ? "rotate" : ""} />
            </div>
            {openSubSection === "asset_deposit" && (
              <div className="sidebar-sub deep">
                <NavLink to="/docs/v5/asset/deposit/records" className="sidebar-link">Deposit Records</NavLink>
              </div>
            )}

            <div className="sidebar-section collapsible sidebar-link sub-header" onClick={(e) => toggleSubSection(e, "asset_withdraw")}>
              <span>Withdraw</span><IoIosArrowForward className={openSubSection === "asset_withdraw" ? "rotate" : ""} />
            </div>
            {openSubSection === "asset_withdraw" && (
              <div className="sidebar-sub deep">
                <NavLink to="/docs/v5/asset/withdraw/create" className="sidebar-link">Submit Withdrawal</NavLink>
              </div>
            )}

            {/* Convert, Convert Small Balances, Fiat Convert */}
            <div className="sidebar-section collapsible sidebar-link sub-header" onClick={(e) => toggleSubSection(e, "asset_convert")}>
              <span>Convert</span><IoIosArrowForward className={openSubSection === "asset_convert" ? "rotate" : ""} />
            </div>
            {openSubSection === "asset_convert" && (
              <div className="sidebar-sub deep">
                <NavLink to="/docs/v5/asset/convert/rate" className="sidebar-link">Get Convert Rate</NavLink>
              </div>
            )}

            <div className="sidebar-section collapsible sidebar-link sub-header" onClick={(e) => toggleSubSection(e, "asset_convert_small")}>
              <span>Convert Small Balances</span><IoIosArrowForward className={openSubSection === "asset_convert_small" ? "rotate" : ""} />
            </div>
            {openSubSection === "asset_convert_small" && (
              <div className="sidebar-sub deep">
                <NavLink to="/docs/v5/asset/convert-small/records" className="sidebar-link">Convert Small Balances Records</NavLink>
              </div>
            )}

            <div className="sidebar-section collapsible sidebar-link sub-header" onClick={(e) => toggleSubSection(e, "asset_fiat_convert")}>
              <span>Fiat-Convert</span><IoIosArrowForward className={openSubSection === "asset_fiat_convert" ? "rotate" : ""} />
            </div>
            {openSubSection === "asset_fiat_convert" && (
              <div className="sidebar-sub deep">
                <NavLink to="/docs/v5/asset/fiat-convert/history" className="sidebar-link">Fiat Convert History</NavLink>
              </div>
            )}

          </div>
        )}

        {/* User */}
        <div className="sidebar-section collapsible sidebar-link" onClick={() => toggleSection("user")}>
          <span>User</span><IoIosArrowForward className={openSection === "user" ? "rotate" : ""} />
        </div>
        {openSection === "user" && (
          <div className="sidebar-sub">
            <NavLink to="/docs/v5/user/create-sub-member" className="sidebar-link">Create Sub UID</NavLink>
            <NavLink to="/docs/v5/user/create-sub-api" className="sidebar-link">Create Sub UID API Key</NavLink>
            <NavLink to="/docs/v5/user/subuid-list" className="sidebar-link">Get Sub UID List (Limited)</NavLink>
            <NavLink to="/docs/v5/user/page-subuid" className="sidebar-link">Get Sub UID List (Unlimited)</NavLink>
            <NavLink to="/docs/v5/user/fund-subuid-list" className="sidebar-link">Get Fund Custodial Sub Acct</NavLink>
            <NavLink to="/docs/v5/user/froze-subuid" className="sidebar-link">Freeze Sub UID</NavLink>
            <NavLink to="/docs/v5/user/apikey-info" className="sidebar-link">Get API Key Information</NavLink>
            <NavLink to="/docs/v5/user/list-sub-apikeys" className="sidebar-link">Get Sub Account All API Keys</NavLink>
            <NavLink to="/docs/v5/user/wallet-type" className="sidebar-link">Get UID Wallet Type</NavLink>
            <NavLink to="/docs/v5/user/modify-master-apikey" className="sidebar-link">Modify Master API Key</NavLink>
            <NavLink to="/docs/v5/user/modify-sub-apikey" className="sidebar-link">Modify Sub API Key</NavLink>
            <NavLink to="/docs/v5/user/rm-subuid" className="sidebar-link">Delete Sub UID</NavLink>
            <NavLink to="/docs/v5/user/rm-master-apikey" className="sidebar-link">Delete Master API Key</NavLink>
            <NavLink to="/docs/v5/user/rm-sub-apikey" className="sidebar-link">Delete Sub API Key</NavLink>
          </div>
        )}

        {/* WebSocket Stream */}
        <div className="sidebar-section collapsible sidebar-link" onClick={() => toggleSection("ws")}>
          <span>WebSocket Stream</span><IoIosArrowForward className={openSection === "ws" ? "rotate" : ""} />
        </div>
        {openSection === "ws" && (
          <div className="sidebar-sub">
            <NavLink to="/docs/v5/ws/connect" className="sidebar-link">Connect</NavLink>
            <div className="sidebar-section collapsible sidebar-link sub-header" onClick={(e) => toggleSubSection(e, "ws_public")}>
              <span>Public</span><IoIosArrowForward className={openSubSection === "ws_public" ? "rotate" : ""} />
            </div>
            {openSubSection === "ws_public" && (
              <div className="sidebar-sub deep">
                <NavLink to="/docs/v5/websocket/public/orderbook" className="sidebar-link">Orderbook</NavLink>
                <NavLink to="/docs/v5/websocket/public/trade" className="sidebar-link">Trade</NavLink>
                <NavLink to="/docs/v5/websocket/public/ticker" className="sidebar-link">Ticker</NavLink>
                <NavLink to="/docs/v5/websocket/public/kline" className="sidebar-link">Kline</NavLink>
              </div>
            )}
            <div className="sidebar-section collapsible sidebar-link sub-header" onClick={(e) => toggleSubSection(e, "ws_private")}>
              <span>Private</span><IoIosArrowForward className={openSubSection === "ws_private" ? "rotate" : ""} />
            </div>
            {openSubSection === "ws_private" && (
              <div className="sidebar-sub deep">
                <NavLink to="/docs/v5/websocket/private/order" className="sidebar-link">Order</NavLink>
                <NavLink to="/docs/v5/websocket/private/position" className="sidebar-link">Position</NavLink>
                <NavLink to="/docs/v5/websocket/private/execution" className="sidebar-link">Execution</NavLink>
                <NavLink to="/docs/v5/websocket/private/wallet" className="sidebar-link">Wallet</NavLink>
                <NavLink to="/docs/v5/websocket/private/greek" className="sidebar-link">Greek</NavLink>
              </div>
            )}
          </div>
        )}

      </div>

      <div className="sidebar-footer">
        <button className="collapse-btn" onClick={() => setCollapsed(!collapsed)}>
          {collapsed ? <RiArrowRightDoubleFill /> : <RiArrowLeftDoubleFill />}
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
