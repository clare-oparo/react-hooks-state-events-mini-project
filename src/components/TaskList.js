import React from "react";
import Task from './Task'

function TaskList({ tasks, onDeleteTask }) {
  return (
    <div className="tasks">
      {tasks.map((task, index) => (
        <Task key={task.id || index} details={task} onDelete={() => onDeleteTask(task.id)} />
      ))}
    </div>
  );
}

export default TaskList;
