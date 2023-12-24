import React, { useState } from "react";

function Input() {
  const [todos, setTodos] = useState([]);
  const [Input, setInput] = useState("");
  const [toEdit, setToEdit] = useState(false);
  const [editIndex, setEditIndex] = useState(-1);
  const [dltAll, SetDltAll] = useState([...todos]);


  const handleClick = () => {
    if (toEdit) {
      const allTodos = [...todos];
      allTodos[editIndex] = { todo: Input, completed: false };
      setTodos(allTodos);
      setInput("");
      setToEdit(false);
      setEditIndex(-1);
    } else {
      setTodos([...todos, { todo: Input, completed: false }]);
      setInput("");
    }
  };

  const handleDlt = (index) => {
    const allTodos = [...todos];
    allTodos.splice(index, 1);
    console.log("allTodos", allTodos);
    setTodos(allTodos);
    setInput("");
    setToEdit(false);
  };

  const handleEdit = (index) => {
    const { todo } = todos[index];
    setToEdit(true);
    setInput(todo);
    setEditIndex(index);
  };

  const handleCompleted = (index) => {
    const markTodos = [...todos];
    const todoMark = markTodos[index];
    todoMark.completed = true;
    console.log("markTodos", markTodos);
    setTodos(markTodos);
  };
  const handleDltAll = () => {
    SetDltAll([]);
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
        {toEdit ? "Save" : "Add Todo"}
      </button>
      <button type="button" onClick={handleDltAll} className="btn btn-warning">
        Delete All
      </button>

      {todos.map((curValue, i) => (
        <>
          <p className={curValue.completed ? "markdone" : "none"} key={i}>
            {curValue.todo}
          </p>
          <button onClick={() => handleDlt(i)} type="button">
            Remove
          </button>
          <button onClick={() => handleEdit(i)} type="button">
            Edit
          </button>
          <button type="button" onClick={() => handleCompleted(i)}>
            Completed
          </button>
        </>
      ))}
    </form>
  );
}
export default Input;
