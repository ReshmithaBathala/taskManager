import React from "react";
import "./index.css";

const CategorySlider = ({ tasks }) => {
  const categories = ["To Do", "On Progress", "Done", "Timeout"];

  const getCategoryColor = (category) => {
    switch (category) {
      case "To Do":
        return "#5030E5";
      case "On Progress":
        return "#FFC107";
      case "Done":
        return "#68B266";
      case "Timeout":
        return "#F44336";
      default:
        return "#FFFFFF";
    }
  };

  const getPriorityStyle = (priority) => {
    switch (priority.toLowerCase()) {
      case "low":
        return { backgroundColor: "#ECD1B2", color: "#D58D49" };
      case "high":
        return { backgroundColor: "#FFA3A3", color: "#D8727D" };
      case "medium":
        return { backgroundColor: "#5bb4d2", color: "#2596be" };
      case "completed":
        return { backgroundColor: "#94CD92", color: "#68B266" };
      default:
        return {};
    }
  };

  return (
    <div className="category-slider">
      {categories.map((category) => {
        const taskCount = tasks.filter(
          (task) => task.category === category
        ).length;

        return (
          <div key={category} className="category-column">
            <div className="category-heading">
              <span
                className="category-dot"
                style={{ backgroundColor: getCategoryColor(category) }}
              ></span>
              <h1 className="task-category">{category}</h1>
              <p className="task-count">{taskCount}</p>
            </div>
            <hr
              className="line"
              style={{ borderColor: getCategoryColor(category) }}
            />
            <div className="task-list">
              {tasks
                .filter((task) => task.category === category)
                .map((task) => (
                  <div key={task.id} className="task-card">
                    <div className="task-header">
                      <p
                        className="task-priority"
                        style={getPriorityStyle(task.priority)}
                      >
                        {task.priority}
                      </p>
                      <p className="three-dots">. . .</p>
                    </div>
                    <div className="task-body">
                      <h3 className="task-title">{task.title}</h3>
                      <p className="task-description">{task.description}</p>
                      <p className="task-deadline">
                        <span className="deadline-span">Deadline: </span>
                        {task.deadline}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CategorySlider;
