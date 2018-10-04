import React from "react";

function Option({ onSelect, children, active }) {
  return (
    <div onClick={onSelect} style={{ color: active ? "blue" : "black" }}>
      {children}
    </div>
  );
}

export { Option };
