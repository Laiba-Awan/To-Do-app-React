import React from "react";
import Buttons from "./Buttons";
import TodoItem from "./TodoItem";

const TodoList = ({
  todos,
  handleDlt,
  handleEdit,
  handleCompleted,
  handleDltAll,
}) => {
  return (
    <div>
      {todos.length > 0 && (
        <Buttons
          onClick={handleDltAll}
          className="btn btn-primary mybtn py-lg-2 py-2 px-lg-4 px-3"
        >
          <i className="fa-solid fa-trash me-lg-1 me-1" /> Delete All
        </Buttons>
      )}
      
      <hr className="hr" />

      {todos.map((curValue, i) => (
        <div>
          <TodoItem
            handleDlt = {handleDlt}
            handleEdit = {handleEdit}
            curValue = {curValue}
            handleCompleted = {handleCompleted}
            key = {i}
            index = {i}
          />
        </div>
      ))}
    </div>
  );
};

export default TodoList;
