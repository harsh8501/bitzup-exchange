import { useRef } from "react";
import { IoIosArrowForward } from "react-icons/io";
import ApiExplorer from "../ApiExplorer/ApiExplorer";

export const GetOpenClosedOrdersApi = () => {
  const contentRef = useRef(null);

  const initialBody = {
    category: "linear",
    symbol: "ETHUSDT",
    baseCoin: "",
    settleCoin: "",
    orderId: "",
    orderLinkId: "",
    orderFilter: "Order",
    openOnly: 0,
    limit: 20,
    cursor: ""
  };

  return (
    <div className="api-doc-container">
      <style>{`
          .api-doc-container { background: #000; color: #fff; font-family: 'Inter', sans-serif; height: 100vh; display: flex; overflow: hidden; }
          .docs-panel { flex: 1; overflow-y: auto; padding: 40px 60px; border-right: 1px solid #222; }
          
          @media (max-width: 1024px) {
            .api-doc-container { flex-direction: column; height: auto; }
            .docs-panel { border-right: none; padding: 40px 20px; height: auto; }
          }

          .breadcrumb { font-size: 14px; color: #888; display: flex; align-items: center; gap: 8px; margin-bottom: 24px; }
          .breadcrumb .pill { color: #2edbad; font-weight: 500; }
          .api-title { font-size: 32px; font-weight: 700; margin-bottom: 12px; }
          
          .api-box { background: #171d26; border-radius: 4px; padding: 16px; margin-bottom: 16px; }
          .api-box-header { display: flex; align-items: center; gap: 8px; font-size: 16px; font-weight: 600; margin-bottom: 12px; color: #fff; }
          .api-box-header::before { content: '▼'; font-size: 10px; color: #888; }
          
          .tree-view { border-left: 1px solid #3d4653; padding-left: 20px; margin-left: 8px; position: relative; }
          .tree-item { margin-bottom: 20px; position: relative; }
          .tree-item::before { content: ''; position: absolute; left: -20px; top: 10px; width: 12px; height: 1px; background: #3d4653; }
          
          .p-name { font-weight: 700; font-size: 14px; color: #fff; }
          .p-type { color: #6a737d; font-size: 14px; margin-left: 8px; }
          .p-desc { font-size: 14px; color: #8b949e; margin-top: 4px; line-height: 1.6; }
          .req-tag { color: #ff4d4f; font-size: 12px; font-weight: 600; margin-left: 8px; text-transform: uppercase; }
          
          .val-pill { background: #1e293b; color: #2edbad; padding: 2px 8px; border-radius: 4px; font-size: 12px; font-family: monospace; margin: 0 4px; }
          .res-badge { display: flex; align-items: center; gap: 8px; background: rgba(31, 177, 132, 0.1); color: #1fb184; padding: 6px 14px; border-radius: 6px; font-size: 12px; font-weight: 700; border: 1px solid rgba(31, 177, 132, 0.4); }
          .dot { width: 6px; height: 6px; background: #1fb184; border-radius: 50%; }
          .panel-section-title { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; }
      `}</style>

      <div className="docs-panel" ref={contentRef}>
        <div className="breadcrumb">
          <span>Trade</span> <IoIosArrowForward size={12} /> <span className="pill">Get Open/Closed Orders</span>
        </div>
        <h1 className="api-title">Get Open/Closed Orders (Real-time)</h1>
        <p style={{ color: "#888", marginBottom: "40px" }}>Query your real-time orders.</p>

        <div className="api-box">
          <div className="api-box-header">Header Parameters</div>
          <div className="tree-view">
            {[
              { name: "apiKey", type: "string", req: true, desc: "Your API key" },
              { name: "secret", type: "string", req: true, desc: "Your API secret" },
              { name: "timestamp", type: "string", req: true, desc: "Current timestamp in milliseconds" },
              { name: "sign", type: "string", req: true, desc: "Request signature" },
            ].map(p => (
              <div className="tree-item" key={p.name}>
                <span className="p-name">{p.name}</span>
                <span className="p-type">{p.type}</span>
                {p.req && <span className="req-tag">required</span>}
                <p className="p-desc">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="api-box">
          <div className="api-box-header">Query Parameters</div>
          <div className="tree-view">
            {[
              { name: "category", type: "string", req: true, desc: "Product type", values: ["linear", "inverse", "option", "spot"] },
              { name: "symbol", type: "string", desc: "Symbol name" },
              { name: "baseCoin", type: "string", desc: "Base coin" },
              { name: "settleCoin", type: "string", desc: "Settle coin. Spot is not available." },
              { name: "orderId", type: "string", desc: "Order id" },
              { name: "orderLinkId", type: "string", desc: "User customised order id" },
              { name: "orderFilter", type: "string", desc: "Order filter. Default: all kinds of orders", values: ["Order", "StopOrder", "tpslOrder"] },
              { name: "openOnly", type: "integer", desc: "0: active orders, 1: final status orders in last 10 mins, 2: all status", values: ["0", "1", "2"] },
              { name: "limit", type: "integer", desc: "Limit for pagination. Default 20, max 50" },
              { name: "cursor", type: "string", desc: "Cursor, used for pagination" },
            ].map(p => (
              <div className="tree-item" key={p.name}>
                <span className="p-name">{p.name}</span>
                <span className="p-type">{p.type}</span>
                {p.req && <span className="req-tag">required</span>}
                <p className="p-desc">{p.desc}</p>
                {p.values && <div style={{marginTop: '8px'}}>{p.values.map(v => <span key={v} className="val-pill">{v}</span>)}</div>}
              </div>
            ))}
          </div>
        </div>

                        <div style={{ marginTop: "64px" }}>
          <div className="panel-section-title">
            <h3 style={{ fontSize: "22px", fontWeight: "700", margin: 0 }}>Responses</h3>
            <div className="res-badge">
              <span className="dot"></span>
              200
            </div>
          </div>
          <div
            style={{ height: "1px", background: "#222", marginBottom: "32px" }}
          ></div>
          <p
            style={{ fontSize: "14px", color: "#8b949e", marginBottom: "24px" }}
          >
            successful operation
          </p>
        </div>
      </div>

      <ApiExplorer 
        method="GET" 
        endpoint="/v5/order/realtime" 
        initialBody={initialBody} 
      />
    </div>
  );
};
