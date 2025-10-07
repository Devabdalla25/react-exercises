import { useContext, useState } from "react";
import TodoContext from "./TodoContext";
import styles from './styles/TodoForm.module.css'
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
    <div className={styles.containerForm}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="New A Todo..."className={styles.task}
      />
      <button type="button" onClick={HandleAdd} className={styles.formbutton}>
        Add
      </button>
    </div>
  );
};
