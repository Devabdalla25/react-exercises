import { useContext, useState } from "react";
import TodoContext from "./TodoContext";

export const TodoForm = () => {
  const [text, setText] = useState("");
  const { dispatch } = useContext(TodoContext);

  const HandleAdd = () => {
    if (text.trim()) {
      const newTodo = {
        id: Date.now(),
        text,
        completed: false,
      };
      dispatch({ type: "ADD", payload: newTodo });
      setText("");
    }
  };
  return (
    <div className="flex justify-center items-center gap-5">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="New A Todo..."
        className="rounded-md border-0 w-96 bg-gray-100 p-4 outline-none"
      />
      <button
        type="button"
        onClick={HandleAdd}
        className="rounded-md border-0  bg-purple-600 text-white p-4 w-24 outline-none"
      >
        Add
      </button>
    </div>
  );
};
