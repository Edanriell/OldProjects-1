import React from "react";

const Todo = ({ task, removeTodo }) => (
  <li className="rounded bg-white px-4 py-3 mb-2 shadow-sm d-flex justify-content-between">
    {task}
    <button onClick={removeTodo} className="btn btn-outline-danger mr-2">Delete</button>
  </li>
);

export default Todo;
