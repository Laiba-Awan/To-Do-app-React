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
    <div className="row">
      <div className="col-6">
        <input
          type="checkbox"
          className=""
          checked={checked}
          onChange={() => handleCompleted(index)}
        />
        <p className={curValue.completed ? "markdone" : "none"}>
          {curValue.todo}
        </p>
      </div>
      <div className="col-3">
        <Buttons
          className="btn btn-primary mybtn mb-2"
          onClick={() => handleDlt(index)}
        >
          Delete
        </Buttons>
        <Buttons
          className="btn btn-primary mybtn ms-3 mb-lg-3 mb-2"
          onClick={() => handleEdit(index)}
        >
          Edit
        </Buttons>
      </div>
    </div>
  );
};

export default TodoItem;
