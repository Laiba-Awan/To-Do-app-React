import React from "react";

function Input({ type, onChange, placeholder, value }) {
  return (
    <input
      className=""
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      type={type}
    />
  );
}

export default Input;
