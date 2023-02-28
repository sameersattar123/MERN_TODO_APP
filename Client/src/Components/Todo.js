import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ToggleTodo , updateTodo , deleteTodo } from "../redux/Actions";

const Todo = ({ todo }) => {
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(todo.data);
  const dispatch = useDispatch();

  const onFormSubmit = (e) => {
    e.preventDefault()

    setEditing(state => !state);

    dispatch(updateTodo(todo._id , text))
  }

  return (
    <>
      <li
        className="task"
        onClick={() => dispatch(ToggleTodo(todo._id))}
        style={{
          textDecoration: todo?.done ? "line-through" : "",
          color: todo?.done ? "#bdc3c7" : "#34495e",
        }}
        data-testid="todo-test"
      >
        <span style={{ display: editing ? "none" : "" }}>{todo.data}</span>
        <form action="" style={{ display: editing ? "inline" : "none" }} onSubmit={onFormSubmit} >
          <input
            value={text}
            type="text"
            onChange={(e) => setText(e.target.value)}
            className="edit-todo"
          />
        </form>

        <span className="icon" onClick={() => dispatch(deleteTodo(todo._id))}>
          <i className="fas fa-trash" />
        </span>
        <span className="icon"  onClick={() => setEditing((state) => !state)}>
          <i
            className="fas fa-pen"
          />
        </span>
      </li>
    </>
  );
};

export default Todo;
