// Overview.js

import React from "react";
import uniqid from "uniqid";

const Overview = (props) => {
  const { tasks } = props;

  return (
    <ul>
        <p>{uniqid()}</p>
      {tasks.map((task) => {
        return <li key={uniqid()}>{task} <br></br>
        <button class="btn-danger">Delete
        </button>
        </li>;
      })}
    </ul>
  );
};

export default Overview;