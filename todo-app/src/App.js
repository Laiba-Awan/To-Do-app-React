import React, { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import Buttons from "./components/Buttons";
import Header from "./components/Header";
import Input from "./components/Input";
import TodoList from "./components/TodoList";

function App() {

  //States//
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [validation, setValidation] = useState(false);
  const [toEdit, setToEdit] = useState(false);
  const [editIndex, setEditIndex] = useState(-1);

  //HandleFunctions//
  const handleClick = () => {
    const allTodos = [...todos];
    if (!input.replace()) {
      setValidation(true);
      return;
    } else {
      setValidation(false);
    }
    if (toEdit) {
      allTodos[editIndex] = { todo: input, completed: false };
      setToEdit(false);
      setEditIndex(-1);
    } else {
      allTodos.push({ todo: input, completed: false });
    }
    setTodos(allTodos);
    setInput("");
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

  // UseEffect to store data in localStorge//
  useEffect(() => {
    console.log("todos", todos);
    if (todos.length > 0)
      localStorage.setItem("completeTodos", JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    console.log("useEffect");
    setTodos(JSON.parse(localStorage.getItem("completeTodos")));
  }, []);

  return (
    <div className="container text-center cont1">
      <div className="col-md-12 col-12 mt-lg-4 mt-3">
        <h2>
          <Header />
          Tuesday,21<sup>st</sup>
        </h2>
        <h6>September</h6>
        <div className="col-lg-8 col-sm-12 offset-lg-2">
          <Input
            onChange={(e) => {
              setInput(e.target.value);
            }}
            type="text"
            placeholder="Add To-do"
            value={input}
          />
        </div>
        {validation && (
          <p className="validation">
            Input Field is Empty! <br /> Write Something!
          </p>
        )}

        <Buttons
          type="button"
          onClick={handleClick}
          className="btn btn-primary mybtn py-lg-2 px-lg-4 mb-2"
        >
          <i className="fa-solid fa-circle-plus me-lg-1 me-1"></i>
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
