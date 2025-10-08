import React, { useReducer } from "react";
import TodoContext from "./TodoContext";
import { InialState, reducer } from "./reducer";
import TodoList from "./TodoList";
import { TodoForm } from "./TodoForm";

const TodoApp = () => {
  const [state, dispatch] = useReducer(reducer, InialState);
  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      <div className="flex flex-col items-center bg-purple-200 w-full h-screen">
        <div className="bg-white rounded-lg m-10 w-2xl items-center flex flex-col p-10 gap-10">
          <h2 className="font-bold font-serif text-3xl mt-2"> My Todo List</h2>
          <TodoForm />
          <TodoList />
        </div>
      </div>
    </TodoContext.Provider>
  );
};

export default TodoApp;
