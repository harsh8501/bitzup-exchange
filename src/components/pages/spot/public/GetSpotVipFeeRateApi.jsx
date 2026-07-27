import { useRef, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import ApiExplorer from "../../../ApiExplorer/ApiExplorer";
import { RequestQueryEditor } from "../../../RequestQueryEditor/RequestQueryEditor";

export const GetSpotVipFeeRateApi = () => {
  const contentRef = useRef(null);

  const [requestBody, setRequestBody] = useState({});

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
          
          .res-badge { display: flex; align-items: center; gap: 8px; background: rgba(31, 177, 132, 0.1); color: #1fb184; padding: 6px 14px; border-radius: 6px; font-size: 12px; font-weight: 700; border: 1px solid rgba(31, 177, 132, 0.4); }
          .dot { width: 6px; height: 6px; background: #1fb184; border-radius: 50%; }
          .panel-section-title { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; }
      `}</style>

      <div className="docs-panel" ref={contentRef}>
        <div className="breadcrumb">
          <span>Market</span> <IoIosArrowForward size={12} /> <span className="pill">Get VIP Fee Rate</span>
        </div>
        <h1 className="api-title">Get VIP Fee Rate</h1>
        <p style={{ color: "#888", marginBottom: "40px" }}>Get VIP Fee Rate parameters for spot trading.</p>

        <div style={{ marginTop: "32px" }}>
          <div className="panel-section-title">
            <h3 style={{ fontSize: "22px", fontWeight: "700", margin: 0 }}>Responses</h3>
            <div className="res-badge">
              <span className="dot"></span>
              200
            </div>
          </div>
          <div style={{ height: "1px", background: "#222", marginBottom: "32px" }}></div>
          <p style={{ fontSize: "14px", color: "#8b949e", marginBottom: "24px" }}>
            Successful operation
          </p>
        </div>
      </div>

      <ApiExplorer
        requiredFields={[]} 
        method="GET" 
        endpoint="/api/v2/spot/market/vip-fee-rate" 
        baseUrl="https://api.bitget.com"
        initialBody={requestBody} 
        editable={false} 
        externalBody={requestBody} 
        setExternalBody={setRequestBody} 
      />
    </div>
  );
};

export default GetSpotVipFeeRateApi;
