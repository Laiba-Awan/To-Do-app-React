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
      <div className="col-8">
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
        <div className="col-2">
          <Buttons
            className="btn btn-primary mybtn"
            onClick={() => handleDlt(index)}
          >
            Delete
          </Buttons>
        </div>
        <div className="col-2">
          <Buttons
            className="btn btn-primary mybtn"
            onClick={() => handleEdit(index)}
          >
            Edit
          </Buttons>
        </div>
      </div>

  );
};

export default TodoItem;
