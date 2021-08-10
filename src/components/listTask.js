import React from "react";

const ListTasks = ({ list: { id, description, isDone = false } }) => {
  return (
    <div>
      <div>
        <h2> ID : {id} </h2>
      </div>
      <div>
        <h4>Description: {description}</h4>
      </div>
      <div>
        <h4>Status: {isDone ? `Done!` : `not`}</h4>
      </div>
    </div>
  );
};

export default ListTasks;
