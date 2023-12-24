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
          className="checkbox me-2"
          checked={checked}
          onChange={() => handleCompleted(index)}
        />
        <p className={curValue.completed ? "markdone" : "checkbox"}>
          {curValue.todo}
        </p>
      </div>
      <div className="col-3">
        <Buttons
          className="btn btn-primary mybtn mb-2"
          onClick={() => handleDlt(index)}
        >
          <i class="fa-solid fa-xmark me-1"></i>
          Delete
        </Buttons>
        <Buttons
          className="btn btn-primary mybtn ms-3 mb-lg-3 mb-2"
          onClick={() => handleEdit(index)}
        >
          <i class="fa-solid fa-pen fa-sm me-2"></i>
          Edit
        </Buttons>
      </div>
    </div>
  );
};

export default TodoItem;
