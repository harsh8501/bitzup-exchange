import { useRef, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import ApiExplorer from "../ApiExplorer/ApiExplorer";
import { RequestQueryEditor } from "../RequestQueryEditor/RequestQueryEditor";

export const GetOpenInterestApi = () => {
  const contentRef = useRef(null);

  const [requestBody, setRequestBody] = useState({
    category: "linear",
    symbol: "BTCUSDT",
    intervalTime: "1h",
    startTime: "",
    endTime: "",
    limit: 50,
    cursor: ""
  });

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
          <span>Market</span> <IoIosArrowForward size={12} /> <span className="pill">Get Open Interest</span>
        </div>
        <h1 className="api-title">Get Open Interest</h1>
        <p style={{ color: "#888", marginBottom: "40px" }}>Query the total amount of outstanding contracts for a specific symbol.</p>

        <div className="api-box">
          <div className="api-box-header">Query Parameters</div>
          <div className="tree-view">
            {[
              { name: "category", type: "string", req: true, desc: "Product type", values: ["linear"] },
              { name: "symbol", type: "string", req: true, desc: "Symbol name" },
              { name: "intervalTime", type: "string", req: true, desc: "Interval time", values: ["5min", "15min", "30min", "1h", "4h", "1d"] },
              { name: "startTime", type: "integer", desc: "The start timestamp (ms)" },
              { name: "endTime", type: "integer", desc: "The end timestamp (ms)" },
              { name: "limit", type: "integer", desc: "Limit per page. Default 50, max 200" },
              { name: "cursor", type: "string", desc: "Cursor for pagination" },
            ].map(p => (
              <div className="tree-item" key={p.name}>
                <span className="p-name">{p.name}</span>
                <span className="p-type">{p.type}</span>
                {p.req && <span className="req-tag">required</span>}
                <p className="p-desc">{p.desc}</p>
                {p.values && <div style={{marginTop: '8px', display: 'flex', flexWrap: 'wrap', gap: '4px'}}>{p.values.map(v => <span key={v} className="val-pill">{v}</span>)}</div>}
              </div>
            ))}
          </div>
        </div>

        <RequestQueryEditor requestBody={requestBody} setRequestBody={setRequestBody} requiredFields={["category", "symbol", "intervalTime"]} />

        <div style={ {marginTop: "64px" }}>
          <div className="panel-section-title">
            <h3 style={{ fontSize: "22px", fontWeight: "700", margin: 0 }}>Responses</h3>
            <div className="res-badge"><span className="dot"></span>200</div>
            <div style={{ height: "1px", background: "#222", marginBottom: "32px" }}></div>
            <p style={{ fontSize: "14px", color: "#8b949e" }}>successful operation</p>
            </div>
        </div>

      </div>

      <ApiExplorer
        requiredFields={["category", "symbol", "intervalTime"]} 
        method="GET" 
        endpoint="/v5/market/open-interest" 
        initialBody={requestBody} editable={false} externalBody={requestBody} setExternalBody={setRequestBody} 
      />
    </div>
  );
};
