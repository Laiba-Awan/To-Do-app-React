import React from "react";

function Input({ type, onChange, placeholder, value }) {
  return (
    <input
      className="todo-input w-100 mt-lg-4 mb-3 mt-2 mb-md-5 py-md-3 py-2"
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      type={type}
    />
  );
}

export default Input;
