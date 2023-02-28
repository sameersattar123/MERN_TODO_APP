import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTodos } from "../redux/Actions";
import Todo from "./Todo";

const Todos = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTodos());
  },[]);

  const todos = useSelector((state) => state.todo);
  return (
    <>
      <article>
        <ul>
          {todos.map(todo => (
            <Todo todo={todo} key={todo._id} />
          ))}
        </ul>
      </article>
    </>
  );
};

export default Todos;
