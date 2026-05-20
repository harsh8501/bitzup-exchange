import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

export const RequestQueryEditor = ({ requestBody, setRequestBody, requiredFields }) => {
  const [isEditOpen, setIsEditOpen] = useState(true);

  if (!requestBody || !setRequestBody) return null;

  const keys = Object.keys(requestBody);

  const getFieldInfo = (key) => {
    const keyLower = key.toLowerCase();
    
    let isMandatory = false;
    if (requiredFields && Array.isArray(requiredFields)) {
      isMandatory = requiredFields.some(rf => rf.toLowerCase() === keyLower);
    } else {
      // Mandatory / Required Fields
      const mandatoryKeys = [
        "category", "symbol", "side", "ordertype", "qty",
        "leverage", "marginmode", "positionidx", "coin", "settlecoin"
      ];
      isMandatory = mandatoryKeys.some(mk => keyLower.includes(mk));
    }

    // Custom Choices / Enums
    let choices = null;
    let inputType = "text";

    if (keyLower === "category") {
      choices = requestBody.category === "inverse" ? ["inverse"] : ["linear"];
    } else if (keyLower === "side") {
      choices = ["Buy", "Sell"];
    } else if (keyLower === "ordertype") {
      choices = ["Limit", "Market"];
    } else if (keyLower === "timeinforce") {
      choices = ["GTC", "IOC", "FOK", "PostOnly"];
    } else if (keyLower === "positionidx") {
      choices = ["0", "1", "2"];
    } else if (keyLower === "interval") {
      choices = ["1", "3", "5", "15", "30", "60", "120", "240", "360", "720", "D", "M", "W"];
    } else if (keyLower === "marginmode") {
      choices = ["ISOLATED", "CROSS"];
    } else if (["leverage", "positionidx"].some(k => keyLower.includes(k))) {
      inputType = "number";
    }

    return { isMandatory, choices, inputType };
  };

  const handleValueChange = (key, val) => {
    setRequestBody(prev => {
      // Toggle-deselect logic: if clicking the active one, clear it (make it empty/null)
      const isAlreadyActive = prev[key] !== undefined && prev[key] !== null && prev[key].toString() === val;
      const finalVal = isAlreadyActive ? "" : val;
      return { ...prev, [key]: finalVal };
    });
  };

  return (
    <div className="api-box edit-request-box" style={{ marginTop: "24px" }}>
      <style>{`
        .badge-tag { font-size: 10px; font-weight: 700; padding: 2px 6px; border-radius: 4px; text-transform: uppercase; letter-spacing: 0.5px; margin-left: 8px; }
        .badge-tag.mandatory { background: rgba(255, 77, 79, 0.15); color: #ff4d4f; border: 1px solid rgba(255, 77, 79, 0.3); }
        .badge-tag.optional { background: rgba(88, 166, 255, 0.15); color: #58a6ff; border: 1px solid rgba(88, 166, 255, 0.3); }
        .form-input:focus, .form-select:focus { border-color: #2edbad !important; box-shadow: 0 0 0 2px rgba(46, 219, 173, 0.1); }
        .pill-btn:hover { border-color: #2edbad !important; color: #fff !important; }
        .api-box-header.collapsible::before { content: none !important; }
        .api-box-header.collapsible .chevron { font-size: 16px; color: #888; transition: transform 0.2s ease; margin-left: auto; }
        .api-box-header.collapsible .chevron.open { transform: rotate(180deg); color: #2edbad; }
      `}</style>

      <div 
        className="api-box-header collapsible" 
        onClick={() => setIsEditOpen(!isEditOpen)}
        style={{ cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}
      >
        <span>Edit Request Params</span>
        <IoIosArrowDown className={`chevron ${isEditOpen ? "open" : ""}`} />
      </div>

      {isEditOpen && (
        <div className="edit-request-form" style={{ marginTop: "16px", paddingLeft: "8px" }}>
          {keys.map(key => {
            const { isMandatory, choices, inputType } = getFieldInfo(key);
            const value = requestBody[key] !== undefined && requestBody[key] !== null ? requestBody[key] : "";

            return (
              <div className="form-group" style={{ marginBottom: "16px" }} key={key}>
                <div style={{ display: "flex", alignItems: "center", marginBottom: "8px" }}>
                  <span className="field-label" style={{ fontWeight: "600", fontSize: "14px" }}>{key}</span>
                  <span className={`badge-tag ${isMandatory ? "mandatory" : "optional"}`}>
                    {isMandatory ? "mandatory" : "optional"}
                  </span>
                </div>

                {choices ? (
                  <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                    {choices.map(val => (
                      <button
                        key={val}
                        type="button"
                        onClick={() => handleValueChange(key, val)}
                        className={`pill-btn ${value.toString() === val ? "active" : ""}`}
                        style={{
                          background: value.toString() === val ? "var(--accent-neon-dim, rgba(46, 219, 173, 0.15))" : "var(--bg-secondary, #0f141c)",
                          color: value.toString() === val ? "var(--accent-neon, #2edbad)" : "var(--text-secondary, #8b949e)",
                          border: `1px solid ${value.toString() === val ? "var(--accent-neon, #2edbad)" : "var(--border-color, #3d4653)"}`,
                          padding: "6px 14px",
                          borderRadius: "20px",
                          fontSize: "13px",
                          cursor: "pointer",
                          transition: "all 0.2s ease"
                        }}
                      >
                        {val}
                      </button>
                    ))}
                  </div>
                ) : (
                  <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
                    <input
                      type={inputType}
                      value={value}
                      onChange={(e) => handleValueChange(key, inputType === "number" ? (e.target.value ? parseFloat(e.target.value) : "") : e.target.value)}
                      className="form-input"
                      placeholder={`Enter ${key}...`}
                      style={{
                        background: "var(--bg-primary, #0f141c)",
                        border: "1px solid var(--border-color, #3d4653)",
                        color: "var(--text-primary, #fff)",
                        padding: "8px 32px 8px 12px",
                        borderRadius: "6px",
                        fontSize: "14px",
                        width: "100%",
                        outline: "none",
                        boxSizing: "border-box"
                      }}
                    />
                    {value !== "" && value !== null && value !== undefined && (
                      <button
                        type="button"
                        onClick={() => handleValueChange(key, "")}
                        style={{
                          position: "absolute",
                          right: "10px",
                          background: "transparent",
                          border: "none",
                          color: "#8b949e",
                          fontSize: "16px",
                          cursor: "pointer",
                          padding: "0",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          transition: "color 0.2s ease",
                          outline: "none"
                        }}
                        onMouseEnter={(e) => e.target.style.color = "#ff4d4f"}
                        onMouseLeave={(e) => e.target.style.color = "#8b949e"}
                      >
                        ×
                      </button>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
