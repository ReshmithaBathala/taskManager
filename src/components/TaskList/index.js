// src/components/TaskList.js
import React from "react";
import TaskItem from "../TaskItem";
import "./index.css";

const TaskList = ({ tasks, title }) => {
  return (
    <div className="task-list">
      <h2>{title}</h2>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
