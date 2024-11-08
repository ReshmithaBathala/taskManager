import React, { useState } from 'react';
import CategorySlider from './components/CategorySlider';
import TaskForm from './components/TaskForm';
import './App.css';

const initialTasks = [
  { id: 1, title: 'Brainstorming', description: 'Brainstorming brings team members diverse experience into play.', priority: 'Low', deadline: '2024-12-05', category: 'To Do' },
  { id: 2, title: 'Research', description: 'User research helps you to create an optimal product for users.', priority: 'High', deadline: '2024-12-05', category: 'To Do' },
  { id: 3, title: 'Onboarding Illustrations', description: 'Creating illustrations for onboarding screens.', priority: 'Low', deadline: '2024-12-05', category: 'On Progress' },
  { id: 4, title: 'Moodboard', description: 'Gathering moodboard materials.', priority: 'Low', deadline: '2024-12-05', category: 'On Progress' },
  { id: 5, title: 'Mobile App Design', description: 'Designing the mobile app UI.', priority: 'Completed', deadline: '2024-12-05', category: 'Done' },
  { id: 6, title: 'Design System', description: 'Adapting the UI design system.', priority: 'Completed', deadline: '2024-12-05', category: 'Done' },
  { id: 7, title: 'Wireframes', description: 'Creating low-fidelity wireframes.', priority: 'High', deadline: '2024-12-05', category: 'Timeout' }
];

function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchTerm, setSearchTerm] = useState(''); // New state for search term
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addTask = (task) => {
    setTasks([...tasks, { ...task, id: tasks.length + 1 }]);
    setIsModalOpen(false);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  // Filter tasks based on selected category and search term
  const filteredTasks = tasks.filter(task =>
    (selectedCategory === '' || task.category === selectedCategory) &&
    task.title.toLowerCase().includes(searchTerm)
  );

  const expiredTasksCount = tasks.filter(task => task.category === 'Timeout').length;
  const activeTasksCount = tasks.filter(task => ['To Do', 'On Progress', 'Done'].includes(task.category)).length;
  const completedTasksCount = tasks.filter(task => task.category === 'Done').length;

  return (
    <div className="app">
      <div className="navbar">
        <div className="search-bar">
          <img src="https://res.cloudinary.com/dt9mfzwqh/image/upload/v1724690232/Group_5_mzwaib.png" className="search-icon" alt="search icon" />
          <input
            type="text"
            placeholder="Search Project"
            className="input"
            value={searchTerm}
            onChange={handleSearchChange} // Handle search input change
          />
        </div>
        <select className="filter-btn" onChange={handleCategoryChange}>
          {['All', 'To Do', 'On Progress', 'Done', 'Timeout'].map(category => (
            <option key={category} value={category === 'All' ? '' : category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div className="content">
        <div className="sidebar">
          <div className="stats">
            <div className="stat">
              <img src="https://res.cloudinary.com/dt9mfzwqh/image/upload/v1724690757/Frame_1171275857_pfy7fm.png" className="stat-img" alt="stat" />
              <p className="stat-heading">Expired Tasks</p>
              <p className='stat-value'>{expiredTasksCount}</p>
            </div>
            <div className="stat">
              <img src="https://res.cloudinary.com/dxsi3qcvy/image/upload/v1724736063/Frame_1171275856_udcsez.png" className="stat-img" alt="stat" />
              <p className="stat-heading">Active Tasks</p>
              <p className='stat-value'>{activeTasksCount}</p>
            </div>
            <div className="stat">
              <img src="https://res.cloudinary.com/dxsi3qcvy/image/upload/v1724736085/Frame_1171275859_xbloy4.png" className="stat-img" alt="stat" />
              <p className="stat-heading">Completed Tasks</p>
              <p className='stat-value'>{completedTasksCount}/{activeTasksCount}</p>
            </div>
          </div>
          <button className="add-task-btn" onClick={() => setIsModalOpen(true)}>+Add Task</button>
        </div>
        <div className="main-content">
          <CategorySlider tasks={filteredTasks} />
        </div>
      </div>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setIsModalOpen(false)}>&times;</span>
            <TaskForm addTask={addTask} />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
