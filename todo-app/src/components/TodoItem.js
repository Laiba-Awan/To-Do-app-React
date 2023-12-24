import React from "react";
import Buttons from "./Buttons";

const TodoItem = ({
  curValue,
  index,
  handleEdit,
  handleCompleted,
  handleDlt,
}) => {
  const checked = curValue.completed;
  return (
    <div className="">
      <input
        type="checkbox"
        className=""
        checked={checked}
        onChange={() => handleCompleted(index)}
      />
      <p className={curValue.completed ? "markdone" : "none"}>
        {curValue.todo}
      </p>
      <div className="row">
      <Buttons onClick={() => handleDlt(index)}>Delete</Buttons>
      <Buttons onClick={() => handleEdit(index)}>Edit</Buttons>
      </div>
    </div>
  );
};

export default TodoItem;
