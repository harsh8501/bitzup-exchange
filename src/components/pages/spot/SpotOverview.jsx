import React from "react";

export const SpotOverview = () => {
  return (
    <div style={{ padding: "40px 60px", color: "var(--text-primary)", background: "var(--bg-primary)", minHeight: "calc(100vh - 64px)" }}>
      <div style={{ fontSize: "14px", color: "var(--text-muted)", marginBottom: "16px" }}>
        Spot APIs &gt; <span style={{ color: "var(--text-accent)" }}>Overview</span>
      </div>
      <h1 style={{ fontSize: "32px", fontWeight: "700", marginBottom: "16px" }}>Spot Public APIs</h1>
      <p style={{ color: "var(--text-secondary)", fontSize: "16px", maxWidth: "700px", lineHeight: "1.6" }}>
        Welcome to the Bitzup Spot API Documentation. Use the sidebar menu to navigate through available Spot Public API endpoints.
      </p>
    </div>
  );
};

export default SpotOverview;
