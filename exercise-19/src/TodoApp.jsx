import React, { useReducer } from "react";
import TodoContext from "./TodoContext";
import { InialState, reducer } from "./reducer";
import TodoList from "./TodoList";
import {TodoForm} from "./TodoForm";
import styles from './styles/App.module.css'
const TodoApp = () => {
  const [state, dispatch] = useReducer(reducer, InialState);
  return (
    <TodoContext.Provider value={{ state, dispatch }}>
        <div className={styles.AppInfo}>
            <h2> My Todo List</h2>
            <TodoForm />
            <TodoList />
        </div>
    </TodoContext.Provider>

  );
};

export default TodoApp;
