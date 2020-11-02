// Overview.js

import React from "react";
import uniqid from "uniqid";
import "../components/Overview.css"

const Overview = (props) => {
  const { tasks } = props;

  return (
    <ul>
      {tasks.map((task) => {
        return <li key={uniqid()}> {task.id}{task} <space></space>
        <button class="btn-danger">Delete
        </button>
        <button class="btn-info">Edit
        </button>
        </li>;
      })}
    </ul>
  );
};

export default Overview;