import React from "react";

function Task({details,onDelete}) {
  return (
    <div className="task">
      <div className="label">{details.category}</div>
      <div className="text">{details.text}</div>
      <button className="delete" onClick={() => onDelete(details.id)}>X</button>
      
      
    </div>
  );
}

export default Task;
