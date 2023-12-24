import React, { useState } from "react";
import "./App.css";
import Buttons from "./components/Buttons";
import Header from "./components/Header"
import Input from "./components/Input";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [toEdit, setToEdit] = useState(false);
  const [editIndex, setEditIndex] = useState(-1);

  const handleClick = () => {
    if (toEdit) {
      const allTodos = [...todos];
      allTodos[editIndex] = { todo: input, completed: false };
      setTodos(allTodos);
      setInput("");
      setToEdit(false);
      setEditIndex(-1);
    } else {
      setTodos([...todos, { todo: input, completed: false }]);
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
    setTodos([]);
  };

  return (
    <div className="container text-center">
      <div className="app-body">
        <h2 className="heading">
          <Header />
          Tuesday,21<sup>st</sup>
        </h2>
        <h6>September</h6>

        <Input
          onChange={(e) => {
            setInput(e.target.value);
          }}
          type="text"
          placeholder="Add To-do"
          value={input}
        />

        <Buttons
          type="button"
          onClick={handleClick}
          className="btn btn-primary"
        >
          {toEdit ? "Save" : "Add Todo"}
        </Buttons>

        <TodoList
          todos={todos}
          handleDltAll={handleDltAll}
          handleDlt={handleDlt}
          handleEdit={handleEdit}
          handleCompleted={handleCompleted}
        />
      </div>
    </div>
  );
}

export default App;
