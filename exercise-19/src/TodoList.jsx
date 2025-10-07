import React, { useContext } from "react";
import TodoContext from "./TodoContext";
import { TodoItem } from "./TodoItem";
import Styles from './styles/TodoList.module.css'
const TodoList = () => {
  const { state } = useContext(TodoContext);
  return (
    <div className={Styles.Items}>
      {state.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
