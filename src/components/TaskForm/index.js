import React, { useState } from "react";
import "./index.css";

const TaskForm = ({ addTask }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("Low");
  const [deadline, setDeadline] = useState("");
  const [category, setCategory] = useState("To Do");

  const saveTask = (task) => {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || []; // Retrieve existing tasks
    tasks.push(task); // Add new task
    localStorage.setItem("tasks", JSON.stringify(tasks)); // Save updated tasks in local storage
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: Date.now(), // or use a more robust ID generator
      title,
      description,
      priority,
      deadline,
      category,
    };
    saveTask(newTask); // Save the task to local storage
    addTask(newTask);
    setTitle("");
    setDescription("");
    setPriority("Low");
    setDeadline("");
    setCategory("To Do");
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <div className="add-task-header">
        <div className="dot-head">
          <span className="dot" style={{ backgroundColor: "#20E7F4" }}></span>
          <h2 className="form-heading">ADD TASK</h2>
        </div>
        <div>
          <button type="submit" className="plus-btn">
            +
          </button>
        </div>
      </div>
      <div className="all-inputs-container">
        <input
          type="text"
          placeholder="Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="task-title-input"
        />
        <hr className="line" />
        <textarea
          placeholder="Task Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          className="task-description-styles"
        />
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="priority-input"
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
        <input
          type="date"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
          required
          className="date-input"
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="category-input"
        >
          <option value="To Do">To Do</option>
          <option value="On Progress">On Progress</option>
          <option value="Done">Done</option>
          <option value="Timeout">Timeout</option>
        </select>
      </div>
    </form>
  );
};

export default TaskForm;
