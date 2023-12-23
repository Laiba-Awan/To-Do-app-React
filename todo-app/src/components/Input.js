import React, { useState } from "react";

function Input() {
  const [todos, setTodos] = useState([]);
  const [Input, setInput] = useState("");
  const [toEdit, setToEdit] = useState(false);

  const handleClick = (e) => {
    if(toEdit){

    }
    else{
      setTodos([...todos, Input]);
      setInput("");
    }
  };

  const handleDlt = (index) => {
    console.log("index", index);
    const allTodos = [...todos];
    allTodos.splice(index, 1);
    console.log("allTodos", allTodos);
    setTodos(allTodos);
  };

  const handleEdit = (index) => {
    const value = todos[index];
    setToEdit(true);
    console.log("value", value);
    setInput(value);
  };
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
      <button type="button" onClick={handleClick} className="btn btn-primary">
       {toEdit ? "Edit Todo" : "Add Todo"}
      </button>
      {todos.map((curValue, i) => (
        <>
          <p key={i}>{curValue}</p>
          <button onClick={() => handleDlt(i)} type="button">
            Remove
          </button>
          <button onClick={() => handleEdit(i)} type="button">
          Edit
          </button>
        </>
      ))}
    </form>
  );
}
export default Input;
