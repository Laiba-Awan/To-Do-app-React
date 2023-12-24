import React from "react";

const Buttons = ({ className, onClick, children }) => {
  return (
    <div>
      <button type="button" onClick={onClick} className={className}>
        {children}
      </button>
    </div>
  );
};

export default Buttons;
