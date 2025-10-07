import React, { useContext } from "react";
import TodoContext from "./TodoContext";
import styles from './styles/TodoItem.module.css'

export const TodoItem = ({ todo }) => {
  const { dispatch } = useContext(TodoContext);
  return (
    <div className={styles.Item} >
      <div className={styles.left}>  <input type="checkbox"   onClick={() => dispatch({ type: "TOGGLE", payload: todo.id })} className={todo.completed ?'checked':styles.checkBox} />
      <span
        className={todo.completed ?styles.taskcomplete:styles.des}
      >
        {todo.text}
      </span></div>
      <button onClick={() => dispatch({ type: "DELETE", payload: todo.id })} className={todo.completed ?styles.active:styles.inactive} >
        DELETE
      </button>
    </div>
  );
};
