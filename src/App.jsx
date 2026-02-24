import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import IntegrationGuidance from "./components/pages/IntegrationGuidance";
import { Kline } from "./components/pages/Kline";
import { OrderKook } from "./components/pages/OrderBook";
import { Tickers } from "./components/pages/Tickers";
import { RecentPublicTrades } from "./components/pages/RecentPublicTrades";
import { Connect } from "./components/pages/Connect";
import { WsOrderBook } from "./components/pages/WsOrderBook";
import { WsTrade } from "./components/pages/WsTrade";
import { WsTicker } from "./components/pages/WsTicker";
import { WsKline } from "./components/pages/WsKline";
import { RateLimitRules } from "./components/pages/RateLimitRules";
import { MarketData } from "./components/pages/MarketData";
import { EnumsDefinitions } from "./components/pages/EnumsDefinitions";
import { GetPositions } from "./components/pages/GetPositions";
import { GetOpenOrders } from "./components/pages/GetOpenOrders";
import { GetOrderHistory } from "./components/pages/GetOrderHistory";
import { GetTradeHistory } from "./components/pages/GetTradeHistory";
import { GetClosedPnl } from "./components/pages/GetClosedPnl";
import { GetWalletBalance } from "./components/pages/GetWalletBalance";

function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "dark"
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <>
      <Header theme={theme} setTheme={setTheme} />
      <div className="d-flex">
        <Sidebar />
        <div className="flex-grow-1 page-content">
          <Routes>
            <Route path="/" element={<IntegrationGuidance />} />
            <Route path="docs/market/kline" element={<Kline />} />
            <Route path="docs/market/orderbook" element={<OrderKook />} />
            <Route path="docs/market/tickers" element={<Tickers />} />
            <Route path="docs/market/recent-public-trades" element={<RecentPublicTrades />} />
            <Route path="docs/market/market-info" element={<MarketData />} />
            <Route path="docs/ws/connect" element={<Connect />} />
            <Route path="docs/websocket/public/orderbook" element={<WsOrderBook />} />
            <Route path="docs/websocket/public/trade" element={<WsTrade />} />
            <Route path="docs/websocket/public/ticker" element={<WsTicker />} />
            <Route path="docs/websocket/public/kline" element={<WsKline />} />
            <Route path="docs/rate-limit/rate-limit-rules" element={<RateLimitRules />} />
            <Route path="docs/Enums" element={<EnumsDefinitions />} />
            <Route path="docs/private/get-positions" element={<GetPositions />} />
            <Route path="docs/private/get-open-orders" element={<GetOpenOrders />} />
            <Route path="docs/private/get-order-history" element={<GetOrderHistory />} />
            <Route path="docs/private/get-trade-history" element={<GetTradeHistory />} />
            <Route path="docs/private/get-closed-pnl" element={<GetClosedPnl />} />
            <Route path="docs/private/get-wallet-balance" element={<GetWalletBalance />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
