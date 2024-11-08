// src/components/TaskItem.js
import React from "react";
import "./index.css";

const TaskItem = ({ task }) => {
  return (
    <div className={`task-item ${task.priority.toLowerCase()}`}>
      <div className="task-header">
        <span className="task-priority">{task.priority}</span>
        <span className="task-deadline">Deadline: {task.deadline}</span>
      </div>
      <h4 className="task-title">{task.title}</h4>
      <p className="task-description">{task.description}</p>
    </div>
  );
};

export default TaskItem;
