import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import IntegrationGuidance from "./components/pages/IntegrationGuidance";

// --- EXISTING COMPONENTS ---
import { Kline } from "./components/pages/Kline";
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
import { GetLeverage } from "./components/pages/GetLeverage";
import { GetMarginMode } from "./components/pages/GetMarginMode";
import { SetLeverage } from "./components/pages/SetLeverage";
import { SwitchMarginMode } from "./components/pages/SwitchMarginMode";
import { AddIsolatedMargin } from "./components/pages/AddIsolatedMargin";
import { AutoIsolatedMargin } from "./components/pages/AutoIsolatedMargin";
import { SetTradingStop } from "./components/pages/SetTradingStop";
import { PlaceOrder } from "./components/pages/PlaceOrder";
import { CancelOrder } from "./components/pages/CancelOrder";
import { CancelAllOrders } from "./components/pages/CancelAllOrders";
import { AmendOrder } from "./components/pages/AmendOrder";
import { GetOpenClosedOrders } from "./components/pages/GetOpenClosedOrders";
import { BatchPlaceOrder } from "./components/pages/BatchPlaceOrder";
import { BatchAmendOrder } from "./components/pages/BatchAmendOrder";
import { BatchCancelOrder } from "./components/pages/BatchCancelOrder";
import { ClosePosition } from "./components/pages/ClosePosition";
import { EstimateLiquidationPrice } from "./components/pages/EstimateLiquidationPrice";
import { DepositToSubAcc } from "./components/pages/DepositToSubAcc";
import { WithdrawFromSubAcc } from "./components/pages/WithdrawFromSubAcc";
import { CloseAllPositions } from "./components/pages/CloseAllPositions";
import { GetSystemStatus } from "./components/pages/GetSystemStatus";
import { ErrorCodes } from "./components/pages/ErrorCodes";
import { AbandonedEndpoints } from "./components/pages/AbandonedEndpoints";
import { UserEndpoints } from "./components/pages/UserEndpoints";

import { GetServerTime } from "./components/pages/GetServerTime";
import { GetMarkPriceKline } from "./components/pages/GetMarkPriceKline";
import { GetIndexPriceKline } from "./components/pages/GetIndexPriceKline";
import { GetPremiumIndexPriceKline } from "./components/pages/GetPremiumIndexPriceKline";
import { GetInstrumentsInfo } from "./components/pages/GetInstrumentsInfo";
import { GetOrderbook } from "./components/pages/GetOrderbook";

import { GetFundingRateHistory } from "./components/pages/GetFundingRateHistory";
import { GetOpenInterest } from "./components/pages/GetOpenInterest";
import { GetHistoricalVolatility } from "./components/pages/GetHistoricalVolatility";
import { GetInsurancePool } from "./components/pages/GetInsurancePool";
import { GetRiskLimit } from "./components/pages/GetRiskLimit";
import { GetDeliveryPrice } from "./components/pages/GetDeliveryPrice";
import { GetNewDeliveryPrice } from "./components/pages/GetNewDeliveryPrice";
import { GetLongShortRatio } from "./components/pages/GetLongShortRatio";
import { GetIndexPriceComponents } from "./components/pages/GetIndexPriceComponents";
import { GetOrderPriceLimit } from "./components/pages/GetOrderPriceLimit";
import { MovePosition } from "./components/pages/MovePosition";
import { GetMovePositionHistory } from "./components/pages/GetMovePositionHistory";
import { ConfirmNewRiskLimit } from "./components/pages/ConfirmNewRiskLimit";

import { GetTransferableAmount } from "./components/pages/GetTransferableAmount";
import { GetTransactionLog } from "./components/pages/GetTransactionLog";
import { GetAccountInfo } from "./components/pages/GetAccountInfo";
import { GetAccountInstrumentsInfo } from "./components/pages/GetAccountInstrumentsInfo";
import { GetBorrowHistory } from "./components/pages/GetBorrowHistory";
import { ManualBorrow } from "./components/pages/ManualBorrow";
import { ManualRepayWithoutAssetConversion } from "./components/pages/ManualRepayWithoutAssetConversion";
import { ManualRepay } from "./components/pages/ManualRepay";
import { GetFeeRate } from "./components/pages/GetFeeRate";
import { GetCollateralInfo } from "./components/pages/GetCollateralInfo";
import { GetDCPInfo } from "./components/pages/GetDCPInfo";
import { SetCollateralCoin } from "./components/pages/SetCollateralCoin";
import { SetMarginMode } from "./components/pages/SetMarginMode";
import { BatchSetCollateralCoin } from "./components/pages/BatchSetCollateralCoin";

import { GetTradeBehaviourConfig } from "./components/pages/GetTradeBehaviourConfig";
import { SetPriceLimitBehaviour } from "./components/pages/SetPriceLimitBehaviour";
import { GetDeliveryRecord } from "./components/pages/GetDeliveryRecord";
import { GetUSDCSessionSettlement } from "./components/pages/GetUSDCSessionSettlement";
import { GetCoinExchangeRecords } from "./components/pages/GetCoinExchangeRecords";
import { GetCoinInfo } from "./components/pages/GetCoinInfo";
import { GetSubUID } from "./components/pages/GetSubUID";
import { GetAllBalances } from "./components/pages/GetAllBalances";
import { GetDepositRecords } from "./components/pages/GetDepositRecords";
import { CreateInternalTransfer } from "./components/pages/CreateInternalTransfer";
import { SubmitWithdrawal } from "./components/pages/SubmitWithdrawal";
import { GetAPIKeyInfo } from "./components/pages/GetAPIKeyInfo";
import { DeleteSubAPIKey } from "./components/pages/DeleteSubAPIKey";
import { PublicOrderbookWS } from "./components/pages/PublicOrderbookWS";
import { PublicTradeWS } from "./components/pages/PublicTradeWS";
import { PublicTickerWS } from "./components/pages/PublicTickerWS";
import { PublicKlineWS } from "./components/pages/PublicKlineWS";
import { PublicAllLiquidationWS } from "./components/pages/PublicAllLiquidationWS";
import { PrivateOrderWS } from "./components/pages/PrivateOrderWS";
import { PrivatePositionWS } from "./components/pages/PrivatePositionWS";
import { PrivateExecutionWS } from "./components/pages/PrivateExecutionWS";
import { PrivateFastExecutionWS } from "./components/pages/PrivateFastExecutionWS";
import { PrivateWalletWS } from "./components/pages/PrivateWalletWS";


// --- PLACEHOLDER ---
import { Placeholder } from "./components/pages/Placeholder";
import { PlaceOrderApi } from "./components/pages/placeholderApi";
import { AmendOrderApi } from "./components/pages/AmendOrderApi";
import { CancelOrderApi } from "./components/pages/CancelOrderApi";
import { GetOpenClosedOrdersApi } from "./components/pages/GetOpenClosedOrdersApi";
import { CancelAllOrdersApi } from "./components/pages/CancelAllOrdersApi";
import { GetOrderHistoryApi } from "./components/pages/GetOrderHistoryApi";
import { BatchPlaceOrderApi } from "./components/pages/BatchPlaceOrderApi";
import { BatchAmendOrderApi } from "./components/pages/BatchAmendOrderApi";
import { BatchCancelOrderApi } from "./components/pages/BatchCancelOrderApi";
import { GetPositionInfoApi } from "./components/pages/GetPositionInfoApi";
import { SetLeverageApi } from "./components/pages/SetLeverageApi";
import { SwitchPositionModeApi } from "./components/pages/SwitchPositionModeApi";
import { SetTradingStopApi } from "./components/pages/SetTradingStopApi";
import { SetAutoAddMarginApi } from "./components/pages/SetAutoAddMarginApi";
import { AddReduceMarginApi } from "./components/pages/AddReduceMarginApi";
import { GetClosedPnlApi } from "./components/pages/GetClosedPnlApi";
import { GetTradeHistoryApi } from "./components/pages/GetTradeHistoryApi";
import { GetWalletBalanceApi } from "./components/pages/GetWalletBalanceApi";
import { GetBorrowHistoryApi } from "./components/pages/GetBorrowHistoryApi";
import { SetMarginModeApi } from "./components/pages/SetMarginModeApi";
import { SetCollateralCoinApi } from "./components/pages/SetCollateralCoinApi";
import { GetCollateralInfoApi } from "./components/pages/GetCollateralInfoApi";
import { GetFeeRateApi } from "./components/pages/GetFeeRateApi";
import { GetAccountInfoApi } from "./components/pages/GetAccountInfoApi";
import { GetCoinInfoApi } from "./components/pages/GetCoinInfoApi";
import { GetSubUIDApi } from "./components/pages/GetSubUIDApi";
import { GetAllCoinsBalanceApi } from "./components/pages/GetAllCoinsBalanceApi";
import { CreateInternalTransferApi } from "./components/pages/CreateInternalTransferApi";
import { GetDepositRecordsApi } from "./components/pages/GetDepositRecordsApi";
import { GetApiKeyInfoApi } from "./components/pages/GetApiKeyInfoApi";
import { GetServerTimeApi } from "./components/pages/GetServerTimeApi";
import { GetKlineApi } from "./components/pages/GetKlineApi";
import { GetMarkPriceKlineApi } from "./components/pages/GetMarkPriceKlineApi";
import { GetIndexPriceKlineApi } from "./components/pages/GetIndexPriceKlineApi";
import { GetPremiumIndexPriceKlineApi } from "./components/pages/GetPremiumIndexPriceKlineApi";
import { GetInstrumentsInfoApi } from "./components/pages/GetInstrumentsInfoApi";
import { GetOrderbookApi } from "./components/pages/GetOrderbookApi";
import { GetTickersApi } from "./components/pages/GetTickersApi";
import { GetFundingRateHistoryApi } from "./components/pages/GetFundingRateHistoryApi";
import { GetRecentPublicTradesApi } from "./components/pages/GetRecentPublicTradesApi";
import { GetOpenInterestApi } from "./components/pages/GetOpenInterestApi";
import { GetLongShortRatioApi } from "./components/pages/GetLongShortRatioApi";

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
      <div className="d-flex " style={{ marginTop: "64px" }}>
        <Sidebar />
        <div className="flex-grow-1 page-content" style={{ width: "100%" }}>
          <Routes>
            {/* Guide & Status */}
            <Route path="/" element={<IntegrationGuidance />} />
            <Route path="/docs/v5/system-status" element={<GetSystemStatus />} />
            <Route path="/docs/v5/rate-limit" element={<RateLimitRules />} />
            <Route path="/docs/v5/enum" element={<EnumsDefinitions />} />
            <Route path="/docs/v5/error" element={<ErrorCodes />} />

            {/* Market */}
            <Route path="/docs/v5/market/time" element={<GetServerTime />} />
            <Route path="/docs/v5/market/time-api" element={<GetServerTimeApi />} />
            <Route path="/docs/v5/market/kline" element={<Kline />} />
            <Route path="/docs/v5/market/kline-api" element={<GetKlineApi />} />
            <Route path="/docs/v5/market/mark-price-kline" element={<GetMarkPriceKline />} />
            <Route path="/docs/v5/market/mark-price-kline-api" element={<GetMarkPriceKlineApi />} />
            <Route path="/docs/v5/market/index-price-kline" element={<GetIndexPriceKline />} />
            <Route path="/docs/v5/market/index-price-kline-api" element={<GetIndexPriceKlineApi />} />
            <Route path="/docs/v5/market/premium-index-price-kline" element={<GetPremiumIndexPriceKline />} />
            <Route path="/docs/v5/market/premium-index-price-kline-api" element={<GetPremiumIndexPriceKlineApi />} />
            <Route path="/docs/v5/market/instruments-info" element={<GetInstrumentsInfo />} />
            <Route path="/docs/v5/market/instruments-info-api" element={<GetInstrumentsInfoApi />} />
            <Route path="/docs/v5/market/orderbook" element={<GetOrderbook />} />
            <Route path="/docs/v5/market/orderbook-api" element={<GetOrderbookApi />} />

            <Route path="/docs/v5/market/tickers" element={<Tickers />} />
            <Route path="/docs/v5/market/tickers-api" element={<GetTickersApi />} />
            <Route path="/docs/v5/market/funding-rate-history" element={<GetFundingRateHistory />} />
            <Route path="/docs/v5/market/funding-rate-history-api" element={<GetFundingRateHistoryApi />} />
            <Route path="/docs/v5/market/recent-public-trades" element={<RecentPublicTrades />} />
            <Route path="/docs/v5/market/recent-trade-api" element={<GetRecentPublicTradesApi />} />
            <Route path="/docs/v5/market/open-interest" element={<GetOpenInterest />} />
            <Route path="/docs/v5/market/open-interest-api" element={<GetOpenInterestApi />} />
            <Route path="/docs/v5/market/long-short-ratio" element={<GetLongShortRatio />} />
            <Route path="/docs/v5/market/long-short-ratio-api" element={<GetLongShortRatioApi />} />
            <Route path="/docs/v5/market/index-components" element={<GetIndexPriceComponents />} />
            <Route path="/docs/v5/market/order-price-limit" element={<GetOrderPriceLimit />} />

            {/* Trade */}
            <Route path="/docs/v5/order/create-order-api" element={<PlaceOrderApi />} />
            <Route path="/docs/v5/order/amend-order-api" element={<AmendOrderApi />} />
            <Route path="/docs/v5/order/cancel-order-api" element={<CancelOrderApi />} />
            <Route path="/docs/v5/order/create-order" element={<PlaceOrder />} />
            <Route path="/docs/v5/order/amend-order" element={<AmendOrder />} />
            <Route path="/docs/v5/order/cancel-order" element={<CancelOrder />} />

            <Route path="/docs/v5/order/open-order" element={<GetOpenClosedOrders />} />
            <Route path="/docs/v5/order/open-order-api" element={<GetOpenClosedOrdersApi />} />
            <Route path="/docs/v5/order/cancel-all" element={<CancelAllOrders />} />
            <Route path="/docs/v5/order/cancel-all-api" element={<CancelAllOrdersApi />} />
            <Route path="/docs/v5/order/history" element={<GetOrderHistory />} />
            <Route path="/docs/v5/order/history-api" element={<GetOrderHistoryApi />} />
            <Route path="/docs/v5/execution/list" element={<GetTradeHistory />} />
            <Route path="/docs/v5/execution/list-api" element={<GetTradeHistoryApi />} />
            <Route path="/docs/v5/order/batch-place" element={<BatchPlaceOrder />} />
            <Route path="/docs/v5/order/batch-place-api" element={<BatchPlaceOrderApi />} />
            <Route path="/docs/v5/order/batch-amend" element={<BatchAmendOrder />} />
            <Route path="/docs/v5/order/batch-amend-api" element={<BatchAmendOrderApi />} />
            <Route path="/docs/v5/order/batch-cancel" element={<BatchCancelOrder />} />
            <Route path="/docs/v5/order/batch-cancel-api" element={<BatchCancelOrderApi />} />

            {/* Position */}
            <Route path="/docs/v5/position/info" element={<GetPositions />} />
            <Route path="/docs/v5/position/info-api" element={<GetPositionInfoApi />} />
            <Route path="/docs/v5/position/leverage" element={<SetLeverage />} />
            <Route path="/docs/v5/position/leverage-api" element={<SetLeverageApi />} />
            <Route path="/docs/v5/position/switch-mode" element={<SwitchMarginMode />} />
            <Route path="/docs/v5/position/switch-mode-api" element={<SwitchPositionModeApi />} />
            <Route path="/docs/v5/position/trading-stop" element={<SetTradingStop />} />
            <Route path="/docs/v5/position/trading-stop-api" element={<SetTradingStopApi />} />
            <Route path="/docs/v5/position/set-auto-add-margin" element={<AutoIsolatedMargin />} />
            <Route path="/docs/v5/position/auto-add-margin-api" element={<SetAutoAddMarginApi />} />
            <Route path="/docs/v5/position/add-margin" element={<AddIsolatedMargin />} />
            <Route path="/docs/v5/position/add-margin-api" element={<AddReduceMarginApi />} />
            <Route path="/docs/v5/position/closed-pnl" element={<GetClosedPnl />} />
            <Route path="/docs/v5/position/closed-pnl-api" element={<GetClosedPnlApi />} />

            <Route path="/docs/v5/position/move-position" element={<MovePosition />} />
            <Route path="/docs/v5/position/move-position-history" element={<GetMovePositionHistory />} />
            <Route path="/docs/v5/position/confirm-new-risk-limit" element={<ConfirmNewRiskLimit />} />

            {/* Account */}
            <Route path="/docs/v5/account/wallet-balance" element={<GetWalletBalance />} />
            <Route path="/docs/v5/account/wallet-balance-api" element={<GetWalletBalanceApi />} />
            <Route path="/docs/v5/account/transferable-amount" element={<GetTransferableAmount />} />
            <Route path="/docs/v5/account/transaction-log" element={<GetTransactionLog />} />
            <Route path="/docs/v5/account/info" element={<GetAccountInfo />} />
            <Route path="/docs/v5/account/account-info-api" element={<GetAccountInfoApi />} />
            <Route path="/docs/v5/account/instruments-info" element={<GetAccountInstrumentsInfo />} />
            <Route path="/docs/v5/account/manual-borrow" element={<ManualBorrow />} />
            <Route path="/docs/v5/account/manual-repay-without-conversion" element={<ManualRepayWithoutAssetConversion />} />
            <Route path="/docs/v5/account/manual-repay" element={<ManualRepay />} />
            <Route path="/docs/v5/account/borrow-history" element={<GetBorrowHistory />} />
            <Route path="/docs/v5/account/borrow-history-api" element={<GetBorrowHistoryApi />} />
            <Route path="/docs/v5/account/fee-rate" element={<GetFeeRate />} />
            <Route path="/docs/v5/account/fee-rate-api" element={<GetFeeRateApi />} />
            <Route path="/docs/v5/account/collateral-info" element={<GetCollateralInfo />} />
            <Route path="/docs/v5/account/collateral-info-api" element={<GetCollateralInfoApi />} />
            <Route path="/docs/v5/account/dcp-info" element={<GetDCPInfo />} />
            <Route path="/docs/v5/account/set-collateral-coin" element={<SetCollateralCoin />} />
            <Route path="/docs/v5/account/set-collateral-coin-api" element={<SetCollateralCoinApi />} />
            <Route path="/docs/v5/account/batch-set-collateral-coin" element={<BatchSetCollateralCoin />} />
            <Route path="/docs/v5/account/set-margin-mode" element={<SetMarginMode />} />
            <Route path="/docs/v5/account/set-margin-mode-api" element={<SetMarginModeApi />} />
            <Route path="/docs/v5/account/user-setting-config" element={<GetTradeBehaviourConfig />} />
            <Route path="/docs/v5/account/set-price-limit" element={<SetPriceLimitBehaviour />} />

            {/* Asset */}
            <Route path="/docs/v5/asset/coin-info" element={<GetCoinInfo />} />
            <Route path="/docs/v5/asset/coin-info-api" element={<GetCoinInfoApi />} />
            <Route path="/docs/v5/asset/sub-uid" element={<GetSubUID />} />
            <Route path="/docs/v5/asset/sub-uid-api" element={<GetSubUIDApi />} />
            <Route path="/docs/v5/asset/balances/all" element={<GetAllBalances />} />
            <Route path="/docs/v5/asset/balances-all-api" element={<GetAllCoinsBalanceApi />} />
            <Route path="/docs/v5/asset/transfer/internal" element={<CreateInternalTransfer />} />
            <Route path="/docs/v5/asset/transfer-internal-api" element={<CreateInternalTransferApi />} />
            <Route path="/docs/v5/asset/deposit/records" element={<GetDepositRecords />} />
            <Route path="/docs/v5/asset/deposit-record-api" element={<GetDepositRecordsApi />} />
            <Route path="/docs/v5/asset/withdraw/create" element={<SubmitWithdrawal />} />


            {/* User */}
            <Route path="/docs/v5/user/apikey-info" element={<GetAPIKeyInfo />} />
            <Route path="/docs/v5/user/apikey-info-api" element={<GetApiKeyInfoApi />} />
            <Route path="/docs/v5/user/rm-sub-apikey" element={<DeleteSubAPIKey />} />

            {/* Websocket Stream */}
            <Route path="/docs/v5/ws/connect" element={<Connect />} />
            <Route path="/docs/v5/websocket/public/orderbook" element={<PublicOrderbookWS />} />
            <Route path="/docs/v5/websocket/public/trade" element={<PublicTradeWS />} />
            <Route path="/docs/v5/websocket/public/ticker" element={<PublicTickerWS />} />
            <Route path="/docs/v5/websocket/public/kline" element={<PublicKlineWS />} />
            <Route path="/docs/v5/websocket/public/all-liquidation" element={<PublicAllLiquidationWS />} />
            <Route path="/docs/v5/websocket/private/order" element={<PrivateOrderWS />} />
            <Route path="/docs/v5/websocket/private/position" element={<PrivatePositionWS />} />
            <Route path="/docs/v5/websocket/private/execution" element={<PrivateExecutionWS />} />
            <Route path="/docs/v5/websocket/private/fast-execution" element={<PrivateFastExecutionWS />} />
            <Route path="/docs/v5/websocket/private/wallet" element={<PrivateWalletWS />} />

          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
