import React, { useState } from "react";

function Input() {
  const [todos, setTodos] = useState([]);
  const [Input, setInput] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    console.log("todo", Input);
    setTodos([...todos, Input]);
    setInput("");
  };

  const handleDlt = (index) => {
    console.log("index", index);
    const allTodos = [...todos];
    allTodos.splice(index, 1);
    console.log("allTodos", allTodos);
    setTodos(allTodos);
  };

  const handleEdit = (index) =>{
    console.log("index", index);
  }
  return (
    <form className="form">
      <h2 className="heading">
        Tuesday,21<sup>st</sup>
      </h2>
      <h6>September</h6>
      <input
        onChange={(e) => {
          setInput(e.target.value);
        }}
        type="text"
        placeholder="Add To-do"
        value={Input}
        className="todo-input"
      />
      <button onClick={handleClick} className="btn btn-primary">
        Add Todo
      </button>
      {todos.map((curValue, i) => (
        <>
          <p key={i}>{curValue}</p>
          <button onClick={() => handleDlt(i)}>Remove</button>
          <button onClick={handleEdit(i)}>Edit</button>
        </>
      ))}
    </form>
  );
}
export default Input;
