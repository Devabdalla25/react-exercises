import React, { useContext } from "react";
import TodoContext from "./TodoContext";

export const TodoItem = ({ todo }) => {
  const { dispatch } = useContext(TodoContext);
  return (
    <div className=" flex bg-gray-100 text-black w-lg rounded-lg justify-between items-center p-5 m-5">
      <div className="flex gap-5 justify-center items-center">
        {" "}
        <input
          type="checkbox"
          value={todo.completed}
          onClick={() => dispatch({ type: "TOGGLE", payload: todo.id })}
          className="cursor-pointer accent-blue-500"
        />
        <span className={todo.completed ? "line-through text-gray-400" : ""}>
          {todo.text}
        </span>
      </div>
      <button
        onClick={() => dispatch({ type: "DELETE", payload: todo.id })}
        className={todo.completed ? " text-red-500" : "hidden"}
      >
        DELETE
      </button>
    </div>
  );
};
