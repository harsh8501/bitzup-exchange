import { useState, useRef } from "react";

export default function CopyCodeBlock({ code }) {
  const [copied, setCopied] = useState(false);
  const codeRef = useRef(null);

  const handleCopy = async () => {
    try {
      const text = codeRef.current.innerText;
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error("Copy failed", err);
    }
  };

  return (
    <div style={{ position: "relative" }}>
      <pre
        ref={codeRef}
        style={{
          background: "#0f172a",
          color: "#e5e7eb",
          padding: "14px",
          borderRadius: "8px",
          fontSize: "13px",
          lineHeight: "1.5",
          overflowX: "auto",
        }}
      >
{code}
      </pre>

      <button
        onClick={handleCopy}
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          background: "#1e293b",
          color: "#e5e7eb",
          border: "1px solid #334155",
          borderRadius: "6px",
          padding: "4px 8px",
          fontSize: "12px",
          cursor: "pointer",
        }}
      >
        {copied ? "Copied" : "Copy"}
      </button>
    </div>
  );
}