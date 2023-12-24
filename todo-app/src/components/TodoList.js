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
        <Buttons onClick={handleDltAll}> Delete All</Buttons>
      )}

      {todos.map((curValue, i) => (
        <div>
          <TodoItem
            handleDlt={handleDlt}
            handleEdit={handleEdit}
            curValue={curValue}
            handleCompleted={handleCompleted}
            key={i}
            index={i}
          />
        </div>
      ))}
    </div>
  );
};

export default TodoList;
