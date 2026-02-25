import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { RiArrowLeftDoubleFill } from "react-icons/ri";
import { RiArrowRightDoubleFill } from "react-icons/ri";


const Sidebar = () => {

  const [openSection, setOpenSection] = useState(null);
  const [webStream, setWebStream] = useState(null);
  const [publicOpen, setPublicOpen] = useState(null);
  const [rateLimit, setRateLimit] = useState(null);
  const [privateOpen, setPrivateOpen] = useState(null);


  const [collapsed, setCollapsed] = useState(
    localStorage.getItem("sidebar") === "collapsed"
  );

  useEffect(() => {
    localStorage.setItem("sidebar", collapsed ? "collapsed" : "open");
  }, [collapsed]);


  return (
    <aside className={`sidebar ${collapsed ? "collapsed" : ""}`}>
      <div className="sidebar-scroll">

        <NavLink to="/" className="sidebar-link">
          Integration Guidance
        </NavLink>

        {/* <NavLink to="/docs/announcement" className="sidebar-link">
                Get Announcement
              </NavLink>

              <NavLink to="/docs/self-match" className="sidebar-link">
                Self Match Prevention
              </NavLink>

              <NavLink to="/docs/copy-trading" className="sidebar-link">
                How To Start Copy Trading
              </NavLink>

              <NavLink to="/docs/demo-trading" className="sidebar-link">
                Demo Trading Service
              </NavLink>

              <NavLink to="/docs/system-status" className="sidebar-link">
                Get System Status
              </NavLink> */}

        <div
          className="sidebar-section collapsible sidebar-link"
          onClick={() =>
            setOpenSection(openSection === "market" ? null : "market")
          }
        >
          <span>Market</span>
          <IoIosArrowForward
            className={openSection === "market" ? "rotate" : ""}
          />
        </div>

        {openSection === "market" && (
          <div className="sidebar-sub">
            <NavLink to="/docs/market/kline" className="sidebar-link">
              Get Kline
            </NavLink>
            <NavLink to="/docs/market/orderbook" className="sidebar-link">
              Get Orderbook
            </NavLink>
            <NavLink to="/docs/market/tickers" className="sidebar-link">
              Get Tickers
            </NavLink>
            <NavLink to="/docs/market/recent-public-trades" className="sidebar-link">
              Get Recent Public Trades
            </NavLink>
            <NavLink to="/docs/market/market-info" className="sidebar-link">
              Market Info
            </NavLink>
          </div>
        )}

        <div
          className="sidebar-section collapsible sidebar-link"
          onClick={() =>
            setWebStream(webStream === "ws" ? null : "ws")
          }
        >
          <span>WebSocket Stream</span>
          <IoIosArrowForward
            className={webStream === "ws" ? "rotate" : ""}
          />
        </div>

        {webStream === "ws" && (
          <div className="sidebar-sub">

            <NavLink
              to="/docs/ws/connect"
              className="sidebar-link"
            >
              Connect
            </NavLink>

            {/* Public */}
            <div
              className="sidebar-section collapsible sidebar-link sub-header"
              onClick={() =>
                setPublicOpen(publicOpen === "public" ? null : "public")
              }
            >
              <span>Public</span>
              <IoIosArrowForward
                className={publicOpen === "public" ? "rotate" : ""}
              />
            </div>

            {publicOpen === "public" && (
              <div className="sidebar-sub deep">
                <NavLink to="/docs/websocket/public/orderbook" className="sidebar-link">
                  Orderbook
                </NavLink>
                <NavLink to="/docs/websocket/public/trade" className="sidebar-link">
                  Trade
                </NavLink>
                <NavLink to="/docs/websocket/public/ticker" className="sidebar-link">
                  Ticker
                </NavLink>
                <NavLink to="/docs/websocket/public/kline" className="sidebar-link">
                  Kline
                </NavLink>
              </div>
            )}
          </div>
        )}

        <div
          className="sidebar-section collapsible sidebar-link"
          onClick={() =>
            setRateLimit(rateLimit === "market" ? null : "market")
          }
        >
          <span>Rate Limit</span>
          <IoIosArrowForward
            className={rateLimit === "market" ? "rotate" : ""}
          />
        </div>

        {rateLimit === "market" && (
          <div className="sidebar-sub">
            <NavLink to="/docs/rate-limit/rate-limit-rules" className="sidebar-link">
              Rate Limit Rules
            </NavLink>
          </div>
        )}

        <NavLink to="/docs/enums" className="sidebar-link">
          Enums Definitions
        </NavLink>

        <div
          className="sidebar-section collapsible sidebar-link"
          onClick={() =>
            setPrivateOpen(privateOpen === "private" ? null : "private")
          }
        >
          <span>Private</span>
          <IoIosArrowForward
            className={privateOpen === "private" ? "rotate" : ""}
          />
        </div>

        {privateOpen === "private" && (
          <div className="sidebar-sub">
            <NavLink to="/docs/private/get-positions" className="sidebar-link">
              Get Positions
            </NavLink>
            <NavLink to="/docs/private/get-open-orders" className="sidebar-link">
              Get Open Orders
            </NavLink>
            <NavLink to="/docs/private/get-order-history" className="sidebar-link">
              Get Order History
            </NavLink>
            <NavLink to="/docs/private/get-trade-history" className="sidebar-link">
              Get Trade History
            </NavLink>
            <NavLink to="/docs/private/get-closed-pnl" className="sidebar-link">
              Get Closed PnL
            </NavLink>
            <NavLink to="/docs/private/get-wallet-balance" className="sidebar-link">
              Get Wallet Balance
            </NavLink>
            <NavLink to="/docs/private/get-leverage" className="sidebar-link">
              Get Leverage
            </NavLink>
            <NavLink to="/docs/private/get-margin-mode" className="sidebar-link">
              Get Margin Mode
            </NavLink>
            <NavLink to="/docs/private/set-leverage" className="sidebar-link">
              Set Leverage
            </NavLink>
            <NavLink to="/docs/private/switch-margin-mode" className="sidebar-link">
              Switch Margin Mode
            </NavLink>
            <NavLink to="/docs/private/add-isolated-margin" className="sidebar-link">
              Add Isolated Margin
            </NavLink>
            <NavLink to="/docs/private/auto-isolated-margin" className="sidebar-link">
              Auto Isolated Margin
            </NavLink>
            <NavLink to="/docs/private/set-trading-stop" className="sidebar-link">
              Set Trading Stop
            </NavLink>
            <NavLink to="/docs/private/place-order" className="sidebar-link">
              Place Order
            </NavLink>
            <NavLink to="/docs/private/cancel-order" className="sidebar-link">
              Cancel Order
            </NavLink>
            <NavLink to="/docs/private/cancel-all-orders" className="sidebar-link">
              Cancel All Orders
            </NavLink>
            <NavLink to="/docs/private/modify-order" className="sidebar-link">
              Modify Order
            </NavLink>
            <NavLink to="/docs/private/close-position" className="sidebar-link">
              Close Position
            </NavLink>
            <NavLink to="/docs/private/estimate-liquidation-price" className="sidebar-link">
              Estimate Liquidation Price
            </NavLink>
          </div>
        )}

        {/* <NavLink to="/docs/system-status" className="sidebar-link">
                Get System Status
              </NavLink>

              <NavLink to="/docs/demo-trading" className="sidebar-link">
                Demo Trading Service
              </NavLink>

              <NavLink to="/docs/system-status" className="sidebar-link">
                Get System Status
              </NavLink> */}
      </div>

      <div className="sidebar-footer">
        <button
          className="collapse-btn"
          onClick={() => setCollapsed(!collapsed)}
        >
          {collapsed ? <RiArrowRightDoubleFill /> : <RiArrowLeftDoubleFill />}
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;

