import React, { useState } from 'react';
import { IoIosArrowForward } from "react-icons/io";

const CollapsibleApiBox = ({ title, children, defaultOpen = true }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className={`api-box ${!isOpen ? 'collapsed' : ''}`}>
      <div className="api-box-header" onClick={() => setIsOpen(!isOpen)}>
        <IoIosArrowForward className={`arrow-icon ${isOpen ? "rotate" : ""}`} />
        <span>{title}</span>
      </div>
      {isOpen && (
        <div className="api-box-content">
          {children}
        </div>
      )}
    </div>
  );
};

export default CollapsibleApiBox;
