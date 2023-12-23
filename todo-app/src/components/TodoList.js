import React from "react";
import Header from "./Header";
import Input from "./Input";
import TodoItem from "./TodoItem"

const TodoList = () => {
  return (
    <div>
       <Header />
      <Input />
      <TodoItem />
    </div>
  )
};

export default TodoList;
